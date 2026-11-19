"""
lam_sach_du_lieu.py
===================
Mã nguồn thực hiện quy trình làm sạch dữ liệu (đồng bộ với clean_data.ipynb)
từ tệp 'Data/raw/Du lieu khong sach.csv' và kiểm toán chất lượng trước - sau
trên tệp chuẩn 'Data/processed/PJ21.csv', xuất báo cáo đối chiếu ra
'outputs/Bao_cao_lam_sach_du_lieu.csv'.

Lưu ý kiểm toán:
- Tính thực tế số lỗi Thiếu, Sai định dạng và Ngoài miền cả TRƯỚC và SAU xử lý
  bằng hàm kiểm tra trên từng ô, không gán trực tiếp lỗi sau xử lý bằng 0.
- Phân biệt rõ Tổng lượt lỗi (một ô có thể vừa sai định dạng vừa ngoài miền)
  với Số ô lỗi duy nhất.
- Phân biệt rõ số ô lỗi biến mất do loại 10.788 dòng thiếu nhãn Satisfaction
  với số ô lỗi thực sự được sửa/điền khuyết trên 119.092 dòng giữ lại.
- Không thay đổi logic làm sạch và không ghi đè PJ21.csv khi tệp đã tồn tại
  và khớp mã băm kiểm chứng.
"""

import sys
import re
import hashlib
from pathlib import Path
import pandas as pd
import numpy as np

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

# ── Đường dẫn tương đối theo thư mục gốc project ──────────────────
THU_MUC_HIEN_TAI = Path(__file__).resolve().parent
ROOT_DIR = THU_MUC_HIEN_TAI.parents[1]
INPUT_FILE = ROOT_DIR / "Data" / "raw" / "Du lieu khong sach.csv"
OUTPUT_FILE = ROOT_DIR / "Data" / "processed" / "PJ21.csv"
REPORT_FILE = ROOT_DIR / "outputs" / "Bao_cao_lam_sach_du_lieu.csv"

# ── Danh sách cột ─────────────────────────────────────────────────
CAT_COLS = ["Gender", "Customer Type", "Type of Travel", "Class", "Satisfaction"]

NUM_COLS = [
    "Age", "Flight Distance", "Departure Delay", "Arrival Delay",
    "Departure and Arrival Time Convenience", "Ease of Online Booking",
    "Check-in Service", "Online Boarding", "Gate Location",
    "On-board Service", "Seat Comfort", "Leg Room Service",
    "Cleanliness", "Food and Drink", "In-flight Service",
    "In-flight Wifi Service", "In-flight Entertainment", "Baggage Handling"
]

RATING_COLS = NUM_COLS[4:]   # 14 cột rating [0,5]

# ── Token thiếu cần nhận diện ─────────────────────────────────────
MISSING_TOKENS = {"nan", "none", "null", "n/a", "?", "-", "unknown", "chưa rõ", ""}

# ── Giới hạn hợp lệ theo quy tắc đang áp dụng ─────────────────────
BOUNDS = {
    "Age":             (0, 100),
    "Flight Distance": (0, 9999),
    "Departure Delay": (0, 2000),
    "Arrival Delay":   (0, 2000),
}
for rc in RATING_COLS:
    BOUNDS[rc] = (0, 5)

# ── Bảng ánh xạ chuẩn hoá phân loại ──────────────────────────────
GENDER_MAP = {"male": "Male", "female": "Female"}

CUSTOMER_TYPE_MAP = {
    "first-time": "First-time Customer",
    "first time": "First-time Customer",
    "first-time customer": "First-time Customer",
    "returning": "Returning Customer",
    "returnin": "Returning Customer",
    "returning customer": "Returning Customer",
}

TRAVEL_TYPE_MAP = {
    "business": "Business Travel",
    "busine": "Business Travel",
    "business travel": "Business Travel",
    "personal": "Personal Travel",
    "person": "Personal Travel",
    "personal travel": "Personal Travel",
}

CLASS_MAP = {
    "business": "Business",
    "economy": "Economy",
    "economy plus": "Economy Plus",
    "economy pl": "Economy Plus",
    "economy+": "Economy Plus",
}

SATISFACTION_MAP = {
    "satisfied": "Satisfied",
    "neutral or dissatisfied": "Neutral or Dissatisfied",
    "neutral or dissatisfi": "Neutral or Dissatisfied",
    "dissatisfied": "Neutral or Dissatisfied",
    "neutral": "Neutral or Dissatisfied",
}

ALL_MAPS = {
    "Gender": GENDER_MAP,
    "Customer Type": CUSTOMER_TYPE_MAP,
    "Type of Travel": TRAVEL_TYPE_MAP,
    "Class": CLASS_MAP,
    "Satisfaction": SATISFACTION_MAP,
}

# Tập giá trị phân loại viết đúng chuẩn định dạng trước và sau xử lý
VALID_CAT_BEFORE = {
    "Gender": {"Male", "Female"},
    "Customer Type": {"First-time", "Returning", "First-time Customer", "Returning Customer"},
    "Type of Travel": {"Business", "Personal", "Business Travel", "Personal Travel"},
    "Class": {"Business", "Economy", "Economy Plus"},
    "Satisfaction": {"Satisfied", "Neutral or Dissatisfied"},
}

VALID_CAT_AFTER = {
    "Gender": {"Male", "Female"},
    "Customer Type": {"First-time Customer", "Returning Customer", "Unknown"},
    "Type of Travel": {"Business Travel", "Personal Travel", "Unknown"},
    "Class": {"Business", "Economy", "Economy Plus"},
    "Satisfaction": {"Satisfied", "Neutral or Dissatisfied"},
}

# ── Regex patterns ─────────────────────────────────────────────────
UNIT_PATTERN = re.compile(r"(?i)\b(usd|vnd|kg|%|đ)\b", re.UNICODE)
NUMBER_PATTERN = re.compile(r"[-+]?\d*\.?\d+")
INT_STR_PATTERN = re.compile(r"^[-+]?\d+$")


def is_missing_str(val) -> bool:
    """Trả về True nếu val là NaN thực hoặc chuỗi thiếu."""
    if pd.isna(val):
        return True
    return str(val).strip().lower() in MISSING_TOKENS


def extract_number(val):
    """Trích xuất số đầu tiên trong chuỗi; trả về np.nan nếu không tìm thấy."""
    s = str(val).strip()
    if s.lower() in MISSING_TOKENS:
        return np.nan
    m = NUMBER_PATTERN.search(s)
    return float(m.group()) if m else np.nan


def normalize_cat(val, mapping: dict):
    """Chuẩn hoá giá trị phân loại theo bảng ánh xạ (hỗ trợ chuỗi bị cắt cụt)."""
    if is_missing_str(val):
        return np.nan
    cleaned = str(val).strip().lower()
    if cleaned in mapping:
        return mapping[cleaned]
    for key, std in mapping.items():
        if cleaned.startswith(key) or key.startswith(cleaned):
            return std
    return np.nan


def kiem_toan_tung_o(df_in: pd.DataFrame, la_sau_xu_ly: bool = False) -> dict:
    """
    Kiểm tra thực tế trên từng ô của mọi cột, trả về dict:
    col -> (miss_mask, fmt_mask, out_mask).
    Không gán cứng kết quả bằng 0.
    """
    ket_qua = {}
    for col in df_in.columns:
        s = df_in[col]
        s_str = s.fillna("").astype(str)
        st = s_str.str.strip()
        low = st.str.lower()

        if col == "ID":
            miss_m = s.isna() | low.isin(MISSING_TOKENS)
            num = pd.to_numeric(st, errors="coerce")
            fmt_m = (~miss_m) & ((s_str != st) | (~st.str.match(INT_STR_PATTERN)))
            out_m = (~miss_m) & (num.isna() | (num <= 0) | num.duplicated(keep=False))
            ket_qua[col] = (miss_m, fmt_m, out_m)
            continue

        # Sau xử lý, 'Unknown' là nhãn danh mục được gán tường minh cho Customer Type & Type of Travel
        if la_sau_xu_ly and col in ("Customer Type", "Type of Travel"):
            token_thieu = MISSING_TOKENS - {"unknown"}
        else:
            token_thieu = MISSING_TOKENS
        miss_m = s.isna() | low.isin(token_thieu)

        if col in CAT_COLS:
            tap_hop_le = VALID_CAT_AFTER[col] if la_sau_xu_ly else VALID_CAT_BEFORE[col]
            fmt_m = (~miss_m) & (~s_str.isin(tap_hop_le))
            out_m = pd.Series(False, index=df_in.index)
        else:
            has_unit = st.map(lambda x: bool(UNIT_PATTERN.search(x)))
            not_int_str = ~st.str.match(INT_STR_PATTERN)
            fmt_m = (~miss_m) & ((s_str != st) | has_unit | not_int_str)

            num = st.map(lambda x: float(NUMBER_PATTERN.search(x).group()) if NUMBER_PATTERN.search(x) else np.nan)
            lo, hi = BOUNDS[col]
            if col in ("Departure Delay", "Arrival Delay"):
                out_m = (~miss_m) & (num.isna() | (num < 0) | (num > hi))
            elif col == "Age":
                out_m = (~miss_m) & (num.isna() | (num <= lo) | (num > hi))
            elif col == "Flight Distance":
                out_m = (~miss_m) & (num.isna() | (num <= lo) | (num >= hi))
            else:
                out_m = (~miss_m) & (num.isna() | (num < lo) | (num > hi))

        ket_qua[col] = (miss_m, fmt_m, out_m)
    return ket_qua


def chay_lam_sach():
    print("=" * 75)
    print("QUY TRÌNH LÀM SẠCH & KIỂM TOÁN DỮ LIỆU AIRLINE PASSENGER SATISFACTION")
    print("=" * 75)

    df_raw = pd.read_csv(INPUT_FILE, dtype={"ID": str})
    df_raw = df_raw.loc[:, ~df_raw.columns.str.match(r"^Unnamed")]
    df_raw.columns = df_raw.columns.str.strip()
    df = df_raw.copy()

    print(f"File đầu vào : {INPUT_FILE.relative_to(ROOT_DIR)}")
    print(f"Kích thước   : {len(df):,} dòng × {len(df.columns)} cột")

    # 1. Chuẩn hoá 5 cột phân loại (giữ nguyên 100% logic làm sạch)
    for col, mapping in ALL_MAPS.items():
        uniq_map = {u: normalize_cat(u, mapping) for u in df[col].dropna().unique()}
        df[col] = df[col].map(uniq_map)

    # 2. Trích xuất số + loại ngoại lai ngoài BOUNDS -> NaN
    for col in NUM_COLS:
        uniq_num_map = {u: extract_number(u) for u in df[col].dropna().unique()}
        df[col] = df[col].map(uniq_num_map)
        if col in BOUNDS:
            lo, hi = BOUNDS[col]
            if col in ("Departure Delay", "Arrival Delay"):
                mask = (df[col] < 0) | (df[col] > hi)
            elif col == "Age":
                mask = (df[col] <= lo) | (df[col] > hi)
            elif col == "Flight Distance":
                mask = (df[col] <= lo) | (df[col] >= hi)
            else:
                mask = (df[col] < lo) | (df[col] > hi)
            df.loc[mask, col] = np.nan

    # 3. Xoá dòng thiếu biến mục tiêu Satisfaction
    before_drop = len(df)
    df = df[df["Satisfaction"].notna()].copy()
    dropped = before_drop - len(df)
    print(f"Loại dòng thiếu Satisfaction: {dropped:,} dòng -> Còn lại: {len(df):,} dòng")

    # 4. Điền khuyết và làm sạch khoảng trắng
    for col in ["Gender", "Class"]:
        df[col] = df[col].fillna(df[col].mode()[0])
    for col in ["Customer Type", "Type of Travel"]:
        df[col] = df[col].fillna("Unknown")
    for col in NUM_COLS:
        df[col] = df[col].fillna(df[col].median()).round(0).astype("int64")

    df["ID"] = df["ID"].astype(str).str.strip().astype("int64")
    text_cols = df.select_dtypes(include=["object", "string"]).columns
    for col in text_cols:
        df[col] = df[col].astype(str).str.strip().str.replace(r"\s+", " ", regex=True)

    # 5. Kiểm chứng với PJ21.csv hiện có (không ghi đè nếu đã tồn tại và khớp)
    if OUTPUT_FILE.exists():
        df_existing = pd.read_csv(OUTPUT_FILE)
        pd.testing.assert_frame_equal(df.reset_index(drop=True), df_existing.reset_index(drop=True))
        print(f"Kiểm chứng tái lập: Khớp 100% với {OUTPUT_FILE.relative_to(ROOT_DIR)} (giữ nguyên file gốc, không ghi đè).")
    else:
        OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
        df.to_csv(OUTPUT_FILE, index=False, encoding="utf-8-sig")
        print(f"Đã lưu dữ liệu sạch -> {OUTPUT_FILE.relative_to(ROOT_DIR)}")

    # 6. Kiểm toán thực tế lỗi TRƯỚC và SAU xử lý (gắn theo khóa ID)
    co_truoc = kiem_toan_tung_o(df_raw, la_sau_xu_ly=False)
    co_sau = kiem_toan_tung_o(df, la_sau_xu_ly=True)

    raw_id_int = df_raw["ID"].astype(str).str.strip().astype("int64")
    kept_mask = raw_id_int.isin(set(df["ID"]))

    report_rows = []
    for col in df_raw.columns:
        mb, fmtb, outb = co_truoc[col]
        anyb = mb | fmtb | outb
        overlap_b = fmtb & outb

        ma, fmta, outa = co_sau[col]
        anya = ma | fmta | outa

        occ_before = int(mb.sum() + fmtb.sum() + outb.sum())
        uniq_before = int(anyb.sum())
        uniq_dropped = int(anyb[~kept_mask].sum())
        uniq_fixed_kept = int(anyb[kept_mask].sum())

        occ_after = int(ma.sum() + fmta.sum() + outa.sum())
        uniq_after = int(anya.sum())

        report_rows.append({
            "Cột": col,
            "Thiếu (trước)": int(mb.sum()),
            "Sai định dạng (trước)": int(fmtb.sum()),
            "Ngoài miền (trước)": int(outb.sum()),
            "Ô trùng 2 lỗi (ĐD & NM)": int(overlap_b.sum()),
            "Tổng lượt lỗi (trước)": occ_before,
            "Số ô lỗi duy nhất (trước)": uniq_before,
            "Ô lỗi biến mất do loại dòng (10.788 dòng)": uniq_dropped,
            "Ô lỗi được sửa trên dòng giữ lại (119.092 dòng)": uniq_fixed_kept,
            "Thiếu (sau)": int(ma.sum()),
            "Sai định dạng (sau)": int(fmta.sum()),
            "Ngoài miền (sau)": int(outa.sum()),
            "Tổng lượt lỗi (sau)": occ_after,
            "Số ô lỗi duy nhất (sau)": uniq_after,
        })

    df_report = pd.DataFrame(report_rows)
    REPORT_FILE.parent.mkdir(parents=True, exist_ok=True)
    df_report.to_csv(REPORT_FILE, index=False, encoding="utf-8-sig")

    print(f"Đã lưu báo cáo kiểm toán lỗi -> {REPORT_FILE.relative_to(ROOT_DIR)}")
    print(f"  • Tổng lượt lỗi trước (129.880 dòng)         : {df_report['Tổng lượt lỗi (trước)'].sum():,}")
    print(f"  • Số ô lỗi duy nhất trước (129.880 dòng)     : {df_report['Số ô lỗi duy nhất (trước)'].sum():,}")
    print(f"  • Ô lỗi biến mất do loại 10.788 dòng         : {df_report['Ô lỗi biến mất do loại dòng (10.788 dòng)'].sum():,}")
    print(f"  • Ô lỗi được sửa trên 119.092 dòng giữ lại   : {df_report['Ô lỗi được sửa trên dòng giữ lại (119.092 dòng)'].sum():,}")
    print(f"  • Số ô lỗi duy nhất sau xử lý (tính thực tế) : {df_report['Số ô lỗi duy nhất (sau)'].sum():,}")
    print("=" * 75)


if __name__ == "__main__":
    chay_lam_sach()
