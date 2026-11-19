# Chương 3 — Hướng dẫn sử dụng (đồng bộ theo `Data/processed/PJ21.csv`)

- **Notebook làm sạch chính thức:** `Notebooks/02_kiem_toan_du_lieu.ipynb/clean_data.ipynb` (đồng bộ với script `Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py`). Bản trùng cũ tại `Notebooks/clean_data.ipynb` đã được chuyển vào thư mục lưu trữ `archive/notebooks_cu/clean_data_20261116.ipynb` (không xóa) để tránh nhầm lẫn.
- **Báo cáo Chương 3:**
  - Nguồn Quarto: `outputs/chuong3_ban_thao.qmd`
  - Bản biên dịch HTML (nhúng sẵn hình & bảng): `outputs/chuong3_ban_thao.html`
  - Bản biên dịch Word: `outputs/chuong3_ban_thao.docx`
  - Khi tích hợp vào báo cáo tổng thể 5 chương, lược bỏ khối YAML ở đầu `outputs/chuong3_ban_thao.qmd` nếu dùng cấu hình chung và kiểm tra lại đường dẫn hình ảnh.
- **Trình tự chạy tái lập từ thư mục gốc `PRJ 21`:**
  1. `python src/phan_tich_chuong3.py` (đọc `Data/raw/Du lieu khong sach.csv` và `Data/processed/PJ21.csv`, ghép đối chiếu bằng khóa `ID`, xuất toàn bộ bảng CSV/JSON vào `outputs/chuong3/` và 5 biểu đồ vào `figures/chuong3/`).
  2. `python src/viet_chuong3.py` (tự động lấy toàn bộ số liệu và thứ hạng từ `outputs/chuong3/` để tạo `outputs/chuong3_ban_thao.qmd`).
  3. `quarto render outputs/chuong3_ban_thao.qmd --to html` (biên dịch báo cáo HTML).

## Hiện trạng các hạng mục còn thiếu cần lưu ý trước khi nghiệm thu

1. **Multi-file và Parquet/Feather (chưa hoàn thành):** Ba bảng `hanh_khach.csv`, `hanh_trinh.json`, `danh_gia.sqlite` tại `outputs/chuong3/multi_file/` là các bảng dẫn xuất từ một tệp nguồn (`PJ21.csv`) để kiểm chứng thao tác ghép `one_to_one`, không phải các nguồn dữ liệu độc lập. Môi trường hiện tại chưa cài `pyarrow` / `fastparquet` nên chưa thực hiện xuất và đọc tệp trung gian Parquet/Feather.
2. **Thông tin nguồn dữ liệu (cần xác minh thêm):** Chưa có thông tin xác minh trong hồ sơ cục bộ về ngày tải ban đầu, giấy phép sử dụng trên Kaggle, đơn vị đo gốc của `Flight Distance` và quy ước nghiệp vụ của điểm `0` ở các tiêu chí dịch vụ.
3. **Đầu vào chống rò rỉ dữ liệu cho Chương 4:** Do `Data/processed/PJ21.csv` đã được điền `Mode` và `Median` trên toàn bộ `119.092` dòng trước khi chia tập (0 ô `NaN`), việc chỉ thêm `SimpleImputer` vào `Pipeline` trên `PJ21.csv` không khắc phục được ảnh hưởng của điền khuyết toàn tập. Chương 4 cần dữ liệu sau chuẩn hóa và lọc ngoài miền `BOUNDS` nhưng trước điền khuyết (hoặc phục hồi mặt nạ thiếu/ngoài miền từ `raw` theo `ID`), sau đó mới chia `Train/Test` và chỉ `fit` các bộ tiền xử lý trên tập `Train`.

- **Render (cập nhật 18/11/2026):** `quarto render outputs/chuong3_ban_thao.qmd --to html,docx`. Chỉ chỉnh nội dung trong `src/viet_chuong3.py` (qmd được sinh tự động, không sửa tay).
