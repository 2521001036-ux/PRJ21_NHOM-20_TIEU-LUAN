# Hướng dẫn Sử dụng Dashboard Thuyết trình Chương 3 — PRJ 21 (`outputs/dashboard_anti/`)

## 1. Giới thiệu & Cấu trúc Bàn giao

Thư mục `outputs/dashboard_anti/` chứa bản **Dashboard tương tác độc lập** phục vụ thuyết trình quá trình **Tổ chức, Làm sạch, Kiểm toán chất lượng và Khám phá dữ liệu (EDA) Chương 3** của dự án **PRJ 21** (*Airline Passenger Satisfaction*).

Toàn bộ dashboard được thiết kế hoạt động **100% ngoại tuyến (Offline-first)**, không phụ thuộc vào kết nối Internet hay thư viện CDN bên ngoài, mở trực tiếp được bằng bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari) thông qua giao thức `file://` hoặc máy chủ cục bộ.

### Danh mục tệp trong `outputs/dashboard_anti/`

| Tệp | Vai trò |
|---|---|
| `index.html` | Giao diện chính của Dashboard thuyết trình (gồm thanh điều khiển trình chiếu và 6 phần nội dung Chương 3). |
| `styles.css` | Hệ thống định dạng giao diện độc lập, hỗ trợ **Chế độ Sáng học thuật** (mặc định cho phòng họp sáng), **Chế độ Tối thuyết trình** và **3 mức phóng cỡ chữ máy chiếu (100% / 112% / 124%)**. |
| `data.js` | Gói dữ liệu thực trích xuất 100% từ `Data/raw/Du lieu khong sach.csv`, `Data/processed/PJ21.csv`, `outputs/chuong3/ket_qua.json` và các bảng CSV kiểm toán/EDA (gồm bảng kiểm toán 24 biến, 395 ví dụ thực tế theo `ID`, 164 hồ sơ hành khách đầy đủ 24 trường, phân bố phân khúc, độ trễ, tuổi, Spearman 3 phương án và ma trận nhiệt $15 \times 15$). |
| `app.js` | Bộ máy tương tác JavaScript: điều khiển trình chiếu, tự chạy (Auto-play), trình diễn quy trình làm sạch 6 bước, bộ lọc/tìm kiếm/xuất CSV bảng 24 biến, tra cứu hồ sơ `ID` và vẽ biểu đồ vector SVG tương tác. |
| `HUONG_DAN_SU_DUNG.md` | Tài liệu hướng dẫn sử dụng, kịch bản thuyết trình và đối chiếu kiểm chứng dữ liệu. |

---

## 2. Cách Mở Dashboard

### Cách 1: Mở trực tiếp ngoại tuyến (Khuyên dùng khi thuyết trình)
- Nhấp đúp chuột vào tệp `outputs/dashboard_anti/index.html` để mở ngay trên trình duyệt web mặc định (Google Chrome / Microsoft Edge).
- Vì dữ liệu đã được đóng gói vào `data.js`, trình duyệt không bị chặn bởi chính sách CORS khi mở ở chế độ `file:///`.

### Cách 2: Mở qua máy chủ HTTP cục bộ (Tùy chọn)
Từ thư mục gốc dự án `PRJ 21`, chạy lệnh:
```bash
python -m http.server 8080
```
Sau đó mở trình duyệt tại địa chỉ: `http://localhost:8080/outputs/dashboard_anti/index.html`.

---

## 3. Điều khiển Thuyết trình & Phím tắt Bàn phím

Thanh điều khiển trên cùng luôn cố định để người thuyết trình thao tác nhanh khi chiếu lên màn hình lớn:

| Nút / Phím tắt | Chức năng |
|---|---|
| `◀ Trước` / Phím `←` hoặc `PageUp` | Chuyển về phần thuyết trình trước đó. |
| `Tiếp ▶` / Phím `→` hoặc `PageDown` | Chuyển sang phần thuyết trình tiếp theo. |
| Phím số `1` đến `6` | Nhảy trực tiếp tới **Phần 1** .. **Phần 6**. |
| `▶ Tự chạy` / `⏸ Tạm dừng` (Phím `Space`) | Tự động chuyển qua 6 phần theo chu kỳ tùy chọn (`10 giây`, `18 giây`, `30 giây`, `45 giây`) kèm thanh đếm ngược trực quan. |
| `🖥 Chế độ: Từng phần` (Phím `M`) | Chuyển đổi giữa **Chế độ Từng phần (Slide Deck)** có hiệu ứng chuyển mượt và **Chế độ Cuộn toàn trang (Scroll All)** để xem liền mạch cả 6 phần. |
| `A+ Cỡ chữ` | Phóng to toàn bộ chữ và bảng biểu qua 3 mức (`100%` → `112%` → `124%`) tối ưu cho máy chiếu hội trường lớn. |
| `🌙 Nền tối` / `☀ Nền sáng` (Phím `T`) | Chuyển đổi giao diện Sáng / Tối tùy ánh sáng phòng thuyết trình. |
| `⛶ Toàn màn hình` (Phím `F`) | Bật / tắt chế độ Toàn màn hình (Fullscreen) của trình duyệt. |

---

## 4. Hướng dẫn Thao tác Từng Phần (6 Phần Nội dung)

### Phần 1. Tổng quan Dữ liệu, Cơ cấu Lỗi & Nhãn Mục tiêu
- Trình bày 4 thẻ KPI cốt lõi:
  - Quy mô dòng/cột trước làm sạch (`129.880 × 24 = 3.117.120 ô`) và sau làm sạch (`119.092 × 24 = 2.858.208 ô`, giữ lại `91,6939%`).
  - Số dòng bị loại do thiếu nhãn `Satisfaction` hợp lệ (`10.788 dòng = 8,3061%`, gồm `6.828` ô trống CSV và `3.960` mã thiếu ẩn).
  - Phân biệt rõ **957.918 tổng lượt lỗi** (`410.614` thiếu + `419.228` sai định dạng + `128.076` ngoài miền) với **920.170 ô lỗi duy nhất** (`29,52%` tổng số ô) do có **37.748 ô trùng 2 lỗi** (vừa sai định dạng vừa ngoài miền).
  - Cơ cấu nhãn trên `PJ21.csv`: `51.740 Satisfied (43,45%)` và `67.352 Neutral or Dissatisfied (56,55%)` — 100% là nhãn quan sát thực tế.
- Sơ đồ phân rã dòng chảy lỗi: tách `920.170` ô lỗi duy nhất thành `83.037` ô thuộc dòng bị loại và `837.133` ô được sửa trên dòng giữ lại (gồm `353.139` ô chuẩn hóa giữ giá trị thực + `483.994` ô điền khuyết/gán `Unknown`).
- Biểu đồ tối ưu bộ nhớ RAM (`151,36 MiB` → `51,47 MiB` → `3,41 MiB`, tiết kiệm `93,38%`) và bảng thực nghiệm đọc – ghép đa định dạng (`hanh_khach.csv`, `hanh_trinh.json`, `danh_gia.sqlite`).

### Phần 2. Quy trình Làm sạch Dữ liệu Từng bước
- **Khung trình diễn quy trình**: Nút `▶ Chạy trình diễn quy trình (Kết quả đã tính)` ghi rõ là chế độ trình diễn kết quả kiểm toán đã tính sẵn từ `lam_sach_du_lieu.py` và `src/phan_tich_chuong3.py` (không ghi đè tệp dữ liệu gốc). Có thể chạy tự động hoặc bấm `⏭ Bước tiếp theo` để xem số dòng và số lỗi giảm dần qua 6 bước.
- **6 thẻ bước bung/thu gọn (Accordion)**: Nhấp vào từng bước (hoặc bấm `➕ Bung tất cả các bước`) để trình bày quy tắc kỹ thuật, mã nguồn Python (`MISSING_TOKENS`, `ALL_MAPS`, `BOUNDS`) và lý do phương pháp luận.
- Kèm theo **Bảng Chiến lược Điền khuyết (Bảng 3.4)** và **Bảng Ngoại lai Thống kê $1,5 \times \text{IQR}$ (Bảng 3.5)**.

### Phần 3. Kiểm toán 24 Biến
- **Bảng kiểm toán 24 biến + dòng Tổng cộng**: Hiển thị đầy đủ các cột Trước và Sau xử lý, tách rõ `Tổng lượt lỗi`, `Trùng 2 lỗi`, `Ô lỗi duy nhất`, `Thuộc dòng loại`, `Được sửa (PJ21)`, `Chuẩn hóa (Giữ gốc)`, `Số ô điền (Tỷ lệ %)`, `Giá trị điền` và `Lỗi sau (PJ21) = 0`.
- **Tìm kiếm & Bộ lọc**: Tìm nhanh theo tên biến, lọc theo 5 nhóm biến hoặc lọc theo đặc điểm (`Có ô trùng 2 lỗi`, `Tỷ lệ điền khuyết > 20%`, `Điền trung vị = 3`, `Điền trung vị = 4`), sắp xếp theo cột.
- **Tải CSV**: Nút `⬇ Tải CSV Kiểm toán 24 biến` xuất bảng ra tệp `.csv` mã hóa UTF-8 BOM mở trực tiếp được trên Microsoft Excel tiếng Việt.
- **Biểu đồ 24 biến**: Chuyển đổi giữa 3 góc nhìn: Phân rã Ô lỗi duy nhất, Cơ cấu 3 loại lượt lỗi, và Tỷ lệ % ô điền khuyết trên `PJ21.csv`.
- *Liên kết nhanh:* Nhấp vào tên biến bất kỳ trong bảng Kiểm toán để nhảy thẳng sang **Phần 4** xem ví dụ thực tế của biến đó.

### Phần 4. Ví dụ Thực tế Trước & Sau theo Cùng `ID`
- Chọn bất kỳ biến nào trong 24 biến và lọc theo bản chất xử lý:
  - **Chuẩn hóa (Giữ gốc)**: Cắt khoảng trắng, chuẩn hóa hoa/thường, khôi phục chuỗi cắt cụt (`'  Busine'` → `Business Travel`), bỏ hậu tố đơn vị (`'853 VND'` → `853`).
  - **Điền khuyết (Thiếu)**: Điền Mode, Trung vị hoặc gán `'Unknown'` cho ô trống / mã thiếu ẩn (`'N/A'`, `'?'`, `'-'`, `'null'`, `'chưa rõ'`).
  - **Điền khuyết (Ngoài miền)** & **Trùng 2 lỗi**: Lọc giá trị ngoài miền `BOUNDS` (`'9999'`, `'-1'`, `'770.0'`, `'9999 %'`) thành `NaN` rồi điền trung vị.
- **Hồ sơ Đối chiếu 24 Biến của Hành khách theo `ID`**: Nhấp vào bất kỳ nút `ID = ...` nào trong bảng (hoặc chọn từ danh sách 164 `ID` thực tế) để xem toàn bộ 24 cột Trước → Sau của hành khách đó ở khung bên phải.

### Phần 5. Khám phá Dữ liệu (EDA) & Kiểm định Giả thuyết (RQ1, RQ2, RQ3)
- **Phân hệ 5A (RQ1 — Phân khúc & Chi-square)**: Chuyển đổi giữa `So sánh Song song`, `Toàn tập PJ21.csv (n = 119.092)` và `Chỉ ô quan sát hợp lệ`. Hiển thị rõ hiệu ứng điền Mode làm giảm tỷ lệ hài lòng của `Class = Business` từ `69,45%` xuống `65,69%` và bảng kiểm định Pearson Chi-square / Cramér's $V$.
- **Phân hệ 5B (RQ2 — Độ trễ, Tuổi & Mann–Whitney U)**: Chuyển đổi giữa chế độ **Phân rã nhóm `0 phút` (6 cột chuẩn Hình 3.3)**, **Chỉ ô quan sát** (`n = 77.678` khởi hành; `n = 111.054` đến) và **Toàn tập `PJ21.csv`**. Kèm biểu đồ phân bố tuổi (làm rõ đỉnh đột biến tại 40 tuổi do `9.012` ô điền trung vị `40`), boxplot $\log(1 + \text{Arrival Delay})$ và bảng kiểm định Mann–Whitney U ($r_{rb} = -0,0658$ và $-0,1058$).
- **Phân hệ 5C (RQ3 — Tương quan Spearman 14 Điểm Dịch vụ & Heatmap $15 \times 15$)**: Chuyển đổi giữa **(1) Giữ mã 0**, **(2) Loại mã 0 (`0 → NaN`)**, **(3) Chỉ ô quan sát trước điền khuyết**, và **So sánh cả 3 phương án**. Làm nổi bật sự dịch chuyển thứ hạng của `In-flight Wifi Service` (`#6 → #3` khi bỏ mã 0) và `Cleanliness` (`#6` quan sát → `#8` trên `PJ21.csv` do `32,28%` ô điền trung vị `3`). Ma trận nhiệt $15 \times 15$ cho phép di chuột xem hệ số $\rho$ chi tiết của từng cặp biến.

### Phần 6. Nguồn Dữ liệu, Mã băm SHA-256 & Giới hạn Suy luận
- Hiển thị mã băm **SHA-256** đầy đủ của `Data/raw/Du lieu khong sach.csv` và `Data/processed/PJ21.csv` kèm nút sao chép nhanh.
- Bảng kiểm chứng 8 đẳng thức toán học (khớp 100%).
- Bảng truy xuất nguồn gốc từng bảng/biểu đồ về tệp thực tế trong `outputs/chuong3/` và các mục trong `outputs/chuong3_ban_thao.qmd`.
- Tổng hợp 4 giới hạn dữ liệu/phương pháp luận và 4 hàm ý thiết kế `Pipeline` chống rò rỉ dữ liệu cho Chương 4.
