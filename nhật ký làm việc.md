# Nhật ký làm việc — PRJ 21

## [2026-11-18 22:17] Triển khai và hoàn thiện Chương 4 (Mô hình hóa học máy phân loại, đánh giá hiệu năng và giải thích đặc trưng)

- **Công cụ thực hiện:** Thực hiện trực tiếp trên Antigravity; giữ nguyên 100% dữ liệu gốc (`raw`, `original`, `PJ21.csv`, kiểm chứng mã băm SHA-256 không đổi trước và sau khi chạy).
- **Xây dựng pipeline học máy chống rò rỉ dữ liệu (`src/phan_tich_chuong4.py`, `outputs/chuong4/`):**
  - Khôi phục ma trận đặc trưng trước điền khuyết ($X_{\text{pre}}$) trên đúng `119.092` bản ghi có nhãn `Satisfaction` quan sát thực tế từ `Data/raw/Du lieu khong sach.csv` (khớp 1–1 theo khóa `ID` với `Data/processed/PJ21.csv`; `assert_frame_equal` xác nhận khi điền khuyết toàn cục trên $X_{\text{pre}}$ sẽ tái tạo 100% `PJ21.csv`). Loại bỏ cột `ID` khỏi 22 biến đặc trưng giải thích (`4` biến phân loại, `4` biến định lượng vận hành, `14` biến điểm dịch vụ).
  - Chia tập `Train / Test` theo tỷ lệ 80/20 có phân tầng (`stratify=y, random_state=42`): tập `Train` gồm `95.273` bản ghi (`41.392` `Satisfied` = `43,45%`; `53.881` `Neutral or Dissatisfied` = `56,55%`) và tập `Test` gồm `23.819` bản ghi (`10.348` `Satisfied` = `43,44%`; `13.471` `Neutral or Dissatisfied` = `56,56%`).
  - Đối chiếu thống kê điền khuyết học riêng trên tập `Train` (`n = 95.273`) với `PJ21.csv` (`n = 119.092`): `21/22` biến trùng khớp tuyệt đối; chỉ riêng `Flight Distance` có trung vị trên `Train` là `849,0` so với `846,0` trên `PJ21.csv` (`doi_chieu_dien_khuyet_train_vs_pj21.csv`).
  - Kiểm tra đa cộng tuyến (`kiem_tra_vif.csv`): toàn bộ 18 biến định lượng trên tập `Train` có $\text{VIF} < 2,50$ (cao nhất là `In-flight Entertainment` $\text{VIF} = 2,3500$, `Seat Comfort` $1,7318$, `In-flight Service` $1,7068$).
- **Tinh chỉnh siêu tham số bằng 5-Fold Stratified CV trên tập `Train` và đánh giá trên tập `Test` (`ket_qua_cv_sieu_tham_so.csv`, `hieu_nang_mo_hinh.csv`, `ma_tran_nham_lan.csv`):**
  - **Logistic Regression (`C = 1,0`, L2, `StandardScaler` + `OneHotEncoder(drop='first')`):** CV Accuracy = `84,51% ± 0,22%`, CV ROC-AUC = `90,57% ± 0,23%`. Trên tập `Test`: Accuracy = **`84,41%`**, Precision(1) = **`83,53%`**, Recall(1) = **`79,85%`**, F1(1) = **`81,65%`**, F1(0) = **`86,44%`**, Macro-F1 = **`84,05%`**, ROC-AUC = **`90,50%`**, PR-AUC = **`90,57%`**, Brier Score = `0,1190` (`TN = 11.842`, `FP = 1.629`, `FN = 2.085`, `TP = 8.263`).
  - **Decision Tree (`max_depth = 14, min_samples_leaf = 20` so với cây không cắt tỉa `max_depth = None, min_samples_leaf = 1`):** Cây không cắt tỉa bị quá khớp nặng (Train Accuracy = `100,00%`, Test Accuracy = `89,92%`, Test ROC-AUC = `89,82%`). Sau khi cắt tỉa tại `max_depth = 14, min_samples_leaf = 20`, hiệu năng trên tập `Test` tăng lên: Accuracy = **`91,64%`**, Precision(1) = **`91,73%`**, Recall(1) = **`88,75%`**, F1(1) = **`90,22%`**, Macro-F1 = **`91,46%`**, ROC-AUC = **`96,97%`** (+7,15 điểm %), Brier Score = `0,0641` (`TN = 12.643`, `FP = 828`, `FN = 1.164`, `TP = 9.184`).
  - **Random Forest (`n_estimators = 200, max_depth = None, min_samples_leaf = 2`):** Dẫn đầu toàn diện trên tập `Test` với Accuracy = **`93,19%`**, Precision(1) = **`93,97%`**, Recall(1) = **`90,10%`**, F1(1) = **`92,00%`**, F1(0) = **`94,07%`**, Macro-F1 = **`93,04%`**, ROC-AUC = **`98,21%`**, PR-AUC = **`97,99%`**, Brier Score = `0,0521` (`TN = 12.873`, `FP = 598`, `FN = 1.024`, `TP = 9.324`, giảm `63,29%` số lỗi dương tính giả `FP` so với Logistic Regression).
- **Phân tích độ nhạy tiền xử lý, Feature Importance (MDI vs Permutation) và sai số theo phân khúc:**
  - Đối chiếu 4 phương án tiền xử lý (`do_nhay_tien_xu_ly_ml.csv`): Pipeline chống rò rỉ và `PJ21.csv` điền sẵn lệch `< 0,07` điểm % Accuracy và `< 0,01` điểm % ROC-AUC; việc chuyển điểm `0` dịch vụ thành `NaN` giúp tăng ROC-AUC của Logistic Regression (`90,50% → 92,85%`) nhưng làm giảm ROC-AUC của Random Forest (`98,21% → 97,62%`).
  - Xếp hạng đặc trưng (`do_quan_trong_dac_trung.csv`, `he_so_logistic.csv`, `doi_chieu_eda_va_ml_dich_vu.csv`): Theo MDI trên `Train`, top 5 gồm `Class` (`16,43%`), `In-flight Wifi Service` (`14,81%`), `Online Boarding` (`11,63%`), `In-flight Entertainment` (`6,88%`), `Type of Travel` (`6,29%`). Theo Permutation Importance trên tập `Test`, top 5 gồm `In-flight Wifi Service` (`#1`, giảm `11,25` điểm % F1 / `6,30` điểm % ROC-AUC), `Type of Travel` (`#2`, giảm `9,25` / `4,16`), `Class` (`#3`, giảm `8,02` / `3,11`), `Online Boarding` (`#4`, giảm `4,01` / `2,19`), `Customer Type` (`#5`, giảm `2,53` / `1,11`).
  - Kiểm toán hiệu năng theo phân khúc và mật độ ô khuyết (`hieu_nang_theo_phan_khuc.csv`, `phan_tich_sai_so_fp_fn.csv`) và xuất 5 biểu đồ (`figures/chuong4/01_so_sanh_mo_hinh.png` đến `05_he_so_logistic_va_phan_khuc.png`).
  - Sinh tự động `outputs/chuong4_ban_thao.qmd` từ `src/viet_chuong4.py` và kết xuất `outputs/chuong4_ban_thao.html`, `outputs/chuong4_ban_thao.docx` với hệ thống đánh số chuẩn `Bảng 4.1`–`Bảng 4.12` và `Hình 4.1`–`Hình 4.5` (`0` lỗi tham chiếu chéo).

---

## [2026-11-18 21:33] Chốt phiên bản Chương 3 và ghi nhận 2 điểm cần rà soát cuối kỳ trước khi triển khai Chương 4

- **Trạng thái Chương 3:** Đã nghiệm thu và chốt phiên bản hiện hành (`outputs/chuong3_ban_thao.qmd`, `.html`, `.docx`; mã nguồn `src/phan_tich_chuong3.py`, `src/viet_chuong3.py` và kết quả `outputs/chuong3/ket_qua.json`) làm cơ sở dữ liệu và thống kê chính thức để triển khai Chương 4.
- **Ghi nhận 2 điểm cần làm rõ khi rà soát tổng thể cuối kỳ (không trì hoãn Chương 4):**
  1. **Chênh lệch giá trị Cramér’s $V$ giữa các báo cáo / phạm vi tính:** Cần thống nhất cách trích dẫn một giá trị chính hay cặp giá trị song song giữa: (a) Cramér’s $V$ trên tập bản ghi quan sát hợp lệ trước điền khuyết (bảng $2 \times 2$ loại `Unknown`: `Type of Travel` đạt $V = 0,4451$ theo Pearson $\chi^2 = 14.555,7$ không hiệu chỉnh Yates, hoặc $V = 0,4450$ theo $\chi^2_{\text{Yates}} = 14.553,7$; `Customer Type` đạt $V = 0,1890$ theo Pearson $\chi^2 = 2.810,4$ và $\chi^2_{\text{Yates}} = 2.809,4$; `Class` bảng $3 \times 2$ đạt $V = 0,5051$ trên $n = 109.979$) và (b) Cramér’s $V$ trên toàn tập `PJ21.csv` ($n = 119.092$, bảng $3 \times 2$ gồm cả nhóm `Unknown` hoặc ô điền Mode: `Type of Travel` $V = 0,3496$; `Customer Type` $V = 0,1538$; `Class` $V = 0,4671$).
  2. **Phạm vi họ kiểm định và ngưỡng hiệu chỉnh Bonferroni:** Cần chốt quy ước trình bày thống nhất ở toàn báo cáo giữa phạm vi **họ 3 kiểm định chính** ở Mục 3.6 (`Class`, `Departure Delay`, `Arrival Delay` với $\alpha_{\text{Bonf, 3}} = 0,05 / 3 \approx 0,0167$) và phạm vi **họ mở rộng 5 kiểm định** khi gộp thêm 2 kiểm định Chi-square phân khúc ở Mục 3.5.1 (`Type of Travel`, `Customer Type` với $\alpha_{\text{Bonf, 5}} = 0,05 / 5 = 0,0100$; hoặc 6 kiểm định nếu tính cả `Gender` với $\alpha_{\text{Bonf, 6}} = 0,05 / 6 \approx 0,0083$).

---

## [2026-11-18 21:14] Kiểm tra độc lập lần cuối, vẽ lại Hình 3.4, chuẩn hóa đánh số 3.x và hoàn thiện Chương 3 để chuyển sang Chương 4

- **Công cụ thực hiện:** Thực hiện trực tiếp trên Antigravity; đã sao lưu toàn bộ tệp trước khi sửa vào `archive/sao_luu_truoc_hoan_thien_20261118_2015/` và chuyển thư mục sao lưu cũ `backup_truoc_khac_phuc_20261118/` ở thư mục gốc vào `archive/backup_truoc_khac_phuc_20261118/`.
- **Kiểm chứng độc lập toàn bộ số liệu và Cramér's $V$ (`src/phan_tich_chuong3.py`, `outputs/chuong3/ket_qua.json`):**
  - Viết kịch bản kiểm chứng độc lập không gọi hàm sinh báo cáo, đối chiếu từng ô dữ liệu giữa `Data/raw/Du lieu khong sach.csv` (`129.880 × 24`) và `Data/processed/PJ21.csv` (`119.092 × 24`). Xác nhận khớp 100% toàn bộ số liệu ở Bảng 3.1–3.12 (kiểm toán lỗi trước/sau, thống kê mô tả, ngoại lai IQR, phân khúc, nhóm độ trễ khởi hành/đến, tương quan Spearman 3 phương án và Mann–Whitney U).
  - **Chuẩn hóa hai giá trị Cramér's $V$ của `Type of Travel` và `Customer Type`:** Chuyển toàn bộ phép tính Chi-square và Cramér's $V$ từ `src/viet_chuong3.py` sang `src/phan_tich_chuong3.py` (lưu vào `ket_qua.json`) với `correction=False` để thống nhất định nghĩa toán học $V = \sqrt{\chi^2_{\text{Pearson}} / [n \cdot \min(R-1, C-1)]}$, đồng thời lưu cả giá trị hiệu chỉnh Yates ($\chi^2_{\text{Yates}}$) và kết quả bảng $3 \times 2$ trên toàn tập `PJ21.csv` (gồm nhóm `Unknown`). Cụ thể:
    - `Type of Travel`: Trên tập quan sát hợp lệ ($2 \times 2$, $n = 73.485$, $\text{df} = 1$): Pearson $\chi^2 = 14.555,7$, **Cramér's $V = 0,4451$** (với hiệu chỉnh Yates: $\chi^2_{\text{Yates}} = 14.553,7$, $V = 0,4450$); trên toàn tập `PJ21.csv` ($3 \times 2$ gồm `Unknown`, $n = 119.092$, $\text{df} = 2$): $\chi^2 = 14.555,0$, **Cramér's $V = 0,3496$**.
    - `Customer Type`: Trên tập quan sát hợp lệ ($2 \times 2$, $n = 78.684$, $\text{df} = 1$): Pearson $\chi^2 = 2.810,4$, **Cramér's $V = 0,1890$** (với hiệu chỉnh Yates: $\chi^2_{\text{Yates}} = 2.809,4$, $V = 0,1890$); trên toàn tập `PJ21.csv` ($3 \times 2$ gồm `Unknown`, $n = 119.092$, $\text{df} = 2$): $\chi^2 = 2.815,6$, **Cramér's $V = 0,1538$**.
  - Định dạng chính xác phần thập phân `,5` của thống kê Mann–Whitney $U$ (`692.187.731,0`; `1.671.189.762,5`; `1.354.446.404,5`; `1.570.744.725,5`) ở Bảng 3.11 và đưa số lượng bản ghi `Flight Distance > 5.000` (`178` bản ghi, 100% là giá trị quan sát) vào `ket_qua.json`.
- **Vẽ lại Hình 3.4 (`figures/chuong3/03_do_tre.png`) và cải thiện Hình 3.5 (`figures/chuong3/04_heatmap.png`):**
  - Hình 3.4 được thiết kế lại gồm hai vùng ngăn cách bởi vạch đứt: vùng bên trái phân rã nhóm `0 phút` thành 3 cột (`0 phút quan sát thực tế`, `Ô khuyết điền 0`, `0 phút gộp trên PJ21.csv`), vùng bên phải hiển thị 3 mức trễ dương (`1–15 phút`, `16–60 phút`, `Trên 60 phút`) kèm tỷ lệ hài lòng và cỡ mẫu `(n=...)` trên từng cột, loại bỏ hoàn toàn các cặp cột trùng nhau ở 3 nhóm trễ dương.
  - Hình 3.5 bổ sung nhãn hệ số tương quan Spearman (2 chữ số thập phân) trên toàn bộ $15 \times 15$ ô của ma trận.
- **Nhất quán họ kiểm định Bonferroni và đồng bộ Chương 1–2–3:**
  - Nêu rõ hai phạm vi hiệu chỉnh Bonferroni ở cả mục 2.4.3 (Chương 2) và mục 3.6 (Chương 3): họ 3 kiểm định chính ở mục 3.6 ($\alpha_{\text{Bonf, 3}} = 0,05 / 3 \approx 0,0167$) và họ mở rộng 5 kiểm định toàn Chương 3 khi gộp thêm `Type of Travel` và `Customer Type` ($\alpha_{\text{Bonf, 5}} = 0,05 / 5 = 0,0100$, hoặc $\alpha/6 \approx 0,0083$ nếu tính cả `Gender`).
  - Đồng bộ mục 1.4.2 của `outputs/chuong1_ban_thao.qmd` về quy mô dữ liệu trước và sau làm sạch (`129.880` dòng thô → loại `10.788` dòng thiếu nhãn → `119.092` dòng sạch trong `Data/processed/PJ21.csv`).
- **Chuẩn hóa cấu hình Quarto dùng chung và đánh số `Bảng 3.x` / `Hình 3.x`:**
  - Thiết lập `outputs/_metadata.yml` với `crossref: chapters: true` kết hợp `number-offset: [0]`, `[1]`, `[2]` ở từng chương để khi render độc lập vẫn đánh số chuẩn `Bảng 2.1`–`Bảng 2.4`, `Bảng 3.1`–`Bảng 3.12` và `Hình 3.1`–`Hình 3.5` trên cả HTML lẫn DOCX mà không đánh số lặp tiêu đề chương.

---

## [2026-11-18 20:05] Khắc phục kiểm toán Chương 3 (nhóm #1–#18) và đồng bộ Chương 2

- **Sao lưu trước khi sửa:** `archive/backup_truoc_khac_phuc_20261118/` (src, qmd/html/docx Chương 1–3, `outputs/chuong3` trừ `multi_file`, hình, notebook làm sạch, nhật ký).
- **Kiểm chứng:** chạy lại `lam_sach_du_lieu.py` (khớp 100% `PJ21.csv`), `phan_tich_chuong3.py`, `viet_chuong3.py`; `ket_qua.json`, mọi CSV và qmd cũ trùng kết quả chạy lại (số liệu không đổi). Tính lại độc lập từ raw: chi-square Class (n=109.979), Mann–Whitney trên ô quan sát, Spearman ô quan sát, tổng Bảng 3.3.
- **Sai lệch có bằng chứng đã sửa:** trung bình `Leg Room Service` 3,3953 là trung bình sau điền; trên 110.754 ô hợp lệ là 3,3498 (trung vị 4,0 không đổi) → bỏ số trung bình; bỏ phỏng đoán "500–991 nhân 10" của `Flight Distance` (178 giá trị 5.000–9.910 đều là giá trị quan sát); bỏ "cập nhật ngày 17/11/2026" (tệp sửa 16/11).
- **Đồng bộ Chương 2:** quy tắc điền khuyết theo mã thực tế (toàn cục), họ 3 kiểm định + Bonferroni α/3, bỏ câu lỗi thời về tên CSV cũ.
- **Chương 3:** viết lại trong `src/viet_chuong3.py` (nguồn sinh duy nhất): rút gọn (~9.300 → ~5.350 từ; Word 22 → 16 trang), bảng/hình dùng nhãn Quarto `#tbl-/#fig-`, thêm Chi-square cho `Customer Type`/`Type of Travel`, dòng `Business` chỉ ô quan sát, bảng Mann–Whitney, mục 3.7 tổng hợp RQ và hạn chế; bỏ ghi chú quản lý dự án.
- **Còn tồn tại (đã giải quyết ở lượt 21:14):** Hình 3.4 chưa vẽ lại; Chương 1 chưa đối chiếu lại; số bảng/hình khi render riêng là 1–11.

---

## [2026-11-18 00:28] Dọn gọn thư mục dự án và chuẩn hóa lưu trữ (`archive/`)

- **Rà soát toàn bộ tệp và mã băm SHA-256:** Kiểm tra 100% các tệp trong workspace; không có cặp tệp nào trùng mã băm SHA-256.
- **Tổ chức thư mục lưu trữ `archive/` (chia 3 thư mục con, không xóa các bản có nội dung khác nhau, không ghi đè):**
  - `archive/bao_cao_cu/`: Lưu 2 bản Word Chương 3 cũ ngày 15/11 (`Chuong_3_PRJ21_root_20261115.docx`, `Chuong_3_PRJ21_outputs_20261115.docx`) và 2 báo cáo kiểm tra/kiểm toán cũ (`bao_cao_kiem_tra_workspace_20261112.md`, `kiem_toan_chuong3_20261115.md`).
  - `archive/notebooks_cu/`: Lưu `baocaoketqua_moi.ipynb` (bản tháng 10/2026) và `clean_data_20261116.ipynb` (bản cũ từ `Notebooks/clean_data.ipynb`).
  - `archive/cong_cu_tam/`: Lưu 2 script công cụ tạm không còn sử dụng (`library_file_transfer.py`, `dong_goi.py`).
  - Chi tiết đường dẫn cũ → mới và tệp cache đã xóa được ghi tại `archive/nhat_ky_don_dep.md`.
- **Xóa cache Python và kiểm tra thư mục rỗng:** Đã xóa tệp bytecode `Notebooks/02_kiem_toan_du_lieu.ipynb/__pycache__/lam_sach_du_lieu.cpython-312.pyc`. Các thư mục rỗng do OneDrive giữ khóa quyền xóa (`ReparsePoint`) được giữ nguyên, không cưỡng chế xóa.
- **Kiểm tra sau dọn dẹp:** Toàn bộ đường dẫn dữ liệu (`raw`, `original`, `PJ21.csv`), mã nguồn (`src/`, `Notebooks/02_kiem_toan_du_lieu.ipynb/`), bảng (`outputs/chuong3/`), hình (`figures/chuong3/`, `figures/kiem_toan_du_lieu/`) và báo cáo QMD/HTML/DOCX hiện hành đều hợp lệ và nguyên vẹn.

---

## [2026-11-17 23:55] Rà soát và sửa các lỗi còn lại của Chương 3 trên `Data/processed/PJ21.csv`

- **Công cụ thực hiện:** Thực hiện trực tiếp trên Antigravity; đã sao lưu các tệp trước khi sửa; giữ nguyên 100% dữ liệu `raw`, `original`, `PJ21.csv` và logic làm sạch.
- **Tổ chức hồ sơ Notebook làm sạch:** Xác định notebook làm sạch chính thức là `Notebooks/02_kiem_toan_du_lieu.ipynb/clean_data.ipynb` (đồng bộ với `lam_sach_du_lieu.py`). Kiểm tra toàn bộ tham chiếu và chuyển bản trùng cũ `Notebooks/clean_data.ipynb` vào thư mục lưu trữ `archive/notebooks_cu/clean_data_20261116.ipynb` (không xóa).
- **Sửa số liệu và diễn giải trong Chương 3 (`src/phan_tich_chuong3.py`, `src/viet_chuong3.py`, `outputs/chuong3_ban_thao.qmd`):**
  - Tự động hóa hoàn toàn việc trích xuất số liệu, tỷ lệ và thứ hạng từ kết quả chạy mã phân tích vào `src/viet_chuong3.py`.
  - Cập nhật số ô điền khuyết thực tế ở Bảng 3.4 và văn bản: nhóm vận hành từ `Arrival Delay = 8.038` ô (`6,75%`) đến `Departure Delay = 41.414` ô (`34,77%`), `Age = 9.012` ô (`7,57%`, sửa lỗi ghi nhầm `9.035` ở mục 3.4.1), `Flight Distance = 22.791` ô (`19,14%`); nhóm dịch vụ từ `Leg Room Service = 8.338` ô (`7,00%`) đến `Cleanliness = 38.441` ô (`32,28%`).
  - Nêu rõ giá trị điền trung vị của 14 biến dịch vụ: 5 biến `On-board Service`, `Seat Comfort`, `In-flight Service`, `In-flight Entertainment`, `Baggage Handling` điền `4`; 8 biến điền `3`; riêng `Leg Room Service` có trung bình `3,3953` nhưng trung vị trên 110.754 ô hợp lệ trước điền khuyết trong `clean_data.ipynb` là `4,0` nên thực tế 8.338 ô điền khuyết trong `PJ21.csv` mang giá trị `4`.
  - Mục 3.5.1: Bỏ suy luận nhóm `Unknown` bị khuyết thông tin hoàn toàn ngẫu nhiên (MCAR) chỉ vì tỷ lệ hài lòng gần mức trung bình chung.
  - Mục 3.5.3: Bỏ kết luận cả ba cách tính đều giữ nguyên top 5/thứ hạng; bổ sung thứ hạng (`#1`–`#14`) vào Bảng 3.9 và diễn giải rõ khi bỏ điểm `0`, `In-flight Wifi Service` đạt Spearman `0,3383` vươn lên hạng `#3`, đẩy `Seat Comfort` xuống `#4`, `On-board Service` xuống `#5` và `Leg Room Service` (`0,3059`) xuống `#6`; đồng thời mô tả sự hoán đổi vị trí giữa `Cleanliness` (`#6` trên ô quan sát xuống `#8` trên `PJ21.csv`), `In-flight Wifi Service` và `In-flight Service`.
- **Bổ sung phân tích `Departure Delay` cho RQ2 (Mục 3.5.2 & 3.6.2):**
  - Tính và trình bày song song cả `Departure Delay` và `Arrival Delay` trên toàn tập `PJ21.csv` (`n = 119.092`) và trên tập chỉ gồm các ô quan sát hợp lệ trước điền khuyết (`n = 77.678` đối với `Departure Delay` và `n = 111.054` đối với `Arrival Delay`); cập nhật Bảng 3.8, Hình 3.4 (`figures/chuong3/03_do_tre.png`) và kiểm định Mann–Whitney U ở mục 3.6.2 (`Departure Delay`: $U = 1.671.189.762,5$, $p = 1,77 \times 10^{-52}$, $r_{rb} = -0,0409$ toàn tập; $U = 692.187.731,0$, $p = 7,52 \times 10^{-68}$, $r_{rb} = -0,0658$ trên tập quan sát).
- **Làm rõ đầu vào chống rò rỉ dữ liệu cho Chương 4 (Mục 3.3.4 & 3.6.3):**
  - Ghi rõ việc chỉ thêm `SimpleImputer` vào `Pipeline` nhưng vẫn truyền trực tiếp `PJ21.csv` đã điền sẵn (0 ô `NaN`) không khắc phục được rò rỉ thông tin thống kê từ việc điền khuyết toàn tập; Chương 4 cần dữ liệu sau chuẩn hóa và lọc ngoài miền `BOUNDS` nhưng trước điền khuyết (hoặc phục hồi mặt nạ thiếu/ngoài miền từ `raw` theo khóa `ID`), sau đó chia `Train/Test` và chỉ `fit` tiền xử lý trên `Train`.
- **Hiện trạng các hạng mục kỹ thuật còn thiếu:** Multi-file hiện mới là 3 bảng dẫn xuất từ một tệp nguồn; chưa cài `pyarrow` để xuất Parquet/Feather; chưa xác minh ngày tải, giấy phép Kaggle, đơn vị gốc của `Flight Distance` và ý nghĩa mã điểm `0`.

---

## [2026-11-17 23:15] Cập nhật Chương 3 và kiểm toán trước–sau theo dữ liệu chuẩn `Data/processed/PJ21.csv`

- **Công cụ thực hiện:** Thực hiện trực tiếp trên Antigravity theo yêu cầu của thành viên 1; đã sao lưu toàn bộ tệp trước khi sửa.
- **Kiểm chứng bảng lỗi trước–sau (`lam_sach_du_lieu.py`, `clean_data.ipynb`, `outputs/Bao_cao_lam_sach_du_lieu.csv`):**
  - Không thay đổi logic làm sạch và không ghi đè `Data/processed/PJ21.csv` (mã băm SHA-256 giữ nguyên `baa89213a9cd76be3baa239731ad6035f1544ce4c94f3ab4a8c545bb4adc3e3a`).
  - Thay cơ chế gán cứng `0` ở bước sau xử lý bằng hàm kiểm toán thực tế `kiem_toan_tung_o` trên từng ô dữ liệu cho cả trước và sau làm sạch.
  - Phân biệt rõ **Tổng lượt lỗi trước làm sạch (`957.918` lượt, gồm `410.614` ô thiếu, `419.228` sai định dạng, `128.076` ngoài miền; có `37.748` ô số trùng cả hai lỗi)** với **Số ô lỗi duy nhất (`920.170` ô, chiếm `29,5199%`)**.
  - Đối chiếu qua khóa `ID` để tách bạch **`83.037` ô lỗi duy nhất biến mất do loại bỏ `10.788` dòng thiếu nhãn `Satisfaction`** và **`837.133` ô lỗi duy nhất được trực tiếp sửa/điền khuyết trên `119.092` dòng giữ lại**. Sau xử lý trên `PJ21.csv`, hàm kiểm toán thực tế xác nhận `0` lỗi thiếu, `0` lỗi định dạng và `0` lỗi ngoài miền.
- **Cập nhật mã phân tích và văn bản Chương 3 (`src/phan_tich_chuong3.py`, `src/viet_chuong3.py`, `outputs/chuong3_ban_thao.qmd`):**
  - Chuyển đầu vào sang `Data/processed/PJ21.csv` (`119.092` dòng × `24` cột); kiểm tra khóa `ID` duy nhất và ghép nối `one_to_one` bằng `ID` khi đối chiếu với dữ liệu bẩn (`129.880` dòng).
  - Bổ sung kiểu dữ liệu (`Raw -> PJ21 -> Tối ưu`) và miền giá trị quy ước vào Bảng 3.1 (Data Dictionary); bổ sung Bảng 3.3 đối chiếu lỗi trước–sau trên toàn bộ 24 biến.

---

## [2026-11-15 13:29] Xây dựng Chương 3 từ dữ liệu hiện có (phiên bản đầu tiên)

- Yêu cầu của người dùng: “tiếng hành làm chương 3”. Thực hiện với sự hỗ trợ của ChatGPT; không ghi nhận đây là thao tác tự thực hiện trên Antigravity.
- Tạo bản sơ thảo đầu tiên trên tệp 129.880 dòng trước khi chuyển sang bộ dữ liệu chuẩn `Data/processed/PJ21.csv` (`n = 119.092`).
