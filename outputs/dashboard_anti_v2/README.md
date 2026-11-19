# Dashboard Tương tác Thuyết trình Chương 3 — PRJ 21 (`outputs/dashboard_anti_v2/`)

## 1. Cách mở và chạy ngoại tuyến (không cần Internet hay máy chủ cục bộ)

- Mở trực tiếp tệp `outputs/dashboard_anti_v2/index.html` bằng trình duyệt (Chrome, Edge, Firefox) qua giao thức `file://`.
- Toàn bộ dữ liệu đã xác minh được đóng gói tại chỗ trong `data.js` và toàn bộ biểu đồ được vẽ bằng SVG nội sinh trong `app.js`, không phụ thuộc CDN và không dùng `fetch()` tệp cục bộ nên hoạt động 100% ngoại tuyến.

## 2. Cấu trúc 6 phần thuyết trình

1. **① Tổng quan:** Quy mô trước (`129.880 dòng`) → sau (`119.092 dòng`), số dòng bị loại (`10.788 dòng`), tổng lượt lỗi (`957.918 lượt lỗi`), ô lỗi duy nhất (`920.170 ô`), lỗi sau xử lý (`0 ô`), biểu đồ sàng lọc nhãn và cơ cấu nhãn `Satisfaction` trên `PJ21.csv`.
2. **② Quy trình làm sạch:** 6 bước đúng thứ tự trong `lam_sach_du_lieu.py` và `nhật ký làm việc.md`. Bấm từng bước để bung/thu gọn phần giải thích (`Lỗi gặp phải`, `Quy tắc xử lý`, `Lý do kỹ thuật`, `Kết quả kiểm chứng`). Bấm **“Trình diễn kết quả đã tính”** để lần lượt làm nổi bật từng bước.
3. **③ Kiểm toán 24 biến:** Bảng đầy đủ 24 biến (cuộn độc lập, cố định tiêu đề cột), phân biệt rõ `Lượt lỗi`, `Ô lỗi duy nhất`, `Ô lỗi thuộc dòng bị loại` và `Ô được sửa trên dòng giữ lại`. Có ô tìm kiếm tên biến, bộ lọc loại lỗi và nút **“Tải CSV bảng đang lọc”**.
4. **④ Ví dụ thực tế:** Chọn bất kỳ biến nào trong 24 biến và lọc theo cách xử lý (`Chuẩn hóa`, `Điền khuyết`, `Gán nhãn Unknown`, `Loại dòng thiếu nhãn`) để xem bản ghi thật ghép 1–1 theo khóa `ID`.
5. **⑤ Khám phá dữ liệu (EDA):** 3 thẻ tương tác cho RQ1 (Phân khúc hành khách), RQ2 (Độ trễ khởi hành & độ trễ đến) và RQ3 (Tương quan Spearman 14 tiêu chí dịch vụ), hỗ trợ chuyển đổi **Toàn tập PJ21.csv / Chỉ ô quan sát được** và **3 phương án xử lý mã 0**.
6. **⑥ Nguồn & Kiểm chứng:** Bảng đối chiếu truy vết, 5 phép kiểm tra tổng, mã băm SHA-256 thực tế của 12 tệp nguồn và danh sách các hạng mục chưa xác minh / giới hạn dữ liệu.

## 3. Điều khiển thuyết trình và phím tắt

- **Phím `←` / `→`:** Chuyển phần Trước / Tiếp (tự động vô hiệu hóa khi con trỏ đang nằm trong ô tìm kiếm hoặc hộp chọn).
- **Phím `Esc`:** Đóng cửa sổ **“Xem nguồn”**.
- **Nút “▶ Tự chạy / ⏸ Tạm dừng”:** Tự động chuyển lần lượt qua 6 phần (mỗi 6,5 giây).
- **Nút “Chế độ thuyết trình”:** Phóng lớn cỡ chữ và mở rộng khung hiển thị cho màn hình chiếu 16:9 (`1366×768` và `1920×1080`).
- **Nút “Toàn màn hình”:** Bật/tắt chế độ Fullscreen của trình duyệt.
- **Nút “🔎 Xem nguồn”:** Có mặt ở từng phần ①–⑤ để mở ngay căn cứ tệp nguồn và mã băm SHA-256 khi giảng viên đặt câu hỏi.
