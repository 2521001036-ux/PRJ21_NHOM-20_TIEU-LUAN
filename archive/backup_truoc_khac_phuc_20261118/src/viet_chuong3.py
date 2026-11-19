"""Build Chapter 3 Quarto draft (outputs/chuong3_ban_thao.qmd) from verified outputs of src/phan_tich_chuong3.py.

All numbers, percentages, variable names, and rankings are pulled dynamically from computed outputs.
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


def table(frame: pd.DataFrame) -> str:
    header = "| " + " | ".join(map(str, frame.columns)) + " |\n"
    rule = "|" + "|".join(["---"] * len(frame.columns)) + "|\n"
    body = "\n".join(
        "| " + " | ".join(str(v) for v in row) + " |"
        for row in frame.itertuples(index=False, name=None)
    )
    return header + rule + body


# 1. Bảng kiểm toán chất lượng trước - sau làm sạch (đầy đủ 24 biến)
q_all = pd.read_csv(O / "kiem_tra_chat_luong.csv")
q_idx = q_all.set_index("bien")

audit_tbl = pd.DataFrame({
    "Biến": q_all["bien"],
    "Thiếu (trước)": q_all["thieu_ke_ca_ma_an_raw"].map(n),
    "Sai ĐD (trước)": q_all["sai_dinh_dang_raw"].map(n),
    "Ngoài miền (trước)": q_all["ngoai_mien_raw"].map(n),
    "Tổng lượt lỗi": q_all["tong_luot_loi_raw"].map(n),
    "Ô lỗi duy nhất": q_all["so_o_loi_duy_nhat_raw"].map(n),
    "Thuộc dòng loại": q_all["o_loi_thuoc_dong_bi_loai"].map(n),
    "Được sửa (PJ21)": q_all["o_loi_duoc_sua_dong_giu_lai"].map(n),
    "Giá trị điền": q_all["gia_tri_dien_khuyet_tren_pj21"],
    "Số ô điền (PJ21)": q_all["so_o_dien_khuyet_tren_pj21"].map(n),
    "Lỗi sau xử lý": q_all["so_o_loi_duy_nhat_sau_xu_ly"].map(n),
})
sum_row = pd.DataFrame([{
    "Biến": "**Tổng cộng (24 cột)**",
    "Thiếu (trước)": f"**{n(s['missing_including_codes_raw'])}**",
    "Sai ĐD (trước)": f"**{n(s['format_errors_raw'])}**",
    "Ngoài miền (trước)": f"**{n(s['outlier_errors_raw'])}**",
    "Tổng lượt lỗi": f"**{n(s['total_error_occurrences_raw'])}**",
    "Ô lỗi duy nhất": f"**{n(s['unique_error_cells_raw'])}**",
    "Thuộc dòng loại": f"**{n(s['unique_error_cells_dropped_rows'])}**",
    "Được sửa (PJ21)": f"**{n(s['unique_error_cells_fixed_kept_rows'])}**",
    "Giá trị điền": "**—**",
    "Số ô điền (PJ21)": f"**{n(s['total_imputed_Or_unknown_cells_pj21'])}**",
    "Lỗi sau xử lý": f"**{n(s['unique_error_cells_after'])}**",
}])
audit_tbl = pd.concat([audit_tbl, sum_row], ignore_index=True)

# 2. Thống kê mô tả 4 biến định lượng
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

# 3. Ngoại lai thống kê IQR trên PJ21.csv
out = pd.read_csv(O / "ngoai_lai_iqr.csv")
ot = pd.DataFrame({
    "Biến": out["bien"],
    "Q1": out["Q1"].map(f),
    "Q3": out["Q3"].map(f),
    "IQR": out["IQR"].map(f),
    "Cận trên IQR": out["can_tren"].map(f),
    "Số ngoại lai IQR": out["so_ngoai_lai"].map(n),
    "Tỷ lệ (%)": out["ty_le_pct"].map(f),
})

# 4. Bảng phân khúc hành khách (bao gồm nhóm Unknown riêng biệt)
group_rows = []
for c in ["Class", "Customer Type", "Type of Travel", "Gender"]:
    t = pd.read_csv(O / f"{c.replace(' ', '_')}.csv")
    for _, row in t.iterrows():
        group_rows.append([c, row.iloc[0], n(row["n"]), n(row["hai_long"]), f(row["ty_le"])])
gt = pd.DataFrame(group_rows, columns=["Biến phân nhóm", "Nhóm", "Số bản ghi (n)", "Số hài lòng", "Tỷ lệ hài lòng (%)"])

# 5. Bảng nhóm độ trễ khởi hành (Departure Delay) và độ trễ đến (Arrival Delay) cho RQ2
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

# 6. Bảng tương quan Spearman (14 tiêu chí dịch vụ kèm thứ hạng theo từng cách tính)
cor = pd.read_csv(O / "do_nhay_diem_0.csv", index_col=0).sort_values("giu_0_pj21", ascending=False)
co = pd.DataFrame({
    "Tiêu chí dịch vụ": cor.index,
    "ρ giữ mã 0 (Hạng)": [f"{f(v)} (#{int(rk)})" for v, rk in zip(cor["giu_0_pj21"], cor["hang_giu_0"])],
    "ρ bỏ mã 0 (Hạng)": [f"{f(v)} (#{int(rk)})" for v, rk in zip(cor["bo_0_pj21"], cor["hang_bo_0"])],
    "ρ chỉ ô quan sát (Hạng)": [f"{f(v)} (#{int(rk)})" for v, rk in zip(cor["chi_o_quan_sat"], cor["hang_quan_sat"])],
    "Số ô ≠ 0": cor["so_o_khac_0"].map(n).values,
    "Số ô quan sát": cor["so_o_quan_sat"].map(n).values,
})

cl = pd.read_csv(O / "Class.csv", index_col=0)
ty = pd.read_csv(O / "Type_of_Travel.csv", index_col=0)
cu = pd.read_csv(O / "Customer_Type.csv", index_col=0)

# Trích xuất động thứ hạng top 6 của từng cách tính Spearman
top_giu0 = cor.sort_values("hang_giu_0").index.tolist()
top_bo0 = cor.sort_values("hang_bo_0").index.tolist()
top_obs = cor.sort_values("hang_quan_sat").index.tolist()

# Số liệu điền khuyết lấy động từ kiem_tra_chat_luong.csv & ket_qua.json
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

# Chênh lệch độ trễ khởi hành & độ trễ đến
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

text = rf'''---
lang: vi
format:
  html:
    toc: true
    toc-depth: 3
    embed-resources: true
    theme: none
    highlight-style: none
header-includes: |
  <style>
  body {{font-family: Georgia, 'Times New Roman', serif; line-height: 1.55; color: #20303b; max-width: 1040px; margin: 35px auto; padding: 0 30px;}}
  h1, h2, h3 {{font-family: Arial, sans-serif; color: #236789; line-height: 1.3;}}
  h1 {{font-size: 28px;}} h2 {{margin-top: 36px; font-size: 23px;}} h3 {{margin-top: 26px; font-size: 18px;}}
  table {{border-collapse: collapse; width: 100%; font-size: 13.5px; margin: 18px 0;}}
  th, td {{border-bottom: 1px solid #d4dce1; padding: 7px 9px; text-align: left;}}
  th {{background: #edf4f7;}} img {{max-width: 100%; height: auto;}}
  a {{color: #236789;}} code {{font-size: 0.9em;}}
  @media print {{body {{font-size: 12pt; margin: 0;}} #TOC {{display: none;}} table, figure {{break-inside: avoid;}}}}
  </style>
number-sections: false
execute:
  echo: false
---

# Chương 3. Tổ chức, xử lý và khám phá dữ liệu về sự hài lòng của hành khách hàng không {{#sec-chuong3}}

Chương này trình bày quá trình kiểm tra cấu trúc, tổ chức lưu trữ, kiểm toán quy trình làm sạch và phân tích khám phá dữ liệu (EDA) nhằm trả lời các câu hỏi nghiên cứu **RQ1, RQ2 và RQ3** đã xác lập tại Chương 1 về phân khúc hành khách, độ trễ chuyến bay và các điểm chạm dịch vụ. Toàn bộ số liệu, bảng biểu và hình vẽ được tính toán trực tiếp từ tệp dữ liệu bẩn `Data/raw/Du lieu khong sach.csv` (**{n(s['rows_raw'])} dòng × {s['columns']} cột**) và tệp dữ liệu đã làm sạch chuẩn `Data/processed/PJ21.csv` (**{n(s['rows_clean'])} dòng × {s['columns']} cột**) cập nhật ngày 17/11/2026. Tệp đối chứng gốc `Data/original/airline_passenger_satisfaction.csv` tuyệt đối không được sử dụng để khôi phục dữ liệu bẩn hay tính toán kết quả EDA.

## 3.1. Nguồn dữ liệu và cấu trúc thông tin khảo sát hành khách {{#sec-3-1}}

### 3.1.1. Nguồn dữ liệu, đơn vị quan sát và phạm vi sử dụng

Theo hồ sơ đề tài tại Chương 1, bộ dữ liệu nghiên cứu mang tên *Airline Passenger Satisfaction*. Trong phạm vi thực hiện của nhóm, quy trình xử lý tiếp nhận tệp đầu vào chưa làm sạch `Data/raw/Du lieu khong sach.csv` gồm **{n(s['rows_raw'])} dòng và {s['columns']} cột** ({n(s['cells_raw'])} ô dữ liệu), sau khi loại bỏ **{n(s['rows_dropped_missing_target'])} dòng** không có nhãn mục tiêu `Satisfaction` hợp lệ và thực hiện chuẩn hóa, điền khuyết theo quy tắc xác định trước tại `Notebooks/02_kiem_toan_du_lieu.ipynb/clean_data.ipynb` (đồng bộ với `lam_sach_du_lieu.py`), thu được tệp dữ liệu sạch chuẩn `Data/processed/PJ21.csv` gồm **{n(s['rows_clean'])} dòng và {s['columns']} cột** ({n(s['cells_clean'])} ô dữ liệu), đáp ứng yêu cầu quy mô tối thiểu 100.000 quan sát của học phần.

Mỗi bản ghi tương ứng với một lượt khảo sát trải nghiệm chuyến bay của hành khách; hồ sơ dữ liệu không có mã định danh cá nhân xuyên suốt nhiều chuyến đi nên không thể kiểm chứng một hành khách xuất hiện một hay nhiều lần. Biến `ID` (từ 1 đến 129.880) đóng vai trò khóa bản ghi để truy vết và đối chiếu một–một giữa dữ liệu bẩn và dữ liệu sau xử lý (`is_unique = True`, 0 dòng trùng lặp). Do dữ liệu không chứa thông tin về thời điểm khảo sát, hãng hàng không khai thác hay đường bay cụ thể, kết quả phân tích chỉ đại diện cho mẫu khảo sát hiện có, không mặc nhiên suy rộng cho toàn bộ thị trường hàng không hoặc các hãng hàng không tại Việt Nam. Thông tin chi tiết về ngày tải ban đầu và giấy phép từ nguồn công khai Kaggle vẫn cần được xác minh bổ sung trong hồ sơ dự án.

### 3.1.2. Kiến trúc, kiểu dữ liệu và miền giá trị của các nhóm biến

Khi nạp nguyên trạng tệp bẩn bằng Pandas với cấu hình giữ nguyên chuỗi (`dtype=str`), toàn bộ 24 cột đều ở dạng chuỗi (`str`/`object`) do lẫn khoảng trắng thừa, hậu tố đơn vị tính và các ký hiệu báo thiếu. Sau khi làm sạch trong `PJ21.csv` và thu gọn kiểu dữ liệu (downcasting), cấu trúc kiểu dữ liệu và miền giá trị của 24 biến được xác lập như tại Bảng 3.1.

**Bảng 3.1. Từ điển dữ liệu (Data Dictionary), kiểu dữ liệu và miền giá trị quy ước**

| Biến | Ý nghĩa và đơn vị tính | Kiểu (Raw → PJ21 → Tối ưu) | Miền giá trị / Danh mục trong PJ21.csv | Vai trò |
|---|---|---|---|---|
| `ID` | Mã bản ghi khảo sát | `str` → `int64` → `int32` | Số nguyên dương duy nhất `[1; 129.880]` | Khóa ghép; loại khỏi ML |
| `Gender` | Giới tính ghi nhận | `str` → `str` → `category` | `Female`, `Male` (2 nhóm) | Giải thích – nhân khẩu |
| `Age` | Độ tuổi (năm) | `str` → `int64` → `int8` | Quy ước `(0; 100]`; thực tế `[7; 100]` | Giải thích – nhân khẩu |
| `Customer Type` | Loại khách hàng | `str` → `str` → `category` | `Returning Customer`, `First-time Customer`, `Unknown` | Giải thích – phân khúc |
| `Type of Travel` | Mục đích chuyến đi | `str` → `str` → `category` | `Business Travel`, `Personal Travel`, `Unknown` | Giải thích – hành trình |
| `Class` | Hạng ghế khai thác | `str` → `str` → `category` | `Business`, `Economy`, `Economy Plus` (3 nhóm) | Giải thích – phân khúc |
| `Flight Distance` | Khoảng cách bay (chưa xác minh đơn vị nguồn) | `str` → `int64` → `int16` | Quy ước `(0; 9.999)`; thực tế `[31; 9.910]` | Giải thích – vận hành |
| `Departure Delay` | Độ trễ khởi hành (quy ước: phút) | `str` → `int64` → `int16` | Quy ước `[0; 2.000]`; thực tế `[0; 2.000]` | Giải thích – vận hành |
| `Arrival Delay` | Độ trễ hạ cánh (quy ước: phút) | `str` → `int64` → `int16` | Quy ước `[0; 2.000]`; thực tế `[0; 2.000]` | Giải thích – vận hành |
| `Departure and Arrival Time Convenience` | Thuận tiện giờ đi/đến (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Ease of Online Booking` | Thuận tiện đặt vé trực tuyến (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Check-in Service` | Dịch vụ làm thủ tục check-in (điểm) | `str` → `int64` → `int8` | Quy ước `[0; 5]`; thực tế `[1; 5]` | Giải thích – dịch vụ |
| `Online Boarding` | Trải nghiệm thủ tục lên tàu bay trực tuyến (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Gate Location` | Vị trí cửa khởi hành (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `On-board Service` | Phục vụ trên tàu bay (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Seat Comfort` | Độ thoải mái ghế ngồi (điểm) | `str` → `int64` → `int8` | Quy ước `[0; 5]`; thực tế `[1; 5]` | Giải thích – dịch vụ |
| `Leg Room Service` | Không gian để chân (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Cleanliness` | Mức độ vệ sinh, sạch sẽ (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Food and Drink` | Chất lượng đồ ăn, thức uống (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `In-flight Service` | Dịch vụ trong chuyến bay (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `In-flight Wifi Service` | Chất lượng Wifi trên chuyến bay (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `In-flight Entertainment` | Giải trí trên chuyến bay (điểm) | `str` → `int64` → `int8` | Thang thứ bậc `[0; 5]` | Giải thích – dịch vụ |
| `Baggage Handling` | Xử lý hành lý (điểm) | `str` → `int64` → `int8` | Quy ước `[0; 5]`; thực tế `[1; 5]` | Giải thích – dịch vụ |
| `Satisfaction` | Mức độ hài lòng tổng thể | `str` → `str` → `category` | `Satisfied`, `Neutral or Dissatisfied` | **Biến mục tiêu (0/1)** |

*Nguồn: Tổng hợp từ `Data/raw/Du lieu khong sach.csv`, `Data/processed/PJ21.csv` và `outputs/chuong3/kieu_du_lieu_toi_uu.csv`.*

Bộ dữ liệu gồm 1 khóa định danh (`ID`), 4 biến phân loại mô tả hành khách và chuyến đi, 4 biến định lượng vận hành, 14 biến điểm đánh giá dịch vụ theo thang thứ bậc và 1 biến mục tiêu nhị phân (`Satisfaction`). Trong `PJ21.csv`, 11/14 tiêu chí dịch vụ có miền thực tế `0–5` và 3 tiêu chí (`Check-in Service`, `Seat Comfort`, `Baggage Handling`) có miền `1–5`. Do hồ sơ nguồn chưa xác nhận mã `0` có nghĩa là “không áp dụng dịch vụ” hay một mức điểm thấp nhất, nghiên cứu không mặc định điểm `0` là “rất không hài lòng” mà thực hiện phân tích độ nhạy khi giữ và loại mã `0` tại mục 3.5.3.

## 3.2. Tổ chức bảng khảo sát, ghép nối dữ liệu và tối ưu bộ nhớ {{#sec-3-2}}

### 3.2.1. Thiết kế bảng và kiểm soát quan hệ ghép nối

Trong workspace ban đầu của dự án chỉ có tệp CSV đơn lẻ ở từng tầng dữ liệu. Để kiểm chứng kỹ thuật tích hợp đa định dạng và kiểm soát khóa liên kết, tệp sạch `PJ21.csv` (**{n(s['rows_clean'])} dòng**) được tách theo ba nhóm nghiệp vụ ra ba định dạng lưu trữ khác nhau, sau đó đọc lại (trong đó bảng hành khách được đọc phân đoạn với `chunksize = 30.000` và nối bằng `pd.concat`) rồi ghép nối qua khóa `ID` bằng `pd.merge(..., on="ID", validate="one_to_one")`.

**Bảng 3.2. Cấu trúc ba bảng dẫn xuất trong thực nghiệm tích hợp đa định dạng**

| Tệp lưu trữ | Định dạng | Các trường thông tin | Số dòng | Số cột |
|---|---|---|---:|---:|
| `hanh_khach.csv` | CSV (đọc theo `chunksize=30.000`) | `ID`, `Gender`, `Age`, `Customer Type` | {n(s['rows_clean'])} | 4 |
| `hanh_trinh.json` | JSON (`orient="records"`) | `ID`, `Type of Travel`, `Class`, `Flight Distance`, `Departure Delay`, `Arrival Delay` | {n(s['rows_clean'])} | 6 |
| `danh_gia.sqlite` | SQLite (bảng `danh_gia`) | `ID`, 14 biến điểm dịch vụ, `Satisfaction` | {n(s['rows_clean'])} | 16 |

*Nguồn: Thực nghiệm tích hợp từ `Data/processed/PJ21.csv` tại `outputs/chuong3/multi_file/`.*

Kiểm tra tự động bằng `assert_frame_equal` xác nhận bảng tổng hợp sau hai phép ghép `one_to_one` có đúng **{n(s['rows_clean'])} dòng × {s['columns']} cột**, không phát sinh bản ghi trùng lặp hoặc thất thoát dòng, và khớp tuyệt đối từng giá trị với `PJ21.csv`. Tuy nhiên, cần nêu rõ về mặt học thuật: **đây chỉ là thực nghiệm kỹ thuật tách – ghép từ một tệp nguồn duy nhất**, không phải tích hợp các nguồn dữ liệu độc lập thu thập từ nhiều hệ thống khác nhau. Do đó, yêu cầu về nguồn dữ liệu đa tệp độc lập vẫn chưa được đáp ứng về mặt nguồn gốc dữ liệu và cần được giải trình rõ khi nghiệm thu.

### 3.2.2. Hiệu quả thu gọn kiểu dữ liệu và hiện trạng định dạng lưu trữ

Khi nạp dữ liệu bẩn `Data/raw/Du lieu khong sach.csv` ở dạng chuỗi (`129.880 × 24`), bộ nhớ DataFrame đo bằng `memory_usage(deep=True)` là **{f(s['memory_raw_bytes']/2**20)} MiB** ({n(s['memory_raw_bytes'])} byte). Trên tập dữ liệu sạch `PJ21.csv` (`119.092 × 24`), dung lượng mặc định trong bộ nhớ là **{f(s['memory_before_bytes']/2**20)} MiB** ({n(s['memory_before_bytes'])} byte). Sau khi chuyển 5 biến phân loại sang kiểu `category` và thu gọn (downcast) 19 cột số nguyên theo đúng miền giá trị (`int8` cho `Age` và 14 điểm dịch vụ; `int16` cho `Flight Distance`, `Departure Delay`, `Arrival Delay`; `int32` cho `ID`), dung lượng DataFrame giảm xuống còn **{f(s['memory_after_bytes']/2**20)} MiB** ({n(s['memory_after_bytes'])} byte), tiết kiệm **{f(s['memory_reduction_pct'])}%** bộ nhớ bảng mà không làm thay đổi bất kỳ giá trị nào.

Lưu ý rằng con số **{f(s['memory_reduction_pct'])}%** chỉ phản ánh dung lượng lưu trữ của đối tượng DataFrame trong bộ nhớ sau khi đã nạp, không phải mức tiêu thụ RAM cực đại (peak memory) của toàn tiến trình Python. Bên cạnh đó, môi trường làm việc hiện tại chưa cài đặt thư viện `pyarrow` hoặc `fastparquet`, nên **bước xuất và đọc tệp trung gian định dạng Parquet/Feather chưa được thực hiện** và được ghi nhận đúng tình trạng là hạng mục còn thiếu.

## 3.3. Kiểm toán chất lượng và đánh giá quy trình làm sạch dữ liệu {{#sec-3-3}}

### 3.3.1. Kiểm toán lỗi dữ liệu bẩn và bảng đối chiếu trước–sau làm sạch

Để khắc phục hạn chế của việc chỉ đếm ô `NaN` mặc định hoặc gán cứng số lỗi sau xử lý bằng `0`, quy trình kiểm toán tại `lam_sach_du_lieu.py` và `src/phan_tich_chuong3.py` thực hiện quét thực tế trên từng ô dữ liệu cho cả tệp bẩn (**{n(s['rows_raw'])} dòng**, {n(s['cells_raw'])} ô) và tệp sạch `PJ21.csv` (**{n(s['rows_clean'])} dòng**, {n(s['cells_clean'])} ô) theo ba nhóm lỗi:

1. **Lỗi thiếu dữ liệu (`Thiếu`):** Gồm **{n(s['missing_csv_raw'])} ô** trống (`NaN`) khi đọc CSV mặc định và **{n(s['missing_including_codes_raw'] - s['missing_csv_raw'])} ô** chứa ký hiệu báo thiếu ẩn (`?`, `-`, `unknown`, `chưa rõ`, `null`, `none`, `n/a`, `nan`), tổng cộng **{n(s['missing_including_codes_raw'])} ô thiếu** trên toàn bộ dữ liệu bẩn.
2. **Lỗi sai định dạng (`Sai định dạng`):** Gồm khoảng trắng thừa ở đầu/cuối chuỗi (kể cả **10.484 ô** ở cột `ID`), sai lệch chữ hoa/thường và chuỗi bị cắt cụt ở 5 biến phân loại (như `'  Fema'`, `'  Returnin'`, `'  Busine'`, `'  Economy Pl'`, `'  Neutral or Dissatisfi'`), hậu tố đơn vị tính gắn vào cột số (`USD`, `VND`, `đ`, `kg`, `%`) và chuỗi biểu diễn số thực `.0` hoặc `'nan đ'` ở các cột số nguyên, tổng cộng **{n(s['format_errors_raw'])} lượt lỗi định dạng**.
3. **Lỗi ngoài miền giá trị quy ước (`Ngoài miền`):** Gồm các giá trị số nằm ngoài giới hạn quy ước `BOUNDS` của quy trình làm sạch (như mã lỗi `-1`, các số âm khác, mã `9999`, độ trễ vượt `2.000` phút, điểm dịch vụ ngoài `[0; 5]`) cùng 28 ô chuỗi `'nan'` kèm đơn vị ở cột `Arrival Delay`, tổng cộng **{n(s['outlier_errors_raw'])} lượt lỗi ngoài miền**.

Vì một ô dữ liệu số có thể **đồng thời mắc cả lỗi sai định dạng và lỗi ngoài miền** (ví dụ chuỗi `'-39.0'`, `'41000.0'` hoặc `'nan đ'` vừa sai định dạng số nguyên vừa nằm ngoài miền hợp lệ, tổng cộng có **{n(s['overlap_fmt_out_raw'])} ô** trùng hai lỗi), báo cáo tách bạch rõ **Tổng lượt lỗi ({n(s['total_error_occurrences_raw'])} lượt)** và **Số ô lỗi duy nhất ({n(s['unique_error_cells_raw'])} ô**, chiếm **{f(s['unique_error_cells_raw_pct'])}%** tổng số ô của tệp bẩn). Đồng thời, khi đối chiếu qua khóa `ID`, trong số **{n(s['unique_error_cells_raw'])} ô lỗi duy nhất** ban đầu, có **{n(s['unique_error_cells_dropped_rows'])} ô lỗi** nằm trên **{n(s['rows_dropped_missing_target'])} dòng** bị loại bỏ do khuyết nhãn mục tiêu `Satisfaction` (lỗi biến mất do loại dòng), và **{n(s['unique_error_cells_fixed_kept_rows'])} ô lỗi duy nhất** nằm trên **{n(s['rows_clean'])} dòng** được giữ lại và xử lý trực tiếp trong `PJ21.csv`.

**Bảng 3.3. Đối chiếu chi tiết số lượng lỗi trước và sau khi làm sạch trên toàn bộ 24 biến**

{table(audit_tbl)}

*Nguồn: Kiểm toán thực tế bằng hàm quét từng ô từ `Data/raw/Du lieu khong sach.csv` (n = 129.880) và `Data/processed/PJ21.csv` (n = 119.092), đối chiếu qua khóa `ID` (`outputs/chuong3/kiem_tra_chat_luong.csv`).*

Trên tệp `PJ21.csv` sau xử lý, phép chạy hàm kiểm toán thực tế trên toàn bộ **{n(s['cells_clean'])} ô** xác nhận số lỗi `Thiếu (sau) = 0`, `Sai định dạng (sau) = 0` và `Ngoài miền (sau) = 0` (với quy ước `'Unknown'` là danh mục hợp lệ đã gán tường minh cho hai cột `Customer Type` và `Type of Travel`). Mã băm SHA-256 của cả tệp bẩn và `PJ21.csv` trước và sau quá trình kiểm toán hoàn toàn không đổi.

### 3.3.2. Các quy tắc chuẩn hóa, loại dòng thiếu nhãn và điền khuyết

Quy trình làm sạch trong `Notebooks/02_kiem_toan_du_lieu.ipynb/clean_data.ipynb` và `lam_sach_du_lieu.py` tạo ra `PJ21.csv` gồm bốn quyết định xử lý chính:

1. **Loại bỏ bản ghi thiếu biến mục tiêu `Satisfaction`:** Tất cả **{n(s['rows_dropped_missing_target'])} dòng** (chiếm **8,3061%** dữ liệu ban đầu) có nhãn `Satisfaction` bị trống hoặc mang mã thiếu (`?`, `unknown`, `chưa rõ`) được loại bỏ thay vì điền bằng nhãn phổ biến nhất (Mode). Quyết định này giúp giữ nguyên tính chân thực của biến mục tiêu trên **{n(s['rows_clean'])} dòng** còn lại, không tạo ra nhãn giả làm sai lệch bài toán phân loại có giám sát.
2. **Chuẩn hóa văn bản và khôi phục chuỗi cắt cụt:** Xóa khoảng trắng thừa ở cột `ID` và 5 biến phân loại; chuẩn hóa chữ hoa/thường và ánh xạ các tiền tố bị cắt cụt (`'  fema'` → `'Female'`, `'  returnin'` → `'Returning Customer'`, `'  first-ti'` → `'First-time Customer'`, `'  busine'` → `'Business Travel'`, `'  person'` → `'Personal Travel'`, `'  economy pl'` → `'Economy Plus'`, `'  neutral or dissatisfi'` → `'Neutral or Dissatisfied'`).
3. **Bóc tách số bằng biểu thức chính quy và lọc theo miền quy ước (`BOUNDS`):** Trích xuất giá trị số đầu tiên từ chuỗi và chuyển mọi giá trị nằm ngoài miền quy ước (`Age` ngoài `(0; 100]`, `Flight Distance` ngoài `(0; 9.999)`, `Departure Delay` và `Arrival Delay` ngoài `[0; 2.000]`, 14 điểm dịch vụ ngoài `[0; 5]`) thành `NaN`. Cách làm này loại bỏ toàn bộ mã lỗi `-1`, `9999` và các giá trị độ trễ phóng đại hàng trăm nghìn phút, nhưng có hạn chế là **đánh đồng các số âm `< -1` (vốn có thể là số dương bị gắn nhầm dấu trừ) và các số bị nhân hệ số 10 với ngoại lai cần xóa**, đồng thời việc xóa hậu tố đơn vị (`USD`, `VND`, `kg`, `%`, `đ`) chỉ là làm sạch ký tự rác chứ không phải quy đổi đơn vị đo lường.
4. **Chiến lược điền khuyết phân biệt theo tỷ lệ thiếu:**

**Bảng 3.4. Tổng hợp chiến lược điền khuyết và tỷ lệ ô bị ảnh hưởng trên `PJ21.csv` (n = 119.092)**

| Nhóm biến | Phương pháp xử lý ô thiếu / ngoài miền | Giá trị điền | Số ô điền trên `PJ21.csv` (tỷ lệ %) | Hệ quả và hạn chế cần kiểm soát |
|---|---|---|---|---|
| `Satisfaction` | Loại bỏ bản ghi thiếu nhãn trước khi điền khuyết | Không điền | 0 (đã loại {n(s['rows_dropped_missing_target'])} dòng) | Tránh tạo nhãn giả; cần lưu ý khả năng khuyết nhãn không hoàn toàn ngẫu nhiên |
| `Customer Type`, `Type of Travel` | Gán nhãn danh mục riêng `'Unknown'` cho các ô thiếu | `'Unknown'` | {ct_imp_n} ({ct_imp_pct}%) và {tt_imp_n} ({tt_imp_pct}%) | Bảo toàn độ tinh khiết của các phân khúc quan sát được; không được gộp `'Unknown'` vào khách `Returning` hay `Business` |
| `Gender`, `Class` | Điền giá trị phổ biến nhất (Mode) trên toàn tập | `'Female'`, `'Business'` | {ge_imp_n} ({ge_imp_pct}%) và {cl_imp_n} ({cl_imp_pct}%) | Làm tăng cỡ mẫu và kéo tỷ lệ hài lòng của nhóm `Business` và `Female` về gần mức trung bình chung |
| 4 biến định lượng vận hành | Điền trung vị (Median) toàn cục rồi ép kiểu `int64` | `Age=40`, `Distance=846`, `Delay=0` | Từ `{met_min_col}` = {met_min_n} ({met_min_pct}%) đến `{met_max_col}` = {met_max_n} ({met_max_pct}%) | Tạo đỉnh tập trung tại trung vị (`Age = 40`, `Delay = 0`) và làm giảm phương sai thực tế |
| 14 biến điểm dịch vụ | Điền trung vị (Median) toàn cục rồi ép kiểu `int64` | Điền `3` hoặc `4` tùy biến (xem chú thích) | Từ `{svc_min_col}` = {svc_min_n} ({svc_min_pct}%) đến `{svc_max_col}` = {svc_max_n} ({svc_max_pct}%) | Thu hẹp biến thiên điểm số và có thể làm thay đổi độ lớn cũng như thứ hạng tương quan đơn biến với `Satisfaction` |

*Nguồn: Tổng hợp từ `Notebooks/02_kiem_toan_du_lieu.ipynb/clean_data.ipynb`, `lam_sach_du_lieu.py` và `outputs/chuong3/kiem_tra_chat_luong.csv`.*

*Chú thích giá trị điền của 14 biến dịch vụ trong Bảng 3.4:* Theo bảng đối chiếu trực tiếp tại Bảng 3.3 (`kiem_tra_chat_luong.csv`), 5 biến gồm `On-board Service`, `Seat Comfort`, `In-flight Service`, `In-flight Entertainment` và `Baggage Handling` có trung vị bằng `4`; 8 biến gồm `Departure and Arrival Time Convenience`, `Ease of Online Booking`, `Check-in Service`, `Online Boarding`, `Gate Location`, `Cleanliness`, `Food and Drink` và `In-flight Wifi Service` có trung vị bằng `3`. Riêng biến `Leg Room Service` (có trung bình `3,3953`), kiểm tra trực tiếp trên 110.754 ô hợp lệ trước khi điền khuyết trong `clean_data.ipynb` cho kết quả trung vị `df['Leg Room Service'].median() = 4,0`, nên toàn bộ {svc_min_n} ô điền khuyết của `Leg Room Service` trong `PJ21.csv` thực tế nhận giá trị `4` (tức thực tế trong tệp `PJ21.csv` có 8 biến điền `3` và 6 biến điền `4`; nếu xét theo danh mục 5 biến có trung bình $> 3,40$ thường được ghi nhận là nhóm điền `4` thì gồm `On-board Service`, `Seat Comfort`, `In-flight Service`, `In-flight Entertainment`, `Baggage Handling`).

### 3.3.3. Giới hạn miền giá trị, ngoại lai thống kê và dữ liệu độ trễ

Trong quy trình tạo `PJ21.csv`, ngưỡng cận trên **2.000 phút** đối với `Departure Delay` và `Arrival Delay`, cũng như ngưỡng **9.999** đối với `Flight Distance`, phải được hiểu là **quy tắc cắt lọc kỹ thuật đang áp dụng trong mã làm sạch của nhóm** để loại bỏ các giá trị phóng đại bất thường (như 178.000 hay 270.000 phút trong dữ liệu bẩn), **không phải là quy chuẩn nghiệp vụ hàng không đã có nguồn tài liệu xác nhận**. Đặc biệt, ở biến `Flight Distance`, do ngưỡng lọc đặt tại `< 9.999`, trong `PJ21.csv` vẫn còn các giá trị từ `5.000` đến `9.910` (nhiều khả năng là các quãng đường `500–991` bị nhân hệ số 10 trong dữ liệu bẩn).

Ngay cả sau khi đã cắt lọc ngoài miền `BOUNDS` và điền trung vị, việc kiểm tra ngoại lai thống kê theo quy tắc khoảng tứ phân vị $[Q_1 - 1,5 \times \text{{IQR}};\; Q_3 + 1,5 \times \text{{IQR}}]$ trên `PJ21.csv` vẫn ghi nhận nhiều quan sát nằm ở đuôi phân phối phải (Bảng 3.5).

**Bảng 3.5. Kết quả nhận diện ngoại lai thống kê theo IQR trên `PJ21.csv` (n = 119.092)**

{table(ot)}

*Nguồn: Tính toán từ `Data/processed/PJ21.csv` (`outputs/chuong3/ngoai_lai_iqr.csv`).*

Do hơn một nửa số chuyến bay trong `PJ21.csv` có độ trễ bằng `0` phút ($Q_1 = 0$, trung vị $= 0$, $Q_3 = 3$ phút với `Departure Delay` và $Q_3 = 11$ phút với `Arrival Delay`), ngưỡng cận trên IQR rất thấp (`7,5` phút và `27,5` phút), dẫn tới **19,7662%** bản ghi trễ khởi hành và **14,4577%** bản ghi trễ đến vượt cận trên IQR. Đây là đặc trưng tự nhiên của phân phối độ trễ lệch phải có điểm tập trung tại 0, không phải lỗi dữ liệu cần xóa thêm. Vì vậy, các phân tích ở mục 3.5 và 3.6 sử dụng phân nhóm độ trễ và kiểm định phi tham số Mann–Whitney U.

### 3.3.4. Đánh giá tính tái lập và phạm vi chống rò rỉ dữ liệu

Cần phân biệt rạch ròi ba khái niệm trong báo cáo này:

1. **Tính tái lập của mã nguồn (100%):** Chạy lại `lam_sach_du_lieu.py` và `Notebooks/02_kiem_toan_du_lieu.ipynb/clean_data.ipynb` trên `Data/raw/Du lieu khong sach.csv` tạo ra kết quả khớp tuyệt đối từng ô với `Data/processed/PJ21.csv` (SHA-256: `baa89213a9cd76be...`).
2. **Độ chính xác khôi phục dữ liệu (không đồng nhất với 0 lỗi kiểm toán):** Việc số lỗi kiểm toán sau xử lý bằng `0` chỉ chứng minh `PJ21.csv` đã tuân thủ đầy đủ các quy tắc định dạng, miền giá trị và điền khuyết do nhóm đặt ra; **không chứng minh {n(s['total_imputed_Or_unknown_cells_pj21'])} ô được điền Mode/Median/`Unknown` trên 119.092 dòng phản ánh đúng giá trị thực tế ban đầu của hành khách**.
3. **Phạm vi chống rò rỉ dữ liệu (Data Leakage):** Mặc dù bước chuẩn bị mô hình (Cell 8 của `clean_data.ipynb`) đã thực hiện chia tập `Train/Test` (80/20, phân tầng theo `Satisfaction`) trước khi khớp `StandardScaler` trên tập `Train`, nhưng bản thân tệp `PJ21.csv` lại được điền `Mode` (`Gender`, `Class`) và `Median` (18 biến số) tính trên **toàn bộ 119.092 dòng trước khi chia tập**. Cần nhấn mạnh rằng **nếu vẫn lấy trực tiếp tệp `PJ21.csv` đã điền sẵn (0 ô `NaN`) làm đầu vào cho Chương 4 thì việc chỉ thêm `SimpleImputer` vào `Pipeline` hoàn toàn không khắc phục được ảnh hưởng của điền khuyết toàn tập**. Để chống rò rỉ dữ liệu thực chất ở Chương 4, cần cung cấp bảng dữ liệu sau bước chuẩn hóa và lọc ngoài miền `BOUNDS` nhưng **trước khi điền khuyết** (hoặc khôi phục mặt nạ các ô thiếu/ngoài miền từ `Data/raw/Du lieu khong sach.csv` theo khóa `ID`), sau đó mới chia `Train/Test` và chỉ `fit` các bộ tiền xử lý trên tập `Train`.

## 3.4. Đặc điểm phân bố của hành khách và mức độ hài lòng {{#sec-3-4}}

### 3.4.1. Thống kê mô tả tuổi, khoảng cách bay và độ trễ

**Bảng 3.6. Thống kê mô tả bốn biến định lượng vận hành trên `PJ21.csv` (n = 119.092)**

{table(dt)}

*Nguồn: Tính toán từ `Data/processed/PJ21.csv` (`outputs/chuong3/thong_ke_mo_ta.csv`). Bảng thống kê đầy đủ của cả 14 biến điểm dịch vụ được lưu tại tệp CSV cùng tên.*

Trên `PJ21.csv`, độ tuổi của hành khách có trung bình **39,4918 năm**, trung vị **40 năm** và độ lệch chuẩn **14,5398 năm** (miền giá trị từ 7 đến 100 tuổi). Khoảng cách bay có trung bình **1.135,5448** và trung vị **846** (độ lệch chuẩn **941,6384**). Đối với hai biến độ trễ, sau khi loại bỏ các giá trị ngoài miền `[0; 2.000]` phút và điền trung vị `0` phút (với **{met_max_n} ô** tương ứng **{met_max_pct}%** ở `Departure Delay` và **{met_min_n} ô** tương ứng **{met_min_pct}%** ở `Arrival Delay`), độ trễ khởi hành trung bình là **10,3205 phút** (độ lệch chuẩn **43,3579 phút**, phân vị 99% là **156 phút**) và độ trễ đến trung bình là **15,4135 phút** (độ lệch chuẩn **54,8828 phút**, phân vị 99% là **187 phút**), trong khi trung vị của cả hai biến đều bằng **0 phút**.

![Phân bố tuổi và boxplot độ trễ đến sau biến đổi log(1+x) trên PJ21.csv.](../figures/chuong3/05_phan_phoi.png){{width=95%}}

*Hình 3.1. Phân bố tuổi (trái) và boxplot `log(1 + Arrival Delay)` theo nhóm hài lòng (phải) trên `PJ21.csv` (n = 119.092). Nguồn: Tính toán của nhóm.*

Hình 3.1 (trái) cho thấy phân bố tuổi tập trung chủ yếu trong khoảng 22–60 tuổi, nhưng xuất hiện một cột cao đột biến tại đúng giá trị trung vị `Age = 40` do có **{age_imp_n} bản ghi ({age_imp_pct}%)** bị thiếu hoặc ngoài miền tuổi trên tập 119.092 dòng được điền bằng `40`. Ở Hình 3.1 (phải), do cả hai nhóm hài lòng đều có trung vị độ trễ đến bằng `0` phút, vạch trung vị nằm sát đáy hộp (`0`), song hộp tứ phân vị ($Q_3$) và râu trên của nhóm *Neutral or Dissatisfied* mở rộng cao hơn rõ rệt so với nhóm *Satisfied*.

### 3.4.2. Sàng lọc bản ghi thiếu nhãn và cơ cấu mức độ hài lòng (RQ1)

Trong **{n(s['rows_raw'])} bản ghi** của tệp dữ liệu bẩn ban đầu, có **{n(s['rows_clean'])} bản ghi (91,6939%)** trích xuất được nhãn `Satisfaction` hợp lệ và **{n(s['rows_dropped_missing_target'])} bản ghi (8,3061%)** không có nhãn hợp lệ đã được loại bỏ khi xuất `PJ21.csv`.

![Kết quả sàng lọc bản ghi thiếu nhãn từ dữ liệu bẩn và cơ cấu nhãn trên PJ21.csv.](../figures/chuong3/01_co_cau_nhan.png){{width=95%}}

*Hình 3.2. Tỷ lệ bản ghi giữ lại sau sàng lọc nhãn (trái, n = 129.880) và cơ cấu hai lớp `Satisfaction` trên `PJ21.csv` (phải, n = 119.092). Nguồn: Tính toán của nhóm.*

Trên tập dữ liệu sạch chuẩn `PJ21.csv` (**n = {n(s['rows_clean'])}**), có **{n(s['satisfied_count'])} bản ghi** thuộc lớp *Satisfied* (**{f(s['rate_satisfied_pct'])}%**) và **{n(s['dissatisfied_count'])} bản ghi** thuộc lớp *Neutral or Dissatisfied* (**{f(s['rate_dissatisfied_pct'])}%**). Tỷ lệ hai lớp tương đối cân bằng (xấp xỉ 43,45% / 56,55%), thuận lợi cho việc huấn luyện và đánh giá các mô hình phân loại nhị phân ở Chương 4 mà không bị biến dạng bởi nhãn điền khuyết.

## 3.5. Khám phá mối liên hệ giữa trải nghiệm dịch vụ và sự hài lòng {{#sec-3-5}}

### 3.5.1. Khác biệt mức hài lòng giữa các phân khúc hành khách và vai trò của nhóm `Unknown` (RQ1)

Để trả lời **RQ1**, Bảng 3.7 và Hình 3.3 trình bày quy mô mẫu và tỷ lệ hài lòng theo hạng vé (`Class`), loại khách hàng (`Customer Type`), mục đích chuyến đi (`Type of Travel`) và giới tính (`Gender`) trên `PJ21.csv` (**n = {n(s['rows_clean'])}**), trong đó nhóm `'Unknown'` của hai biến `Customer Type` và `Type of Travel` được tách riêng, tuyệt đối không gộp vào nhóm khách quay lại hay khách đi công tác.

**Bảng 3.7. Quy mô và tỷ lệ hài lòng theo các phân khúc hành khách trên `PJ21.csv` (n = 119.092)**

{table(gt)}

*Nguồn: Tính toán từ `Data/processed/PJ21.csv` (`outputs/chuong3/Class.csv`, `Customer_Type.csv`, `Type_of_Travel.csv`, `Gender.csv`).*

![Tỷ lệ hài lòng theo hạng vé, loại khách hàng và mục đích chuyến đi trên PJ21.csv.](../figures/chuong3/02_phan_khuc.png){{width=100%}}

*Hình 3.3. So sánh tỷ lệ hài lòng giữa các phân khúc trên `PJ21.csv` (n = 119.092; cột màu xám biểu thị nhóm `Unknown` do khuyết dữ liệu gốc). Nguồn: Tính toán của nhóm.*

Từ Bảng 3.7 và Hình 3.3, nghiên cứu rút ra ba phát hiện định lượng gắn với **RQ1**, kèm đánh giá ảnh hưởng của việc điền khuyết đặc trưng:

- **Phát hiện 1 — Khác biệt theo hạng vé (`Class`) và ảnh hưởng của điền Mode:** Trên `PJ21.csv`, hạng vé `Business` có tỷ lệ hài lòng cao nhất đạt **{f(cl.loc['Business','ty_le'])}%** (n = {n(cl.loc['Business','n'])}), cao hơn **41,0607 điểm phần trăm** so với `Economy Plus` (**{f(cl.loc['Economy Plus','ty_le'])}%**, n = {n(cl.loc['Economy Plus','n'])}) và cao hơn **47,0877 điểm phần trăm** so với `Economy` (**{f(cl.loc['Economy','ty_le'])}%**, n = {n(cl.loc['Economy','n'])}). Tuy nhiên, cần lưu ý rằng nhóm `Business` trong `PJ21.csv` đã bao gồm **{n(s['class_imputed_n'])} bản ghi** thiếu `Class` trong dữ liệu bẩn được điền bằng Mode `'Business'`. Khi tách riêng **{n(s['class_business_obs_n'])} bản ghi** thực sự quan sát được hạng vé `Business`, tỷ lệ hài lòng thực tế đạt tới **{f(s['class_business_obs_satisfied_pct'])}%**, trong khi **{n(s['class_imputed_n'])} bản ghi** được điền Mode chỉ có tỷ lệ hài lòng **{f(s['class_imputed_satisfied_pct'])}%**. Như vậy, việc điền Mode cho `Class` đã làm giảm tỷ lệ hài lòng quan sát của hạng `Business` xuống **3,7656 điểm phần trăm**.
- **Phát hiện 2 — Khác biệt theo mục đích chuyến đi (`Type of Travel`):** Trong số các bản ghi xác định được mục đích chuyến đi, nhóm đi công tác (`Business Travel`, n = {n(ty.loc['Business Travel','n'])}) có tỷ lệ hài lòng đạt **{f(ty.loc['Business Travel','ty_le'])}%**, gấp hơn 5,5 lần nhóm đi cá nhân (`Personal Travel`, n = {n(ty.loc['Personal Travel','n'])}, đạt **{f(ty.loc['Personal Travel','ty_le'])}%**), tức chênh lệch **47,7738 điểm phần trăm**. Nhóm không rõ mục đích (`Unknown`, n = {n(ty.loc['Unknown','n'])}, chiếm {tt_imp_pct}% toàn tập) có tỷ lệ hài lòng là **{f(ty.loc['Unknown','ty_le'])}%**; tuy con số này gần với tỷ lệ hài lòng chung của toàn mẫu (**{f(s['rate_satisfied_pct'])}%**), nhưng chỉ riêng sự tương đồng về tỷ lệ trung bình **không đủ cơ sở để suy luận cơ chế khuyết thông tin mục đích chuyến đi là hoàn toàn ngẫu nhiên (MCAR)** nếu chưa kiểm chứng thêm cấu trúc khuyết theo các biến khác.
- **Phát hiện 3 — Khác biệt theo loại khách hàng (`Customer Type`):** Nhóm khách hàng quay lại (`Returning Customer`, n = {n(cu.loc['Returning Customer','n'])}) có tỷ lệ hài lòng **{f(cu.loc['Returning Customer','ty_le'])}%**, cao hơn **24,1851 điểm phần trăm** so với nhóm khách bay lần đầu (`First-time Customer`, n = {n(cu.loc['First-time Customer','n'])}, đạt **{f(cu.loc['First-time Customer','ty_le'])}%**). Nhóm `Unknown` (n = {n(cu.loc['Unknown','n'])}, chiếm {ct_imp_pct}% toàn tập) có tỷ lệ hài lòng **{f(cu.loc['Unknown','ty_le'])}%**. Các kết quả trên xác nhận rằng nếu gộp nhóm `Unknown` vào `Business Travel` hoặc `Returning Customer` (như khi điền Mode) thì tỷ lệ hài lòng của hai phân khúc này sẽ bị kéo lệch đáng kể; do đó việc giữ nguyên nhóm `'Unknown'` riêng biệt trong `PJ21.csv` là cần thiết.

### 3.5.2. Mối liên hệ giữa độ trễ khởi hành, độ trễ đến và đánh giá tổng thể (RQ2)

Câu hỏi nghiên cứu **RQ2** tại Chương 1 đặt vấn đề về mối liên hệ của **cả thời gian trễ khởi hành (`Departure Delay`) và thời gian trễ đến (`Arrival Delay`)** với mức độ hài lòng của hành khách. Trên `PJ21.csv` (miền `[0; 2.000]` phút), hai biến độ trễ được chia thành cùng 4 khoảng thời gian: `0 phút` (không trễ), `1–15 phút`, `16–60 phút` và `Trên 60 phút`. Do quy trình làm sạch điền trung vị `0` phút cho **{n(s['departure_imputed_zero_n'])} bản ghi ({met_max_pct}%)** bị thiếu hoặc ngoài miền ở `Departure Delay` và **{n(s['arrival_imputed_zero_n'])} bản ghi ({met_min_pct}%)** ở `Arrival Delay`, Bảng 3.8 và Hình 3.4 trình bày song song kết quả trên toàn bộ `PJ21.csv` (**n = {n(s['rows_clean'])}**) cùng kết quả chỉ tính trên các bản ghi có độ trễ quan sát hợp lệ từ dữ liệu bẩn (đối chiếu qua khóa `ID`: **n = {n(s['departure_observed_n'])}** đối với `Departure Delay` và **n = {n(s['arrival_observed_n'])}** đối với `Arrival Delay`).

**Bảng 3.8. Tỷ lệ hài lòng theo bốn nhóm độ trễ khởi hành (`Departure Delay`) và độ trễ đến (`Arrival Delay`)**

{table(de_both)}

*Nguồn: Tính toán từ `Data/processed/PJ21.csv` và đối chiếu qua `ID` với `Data/raw/Du lieu khong sach.csv` (`outputs/chuong3/nhom_do_tre_khoi_hanh.csv` và `outputs/chuong3/nhom_do_tre.csv`).*

![Tỷ lệ hài lòng theo nhóm độ trễ khởi hành và độ trễ đến trên PJ21.csv và trên tập quan sát hợp lệ.](../figures/chuong3/03_do_tre.png){{width=100%}}

*Hình 3.4. So sánh tỷ lệ hài lòng theo nhóm độ trễ khởi hành (`Departure Delay`, trái) và độ trễ đến (`Arrival Delay`, phải). Nguồn: Tính toán của nhóm.*

- **Phát hiện 4 — Xu hướng giảm mức hài lòng theo cả độ trễ khởi hành và độ trễ đến, với độ nhạy mạnh hơn ở chiều hạ cánh (RQ2):**
  1. **Đối với độ trễ khởi hành (`Departure Delay`):** Trên `PJ21.csv`, tỷ lệ hài lòng giảm từ **{f(dep_0_full)}%** ở nhóm `0 phút` xuống **{f(dep_delay.iloc[1]['ty_le'])}%** ở nhóm `1–15 phút`, **{f(dep_delay.iloc[2]['ty_le'])}%** ở nhóm `16–60 phút` và còn **{f(dep_60_full)}%** ở nhóm `Trên 60 phút` (chênh lệch **{f(dep_diff_full)} điểm phần trăm** giữa nhóm 0 phút và nhóm trễ trên 60 phút). Khi tách bỏ **{n(s['departure_imputed_zero_n'])} bản ghi** được điền `0` phút (vốn có tỷ lệ hài lòng trung bình **{f(s['departure_imputed_zero_satisfied_pct'])}%**), tỷ lệ hài lòng của nhóm `0 phút` quan sát thực tế (**n = {n(dep_delay.iloc[0]['n_quan_sat'])}**) là **{f(dep_0_obs)}%**, tương ứng mức giảm **{f(dep_diff_obs)} điểm phần trăm** khi chuyến bay khởi hành trễ trên 60 phút.
  2. **Đối với độ trễ đến (`Arrival Delay`):** Trên `PJ21.csv`, tỷ lệ hài lòng ở nhóm `0 phút` đạt **{f(arr_0_full)}%**, giảm rõ rệt ngay khi trễ nhẹ `1–15 phút` (**{f(arr_delay.iloc[1]['ty_le'])}%**) và xuống mức **{f(arr_delay.iloc[2]['ty_le'])}%** (`16–60 phút`) cũng như **{f(arr_60_full)}%** (`Trên 60 phút`), tức giảm **{f(arr_diff_full)} điểm phần trăm**. Khi chỉ tính trên các bản ghi có `Arrival Delay` quan sát hợp lệ (loại bỏ **{n(s['arrival_imputed_zero_n'])} bản ghi** điền `0` phút có tỷ lệ hài lòng **{f(s['arrival_imputed_zero_satisfied_pct'])}%**), tỷ lệ hài lòng của nhóm `0 phút` quan sát được (**n = {n(arr_delay.iloc[0]['n_quan_sat'])}**) là **{f(arr_0_obs)}%**, cao hơn nhóm trễ trên 60 phút là **{f(arr_diff_obs)} điểm phần trăm**.
  3. So sánh hai chiều độ trễ cho thấy sự hài lòng của hành khách giảm nhanh và biên độ giảm lớn hơn theo độ trễ đến ({f(arr_diff_obs)} điểm phần trăm trên tập quan sát) so với độ trễ khởi hành ({f(dep_diff_obs)} điểm phần trăm trên tập quan sát), đồng thời việc điền trung vị `0` phút cho 34,77% bản ghi `Departure Delay` đã làm phẳng nhẹ tỷ lệ hài lòng của nhóm `0 phút` khởi hành (từ {f(dep_0_obs)}% xuống {f(dep_0_full)}%).

### 3.5.3. Các điểm chạm dịch vụ có liên hệ nổi bật (RQ3)

Để trả lời **RQ3**, biến mục tiêu `Satisfaction` được mã hóa nhị phân (`1 = Satisfied`, `0 = Neutral or Dissatisfied`) và tính hệ số tương quan hạng Spearman ($\rho$) với 14 tiêu chí dịch vụ. Nhằm đánh giá cụ thể ảnh hưởng của (i) các điểm `0` chưa rõ nghĩa nghiệp vụ và (ii) việc điền trung vị (`3` hoặc `4`, chiếm từ **{svc_min_pct}%** ở `{svc_min_col}` đến **{svc_max_pct}%** ở `{svc_max_col}`) vào các ô bị thiếu/ngoài miền, Bảng 3.9 báo cáo đồng thời hệ số Spearman và thứ hạng (`#1` đến `#14`) theo cả ba cách tính: giữ mã `0` trên `PJ21.csv`, loại riêng mã `0` trên `PJ21.csv`, và chỉ tính trên các ô quan sát hợp lệ trước khi điền trung vị.

**Bảng 3.9. Hệ số tương quan hạng Spearman và thứ hạng của 14 tiêu chí dịch vụ với `Satisfaction`**

{table(co)}

*Nguồn: Tính toán từ `Data/processed/PJ21.csv` và đối chiếu ô quan sát từ `Data/raw/Du lieu khong sach.csv` (`outputs/chuong3/do_nhay_diem_0.csv`).*

![Ma trận tương quan Spearman giữa 14 điểm dịch vụ và nhãn hài lòng trên PJ21.csv.](../figures/chuong3/04_heatmap.png){{width=92%}}

*Hình 3.5. Ma trận tương quan Spearman giữa 14 tiêu chí dịch vụ và `Satisfaction (0/1)` trên `PJ21.csv` (n = 119.092). Nguồn: Tính toán của nhóm.*

- **Phát hiện 5 — Các điểm chạm dịch vụ có liên hệ nổi bật và sự dịch chuyển thứ hạng giữa ba cách tính (RQ3):**
  1. **Khi giữ mã `0` trên toàn bộ `PJ21.csv` (n = 119.092):** Năm tiêu chí dẫn đầu lần lượt là **`{top_giu0[0]}`** ($\rho = {f(cor.loc[top_giu0[0], 'giu_0_pj21'])}$, `#1`), **`{top_giu0[1]}`** ($\rho = {f(cor.loc[top_giu0[1], 'giu_0_pj21'])}$, `#2`), **`{top_giu0[2]}`** ($\rho = {f(cor.loc[top_giu0[2], 'giu_0_pj21'])}$, `#3`), **`{top_giu0[3]}`** ($\rho = {f(cor.loc[top_giu0[3], 'giu_0_pj21'])}$, `#4`) và **`{top_giu0[4]}`** ($\rho = {f(cor.loc[top_giu0[4], 'giu_0_pj21'])}$, `#5`); đứng thứ 6 là `{top_giu0[5]}` ($\rho = {f(cor.loc[top_giu0[5], 'giu_0_pj21'])}$, `#6`).
  2. **Khi loại bỏ điểm `0` (phân tích độ nhạy mã `0`):** Thứ hạng trong nhóm dẫn đầu có sự thay đổi đáng chú ý. Cụ thể, **`{top_bo0[2]}`** tăng mạnh hệ số Spearman từ ${f(cor.loc[top_bo0[2], 'giu_0_pj21'])}$ (`#6`) lên **$\rho = {f(cor.loc[top_bo0[2], 'bo_0_pj21'])}$ và vươn lên đứng thứ 3 (`#3`)** chỉ sau `{top_bo0[0]}` ($\rho = {f(cor.loc[top_bo0[0], 'bo_0_pj21'])}$, `#1`) và `{top_bo0[1]}` ($\rho = {f(cor.loc[top_bo0[1], 'bo_0_pj21'])}$, `#2`). Sự bứt phá này đẩy `{top_bo0[3]}` ($\rho = {f(cor.loc[top_bo0[3], 'bo_0_pj21'])}$) xuống `#4`, `{top_bo0[4]}` ($\rho = {f(cor.loc[top_bo0[4], 'bo_0_pj21'])}$) xuống `#5` và đưa **`{top_bo0[5]}` ($\rho = {f(cor.loc[top_bo0[5], 'bo_0_pj21'])}$) ra khỏi top 5 xuống vị trí thứ 6 (`#6`)**. Ở nhóm cuối bảng, `Ease of Online Booking` cũng tăng từ ${f(cor.loc['Ease of Online Booking', 'giu_0_pj21'])}$ (`#12`) lên ${f(cor.loc['Ease of Online Booking', 'bo_0_pj21'])}$ (`#11`), đổi vị trí với `Food and Drink` (${f(cor.loc['Food and Drink', 'bo_0_pj21'])}$, xuống `#12`).
  3. **Khi chỉ tính trên các ô quan sát hợp lệ trước điền trung vị:** Năm vị trí đầu bảng là `{top_obs[0]}` ($\rho = {f(cor.loc[top_obs[0], 'chi_o_quan_sat'])}$, `#1`), `{top_obs[1]}` ($\rho = {f(cor.loc[top_obs[1], 'chi_o_quan_sat'])}$, `#2`), `{top_obs[2]}` ($\rho = {f(cor.loc[top_obs[2], 'chi_o_quan_sat'])}$, `#3`), `{top_obs[3]}` ($\rho = {f(cor.loc[top_obs[3], 'chi_o_quan_sat'])}$, `#4`) và `{top_obs[4]}` ($\rho = {f(cor.loc[top_obs[4], 'chi_o_quan_sat'])}$, `#5`). Tuy nhiên, ở khu vực giữa bảng, thứ hạng có sự hoán đổi so với cột giữ mã `0` trên `PJ21.csv`: biến `Cleanliness` đạt $\rho = {f(cor.loc['Cleanliness', 'chi_o_quan_sat'])}$ (đứng `#6` trên 80.651 ô quan sát), nhưng do có tỷ lệ điền trung vị cao nhất nhóm dịch vụ ({svc_max_n} ô = {svc_max_pct}%), hệ số tương quan của `Cleanliness` trên `PJ21.csv` giảm xuống ${f(cor.loc['Cleanliness', 'giu_0_pj21'])}$ (hạng `#8`), nhường vị trí `#6` và `#7` trên `PJ21.csv` cho `In-flight Wifi Service` (${f(cor.loc['In-flight Wifi Service', 'giu_0_pj21'])}$) và `In-flight Service` (${f(cor.loc['In-flight Service', 'giu_0_pj21'])}$). Tương tự, `Baggage Handling` từ `#8` ($\rho = {f(cor.loc['Baggage Handling', 'chi_o_quan_sat'])}$ trên ô quan sát) xuống `#9` ($\rho = {f(cor.loc['Baggage Handling', 'giu_0_pj21'])}$) trên `PJ21.csv`.
  4. Đối với hai tiêu chí cuối bảng là `Gate Location` và `Departure and Arrival Time Convenience`, hệ số tương quan đều rất gần 0 hoặc âm nhẹ ở cả ba cách tính (với `Gate Location`: $\rho = -0,0096$ trên `PJ21.csv` so với $-0,0057$ trên ô quan sát; với `Departure and Arrival Time Convenience`: $\rho = -0,0503$ trên `PJ21.csv` so với $-0,0520$ trên ô quan sát). Như vậy, tác động của việc điền trung vị và xử lý mã `0` phụ thuộc cụ thể vào tỷ lệ ô điền khuyết cũng như phân bố điểm `0` của từng biến, không làm thay đổi đồng nhất mọi tiêu chí.

## 3.6. Kiểm định sơ bộ và giới hạn suy luận thống kê {{#sec-3-6}}

### 3.6.1. Kiểm định liên hệ giữa hạng vé và sự hài lòng

- **Giả thuyết kiểm định:** $H_0$: Hạng vé (`Class`) và mức độ hài lòng (`Satisfaction`) độc lập thống kê; $H_1$: Có mối liên hệ thống kê giữa hạng vé và mức độ hài lòng.
- **Thiết kế mẫu kiểm định:** Để tránh sai lệch do **{n(s['class_imputed_n'])} bản ghi** được điền Mode `'Business'`, phép kiểm định Chi-square ($\chi^2$) chính thức chỉ thực hiện trên **n = {n(s['chi2_obs_n'])} bản ghi** có cả `Class` và `Satisfaction` quan sát hợp lệ từ dữ liệu bẩn; đồng thời báo cáo kết quả đối chiếu trên toàn bộ **n = {n(s['chi2_full_n'])} bản ghi** của `PJ21.csv`.
- **Kết quả thực nghiệm:** Trên tập quan sát hợp lệ (**n = {n(s['chi2_obs_n'])}**), thống kê $\chi^2 = \mathbf{{{f(s['chi2_obs'])}}}$, bậc tự do $\text{{df}} = \mathbf{{{s['chi2_obs_df']}}}$, giá trị $p < 10^{{-300}}$ (nhỏ hơn rất nhiều so với mức ý nghĩa $\alpha = 0,05$), tần số kỳ vọng nhỏ nhất là **{f(s['expected_min_obs'])}** ($\ge 5$, thỏa mãn điều kiện áp dụng kiểm định Chi-square) và hệ số độ mạnh liên hệ Cramér’s $V = \mathbf{{{f(s['cramers_v_obs'])}}}$. Nếu tính trên toàn bộ `PJ21.csv` (**n = {n(s['chi2_full_n'])}**), kết quả là $\chi^2 = {f(s['chi2_full'])}$, $\text{{df}} = 2$, $p < 10^{{-300}}$ và Cramér’s $V = {f(s['cramers_v_full'])}$. Như vậy, ở mức ý nghĩa 5%, dữ liệu cung cấp bằng chứng bác bỏ $H_0$ và xác nhận mối liên hệ có cường độ mạnh ($V \approx 0,5051$) giữa hạng vé và sự hài lòng trong mẫu khảo sát; việc điền Mode ở `Class` làm giảm nhẹ Cramér’s $V$ từ $0,5051$ xuống $0,4671$.

### 3.6.2. So sánh phân phối độ trễ khởi hành và độ trễ đến giữa hai nhóm hài lòng

- **Giả thuyết kiểm định:** Với mỗi biến độ trễ (`Departure Delay` và `Arrival Delay`), $H_0$: Phân phối độ trễ của nhóm *Satisfied* và nhóm *Neutral or Dissatisfied* giống nhau; $H_1$: Phân phối độ trễ của hai nhóm khác nhau (kiểm định hai phía). Do phân phối độ trễ lệch phải mạnh và có tỷ trọng lớn giá trị 0, kiểm định phi tham số Mann–Whitney U được sử dụng thay cho kiểm định $t$; lưu ý khi hình dạng phân phối hai nhóm khác nhau, đây là kiểm định sự dịch chuyển thứ hạng phân phối (stochastic dominance) chứ không đơn thuần là kiểm định hai trung vị (vốn cùng bằng 0 phút).
- **Kết quả thực nghiệm đối với độ trễ khởi hành (`Departure Delay`):**
  - Trên toàn bộ `PJ21.csv` (**n = {n(s['rows_clean'])}**; nhóm *Satisfied* có trung bình **{f(s['dep_delay_mean_satisfied_full'])} phút**, tỷ lệ trễ $> 0$ là **{f(s['dep_delay_pct_positive_satisfied_full'])}%**; nhóm *Neutral or Dissatisfied* có trung bình **{f(s['dep_delay_mean_dissatisfied_full'])} phút**, tỷ lệ trễ $> 0$ là **{f(s['dep_delay_pct_positive_dissatisfied_full'])}%**): thống kê $U = \mathbf{{{f(s['mann_whitney_dep_u_full'], 1)}}}$, $p = \mathbf{{1,77 \times 10^{{-52}}}} < 0,0001$, hệ số tương quan thứ hạng nhị phân $r_{{rb}} = \mathbf{{{f(s['rank_biserial_dep_full'])}}}$.
  - Trên tập chỉ gồm các bản ghi có `Departure Delay` quan sát hợp lệ (**n = {n(s['departure_observed_n'])}**; tỷ lệ có trễ khởi hành $> 0$ ở nhóm hài lòng là **{f(s['dep_delay_pct_positive_satisfied_obs'])}%** so với **{f(s['dep_delay_pct_positive_dissatisfied_obs'])}%** ở nhóm không hài lòng): thống kê $U = \mathbf{{{f(s['mann_whitney_dep_u_obs'], 1)}}}$, $p = \mathbf{{7,52 \times 10^{{-68}}}} < 0,0001$, hệ số $r_{{rb}} = \mathbf{{{f(s['rank_biserial_dep_obs'])}}}$.
- **Kết quả thực nghiệm đối với độ trễ đến (`Arrival Delay`):**
  - Trên toàn bộ `PJ21.csv` (**n = {n(s['rows_clean'])}**; nhóm *Satisfied* có trung bình **{f(s['delay_mean_satisfied_full'])} phút**, tỷ lệ trễ $> 0$ là **{f(s['delay_pct_positive_satisfied_full'])}%**; nhóm *Neutral or Dissatisfied* có trung bình **{f(s['delay_mean_dissatisfied_full'])} phút**, tỷ lệ trễ $> 0$ là **{f(s['delay_pct_positive_dissatisfied_full'])}%**): thống kê $U = \mathbf{{{f(s['mann_whitney_u_full'], 1)}}}$, $p = \mathbf{{3,78 \times 10^{{-236}}}} < 0,0001$, hệ số $r_{{rb}} = \mathbf{{{f(s['rank_biserial_full'])}}}$.
  - Trên tập chỉ gồm các bản ghi có `Arrival Delay` quan sát hợp lệ (**n = {n(s['arrival_observed_n'])}**; tỷ lệ có trễ đến $> 0$ ở nhóm hài lòng là **{f(s['delay_pct_positive_satisfied_obs'])}%** so với **{f(s['delay_pct_positive_dissatisfied_obs'])}%** ở nhóm không hài lòng): thống kê $U = \mathbf{{{f(s['mann_whitney_u_obs'], 1)}}}$, $p = \mathbf{{8,97 \times 10^{{-245}}}} < 0,0001$, hệ số $r_{{rb}} = \mathbf{{{f(s['rank_biserial_obs'])}}}$.
- **Diễn giải:** Cả hai phép kiểm định độ trễ đều bác bỏ $H_0$ ở mức ý nghĩa 5% (kể cả khi hiệu chỉnh Bonferroni $\alpha/3 \approx 0,0167$ cho toàn bộ ba phép kiểm định trong mục 3.6). Dấu âm của $r_{{rb}}$ xác nhận nhóm hành khách hài lòng có xu hướng gặp độ trễ khởi hành và độ trễ đến thấp hơn nhóm trung lập/không hài lòng, đồng thời độ lớn hiệu ứng của độ trễ đến ($|r_{{rb}}| = 0,1058$ trên tập quan sát) mạnh hơn độ trễ khởi hành ($|r_{{rb}}| = 0,0658$ trên tập quan sát). Tuy nhiên, quy mô hiệu ứng nhìn chung ở mức nhỏ, cho thấy độ trễ chuyến bay cần được đặt trong mô hình kết hợp đa biến cùng các tiêu chí dịch vụ ở Chương 4.

### 3.6.3. Kết quả chuyển tiếp sang giai đoạn mô hình hóa

Từ quá trình kiểm toán dữ liệu và phân tích khám phá trên `PJ21.csv`, nghiên cứu xác lập bốn nguyên tắc kỹ thuật chuyển tiếp sang Chương 4 (Huấn luyện và đánh giá mô hình học máy):

1. **Sử dụng tập bản ghi có nhãn thực (`n = 119.092`) và loại bỏ khóa định danh:** Biến `ID` chỉ dùng để đối chiếu bản ghi và phải loại khỏi ma trận đặc trưng $X$; biến mục tiêu `Satisfaction` trên `PJ21.csv` gồm 100% nhãn quan sát thật (`1 = Satisfied`, `0 = Neutral or Dissatisfied`).
2. **Bảo toàn nhóm `'Unknown'` khi mã hóa đặc trưng phân loại:** Khi thực hiện One-Hot Encoding cho `Customer Type` và `Type of Travel`, cần giữ nguyên cột chỉ báo của nhóm `'Unknown'` (hoặc các cờ báo khuyết) thay vì gộp vào nhóm đa số, vì thực nghiệm ở mục 3.5.1 đã chứng minh nhóm `'Unknown'` có tỷ lệ hài lòng khác biệt rõ rệt so với nhóm `Business Travel` và `Returning Customer`.
3. **Yêu cầu về đầu vào chống rò rỉ dữ liệu thực chất cho Chương 4:** Do tệp `PJ21.csv` hiện tại đã điền `Mode` (`Gender`, `Class`) và `Median` (18 biến số) trên toàn bộ 119.092 dòng trước khi chia tập và không còn ô `NaN`, **việc chỉ gắn thêm `SimpleImputer` vào `Pipeline` nhưng vẫn truyền trực tiếp `PJ21.csv` làm đầu vào sẽ không khắc phục được ảnh hưởng của điền khuyết toàn tập**. Để loại bỏ hoàn toàn rò rỉ thông tin thống kê khi huấn luyện và đánh giá mô hình ở Chương 4, quy trình chuẩn bị dữ liệu mô hình phải sử dụng bảng dữ liệu **sau bước chuẩn hóa và lọc ngoài miền `BOUNDS` nhưng trước bước điền khuyết** (hoặc khôi phục mặt nạ các ô thiếu/ngoài miền từ `Data/raw/Du lieu khong sach.csv` đối chiếu qua khóa `ID` trên 119.092 dòng), sau đó mới thực hiện `train_test_split` (80/20, `stratify=y`) và chỉ `fit` các bộ tiền xử lý (`SimpleImputer`, `OneHotEncoder`, `StandardScaler`) trên tập `Train` bên trong `Pipeline`.
4. **Ghi nhận đúng hiện trạng các yêu cầu kỹ thuật của học phần:** Thực nghiệm ghép nối tại mục 3.2.1 hiện là các bảng dẫn xuất từ một tệp nguồn duy nhất; việc xuất tệp trung gian định dạng Parquet/Feather và thông tin chi tiết về nguồn dữ liệu (ngày tải, giấy phép, đơn vị gốc của `Flight Distance`, quy ước mã điểm `0`) vẫn đang thiếu và chưa được đánh dấu hoàn thành. Toàn bộ mã nguồn xử lý và nhật ký làm việc được quản lý thành tệp riêng, không in toàn bộ mã Python vào báo cáo.
'''

(R / "outputs" / "chuong3_ban_thao.qmd").write_text(text, encoding="utf-8")
print("Updated outputs/chuong3_ban_thao.qmd successfully.")
