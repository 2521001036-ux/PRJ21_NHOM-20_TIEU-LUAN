// Dữ liệu thực trích xuất 100% từ Data/raw/Du lieu khong sach.csv, Data/processed/PJ21.csv và outputs/chuong3/
window.PRJ21_DATA = {
  "ket_qua": {
    "rows_raw": 129880,
    "rows_clean": 119092,
    "rows_dropped_missing_target": 10788,
    "columns": 24,
    "cells_raw": 3117120,
    "cells_clean": 2858208,
    "cells_dropped": 258912,
    "duplicates_raw": 0,
    "duplicates_clean": 0,
    "id_unique_raw": true,
    "id_unique_clean": true,
    "missing_csv_raw": 269947,
    "missing_including_codes_raw": 410614,
    "format_errors_raw": 419228,
    "outlier_errors_raw": 128076,
    "overlap_fmt_out_raw": 37748,
    "total_error_occurrences_raw": 957918,
    "unique_error_cells_raw": 920170,
    "unique_error_cells_raw_pct": 29.51987732265681,
    "unique_error_cells_dropped_rows": 83037,
    "unique_error_cells_fixed_kept_rows": 837133,
    "total_imputed_Or_unknown_cells_pj21": 483994,
    "age_imputed_n": 9012,
    "age_imputed_pct": 7.5672589258724345,
    "flight_distance_imputed_n": 22791,
    "flight_distance_imputed_pct": 19.137305612467674,
    "metric_imputed_min_col": "Arrival Delay",
    "metric_imputed_min_n": 8038,
    "metric_imputed_min_pct": 6.749403822255064,
    "metric_imputed_max_col": "Departure Delay",
    "metric_imputed_max_n": 41414,
    "metric_imputed_max_pct": 34.77479595606758,
    "service_imputed_min_col": "Leg Room Service",
    "service_imputed_min_n": 8338,
    "service_imputed_min_pct": 7.001309911664931,
    "service_imputed_max_col": "Cleanliness",
    "service_imputed_max_n": 38441,
    "service_imputed_max_pct": 32.278406610015786,
    "service_med3_count": 8,
    "service_med4_count": 6,
    "service_med3_cols": [
      "Departure and Arrival Time Convenience",
      "Ease of Online Booking",
      "Check-in Service",
      "Online Boarding",
      "Gate Location",
      "Cleanliness",
      "Food and Drink",
      "In-flight Wifi Service"
    ],
    "service_med4_cols": [
      "On-board Service",
      "Seat Comfort",
      "Leg Room Service",
      "In-flight Service",
      "In-flight Entertainment",
      "Baggage Handling"
    ],
    "missing_after_clean": 0,
    "format_after_clean": 0,
    "outlier_after_clean": 0,
    "total_error_occurrences_after": 0,
    "unique_error_cells_after": 0,
    "satisfied_count": 51740,
    "dissatisfied_count": 67352,
    "rate_satisfied_pct": 43.44540355355523,
    "rate_dissatisfied_pct": 56.55459644644477,
    "memory_raw_bytes": 158715312,
    "memory_before_bytes": 53971600,
    "memory_after_bytes": 3573679,
    "memory_reduction_pct": 93.37859355661125,
    "class_imputed_n": 9113,
    "class_imputed_satisfied_pct": 43.904312520575,
    "class_business_obs_n": 52713,
    "class_business_obs_satisfied_pct": 69.45155843909473,
    "gender_imputed_n": 9517,
    "gender_imputed_satisfied_pct": 43.37501313439109,
    "arrival_imputed_zero_n": 8038,
    "arrival_imputed_zero_satisfied_pct": 44.12789251057477,
    "arrival_observed_n": 111054,
    "departure_imputed_zero_n": 41414,
    "departure_imputed_zero_satisfied_pct": 43.60119766262617,
    "departure_observed_n": 77678,
    "chi2_obs": 28054.13328860989,
    "chi2_obs_p": 0.0,
    "chi2_obs_df": 2,
    "cramers_v_obs": 0.5050606633263007,
    "chi2_obs_n": 109979,
    "expected_min_obs": 3446.1117213286175,
    "chi2_full": 25985.39119038211,
    "chi2_full_p": 0.0,
    "cramers_v_full": 0.4671144854870446,
    "chi2_full_n": 119092,
    "expected_min_full": 3449.13058811675,
    "chi2_travel_obs": 14555.67627074369,
    "chi2_travel_obs_yates": 14553.731872813725,
    "chi2_travel_obs_p": 0.0,
    "chi2_travel_obs_df": 1,
    "cramers_v_travel_obs": 0.4450582385383642,
    "cramers_v_travel_obs_yates": 0.44502851133080074,
    "chi2_travel_obs_n": 73485,
    "expected_min_travel_obs": 9838.705436483637,
    "chi2_travel_full": 14554.95812699887,
    "chi2_travel_full_p": 0.0,
    "chi2_travel_full_df": 2,
    "cramers_v_travel_full": 0.349594173449571,
    "expected_min_travel_full": 9840.818358915796,
    "chi2_cust_obs": 2810.4060157865156,
    "chi2_cust_obs_yates": 2809.4226512186847,
    "chi2_cust_obs_p": 0.0,
    "chi2_cust_obs_df": 1,
    "cramers_v_cust_obs": 0.18899108501291173,
    "cramers_v_cust_obs_yates": 0.18895801801200962,
    "chi2_cust_obs_n": 78684,
    "expected_min_cust_obs": 6315.699214579839,
    "chi2_cust_full": 2815.570180056695,
    "chi2_cust_full_p": 0.0,
    "chi2_cust_full_df": 2,
    "cramers_v_cust_full": 0.1537594738021173,
    "expected_min_cust_full": 6291.328888590334,
    "chi2_gender_obs": 11.39643493662524,
    "chi2_gender_obs_p": 0.0007358518662628043,
    "cramers_v_gender_obs": 0.010198323123883192,
    "chi2_gender_obs_n": 109575,
    "chi2_gender_full": 10.83281915113092,
    "chi2_gender_full_p": 0.0009971669681543864,
    "cramers_v_gender_full": 0.009537388024062137,
    "flight_distance_gt_5000_n": 178,
    "flight_distance_gt_5000_obs_n": 178,
    "mann_whitney_u_full": 1570744725.5,
    "mann_whitney_p_full": 3.775424444206389e-236,
    "rank_biserial_full": -0.09851462632862429,
    "mann_whitney_u_obs": 1354446404.5,
    "mann_whitney_p_obs": 8.969015073676584e-245,
    "rank_biserial_obs": -0.10581666227437148,
    "mann_whitney_dep_u_full": 1671189762.5,
    "mann_whitney_dep_p_full": 1.7711167110512055e-52,
    "rank_biserial_dep_full": -0.040866982988898126,
    "mann_whitney_dep_u_obs": 692187731.0,
    "mann_whitney_dep_p_obs": 7.52026097497086e-68,
    "rank_biserial_dep_obs": -0.06580012356368736,
    "delay_mean_satisfied_full": 12.805373018940859,
    "delay_mean_dissatisfied_full": 17.41713683335313,
    "delay_pct_positive_satisfied_full": 35.85427135678392,
    "delay_pct_positive_dissatisfied_full": 44.390663974343745,
    "delay_pct_positive_satisfied_obs": 38.49314215757475,
    "delay_pct_positive_dissatisfied_obs": 47.562081417731186,
    "dep_delay_mean_satisfied_full": 9.002899110939312,
    "dep_delay_mean_dissatisfied_full": 11.332729540325454,
    "dep_delay_pct_positive_satisfied_full": 26.267877850792427,
    "dep_delay_pct_positive_dissatisfied_full": 29.794215465019597,
    "dep_delay_pct_positive_satisfied_obs": 40.34973131846925,
    "dep_delay_pct_positive_dissatisfied_obs": 45.612001363791336,
    "input_sha256": {
      "Data\\raw\\Du lieu khong sach.csv": "c70d2b1a2fb89ae1d4d5befe76c01867afc18be0d62e45d33aea34e53c5001e4",
      "Data\\processed\\PJ21.csv": "baa89213a9cd76be3baa239731ad6035f1544ce4c94f3ab4a8c545bb4adc3e3a"
    },
    "versions": {
      "python": "3.12.10",
      "pandas": "3.0.5",
      "numpy": "2.5.3",
      "matplotlib": "3.11.2"
    }
  },
  "audit_24": [
    {
      "bien": "ID",
      "nhom": "Định danh",
      "thieu_doc_csv_raw": 0,
      "thieu_ma_an_raw": 0,
      "thieu_raw": 0,
      "ty_le_thieu_raw_pct": 0.0,
      "sai_dinh_dang_raw": 10484,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 10484,
      "so_o_loi_duy_nhat_raw": 10484,
      "ty_le_o_loi_raw_pct": 8.0721,
      "o_loi_thuoc_dong_bi_loai": 853,
      "o_loi_duoc_sua_dong_giu_lai": 9631,
      "o_chuan_hoa_giu_gia_tri": 9631,
      "gia_tri_dien_khuyet": "Không điền",
      "so_o_dien_khuyet_tren_pj21": 0,
      "ty_le_dien_khuyet_tren_pj21_pct": 0.0,
      "so_o_quan_sat_tren_pj21": 119092,
      "ty_le_quan_sat_tren_pj21_pct": 100.0,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int32"
    },
    {
      "bien": "Gender",
      "nhom": "Phân loại",
      "thieu_doc_csv_raw": 6474,
      "thieu_ma_an_raw": 3873,
      "thieu_raw": 10347,
      "ty_le_thieu_raw_pct": 7.9666,
      "sai_dinh_dang_raw": 21763,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 32110,
      "so_o_loi_duy_nhat_raw": 32110,
      "ty_le_o_loi_raw_pct": 24.7228,
      "o_loi_thuoc_dong_bi_loai": 2581,
      "o_loi_duoc_sua_dong_giu_lai": 29529,
      "o_chuan_hoa_giu_gia_tri": 20012,
      "gia_tri_dien_khuyet": "Female",
      "so_o_dien_khuyet_tren_pj21": 9517,
      "ty_le_dien_khuyet_tren_pj21_pct": 7.9913,
      "so_o_quan_sat_tren_pj21": 109575,
      "ty_le_quan_sat_tren_pj21_pct": 92.0087,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "str",
      "kieu_toi_uu": "category"
    },
    {
      "bien": "Age",
      "nhom": "Vận hành",
      "thieu_doc_csv_raw": 3524,
      "thieu_ma_an_raw": 1759,
      "thieu_raw": 5283,
      "ty_le_thieu_raw_pct": 4.0676,
      "sai_dinh_dang_raw": 8919,
      "ngoai_mien_raw": 4574,
      "o_trung_2_loi_raw": 2831,
      "tong_luot_loi_raw": 18776,
      "so_o_loi_duy_nhat_raw": 15945,
      "ty_le_o_loi_raw_pct": 12.2767,
      "o_loi_thuoc_dong_bi_loai": 1332,
      "o_loi_duoc_sua_dong_giu_lai": 14613,
      "o_chuan_hoa_giu_gia_tri": 5601,
      "gia_tri_dien_khuyet": "40",
      "so_o_dien_khuyet_tren_pj21": 9012,
      "ty_le_dien_khuyet_tren_pj21_pct": 7.5673,
      "so_o_quan_sat_tren_pj21": 110080,
      "ty_le_quan_sat_tren_pj21_pct": 92.4327,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Customer Type",
      "nhom": "Phân loại",
      "thieu_doc_csv_raw": 27548,
      "thieu_ma_an_raw": 16502,
      "thieu_raw": 44050,
      "ty_le_thieu_raw_pct": 33.9159,
      "sai_dinh_dang_raw": 56288,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 100338,
      "so_o_loi_duy_nhat_raw": 100338,
      "ty_le_o_loi_raw_pct": 77.2544,
      "o_loi_thuoc_dong_bi_loai": 8308,
      "o_loi_duoc_sua_dong_giu_lai": 92030,
      "o_chuan_hoa_giu_gia_tri": 51622,
      "gia_tri_dien_khuyet": "Unknown",
      "so_o_dien_khuyet_tren_pj21": 40408,
      "ty_le_dien_khuyet_tren_pj21_pct": 33.9301,
      "so_o_quan_sat_tren_pj21": 78684,
      "ty_le_quan_sat_tren_pj21_pct": 66.0699,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "str",
      "kieu_toi_uu": "category"
    },
    {
      "bien": "Type of Travel",
      "nhom": "Phân loại",
      "thieu_doc_csv_raw": 31172,
      "thieu_ma_an_raw": 18512,
      "thieu_raw": 49684,
      "ty_le_thieu_raw_pct": 38.2538,
      "sai_dinh_dang_raw": 44719,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 94403,
      "so_o_loi_duy_nhat_raw": 94403,
      "ty_le_o_loi_raw_pct": 72.6848,
      "o_loi_thuoc_dong_bi_loai": 7833,
      "o_loi_duoc_sua_dong_giu_lai": 86570,
      "o_chuan_hoa_giu_gia_tri": 40963,
      "gia_tri_dien_khuyet": "Unknown",
      "so_o_dien_khuyet_tren_pj21": 45607,
      "ty_le_dien_khuyet_tren_pj21_pct": 38.2956,
      "so_o_quan_sat_tren_pj21": 73485,
      "ty_le_quan_sat_tren_pj21_pct": 61.7044,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "str",
      "kieu_toi_uu": "category"
    },
    {
      "bien": "Class",
      "nhom": "Phân loại",
      "thieu_doc_csv_raw": 6237,
      "thieu_ma_an_raw": 3693,
      "thieu_raw": 9930,
      "ty_le_thieu_raw_pct": 7.6455,
      "sai_dinh_dang_raw": 26256,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 36186,
      "so_o_loi_duy_nhat_raw": 36186,
      "ty_le_o_loi_raw_pct": 27.8611,
      "o_loi_thuoc_dong_bi_loai": 2984,
      "o_loi_duoc_sua_dong_giu_lai": 33202,
      "o_chuan_hoa_giu_gia_tri": 24089,
      "gia_tri_dien_khuyet": "Business",
      "so_o_dien_khuyet_tren_pj21": 9113,
      "ty_le_dien_khuyet_tren_pj21_pct": 7.6521,
      "so_o_quan_sat_tren_pj21": 109979,
      "ty_le_quan_sat_tren_pj21_pct": 92.3479,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "str",
      "kieu_toi_uu": "category"
    },
    {
      "bien": "Flight Distance",
      "nhom": "Vận hành",
      "thieu_doc_csv_raw": 11039,
      "thieu_ma_an_raw": 5633,
      "thieu_raw": 16672,
      "ty_le_thieu_raw_pct": 12.8365,
      "sai_dinh_dang_raw": 16178,
      "ngoai_mien_raw": 8203,
      "o_trung_2_loi_raw": 2555,
      "tong_luot_loi_raw": 41053,
      "so_o_loi_duy_nhat_raw": 38498,
      "ty_le_o_loi_raw_pct": 29.6412,
      "o_loi_thuoc_dong_bi_loai": 3177,
      "o_loi_duoc_sua_dong_giu_lai": 35321,
      "o_chuan_hoa_giu_gia_tri": 12530,
      "gia_tri_dien_khuyet": "846",
      "so_o_dien_khuyet_tren_pj21": 22791,
      "ty_le_dien_khuyet_tren_pj21_pct": 19.1373,
      "so_o_quan_sat_tren_pj21": 96301,
      "ty_le_quan_sat_tren_pj21_pct": 80.8627,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int16"
    },
    {
      "bien": "Departure Delay",
      "nhom": "Vận hành",
      "thieu_doc_csv_raw": 22504,
      "thieu_ma_an_raw": 11342,
      "thieu_raw": 33846,
      "ty_le_thieu_raw_pct": 26.0594,
      "sai_dinh_dang_raw": 5407,
      "ngoai_mien_raw": 11363,
      "o_trung_2_loi_raw": 232,
      "tong_luot_loi_raw": 50616,
      "so_o_loi_duy_nhat_raw": 50384,
      "ty_le_o_loi_raw_pct": 38.7927,
      "o_loi_thuoc_dong_bi_loai": 4229,
      "o_loi_duoc_sua_dong_giu_lai": 46155,
      "o_chuan_hoa_giu_gia_tri": 4741,
      "gia_tri_dien_khuyet": "0",
      "so_o_dien_khuyet_tren_pj21": 41414,
      "ty_le_dien_khuyet_tren_pj21_pct": 34.7748,
      "so_o_quan_sat_tren_pj21": 77678,
      "ty_le_quan_sat_tren_pj21_pct": 65.2252,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int16"
    },
    {
      "bien": "Arrival Delay",
      "nhom": "Vận hành",
      "thieu_doc_csv_raw": 4231,
      "thieu_ma_an_raw": 1980,
      "thieu_raw": 6211,
      "ty_le_thieu_raw_pct": 4.7821,
      "sai_dinh_dang_raw": 9740,
      "ngoai_mien_raw": 2531,
      "o_trung_2_loi_raw": 575,
      "tong_luot_loi_raw": 18482,
      "so_o_loi_duy_nhat_raw": 17907,
      "ty_le_o_loi_raw_pct": 13.7873,
      "o_loi_thuoc_dong_bi_loai": 1415,
      "o_loi_duoc_sua_dong_giu_lai": 16492,
      "o_chuan_hoa_giu_gia_tri": 8454,
      "gia_tri_dien_khuyet": "0",
      "so_o_dien_khuyet_tren_pj21": 8038,
      "ty_le_dien_khuyet_tren_pj21_pct": 6.7494,
      "so_o_quan_sat_tren_pj21": 111054,
      "ty_le_quan_sat_tren_pj21_pct": 93.2506,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int16"
    },
    {
      "bien": "Departure and Arrival Time Convenience",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 9636,
      "thieu_ma_an_raw": 3833,
      "thieu_raw": 13469,
      "ty_le_thieu_raw_pct": 10.3703,
      "sai_dinh_dang_raw": 0,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 13469,
      "so_o_loi_duy_nhat_raw": 13469,
      "ty_le_o_loi_raw_pct": 10.3703,
      "o_loi_thuoc_dong_bi_loai": 1087,
      "o_loi_duoc_sua_dong_giu_lai": 12382,
      "o_chuan_hoa_giu_gia_tri": 0,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 12382,
      "ty_le_dien_khuyet_tren_pj21_pct": 10.397,
      "so_o_quan_sat_tren_pj21": 106710,
      "ty_le_quan_sat_tren_pj21_pct": 89.603,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Ease of Online Booking",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 18566,
      "thieu_ma_an_raw": 9181,
      "thieu_raw": 27747,
      "ty_le_thieu_raw_pct": 21.3636,
      "sai_dinh_dang_raw": 8393,
      "ngoai_mien_raw": 10930,
      "o_trung_2_loi_raw": 1644,
      "tong_luot_loi_raw": 47070,
      "so_o_loi_duy_nhat_raw": 45426,
      "ty_le_o_loi_raw_pct": 34.9754,
      "o_loi_thuoc_dong_bi_loai": 3824,
      "o_loi_duoc_sua_dong_giu_lai": 41602,
      "o_chuan_hoa_giu_gia_tri": 6179,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 35423,
      "ty_le_dien_khuyet_tren_pj21_pct": 29.7442,
      "so_o_quan_sat_tren_pj21": 83669,
      "ty_le_quan_sat_tren_pj21_pct": 70.2558,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Check-in Service",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 5900,
      "thieu_ma_an_raw": 2939,
      "thieu_raw": 8839,
      "ty_le_thieu_raw_pct": 6.8055,
      "sai_dinh_dang_raw": 12125,
      "ngoai_mien_raw": 6352,
      "o_trung_2_loi_raw": 3326,
      "tong_luot_loi_raw": 27316,
      "so_o_loi_duy_nhat_raw": 23990,
      "ty_le_o_loi_raw_pct": 18.4709,
      "o_loi_thuoc_dong_bi_loai": 1968,
      "o_loi_duoc_sua_dong_giu_lai": 22022,
      "o_chuan_hoa_giu_gia_tri": 8074,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 13948,
      "ty_le_dien_khuyet_tren_pj21_pct": 11.712,
      "so_o_quan_sat_tren_pj21": 105144,
      "ty_le_quan_sat_tren_pj21_pct": 88.288,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Online Boarding",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 16706,
      "thieu_ma_an_raw": 8417,
      "thieu_raw": 25123,
      "ty_le_thieu_raw_pct": 19.3432,
      "sai_dinh_dang_raw": 14511,
      "ngoai_mien_raw": 9732,
      "o_trung_2_loi_raw": 1432,
      "tong_luot_loi_raw": 49366,
      "so_o_loi_duy_nhat_raw": 47934,
      "ty_le_o_loi_raw_pct": 36.9064,
      "o_loi_thuoc_dong_bi_loai": 3974,
      "o_loi_duoc_sua_dong_giu_lai": 43960,
      "o_chuan_hoa_giu_gia_tri": 12002,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 31958,
      "ty_le_dien_khuyet_tren_pj21_pct": 26.8347,
      "so_o_quan_sat_tren_pj21": 87134,
      "ty_le_quan_sat_tren_pj21_pct": 73.1653,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Gate Location",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 13097,
      "thieu_ma_an_raw": 6531,
      "thieu_raw": 19628,
      "ty_le_thieu_raw_pct": 15.1124,
      "sai_dinh_dang_raw": 17888,
      "ngoai_mien_raw": 9483,
      "o_trung_2_loi_raw": 2962,
      "tong_luot_loi_raw": 46999,
      "so_o_loi_duy_nhat_raw": 44037,
      "ty_le_o_loi_raw_pct": 33.9059,
      "o_loi_thuoc_dong_bi_loai": 3688,
      "o_loi_duoc_sua_dong_giu_lai": 40349,
      "o_chuan_hoa_giu_gia_tri": 13678,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 26671,
      "ty_le_dien_khuyet_tren_pj21_pct": 22.3953,
      "so_o_quan_sat_tren_pj21": 92421,
      "ty_le_quan_sat_tren_pj21_pct": 77.6047,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "On-board Service",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 3799,
      "thieu_ma_an_raw": 1866,
      "thieu_raw": 5665,
      "ty_le_thieu_raw_pct": 4.3617,
      "sai_dinh_dang_raw": 11481,
      "ngoai_mien_raw": 4701,
      "o_trung_2_loi_raw": 2828,
      "tong_luot_loi_raw": 21847,
      "so_o_loi_duy_nhat_raw": 19019,
      "ty_le_o_loi_raw_pct": 14.6435,
      "o_loi_thuoc_dong_bi_loai": 1613,
      "o_loi_duoc_sua_dong_giu_lai": 17406,
      "o_chuan_hoa_giu_gia_tri": 7906,
      "gia_tri_dien_khuyet": "4",
      "so_o_dien_khuyet_tren_pj21": 9500,
      "ty_le_dien_khuyet_tren_pj21_pct": 7.977,
      "so_o_quan_sat_tren_pj21": 109592,
      "ty_le_quan_sat_tren_pj21_pct": 92.023,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Seat Comfort",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 8539,
      "thieu_ma_an_raw": 4132,
      "thieu_raw": 12671,
      "ty_le_thieu_raw_pct": 9.7559,
      "sai_dinh_dang_raw": 8737,
      "ngoai_mien_raw": 5999,
      "o_trung_2_loi_raw": 1860,
      "tong_luot_loi_raw": 27407,
      "so_o_loi_duy_nhat_raw": 25547,
      "ty_le_o_loi_raw_pct": 19.6697,
      "o_loi_thuoc_dong_bi_loai": 2110,
      "o_loi_duoc_sua_dong_giu_lai": 23437,
      "o_chuan_hoa_giu_gia_tri": 6318,
      "gia_tri_dien_khuyet": "4",
      "so_o_dien_khuyet_tren_pj21": 17119,
      "ty_le_dien_khuyet_tren_pj21_pct": 14.3746,
      "so_o_quan_sat_tren_pj21": 101973,
      "ty_le_quan_sat_tren_pj21_pct": 85.6254,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Leg Room Service",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 3301,
      "thieu_ma_an_raw": 1642,
      "thieu_raw": 4943,
      "ty_le_thieu_raw_pct": 3.8058,
      "sai_dinh_dang_raw": 19692,
      "ngoai_mien_raw": 4178,
      "o_trung_2_loi_raw": 2621,
      "tong_luot_loi_raw": 28813,
      "so_o_loi_duy_nhat_raw": 26192,
      "ty_le_o_loi_raw_pct": 20.1663,
      "o_loi_thuoc_dong_bi_loai": 2204,
      "o_loi_duoc_sua_dong_giu_lai": 23988,
      "o_chuan_hoa_giu_gia_tri": 15650,
      "gia_tri_dien_khuyet": "4",
      "so_o_dien_khuyet_tren_pj21": 8338,
      "ty_le_dien_khuyet_tren_pj21_pct": 7.0013,
      "so_o_quan_sat_tren_pj21": 110754,
      "ty_le_quan_sat_tren_pj21_pct": 92.9987,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Cleanliness",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 19909,
      "thieu_ma_an_raw": 9781,
      "thieu_raw": 29690,
      "ty_le_thieu_raw_pct": 22.8596,
      "sai_dinh_dang_raw": 9924,
      "ngoai_mien_raw": 12182,
      "o_trung_2_loi_raw": 2288,
      "tong_luot_loi_raw": 51796,
      "so_o_loi_duy_nhat_raw": 49508,
      "ty_le_o_loi_raw_pct": 38.1183,
      "o_loi_thuoc_dong_bi_loai": 4067,
      "o_loi_duoc_sua_dong_giu_lai": 45441,
      "o_chuan_hoa_giu_gia_tri": 7000,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 38441,
      "ty_le_dien_khuyet_tren_pj21_pct": 32.2784,
      "so_o_quan_sat_tren_pj21": 80651,
      "ty_le_quan_sat_tren_pj21_pct": 67.7216,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Food and Drink",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 16796,
      "thieu_ma_an_raw": 8272,
      "thieu_raw": 25068,
      "ty_le_thieu_raw_pct": 19.3009,
      "sai_dinh_dang_raw": 15638,
      "ngoai_mien_raw": 9674,
      "o_trung_2_loi_raw": 1305,
      "tong_luot_loi_raw": 50380,
      "so_o_loi_duy_nhat_raw": 49075,
      "ty_le_o_loi_raw_pct": 37.7849,
      "o_loi_thuoc_dong_bi_loai": 4051,
      "o_loi_duoc_sua_dong_giu_lai": 45024,
      "o_chuan_hoa_giu_gia_tri": 13122,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 31902,
      "ty_le_dien_khuyet_tren_pj21_pct": 26.7877,
      "so_o_quan_sat_tren_pj21": 87190,
      "ty_le_quan_sat_tren_pj21_pct": 73.2123,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "In-flight Service",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 4514,
      "thieu_ma_an_raw": 2200,
      "thieu_raw": 6714,
      "ty_le_thieu_raw_pct": 5.1694,
      "sai_dinh_dang_raw": 18897,
      "ngoai_mien_raw": 5346,
      "o_trung_2_loi_raw": 3131,
      "tong_luot_loi_raw": 30957,
      "so_o_loi_duy_nhat_raw": 27826,
      "ty_le_o_loi_raw_pct": 21.4244,
      "o_loi_thuoc_dong_bi_loai": 2324,
      "o_loi_duoc_sua_dong_giu_lai": 25502,
      "o_chuan_hoa_giu_gia_tri": 14459,
      "gia_tri_dien_khuyet": "4",
      "so_o_dien_khuyet_tren_pj21": 11043,
      "ty_le_dien_khuyet_tren_pj21_pct": 9.2727,
      "so_o_quan_sat_tren_pj21": 108049,
      "ty_le_quan_sat_tren_pj21_pct": 90.7273,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "In-flight Wifi Service",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 11502,
      "thieu_ma_an_raw": 5759,
      "thieu_raw": 17261,
      "ty_le_thieu_raw_pct": 13.29,
      "sai_dinh_dang_raw": 13091,
      "ngoai_mien_raw": 8187,
      "o_trung_2_loi_raw": 2304,
      "tong_luot_loi_raw": 38539,
      "so_o_loi_duy_nhat_raw": 36235,
      "ty_le_o_loi_raw_pct": 27.8988,
      "o_loi_thuoc_dong_bi_loai": 3018,
      "o_loi_duoc_sua_dong_giu_lai": 33217,
      "o_chuan_hoa_giu_gia_tri": 9899,
      "gia_tri_dien_khuyet": "3",
      "so_o_dien_khuyet_tren_pj21": 23318,
      "ty_le_dien_khuyet_tren_pj21_pct": 19.5798,
      "so_o_quan_sat_tren_pj21": 95774,
      "ty_le_quan_sat_tren_pj21_pct": 80.4202,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "In-flight Entertainment",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 5043,
      "thieu_ma_an_raw": 2494,
      "thieu_raw": 7537,
      "ty_le_thieu_raw_pct": 5.803,
      "sai_dinh_dang_raw": 12716,
      "ngoai_mien_raw": 5214,
      "o_trung_2_loi_raw": 2819,
      "tong_luot_loi_raw": 25467,
      "so_o_loi_duy_nhat_raw": 22648,
      "ty_le_o_loi_raw_pct": 17.4376,
      "o_loi_thuoc_dong_bi_loai": 1843,
      "o_loi_duoc_sua_dong_giu_lai": 20805,
      "o_chuan_hoa_giu_gia_tri": 9122,
      "gia_tri_dien_khuyet": "4",
      "so_o_dien_khuyet_tren_pj21": 11683,
      "ty_le_dien_khuyet_tren_pj21_pct": 9.8101,
      "so_o_quan_sat_tren_pj21": 107409,
      "ty_le_quan_sat_tren_pj21_pct": 90.1899,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Baggage Handling",
      "nhom": "Điểm dịch vụ",
      "thieu_doc_csv_raw": 13082,
      "thieu_ma_an_raw": 6366,
      "thieu_raw": 19448,
      "ty_le_thieu_raw_pct": 14.9738,
      "sai_dinh_dang_raw": 18066,
      "ngoai_mien_raw": 9427,
      "o_trung_2_loi_raw": 3035,
      "tong_luot_loi_raw": 46941,
      "so_o_loi_duy_nhat_raw": 43906,
      "ty_le_o_loi_raw_pct": 33.8051,
      "o_loi_thuoc_dong_bi_loai": 3766,
      "o_loi_duoc_sua_dong_giu_lai": 40140,
      "o_chuan_hoa_giu_gia_tri": 13772,
      "gia_tri_dien_khuyet": "4",
      "so_o_dien_khuyet_tren_pj21": 26368,
      "ty_le_dien_khuyet_tren_pj21_pct": 22.1409,
      "so_o_quan_sat_tren_pj21": 92724,
      "ty_le_quan_sat_tren_pj21_pct": 77.8591,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "int64",
      "kieu_toi_uu": "int8"
    },
    {
      "bien": "Satisfaction",
      "nhom": "Mục tiêu",
      "thieu_doc_csv_raw": 6828,
      "thieu_ma_an_raw": 3960,
      "thieu_raw": 10788,
      "ty_le_thieu_raw_pct": 8.3061,
      "sai_dinh_dang_raw": 38315,
      "ngoai_mien_raw": 0,
      "o_trung_2_loi_raw": 0,
      "tong_luot_loi_raw": 49103,
      "so_o_loi_duy_nhat_raw": 49103,
      "ty_le_o_loi_raw_pct": 37.8064,
      "o_loi_thuoc_dong_bi_loai": 10788,
      "o_loi_duoc_sua_dong_giu_lai": 38315,
      "o_chuan_hoa_giu_gia_tri": 38315,
      "gia_tri_dien_khuyet": "Không điền",
      "so_o_dien_khuyet_tren_pj21": 0,
      "ty_le_dien_khuyet_tren_pj21_pct": 0.0,
      "so_o_quan_sat_tren_pj21": 119092,
      "ty_le_quan_sat_tren_pj21_pct": 100.0,
      "thieu_sau": 0,
      "sai_dd_sau": 0,
      "ngoai_mien_sau": 0,
      "tong_loi_sau": 0,
      "o_loi_duy_nhat_sau": 0,
      "kieu_pj21": "str",
      "kieu_toi_uu": "category"
    }
  ],
  "thong_ke_mo_ta": [
    {
      "bien": "Age",
      "count": 119092.0,
      "mean": 39.4918,
      "std": 14.5398,
      "min": 7.0,
      "25%": 28.0,
      "50%": 40.0,
      "75%": 50.0,
      "99%": 70.0,
      "max": 100.0
    },
    {
      "bien": "Flight Distance",
      "count": 119092.0,
      "mean": 1135.5448,
      "std": 941.6384,
      "min": 31.0,
      "25%": 502.0,
      "50%": 846.0,
      "75%": 1476.0,
      "99%": 3883.0,
      "max": 9910.0
    },
    {
      "bien": "Departure Delay",
      "count": 119092.0,
      "mean": 10.3205,
      "std": 43.3579,
      "min": 0.0,
      "25%": 0.0,
      "50%": 0.0,
      "75%": 3.0,
      "99%": 156.0,
      "max": 2000.0
    },
    {
      "bien": "Arrival Delay",
      "count": 119092.0,
      "mean": 15.4135,
      "std": 54.8828,
      "min": 0.0,
      "25%": 0.0,
      "50%": 0.0,
      "75%": 11.0,
      "99%": 187.0,
      "max": 2000.0
    },
    {
      "bien": "Departure and Arrival Time Convenience",
      "count": 119092.0,
      "mean": 3.0535,
      "std": 1.4454,
      "min": 0.0,
      "25%": 2.0,
      "50%": 3.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Ease of Online Booking",
      "count": 119092.0,
      "mean": 2.8275,
      "std": 1.1795,
      "min": 0.0,
      "25%": 2.0,
      "50%": 3.0,
      "75%": 3.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Check-in Service",
      "count": 119092.0,
      "mean": 3.2672,
      "std": 1.1952,
      "min": 1.0,
      "25%": 3.0,
      "50%": 3.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Online Boarding",
      "count": 119092.0,
      "mean": 3.1846,
      "std": 1.1616,
      "min": 0.0,
      "25%": 3.0,
      "50%": 3.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Gate Location",
      "count": 119092.0,
      "mean": 2.9799,
      "std": 1.1247,
      "min": 0.0,
      "25%": 2.0,
      "50%": 3.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "On-board Service",
      "count": 119092.0,
      "mean": 3.4342,
      "std": 1.2443,
      "min": 0.0,
      "25%": 3.0,
      "50%": 4.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Seat Comfort",
      "count": 119092.0,
      "mean": 3.5267,
      "std": 1.2359,
      "min": 1.0,
      "25%": 3.0,
      "50%": 4.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Leg Room Service",
      "count": 119092.0,
      "mean": 3.3953,
      "std": 1.2814,
      "min": 0.0,
      "25%": 2.0,
      "50%": 4.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Cleanliness",
      "count": 119092.0,
      "mean": 3.1965,
      "std": 1.0874,
      "min": 0.0,
      "25%": 3.0,
      "50%": 3.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Food and Drink",
      "count": 119092.0,
      "mean": 3.1509,
      "std": 1.1428,
      "min": 0.0,
      "25%": 3.0,
      "50%": 3.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "In-flight Service",
      "count": 119092.0,
      "mean": 3.6746,
      "std": 1.1253,
      "min": 0.0,
      "25%": 3.0,
      "50%": 4.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "In-flight Wifi Service",
      "count": 119092.0,
      "mean": 2.7795,
      "std": 1.197,
      "min": 0.0,
      "25%": 2.0,
      "50%": 3.0,
      "75%": 3.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "In-flight Entertainment",
      "count": 119092.0,
      "mean": 3.423,
      "std": 1.2803,
      "min": 0.0,
      "25%": 2.0,
      "50%": 4.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    },
    {
      "bien": "Baggage Handling",
      "count": 119092.0,
      "mean": 3.7156,
      "std": 1.0513,
      "min": 1.0,
      "25%": 3.0,
      "50%": 4.0,
      "75%": 4.0,
      "99%": 5.0,
      "max": 5.0
    }
  ],
  "ngoai_lai_iqr": [
    {
      "bien": "Age",
      "Q1": 28.0,
      "Q3": 50.0,
      "IQR": 22.0,
      "can_duoi": -5.0,
      "can_tren": 83.0,
      "so_ngoai_lai": 29,
      "ty_le_pct": 0.0244
    },
    {
      "bien": "Flight Distance",
      "Q1": 502.0,
      "Q3": 1476.0,
      "IQR": 974.0,
      "can_duoi": -959.0,
      "can_tren": 2937.0,
      "so_ngoai_lai": 8301,
      "ty_le_pct": 6.9702
    },
    {
      "bien": "Departure Delay",
      "Q1": 0.0,
      "Q3": 3.0,
      "IQR": 3.0,
      "can_duoi": -4.5,
      "can_tren": 7.5,
      "so_ngoai_lai": 23540,
      "ty_le_pct": 19.7662
    },
    {
      "bien": "Arrival Delay",
      "Q1": 0.0,
      "Q3": 11.0,
      "IQR": 11.0,
      "can_duoi": -16.5,
      "can_tren": 27.5,
      "so_ngoai_lai": 17218,
      "ty_le_pct": 14.4577
    }
  ],
  "nhom_do_tre_arr": [
    {
      "Arrival Delay": "0 phút",
      "n": 70643,
      "hai_long": 33189,
      "ty_le": 46.9813,
      "n_quan_sat": 62605,
      "hai_long_quan_sat": 29642,
      "ty_le_quan_sat": 47.3477
    },
    {
      "Arrival Delay": "1–15 phút",
      "n": 23082,
      "hai_long": 9463,
      "ty_le": 40.9973,
      "n_quan_sat": 23082,
      "hai_long_quan_sat": 9463,
      "ty_le_quan_sat": 40.9973
    },
    {
      "Arrival Delay": "16–60 phút",
      "n": 17390,
      "hai_long": 6230,
      "ty_le": 35.8252,
      "n_quan_sat": 17390,
      "hai_long_quan_sat": 6230,
      "ty_le_quan_sat": 35.8252
    },
    {
      "Arrival Delay": "Trên 60 phút",
      "n": 7977,
      "hai_long": 2858,
      "ty_le": 35.828,
      "n_quan_sat": 7977,
      "hai_long_quan_sat": 2858,
      "ty_le_quan_sat": 35.828
    }
  ],
  "nhom_do_tre_dep": [
    {
      "Departure Delay": "0 phút",
      "n": 85434,
      "hai_long": 38149,
      "ty_le": 44.6532,
      "n_quan_sat": 44020,
      "hai_long_quan_sat": 20092,
      "ty_le_quan_sat": 45.6429
    },
    {
      "Departure Delay": "1–15 phút",
      "n": 16439,
      "hai_long": 7131,
      "ty_le": 43.3786,
      "n_quan_sat": 16439,
      "hai_long_quan_sat": 7131,
      "ty_le_quan_sat": 43.3786
    },
    {
      "Departure Delay": "16–60 phút",
      "n": 11765,
      "hai_long": 4498,
      "ty_le": 38.232,
      "n_quan_sat": 11765,
      "hai_long_quan_sat": 4498,
      "ty_le_quan_sat": 38.232
    },
    {
      "Departure Delay": "Trên 60 phút",
      "n": 5454,
      "hai_long": 1962,
      "ty_le": 35.9736,
      "n_quan_sat": 5454,
      "hai_long_quan_sat": 1962,
      "ty_le_quan_sat": 35.9736
    }
  ],
  "segments": {
    "Class": {
      "full": [
        {
          "nhom": "Business",
          "n": 61826,
          "hai_long": 40611,
          "ty_le": 65.686
        },
        {
          "nhom": "Economy",
          "n": 49327,
          "hai_long": 9174,
          "ty_le": 18.5983
        },
        {
          "nhom": "Economy Plus",
          "n": 7939,
          "hai_long": 1955,
          "ty_le": 24.6253
        }
      ],
      "observed": [
        {
          "nhom": "Business",
          "n": 52713,
          "hai_long": 36610,
          "ty_le": 69.4516
        },
        {
          "nhom": "Economy",
          "n": 49327,
          "hai_long": 9174,
          "ty_le": 18.5983
        },
        {
          "nhom": "Economy Plus",
          "n": 7939,
          "hai_long": 1955,
          "ty_le": 24.6253
        }
      ],
      "imputed": {
        "n": 9113,
        "hai_long": 4001,
        "ty_le": 43.9043
      }
    },
    "Type of Travel": {
      "full": [
        {
          "nhom": "Business Travel",
          "n": 50834,
          "hai_long": 29566,
          "ty_le": 58.1619
        },
        {
          "nhom": "Personal Travel",
          "n": 22651,
          "hai_long": 2353,
          "ty_le": 10.3881
        },
        {
          "nhom": "Unknown",
          "n": 45607,
          "hai_long": 19821,
          "ty_le": 43.4604
        }
      ],
      "observed": [
        {
          "nhom": "Business Travel",
          "n": 50834,
          "hai_long": 29566,
          "ty_le": 58.1619
        },
        {
          "nhom": "Personal Travel",
          "n": 22651,
          "hai_long": 2353,
          "ty_le": 10.3881
        }
      ],
      "imputed": {
        "n": 45607,
        "hai_long": 19821,
        "ty_le": 43.4604
      }
    },
    "Customer Type": {
      "full": [
        {
          "nhom": "First-time Customer",
          "n": 14481,
          "hai_long": 3458,
          "ty_le": 23.8796
        },
        {
          "nhom": "Returning Customer",
          "n": 64203,
          "hai_long": 30859,
          "ty_le": 48.0647
        },
        {
          "nhom": "Unknown",
          "n": 40408,
          "hai_long": 17423,
          "ty_le": 43.1177
        }
      ],
      "observed": [
        {
          "nhom": "First-time Customer",
          "n": 14481,
          "hai_long": 3458,
          "ty_le": 23.8796
        },
        {
          "nhom": "Returning Customer",
          "n": 64203,
          "hai_long": 30859,
          "ty_le": 48.0647
        }
      ],
      "imputed": {
        "n": 40408,
        "hai_long": 17423,
        "ty_le": 43.1177
      }
    },
    "Gender": {
      "full": [
        {
          "nhom": "Female",
          "n": 65241,
          "hai_long": 28064,
          "ty_le": 43.0159
        },
        {
          "nhom": "Male",
          "n": 53851,
          "hai_long": 23676,
          "ty_le": 43.9658
        }
      ],
      "observed": [
        {
          "nhom": "Female",
          "n": 55724,
          "hai_long": 23936,
          "ty_le": 42.9546
        },
        {
          "nhom": "Male",
          "n": 53851,
          "hai_long": 23676,
          "ty_le": 43.9658
        }
      ],
      "imputed": {
        "n": 9517,
        "hai_long": 4128,
        "ty_le": 43.375
      }
    }
  },
  "age_dist": {
    "bins": [
      "5–9",
      "10–14",
      "15–19",
      "20–24",
      "25–29",
      "30–34",
      "35–39",
      "40–44",
      "45–49",
      "50–54",
      "55–59",
      "60–64",
      "65–69",
      "70–74",
      "75–79",
      "80–84",
      "85–89",
      "90–94",
      "95–100"
    ],
    "full_counts": [
      1988,
      3468,
      4842,
      10493,
      11652,
      9322,
      12481,
      22032,
      12122,
      10655,
      9645,
      5299,
      3628,
      1056,
      291,
      89,
      21,
      4,
      4
    ],
    "obs_counts": [
      1988,
      3468,
      4842,
      10493,
      11652,
      9322,
      12481,
      13020,
      12122,
      10655,
      9645,
      5299,
      3628,
      1056,
      291,
      89,
      21,
      4,
      4
    ],
    "age_40_full": 11738,
    "age_40_obs": 2726,
    "age_40_imputed": 9012
  },
  "delay_box": {
    "arrival_log1p_full": {
      "Satisfied": {
        "n": 51740,
        "mean": 1.002,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 2.0794,
        "p90": 3.5553,
        "p95": 4.2047,
        "p99": 5.1705,
        "max": 7.6014,
        "upper_whisker": 5.1985
      },
      "Neutral or Dissatisfied": {
        "n": 67352,
        "mean": 1.3165,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 2.7081,
        "p90": 3.8712,
        "p95": 4.4427,
        "p99": 5.2933,
        "max": 7.6014,
        "upper_whisker": 6.7581
      }
    },
    "arrival_log1p_obs": {
      "Satisfied": {
        "n": 48193,
        "mean": 1.0758,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 2.1972,
        "p90": 3.6376,
        "p95": 4.2485,
        "p99": 5.1985,
        "max": 7.6014,
        "upper_whisker": 5.4931
      },
      "Neutral or Dissatisfied": {
        "n": 62861,
        "mean": 1.4106,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 2.8332,
        "p90": 3.9512,
        "p95": 4.4886,
        "p99": 5.323,
        "max": 7.6014,
        "upper_whisker": 7.0175
      }
    },
    "arrival_raw_full": {
      "Satisfied": {
        "n": 51740,
        "mean": 12.8054,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 7.0,
        "p90": 34.0,
        "p95": 66.0,
        "p99": 175.0,
        "max": 2000.0,
        "upper_whisker": 17.0
      },
      "Neutral or Dissatisfied": {
        "n": 67352,
        "mean": 17.4171,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 14.0,
        "p90": 47.0,
        "p95": 84.0,
        "p99": 198.0,
        "max": 2000.0,
        "upper_whisker": 35.0
      }
    },
    "arrival_raw_obs": {
      "Satisfied": {
        "n": 48193,
        "mean": 13.7478,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 8.0,
        "p90": 37.0,
        "p95": 69.0,
        "p99": 180.0,
        "max": 2000.0,
        "upper_whisker": 20.0
      },
      "Neutral or Dissatisfied": {
        "n": 62861,
        "mean": 18.6615,
        "min": 0.0,
        "q1": 0.0,
        "median": 0.0,
        "q3": 16.0,
        "p90": 51.0,
        "p95": 88.0,
        "p99": 204.0,
        "max": 2000.0,
        "upper_whisker": 40.0
      }
    }
  },
  "spearman_sensitivity": [
    {
      "bien": "Departure and Arrival Time Convenience",
      "giu_0": -0.0503,
      "bo_0": -0.0473,
      "quan_sat": -0.052,
      "so_o_khac_0": 113602,
      "so_o_diem_0": 5490,
      "so_o_quan_sat": 106710,
      "so_o_dien_khuyet": 12382,
      "ty_le_dien_khuyet_pct": 10.397,
      "gia_tri_dien": "3",
      "hang_giu_0": 14,
      "hang_bo_0": 14,
      "hang_quan_sat": 14
    },
    {
      "bien": "Ease of Online Booking",
      "giu_0": 0.1533,
      "bo_0": 0.194,
      "quan_sat": 0.1696,
      "so_o_khac_0": 115364,
      "so_o_diem_0": 3728,
      "so_o_quan_sat": 83669,
      "so_o_dien_khuyet": 35423,
      "ty_le_dien_khuyet_pct": 29.7442,
      "gia_tri_dien": "3",
      "hang_giu_0": 12,
      "hang_bo_0": 11,
      "hang_quan_sat": 12
    },
    {
      "bien": "Check-in Service",
      "giu_0": 0.2181,
      "bo_0": 0.2181,
      "quan_sat": 0.2354,
      "so_o_khac_0": 119092,
      "so_o_diem_0": 0,
      "so_o_quan_sat": 105144,
      "so_o_dien_khuyet": 13948,
      "ty_le_dien_khuyet_pct": 11.712,
      "gia_tri_dien": "3",
      "hang_giu_0": 10,
      "hang_bo_0": 10,
      "hang_quan_sat": 10
    },
    {
      "bien": "Online Boarding",
      "giu_0": 0.4636,
      "bo_0": 0.49,
      "quan_sat": 0.5513,
      "so_o_khac_0": 117003,
      "so_o_diem_0": 2089,
      "so_o_quan_sat": 87134,
      "so_o_dien_khuyet": 31958,
      "ty_le_dien_khuyet_pct": 26.8347,
      "gia_tri_dien": "3",
      "hang_giu_0": 1,
      "hang_bo_0": 1,
      "hang_quan_sat": 1
    },
    {
      "bien": "Gate Location",
      "giu_0": -0.0096,
      "bo_0": -0.0096,
      "quan_sat": -0.0057,
      "so_o_khac_0": 119091,
      "so_o_diem_0": 1,
      "so_o_quan_sat": 92421,
      "so_o_dien_khuyet": 26671,
      "ty_le_dien_khuyet_pct": 22.3953,
      "gia_tri_dien": "3",
      "hang_giu_0": 13,
      "hang_bo_0": 13,
      "hang_quan_sat": 13
    },
    {
      "bien": "On-board Service",
      "giu_0": 0.3147,
      "bo_0": 0.3147,
      "quan_sat": 0.3299,
      "so_o_khac_0": 119087,
      "so_o_diem_0": 5,
      "so_o_quan_sat": 109592,
      "so_o_dien_khuyet": 9500,
      "ty_le_dien_khuyet_pct": 7.977,
      "gia_tri_dien": "4",
      "hang_giu_0": 4,
      "hang_bo_0": 5,
      "hang_quan_sat": 4
    },
    {
      "bien": "Seat Comfort",
      "giu_0": 0.3364,
      "bo_0": 0.3364,
      "quan_sat": 0.3621,
      "so_o_khac_0": 119092,
      "so_o_diem_0": 0,
      "so_o_quan_sat": 101973,
      "so_o_dien_khuyet": 17119,
      "ty_le_dien_khuyet_pct": 14.3746,
      "gia_tri_dien": "4",
      "hang_giu_0": 3,
      "hang_bo_0": 4,
      "hang_quan_sat": 3
    },
    {
      "bien": "Leg Room Service",
      "giu_0": 0.3046,
      "bo_0": 0.3059,
      "quan_sat": 0.3163,
      "so_o_khac_0": 118568,
      "so_o_diem_0": 524,
      "so_o_quan_sat": 110754,
      "so_o_dien_khuyet": 8338,
      "ty_le_dien_khuyet_pct": 7.0013,
      "gia_tri_dien": "4",
      "hang_giu_0": 5,
      "hang_bo_0": 6,
      "hang_quan_sat": 5
    },
    {
      "bien": "Cleanliness",
      "giu_0": 0.2536,
      "bo_0": 0.2536,
      "quan_sat": 0.3071,
      "so_o_khac_0": 119087,
      "so_o_diem_0": 5,
      "so_o_quan_sat": 80651,
      "so_o_dien_khuyet": 38441,
      "ty_le_dien_khuyet_pct": 32.2784,
      "gia_tri_dien": "3",
      "hang_giu_0": 8,
      "hang_bo_0": 8,
      "hang_quan_sat": 6
    },
    {
      "bien": "Food and Drink",
      "giu_0": 0.1751,
      "bo_0": 0.1753,
      "quan_sat": 0.2077,
      "so_o_khac_0": 119004,
      "so_o_diem_0": 88,
      "so_o_quan_sat": 87190,
      "so_o_dien_khuyet": 31902,
      "ty_le_dien_khuyet_pct": 26.7877,
      "gia_tri_dien": "3",
      "hang_giu_0": 11,
      "hang_bo_0": 12,
      "hang_quan_sat": 11
    },
    {
      "bien": "In-flight Service",
      "giu_0": 0.2558,
      "bo_0": 0.2558,
      "quan_sat": 0.2667,
      "so_o_khac_0": 119087,
      "so_o_diem_0": 5,
      "so_o_quan_sat": 108049,
      "so_o_dien_khuyet": 11043,
      "ty_le_dien_khuyet_pct": 9.2727,
      "gia_tri_dien": "4",
      "hang_giu_0": 7,
      "hang_bo_0": 7,
      "hang_quan_sat": 9
    },
    {
      "bien": "In-flight Wifi Service",
      "giu_0": 0.2689,
      "bo_0": 0.3383,
      "quan_sat": 0.2858,
      "so_o_khac_0": 116157,
      "so_o_diem_0": 2935,
      "so_o_quan_sat": 95774,
      "so_o_dien_khuyet": 23318,
      "ty_le_dien_khuyet_pct": 19.5798,
      "gia_tri_dien": "3",
      "hang_giu_0": 6,
      "hang_bo_0": 3,
      "hang_quan_sat": 7
    },
    {
      "bien": "In-flight Entertainment",
      "giu_0": 0.377,
      "bo_0": 0.3769,
      "quan_sat": 0.4002,
      "so_o_khac_0": 119077,
      "so_o_diem_0": 15,
      "so_o_quan_sat": 107409,
      "so_o_dien_khuyet": 11683,
      "ty_le_dien_khuyet_pct": 9.8101,
      "gia_tri_dien": "4",
      "hang_giu_0": 2,
      "hang_bo_0": 2,
      "hang_quan_sat": 2
    },
    {
      "bien": "Baggage Handling",
      "giu_0": 0.2426,
      "bo_0": 0.2426,
      "quan_sat": 0.2706,
      "so_o_khac_0": 119092,
      "so_o_diem_0": 0,
      "so_o_quan_sat": 92724,
      "so_o_dien_khuyet": 26368,
      "ty_le_dien_khuyet_pct": 22.1409,
      "gia_tri_dien": "4",
      "hang_giu_0": 9,
      "hang_bo_0": 9,
      "hang_quan_sat": 8
    }
  ],
  "spearman_matrix": {
    "labels": [
      "Departure and Arrival Time Convenience",
      "Ease of Online Booking",
      "Check-in Service",
      "Online Boarding",
      "Gate Location",
      "On-board Service",
      "Seat Comfort",
      "Leg Room Service",
      "Cleanliness",
      "Food and Drink",
      "In-flight Service",
      "In-flight Wifi Service",
      "In-flight Entertainment",
      "Baggage Handling",
      "Satisfaction (0/1)"
    ],
    "values": [
      [
        1.0,
        0.346,
        0.0886,
        0.0491,
        0.3749,
        0.0623,
        0.0067,
        0.0038,
        0.0045,
        -0.0023,
        0.0833,
        0.2866,
        -0.0132,
        0.077,
        -0.0503
      ],
      [
        0.346,
        1.0,
        0.0068,
        0.2669,
        0.3402,
        0.0317,
        0.0188,
        0.076,
        0.0098,
        0.0207,
        0.0286,
        0.5248,
        0.0319,
        0.0262,
        0.1533
      ],
      [
        0.0886,
        0.0068,
        1.0,
        0.171,
        -0.0344,
        0.2087,
        0.1729,
        0.1311,
        0.1349,
        0.0634,
        0.2251,
        0.0381,
        0.1061,
        0.2067,
        0.2181
      ],
      [
        0.0491,
        0.2669,
        0.171,
        1.0,
        -0.0064,
        0.1411,
        0.3381,
        0.108,
        0.2377,
        0.1706,
        0.0863,
        0.3388,
        0.2364,
        0.0879,
        0.4636
      ],
      [
        0.3749,
        0.3402,
        -0.0344,
        -0.0064,
        1.0,
        -0.026,
        -0.0026,
        -0.0069,
        -0.0061,
        -0.0039,
        -0.0095,
        0.2612,
        -0.0006,
        -0.0132,
        -0.0096
      ],
      [
        0.0623,
        0.0317,
        0.2087,
        0.1411,
        -0.026,
        1.0,
        0.1335,
        0.3343,
        0.0953,
        0.0427,
        0.5153,
        0.0993,
        0.3932,
        0.4488,
        0.3147
      ],
      [
        0.0067,
        0.0188,
        0.1729,
        0.3381,
        -0.0026,
        0.1335,
        1.0,
        0.1063,
        0.4904,
        0.4207,
        0.092,
        0.0999,
        0.5233,
        0.0922,
        0.3364
      ],
      [
        0.0038,
        0.076,
        0.1311,
        0.108,
        -0.0069,
        0.3343,
        0.1063,
        1.0,
        0.076,
        0.0236,
        0.3413,
        0.1274,
        0.2849,
        0.3121,
        0.3046
      ],
      [
        0.0045,
        0.0098,
        0.1349,
        0.2377,
        -0.0061,
        0.0953,
        0.4904,
        0.076,
        1.0,
        0.4452,
        0.0782,
        0.099,
        0.5097,
        0.0773,
        0.2536
      ],
      [
        -0.0023,
        0.0207,
        0.0634,
        0.1706,
        -0.0039,
        0.0427,
        0.4207,
        0.0236,
        0.4452,
        1.0,
        0.0387,
        0.1059,
        0.4802,
        0.0343,
        0.1751
      ],
      [
        0.0833,
        0.0286,
        0.2251,
        0.0863,
        -0.0095,
        0.5153,
        0.092,
        0.3413,
        0.0782,
        0.0387,
        1.0,
        0.0885,
        0.3835,
        0.5265,
        0.2558
      ],
      [
        0.2866,
        0.5248,
        0.0381,
        0.3388,
        0.2612,
        0.0993,
        0.0999,
        0.1274,
        0.099,
        0.1059,
        0.0885,
        1.0,
        0.1669,
        0.086,
        0.2689
      ],
      [
        -0.0132,
        0.0319,
        0.1061,
        0.2364,
        -0.0006,
        0.3932,
        0.5233,
        0.2849,
        0.5097,
        0.4802,
        0.3835,
        0.1669,
        1.0,
        0.3313,
        0.377
      ],
      [
        0.077,
        0.0262,
        0.2067,
        0.0879,
        -0.0132,
        0.4488,
        0.0922,
        0.3121,
        0.0773,
        0.0343,
        0.5265,
        0.086,
        0.3313,
        1.0,
        0.2426
      ],
      [
        -0.0503,
        0.1533,
        0.2181,
        0.4636,
        -0.0096,
        0.3147,
        0.3364,
        0.3046,
        0.2536,
        0.1751,
        0.2558,
        0.2689,
        0.377,
        0.2426,
        1.0
      ]
    ]
  },
  "examples_by_var": {
    "ID": [
      {
        "id": 10,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  10",
        "sau": "10",
        "giai_thich": "Chuẩn hóa: Cắt khoảng trắng đầu/cuối chuỗi '  10' và ép kiểu int64 → 10."
      },
      {
        "id": 11,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": " 11",
        "sau": "11",
        "giai_thich": "Chuẩn hóa: Cắt khoảng trắng đầu/cuối chuỗi ' 11' và ép kiểu int64 → 11."
      },
      {
        "id": 13,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": " 13",
        "sau": "13",
        "giai_thich": "Chuẩn hóa: Cắt khoảng trắng đầu/cuối chuỗi ' 13' và ép kiểu int64 → 13."
      },
      {
        "id": 15,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  15",
        "sau": "15",
        "giai_thich": "Chuẩn hóa: Cắt khoảng trắng đầu/cuối chuỗi '  15' và ép kiểu int64 → 15."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "1",
        "sau": "1",
        "giai_thich": "Hợp lệ: Giữ nguyên khóa định danh nguyên dương."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "2",
        "sau": "2",
        "giai_thich": "Hợp lệ: Giữ nguyên khóa định danh nguyên dương."
      }
    ],
    "Gender": [
      {
        "id": 16,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "MALE",
        "sau": "Male",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'MALE' → 'Male'."
      },
      {
        "id": 17,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "FEMALE",
        "sau": "Female",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'FEMALE' → 'Female'."
      },
      {
        "id": 26,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "MALE",
        "sau": "Male",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'MALE' → 'Male'."
      },
      {
        "id": 27,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Male  ",
        "sau": "Male",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Male  ' → 'Male'."
      },
      {
        "id": 49,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "male",
        "sau": "Male",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'male' → 'Male'."
      },
      {
        "id": 57,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "female",
        "sau": "Female",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'female' → 'Female'."
      },
      {
        "id": 5,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: NULL)",
        "truoc": "NULL",
        "sau": "Female",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn 'NULL' được điền giá trị phổ biến nhất (Mode = 'Female')."
      },
      {
        "id": 20,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: chưa rõ)",
        "truoc": "chưa rõ",
        "sau": "Female",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn 'chưa rõ' được điền giá trị phổ biến nhất (Mode = 'Female')."
      },
      {
        "id": 24,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "Female",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn '?' được điền giá trị phổ biến nhất (Mode = 'Female')."
      },
      {
        "id": 42,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "Female",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn 'N/A' được điền giá trị phổ biến nhất (Mode = 'Female')."
      },
      {
        "id": 46,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "Female",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn (trống) được điền giá trị phổ biến nhất (Mode = 'Female')."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Male",
        "sau": "Male",
        "giai_thich": "Hợp lệ: Giá trị phân loại đã đúng chuẩn."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Female",
        "sau": "Female",
        "giai_thich": "Hợp lệ: Giá trị phân loại đã đúng chuẩn."
      }
    ],
    "Age": [
      {
        "id": 62,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "31 USD",
        "sau": "31",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '31 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 31 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 97,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "18 đ",
        "sau": "18",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '18 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 18 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 110,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "27 %",
        "sau": "27",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '27 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 27 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 276,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "43 kg",
        "sau": "43",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '43 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 43 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 412,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "58 VND",
        "sau": "58",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '58 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 58 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 12015,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "70.0",
        "sau": "70",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '70.0' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 70 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 7,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "40",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 40."
      },
      {
        "id": 12,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "40",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 40."
      },
      {
        "id": 120,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "40",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 40."
      },
      {
        "id": 133,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "40",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 40."
      },
      {
        "id": 223,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "40",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 40."
      },
      {
        "id": 121,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "40",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..100), được chuyển thành NaN rồi điền trung vị = 40."
      },
      {
        "id": 262,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "40",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..100), được chuyển thành NaN rồi điền trung vị = 40."
      },
      {
        "id": 24,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "770.0",
        "sau": "40",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '770.0', phát hiện ngoài miền quy ước 0–100 nên chuyển thành NaN rồi điền trung vị = 40."
      },
      {
        "id": 36,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-42.0",
        "sau": "40",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-42.0', phát hiện ngoài miền quy ước 0–100 nên chuyển thành NaN rồi điền trung vị = 40."
      },
      {
        "id": 50,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-27.0",
        "sau": "40",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-27.0', phát hiện ngoài miền quy ước 0–100 nên chuyển thành NaN rồi điền trung vị = 40."
      },
      {
        "id": 137,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-45.0",
        "sau": "40",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-45.0', phát hiện ngoài miền quy ước 0–100 nên chuyển thành NaN rồi điền trung vị = 40."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "48",
        "sau": "48",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "35",
        "sau": "35",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Customer Type": [
      {
        "id": 8,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Returning ' → 'Returning Customer'."
      },
      {
        "id": 9,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Returning ' → 'Returning Customer'."
      },
      {
        "id": 13,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "FIRST-TIME",
        "sau": "First-time Customer",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'FIRST-TIME' → 'First-time Customer'."
      },
      {
        "id": 14,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Returning ' → 'Returning Customer'."
      },
      {
        "id": 17,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'RETURNING' → 'Returning Customer'."
      },
      {
        "id": 21,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt '  Returnin' → 'Returning Customer'."
      },
      {
        "id": 2,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: unknown)",
        "truoc": "unknown",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'unknown' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'None' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 5,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn '?' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 10,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn (trống) được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 15,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'null' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "First-time",
        "sau": "First-time Customer",
        "giai_thich": "Đồng nhất tên nhãn chuẩn: 'First-time' → 'First-time Customer'."
      },
      {
        "id": 6,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Returning",
        "sau": "Returning Customer",
        "giai_thich": "Đồng nhất tên nhãn chuẩn: 'Returning' → 'Returning Customer'."
      }
    ],
    "Type of Travel": [
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'BUSINESS' → 'Business Travel'."
      },
      {
        "id": 9,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  Busine",
        "sau": "Business Travel",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt '  Busine' → 'Business Travel'."
      },
      {
        "id": 11,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  Busine",
        "sau": "Business Travel",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt '  Busine' → 'Business Travel'."
      },
      {
        "id": 14,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "personal",
        "sau": "Personal Travel",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'personal' → 'Personal Travel'."
      },
      {
        "id": 17,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  Person",
        "sau": "Personal Travel",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt '  Person' → 'Personal Travel'."
      },
      {
        "id": 34,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "business",
        "sau": "Business Travel",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'business' → 'Business Travel'."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'N/A' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 10,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: chưa rõ)",
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'chưa rõ' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 12,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'None' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 13,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn 'null' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 19,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "Unknown",
        "giai_thich": "Điền khuyết (Gán nhãn riêng): Ô thiếu/mã ẩn '?' được gán danh mục độc lập 'Unknown' (không gộp vào nhóm đa số)."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Business",
        "sau": "Business Travel",
        "giai_thich": "Đồng nhất tên nhãn chuẩn: 'Business' → 'Business Travel'."
      },
      {
        "id": 15,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Personal",
        "sau": "Personal Travel",
        "giai_thich": "Đồng nhất tên nhãn chuẩn: 'Personal' → 'Personal Travel'."
      }
    ],
    "Class": [
      {
        "id": 11,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Business   ",
        "sau": "Business",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Business   ' → 'Business'."
      },
      {
        "id": 12,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Business   ",
        "sau": "Business",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Business   ' → 'Business'."
      },
      {
        "id": 15,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Economy   ",
        "sau": "Economy",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Economy   ' → 'Economy'."
      },
      {
        "id": 19,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Economy   ",
        "sau": "Economy",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Economy   ' → 'Economy'."
      },
      {
        "id": 30,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "business",
        "sau": "Business",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'business' → 'Business'."
      },
      {
        "id": 32,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  Economy",
        "sau": "Economy",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt '  Economy' → 'Economy'."
      },
      {
        "id": 16,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: chưa rõ)",
        "truoc": "chưa rõ",
        "sau": "Business",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn 'chưa rõ' được điền giá trị phổ biến nhất (Mode = 'Business')."
      },
      {
        "id": 28,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "Business",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn '?' được điền giá trị phổ biến nhất (Mode = 'Business')."
      },
      {
        "id": 39,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: NULL)",
        "truoc": "NULL",
        "sau": "Business",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn 'NULL' được điền giá trị phổ biến nhất (Mode = 'Business')."
      },
      {
        "id": 53,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: unknown)",
        "truoc": "unknown",
        "sau": "Business",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn 'unknown' được điền giá trị phổ biến nhất (Mode = 'Business')."
      },
      {
        "id": 94,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "Business",
        "giai_thich": "Điền khuyết (Mode toàn tập): Ô thiếu/mã ẩn (trống) được điền giá trị phổ biến nhất (Mode = 'Business')."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Business",
        "sau": "Business",
        "giai_thich": "Hợp lệ: Giá trị phân loại đã đúng chuẩn."
      },
      {
        "id": 13,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Economy",
        "sau": "Economy",
        "giai_thich": "Hợp lệ: Giá trị phân loại đã đúng chuẩn."
      }
    ],
    "Flight Distance": [
      {
        "id": 8,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "853 VND",
        "sau": "853",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '853 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 853 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 10,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2822 đ",
        "sau": "2822",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2822 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2822 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 13,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "453 USD",
        "sau": "453",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '453 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 453 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 28,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2867 kg",
        "sau": "2867",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2867 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2867 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 36,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2884 %",
        "sau": "2884",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2884 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2884 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 397,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1580.0",
        "sau": "1580",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1580.0' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1580 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 5,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "846",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 846."
      },
      {
        "id": 26,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "846",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 846."
      },
      {
        "id": 55,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "846",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 846."
      },
      {
        "id": 73,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "846",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 846."
      },
      {
        "id": 87,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "846",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 846."
      },
      {
        "id": 16,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "846",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..9999), được chuyển thành NaN rồi điền trung vị = 846."
      },
      {
        "id": 90,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "846",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..9999), được chuyển thành NaN rồi điền trung vị = 846."
      },
      {
        "id": 68,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-173.0",
        "sau": "846",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-173.0', phát hiện ngoài miền quy ước 0–9999 nên chuyển thành NaN rồi điền trung vị = 846."
      },
      {
        "id": 136,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "20290.0",
        "sau": "846",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '20290.0', phát hiện ngoài miền quy ước 0–9999 nên chuyển thành NaN rồi điền trung vị = 846."
      },
      {
        "id": 215,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "213000.0",
        "sau": "846",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '213000.0', phát hiện ngoài miền quy ước 0–9999 nên chuyển thành NaN rồi điền trung vị = 846."
      },
      {
        "id": 239,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-719.0",
        "sau": "846",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-719.0', phát hiện ngoài miền quy ước 0–9999 nên chuyển thành NaN rồi điền trung vị = 846."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "821",
        "sau": "821",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 4,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "1905",
        "sau": "1905",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Departure Delay": [
      {
        "id": 121,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "0 USD",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '0 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 154,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "0 %",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '0 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 157,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "0 kg",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '0 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 163,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "60.0",
        "sau": "60",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '60.0' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 60 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 243,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "14 VND",
        "sau": "14",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '14 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 14 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 378,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "0 đ",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '0 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 2,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 16,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 0."
      },
      {
        "id": 30,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 64,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 7,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "0",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..2000), được chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 13,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "0",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..2000), được chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 837,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "7000.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '7000.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 1023,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-98.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-98.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 1238,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "12300.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '12300.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 2292,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-85.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-85.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "2",
        "sau": "2",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 5,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "0",
        "sau": "0",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Arrival Delay": [
      {
        "id": 25,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 đ",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 32,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "0 kg",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '0 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 44,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 %",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 74,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 USD",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 118,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "192 VND",
        "sau": "192",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '192 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 192 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 207,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "0.0",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '0.0' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 35,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 61,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 0."
      },
      {
        "id": 75,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 276,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 291,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "0",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 0."
      },
      {
        "id": 60,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "0",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..2000), được chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 123,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "0",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..2000), được chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 840,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 959,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-34.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-34.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 1147,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "3000.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '3000.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 1197,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-71.0",
        "sau": "0",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-71.0', phát hiện ngoài miền quy ước 0–2000 nên chuyển thành NaN rồi điền trung vị = 0."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "39",
        "sau": "39",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Departure and Arrival Time Convenience": [
      {
        "id": 42,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: NULL)",
        "truoc": "NULL",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'NULL' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 43,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 57,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 121,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 136,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "2",
        "sau": "2",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Ease of Online Booking": [
      {
        "id": 35,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 %",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 62,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 88,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 %",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 115,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 kg",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 168,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 USD",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 246,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 VND",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 2,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 6,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 11,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 37,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 44,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 42,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 50,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 54,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "3000.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '3000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 82,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "1000.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '1000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 121,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "200.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '200.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 186,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "10.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '10.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 4,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "2",
        "sau": "2",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Check-in Service": [
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 VND",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 69,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 đ",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 96,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 kg",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 121,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 đ",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 210,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 %",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 320,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 USD",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 6,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 79,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 80,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 99,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 44,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 147,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 59,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "50.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '50.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 73,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "30.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '30.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 104,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-3.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-3.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 123,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-1.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-1.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Online Boarding": [
      {
        "id": 7,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 %",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 9,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 đ",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 10,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 USD",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 17,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 %",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 19,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 kg",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 58,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 VND",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 11,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 28,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 31,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 39,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 112,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 1,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 42,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "5000.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '5000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 92,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "500.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '500.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 132,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-2.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-2.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 240,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "50.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '50.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 8,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Gate Location": [
      {
        "id": 2,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 kg",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 USD",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 13,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 USD",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 16,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 %",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 64,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 đ",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 93,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 VND",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 14,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 45,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 52,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 60,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 80,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 178,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 74,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "4000.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '4000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 111,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "200.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '200.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 141,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 179,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-3.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-3.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 6,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "On-board Service": [
      {
        "id": 2,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 14,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 đ",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 22,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 USD",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 53,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 %",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 115,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 kg",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 425,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 VND",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 12,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 24,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 232,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 365,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 433,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 147,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 245,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 67,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "50.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '50.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 89,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "100.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '100.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 167,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-5.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-5.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 209,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "400.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '400.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 4,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Seat Comfort": [
      {
        "id": 31,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 %",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 41,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 đ",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 60,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 85,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 đ",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 101,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 VND",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 155,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 USD",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 5,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 6,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 22,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 32,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 4."
      },
      {
        "id": 118,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 4,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 42,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 83,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 170,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "200.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '200.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 184,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "400.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '400.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 227,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "5000.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '5000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Leg Room Service": [
      {
        "id": 2,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 VND",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 đ",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 8,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 USD",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 10,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 kg",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 17,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 %",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 1401,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "-0.0",
        "sau": "0",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '-0.0' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 0 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 42,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 47,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 4."
      },
      {
        "id": 82,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 88,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 97,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 145,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 223,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 177,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "400.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '400.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 242,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "50.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '50.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 282,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-3.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-3.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 295,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "2",
        "sau": "2",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 4,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Cleanliness": [
      {
        "id": 13,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 %",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 15,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 kg",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 25,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 kg",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 28,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 USD",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 49,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 VND",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 161,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 1,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 8,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 19,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 50,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 65,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 17,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 32,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 55,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "200.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '200.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 248,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "30.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '30.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 340,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "20.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '20.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 424,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "3000.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '3000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 4,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Food and Drink": [
      {
        "id": 11,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 VND",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 26,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 28,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 30,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 đ",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 88,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 %",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 160,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 kg",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 6,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 10,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: -)",
        "truoc": "-",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '-' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 25,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 41,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 68,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 19,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 32,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 65,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "500.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '500.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 350,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "40.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '40.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 627,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "50.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '50.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 1179,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "In-flight Service": [
      {
        "id": 1,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 USD",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 %",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 11,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 USD",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 32,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 đ",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 39,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 kg",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 110,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 VND",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 23,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 25,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 36,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 219,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 4."
      },
      {
        "id": 242,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 34,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 257,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 27,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "50.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '50.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 33,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-5.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-5.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 59,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 68,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-2.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-2.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 6,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "In-flight Wifi Service": [
      {
        "id": 4,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 USD",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 7,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 %",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 23,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 kg",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 39,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 USD",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 90,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 VND",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 101,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "1 đ",
        "sau": "1",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '1 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 1 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 16,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 19,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 3."
      },
      {
        "id": 20,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 32,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 58,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "3",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 3."
      },
      {
        "id": 54,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 75,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "3",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 43,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-2.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-2.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 166,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "200.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '200.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 226,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-3.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-3.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 279,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "300.0",
        "sau": "3",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '300.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 3."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "2",
        "sau": "2",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "In-flight Entertainment": [
      {
        "id": 4,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 9,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 USD",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 25,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 USD",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 33,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "2 kg",
        "sau": "2",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '2 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 2 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 49,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 VND",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 152,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 %",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 16,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 23,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 4."
      },
      {
        "id": 24,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 29,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 65,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 6,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 59,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 75,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "2000.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '2000.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 91,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 289,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "40.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '40.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 327,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-1.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-1.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 5,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "3",
        "sau": "3",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Baggage Handling": [
      {
        "id": 2,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 VND",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 VND' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 USD",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 USD' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 7,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "5 đ",
        "sau": "5",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '5 đ' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 5 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 8,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "3 %",
        "sau": "3",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '3 %' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 3 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 147,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "4 kg",
        "sau": "4",
        "giai_thich": "Chuẩn hóa định dạng số: Trích số nguyên hợp lệ từ '4 kg' (loại bỏ hậu tố đơn vị / khoảng trắng / đuôi .0) → 4 (bảo toàn giá trị quan sát)."
      },
      {
        "id": 12,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: N/A)",
        "truoc": "N/A",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'N/A' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 16,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: null)",
        "truoc": "null",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'null' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 20,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: None)",
        "truoc": "None",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn 'None' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 68,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Ô rỗng)",
        "truoc": "",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn (trống) được điền trung vị hợp lệ = 4."
      },
      {
        "id": 77,
        "loai": "dien_khuyet_thieu",
        "nhan_loai": "Điền khuyết (Từ ô trống / Mã thiếu ẩn)",
        "loi_goc": "Thiếu (Mã ẩn: ?)",
        "truoc": "?",
        "sau": "4",
        "giai_thich": "Điền khuyết (Trung vị toàn tập): Ô thiếu/mã ẩn '?' được điền trung vị hợp lệ = 4."
      },
      {
        "id": 69,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "9999",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '9999' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 90,
        "loai": "dien_khuyet_ngoai_mien",
        "nhan_loai": "Lọc ngoài miền BOUNDS → Điền trung vị",
        "loi_goc": "Ngoài miền quy ước",
        "truoc": "-1",
        "sau": "4",
        "giai_thich": "Lọc ngoài miền → Điền khuyết: Giá trị '-1' nằm ngoài miền quy ước (0..5), được chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 78,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "400.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '400.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 265,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-4.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-4.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 323,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "40.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '40.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 361,
        "loai": "trung_2_loi",
        "nhan_loai": "Trùng 2 lỗi (Sai ĐD + Ngoài miền) → Điền trung vị",
        "loi_goc": "Sai ĐD + Ngoài miền",
        "truoc": "-5.0",
        "sau": "4",
        "giai_thich": "Trùng 2 lỗi (Sai định dạng + Ngoài miền → Điền khuyết): Trích số từ '-5.0', phát hiện ngoài miền quy ước 0–5 nên chuyển thành NaN rồi điền trung vị = 4."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "5",
        "sau": "5",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      },
      {
        "id": 6,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "4",
        "sau": "4",
        "giai_thich": "Hợp lệ: Số nguyên nằm trong miền quy ước."
      }
    ],
    "Satisfaction": [
      {
        "id": 4,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Satisfied   ' → 'Satisfied'."
      },
      {
        "id": 5,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Satisfied   ' → 'Satisfied'."
      },
      {
        "id": 10,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'Satisfied   ' → 'Satisfied'."
      },
      {
        "id": 11,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt '  Neutral or Dissatisfi' → 'Neutral or Dissatisfied'."
      },
      {
        "id": 15,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'NEUTRAL OR DISSATISFIED' → 'Neutral or Dissatisfied'."
      },
      {
        "id": 54,
        "loai": "chuan_hoa",
        "nhan_loai": "Chuẩn hóa định dạng (Giữ giá trị thực)",
        "loi_goc": "Sai định dạng",
        "truoc": "satisfied",
        "sau": "Satisfied",
        "giai_thich": "Chuẩn hóa văn bản: Cắt khoảng trắng, chuẩn hóa hoa/thường và ánh xạ tiền tố cắt cụt 'satisfied' → 'Satisfied'."
      },
      {
        "id": 1,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "giai_thich": "Hợp lệ: Giá trị phân loại đã đúng chuẩn."
      },
      {
        "id": 2,
        "loai": "hop_le",
        "nhan_loai": "Hợp lệ gốc (Không có lỗi, giữ nguyên)",
        "loi_goc": "Không lỗi",
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "giai_thich": "Hợp lệ: Giá trị phân loại đã đúng chuẩn."
      }
    ]
  },
  "dropped_examples": [
    {
      "id": 3,
      "id_raw": "3",
      "satisfaction_raw": "?",
      "gender_raw": "Male",
      "age_raw": "41",
      "customer_type_raw": "Returning ",
      "type_of_travel_raw": "",
      "class_raw": "Business",
      "flight_distance_raw": "853",
      "ly_do": "Nhãn Satisfaction = '?' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 18,
      "id_raw": "18",
      "satisfaction_raw": "",
      "gender_raw": "Female",
      "age_raw": "61",
      "customer_type_raw": "  Returnin",
      "type_of_travel_raw": "",
      "class_raw": "ECONOMY",
      "flight_distance_raw": "821",
      "ly_do": "Nhãn Satisfaction = (trống) (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 48,
      "id_raw": "48",
      "satisfaction_raw": "unknown",
      "gender_raw": "FEMALE",
      "age_raw": "40",
      "customer_type_raw": "First-time",
      "type_of_travel_raw": "BUSINESS",
      "class_raw": "Business",
      "flight_distance_raw": "212",
      "ly_do": "Nhãn Satisfaction = 'unknown' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 51,
      "id_raw": "51",
      "satisfaction_raw": "?",
      "gender_raw": "Male",
      "age_raw": "44",
      "customer_type_raw": "RETURNING",
      "type_of_travel_raw": "null",
      "class_raw": "Business",
      "flight_distance_raw": "1859",
      "ly_do": "Nhãn Satisfaction = '?' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 63,
      "id_raw": "63",
      "satisfaction_raw": "chưa rõ",
      "gender_raw": "FEMALE",
      "age_raw": "37",
      "customer_type_raw": "N/A",
      "type_of_travel_raw": "N/A",
      "class_raw": "Business",
      "flight_distance_raw": "2423",
      "ly_do": "Nhãn Satisfaction = 'chưa rõ' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 66,
      "id_raw": "66",
      "satisfaction_raw": "",
      "gender_raw": "Male",
      "age_raw": "36",
      "customer_type_raw": "chưa rõ",
      "type_of_travel_raw": "Business",
      "class_raw": "Business",
      "flight_distance_raw": "173",
      "ly_do": "Nhãn Satisfaction = (trống) (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 81,
      "id_raw": "81",
      "satisfaction_raw": "None",
      "gender_raw": "Female",
      "age_raw": "19",
      "customer_type_raw": "returning",
      "type_of_travel_raw": "NULL",
      "class_raw": "Economy",
      "flight_distance_raw": "215",
      "ly_do": "Nhãn Satisfaction = 'None' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 100,
      "id_raw": "100",
      "satisfaction_raw": "",
      "gender_raw": "Female",
      "age_raw": "230.0",
      "customer_type_raw": "first-time",
      "type_of_travel_raw": "  Busine",
      "class_raw": "Economy",
      "flight_distance_raw": "562",
      "ly_do": "Nhãn Satisfaction = (trống) (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 102,
      "id_raw": "102",
      "satisfaction_raw": "?",
      "gender_raw": "chưa rõ",
      "age_raw": "51",
      "customer_type_raw": "chưa rõ",
      "type_of_travel_raw": "Business",
      "class_raw": "Business",
      "flight_distance_raw": "-",
      "ly_do": "Nhãn Satisfaction = '?' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 109,
      "id_raw": "109",
      "satisfaction_raw": "None",
      "gender_raw": "null",
      "age_raw": "72",
      "customer_type_raw": "NULL",
      "type_of_travel_raw": "Business",
      "class_raw": "Business",
      "flight_distance_raw": "1954",
      "ly_do": "Nhãn Satisfaction = 'None' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 126,
      "id_raw": "126",
      "satisfaction_raw": "NULL",
      "gender_raw": "Male",
      "age_raw": "66",
      "customer_type_raw": "?",
      "type_of_travel_raw": "N/A",
      "class_raw": "economy",
      "flight_distance_raw": "562 %",
      "ly_do": "Nhãn Satisfaction = 'NULL' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    },
    {
      "id": 135,
      "id_raw": "  135",
      "satisfaction_raw": "?",
      "gender_raw": "male",
      "age_raw": "56",
      "customer_type_raw": "First-time",
      "type_of_travel_raw": "?",
      "class_raw": "Business",
      "flight_distance_raw": "227",
      "ly_do": "Nhãn Satisfaction = '?' (mã thiếu). Loại toàn bộ dòng để giữ 100% nhãn mục tiêu quan sát thực tế."
    }
  ],
  "full_records_lookup": {
    "1": {
      "ID": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "48",
        "sau": "48",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "2": {
      "ID": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "35",
        "sau": "35",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2 kg",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "4": {
      "ID": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1905",
        "sau": "1905",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2 USD",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "5": {
      "ID": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "NULL",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "49",
        "sau": "49",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "None",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3 VND",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3 USD",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3 USD",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "6": {
      "ID": {
        "truoc": "6",
        "sau": "6",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3788",
        "sau": "3788",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "7": {
      "ID": {
        "truoc": "7",
        "sau": "7",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1963",
        "sau": "1963",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "8": {
      "ID": {
        "truoc": "8",
        "sau": "8",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "60",
        "sau": "60",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853 VND",
        "sau": "853",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "9": {
      "ID": {
        "truoc": "9",
        "sau": "9",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2607",
        "sau": "2607",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2 đ",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "10": {
      "ID": {
        "truoc": "  10",
        "sau": "10",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "38",
        "sau": "38",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2822 đ",
        "sau": "2822",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "11": {
      "ID": {
        "truoc": " 11",
        "sau": "11",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "28",
        "sau": "28",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "12": {
      "ID": {
        "truoc": "12",
        "sau": "12",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "421",
        "sau": "421",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "21",
        "sau": "21",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "13": {
      "ID": {
        "truoc": " 13",
        "sau": "13",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "24",
        "sau": "24",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "FIRST-TIME",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "453 USD",
        "sau": "453",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "30",
        "sau": "30",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5 %",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "14": {
      "ID": {
        "truoc": "14",
        "sau": "14",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "9",
        "sau": "9",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "68",
        "sau": "68",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "76",
        "sau": "76",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 VND",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "15": {
      "ID": {
        "truoc": "  15",
        "sau": "15",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy   ",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2 kg",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "16": {
      "ID": {
        "truoc": "16",
        "sau": "16",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "MALE",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "70",
        "sau": "70",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "chưa rõ",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1 %",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "17": {
      "ID": {
        "truoc": "  17",
        "sau": "17",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "FEMALE",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "48",
        "sau": "48",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Person",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5 %",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "19": {
      "ID": {
        "truoc": "19",
        "sau": "19",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "11",
        "sau": "11",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy   ",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2 đ",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "20": {
      "ID": {
        "truoc": "20",
        "sau": "20",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "chưa rõ",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "21": {
      "ID": {
        "truoc": "21",
        "sau": "21",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "14",
        "sau": "14",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "22": {
      "ID": {
        "truoc": "22",
        "sau": "22",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "70",
        "sau": "70",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Person",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1 USD",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "23": {
      "ID": {
        "truoc": "23",
        "sau": "23",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "56",
        "sau": "56",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "24": {
      "ID": {
        "truoc": "24",
        "sau": "24",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "?",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "770.0",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy Plus",
        "sau": "Economy Plus",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "25": {
      "ID": {
        "truoc": "  25",
        "sau": "25",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "51",
        "sau": "51",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3460",
        "sau": "3460",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "2 đ",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "26": {
      "ID": {
        "truoc": "26",
        "sau": "26",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "MALE",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "47",
        "sau": "47",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "?",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "15",
        "sau": "15",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "27": {
      "ID": {
        "truoc": "27",
        "sau": "27",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male  ",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2168",
        "sau": "2168",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "24",
        "sau": "24",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "50.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "28": {
      "ID": {
        "truoc": "28",
        "sau": "28",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "58",
        "sau": "58",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "?",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2867 kg",
        "sau": "2867",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "29": {
      "ID": {
        "truoc": "29",
        "sau": "29",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "40",
        "sau": "40",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3734",
        "sau": "3734",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "30": {
      "ID": {
        "truoc": "30",
        "sau": "30",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "MALE",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "48",
        "sau": "48",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3088",
        "sau": "3088",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "12",
        "sau": "12",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "31": {
      "ID": {
        "truoc": "31",
        "sau": "31",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "35",
        "sau": "35",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "212",
        "sau": "212",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "32": {
      "ID": {
        "truoc": "32",
        "sau": "32",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "21",
        "sau": "21",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Economy",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0 kg",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "33": {
      "ID": {
        "truoc": "33",
        "sau": "33",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "33",
        "sau": "33",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  First-ti",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "22",
        "sau": "22",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "28",
        "sau": "28",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "-5.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2 kg",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "34": {
      "ID": {
        "truoc": "34",
        "sau": "34",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "48",
        "sau": "48",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "35": {
      "ID": {
        "truoc": "35",
        "sau": "35",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1672",
        "sau": "1672",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "23",
        "sau": "23",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "36": {
      "ID": {
        "truoc": "36",
        "sau": "36",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-42.0",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2884 %",
        "sau": "2884",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "37": {
      "ID": {
        "truoc": "37",
        "sau": "37",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "54",
        "sau": "54",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "212",
        "sau": "212",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "12",
        "sau": "12",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "26",
        "sau": "26",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "39": {
      "ID": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "46",
        "sau": "46",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "NULL",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3 USD",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "41": {
      "ID": {
        "truoc": "41",
        "sau": "41",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "54",
        "sau": "54",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1554",
        "sau": "1554",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "59",
        "sau": "59",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "70",
        "sau": "70",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "42": {
      "ID": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "N/A",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "45",
        "sau": "45",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108",
        "sau": "108",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "NULL",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "43": {
      "ID": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "54",
        "sau": "54",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1584",
        "sau": "1584",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "8",
        "sau": "8",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-2.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "44": {
      "ID": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "51",
        "sau": "51",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2077",
        "sau": "2077",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1 %",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "45": {
      "ID": {
        "truoc": "45",
        "sau": "45",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "56",
        "sau": "56",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "14",
        "sau": "14",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "46": {
      "ID": {
        "truoc": "46",
        "sau": "46",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "23",
        "sau": "23",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "16",
        "sau": "16",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "13",
        "sau": "13",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "47": {
      "ID": {
        "truoc": "  47",
        "sau": "47",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "24",
        "sau": "24",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  First-ti",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108",
        "sau": "108",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "49": {
      "ID": {
        "truoc": "49",
        "sau": "49",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108",
        "sau": "108",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "29",
        "sau": "29",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "50": {
      "ID": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-27.0",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "52": {
      "ID": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "20",
        "sau": "20",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "FIRST-TIME",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "10",
        "sau": "10",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "53": {
      "ID": {
        "truoc": "53",
        "sau": "53",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "37",
        "sau": "37",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "unknown",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "212",
        "sau": "212",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "54": {
      "ID": {
        "truoc": "  54",
        "sau": "54",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "40",
        "sau": "40",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2853 %",
        "sau": "2853",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "satisfied",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "55": {
      "ID": {
        "truoc": "55",
        "sau": "55",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "36",
        "sau": "36",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "N/A",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "71",
        "sau": "71",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "200.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "57": {
      "ID": {
        "truoc": "57",
        "sau": "57",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "female",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "56",
        "sau": "56",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2 đ",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "58": {
      "ID": {
        "truoc": "58",
        "sau": "58",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2199 kg",
        "sau": "2199",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "59": {
      "ID": {
        "truoc": "59",
        "sau": "59",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "female",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "41",
        "sau": "41",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3997",
        "sau": "3997",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "50.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "-4.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "60": {
      "ID": {
        "truoc": "60",
        "sau": "60",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "57",
        "sau": "57",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3392",
        "sau": "3392",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "19",
        "sau": "19",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1 kg",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "SATISFIED",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "61": {
      "ID": {
        "truoc": "61",
        "sau": "61",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "62": {
      "ID": {
        "truoc": "62",
        "sau": "62",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "31 USD",
        "sau": "31",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "151",
        "sau": "151",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "186",
        "sau": "186",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "64": {
      "ID": {
        "truoc": "64",
        "sau": "64",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male  ",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "56",
        "sau": "56",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "None",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "65": {
      "ID": {
        "truoc": "65",
        "sau": "65",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male  ",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "24",
        "sau": "24",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy   ",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108",
        "sau": "108",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "500.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "67": {
      "ID": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "50.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "68": {
      "ID": {
        "truoc": "68",
        "sau": "68",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "BUSINESS",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-173.0",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "-2.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "69": {
      "ID": {
        "truoc": "69",
        "sau": "69",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "212",
        "sau": "212",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1 kg",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1 %",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "73": {
      "ID": {
        "truoc": "73",
        "sau": "73",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "70",
        "sau": "70",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "null",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "None",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "30.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Satisfied",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "74": {
      "ID": {
        "truoc": "74",
        "sau": "74",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "25",
        "sau": "25",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "212",
        "sau": "212",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "10",
        "sau": "10",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1 USD",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "75": {
      "ID": {
        "truoc": "75",
        "sau": "75",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "female",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "23",
        "sau": "23",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  First-ti",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "2000.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "77": {
      "ID": {
        "truoc": "77",
        "sau": "77",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "72",
        "sau": "72",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  First-ti",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "?",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "67",
        "sau": "67",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "296",
        "sau": "296",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3 USD",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "78": {
      "ID": {
        "truoc": "78",
        "sau": "78",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "58",
        "sau": "58",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "400.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "79": {
      "ID": {
        "truoc": "79",
        "sau": "79",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "70",
        "sau": "70",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "ECONOMY",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "41",
        "sau": "41",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "SATISFIED",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "80": {
      "ID": {
        "truoc": "80",
        "sau": "80",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "46",
        "sau": "46",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "NULL",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "45",
        "sau": "45",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "29",
        "sau": "29",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "neutral or dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "82": {
      "ID": {
        "truoc": "82",
        "sau": "82",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108",
        "sau": "108",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "7",
        "sau": "7",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "83": {
      "ID": {
        "truoc": "83",
        "sau": "83",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "58",
        "sau": "58",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "215",
        "sau": "215",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "254",
        "sau": "254",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "254",
        "sau": "254",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-4.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "85": {
      "ID": {
        "truoc": "85",
        "sau": "85",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "53",
        "sau": "53",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "ECONOMY",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2 đ",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2 đ",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "87": {
      "ID": {
        "truoc": "87",
        "sau": "87",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "65",
        "sau": "65",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Economy",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 USD",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "88": {
      "ID": {
        "truoc": "88",
        "sau": "88",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "67 USD",
        "sau": "67",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1000.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "89": {
      "ID": {
        "truoc": "89",
        "sau": "89",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "53",
        "sau": "53",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy   ",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108 đ",
        "sau": "108",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "100.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "90": {
      "ID": {
        "truoc": "90",
        "sau": "90",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "41",
        "sau": "41",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-1",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "72",
        "sau": "72",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "78",
        "sau": "78",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "91": {
      "ID": {
        "truoc": "91",
        "sau": "91",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "32",
        "sau": "32",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173 USD",
        "sau": "173",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-4.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "92": {
      "ID": {
        "truoc": "92",
        "sau": "92",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2035 VND",
        "sau": "2035",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "34",
        "sau": "34",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "500.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5 %",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "93": {
      "ID": {
        "truoc": "93",
        "sau": "93",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3513",
        "sau": "3513",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "101",
        "sau": "101",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "123",
        "sau": "123",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1 %",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "94": {
      "ID": {
        "truoc": "94",
        "sau": "94",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "80",
        "sau": "80",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "108",
        "sau": "108",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "96": {
      "ID": {
        "truoc": "96",
        "sau": "96",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "N/A",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "34",
        "sau": "34",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy Plus",
        "sau": "Economy Plus",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "173",
        "sau": "173",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "neutral or dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "97": {
      "ID": {
        "truoc": "97",
        "sau": "97",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "18 đ",
        "sau": "18",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  First-ti",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy Plus",
        "sau": "Economy Plus",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "215",
        "sau": "215",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3 VND",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "99": {
      "ID": {
        "truoc": "99",
        "sau": "99",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "562",
        "sau": "562",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "None",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "18",
        "sau": "18",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "satisfied",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "101": {
      "ID": {
        "truoc": "101",
        "sau": "101",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "MALE",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2992",
        "sau": "2992",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "104": {
      "ID": {
        "truoc": "104",
        "sau": "104",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3227",
        "sau": "3227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-3.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-4.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "110": {
      "ID": {
        "truoc": "110",
        "sau": "110",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "27 %",
        "sau": "27",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "FIRST-TIME",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "562",
        "sau": "562",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "111": {
      "ID": {
        "truoc": "  111",
        "sau": "111",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2046 kg",
        "sau": "2046",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "104",
        "sau": "104",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "122",
        "sau": "122",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "200.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "112": {
      "ID": {
        "truoc": " 112",
        "sau": "112",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "11",
        "sau": "11",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "115": {
      "ID": {
        "truoc": "115",
        "sau": "115",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "12",
        "sau": "12",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "first-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "562",
        "sau": "562",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "25",
        "sau": "25",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "118": {
      "ID": {
        "truoc": "118",
        "sau": "118",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "32",
        "sau": "32",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "562",
        "sau": "562",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "192 VND",
        "sau": "192",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "120": {
      "ID": {
        "truoc": "120",
        "sau": "120",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "  Male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "N/A",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3043",
        "sau": "3043",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "38",
        "sau": "38",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "29",
        "sau": "29",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "121": {
      "ID": {
        "truoc": "121",
        "sau": "121",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "9999",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Economy",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "None",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0 USD",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "6",
        "sau": "6",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "200.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "2 kg",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "-3.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "123": {
      "ID": {
        "truoc": "123",
        "sau": "123",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "33",
        "sau": "33",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "562",
        "sau": "562",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-1.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "132": {
      "ID": {
        "truoc": "132",
        "sau": "132",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "59",
        "sau": "59",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "11",
        "sau": "11",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-2.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "133": {
      "ID": {
        "truoc": "133",
        "sau": "133",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "?",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227 USD",
        "sau": "227",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "38",
        "sau": "38",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "136": {
      "ID": {
        "truoc": "136",
        "sau": "136",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "20290.0",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "15",
        "sau": "15",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "137": {
      "ID": {
        "truoc": "137",
        "sau": "137",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-45.0",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "16",
        "sau": "16",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "141": {
      "ID": {
        "truoc": "141",
        "sau": "141",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "55",
        "sau": "55",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "7",
        "sau": "7",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-4.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "SATISFIED",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "145": {
      "ID": {
        "truoc": "  145",
        "sau": "145",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "16",
        "sau": "16",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "260",
        "sau": "260",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "147": {
      "ID": {
        "truoc": "147",
        "sau": "147",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "47",
        "sau": "47",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1946",
        "sau": "1946",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "136",
        "sau": "136",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "152": {
      "ID": {
        "truoc": "152",
        "sau": "152",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "51",
        "sau": "51",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3424",
        "sau": "3424",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "154": {
      "ID": {
        "truoc": "154",
        "sau": "154",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "41",
        "sau": "41",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2731 VND",
        "sau": "2731",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0 %",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "155": {
      "ID": {
        "truoc": "155",
        "sau": "155",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "female",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "17",
        "sau": "17",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "11",
        "sau": "11",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5 USD",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "157": {
      "ID": {
        "truoc": "157",
        "sau": "157",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "60",
        "sau": "60",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0 kg",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "160": {
      "ID": {
        "truoc": "160",
        "sau": "160",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "59",
        "sau": "59",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "161": {
      "ID": {
        "truoc": "161",
        "sau": "161",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "20",
        "sau": "20",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "63",
        "sau": "63",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "163": {
      "ID": {
        "truoc": "163",
        "sau": "163",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "64",
        "sau": "64",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "60.0",
        "sau": "60",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "166": {
      "ID": {
        "truoc": "166",
        "sau": "166",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "31",
        "sau": "31",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "25",
        "sau": "25",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "200.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "167": {
      "ID": {
        "truoc": "167",
        "sau": "167",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "66",
        "sau": "66",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "-5.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "168": {
      "ID": {
        "truoc": "168",
        "sau": "168",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "37",
        "sau": "37",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "economy",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "36",
        "sau": "36",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3 USD",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2 kg",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "170": {
      "ID": {
        "truoc": "170",
        "sau": "170",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "3600.0",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "ECONOMY",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "None",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "200.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "177": {
      "ID": {
        "truoc": "177",
        "sau": "177",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "10",
        "sau": "10",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Economy Pl",
        "sau": "Economy Plus",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "56",
        "sau": "56",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "400.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "178": {
      "ID": {
        "truoc": "178",
        "sau": "178",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "28",
        "sau": "28",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy Plus",
        "sau": "Economy Plus",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "179": {
      "ID": {
        "truoc": "179",
        "sau": "179",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "36",
        "sau": "36",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213",
        "sau": "213",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-3.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "184": {
      "ID": {
        "truoc": "184",
        "sau": "184",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2497 VND",
        "sau": "2497",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "400.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "186": {
      "ID": {
        "truoc": "186",
        "sau": "186",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "NULL",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3880 USD",
        "sau": "3880",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "10.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "207": {
      "ID": {
        "truoc": "207",
        "sau": "207",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "40",
        "sau": "40",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "?",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213",
        "sau": "213",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0.0",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "SATISFIED",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "209": {
      "ID": {
        "truoc": "209",
        "sau": "209",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "69",
        "sau": "69",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "290",
        "sau": "290",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0 kg",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "400.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "210": {
      "ID": {
        "truoc": " 210",
        "sau": "210",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "null",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "27",
        "sau": "27",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "NULL",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213",
        "sau": "213",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2 USD",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1 USD",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "215": {
      "ID": {
        "truoc": "215",
        "sau": "215",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213000.0",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "219": {
      "ID": {
        "truoc": "219",
        "sau": "219",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "31",
        "sau": "31",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "290",
        "sau": "290",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "223": {
      "ID": {
        "truoc": "223",
        "sau": "223",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "?",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "None",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213",
        "sau": "213",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "293",
        "sau": "293",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "226": {
      "ID": {
        "truoc": "226",
        "sau": "226",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "66",
        "sau": "66",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "290",
        "sau": "290",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 VND",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-3.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "227": {
      "ID": {
        "truoc": "227",
        "sau": "227",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "56",
        "sau": "56",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Economy",
        "sau": "Economy",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213",
        "sau": "213",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "20",
        "sau": "20",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "8",
        "sau": "8",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5000.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5 %",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "232": {
      "ID": {
        "truoc": " 232",
        "sau": "232",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "57",
        "sau": "57",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "BUSINESS",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "213",
        "sau": "213",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4 VND",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5 đ",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "239": {
      "ID": {
        "truoc": "239",
        "sau": "239",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male  ",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-719.0",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "11",
        "sau": "11",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-5.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "240": {
      "ID": {
        "truoc": "240",
        "sau": "240",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "49",
        "sau": "49",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Busine",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "N/A",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "N/A",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "7",
        "sau": "7",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "26",
        "sau": "26",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "50.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "242": {
      "ID": {
        "truoc": "  242",
        "sau": "242",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "None",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "38",
        "sau": "38",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "719",
        "sau": "719",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "50.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "243": {
      "ID": {
        "truoc": "243",
        "sau": "243",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "22",
        "sau": "22",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "First-time",
        "sau": "First-time Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "N/A",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "719",
        "sau": "719",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "14 VND",
        "sau": "14",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "25",
        "sau": "25",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "245": {
      "ID": {
        "truoc": "245",
        "sau": "245",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "29",
        "sau": "29",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-1",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "25",
        "sau": "25",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "NULL",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "246": {
      "ID": {
        "truoc": "246",
        "sau": "246",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "50",
        "sau": "50",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "null",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "None",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "140",
        "sau": "140",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "248": {
      "ID": {
        "truoc": "248",
        "sau": "248",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "23",
        "sau": "23",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "719",
        "sau": "719",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "35",
        "sau": "35",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "30.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "257": {
      "ID": {
        "truoc": "  257",
        "sau": "257",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "58",
        "sau": "58",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "BUSINESS",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "612",
        "sau": "612",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "satisfied",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "262": {
      "ID": {
        "truoc": "262",
        "sau": "262",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "-1",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "?",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "null",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "?",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "6",
        "sau": "6",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "265": {
      "ID": {
        "truoc": " 265",
        "sau": "265",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "N/A",
        "sau": "Female",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "49",
        "sau": "49",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "825",
        "sau": "825",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-4.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "276": {
      "ID": {
        "truoc": "276",
        "sau": "276",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43 kg",
        "sau": "43",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "402",
        "sau": "402",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "-",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3 %",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "neutral or dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "279": {
      "ID": {
        "truoc": "279",
        "sau": "279",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "23",
        "sau": "23",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "825",
        "sau": "825",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3 VND",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "300.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "282": {
      "ID": {
        "truoc": "282",
        "sau": "282",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "25",
        "sau": "25",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Person",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "825",
        "sau": "825",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "-3.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4 kg",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "289": {
      "ID": {
        "truoc": "289",
        "sau": "289",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "51",
        "sau": "51",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy Plus",
        "sau": "Economy Plus",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "null",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-5.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "40.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "neutral or dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "291": {
      "ID": {
        "truoc": "291",
        "sau": "291",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "54",
        "sau": "54",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "2718",
        "sau": "2718",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "None",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "295": {
      "ID": {
        "truoc": "  295",
        "sau": "295",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "54",
        "sau": "54",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "chưa rõ",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1250",
        "sau": "1250",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "123",
        "sau": "123",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "120",
        "sau": "120",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "-4.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "320": {
      "ID": {
        "truoc": "320",
        "sau": "320",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "21 %",
        "sau": "21",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "unknown",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "9999",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1 USD",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "323": {
      "ID": {
        "truoc": "323",
        "sau": "323",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "59 kg",
        "sau": "59",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3674",
        "sau": "3674",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "40.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "327": {
      "ID": {
        "truoc": "327",
        "sau": "327",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "39",
        "sau": "39",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "821",
        "sau": "821",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "32",
        "sau": "32",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "100.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-1.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "340": {
      "ID": {
        "truoc": "340",
        "sau": "340",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "16",
        "sau": "16",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Person",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "null",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "20.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "2 USD",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "350": {
      "ID": {
        "truoc": "350",
        "sau": "350",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "2500.0",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "chưa rõ",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business   ",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "853",
        "sau": "853",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "12",
        "sau": "12",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "40.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "361": {
      "ID": {
        "truoc": "361",
        "sau": "361",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "40",
        "sau": "40",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "N/A",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "229",
        "sau": "229",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5 %",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5 VND",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "500.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "-5.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "365": {
      "ID": {
        "truoc": "365",
        "sau": "365",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "42",
        "sau": "42",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "NULL",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "13",
        "sau": "13",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "7",
        "sau": "7",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "378": {
      "ID": {
        "truoc": "378",
        "sau": "378",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "41",
        "sau": "41",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "BUSINESS",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "309",
        "sau": "309",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0 đ",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "397": {
      "ID": {
        "truoc": "397",
        "sau": "397",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "female",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "",
        "sau": "40",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "1580.0",
        "sau": "1580",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "412": {
      "ID": {
        "truoc": "412",
        "sau": "412",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "58 VND",
        "sau": "58",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "BUSINESS",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "  Business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "-1",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "None",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "N/A",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2 %",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "424": {
      "ID": {
        "truoc": "424",
        "sau": "424",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "51",
        "sau": "51",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "?",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3873",
        "sau": "3873",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied   ",
        "sau": "Satisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "425": {
      "ID": {
        "truoc": "425",
        "sau": "425",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "59",
        "sau": "59",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3800",
        "sau": "3800",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1 VND",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "100.0",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "-",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "433": {
      "ID": {
        "truoc": "  433",
        "sau": "433",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "63",
        "sau": "63",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "102 USD",
        "sau": "102",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-1",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "?",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "5 %",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "627": {
      "ID": {
        "truoc": "627",
        "sau": "627",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "45",
        "sau": "45",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "?",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "BUSINESS",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "247",
        "sau": "247",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-1",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "14",
        "sau": "14",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "50.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "-1",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Baggage Handling": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Satisfied",
        "sau": "Satisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "837": {
      "ID": {
        "truoc": "837",
        "sau": "837",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "43",
        "sau": "43",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "3923",
        "sau": "3923",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "7000.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "8",
        "sau": "8",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3 đ",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "3 kg",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "840": {
      "ID": {
        "truoc": "840",
        "sau": "840",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "  Fema",
        "sau": "Female",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "51",
        "sau": "51",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "NULL",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "229",
        "sau": "229",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "-4.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "959": {
      "ID": {
        "truoc": "959",
        "sau": "959",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "74",
        "sau": "74",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "business",
        "sau": "Business Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "business",
        "sau": "Business",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "?",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "31",
        "sau": "31",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "-34.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "4 đ",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "4 %",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "null",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "1023": {
      "ID": {
        "truoc": "1023",
        "sau": "1023",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "40",
        "sau": "40",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "unknown",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "164",
        "sau": "164",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-98.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "111",
        "sau": "111",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "-1.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1 kg",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2 kg",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2 USD",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "  Neutral or Dissatisfi",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "1147": {
      "ID": {
        "truoc": "1147",
        "sau": "1147",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "47",
        "sau": "47",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "RETURNING",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "Personal",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "164",
        "sau": "164",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "3000.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "1179": {
      "ID": {
        "truoc": "1179",
        "sau": "1179",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "48",
        "sau": "48",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Person",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "NULL",
        "sau": "Business",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "134",
        "sau": "134",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "10",
        "sau": "10",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "18",
        "sau": "18",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1 VND",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "9999",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Leg Room Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "-4.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "None",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "1197": {
      "ID": {
        "truoc": "  1197",
        "sau": "1197",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "7",
        "sau": "7",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "  Person",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "9999",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Departure Delay": {
        "truoc": "N/A",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "-71.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "2 VND",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-3.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Food and Drink": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "4 USD",
        "sau": "4",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "NEUTRAL OR DISSATISFIED",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      }
    },
    "1238": {
      "ID": {
        "truoc": "1238",
        "sau": "1238",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "52",
        "sau": "52",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning ",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "N/A",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy",
        "sau": "Economy",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "309",
        "sau": "309",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "12300.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "134",
        "sau": "134",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1 USD",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "1401": {
      "ID": {
        "truoc": "1401",
        "sau": "1401",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Female",
        "sau": "Female",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "70",
        "sau": "70",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "null",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Economy Plus",
        "sau": "Economy Plus",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "N/A",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "0",
        "sau": "0",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "?",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "1 VND",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1000.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "On-board Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "-0.0",
        "sau": "0",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "3 VND",
        "sau": "3",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "100.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "In-flight Entertainment": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "2292": {
      "ID": {
        "truoc": "  2292",
        "sau": "2292",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "Male",
        "sau": "Male",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "44",
        "sau": "44",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "  Returnin",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "None",
        "sau": "Unknown",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "?",
        "sau": "846",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "-85.0",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Arrival Delay": {
        "truoc": "80",
        "sau": "80",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "40.0",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": true
      },
      "Online Boarding": {
        "truoc": "9999",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": true
      },
      "Gate Location": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "N/A",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "1 đ",
        "sau": "1",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "null",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "",
        "sau": "4",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    },
    "12015": {
      "ID": {
        "truoc": "12015",
        "sau": "12015",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gender": {
        "truoc": "male",
        "sau": "Male",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Age": {
        "truoc": "70.0",
        "sau": "70",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Customer Type": {
        "truoc": "Returning",
        "sau": "Returning Customer",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Type of Travel": {
        "truoc": "PERSONAL",
        "sau": "Personal Travel",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Class": {
        "truoc": "Business",
        "sau": "Business",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Flight Distance": {
        "truoc": "376",
        "sau": "376",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure Delay": {
        "truoc": "57",
        "sau": "57",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Arrival Delay": {
        "truoc": "",
        "sau": "0",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Departure and Arrival Time Convenience": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Ease of Online Booking": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Check-in Service": {
        "truoc": "5 kg",
        "sau": "5",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "Online Boarding": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Gate Location": {
        "truoc": "1",
        "sau": "1",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "On-board Service": {
        "truoc": "4",
        "sau": "4",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Seat Comfort": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Leg Room Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Cleanliness": {
        "truoc": "-",
        "sau": "3",
        "trang_thai": "dien_khuyet",
        "thieu": true,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Food and Drink": {
        "truoc": "2 USD",
        "sau": "2",
        "trang_thai": "chuan_hoa",
        "thieu": false,
        "sai_dd": true,
        "ngoai_mien": false
      },
      "In-flight Service": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Wifi Service": {
        "truoc": "3",
        "sau": "3",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "In-flight Entertainment": {
        "truoc": "2",
        "sau": "2",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Baggage Handling": {
        "truoc": "5",
        "sau": "5",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      },
      "Satisfaction": {
        "truoc": "Neutral or Dissatisfied",
        "sau": "Neutral or Dissatisfied",
        "trang_thai": "hop_le",
        "thieu": false,
        "sai_dd": false,
        "ngoai_mien": false
      }
    }
  }
};
