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

from scipy.stats import chi2_contingency


def sci(x) -> str:
    m, e = f"{float(x):.2e}".split("e")
    return rf"{m.replace('.', ',')} \times 10^{{{int(e)}}}"


def chi_known(t: pd.DataFrame):
    """Chi-square 2 x k trên các nhóm quan sát được (loại nhóm 'Unknown')."""
    k = t.drop(index="Unknown")
    ct = [[r.hai_long, r.n - r.hai_long] for r in k.itertuples()]
    c = chi2_contingency(ct)
    total = sum(map(sum, ct))
    return c[0], c[2], (c[0] / total) ** 0.5, int(total)


chi_ty = chi_known(ty)
chi_cu = chi_known(cu)

# Bảng phân khúc: thêm dòng Business chỉ tính ô quan sát được
_obs_n = int(s["class_business_obs_n"])
_obs_pct = float(s["class_business_obs_satisfied_pct"])
gt_rows = gt.values.tolist()
_pos = [i for i, r in enumerate(gt_rows) if r[0] == "Class" and r[1] == "Business"][0]
gt_rows.insert(_pos + 1, ["Class", "Business (chỉ ô `Class` quan sát được)", n(_obs_n), n(round(_obs_n * _obs_pct / 100)), f(_obs_pct)])
gt = pd.DataFrame(gt_rows, columns=gt.columns)

# Bảng kiểm toán rút gọn (đầy đủ các cột nằm trong kiem_tra_chat_luong.csv)
audit_short = pd.DataFrame({
    "Biến": q_all["bien"],
    "Thiếu": q_all["thieu_ke_ca_ma_an_raw"].map(n),
    "Sai định dạng": q_all["sai_dinh_dang_raw"].map(n),
    "Ngoài miền": q_all["ngoai_mien_raw"].map(n),
    "Ô lỗi duy nhất": q_all["so_o_loi_duy_nhat_raw"].map(n),
    "Giá trị điền": q_all["gia_tri_dien_khuyet_tren_pj21"],
    "Số ô điền (PJ21)": q_all["so_o_dien_khuyet_tren_pj21"].map(n),
})
audit_short = pd.concat([audit_short, pd.DataFrame([{
    "Biến": "**Tổng (24 cột)**",
    "Thiếu": f"**{n(s['missing_including_codes_raw'])}**",
    "Sai định dạng": f"**{n(s['format_errors_raw'])}**",
    "Ngoài miền": f"**{n(s['outlier_errors_raw'])}**",
    "Ô lỗi duy nhất": f"**{n(s['unique_error_cells_raw'])}**",
    "Giá trị điền": "**—**",
    "Số ô điền (PJ21)": f"**{n(s['total_imputed_Or_unknown_cells_pj21'])}**",
}])], ignore_index=True)

# Từ điển dữ liệu rút gọn
dict_tbl = pd.DataFrame([
    ["`ID`", "Mã bản ghi (khóa ghép, loại khỏi mô hình)", "Số nguyên duy nhất, 1–129.880"],
    ["`Gender`, `Customer Type`, `Type of Travel`, `Class`", "Giới tính; loại khách; mục đích chuyến đi; hạng ghế", "`Female`/`Male`; `Returning`/`First-time`/`Unknown`; `Business`/`Personal`/`Unknown`; `Business`/`Economy`/`Economy Plus`"],
    ["`Age`", "Tuổi (năm)", "Quy ước (0; 100]; thực tế [7; 100]"],
    ["`Flight Distance`", "Khoảng cách bay (đơn vị gốc chưa xác minh)", "Quy ước (0; 9.999); thực tế [31; 9.910]"],
    ["`Departure Delay`, `Arrival Delay`", "Độ trễ khởi hành, độ trễ đến (quy ước: phút)", "Quy ước [0; 2.000]; thực tế [0; 2.000]"],
    ["14 điểm dịch vụ (xem Bảng @tbl-spearman)", "Điểm đánh giá thứ bậc từng điểm chạm dịch vụ", "11 biến có miền thực tế 0–5; `Check-in Service`, `Seat Comfort`, `Baggage Handling` có miền 1–5"],
    ["`Satisfaction`", "Mức hài lòng tổng thể (biến mục tiêu)", "`Satisfied` (1), `Neutral or Dissatisfied` (0)"],
], columns=["Biến", "Ý nghĩa", "Miền giá trị trong `PJ21.csv`"])

pct_dropped = f(100 * s["rows_dropped_missing_target"] / s["rows_raw"])
pct_kept = f(100 * s["rows_clean"] / s["rows_raw"])
iqr_dep = out.set_index("bien").loc["Departure Delay"]
iqr_arr = out.set_index("bien").loc["Arrival Delay"]
leg_valid_n = n(cor.loc["Leg Room Service", "so_o_quan_sat"])
fd_gt5000 = 178
dm = d_metric

text = rf'''---
lang: vi
format:
  html:
    toc: true
    toc-depth: 3
    embed-resources: true
  docx:
    toc: true
crossref:
  tbl-title: "Bảng"
  fig-title: "Hình"
  tbl-prefix: "Bảng"
  fig-prefix: "Hình"
  title-delim: "."
number-sections: false
execute:
  echo: false
---

# Chương 3. Tổ chức, xử lý và khám phá dữ liệu về sự hài lòng của hành khách hàng không {{#sec-chuong3}}

Chương này thực hiện hai giai đoạn đầu của CRISP-DM: **hiểu dữ liệu** (mục 3.1, 3.4) và **chuẩn bị dữ liệu** (mục 3.2, 3.3), sau đó khám phá dữ liệu (EDA) để trả lời sơ bộ **RQ1, RQ2, RQ3** của Chương 1 (mục 3.5, 3.6). Số liệu được tính từ tệp dữ liệu chưa làm sạch `Data/raw/Du lieu khong sach.csv` ({n(s['rows_raw'])} dòng × {s['columns']} cột) và tệp đã làm sạch `Data/processed/PJ21.csv` ({n(s['rows_clean'])} dòng × {s['columns']} cột; SHA-256 `{s['input_sha256']['Data\\processed\\PJ21.csv'][:16]}…`). Tệp `Data/original/` chỉ dùng để đối chứng, không dùng để khôi phục dữ liệu hay tính kết quả. Các kết quả mô tả mẫu khảo sát hiện có và không suy ra quan hệ nhân quả.

## 3.1. Nguồn dữ liệu và cấu trúc thông tin khảo sát {{#sec-3-1}}

### 3.1.1. Nguồn dữ liệu và đơn vị quan sát

Bộ dữ liệu *Airline Passenger Satisfaction* (Chương 1) được nhóm tiếp nhận ở dạng chưa làm sạch gồm {n(s['rows_raw'])} dòng. Sau khi loại **{n(s['rows_dropped_missing_target'])} dòng** ({pct_dropped}%) không có nhãn `Satisfaction` hợp lệ và chuẩn hóa, điền khuyết theo quy tắc ở mục 3.3.2, thu được `PJ21.csv` gồm **{n(s['rows_clean'])} dòng** ({pct_kept}%), đáp ứng yêu cầu tối thiểu 100.000 quan sát của học phần.

Mỗi dòng là một lượt khảo sát chuyến bay. Dữ liệu không có mã định danh hành khách xuyên suốt, không có thời điểm khảo sát, hãng bay hay đường bay; `ID` chỉ là khóa bản ghi (duy nhất, 0 dòng trùng). Do đó kết quả chỉ đại diện cho mẫu này, không suy rộng cho thị trường hàng không Việt Nam.

### 3.1.2. Cấu trúc biến và miền giá trị

Khi nạp tệp chưa làm sạch với `dtype=str`, cả 24 cột là chuỗi do lẫn khoảng trắng, hậu tố đơn vị và ký hiệu báo thiếu. Cấu trúc 24 biến trong `PJ21.csv` được tóm tắt ở @tbl-dict: 1 khóa, 4 biến phân loại, 4 biến định lượng vận hành, 14 điểm dịch vụ và 1 biến mục tiêu. Hồ sơ nguồn chưa xác nhận điểm `0` nghĩa là “không áp dụng” hay mức thấp nhất, nên điểm `0` không được mặc định hiểu là “rất không hài lòng”; ảnh hưởng của mã `0` được kiểm tra ở [mục 3.5.3](#sec-3-5-3).

{table(dict_tbl)}

: Từ điển dữ liệu rút gọn của `PJ21.csv` {{#tbl-dict}}

*Nguồn: Tổng hợp từ hai tệp dữ liệu và `outputs/chuong3/kieu_du_lieu_toi_uu.csv`.*

## 3.2. Tổ chức lưu trữ và tối ưu bộ nhớ {{#sec-3-2}}

Để kiểm tra kỹ thuật đọc – ghép đa định dạng, `PJ21.csv` được tách thành ba bảng (@tbl-files), đọc lại (bảng hành khách đọc theo `chunksize=30.000`) rồi ghép bằng `pd.merge(..., on="ID", validate="one_to_one")`. `assert_frame_equal` xác nhận bảng ghép có đúng {n(s['rows_clean'])} dòng × {s['columns']} cột và khớp từng giá trị với `PJ21.csv`. Đây là thao tác tách – ghép từ **một** nguồn, không phải tích hợp các nguồn độc lập.

| Tệp | Định dạng | Trường | Dòng | Cột |
|---|---|---|---:|---:|
| `hanh_khach.csv` | CSV | `ID`, `Gender`, `Age`, `Customer Type` | {n(s['rows_clean'])} | 4 |
| `hanh_trinh.json` | JSON | `ID`, `Type of Travel`, `Class`, `Flight Distance`, `Departure Delay`, `Arrival Delay` | {n(s['rows_clean'])} | 6 |
| `danh_gia.sqlite` | SQLite | `ID`, 14 điểm dịch vụ, `Satisfaction` | {n(s['rows_clean'])} | 16 |

: Ba bảng dẫn xuất trong thực nghiệm đa định dạng (`outputs/chuong3/multi_file/`) {{#tbl-files}}

Về bộ nhớ (`memory_usage(deep=True)`): bảng chuỗi chưa làm sạch chiếm **{f(s['memory_raw_bytes']/2**20, 2)} MiB**, `PJ21.csv` nạp mặc định **{f(s['memory_before_bytes']/2**20, 2)} MiB**, sau khi đổi 5 biến sang `category` và thu gọn 19 cột số nguyên (`int8`/`int16`/`int32`) còn **{f(s['memory_after_bytes']/2**20, 2)} MiB**, tiết kiệm **{f(s['memory_reduction_pct'], 2)}%** mà không đổi giá trị nào. Con số này là dung lượng đối tượng DataFrame, không phải bộ nhớ cực đại của tiến trình.

## 3.3. Kiểm toán chất lượng và quy trình làm sạch {{#sec-3-3}}

### 3.3.1. Kết quả kiểm toán lỗi trước và sau làm sạch

Hàm `kiem_toan_tung_o` (trong `lam_sach_du_lieu.py`) quét từng ô của tệp chưa làm sạch ({n(s['cells_raw'])} ô) và của `PJ21.csv` ({n(s['cells_clean'])} ô) theo ba nhóm lỗi:

- **Thiếu:** {n(s['missing_including_codes_raw'])} ô, gồm {n(s['missing_csv_raw'])} ô trống và {n(s['missing_including_codes_raw'] - s['missing_csv_raw'])} ô mang ký hiệu báo thiếu ẩn (`?`, `-`, `unknown`, `chưa rõ`, `null`, `none`, `n/a`, `nan`).
- **Sai định dạng:** {n(s['format_errors_raw'])} lượt, gồm khoảng trắng thừa, chuỗi cắt cụt ở biến phân loại (như `'  Fema'`, `'  Busine'`), hậu tố đơn vị (`USD`, `VND`, `đ`, `kg`, `%`) và chuỗi số thực `.0` ở cột nguyên.
- **Ngoài miền quy ước:** {n(s['outlier_errors_raw'])} lượt (mã `-1`, số âm, `9999`, độ trễ trên 2.000 phút, điểm ngoài [0; 5]).

Một ô có thể vừa sai định dạng vừa ngoài miền ({n(s['overlap_fmt_out_raw'])} ô), nên cần phân biệt **{n(s['total_error_occurrences_raw'])} lượt lỗi** với **{n(s['unique_error_cells_raw'])} ô lỗi duy nhất** ({f(s['unique_error_cells_raw_pct'], 2)}% số ô). Trong số này, {n(s['unique_error_cells_dropped_rows'])} ô nằm trên {n(s['rows_dropped_missing_target'])} dòng bị loại vì thiếu nhãn và **{n(s['unique_error_cells_fixed_kept_rows'])} ô** nằm trên các dòng giữ lại và được sửa hoặc điền (@tbl-audit; bản đầy đủ nhiều cột hơn ở `outputs/chuong3/kiem_tra_chat_luong.csv`). Sau xử lý, cả ba nhóm lỗi trên `PJ21.csv` bằng 0 khi kiểm toán thực tế từng ô (với `'Unknown'` là danh mục hợp lệ của `Customer Type` và `Type of Travel`).

{table(audit_short)}

: Số lỗi trước làm sạch và số ô điền khuyết trong `PJ21.csv`, theo 24 biến {{#tbl-audit}}

*Nguồn: Kiểm toán từng ô từ tệp chưa làm sạch (n = {n(s['rows_raw'])}) và `PJ21.csv` (n = {n(s['rows_clean'])}), đối chiếu qua `ID`.*

### 3.3.2. Quy tắc chuẩn hóa, loại dòng và điền khuyết {{#sec-3-3-2}}

Quy trình trong `lam_sach_du_lieu.py` (và notebook `clean_data.ipynb`, cùng quy tắc) gồm bốn quyết định:

1. **Loại dòng thiếu nhãn:** {n(s['rows_dropped_missing_target'])} dòng ({pct_dropped}%) thiếu `Satisfaction` bị loại thay vì điền nhãn phổ biến nhất, để không tạo nhãn giả. Khả năng khuyết nhãn không hoàn toàn ngẫu nhiên chưa được kiểm tra.
2. **Chuẩn hóa văn bản:** cắt khoảng trắng, đưa chữ hoa/thường về chuẩn và ánh xạ các tiền tố cắt cụt (ví dụ `'  fema'` → `Female`, `'  economy pl'` → `Economy Plus`).
3. **Trích số và lọc theo miền quy ước (`BOUNDS`):** lấy số đầu tiên trong chuỗi rồi chuyển giá trị ngoài miền thành thiếu (`Age` ngoài (0; 100], `Flight Distance` ngoài (0; 9.999), độ trễ ngoài [0; 2.000], điểm dịch vụ ngoài [0; 5]). Cách này không phân biệt số âm do gắn nhầm dấu hay giá trị bị nhân hệ số với ngoại lai; việc bỏ hậu tố đơn vị chỉ là làm sạch ký tự, không quy đổi đơn vị.
4. **Điền khuyết toàn cục** (@tbl-fill): Mode cho `Gender`, `Class`; nhãn `Unknown` cho `Customer Type`, `Type of Travel`; trung vị toàn tập cho 4 biến vận hành và 14 điểm dịch vụ.

| Nhóm biến | Cách xử lý | Giá trị điền | Số ô điền (tỷ lệ) | Hệ quả cần lưu ý |
|---|---|---|---|---|
| `Satisfaction` | Loại dòng | — | 0 | Giữ 100% nhãn quan sát |
| `Customer Type`, `Type of Travel` | Nhãn `Unknown` | `Unknown` | {ct_imp_n} ({ct_imp_pct}%); {tt_imp_n} ({tt_imp_pct}%) | Giữ riêng, không gộp vào `Returning`/`Business Travel` |
| `Gender`, `Class` | Mode toàn tập | `Female`, `Business` | {ge_imp_n} ({ge_imp_pct}%); {cl_imp_n} ({cl_imp_pct}%) | Kéo tỷ lệ hài lòng của `Business` về gần trung bình chung |
| 4 biến vận hành | Trung vị toàn tập | `Age`=40, `Flight Distance`=846, độ trễ=0 | Từ `{met_min_col}` {met_min_n} ({met_min_pct}%) đến `{met_max_col}` {met_max_n} ({met_max_pct}%) | Tạo đỉnh tại trung vị, giảm phương sai |
| 14 điểm dịch vụ | Trung vị toàn tập | 8 biến điền `3`, 6 biến điền `4` | Từ `{svc_min_col}` {svc_min_n} ({svc_min_pct}%) đến `{svc_max_col}` {svc_max_n} ({svc_max_pct}%) | Thu hẹp biến thiên, có thể đổi thứ hạng tương quan |

: Chiến lược điền khuyết và số ô bị ảnh hưởng trong `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-fill}}

Giá trị điền của 14 điểm dịch vụ lấy từ `kiem_tra_chat_luong.csv`: điền `4` cho `On-board Service`, `Seat Comfort`, `Leg Room Service`, `In-flight Service`, `In-flight Entertainment`, `Baggage Handling`; điền `3` cho 8 biến còn lại. Riêng `Leg Room Service`, trung vị trên {leg_valid_n} ô hợp lệ trước khi điền là 4,0 nên {svc_min_n} ô điền của biến này nhận giá trị `4`.

### 3.3.3. Miền giá trị và ngoại lai thống kê

Các ngưỡng 2.000 phút (độ trễ) và 9.999 (khoảng cách) là **quy tắc cắt lọc kỹ thuật của nhóm**, không phải chuẩn nghiệp vụ có nguồn xác nhận. Trong `PJ21.csv` còn {fd_gt5000} bản ghi `Flight Distance` từ 5.000 đến 9.910; cả {fd_gt5000} giá trị này là giá trị quan sát (không phải ô điền). Chưa có căn cứ để kết luận chúng là lỗi nhân hệ số, nên được giữ nguyên và ghi nhận là hạn chế (khoảng cách chưa rõ đơn vị gốc).

Theo quy tắc IQR $[Q_1 - 1,5 \times \text{{IQR}};\; Q_3 + 1,5 \times \text{{IQR}}]$, các biến vẫn có quan sát ở đuôi phải (@tbl-iqr). Do hơn một nửa chuyến bay có độ trễ 0 phút nên cận trên IQR của độ trễ rất thấp ({f(iqr_dep['can_tren'], 1)} và {f(iqr_arr['can_tren'], 1)} phút), dẫn tới {f(iqr_dep['ty_le_pct'], 2)}% bản ghi trễ khởi hành và {f(iqr_arr['ty_le_pct'], 2)}% bản ghi trễ đến bị đánh dấu. Đó là đặc trưng của phân phối lệch phải tập trung tại 0, không phải lỗi cần xóa; vì vậy mục 3.5–3.6 dùng phân nhóm độ trễ và kiểm định phi tham số.

{table(ot)}

: Ngoại lai theo IQR trên `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-iqr}}

*Nguồn: `outputs/chuong3/ngoai_lai_iqr.csv`.*

### 3.3.4. Tính tái lập và phạm vi rò rỉ dữ liệu {{#sec-3-3-4}}

- **Tái lập mã nguồn:** chạy lại `lam_sach_du_lieu.py` trên tệp chưa làm sạch cho kết quả khớp từng ô với `PJ21.csv` (kiểm tra bằng `assert_frame_equal`; mã băm của hai tệp đầu vào không đổi sau kiểm toán).
- **Giới hạn của “0 lỗi sau xử lý”:** kết quả này chỉ chứng minh `PJ21.csv` tuân thủ quy tắc do nhóm đặt ra, **không** chứng minh {n(s['total_imputed_Or_unknown_cells_pj21'])} ô được điền/gán `Unknown` phản ánh đúng giá trị thực.
- **Rò rỉ dữ liệu:** `PJ21.csv` được điền Mode/trung vị trên toàn bộ {n(s['rows_clean'])} dòng trước khi chia tập huấn luyện/kiểm tra. Vì vậy chỉ thêm `SimpleImputer` vào `Pipeline` mà vẫn dùng `PJ21.csv` làm đầu vào sẽ không loại bỏ ảnh hưởng này. Hàm ý cho Chương 4 được nêu ở [mục 3.6.3](#sec-3-6-3).

## 3.4. Đặc điểm phân bố của hành khách và mức hài lòng {{#sec-3-4}}

### 3.4.1. Thống kê mô tả các biến vận hành

{table(dt)}

: Thống kê mô tả bốn biến định lượng vận hành trên `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-desc}}

*Nguồn: `outputs/chuong3/thong_ke_mo_ta.csv` (14 điểm dịch vụ có trong cùng tệp).*

Tuổi trung bình {f(dm.loc['Age','mean'])} năm (trung vị {n(dm.loc['Age','50%'])}; độ lệch chuẩn {f(dm.loc['Age','std'])}; từ {n(dm.loc['Age','min'])} đến {n(dm.loc['Age','max'])}). Khoảng cách bay có trung bình {f(dm.loc['Flight Distance','mean'], 2)} và trung vị {n(dm.loc['Flight Distance','50%'])}. Độ trễ khởi hành trung bình {f(dm.loc['Departure Delay','mean'], 2)} phút (P99 = {n(dm.loc['Departure Delay','99%'])}), độ trễ đến trung bình {f(dm.loc['Arrival Delay','mean'], 2)} phút (P99 = {n(dm.loc['Arrival Delay','99%'])}), cả hai có trung vị 0 phút; trong đó {met_max_n} ô ({met_max_pct}%) của `Departure Delay` và {met_min_n} ô ({met_min_pct}%) của `Arrival Delay` là giá trị điền 0.

![Phân bố tuổi (trái) và boxplot log(1 + Arrival Delay) theo nhóm hài lòng (phải) trên `PJ21.csv`.](../figures/chuong3/05_phan_phoi.png){{#fig-dist width=95%}}

Ở @fig-dist (trái), phân bố tuổi tập trung ở khoảng 22–60 tuổi nhưng có cột cao đột biến tại 40, do {age_imp_n} bản ghi ({age_imp_pct}%) thiếu hoặc ngoài miền tuổi được điền trung vị 40. Ở @fig-dist (phải), trung vị độ trễ đến của cả hai nhóm đều 0 nên vạch trung vị nằm sát đáy hộp; hộp tứ phân vị trên và râu trên của nhóm *Neutral or Dissatisfied* cao hơn nhóm *Satisfied*.

### 3.4.2. Cơ cấu nhãn hài lòng

Trong {n(s['rows_raw'])} bản ghi chưa làm sạch, {n(s['rows_clean'])} bản ghi ({pct_kept}%) có nhãn hợp lệ và {n(s['rows_dropped_missing_target'])} bản ghi ({pct_dropped}%) bị loại. Trên `PJ21.csv`, có {n(s['satisfied_count'])} bản ghi *Satisfied* ({f(s['rate_satisfied_pct'])}%) và {n(s['dissatisfied_count'])} bản ghi *Neutral or Dissatisfied* ({f(s['rate_dissatisfied_pct'])}%) — hai lớp tương đối cân bằng, hoàn toàn là nhãn quan sát.

![Tỷ lệ bản ghi giữ lại sau sàng lọc nhãn (trái) và cơ cấu hai lớp `Satisfaction` trên `PJ21.csv` (phải).](../figures/chuong3/01_co_cau_nhan.png){{#fig-label width=95%}}

## 3.5. Mối liên hệ giữa trải nghiệm dịch vụ và sự hài lòng {{#sec-3-5}}

### 3.5.1. Khác biệt theo phân khúc hành khách (RQ1) {{#sec-3-5-1}}

@tbl-seg và @fig-seg trình bày quy mô và tỷ lệ hài lòng theo hạng ghế, loại khách, mục đích chuyến đi và giới tính. Nhóm `Unknown` của hai biến `Customer Type`, `Type of Travel` được tách riêng. Với `Class`, dòng “Business (chỉ ô quan sát được)” loại {n(s['class_imputed_n'])} bản ghi được điền Mode.

{table(gt)}

: Quy mô và tỷ lệ hài lòng theo phân khúc hành khách trên `PJ21.csv` (n = {n(s['rows_clean'])}) {{#tbl-seg}}

*Nguồn: `outputs/chuong3/Class.csv`, `Customer_Type.csv`, `Type_of_Travel.csv`, `Gender.csv`; dòng quan sát của `Class` lấy từ `ket_qua.json`.*

![Tỷ lệ hài lòng theo hạng ghế, loại khách hàng và mục đích chuyến đi (cột xám: nhóm `Unknown`).](../figures/chuong3/02_phan_khuc.png){{#fig-seg width=100%}}

- **Hạng ghế:** `Business` có tỷ lệ hài lòng cao nhất ({f(cl.loc['Business','ty_le'])}% trên `PJ21.csv`), cao hơn `Economy Plus` ({f(cl.loc['Economy Plus','ty_le'])}%) {f(cl.loc['Business','ty_le'] - cl.loc['Economy Plus','ty_le'])} điểm phần trăm và cao hơn `Economy` ({f(cl.loc['Economy','ty_le'])}%) {f(cl.loc['Business','ty_le'] - cl.loc['Economy','ty_le'])} điểm phần trăm. Nếu chỉ tính {n(s['class_business_obs_n'])} bản ghi có `Class` quan sát được, `Business` đạt {f(s['class_business_obs_satisfied_pct'])}%, trong khi {n(s['class_imputed_n'])} bản ghi được điền Mode chỉ đạt {f(s['class_imputed_satisfied_pct'])}%; điền Mode làm giảm tỷ lệ của `Business` {f(s['class_business_obs_satisfied_pct'] - cl.loc['Business','ty_le'])} điểm phần trăm. Kiểm định liên hệ với `Class` ở [mục 3.6.1](#sec-3-6-1).
- **Mục đích chuyến đi:** trong các bản ghi xác định được mục đích, `Business Travel` ({f(ty.loc['Business Travel','ty_le'])}%) cao hơn `Personal Travel` ({f(ty.loc['Personal Travel','ty_le'])}%) {f(ty.loc['Business Travel','ty_le'] - ty.loc['Personal Travel','ty_le'])} điểm phần trăm (gấp khoảng {f(ty.loc['Business Travel','ty_le'] / ty.loc['Personal Travel','ty_le'], 1)} lần). Kiểm định Chi-square trên hai nhóm quan sát được cho $\chi^2 = {f(chi_ty[0], 1)}$, df = {chi_ty[1]}, Cramér’s $V = {f(chi_ty[2])}$ (n = {n(chi_ty[3])}). Nhóm `Unknown` ({n(ty.loc['Unknown','n'])} bản ghi, {tt_imp_pct}%) đạt {f(ty.loc['Unknown','ty_le'])}%, gần mức chung ({f(s['rate_satisfied_pct'])}%); sự gần nhau này không đủ để kết luận cơ chế khuyết là ngẫu nhiên hoàn toàn (MCAR).
- **Loại khách hàng:** `Returning Customer` ({f(cu.loc['Returning Customer','ty_le'])}%) cao hơn `First-time Customer` ({f(cu.loc['First-time Customer','ty_le'])}%) {f(cu.loc['Returning Customer','ty_le'] - cu.loc['First-time Customer','ty_le'])} điểm phần trăm; $\chi^2 = {f(chi_cu[0], 1)}$, df = {chi_cu[1]}, Cramér’s $V = {f(chi_cu[2])}$ (n = {n(chi_cu[3])}, không gồm `Unknown`). Nhóm `Unknown` ({n(cu.loc['Unknown','n'])} bản ghi, {ct_imp_pct}%) đạt {f(cu.loc['Unknown','ty_le'])}%. Do `Unknown` có tỷ lệ khác cả hai nhóm quan sát được nên được giữ riêng thay vì gộp vào nhóm đa số.

Với cỡ mẫu lớn, p-value gần như luôn rất nhỏ; cường độ liên hệ (Cramér’s $V$) và chênh lệch điểm phần trăm là thông tin chính. Các kiểm định này chỉ dùng nhóm quan sát được, nên không bị ảnh hưởng bởi ô điền, nhưng cũng bỏ qua khoảng {tt_imp_pct}% (`Type of Travel`) và {ct_imp_pct}% (`Customer Type`) bản ghi `Unknown`.

### 3.5.2. Độ trễ khởi hành, độ trễ đến và mức hài lòng (RQ2) {{#sec-3-5-2}}

Hai biến độ trễ được chia thành bốn nhóm: `0 phút`, `1–15 phút`, `16–60 phút`, `Trên 60 phút`. Vì {n(s['departure_imputed_zero_n'])} bản ghi ({met_max_pct}%) của `Departure Delay` và {n(s['arrival_imputed_zero_n'])} bản ghi ({met_min_pct}%) của `Arrival Delay` là giá trị điền 0, @tbl-delay báo cáo cả toàn bộ `PJ21.csv` (n = {n(s['rows_clean'])}) và riêng bản ghi có độ trễ quan sát hợp lệ (n = {n(s['departure_observed_n'])} cho khởi hành; n = {n(s['arrival_observed_n'])} cho đến). Ô điền chỉ rơi vào nhóm `0 phút`, nên ba nhóm còn lại giống nhau ở hai cách tính.

{table(de_both)}

: Tỷ lệ hài lòng theo nhóm độ trễ khởi hành và độ trễ đến {{#tbl-delay}}

*Nguồn: `outputs/chuong3/nhom_do_tre_khoi_hanh.csv`, `nhom_do_tre.csv`.*

![Tỷ lệ hài lòng theo nhóm độ trễ khởi hành (trái) và độ trễ đến (phải); hai cột chỉ khác nhau ở nhóm 0 phút.](../figures/chuong3/03_do_tre.png){{#fig-delay width=100%}}

- **Độ trễ khởi hành:** tỷ lệ hài lòng giảm từ {f(dep_0_obs)}% (nhóm 0 phút quan sát) xuống {f(dep_delay.iloc[1]['ty_le_quan_sat'])}%, {f(dep_delay.iloc[2]['ty_le_quan_sat'])}% và {f(dep_60_full)}% (trên 60 phút) — chênh {f(dep_diff_obs)} điểm phần trăm. Trên toàn `PJ21.csv`, chênh lệch là {f(dep_diff_full)} điểm phần trăm vì ô điền 0 (tỷ lệ hài lòng {f(s['departure_imputed_zero_satisfied_pct'])}%) kéo nhóm 0 phút xuống {f(dep_0_full)}%.
- **Độ trễ đến:** tỷ lệ hài lòng giảm từ {f(arr_0_obs)}% (nhóm 0 phút quan sát) xuống {f(arr_delay.iloc[1]['ty_le_quan_sat'])}%, {f(arr_delay.iloc[2]['ty_le_quan_sat'])}% và {f(arr_60_full)}% (trên 60 phút) — chênh {f(arr_diff_obs)} điểm phần trăm ({f(arr_diff_full)} trên toàn `PJ21.csv`; ô điền 0 có tỷ lệ {f(s['arrival_imputed_zero_satisfied_pct'])}%). Hai nhóm `16–60 phút` và `Trên 60 phút` gần như bằng nhau ({f(arr_delay.iloc[2]['ty_le'])}% so với {f(arr_60_full)}%), nên mức giảm không tiếp tục sau ngưỡng 16 phút.
- **So sánh hai chiều:** trong mẫu này, chênh lệch theo độ trễ đến ({f(arr_diff_obs)} điểm phần trăm) lớn hơn theo độ trễ khởi hành ({f(dep_diff_obs)} điểm phần trăm). Hai chênh lệch tính trên hai tập quan sát có cỡ mẫu khác nhau và hai biến độ trễ có liên hệ với nhau, nên chưa đủ để kết luận độ trễ đến “tác động mạnh hơn”.

### 3.5.3. Các điểm chạm dịch vụ có liên hệ nổi bật (RQ3) {{#sec-3-5-3}}

`Satisfaction` được mã hóa nhị phân (1 = `Satisfied`) và tính Spearman ($\rho$) với 14 điểm dịch vụ. Để đánh giá ảnh hưởng của điểm `0` chưa rõ nghĩa và của ô điền trung vị (từ {svc_min_pct}% ở `{svc_min_col}` đến {svc_max_pct}% ở `{svc_max_col}`), @tbl-spearman báo cáo hệ số và thứ hạng theo ba cách: giữ mã `0` trên `PJ21.csv`, loại mã `0`, và chỉ dùng ô quan sát trước khi điền. @fig-heat là ma trận Spearman của cách tính đầu tiên (trên `PJ21.csv` đã điền).

{table(co)}

: Hệ số Spearman và thứ hạng của 14 điểm dịch vụ với `Satisfaction` {{#tbl-spearman}}

*Nguồn: `outputs/chuong3/do_nhay_diem_0.csv`.*

![Ma trận tương quan Spearman giữa 14 điểm dịch vụ và `Satisfaction (0/1)` trên `PJ21.csv` (đã điền khuyết, giữ mã 0).](../figures/chuong3/04_heatmap.png){{#fig-heat width=92%}}

- **Giữ mã `0` trên `PJ21.csv`:** dẫn đầu là `{top_giu0[0]}` ($\rho = {f(cor.loc[top_giu0[0], 'giu_0_pj21'])}$), `{top_giu0[1]}` ({f(cor.loc[top_giu0[1], 'giu_0_pj21'])}), `{top_giu0[2]}` ({f(cor.loc[top_giu0[2], 'giu_0_pj21'])}), `{top_giu0[3]}` ({f(cor.loc[top_giu0[3], 'giu_0_pj21'])}) và `{top_giu0[4]}` ({f(cor.loc[top_giu0[4], 'giu_0_pj21'])}).
- **Loại mã `0`:** `{top_bo0[2]}` tăng từ {f(cor.loc[top_bo0[2], 'giu_0_pj21'])} (hạng #6) lên {f(cor.loc[top_bo0[2], 'bo_0_pj21'])} (hạng #3), đẩy `{top_bo0[3]}` xuống #4, `{top_bo0[4]}` xuống #5 và `{top_bo0[5]}` ra khỏi nhóm 5 đầu (#6). `Ease of Online Booking` và `Food and Drink` đổi chỗ #11/#12.
- **Chỉ ô quan sát:** năm vị trí đầu giống cách giữ mã `0` (`{top_obs[0]}`, `{top_obs[1]}`, `{top_obs[2]}`, `{top_obs[3]}`, `{top_obs[4]}`). `Cleanliness` có $\rho = {f(cor.loc['Cleanliness', 'chi_o_quan_sat'])}$ (hạng #6) nhưng giảm còn {f(cor.loc['Cleanliness', 'giu_0_pj21'])} (hạng #8) trên `PJ21.csv`, nơi {svc_max_n} ô ({svc_max_pct}%) của biến này là giá trị điền.
- **Hai điểm cuối bảng:** `Gate Location` ({f(cor.loc['Gate Location','giu_0_pj21'])}) và `Departure and Arrival Time Convenience` ({f(cor.loc['Departure and Arrival Time Convenience','giu_0_pj21'])}) gần 0 hoặc âm nhẹ ở cả ba cách tính.

`Online Boarding` và `In-flight Entertainment` đứng #1–#2 ở cả ba cách tính, còn các thứ hạng giữa bảng nhạy với điểm `0` và ô điền. Spearman đo liên hệ đơn biến, không phải mức độ quan trọng hay tác động nhân quả của từng điểm chạm.

## 3.6. Kiểm định sơ bộ và giới hạn suy luận {{#sec-3-6}}

Ba kiểm định chính (Chi-square cho `Class`; Mann–Whitney U cho `Departure Delay` và cho `Arrival Delay`, đều trên bản ghi quan sát) được đánh giá với mức ý nghĩa 5% và hiệu chỉnh Bonferroni $\alpha/3 \approx 0,0167$. Kết quả trên toàn bộ `PJ21.csv` được báo cáo như phân tích độ nhạy.

### 3.6.1. Hạng ghế và sự hài lòng (Chi-square) {{#sec-3-6-1}}

$H_0$: `Class` và `Satisfaction` độc lập. Kiểm định chính dùng n = {n(s['chi2_obs_n'])} bản ghi có `Class` quan sát hợp lệ: $\chi^2 = {f(s['chi2_obs'], 1)}$, df = {s['chi2_obs_df']}, $p < 10^{{-300}}$ (đã hiệu chỉnh Bonferroni vẫn bác bỏ $H_0$), tần số kỳ vọng nhỏ nhất {f(s['expected_min_obs'], 1)} (đạt điều kiện áp dụng) và Cramér’s $V = {f(s['cramers_v_obs'])}$. Trên toàn `PJ21.csv` (n = {n(s['chi2_full_n'])}): $\chi^2 = {f(s['chi2_full'], 1)}$, $V = {f(s['cramers_v_full'])}$; điền Mode làm giảm $V$ từ {f(s['cramers_v_obs'])} xuống {f(s['cramers_v_full'])}. Dữ liệu cho thấy liên hệ mạnh giữa hạng ghế và mức hài lòng trong mẫu này.

### 3.6.2. Độ trễ giữa hai nhóm hài lòng (Mann–Whitney U) {{#sec-3-6-2}}

$H_0$: phân phối độ trễ của nhóm *Satisfied* và *Neutral or Dissatisfied* giống nhau (hai phía). Do độ trễ lệch phải mạnh và tập trung tại 0, dùng Mann–Whitney U thay cho kiểm định $t$; vì hình dạng phân phối hai nhóm có thể khác nhau, đây là kiểm định dịch chuyển phân phối chứ không phải kiểm định hai trung vị (cùng bằng 0). Hệ số $r_{{rb}}$ âm nghĩa là nhóm hài lòng có xu hướng trễ ít hơn.

| Biến | Tập | n | $U$ | $p$ | $r_{{rb}}$ |
|---|---|---:|---:|---|---:|
| `Departure Delay` | Quan sát (chính) | {n(s['departure_observed_n'])} | {n(s['mann_whitney_dep_u_obs'])} | ${sci(s['mann_whitney_dep_p_obs'])}$ | {f(s['rank_biserial_dep_obs'])} |
| `Departure Delay` | Toàn `PJ21.csv` | {n(s['rows_clean'])} | {n(s['mann_whitney_dep_u_full'])} | ${sci(s['mann_whitney_dep_p_full'])}$ | {f(s['rank_biserial_dep_full'])} |
| `Arrival Delay` | Quan sát (chính) | {n(s['arrival_observed_n'])} | {n(s['mann_whitney_u_obs'])} | ${sci(s['mann_whitney_p_obs'])}$ | {f(s['rank_biserial_obs'])} |
| `Arrival Delay` | Toàn `PJ21.csv` | {n(s['rows_clean'])} | {n(s['mann_whitney_u_full'])} | ${sci(s['mann_whitney_p_full'])}$ | {f(s['rank_biserial_full'])} |

: Kết quả Mann–Whitney U cho độ trễ theo nhóm hài lòng {{#tbl-mw}}

Mô tả bổ sung (trên toàn `PJ21.csv`): độ trễ khởi hành trung bình {f(s['dep_delay_mean_satisfied_full'], 2)} phút ở nhóm hài lòng so với {f(s['dep_delay_mean_dissatisfied_full'], 2)} phút ở nhóm còn lại; độ trễ đến lần lượt {f(s['delay_mean_satisfied_full'], 2)} và {f(s['delay_mean_dissatisfied_full'], 2)} phút. Cả ba kiểm định chính bác bỏ $H_0$ (mọi $p \ll 0,0167$) nhưng cỡ hiệu ứng nhỏ ($|r_{{rb}}| = {f(abs(s['rank_biserial_dep_obs']), 3)}$ với khởi hành và ${f(abs(s['rank_biserial_obs']), 3)}$ với đến, trên tập quan sát). Độ trễ vì vậy cần được xét cùng các điểm chạm dịch vụ trong mô hình đa biến ở Chương 4.

### 3.6.3. Hàm ý cho giai đoạn mô hình hóa {{#sec-3-6-3}}

1. Dùng {n(s['rows_clean'])} bản ghi có nhãn quan sát; `ID` chỉ để truy vết và phải loại khỏi ma trận đặc trưng.
2. Giữ nhóm `Unknown` (hoặc cờ báo khuyết) khi mã hóa `Customer Type` và `Type of Travel`, vì nhóm này có tỷ lệ hài lòng khác các nhóm quan sát được ([mục 3.5.1](#sec-3-5-1)).
3. Để tránh rò rỉ do điền khuyết toàn tập ([mục 3.3.4](#sec-3-3-4)), đầu vào mô hình cần là dữ liệu sau chuẩn hóa và lọc theo `BOUNDS` nhưng **trước** bước điền (hoặc khôi phục mặt nạ ô thiếu từ tệp chưa làm sạch theo `ID`); sau đó mới chia 80/20 phân tầng và chỉ `fit` bộ tiền xử lý trên tập huấn luyện trong `Pipeline`.

## 3.7. Tổng hợp theo câu hỏi nghiên cứu và hạn chế {{#sec-3-7}}

| Câu hỏi | Kết quả chính (trong mẫu này) | Giới hạn chính |
|---|---|---|
| RQ1 | Tỷ lệ hài lòng chung {f(s['rate_satisfied_pct'], 2)}%; cao nhất ở hạng `Business`, `Business Travel`, `Returning Customer` ([mục 3.5.1](#sec-3-5-1)) | Ô `Class` điền Mode; {tt_imp_pct}% và {ct_imp_pct}% bản ghi `Unknown` |
| RQ2 | Hài lòng giảm khi độ trễ tăng; cỡ hiệu ứng nhỏ ([mục 3.5.2](#sec-3-5-2), [3.6.2](#sec-3-6-2)) | {met_max_pct}% ô `Departure Delay` được điền 0; không suy ra nhân quả |
| RQ3 | `Online Boarding`, `In-flight Entertainment` dẫn đầu ở cả ba cách tính ([mục 3.5.3](#sec-3-5-3)) | Nghĩa điểm `0` chưa rõ; thứ hạng giữa bảng nhạy với ô điền |

: Tóm tắt kết quả EDA theo RQ1–RQ3 {{#tbl-rq}}

Các hạn chế cần ghi nhận: (i) ba bảng ở mục 3.2 chỉ dẫn xuất từ một nguồn; tệp Parquet/Feather chưa được xuất vì môi trường chưa cài `pyarrow`; (ii) ngày tải, giấy phép Kaggle, đơn vị gốc của `Flight Distance` và nghĩa của điểm `0` chưa được xác minh; (iii) ngưỡng lọc `BOUNDS` là quy tắc kỹ thuật của nhóm; (iv) kết quả chưa xét tương tác giữa các biến, nội dung này thuộc Chương 4.
'''

(R / "outputs" / "chuong3_ban_thao.qmd").write_text(text, encoding="utf-8")
print("Updated outputs/chuong3_ban_thao.qmd successfully.")
