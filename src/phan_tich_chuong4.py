"""
phan_tich_chuong4.py
====================
Quy trình chuẩn bị đặc trưng chống rò rỉ dữ liệu, huấn luyện, tinh chỉnh siêu tham số
bằng kiểm định chéo phân tầng 5-Fold và đánh giá các mô hình phân loại nhị phân
(Logistic Regression, Decision Tree, Random Forest) cho Chương 4 của đồ án PRJ-21.

Nguyên tắc phương pháp luận (đồng bộ 100% với Chương 1, 2, 3):
1. Sử dụng đúng 119.092 bản ghi có nhãn mục tiêu Satisfaction quan sát thực tế
   (khớp 1-1 qua khóa ID với Data/processed/PJ21.csv; loại cột ID khỏi ma trận X).
2. Khôi phục ma trận đặc trưng TRƯỚC bước điền khuyết toàn cục từ Data/raw/Du lieu khong sach.csv
   theo đúng quy tắc chuẩn hóa chuỗi và lọc miền giá trị BOUNDS của lam_sach_du_lieu.py.
   Kiểm chứng: nếu điền khuyết toàn cục trên ma trận này thì khớp 100% từng ô với PJ21.csv.
3. Chia tập Train/Test theo tỷ lệ 80/20 có phân tầng (stratify=y, random_state=42) TRƯỚC
   mọi bước ước lượng thống kê điền khuyết và chuẩn hóa.
4. Đặt toàn bộ SimpleImputer, OneHotEncoder và StandardScaler vào trong ColumnTransformer
   của sklearn Pipeline để trong mỗi fold CV cũng như khi đánh giá trên Test, các tham số
   tiền xử lý chỉ được học (fit) trên dữ liệu huấn luyện.
5. Thực hiện phân tích độ nhạy tiền xử lý: đối chiếu Pipeline chống rò rỉ với dữ liệu
   PJ21.csv đã điền sẵn toàn tập, bổ sung cờ báo khuyết (Missing Indicators) và phương án
   xử lý mã điểm 0 ở 14 biến dịch vụ.
"""

import hashlib
import json
import platform
import re
import sys
import time
import warnings
from pathlib import Path

warnings.filterwarnings("ignore", category=UserWarning)

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import sklearn
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
from sklearn.inspection import permutation_importance
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    average_precision_score,
    brier_score_loss,
    confusion_matrix,
    f1_score,
    log_loss,
    precision_recall_curve,
    precision_score,
    recall_score,
    roc_auc_score,
    roc_curve,
)
from sklearn.model_selection import StratifiedKFold, cross_validate, train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.tree import DecisionTreeClassifier

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
RAW_PATH = ROOT / "Data" / "raw" / "Du lieu khong sach.csv"
CLEAN_PATH = ROOT / "Data" / "processed" / "PJ21.csv"
OUT_DIR = ROOT / "outputs" / "chuong4"
FIG_DIR = ROOT / "figures" / "chuong4"
OUT_DIR.mkdir(parents=True, exist_ok=True)
FIG_DIR.mkdir(parents=True, exist_ok=True)


def sha256_file(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


hashes_before = {
    "Data\\raw\\Du lieu khong sach.csv": sha256_file(RAW_PATH),
    "Data\\processed\\PJ21.csv": sha256_file(CLEAN_PATH),
}

# ── 1. Danh sách biến và quy tắc chuẩn hóa từ lam_sach_du_lieu.py ──────────────
CAT_COLS = ["Gender", "Customer Type", "Type of Travel", "Class"]
METRIC_COLS = ["Age", "Flight Distance", "Departure Delay", "Arrival Delay"]
SERVICE_COLS = [
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
]
NUM_COLS = METRIC_COLS + SERVICE_COLS
FEATURE_COLS = CAT_COLS + NUM_COLS

MISSING_TOKENS = {"nan", "none", "null", "n/a", "?", "-", "unknown", "chưa rõ", ""}
BOUNDS = {
    "Age": (0, 100),
    "Flight Distance": (0, 9999),
    "Departure Delay": (0, 2000),
    "Arrival Delay": (0, 2000),
}
for rc in SERVICE_COLS:
    BOUNDS[rc] = (0, 5)

GENDER_MAP = {"male": "Male", "female": "Female"}
CUSTOMER_TYPE_MAP = {
    "first-time": "First-time Customer",
    "first time": "First-time Customer",
    "first-time customer": "First-time Customer",
    "returning": "Returning Customer",
    "returnin": "Returning Customer",
    "returning customer": "Returning Customer",
}
TRAVEL_TYPE_MAP = {
    "business": "Business Travel",
    "busine": "Business Travel",
    "business travel": "Business Travel",
    "personal": "Personal Travel",
    "person": "Personal Travel",
    "personal travel": "Personal Travel",
}
CLASS_MAP = {
    "business": "Business",
    "economy": "Economy",
    "economy plus": "Economy Plus",
    "economy pl": "Economy Plus",
    "economy+": "Economy Plus",
}
SATISFACTION_MAP = {
    "satisfied": "Satisfied",
    "neutral or dissatisfied": "Neutral or Dissatisfied",
    "neutral or dissatisfi": "Neutral or Dissatisfied",
    "dissatisfied": "Neutral or Dissatisfied",
    "neutral": "Neutral or Dissatisfied",
}
ALL_MAPS = {
    "Gender": GENDER_MAP,
    "Customer Type": CUSTOMER_TYPE_MAP,
    "Type of Travel": TRAVEL_TYPE_MAP,
    "Class": CLASS_MAP,
    "Satisfaction": SATISFACTION_MAP,
}
NUMBER_PATTERN = re.compile(r"[-+]?\d*\.?\d+")


def is_missing_str(val) -> bool:
    if pd.isna(val):
        return True
    return str(val).strip().lower() in MISSING_TOKENS


def extract_number(val):
    s = str(val).strip()
    if s.lower() in MISSING_TOKENS:
        return np.nan
    m = NUMBER_PATTERN.search(s)
    return float(m.group()) if m else np.nan


def normalize_cat(val, mapping: dict):
    if is_missing_str(val):
        return np.nan
    cleaned = str(val).strip().lower()
    if cleaned in mapping:
        return mapping[cleaned]
    for key, std in mapping.items():
        if cleaned.startswith(key) or key.startswith(cleaned):
            return std
    return np.nan


print("=" * 80)
print("CHƯƠNG 4: KHÔI PHỤC MA TRẬN TRƯỚC ĐIỀN KHUYẾT & HUẤN LUYỆN MÔ HÌNH PHÂN LOẠI")
print("=" * 80)

# ── 2. Nạp dữ liệu và khôi phục trạng thái trước điền khuyết ───────────────────
df_raw = pd.read_csv(RAW_PATH, dtype={"ID": str})
df_raw = df_raw.loc[:, ~df_raw.columns.str.match(r"^Unnamed")]
df_raw.columns = df_raw.columns.str.strip()
df_clean = pd.read_csv(CLEAN_PATH)

df_pre = df_raw.copy()
for col, mapping in ALL_MAPS.items():
    uniq_map = {u: normalize_cat(u, mapping) for u in df_pre[col].dropna().unique()}
    df_pre[col] = df_pre[col].map(uniq_map)

for col in NUM_COLS:
    uniq_num_map = {u: extract_number(u) for u in df_pre[col].dropna().unique()}
    df_pre[col] = df_pre[col].map(uniq_num_map)
    lo, hi = BOUNDS[col]
    if col in ("Departure Delay", "Arrival Delay"):
        mask = (df_pre[col] < 0) | (df_pre[col] > hi)
    elif col == "Age":
        mask = (df_pre[col] <= lo) | (df_pre[col] > hi)
    elif col == "Flight Distance":
        mask = (df_pre[col] <= lo) | (df_pre[col] >= hi)
    else:
        mask = (df_pre[col] < lo) | (df_pre[col] > hi)
    df_pre.loc[mask, col] = np.nan

# Lọc đúng 119.092 dòng có nhãn Satisfaction hợp lệ
df_pre = df_pre[df_pre["Satisfaction"].notna()].copy().reset_index(drop=True)
df_pre["ID"] = df_pre["ID"].astype(str).str.strip().astype("int64")

# Kiểm chứng 1: Khóa ID của df_pre khớp tuyệt đối với df_clean (PJ21.csv)
assert (df_pre["ID"].values == df_clean["ID"].values).all(), "Thứ tự ID không khớp với PJ21.csv!"
assert (df_pre["Satisfaction"].values == df_clean["Satisfaction"].values).all(), "Nhãn Satisfaction không khớp!"

# Kiểm chứng 2: Nếu điền khuyết toàn tập trên df_pre thì tái tạo 100% df_clean
df_check = df_pre.copy()
for col in ["Gender", "Class"]:
    df_check[col] = df_check[col].fillna(df_check[col].mode()[0])
for col in ["Customer Type", "Type of Travel"]:
    df_check[col] = df_check[col].fillna("Unknown")
for col in NUM_COLS:
    df_check[col] = df_check[col].fillna(df_check[col].median()).round(0).astype("int64")
pd.testing.assert_frame_equal(df_check, df_clean)
print("Kiểm chứng tái lập: Ma trận trước điền khuyết khớp 100% với PJ21.csv sau khi áp dụng quy tắc điền toàn cục.")

# ── 3. Phân chia tập Train / Test (80/20, stratify=y, random_state=42) ────────
y = (df_pre["Satisfaction"] == "Satisfied").astype(int).values
X_pre = df_pre[FEATURE_COLS].copy()
X_pj21 = df_clean[FEATURE_COLS].copy()

idx_all = np.arange(len(df_pre))
idx_train, idx_test = train_test_split(
    idx_all, test_size=0.20, stratify=y, random_state=42
)

X_train_pre = X_pre.iloc[idx_train].copy()
X_test_pre = X_pre.iloc[idx_test].copy()
y_train = y[idx_train]
y_test = y[idx_test]

X_train_pj21 = X_pj21.iloc[idx_train].copy()
X_test_pj21 = X_pj21.iloc[idx_test].copy()

n_total = len(y)
n_train = len(y_train)
n_test = len(y_test)
train_pos = int(y_train.sum())
train_neg = int(n_train - train_pos)
test_pos = int(y_test.sum())
test_neg = int(n_test - test_pos)

print(f"Tổng mẫu hợp lệ : {n_total:,} (Satisfied: {int(y.sum()):,} = {y.mean()*100:.4f}%)")
print(f"Tập Train (80%) : {n_train:,} (Satisfied: {train_pos:,} = {y_train.mean()*100:.4f}%, Neutral/Dissat: {train_neg:,} = {(1-y_train.mean())*100:.4f}%)")
print(f"Tập Test  (20%) : {n_test:,} (Satisfied: {test_pos:,} = {y_test.mean()*100:.4f}%, Neutral/Dissat: {test_neg:,} = {(1-y_test.mean())*100:.4f}%)")

# ── 4. Đối chiếu thống kê điền khuyết học trên Train (n=95.273) vs Toàn tập PJ21 (n=119.092)
imp_compare_rows = []
for col in CAT_COLS:
    miss_train = int(X_train_pre[col].isna().sum())
    miss_test = int(X_test_pre[col].isna().sum())
    if col in ("Customer Type", "Type of Travel"):
        val_train = "Unknown"
        val_full = "Unknown"
    else:
        val_train = str(X_train_pre[col].mode()[0])
        val_full = str(X_pre[col].mode()[0])
    imp_compare_rows.append({
        "bien": col,
        "nhom": "Phân loại",
        "chien_luoc": "Hằng số 'Unknown'" if col in ("Customer Type", "Type of Travel") else "Mode trên Train",
        "o_khuyet_train": miss_train,
        "ty_le_khuyet_train_pct": miss_train / n_train * 100,
        "o_khuyet_test": miss_test,
        "ty_le_khuyet_test_pct": miss_test / n_test * 100,
        "gia_tri_hoc_tren_train": val_train,
        "gia_tri_toan_tap_pj21": val_full,
        "khop_100_pct": val_train == val_full,
    })

for col in NUM_COLS:
    miss_train = int(X_train_pre[col].isna().sum())
    miss_test = int(X_test_pre[col].isna().sum())
    med_train = float(X_train_pre[col].median())
    med_full = float(X_pre[col].median())
    imp_compare_rows.append({
        "bien": col,
        "nhom": "Định lượng vận hành" if col in METRIC_COLS else "Điểm dịch vụ [0, 5]",
        "chien_luoc": "Trung vị trên Train",
        "o_khuyet_train": miss_train,
        "ty_le_khuyet_train_pct": miss_train / n_train * 100,
        "o_khuyet_test": miss_test,
        "ty_le_khuyet_test_pct": miss_test / n_test * 100,
        "gia_tri_hoc_tren_train": f"{med_train:.1f}",
        "gia_tri_toan_tap_pj21": f"{med_full:.1f}",
        "khop_100_pct": np.isclose(med_train, med_full),
    })

imp_compare_df = pd.DataFrame(imp_compare_rows)
imp_compare_df.to_csv(OUT_DIR / "doi_chieu_dien_khuyet_train_vs_pj21.csv", index=False, encoding="utf-8-sig")
all_imp_match = bool(imp_compare_df["khop_100_pct"].all())
print(f"Đối chiếu giá trị điền khuyết học trên Train vs Toàn tập PJ21.csv: Khớp 100% ở cả 22 biến = {all_imp_match}")

# ── 5. Kiểm tra đa cộng tuyến (VIF) trên 18 biến định lượng của tập Train ──────
X_train_num_imputed = X_train_pre[NUM_COLS].fillna(X_train_pre[NUM_COLS].median())
X_train_num_std = (X_train_num_imputed - X_train_num_imputed.mean()) / X_train_num_imputed.std(ddof=0)
corr_matrix_num = np.corrcoef(X_train_num_std.values, rowvar=False)
inv_corr = np.linalg.inv(corr_matrix_num)
vif_vals = np.diag(inv_corr)
r2_vals = 1.0 - 1.0 / vif_vals

vif_df = pd.DataFrame({
    "bien": NUM_COLS,
    "nhom": ["Định lượng vận hành" if c in METRIC_COLS else "Điểm dịch vụ" for c in NUM_COLS],
    "R2_voi_cac_bien_khac": r2_vals,
    "VIF": vif_vals,
}).sort_values("VIF", ascending=False).reset_index(drop=True)
vif_df.to_csv(OUT_DIR / "kiem_tra_vif.csv", index=False, encoding="utf-8-sig")
print("Top 5 biến có VIF cao nhất trên tập Train:")
print(vif_df.head(5).to_string(index=False))

# Tính tương quan Pearson & Spearman giữa Departure Delay và Arrival Delay trên Train
dep_arr_pearson = float(X_train_num_imputed["Departure Delay"].corr(X_train_num_imputed["Arrival Delay"], method="pearson"))
dep_arr_spearman = float(X_train_num_imputed["Departure Delay"].corr(X_train_num_imputed["Arrival Delay"], method="spearman"))

# ── 6. Xây dựng hàm tạo Pipeline chuẩn chống rò rỉ dữ liệu ────────────────────
MODE_CAT_COLS = ["Gender", "Class"]
UNK_CAT_COLS = ["Customer Type", "Type of Travel"]


def build_preprocessor(scale_numeric: bool = True, drop_first_ohe: bool = False) -> ColumnTransformer:
    mode_pipe = Pipeline([
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("ohe", OneHotEncoder(drop="first" if drop_first_ohe else None, handle_unknown="ignore", sparse_output=False)),
    ])
    unk_pipe = Pipeline([
        ("imputer", SimpleImputer(strategy="constant", fill_value="Unknown")),
        ("ohe", OneHotEncoder(drop="first" if drop_first_ohe else None, handle_unknown="ignore", sparse_output=False)),
    ])
    if scale_numeric:
        num_pipe = Pipeline([
            ("imputer", SimpleImputer(strategy="median")),
            ("scaler", StandardScaler()),
        ])
    else:
        num_pipe = Pipeline([
            ("imputer", SimpleImputer(strategy="median")),
        ])
    return ColumnTransformer(
        transformers=[
            ("mode_cat", mode_pipe, MODE_CAT_COLS),
            ("unk_cat", unk_pipe, UNK_CAT_COLS),
            ("num", num_pipe, NUM_COLS),
        ],
        remainder="drop",
    )


# ── 7. Tinh chỉnh siêu tham số bằng 5-Fold Stratified CV trên tập Train ────────
cv5 = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scoring_dict = {
    "accuracy": "accuracy",
    "f1": "f1",
    "f1_macro": "f1_macro",
    "roc_auc": "roc_auc",
}

candidates = [
    # Logistic Regression candidates
    (
        "Logistic Regression",
        "LR_C0.01",
        "C = 0,01 (L2, drop='first')",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=True, drop_first_ohe=True)),
            ("clf", LogisticRegression(C=0.01, max_iter=1000, random_state=42)),
        ]),
    ),
    (
        "Logistic Regression",
        "LR_C0.1",
        "C = 0,1 (L2, drop='first')",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=True, drop_first_ohe=True)),
            ("clf", LogisticRegression(C=0.1, max_iter=1000, random_state=42)),
        ]),
    ),
    (
        "Logistic Regression",
        "LR_C1.0",
        "C = 1,0 (L2, drop='first' — chọn chính)",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=True, drop_first_ohe=True)),
            ("clf", LogisticRegression(C=1.0, max_iter=1000, random_state=42)),
        ]),
    ),
    (
        "Logistic Regression",
        "LR_C1.0_balanced",
        "C = 1,0, class_weight='balanced'",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=True, drop_first_ohe=True)),
            ("clf", LogisticRegression(C=1.0, class_weight="balanced", max_iter=1000, random_state=42)),
        ]),
    ),
    # Decision Tree candidates
    (
        "Decision Tree",
        "DT_unconstrained",
        "Không giới hạn (max_depth=None, min_samples_leaf=1)",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", DecisionTreeClassifier(max_depth=None, min_samples_leaf=1, random_state=42)),
        ]),
    ),
    (
        "Decision Tree",
        "DT_d8_leaf20",
        "max_depth=8, min_samples_leaf=20",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", DecisionTreeClassifier(max_depth=8, min_samples_leaf=20, random_state=42)),
        ]),
    ),
    (
        "Decision Tree",
        "DT_d14_leaf20",
        "max_depth=14, min_samples_leaf=20 (chọn chính)",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", DecisionTreeClassifier(max_depth=14, min_samples_leaf=20, random_state=42)),
        ]),
    ),
    (
        "Decision Tree",
        "DT_d20_leaf20",
        "max_depth=20, min_samples_leaf=20",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", DecisionTreeClassifier(max_depth=20, min_samples_leaf=20, random_state=42)),
        ]),
    ),
    # Random Forest candidates
    (
        "Random Forest",
        "RF_100_d12_leaf5",
        "n_estimators=100, max_depth=12, min_samples_leaf=5",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", RandomForestClassifier(n_estimators=100, max_depth=12, min_samples_leaf=5, n_jobs=-1, random_state=42)),
        ]),
    ),
    (
        "Random Forest",
        "RF_200_d18_leaf2",
        "n_estimators=200, max_depth=18, min_samples_leaf=2",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", RandomForestClassifier(n_estimators=200, max_depth=18, min_samples_leaf=2, n_jobs=-1, random_state=42)),
        ]),
    ),
    (
        "Random Forest",
        "RF_200_dNone_leaf2",
        "n_estimators=200, max_depth=None, min_samples_leaf=2 (chọn chính)",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_leaf=2, n_jobs=-1, random_state=42)),
        ]),
    ),
    (
        "Random Forest",
        "RF_200_dNone_leaf1",
        "n_estimators=200, max_depth=None, min_samples_leaf=1",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_leaf=1, n_jobs=-1, random_state=42)),
        ]),
    ),
]

cv_cache_path = OUT_DIR / "ket_qua_cv_sieu_tham_so.csv"
if cv_cache_path.exists() and "--recompute-cv" not in sys.argv:
    print("\nNạp kết quả 5-Fold Stratified Cross-Validation đã lưu từ outputs/chuong4/ket_qua_cv_sieu_tham_so.csv...")
    cv_df = pd.read_csv(cv_cache_path)
    for _, row in cv_df.iterrows():
        print(
            f"  [{row['ma_cau_hinh']:18s}] Train Acc={row['train_acc_mean']:.2f}% | CV Acc={row['cv_acc_mean']:.2f}±{row['cv_acc_std']:.2f}% "
            f"| CV F1={row['cv_f1_mean']:.2f}% | CV Macro-F1={row['cv_f1_macro_mean']:.2f}% | CV AUC={row['cv_roc_auc_mean']:.2f}%"
        )
else:
    print("\nĐang chạy 5-Fold Stratified Cross-Validation trên tập Train (n = 95.273)...")
    cv_rows = []
    for family, code, desc, pipe in candidates:
        t0 = time.perf_counter()
        res = cross_validate(
            pipe,
            X_train_pre,
            y_train,
            cv=cv5,
            scoring=scoring_dict,
            return_train_score=True,
            n_jobs=-1,
        )
        elapsed = time.perf_counter() - t0
        row = {
            "ho_mo_hinh": family,
            "ma_cau_hinh": code,
            "mo_ta_sieu_tham_so": desc,
            "train_acc_mean": float(np.mean(res["train_accuracy"]) * 100),
            "cv_acc_mean": float(np.mean(res["test_accuracy"]) * 100),
            "cv_acc_std": float(np.std(res["test_accuracy"], ddof=1) * 100),
            "train_f1_mean": float(np.mean(res["train_f1"]) * 100),
            "cv_f1_mean": float(np.mean(res["test_f1"]) * 100),
            "cv_f1_std": float(np.std(res["test_f1"], ddof=1) * 100),
            "cv_f1_macro_mean": float(np.mean(res["test_f1_macro"]) * 100),
            "cv_f1_macro_std": float(np.std(res["test_f1_macro"], ddof=1) * 100),
            "train_roc_auc_mean": float(np.mean(res["train_roc_auc"]) * 100),
            "cv_roc_auc_mean": float(np.mean(res["test_roc_auc"]) * 100),
            "cv_roc_auc_std": float(np.std(res["test_roc_auc"], ddof=1) * 100),
            "gap_train_cv_acc_pct": float((np.mean(res["train_accuracy"]) - np.mean(res["test_accuracy"])) * 100),
            "thoi_gian_cv_giay": float(elapsed),
        }
        cv_rows.append(row)
        print(
            f"  [{code:18s}] Train Acc={row['train_acc_mean']:.2f}% | CV Acc={row['cv_acc_mean']:.2f}±{row['cv_acc_std']:.2f}% "
            f"| CV F1={row['cv_f1_mean']:.2f}% | CV Macro-F1={row['cv_f1_macro_mean']:.2f}% | CV AUC={row['cv_roc_auc_mean']:.2f}% ({elapsed:.1f}s)"
        )

    cv_df = pd.DataFrame(cv_rows)
    cv_df.to_csv(cv_cache_path, index=False, encoding="utf-8-sig")

# ── 8. Huấn luyện các mô hình được chọn trên toàn bộ Train và đánh giá trên Test
selected_models = {
    "Logistic Regression": (
        "LR_C1.0",
        "C = 1,0 (L2, StandardScaler + OneHotEncoder drop='first')",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=True, drop_first_ohe=True)),
            ("clf", LogisticRegression(C=1.0, max_iter=1000, random_state=42)),
        ]),
    ),
    "Decision Tree (Không cắt tỉa)": (
        "DT_unconstrained",
        "max_depth = None, min_samples_leaf = 1 (đối chứng quá khớp)",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", DecisionTreeClassifier(max_depth=None, min_samples_leaf=1, random_state=42)),
        ]),
    ),
    "Decision Tree (Đã tinh chỉnh)": (
        "DT_d14_leaf20",
        "max_depth = 14, min_samples_leaf = 20 (tối ưu CV)",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", DecisionTreeClassifier(max_depth=14, min_samples_leaf=20, random_state=42)),
        ]),
    ),
    "Random Forest": (
        "RF_200_dNone_leaf2",
        "n_estimators = 200, max_depth = None, min_samples_leaf = 2",
        Pipeline([
            ("prep", build_preprocessor(scale_numeric=False, drop_first_ohe=False)),
            ("clf", RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_leaf=2, n_jobs=-1, random_state=42)),
        ]),
    ),
}

print("\nĐang huấn luyện trên toàn bộ tập Train (n = 95.273) và đánh giá trên tập Test (n = 23.819)...")
fitted_models = {}
test_preds = {}
test_probs = {}
eval_rows = []
cm_rows = []
curve_data = {}

cv_lookup = cv_df.set_index("ma_cau_hinh")

for name, (code, param_desc, pipe) in selected_models.items():
    t0 = time.perf_counter()
    pipe.fit(X_train_pre, y_train)
    fit_time = time.perf_counter() - t0
    fitted_models[name] = pipe

    y_tr_pred = pipe.predict(X_train_pre)
    y_tr_prob = pipe.predict_proba(X_train_pre)[:, 1]

    y_te_pred = pipe.predict(X_test_pre)
    y_te_prob = pipe.predict_proba(X_test_pre)[:, 1]
    test_preds[name] = y_te_pred
    test_probs[name] = y_te_prob

    tn, fp, fn, tp = confusion_matrix(y_test, y_te_pred).ravel()
    cv_r = cv_lookup.loc[code]

    acc_tr = accuracy_score(y_train, y_tr_pred) * 100
    f1_tr = f1_score(y_train, y_tr_pred) * 100
    auc_tr = roc_auc_score(y_train, y_tr_prob) * 100

    acc_te = accuracy_score(y_test, y_te_pred) * 100
    prec_1 = precision_score(y_test, y_te_pred, pos_label=1) * 100
    rec_1 = recall_score(y_test, y_te_pred, pos_label=1) * 100
    f1_1 = f1_score(y_test, y_te_pred, pos_label=1) * 100

    prec_0 = precision_score(y_test, y_te_pred, pos_label=0) * 100
    rec_0 = recall_score(y_test, y_te_pred, pos_label=0) * 100
    f1_0 = f1_score(y_test, y_te_pred, pos_label=0) * 100

    f1_macro = f1_score(y_test, y_te_pred, average="macro") * 100
    f1_weighted = f1_score(y_test, y_te_pred, average="weighted") * 100
    auc_te = roc_auc_score(y_test, y_te_prob) * 100
    pr_auc_te = average_precision_score(y_test, y_te_prob) * 100
    brier_te = brier_score_loss(y_test, y_te_prob)
    logloss_te = log_loss(y_test, y_te_prob)

    eval_rows.append({
        "mo_hinh": name,
        "ma_cau_hinh": code,
        "cau_hinh": param_desc,
        "train_acc_pct": float(acc_tr),
        "train_f1_pct": float(f1_tr),
        "train_roc_auc_pct": float(auc_tr),
        "cv_acc_mean_pct": float(cv_r["cv_acc_mean"]),
        "cv_acc_std_pct": float(cv_r["cv_acc_std"]),
        "cv_f1_mean_pct": float(cv_r["cv_f1_mean"]),
        "cv_f1_std_pct": float(cv_r["cv_f1_std"]),
        "cv_f1_macro_mean_pct": float(cv_r["cv_f1_macro_mean"]),
        "cv_roc_auc_mean_pct": float(cv_r["cv_roc_auc_mean"]),
        "cv_roc_auc_std_pct": float(cv_r["cv_roc_auc_std"]),
        "test_acc_pct": float(acc_te),
        "test_prec_1_pct": float(prec_1),
        "test_rec_1_pct": float(rec_1),
        "test_f1_1_pct": float(f1_1),
        "test_prec_0_pct": float(prec_0),
        "test_rec_0_pct": float(rec_0),
        "test_f1_0_pct": float(f1_0),
        "test_f1_macro_pct": float(f1_macro),
        "test_f1_weighted_pct": float(f1_weighted),
        "test_roc_auc_pct": float(auc_te),
        "test_pr_auc_pct": float(pr_auc_te),
        "test_brier": float(brier_te),
        "test_logloss": float(logloss_te),
        "gap_train_test_acc_pct": float(acc_tr - acc_te),
        "thoi_gian_fit_giay": float(fit_time),
    })

    cm_rows.append({
        "mo_hinh": name,
        "TN": int(tn),
        "FP": int(fp),
        "FN": int(fn),
        "TP": int(tp),
        "tong_test": int(tn + fp + fn + tp),
        "ty_le_FP_tren_lop_0_FPR_pct": float(fp / (tn + fp) * 100),
        "ty_le_FN_tren_lop_1_FNR_pct": float(fn / (tp + fn) * 100),
        "ty_le_sai_so_tong_pct": float((fp + fn) / (tn + fp + fn + tp) * 100),
    })

    fpr_arr, tpr_arr, _ = roc_curve(y_test, y_te_prob)
    prec_arr, rec_arr, _ = precision_recall_curve(y_test, y_te_prob)
    curve_data[name] = {
        "fpr": fpr_arr,
        "tpr": tpr_arr,
        "prec": prec_arr,
        "rec": rec_arr,
        "auc": auc_te,
        "ap": pr_auc_te,
    }
    print(
        f"  * {name:30s}: Test Acc={acc_te:.2f}% | Prec(1)={prec_1:.2f}% | Rec(1)={rec_1:.2f}% "
        f"| F1(1)={f1_1:.2f}% | Macro-F1={f1_macro:.2f}% | ROC-AUC={auc_te:.2f}% | TN={tn:,}, FP={fp:,}, FN={fn:,}, TP={tp:,}"
    )

eval_df = pd.DataFrame(eval_rows)
eval_df.to_csv(OUT_DIR / "hieu_nang_mo_hinh.csv", index=False, encoding="utf-8-sig")

cm_df = pd.DataFrame(cm_rows)
cm_df.to_csv(OUT_DIR / "ma_tran_nham_lan.csv", index=False, encoding="utf-8-sig")

# ── 9. Thực nghiệm độ nhạy tiền xử lý (Pipeline chống rò rỉ vs PJ21 điền sẵn vs Cờ báo khuyết vs Xử lý mã 0)
sens_cache_path = OUT_DIR / "do_nhay_tien_xu_ly_ml.csv"
if sens_cache_path.exists() and "--recompute-sens" not in sys.argv:
    print("\nNạp kết quả phân tích độ nhạy tiền xử lý đã lưu từ outputs/chuong4/do_nhay_tien_xu_ly_ml.csv...")
    sens_ml_df = pd.read_csv(sens_cache_path)
    print(sens_ml_df.to_string(index=False))
else:
    print("\nĐang chạy phân tích độ nhạy tiền xử lý (4 phương án) cho Logistic Regression và Random Forest...")
    sens_ml_rows = []

    # Phương án A: Pipeline chuẩn chống rò rỉ (đã chạy ở trên)
    for mname in ["Logistic Regression", "Random Forest"]:
        r_base = eval_df.set_index("mo_hinh").loc[mname]
        sens_ml_rows.append({
            "phuong_an": "1. Pipeline chống rò rỉ (chuẩn — fit Imputer trên Train)",
            "mo_hinh": mname,
            "so_dac_trung_sau_ma_hoa": int(fitted_models[mname].named_steps["prep"].transform(X_test_pre.iloc[:5]).shape[1]),
            "test_acc_pct": float(r_base["test_acc_pct"]),
            "test_f1_1_pct": float(r_base["test_f1_1_pct"]),
            "test_f1_macro_pct": float(r_base["test_f1_macro_pct"]),
            "test_roc_auc_pct": float(r_base["test_roc_auc_pct"]),
        })

    # Phương án B: Huấn luyện trực tiếp trên PJ21.csv (đã điền khuyết toàn tập trước khi chia)
    for mname, is_lr in [("Logistic Regression", True), ("Random Forest", False)]:
        pipe_pj = Pipeline([
            ("prep", build_preprocessor(scale_numeric=is_lr, drop_first_ohe=is_lr)),
            (
                "clf",
                LogisticRegression(C=1.0, max_iter=1000, random_state=42)
                if is_lr
                else RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_leaf=2, n_jobs=-1, random_state=42),
            ),
        ])
        pipe_pj.fit(X_train_pj21, y_train)
        p_pred = pipe_pj.predict(X_test_pj21)
        p_prob = pipe_pj.predict_proba(X_test_pj21)[:, 1]
        sens_ml_rows.append({
            "phuong_an": "2. Nạp trực tiếp PJ21.csv (điền Mode/Median toàn cục trước khi chia)",
            "mo_hinh": mname,
            "so_dac_trung_sau_ma_hoa": int(pipe_pj.named_steps["prep"].transform(X_test_pj21.iloc[:5]).shape[1]),
            "test_acc_pct": float(accuracy_score(y_test, p_pred) * 100),
            "test_f1_1_pct": float(f1_score(y_test, p_pred) * 100),
            "test_f1_macro_pct": float(f1_score(y_test, p_pred, average="macro") * 100),
            "test_roc_auc_pct": float(roc_auc_score(y_test, p_prob) * 100),
        })

    # Phương án C: Pipeline chống rò rỉ + Cờ báo khuyết (add_indicator=True cho các biến có khuyết)
    def build_preprocessor_with_indicators(scale_numeric: bool = True, drop_first_ohe: bool = False) -> ColumnTransformer:
        mode_pipe = Pipeline([
            ("imputer", SimpleImputer(strategy="most_frequent", add_indicator=True)),
            ("ohe", OneHotEncoder(drop="first" if drop_first_ohe else None, handle_unknown="ignore", sparse_output=False)),
        ])
        unk_pipe = Pipeline([
            ("imputer", SimpleImputer(strategy="constant", fill_value="Unknown")),
            ("ohe", OneHotEncoder(drop="first" if drop_first_ohe else None, handle_unknown="ignore", sparse_output=False)),
        ])
        num_steps = [("imputer", SimpleImputer(strategy="median", add_indicator=True))]
        if scale_numeric:
            num_steps.append(("scaler", StandardScaler()))
        num_pipe = Pipeline(num_steps)
        return ColumnTransformer(
            transformers=[
                ("mode_cat", mode_pipe, MODE_CAT_COLS),
                ("unk_cat", unk_pipe, UNK_CAT_COLS),
                ("num", num_pipe, NUM_COLS),
            ],
            remainder="drop",
        )

    for mname, is_lr in [("Logistic Regression", True), ("Random Forest", False)]:
        pipe_ind = Pipeline([
            ("prep", build_preprocessor_with_indicators(scale_numeric=is_lr, drop_first_ohe=is_lr)),
            (
                "clf",
                LogisticRegression(C=1.0, max_iter=1000, random_state=42)
                if is_lr
                else RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_leaf=2, n_jobs=-1, random_state=42),
            ),
        ])
        pipe_ind.fit(X_train_pre, y_train)
        p_pred = pipe_ind.predict(X_test_pre)
        p_prob = pipe_ind.predict_proba(X_test_pre)[:, 1]
        sens_ml_rows.append({
            "phuong_an": "3. Pipeline chống rò rỉ + Cờ báo khuyết (Missing Indicators)",
            "mo_hinh": mname,
            "so_dac_trung_sau_ma_hoa": int(pipe_ind.named_steps["prep"].transform(X_test_pre.iloc[:5]).shape[1]),
            "test_acc_pct": float(accuracy_score(y_test, p_pred) * 100),
            "test_f1_1_pct": float(f1_score(y_test, p_pred) * 100),
            "test_f1_macro_pct": float(f1_score(y_test, p_pred, average="macro") * 100),
            "test_roc_auc_pct": float(roc_auc_score(y_test, p_prob) * 100),
        })

    # Phương án D: Xem mã điểm 0 ở 14 biến dịch vụ là khuyết (chuyển 0 -> NaN trước khi đưa vào Pipeline chống rò rỉ)
    X_train_zero_na = X_train_pre.copy()
    X_test_zero_na = X_test_pre.copy()
    for sc in SERVICE_COLS:
        X_train_zero_na.loc[X_train_zero_na[sc] == 0, sc] = np.nan
        X_test_zero_na.loc[X_test_zero_na[sc] == 0, sc] = np.nan

    for mname, is_lr in [("Logistic Regression", True), ("Random Forest", False)]:
        pipe_z = Pipeline([
            ("prep", build_preprocessor(scale_numeric=is_lr, drop_first_ohe=is_lr)),
            (
                "clf",
                LogisticRegression(C=1.0, max_iter=1000, random_state=42)
                if is_lr
                else RandomForestClassifier(n_estimators=200, max_depth=None, min_samples_leaf=2, n_jobs=-1, random_state=42),
            ),
        ])
        pipe_z.fit(X_train_zero_na, y_train)
        p_pred = pipe_z.predict(X_test_zero_na)
        p_prob = pipe_z.predict_proba(X_test_zero_na)[:, 1]
        sens_ml_rows.append({
            "phuong_an": "4. Chuyển điểm 0 dịch vụ thành NaN và điền trung vị trên Train",
            "mo_hinh": mname,
            "so_dac_trung_sau_ma_hoa": int(pipe_z.named_steps["prep"].transform(X_test_zero_na.iloc[:5]).shape[1]),
            "test_acc_pct": float(accuracy_score(y_test, p_pred) * 100),
            "test_f1_1_pct": float(f1_score(y_test, p_pred) * 100),
            "test_f1_macro_pct": float(f1_score(y_test, p_pred, average="macro") * 100),
            "test_roc_auc_pct": float(roc_auc_score(y_test, p_prob) * 100),
        })

    sens_ml_df = pd.DataFrame(sens_ml_rows)
    sens_ml_df.to_csv(sens_cache_path, index=False, encoding="utf-8-sig")
    print(sens_ml_df.to_string(index=False))

# ── 10. Giải thích mô hình: Hệ số Logistic Regression & Feature Importance (MDI vs Permutation)
# 10a. Hệ số Logistic Regression
lr_pipe = fitted_models["Logistic Regression"]
lr_prep = lr_pipe.named_steps["prep"]
lr_clf = lr_pipe.named_steps["clf"]

raw_feat_names_lr = lr_prep.get_feature_names_out()
clean_feat_names_lr = [
    fn.replace("mode_cat__", "").replace("unk_cat__", "").replace("num__", "")
    for fn in raw_feat_names_lr
]
coefs = lr_clf.coef_[0]
odds_ratios = np.exp(coefs)

lr_coef_df = pd.DataFrame({
    "dac_trung_ma_hoa": clean_feat_names_lr,
    "he_so_beta": coefs,
    "abs_beta": np.abs(coefs),
    "odds_ratio_exp_beta": odds_ratios,
}).sort_values("abs_beta", ascending=False).reset_index(drop=True)
lr_coef_df["hang_abs_beta"] = np.arange(1, len(lr_coef_df) + 1)
lr_coef_df.to_csv(OUT_DIR / "he_so_logistic.csv", index=False, encoding="utf-8-sig")

# 10b. Random Forest MDI (gom theo 22 biến gốc và giữ cả mức chi tiết sau mã hóa)
rf_pipe = fitted_models["Random Forest"]
rf_prep = rf_pipe.named_steps["prep"]
rf_clf = rf_pipe.named_steps["clf"]

raw_feat_names_rf = rf_prep.get_feature_names_out()
clean_feat_names_rf = [
    fn.replace("mode_cat__", "").replace("unk_cat__", "").replace("num__", "")
    for fn in raw_feat_names_rf
]
mdi_encoded = rf_clf.feature_importances_

# Ánh xạ từng cột sau mã hóa về đúng tên biến gốc trong 22 biến FEATURE_COLS
def map_to_orig_feature(encoded_name: str) -> str:
    for col in FEATURE_COLS:
        if encoded_name == col or encoded_name.startswith(col + "_"):
            return col
    return encoded_name


orig_mapped = [map_to_orig_feature(fn) for fn in clean_feat_names_rf]
mdi_by_orig = (
    pd.DataFrame({"bien": orig_mapped, "mdi": mdi_encoded})
    .groupby("bien", as_index=False)["mdi"]
    .sum()
)

# 10c. Permutation Importance trên tập Test (n = 23.819) cho cả 22 biến gốc
fi_cache_path = OUT_DIR / "do_quan_trong_dac_trung.csv"
if fi_cache_path.exists() and "--recompute-perm" not in sys.argv:
    print("\nNạp kết quả Permutation Importance đã lưu từ outputs/chuong4/do_quan_trong_dac_trung.csv...")
    fi_df = pd.read_csv(fi_cache_path)
else:
    print("\nĐang tính Permutation Importance trên tập Test (n = 23.819, n_repeats = 5) cho ROC-AUC và F1-score...")
    perm_multi = permutation_importance(
        rf_pipe, X_test_pre, y_test, scoring=["roc_auc", "f1"], n_repeats=5, random_state=42, n_jobs=1
    )
    perm_auc = perm_multi["roc_auc"]
    perm_f1 = perm_multi["f1"]

    perm_df = pd.DataFrame({
        "bien": FEATURE_COLS,
        "nhom_bien": [
            "Phân loại" if c in CAT_COLS else ("Định lượng vận hành" if c in METRIC_COLS else "Điểm dịch vụ [0, 5]")
            for c in FEATURE_COLS
        ],
        "perm_roc_auc_drop_mean": perm_auc.importances_mean * 100,
        "perm_roc_auc_drop_std": perm_auc.importances_std * 100,
        "perm_f1_drop_mean": perm_f1.importances_mean * 100,
        "perm_f1_drop_std": perm_f1.importances_std * 100,
    })

    fi_df = perm_df.merge(mdi_by_orig, on="bien", how="left")
    fi_df["mdi_pct"] = fi_df["mdi"] * 100
    fi_df["hang_mdi"] = fi_df["mdi"].rank(ascending=False, method="min").astype(int)
    fi_df["hang_perm_auc"] = fi_df["perm_roc_auc_drop_mean"].rank(ascending=False, method="min").astype(int)
    fi_df["hang_perm_f1"] = fi_df["perm_f1_drop_mean"].rank(ascending=False, method="min").astype(int)
    fi_df = fi_df.sort_values("mdi", ascending=False).reset_index(drop=True)
    fi_df.to_csv(fi_cache_path, index=False, encoding="utf-8-sig")
print("Top 10 biến quan trọng nhất theo Random Forest (MDI & Permutation Importance):")
print(fi_df[["bien", "mdi_pct", "hang_mdi", "perm_roc_auc_drop_mean", "hang_perm_auc", "perm_f1_drop_mean", "hang_perm_f1"]].head(10).to_string(index=False))

# 10d. Đối chiếu thứ hạng 14 tiêu chí dịch vụ giữa EDA (Chương 3 Spearman) và ML (Chương 4)
ch3_spearman = pd.read_csv(ROOT / "outputs" / "chuong3" / "do_nhay_diem_0.csv", index_col=0)
lr_service = lr_coef_df.set_index("dac_trung_ma_hoa").reindex(SERVICE_COLS)
fi_service = fi_df.set_index("bien").reindex(SERVICE_COLS)

eda_ml_service = pd.DataFrame({
    "tieu_chi_dich_vu": SERVICE_COLS,
    "spearman_giu0_ch3": ch3_spearman.reindex(SERVICE_COLS)["giu_0_pj21"].values,
    "hang_spearman_giu0": ch3_spearman.reindex(SERVICE_COLS)["hang_giu_0"].astype(int).values,
    "spearman_bo0_ch3": ch3_spearman.reindex(SERVICE_COLS)["bo_0_pj21"].values,
    "hang_spearman_bo0": ch3_spearman.reindex(SERVICE_COLS)["hang_bo_0"].astype(int).values,
    "spearman_quansat_ch3": ch3_spearman.reindex(SERVICE_COLS)["chi_o_quan_sat"].values,
    "hang_spearman_quansat": ch3_spearman.reindex(SERVICE_COLS)["hang_quan_sat"].astype(int).values,
    "lr_beta_ch4": lr_service["he_so_beta"].values,
    "hang_lr_dich_vu": lr_service["abs_beta"].rank(ascending=False, method="min").astype(int).values,
    "rf_mdi_pct_ch4": fi_service["mdi_pct"].values,
    "hang_rf_mdi_dich_vu": fi_service["mdi_pct"].rank(ascending=False, method="min").astype(int).values,
    "rf_perm_f1_drop_pct_ch4": fi_service["perm_f1_drop_mean"].values,
    "hang_rf_perm_f1_dich_vu": fi_service["perm_f1_drop_mean"].rank(ascending=False, method="min").astype(int).values,
    "rf_perm_auc_drop_pct_ch4": fi_service["perm_roc_auc_drop_mean"].values,
    "hang_rf_perm_auc_dich_vu": fi_service["perm_roc_auc_drop_mean"].rank(ascending=False, method="min").astype(int).values,
}).sort_values("hang_rf_mdi_dich_vu").reset_index(drop=True)
eda_ml_service.to_csv(OUT_DIR / "doi_chieu_eda_va_ml_dich_vu.csv", index=False, encoding="utf-8-sig")

# ── 11. Phân tích hiệu năng và sai số theo phân khúc trên tập Test (n = 23.819)
rf_test_pred = test_preds["Random Forest"]
rf_test_prob = test_probs["Random Forest"]
lr_test_pred = test_preds["Logistic Regression"]
lr_test_prob = test_probs["Logistic Regression"]

test_df_analysis = X_test_pj21.copy()
test_df_analysis["y_true"] = y_test
test_df_analysis["rf_pred"] = rf_test_pred
test_df_analysis["rf_prob"] = rf_test_prob
test_df_analysis["lr_pred"] = lr_test_pred
test_df_analysis["lr_prob"] = lr_test_prob
test_df_analysis["so_o_khuyet_goc"] = X_test_pre.isna().sum(axis=1).values
test_df_analysis["nhom_khuyet"] = np.where(
    test_df_analysis["so_o_khuyet_goc"] == 0,
    "0 ô khuyết (đầy đủ 100%)",
    np.where(test_df_analysis["so_o_khuyet_goc"] <= 3, "1–3 ô khuyết", "Từ 4 ô khuyết trở lên"),
)

subgroup_rows = []
for col_seg in ["Class", "Type of Travel", "Customer Type", "Gender", "nhom_khuyet"]:
    for grp_val, sub in test_df_analysis.groupby(col_seg, observed=True):
        yt = sub["y_true"].values
        yp = sub["rf_pred"].values
        ypr = sub["rf_prob"].values
        tn_s, fp_s, fn_s, tp_s = confusion_matrix(yt, yp, labels=[0, 1]).ravel()
        subgroup_rows.append({
            "chieu_phan_khuc": col_seg,
            "nhom": str(grp_val),
            "n_test": int(len(sub)),
            "ty_le_hai_long_thuc_pct": float(yt.mean() * 100),
            "rf_acc_pct": float(accuracy_score(yt, yp) * 100),
            "rf_prec_1_pct": float(precision_score(yt, yp, zero_division=0) * 100),
            "rf_rec_1_pct": float(recall_score(yt, yp, zero_division=0) * 100),
            "rf_f1_1_pct": float(f1_score(yt, yp, zero_division=0) * 100),
            "rf_f1_macro_pct": float(f1_score(yt, yp, average="macro", zero_division=0) * 100),
            "rf_roc_auc_pct": float(roc_auc_score(yt, ypr) * 100),
            "FP": int(fp_s),
            "FN": int(fn_s),
            "FPR_pct": float(fp_s / (tn_s + fp_s) * 100) if (tn_s + fp_s) > 0 else 0.0,
            "FNR_pct": float(fn_s / (tp_s + fn_s) * 100) if (tp_s + fn_s) > 0 else 0.0,
        })

subgroup_df = pd.DataFrame(subgroup_rows)
subgroup_df.to_csv(OUT_DIR / "hieu_nang_theo_phan_khuc.csv", index=False, encoding="utf-8-sig")

# Đặc điểm các nhóm dự đoán đúng/sai (TP, TN, FP, FN) của Random Forest trên tập Test
test_df_analysis["loai_ket_qua"] = np.select(
    [
        (test_df_analysis["y_true"] == 1) & (test_df_analysis["rf_pred"] == 1),
        (test_df_analysis["y_true"] == 0) & (test_df_analysis["rf_pred"] == 0),
        (test_df_analysis["y_true"] == 0) & (test_df_analysis["rf_pred"] == 1),
        (test_df_analysis["y_true"] == 1) & (test_df_analysis["rf_pred"] == 0),
    ],
    ["TP (Dự đoán đúng Hài lòng)", "TN (Dự đoán đúng Không HL)", "FP (Báo nhầm Hài lòng)", "FN (Bỏ sót Hài lòng)"],
    default="Khác",
)

error_profile_rows = []
for kq in ["TP (Dự đoán đúng Hài lòng)", "TN (Dự đoán đúng Không HL)", "FP (Báo nhầm Hài lòng)", "FN (Bỏ sót Hài lòng)"]:
    sub = test_df_analysis[test_df_analysis["loai_ket_qua"] == kq]
    error_profile_rows.append({
        "nhom_ket_qua": kq,
        "so_ban_ghi": int(len(sub)),
        "ty_le_tren_test_pct": float(len(sub) / len(test_df_analysis) * 100),
        "xac_suat_du_doan_tb": float(sub["rf_prob"].mean()),
        "so_o_khuyet_goc_tb": float(sub["so_o_khuyet_goc"].mean()),
        "online_boarding_tb": float(sub["Online Boarding"].mean()),
        "inflight_wifi_tb": float(sub["In-flight Wifi Service"].mean()),
        "inflight_ent_tb": float(sub["In-flight Entertainment"].mean()),
        "seat_comfort_tb": float(sub["Seat Comfort"].mean()),
        "arrival_delay_tb": float(sub["Arrival Delay"].mean()),
        "ty_le_business_class_pct": float((sub["Class"] == "Business").mean() * 100),
        "ty_le_unknown_travel_pct": float((sub["Type of Travel"] == "Unknown").mean() * 100),
    })

error_profile_df = pd.DataFrame(error_profile_rows)
error_profile_df.to_csv(OUT_DIR / "phan_tich_sai_so_fp_fn.csv", index=False, encoding="utf-8-sig")

# ── 12. Vẽ 5 biểu đồ chuẩn học thuật cho Chương 4 ───────────────────────────────
plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 9.5,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "figure.dpi": 150,
})
blue = "#236789"
dark_blue = "#16425B"
orange = "#D98744"
gray = "#7A8B99"
green = "#2E8B57"
red_accent = "#B84A39"


def save_fig(name: str):
    plt.tight_layout()
    plt.savefig(FIG_DIR / name, bbox_inches="tight")
    plt.close()


# Hình 4.1: So sánh hiệu năng 4 cấu hình mô hình (Train vs 5-Fold CV vs Test) để kiểm chứng quá khớp
fig, axs = plt.subplots(1, 2, figsize=(12.8, 4.2), sharey=True)
model_order_plot = [
    "Logistic Regression",
    "Decision Tree (Không cắt tỉa)",
    "Decision Tree (Đã tinh chỉnh)",
    "Random Forest",
]
short_mnames = [
    "Logistic\nRegression",
    "Decision Tree\n(Không cắt tỉa)",
    "Decision Tree\n(Đã tinh chỉnh)",
    "Random\nForest",
]
ev_idx = eval_df.set_index("mo_hinh").reindex(model_order_plot)
x = np.arange(len(model_order_plot))
w = 0.25

# Panel trái: Accuracy (Train, 5-Fold CV, Test)
b1 = axs[0].bar(x - w, ev_idx["train_acc_pct"], width=w, color=gray, label="Tập Train (n = 95.273)")
b2 = axs[0].bar(x, ev_idx["cv_acc_mean_pct"], width=w, color=orange, label="5-Fold CV trên Train")
b3 = axs[0].bar(x + w, ev_idx["test_acc_pct"], width=w, color=blue, label="Tập Test (n = 23.819)")
axs[0].set_xticks(x, short_mnames)
axs[0].set_ylim(75, 108)
axs[0].set_ylabel("Tỷ lệ phần trăm (%)")
axs[0].set_title("Độ chính xác (Accuracy): Kiểm chứng hiện tượng quá khớp", pad=24)
for bars in [b1, b2, b3]:
    for bar in bars:
        h = bar.get_height()
        axs[0].text(bar.get_x() + bar.get_width() / 2, h + 0.4, f"{h:.2f}%".replace(".", ","), ha="center", va="bottom", fontsize=7.2, rotation=90)

# Panel phải: Các chỉ số trên tập Test (F1 lớp 1, Macro-F1, ROC-AUC)
t1 = axs[1].bar(x - w, ev_idx["test_f1_1_pct"], width=w, color=orange, label="Test F1-score (Satisfied)")
t2 = axs[1].bar(x, ev_idx["test_f1_macro_pct"], width=w, color=blue, label="Test Macro-F1")
t3 = axs[1].bar(x + w, ev_idx["test_roc_auc_pct"], width=w, color=dark_blue, label="Test ROC-AUC")
axs[1].set_xticks(x, short_mnames)
axs[1].set_title("Hiệu năng trên tập kiểm tra độc lập (Test set, n = 23.819)", pad=24)
for bars in [t1, t2, t3]:
    for bar in bars:
        h = bar.get_height()
        axs[1].text(bar.get_x() + bar.get_width() / 2, h + 0.4, f"{h:.2f}%".replace(".", ","), ha="center", va="bottom", fontsize=7.2, rotation=90)

axs[0].legend(frameon=False, fontsize=8.0, loc="upper center", bbox_to_anchor=(0.5, 1.13), ncol=3)
axs[1].legend(frameon=False, fontsize=8.0, loc="upper center", bbox_to_anchor=(0.5, 1.13), ncol=3)
save_fig("01_so_sanh_mo_hinh.png")

# Hình 4.2: Ma trận nhầm lẫn của 3 mô hình chính trên tập Test (n = 23.819)
fig, axs = plt.subplots(1, 3, figsize=(12.6, 3.9))
main_3_models = ["Logistic Regression", "Decision Tree (Đã tinh chỉnh)", "Random Forest"]
cm_lookup = cm_df.set_index("mo_hinh")

for ax, mname in zip(axs, main_3_models):
    r_cm = cm_lookup.loc[mname]
    mat = np.array([[r_cm["TN"], r_cm["FP"]], [r_cm["FN"], r_cm["TP"]]])
    row_sums = mat.sum(axis=1, keepdims=True)
    mat_pct = mat / row_sums * 100.0
    im = ax.imshow(mat_pct, cmap="Blues", vmin=0, vmax=100)
    ax.set_xticks([0, 1], ["Dự đoán: 0\n(Neutral/Dissat)", "Dự đoán: 1\n(Satisfied)"], fontsize=8.3)
    ax.set_yticks([0, 1], ["Thực tế: 0\n(n = 13.471)", "Thực tế: 1\n(n = 10.348)"], fontsize=8.3)
    ax.set_title(mname, fontsize=10, fontweight="bold")
    tag_names = [["TN", "FP"], ["FN", "TP"]]
    for i in range(2):
        for j in range(2):
            cnt_val = int(mat[i, j])
            pct_val = mat_pct[i, j]
            txt = f"{tag_names[i][j]}\n{cnt_val:,}\n({pct_val:.2f}%)".replace(",", ".").replace(".", ",", 1 if "." not in f"{cnt_val:,}" else 0)
            # Format cleanly in Vietnamese style
            cnt_str = f"{cnt_val:,}".replace(",", ".")
            pct_str = f"{pct_val:.2f}%".replace(".", ",")
            ax.text(
                j, i, f"{tag_names[i][j]}: {cnt_str}\n({pct_str})",
                ha="center", va="center",
                fontsize=8.6, fontweight="bold",
                color="white" if pct_val > 55 else "black",
            )
save_fig("02_ma_tran_nham_lan.png")

# Hình 4.3: Đường cong ROC và Precision-Recall trên tập Test (n = 23.819)
fig, axs = plt.subplots(1, 2, figsize=(11.8, 4.2))
style_map = {
    "Logistic Regression": (gray, "--", 1.8),
    "Decision Tree (Đã tinh chỉnh)": (orange, "-.", 1.9),
    "Random Forest": (blue, "-", 2.3),
}
for mname in main_3_models:
    cd = curve_data[mname]
    col_c, ls_c, lw_c = style_map[mname]
    auc_str = f"{cd['auc']:.2f}%".replace(".", ",")
    ap_str = f"{cd['ap']:.2f}%".replace(".", ",")
    axs[0].plot(cd["fpr"], cd["tpr"], color=col_c, linestyle=ls_c, linewidth=lw_c, label=f"{mname} (AUC = {auc_str})")
    axs[1].plot(cd["rec"], cd["prec"], color=col_c, linestyle=ls_c, linewidth=lw_c, label=f"{mname} (AP = {ap_str})")

axs[0].plot([0, 1], [0, 1], color="#BBBBBB", linestyle=":", linewidth=1.2, label="Ngẫu nhiên (AUC = 50,00%)")
axs[0].set_xlabel("Tỷ lệ dương tính giả (False Positive Rate)")
axs[0].set_ylabel("Tỷ lệ dương tính thật (True Positive Rate / Recall)")
axs[0].set_title("Đường cong ROC trên tập Test (n = 23.819)")
axs[0].legend(frameon=False, fontsize=8.3, loc="lower right")

baseline_pos = y_test.mean()
axs[1].axhline(baseline_pos, color="#BBBBBB", linestyle=":", linewidth=1.2, label=f"Tỷ lệ lớp dương cơ sở ({baseline_pos*100:.2f}%)".replace(".", ","))
axs[1].set_xlabel("Độ phủ (Recall)")
axs[1].set_ylabel("Độ chính xác dương (Precision)")
axs[1].set_title("Đường cong Precision–Recall trên tập Test (n = 23.819)")
axs[1].legend(frameon=False, fontsize=8.3, loc="lower left")
save_fig("03_roc_pr_curves.png")

# Hình 4.4: Độ quan trọng đặc trưng trên Random Forest (Top 15 theo MDI vs Permutation Importance F1 & ROC-AUC)
top15_fi = fi_df.head(15).iloc[::-1]
fig, axs = plt.subplots(1, 2, figsize=(12.8, 5.2), sharey=True)
y_pos = np.arange(len(top15_fi))

axs[0].barh(y_pos, top15_fi["mdi_pct"], color=blue, height=0.65)
axs[0].set_yticks(y_pos, top15_fi["bien"], fontsize=8.8)
axs[0].set_xlabel("Tỷ trọng giảm độ hỗn tạp MDI (%)")
axs[0].set_title("Random Forest MDI (Tập Train, n = 95.273)")
axs[0].set_xlim(0, max(top15_fi["mdi_pct"]) * 1.18)
for i, v in enumerate(top15_fi["mdi_pct"]):
    axs[0].text(v + 0.3, i, f"{v:.2f}%".replace(".", ","), va="center", fontsize=8)

axs[1].barh(y_pos + 0.16, top15_fi["perm_f1_drop_mean"], height=0.32, color=orange, label="Mức giảm F1-score (điểm %)")
axs[1].barh(y_pos - 0.16, top15_fi["perm_roc_auc_drop_mean"], height=0.32, color=dark_blue, label="Mức giảm ROC-AUC (điểm %)")
axs[1].set_xlabel("Mức suy giảm hiệu năng khi hoán vị trên tập Test (điểm %)")
axs[1].set_title("Permutation Importance (Tập Test, n = 23.819)")
axs[1].set_xlim(0, max(top15_fi["perm_f1_drop_mean"].max(), top15_fi["perm_roc_auc_drop_mean"].max()) * 1.22)
for i, (vf1, vauc) in enumerate(zip(top15_fi["perm_f1_drop_mean"], top15_fi["perm_roc_auc_drop_mean"])):
    axs[1].text(vf1 + 0.15, i + 0.16, f"{vf1:.2f}".replace(".", ","), va="center", fontsize=7.5, color="#994D1C")
    axs[1].text(vauc + 0.15, i - 0.16, f"{vauc:.2f}".replace(".", ","), va="center", fontsize=7.5, color=dark_blue)
axs[1].legend(frameon=False, fontsize=8.3, loc="lower right")
save_fig("04_feature_importance.png")

# Hình 4.5: Hệ số chuẩn hóa Logistic Regression (trái) và hiệu năng Random Forest theo phân khúc hành khách (phải)
fig, axs = plt.subplots(1, 2, figsize=(13.0, 4.8))
top12_lr = lr_coef_df.head(12).iloc[::-1]
lr_colors = [blue if b > 0 else orange for b in top12_lr["he_so_beta"]]
y_lr = np.arange(len(top12_lr))
axs[0].barh(y_lr, top12_lr["he_so_beta"], color=lr_colors, height=0.65)
axs[0].axvline(0, color="#555555", linewidth=1.0)
axs[0].set_yticks(y_lr, top12_lr["dac_trung_ma_hoa"], fontsize=8.5)
axs[0].set_xlabel("Hệ số hồi quy chuẩn hóa β (log-odds)")
axs[0].set_title("12 đặc trưng có |β| lớn nhất trên Logistic Regression")
axs[0].set_xlim(min(top12_lr["he_so_beta"]) * 1.25, max(top12_lr["he_so_beta"]) * 1.25)
for i, v in enumerate(top12_lr["he_so_beta"]):
    offset = 0.04 if v >= 0 else -0.04
    ha_align = "left" if v >= 0 else "right"
    axs[0].text(v + offset, i, f"{v:+.2f}".replace(".", ","), va="center", ha=ha_align, fontsize=8)

seg_plot_df = subgroup_df[subgroup_df["chieu_phan_khuc"].isin(["Class", "Type of Travel", "Customer Type"])].copy()
seg_labels = [f"{r['chieu_phan_khuc']}:\n{r['nhom']}" if r["nhom"] == "Unknown" else str(r["nhom"]) for _, r in seg_plot_df.iterrows()]
y_seg = np.arange(len(seg_plot_df))
axs[1].barh(y_seg + 0.16, seg_plot_df["rf_acc_pct"], height=0.32, color=blue, label="Accuracy (%)")
axs[1].barh(y_seg - 0.16, seg_plot_df["rf_f1_macro_pct"], height=0.32, color=orange, label="Macro-F1 (%)")
axs[1].set_yticks(y_seg, seg_labels, fontsize=8.3)
axs[1].set_xlim(70, 105)
axs[1].set_xlabel("Hiệu năng trên tập Test (%)")
axs[1].set_title("Hiệu năng Random Forest theo phân khúc (Test, n = 23.819)", pad=28)
for i, (vacc, vf1) in enumerate(zip(seg_plot_df["rf_acc_pct"], seg_plot_df["rf_f1_macro_pct"])):
    axs[1].text(vacc + 0.3, i + 0.16, f"{vacc:.2f}%".replace(".", ","), va="center", fontsize=7.5)
    axs[1].text(vf1 + 0.3, i - 0.16, f"{vf1:.2f}%".replace(".", ","), va="center", fontsize=7.5, color="#994D1C")
axs[1].legend(frameon=False, fontsize=8.3, loc="upper center", bbox_to_anchor=(0.5, 1.09), ncol=2)
save_fig("05_he_so_logistic_va_phan_khuc.png")

# ── 13. Lưu tổng hợp ket_qua_chuong4.json và kiểm tra toàn vẹn SHA-256 ─────────
hashes_after = {
    "Data\\raw\\Du lieu khong sach.csv": sha256_file(RAW_PATH),
    "Data\\processed\\PJ21.csv": sha256_file(CLEAN_PATH),
}
assert hashes_before == hashes_after, "Tệp dữ liệu đầu vào đã bị thay đổi!"

summary_ch4 = {
    "n_total": int(n_total),
    "n_train": int(n_train),
    "n_test": int(n_test),
    "train_satisfied_n": int(train_pos),
    "train_satisfied_pct": float(y_train.mean() * 100),
    "train_dissatisfied_n": int(train_neg),
    "train_dissatisfied_pct": float((1 - y_train.mean()) * 100),
    "test_satisfied_n": int(test_pos),
    "test_satisfied_pct": float(y_test.mean() * 100),
    "test_dissatisfied_n": int(test_neg),
    "test_dissatisfied_pct": float((1 - y_test.mean()) * 100),
    "n_features_orig": len(FEATURE_COLS),
    "n_cat_features": len(CAT_COLS),
    "n_num_features": len(NUM_COLS),
    "n_encoded_features_tree": len(clean_feat_names_rf),
    "n_encoded_features_lr": len(clean_feat_names_lr),
    "imputation_train_matches_pj21_all_22": all_imp_match,
    "vif_max_col": str(vif_df.iloc[0]["bien"]),
    "vif_max_val": float(vif_df.iloc[0]["VIF"]),
    "vif_second_col": str(vif_df.iloc[1]["bien"]),
    "vif_second_val": float(vif_df.iloc[1]["VIF"]),
    "vif_third_col": str(vif_df.iloc[2]["bien"]),
    "vif_third_val": float(vif_df.iloc[2]["VIF"]),
    "dep_arr_pearson_train": dep_arr_pearson,
    "dep_arr_spearman_train": dep_arr_spearman,
    "models_test": eval_df.set_index("mo_hinh").to_dict(orient="index"),
    "confusion_matrices_test": cm_df.set_index("mo_hinh").to_dict(orient="index"),
    "top5_rf_mdi": fi_df.head(5)[["bien", "mdi_pct", "perm_roc_auc_drop_mean", "perm_f1_drop_mean"]].to_dict(orient="records"),
    "top5_rf_perm_auc": fi_df.sort_values("hang_perm_auc").head(5)[["bien", "mdi_pct", "perm_roc_auc_drop_mean", "perm_f1_drop_mean"]].to_dict(orient="records"),
    "top5_rf_perm_f1": fi_df.sort_values("hang_perm_f1").head(5)[["bien", "mdi_pct", "perm_roc_auc_drop_mean", "perm_f1_drop_mean"]].to_dict(orient="records"),
    "top5_lr_beta": lr_coef_df.head(5)[["dac_trung_ma_hoa", "he_so_beta", "odds_ratio_exp_beta"]].to_dict(orient="records"),
    "input_sha256": hashes_after,
    "versions": {
        "python": platform.python_version(),
        "pandas": pd.__version__,
        "numpy": np.__version__,
        "scikit_learn": sklearn.__version__,
        "matplotlib": matplotlib.__version__,
    },
}

(OUT_DIR / "ket_qua_chuong4.json").write_text(
    json.dumps(summary_ch4, ensure_ascii=False, indent=2), encoding="utf-8"
)
print("\nĐã lưu toàn bộ kết quả Chương 4 vào outputs/chuong4/ và 5 biểu đồ vào figures/chuong4/.")
print("=" * 80)
