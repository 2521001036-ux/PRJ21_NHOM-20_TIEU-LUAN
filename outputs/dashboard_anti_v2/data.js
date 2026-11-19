window.PRJ21_DATA = {
  "meta": {
    "project": "PRJ 21 — Phân tích Mức độ Hài lòng và Hành vi của Hành khách Hàng không",
    "chapter": "Chương 3: Tổ chức, xử lý và khám phá dữ liệu (EDA & Kiểm định)",
    "dataset_raw": "Data/raw/Du lieu khong sach.csv",
    "dataset_clean": "Data/processed/PJ21.csv",
    "generated_at": "2026-11-19"
  },
  "overview": {
    "rows_raw": 129880,
    "rows_clean": 119092,
    "rows_dropped": 10788,
    "kept_pct": 91.69,
    "dropped_pct": 8.31,
    "columns": 24,
    "cells_raw": 3117120,
    "cells_clean": 2858208,
    "cells_dropped": 258912,
    "missing_csv_raw": 269947,
    "missing_hidden_raw": 140667,
    "missing_total_raw": 410614,
    "format_errors_raw": 419228,
    "outlier_errors_raw": 128076,
    "overlap_fmt_out_raw": 37748,
    "total_error_occurrences_raw": 957918,
    "unique_error_cells_raw": 920170,
    "unique_error_cells_raw_pct": 29.52,
    "unique_error_cells_dropped_rows": 83037,
    "unique_error_cells_fixed_kept_rows": 837133,
    "total_imputed_or_unknown_pj21": 483994,
    "errors_after_clean": 0,
    "satisfied_count": 51740,
    "dissatisfied_count": 67352,
    "rate_satisfied_pct": 43.45,
    "rate_dissatisfied_pct": 56.55,
    "memory_raw_mib": 151.36,
    "memory_before_mib": 51.47,
    "memory_after_mib": 3.41,
    "memory_reduction_pct": 93.38
  },
  "pipeline_steps": [
    {
      "step": 1,
      "title": "Tiếp nhận dữ liệu bẩn & kiểm toán sơ bộ từng ô",
      "tag": "Đầu vào: 129.880 dòng × 24 cột (3.117.120 ô)",
      "errors": "Phát hiện 957.918 lượt lỗi trên 920.170 ô lỗi duy nhất (29,52% tổng số ô), gồm 410.614 ô thiếu (269.947 ô trống + 140.667 mã thiếu ẩn), 419.228 lượt sai định dạng và 128.076 lượt ngoài miền (37.748 ô trùng cả 2 lỗi).",
      "rule": "Nạp tệp với dtype={'ID': str}, loại cột Unnamed nếu có, chuẩn hóa tên cột và chạy hàm kiem_toan_tung_o() quét thực tế từng ô.",
      "reason": "Tránh việc Pandas tự ép kiểu sai hoặc bỏ sót ký hiệu báo thiếu ẩn ('?', '-', 'unknown', 'chưa rõ', 'null', 'none', 'n/a', 'nan') trước khi làm sạch.",
      "result": "Khóa ID duy nhất 100% (129.880 mã, 0 dòng trùng lặp), lập được bảng đối chiếu lỗi đầy đủ 24 biến trước xử lý.",
      "source_ref": "lam_sach_du_lieu.py (dòng 161–225) & outputs/chuong3/kiem_tra_chat_luong.csv"
    },
    {
      "step": 2,
      "title": "Chuẩn hóa 5 cột phân loại theo bảng ánh xạ ALL_MAPS",
      "tag": "Gender, Customer Type, Type of Travel, Class, Satisfaction",
      "errors": "187.341 lượt sai định dạng ở 5 cột phân loại: khoảng trắng thừa, chữ hoa/thường lẫn lộn và chuỗi bị cắt cụt như '  Fema', '  Busine', '  Returnin', '  Economy Pl', 'Neutral or Dissatisfi'.",
      "rule": "Áp dụng normalize_cat(): nhận diện mã thiếu ẩn -> NaN; cắt khoảng trắng, chuyển chữ thường, ánh xạ trực tiếp hoặc khớp tiền tố cắt cụt theo ALL_MAPS.",
      "reason": "Hợp nhất đúng các biến thể chính tả về đúng nhãn nghiệp vụ chuẩn mà không làm mất thông tin quan sát thật.",
      "result": "Khôi phục chính xác 5 tập nhãn chuẩn; ví dụ 38.315 ô Satisfaction sai định dạng trên các dòng giữ lại được chuẩn hóa hoàn chỉnh.",
      "source_ref": "lam_sach_du_lieu.py (dòng 65–158, 227–229)"
    },
    {
      "step": 3,
      "title": "Trích xuất số & lọc ngoài miền quy ước (BOUNDS) trên 18 cột số",
      "tag": "4 biến vận hành + 14 điểm dịch vụ [0, 5]",
      "errors": "221.403 lượt sai định dạng ở 18 cột số (hậu tố giả 'USD', 'VND', 'đ', 'kg', '%', đuôi '.0') và 128.076 lượt ngoài miền (-1, số âm, 9999, độ trễ > 2.000 phút, điểm ngoài [0, 5]).",
      "rule": "Dùng regex extract_number() trích số đầu tiên; chuyển giá trị vi phạm BOUNDS thành NaN: Age ngoài (0; 100], Flight Distance ngoài (0; 9.999), Delay ngoài [0; 2.000], 14 điểm dịch vụ ngoài [0; 5].",
      "reason": "Gỡ nhiễu ký tự đơn vị mà không suy đoán quy đổi đơn vị hay tự ý đảo dấu số âm không rõ nguồn gốc.",
      "result": "Giữ lại toàn bộ giá trị số hợp lệ trong miền quy ước; các ô ngoài miền chuyển sang NaN để xử lý minh bạch ở bước điền khuyết.",
      "source_ref": "lam_sach_du_lieu.py (dòng 55–62, 139–145, 231–245)"
    },
    {
      "step": 4,
      "title": "Loại bỏ 10.788 dòng thiếu biến mục tiêu Satisfaction",
      "tag": "129.880 dòng → 119.092 dòng (giữ lại 91,69%)",
      "errors": "10.788 dòng (8,31%) có Satisfaction trống (6.828 dòng) hoặc mang mã thiếu ẩn (3.960 dòng), kéo theo 83.037 ô lỗi duy nhất nằm trên các dòng này.",
      "rule": "df = df[df['Satisfaction'].notna()].copy() — loại bỏ hoàn toàn các dòng thiếu nhãn mục tiêu thay vì điền Mode.",
      "reason": "Bảo đảm 100% nhãn mục tiêu dùng cho EDA, kiểm định thống kê và huấn luyện học máy ở Chương 4 là nhãn quan sát thực tế, không tạo nhãn nhân tạo.",
      "result": "Còn lại 119.092 dòng hợp lệ (51.740 Satisfied = 43,45%; 67.352 Neutral or Dissatisfied = 56,55%), vượt mốc tối thiểu 100.000 quan sát của học phần.",
      "source_ref": "lam_sach_du_lieu.py (dòng 247–251) & outputs/chuong3/nguon_goc_nhan.csv"
    },
    {
      "step": 5,
      "title": "Điền khuyết toàn cục trên 119.092 dòng giữ lại",
      "tag": "483.994 ô điền khuyết / gán nhãn Unknown",
      "errors": "Các ô thiếu và ô ngoài miền sau khi chuyển thành NaN trên 119.092 dòng giữ lại (từ 6,75% ở Arrival Delay đến 34,77% ở Departure Delay và 38,30% ở Type of Travel).",
      "rule": "Mode cho Gender (Female) & Class (Business); nhãn riêng 'Unknown' cho Customer Type (40.408 ô) & Type of Travel (45.607 ô); trung vị làm tròn nguyên int64 cho 4 biến vận hành (Age=40, Flight Distance=846, Delay=0) và 14 biến dịch vụ (8 biến điền 3; 6 biến điền 4).",
      "reason": "Tách riêng nhóm Unknown cho hai biến khuyết >33% để không bóp méo nhóm đa số; dùng trung vị chống nhiễu lệch phải ở biến số. Ghi nhận rõ tác động co phương sai và kiểm tra độ nhạy ở phần EDA.",
      "result": "Hoàn thiện bảng không còn giá trị NaN; toàn bộ 837.133 ô lỗi duy nhất trên 119.092 dòng giữ lại đã được xử lý.",
      "source_ref": "lam_sach_du_lieu.py (dòng 253–260) & Bảng 3.4 Chương 3"
    },
    {
      "step": 6,
      "title": "Chuẩn hóa kiểu ID, tối ưu bộ nhớ & kiểm toán thực tế sau xử lý",
      "tag": "0 lỗi sau xử lý | Tiết kiệm 93,38% RAM DataFrame",
      "errors": "9.631 ô ID sai định dạng (khoảng trắng thừa) trên dòng giữ lại; dung lượng DataFrame chuỗi ban đầu chiếm 151,36 MiB.",
      "rule": "Ép ID sang int64, làm sạch khoảng trắng văn bản, chạy pd.testing.assert_frame_equal() đối chiếu PJ21.csv và chạy kiem_toan_tung_o(df, la_sau_xu_ly=True); thử nghiệm ép kiểu category + downcast integer.",
      "reason": "Không gán cứng số lỗi sau xử lý bằng 0 mà phải kiểm toán thực tế từng ô và chứng minh khả năng tái lập tuyệt đối 100%.",
      "result": "0 ô thiếu, 0 ô sai định dạng, 0 ô ngoài miền trên 2.858.208 ô của PJ21.csv; tối ưu bộ nhớ DataFrame từ 51,47 MiB xuống 3,41 MiB (giảm 93,38%).",
      "source_ref": "lam_sach_du_lieu.py (dòng 261–327) & src/phan_tich_chuong3.py (dòng 405–415)"
    }
  ],
  "audit_24": [
    {
      "bien": "ID",
      "nhom": "Khóa định danh",
      "thieu_csv": 0,
      "thieu_tong": 0,
      "ty_le_thieu_pct": 0.0,
      "sai_dinh_dang": 10484,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 10484,
      "o_loi_duy_nhat": 10484,
      "thuoc_dong_loai": 853,
      "duoc_sua_giu_lai": 9631,
      "gia_tri_dien": "Không điền",
      "so_o_dien": 0,
      "ty_le_dien_pct": 0.0,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Gender",
      "nhom": "Phân loại",
      "thieu_csv": 6474,
      "thieu_tong": 10347,
      "ty_le_thieu_pct": 7.97,
      "sai_dinh_dang": 21763,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 32110,
      "o_loi_duy_nhat": 32110,
      "thuoc_dong_loai": 2581,
      "duoc_sua_giu_lai": 29529,
      "gia_tri_dien": "Female",
      "so_o_dien": 9517,
      "ty_le_dien_pct": 7.99,
      "loi_sau": 0,
      "kieu_sau": "str"
    },
    {
      "bien": "Age",
      "nhom": "Định lượng vận hành",
      "thieu_csv": 3524,
      "thieu_tong": 5283,
      "ty_le_thieu_pct": 4.07,
      "sai_dinh_dang": 8919,
      "ngoai_mien": 4574,
      "trung_2_loi": 2831,
      "tong_luot_loi": 18776,
      "o_loi_duy_nhat": 15945,
      "thuoc_dong_loai": 1332,
      "duoc_sua_giu_lai": 14613,
      "gia_tri_dien": "40",
      "so_o_dien": 9012,
      "ty_le_dien_pct": 7.57,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Customer Type",
      "nhom": "Phân loại",
      "thieu_csv": 27548,
      "thieu_tong": 44050,
      "ty_le_thieu_pct": 33.92,
      "sai_dinh_dang": 56288,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 100338,
      "o_loi_duy_nhat": 100338,
      "thuoc_dong_loai": 8308,
      "duoc_sua_giu_lai": 92030,
      "gia_tri_dien": "Unknown",
      "so_o_dien": 40408,
      "ty_le_dien_pct": 33.93,
      "loi_sau": 0,
      "kieu_sau": "str"
    },
    {
      "bien": "Type of Travel",
      "nhom": "Phân loại",
      "thieu_csv": 31172,
      "thieu_tong": 49684,
      "ty_le_thieu_pct": 38.25,
      "sai_dinh_dang": 44719,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 94403,
      "o_loi_duy_nhat": 94403,
      "thuoc_dong_loai": 7833,
      "duoc_sua_giu_lai": 86570,
      "gia_tri_dien": "Unknown",
      "so_o_dien": 45607,
      "ty_le_dien_pct": 38.3,
      "loi_sau": 0,
      "kieu_sau": "str"
    },
    {
      "bien": "Class",
      "nhom": "Phân loại",
      "thieu_csv": 6237,
      "thieu_tong": 9930,
      "ty_le_thieu_pct": 7.65,
      "sai_dinh_dang": 26256,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 36186,
      "o_loi_duy_nhat": 36186,
      "thuoc_dong_loai": 2984,
      "duoc_sua_giu_lai": 33202,
      "gia_tri_dien": "Business",
      "so_o_dien": 9113,
      "ty_le_dien_pct": 7.65,
      "loi_sau": 0,
      "kieu_sau": "str"
    },
    {
      "bien": "Flight Distance",
      "nhom": "Định lượng vận hành",
      "thieu_csv": 11039,
      "thieu_tong": 16672,
      "ty_le_thieu_pct": 12.84,
      "sai_dinh_dang": 16178,
      "ngoai_mien": 8203,
      "trung_2_loi": 2555,
      "tong_luot_loi": 41053,
      "o_loi_duy_nhat": 38498,
      "thuoc_dong_loai": 3177,
      "duoc_sua_giu_lai": 35321,
      "gia_tri_dien": "846",
      "so_o_dien": 22791,
      "ty_le_dien_pct": 19.14,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Departure Delay",
      "nhom": "Định lượng vận hành",
      "thieu_csv": 22504,
      "thieu_tong": 33846,
      "ty_le_thieu_pct": 26.06,
      "sai_dinh_dang": 5407,
      "ngoai_mien": 11363,
      "trung_2_loi": 232,
      "tong_luot_loi": 50616,
      "o_loi_duy_nhat": 50384,
      "thuoc_dong_loai": 4229,
      "duoc_sua_giu_lai": 46155,
      "gia_tri_dien": "0",
      "so_o_dien": 41414,
      "ty_le_dien_pct": 34.77,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Arrival Delay",
      "nhom": "Định lượng vận hành",
      "thieu_csv": 4231,
      "thieu_tong": 6211,
      "ty_le_thieu_pct": 4.78,
      "sai_dinh_dang": 9740,
      "ngoai_mien": 2531,
      "trung_2_loi": 575,
      "tong_luot_loi": 18482,
      "o_loi_duy_nhat": 17907,
      "thuoc_dong_loai": 1415,
      "duoc_sua_giu_lai": 16492,
      "gia_tri_dien": "0",
      "so_o_dien": 8038,
      "ty_le_dien_pct": 6.75,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Departure and Arrival Time Convenience",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 9636,
      "thieu_tong": 13469,
      "ty_le_thieu_pct": 10.37,
      "sai_dinh_dang": 0,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 13469,
      "o_loi_duy_nhat": 13469,
      "thuoc_dong_loai": 1087,
      "duoc_sua_giu_lai": 12382,
      "gia_tri_dien": "3",
      "so_o_dien": 12382,
      "ty_le_dien_pct": 10.4,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Ease of Online Booking",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 18566,
      "thieu_tong": 27747,
      "ty_le_thieu_pct": 21.36,
      "sai_dinh_dang": 8393,
      "ngoai_mien": 10930,
      "trung_2_loi": 1644,
      "tong_luot_loi": 47070,
      "o_loi_duy_nhat": 45426,
      "thuoc_dong_loai": 3824,
      "duoc_sua_giu_lai": 41602,
      "gia_tri_dien": "3",
      "so_o_dien": 35423,
      "ty_le_dien_pct": 29.74,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Check-in Service",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 5900,
      "thieu_tong": 8839,
      "ty_le_thieu_pct": 6.81,
      "sai_dinh_dang": 12125,
      "ngoai_mien": 6352,
      "trung_2_loi": 3326,
      "tong_luot_loi": 27316,
      "o_loi_duy_nhat": 23990,
      "thuoc_dong_loai": 1968,
      "duoc_sua_giu_lai": 22022,
      "gia_tri_dien": "3",
      "so_o_dien": 13948,
      "ty_le_dien_pct": 11.71,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Online Boarding",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 16706,
      "thieu_tong": 25123,
      "ty_le_thieu_pct": 19.34,
      "sai_dinh_dang": 14511,
      "ngoai_mien": 9732,
      "trung_2_loi": 1432,
      "tong_luot_loi": 49366,
      "o_loi_duy_nhat": 47934,
      "thuoc_dong_loai": 3974,
      "duoc_sua_giu_lai": 43960,
      "gia_tri_dien": "3",
      "so_o_dien": 31958,
      "ty_le_dien_pct": 26.83,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Gate Location",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 13097,
      "thieu_tong": 19628,
      "ty_le_thieu_pct": 15.11,
      "sai_dinh_dang": 17888,
      "ngoai_mien": 9483,
      "trung_2_loi": 2962,
      "tong_luot_loi": 46999,
      "o_loi_duy_nhat": 44037,
      "thuoc_dong_loai": 3688,
      "duoc_sua_giu_lai": 40349,
      "gia_tri_dien": "3",
      "so_o_dien": 26671,
      "ty_le_dien_pct": 22.4,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "On-board Service",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 3799,
      "thieu_tong": 5665,
      "ty_le_thieu_pct": 4.36,
      "sai_dinh_dang": 11481,
      "ngoai_mien": 4701,
      "trung_2_loi": 2828,
      "tong_luot_loi": 21847,
      "o_loi_duy_nhat": 19019,
      "thuoc_dong_loai": 1613,
      "duoc_sua_giu_lai": 17406,
      "gia_tri_dien": "4",
      "so_o_dien": 9500,
      "ty_le_dien_pct": 7.98,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Seat Comfort",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 8539,
      "thieu_tong": 12671,
      "ty_le_thieu_pct": 9.76,
      "sai_dinh_dang": 8737,
      "ngoai_mien": 5999,
      "trung_2_loi": 1860,
      "tong_luot_loi": 27407,
      "o_loi_duy_nhat": 25547,
      "thuoc_dong_loai": 2110,
      "duoc_sua_giu_lai": 23437,
      "gia_tri_dien": "4",
      "so_o_dien": 17119,
      "ty_le_dien_pct": 14.37,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Leg Room Service",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 3301,
      "thieu_tong": 4943,
      "ty_le_thieu_pct": 3.81,
      "sai_dinh_dang": 19692,
      "ngoai_mien": 4178,
      "trung_2_loi": 2621,
      "tong_luot_loi": 28813,
      "o_loi_duy_nhat": 26192,
      "thuoc_dong_loai": 2204,
      "duoc_sua_giu_lai": 23988,
      "gia_tri_dien": "4",
      "so_o_dien": 8338,
      "ty_le_dien_pct": 7.0,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Cleanliness",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 19909,
      "thieu_tong": 29690,
      "ty_le_thieu_pct": 22.86,
      "sai_dinh_dang": 9924,
      "ngoai_mien": 12182,
      "trung_2_loi": 2288,
      "tong_luot_loi": 51796,
      "o_loi_duy_nhat": 49508,
      "thuoc_dong_loai": 4067,
      "duoc_sua_giu_lai": 45441,
      "gia_tri_dien": "3",
      "so_o_dien": 38441,
      "ty_le_dien_pct": 32.28,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Food and Drink",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 16796,
      "thieu_tong": 25068,
      "ty_le_thieu_pct": 19.3,
      "sai_dinh_dang": 15638,
      "ngoai_mien": 9674,
      "trung_2_loi": 1305,
      "tong_luot_loi": 50380,
      "o_loi_duy_nhat": 49075,
      "thuoc_dong_loai": 4051,
      "duoc_sua_giu_lai": 45024,
      "gia_tri_dien": "3",
      "so_o_dien": 31902,
      "ty_le_dien_pct": 26.79,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "In-flight Service",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 4514,
      "thieu_tong": 6714,
      "ty_le_thieu_pct": 5.17,
      "sai_dinh_dang": 18897,
      "ngoai_mien": 5346,
      "trung_2_loi": 3131,
      "tong_luot_loi": 30957,
      "o_loi_duy_nhat": 27826,
      "thuoc_dong_loai": 2324,
      "duoc_sua_giu_lai": 25502,
      "gia_tri_dien": "4",
      "so_o_dien": 11043,
      "ty_le_dien_pct": 9.27,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "In-flight Wifi Service",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 11502,
      "thieu_tong": 17261,
      "ty_le_thieu_pct": 13.29,
      "sai_dinh_dang": 13091,
      "ngoai_mien": 8187,
      "trung_2_loi": 2304,
      "tong_luot_loi": 38539,
      "o_loi_duy_nhat": 36235,
      "thuoc_dong_loai": 3018,
      "duoc_sua_giu_lai": 33217,
      "gia_tri_dien": "3",
      "so_o_dien": 23318,
      "ty_le_dien_pct": 19.58,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "In-flight Entertainment",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 5043,
      "thieu_tong": 7537,
      "ty_le_thieu_pct": 5.8,
      "sai_dinh_dang": 12716,
      "ngoai_mien": 5214,
      "trung_2_loi": 2819,
      "tong_luot_loi": 25467,
      "o_loi_duy_nhat": 22648,
      "thuoc_dong_loai": 1843,
      "duoc_sua_giu_lai": 20805,
      "gia_tri_dien": "4",
      "so_o_dien": 11683,
      "ty_le_dien_pct": 9.81,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Baggage Handling",
      "nhom": "Điểm dịch vụ [0–5]",
      "thieu_csv": 13082,
      "thieu_tong": 19448,
      "ty_le_thieu_pct": 14.97,
      "sai_dinh_dang": 18066,
      "ngoai_mien": 9427,
      "trung_2_loi": 3035,
      "tong_luot_loi": 46941,
      "o_loi_duy_nhat": 43906,
      "thuoc_dong_loai": 3766,
      "duoc_sua_giu_lai": 40140,
      "gia_tri_dien": "4",
      "so_o_dien": 26368,
      "ty_le_dien_pct": 22.14,
      "loi_sau": 0,
      "kieu_sau": "int64"
    },
    {
      "bien": "Satisfaction",
      "nhom": "Biến mục tiêu",
      "thieu_csv": 6828,
      "thieu_tong": 10788,
      "ty_le_thieu_pct": 8.31,
      "sai_dinh_dang": 38315,
      "ngoai_mien": 0,
      "trung_2_loi": 0,
      "tong_luot_loi": 49103,
      "o_loi_duy_nhat": 49103,
      "thuoc_dong_loai": 10788,
      "duoc_sua_giu_lai": 38315,
      "gia_tri_dien": "Không điền",
      "so_o_dien": 0,
      "ty_le_dien_pct": 0.0,
      "loi_sau": 0,
      "kieu_sau": "str"
    }
  ],
  "real_examples": {
    "ID": {
      "examples": [
        {
          "id": 10,
          "before": "'  10'",
          "after": "10",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        },
        {
          "id": 11,
          "before": "' 11'",
          "after": "11",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        },
        {
          "id": 13,
          "before": "' 13'",
          "after": "13",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        },
        {
          "id": 15,
          "before": "'  15'",
          "after": "15",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        },
        {
          "id": 17,
          "before": "'  17'",
          "after": "17",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        },
        {
          "id": 25,
          "before": "'  25'",
          "after": "25",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        },
        {
          "id": 38,
          "before": "'  38'",
          "after": "38",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng thừa / bỏ đuôi .0 và ép kiểu int64; không điền khuyết khóa ID."
        }
      ],
      "has_standardize": true,
      "has_impute": false,
      "note": "Cột ID có 0 ô thiếu và 0 ô ngoài miền; chỉ phát sinh 10.484 lượt sai định dạng (khoảng trắng thừa) được chuẩn hóa sang int64."
    },
    "Gender": {
      "examples": [
        {
          "id": 16,
          "before": "'MALE'",
          "after": "Male",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 17,
          "before": "'FEMALE'",
          "after": "Female",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 27,
          "before": "'Male  '",
          "after": "Male",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 49,
          "before": "'male'",
          "after": "Male",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 57,
          "before": "'female'",
          "after": "Female",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 5,
          "before": "'NULL'",
          "after": "Female",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Female)."
        },
        {
          "id": 20,
          "before": "'chưa rõ'",
          "after": "Female",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Female)."
        },
        {
          "id": 24,
          "before": "'?'",
          "after": "Female",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Female)."
        },
        {
          "id": 42,
          "before": "'N/A'",
          "after": "Female",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Female)."
        },
        {
          "id": 46,
          "before": "(Trống / NaN)",
          "after": "Female",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Female)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép trực tiếp theo khóa ID duy nhất: phân tách rõ chuẩn hóa chuỗi lỗi định dạng và điền khuyết."
    },
    "Age": {
      "examples": [
        {
          "id": 62,
          "before": "'31 USD'",
          "after": "31",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 97,
          "before": "'18 đ'",
          "after": "18",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 110,
          "before": "'27 %'",
          "after": "27",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 276,
          "before": "'43 kg'",
          "after": "43",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 296,
          "before": "'47 kg'",
          "after": "47",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 24,
          "before": "'770.0'",
          "after": "40",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (40)."
        },
        {
          "id": 36,
          "before": "'-42.0'",
          "after": "40",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (40)."
        },
        {
          "id": 50,
          "before": "'-27.0'",
          "after": "40",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (40)."
        },
        {
          "id": 7,
          "before": "(Trống / NaN)",
          "after": "40",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (40)."
        },
        {
          "id": 12,
          "before": "'-'",
          "after": "40",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (40)."
        },
        {
          "id": 120,
          "before": "'N/A'",
          "after": "40",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (40)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 40 cho ô thiếu hoặc ngoài miền)."
    },
    "Customer Type": {
      "examples": [
        {
          "id": 8,
          "before": "'Returning '",
          "after": "Returning Customer",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 13,
          "before": "'FIRST-TIME'",
          "after": "First-time Customer",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 17,
          "before": "'RETURNING'",
          "after": "Returning Customer",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 21,
          "before": "'  Returnin'",
          "after": "Returning Customer",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 24,
          "before": "'returning'",
          "after": "Returning Customer",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 2,
          "before": "'unknown'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 4,
          "before": "'None'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 5,
          "before": "'?'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 10,
          "before": "(Trống / NaN)",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 15,
          "before": "'null'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép trực tiếp theo khóa ID duy nhất: phân tách rõ chuẩn hóa chuỗi lỗi định dạng và gán nhãn unknown."
    },
    "Type of Travel": {
      "examples": [
        {
          "id": 5,
          "before": "'BUSINESS'",
          "after": "Business Travel",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 9,
          "before": "'  Busine'",
          "after": "Business Travel",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 14,
          "before": "'personal'",
          "after": "Personal Travel",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 17,
          "before": "'  Person'",
          "after": "Personal Travel",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 34,
          "before": "'business'",
          "after": "Business Travel",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 4,
          "before": "'N/A'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 10,
          "before": "'chưa rõ'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 12,
          "before": "'None'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 13,
          "before": "'null'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        },
        {
          "id": 19,
          "before": "'?'",
          "after": "Unknown",
          "action": "Gán nhãn Unknown",
          "detail": "Ô thiếu/mã thiếu ẩn (>33%) được gán danh mục riêng 'Unknown' để tránh phóng đại nhóm đa số."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép trực tiếp theo khóa ID duy nhất: phân tách rõ chuẩn hóa chuỗi lỗi định dạng và gán nhãn unknown."
    },
    "Class": {
      "examples": [
        {
          "id": 11,
          "before": "'Business   '",
          "after": "Business",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 15,
          "before": "'Economy   '",
          "after": "Economy",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 30,
          "before": "'business'",
          "after": "Business",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 32,
          "before": "'  Economy'",
          "after": "Economy",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 44,
          "before": "'  Business'",
          "after": "Business",
          "action": "Chuẩn hóa",
          "detail": "Chuẩn hóa chuỗi phân loại (cắt khoảng trắng, hoa-thường, ánh xạ tiền tố cắt cụt) theo ALL_MAPS."
        },
        {
          "id": 16,
          "before": "'chưa rõ'",
          "after": "Business",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Business)."
        },
        {
          "id": 28,
          "before": "'?'",
          "after": "Business",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Business)."
        },
        {
          "id": 39,
          "before": "'NULL'",
          "after": "Business",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Business)."
        },
        {
          "id": 53,
          "before": "'unknown'",
          "after": "Business",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Business)."
        },
        {
          "id": 94,
          "before": "(Trống / NaN)",
          "after": "Business",
          "action": "Điền khuyết",
          "detail": "Ô thiếu/mã thiếu ẩn (<8%) được điền Mode toàn tập trên 119.092 dòng (Business)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép trực tiếp theo khóa ID duy nhất: phân tách rõ chuẩn hóa chuỗi lỗi định dạng và điền khuyết."
    },
    "Flight Distance": {
      "examples": [
        {
          "id": 8,
          "before": "'853 VND'",
          "after": "853",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 10,
          "before": "'2822 đ'",
          "after": "2822",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 13,
          "before": "'453 USD'",
          "after": "453",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 28,
          "before": "'2867 kg'",
          "after": "2867",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 36,
          "before": "'2884 %'",
          "after": "2884",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 16,
          "before": "'9999'",
          "after": "846",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (846)."
        },
        {
          "id": 68,
          "before": "'-173.0'",
          "after": "846",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (846)."
        },
        {
          "id": 90,
          "before": "'-1'",
          "after": "846",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (846)."
        },
        {
          "id": 5,
          "before": "'None'",
          "after": "846",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (846)."
        },
        {
          "id": 26,
          "before": "'?'",
          "after": "846",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (846)."
        },
        {
          "id": 55,
          "before": "'N/A'",
          "after": "846",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (846)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 846 cho ô thiếu hoặc ngoài miền)."
    },
    "Departure Delay": {
      "examples": [
        {
          "id": 121,
          "before": "'0 USD'",
          "after": "0",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 154,
          "before": "'0 %'",
          "after": "0",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 157,
          "before": "'0 kg'",
          "after": "0",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 163,
          "before": "'60.0'",
          "after": "60",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 230,
          "before": "'6 USD'",
          "after": "6",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 7,
          "before": "'9999'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (0)."
        },
        {
          "id": 13,
          "before": "'-1'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (0)."
        },
        {
          "id": 837,
          "before": "'7000.0'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (0)."
        },
        {
          "id": 2,
          "before": "'N/A'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (0)."
        },
        {
          "id": 4,
          "before": "'-'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (0)."
        },
        {
          "id": 16,
          "before": "(Trống / NaN)",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (0)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 0 cho ô thiếu hoặc ngoài miền)."
    },
    "Arrival Delay": {
      "examples": [
        {
          "id": 25,
          "before": "'2 đ'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 32,
          "before": "'0 kg'",
          "after": "0",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 44,
          "before": "'1 %'",
          "after": "1",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 74,
          "before": "'1 USD'",
          "after": "1",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 103,
          "before": "'0 USD'",
          "after": "0",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 60,
          "before": "'9999'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (0)."
        },
        {
          "id": 123,
          "before": "'-1'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (0)."
        },
        {
          "id": 840,
          "before": "'-4.0'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (0)."
        },
        {
          "id": 35,
          "before": "'N/A'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (0)."
        },
        {
          "id": 61,
          "before": "(Trống / NaN)",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (0)."
        },
        {
          "id": 75,
          "before": "'?'",
          "after": "0",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (0)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 0 cho ô thiếu hoặc ngoài miền)."
    },
    "Departure and Arrival Time Convenience": {
      "examples": [
        {
          "id": 42,
          "before": "'NULL'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 43,
          "before": "'-'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 57,
          "before": "(Trống / NaN)",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": false,
      "has_impute": true,
      "note": "Biến này có 0 lượt sai định dạng và 0 lượt ngoài miền trong dữ liệu bẩn; chỉ phát sinh các ví dụ Điền khuyết (trung vị = 3)."
    },
    "Ease of Online Booking": {
      "examples": [
        {
          "id": 35,
          "before": "'2 %'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 62,
          "before": "'5 đ'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 115,
          "before": "'3 kg'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 129,
          "before": "'4 %'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 150,
          "before": "'2 kg'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 42,
          "before": "'-1'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 50,
          "before": "'9999'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 54,
          "before": "'3000.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 2,
          "before": "'?'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 6,
          "before": "'-'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 11,
          "before": "'null'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "Check-in Service": {
      "examples": [
        {
          "id": 5,
          "before": "'3 VND'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 69,
          "before": "'4 đ'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 96,
          "before": "'3 kg'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 121,
          "before": "'1 đ'",
          "after": "1",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 200,
          "before": "'3 đ'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 44,
          "before": "'9999'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 59,
          "before": "'50.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 73,
          "before": "'30.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 4,
          "before": "'?'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 6,
          "before": "'N/A'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 79,
          "before": "'-'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "Online Boarding": {
      "examples": [
        {
          "id": 7,
          "before": "'4 %'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 9,
          "before": "'2 đ'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 10,
          "before": "'5 USD'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 17,
          "before": "'5 %'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 19,
          "before": "'3 kg'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 1,
          "before": "'9999'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 4,
          "before": "'-1'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 42,
          "before": "'5000.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 11,
          "before": "'?'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 28,
          "before": "'null'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 31,
          "before": "'None'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "Gate Location": {
      "examples": [
        {
          "id": 2,
          "before": "'2 kg'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 5,
          "before": "'3 USD'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 13,
          "before": "'4 USD'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 16,
          "before": "'1 %'",
          "after": "1",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 29,
          "before": "'4 kg'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 74,
          "before": "'4000.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 80,
          "before": "'-1'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 111,
          "before": "'200.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 4,
          "before": "'-'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 14,
          "before": "(Trống / NaN)",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 45,
          "before": "'?'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "On-board Service": {
      "examples": [
        {
          "id": 2,
          "before": "'5 đ'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 14,
          "before": "'4 đ'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 22,
          "before": "'1 USD'",
          "after": "1",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 53,
          "before": "'4 %'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 115,
          "before": "'3 kg'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 67,
          "before": "'50.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 89,
          "before": "'100.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 147,
          "before": "'9999'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 12,
          "before": "'-'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 24,
          "before": "'null'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 232,
          "before": "'None'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 4 cho ô thiếu hoặc ngoài miền)."
    },
    "Seat Comfort": {
      "examples": [
        {
          "id": 31,
          "before": "'2 %'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 41,
          "before": "'4 đ'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 60,
          "before": "'5 đ'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 85,
          "before": "'2 đ'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 101,
          "before": "'4 VND'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 4,
          "before": "'-1'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 42,
          "before": "'9999'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 83,
          "before": "'-4.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 5,
          "before": "'null'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 6,
          "before": "'-'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 22,
          "before": "'N/A'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 4 cho ô thiếu hoặc ngoài miền)."
    },
    "Leg Room Service": {
      "examples": [
        {
          "id": 2,
          "before": "'5 VND'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 5,
          "before": "'4 đ'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 8,
          "before": "'4 USD'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 10,
          "before": "'5 kg'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 14,
          "before": "'3 VND'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 145,
          "before": "'9999'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 177,
          "before": "'400.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 223,
          "before": "'-1'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 42,
          "before": "'?'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 47,
          "before": "(Trống / NaN)",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 82,
          "before": "'None'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 4 cho ô thiếu hoặc ngoài miền)."
    },
    "Cleanliness": {
      "examples": [
        {
          "id": 13,
          "before": "'5 %'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 15,
          "before": "'2 kg'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 25,
          "before": "'4 kg'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 28,
          "before": "'5 USD'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 49,
          "before": "'5 VND'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 17,
          "before": "'9999'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 32,
          "before": "'-1'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 55,
          "before": "'200.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 1,
          "before": "'N/A'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 8,
          "before": "'?'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 19,
          "before": "'null'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "Food and Drink": {
      "examples": [
        {
          "id": 11,
          "before": "'2 VND'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 26,
          "before": "'5 đ'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 30,
          "before": "'3 đ'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 57,
          "before": "'2 đ'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 88,
          "before": "'3 %'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 19,
          "before": "'9999'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 32,
          "before": "'-1'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 65,
          "before": "'500.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 6,
          "before": "(Trống / NaN)",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 10,
          "before": "'-'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 25,
          "before": "'null'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "In-flight Service": {
      "examples": [
        {
          "id": 1,
          "before": "'5 USD'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 5,
          "before": "'3 %'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 11,
          "before": "'4 USD'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 32,
          "before": "'4 đ'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 39,
          "before": "'4 kg'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 27,
          "before": "'50.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 33,
          "before": "'-5.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 34,
          "before": "'9999'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 23,
          "before": "'?'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 25,
          "before": "'N/A'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 36,
          "before": "'None'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 4 cho ô thiếu hoặc ngoài miền)."
    },
    "In-flight Wifi Service": {
      "examples": [
        {
          "id": 4,
          "before": "'2 USD'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 7,
          "before": "'3 %'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 23,
          "before": "'4 kg'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 39,
          "before": "'3 USD'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 49,
          "before": "'4 USD'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 43,
          "before": "'-2.0'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 54,
          "before": "'-1'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 75,
          "before": "'9999'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (3)."
        },
        {
          "id": 16,
          "before": "'None'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 19,
          "before": "(Trống / NaN)",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        },
        {
          "id": 20,
          "before": "'null'",
          "after": "3",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (3)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 3 cho ô thiếu hoặc ngoài miền)."
    },
    "In-flight Entertainment": {
      "examples": [
        {
          "id": 4,
          "before": "'5 đ'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 9,
          "before": "'4 USD'",
          "after": "4",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 25,
          "before": "'5 USD'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 33,
          "before": "'2 kg'",
          "after": "2",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 35,
          "before": "'3 đ'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 6,
          "before": "'-1'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 59,
          "before": "'9999'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 75,
          "before": "'2000.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 16,
          "before": "'?'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 23,
          "before": "(Trống / NaN)",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 24,
          "before": "'None'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 4 cho ô thiếu hoặc ngoài miền)."
    },
    "Baggage Handling": {
      "examples": [
        {
          "id": 2,
          "before": "'5 VND'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 5,
          "before": "'3 USD'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 7,
          "before": "'5 đ'",
          "after": "5",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 8,
          "before": "'3 %'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 72,
          "before": "'3 VND'",
          "after": "3",
          "action": "Chuẩn hóa",
          "detail": "Trích xuất giá trị số hợp lệ trong miền BOUNDS (gỡ hậu tố đơn vị / khoảng trắng / đuôi .0), KHÔNG điền khuyết."
        },
        {
          "id": 69,
          "before": "'9999'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 78,
          "before": "'400.0'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 90,
          "before": "'-1'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Giá trị ngoài miền quy ước BOUNDS -> chuyển NaN rồi điền trung vị (4)."
        },
        {
          "id": 12,
          "before": "'N/A'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 16,
          "before": "'null'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        },
        {
          "id": 20,
          "before": "'None'",
          "after": "4",
          "action": "Điền khuyết",
          "detail": "Ô trống hoặc mã thiếu ẩn -> điền trung vị toàn tập trên 119.092 dòng (4)."
        }
      ],
      "has_standardize": true,
      "has_impute": true,
      "note": "Đã ghép theo khóa ID duy nhất: tách biệt giữa Chuẩn hóa (trích số hợp lệ trong BOUNDS) và Điền khuyết (trung vị = 4 cho ô thiếu hoặc ngoài miền)."
    },
    "Satisfaction": {
      "examples": [
        {
          "id": 4,
          "before": "'Satisfied   '",
          "after": "Satisfied",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng / chuẩn hóa hoa-thường / ánh xạ chuỗi cắt cụt về nhãn chuẩn."
        },
        {
          "id": 5,
          "before": "'Satisfied   '",
          "after": "Satisfied",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng / chuẩn hóa hoa-thường / ánh xạ chuỗi cắt cụt về nhãn chuẩn."
        },
        {
          "id": 10,
          "before": "'Satisfied   '",
          "after": "Satisfied",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng / chuẩn hóa hoa-thường / ánh xạ chuỗi cắt cụt về nhãn chuẩn."
        },
        {
          "id": 11,
          "before": "'  Neutral or Dissatisfi'",
          "after": "Neutral or Dissatisfied",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng / chuẩn hóa hoa-thường / ánh xạ chuỗi cắt cụt về nhãn chuẩn."
        },
        {
          "id": 15,
          "before": "'NEUTRAL OR DISSATISFIED'",
          "after": "Neutral or Dissatisfied",
          "action": "Chuẩn hóa",
          "detail": "Cắt khoảng trắng / chuẩn hóa hoa-thường / ánh xạ chuỗi cắt cụt về nhãn chuẩn."
        },
        {
          "id": 3,
          "before": "'?'",
          "after": "Đã loại dòng (không có trong PJ21.csv)",
          "action": "Loại dòng thiếu nhãn",
          "detail": "Biến mục tiêu thiếu hoặc mang mã thiếu ẩn -> loại bỏ để không tạo nhãn giả."
        },
        {
          "id": 18,
          "before": "(Trống / NaN)",
          "after": "Đã loại dòng (không có trong PJ21.csv)",
          "action": "Loại dòng thiếu nhãn",
          "detail": "Biến mục tiêu thiếu hoặc mang mã thiếu ẩn -> loại bỏ để không tạo nhãn giả."
        },
        {
          "id": 48,
          "before": "'unknown'",
          "after": "Đã loại dòng (không có trong PJ21.csv)",
          "action": "Loại dòng thiếu nhãn",
          "detail": "Biến mục tiêu thiếu hoặc mang mã thiếu ẩn -> loại bỏ để không tạo nhãn giả."
        },
        {
          "id": 51,
          "before": "'?'",
          "after": "Đã loại dòng (không có trong PJ21.csv)",
          "action": "Loại dòng thiếu nhãn",
          "detail": "Biến mục tiêu thiếu hoặc mang mã thiếu ẩn -> loại bỏ để không tạo nhãn giả."
        },
        {
          "id": 63,
          "before": "'chưa rõ'",
          "after": "Đã loại dòng (không có trong PJ21.csv)",
          "action": "Loại dòng thiếu nhãn",
          "detail": "Biến mục tiêu thiếu hoặc mang mã thiếu ẩn -> loại bỏ để không tạo nhãn giả."
        }
      ],
      "has_standardize": true,
      "has_impute": false,
      "note": "Biến mục tiêu Satisfaction không được điền khuyết: 10.788 dòng thiếu nhãn bị loại bỏ, 38.315 ô sai định dạng trên dòng giữ lại được chuẩn hóa."
    }
  },
  "eda": {
    "segments": {
      "Class": {
        "full": {
          "n": 119092,
          "items": [
            {
              "label": "Business",
              "n": 61826,
              "satisfied": 40611,
              "rate": 65.69,
              "is_unknown": false
            },
            {
              "label": "Economy Plus",
              "n": 7939,
              "satisfied": 1955,
              "rate": 24.63,
              "is_unknown": false
            },
            {
              "label": "Economy",
              "n": 49327,
              "satisfied": 9174,
              "rate": 18.6,
              "is_unknown": false
            }
          ]
        },
        "observed": {
          "n": 109979,
          "items": [
            {
              "label": "Business",
              "n": 52713,
              "satisfied": 36610,
              "rate": 69.45,
              "is_unknown": false
            },
            {
              "label": "Economy Plus",
              "n": 7939,
              "satisfied": 1955,
              "rate": 24.63,
              "is_unknown": false
            },
            {
              "label": "Economy",
              "n": 49327,
              "satisfied": 9174,
              "rate": 18.6,
              "is_unknown": false
            }
          ]
        },
        "stats_full": {
          "chi2": 25985.4,
          "df": 2,
          "v": 0.4671,
          "n": 119092
        },
        "stats_obs": {
          "chi2": 28054.1,
          "df": 2,
          "v": 0.5051,
          "n": 109979
        },
        "note_full": "Bao gồm 9.113 ô thiếu Class được điền Mode = 'Business' (tỷ lệ hài lòng của 9.113 ô này chỉ đạt 43,90%, kéo nhóm Business từ 69,45% xuống 65,69%).",
        "note_obs": "Chỉ tính 109.979 bản ghi có nhãn Class quan sát hợp lệ trước điền khuyết (loại 9.113 ô điền Mode). Business đạt 69,45%, chênh +50,85 điểm % so với Economy."
      },
      "Type of Travel": {
        "full": {
          "n": 119092,
          "items": [
            {
              "label": "Business Travel",
              "n": 50834,
              "satisfied": 29566,
              "rate": 58.16,
              "is_unknown": false
            },
            {
              "label": "Personal Travel",
              "n": 22651,
              "satisfied": 2353,
              "rate": 10.39,
              "is_unknown": false
            },
            {
              "label": "Unknown",
              "n": 45607,
              "satisfied": 19821,
              "rate": 43.46,
              "is_unknown": true
            }
          ]
        },
        "observed": {
          "n": 73485,
          "items": [
            {
              "label": "Business Travel",
              "n": 50834,
              "satisfied": 29566,
              "rate": 58.16,
              "is_unknown": false
            },
            {
              "label": "Personal Travel",
              "n": 22651,
              "satisfied": 2353,
              "rate": 10.39,
              "is_unknown": false
            }
          ]
        },
        "stats_full": {
          "chi2": 14555.0,
          "df": 2,
          "v": 0.3496,
          "n": 119092
        },
        "stats_obs": {
          "chi2": 14555.7,
          "df": 1,
          "v": 0.4451,
          "n": 73485,
          "chi2_yates": 14553.7,
          "v_yates": 0.445
        },
        "note_full": "Bao gồm 45.607 bản ghi (38,30%) được gán danh mục riêng 'Unknown' (tỷ lệ hài lòng 43,46%, gần mức chung 43,45% nhưng không đủ kết luận MCAR).",
        "note_obs": "Chỉ tính 73.485 bản ghi xác định được mục đích chuyến đi (loại nhóm Unknown). Business Travel (58,16%) cao gấp 5,60 lần Personal Travel (10,39%)."
      },
      "Customer Type": {
        "full": {
          "n": 119092,
          "items": [
            {
              "label": "Returning Customer",
              "n": 64203,
              "satisfied": 30859,
              "rate": 48.06,
              "is_unknown": false
            },
            {
              "label": "First-time Customer",
              "n": 14481,
              "satisfied": 3458,
              "rate": 23.88,
              "is_unknown": false
            },
            {
              "label": "Unknown",
              "n": 40408,
              "satisfied": 17423,
              "rate": 43.12,
              "is_unknown": true
            }
          ]
        },
        "observed": {
          "n": 78684,
          "items": [
            {
              "label": "Returning Customer",
              "n": 64203,
              "satisfied": 30859,
              "rate": 48.06,
              "is_unknown": false
            },
            {
              "label": "First-time Customer",
              "n": 14481,
              "satisfied": 3458,
              "rate": 23.88,
              "is_unknown": false
            }
          ]
        },
        "stats_full": {
          "chi2": 2815.6,
          "df": 2,
          "v": 0.1538,
          "n": 119092
        },
        "stats_obs": {
          "chi2": 2810.4,
          "df": 1,
          "v": 0.189,
          "n": 78684,
          "chi2_yates": 2809.4,
          "v_yates": 0.189
        },
        "note_full": "Bao gồm 40.408 bản ghi (33,93%) gán nhãn riêng 'Unknown' (tỷ lệ hài lòng 43,12%), tránh gộp vào nhóm đa số Returning Customer.",
        "note_obs": "Chỉ tính 78.684 bản ghi quan sát được loại khách (loại nhóm Unknown). Returning Customer (48,06%) cao hơn First-time Customer (23,88%) là +24,19 điểm %."
      },
      "Gender": {
        "full": {
          "n": 119092,
          "items": [
            {
              "label": "Male",
              "n": 53851,
              "satisfied": 23676,
              "rate": 43.97,
              "is_unknown": false
            },
            {
              "label": "Female",
              "n": 65241,
              "satisfied": 28064,
              "rate": 43.02,
              "is_unknown": false
            }
          ]
        },
        "observed": {
          "n": 109575,
          "items": [
            {
              "label": "Male",
              "n": 53851,
              "satisfied": 23676,
              "rate": 43.97,
              "is_unknown": false
            },
            {
              "label": "Female",
              "n": 55724,
              "satisfied": 23936,
              "rate": 42.95,
              "is_unknown": false
            }
          ]
        },
        "stats_full": {
          "chi2": 10.83,
          "df": 1,
          "v": 0.0095,
          "n": 119092
        },
        "stats_obs": {
          "chi2": 11.4,
          "df": 1,
          "v": 0.0102,
          "n": 109575
        },
        "note_full": "Bao gồm 9.517 ô thiếu Gender được điền Mode = 'Female' (tỷ lệ hài lòng 43,38%). Chênh lệch giữa Male và Female chỉ 0,95 điểm % (V = 0,0095).",
        "note_obs": "Chỉ tính 109.575 bản ghi có Gender quan sát hợp lệ. Khác biệt thực tiễn không đáng kể (Cramér's V = 0,0102)."
      }
    },
    "delays": {
      "Departure Delay": {
        "title": "Độ trễ khởi hành (Departure Delay)",
        "full_n": 119092,
        "obs_n": 77678,
        "imputed_n": 41414,
        "imputed_rate": 43.6,
        "mw_full": {
          "u": 1671189762.5,
          "p_str": "1,77 × 10⁻⁵²",
          "rb": -0.0409
        },
        "mw_obs": {
          "u": 692187731.0,
          "p_str": "7,52 × 10⁻⁶⁸",
          "rb": -0.0658
        },
        "bins": [
          {
            "label": "0 phút",
            "full_n": 85434,
            "full_sat": 38149,
            "full_rate": 44.65,
            "obs_n": 44020,
            "obs_sat": 20092,
            "obs_rate": 45.64
          },
          {
            "label": "1–15 phút",
            "full_n": 16439,
            "full_sat": 7131,
            "full_rate": 43.38,
            "obs_n": 16439,
            "obs_sat": 7131,
            "obs_rate": 43.38
          },
          {
            "label": "16–60 phút",
            "full_n": 11765,
            "full_sat": 4498,
            "full_rate": 38.23,
            "obs_n": 11765,
            "obs_sat": 4498,
            "obs_rate": 38.23
          },
          {
            "label": "Trên 60 phút",
            "full_n": 5454,
            "full_sat": 1962,
            "full_rate": 35.97,
            "obs_n": 5454,
            "obs_sat": 1962,
            "obs_rate": 35.97
          }
        ]
      },
      "Arrival Delay": {
        "title": "Độ trễ đến (Arrival Delay)",
        "full_n": 119092,
        "obs_n": 111054,
        "imputed_n": 8038,
        "imputed_rate": 44.13,
        "mw_full": {
          "u": 1570744725.5,
          "p_str": "3,78 × 10⁻²³⁶",
          "rb": -0.0985
        },
        "mw_obs": {
          "u": 1354446404.5,
          "p_str": "8,97 × 10⁻²⁴⁵",
          "rb": -0.1058
        },
        "bins": [
          {
            "label": "0 phút",
            "full_n": 70643,
            "full_sat": 33189,
            "full_rate": 46.98,
            "obs_n": 62605,
            "obs_sat": 29642,
            "obs_rate": 47.35
          },
          {
            "label": "1–15 phút",
            "full_n": 23082,
            "full_sat": 9463,
            "full_rate": 41.0,
            "obs_n": 23082,
            "obs_sat": 9463,
            "obs_rate": 41.0
          },
          {
            "label": "16–60 phút",
            "full_n": 17390,
            "full_sat": 6230,
            "full_rate": 35.83,
            "obs_n": 17390,
            "obs_sat": 6230,
            "obs_rate": 35.83
          },
          {
            "label": "Trên 60 phút",
            "full_n": 7977,
            "full_sat": 2858,
            "full_rate": 35.83,
            "obs_n": 7977,
            "obs_sat": 2858,
            "obs_rate": 35.83
          }
        ]
      }
    },
    "spearman": [
      {
        "variable": "Departure and Arrival Time Convenience",
        "keep0_rho": -0.0503,
        "keep0_rank": 14,
        "keep0_n": 119092,
        "drop0_rho": -0.0473,
        "drop0_rank": 14,
        "drop0_n": 113602,
        "obs_rho": -0.052,
        "obs_rank": 14,
        "obs_n": 106710
      },
      {
        "variable": "Ease of Online Booking",
        "keep0_rho": 0.1533,
        "keep0_rank": 12,
        "keep0_n": 119092,
        "drop0_rho": 0.194,
        "drop0_rank": 11,
        "drop0_n": 115364,
        "obs_rho": 0.1696,
        "obs_rank": 12,
        "obs_n": 83669
      },
      {
        "variable": "Check-in Service",
        "keep0_rho": 0.2181,
        "keep0_rank": 10,
        "keep0_n": 119092,
        "drop0_rho": 0.2181,
        "drop0_rank": 10,
        "drop0_n": 119092,
        "obs_rho": 0.2354,
        "obs_rank": 10,
        "obs_n": 105144
      },
      {
        "variable": "Online Boarding",
        "keep0_rho": 0.4636,
        "keep0_rank": 1,
        "keep0_n": 119092,
        "drop0_rho": 0.49,
        "drop0_rank": 1,
        "drop0_n": 117003,
        "obs_rho": 0.5513,
        "obs_rank": 1,
        "obs_n": 87134
      },
      {
        "variable": "Gate Location",
        "keep0_rho": -0.0096,
        "keep0_rank": 13,
        "keep0_n": 119092,
        "drop0_rho": -0.0096,
        "drop0_rank": 13,
        "drop0_n": 119091,
        "obs_rho": -0.0057,
        "obs_rank": 13,
        "obs_n": 92421
      },
      {
        "variable": "On-board Service",
        "keep0_rho": 0.3147,
        "keep0_rank": 4,
        "keep0_n": 119092,
        "drop0_rho": 0.3147,
        "drop0_rank": 5,
        "drop0_n": 119087,
        "obs_rho": 0.3299,
        "obs_rank": 4,
        "obs_n": 109592
      },
      {
        "variable": "Seat Comfort",
        "keep0_rho": 0.3364,
        "keep0_rank": 3,
        "keep0_n": 119092,
        "drop0_rho": 0.3364,
        "drop0_rank": 4,
        "drop0_n": 119092,
        "obs_rho": 0.3621,
        "obs_rank": 3,
        "obs_n": 101973
      },
      {
        "variable": "Leg Room Service",
        "keep0_rho": 0.3046,
        "keep0_rank": 5,
        "keep0_n": 119092,
        "drop0_rho": 0.3059,
        "drop0_rank": 6,
        "drop0_n": 118568,
        "obs_rho": 0.3163,
        "obs_rank": 5,
        "obs_n": 110754
      },
      {
        "variable": "Cleanliness",
        "keep0_rho": 0.2536,
        "keep0_rank": 8,
        "keep0_n": 119092,
        "drop0_rho": 0.2536,
        "drop0_rank": 8,
        "drop0_n": 119087,
        "obs_rho": 0.3071,
        "obs_rank": 6,
        "obs_n": 80651
      },
      {
        "variable": "Food and Drink",
        "keep0_rho": 0.1751,
        "keep0_rank": 11,
        "keep0_n": 119092,
        "drop0_rho": 0.1753,
        "drop0_rank": 12,
        "drop0_n": 119004,
        "obs_rho": 0.2077,
        "obs_rank": 11,
        "obs_n": 87190
      },
      {
        "variable": "In-flight Service",
        "keep0_rho": 0.2558,
        "keep0_rank": 7,
        "keep0_n": 119092,
        "drop0_rho": 0.2558,
        "drop0_rank": 7,
        "drop0_n": 119087,
        "obs_rho": 0.2667,
        "obs_rank": 9,
        "obs_n": 108049
      },
      {
        "variable": "In-flight Wifi Service",
        "keep0_rho": 0.2689,
        "keep0_rank": 6,
        "keep0_n": 119092,
        "drop0_rho": 0.3383,
        "drop0_rank": 3,
        "drop0_n": 116157,
        "obs_rho": 0.2858,
        "obs_rank": 7,
        "obs_n": 95774
      },
      {
        "variable": "In-flight Entertainment",
        "keep0_rho": 0.377,
        "keep0_rank": 2,
        "keep0_n": 119092,
        "drop0_rho": 0.3769,
        "drop0_rank": 2,
        "drop0_n": 119077,
        "obs_rho": 0.4002,
        "obs_rank": 2,
        "obs_n": 107409
      },
      {
        "variable": "Baggage Handling",
        "keep0_rho": 0.2426,
        "keep0_rank": 9,
        "keep0_n": 119092,
        "drop0_rho": 0.2426,
        "drop0_rank": 9,
        "drop0_n": 119092,
        "obs_rho": 0.2706,
        "obs_rank": 8,
        "obs_n": 92724
      }
    ]
  },
  "provenance": {
    "source_hashes": [
      {
        "file": "Data/raw/Du lieu khong sach.csv",
        "role": "Dữ liệu thô chưa làm sạch (129.880 dòng × 24 cột)",
        "size_bytes": 13404783,
        "sha256": "c70d2b1a2fb89ae1d4d5befe76c01867afc18be0d62e45d33aea34e53c5001e4"
      },
      {
        "file": "Data/processed/PJ21.csv",
        "role": "Dữ liệu sạch chuẩn Chương 3 (119.092 dòng × 24 cột)",
        "size_bytes": 12881921,
        "sha256": "baa89213a9cd76be3baa239731ad6035f1544ce4c94f3ab4a8c545bb4adc3e3a"
      },
      {
        "file": "outputs/chuong3_ban_thao.qmd",
        "role": "Bản thảo chính thức Chương 3 (Quarto Markdown)",
        "size_bytes": 42250,
        "sha256": "d16912ef42f96c869a0a12406ee6260f251b31eb2c5160b480f1809ec67800df"
      },
      {
        "file": "outputs/chuong3/ket_qua.json",
        "role": "Tổng hợp chỉ số, kiểm định thống kê và mã băm",
        "size_bytes": 6305,
        "sha256": "f0fe2b68f7b45810cbee4085a161af76d13bc0cfdcdbe057dc666ce98a851e58"
      },
      {
        "file": "outputs/chuong3/kiem_tra_chat_luong.csv",
        "role": "Bảng kiểm toán chất lượng từng biến trước–sau (24 biến)",
        "size_bytes": 3414,
        "sha256": "51159479e01f89c00d119f3dfc6f0e7abb18ced03ad879c94e5c3c651b5b9bed"
      },
      {
        "file": "outputs/Bao_cao_lam_sach_du_lieu.csv",
        "role": "Báo cáo kiểm toán lỗi sinh trực tiếp từ lam_sach_du_lieu.py",
        "size_bytes": 2070,
        "sha256": "fbb511aa11c26b0514fa8072a82baa8b3c225e476da86a899ea6cd1f3b85a83e"
      },
      {
        "file": "outputs/chuong3/do_nhay_diem_0.csv",
        "role": "Tương quan Spearman và thứ hạng theo 3 phương án xử lý mã 0",
        "size_bytes": 1493,
        "sha256": "2d1d48fb28b96ebf8605d21d6d12b45b4ca804915421e0f610291c91545ec9b5"
      },
      {
        "file": "outputs/chuong3/nhom_do_tre_khoi_hanh.csv",
        "role": "Phân nhóm Departure Delay (toàn tập & chỉ ô quan sát)",
        "size_bytes": 372,
        "sha256": "234bf1039084d094f07c808a16cfe6bbe57bbecff8d2dcb59460381deae6c4bb"
      },
      {
        "file": "outputs/chuong3/nhom_do_tre.csv",
        "role": "Phân nhóm Arrival Delay (toàn tập & chỉ ô quan sát)",
        "size_bytes": 368,
        "sha256": "2ac69ceca55a51698de99946803ffb0e43e9ee5f6b9ca3300810f7f7408f630c"
      },
      {
        "file": "Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py",
        "role": "Mã nguồn làm sạch & kiểm toán từng ô (đồng bộ clean_data.ipynb)",
        "size_bytes": 14307,
        "sha256": "6978fc281a9db3b491079db66d8036449a6fcb7c99b53c1dae76d494685e9f08"
      },
      {
        "file": "src/phan_tich_chuong3.py",
        "role": "Mã nguồn phân tích thống kê, EDA và kiểm định Chương 3",
        "size_bytes": 38251,
        "sha256": "7581eb8cb05ca0d7df6d6ad99b6c7d5b3e66f727a40b5b6200de45f7c2ad516e"
      },
      {
        "file": "nhật ký làm việc.md",
        "role": "Nhật ký triển khai, kiểm chứng và chốt phiên bản Chương 3",
        "size_bytes": 22720,
        "sha256": "57a0187f27b7886aa1130704818ff162de345d4bd589a3dcb0e78105a3236221"
      }
    ],
    "trace_matrix": [
      {
        "item": "Tổng số dòng, số dòng loại, cơ cấu nhãn (Phần ①)",
        "source": "Data/raw/Du lieu khong sach.csv; Data/processed/PJ21.csv; outputs/chuong3/ket_qua.json",
        "rule": "rows_raw = 129.880; rows_dropped = 10.788 (8,31%); rows_clean = 119.092 (91,69%); Satisfied = 51.740 (43,45%); Neutral/Dissat = 67.352 (56,55%)",
        "scope": "Đã đối chiếu 100% giữa tệp thô, PJ21.csv và ket_qua.json"
      },
      {
        "item": "6 bước quy trình làm sạch & kiểm chứng tái lập (Phần ②)",
        "source": "Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py; clean_data.ipynb; nhật ký làm việc.md",
        "rule": "Thứ tự 6 bước khớp mã nguồn thực tế; assert_frame_equal() tái tạo khớp 100% PJ21.csv",
        "scope": "Đã chạy kiểm chứng tái lập và đối chiếu mã băm SHA-256"
      },
      {
        "item": "Bảng kiểm toán 24 biến trước–sau (Phần ③)",
        "source": "outputs/chuong3/kiem_tra_chat_luong.csv; outputs/Bao_cao_lam_sach_du_lieu.csv",
        "rule": "Hàm kiem_toan_tung_o() quét từng ô; phân tách Lượt lỗi (957.918), Ô trùng 2 lỗi (37.748), Ô lỗi duy nhất (920.170 = 83.037 dòng loại + 837.133 dòng giữ lại), Lỗi sau xử lý = 0",
        "scope": "Khớp tuyệt đối 24/24 biến giữa 2 bảng kiểm toán và ket_qua.json"
      },
      {
        "item": "Ví dụ thực tế trước–sau theo từng biến (Phần ④)",
        "source": "Data/raw/Du lieu khong sach.csv ghép 1–1 với Data/processed/PJ21.csv qua khóa ID",
        "rule": "Khớp bằng số nguyên ID duy nhất (validate='one_to_one'); tách Chuẩn hóa (trong BOUNDS), Điền khuyết (thiếu/ngoài miền), Gán Unknown và Loại dòng",
        "scope": "Trích trực tiếp từ bản ghi thật, 0 dữ liệu bịa đặt, không ghép theo số thứ tự dòng"
      },
      {
        "item": "Biểu đồ Phân khúc hành khách — RQ1 (Phần ⑤)",
        "source": "outputs/chuong3/Class.csv, Type_of_Travel.csv, Customer_Type.csv, Gender.csv, ket_qua.json",
        "rule": "Đối chiếu song song Toàn tập PJ21.csv (n=119.092) và Chỉ ô quan sát hợp lệ trước điền khuyết (Class n=109.979; Travel n=73.485; Customer n=78.684; Gender n=109.575)",
        "scope": "Đã xác minh độc lập tỷ lệ, Pearson Chi-square và Cramér's V"
      },
      {
        "item": "Biểu đồ Độ trễ khởi hành & Độ trễ đến — RQ2 (Phần ⑤)",
        "source": "outputs/chuong3/nhom_do_tre_khoi_hanh.csv; outputs/chuong3/nhom_do_tre.csv; ket_qua.json",
        "rule": "Chia 4 nhóm (0; 1–15; 16–60; >60 phút); đối chiếu Toàn tập vs Chỉ ô quan sát (Departure n=77.678; Arrival n=111.054) + Mann–Whitney U & r_rb",
        "scope": "Đã xác minh độc lập từng nhóm độ trễ và thống kê U (giữ đuôi ,5)"
      },
      {
        "item": "Biểu đồ Tương quan Spearman 14 điểm dịch vụ — RQ3 (Phần ⑤)",
        "source": "outputs/chuong3/do_nhay_diem_0.csv; outputs/chuong3/tuong_quan_spearman.csv",
        "rule": "3 phương án thực sự dùng trong Chương 3: (1) Giữ mã 0 trên PJ21.csv, (2) Loại mã 0 trên PJ21.csv, (3) Chỉ ô quan sát trước điền khuyết",
        "scope": "Đã xác minh độc lập toàn bộ 14×3 hệ số ρ, cỡ mẫu n và thứ hạng #1–#14"
      }
    ],
    "reconciliation_checks": [
      {
        "check": "Số dòng trước = Số dòng giữ lại + Số dòng bị loại",
        "formula": "129.880 = 119.092 + 10.788",
        "status": "Khớp 100%"
      },
      {
        "check": "Tổng lượt lỗi − Ô trùng 2 lỗi = Số ô lỗi duy nhất",
        "formula": "957.918 − 37.748 = 920.170",
        "status": "Khớp 100%"
      },
      {
        "check": "Ô lỗi duy nhất = Ô thuộc dòng loại + Ô được sửa trên dòng giữ lại",
        "formula": "920.170 = 83.037 + 837.133",
        "status": "Khớp 100%"
      },
      {
        "check": "Tổng hai lớp nhãn trên PJ21.csv = Số dòng sạch",
        "formula": "51.740 + 67.352 = 119.092",
        "status": "Khớp 100%"
      },
      {
        "check": "Số lỗi sau xử lý (kiểm toán thực tế từng ô trên 2.858.208 ô)",
        "formula": "0 thiếu + 0 sai định dạng + 0 ngoài miền = 0",
        "status": "Khớp 100%"
      }
    ],
    "unverified_and_limits": [
      "URL nguồn Kaggle gốc, giấy phép phát hành (License) và ngày tải ban đầu: Chưa có trong siêu dữ liệu tệp cục bộ (không suy đoán).",
      "Đơn vị đo gốc của biến Flight Distance (dặm hay km): Chưa xác minh từ tài liệu gốc do tệp thô gắn hậu tố nhiễu ngẫu nhiên; báo cáo chỉ dùng phân vị tương đối.",
      "Ý nghĩa nghiệp vụ chính thức của điểm 0 ở 11/14 biến dịch vụ ('không áp dụng' hay 'mức đánh giá thấp nhất'): Chưa xác minh; đã kiểm tra độ nhạy 3 phương án ở Phần ⑤.",
      "Hai điểm ghi nhận để thống nhất khi rà soát cuối kỳ (theo nhật ký 18/11): (a) quy ước trích dẫn Cramér's V giữa tập quan sát (2×2 Pearson/Yates) và toàn tập PJ21.csv (3×2 gồm Unknown); (b) phạm vi họ kiểm định Bonferroni giữa họ 3 kiểm định chính (α/3 ≈ 0,0167) và họ mở rộng 5 kiểm định (α/5 = 0,0100).",
      "Các kết quả EDA và tương quan Spearman phản ánh mối liên hệ thống kê trên mẫu khảo sát hiện có, không kết luận quan hệ nhân quả và không tự động ngoại suy cho toàn thị trường hàng không Việt Nam."
    ]
  }
};
