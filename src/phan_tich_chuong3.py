"""Reproduce Chapter 3 analysis from local raw data and cleaned Data/processed/PJ21.csv.

Run from project root: python src/phan_tich_chuong3.py
Never modifies raw, original, or PJ21.csv inputs.
"""
from pathlib import Path
import hashlib
import json
import re
import sqlite3
import platform
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.stats import chi2_contingency, mannwhitneyu

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "outputs" / "chuong3"
FIG = ROOT / "figures" / "chuong3"
OUT.mkdir(parents=True, exist_ok=True)
FIG.mkdir(parents=True, exist_ok=True)

RAW = ROOT / "Data" / "raw" / "Du lieu khong sach.csv"
CLEAN = ROOT / "Data" / "processed" / "PJ21.csv"


def digest(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()


hashes_before = {str(p.relative_to(ROOT)): digest(p) for p in [RAW, CLEAN]}

# 1. Đọc dữ liệu bẩn (129.880 dòng) và dữ liệu sạch chuẩn PJ21.csv (119.092 dòng)
raw = pd.read_csv(RAW, dtype=str)
raw.columns = raw.columns.str.strip()
df = pd.read_csv(CLEAN)

# 2. Kiểm tra khóa ID và ghép nối theo ID (không giả định cùng số dòng hay thứ tự)
raw_id_str = raw["ID"].fillna("").astype(str).str.strip()
assert raw_id_str.str.match(r"^\d+$").all(), "ID trong raw chứa ký tự không phải số nguyên dương"
raw["ID_int"] = raw_id_str.astype("int64")

assert raw["ID_int"].is_unique, "ID trong raw bị trùng lặp"
assert df["ID"].is_unique, "ID trong PJ21.csv bị trùng lặp"
assert set(df["ID"]).issubset(set(raw["ID_int"])), "Có ID trong PJ21.csv không tồn tại trong raw"

# Ghép one_to_one theo khóa ID để đối chiếu từng bản ghi giữ lại (119.092 dòng)
raw_kept = (
    df[["ID"]]
    .merge(raw.rename(columns={"ID": "ID_raw_str"}), left_on="ID", right_on="ID_int", how="left", validate="one_to_one")
    .drop(columns=["ID_int"])
)
assert len(raw_kept) == len(df) and np.array_equal(raw_kept["ID"].values, df["ID"].values)

kept_mask_in_raw = raw["ID_int"].isin(set(df["ID"]))
rows_raw = len(raw)
rows_clean = len(df)
rows_dropped = rows_raw - rows_clean
assert rows_dropped == int((~kept_mask_in_raw).sum())

CAT_COLS = ["Gender", "Customer Type", "Type of Travel", "Class", "Satisfaction"]
NUM_COLS = [
    "Age", "Flight Distance", "Departure Delay", "Arrival Delay",
    "Departure and Arrival Time Convenience", "Ease of Online Booking",
    "Check-in Service", "Online Boarding", "Gate Location",
    "On-board Service", "Seat Comfort", "Leg Room Service",
    "Cleanliness", "Food and Drink", "In-flight Service",
    "In-flight Wifi Service", "In-flight Entertainment", "Baggage Handling"
]
SERVICE_COLS = NUM_COLS[4:]
METRIC_COLS = NUM_COLS[:4]

MISSING_TOKENS = {"nan", "none", "null", "n/a", "?", "-", "unknown", "chưa rõ", ""}
BOUNDS = {
    "Age":             (0, 100),
    "Flight Distance": (0, 9999),
    "Departure Delay": (0, 2000),
    "Arrival Delay":   (0, 2000),
}
for rc in SERVICE_COLS:
    BOUNDS[rc] = (0, 5)

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

UNIT_PATTERN = re.compile(r"(?i)\b(usd|vnd|kg|%|đ)\b", re.UNICODE)
NUMBER_PATTERN = re.compile(r"[-+]?\d*\.?\d+")
INT_STR_PATTERN = re.compile(r"^[-+]?\d+$")


def audit_cells(df_in: pd.DataFrame, cols: list, is_after: bool = False) -> dict:
    """Tính thực tế lỗi Thiếu, Sai định dạng và Ngoài miền trên từng ô."""
    out_dict = {}
    for col in cols:
        s = df_in[col]
        s_str = s.fillna("").astype(str)
        st = s_str.str.strip()
        low = st.str.lower()

        if col == "ID":
            miss_m = s.isna() | low.isin(MISSING_TOKENS)
            num = pd.to_numeric(st, errors="coerce")
            fmt_m = (~miss_m) & ((s_str != st) | (~st.str.match(INT_STR_PATTERN)))
            out_m = (~miss_m) & (num.isna() | (num <= 0) | num.duplicated(keep=False))
            out_dict[col] = (miss_m, fmt_m, out_m)
            continue

        eff_missing = MISSING_TOKENS - ({"unknown"} if (is_after and col in ("Customer Type", "Type of Travel")) else set())
        miss_m = s.isna() | low.isin(eff_missing)

        if col in CAT_COLS:
            valid_set = VALID_CAT_AFTER[col] if is_after else VALID_CAT_BEFORE[col]
            fmt_m = (~miss_m) & (~s_str.isin(valid_set))
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

        out_dict[col] = (miss_m, fmt_m, out_m)
    return out_dict


all_cols = list(df.columns)
fb = audit_cells(raw[all_cols], all_cols, is_after=False)
fb_kept = audit_cells(
    raw_kept.drop(columns=["ID"]).rename(columns={"ID_raw_str": "ID"})[all_cols],
    all_cols,
    is_after=False
)
fa = audit_cells(df[all_cols], all_cols, is_after=True)

# 3. Bảng kiểm toán lỗi trước - sau làm sạch và phân tích ô được điền khuyết trên 119.092 dòng
quality_rows = []
imputed_counts_kept = {}
observed_valid_masks_kept = {}
imputed_values_kept = {}

for col in all_cols:
    mb, fmtb, outb = fb[col]
    anyb = mb | fmtb | outb
    overlap_b = fmtb & outb

    ma, fmta, outa = fa[col]
    anya = ma | fmta | outa

    # Trên 119.092 dòng giữ lại (đã ghép one_to_one theo ID trong raw_kept)
    mb_kept, fmtb_kept, outb_kept = fb_kept[col]
    if col in ("ID", "Satisfaction"):
        imp_mask = pd.Series(False, index=df.index)
        imp_val_str = "Không điền"
    elif col in ("Customer Type", "Type of Travel"):
        imp_mask = mb_kept
        imp_val_str = "Unknown"
    elif col in ("Gender", "Class"):
        imp_mask = mb_kept
        imp_val_str = str(df.loc[~imp_mask, col].mode()[0])
    else:
        imp_mask = mb_kept | outb_kept
        med_val = int(round(float(df.loc[~imp_mask, col].median())))
        imp_val_str = str(med_val)
        # Kiểm chứng mọi ô nằm trong imp_mask của PJ21.csv đều bằng đúng giá trị điền med_val
        assert (df.loc[imp_mask, col] == med_val).all(), f"Giá trị điền ở {col} không khớp {med_val}"

    imputed_counts_kept[col] = int(imp_mask.sum())
    observed_valid_masks_kept[col] = ~imp_mask
    imputed_values_kept[col] = imp_val_str

    quality_rows.append({
        "bien": col,
        "thieu_doc_csv_raw": int(raw[col].isna().sum()),
        "thieu_ke_ca_ma_an_raw": int(mb.sum()),
        "ty_le_thieu_raw_pct": float(mb.mean() * 100),
        "sai_dinh_dang_raw": int(fmtb.sum()),
        "ngoai_mien_raw": int(outb.sum()),
        "o_trung_2_loi_raw": int(overlap_b.sum()),
        "tong_luot_loi_raw": int(mb.sum() + fmtb.sum() + outb.sum()),
        "so_o_loi_duy_nhat_raw": int(anyb.sum()),
        "o_loi_thuoc_dong_bi_loai": int(anyb[~kept_mask_in_raw].sum()),
        "o_loi_duoc_sua_dong_giu_lai": int(anyb[kept_mask_in_raw].sum()),
        "gia_tri_dien_khuyet_tren_pj21": imp_val_str,
        "so_o_dien_khuyet_tren_pj21": int(imp_mask.sum()),
        "ty_le_dien_khuyet_tren_pj21_pct": float(imp_mask.mean() * 100),
        "thieu_sau_xu_ly": int(ma.sum()),
        "sai_dinh_dang_sau_xu_ly": int(fmta.sum()),
        "ngoai_mien_sau_xu_ly": int(outa.sum()),
        "tong_luot_loi_sau_xu_ly": int(ma.sum() + fmta.sum() + outa.sum()),
        "so_o_loi_duy_nhat_sau_xu_ly": int(anya.sum()),
        "kieu_sau_xu_ly": str(df[col].dtype),
    })

quality_df = pd.DataFrame(quality_rows)
quality_df.to_csv(OUT / "kiem_tra_chat_luong.csv", index=False, encoding="utf-8-sig")

# Thống kê tự động giá trị điền và phạm vi số ô điền ở nhóm vận hành & nhóm dịch vụ
q_idx = quality_df.set_index("bien")
q_metric = q_idx.loc[METRIC_COLS]
q_service = q_idx.loc[SERVICE_COLS]

metric_min_col = str(q_metric["so_o_dien_khuyet_tren_pj21"].idxmin())
metric_max_col = str(q_metric["so_o_dien_khuyet_tren_pj21"].idxmax())
service_min_col = str(q_service["so_o_dien_khuyet_tren_pj21"].idxmin())
service_max_col = str(q_service["so_o_dien_khuyet_tren_pj21"].idxmax())

service_med3_cols = [c for c in SERVICE_COLS if imputed_values_kept[c] == "3"]
service_med4_cols = [c for c in SERVICE_COLS if imputed_values_kept[c] == "4"]

# 4. Thống kê mô tả và ngoại lai thống kê IQR trên PJ21.csv (n = 119.092)
desc = df[METRIC_COLS + SERVICE_COLS].describe(percentiles=[0.25, 0.5, 0.75, 0.99]).T
desc.to_csv(OUT / "thong_ke_mo_ta.csv", encoding="utf-8-sig")

outlier_list = []
for c in METRIC_COLS:
    q1, q3 = df[c].quantile([0.25, 0.75])
    low = q1 - 1.5 * (q3 - q1)
    high = q3 + 1.5 * (q3 - q1)
    count = int(((df[c] < low) | (df[c] > high)).sum())
    outlier_list.append({
        "bien": c, "Q1": q1, "Q3": q3, "IQR": q3 - q1,
        "can_duoi": low, "can_tren": high,
        "so_ngoai_lai": count, "ty_le_pct": count / len(df) * 100
    })
outlier_df = pd.DataFrame(outlier_list)
outlier_df.to_csv(OUT / "ngoai_lai_iqr.csv", index=False, encoding="utf-8-sig")

# 5. Xác minh nhãn mục tiêu trên PJ21.csv (100% nhãn đều quan sát được từ raw)
df["y"] = df["Satisfaction"].eq("Satisfied").astype(int)
satisfied_count = int(df["y"].sum())
dissatisfied_count = int((df["y"] == 0).sum())
rate_satisfied = float(df["y"].mean() * 100)

label_flags = pd.DataFrame({
    "ID": raw["ID_int"],
    "giu_lai_trong_pj21": kept_mask_in_raw,
    "thieu_nhan_bi_loai": ~kept_mask_in_raw
})
label_flags.to_csv(OUT / "nguon_goc_nhan.csv", index=False, encoding="utf-8-sig")

# 6. Phân tích phân khúc (xử lý Unknown riêng và tách bạch giá trị quan sát vs điền Mode)
groups = {}
for c in ["Class", "Customer Type", "Type of Travel", "Gender"]:
    tab = df.groupby(c, observed=True)["y"].agg(["size", "sum", "mean"])
    tab.columns = ["n", "hai_long", "ty_le"]
    tab["ty_le"] *= 100
    groups[c] = tab
    tab.to_csv(OUT / f"{c.replace(' ', '_')}.csv", encoding="utf-8-sig")

obs_class_mask = observed_valid_masks_kept["Class"]
class_obs_tab = df.loc[obs_class_mask].groupby("Class", observed=True)["y"].agg(["size", "sum", "mean"])
class_obs_tab.columns = ["n", "hai_long", "ty_le"]
class_obs_tab["ty_le"] *= 100
class_imp_rate = float(df.loc[~obs_class_mask, "y"].mean() * 100)
class_imp_n = int((~obs_class_mask).sum())

obs_gender_mask = observed_valid_masks_kept["Gender"]
gender_obs_tab = df.loc[obs_gender_mask].groupby("Gender", observed=True)["y"].agg(["size", "sum", "mean"])
gender_obs_tab.columns = ["n", "hai_long", "ty_le"]
gender_obs_tab["ty_le"] *= 100
gender_imp_rate = float(df.loc[~obs_gender_mask, "y"].mean() * 100)
gender_imp_n = int((~obs_gender_mask).sum())

# 7. Phân tích nhóm độ trễ khởi hành (Departure Delay) và độ trễ đến (Arrival Delay) cho RQ2
delay_bins = [-1, 0, 15, 60, np.inf]
delay_labels = ["0 phút", "1–15 phút", "16–60 phút", "Trên 60 phút"]

# 7a. Arrival Delay
delay_group = pd.cut(df["Arrival Delay"], delay_bins, labels=delay_labels)
delay = df.groupby(delay_group, observed=True)["y"].agg(["size", "sum", "mean"])
delay.columns = ["n", "hai_long", "ty_le"]
delay["ty_le"] *= 100

obs_arr_mask = observed_valid_masks_kept["Arrival Delay"]
delay_obs_group = pd.cut(df.loc[obs_arr_mask, "Arrival Delay"], delay_bins, labels=delay_labels)
delay_obs = df.loc[obs_arr_mask].groupby(delay_obs_group, observed=True)["y"].agg(["size", "sum", "mean"])
delay_obs.columns = ["n_quan_sat", "hai_long_quan_sat", "ty_le_quan_sat"]
delay_obs["ty_le_quan_sat"] *= 100

delay_combined = pd.concat([delay, delay_obs], axis=1)
delay_combined.to_csv(OUT / "nhom_do_tre.csv", encoding="utf-8-sig")
arr_imputed_zero_rate = float(df.loc[~obs_arr_mask, "y"].mean() * 100)
arr_imputed_zero_n = int((~obs_arr_mask).sum())

# 7b. Departure Delay
dep_group = pd.cut(df["Departure Delay"], delay_bins, labels=delay_labels)
dep_delay = df.groupby(dep_group, observed=True)["y"].agg(["size", "sum", "mean"])
dep_delay.columns = ["n", "hai_long", "ty_le"]
dep_delay["ty_le"] *= 100

obs_dep_mask = observed_valid_masks_kept["Departure Delay"]
dep_obs_group = pd.cut(df.loc[obs_dep_mask, "Departure Delay"], delay_bins, labels=delay_labels)
dep_delay_obs = df.loc[obs_dep_mask].groupby(dep_obs_group, observed=True)["y"].agg(["size", "sum", "mean"])
dep_delay_obs.columns = ["n_quan_sat", "hai_long_quan_sat", "ty_le_quan_sat"]
dep_delay_obs["ty_le_quan_sat"] *= 100

dep_delay_combined = pd.concat([dep_delay, dep_delay_obs], axis=1)
dep_delay_combined.to_csv(OUT / "nhom_do_tre_khoi_hanh.csv", encoding="utf-8-sig")
dep_imputed_zero_rate = float(df.loc[~obs_dep_mask, "y"].mean() * 100)
dep_imputed_zero_n = int((~obs_dep_mask).sum())

# 8. Tương quan Spearman trên 14 tiêu chí dịch vụ (giữ mã 0, bỏ mã 0, và chỉ tính trên ô quan sát được)
cor = df[SERVICE_COLS + ["y"]].corr(method="spearman")
cor.to_csv(OUT / "tuong_quan_spearman.csv", encoding="utf-8-sig")

nozero = df[SERVICE_COLS].replace(0, np.nan)
nozero["y"] = df["y"]
cor_nozero = nozero.corr(method="spearman")["y"].drop("y")

cor_obs_only = {}
n_obs_service = {}
n_nozero_service = {}
for sc in SERVICE_COLS:
    m_sc = observed_valid_masks_kept[sc]
    cor_obs_only[sc] = float(df.loc[m_sc, sc].corr(df.loc[m_sc, "y"], method="spearman"))
    n_obs_service[sc] = int(m_sc.sum())
    n_nozero_service[sc] = int((df[sc] != 0).sum())

sensitivity = pd.DataFrame({
    "giu_0_pj21": cor["y"].drop("y"),
    "bo_0_pj21": cor_nozero,
    "chi_o_quan_sat": pd.Series(cor_obs_only),
    "so_o_khac_0": pd.Series(n_nozero_service),
    "so_o_quan_sat": pd.Series(n_obs_service),
})
sensitivity["hang_giu_0"] = sensitivity["giu_0_pj21"].rank(ascending=False, method="min").astype(int)
sensitivity["hang_bo_0"] = sensitivity["bo_0_pj21"].rank(ascending=False, method="min").astype(int)
sensitivity["hang_quan_sat"] = sensitivity["chi_o_quan_sat"].rank(ascending=False, method="min").astype(int)
sensitivity.to_csv(OUT / "do_nhay_diem_0.csv", encoding="utf-8-sig")

# 9. Kiểm định thống kê (Chi-square cho Class, Type of Travel, Customer Type, Gender và Mann-Whitney U cho Departure/Arrival Delay)
# 9a. Chi-square giữa Class và Satisfaction
ct_obs = pd.crosstab(df.loc[obs_class_mask, "Class"], df.loc[obs_class_mask, "y"])
chi_obs, p_obs, dof_obs, exp_obs = chi2_contingency(ct_obs, correction=False)
v_obs = np.sqrt(chi_obs / (ct_obs.to_numpy().sum() * min(ct_obs.shape[0] - 1, ct_obs.shape[1] - 1)))

ct_full = pd.crosstab(df["Class"], df["y"])
chi_full, p_full, dof_full, exp_full = chi2_contingency(ct_full, correction=False)
v_full = np.sqrt(chi_full / (ct_full.to_numpy().sum() * min(ct_full.shape[0] - 1, ct_full.shape[1] - 1)))

# 9a-2. Chi-square & Cramér's V cho Type of Travel (quan sát 2x2 và toàn tập 3x2 gồm Unknown)
obs_travel_mask = df["Type of Travel"] != "Unknown"
ct_travel_obs = pd.crosstab(df.loc[obs_travel_mask, "Type of Travel"], df.loc[obs_travel_mask, "y"])
chi_travel_obs, p_travel_obs, dof_travel_obs, exp_travel_obs = chi2_contingency(ct_travel_obs, correction=False)
v_travel_obs = np.sqrt(chi_travel_obs / (ct_travel_obs.to_numpy().sum() * min(ct_travel_obs.shape[0] - 1, ct_travel_obs.shape[1] - 1)))
chi_travel_obs_yates, _, _, _ = chi2_contingency(ct_travel_obs, correction=True)
v_travel_obs_yates = np.sqrt(chi_travel_obs_yates / (ct_travel_obs.to_numpy().sum() * min(ct_travel_obs.shape[0] - 1, ct_travel_obs.shape[1] - 1)))

ct_travel_full = pd.crosstab(df["Type of Travel"], df["y"])
chi_travel_full, p_travel_full, dof_travel_full, exp_travel_full = chi2_contingency(ct_travel_full, correction=False)
v_travel_full = np.sqrt(chi_travel_full / (ct_travel_full.to_numpy().sum() * min(ct_travel_full.shape[0] - 1, ct_travel_full.shape[1] - 1)))

# 9a-3. Chi-square & Cramér's V cho Customer Type (quan sát 2x2 và toàn tập 3x2 gồm Unknown)
obs_cust_mask = df["Customer Type"] != "Unknown"
ct_cust_obs = pd.crosstab(df.loc[obs_cust_mask, "Customer Type"], df.loc[obs_cust_mask, "y"])
chi_cust_obs, p_cust_obs, dof_cust_obs, exp_cust_obs = chi2_contingency(ct_cust_obs, correction=False)
v_cust_obs = np.sqrt(chi_cust_obs / (ct_cust_obs.to_numpy().sum() * min(ct_cust_obs.shape[0] - 1, ct_cust_obs.shape[1] - 1)))
chi_cust_obs_yates, _, _, _ = chi2_contingency(ct_cust_obs, correction=True)
v_cust_obs_yates = np.sqrt(chi_cust_obs_yates / (ct_cust_obs.to_numpy().sum() * min(ct_cust_obs.shape[0] - 1, ct_cust_obs.shape[1] - 1)))

ct_cust_full = pd.crosstab(df["Customer Type"], df["y"])
chi_cust_full, p_cust_full, dof_cust_full, exp_cust_full = chi2_contingency(ct_cust_full, correction=False)
v_cust_full = np.sqrt(chi_cust_full / (ct_cust_full.to_numpy().sum() * min(ct_cust_full.shape[0] - 1, ct_cust_full.shape[1] - 1)))

# 9a-4. Chi-square & Cramér's V cho Gender (quan sát 2x2 và toàn tập 2x2)
ct_gender_obs = pd.crosstab(df.loc[obs_gender_mask, "Gender"], df.loc[obs_gender_mask, "y"])
chi_gender_obs, p_gender_obs, dof_gender_obs, exp_gender_obs = chi2_contingency(ct_gender_obs, correction=False)
v_gender_obs = np.sqrt(chi_gender_obs / (ct_gender_obs.to_numpy().sum() * min(ct_gender_obs.shape[0] - 1, ct_gender_obs.shape[1] - 1)))

ct_gender_full = pd.crosstab(df["Gender"], df["y"])
chi_gender_full, p_gender_full, dof_gender_full, exp_gender_full = chi2_contingency(ct_gender_full, correction=False)
v_gender_full = np.sqrt(chi_gender_full / (ct_gender_full.to_numpy().sum() * min(ct_gender_full.shape[0] - 1, ct_gender_full.shape[1] - 1)))

# Số bản ghi có Flight Distance > 5000
obs_fd_mask = observed_valid_masks_kept["Flight Distance"]
fd_gt_5000_n = int((df["Flight Distance"] > 5000).sum())
fd_gt_5000_obs_n = int((df.loc[obs_fd_mask, "Flight Distance"] > 5000).sum())

# 9b. Mann-Whitney U cho Arrival Delay
a_full = df.loc[df["y"].eq(1), "Arrival Delay"]
b_full = df.loc[df["y"].eq(0), "Arrival Delay"]
u_full, pu_full = mannwhitneyu(a_full, b_full, alternative="two-sided", method="asymptotic")
rb_full = 2 * u_full / (len(a_full) * len(b_full)) - 1

a_obs = df.loc[obs_arr_mask & df["y"].eq(1), "Arrival Delay"]
b_obs = df.loc[obs_arr_mask & df["y"].eq(0), "Arrival Delay"]
u_obs, pu_obs = mannwhitneyu(a_obs, b_obs, alternative="two-sided", method="asymptotic")
rb_obs = 2 * u_obs / (len(a_obs) * len(b_obs)) - 1

# 9c. Mann-Whitney U cho Departure Delay
da_full = df.loc[df["y"].eq(1), "Departure Delay"]
db_full = df.loc[df["y"].eq(0), "Departure Delay"]
u_dep_full, pu_dep_full = mannwhitneyu(da_full, db_full, alternative="two-sided", method="asymptotic")
rb_dep_full = 2 * u_dep_full / (len(da_full) * len(db_full)) - 1

da_obs = df.loc[obs_dep_mask & df["y"].eq(1), "Departure Delay"]
db_obs = df.loc[obs_dep_mask & df["y"].eq(0), "Departure Delay"]
u_dep_obs, pu_dep_obs = mannwhitneyu(da_obs, db_obs, alternative="two-sided", method="asymptotic")
rb_dep_obs = 2 * u_dep_obs / (len(da_obs) * len(db_obs)) - 1

# 10. Thực nghiệm tích hợp đa định dạng (dẫn xuất từ PJ21.csv) và tối ưu bộ nhớ
df_clean_cols = df.drop(columns=["y"])
multi = OUT / "multi_file"
multi.mkdir(exist_ok=True)
df_clean_cols[["ID", "Gender", "Age", "Customer Type"]].to_csv(multi / "hanh_khach.csv", index=False)
df_clean_cols[["ID", "Type of Travel", "Class", "Flight Distance", "Departure Delay", "Arrival Delay"]].to_json(
    multi / "hanh_trinh.json", orient="records", force_ascii=False
)
with sqlite3.connect(multi / "danh_gia.sqlite") as conn:
    df_clean_cols[["ID"] + SERVICE_COLS + ["Satisfaction"]].to_sql("danh_gia", conn, if_exists="replace", index=False)
    right = pd.read_sql_query("SELECT * FROM danh_gia", conn)

left = pd.concat(pd.read_csv(multi / "hanh_khach.csv", chunksize=30000), ignore_index=True)
master = (
    left.merge(pd.read_json(multi / "hanh_trinh.json"), on="ID", validate="one_to_one")
    .merge(right, on="ID", validate="one_to_one")[df_clean_cols.columns]
)
pd.testing.assert_frame_equal(master, df_clean_cols, check_dtype=False)

mem_raw_bytes = int(raw.drop(columns=["ID_int"]).memory_usage(deep=True).sum())
before_bytes = int(master.memory_usage(deep=True).sum())
for c in CAT_COLS:
    master[c] = master[c].astype("category")
for c in master.select_dtypes(include="number").columns:
    master[c] = pd.to_numeric(master[c], downcast="integer")
after_bytes = int(master.memory_usage(deep=True).sum())

pd.testing.assert_frame_equal(master.astype(df_clean_cols.dtypes.to_dict()), df_clean_cols)
master.dtypes.astype(str).to_csv(OUT / "kieu_du_lieu_toi_uu.csv", encoding="utf-8-sig")

# 11. Vẽ lại 5 biểu đồ từ dữ liệu PJ21.csv
plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 10,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "figure.dpi": 150
})
blue = "#236789"
orange = "#D98744"
gray = "#7A8B99"


def save_fig(name: str):
    plt.tight_layout()
    plt.savefig(FIG / name, bbox_inches="tight")
    plt.close()


# Hình 01: Tình trạng nhãn trong dữ liệu bẩn (129.880 dòng) và cơ cấu nhãn trên PJ21.csv (119.092 dòng)
fig, axs = plt.subplots(1, 2, figsize=(10.5, 3.6))
kept_pct = rows_clean / rows_raw * 100
drop_pct = rows_dropped / rows_raw * 100
axs[0].bar(
    ["Có nhãn hợp lệ\n(giữ lại)", "Thiếu nhãn\n(loại bỏ)"],
    [kept_pct, drop_pct],
    color=[blue, gray],
    width=0.55
)
axs[0].set_ylim(0, 108)
axs[0].set_ylabel("Tỷ lệ trên 129.880 dòng (%)")
axs[0].set_title("Sàng lọc nhãn từ dữ liệu bẩn (n = 129.880)")
for i, (cnt, pct) in enumerate([(rows_clean, kept_pct), (rows_dropped, drop_pct)]):
    axs[0].text(i, pct + 2, f"{cnt:,}\n({pct:.2f}%)".replace(",", "."), ha="center", fontsize=9)

axs[1].bar(
    ["Satisfied\n(Hài lòng)", "Neutral or Dissatisfied\n(Trung lập / Không HL)"],
    [rate_satisfied, 100 - rate_satisfied],
    color=[blue, orange],
    width=0.55
)
axs[1].set_ylim(0, 75)
axs[1].set_ylabel("Tỷ lệ trên PJ21.csv (%)")
axs[1].set_title("Cơ cấu nhãn trên PJ21.csv (n = 119.092)")
for i, (cnt, pct) in enumerate([(satisfied_count, rate_satisfied), (dissatisfied_count, 100 - rate_satisfied)]):
    axs[1].text(i, pct + 1.5, f"{cnt:,}\n({pct:.2f}%)".replace(",", "."), ha="center", fontsize=9)
save_fig("01_co_cau_nhan.png")

# Hình 02: Phân khúc hành khách
fig, axs = plt.subplots(1, 3, figsize=(12, 3.8))
order_map = {
    "Class": ["Business", "Economy Plus", "Economy"],
    "Customer Type": ["Returning Customer", "First-time Customer", "Unknown"],
    "Type of Travel": ["Business Travel", "Personal Travel", "Unknown"],
}
short_label = {
    "Returning Customer": "Returning\nCustomer",
    "First-time Customer": "First-time\nCustomer",
    "Business Travel": "Business\nTravel",
    "Personal Travel": "Personal\nTravel",
    "Economy Plus": "Economy\nPlus",
}
for ax, c in zip(axs, ["Class", "Customer Type", "Type of Travel"]):
    t = groups[c].reindex(order_map[c])
    bar_colors = [gray if idx == "Unknown" else blue for idx in t.index]
    x_labels = [short_label.get(idx, idx) for idx in t.index]
    ax.bar(x_labels, t["ty_le"], color=bar_colors, width=0.6)
    ax.set_title(c)
    ax.set_ylim(0, 80)
    for i, (val, n_obs) in enumerate(zip(t["ty_le"], t["n"])):
        ax.text(i, val + 1.5, f"{val:.2f}%\n(n={int(n_obs):,})".replace(",", "."), ha="center", fontsize=8.5)
axs[0].set_ylabel("Tỷ lệ hài lòng (%)")
save_fig("02_phan_khuc.png")

# Hình 03: Độ trễ khởi hành (Departure Delay) và độ trễ đến (Arrival Delay) — phân rã nhóm 0 phút và các mức trễ dương
from matplotlib.patches import Patch

fig, axs = plt.subplots(1, 2, figsize=(13.2, 4.3), sharey=True)
dark_blue = "#16425B"
bar_colors_6 = [orange, gray, dark_blue, blue, blue, blue]
x_pos = np.arange(6)
x_labels_6 = [
    "0 phút\n(Quan sát)",
    "Ô khuyết\n(Điền 0)",
    "0 phút\n(Gộp PJ21)",
    "1–15\nphút",
    "16–60\nphút",
    "Trên 60\nphút",
]

dep_rates_6 = [
    float(dep_delay_obs.loc["0 phút", "ty_le_quan_sat"]),
    float(dep_imputed_zero_rate),
    float(dep_delay.loc["0 phút", "ty_le"]),
    float(dep_delay_obs.loc["1–15 phút", "ty_le_quan_sat"]),
    float(dep_delay_obs.loc["16–60 phút", "ty_le_quan_sat"]),
    float(dep_delay_obs.loc["Trên 60 phút", "ty_le_quan_sat"]),
]
dep_ns_6 = [
    int(dep_delay_obs.loc["0 phút", "n_quan_sat"]),
    int(dep_imputed_zero_n),
    int(dep_delay.loc["0 phút", "n"]),
    int(dep_delay_obs.loc["1–15 phút", "n_quan_sat"]),
    int(dep_delay_obs.loc["16–60 phút", "n_quan_sat"]),
    int(dep_delay_obs.loc["Trên 60 phút", "n_quan_sat"]),
]

arr_rates_6 = [
    float(delay_obs.loc["0 phút", "ty_le_quan_sat"]),
    float(arr_imputed_zero_rate),
    float(delay.loc["0 phút", "ty_le"]),
    float(delay_obs.loc["1–15 phút", "ty_le_quan_sat"]),
    float(delay_obs.loc["16–60 phút", "ty_le_quan_sat"]),
    float(delay_obs.loc["Trên 60 phút", "ty_le_quan_sat"]),
]
arr_ns_6 = [
    int(delay_obs.loc["0 phút", "n_quan_sat"]),
    int(arr_imputed_zero_n),
    int(delay.loc["0 phút", "n"]),
    int(delay_obs.loc["1–15 phút", "n_quan_sat"]),
    int(delay_obs.loc["16–60 phút", "n_quan_sat"]),
    int(delay_obs.loc["Trên 60 phút", "n_quan_sat"]),
]

for ax, title_str, rates_6, ns_6 in [
    (axs[0], "Độ trễ khởi hành (Departure Delay)", dep_rates_6, dep_ns_6),
    (axs[1], "Độ trễ đến (Arrival Delay)", arr_rates_6, arr_ns_6),
]:
    ax.bar(x_pos, rates_6, width=0.62, color=bar_colors_6)
    ax.axvline(2.5, color="#888888", linestyle="--", linewidth=1.1)
    ax.set_xticks(x_pos, x_labels_6, fontsize=8.5)
    ax.set_ylim(0, 64)
    ax.set_title(title_str, fontsize=10.5, pad=10)
    ax.text(1.0, 59.5, "Phân rã nhóm 0 phút", ha="center", fontsize=8.3, fontweight="bold", color="#333333")
    ax.text(4.0, 59.5, "Các mức trễ dương (> 0 phút)", ha="center", fontsize=8.3, fontweight="bold", color="#333333")
    for i, (r_val, n_val) in enumerate(zip(rates_6, ns_6)):
        lbl_txt = f"{r_val:.2f}%\n(n={n_val:,})".replace(",", ".")
        ax.text(i, r_val + 1.2, lbl_txt, ha="center", va="bottom", fontsize=7.6)

axs[0].set_ylabel("Tỷ lệ hài lòng (%)")
legend_handles = [
    Patch(facecolor=orange, label="0 phút (quan sát thực tế)"),
    Patch(facecolor=gray, label="Ô khuyết được điền trung vị 0"),
    Patch(facecolor=dark_blue, label="0 phút (gộp trên PJ21.csv)"),
    Patch(facecolor=blue, label="Trễ > 0 phút (chỉ gồm ô quan sát)"),
]
fig.legend(handles=legend_handles, loc="upper center", bbox_to_anchor=(0.5, 1.06), ncol=4, frameon=False, fontsize=8.5)
save_fig("03_do_tre.png")

# Hình 04: Heatmap tương quan Spearman
fig, ax = plt.subplots(figsize=(10.2, 8.0))
im = ax.imshow(cor, vmin=-1, vmax=1, cmap="RdBu_r")
labels = SERVICE_COLS + ["Satisfaction (0/1)"]
ax.set_xticks(range(15), labels, rotation=90, fontsize=8)
ax.set_yticks(range(15), labels, fontsize=8)
for i in range(15):
    for j in range(15):
        val = cor.iloc[i, j]
        ax.text(
            j, i, f"{val:.2f}",
            ha="center", va="center",
            fontsize=6.5,
            fontweight="bold" if (i == 14 or j == 14) and i != j else "normal",
            color="white" if abs(val) > 0.45 else "black"
        )
fig.colorbar(im, ax=ax, shrink=0.78, label="Spearman ρ")
ax.set_title("Ma trận tương quan Spearman trên PJ21.csv (n = 119.092)")
save_fig("04_heatmap.png")

# Hình 05: Phân phối tuổi và độ trễ đến
fig, axs = plt.subplots(1, 2, figsize=(9.5, 3.4))
axs[0].hist(df["Age"], bins=25, color=blue, edgecolor="white")
axs[0].set_xlabel("Tuổi (năm)")
axs[0].set_ylabel("Số bản ghi")
axs[0].set_title("Phân bố tuổi trên PJ21.csv (n = 119.092)")

axs[1].boxplot(
    [np.log1p(a_full), np.log1p(b_full)],
    tick_labels=["Satisfied\n(n = 51.740)", "Neutral/Dissatisfied\n(n = 67.352)"],
    showfliers=False,
    boxprops=dict(color=blue, linewidth=1.3),
    medianprops=dict(color=orange, linewidth=1.8)
)
axs[1].set_ylabel("log(1 + Arrival Delay [phút])")
axs[1].set_title("Độ trễ đến theo nhóm hài lòng (ẩn điểm ngoài râu)")
save_fig("05_phan_phoi.png")

# 12. Tổng hợp kết quả vào ket_qua.json và kiểm tra toàn vẹn SHA-256
summary = {
    "rows_raw": rows_raw,
    "rows_clean": rows_clean,
    "rows_dropped_missing_target": rows_dropped,
    "columns": len(df_clean_cols.columns),
    "cells_raw": int(raw[all_cols].size),
    "cells_clean": int(df_clean_cols.size),
    "cells_dropped": int(rows_dropped * len(all_cols)),
    "duplicates_raw": int(raw.drop(columns=["ID_int"]).duplicated().sum()),
    "duplicates_clean": int(df_clean_cols.duplicated().sum()),
    "id_unique_raw": bool(raw["ID_int"].is_unique),
    "id_unique_clean": bool(df_clean_cols["ID"].is_unique),
    "missing_csv_raw": int(quality_df["thieu_doc_csv_raw"].sum()),
    "missing_including_codes_raw": int(quality_df["thieu_ke_ca_ma_an_raw"].sum()),
    "format_errors_raw": int(quality_df["sai_dinh_dang_raw"].sum()),
    "outlier_errors_raw": int(quality_df["ngoai_mien_raw"].sum()),
    "overlap_fmt_out_raw": int(quality_df["o_trung_2_loi_raw"].sum()),
    "total_error_occurrences_raw": int(quality_df["tong_luot_loi_raw"].sum()),
    "unique_error_cells_raw": int(quality_df["so_o_loi_duy_nhat_raw"].sum()),
    "unique_error_cells_raw_pct": float(quality_df["so_o_loi_duy_nhat_raw"].sum() / raw[all_cols].size * 100),
    "unique_error_cells_dropped_rows": int(quality_df["o_loi_thuoc_dong_bi_loai"].sum()),
    "unique_error_cells_fixed_kept_rows": int(quality_df["o_loi_duoc_sua_dong_giu_lai"].sum()),
    "total_imputed_Or_unknown_cells_pj21": int(quality_df["so_o_dien_khuyet_tren_pj21"].sum()),
    "age_imputed_n": int(q_idx.loc["Age", "so_o_dien_khuyet_tren_pj21"]),
    "age_imputed_pct": float(q_idx.loc["Age", "ty_le_dien_khuyet_tren_pj21_pct"]),
    "flight_distance_imputed_n": int(q_idx.loc["Flight Distance", "so_o_dien_khuyet_tren_pj21"]),
    "flight_distance_imputed_pct": float(q_idx.loc["Flight Distance", "ty_le_dien_khuyet_tren_pj21_pct"]),
    "metric_imputed_min_col": metric_min_col,
    "metric_imputed_min_n": int(q_idx.loc[metric_min_col, "so_o_dien_khuyet_tren_pj21"]),
    "metric_imputed_min_pct": float(q_idx.loc[metric_min_col, "ty_le_dien_khuyet_tren_pj21_pct"]),
    "metric_imputed_max_col": metric_max_col,
    "metric_imputed_max_n": int(q_idx.loc[metric_max_col, "so_o_dien_khuyet_tren_pj21"]),
    "metric_imputed_max_pct": float(q_idx.loc[metric_max_col, "ty_le_dien_khuyet_tren_pj21_pct"]),
    "service_imputed_min_col": service_min_col,
    "service_imputed_min_n": int(q_idx.loc[service_min_col, "so_o_dien_khuyet_tren_pj21"]),
    "service_imputed_min_pct": float(q_idx.loc[service_min_col, "ty_le_dien_khuyet_tren_pj21_pct"]),
    "service_imputed_max_col": service_max_col,
    "service_imputed_max_n": int(q_idx.loc[service_max_col, "so_o_dien_khuyet_tren_pj21"]),
    "service_imputed_max_pct": float(q_idx.loc[service_max_col, "ty_le_dien_khuyet_tren_pj21_pct"]),
    "service_med3_count": len(service_med3_cols),
    "service_med4_count": len(service_med4_cols),
    "service_med3_cols": service_med3_cols,
    "service_med4_cols": service_med4_cols,
    "missing_after_clean": int(quality_df["thieu_sau_xu_ly"].sum()),
    "format_after_clean": int(quality_df["sai_dinh_dang_sau_xu_ly"].sum()),
    "outlier_after_clean": int(quality_df["ngoai_mien_sau_xu_ly"].sum()),
    "total_error_occurrences_after": int(quality_df["tong_luot_loi_sau_xu_ly"].sum()),
    "unique_error_cells_after": int(quality_df["so_o_loi_duy_nhat_sau_xu_ly"].sum()),
    "satisfied_count": satisfied_count,
    "dissatisfied_count": dissatisfied_count,
    "rate_satisfied_pct": rate_satisfied,
    "rate_dissatisfied_pct": 100.0 - rate_satisfied,
    "memory_raw_bytes": mem_raw_bytes,
    "memory_before_bytes": before_bytes,
    "memory_after_bytes": after_bytes,
    "memory_reduction_pct": float(100 * (1 - after_bytes / before_bytes)),
    "class_imputed_n": class_imp_n,
    "class_imputed_satisfied_pct": class_imp_rate,
    "class_business_obs_n": int(class_obs_tab.loc["Business", "n"]),
    "class_business_obs_satisfied_pct": float(class_obs_tab.loc["Business", "ty_le"]),
    "gender_imputed_n": gender_imp_n,
    "gender_imputed_satisfied_pct": gender_imp_rate,
    "arrival_imputed_zero_n": arr_imputed_zero_n,
    "arrival_imputed_zero_satisfied_pct": arr_imputed_zero_rate,
    "arrival_observed_n": int(obs_arr_mask.sum()),
    "departure_imputed_zero_n": dep_imputed_zero_n,
    "departure_imputed_zero_satisfied_pct": dep_imputed_zero_rate,
    "departure_observed_n": int(obs_dep_mask.sum()),
    "chi2_obs": float(chi_obs),
    "chi2_obs_p": float(p_obs),
    "chi2_obs_df": int(dof_obs),
    "cramers_v_obs": float(v_obs),
    "chi2_obs_n": int(obs_class_mask.sum()),
    "expected_min_obs": float(exp_obs.min()),
    "chi2_full": float(chi_full),
    "chi2_full_p": float(p_full),
    "cramers_v_full": float(v_full),
    "chi2_full_n": int(len(df)),
    "expected_min_full": float(exp_full.min()),
    "chi2_travel_obs": float(chi_travel_obs),
    "chi2_travel_obs_yates": float(chi_travel_obs_yates),
    "chi2_travel_obs_p": float(p_travel_obs),
    "chi2_travel_obs_df": int(dof_travel_obs),
    "cramers_v_travel_obs": float(v_travel_obs),
    "cramers_v_travel_obs_yates": float(v_travel_obs_yates),
    "chi2_travel_obs_n": int(obs_travel_mask.sum()),
    "expected_min_travel_obs": float(exp_travel_obs.min()),
    "chi2_travel_full": float(chi_travel_full),
    "chi2_travel_full_p": float(p_travel_full),
    "chi2_travel_full_df": int(dof_travel_full),
    "cramers_v_travel_full": float(v_travel_full),
    "expected_min_travel_full": float(exp_travel_full.min()),
    "chi2_cust_obs": float(chi_cust_obs),
    "chi2_cust_obs_yates": float(chi_cust_obs_yates),
    "chi2_cust_obs_p": float(p_cust_obs),
    "chi2_cust_obs_df": int(dof_cust_obs),
    "cramers_v_cust_obs": float(v_cust_obs),
    "cramers_v_cust_obs_yates": float(v_cust_obs_yates),
    "chi2_cust_obs_n": int(obs_cust_mask.sum()),
    "expected_min_cust_obs": float(exp_cust_obs.min()),
    "chi2_cust_full": float(chi_cust_full),
    "chi2_cust_full_p": float(p_cust_full),
    "chi2_cust_full_df": int(dof_cust_full),
    "cramers_v_cust_full": float(v_cust_full),
    "expected_min_cust_full": float(exp_cust_full.min()),
    "chi2_gender_obs": float(chi_gender_obs),
    "chi2_gender_obs_p": float(p_gender_obs),
    "cramers_v_gender_obs": float(v_gender_obs),
    "chi2_gender_obs_n": int(obs_gender_mask.sum()),
    "chi2_gender_full": float(chi_gender_full),
    "chi2_gender_full_p": float(p_gender_full),
    "cramers_v_gender_full": float(v_gender_full),
    "flight_distance_gt_5000_n": fd_gt_5000_n,
    "flight_distance_gt_5000_obs_n": fd_gt_5000_obs_n,
    "mann_whitney_u_full": float(u_full),
    "mann_whitney_p_full": float(pu_full),
    "rank_biserial_full": float(rb_full),
    "mann_whitney_u_obs": float(u_obs),
    "mann_whitney_p_obs": float(pu_obs),
    "rank_biserial_obs": float(rb_obs),
    "mann_whitney_dep_u_full": float(u_dep_full),
    "mann_whitney_dep_p_full": float(pu_dep_full),
    "rank_biserial_dep_full": float(rb_dep_full),
    "mann_whitney_dep_u_obs": float(u_dep_obs),
    "mann_whitney_dep_p_obs": float(pu_dep_obs),
    "rank_biserial_dep_obs": float(rb_dep_obs),
    "delay_mean_satisfied_full": float(a_full.mean()),
    "delay_mean_dissatisfied_full": float(b_full.mean()),
    "delay_pct_positive_satisfied_full": float((a_full > 0).mean() * 100),
    "delay_pct_positive_dissatisfied_full": float((b_full > 0).mean() * 100),
    "delay_pct_positive_satisfied_obs": float((a_obs > 0).mean() * 100),
    "delay_pct_positive_dissatisfied_obs": float((b_obs > 0).mean() * 100),
    "dep_delay_mean_satisfied_full": float(da_full.mean()),
    "dep_delay_mean_dissatisfied_full": float(db_full.mean()),
    "dep_delay_pct_positive_satisfied_full": float((da_full > 0).mean() * 100),
    "dep_delay_pct_positive_dissatisfied_full": float((db_full > 0).mean() * 100),
    "dep_delay_pct_positive_satisfied_obs": float((da_obs > 0).mean() * 100),
    "dep_delay_pct_positive_dissatisfied_obs": float((db_obs > 0).mean() * 100),
    "input_sha256": hashes_before,
    "versions": {
        "python": platform.python_version(),
        "pandas": pd.__version__,
        "numpy": np.__version__,
        "matplotlib": matplotlib.__version__,
    }
}

hashes_after = {str(p.relative_to(ROOT)): digest(p) for p in [RAW, CLEAN]}
assert hashes_before == hashes_after, "Tệp đầu vào đã bị thay đổi!"
assert master.shape == df_clean_cols.shape and not master["ID"].duplicated().any()

(OUT / "ket_qua.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(summary, ensure_ascii=False, indent=2))
print("DEP_DELAY_COMBINED:", dep_delay_combined.round(4).to_dict())
print("ARR_DELAY_COMBINED:", delay_combined.round(4).to_dict())
print("SPEARMAN_RANKS:", sensitivity[["giu_0_pj21", "hang_giu_0", "bo_0_pj21", "hang_bo_0", "chi_o_quan_sat", "hang_quan_sat"]].round(4).to_string())
