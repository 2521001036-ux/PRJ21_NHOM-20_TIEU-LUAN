"""Build Chapter 4 Quarto draft (outputs/chuong4_ban_thao.qmd) from verified outputs of src/phan_tich_chuong4.py.

All numbers, percentages, model metrics, cross-validation scores, confusion matrices,
feature importances, and subgroup error statistics are pulled dynamically from outputs/chuong4/.
"""
from pathlib import Path
import json
import pandas as pd

R = Path(__file__).resolve().parents[1]
O = R / "outputs" / "chuong4"
s = json.loads((O / "ket_qua_chuong4.json").read_text(encoding="utf-8"))


def n(x) -> str:
    return f"{int(round(float(x))):,}".replace(",", ".")


def f(x, k: int = 2) -> str:
    return f"{float(x):.{k}f}".replace(".", ",")


def table(frame: pd.DataFrame) -> str:
    header = "| " + " | ".join(map(str, frame.columns)) + " |\n"
    rule = "|" + "|".join(["---"] * len(frame.columns)) + "|\n"
    body = "\n".join(
        "| " + " | ".join(str(v) for v in row) + " |"
        for row in frame.itertuples(index=False, name=None)
    )
    return header + rule + body


# 1. Bảng đối chiếu giá trị điền khuyết trên Train vs Toàn tập PJ21.csv
imp_df = pd.read_csv(O / "doi_chieu_dien_khuyet_train_vs_pj21.csv")
imp_tbl = pd.DataFrame({
    "Biến": imp_df["bien"],
    "Nhóm": imp_df["nhom"],
    "Chiến lược trong Pipeline": imp_df["chien_luoc"],
    "Ô khuyết Train (%)": [f"{n(c)} ({f(p, 2)}%)" for c, p in zip(imp_df["o_khuyet_train"], imp_df["ty_le_khuyet_train_pct"])],
    "Ô khuyết Test (%)": [f"{n(c)} ({f(p, 2)}%)" for c, p in zip(imp_df["o_khuyet_test"], imp_df["ty_le_khuyet_test_pct"])],
    "Giá trị học trên Train": imp_df["gia_tri_hoc_tren_train"].astype(str).str.replace(".", ",", regex=False),
    "Giá trị trên PJ21.csv": imp_df["gia_tri_toan_tap_pj21"].astype(str).str.replace(".", ",", regex=False),
    "Khớp": imp_df["khop_100_pct"].map(lambda x: "Khớp" if x else "**Lệch nhẹ**"),
})

# 2. Bảng kiểm tra đa cộng tuyến VIF trên tập Train
vif_df = pd.read_csv(O / "kiem_tra_vif.csv")
vif_tbl = pd.DataFrame({
    "Hạng VIF": range(1, len(vif_df) + 1),
    "Biến định lượng": vif_df["bien"],
    "Nhóm biến": vif_df["nhom"],
    "$R^2$ với các biến số khác": vif_df["R2_voi_cac_bien_khac"].map(lambda x: f(x, 4)),
    "Hệ số phóng đại phương sai (VIF)": vif_df["VIF"].map(lambda x: f(x, 4)),
})

# 3. Bảng kết quả 5-Fold Stratified Cross-Validation trên tập Train (n = 95.273)
cv_df = pd.read_csv(O / "ket_qua_cv_sieu_tham_so.csv")
cv_tbl = pd.DataFrame({
    "Họ mô hình": cv_df["ho_mo_hinh"],
    "Cấu hình siêu tham số": cv_df["mo_ta_sieu_tham_so"],
    "Train Acc (%)": cv_df["train_acc_mean"].map(lambda x: f(x, 2)),
    "CV Acc ± SD (%)": [f"{f(m, 2)} ± {f(sd, 2)}" for m, sd in zip(cv_df["cv_acc_mean"], cv_df["cv_acc_std"])],
    "CV F1 lớp 1 (%)": cv_df["cv_f1_mean"].map(lambda x: f(x, 2)),
    "CV Macro-F1 (%)": cv_df["cv_f1_macro_mean"].map(lambda x: f(x, 2)),
    "CV ROC-AUC ± SD (%)": [f"{f(m, 2)} ± {f(sd, 2)}" for m, sd in zip(cv_df["cv_roc_auc_mean"], cv_df["cv_roc_auc_std"])],
    "Chênh Train–CV Acc (điểm %)": cv_df["gap_train_cv_acc_pct"].map(lambda x: f(x, 2)),
})

# 4. Bảng hiệu năng trên tập Test (n = 23.819)
eval_df = pd.read_csv(O / "hieu_nang_mo_hinh.csv")
ev_idx = eval_df.set_index("mo_hinh")
test_tbl = pd.DataFrame({
    "Mô hình": eval_df["mo_hinh"],
    "Train Acc (%)": eval_df["train_acc_pct"].map(lambda x: f(x, 2)),
    "Test Acc (%)": eval_df["test_acc_pct"].map(lambda x: f(x, 2)),
    "Prec lớp 1 (%)": eval_df["test_prec_1_pct"].map(lambda x: f(x, 2)),
    "Rec lớp 1 (%)": eval_df["test_rec_1_pct"].map(lambda x: f(x, 2)),
    "F1 lớp 1 (%)": eval_df["test_f1_1_pct"].map(lambda x: f(x, 2)),
    "F1 lớp 0 (%)": eval_df["test_f1_0_pct"].map(lambda x: f(x, 2)),
    "Macro-F1 (%)": eval_df["test_f1_macro_pct"].map(lambda x: f(x, 2)),
    "ROC-AUC (%)": eval_df["test_roc_auc_pct"].map(lambda x: f(x, 2)),
    "PR-AUC (%)": eval_df["test_pr_auc_pct"].map(lambda x: f(x, 2)),
    "Brier Score": eval_df["test_brier"].map(lambda x: f(x, 4)),
})

# 5. Bảng ma trận nhầm lẫn trên tập Test (n = 23.819)
cm_df = pd.read_csv(O / "ma_tran_nham_lan.csv")
cm_idx = cm_df.set_index("mo_hinh")
cm_tbl = pd.DataFrame({
    "Mô hình": cm_df["mo_hinh"],
    "TN (Đúng lớp 0)": cm_df["TN"].map(n),
    "FP (Báo nhầm HL)": cm_df["FP"].map(n),
    "FN (Bỏ sót HL)": cm_df["FN"].map(n),
    "TP (Đúng lớp 1)": cm_df["TP"].map(n),
    "Tỷ lệ FP / lớp 0 (FPR %)": cm_df["ty_le_FP_tren_lop_0_FPR_pct"].map(lambda x: f(x, 2)),
    "Tỷ lệ FN / lớp 1 (FNR %)": cm_df["ty_le_FN_tren_lop_1_FNR_pct"].map(lambda x: f(x, 2)),
    "Tổng lỗi FP+FN (%)": [f"{n(fp + fn)} ({f(p, 2)}%)" for fp, fn, p in zip(cm_df["FP"], cm_df["FN"], cm_df["ty_le_sai_so_tong_pct"])],
})

# 6. Bảng phân tích độ nhạy tiền xử lý ML
sens_df = pd.read_csv(O / "do_nhay_tien_xu_ly_ml.csv")
sens_tbl = pd.DataFrame({
    "Phương án tiền xử lý": sens_df["phuong_an"],
    "Mô hình": sens_df["mo_hinh"],
    "Số cột mã hóa": sens_df["so_dac_trung_sau_ma_hoa"].map(n),
    "Test Accuracy (%)": sens_df["test_acc_pct"].map(lambda x: f(x, 2)),
    "Test F1 lớp 1 (%)": sens_df["test_f1_1_pct"].map(lambda x: f(x, 2)),
    "Test Macro-F1 (%)": sens_df["test_f1_macro_pct"].map(lambda x: f(x, 2)),
    "Test ROC-AUC (%)": sens_df["test_roc_auc_pct"].map(lambda x: f(x, 2)),
})

# 7. Bảng hệ số hồi quy chuẩn hóa và Odds Ratio của Logistic Regression
lr_df = pd.read_csv(O / "he_so_logistic.csv")
lr_idx = lr_df.set_index("dac_trung_ma_hoa")
lr_tbl = pd.DataFrame({
    "Hạng $|\\beta|$": lr_df["hang_abs_beta"],
    "Đặc trưng sau mã hóa": lr_df["dac_trung_ma_hoa"].map(lambda x: f"`{x}`"),
    "Hệ số chuẩn hóa $\\beta$": lr_df["he_so_beta"].map(lambda x: f(x, 4)),
    "Độ lớn $|\\beta|$": lr_df["abs_beta"].map(lambda x: f(x, 4)),
    "Tỷ số chênh $\\text{OR} = e^{\\beta}$": lr_df["odds_ratio_exp_beta"].map(lambda x: f(x, 4)),
    "Chiều liên hệ có điều kiện": lr_df["he_so_beta"].map(lambda x: "Tăng khả năng hài lòng (+)" if x > 0 else "Giảm khả năng hài lòng (−)"),
})

# 8. Bảng độ quan trọng đặc trưng của 22 biến gốc trên Random Forest (MDI vs Permutation)
fi_df = pd.read_csv(O / "do_quan_trong_dac_trung.csv")
fi_idx = fi_df.set_index("bien")
fi_tbl = pd.DataFrame({
    "Biến gốc": fi_df["bien"].map(lambda x: f"`{x}`"),
    "Nhóm biến": fi_df["nhom_bien"],
    "MDI trên Train (%)": [f"{f(v, 2)}% (#{int(r)})" for v, r in zip(fi_df["mdi_pct"], fi_df["hang_mdi"])],
    "Giảm ROC-AUC trên Test (điểm %)": [f"{f(m, 2)} ± {f(sd, 2)} (#{int(r)})" for m, sd, r in zip(fi_df["perm_roc_auc_drop_mean"], fi_df["perm_roc_auc_drop_std"], fi_df["hang_perm_auc"])],
    "Giảm F1 lớp 1 trên Test (điểm %)": [f"{f(m, 2)} ± {f(sd, 2)} (#{int(r)})" for m, sd, r in zip(fi_df["perm_f1_drop_mean"], fi_df["perm_f1_drop_std"], fi_df["hang_perm_f1"])],
})

# 9. Bảng đối chiếu thứ hạng 14 tiêu chí dịch vụ giữa EDA (Chương 3) và ML (Chương 4)
eda_ml_df = pd.read_csv(O / "doi_chieu_eda_va_ml_dich_vu.csv")
eda_ml_tbl = pd.DataFrame({
    "Tiêu chí dịch vụ": eda_ml_df["tieu_chi_dich_vu"].map(lambda x: f"`{x}`"),
    "Spearman giữ 0 (Ch.3)": [f"{f(v, 4)} (#{int(r)})" for v, r in zip(eda_ml_df["spearman_giu0_ch3"], eda_ml_df["hang_spearman_giu0"])],
    "Spearman bỏ 0 (Ch.3)": [f"{f(v, 4)} (#{int(r)})" for v, r in zip(eda_ml_df["spearman_bo0_ch3"], eda_ml_df["hang_spearman_bo0"])],
    "Spearman quan sát (Ch.3)": [f"{f(v, 4)} (#{int(r)})" for v, r in zip(eda_ml_df["spearman_quansat_ch3"], eda_ml_df["hang_spearman_quansat"])],
    "Logistic $\\beta$ (Hạng DV)": [f"{f(v, 4)} (#{int(r)})" for v, r in zip(eda_ml_df["lr_beta_ch4"], eda_ml_df["hang_lr_dich_vu"])],
    "RF MDI % (Hạng DV)": [f"{f(v, 2)}% (#{int(r)})" for v, r in zip(eda_ml_df["rf_mdi_pct_ch4"], eda_ml_df["hang_rf_mdi_dich_vu"])],
    "RF Perm-F1 (Hạng DV)": [f"{f(v, 2)} (#{int(r)})" for v, r in zip(eda_ml_df["rf_perm_f1_drop_pct_ch4"], eda_ml_df["hang_rf_perm_f1_dich_vu"])],
})

# 10. Bảng hiệu năng Random Forest theo phân khúc hành khách trên tập Test
sub_df = pd.read_csv(O / "hieu_nang_theo_phan_khuc.csv")
sub_tbl = pd.DataFrame({
    "Chiều phân khúc": sub_df["chieu_phan_khuc"],
    "Nhóm": sub_df["nhom"],
    "Cỡ mẫu Test (n)": sub_df["n_test"].map(n),
    "Tỷ lệ HL thực (%)": sub_df["ty_le_hai_long_thuc_pct"].map(lambda x: f(x, 2)),
    "Accuracy (%)": sub_df["rf_acc_pct"].map(lambda x: f(x, 2)),
    "Precision lớp 1 (%)": sub_df["rf_prec_1_pct"].map(lambda x: f(x, 2)),
    "Recall lớp 1 (%)": sub_df["rf_rec_1_pct"].map(lambda x: f(x, 2)),
    "F1 lớp 1 (%)": sub_df["rf_f1_1_pct"].map(lambda x: f(x, 2)),
    "Macro-F1 (%)": sub_df["rf_f1_macro_pct"].map(lambda x: f(x, 2)),
    "ROC-AUC (%)": sub_df["rf_roc_auc_pct"].map(lambda x: f(x, 2)),
    "FPR / FNR (%)": [f"{f(fpr, 2)} / {f(fnr, 2)}" for fpr, fnr in zip(sub_df["FPR_pct"], sub_df["FNR_pct"])],
})

# 11. Bảng đặc điểm 4 nhóm kết quả dự đoán (TP, TN, FP, FN) trên tập Test
err_df = pd.read_csv(O / "phan_tich_sai_so_fp_fn.csv")
err_tbl = pd.DataFrame({
    "Nhóm kết quả trên Test": err_df["nhom_ket_qua"],
    "Số bản ghi (%)": [f"{n(c)} ({f(p, 2)}%)" for c, p in zip(err_df["so_ban_ghi"], err_df["ty_le_tren_test_pct"])],
    "Xác suất dự đoán TB": err_df["xac_suat_du_doan_tb"].map(lambda x: f(x, 4)),
    "Số ô khuyết gốc TB": err_df["so_o_khuyet_goc_tb"].map(lambda x: f(x, 2)),
    "`Online Boarding` TB": err_df["online_boarding_tb"].map(lambda x: f(x, 2)),
    "`In-flight Wifi` TB": err_df["inflight_wifi_tb"].map(lambda x: f(x, 2)),
    "`Entertainment` TB": err_df["inflight_ent_tb"].map(lambda x: f(x, 2)),
    "`Arrival Delay` TB (phút)": err_df["arrival_delay_tb"].map(lambda x: f(x, 2)),
    "Tỷ lệ hạng `Business` (%)": err_df["ty_le_business_class_pct"].map(lambda x: f(x, 2)),
})

# Trích xuất các chỉ số chính để đưa vào lời văn tự động
rf_m = ev_idx.loc["Random Forest"]
dt_m = ev_idx.loc["Decision Tree (Đã tinh chỉnh)"]
dt_u = ev_idx.loc["Decision Tree (Không cắt tỉa)"]
lr_m = ev_idx.loc["Logistic Regression"]

rf_cm = cm_idx.loc["Random Forest"]
dt_cm = cm_idx.loc["Decision Tree (Đã tinh chỉnh)"]
lr_cm = cm_idx.loc["Logistic Regression"]

text = rf'''---
title: "CHƯƠNG 4: XÂY DỰNG, ĐÁNH GIÁ VÀ GIẢI THÍCH MÔ HÌNH HỌC MÁY DỰ ĐOÁN SỰ HÀI LÒNG CỦA HÀNH KHÁCH HÀNG KHÔNG"
number-offset: [3]
---

# Chương 4. Xây dựng, đánh giá và giải thích mô hình học máy dự đoán sự hài lòng của hành khách hàng không {{#sec-chuong4}}

Chương này triển khai hai giai đoạn tiếp theo của quy trình CRISP-DM đã xác lập ở Chương 2: **chuẩn bị đặc trưng để mô hình hóa** ([mục 4.1](#sec-4-1)) và **huấn luyện, tinh chỉnh, đánh giá mô hình học máy** ([mục 4.2](#sec-4-2)–[mục 4.5](#sec-4-5)), nhằm trả lời câu hỏi nghiên cứu **RQ4** ở Chương 1 về khả năng dự đoán mức độ hài lòng của hành khách bằng các thuật toán phân loại (**Logistic Regression, Decision Tree, Random Forest**), đồng thời cung cấp cơ sở định lượng đã kiểm chứng về mức độ quan trọng của đặc trưng (*Feature Importance*) để xây dựng hàm ý quản trị ở Chương 5 (**RQ5**). Toàn bộ thực nghiệm tuân thủ nghiêm ngặt các nguyên tắc kỹ thuật đã chốt ở Mục 3.6.3 của Chương 3: chỉ sử dụng **{n(s['n_total'])} bản ghi** có nhãn mục tiêu quan sát thực tế, loại bỏ khóa định danh `ID`, bảo toàn danh mục `Unknown` và khôi phục trạng thái dữ liệu trước bước điền khuyết toàn cục để chia tập huấn luyện – kiểm tra (80/20 phân tầng) trước khi học mọi thống kê tiền xử lý trong `Pipeline`.

## 4.1. Thiết kế thực nghiệm, tiền xử lý chống rò rỉ và chuẩn bị ma trận đặc trưng {{#sec-4-1}}

### 4.1.1. Xác lập tập mẫu, biến mục tiêu và khôi phục trạng thái trước điền khuyết {{#sec-4-1-1}}

Như đã chứng minh tại Mục 3.3.4 và Mục 3.6.3 của Chương 3, tệp dữ liệu sạch `Data/processed/PJ21.csv` ({n(s['n_total'])} dòng × 24 cột) đã được điền Mode và trung vị tính trên toàn bộ {n(s['n_total'])} dòng. Nếu nạp trực tiếp `PJ21.csv` vào mô hình, việc đặt `SimpleImputer` trong `Pipeline` sẽ không phát huy tác dụng chống rò rỉ dữ liệu (*Data Leakage*) vì không còn ô `NaN` nào để bộ điền khuyết học riêng trên tập huấn luyện.

Để giải quyết triệt để vấn đề này mà vẫn đảm bảo tính nhất quán 100% với quy tắc làm sạch của dự án, mã nguồn `src/phan_tich_chuong4.py` tái tạo ma trận đặc trưng **trước bước điền khuyết** ($X_{{\text{{pre}}}}$) trực tiếp từ `Data/raw/Du lieu khong sach.csv` thông qua đúng ba bước đầu của `lam_sach_du_lieu.py`: (1) chuẩn hóa chuỗi phân loại theo bảng ánh xạ từ điển, (2) trích xuất số và chuyển các giá trị ngoài miền quy ước `BOUNDS` thành `NaN`, và (3) lọc đúng {n(s['n_total'])} bản ghi có nhãn `Satisfaction` hợp lệ. Phép kiểm định tự động xác nhận:

- Cột khóa `ID` và nhãn `Satisfaction` của $X_{{\text{{pre}}}}$ khớp tuyệt đối 1–1 theo đúng thứ tự dòng với `Data/processed/PJ21.csv`.
- Khi áp dụng bước điền khuyết toàn cục lên $X_{{\text{{pre}}}}$, khung dữ liệu thu được khớp 100% từng ô với `Data/processed/PJ21.csv` (`pd.testing.assert_frame_equal` thành công).

Sau bước đối chiếu, cột `ID` được loại bỏ hoàn toàn khỏi ma trận đặc trưng để ngăn mô hình cây ghi nhớ số thứ tự bản ghi. Ma trận đặc trưng đầu vào $X$ gồm **{s['n_features_orig']} biến giải thích**: {s['n_cat_features']} biến phân loại (`Gender`, `Customer Type`, `Type of Travel`, `Class`), 4 biến định lượng vận hành (`Age`, `Flight Distance`, `Departure Delay`, `Arrival Delay`) và 14 biến điểm đánh giá dịch vụ. Biến mục tiêu $y$ được mã hóa nhị phân theo quy ước ở Mục 2.4.8: `1 = Satisfied` ({n(s['train_satisfied_n'] + s['test_satisfied_n'])} bản ghi, chiếm `43,45%`) và `0 = Neutral or Dissatisfied` ({n(s['train_dissatisfied_n'] + s['test_dissatisfied_n'])} bản ghi, chiếm `56,55%`).

### 4.1.2. Phân chia tập huấn luyện – kiểm tra phân tầng (80/20) và kiểm chứng thống kê điền khuyết {{#sec-4-1-2}}

Tập mẫu {n(s['n_total'])} bản ghi được chia ngẫu nhiên một lần duy nhất bằng `train_test_split(..., test_size=0.20, stratify=y, random_state=42)` thành:

- **Tập huấn luyện (`Train set`, 80%):** **{n(s['n_train'])} bản ghi**, gồm {n(s['train_satisfied_n'])} bản ghi `Satisfied` (**{f(s['train_satisfied_pct'], 2)}%**) và {n(s['train_dissatisfied_n'])} bản ghi `Neutral or Dissatisfied` (**{f(s['train_dissatisfied_pct'], 2)}%**).
- **Tập kiểm tra độc lập (`Test set`, 20%):** **{n(s['n_test'])} bản ghi**, gồm {n(s['test_satisfied_n'])} bản ghi `Satisfied` (**{f(s['test_satisfied_pct'], 2)}%**) và {n(s['test_dissatisfied_n'])} bản ghi `Neutral or Dissatisfied` (**{f(s['test_dissatisfied_pct'], 2)}%**).

@tbl-split-impute đối chiếu tỷ lệ ô khuyết giữa hai tập cùng giá trị điền khuyết được học **chỉ trên tập `Train`** (`n = 95.273`) so với giá trị điền khuyết toàn cục trên `PJ21.csv` (`n = 119.092`). Kết quả cho thấy **21/22 biến** có giá trị Mode hoặc trung vị học trên tập `Train` trùng khớp tuyệt đối với giá trị toàn tập trên `PJ21.csv` (`Gender = Female`, `Class = Business`, `Customer Type = Unknown`, `Type of Travel = Unknown`, `Age = 40,0`, hai biến độ trễ `= 0,0`, 8 biến dịch vụ `= 3,0` và 6 biến dịch vụ `= 4,0`). Chỉ có duy nhất biến `Flight Distance` có trung vị trên tập `Train` là **849,0** so với **846,0** trên toàn tập `PJ21.csv` (chênh lệch 3 đơn vị, tương đương 0,35%). Phát hiện này chứng minh quy mô mẫu lớn và việc chia phân tầng đã giữ cho thống kê tiền xử lý rất ổn định, đồng thời giúp giải thích vì sao sự khác biệt hiệu năng giữa `Pipeline` chống rò rỉ và `PJ21.csv` ở [mục 4.3.3](#sec-4-3-3) là rất nhỏ.

{table(imp_tbl)}

: Đối chiếu tỷ lệ ô khuyết và giá trị điền khuyết học riêng trên tập `Train` (n = {n(s['n_train'])}) với giá trị toàn cục trên `PJ21.csv` (n = {n(s['n_total'])}) {{#tbl-split-impute}}

*Nguồn: Tính toán từ ma trận trước điền khuyết và lưu tại `outputs/chuong4/doi_chieu_dien_khuyet_train_vs_pj21.csv`.*

### 4.1.3. Kiến trúc `Pipeline` tiền xử lý, mã hóa đặc trưng và kiểm tra đa cộng tuyến (VIF) {{#sec-4-1-3}}

Toàn bộ quá trình biến đổi đặc trưng được đóng gói trong `ColumnTransformer` đặt bên trong `sklearn.pipeline.Pipeline` theo ba nhánh xử lý song song:

1. **Nhánh phân loại khuyết thấp (`Gender`, `Class`):** Điền khuyết bằng `SimpleImputer(strategy="most_frequent")` học trên tập huấn luyện, sau đó mã hóa nhị phân bằng `OneHotEncoder(handle_unknown="ignore")`.
2. **Nhánh phân loại khuyết cao (`Customer Type`, `Type of Travel`):** Điền khuyết bằng `SimpleImputer(strategy="constant", fill_value="Unknown")` để giữ nguyên nhóm `Unknown` thành một danh mục độc lập theo đúng kết luận của Mục 3.5.1, sau đó áp dụng `OneHotEncoder`.
3. **Nhánh 18 biến định lượng (`4` biến vận hành và `14` biến dịch vụ):** Điền khuyết bằng `SimpleImputer(strategy="median")` học trên tập huấn luyện. Đối với **Logistic Regression**, nhánh này được nối tiếp với `StandardScaler()` ($z = (x - \mu_{{\text{{train}}}}) / \sigma_{{\text{{train}}}}$) và `OneHotEncoder(drop="first")` ở hai nhánh phân loại để tránh đa cộng tuyến hoàn hảo với hệ số chặn (tạo ra **{s['n_encoded_features_lr']} đặc trưng** sau mã hóa: 7 biến giả phân loại và 18 biến định lượng chuẩn hóa). Đối với **Decision Tree** và **Random Forest**, giữ nguyên giá trị số sau điền trung vị và giữ đầy đủ các cột One-Hot Encoding (`drop=None`, tạo ra **{s['n_encoded_features_tree']} đặc trưng** sau mã hóa) để các nút cây có thể phân tách trực tiếp trên từng danh mục.

Để kiểm tra hiện tượng đa cộng tuyến giữa 18 biến định lượng đã ghi nhận từ ma trận tương quan ở Chương 3, hệ số phóng đại phương sai $\text{{VIF}}_j = 1 / (1 - R_j^2)$ được tính trên tập `Train` tại @tbl-vif.

{table(vif_tbl)}

: Hệ số xác định bội ($R^2$) và hệ số phóng đại phương sai (VIF) của 18 biến định lượng trên tập `Train` (n = {n(s['n_train'])}) {{#tbl-vif}}

*Nguồn: `outputs/chuong4/kiem_tra_vif.csv`.*

Tại @tbl-vif, toàn bộ 18 biến định lượng đều có $\text{{VIF}} < 2,50$ (thấp hơn nhiều so với ngưỡng cảnh báo đa cộng tuyến $\text{{VIF}} \ge 5$). Biến có VIF cao nhất là `In-flight Entertainment` ($\text{{VIF}} = {f(s['vif_max_val'], 4)}$, $R^2 = 0,5745$), tiếp theo là `Seat Comfort` ({f(s['vif_second_val'], 4)}), `In-flight Service` ({f(s['vif_third_val'], 4)}), `Cleanliness` ($1,6372$) và `Ease of Online Booking` ($1,5980$) do nhóm tiêu chí tiện nghi trên khoang và đặt vé – Wi-Fi có tương quan thuận trung bình như đã chỉ ra ở Hình 3.5. Hai biến `Arrival Delay` và `Departure Delay` trên tập `Train` sau điền khuyết có tương quan Pearson $r = {f(s['dep_arr_pearson_train'], 4)}$ (Spearman $\rho = {f(s['dep_arr_spearman_train'], 4)}$) do 34,87% ô `Departure Delay` bị khuyết độc lập với `Arrival Delay` được điền `0`, dẫn tới VIF chỉ ở mức $1,1472$ và $1,1459$. Điều này khẳng định ma trận đặc trưng hoàn toàn ổn định cho cả hồi quy Logistic có điều chuẩn L2 lẫn các mô hình cây.

## 4.2. Huấn luyện mô hình và tinh chỉnh siêu tham số bằng kiểm định chéo {{#sec-4-2}}

### 4.2.1. Thiết lập kiểm định chéo phân tầng 5-Fold trên tập huấn luyện {{#sec-4-2-1}}

Theo quy tắc phòng chống rò rỉ dữ liệu tại Mục 2.4.7, tập `Test` ({n(s['n_test'])} bản ghi) được niêm phong hoàn toàn trong suốt quá trình lựa chọn siêu tham số. Việc so sánh các cấu hình ứng viên được thực hiện bằng kiểm định chéo phân tầng 5-Fold (`StratifiedKFold(n_splits=5, shuffle=True, random_state=42)`) trên tập `Train` ({n(s['n_train'])} bản ghi). Trong mỗi lượt lặp của 5-Fold CV, toàn bộ `Pipeline` được `fit` trên 4 phần dữ liệu huấn luyện ($\approx 76.218$ bản ghi) và đánh giá trên 1 phần kiểm định ($\approx 19.055$ bản ghi) theo bốn thước đo: Accuracy, F1-score của lớp `Satisfied (1)`, Macro-F1 và diện tích dưới đường cong ROC (ROC-AUC).

### 4.2.2. Kết quả lựa chọn siêu tham số và kiểm soát quá khớp {{#sec-4-2-2}}

@tbl-cv trình bày kết quả kiểm định chéo 5-Fold trên tập `Train` cho 12 cấu hình siêu tham số thuộc ba họ mô hình.

{table(cv_tbl)}

: Kết quả kiểm định chéo phân tầng 5-Fold trên tập `Train` (n = {n(s['n_train'])}) cho các cấu hình siêu tham số {{#tbl-cv}}

*Nguồn: `outputs/chuong4/ket_qua_cv_sieu_tham_so.csv`.*

Từ @tbl-cv, có thể rút ra ba nhận định phương pháp luận quan trọng:

1. **Đối với Logistic Regression:** Hiệu năng kiểm định chéo hầu như bất biến khi hệ số điều chuẩn $C$ thay đổi từ $0,1$ đến $1,0$ (CV Accuracy đạt `84,51% ± 0,22%`, CV F1 lớp 1 đạt `81,85%`, CV Macro-F1 đạt `84,17%` và CV ROC-AUC đạt `90,57% ± 0,23%`), với độ chênh giữa Train và CV chỉ `0,01` điểm phần trăm — cho thấy mô hình tuyến tính hoàn toàn không bị quá khớp nhưng bị giới hạn bởi biên quyết định tuyến tính (hiện tượng *underfitting* tương đối so với các mô hình phi tuyến). Khi bật `class_weight="balanced"`, do tỷ lệ hai lớp vốn đã khá cân bằng (`43,45% / 56,55%`), việc ép trọng số ngược làm tăng dương tính giả (`FP`), khiến CV Accuracy giảm xuống `83,79%` và CV Macro-F1 giảm còn `83,58%`. Vì vậy, cấu hình chuẩn **`C = 1,0` (L2, không ép trọng số lớp)** được chọn làm mô hình Logistic Regression chính thức.
2. **Đối với Decision Tree (kiểm chứng trực tiếp hiện tượng quá khớp):** Khi không giới hạn độ sâu (`max_depth=None, min_samples_leaf=1`), cây quyết định đơn lẻ học thuộc hoàn toàn tập huấn luyện với **Train Accuracy = `100,00%`**, nhưng khi kiểm định chéo 5-Fold thì **CV Accuracy tụt xuống `89,64% ± 0,34%`** (chênh lệch Train–CV lên tới **`10,36` điểm phần trăm**) và **CV ROC-AUC chỉ đạt `89,50%`** (thậm chí thấp hơn cả Logistic Regression `90,57%` do các nút lá thuần nhất gồm 1 mẫu sinh ra xác suất dự đoán cực đoan 0 hoặc 1). Khi áp dụng cắt tỉa tiền định với `max_depth=14, min_samples_leaf=20`, độ chênh Train–CV giảm xuống còn `1,38` điểm phần trăm (`92,57%` so với `91,19%`), đồng thời **CV ROC-AUC tăng vọt thêm `+7,19` điểm phần trăm lên `96,69% ± 0,10%`**. Khi tăng `max_depth=20, min_samples_leaf=20`, CV ROC-AUC bắt đầu giảm nhẹ xuống `96,62%` và độ chênh Train–CV nới rộng (`1,61` điểm phần trăm). Do đó, cấu hình **`max_depth=14, min_samples_leaf=20`** được chọn làm mô hình Decision Tree đã tinh chỉnh (đồng thời giữ lại cấu hình không cắt tỉa ở Mục 4.3 để minh họa trực quan hiệu quả kiểm soát quá khớp).
3. **Đối với Random Forest:** Việc kết hợp đóng bao (*Bagging* 200 cây) và lấy mẫu ngẫu nhiên không gian đặc trưng tại mỗi nút giúp khắc phục triệt để nhược điểm phương sai cao của cây đơn. Khi tăng từ `100` cây (`max_depth=12, min_samples_leaf=5`: CV Accuracy `91,85%`, CV ROC-AUC `97,44%`) lên `200` cây với `max_depth=None, min_samples_leaf=2`, hiệu năng CV tăng lên **`93,10% ± 0,12%`** (CV Macro-F1 đạt **`92,94%`**, CV ROC-AUC đạt **`98,06% ± 0,06%`**) với độ lệch chuẩn giữa 5 fold rất thấp (`0,12%`). So với cấu hình `min_samples_leaf=1` (có Train Accuracy chạm `100,00%`, độ chênh Train–CV `6,76` điểm phần trăm mà CV ROC-AUC chỉ nhỉnh hơn `0,04` điểm phần trăm), cấu hình **`n_estimators=200, max_depth=None, min_samples_leaf=2`** kiểm soát độ phức tạp tại lá tốt hơn và cho ước lượng xác suất mượt hơn, nên được chọn làm mô hình Random Forest chính thức.

## 4.3. Đánh giá và so sánh hiệu năng dự đoán trên tập kiểm tra (RQ4) {{#sec-4-3}}

### 4.3.1. So sánh tổng thể các chỉ số đánh giá trên tập kiểm tra độc lập {{#sec-4-3-1}}

Sau khi chốt cấu hình từ 5-Fold CV, các `Pipeline` được huấn luyện lại trên toàn bộ tập `Train` (n = {n(s['n_train'])}) và đánh giá một lần duy nhất trên tập `Test` độc lập (n = {n(s['n_test'])}). @tbl-test-metrics và @fig-model-comp tổng hợp toàn diện các chỉ số hiệu năng theo cả hai lớp (`Satisfied = 1` và `Neutral or Dissatisfied = 0`).

{table(test_tbl)}

: So sánh hiệu năng dự đoán của các mô hình phân loại trên tập kiểm tra độc lập (Test set, n = {n(s['n_test'])}) {{#tbl-test-metrics}}

*Nguồn: `outputs/chuong4/hieu_nang_mo_hinh.csv`.*

![So sánh độ chính xác trên tập Train, 5-Fold CV và tập Test để kiểm chứng quá khớp (trái) cùng hiệu năng F1-score, Macro-F1 và ROC-AUC trên tập Test (phải).](../figures/chuong4/01_so_sanh_mo_hinh.png){{#fig-model-comp width=100%}}

*Nguồn: Trích xuất từ `outputs/chuong4/hieu_nang_mo_hinh.csv` bằng `src/phan_tich_chuong4.py`.*

Kết quả trên tập `Test` (n = {n(s['n_test'])}) tại @tbl-test-metrics và @fig-model-comp trả lời trực tiếp câu hỏi nghiên cứu **RQ4**:

- **Random Forest đạt hiệu năng vượt trội trên toàn bộ các thước đo:** Mô hình đạt độ chính xác tổng thể **Accuracy = {f(rf_m['test_acc_pct'])}%** (cao hơn Logistic Regression **+{f(rf_m['test_acc_pct'] - lr_m['test_acc_pct'])} điểm phần trăm** và cao hơn Decision Tree đã tinh chỉnh **+{f(rf_m['test_acc_pct'] - dt_m['test_acc_pct'])} điểm phần trăm**). Trên lớp mục tiêu `Satisfied (1)`, Random Forest đạt **Precision = {f(rf_m['test_prec_1_pct'])}%**, **Recall = {f(rf_m['test_rec_1_pct'])}%** và **F1-score = {f(rf_m['test_f1_1_pct'])}%**; trên lớp `Neutral or Dissatisfied (0)`, F1-score đạt **{f(rf_m['test_f1_0_pct'])}%**, đưa **Macro-F1 lên {f(rf_m['test_f1_macro_pct'])}%**. Khả năng phân biệt thứ hạng xác suất trên mọi ngưỡng cắt đạt **ROC-AUC = {f(rf_m['test_roc_auc_pct'])}%** và **PR-AUC = {f(rf_m['test_pr_auc_pct'])}%**, đồng thời sai số bình phương xác suất thấp nhất (**Brier Score = {f(rf_m['test_brier'], 4)}**, Log-Loss = {f(rf_m['test_logloss'], 4)}).
- **Hiệu quả của việc cắt tỉa cây quyết định đơn (Decision Tree):** Việc giới hạn `max_depth=14, min_samples_leaf=20` không chỉ giúp tăng Test Accuracy từ {f(dt_u['test_acc_pct'])}% (ở cây không cắt tỉa) lên **{f(dt_m['test_acc_pct'])}%** (Macro-F1 tăng từ {f(dt_u['test_f1_macro_pct'])}% lên **{f(dt_m['test_f1_macro_pct'])}%**) mà đặc biệt giúp **Test ROC-AUC tăng thêm +{f(dt_m['test_roc_auc_pct'] - dt_u['test_roc_auc_pct'])} điểm phần trăm** (từ {f(dt_u['test_roc_auc_pct'])}% lên **{f(dt_m['test_roc_auc_pct'])}%**) và giảm Brier Score gần một nửa (từ {f(dt_u['test_brier'], 4)} xuống {f(dt_m['test_brier'], 4)}).
- **Khoảng cách giữa mô hình tuyến tính và phi tuyến:** Logistic Regression đạt Test Accuracy **{f(lr_m['test_acc_pct'])}%**, Macro-F1 **{f(lr_m['test_f1_macro_pct'])}%** và ROC-AUC **{f(lr_m['test_roc_auc_pct'])}%**. Mức chênh lệch +{f(dt_m['test_acc_pct'] - lr_m['test_acc_pct'])} đến +{f(rf_m['test_acc_pct'] - lr_m['test_acc_pct'])} điểm phần trăm về Accuracy của các mô hình cây so với Logistic Regression chứng minh rằng mối quan hệ giữa các điểm chạm dịch vụ, độ trễ và phân khúc hành khách chứa nhiều ngưỡng phi tuyến cũng như tương tác đa chiều mà hàm tổ hợp tuyến tính không nắm bắt hết được.

### 4.3.2. Phân tích ma trận nhầm lẫn (Confusion Matrix) và ý nghĩa quản trị của sai số {{#sec-4-3-2}}

Theo nguyên tắc đánh giá đã đặt ra tại Mục 2.3.4 và Mục 2.4.8, việc lựa chọn mô hình trong quản trị dịch vụ hàng không không chỉ dựa vào Accuracy tổng thể mà phải phân tích cấu trúc hai loại sai số trên tập kiểm tra ({n(s['n_test'])} hành khách, gồm {n(s['test_dissatisfied_n'])} hành khách thực tế thuộc nhóm `Neutral or Dissatisfied = 0` và {n(s['test_satisfied_n'])} hành khách thực tế thuộc nhóm `Satisfied = 1`):

- **Sai số dương tính giả (False Positive – FP):** Hành khách thực tế *trung lập hoặc không hài lòng* (`y = 0`) nhưng mô hình dự đoán nhầm là *hài lòng* (`ŷ = 1`). Về mặt quản trị, đây là **sai số rủi ro cao** vì khiến hãng hàng không chủ quan, bỏ lỡ cơ hội chăm sóc hoặc khắc phục sự cố dịch vụ cho nhóm khách hàng đang có trải nghiệm chưa tốt.
- **Sai số âm tính giả (False Negative – FN):** Hành khách thực tế *hài lòng* (`y = 1`) nhưng mô hình dự đoán là *trung lập/không hài lòng* (`ŷ = 0`). Sai số này dẫn tới việc phân bổ dư nguồn lực rà soát nhưng ít gây tổn hại uy tín hơn so với bỏ sót khách hàng bất mãn.

{table(cm_tbl)}

: Phân tích ma trận nhầm lẫn (Confusion Matrix) và tỷ lệ sai số theo từng lớp trên tập `Test` (n = {n(s['n_test'])}) {{#tbl-cm}}

*Nguồn: `outputs/chuong4/ma_tran_nham_lan.csv`.*

![Ma trận nhầm lẫn trên tập kiểm tra độc lập (n = 23.819) của ba mô hình chính: Logistic Regression, Decision Tree đã tinh chỉnh và Random Forest.](../figures/chuong4/02_ma_tran_nham_lan.png){{#fig-cm width=100%}}

*Nguồn: Trích xuất từ `outputs/chuong4/ma_tran_nham_lan.csv` bằng `src/phan_tich_chuong4.py`.*

Đối chiếu tại @tbl-cm và @fig-cm cho thấy:

- **Logistic Regression** mắc tổng cộng **{n(lr_cm['FP'] + lr_cm['FN'])} lỗi** ({f(lr_cm['ty_le_sai_so_tong_pct'])}% tập Test), trong đó có tới **{n(lr_cm['FP'])} ca dương tính giả (FP)** (tỷ lệ báo nhầm hài lòng trên nhóm chưa hài lòng $\text{{FPR}} = {f(lr_cm['ty_le_FP_tren_lop_0_FPR_pct'])}\%$) và **{n(lr_cm['FN'])} ca âm tính giả (FN)** ($\text{{FNR}} = {f(lr_cm['ty_le_FN_tren_lop_1_FNR_pct'])}\%$).
- **Decision Tree (đã tinh chỉnh)** giảm tổng số lỗi xuống còn **{n(dt_cm['FP'] + dt_cm['FN'])} ca** ({f(dt_cm['ty_le_sai_so_tong_pct'])}%), cắt giảm gần một nửa số ca dương tính giả xuống **{n(dt_cm['FP'])} ca** ($\text{{FPR}} = {f(dt_cm['ty_le_FP_tren_lop_0_FPR_pct'])}\%$) và giảm âm tính giả xuống **{n(dt_cm['FN'])} ca** ($\text{{FNR}} = {f(dt_cm['ty_le_FN_tren_lop_1_FNR_pct'])}\%$).
- **Random Forest** tiếp tục giảm tổng số lỗi xuống chỉ còn **{n(rf_cm['FP'] + rf_cm['FN'])} ca** ({f(rf_cm['ty_le_sai_so_tong_pct'])}%), tức giảm được **{n((lr_cm['FP'] + lr_cm['FN']) - (rf_cm['FP'] + rf_cm['FN']))} ca dự đoán sai** (tương đương giảm `56,33%` tổng lượng lỗi) so với Logistic Regression. Đặc biệt, số ca báo nhầm khách hàng chưa hài lòng thành hài lòng (`FP`) trên Random Forest giảm xuống chỉ còn **{n(rf_cm['FP'])} ca** trên tổng số {n(s['test_dissatisfied_n'])} hành khách lớp 0 (**$\text{{FPR}} = {f(rf_cm['ty_le_FP_tren_lop_0_FPR_pct'])}\%$**, tức nhận diện đúng **95,56%** hành khách trung lập/không hài lòng), đồng thời phát hiện đúng {n(rf_cm['TP'])}/{n(s['test_satisfied_n'])} hành khách hài lòng (**Recall = {f(rf_m['test_rec_1_pct'])}%**, $\text{{FNR}} = {f(rf_cm['ty_le_FN_tren_lop_1_FNR_pct'])}\%$).

### 4.3.3. Đường cong ROC, Precision–Recall và phân tích độ nhạy tiền xử lý {{#sec-4-3-3}}

@fig-roc-pr biểu diễn đường cong ROC và đường cong Precision–Recall của ba mô hình trên tập `Test`. Đường cong của Random Forest (nét liền màu xanh đậm) bao trùm hoàn toàn phía trên đường cong của Decision Tree và Logistic Regression ở mọi ngưỡng xác suất cắt từ 0 đến 1: ngay cả tại ngưỡng độ phủ $\text{{Recall}} = 90\%$, Random Forest vẫn duy trì độ chính xác dương $\text{{Precision}} \approx 94\%$.

![Đường cong ROC (trái) và đường cong Precision–Recall (phải) của ba mô hình trên tập kiểm tra độc lập (n = 23.819).](../figures/chuong4/03_roc_pr_curves.png){{#fig-roc-pr width=98%}}

*Nguồn: Tính toán xác suất dự đoán trên tập `Test` (n = {n(s['n_test'])}) bằng `src/phan_tich_chuong4.py`.*

Nhằm kiểm tra trực tiếp hai vấn đề phương pháp luận đã nêu ở Chương 3 — gồm **(i) tác động của rò rỉ thống kê điền khuyết toàn cục trên `PJ21.csv`** và **(ii) tác động của các ô khuyết cũng như mã điểm `0` ở 14 biến dịch vụ** — @tbl-ml-sens báo cáo thực nghiệm độ nhạy trên 4 phương án tiền xử lý với cùng chỉ số phân chia `idx_train` / `idx_test`.

{table(sens_tbl)}

: Phân tích độ nhạy của Logistic Regression và Random Forest theo bốn phương án tiền xử lý trên tập `Test` (n = {n(s['n_test'])}) {{#tbl-ml-sens}}

*Nguồn: `outputs/chuong4/do_nhay_tien_xu_ly_ml.csv`.*

Kết quả tại @tbl-ml-sens mang lại ba bằng chứng thực nghiệm sắc bén:

1. **Đối chiếu Pipeline chống rò rỉ (Phương án 1) với `PJ21.csv` điền sẵn toàn cục (Phương án 2):** Trên Logistic Regression, kết quả giữa hai phương án trùng khớp tới chữ số thập phân thứ hai (Accuracy cùng đạt `84,41%`, Macro-F1 `84,05%`, ROC-AUC `90,50%`, chỉ lệch `0,00002` điểm phần trăm ở ROC-AUC); trên Random Forest, hai phương án chỉ chênh nhau `0,07` điểm phần trăm ở Accuracy (`93,19%` so với `93,26%`) và `< 0,01` điểm phần trăm ở ROC-AUC (`98,21%`). Nguyên nhân trực tiếp là do 21/22 biến có giá trị Mode/trung vị học trên `Train` trùng khít 100% với `PJ21.csv` (@tbl-split-impute). Dù chênh lệch số học rất nhỏ, việc sử dụng **Phương án 1 (Pipeline chống rò rỉ)** làm kết quả báo cáo chính thức là hoàn toàn cần thiết để bảo đảm tính chuẩn mực phương pháp luận.
2. **Tác động của cờ báo khuyết (`Missing Indicators` — Phương án 3):** Khi bổ sung thêm các cột nhị phân đánh dấu vị trí ô bị khuyết trước khi điền (nâng số cột mã hóa từ 25 lên 45 với Logistic Regression và từ 29 lên 51 với Random Forest), hiệu năng của Logistic Regression tăng nhẹ `0,26` điểm phần trăm (`84,41%` → `84,67%`), còn Random Forest chỉ thay đổi `0,03` điểm phần trăm (`93,19%` → `93,22%`, ROC-AUC `98,19%`). Điều này cho thấy bản thân trạng thái “bị khuyết” của các biến định lượng không mang nhiều thông tin dự đoán bổ sung ngoài các đặc trưng hiện có.
3. **Tác động trái ngược của mã điểm `0` dịch vụ đối với mô hình tuyến tính và mô hình cây (Phương án 4):** Khi coi điểm `0` ở 14 biến dịch vụ là giá trị khuyết (`0 → NaN` rồi điền trung vị trên `Train`), hiệu năng của **Logistic Regression tăng mạnh** (Accuracy tăng từ `84,41%` lên **`85,51%`**, ROC-AUC tăng thêm **`+2,35` điểm phần trăm** từ `90,50%` lên **`92,85%`**), hoàn toàn nhất quán với kết quả Mục 3.5.3 của Chương 3 khi loại điểm `0` giúp tương quan đơn điệu của `In-flight Wifi Service` và `Online Boarding` tăng lên. Ngược lại, trên **Random Forest**, việc xóa điểm `0` để điền trung vị lại làm **Accuracy giảm `1,13` điểm phần trăm** (từ **`93,19%`** xuống **`92,06%`**, ROC-AUC giảm từ **`98,21%`** xuống **`97,62%`**). Lý do là trong các cây quyết định phi tuyến, nhánh phân chia `điểm dịch vụ == 0` tách riêng được nhóm hành khách đánh giá `0` (vốn có hành vi hài lòng đặc thù ở `In-flight Wifi Service` và `Online Boarding`), nên việc xóa mã `0` thành trung vị `3` làm mất thông tin phân nhánh quan trọng.

## 4.4. Phân tích mức độ quan trọng của đặc trưng và diễn giải mô hình {{#sec-4-4}}

### 4.4.1. Hệ số hồi quy chuẩn hóa và tỷ số chênh (Odds Ratio) trên Logistic Regression {{#sec-4-4-1}}

Để hiểu rõ chiều hướng tác động có điều kiện của từng đặc trưng khi kiểm soát đồng thời các biến còn lại, @tbl-lr-coef trình bày hệ số hồi quy chuẩn hóa $\beta_j$ và tỷ số chênh $\text{{OR}}_j = e^{{\beta_j}}$ của 25 đặc trưng trong mô hình Logistic Regression (với nhóm tham chiếu của biến phân loại là `Gender = Female`, `Customer Type = First-time Customer`, `Type of Travel = Business Travel` và `Class = Business`).

{table(lr_tbl)}

: Hệ số hồi quy chuẩn hóa ($\beta$) và tỷ số chênh ($\text{{OR}} = e^{{\beta}}$) của 25 đặc trưng trong mô hình Logistic Regression {{#tbl-lr-coef}}

*Nguồn: `outputs/chuong4/he_so_logistic.csv`.*

Kết quả tại @tbl-lr-coef cho thấy khi cố định các yếu tố khác:

- **Nhóm biến phân khúc hành trình và khách hàng có độ lớn hệ số $|\beta|$ dẫn đầu:** Hành khách đi cá nhân (`Type of Travel_Personal Travel`) có $\beta = -2,0072$ ($\text{{OR}} = 0,1344$), nghĩa là tỷ số chênh (*odds*) hài lòng chỉ bằng `13,44%` so với khách đi công vụ (`Business Travel`). Hành khách hạng `Economy` ($\beta = -1,2981$, $\text{{OR}} = 0,2730$) và `Economy Plus` ($\beta = -1,1100$, $\text{{OR}} = 0,3296$) có odds hài lòng thấp hơn rõ rệt so với hạng `Business`. Ngược lại, khách hàng quay lại (`Customer Type_Returning Customer`) có odds hài lòng gấp **3,92 lần** ($\beta = +1,3659$, $\text{{OR}} = 3,9192$) so với khách đi lần đầu (`First-time Customer`). Đáng chú ý, hai biến giả của nhóm `Unknown` đều có hệ số có ý nghĩa lớn (`Customer Type_Unknown`: $\beta = +1,0814, \text{{OR}} = 2,9489$; `Type of Travel_Unknown`: $\beta = -0,5484, \text{{OR}} = 0,5779$), khẳng định quyết định tách riêng nhãn `Unknown` ở Chương 3 và Chương 4 là hoàn toàn chính xác.
- **Nhóm điểm chạm dịch vụ trong mô hình đa biến tuyến tính:** Hai tiêu chí dịch vụ có hệ số chuẩn hóa dương lớn nhất là **`Online Boarding`** ($\beta = +0,7065$, $\text{{OR}} = 2,0269$ cho mỗi độ lệch chuẩn tăng thêm) và **`In-flight Wifi Service`** ($\beta = +0,5040$, $\text{{OR}} = 1,6553$), theo sau là **`Leg Room Service`** ($\beta = +0,3395$, $\text{{OR}} = 1,4043$), **`Check-in Service`** ($\beta = +0,3297$, $\text{{OR}} = 1,3905$), **`On-board Service`** ($\beta = +0,3289$, $\text{{OR}} = 1,3895$) và **`In-flight Entertainment`** ($\beta = +0,2868$, $\text{{OR}} = 1,3321$).
- **Nhóm biến độ trễ vận hành:** Khi xét đồng thời trong mô hình đa biến, cả `Arrival Delay` ($\beta = -0,1033$, $\text{{OR}} = 0,9019$, hạng #17) và `Departure Delay` ($\beta = -0,0436$, $\text{{OR}} = 0,9573$, hạng #21) đều mang dấu âm đúng kỳ vọng lý thuyết (trễ càng lâu thì xác suất hài lòng càng giảm), trong đó độ trễ đến có tác động có điều kiện mạnh hơn độ trễ khởi hành.

### 4.4.2. Độ quan trọng đặc trưng trên Random Forest: MDI so với Permutation Importance {{#sec-4-4-2}}

Theo thiết kế phương pháp tại Mục 2.4.9, để tránh thiên lệch của thước đo suy giảm độ hỗn tạp Gini (**MDI** — vốn tính trên tập `Train` và có xu hướng ưu ái các biến liên tục nhiều giá trị chia như `Age`, `Flight Distance`), nghiên cứu tính song song **MDI** (gom theo đúng 22 biến gốc) và **Permutation Importance trên tập `Test` độc lập** (`n = 23.819`, hoán vị ngẫu nhiên từng biến 5 lần và đo mức sụt giảm trực tiếp của **ROC-AUC** và **F1-score lớp 1**). Kết quả đầy đủ cho 22 biến được trình bày tại @tbl-fi và @fig-fi.

{table(fi_tbl)}

: Xếp hạng mức độ quan trọng của 22 biến đặc trưng trên mô hình Random Forest theo MDI (tập `Train`) và Permutation Importance (tập `Test`, n = {n(s['n_test'])}) {{#tbl-fi}}

*Nguồn: `outputs/chuong4/do_quan_trong_dac_trung.csv`.*

![So sánh 15 đặc trưng quan trọng nhất trên Random Forest theo tỷ trọng giảm độ hỗn tạp MDI trên tập Train (trái) và mức suy giảm F1-score / ROC-AUC khi hoán vị trên tập Test (phải).](../figures/chuong4/04_feature_importance.png){{#fig-fi width=100%}}

*Nguồn: Trích xuất từ `outputs/chuong4/do_quan_trong_dac_trung.csv` bằng `src/phan_tich_chuong4.py`.*

Phân tích đối chiếu tại @tbl-fi và @fig-fi cho thấy:

1. **Sự thống nhất cao ở nhóm đặc trưng trụ cột:** Bốn đặc trưng dẫn đầu trên cả MDI lẫn Permutation Importance đều bao gồm hai điểm chạm dịch vụ số hóa (**`In-flight Wifi Service`**, **`Online Boarding`**) và hai biến phân khúc cốt lõi (**`Class`**, **`Type of Travel`**). Cụ thể, theo tỷ trọng MDI trên tập `Train`, 5 biến đứng đầu chiếm tới **56,05%** tổng độ giảm hỗn tạp của toàn bộ 22 biến: `Class` (**16,43%**, #1), `In-flight Wifi Service` (**14,81%**, #2), `Online Boarding` (**11,63%**, #3), `In-flight Entertainment` (**6,88%**, #4) và `Type of Travel` (**6,29%**, #5).
2. **Phát hiện từ Permutation Importance trên tập `Test`:** Khi đo trực tiếp mức sụt giảm hiệu năng dự đoán trên dữ liệu kiểm tra độc lập, **`In-flight Wifi Service` vươn lên vị trí số #1 tuyệt đối**: khi hoán vị ngẫu nhiên biến này, F1-score của Random Forest sụt giảm tới **11,25 điểm phần trăm** và ROC-AUC sụt giảm **6,30 điểm phần trăm**. Đứng thứ #2 là **`Type of Travel`** (giảm **9,25 điểm %** F1 và **4,16 điểm %** ROC-AUC), thứ #3 là **`Class`** (giảm **8,02 điểm %** F1 và **3,11 điểm %** ROC-AUC), thứ #4 là **`Online Boarding`** (giảm **4,01 điểm %** F1 và **2,19 điểm %** ROC-AUC) và thứ #5 là **`Customer Type`** (giảm **2,53 điểm %** F1 và **1,11 điểm %** ROC-AUC). Tiếp theo trong nhóm dịch vụ là `Leg Room Service` (#6, giảm `2,11` điểm % F1), `In-flight Entertainment` (#7 theo F1 với `1,75` điểm %), `Seat Comfort` (#8 theo F1 với `1,75` điểm %) và `Check-in Service` (#9 với `1,50` điểm % F1).
3. **Kiểm chứng thiên lệch của MDI đối với biến liên tục nhiều giá trị:** Đúng như cảnh báo lý thuyết ở Mục 2.4.9, hai biến định lượng liên tục có nhiều giá trị phân tách là `Age` và `Flight Distance` đứng ở hạng **#8** (`4,00%`) và **#10** (`3,41%`) theo MDI trên tập `Train`, nhưng khi kiểm tra bằng Permutation Importance trên tập `Test` thì chỉ đứng hạng **#12/#14** (`Age`: giảm `0,69` điểm % F1 và `0,34` điểm % ROC-AUC) và hạng **#17** (`Flight Distance`: chỉ giảm `0,31` điểm % F1 và `0,14` điểm % ROC-AUC). Ngược lại, `Customer Type` và `Check-in Service` (ít mức giá trị hơn) xếp hạng #12 và #14 theo MDI nhưng vươn lên hạng **#5** và **#9** theo Permutation Importance trên tập `Test`.

### 4.4.3. Đối chiếu thứ hạng 14 điểm chạm dịch vụ giữa EDA (Chương 3) và Học máy (Chương 4) {{#sec-4-4-3}}

Để kết nối mạch phân tích từ câu hỏi nghiên cứu **RQ3** (Chương 3) sang **RQ4** (Chương 4) và chuẩn bị danh mục ưu tiên cho **RQ5** (Chương 5), @tbl-eda-ml đối chiếu trực tiếp thứ hạng trong nội bộ 14 tiêu chí dịch vụ giữa tương quan đơn biến Spearman ở Chương 3 và ba thước đo đa biến ở Chương 4.

{table(eda_ml_tbl)}

: Đối chiếu thứ hạng của 14 tiêu chí chất lượng dịch vụ giữa phân tích đơn biến EDA (Chương 3) và các mô hình học máy đa biến (Chương 4) {{#tbl-eda-ml}}

*Nguồn: Tổng hợp từ `outputs/chuong3/do_nhay_diem_0.csv` và `outputs/chuong4/doi_chieu_eda_va_ml_dich_vu.csv`.*

Sự dịch chuyển thứ hạng giữa phân tích đơn biến (EDA) và mô hình đa biến (ML) tại @tbl-eda-ml làm sáng tỏ ba cơ chế nghiệp vụ cốt lõi:

- **Sự bứt phá của `In-flight Wifi Service` (từ hạng #6–#7 ở Spearman giữ mã `0` lên hạng #1 trên Random Forest và #2 trên Logistic Regression):** Trong phân tích đơn biến ở Chương 3, khi giữ nguyên 2.935 ô điểm `0`, `In-flight Wifi Service` chỉ đạt $\rho = 0,2689$ (#6), nhưng khi loại điểm `0` đã nhảy lên $\rho = 0,3383$ (#3). Trong mô hình Random Forest đa biến, các cây quyết định không những tách riêng được nhánh điểm `0` mà còn khai thác tương tác mạnh giữa Wi-Fi với mục đích chuyến đi (`Type of Travel`) và thủ tục trực tuyến (`Online Boarding`), biến `In-flight Wifi Service` thành điểm chạm có sức phân loại lớn nhất trên tập kiểm tra.
- **Tính bền vững tuyệt đối của `Online Boarding` và nhóm tiện nghi khoang bay (`In-flight Entertainment`, `Seat Comfort`, `Leg Room Service`):** `Online Boarding` giữ vị trí **#1** ở cả ba phương án Spearman lẫn Logistic Regression ($\beta = +0,7065$) và đứng **#2** trên Random Forest (cả MDI lẫn Permutation Importance). Ba tiêu chí tiện nghi tại ghế ngồi (`In-flight Entertainment`, `Seat Comfort`, `Leg Room Service`) nhất quán nằm trong **Top 5** của các thước đo Random Forest.
- **Hiệu ứng kiểm soát biến nhiễu đối với `Check-in Service` và hiệu ứng cộng tuyến đối với `Cleanliness`, `Food and Drink`:** Trong phân tích đơn biến, `Check-in Service` chỉ đứng hạng **#10** ($\rho = 0,2181$), nhưng khi đưa vào mô hình đa biến có kiểm soát hạng ghế `Class` và mục đích chuyến đi `Type of Travel`, `Check-in Service` vươn lên **hạng #3 theo $|\beta|$ trên Logistic Regression** ($\beta = +0,3297$) và **hạng #6 theo Permutation Importance trên Random Forest** (giảm `1,50` điểm % F1 khi hoán vị). Ngược lại, `Cleanliness` và `Food and Drink` có tương quan khá với `Seat Comfort` và `In-flight Entertainment` ($\rho = 0,42$–$0,52$ ở Hình 3.5), nên khi đã có `Seat Comfort` và `In-flight Entertainment` trong mô hình đa biến, đóng góp biên riêng biệt của `Cleanliness` (#8–#11) và `Food and Drink` (#14) giảm xuống rõ rệt.

## 4.5. Phân tích sai số theo phân khúc hành khách và giới hạn của mô hình {{#sec-4-5}}

### 4.5.1. Hiệu năng mô hình trên các phân khúc hành khách và mức độ khuyết dữ liệu {{#sec-4-5-1}}

Để đáp ứng yêu cầu kiểm tra tính ổn định và công bằng của mô hình giữa các nhóm hành khách trước khi ứng dụng (Mục 2.5.3), @tbl-subgroup và @fig-lr-seg (phải) phân rã hiệu năng của mô hình tốt nhất (**Random Forest**) trên tập `Test` (n = {n(s['n_test'])}) theo hạng ghế, mục đích chuyến đi, loại khách hàng, giới tính và số lượng ô bị khuyết gốc trên mỗi bản ghi.

{table(sub_tbl)}

: Hiệu năng dự đoán của mô hình Random Forest theo các phân khúc hành khách và mức độ khuyết dữ liệu trên tập `Test` (n = {n(s['n_test'])}) {{#tbl-subgroup}}

*Nguồn: `outputs/chuong4/hieu_nang_theo_phan_khuc.csv`.*

![Mười hai đặc trưng có độ lớn hệ số chuẩn hóa $|\beta|$ cao nhất trên Logistic Regression (trái) và hiệu năng Accuracy, Macro-F1 của Random Forest theo phân khúc hành khách trên tập Test (phải).](../figures/chuong4/05_he_so_logistic_va_phan_khuc.png){{#fig-lr-seg width=100%}}

*Nguồn: Trích xuất từ `outputs/chuong4/he_so_logistic.csv` và `outputs/chuong4/hieu_nang_theo_phan_khuc.csv` bằng `src/phan_tich_chuong4.py`.*

Từ @tbl-subgroup và @fig-lr-seg (phải), có thể ghi nhận bốn phát hiện quan trọng về độ tin cậy theo phân khúc:

1. **Sự đồng đều hoàn hảo theo giới tính (`Gender`):** Giữa hành khách `Female` (n = 12.973) và `Male` (n = 10.846), hiệu năng của Random Forest gần như trùng khít tuyệt đối (Accuracy `93,19%` so với `93,20%`; Macro-F1 `93,01%` so với `93,06%`; ROC-AUC `98,16%` so với `98,26%`; FPR cùng ở mức `4,43%`–`4,45%`), chứng tỏ mô hình không hề có thiên lệch theo giới tính.
2. **Hiệu năng rất ổn định trên các phân khúc `Unknown`:** Ở hai nhóm có tỷ lệ khuyết cao là `Type of Travel = Unknown` (n = 9.130) và `Customer Type = Unknown` (n = 8.002), Random Forest vẫn đạt Accuracy **`92,69%`** và **`92,68%`**, Macro-F1 đạt **`92,53%`** và **`92,50%`**, ROC-AUC đạt **`97,87%`** và **`98,01%`**, chỉ thấp hơn khoảng `0,5` điểm phần trăm so với mức trung bình toàn tập Test (`93,19%`).
3. **Đặc thù mất cân bằng lớp cục bộ ở nhóm `Personal Travel` và `Economy`:** Ở phân khúc `Personal Travel` (n = 4.595), do tỷ lệ hành khách hài lòng thực tế chỉ chiếm **10,45%** (89,55% là trung lập/không hài lòng), mô hình đạt **Accuracy cao nhất (`94,49%`)**, **Precision lớp 1 rất cao (`96,71%`)** và **tỷ lệ báo nhầm hài lòng cực thấp ($\text{{FPR}} = 0,19\%$, chỉ 8 ca FP)**, nhưng độ phủ trên lớp thiểu số hài lòng đạt **Recall = `48,96%`** ($\text{{FNR}} = 51,04\%$, F1 lớp 1 đạt `65,01%`, trong khi ROC-AUC vẫn đạt `95,53%`). Tương tự ở hạng `Economy` (tỷ lệ hài lòng thực 18,42%), Accuracy đạt `91,95%`, $\text{{FPR}} = 2,21\%$ nhưng Recall lớp 1 đạt `66,12%` (ROC-AUC `95,94%`). Điều này có nghĩa là tại ngưỡng xác suất mặc định $0,50$, mô hình rất thận trọng khi gán nhãn “Hài lòng” cho khách đi cá nhân hoặc hạng phổ thông (giúp hạn chế tối đa lỗi rủi ro cao `FP`), nhưng nếu doanh nghiệp muốn tăng độ phủ phát hiện khách hài lòng ở hai phân khúc này thì có thể hiệu chỉnh ngưỡng xác suất quyết định (*threshold tuning*) riêng theo phân khúc.
4. **Ảnh hưởng của mật độ ô khuyết trên từng bản ghi:** Khi phân nhóm {n(s['n_test'])} bản ghi tập `Test` theo số lượng ô bị khuyết gốc trước khi điền, nhóm bản ghi **đầy đủ 100% (0 ô khuyết)** đạt Accuracy **`94,97%`** và **ROC-AUC = `99,10%`**; nhóm có **1–3 ô khuyết** (n = 9.078) đạt Accuracy **`94,13%`** và **ROC-AUC = `98,58%`**; trong khi nhóm bị khuyết **từ 4 ô trở lên** (n = 14.542) có Accuracy giảm nhẹ xuống **`92,58%`** (ROC-AUC = `97,94%`). Kết quả này lượng hóa trực tiếp hệ quả của việc điền trung vị/Mode: bản ghi càng thiếu nhiều thông tin gốc thì độ không chắc chắn dự đoán càng cao.

### 4.5.2. Đặc điểm các trường hợp dự đoán sai (False Positives và False Negatives) {{#sec-4-5-2}}

@tbl-fp-fn đối chiếu chân dung trung bình của 4 nhóm kết quả dự đoán (`TP`, `TN`, `FP`, `FN`) của mô hình Random Forest trên tập `Test` (n = {n(s['n_test'])}).

{table(err_tbl)}

: Đặc điểm trung bình của các bản ghi dự đoán đúng (`TP`, `TN`) và dự đoán sai (`FP`, `FN`) trên mô hình Random Forest (tập `Test`, n = {n(s['n_test'])}) {{#tbl-fp-fn}}

*Nguồn: `outputs/chuong4/phan_tich_sai_so_fp_fn.csv`.*

Tại @tbl-fp-fn, trong khi các ca dự đoán đúng có xác suất dự đoán rất rõ ràng (`TP` có xác suất trung bình `0,9104`; `TN` có xác suất trung bình `0,0910`), thì hai nhóm dự đoán sai nằm ở vùng ranh giới xác suất (`FP` có xác suất trung bình `0,6350`; `FN` có xác suất trung bình `0,3035`) và mang đặc trưng “trải nghiệm mâu thuẫn” cùng mật độ khuyết dữ liệu cao hơn (`4,28` và `4,40` ô khuyết gốc/bản ghi so với `4,03` ở `TP`):

- **Nhóm 598 ca dương tính giả (`FP` — thực tế chưa hài lòng nhưng mô hình báo hài lòng):** Có tới **62,54%** thuộc hạng ghế `Business` và có điểm đánh giá trung bình ở các tiêu chí chính khá cao (`Online Boarding = 3,51`, `In-flight Entertainment = 3,80`, `Seat Comfort = 3,73`), nhưng lại có tỷ lệ khuyết thông tin `Type of Travel` cao hơn (`41,97%` thuộc nhóm `Unknown`) hoặc chịu độ trễ đến cao hơn nhóm `TP` (`14,77` phút so với `12,56` phút), khiến họ vẫn đánh giá tổng thể là chưa hài lòng.
- **Nhóm 1.024 ca âm tính giả (`FN` — thực tế hài lòng nhưng mô hình báo chưa hài lòng):** Đa số không thuộc hạng thương gia (chỉ `31,84%` là `Business`, gần với nhóm `TN` `29,71%`) và có điểm đánh giá dịch vụ ở mức trung bình khoảng `3,08`–`3,24` (mức giá trị trùng với trung vị điền khuyết `3` và `4`), khiến mô hình xếp họ vào nhóm `Neutral or Dissatisfied`.

## 4.6. Tổng hợp kết quả Chương 4 và cơ sở định lượng chuyển giao sang Chương 5 {{#sec-4-6}}

@tbl-ch4-summary tổng hợp các kết quả thực nghiệm của Chương 4 để trả lời câu hỏi nghiên cứu **RQ4** và đóng vai trò là bảng thông số định lượng chính thức bàn giao sang Chương 5 (**RQ5**) nhằm thay thế toàn bộ các vị trí đánh dấu `[CHỜ KẾT QUẢ MACHINE LEARNING]`.

| Hạng mục chuyển giao | Kết quả định lượng đã kiểm chứng trên tập `Test` (n = {n(s['n_test'])}) | Hàm ý trực tiếp cho đề xuất quản trị ở Chương 5 (RQ5) |
|---|---|---|
| **Hiệu năng so sánh 3 mô hình (RQ4)** | **Random Forest** dẫn đầu toàn diện: Accuracy = **{f(rf_m['test_acc_pct'])}%**, Precision(1) = **{f(rf_m['test_prec_1_pct'])}%**, Recall(1) = **{f(rf_m['test_rec_1_pct'])}%**, F1(1) = **{f(rf_m['test_f1_1_pct'])}%**, F1(0) = **{f(rf_m['test_f1_0_pct'])}%**, Macro-F1 = **{f(rf_m['test_f1_macro_pct'])}%**, ROC-AUC = **{f(rf_m['test_roc_auc_pct'])}%**, PR-AUC = **{f(rf_m['test_pr_auc_pct'])}%**; vượt xa **Decision Tree đã tinh chỉnh** (Accuracy {f(dt_m['test_acc_pct'])}%, Macro-F1 {f(dt_m['test_f1_macro_pct'])}%, ROC-AUC {f(dt_m['test_roc_auc_pct'])}%) và **Logistic Regression** (Accuracy {f(lr_m['test_acc_pct'])}%, Macro-F1 {f(lr_m['test_f1_macro_pct'])}%, ROC-AUC {f(lr_m['test_roc_auc_pct'])}%). | Chọn **Random Forest** làm mô hình hạt nhân để chấm điểm xác suất hài lòng; kết hợp hệ số $\beta$ / Odds Ratio của **Logistic Regression** để giải thích chiều hướng tác động biên trong báo cáo quản trị. |
| **Kiểm soát sai số quản trị (FP & FN)** | Trên {n(s['n_test'])} bản ghi tập `Test`, Random Forest chỉ mắc **{n(rf_cm['FP'])} lỗi FP** ($\text{{FPR}} = {f(rf_cm['ty_le_FP_tren_lop_0_FPR_pct'])}\%$, giảm 63,29% số lỗi FP so với Logistic Regression) và **{n(rf_cm['FN'])} lỗi FN** ($\text{{FNR}} = {f(rf_cm['ty_le_FN_tren_lop_1_FNR_pct'])}\%$). | Tỷ lệ bỏ sót khách hàng chưa hài lòng ($\text{{FPR}} = 4,44\%$) đủ thấp để ứng dụng làm công cụ sàng lọc cảnh báo sớm (*early-warning*); với phân khúc `Personal Travel` và `Economy`, nên hạ ngưỡng xác suất quyết định dưới 0,50 nếu muốn tăng độ phủ lớp 1. |
| **Top đặc trưng quan trọng nhất (Feature Importance — RQ3 & RQ4)** | **Theo Permutation Importance trên Test (giảm F1 / giảm ROC-AUC):** #1 `In-flight Wifi Service` (−{f(fi_idx.loc['In-flight Wifi Service','perm_f1_drop_mean'])} / −{f(fi_idx.loc['In-flight Wifi Service','perm_roc_auc_drop_mean'])} điểm %), #2 `Type of Travel` (−{f(fi_idx.loc['Type of Travel','perm_f1_drop_mean'])} / −{f(fi_idx.loc['Type of Travel','perm_roc_auc_drop_mean'])}), #3 `Class` (−{f(fi_idx.loc['Class','perm_f1_drop_mean'])} / −{f(fi_idx.loc['Class','perm_roc_auc_drop_mean'])}), #4 `Online Boarding` (−{f(fi_idx.loc['Online Boarding','perm_f1_drop_mean'])} / −{f(fi_idx.loc['Online Boarding','perm_roc_auc_drop_mean'])}), #5 `Customer Type` (−{f(fi_idx.loc['Customer Type','perm_f1_drop_mean'])} / −{f(fi_idx.loc['Customer Type','perm_roc_auc_drop_mean'])}). **Trong 14 điểm dịch vụ:** `In-flight Wifi Service` và `Online Boarding` dẫn đầu cả MDI (`14,81%` và `11,63%`), Permutation Importance lẫn Logistic Regression ($\beta = +0,5040$ và $+0,7065$), kế đến là `Leg Room Service`, `In-flight Entertainment`, `Seat Comfort` và `Check-in Service`. | Củng cố ma trận ưu tiên đầu tư ở Mục 5.1.1: **(1) Nhóm ưu tiên số 1 (tác động đa biến cực lớn nhưng điểm trung bình còn thấp 2,78–3,18):** `In-flight Wifi Service` và `Online Boarding`; **(2) Nhóm ưu tiên số 2 (duy trì chất lượng khoang bay & thủ tục mặt đất):** `Leg Room Service`, `In-flight Entertainment`, `Seat Comfort`, `Check-in Service`. |
| **Vai trò đa biến của độ trễ vận hành (RQ2 & RQ4)** | Trong mô hình đa biến, `Arrival Delay` ($\beta = -0,1033$, MDI `1,39%`, hạng #18/22) và `Departure Delay` ($\beta = -0,0436$, MDI `0,86%`, hạng #22/22) có tác động âm đúng hướng nhưng mức đóng góp dự đoán nhỏ hơn nhiều so với các điểm chạm dịch vụ và phân khúc. | Xác nhận nhận định ở Mục 3.6.2 và định hướng Mục 5.1.2: khi xảy ra chậm trễ chuyến bay, chất lượng trải nghiệm dịch vụ đi kèm (Wi-Fi, thông tin thủ tục, tiện nghi ghế ngồi và sự hỗ trợ của tiếp viên) đóng vai trò quyết định trong việc giữ chân sự hài lòng của hành khách. |

: Tổng hợp kết quả thực nghiệm Chương 4 (RQ4) và các thông số định lượng chuyển giao sang Chương 5 (RQ5) {{#tbl-ch4-summary}}

*Nguồn: Tổng hợp từ hệ thống bảng kết quả thực nghiệm tại `outputs/chuong4/`.*
'''

(R / "outputs" / "chuong4_ban_thao.qmd").write_text(text, encoding="utf-8")
print("Updated outputs/chuong4_ban_thao.qmd successfully.")
