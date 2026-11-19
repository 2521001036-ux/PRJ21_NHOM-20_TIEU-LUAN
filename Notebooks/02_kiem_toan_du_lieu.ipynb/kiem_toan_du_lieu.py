
"""
kiem_toan_du_lieu.py
====================
GIAI ĐOẠN 1 - TÌM HIỂU DỮ LIỆU VÀ KIỂM TOÁN ĐỘ SẠCH BAN ĐẦU (CHƯA LÀM SẠCH)
Bộ dữ liệu: Airline Passenger Satisfaction

Nguyên tắc:
- Chỉ ĐỌC hai file đầu vào, tuyệt đối không ghi đè hay sửa dữ liệu.
- Mỗi ô của file bẩn được gắn MỘT nhãn trạng thái chính theo quy tắc nghiệp vụ.
- Nhãn được gom thành 3 mức độ (đèn giao thông):
    + "Đạt"          (xanh lá) : ô hợp lệ theo quy tắc.
    + "Cần kiểm tra" (vàng)    : ô hợp lệ về kỹ thuật nhưng đáng nghi ngờ.
    + "Có vấn đề"    (đỏ)      : lỗi đã xác nhận theo quy tắc.
- Biểu đồ được lưu vào thư mục bieu_do/ trong folder dự án.

Cách chạy độc lập:  python kiem_toan_du_lieu.py
(Báo cáo notebook được tạo/cập nhật bằng: python tao_bao_cao.py)
"""
import hashlib
from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib

matplotlib.use("Agg")  # vẽ không cần cửa sổ, chỉ lưu file
import matplotlib.pyplot as plt
from matplotlib.colors import LogNorm
from matplotlib.patches import Patch
import seaborn as sns

# ----------------------------------------------------------------------------
# 1. ĐƯỜNG DẪN VÀ CẤU HÌNH
# ----------------------------------------------------------------------------
THU_MUC = Path(__file__).resolve().parent
GOC_DU_AN = THU_MUC.parents[1]                                # thư mục gốc project (PRJ 21)
FILE_SACH = GOC_DU_AN / "Data" / "original" / "airline_passenger_satisfaction.csv"   # dữ liệu gốc sạch
FILE_BAN = GOC_DU_AN / "Data" / "raw" / "Du lieu khong sach.csv"                      # dữ liệu bẩn
THU_MUC_BD = GOC_DU_AN / "figures" / "kiem_toan_du_lieu"                              # nơi lưu biểu đồ

# Nhóm biến
COT_ID = "ID"
COT_PHAN_LOAI = ["Gender", "Customer Type", "Type of Travel", "Class"]
COT_MUC_TIEU = "Satisfaction"
COT_SO_LIEN_TUC = ["Age", "Flight Distance", "Departure Delay", "Arrival Delay"]
COT_DIEM = [
    "Departure and Arrival Time Convenience", "Ease of Online Booking",
    "Check-in Service", "Online Boarding", "Gate Location", "On-board Service",
    "Seat Comfort", "Leg Room Service", "Cleanliness", "Food and Drink",
    "In-flight Service", "In-flight Wifi Service", "In-flight Entertainment",
    "Baggage Handling",
]
COT_CHU = COT_PHAN_LOAI + [COT_MUC_TIEU]          # các cột dạng chữ
COT_SO = COT_SO_LIEN_TUC + COT_DIEM               # các cột dạng số (trừ ID)

# Giá trị chuẩn của các biến phân loại (lấy theo file gốc sạch)
GIA_TRI_CHUAN = {
    "Gender": ["Male", "Female"],
    "Customer Type": ["First-time", "Returning"],
    "Type of Travel": ["Business", "Personal"],
    "Class": ["Business", "Economy", "Economy Plus"],
    "Satisfaction": ["Neutral or Dissatisfied", "Satisfied"],
}

# Các chuỗi được coi là "mã giữ chỗ" cho giá trị thiếu (so sánh chữ thường)
MA_THIEU = ["n/a", "na", "null", "none", "nan", "?", "-", "unknown", "chưa rõ"]
MAU_DON_VI = r"-?\d+(?:\.\d+)?\s*(?:USD|VND|kg|%|đ)"   # số kèm đơn vị vô nghĩa
MAU_NAN_DON_VI = r"nan\s*(?:usd|vnd|kg|%|đ)"            # "nan đ", "nan USD"...

# Miền giá trị hợp lệ theo ý nghĩa nghiệp vụ (giả định nghiên cứu, ghi rõ trong báo cáo)
MIEN_HOP_LE = {
    "Age": (1, 100),                 # tuổi hành khách (năm)
    "Flight Distance": (1, 10000),   # chuyến bay thương mại dài nhất thế giới < 10.000 dặm
    "Departure Delay": (0, 2880),    # trễ > 48 giờ được coi là không hợp lý
    "Arrival Delay": (0, 2880),
}
for _c in COT_DIEM:
    MIEN_HOP_LE[_c] = (0, 5)          # thang điểm 0-5 (0 = không áp dụng)

# Ngưỡng "cao bất thường" -> chỉ nghi ngờ, chưa kết luận là lỗi
NGUONG_NGHI_NGO = {"Flight Distance": 5000, "Departure Delay": 1440, "Arrival Delay": 1440}

DON_VI_TRUC = {"Age": "Năm", "Flight Distance": "Dặm (miles)",
               "Departure Delay": "Phút", "Arrival Delay": "Phút"}

# Nhãn trạng thái của từng ô
OK = "Hợp lệ"
THIEU_RONG = "Thiếu: ô rỗng"
THIEU_MA = "Thiếu: mã giữ chỗ (N/A, null, ?, -, unknown...)"
DON_VI_L = "Sai định dạng: số kèm đơn vị (USD, VND, kg, %, đ)"
KHONG_SO = "Sai kiểu: chữ trong cột số"
THAP_PHAN = "Sai kiểu: số thập phân ở biến số nguyên"
MA_9999 = "Không hợp lệ: mã lỗi 9999"
AM = "Không hợp lệ: giá trị âm"
NGOAI_MIEN = "Không hợp lệ: ngoài miền giá trị"
HOA_THUONG = "Phân loại: sai chữ hoa/thường"
KHOANG_TRANG = "Phân loại: thừa khoảng trắng"
CAT_CUT = "Phân loại: bị cắt cụt"
GIA_TRI_LA = "Phân loại: giá trị lạ"
TRUNG_ID = "Trùng lặp: ID trùng"
NN_DIEM0 = "Nghi ngờ: điểm 0 (không áp dụng?)"
NN_CAO = "Nghi ngờ: cao bất thường"

NHOM_LOI = {
    THIEU_RONG: "Giá trị thiếu", THIEU_MA: "Giá trị thiếu",
    DON_VI_L: "Sai kiểu / định dạng", KHONG_SO: "Sai kiểu / định dạng",
    THAP_PHAN: "Sai kiểu / định dạng",
    MA_9999: "Giá trị không hợp lệ", AM: "Giá trị không hợp lệ",
    NGOAI_MIEN: "Giá trị không hợp lệ",
    HOA_THUONG: "Phân loại không thống nhất", KHOANG_TRANG: "Phân loại không thống nhất",
    CAT_CUT: "Phân loại không thống nhất", GIA_TRI_LA: "Phân loại không thống nhất",
    TRUNG_ID: "Trùng lặp",
    NN_DIEM0: "Nghi ngờ (cần kiểm tra)", NN_CAO: "Nghi ngờ (cần kiểm tra)",
}

# Màu đèn giao thông
XANH, VANG, DO = "#2E9E5B", "#F2B705", "#D64541"
MAU_MUC_DO = {"Đạt": XANH, "Cần kiểm tra": VANG, "Có vấn đề": DO}

sns.set_theme(style="whitegrid", font="DejaVu Sans")   # DejaVu Sans hỗ trợ tiếng Việt
plt.rcParams["axes.titleweight"] = "bold"


# ----------------------------------------------------------------------------
# 2. HÀM TIỆN ÍCH
# ----------------------------------------------------------------------------
def so(n):
    """Định dạng số nguyên kiểu Việt Nam: 129880 -> 129.880"""
    return f"{int(round(n)):,}".replace(",", ".")


def pt(x, k=1):
    """Định dạng phần trăm kiểu Việt Nam: 26.13 -> 26,1"""
    return f"{x:.{k}f}".replace(".", ",")


def ma_bam(duong_dan):
    """Tính mã MD5 của file để chứng minh file đầu vào không bị thay đổi."""
    h = hashlib.md5()
    with open(duong_dan, "rb") as f:
        for khoi in iter(lambda: f.read(1 << 20), b""):
            h.update(khoi)
    return h.hexdigest()


def muc_do_cua_nhan(nhan):
    """Chuyển nhãn chi tiết -> mức độ Đạt / Cần kiểm tra / Có vấn đề."""
    if nhan == OK:
        return "Đạt"
    if nhan.startswith("Nghi ngờ"):
        return "Cần kiểm tra"
    return "Có vấn đề"


# ----------------------------------------------------------------------------
# 3. ĐỌC DỮ LIỆU (CHỈ ĐỌC)
# ----------------------------------------------------------------------------
def doc_du_lieu():
    sach = pd.read_csv(FILE_SACH)                                  # file gốc sạch
    ban = pd.read_csv(FILE_BAN, dtype=str, keep_default_na=False)  # đọc nguyên văn mọi ô dạng chuỗi
    ban_mac_dinh = pd.read_csv(FILE_BAN)                           # cách pandas tự suy kiểu dữ liệu
    return sach, ban, ban_mac_dinh


# ----------------------------------------------------------------------------
# 4. GẮN NHÃN TỪNG Ô
# ----------------------------------------------------------------------------
def _nhan_cot_so(s, cot):
    """Gắn nhãn cho một cột số. Thứ tự điều kiện = thứ tự ưu tiên."""
    st = s.str.strip()
    low = st.str.lower()
    gia_tri = pd.to_numeric(st, errors="coerce")
    lo, hi = MIEN_HOP_LE[cot]
    khong = pd.Series(False, index=s.index)
    nguong = NGUONG_NGHI_NGO.get(cot)
    dieu_kien = [
        st == "",                                               # ô rỗng
        low.isin(MA_THIEU) | low.str.fullmatch(MAU_NAN_DON_VI),  # mã giữ chỗ
        st.str.fullmatch(MAU_DON_VI),                            # số kèm đơn vị
        gia_tri.isna(),                                          # chữ trong cột số
        gia_tri == 9999,                                         # mã lỗi
        gia_tri < 0,                                             # số âm
        (gia_tri % 1) != 0,                                      # số thập phân
        (gia_tri < lo) | (gia_tri > hi),                         # ngoài miền
        (gia_tri == 0) if cot in COT_DIEM else khong,            # điểm 0
        (gia_tri > nguong) if nguong else khong,                 # cao bất thường
    ]
    ten_nhan = [THIEU_RONG, THIEU_MA, DON_VI_L, KHONG_SO, MA_9999, AM,
                THAP_PHAN, NGOAI_MIEN, NN_DIEM0, NN_CAO]
    dieu_kien = [d.fillna(False).to_numpy(dtype=bool) for d in dieu_kien]
    return pd.Series(np.select(dieu_kien, ten_nhan, default=OK), index=s.index)


def _nhan_gia_tri_phan_loai(v, cot):
    """Gắn nhãn cho MỘT giá trị phân loại (dùng cho từng giá trị duy nhất)."""
    chuan = GIA_TRI_CHUAN[cot]
    chuan_thuong = [c.lower() for c in chuan]
    st = v.strip()
    low = st.lower()
    if st == "":
        return THIEU_RONG
    if low in MA_THIEU:
        return THIEU_MA
    if v in chuan:
        return OK
    if low in chuan_thuong:
        return KHOANG_TRANG if v != st else HOA_THUONG
    if len(low) >= 3 and any(c.startswith(low) for c in chuan_thuong):
        return CAT_CUT
    return GIA_TRI_LA


def _nhan_cot_id(s):
    st = s.str.strip()
    gia_tri = pd.to_numeric(st, errors="coerce")
    dieu_kien = [st == "", gia_tri.isna(), (gia_tri % 1) != 0,
                 gia_tri.duplicated(keep=False) & gia_tri.notna(), gia_tri <= 0]
    ten_nhan = [THIEU_RONG, KHONG_SO, THAP_PHAN, TRUNG_ID, NGOAI_MIEN]
    dieu_kien = [d.fillna(False).to_numpy(dtype=bool) for d in dieu_kien]
    return pd.Series(np.select(dieu_kien, ten_nhan, default=OK), index=s.index)


def gan_nhan(ban):
    """Trả về DataFrame nhãn (cùng kích thước file bẩn) và DataFrame mức độ."""
    nhan = pd.DataFrame(index=ban.index)
    for c in ban.columns:
        if c == COT_ID:
            nhan[c] = _nhan_cot_id(ban[c])
        elif c in COT_CHU:
            bang_map = {v: _nhan_gia_tri_phan_loai(v, c) for v in ban[c].unique()}
            nhan[c] = ban[c].map(bang_map)
        else:
            nhan[c] = _nhan_cot_so(ban[c], c)
    bang_muc = {n: muc_do_cua_nhan(n) for n in pd.unique(nhan.to_numpy().ravel())}
    muc = nhan.apply(lambda col: col.map(bang_muc))
    return nhan, muc


# ----------------------------------------------------------------------------
# 5. CÁC BẢNG KIỂM TOÁN
# ----------------------------------------------------------------------------
TU_DIEN = {
    # cột: (ý nghĩa, đơn vị, kiểu phù hợp, loại biến, vai trò)
    "ID": ("Mã định danh của một bản ghi khảo sát (một hành khách - một chuyến bay)",
           "Không áp dụng", "int64 (duy nhất)", "Định danh", "Khóa dòng; không dùng làm biến phân tích"),
    "Gender": ("Giới tính hành khách (Male/Female)", "Không áp dụng", "category",
               "Phân loại danh nghĩa", "Biến giải thích - nhân khẩu học"),
    "Age": ("Tuổi của hành khách", "Năm", "Int64 (số nguyên)", "Số rời rạc",
            "Biến giải thích - nhân khẩu học"),
    "Customer Type": ("Loại khách: bay lần đầu (First-time) hay khách quay lại (Returning)",
                      "Không áp dụng", "category", "Phân loại danh nghĩa", "Biến giải thích - phân khúc khách"),
    "Type of Travel": ("Mục đích chuyến đi: công tác (Business) hay cá nhân (Personal)",
                       "Không áp dụng", "category", "Phân loại danh nghĩa", "Biến giải thích - đặc điểm chuyến đi"),
    "Class": ("Hạng ghế: Business, Economy, Economy Plus", "Không áp dụng",
              "category (có thể sắp thứ bậc)", "Phân loại (thứ bậc)", "Biến giải thích - đặc điểm chuyến đi"),
    "Flight Distance": ("Quãng đường của chuyến bay", "Dặm (miles) - theo mô tả nguồn công khai, cần xác minh",
                        "Int64 (số nguyên dương)", "Số liên tục", "Biến giải thích - vận hành"),
    "Departure Delay": ("Số phút khởi hành trễ so với lịch", "Phút", "Int64 (≥ 0)", "Số liên tục",
                        "Biến giải thích - vận hành (đúng giờ)"),
    "Arrival Delay": ("Số phút hạ cánh trễ so với lịch", "Phút", "Int64 (≥ 0, cho phép thiếu)",
                      "Số liên tục", "Biến giải thích - vận hành (đúng giờ)"),
    "Satisfaction": ("Mức độ hài lòng tổng thể: Satisfied / Neutral or Dissatisfied", "Không áp dụng",
                     "category (nhị phân)", "Phân loại nhị phân", "BIẾN MỤC TIÊU"),
}
Y_NGHIA_DIEM = {
    "Departure and Arrival Time Convenience": "sự thuận tiện của giờ khởi hành/hạ cánh",
    "Ease of Online Booking": "mức dễ dàng khi đặt vé trực tuyến",
    "Check-in Service": "dịch vụ làm thủ tục check-in",
    "Online Boarding": "quy trình lên máy bay/thủ tục trực tuyến",
    "Gate Location": "vị trí cửa ra máy bay",
    "On-board Service": "dịch vụ chung trên máy bay",
    "Seat Comfort": "độ thoải mái của ghế ngồi",
    "Leg Room Service": "không gian để chân",
    "Cleanliness": "độ sạch sẽ",
    "Food and Drink": "đồ ăn và thức uống",
    "In-flight Service": "dịch vụ phục vụ trong chuyến bay",
    "In-flight Wifi Service": "dịch vụ Wi-Fi trên máy bay",
    "In-flight Entertainment": "dịch vụ giải trí trên máy bay",
    "Baggage Handling": "xử lý hành lý",
}
for _c, _y in Y_NGHIA_DIEM.items():
    TU_DIEN[_c] = (f"Điểm đánh giá {_y}", "Điểm (thang 1-5; 0 = không áp dụng)",
                   "Int8 hoặc category có thứ tự", "Phân loại thứ bậc (Likert)",
                   "Biến giải thích - đánh giá dịch vụ")


def bang_tu_dien(sach, ban_mac_dinh):
    dong = []
    for c in sach.columns:
        y, dv, kieu_pl, loai, vai_tro = TU_DIEN[c]
        dong.append({"Tên biến": c, "Ý nghĩa thực tế": y, "Đơn vị tính": dv,
                     "Kiểu hiện tại (file bẩn)": str(ban_mac_dinh[c].dtype),
                     "Kiểu trong file gốc": str(sach[c].dtype),
                     "Kiểu phù hợp": kieu_pl, "Loại biến": loai, "Vai trò": vai_tro})
    return pd.DataFrame(dong)


def bang_kich_thuoc(sach, ban):
    dong = []
    for vai_tro, p, df in [("Dữ liệu gốc sạch", FILE_SACH, sach), ("Dữ liệu bẩn", FILE_BAN, ban)]:
        dong.append({"Tệp": p.name, "Vai trò": vai_tro, "Số dòng": df.shape[0],
                     "Số cột": df.shape[1], "Tổng số ô": df.size,
                     "Dung lượng (MB)": round(p.stat().st_size / 1024 ** 2, 2)})
    return pd.DataFrame(dong)


def kiem_tra_cau_truc(sach, ban):
    """Kiểm tra số bảng dữ liệu và khả năng có khóa liên kết."""
    return {
        "ds_csv": sorted(p.name for p in (GOC_DU_AN / "Data").rglob("*.csv")),
        "cung_ten_cot": list(sach.columns) == list(ban.columns),
        "id_khop_thu_tu": bool((sach[COT_ID].astype(str).to_numpy() == ban[COT_ID].str.strip().to_numpy()).all()),
        "id_duy_nhat_sach": bool(sach[COT_ID].is_unique),
        "id_duy_nhat_ban": bool(ban[COT_ID].is_unique),
    }


def bang_thieu(sach, ban_mac_dinh, nhan):
    la_thieu = nhan.isin([THIEU_RONG, THIEU_MA])
    pandas_na = ban_mac_dinh.isna()
    t = pd.DataFrame({
        "Thiếu trong file gốc": sach.isna().sum(),
        "Pandas tự nhận diện": pandas_na.sum(),
        "Mã thiếu ẩn": (la_thieu & ~pandas_na).sum(),
        "Tổng thiếu": la_thieu.sum(),
    })
    t["Tỷ lệ thiếu (%)"] = (t["Tổng thiếu"] / len(nhan) * 100).round(2)
    t["Trạng thái"] = pd.cut(t["Tỷ lệ thiếu (%)"], [-1, 4.999999, 19.999999, 101],
                             labels=["Đạt", "Cần kiểm tra", "Có vấn đề"]).astype(str)
    lech = int((pandas_na & ~la_thieu).sum().sum())   # kỳ vọng = 0
    return t, lech


def bang_trung_lap(sach, ban):
    return pd.DataFrame([
        {"Kiểm tra": "Dòng trùng hoàn toàn (24 cột)",
         "File gốc sạch": int(sach.duplicated().sum()), "File bẩn": int(ban.duplicated().sum())},
        {"Kiểm tra": "ID bị trùng",
         "File gốc sạch": int(sach[COT_ID].duplicated().sum()), "File bẩn": int(ban[COT_ID].duplicated().sum())},
        {"Kiểm tra": "Dòng trùng khi bỏ cột ID (23 cột)",
         "File gốc sạch": int(sach.drop(columns=COT_ID).duplicated().sum()),
         "File bẩn": int(ban.drop(columns=COT_ID).duplicated().sum())},
    ])


def bang_kieu_du_lieu(sach, ban, ban_mac_dinh):
    dong = []
    for c in ban.columns:
        st = ban[c].str.strip()
        so_thuan = pd.to_numeric(st, errors="coerce").notna().sum()
        la_cot_so = c not in COT_CHU
        dong.append({
            "Tên biến": c,
            "Kiểu pandas suy ra (file bẩn)": str(ban_mac_dinh[c].dtype),
            "Kiểu file gốc": str(sach[c].dtype),
            "Kiểu phù hợp": TU_DIEN[c][2],
            "Số ô là số thuần": int(so_thuan) if la_cot_so else None,
            "Số ô không đọc được thành số": int(len(st) - so_thuan) if la_cot_so else None,
            "Kết luận": ("Sai kiểu: cột số bị đọc thành chuỗi"
                         if la_cot_so and str(ban_mac_dinh[c].dtype) != str(sach[c].dtype)
                         and not pd.api.types.is_numeric_dtype(ban_mac_dinh[c])
                         else ("Kiểu chuỗi - cần chuẩn hóa về category" if not la_cot_so else "Đúng kiểu số")),
        })
    return pd.DataFrame(dong)


def bang_loi_chi_tiet(nhan):
    """Ma trận: cột x nhãn lỗi (không gồm Hợp lệ)."""
    m = nhan.apply(lambda col: col.value_counts()).fillna(0).astype(int).T
    m = m.drop(columns=[OK], errors="ignore")
    thu_tu = [n for n in NHOM_LOI if n in m.columns]
    return m[thu_tu]


def bang_tong_hop_loi(loi_chi_tiet, tong_o):
    t = loi_chi_tiet.sum().rename("Số ô").to_frame()
    t["Nhóm lỗi"] = [NHOM_LOI[n] for n in t.index]
    t["Mức độ"] = [muc_do_cua_nhan(n) for n in t.index]
    t["Tỷ lệ trên tổng số ô (%)"] = (t["Số ô"] / tong_o * 100).round(2)
    t["Số cột bị ảnh hưởng"] = (loi_chi_tiet > 0).sum()
    return t.sort_values("Số ô", ascending=False)


def bang_iqr(so_hop_le):
    """Outlier theo IQR trên các giá trị KHÔNG bị gắn lỗi xác nhận."""
    dong = []
    for c in COT_SO_LIEN_TUC:
        v = so_hop_le[c].dropna()
        q1, q3 = v.quantile(0.25), v.quantile(0.75)
        iqr = q3 - q1
        lo, hi = q1 - 1.5 * iqr, q3 + 1.5 * iqr
        n_ngoai = int(((v < lo) | (v > hi)).sum())
        dong.append({"Biến": c, "Số giá trị xét": len(v), "Q1": q1, "Q3": q3, "IQR": iqr,
                     "Cận dưới IQR": lo, "Cận trên IQR": hi, "Số outlier": n_ngoai,
                     "Tỷ lệ outlier (%)": round(n_ngoai / len(v) * 100, 2), "Max": v.max()})
    return pd.DataFrame(dong).set_index("Biến")


def bang_tan_suat(ban, nhan):
    kq = {}
    for c in COT_CHU:
        vc = ban[c].value_counts()
        df = pd.DataFrame({"Giá trị (nguyên văn)": [repr(v) for v in vc.index],
                           "Số lượng": vc.values,
                           "Tỷ lệ (%)": (vc.values / len(ban) * 100).round(2),
                           "Nhãn kiểm toán": [_nhan_gia_tri_phan_loai(v, c) for v in vc.index]})
        kq[c] = df
    return kq


def bang_doi_chieu(sach, ban, nhan, muc):
    """Đối chiếu ô-ô với file gốc sạch (chỉ để KIỂM CHỨNG quy tắc, không dùng để sửa)."""
    loai_all = {}
    for c in ban.columns:
        if c in COT_CHU:
            giong = ban[c] == sach[c]
        else:
            d = pd.to_numeric(ban[c], errors="coerce")
            g = sach[c].astype(float)
            giong = (d == g) | (g.isna() & nhan[c].isin([THIEU_RONG, THIEU_MA]))
        khac = ~giong.to_numpy()
        m = muc[c].to_numpy()
        loai_all[c] = np.select(
            [(m == "Có vấn đề") & khac, (m == "Có vấn đề") & ~khac,
             (m == "Cần kiểm tra") & khac, (m == "Cần kiểm tra") & ~khac, (m == "Đạt") & khac],
            ["Lỗi phát hiện đúng", "Gắn lỗi nhưng trùng file gốc",
             "Nghi ngờ - khác file gốc", "Nghi ngờ - trùng file gốc", "Lỗi ẩn (quy tắc bỏ sót)"],
            default="Hợp lệ - trùng file gốc")
    loai_df = pd.DataFrame(loai_all)
    bang = loai_df.apply(lambda col: col.value_counts()).fillna(0).astype(int).T
    return bang, loai_df


# ----------------------------------------------------------------------------
# 6. HÀM CHÍNH: CHẠY TOÀN BỘ KIỂM TOÁN
# ----------------------------------------------------------------------------
def chay_kiem_toan():
    md5_truoc = {FILE_SACH.name: ma_bam(FILE_SACH), FILE_BAN.name: ma_bam(FILE_BAN)}
    sach, ban, ban_mac_dinh = doc_du_lieu()
    nhan, muc = gan_nhan(ban)

    # Giá trị số đọc được trực tiếp (chỉ những ô là số thuần) - chưa làm sạch
    so_tho = ban[COT_SO].apply(lambda col: pd.to_numeric(col.str.strip(), errors="coerce"))
    # Giá trị số sau khi loại các ô có lỗi xác nhận - chỉ để xem phân phối, KHÔNG ghi ra file
    so_hop_le = so_tho.where(muc[COT_SO] != "Có vấn đề")

    loi_chi_tiet = bang_loi_chi_tiet(nhan)
    thieu, lech_na = bang_thieu(sach, ban_mac_dinh, nhan)
    doi_chieu, loai_doi_chieu = bang_doi_chieu(sach, ban, nhan, muc)
    so_loi_dong = (muc == "Có vấn đề").sum(axis=1)

    kq = {
        "md5_truoc": md5_truoc, "sach": sach, "ban": ban, "ban_mac_dinh": ban_mac_dinh,
        "nhan": nhan, "muc": muc, "so_tho": so_tho, "so_hop_le": so_hop_le,
        "cau_truc": kiem_tra_cau_truc(sach, ban),
        "kich_thuoc": bang_kich_thuoc(sach, ban),
        "tu_dien": bang_tu_dien(sach, ban_mac_dinh),
        "thieu": thieu, "lech_na": lech_na,
        "trung_lap": bang_trung_lap(sach, ban),
        "kieu": bang_kieu_du_lieu(sach, ban, ban_mac_dinh),
        "loi_chi_tiet": loi_chi_tiet,
        "tong_hop_loi": bang_tong_hop_loi(loi_chi_tiet, ban.size),
        "iqr": bang_iqr(so_hop_le),
        "mo_ta_so_tho": so_tho.describe().T.round(2),
        "mo_ta_so_hop_le": so_hop_le.describe().T.round(2),
        "mo_ta_so_goc": sach[COT_SO].describe().T.round(2),
        "tan_suat": bang_tan_suat(ban, nhan),
        "doi_chieu": doi_chieu, "loai_doi_chieu": loai_doi_chieu,
        "so_loi_dong": so_loi_dong,
        "muc_theo_cot": muc.apply(lambda col: col.value_counts()).fillna(0).astype(int).T
                           .reindex(columns=["Đạt", "Cần kiểm tra", "Có vấn đề"], fill_value=0),
    }
    tong = muc.stack().value_counts()
    kq["tong_quan"] = {
        "tong_o": int(ban.size),
        "o_dat": int(tong.get("Đạt", 0)),
        "o_nghi_ngo": int(tong.get("Cần kiểm tra", 0)),
        "o_loi": int(tong.get("Có vấn đề", 0)),
        "dong_co_loi": int((so_loi_dong > 0).sum()),
        "dong_sach_hoan_toan": int((so_loi_dong == 0).sum()),
    }
    return kq


_KQ_CACHE = None
FILE_CACHE = THU_MUC / "kiem_toan_cache.pkl"

def lay_ket_qua(buoc_chay_lai=False):
    """
    Trả về kết quả kiểm toán. Sử dụng cache trong bộ nhớ hoặc file kiem_toan_cache.pkl
    để nạp tức thì (0.2s), giúp mọi cell trong notebook có thể chạy độc lập không bị NameError.
    """
    global _KQ_CACHE
    if not buoc_chay_lai and _KQ_CACHE is not None:
        return _KQ_CACHE

    if not buoc_chay_lai and FILE_CACHE.exists():
        try:
            import pickle
            with open(FILE_CACHE, "rb") as f:
                _KQ_CACHE = pickle.load(f)
            return _KQ_CACHE
        except Exception:
            pass

    _KQ_CACHE = chay_kiem_toan()
    try:
        import pickle
        with open(FILE_CACHE, "wb") as f:
            pickle.dump(_KQ_CACHE, f)
    except Exception:
        pass
    return _KQ_CACHE


def kiem_tra_toan_ven(kq):
    """So sánh MD5 trước/sau để xác nhận không file đầu vào nào bị thay đổi."""
    sau = {FILE_SACH.name: ma_bam(FILE_SACH), FILE_BAN.name: ma_bam(FILE_BAN)}
    return pd.DataFrame([{"Tệp": k, "MD5 trước": v, "MD5 sau": sau[k],
                          "Không thay đổi": v == sau[k]} for k, v in kq["md5_truoc"].items()])


# ----------------------------------------------------------------------------
# 7. BIỂU ĐỒ (mỗi hàm lưu 1 file PNG vào bieu_do/ và trả về đường dẫn)
# ----------------------------------------------------------------------------
def _luu(fig, ten):
    THU_MUC_BD.mkdir(parents=True, exist_ok=True)
    p = THU_MUC_BD / ten
    fig.savefig(p, dpi=110, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    return p


def xac_nhan_anh(p):
    """Đọc lại file ảnh vừa lưu để xác minh ảnh tồn tại và hợp lệ."""
    anh = plt.imread(p)
    cao, rong = anh.shape[:2]
    print(f"Đã lưu và đọc lại thành công: figures/kiem_toan_du_lieu/{p.name} | {rong}×{cao} px | {p.stat().st_size / 1024:.1f} KB")


def _chu_giai_den(tieu_chi):
    return [Patch(color=MAU_MUC_DO[k], label=f"{k} ({v})") for k, v in tieu_chi.items()]


def ve_01_gia_tri_thieu(kq):
    t = kq["thieu"].sort_values(["Tỷ lệ thiếu (%)", "Tổng thiếu"])
    y = np.arange(len(t))
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(16, 9), sharey=True)
    a1.barh(y, t["Pandas tự nhận diện"], color="#7F8C8D",
            label="Pandas tự nhận diện (ô rỗng, N/A, null, NULL, None)")
    a1.barh(y, t["Mã thiếu ẩn"], left=t["Pandas tự nhận diện"], color="#8E44AD",
            label="Mã thiếu ẩn (?, -, unknown, chưa rõ, nan kèm đơn vị)")
    for i, v in enumerate(t["Tổng thiếu"]):
        a1.text(v, i, f" {so(v)}", va="center", fontsize=8)
    a1.set_yticks(y, t.index)
    a1.set_xlabel("Số ô thiếu")
    a1.set_ylabel("Tên cột")
    a1.set_title("Số lượng giá trị thiếu (tách theo cách mã hóa)")
    a1.legend(loc="lower right", fontsize=8)
    a1.set_xlim(0, t["Tổng thiếu"].max() * 1.18)

    a2.barh(y, t["Tỷ lệ thiếu (%)"], color=t["Trạng thái"].map(MAU_MUC_DO))
    for x in (5, 20):
        a2.axvline(x, ls="--", c="grey", lw=1)
    for i, v in enumerate(t["Tỷ lệ thiếu (%)"]):
        a2.text(v, i, f" {pt(v)}%", va="center", fontsize=8)
    a2.set_xlabel("Tỷ lệ thiếu (% số dòng)")
    a2.set_title("Tỷ lệ giá trị thiếu và trạng thái")
    a2.legend(handles=_chu_giai_den({"Đạt": "< 5%", "Cần kiểm tra": "5% - < 20%", "Có vấn đề": "≥ 20%"}),
              loc="lower right", fontsize=8, title="Tiêu chí")
    a2.set_xlim(0, t["Tỷ lệ thiếu (%)"].max() * 1.18)
    fig.suptitle("Hình 1. Số lượng và tỷ lệ giá trị thiếu theo cột - dữ liệu bẩn, trước làm sạch",
                 fontsize=14, fontweight="bold")
    fig.tight_layout()
    return _luu(fig, "01_gia_tri_thieu_theo_cot.png")


def ve_02_boxplot_tho(kq):
    s = kq["so_tho"]
    fig = plt.figure(figsize=(16, 11))
    gs = fig.add_gridspec(2, 4, height_ratios=[1, 1.1], hspace=0.45, wspace=0.35)
    kieu_ngoai = dict(marker="o", markersize=3, markerfacecolor=DO, markeredgecolor="none", alpha=0.4)
    for i, c in enumerate(COT_SO_LIEN_TUC):
        ax = fig.add_subplot(gs[0, i])
        v = s[c].dropna()
        ax.boxplot(v, widths=0.5, flierprops=kieu_ngoai)
        ax.set_yscale("symlog", linthresh=10)
        lo, hi = MIEN_HOP_LE[c]
        ax.axhspan(lo, hi, color=XANH, alpha=0.15, label="Miền hợp lệ")
        ax.set_title(c)
        ax.set_xticks([])
        ax.set_ylabel(f"{DON_VI_TRUC[c]} (thang symlog)")
        ax.text(0.03, 0.97, f"min = {so(v.min())}\nmax = {so(v.max())}", transform=ax.transAxes,
                va="top", fontsize=8, bbox=dict(fc="white", ec="grey", alpha=0.8))
        if i == 0:
            ax.legend(loc="lower right", fontsize=8)
    ax = fig.add_subplot(gs[1, :])
    ax.boxplot([s[c].dropna() for c in COT_DIEM], widths=0.5, flierprops=kieu_ngoai)
    ax.set_yscale("symlog", linthresh=1)
    ax.axhspan(0, 5, color=XANH, alpha=0.15, label="Thang điểm hợp lệ 0-5")
    ax.set_xticks(range(1, len(COT_DIEM) + 1), COT_DIEM, rotation=30, ha="right", fontsize=9)
    ax.set_ylabel("Điểm đánh giá (thang symlog)")
    ax.set_xlabel("Tiêu chí dịch vụ")
    ax.set_title("14 biến điểm đánh giá dịch vụ")
    ax.legend(loc="upper right", fontsize=8)
    fig.suptitle("Hình 2. Boxplot giá trị số đọc trực tiếp từ dữ liệu bẩn (gồm cả 9999, số âm, số bị phóng đại)",
                 fontsize=14, fontweight="bold")
    return _luu(fig, "02_boxplot_gia_tri_tho.png")


def ve_03_boxplot_iqr(kq):
    s, info = kq["so_hop_le"], kq["iqr"]
    fig, axes = plt.subplots(1, 4, figsize=(16, 6))
    for ax, c in zip(axes, COT_SO_LIEN_TUC):
        v = s[c].dropna()
        ax.boxplot(v, widths=0.5, patch_artist=True, boxprops=dict(facecolor="#AED6F1"),
                   flierprops=dict(marker="o", markersize=3, markerfacecolor=VANG,
                                   markeredgecolor="none", alpha=0.5))
        hi = info.loc[c, "Cận trên IQR"]
        ax.axhline(hi, ls="--", c="#B9770E", lw=1, label=f"Cận trên IQR = {pt(hi)}")
        ax.set_title(f"{c}\n{so(info.loc[c, 'Số outlier'])} outlier ({pt(info.loc[c, 'Tỷ lệ outlier (%)'])}%)",
                     fontsize=11)
        ax.set_xticks([])
        ax.set_ylabel(DON_VI_TRUC[c])
        ax.legend(loc="upper right", fontsize=8)
    fig.suptitle("Hình 3. Boxplot các giá trị trong miền hợp lệ - outlier IQR (màu vàng) chỉ là NGHI NGỜ, chưa phải lỗi",
                 fontsize=13, fontweight="bold")
    fig.tight_layout()
    return _luu(fig, "03_boxplot_outlier_iqr.png")


def ve_04_so_luong_loai_loi(kq):
    t = kq["tong_hop_loi"][["Số ô", "Mức độ"]].copy()
    trung = int(kq["trung_lap"]["File bẩn"].iloc[0])
    t.loc["Trùng lặp: dòng trùng hoàn toàn (đơn vị: dòng)"] = [trung, "Đạt" if trung == 0 else "Có vấn đề"]
    t.loc["Nghi ngờ: outlier IQR biến liên tục"] = [int(kq["iqr"]["Số outlier"].sum()), "Cần kiểm tra"]
    t = t.sort_values("Số ô")
    fig, ax = plt.subplots(figsize=(14, 8))
    ax.barh(t.index, t["Số ô"], color=t["Mức độ"].map(MAU_MUC_DO))
    tong = kq["tong_quan"]["tong_o"]
    for i, v in enumerate(t["Số ô"]):
        ax.text(v, i, f" {so(v)} ({pt(v / tong * 100, 2)}%)", va="center", fontsize=9)
    ax.set_xlim(0, t["Số ô"].max() * 1.25)
    ax.set_xlabel(f"Số ô (trên tổng {so(tong)} ô của file bẩn)")
    ax.set_ylabel("Loại lỗi")
    ax.legend(handles=_chu_giai_den({"Đạt": "không phát hiện lỗi",
                                     "Cần kiểm tra": "nghi ngờ, cần xác minh",
                                     "Có vấn đề": "lỗi xác nhận theo quy tắc"}),
              loc="lower right", title="Mức độ")
    ax.set_title("Hình 4. Thống kê số lượng các loại lỗi đã phát hiện trong dữ liệu bẩn", fontsize=14)
    fig.tight_layout()
    return _luu(fig, "04_so_luong_cac_loai_loi.png")


def ve_05_ban_do_nhiet(kq):
    m = kq["loi_chi_tiet"]
    m = m.loc[:, m.sum() > 0]
    m = m.loc[m.sum(axis=1) > 0]
    ten_ngan = {c: c.split(":")[0] + ":" + c.split(":")[1].split("(")[0] for c in m.columns}
    chu = m.map(lambda v: so(v) if v > 0 else "")
    fig, ax = plt.subplots(figsize=(17, 11))
    sns.heatmap(m.replace(0, np.nan), annot=chu, fmt="", cmap="YlOrRd", norm=LogNorm(),
                linewidths=0.4, linecolor="white", annot_kws={"fontsize": 7.5},
                cbar_kws={"label": "Số ô (thang log)"}, ax=ax)
    ax.set_xticklabels([ten_ngan[c] for c in m.columns], rotation=35, ha="right", fontsize=9)
    ax.set_xlabel("Loại lỗi / nghi ngờ")
    ax.set_ylabel("Tên cột")
    ax.set_title("Hình 5. Bản đồ nhiệt số ô lỗi theo cột và loại lỗi (ô trống = không có)", fontsize=14)
    fig.tight_layout()
    return _luu(fig, "05_ban_do_nhiet_loi_theo_cot.png")


def ve_06_trang_thai_phan_loai(kq):
    nhan = kq["nhan"][COT_CHU]
    thu_tu = [OK, HOA_THUONG, KHOANG_TRANG, CAT_CUT, GIA_TRI_LA, THIEU_MA, THIEU_RONG]
    mau = [XANH, "#F39C12", "#E67E22", "#A04000", "#5D6D7E", "#8E44AD", "#7F8C8D"]
    bang = nhan.apply(lambda c: c.value_counts(normalize=True) * 100).T.reindex(columns=thu_tu).fillna(0)
    fig, ax = plt.subplots(figsize=(14, 6))
    trai = np.zeros(len(bang))
    for nh, mu in zip(thu_tu, mau):
        ax.barh(bang.index, bang[nh], left=trai, color=mu, label=nh)
        for i, (l, v) in enumerate(zip(trai, bang[nh])):
            if v >= 3:
                ax.text(l + v / 2, i, f"{pt(v)}%", ha="center", va="center", fontsize=8, color="white")
        trai += bang[nh].to_numpy()
    ax.set_xlim(0, 100)
    ax.set_xlabel("Tỷ lệ số dòng (%)")
    ax.set_ylabel("Biến phân loại")
    ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.13), ncol=3, fontsize=9)
    ax.set_title("Hình 6. Cơ cấu trạng thái giá trị của các biến phân loại (xanh = đúng chuẩn, màu khác = có vấn đề)",
                 fontsize=13)
    fig.tight_layout()
    return _luu(fig, "06_trang_thai_bien_phan_loai.png")


def ve_07_bien_the_phan_loai(kq):
    fig, axes = plt.subplots(len(COT_CHU), 1, figsize=(14, 26))
    for ax, c in zip(axes, COT_CHU):
        df = kq["tan_suat"][c].iloc[::-1]
        mau = [XANH if n == OK else ("#8E44AD" if n.startswith("Thiếu") else DO) for n in df["Nhãn kiểm toán"]]
        ax.barh(df["Giá trị (nguyên văn)"], df["Số lượng"], color=mau)
        for i, v in enumerate(df["Số lượng"]):
            ax.text(v, i, f" {so(v)}", va="center", fontsize=8)
        ax.set_xlim(0, df["Số lượng"].max() * 1.15)
        ax.set_title(f"{c}: {len(df)} giá trị khác nhau (chuẩn chỉ có {len(GIA_TRI_CHUAN[c])})", fontsize=11)
        ax.set_xlabel("Số dòng")
        ax.set_ylabel("Giá trị nguyên văn")
        ax.tick_params(axis="y", labelsize=8)
    axes[0].legend(handles=[Patch(color=XANH, label="Giá trị chuẩn"),
                            Patch(color=DO, label="Biến thể sai định dạng (hoa/thường, khoảng trắng, cắt cụt)"),
                            Patch(color="#8E44AD", label="Mã thiếu (rỗng, N/A, null, ?, unknown, chưa rõ...)")],
                   loc="lower right", fontsize=8)
    fig.suptitle("Hình 7. Tần suất từng giá trị nguyên văn của biến phân loại (dấu nháy cho thấy khoảng trắng thừa)",
                 fontsize=14, fontweight="bold", y=1.0)
    fig.tight_layout()
    return _luu(fig, "07_tan_suat_gia_tri_phan_loai.png")


def ve_08_den_giao_thong(kq):
    b = kq["muc_theo_cot"]
    pct = b.div(b.sum(axis=1), axis=0) * 100
    pct = pct.sort_values("Có vấn đề")
    fig, ax = plt.subplots(figsize=(14, 10))
    trai = np.zeros(len(pct))
    for k in ["Đạt", "Cần kiểm tra", "Có vấn đề"]:
        ax.barh(pct.index, pct[k], left=trai, color=MAU_MUC_DO[k], label=k)
        trai += pct[k].to_numpy()
    for i, v in enumerate(pct["Có vấn đề"]):
        ax.text(101, i, f"{pt(v)}% lỗi", va="center", fontsize=8)
    ax.set_xlim(0, 112)
    ax.set_xlabel("Tỷ lệ số ô trong cột (%)")
    ax.set_ylabel("Tên cột")
    ax.legend(title="Trạng thái ô", loc="lower left", bbox_to_anchor=(0, -0.12), ncol=3)
    ax.set_title("Hình 8. Trạng thái 'đèn giao thông' của từng cột: Đạt / Cần kiểm tra / Có vấn đề", fontsize=14)
    fig.tight_layout()
    return _luu(fig, "08_trang_thai_o_theo_cot.png")


def ve_09_loi_diem_dich_vu(kq):
    m = kq["loi_chi_tiet"].loc[COT_DIEM]
    cot_ve = [(THIEU_RONG, "#7F8C8D"), (THIEU_MA, "#8E44AD"), (DON_VI_L, "#E67E22"),
              (MA_9999, "#922B21"), (AM, DO), (NGOAI_MIEN, "#F1948A"), (NN_DIEM0, VANG)]
    cot_ve = [(n, c) for n, c in cot_ve if n in m.columns]
    fig, ax = plt.subplots(figsize=(14, 8))
    trai = np.zeros(len(m))
    for n, mu in cot_ve:
        ax.barh(m.index, m[n], left=trai, color=mu, label=n)
        trai += m[n].to_numpy()
    for i, v in enumerate(trai):
        ax.text(v, i, f" {so(v)}", va="center", fontsize=8)
    ax.set_xlim(0, trai.max() * 1.12)
    ax.set_xlabel("Số ô")
    ax.set_ylabel("Tiêu chí dịch vụ")
    ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.09), ncol=2, fontsize=9)
    ax.set_title("Hình 9. Các vấn đề trong 14 biến điểm đánh giá (thang hợp lệ 0-5)", fontsize=14)
    fig.tight_layout()
    return _luu(fig, "09_van_de_diem_dich_vu.png")


def ve_10_so_loi_moi_dong(kq):
    vc = kq["so_loi_dong"].value_counts().sort_index()
    n = len(kq["so_loi_dong"])
    fig, ax = plt.subplots(figsize=(13, 6))
    ax.bar(vc.index.astype(str), vc.values, color=[XANH if i == 0 else DO for i in vc.index])
    for x, v in zip(vc.index.astype(str), vc.values):
        ax.text(x, v, f"{so(v)}\n({pt(v / n * 100)}%)", ha="center", va="bottom", fontsize=8)
    ax.set_ylim(0, vc.max() * 1.18)
    ax.set_xlabel("Số ô có lỗi xác nhận trong một dòng")
    ax.set_ylabel("Số dòng")
    ax.legend(handles=[Patch(color=XANH, label="Dòng không có lỗi xác nhận"),
                       Patch(color=DO, label="Dòng có ít nhất 1 lỗi")])
    ax.set_title("Hình 10. Phân bố số ô lỗi trên mỗi dòng dữ liệu bẩn", fontsize=14)
    fig.tight_layout()
    return _luu(fig, "10_so_o_loi_moi_dong.png")


def ve_11_doi_chieu_goc(kq):
    b = kq["doi_chieu"].drop(columns=["Hợp lệ - trùng file gốc"], errors="ignore")
    thu_tu = [("Lỗi phát hiện đúng", DO), ("Gắn lỗi nhưng trùng file gốc", "#7F8C8D"),
              ("Nghi ngờ - khác file gốc", "#E67E22"), ("Nghi ngờ - trùng file gốc", VANG),
              ("Lỗi ẩn (quy tắc bỏ sót)", "#1F3A93")]
    thu_tu = [(k, c) for k, c in thu_tu if k in b.columns]
    b = b.loc[b.sum(axis=1).sort_values().index]
    fig, ax = plt.subplots(figsize=(14, 10))
    trai = np.zeros(len(b))
    for k, mu in thu_tu:
        ax.barh(b.index, b[k], left=trai, color=mu, label=k)
        trai += b[k].to_numpy()
    ax.xaxis.set_major_formatter(plt.matplotlib.ticker.StrMethodFormatter('{x:,.0f}'))
    ax.set_xlabel("Số ô")
    ax.set_ylabel("Tên cột")
    ax.grid(axis='x', linestyle='--', alpha=0.5)
    ax.legend(loc="lower right", fontsize=10, frameon=True, facecolor="white", framealpha=0.9)
    ax.set_title("Hình 11. Kiểm chứng quy tắc kiểm toán bằng cách đối chiếu ô-ô với file gốc sạch", fontsize=14, fontweight="bold")
    fig.tight_layout()
    return _luu(fig, "11_doi_chieu_voi_file_goc.png")


DS_BIEU_DO = [ve_01_gia_tri_thieu, ve_02_boxplot_tho, ve_03_boxplot_iqr, ve_04_so_luong_loai_loi,
              ve_05_ban_do_nhiet, ve_06_trang_thai_phan_loai, ve_07_bien_the_phan_loai,
              ve_08_den_giao_thong, ve_09_loi_diem_dich_vu, ve_10_so_loi_moi_dong, ve_11_doi_chieu_goc]


if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding="utf-8")
    kq = chay_kiem_toan()
    print(kq["kich_thuoc"].to_string())
    print(kq["tong_quan"])
    for ham in DS_BIEU_DO:
        xac_nhan_anh(ham(kq))
    print(kiem_tra_toan_ven(kq).to_string())
