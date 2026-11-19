# Nhật ký làm việc — PRJ 21

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

## [2026-11-18 20:05] Khắc phục kiểm toán Chương 3 (nhóm #1–#18) và đồng bộ Chương 2

- **Sao lưu trước khi sửa:** `backup_truoc_khac_phuc_20261118/` (src, qmd/html/docx Chương 1–3, `outputs/chuong3` trừ `multi_file`, hình, notebook làm sạch, nhật ký).
- **Kiểm chứng:** chạy lại `lam_sach_du_lieu.py` (khớp 100% `PJ21.csv`), `phan_tich_chuong3.py`, `viet_chuong3.py`; `ket_qua.json`, mọi CSV và qmd cũ trùng kết quả chạy lại (số liệu không đổi). Tính lại độc lập từ raw: chi-square Class (n=109.979), Mann–Whitney trên ô quan sát, Spearman ô quan sát, tổng Bảng 3.3.
- **Sai lệch có bằng chứng đã sửa:** trung bình `Leg Room Service` 3,3953 là trung bình sau điền; trên 110.754 ô hợp lệ là 3,3498 (trung vị 4,0 không đổi) → bỏ số trung bình; bỏ phỏng đoán "500–991 nhân 10" của `Flight Distance` (178 giá trị 5.000–9.910 đều là giá trị quan sát); bỏ "cập nhật ngày 17/11/2026" (tệp sửa 16/11).
- **Đồng bộ Chương 2:** quy tắc điền khuyết theo mã thực tế (toàn cục), họ 3 kiểm định + Bonferroni α/3, bỏ câu lỗi thời về tên CSV cũ.
- **Chương 3:** viết lại trong `src/viet_chuong3.py` (nguồn sinh duy nhất): rút gọn (~9.300 → ~5.350 từ; Word 22 → 16 trang), bảng/hình dùng nhãn Quarto `#tbl-/#fig-`, thêm Chi-square cho `Customer Type`/`Type of Travel`, dòng `Business` chỉ ô quan sát, bảng Mann–Whitney, mục 3.7 tổng hợp RQ và hạn chế; bỏ ghi chú quản lý dự án.
- **Còn tồn tại:** Hình 3.4 chưa vẽ lại (đã chú thích hai cột chỉ khác nhau ở nhóm 0 phút); Parquet/Feather, giấy phép/ngày tải Kaggle, đơn vị `Flight Distance`, nghĩa mã `0`, nguồn đa tệp độc lập; Chương 1 chưa đối chiếu lại; số bảng/hình khi render riêng là 1–11, sẽ thành 3.x khi ghép sách có `crossref: chapters: true`.
