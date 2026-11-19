"""Build Chapter 3 Quarto draft (outputs/chuong3_ban_thao.qmd) from verified outputs of src/phan_tich_chuong3.py.

All numbers, percentages, variable names, statistical tests, effect sizes, and rankings
are pulled dynamically from outputs/chuong3/ket_qua.json and CSV outputs.
"""
from pathlib import Path
import json
import pandas as pd

R = Path(__file__).resolve().parents[1]
O = R / "outputs" / "chuong3"
s = json.loads((O / "ket_qua.json").read_text(encoding="utf-8"))


def n(x) -> str:
    return f"{int(round(float(x))):,}".replace(",", ".")


def f(x, k: int = 4) -> str:
    return f"{float(x):.{k}f}".replace(".", ",")


def fn(x, k: int = 1) -> str:
    """Định dạng số lớn có phần thập phân (ví dụ thống kê U có đuôi ,5) theo chuẩn tiếng Việt."""
    val = float(x)
    int_part = int(val)
    dec_part = round(abs(val - int_part) * (10 ** k))
    int_str = f"{int_part:,}".replace(",", ".")
    if k <= 0:
        return int_str
    return f"{int_str},{dec_part:0{k}d}"


def sci(x) -> str:
    m, e = f"{float(x):.2e}".split("e")
    return rf"{m.replace('.', ',')} \times 10^{{{int(e)}}}"


def table(frame: pd.DataFrame) -> str:
    header = "| " + " | ".join(map(str, frame.columns)) + " |\n"
    rule = "|" + "|".join(["---"] * len(frame.columns)) + "|\n"
    body = "\n".join(
        "| " + " | ".join(str(v) for v in row) + " |"
        for row in frame.itertuples(index=False, name=None)
    )
    return header + rule + body


# 1. Từ điển dữ liệu rút gọn
dict_tbl = pd.DataFrame([
    ["`ID`", "Mã bản ghi (khóa ghép duy nhất, loại khỏi mô hình)", "Số nguyên `int64`, 1–129.880 (0 dòng trùng)"],
    ["`Gender`, `Customer Type`, `Type of Travel`, `Class`", "Giới tính; loại khách; mục đích chuyến đi; hạng ghế", "`Female`/`Male`; `Returning Customer`/`First-time Customer`/`Unknown`; `Business Travel`/`Personal Travel`/`Unknown`; `Business`/`Economy`/`Economy Plus`"],
    ["`Age`", "Tuổi hành khách (năm)", "Quy ước (0; 100]; thực tế trên `PJ21.csv`: [7; 100]"],
    ["`Flight Distance`", "Khoảng cách bay (đơn vị gốc chưa xác minh)", "Quy ước (0; 9.999); thực tế trên `PJ21.csv`: [31; 9.910]"],
    ["`Departure Delay`, `Arrival Delay`", "Độ trễ khởi hành, độ trễ đến (quy ước: phút)", "Quy ước [0; 2.000]; thực tế trên `PJ21.csv`: [0; 2.000]"],
    ["14 điểm dịch vụ (xem @tbl-spearman)", "Điểm đánh giá thứ bậc từng điểm chạm dịch vụ", "11 biến có miền thực tế 0–5; `Check-in Service`, `Seat Comfort`, `Baggage Handling` có miền 1–5 (0 ô mã `0`)"],
    ["`Satisfaction`", "Mức hài lòng tổng thể (biến mục tiêu nhị phân)", "`Satisfied` (1), `Neutral or Dissatisfied` (0)"],
], columns=["Biến / Nhóm biến", "Ý nghĩa nghiệp vụ", "Miền giá trị trong `PJ21.csv`"])

# 2. Bảng kiểm toán chất lượng trước - sau làm sạch (đầy đủ 24 biến)
q_all = pd.read_csv(O / "kiem_tra_chat_luong.csv")
q_idx = q_all.set_index("bien")

audit_short = pd.DataFrame({
    "Biến": q_all["bien"],
    "Thiếu": q_all["thieu_ke_ca_ma_an_raw"].map(n),
    "Sai ĐD": q_all["sai_dinh_dang_raw"].map(n),
    "Ngoài miền": q_all["ngoai_mien_raw"].map(n),
    "Ô lỗi duy nhất": q_all["so_o_loi_duy_nhat_raw"].map(n),
    "Thuộc dòng loại": q_all["o_loi_thuoc_dong_bi_loai"].map(n),
    "Được sửa (PJ21)": q_all["o_loi_duoc_sua_dong_giu_lai"].map(n),
    "Giá trị điền": q_all["gia_tri_dien_khuyet_tren_pj21"],
    "Số ô điền": q_all["so_o_dien_khuyet_tren_pj21"].map(n),
    "Lỗi sau": q_all["so_o_loi_duy_nhat_sau_xu_ly"].map(n),
})
audit_short = pd.concat([audit_short, pd.DataFrame([{
    "Biến": "**Tổng (24 cột)**",
    "Thiếu": f"**{n(s['missing_including_codes_raw'])}**",
    "Sai ĐD": f"**{n(s['format_errors_raw'])}**",
    "Ngoài miền": f"**{n(s['outlier_errors_raw'])}**",
    "Ô lỗi duy nhất": f"**{n(s['unique_error_cells_raw'])}**",
    "Thuộc dòng loại": f"**{n(s['unique_error_cells_dropped_rows'])}**",
    "Được sửa (PJ21)": f"**{n(s['unique_error_cells_fixed_kept_rows'])}**",
    "Giá trị điền": "**—**",
    "Số ô điền": f"**{n(s['total_imputed_Or_unknown_cells_pj21'])}**",
    "Lỗi sau": f"**{n(s['unique_error_cells_after'])}**",
}])], ignore_index=True)

# 3. Thống kê mô tả 4 biến định lượng
d = pd.read_csv(O / "thong_ke_mo_ta.csv", index_col=0)
d_metric = d.loc[["Age", "Flight Distance", "Departure Delay", "Arrival Delay"]]
dt = pd.DataFrame({
    "Biến": d_metric.index,
    "Trung bình": d_metric["mean"].map(f),
    "Độ lệch chuẩn": d_metric["std"].map(f),
    "Min": d_metric["min"].map(n),
    "Q1 (25%)": d_metric["25%"].map(n),
    "Trung vị (50%)": d_metric["50%"].map(n),
    "Q3 (75%)": d_metric["75%"].map(n),
    "P99 (99%)": d_metric["99%"].map(n),
    "Max": d_metric["max"].map(n),
})

# 4. Ngoại lai thống kê IQR trên PJ21.csv
out = pd.read_csv(O / "ngoai_lai_iqr.csv")
ot = pd.DataFrame({
    "Biến": out["bien"],
    "Q1": out["Q1"].map(lambda x: f(x, 1)),
    "Q3": out["Q3"].map(lambda x: f(x, 1)),
    "IQR": out["IQR"].map(lambda x: f(x, 1)),
    "Cận trên IQR": out["can_tren"].map(lambda x: f(x, 1)),
    "Số ngoại lai IQR": out["so_ngoai_lai"].map(n),
    "Tỷ lệ (%)": out["ty_le_pct"].map(f),
})

# 5. Bảng phân khúc hành khách (bao gồm nhóm Unknown riêng và dòng Business quan sát được)
group_rows = []
for c in ["Class", "Customer Type", "Type of Travel", "Gender"]:
    t = pd.read_csv(O / f"{c.replace(' ', '_')}.csv")
    for _, row in t.iterrows():
        group_rows.append([c, row.iloc[0], n(row["n"]), n(row["hai_long"]), f(row["ty_le"])])
gt = pd.DataFrame(group_rows, columns=["Biến phân nhóm", "Nhóm", "Số bản ghi (n)", "Số hài lòng", "Tỷ lệ hài lòng (%)"])

_obs_n = int(s["class_business_obs_n"])
_obs_pct = float(s["class_business_obs_satisfied_pct"])
gt_rows = gt.values.tolist()
_pos = [i for i, r in enumerate(gt_rows) if r[0] == "Class" and r[1] == "Business"][0]
gt_rows.insert(_pos + 1, ["Class", "Business (chỉ ô `Class` quan sát được)", n(_obs_n), n(round(_obs_n * _obs_pct / 100)), f(_obs_pct)])
gt = pd.DataFrame(gt_rows, columns=gt.columns)

# 6. Bảng nhóm độ trễ khởi hành (Departure Delay) và độ trễ đến (Arrival Delay) cho RQ2
dep_delay = pd.read_csv(O / "nhom_do_tre_khoi_hanh.csv")
arr_delay = pd.read_csv(O / "nhom_do_tre.csv")

delay_rows = []
for label_name, df_d in [("Departure Delay (Trễ khởi hành)", dep_delay), ("Arrival Delay (Trễ đến)", arr_delay)]:
    for _, r in df_d.iterrows():
        delay_rows.append([
            label_name,
            r.iloc[0],
            n(r["n"]),
            f(r["ty_le"]),
            n(r["n_quan_sat"]),
            f(r["ty_le_quan_sat"]),
        ])
de_both = pd.DataFrame(
    delay_rows,
    columns=[
        "Biến độ trễ",
        "Nhóm thời gian",
        "Số bản ghi PJ21",
        "Hài lòng PJ21 (%)",
        "Số bản ghi quan sát",
        "Hài lòng quan sát (%)",
    ],
)

# 7. Bảng tương quan Spearman (14 tiêu chí dịch vụ kèm thứ hạng theo từng cách tính)
cor = pd.read_csv(O / "do_nhay_diem_0.csv", index_col=0).sort_values("giu_0_pj21", ascending=False)
co = pd.DataFrame({
    "Tiêu chí dịch vụ": cor.index,
    "ρ giữ mã 0 (Hạng)": [f"{f(v)} (#{int(rk)})" for v, rk in zip(cor["giu_0_pj21"], cor["hang_giu_0"])],
    "ρ bỏ mã 0 (Hạng)": [f"{f(v)} (#{int(rk)})" for v, rk in zip(cor["bo_0_pj21"], cor["hang_bo_0"])],
    "ρ chỉ ô quan sát (Hạng)": [f"{f(v)} (#{int(rk)})" for v, rk in zip(cor["chi_o_quan_sat"], cor["hang_quan_sat"])],
    "Số ô ≠ 0": cor["so_o_khac_0"].map(n).values,
    "Số ô quan sát": cor["so_o_quan_sat"].map(n).values,
})

# 8. Bảng kiểm định Chi-square & Cramér's V cho các biến phân loại (lấy 100% từ ket_qua.json)
chi2_tbl = pd.DataFrame([
    ["`Class`", "Quan sát hợp lệ (chính)", n(s["chi2_obs_n"]), s["chi2_obs_df"], f(s["expected_min_obs"], 1), f(s["chi2_obs"], 1), "$< 10^{-300}$", f(s["cramers_v_obs"])],
    ["`Class`", "Toàn `PJ21.csv` (gồm điền Mode)", n(s["chi2_full_n"]), s["chi2_obs_df"], f(s["expected_min_full"], 1), f(s["chi2_full"], 1), "$< 10^{-300}$", f(s["cramers_v_full"])],
    ["`Type of Travel`", "Quan sát hợp lệ (loại `Unknown`, $2\\times 2$)", n(s["chi2_travel_obs_n"]), s["chi2_travel_obs_df"], f(s["expected_min_travel_obs"], 1), f(s["chi2_travel_obs"], 1), "$< 10^{-300}$", f(s["cramers_v_travel_obs"])],
    ["`Type of Travel`", "Toàn `PJ21.csv` (gồm `Unknown`, $3\\times 2$)", n(s["chi2_full_n"]), s["chi2_travel_full_df"], f(s["expected_min_travel_full"], 1), f(s["chi2_travel_full"], 1), "$< 10^{-300}$", f(s["cramers_v_travel_full"])],
    ["`Customer Type`", "Quan sát hợp lệ (loại `Unknown`, $2\\times 2$)", n(s["chi2_cust_obs_n"]), s["chi2_cust_obs_df"], f(s["expected_min_cust_obs"], 1), f(s["chi2_cust_obs"], 1), "$< 10^{-300}$", f(s["cramers_v_cust_obs"])],
    ["`Customer Type`", "Toàn `PJ21.csv` (gồm `Unknown`, $3\\times 2$)", n(s["chi2_full_n"]), s["chi2_cust_full_df"], f(s["expected_min_cust_full"], 1), f(s["chi2_cust_full"], 1), "$< 10^{-300}$", f(s["cramers_v_cust_full"])],
], columns=["Biến phân loại", "Phạm vi mẫu", "Cỡ mẫu (n)", "df", "Min $E_{ij}$", "Pearson $\\chi^2$", "$p$-value", "Cramér's $V$"])

cl = pd.read_csv(O / "Class.csv", index_col=0)
ty = pd.read_csv(O / "Type_of_Travel.csv", index_col=0)
cu = pd.read_csv(O / "Customer_Type.csv", index_col=0)
ge = pd.read_csv(O / "Gender.csv", index_col=0)

top_giu0 = cor.sort_values("hang_giu_0").index.tolist()
top_bo0 = cor.sort_values("hang_bo_0").index.tolist()
top_obs = cor.sort_values("hang_quan_sat").index.tolist()

ct_imp_n = n(q_idx.loc["Customer Type", "so_o_dien_khuyet_tren_pj21"])
ct_imp_pct = f(q_idx.loc["Customer Type", "ty_le_dien_khuyet_tren_pj21_pct"], 2)
tt_imp_n = n(q_idx.loc["Type of Travel", "so_o_dien_khuyet_tren_pj21"])
tt_imp_pct = f(q_idx.loc["Type of Travel", "ty_le_dien_khuyet_tren_pj21_pct"], 2)
ge_imp_n = n(q_idx.loc["Gender", "so_o_dien_khuyet_tren_pj21"])
ge_imp_pct = f(q_idx.loc["Gender", "ty_le_dien_khuyet_tren_pj21_pct"], 2)
cl_imp_n = n(q_idx.loc["Class", "so_o_dien_khuyet_tren_pj21"])
cl_imp_pct = f(q_idx.loc["Class", "ty_le_dien_khuyet_tren_pj21_pct"], 2)

met_min_col = s["metric_imputed_min_col"]
met_min_n = n(s["metric_imputed_min_n"])
met_min_pct = f(s["metric_imputed_min_pct"], 2)
met_max_col = s["metric_imputed_max_col"]
met_max_n = n(s["metric_imputed_max_n"])
met_max_pct = f(s["metric_imputed_max_pct"], 2)

svc_min_col = s["service_imputed_min_col"]
svc_min_n = n(s["service_imputed_min_n"])
svc_min_pct = f(s["service_imputed_min_pct"], 2)
svc_max_col = s["service_imputed_max_col"]
svc_max_n = n(s["service_imputed_max_n"])
svc_max_pct = f(s["service_imputed_max_pct"], 2)

age_imp_n = n(s["age_imputed_n"])
age_imp_pct = f(s["age_imputed_pct"], 2)
fd_imp_n = n(s["flight_distance_imputed_n"])
fd_imp_pct = f(s["flight_distance_imputed_pct"], 2)

dep_0_full = float(dep_delay.iloc[0]["ty_le"])
dep_60_full = float(dep_delay.iloc[3]["ty_le"])
dep_0_obs = float(dep_delay.iloc[0]["ty_le_quan_sat"])
dep_diff_full = dep_0_full - dep_60_full
dep_diff_obs = dep_0_obs - dep_60_full

arr_0_full = float(arr_delay.iloc[0]["ty_le"])
arr_60_full = float(arr_delay.iloc[3]["ty_le"])
arr_0_obs = float(arr_delay.iloc[0]["ty_le_quan_sat"])
arr_diff_full = arr_0_full - arr_60_full
arr_diff_obs = arr_0_obs - arr_60_full

pct_dropped = f(100 * s["rows_dropped_missing_target"] / s["rows_raw"])
pct_kept = f(100 * s["rows_clean"] / s["rows_raw"])
iqr_dep = out.set_index("bien").loc["Departure Delay"]
iqr_arr = out.set_index("bien").loc["Arrival Delay"]
leg_valid_n = n(cor.loc["Leg Room Service", "so_o_quan_sat"])
fd_gt5000 = n(s["flight_distance_gt_5000_n"])
fd_gt5000_obs = n(s["flight_distance_gt_5000_obs_n"])
dm = d_metric
raw_sha = s["input_sha256"]["Data\\raw\\Du lieu khong sach.csv"][:16]
clean_sha = s["input_sha256"]["Data\\processed\\PJ21.csv"][:16]

text = rf'''---
title: "CHƯƠNG 3: TỔ CHỨC, XỬ LÝ VÀ KHÁM PHÁ DỮ LIỆU VỀ SỰ HÀI LÒNG CỦA HÀNH KHÁCH HÀNG KHÔNG"
number-offset: [2]
---

# Chương 3. Tổ chức, xử lý và khám phá dữ liệu về sự hài lòng của hành khách hàng không {{#sec-chuong3}}

Chương này thực hiện hai giai đoạn đầu của quy trình CRISP-DM: **hiểu dữ liệu** ([mục 3.1](#sec-3-1), [mục 3.4](#sec-3-4)) và **chuẩn bị dữ liệu** ([mục 3.2](#sec-3-2), [mục 3.3](#sec-3-3)), sau đó phân tích khám phá dữ liệu (EDA) và kiểm định giả thuyết để trả lời sơ bộ **RQ1, RQ2, RQ3** của Chương 1 ([mục 3.5](#sec-3-5), [mục 3.6](#sec-3-6)). Số liệu được tính trực tiếp từ tệp chưa làm sạch `Data/raw/Du lieu khong sach.csv` ({n(s['rows_raw'])} dòng × {s['columns']} cột; SHA-256 `{raw_sha}…`) và tệp đã làm sạch `Data/processed/PJ21.csv` ({n(s['rows_clean'])} dòng × {s['columns']} cột; SHA-256 `{clean_sha}…`). Tệp `Data/original/` chỉ dùng để đối chứng kiểm toán, không dùng khôi phục dữ liệu hay tính EDA. Kết quả phản ánh mối liên hệ thống kê trên mẫu khảo sát hiện có và không suy ra quan hệ nhân quả.

## 3.1. Nguồn dữ liệu và cấu trúc thông tin khảo sát {{#sec-3-1}}

### 3.1.1. Nguồn dữ liệu, đơn vị quan sát và trạng thái xác minh {{#sec-3-1-1}}

Bộ dữ liệu *Airline Passenger Satisfaction* tiếp nhận ở dạng chưa làm sạch gồm {n(s['rows_raw'])} dòng × {s['columns']} cột ({n(s['cells_raw'])} ô). Sau khi loại **{n(s['rows_dropped_missing_target'])} dòng** ({pct_dropped}%) thiếu nhãn `Satisfaction` hợp lệ và thực hiện chuẩn hóa, điền khuyết theo [mục 3.3.2](#sec-3-3-2), tệp `PJ21.csv` còn **{n(s['rows_clean'])} dòng × {s['columns']} cột** ({pct_kept}%, {n(s['cells_clean'])} ô), đáp ứng yêu cầu tối thiểu 100.000 quan sát của học phần.

Mỗi dòng là một lượt khảo sát sau chuyến bay; trường `ID` là khóa nguyên dương duy nhất (1–129.880, 0 dòng trùng). Dữ liệu cục bộ không lưu URL Kaggle gốc, giấy phép (License), ngày tải, thời điểm khảo sát, mã hãng bay, tuyến bay, đơn vị đo gốc của `Flight Distance` cũng như ý nghĩa chính thức của điểm `0` ở các biến dịch vụ (các thông tin này được ghi nhận là **chưa xác minh từ tệp cục bộ**, không suy đoán). Vì vậy, kết quả chỉ đại diện cho mẫu khảo sát này, không tự động suy rộng cho thị trường hàng không Việt Nam.

### 3.1.2. Cấu trúc biến và miền giá trị {{#sec-3-1-2}}

Khi nạp tệp chưa làm sạch với `dtype=str`, cả 24 cột là chuỗi ký tự do lẫn khoảng trắng, hậu tố đơn vị giả lập và ký hiệu báo thiếu ẩn. Cấu trúc 24 biến trong `PJ21.csv` được tóm tắt tại @tbl-dict: 1 khóa định danh, 4 biến phân loại, 4 biến định lượng vận hành, 14 điểm dịch vụ và 1 biến mục tiêu. Vì chưa có tài liệu gốc xác nhận điểm `0` nghĩa là “không áp dụng” hay mức đánh giá thấp nhất, báo cáo không mặc định đồng nhất điểm `0` với “rất không hài lòng” mà kiểm tra độ nhạy ở [mục 3.5.3](#sec-3-5-3).

{table(dict_tbl)}

: Từ điển dữ liệu rút gọn của 24 biến trong `Data/processed/PJ21.csv` {{#tbl-dict}}

*Nguồn: Tổng hợp từ `Data/processed/PJ21.csv` và `outputs/chuong3/kieu_du_lieu_toi_uu.csv`.*

## 3.2. Tổ chức lưu trữ và tối ưu bộ nhớ {{#sec-3-2}}

Để kiểm chứng kỹ thuật đọc – ghép đa định dạng và kiểm soát khóa chính, `PJ21.csv` được tách thành ba tệp dẫn xuất (@tbl-files), nạp lại (bảng hành khách đọc theo `chunksize=30.000` rồi hợp nhất bằng `pd.concat`) và ghép qua `ID` bằng `pd.merge(..., on="ID", validate="one_to_one")`. `assert_frame_equal` xác nhận bảng ghép bảo toàn đúng {n(s['rows_clean'])} dòng × {s['columns']} cột và khớp tuyệt đối từng ô với `PJ21.csv`. Đây là thực nghiệm tách – ghép từ **một** nguồn đã làm sạch, không phải tích hợp các nguồn độc lập.

| Tệp dẫn xuất | Định dạng | Các trường lưu trữ | Số dòng | Số cột |
|---|---|---|---:|---:|
| `hanh_khach.csv` | CSV (`chunksize=30.000`) | `ID`, `Gender`, `Age`, `Customer Type` | {n(s['rows_clean'])} | 4 |
| `hanh_trinh.json` | JSON (`orient="records"`) | `ID`, `Type of Travel`, `Class`, `Flight Distance`, `Departure Delay`, `Arrival Delay` | {n(s['rows_clean'])} | 6 |
| `danh_gia.sqlite` | SQLite (bảng `danh_gia`) | `ID`, 14 điểm dịch vụ, `Satisfaction` | {n(s['rows_clean'])} | 16 |

: Ba bảng dẫn xuất trong thực nghiệm đọc – ghép đa định dạng (`outputs/chuong3/multi_file/`) {{#tbl-files}}

*Nguồn: Kết quả thực nghiệm trích xuất và hợp nhất đa định dạng từ `Data/processed/PJ21.csv` trong `src/phan_tich_chuong3.py`.*

Về bộ nhớ (`memory_usage(deep=True)`): bảng chuỗi chưa làm sạch chiếm **{f(s['memory_raw_bytes']/2**20, 2)} MiB**, `PJ21.csv` nạp mặc định chiếm **{f(s['memory_before_bytes']/2**20, 2)} MiB**; sau khi chuyển 5 biến phân loại sang `category` và hạ bậc 19 cột số nguyên (`int8`/`int16`/`int32`) còn **{f(s['memory_after_bytes']/2**20, 2)} MiB**, tiết kiệm **{f(s['memory_reduction_pct'], 2)}%** dung lượng DataFrame trong RAM mà không làm thay đổi giá trị nào.

## 3.3. Kiểm toán chất lượng và quy trình làm sạch {{#sec-3-3}}

### 3.3.1. Kết quả kiểm toán lỗi trước và sau làm sạch {{#sec-3-3-1}}

Hàm `kiem_toan_tung_o` (trong `lam_sach_du_lieu.py` và `src/phan_tich_chuong3.py`) quét thực tế từng ô của tệp chưa làm sạch ({n(s['cells_raw'])} ô) và của `PJ21.csv` ({n(s['cells_clean'])} ô) theo ba nhóm lỗi:

- **Thiếu:** **{n(s['missing_including_codes_raw'])} ô**, gồm {n(s['missing_csv_raw'])} ô trống và {n(s['missing_including_codes_raw'] - s['missing_csv_raw'])} ô mang ký hiệu thiếu ẩn (`?`, `-`, `unknown`, `chưa rõ`, `null`, `none`, `n/a`, `nan`).
- **Sai định dạng:** **{n(s['format_errors_raw'])} lượt**, gồm khoảng trắng thừa, chuỗi cắt cụt ở biến phân loại (`'  Fema'`, `'  Busine'`), hậu tố đơn vị (`USD`, `VND`, `đ`, `kg`, `%`) và đuôi `.0` ở cột nguyên.
- **Ngoài miền quy ước:** **{n(s['outlier_errors_raw'])} lượt** (mã `-1`, số âm, `9999`, độ trễ trên 2.000 phút, điểm dịch vụ ngoài `[0; 5]`).

Do **{n(s['overlap_fmt_out_raw'])} ô** vừa sai định dạng vừa ngoài miền, cần phân biệt **{n(s['total_error_occurrences_raw'])} tổng lượt lỗi** với **{n(s['unique_error_cells_raw'])} ô lỗi duy nhất** ({f(s['unique_error_cells_raw_pct'], 2)}% tổng số ô). Khi đối chiếu qua khóa `ID`, có **{n(s['unique_error_cells_dropped_rows'])} ô lỗi** thuộc {n(s['rows_dropped_missing_target'])} dòng bị loại do thiếu nhãn và **{n(s['unique_error_cells_fixed_kept_rows'])} ô lỗi** nằm trên {n(s['rows_clean'])} dòng giữ lại được chuẩn hóa hoặc điền khuyết (@tbl-audit). Sau xử lý, kiểm toán thực tế từng ô trên `PJ21.csv` ghi nhận **0 lỗi** ở cả ba nhóm (với `'Unknown'` là danh mục hợp lệ của `Customer Type` và `Type of Travel`).

{table(audit_short)}

: Kiểm toán số lỗi trước làm sạch, số ô được sửa/điền khuyết và lỗi sau xử lý trên `PJ21.csv` theo 24 biến {{#tbl-audit}}

*Nguồn: `outputs/chuong3/kiem_tra_chat_luong.csv` và `outputs/Bao_cao_lam_sach_du_lieu.csv` (đối chiếu qua khóa `ID` giữa dữ liệu bẩn n = {n(s['rows_raw'])} và `PJ21.csv` n = {n(s['rows_clean'])}).*

### 3.3.2. Quy tắc chuẩn hóa, loại dòng và điền khuyết {{#sec-3-3-2}}

Quy trình trong `lam_sach_du_lieu.py` (đồng bộ 100% với `clean_data.ipynb`) gồm bốn quyết định:

1. **Loại dòng thiếu nhãn:** {n(s['rows_dropped_missing_target'])} dòng ({pct_dropped}%) thiếu `Satisfaction` bị loại thay vì điền Mode để giữ 100% nhãn mục tiêu quan sát thực tế.
2. **Chuẩn hóa văn bản:** cắt khoảng trắng, đồng nhất chữ hoa/thường và ánh xạ các tiền tố cắt cụt (`'  fema'` → `Female`, `'  returnin'` → `Returning Customer`, `'  economy pl'` → `Economy Plus`).
3. **Trích số và lọc theo miền quy ước (`BOUNDS`):** lấy số đầu tiên trong chuỗi rồi chuyển giá trị ngoài miền thành `NaN` (`Age` ngoài `(0; 100]`, `Flight Distance` ngoài `(0; 9.999)`, độ trễ ngoài `[0; 2.000]`, điểm dịch vụ ngoài `[0; 5]`). Việc bỏ hậu tố đơn vị chỉ là làm sạch ký tự, không quy đổi đơn vị.
4. **Điền khuyết toàn cục trên 119.092 dòng giữ lại** (@tbl-fill): Mode cho `Gender`, `Class`; nhãn `Unknown` cho `Customer Type`, `Type of Travel`; trung vị toàn tập cho 4 biến vận hành và 14 điểm dịch vụ.

| Nhóm biến | Cách xử lý | Giá trị điền | Số ô điền trên `PJ21.csv` (tỷ lệ) | Hệ quả thống kê cần kiểm soát |
|---|---|---|---|---|
| `Satisfaction` | Loại dòng thiếu nhãn | Không điền | 0 (0,00%; loại {n(s['rows_dropped_missing_target'])} dòng) | Giữ 100% nhãn quan sát thực tế |
| `Customer Type`, `Type of Travel` | Gán nhãn riêng | `Unknown` | {ct_imp_n} ({ct_imp_pct}%); {tt_imp_n} ({tt_imp_pct}%) | Giữ riêng, không gộp vào nhóm đa số |
| `Gender`, `Class` | Điền Mode toàn tập | `Female`, `Business` | {ge_imp_n} ({ge_imp_pct}%); {cl_imp_n} ({cl_imp_pct}%) | Kéo tỷ lệ hài lòng của `Business` về gần trung bình chung |
| 4 biến vận hành | Trung vị toàn tập | `Age`=40; `Flight Distance`=846; độ trễ=0 | Từ `{met_min_col}` {met_min_n} ({met_min_pct}%) đến `{met_max_col}` {met_max_n} ({met_max_pct}%) | Tạo đỉnh tại trung vị, giảm phương sai |
| 14 điểm dịch vụ | Trung vị toàn tập | 8 biến điền `3`; 6 biến điền `4` | Từ `{svc_min_col}` {svc_min_n} ({svc_min_pct}%) đến `{svc_max_col}` {svc_max_n} ({svc_max_pct}%) | Thu hẹp biến thiên, có thể đổi thứ hạng tương quan giữa bảng |

: Chiến lược điền khuyết và số lượng ô bị ảnh hưởng trong `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-fill}}

*Nguồn: Tổng hợp từ `Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py` và `outputs/chuong3/kiem_tra_chat_luong.csv`.*

Trên 14 điểm dịch vụ, giá trị điền thực tế gồm **6 biến điền `4`** (`On-board Service`, `Seat Comfort`, `Leg Room Service`, `In-flight Service`, `In-flight Entertainment`, `Baggage Handling`) và **8 biến điền `3`** (các biến còn lại). Riêng `Leg Room Service`, trung vị trên {leg_valid_n} ô hợp lệ trước khi điền là 4,0 nên {svc_min_n} ô thiếu/ngoài miền ({svc_min_pct}%) của biến này nhận giá trị `4`.

### 3.3.3. Miền giá trị và ngoại lai thống kê {{#sec-3-3-3}}

Các ngưỡng 2.000 phút (độ trễ) và 9.999 (khoảng cách) là **quy tắc cắt lọc kỹ thuật của nhóm**, không phải chuẩn nghiệp vụ có nguồn xác nhận. Trong `PJ21.csv` còn **{fd_gt5000} bản ghi** có `Flight Distance` từ 5.001 đến 9.910; cả {fd_gt5000_obs}/{fd_gt5000} giá trị này đều là quan sát hợp lệ từ tệp thô (không phải ô điền), được giữ nguyên và ghi nhận là giới hạn do chưa rõ đơn vị gốc.

Theo quy tắc $[Q_1 - 1,5 \times \text{{IQR}};\; Q_3 + 1,5 \times \text{{IQR}}]$ (@tbl-iqr), do hơn 50% chuyến bay có độ trễ 0 phút ($Q_1 = \text{{Trung vị}} = 0$) nên cận trên IQR của độ trễ rất thấp ({f(iqr_dep['can_tren'], 1)} và {f(iqr_arr['can_tren'], 1)} phút), khiến {f(iqr_dep['ty_le_pct'], 2)}% bản ghi trễ khởi hành và {f(iqr_arr['ty_le_pct'], 2)}% bản ghi trễ đến vượt ngưỡng. Đây là đặc trưng của phân phối lệch phải tập trung tại 0 chứ không phải lỗi cần xóa; vì vậy mục 3.5–3.6 dùng phân nhóm độ trễ và kiểm định phi tham số.

{table(ot)}

: Kiểm tra ngoại lai thống kê theo quy tắc $1,5 \times \text{{IQR}}$ trên `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-iqr}}

*Nguồn: `outputs/chuong3/ngoai_lai_iqr.csv` (cận dưới IQR của cả 4 biến đều âm nên toàn bộ ngoại lai nằm ở đuôi phải).*

### 3.3.4. Tính tái lập và phạm vi rò rỉ dữ liệu {{#sec-3-3-4}}

- **Tính tái lập:** chạy lại `lam_sach_du_lieu.py` trên tệp chưa làm sạch tái tạo khung dữ liệu khớp 100% từng ô với `PJ21.csv` (`assert_frame_equal` thành công; mã băm SHA-256 của hai tệp đầu vào không đổi).
- **Giới hạn của “0 lỗi sau xử lý”:** kết quả này chỉ chứng minh `PJ21.csv` tuân thủ quy tắc `BOUNDS`, **không** chứng minh {n(s['total_imputed_Or_unknown_cells_pj21'])} ô được điền/gán `Unknown` phản ánh đúng giá trị thực.
- **Kiểm soát rò rỉ dữ liệu:** `PJ21.csv` được điền Mode/trung vị trên toàn bộ {n(s['rows_clean'])} dòng trước khi chia tập huấn luyện – kiểm tra. Để kiểm soát ảnh hưởng này, các mục EDA và kiểm định dưới đây luôn đối chiếu kết quả trên **toàn tập `PJ21.csv`** với kết quả trên **tập bản ghi quan sát hợp lệ trước điền khuyết**, đồng thời xác lập quy trình `Pipeline` cho Chương 4 tại [mục 3.6.3](#sec-3-6-3).

## 3.4. Đặc điểm phân bố của hành khách và mức hài lòng {{#sec-3-4}}

### 3.4.1. Thống kê mô tả các biến vận hành {{#sec-3-4-1}}

{table(dt)}

: Thống kê mô tả bốn biến định lượng vận hành trên `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-desc}}

*Nguồn: `outputs/chuong3/thong_ke_mo_ta.csv` (14 điểm dịch vụ được lưu đầy đủ trong cùng tệp).*

Tuổi hành khách có trung bình {f(dm.loc['Age','mean'], 2)} năm (trung vị {n(dm.loc['Age','50%'])}; độ lệch chuẩn {f(dm.loc['Age','std'], 2)}; miền {n(dm.loc['Age','min'])}–{n(dm.loc['Age','max'])}). Khoảng cách bay có trung bình {f(dm.loc['Flight Distance','mean'], 2)} và trung vị {n(dm.loc['Flight Distance','50%'])} (gồm {fd_imp_n} ô điền 846, chiếm {fd_imp_pct}%). Độ trễ khởi hành trung bình {f(dm.loc['Departure Delay','mean'], 2)} phút (P99 = {n(dm.loc['Departure Delay','99%'])}), độ trễ đến trung bình {f(dm.loc['Arrival Delay','mean'], 2)} phút (P99 = {n(dm.loc['Arrival Delay','99%'])}), cả hai có trung vị 0 phút.

![Phân bố tuổi hành khách (trái) và boxplot $\log(1 + \text{{Arrival Delay}})$ theo hai nhóm hài lòng (phải) trên `PJ21.csv`.](../figures/chuong3/05_phan_phoi.png){{#fig-dist width=95%}}

*Nguồn: Trích xuất từ `Data/processed/PJ21.csv` (n = {n(s['rows_clean'])}) bằng `src/phan_tich_chuong3.py`.*

Tại @fig-dist (trái), phân bố tuổi xuất hiện cột cao đột biến tại đúng 40 tuổi do **{age_imp_n} bản ghi** ({age_imp_pct}%) thiếu hoặc ngoài miền tuổi được điền trung vị 40. Tại @fig-dist (phải), trung vị độ trễ đến của cả hai nhóm đều bằng 0 nên vạch trung vị nằm sát đáy hộp, nhưng tứ phân vị thứ ba ($Q_3$) và râu trên của nhóm *Neutral or Dissatisfied* cao hơn rõ rệt so với nhóm *Satisfied*.

### 3.4.2. Cơ cấu nhãn hài lòng {{#sec-3-4-2}}

Từ {n(s['rows_raw'])} bản ghi chưa làm sạch, {n(s['rows_clean'])} bản ghi ({pct_kept}%) có nhãn hợp lệ được giữ lại và {n(s['rows_dropped_missing_target'])} bản ghi ({pct_dropped}%) bị loại (@fig-label, trái). Trên `PJ21.csv`, có **{n(s['satisfied_count'])} bản ghi `Satisfied`** ({f(s['rate_satisfied_pct'], 2)}%) và **{n(s['dissatisfied_count'])} bản ghi `Neutral or Dissatisfied`** ({f(s['rate_dissatisfied_pct'], 2)}%) — hai lớp tương đối cân bằng và 100% là nhãn quan sát.

![Tỷ lệ bản ghi giữ lại sau sàng lọc nhãn (trái) và cơ cấu hai lớp `Satisfaction` trên `PJ21.csv` (phải).](../figures/chuong3/01_co_cau_nhan.png){{#fig-label width=95%}}

*Nguồn: Tổng hợp từ `outputs/chuong3/nguon_goc_nhan.csv` và `Data/processed/PJ21.csv`.*

## 3.5. Mối liên hệ giữa trải nghiệm dịch vụ và sự hài lòng {{#sec-3-5}}

### 3.5.1. Khác biệt theo phân khúc hành khách (RQ1) {{#sec-3-5-1}}

@tbl-seg và @fig-seg trình bày quy mô và tỷ lệ hài lòng theo bốn biến phân khúc. Nhóm `Unknown` của `Customer Type` và `Type of Travel` được tách riêng; với `Class`, dòng “Business (chỉ ô `Class` quan sát được)” loại {n(s['class_imputed_n'])} bản ghi điền Mode để đối chứng.

{table(gt)}

: Quy mô mẫu và tỷ lệ hài lòng theo phân khúc hành khách trên `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-seg}}

*Nguồn: `outputs/chuong3/Class.csv`, `Customer_Type.csv`, `Type_of_Travel.csv`, `Gender.csv` và `ket_qua.json`.*

![Tỷ lệ hài lòng theo hạng ghế (`Class`), loại khách hàng (`Customer Type`) và mục đích chuyến đi (`Type of Travel`) trên `PJ21.csv` (cột xám: nhóm `Unknown`).](../figures/chuong3/02_phan_khuc.png){{#fig-seg width=100%}}

*Nguồn: Trích xuất từ `Data/processed/PJ21.csv` (n = {n(s['rows_clean'])}) bằng `src/phan_tich_chuong3.py`.*

- **Hạng ghế (`Class`):** Trên `PJ21.csv`, `Business` đạt tỷ lệ hài lòng **{f(cl.loc['Business','ty_le'], 2)}%**, cao hơn `Economy Plus` ({f(cl.loc['Economy Plus','ty_le'], 2)}%) là {f(cl.loc['Business','ty_le'] - cl.loc['Economy Plus','ty_le'], 2)} điểm phần trăm và cao hơn `Economy` ({f(cl.loc['Economy','ty_le'], 2)}%) tới {f(cl.loc['Business','ty_le'] - cl.loc['Economy','ty_le'], 2)} điểm phần trăm. Nếu chỉ tính {n(s['class_business_obs_n'])} bản ghi có `Class` quan sát thực tế, `Business` đạt **{f(s['class_business_obs_satisfied_pct'], 2)}%**, trong khi {n(s['class_imputed_n'])} bản ghi điền Mode chỉ đạt **{f(s['class_imputed_satisfied_pct'], 2)}%** (điền Mode làm giảm tỷ lệ của `Business` {f(s['class_business_obs_satisfied_pct'] - cl.loc['Business','ty_le'], 2)} điểm phần trăm).
- **Mục đích chuyến đi (`Type of Travel`):** Trong các bản ghi xác định được mục đích (n = {n(s['chi2_travel_obs_n'])}), `Business Travel` (**{f(ty.loc['Business Travel','ty_le'], 2)}%**) cao hơn `Personal Travel` (**{f(ty.loc['Personal Travel','ty_le'], 2)}%**) tới {f(ty.loc['Business Travel','ty_le'] - ty.loc['Personal Travel','ty_le'], 2)} điểm phần trăm (gấp {f(ty.loc['Business Travel','ty_le'] / ty.loc['Personal Travel','ty_le'], 2)} lần). Kiểm định Pearson Chi-square trên bảng $2 \times 2$ quan sát được (`correction=False`) cho $\chi^2 = {f(s['chi2_travel_obs'], 1)}$, df = {s['chi2_travel_obs_df']}, $p < 10^{{-300}}$, **Cramér’s $V = {f(s['cramers_v_travel_obs'])}$** (với hiệu chỉnh Yates: $\chi^2_{{\text{{Yates}}}} = {f(s['chi2_travel_obs_yates'], 1)}$, $V = {f(s['cramers_v_travel_obs_yates'])}$); trên toàn tập `PJ21.csv` gồm cả `Unknown` ($3 \times 2$, n = {n(s['chi2_full_n'])}, df = {s['chi2_travel_full_df']}), $\chi^2 = {f(s['chi2_travel_full'], 1)}$ và **Cramér’s $V = {f(s['cramers_v_travel_full'])}$**. Nhóm `Unknown` ({tt_imp_n} bản ghi, {tt_imp_pct}%) đạt {f(ty.loc['Unknown','ty_le'], 2)}%; sự gần nhau với mức chung ({f(s['rate_satisfied_pct'], 2)}%) không đủ để kết luận cơ chế khuyết là ngẫu nhiên hoàn toàn (MCAR).
- **Loại khách hàng (`Customer Type`):** Trong các bản ghi quan sát được (n = {n(s['chi2_cust_obs_n'])}), `Returning Customer` (**{f(cu.loc['Returning Customer','ty_le'], 2)}%**) cao hơn `First-time Customer` (**{f(cu.loc['First-time Customer','ty_le'], 2)}%**) là {f(cu.loc['Returning Customer','ty_le'] - cu.loc['First-time Customer','ty_le'], 2)} điểm phần trăm; Pearson $\chi^2 = {f(s['chi2_cust_obs'], 1)}$, df = {s['chi2_cust_obs_df']}, $p < 10^{{-300}}$, **Cramér’s $V = {f(s['cramers_v_cust_obs'])}$** ($\chi^2_{{\text{{Yates}}}} = {f(s['chi2_cust_obs_yates'], 1)}$, $V = {f(s['cramers_v_cust_obs_yates'])}$); trên toàn tập `PJ21.csv` gồm `Unknown` ($3 \times 2$, n = {n(s['chi2_full_n'])}, df = {s['chi2_cust_full_df']}), $\chi^2 = {f(s['chi2_cust_full'], 1)}$ và **Cramér’s $V = {f(s['cramers_v_cust_full'])}$**. Nhóm `Unknown` ({ct_imp_n} bản ghi, {ct_imp_pct}%) đạt {f(cu.loc['Unknown','ty_le'], 2)}% nên được giữ riêng thay vì gộp vào nhóm đa số.
- **Giới tính (`Gender`):** `Male` ({f(ge.loc['Male','ty_le'], 2)}%) và `Female` ({f(ge.loc['Female','ty_le'], 2)}%) chỉ chênh nhau {f(ge.loc['Male','ty_le'] - ge.loc['Female','ty_le'], 2)} điểm phần trăm (Cramér’s $V = {f(s['cramers_v_gender_obs'])}$ trên tập quan sát và $V = {f(s['cramers_v_gender_full'])}$ trên `PJ21.csv`), khác biệt thực tiễn không đáng kể.

### 3.5.2. Độ trễ khởi hành, độ trễ đến và mức hài lòng (RQ2) {{#sec-3-5-2}}

Hai biến độ trễ được chia thành bốn nhóm: `0 phút`, `1–15 phút`, `16–60 phút` và `Trên 60 phút`. Vì {met_max_n} bản ghi ({met_max_pct}%) của `Departure Delay` và {met_min_n} bản ghi ({met_min_pct}%) của `Arrival Delay` là giá trị điền `0`, @tbl-delay và @fig-delay đối chiếu cả toàn tập `PJ21.csv` (n = {n(s['rows_clean'])}) lẫn tập bản ghi có độ trễ quan sát thực tế (n = {n(s['departure_observed_n'])} cho khởi hành; n = {n(s['arrival_observed_n'])} cho đến). Các ô điền `0` chỉ rơi vào nhóm `0 phút`, nên ba nhóm trễ dương (`> 0 phút`) giữ nguyên giữa hai cách tính.

{table(de_both)}

: Tỷ lệ hài lòng theo bốn nhóm độ trễ khởi hành (`Departure Delay`) và độ trễ đến (`Arrival Delay`) {{#tbl-delay}}

*Nguồn: `outputs/chuong3/nhom_do_tre_khoi_hanh.csv` và `outputs/chuong3/nhom_do_tre.csv`.*

![Tỷ lệ hài lòng theo độ trễ khởi hành (trái) và độ trễ đến (phải): vùng bên trái vạch đứt phân rã nhóm `0 phút` thành quan sát thực tế, ô khuyết điền 0 và nhóm gộp trên `PJ21.csv`; vùng bên phải là ba mức trễ dương (> 0 phút, không đổi sau điền 0).](../figures/chuong3/03_do_tre.png){{#fig-delay width=100%}}

*Nguồn: Trích xuất từ `Data/processed/PJ21.csv` và mặt nạ quan sát từ dữ liệu bẩn bằng `src/phan_tich_chuong3.py`.*

- **Độ trễ khởi hành (`Departure Delay`):** Trên tập quan sát (n = {n(s['departure_observed_n'])}), tỷ lệ hài lòng giảm đơn điệu từ **{f(dep_0_obs, 2)}%** (0 phút) xuống **{f(dep_delay.iloc[1]['ty_le_quan_sat'], 2)}%** (1–15 phút), **{f(dep_delay.iloc[2]['ty_le_quan_sat'], 2)}%** (16–60 phút) và **{f(dep_60_full, 2)}%** (trên 60 phút) — giảm **{f(dep_diff_obs, 2)} điểm phần trăm**. Trên toàn `PJ21.csv`, do {met_max_n} ô điền `0` chỉ có tỷ lệ hài lòng **{f(s['departure_imputed_zero_satisfied_pct'], 2)}%** nên kéo nhóm `0 phút` gộp xuống **{f(dep_0_full, 2)}%** (chênh **{f(dep_diff_full, 2)} điểm phần trăm** so với nhóm trên 60 phút).
- **Độ trễ đến (`Arrival Delay`):** Trên tập quan sát (n = {n(s['arrival_observed_n'])}), tỷ lệ hài lòng giảm từ **{f(arr_0_obs, 2)}%** (0 phút) xuống **{f(arr_delay.iloc[1]['ty_le_quan_sat'], 2)}%** (1–15 phút), **{f(arr_delay.iloc[2]['ty_le_quan_sat'], 2)}%** (16–60 phút) và **{f(arr_60_full, 2)}%** (trên 60 phút) — giảm **{f(arr_diff_obs, 2)} điểm phần trăm** ({f(arr_diff_full, 2)} điểm phần trăm trên `PJ21.csv`, nơi {met_min_n} ô điền `0` có tỷ lệ hài lòng {f(s['arrival_imputed_zero_satisfied_pct'], 2)}%). Mức giảm dừng lại sau ngưỡng 16 phút ({f(arr_delay.iloc[2]['ty_le'], 2)}% so với {f(arr_60_full, 2)}%).
- **So sánh hai chiều:** Trong mẫu này, độ giảm tỷ lệ hài lòng theo độ trễ đến ({f(arr_diff_obs, 2)} điểm phần trăm) lớn hơn theo độ trễ khởi hành ({f(dep_diff_obs, 2)} điểm phần trăm). Tuy nhiên, do hai tập quan sát có cỡ mẫu khác nhau và hai biến độ trễ có liên hệ vận hành chặt chẽ, kết quả đơn biến này chưa đủ để kết luận độ trễ đến có tác động nhân quả mạnh hơn.

### 3.5.3. Các điểm chạm dịch vụ có liên hệ nổi bật (RQ3) {{#sec-3-5-3}}

`Satisfaction` được mã hóa nhị phân (`1 = Satisfied`, `0 = Neutral or Dissatisfied`) và tính tương quan hạng Spearman ($\rho$) với 14 điểm dịch vụ. Để đánh giá ảnh hưởng của mã điểm `0` và của ô điền trung vị (từ {svc_min_pct}% ở `{svc_min_col}` đến {svc_max_pct}% ở `{svc_max_col}`), @tbl-spearman báo cáo hệ số và thứ hạng theo ba phương án: **(1) giữ mã `0` trên `PJ21.csv`**, **(2) loại mã `0` trên `PJ21.csv`**, và **(3) chỉ dùng ô quan sát hợp lệ trước điền khuyết**. @fig-heat biểu diễn ma trận Spearman $15 \times 15$ trên `PJ21.csv`.

{table(co)}

: Hệ số tương quan hạng Spearman ($\rho$) và thứ hạng của 14 điểm dịch vụ với `Satisfaction` theo ba phương án {{#tbl-spearman}}

*Nguồn: `outputs/chuong3/do_nhay_diem_0.csv`.*

![Ma trận tương quan hạng Spearman giữa 14 điểm dịch vụ và `Satisfaction (0/1)` trên `PJ21.csv` (n = 119.092).](../figures/chuong3/04_heatmap.png){{#fig-heat width=92%}}

*Nguồn: Tính từ `Data/processed/PJ21.csv` và `outputs/chuong3/tuong_quan_spearman.csv` bằng `src/phan_tich_chuong3.py`.*

- **Giữ mã `0` trên `PJ21.csv`:** Năm vị trí dẫn đầu là `{top_giu0[0]}` ($\rho = {f(cor.loc[top_giu0[0], 'giu_0_pj21'])}$, #1), `{top_giu0[1]}` ({f(cor.loc[top_giu0[1], 'giu_0_pj21'])}, #2), `{top_giu0[2]}` ({f(cor.loc[top_giu0[2], 'giu_0_pj21'])}, #3), `{top_giu0[3]}` ({f(cor.loc[top_giu0[3], 'giu_0_pj21'])}, #4) và `{top_giu0[4]}` ({f(cor.loc[top_giu0[4], 'giu_0_pj21'])}, #5); tiếp theo là `In-flight Wifi Service` ({f(cor.loc['In-flight Wifi Service', 'giu_0_pj21'])}, #6).
- **Loại mã `0` trên `PJ21.csv`:** `In-flight Wifi Service` (có 2.935 ô điểm `0`) tăng từ {f(cor.loc['In-flight Wifi Service', 'giu_0_pj21'])} (#6) lên **$\rho = {f(cor.loc['In-flight Wifi Service', 'bo_0_pj21'])}$ (hạng #3)**, đẩy `Seat Comfort` xuống #4 ({f(cor.loc['Seat Comfort', 'bo_0_pj21'])}), `On-board Service` xuống #5 ({f(cor.loc['On-board Service', 'bo_0_pj21'])}) và đẩy `Leg Room Service` xuống **hạng #6** ({f(cor.loc['Leg Room Service', 'bo_0_pj21'])}). Ở cuối bảng, `Ease of Online Booking` tăng lên {f(cor.loc['Ease of Online Booking', 'bo_0_pj21'])} (#11), đổi chỗ với `Food and Drink` (#12).
- **Chỉ ô quan sát trước điền khuyết:** Năm vị trí đầu giữ nguyên thứ tự `#1`–`#5` như khi giữ mã `0` nhưng độ lớn tương quan đều cao hơn. Riêng `Cleanliness` đạt $\rho = {f(cor.loc['Cleanliness', 'chi_o_quan_sat'])}$ (**hạng #6** trên {n(cor.loc['Cleanliness', 'so_o_quan_sat'])} ô quan sát), nhưng khi điền trung vị `3` vào {svc_max_n} ô thiếu ({svc_max_pct}%) trên `PJ21.csv` thì giảm còn {f(cor.loc['Cleanliness', 'giu_0_pj21'])} (**hạng #8**); `Baggage Handling` cũng dịch chuyển từ #8 ({f(cor.loc['Baggage Handling', 'chi_o_quan_sat'])}) xuống #9 ({f(cor.loc['Baggage Handling', 'giu_0_pj21'])}).
- **Hai điểm cuối bảng và tương quan nội bộ:** `Gate Location` (#13) và `Departure and Arrival Time Convenience` (#14) có $\rho$ gần 0 hoặc âm nhẹ ở cả ba cách tính. Trên @fig-heat, các cặp dịch vụ có tương quan nội bộ đáng chú ý gồm `In-flight Service` – `Baggage Handling` ($\rho = 0,53$), `In-flight Wifi Service` – `Ease of Online Booking` ($0,52$), `In-flight Service` – `On-board Service` ($0,52$), `Seat Comfort` – `In-flight Entertainment` ($0,52$) và `Cleanliness` – `In-flight Entertainment` ($0,51$).

Như vậy, chỉ có `Online Boarding` (#1), `In-flight Entertainment` (#2), `Check-in Service` (#10) và hai vị trí cuối (#13, #14) giữ nguyên thứ hạng ở cả ba cách tính, còn các thứ hạng từ #3 đến #9 và #11–#12 thay đổi theo cách xử lý điểm `0` và ô điền trung vị.

## 3.6. Kiểm định giả thuyết thống kê và giới hạn suy luận {{#sec-3-6}}

Để kiểm soát sai lầm loại I ở mức ý nghĩa $\alpha = 0,05$, hiệu chỉnh Bonferroni được đặt ở hai phạm vi: **(i) họ 3 kiểm định chính** tại mục 3.6 (`Class` bằng Chi-square; `Departure Delay` và `Arrival Delay` bằng Mann–Whitney U) có ngưỡng $\alpha_{{\text{{Bonf, 3}}}} = 0,05 / 3 \approx 0,0167$; **(ii) họ mở rộng 5 kiểm định** toàn Chương 3 (gộp thêm `Type of Travel` và `Customer Type` từ [mục 3.5.1](#sec-3-5-1); hoặc 6 kiểm định nếu tính cả `Gender` với $\alpha_{{\text{{Bonf, 6}}}} = 0,05 / 6 \approx 0,0083$) có ngưỡng $\alpha_{{\text{{Bonf, 5}}}} = 0,05 / 5 = 0,0100$. Các kiểm định chính được thực hiện trên tập bản ghi quan sát hợp lệ trước điền khuyết và đối chiếu độ nhạy trên toàn tập `PJ21.csv`.

### 3.6.1. Kiểm định độc lập Chi-square cho các biến phân khúc {{#sec-3-6-1}}

$H_0$: Biến phân khúc (`Class`, `Type of Travel`, `Customer Type`) và `Satisfaction` độc lập thống kê. Kết quả Pearson Chi-square (`correction=False` để nhất quán với công thức Cramér’s $V = \sqrt{{\chi^2 / [n \cdot \min(R-1, C-1)]}}$) được tổng hợp tại @tbl-chi2.

{table(chi2_tbl)}

: Kết quả kiểm định Pearson Chi-square và hệ số Cramér's $V$ với `Satisfaction` {{#tbl-chi2}}

*Nguồn: `outputs/chuong3/ket_qua.json`. Ghi chú: Với bảng $2 \times 2$ trên tập quan sát của `Type of Travel` và `Customer Type`, nếu áp dụng hiệu chỉnh liên tục Yates thì $\chi^2_{{\text{{Yates}}}}$ lần lượt là {f(s['chi2_travel_obs_yates'], 1)} ($V = {f(s['cramers_v_travel_obs_yates'])}$) và {f(s['chi2_cust_obs_yates'], 1)} ($V = {f(s['cramers_v_cust_obs_yates'])}$).*

Mọi bảng tiếp liên tại @tbl-chi2 đều thỏa điều kiện $\min E_{{ij}} \ge 5$ và có $p < 10^{{-300}} \ll 0,0100$, bác bỏ $H_0$ ở cả hai ngưỡng Bonferroni. Trên tập quan sát hợp lệ, `Class` có liên hệ mạnh nhất (**Cramér’s $V = {f(s['cramers_v_obs'])}$**), kế đến là `Type of Travel` (**$V = {f(s['cramers_v_travel_obs'])}$**) và `Customer Type` (**$V = {f(s['cramers_v_cust_obs'])}$**). Trên toàn tập `PJ21.csv`, việc điền Mode vào `Class` làm giảm $V$ xuống **{f(s['cramers_v_full'])}**, còn việc giữ danh mục thứ ba `Unknown` ($3 \times 2$, n = {n(s['chi2_full_n'])}) làm $V$ của `Type of Travel` và `Customer Type` giảm xuống **{f(s['cramers_v_travel_full'])}** và **{f(s['cramers_v_cust_full'])}** do nhóm `Unknown` có tỷ lệ hài lòng gần mức trung bình chung nên tăng mẫu số $n$ mà hầu như không làm tăng $\chi^2$.

### 3.6.2. Kiểm định Mann–Whitney U cho độ trễ theo nhóm hài lòng {{#sec-3-6-2}}

$H_0$: Phân phối độ trễ của hai nhóm *Satisfied* và *Neutral or Dissatisfied* không dịch chuyển thứ hạng (hai phía). Do độ trễ lệch phải mạnh và hơn nửa mẫu bằng 0 phút, dùng Mann–Whitney U thay cho kiểm định $t$; vì độ trải của hai nhóm khác nhau (@fig-dist, phải), đây là kiểm định dịch chuyển phân phối chứ không phải kiểm định hai trung vị (cùng bằng 0). Hệ số $r_{{rb}} = \frac{{2U}}{{n_1 n_2}} - 1 < 0$ cho thấy nhóm hài lòng có xu hướng trễ ít hơn.

| Biến độ trễ | Phạm vi mẫu | Cỡ mẫu (n) | Thống kê $U$ | $p$-value (hai phía) | Hệ số $r_{{rb}}$ |
|---|---|---:|---:|---|---:|
| `Departure Delay` | Quan sát hợp lệ (chính) | {n(s['departure_observed_n'])} | {fn(s['mann_whitney_dep_u_obs'], 1)} | ${sci(s['mann_whitney_dep_p_obs'])}$ | {f(s['rank_biserial_dep_obs'])} |
| `Departure Delay` | Toàn `PJ21.csv` (gồm điền 0) | {n(s['rows_clean'])} | {fn(s['mann_whitney_dep_u_full'], 1)} | ${sci(s['mann_whitney_dep_p_full'])}$ | {f(s['rank_biserial_dep_full'])} |
| `Arrival Delay` | Quan sát hợp lệ (chính) | {n(s['arrival_observed_n'])} | {fn(s['mann_whitney_u_obs'], 1)} | ${sci(s['mann_whitney_p_obs'])}$ | {f(s['rank_biserial_obs'])} |
| `Arrival Delay` | Toàn `PJ21.csv` (gồm điền 0) | {n(s['rows_clean'])} | {fn(s['mann_whitney_u_full'], 1)} | ${sci(s['mann_whitney_p_full'])}$ | {f(s['rank_biserial_full'])} |

: Kết quả kiểm định Mann–Whitney U và hệ số tương quan hạng nhị phân ($r_{{rb}}$) cho hai biến độ trễ {{#tbl-mw}}

*Nguồn: `outputs/chuong3/ket_qua.json`.*

Trên toàn `PJ21.csv`, độ trễ khởi hành trung bình ở nhóm hài lòng là {f(s['dep_delay_mean_satisfied_full'], 2)} phút (tỷ lệ trễ $>0$ là {f(s['dep_delay_pct_positive_satisfied_full'], 2)}%) so với {f(s['dep_delay_mean_dissatisfied_full'], 2)} phút ({f(s['dep_delay_pct_positive_dissatisfied_full'], 2)}%) ở nhóm còn lại; độ trễ đến lần lượt là {f(s['delay_mean_satisfied_full'], 2)} phút ({f(s['delay_pct_positive_satisfied_full'], 2)}%) so với {f(s['delay_mean_dissatisfied_full'], 2)} phút ({f(s['delay_pct_positive_dissatisfied_full'], 2)}%). Cả hai biến đều bác bỏ $H_0$ ở cả hai ngưỡng Bonferroni ($p \le 1,77 \times 10^{{-52}} \ll 0,0100$) nhưng cỡ hiệu ứng đơn biến nhỏ ($|r_{{rb}}| = {f(abs(s['rank_biserial_dep_obs']))}$ với trễ khởi hành và ${f(abs(s['rank_biserial_obs']))}$ với trễ đến trên tập quan sát), cho thấy độ trễ cần được xét đồng thời cùng các điểm chạm dịch vụ trong mô hình đa biến ở Chương 4.

### 3.6.3. Hàm ý kỹ thuật cho giai đoạn mô hình hóa ở Chương 4 {{#sec-3-6-3}}

1. **Tập mẫu và loại khóa định danh:** Dùng {n(s['rows_clean'])} bản ghi có nhãn quan sát thực tế; loại `ID` khỏi ma trận đặc trưng $X$.
2. **Mã hóa danh mục `Unknown`:** Giữ nguyên nhóm `Unknown` của `Customer Type` ({ct_imp_pct}%) và `Type of Travel` ({tt_imp_pct}%) như một hạng mục độc lập khi One-Hot Encoding.
3. **Chống rò rỉ tiền xử lý trong `Pipeline`:** Để tránh rò rỉ do điền khuyết toàn tập ([mục 3.3.4](#sec-3-3-4)), Chương 4 cần khôi phục mặt nạ ô thiếu từ tệp chưa làm sạch theo khóa `ID` (hoặc lấy dữ liệu ngay sau bước lọc `BOUNDS` trước khi điền), chia tập 80/20 phân tầng (`stratify=y, random_state=42`) rồi chỉ `fit` bộ điền khuyết và chuẩn hóa trên tập huấn luyện trong `Pipeline`.
4. **Lựa chọn họ mô hình:** Kết hợp Logistic Regression có điều chuẩn (kiểm soát tương quan nội bộ giữa các biến dịch vụ tại @fig-heat) với Decision Tree và Random Forest (nắm bắt ngưỡng phi tuyến của độ trễ tại @fig-delay và tương tác giữa phân khúc với dịch vụ).

## 3.7. Tổng hợp theo câu hỏi nghiên cứu và hạn chế {{#sec-3-7}}

| Câu hỏi | Phát hiện thực nghiệm chính trên mẫu (n = {n(s['rows_clean'])}) | Giới hạn suy luận chính |
|---|---|---|
| **RQ1** | Tỷ lệ hài lòng chung {f(s['rate_satisfied_pct'], 2)}%; phân hóa mạnh theo `Class` ($V = {f(s['cramers_v_obs'])}$ quan sát; `Business` {f(s['class_business_obs_satisfied_pct'], 2)}% quan sát và {f(cl.loc['Business','ty_le'], 2)}% trên `PJ21.csv` so với `Economy` {f(cl.loc['Economy','ty_le'], 2)}%) và `Type of Travel` ($V = {f(s['cramers_v_travel_obs'])}$ quan sát; {f(ty.loc['Business Travel','ty_le'], 2)}% so với {f(ty.loc['Personal Travel','ty_le'], 2)}%), phân hóa vừa theo `Customer Type` ($V = {f(s['cramers_v_cust_obs'])}$; {f(cu.loc['Returning Customer','ty_le'], 2)}% so với {f(cu.loc['First-time Customer','ty_le'], 2)}%) ([mục 3.5.1](#sec-3-5-1), [3.6.1](#sec-3-6-1)). | Điền Mode cho `Class` ({cl_imp_pct}%) làm giảm tỷ lệ hài lòng của `Business` 3,77 điểm phần trăm; {tt_imp_pct}% và {ct_imp_pct}% bản ghi thuộc nhóm `Unknown`. |
| **RQ2** | Hài lòng giảm khi độ trễ tăng ở cả hai chiều: từ `0 phút` đến `Trên 60 phút` trên tập quan sát, giảm {f(dep_diff_obs, 2)} điểm phần trăm theo `Departure Delay` ({f(dep_0_obs, 2)}% → {f(dep_60_full, 2)}%) và {f(arr_diff_obs, 2)} điểm phần trăm theo `Arrival Delay` ({f(arr_0_obs, 2)}% → {f(arr_60_full, 2)}%, chững lại sau 16 phút); cỡ hiệu ứng đơn biến nhỏ ($|r_{{rb}}| = {f(abs(s['rank_biserial_dep_obs']))}$ và ${f(abs(s['rank_biserial_obs']))}$) ([mục 3.5.2](#sec-3-5-2), [3.6.2](#sec-3-6-2)). | {met_max_pct}% ô `Departure Delay` và {met_min_pct}% ô `Arrival Delay` được điền 0; hai biến độ trễ có liên hệ vận hành nên không suy diễn nhân quả đơn biến. |
| **RQ3** | `Online Boarding` ($\rho = {f(cor.loc['Online Boarding', 'giu_0_pj21'])}$ giữ 0; {f(cor.loc['Online Boarding', 'bo_0_pj21'])} bỏ 0; {f(cor.loc['Online Boarding', 'chi_o_quan_sat'])} quan sát) và `In-flight Entertainment` ({f(cor.loc['In-flight Entertainment', 'giu_0_pj21'])}; {f(cor.loc['In-flight Entertainment', 'bo_0_pj21'])}; {f(cor.loc['In-flight Entertainment', 'chi_o_quan_sat'])}) dẫn đầu `#1`–`#2` ở cả ba cách tính; `Gate Location` (#13) và `Time Convenience` (#14) gần 0 ([mục 3.5.3](#sec-3-5-3)). | Nghĩa điểm `0` chưa xác minh; khi bỏ điểm `0`, `In-flight Wifi Service` tăng từ #6 lên #3 ({f(cor.loc['In-flight Wifi Service', 'bo_0_pj21'])}) đẩy `Leg Room Service` xuống #6; khi chỉ xét ô quan sát, `Cleanliness` đứng #6 ({f(cor.loc['Cleanliness', 'chi_o_quan_sat'])}) nhưng xuống #8 trên `PJ21.csv` do {svc_max_pct}% ô điền trung vị. |

: Tổng hợp kết quả EDA và kiểm định theo ba câu hỏi nghiên cứu RQ1–RQ3 {{#tbl-rq}}

*Nguồn: Tổng hợp từ [mục 3.5](#sec-3-5) và [mục 3.6](#sec-3-6).*

Các giới hạn cần ghi nhận khi chuyển sang Chương 4: *(i)* ba bảng ở [mục 3.2](#sec-3-2) được dẫn xuất từ một nguồn duy nhất (tệp Parquet/Feather không bắt buộc trong yêu cầu học phần và chưa xuất do môi trường chưa cài `pyarrow`); *(ii)* URL nguồn Kaggle, giấy phép, ngày tải, đơn vị đo gốc của `Flight Distance` và ý nghĩa chính thức của điểm `0` chưa thể xác minh từ tệp cục bộ; *(iii)* các ngưỡng lọc `BOUNDS` là quy tắc kỹ thuật của nhóm và việc điền khuyết toàn cục trên `PJ21.csv` làm co phương sai ở các biến khuyết nhiều; *(iv)* kết quả Chương 3 là phân tích đơn biến và hai biến, chưa tách biệt tác động đồng thời hay hiệu ứng tương tác giữa các đặc trưng — nội dung sẽ được giải quyết bằng mô hình phân loại đa biến tại Chương 4.
'''

(R / "outputs" / "chuong3_ban_thao.qmd").write_text(text, encoding="utf-8")
print("Updated outputs/chuong3_ban_thao.qmd successfully.")
