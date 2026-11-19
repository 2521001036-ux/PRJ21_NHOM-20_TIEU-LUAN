(function () {
  "use strict";

  const DATA = window.PRJ21_DATA;
  if (!DATA) {
    document.body.innerHTML = "<div style='padding:40px;font-family:sans-serif;color:#b91c1c'><h2>Lỗi tải dữ liệu cục bộ</h2><p>Không tìm thấy tệp <code>data.js</code> trong cùng thư mục.</p></div>";
    return;
  }

  // ── Formatting helpers (Vietnamese locale) ──
  const fmtInt = (v) => Math.round(Number(v)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const fmtDec = (v, k = 2) => Number(v).toFixed(k).replace(".", ",");
  const fmtU = (v) => {
    const num = Number(v);
    const intPart = Math.trunc(num);
    const decPart = Math.round(Math.abs(num - intPart) * 10);
    return fmtInt(intPart) + "," + decPart;
  };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  // ── Global state ──
  const state = {
    section: 1, // 1..6
    autoPlayTimer: null,
    presentationMode: false,
    demoTimer: null,
    demoStepIdx: -1,
    auditSearch: "",
    auditFilter: "all",
    exampleVar: "Class",
    exampleAction: "all",
    edaTab: "segments", // segments | delays | spearman
    segVar: "Class",
    segMode: "full", // full | observed
    delayVar: "Departure Delay",
    delayMode: "full", // full | observed
    spearmanMode: "keep0", // keep0 | drop0 | obs
  };

  // ── Section Navigation & Presentation Controls ──
  function goToSection(idx) {
    const target = Math.max(1, Math.min(6, idx));
    state.section = target;
    document.querySelectorAll(".section-panel").forEach((el) => {
      el.classList.toggle("active", Number(el.dataset.section) === target);
    });
    document.querySelectorAll(".nav-pill").forEach((el) => {
      el.classList.toggle("active", Number(el.dataset.section) === target);
    });
    document.getElementById("slideCounter").textContent = `${target}/6`;
    document.getElementById("btnPrev").disabled = target === 1;
    document.getElementById("btnNext").disabled = target === 6;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleAutoPlay() {
    const btn = document.getElementById("btnAutoPlay");
    if (state.autoPlayTimer) {
      clearInterval(state.autoPlayTimer);
      state.autoPlayTimer = null;
      btn.textContent = "▶ Tự chạy";
      btn.classList.remove("active");
    } else {
      btn.textContent = "⏸ Tạm dừng";
      btn.classList.add("active");
      state.autoPlayTimer = setInterval(() => {
        const nextSec = state.section < 6 ? state.section + 1 : 1;
        goToSection(nextSec);
      }, 6500);
    }
  }

  function stopAutoPlayIfRunning() {
    if (state.autoPlayTimer) {
      toggleAutoPlay();
    }
  }

  function togglePresentationMode() {
    state.presentationMode = !state.presentationMode;
    document.body.classList.toggle("presentation-mode", state.presentationMode);
    const btn = document.getElementById("btnPresent");
    btn.classList.toggle("active", state.presentationMode);
    btn.textContent = state.presentationMode ? "Thoát thuyết trình" : "Chế độ thuyết trình";
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  document.addEventListener("fullscreenchange", () => {
    const btn = document.getElementById("btnFullscreen");
    if (btn) {
      const isFs = Boolean(document.fullscreenElement);
      btn.classList.toggle("active", isFs);
      btn.textContent = isFs ? "Thoát toàn màn hình" : "Toàn màn hình";
    }
  });

  // Keyboard navigation (disabled when focused on input/select/textarea)
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select" || (e.target && e.target.isContentEditable)) {
      return;
    }
    if (e.key === "Escape") {
      closeSourceModal();
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      stopAutoPlayIfRunning();
      if (state.section < 6) goToSection(state.section + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      stopAutoPlayIfRunning();
      if (state.section > 1) goToSection(state.section - 1);
    }
  });

  // ── "Xem nguồn" Modal ──
  const SOURCE_CONTEXT = {
    1: {
      title: "Nguồn căn cứ — Phần ① Tổng quan",
      files: ["Data/raw/Du lieu khong sach.csv", "Data/processed/PJ21.csv", "outputs/chuong3/ket_qua.json"],
      detail: "Số dòng trước (129.880 dòng), số dòng bị loại thiếu nhãn (10.788 dòng = 8,31%), số dòng sạch PJ21.csv (119.092 dòng = 91,69%), cơ cấu nhãn (51.740 Satisfied = 43,45%; 67.352 Neutral or Dissatisfied = 56,55%) và tổng hợp lỗi (957.918 lượt lỗi; 920.170 ô lỗi duy nhất; 0 ô lỗi sau xử lý) được đối chiếu 100% giữa tệp dữ liệu và ket_qua.json.",
    },
    2: {
      title: "Nguồn căn cứ — Phần ② Quy trình làm sạch",
      files: ["Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py", "nhật ký làm việc.md", "outputs/chuong3_ban_thao.qmd"],
      detail: "6 bước trình bày theo đúng thứ tự thực thi của hàm chay_lam_sach() trong lam_sach_du_lieu.py (đồng bộ 100% với clean_data.ipynb): kiểm toán từng ô -> chuẩn hóa 5 cột phân loại (ALL_MAPS) -> trích số & lọc BOUNDS 18 cột số -> loại 10.788 dòng thiếu nhãn -> điền khuyết toàn cục -> chuẩn hóa ID & kiểm chứng tái lập assert_frame_equal().",
    },
    3: {
      title: "Nguồn căn cứ — Phần ③ Kiểm toán 24 biến",
      files: ["outputs/chuong3/kiem_tra_chat_luong.csv", "outputs/Bao_cao_lam_sach_du_lieu.csv", "Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py"],
      detail: "Toàn bộ 24 biến được quét thực tế từng ô bằng hàm kiem_toan_tung_o() cho cả trước và sau xử lý (không gán cứng bằng 0). Khớp 100% giữa kiem_tra_chat_luong.csv và Bao_cao_lam_sach_du_lieu.csv: 957.918 lượt lỗi − 37.748 ô trùng 2 lỗi = 920.170 ô lỗi duy nhất = 83.037 ô thuộc dòng loại + 837.133 ô được sửa trên dòng giữ lại.",
    },
    4: {
      title: "Nguồn căn cứ — Phần ④ Ví dụ thực tế trước–sau",
      files: ["Data/raw/Du lieu khong sach.csv", "Data/processed/PJ21.csv", "Notebooks/02_kiem_toan_du_lieu.ipynb/lam_sach_du_lieu.py"],
      detail: "Mọi ví dụ đều là bản ghi thật được ghép trực tiếp 1–1 bằng khóa số nguyên ID duy nhất (validate='one_to_one', tuyệt đối không ghép theo số thứ tự dòng). Cách xử lý phân biệt rõ Chuẩn hóa (giá trị hợp lệ trong BOUNDS sau cắt khoảng trắng/hậu tố) với Điền khuyết (thiếu hoặc ngoài BOUNDS), Gán nhãn Unknown và Loại dòng thiếu nhãn.",
    },
    5: {
      title: "Nguồn căn cứ — Phần ⑤ Khám phá dữ liệu (EDA)",
      files: ["outputs/chuong3/ket_qua.json", "outputs/chuong3/nhom_do_tre_khoi_hanh.csv", "outputs/chuong3/nhom_do_tre.csv", "outputs/chuong3/do_nhay_diem_0.csv"],
      detail: "Dữ liệu phân khúc RQ1, độ trễ khởi hành & độ trễ đến RQ2, và 3 phương án tương quan Spearman RQ3 được trích trực tiếp từ các bảng CSV và ket_qua.json sinh bởi src/phan_tich_chuong3.py. Tập 'Chỉ ô quan sát được' được xác định từ mặt nạ đối chiếu khóa ID với dữ liệu thô trước bước điền khuyết.",
    },
  };

  function openSourceModal(secId) {
    const info = SOURCE_CONTEXT[secId] || SOURCE_CONTEXT[1];
    document.getElementById("modalTitle").textContent = info.title;
    const hashMap = {};
    DATA.provenance.source_hashes.forEach((h) => { hashMap[h.file] = h.sha256; });

    const filesHtml = info.files.map((f) => {
      const sha = hashMap[f] || "(xem bảng SHA-256 ở Phần ⑥)";
      return `<div style="margin-bottom:8px;padding:8px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
        <div style="font-weight:700;font-size:0.88rem;color:#0f172a;">${esc(f)}</div>
        <div class="sha-text">SHA-256: ${esc(sha)}</div>
      </div>`;
    }).join("");

    document.getElementById("modalBody").innerHTML = `
      <p style="margin-bottom:12px;color:#334155;font-size:0.93rem;">${esc(info.detail)}</p>
      <div style="font-weight:700;font-size:0.84rem;text-transform:uppercase;color:#0369a1;margin-bottom:6px;">Tệp nguồn trực tiếp & mã băm SHA-256</div>
      ${filesHtml}
      <div style="margin-top:14px;display:flex;justify-content:flex-end;gap:8px;">
        <button class="btn btn-primary" id="btnJumpSec6">Mở bảng đối chiếu đầy đủ ở Phần ⑥</button>
        <button class="btn btn-outline" id="btnCloseModal2">Đóng</button>
      </div>
    `;
    document.getElementById("btnJumpSec6").onclick = () => {
      closeSourceModal();
      goToSection(6);
    };
    document.getElementById("btnCloseModal2").onclick = closeSourceModal;
    document.getElementById("sourceModal").classList.add("open");
  }

  function closeSourceModal() {
    document.getElementById("sourceModal").classList.remove("open");
  }

  // ── Render Section 1: TỔNG QUAN ──
  function renderOverview() {
    const ov = DATA.overview;
    const kpis = [
      { label: "Dữ liệu đầu vào (Raw)", val: fmtInt(ov.rows_raw), unit: "dòng", sub: `${ov.columns} cột · ${fmtInt(ov.cells_raw)} ô`, cls: "slate" },
      { label: "Loại thiếu nhãn Satisfaction", val: fmtInt(ov.rows_dropped), unit: "dòng", sub: `${fmtDec(ov.dropped_pct)}% · ${fmtInt(ov.cells_dropped)} ô`, cls: "crimson" },
      { label: "Dữ liệu sạch PJ21.csv", val: fmtInt(ov.rows_clean), unit: "dòng", sub: `${fmtDec(ov.kept_pct)}% · ${fmtInt(ov.cells_clean)} ô`, cls: "emerald" },
      { label: "Tổng lượt lỗi (trước)", val: fmtInt(ov.total_error_occurrences_raw), unit: "lượt lỗi", sub: `Gồm ${fmtInt(ov.overlap_fmt_out_raw)} ô trùng 2 lỗi`, cls: "amber" },
      { label: "Ô lỗi duy nhất (trước)", val: fmtInt(ov.unique_error_cells_raw), unit: "ô", sub: `${fmtDec(ov.unique_error_cells_raw_pct)}% (${fmtInt(ov.unique_error_cells_dropped_rows)} loại + ${fmtInt(ov.unique_error_cells_fixed_kept_rows)} sửa)`, cls: "amber" },
      { label: "Lỗi sau xử lý (PJ21.csv)", val: fmtInt(ov.errors_after_clean), unit: "ô", sub: `${fmtInt(ov.total_imputed_or_unknown_pj21)} ô điền khuyết / Unknown`, cls: "emerald" },
    ];

    document.getElementById("kpiGrid").innerHTML = kpis.map((k) => `
      <div class="kpi-card ${k.cls}">
        <div class="kpi-label">${esc(k.label)}</div>
        <div class="kpi-value">${esc(k.val)}<span class="kpi-unit">${esc(k.unit)}</span></div>
        <div class="kpi-sub">${esc(k.sub)}</div>
      </div>
    `).join("");

    // Chart 1A: Label screening on raw (n = 129,880 rows)
    const c1a = `
      <svg viewBox="0 0 540 250" width="100%" style="max-height:250px;">
        <rect x="0" y="0" width="540" height="250" fill="#ffffff"/>
        <line x1="62" y1="205" x2="510" y2="205" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="62" y1="25" x2="62" y2="205" stroke="#94a3b8" stroke-width="1.5"/>
        ${[0, 25, 50, 75, 100].map((p) => {
          const y = 205 - (p / 100) * 165;
          return `<line x1="62" y1="${y}" x2="510" y2="${y}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
                  <text x="54" y="${y + 4}" text-anchor="end" font-size="11" fill="#64748b">${p}%</text>`;
        }).join("")}
        <!-- Kept bar -->
        <rect x="125" y="${205 - (ov.kept_pct / 100) * 165}" width="115" height="${(ov.kept_pct / 100) * 165}" rx="6" fill="#0284c7"/>
        <text x="182" y="${205 - (ov.kept_pct / 100) * 165 - 22}" text-anchor="middle" font-size="13" font-weight="800" fill="#0f172a">${fmtInt(ov.rows_clean)} dòng</text>
        <text x="182" y="${205 - (ov.kept_pct / 100) * 165 - 6}" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">(${fmtDec(ov.kept_pct)}%)</text>
        <text x="182" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Có nhãn hợp lệ (giữ lại)</text>
        <text x="182" y="240" text-anchor="middle" font-size="11" fill="#64748b">Đưa vào PJ21.csv</text>
        <!-- Dropped bar -->
        <rect x="330" y="${205 - (ov.dropped_pct / 100) * 165}" width="115" height="${(ov.dropped_pct / 100) * 165}" rx="6" fill="#94a3b8"/>
        <text x="387" y="${205 - (ov.dropped_pct / 100) * 165 - 22}" text-anchor="middle" font-size="13" font-weight="800" fill="#0f172a">${fmtInt(ov.rows_dropped)} dòng</text>
        <text x="387" y="${205 - (ov.dropped_pct / 100) * 165 - 6}" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">(${fmtDec(ov.dropped_pct)}%)</text>
        <text x="387" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Thiếu nhãn (loại bỏ)</text>
        <text x="387" y="240" text-anchor="middle" font-size="11" fill="#64748b">Không điền nhãn giả</text>
      </svg>
    `;
    document.getElementById("chartScreening").innerHTML = c1a;

    // Chart 1B: Satisfaction class balance on PJ21.csv (n = 119,092 rows)
    const r = 74;
    const circ = 2 * Math.PI * r;
    const satDash = (ov.rate_satisfied_pct / 100) * circ;
    const disDash = circ - satDash;
    const c1b = `
      <svg viewBox="0 0 540 250" width="100%" style="max-height:250px;">
        <circle cx="135" cy="125" r="${r}" fill="none" stroke="#d97706" stroke-width="28"/>
        <circle cx="135" cy="125" r="${r}" fill="none" stroke="#0284c7" stroke-width="28"
          stroke-dasharray="${satDash} ${disDash}" transform="rotate(-90 135 125)"/>
        <text x="135" y="118" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">${fmtInt(ov.rows_clean)}</text>
        <text x="135" y="137" text-anchor="middle" font-size="11.5" font-weight="600" fill="#64748b">dòng (PJ21.csv)</text>

        <rect x="255" y="52" width="16" height="16" rx="4" fill="#0284c7"/>
        <text x="280" y="65" font-size="13.5" font-weight="700" fill="#0f172a">Satisfied (Hài lòng)</text>
        <text x="280" y="88" font-size="17" font-weight="800" fill="#0369a1">${fmtInt(ov.satisfied_count)} dòng (${fmtDec(ov.rate_satisfied_pct)}%)</text>

        <rect x="255" y="132" width="16" height="16" rx="4" fill="#d97706"/>
        <text x="280" y="145" font-size="13.5" font-weight="700" fill="#0f172a">Neutral or Dissatisfied (Trung lập / Không HL)</text>
        <text x="280" y="168" font-size="17" font-weight="800" fill="#b45309">${fmtInt(ov.dissatisfied_count)} dòng (${fmtDec(ov.rate_dissatisfied_pct)}%)</text>

        <text x="255" y="212" font-size="11.5" fill="#475569">Mẫu số: n = 119.092 dòng trên PJ21.csv (100% nhãn quan sát thực tế).</text>
      </svg>
    `;
    document.getElementById("chartLabels").innerHTML = c1b;
  }

  // ── Render Section 2: QUY TRÌNH LÀM SẠCH ──
  function renderPipeline() {
    const container = document.getElementById("stepsList");
    container.innerHTML = DATA.pipeline_steps.map((st, idx) => `
      <div class="step-card ${idx === 0 ? "open" : ""}" id="stepCard-${st.step}" data-step-idx="${idx}">
        <button class="step-header" type="button" data-toggle-step="${st.step}">
          <div class="step-left">
            <div class="step-num">${st.step}</div>
            <div>
              <div class="step-title">Bước ${st.step}: ${esc(st.title)}</div>
              <div class="step-tag">${esc(st.tag)}</div>
            </div>
          </div>
          <span class="step-chevron">▼</span>
        </button>
        <div class="step-body">
          <div class="step-grid">
            <div class="step-detail-box"><strong>Lỗi gặp phải</strong>${esc(st.errors)}</div>
            <div class="step-detail-box"><strong>Quy tắc xử lý</strong>${esc(st.rule)}</div>
            <div class="step-detail-box"><strong>Lý do kỹ thuật</strong>${esc(st.reason)}</div>
            <div class="step-detail-box"><strong>Kết quả kiểm chứng được</strong>${esc(st.result)}</div>
          </div>
          <div class="step-source-line">Căn cứ mã nguồn: ${esc(st.source_ref)}</div>
        </div>
      </div>
    `).join("");

    container.querySelectorAll("[data-toggle-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = document.getElementById(`stepCard-${btn.dataset.toggleStep}`);
        card.classList.toggle("open");
      });
    });
  }

  function stopDemoRun() {
    if (state.demoTimer) {
      clearInterval(state.demoTimer);
      state.demoTimer = null;
    }
    const btn = document.getElementById("btnDemoSteps");
    if (btn) {
      btn.textContent = "▶ Trình diễn kết quả đã tính";
      btn.classList.remove("btn-amber");
      btn.classList.add("btn-primary");
    }
  }

  function highlightDemoStep(idx) {
    const cards = document.querySelectorAll(".step-card");
    cards.forEach((c, i) => {
      c.classList.toggle("highlighted", i === idx);
      if (i === idx) {
        c.classList.add("open");
        c.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
    const pct = Math.round(((idx + 1) / cards.length) * 100);
    document.getElementById("demoProgressFill").style.width = `${pct}%`;
    document.getElementById("demoStatusText").textContent =
      `Đang trình diễn Bước ${idx + 1}/${cards.length}: ${DATA.pipeline_steps[idx].title}`;
  }

  function toggleDemoSteps() {
    const btn = document.getElementById("btnDemoSteps");
    if (state.demoTimer) {
      stopDemoRun();
      document.getElementById("demoStatusText").textContent = "Đã tạm dừng trình diễn các bước làm sạch.";
      return;
    }
    btn.textContent = "⏸ Dừng trình diễn";
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-amber");
    state.demoStepIdx = 0;
    highlightDemoStep(0);
    state.demoTimer = setInterval(() => {
      state.demoStepIdx += 1;
      if (state.demoStepIdx >= DATA.pipeline_steps.length) {
        stopDemoRun();
        document.getElementById("demoStatusText").textContent =
          "Hoàn tất trình diễn 6 bước quy trình làm sạch (0 lỗi sau xử lý trên 119.092 dòng PJ21.csv).";
        return;
      }
      highlightDemoStep(state.demoStepIdx);
    }, 2200);
  }

  // ── Render Section 3: KIỂM TOÁN 24 BIẾN ──
  function getFilteredAuditRows() {
    const q = state.auditSearch.trim().toLowerCase();
    return DATA.audit_24.filter((r) => {
      if (q && !r.bien.toLowerCase().includes(q) && !r.nhom.toLowerCase().includes(q)) {
        return false;
      }
      if (state.auditFilter === "missing") return r.thieu_tong > 0;
      if (state.auditFilter === "format") return r.sai_dinh_dang > 0;
      if (state.auditFilter === "outlier") return r.ngoai_mien > 0;
      if (state.auditFilter === "overlap") return r.trung_2_loi > 0;
      if (state.auditFilter === "imputed") return r.so_o_dien > 0;
      return true;
    });
  }

  function renderAuditTable() {
    const rows = getFilteredAuditRows();
    document.getElementById("auditCountLabel").textContent = `Đang hiển thị ${rows.length}/24 biến`;

    const tbody = document.getElementById("auditTbody");
    if (rows.length === 0) {
      tbody.innerHTML = `<tr><td colspan="12" style="text-align:center;padding:24px;color:#64748b;">Không có biến nào khớp điều kiện tìm kiếm / bộ lọc hiện tại.</td></tr>`;
    } else {
      tbody.innerHTML = rows.map((r) => `
        <tr>
          <td><strong>${esc(r.bien)}</strong></td>
          <td><span class="badge badge-slate">${esc(r.nhom)}</span></td>
          <td class="num">${fmtInt(r.thieu_tong)}</td>
          <td class="num">${fmtInt(r.sai_dinh_dang)}</td>
          <td class="num">${fmtInt(r.ngoai_mien)}</td>
          <td class="num">${fmtInt(r.trung_2_loi)}</td>
          <td class="num"><strong>${fmtInt(r.tong_luot_loi)}</strong></td>
          <td class="num"><strong>${fmtInt(r.o_loi_duy_nhat)}</strong></td>
          <td class="num">${fmtInt(r.thuoc_dong_loai)}</td>
          <td class="num">${fmtInt(r.duoc_sua_giu_lai)}</td>
          <td><span class="badge ${r.so_o_dien > 0 ? "badge-amber" : "badge-blue"}">${esc(r.gia_tri_dien)}</span> (${fmtInt(r.so_o_dien)})</td>
          <td class="num"><span class="badge badge-emerald">${fmtInt(r.loi_sau)}</span></td>
        </tr>
      `).join("");
    }

    const sum = (k) => rows.reduce((acc, r) => acc + r[k], 0);
    document.getElementById("auditTfoot").innerHTML = `
      <tr>
        <td colspan="2">Tổng (${rows.length} biến đang lọc)</td>
        <td class="num">${fmtInt(sum("thieu_tong"))}</td>
        <td class="num">${fmtInt(sum("sai_dinh_dang"))}</td>
        <td class="num">${fmtInt(sum("ngoai_mien"))}</td>
        <td class="num">${fmtInt(sum("trung_2_loi"))}</td>
        <td class="num">${fmtInt(sum("tong_luot_loi"))}</td>
        <td class="num">${fmtInt(sum("o_loi_duy_nhat"))}</td>
        <td class="num">${fmtInt(sum("thuoc_dong_loai"))}</td>
        <td class="num">${fmtInt(sum("duoc_sua_giu_lai"))}</td>
        <td>${fmtInt(sum("so_o_dien"))} ô điền</td>
        <td class="num">${fmtInt(sum("loi_sau"))}</td>
      </tr>
    `;
  }

  function downloadFilteredAuditCSV() {
    const rows = getFilteredAuditRows();
    const headers = [
      "Biến", "Nhóm biến", "Thiếu (gồm mã ẩn)", "Sai định dạng", "Ngoài miền",
      "Ô trùng 2 lỗi", "Tổng lượt lỗi (trước)", "Ô lỗi duy nhất (trước)",
      "Ô lỗi thuộc dòng bị loại", "Ô được sửa trên dòng giữ lại",
      "Giá trị điền trên PJ21", "Số ô điền trên PJ21", "Lỗi sau xử lý"
    ];
    const csvEscape = (v) => {
      const s = String(v);
      return (s.includes(",") || s.includes('"') || s.includes("\n")) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [headers.map(csvEscape).join(",")];
    rows.forEach((r) => {
      lines.push([
        r.bien, r.nhom, r.thieu_tong, r.sai_dinh_dang, r.ngoai_mien,
        r.trung_2_loi, r.tong_luot_loi, r.o_loi_duy_nhat,
        r.thuoc_dong_loai, r.duoc_sua_giu_lai,
        r.gia_tri_dien, r.so_o_dien, r.loi_sau
      ].map(csvEscape).join(","));
    });
    const blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kiem_toan_24_bien_loc_${rows.length}bien.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ── Render Section 4: VÍ DỤ THỰC TẾ ──
  function initExamplesSection() {
    const sel = document.getElementById("exampleVarSelect");
    const vars = DATA.audit_24.map((r) => r.bien);
    sel.innerHTML = vars.map((v) => `<option value="${esc(v)}">${esc(v)}</option>`).join("");
    sel.value = state.exampleVar;

    const quickVars = ["Class", "Gender", "Customer Type", "Age", "Flight Distance", "Departure Delay", "Online Boarding", "Satisfaction", "ID"];
    document.getElementById("exampleQuickChips").innerHTML = quickVars.map((v) => `
      <button type="button" class="chip ${v === state.exampleVar ? "active" : ""}" data-quick-var="${esc(v)}">${esc(v)}</button>
    `).join("");

    document.querySelectorAll("[data-quick-var]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.exampleVar = btn.dataset.quickVar;
        state.exampleAction = "all";
        sel.value = state.exampleVar;
        document.getElementById("exampleActionSelect").value = "all";
        document.querySelectorAll("[data-quick-var]").forEach((b) => b.classList.toggle("active", b.dataset.quickVar === state.exampleVar));
        renderExamplesTable();
      });
    });

    sel.addEventListener("change", () => {
      state.exampleVar = sel.value;
      document.querySelectorAll("[data-quick-var]").forEach((b) => b.classList.toggle("active", b.dataset.quickVar === state.exampleVar));
      renderExamplesTable();
    });

    document.getElementById("exampleActionSelect").addEventListener("change", (e) => {
      state.exampleAction = e.target.value;
      renderExamplesTable();
    });

    renderExamplesTable();
  }

  function renderExamplesTable() {
    const info = DATA.real_examples[state.exampleVar];
    const tbody = document.getElementById("examplesTbody");
    const noteEl = document.getElementById("exampleVarNote");

    if (!info) {
      noteEl.textContent = "Không có dữ liệu ví dụ xác minh được cho biến này.";
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:#b91c1c;">Không tìm thấy ví dụ xác minh được cho biến đã chọn.</td></tr>`;
      return;
    }

    noteEl.textContent = info.note;
    const filtered = info.examples.filter((ex) => {
      if (state.exampleAction === "all") return true;
      return ex.action === state.exampleAction;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:22px;color:#92400e;background:#fffbeb;">Biến <strong>${esc(state.exampleVar)}</strong> không phát sinh bản ghi thực tế thuộc nhóm xử lý <strong>"${esc(state.exampleAction)}"</strong> (hãy chọn "Tất cả cách xử lý" để xem các ví dụ hiện có).</td></tr>`;
      return;
    }

    const badgeClass = (act) => {
      if (act === "Chuẩn hóa") return "badge-blue";
      if (act === "Điền khuyết") return "badge-amber";
      if (act === "Gán nhãn Unknown") return "badge-slate";
      return "badge-crimson";
    };

    tbody.innerHTML = filtered.map((ex) => `
      <tr>
        <td class="num"><strong>#${fmtInt(ex.id)}</strong></td>
        <td><span class="mono-val">${esc(ex.before)}</span></td>
        <td><span class="mono-val" style="background:#ecfdf5;color:#065f46;font-weight:700;">${esc(ex.after)}</span></td>
        <td><span class="badge ${badgeClass(ex.action)}">${esc(ex.action)}</span></td>
        <td style="color:#334155;">${esc(ex.detail)}</td>
      </tr>
    `).join("");
  }

  // ── Render Section 5: KHÁM PHÁ DỮ LIỆU (EDA) ──
  function renderEDA() {
    document.querySelectorAll(".subtab").forEach((el) => {
      el.classList.toggle("active", el.dataset.edaTab === state.edaTab);
    });
    document.querySelectorAll(".eda-pane").forEach((el) => {
      el.style.display = el.dataset.edaPane === state.edaTab ? "block" : "none";
    });

    if (state.edaTab === "segments") renderEDASegments();
    if (state.edaTab === "delays") renderEDADelays();
    if (state.edaTab === "spearman") renderEDASpearman();
  }

  function renderEDASegments() {
    const seg = DATA.eda.segments[state.segVar];
    const modeData = state.segMode === "full" ? seg.full : seg.observed;
    const st = state.segMode === "full" ? seg.stats_full : seg.stats_obs;
    const note = state.segMode === "full" ? seg.note_full : seg.note_obs;

    document.getElementById("segChartTitle").textContent =
      `Tỷ lệ hài lòng theo ${state.segVar} — ${state.segMode === "full" ? "Toàn tập PJ21.csv" : "Chỉ ô quan sát hợp lệ"} (n = ${fmtInt(modeData.n)} dòng)`;

    const yatesNote = st.chi2_yates ? ` | Yates χ² = ${fmtDec(st.chi2_yates, 1)} (V = ${fmtDec(st.v_yates, 4)})` : "";
    document.getElementById("segStatsStrip").innerHTML = `
      <div class="stat-pill">Cỡ mẫu: <strong>n = ${fmtInt(st.n)} dòng</strong></div>
      <div class="stat-pill">Pearson χ²: <strong>${fmtDec(st.chi2, 1)}</strong> (df = ${st.df})</div>
      <div class="stat-pill">Cramér’s V: <strong>${fmtDec(st.v, 4)}</strong>${yatesNote}</div>
      <div class="stat-pill">Mức ý nghĩa: <strong>${state.segVar === "Gender" ? "p < 0,001 (hiệu ứng không đáng kể)" : "p < 10⁻³⁰⁰"}</strong></div>
    `;

    const items = modeData.items;
    const W = 820, H = 290, padL = 65, padR = 30, padT = 36, padB = 56;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;
    const maxY = 80;
    const barW = Math.min(110, (plotW / items.length) * 0.52);

    const barsSvg = items.map((it, i) => {
      const cx = padL + (plotW / items.length) * (i + 0.5);
      const bh = (it.rate / maxY) * plotH;
      const y = padT + plotH - bh;
      const fill = it.is_unknown ? "#64748b" : "#0284c7";
      return `
        <rect x="${cx - barW / 2}" y="${y}" width="${barW}" height="${bh}" rx="7" fill="${fill}"/>
        <text x="${cx}" y="${y - 22}" text-anchor="middle" font-size="14" font-weight="800" fill="#0f172a">${fmtDec(it.rate)}%</text>
        <text x="${cx}" y="${y - 6}" text-anchor="middle" font-size="11.5" font-weight="600" fill="#475569">n = ${fmtInt(it.n)} (${fmtInt(it.satisfied)} HL)</text>
        <text x="${cx}" y="${padT + plotH + 22}" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">${esc(it.label)}</text>
      `;
    }).join("");

    document.getElementById("segChartBox").innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-height:310px;">
        <line x1="${padL}" y1="${padT + plotH}" x2="${W - padR}" y2="${padT + plotH}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#94a3b8" stroke-width="1.5"/>
        ${[0, 20, 40, 60, 80].map((v) => {
          const y = padT + plotH - (v / maxY) * plotH;
          return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
                  <text x="${padL - 10}" y="${y + 4}" text-anchor="end" font-size="11.5" fill="#64748b">${v}%</text>`;
        }).join("")}
        <text x="18" y="${padT + plotH / 2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 18 ${padT + plotH / 2})">Tỷ lệ hài lòng (%)</text>
        ${barsSvg}
      </svg>
    `;
    document.getElementById("segNoteBox").textContent = note;
  }

  function renderEDADelays() {
    const d = DATA.eda.delays[state.delayVar];
    const isFull = state.delayMode === "full";
    const mw = isFull ? d.mw_full : d.mw_obs;
    const totalN = isFull ? d.full_n : d.obs_n;

    document.getElementById("delayChartTitle").textContent =
      `${d.title} — ${isFull ? "Toàn tập PJ21.csv" : "Chỉ ô quan sát hợp lệ"} (n = ${fmtInt(totalN)} dòng)`;

    document.getElementById("delayStatsStrip").innerHTML = `
      <div class="stat-pill">Cỡ mẫu: <strong>n = ${fmtInt(totalN)} dòng</strong></div>
      <div class="stat-pill">Ô khuyết điền 0: <strong>${fmtInt(d.imputed_n)} ô</strong> (tỷ lệ HL riêng: <strong>${fmtDec(d.imputed_rate)}%</strong>)</div>
      <div class="stat-pill">Mann–Whitney U: <strong>${fmtU(mw.u)}</strong> (p = ${mw.p_str})</div>
      <div class="stat-pill">Hệ số r<sub>rb</sub>: <strong>${fmtDec(mw.rb, 4)}</strong> (cỡ hiệu ứng nhỏ)</div>
    `;

    const bins = d.bins.map((b) => ({
      label: b.label,
      n: isFull ? b.full_n : b.obs_n,
      sat: isFull ? b.full_sat : b.obs_sat,
      rate: isFull ? b.full_rate : b.obs_rate,
      color: b.label === "0 phút" ? (isFull ? "#0369a1" : "#d97706") : "#0284c7",
    }));

    // Add isolated imputed-0 reference bar on the right separated by dashed line
    const allBars = [
      ...bins,
      { label: "Ô khuyết điền 0", n: d.imputed_n, sat: Math.round(d.imputed_n * d.imputed_rate / 100), rate: d.imputed_rate, color: "#64748b" },
    ];

    const W = 860, H = 290, padL = 65, padR = 30, padT = 36, padB = 56;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;
    const maxY = 60;
    const barW = 92;

    const barsSvg = allBars.map((b, i) => {
      const cx = padL + (plotW / allBars.length) * (i + 0.5);
      const bh = (b.rate / maxY) * plotH;
      const y = padT + plotH - bh;
      const sep = i === 4 ? `<line x1="${cx - plotW / allBars.length / 2}" y1="${padT}" x2="${cx - plotW / allBars.length / 2}" y2="${padT + plotH}" stroke="#94a3b8" stroke-dasharray="5,4" stroke-width="1.4"/>` : "";
      return `
        ${sep}
        <rect x="${cx - barW / 2}" y="${y}" width="${barW}" height="${bh}" rx="7" fill="${b.color}"/>
        <text x="${cx}" y="${y - 22}" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a">${fmtDec(b.rate)}%</text>
        <text x="${cx}" y="${y - 6}" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">n = ${fmtInt(b.n)}</text>
        <text x="${cx}" y="${padT + plotH + 22}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f172a">${esc(b.label)}</text>
      `;
    }).join("");

    document.getElementById("delayChartBox").innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-height:310px;">
        <line x1="${padL}" y1="${padT + plotH}" x2="${W - padR}" y2="${padT + plotH}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#94a3b8" stroke-width="1.5"/>
        ${[0, 15, 30, 45, 60].map((v) => {
          const y = padT + plotH - (v / maxY) * plotH;
          return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
                  <text x="${padL - 10}" y="${y + 4}" text-anchor="end" font-size="11.5" fill="#64748b">${v}%</text>`;
        }).join("")}
        <text x="18" y="${padT + plotH / 2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 18 ${padT + plotH / 2})">Tỷ lệ hài lòng (%)</text>
        ${barsSvg}
      </svg>
    `;

    const drop0To60 = bins[0].rate - bins[3].rate;
    document.getElementById("delayNoteBox").textContent =
      `Từ nhóm "0 phút" (${fmtDec(bins[0].rate)}%) đến "Trên 60 phút" (${fmtDec(bins[3].rate)}%), tỷ lệ hài lòng giảm ${fmtDec(drop0To60)} điểm phần trăm. Toàn bộ ${fmtInt(d.imputed_n)} ô khuyết điền 0 chỉ rơi vào nhóm "0 phút" (3 nhóm trễ > 0 phút không đổi giữa hai chế độ). Cỡ hiệu ứng đơn biến nhỏ (|r_rb| = ${fmtDec(Math.abs(mw.rb), 4)}), không suy diễn nhân quả đơn biến.`;
  }

  function renderEDASpearman() {
    const mode = state.spearmanMode;
    const modeMeta = {
      keep0: { title: "Giữ mã 0 trên PJ21.csv (n = 119.092 dòng)", rhoKey: "keep0_rho", rankKey: "keep0_rank", nKey: "keep0_n", note: "Top 5 dẫn đầu gồm Online Boarding (#1: ρ = 0,4636), In-flight Entertainment (#2: 0,3770), Seat Comfort (#3: 0,3364), On-board Service (#4: 0,3147) và Leg Room Service (#5: 0,3046). In-flight Wifi Service đứng #6 (0,2689)." },
      drop0: { title: "Loại mã 0 trên PJ21.csv (n biến thiên theo từng tiêu chí)", rhoKey: "drop0_rho", rankKey: "drop0_rank", nKey: "drop0_n", note: "Khi loại điểm 0, In-flight Wifi Service tăng mạnh từ #6 lên #3 (ρ = 0,3383; n = 116.157), đẩy Seat Comfort xuống #4, On-board Service xuống #5 và Leg Room Service xuống #6 (0,3059). Chỉ có #1, #2, #10, #13 và #14 giữ nguyên thứ hạng." },
      obs: { title: "Chỉ ô quan sát hợp lệ trước điền khuyết (n biến thiên theo từng biến)", rhoKey: "obs_rho", rankKey: "obs_rank", nKey: "obs_n", note: "Trên các ô quan sát hợp lệ trước điền trung vị, Online Boarding đạt ρ = 0,5513 (#1), In-flight Entertainment đạt 0,4002 (#2). Cleanliness đứng #6 (ρ = 0,3071; n = 80.651) nhưng tụt xuống #8 trên PJ21.csv do có 32,28% ô điền trung vị." },
    }[mode];

    document.getElementById("spearmanChartTitle").textContent = `Tương quan hạng Spearman (ρ) giữa 14 tiêu chí dịch vụ và Satisfaction — ${modeMeta.title}`;

    const sorted = [...DATA.eda.spearman].sort((a, b) => a[modeMeta.rankKey] - b[modeMeta.rankKey]);
    const W = 880, rowH = 26, padL = 270, padR = 135, padT = 18, padB = 26;
    const H = padT + padB + sorted.length * rowH;
    const minVal = -0.10, maxVal = 0.62;
    const scaleX = (v) => padL + ((v - minVal) / (maxVal - minVal)) * (W - padL - padR);
    const x0 = scaleX(0);

    const rowsSvg = sorted.map((it, idx) => {
      const val = it[modeMeta.rhoKey];
      const rk = it[modeMeta.rankKey];
      const nv = it[modeMeta.nKey];
      const y = padT + idx * rowH;
      const xStart = val >= 0 ? x0 : scaleX(val);
      const bw = Math.abs(scaleX(val) - x0);
      const fill = val < 0 ? "#dc2626" : (rk <= 3 ? "#0369a1" : "#0284c7");
      const txtX = val >= 0 ? xStart + bw + 6 : x0 + 6;
      return `
        <text x="${padL - 10}" y="${y + 17}" text-anchor="end" font-size="11.8" font-weight="${rk <= 5 ? "700" : "500"}" fill="#0f172a">#${rk} · ${esc(it.variable)}</text>
        <rect x="${xStart}" y="${y + 4}" width="${Math.max(2, bw)}" height="17" rx="4" fill="${fill}"/>
        <text x="${txtX}" y="${y + 16.5}" font-size="11.5" font-weight="700" fill="#0f172a">${val >= 0 ? "+" : ""}${fmtDec(val, 4)} (n=${fmtInt(nv)})</text>
      `;
    }).join("");

    document.getElementById("spearmanChartBox").innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-height:410px;">
        ${[-0.05, 0, 0.15, 0.30, 0.45, 0.60].map((v) => {
          const x = scaleX(v);
          return `<line x1="${x}" y1="${padT}" x2="${x}" y2="${H - padB}" stroke="${v === 0 ? "#475569" : "#e2e8f0"}" stroke-width="${v === 0 ? 1.5 : 1}" stroke-dasharray="${v === 0 ? "" : "3,3"}"/>
                  <text x="${x}" y="${H - 8}" text-anchor="middle" font-size="11" fill="#64748b">${fmtDec(v, 2)}</text>`;
        }).join("")}
        ${rowsSvg}
      </svg>
    `;
    document.getElementById("spearmanNoteBox").textContent =
      modeMeta.note + " Lưu ý: Hệ số Spearman chỉ đo chiều hướng và độ mạnh của mối liên hệ đơn điệu hai biến trên mẫu hiện có, không kết luận quan hệ nhân quả.";
  }

  // ── Render Section 6: NGUỒN VÀ KIỂM CHỨNG ──
  function renderProvenance() {
    document.getElementById("reconcileGrid").innerHTML = DATA.provenance.reconciliation_checks.map((r) => `
      <div class="reconcile-card">
        <div style="font-weight:700;color:#0f172a;">${esc(r.check)}</div>
        <div class="r-formula">${esc(r.formula)}</div>
        <span class="badge badge-emerald">✓ ${esc(r.status)}</span>
      </div>
    `).join("");

    document.getElementById("traceTbody").innerHTML = DATA.provenance.trace_matrix.map((t) => `
      <tr>
        <td><strong>${esc(t.item)}</strong></td>
        <td class="mono-val">${esc(t.source)}</td>
        <td>${esc(t.rule)}</td>
        <td><span class="badge badge-emerald">${esc(t.scope)}</span></td>
      </tr>
    `).join("");

    document.getElementById("shaTbody").innerHTML = DATA.provenance.source_hashes.map((h) => `
      <tr>
        <td><strong>${esc(h.file)}</strong></td>
        <td>${esc(h.role)}</td>
        <td class="num">${fmtInt(h.size_bytes)} B</td>
        <td class="sha-text">${esc(h.sha256)}</td>
      </tr>
    `).join("");

    document.getElementById("unverifiedList").innerHTML = DATA.provenance.unverified_and_limits.map((u) => `
      <li style="margin-bottom:6px;">${esc(u)}</li>
    `).join("");
  }

  // ── Bind all events ──
  function bindEvents() {
    document.querySelectorAll(".nav-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        stopAutoPlayIfRunning();
        goToSection(Number(btn.dataset.section));
      });
    });

    document.getElementById("btnPrev").addEventListener("click", () => {
      stopAutoPlayIfRunning();
      goToSection(state.section - 1);
    });
    document.getElementById("btnNext").addEventListener("click", () => {
      stopAutoPlayIfRunning();
      goToSection(state.section + 1);
    });
    document.getElementById("btnAutoPlay").addEventListener("click", toggleAutoPlay);
    document.getElementById("btnPresent").addEventListener("click", togglePresentationMode);
    document.getElementById("btnFullscreen").addEventListener("click", toggleFullscreen);

    // Source modal buttons
    document.querySelectorAll("[data-open-source]").forEach((btn) => {
      btn.addEventListener("click", () => openSourceModal(Number(btn.dataset.openSource)));
    });
    document.getElementById("modalCloseBtn").addEventListener("click", closeSourceModal);
    document.getElementById("sourceModal").addEventListener("click", (e) => {
      if (e.target.id === "sourceModal") closeSourceModal();
    });

    // Section 2 controls
    document.getElementById("btnDemoSteps").addEventListener("click", toggleDemoSteps);
    document.getElementById("btnExpandAll").addEventListener("click", () => {
      document.querySelectorAll(".step-card").forEach((c) => c.classList.add("open"));
    });
    document.getElementById("btnCollapseAll").addEventListener("click", () => {
      document.querySelectorAll(".step-card").forEach((c) => c.classList.remove("open"));
    });

    // Section 3 controls
    document.getElementById("auditSearchInput").addEventListener("input", (e) => {
      state.auditSearch = e.target.value;
      renderAuditTable();
    });
    document.getElementById("auditFilterSelect").addEventListener("change", (e) => {
      state.auditFilter = e.target.value;
      renderAuditTable();
    });
    document.getElementById("btnDownloadCSV").addEventListener("click", downloadFilteredAuditCSV);

    // Section 5 EDA controls
    document.querySelectorAll(".subtab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.edaTab = btn.dataset.edaTab;
        renderEDA();
      });
    });

    document.getElementById("segVarSelect").addEventListener("change", (e) => {
      state.segVar = e.target.value;
      renderEDASegments();
    });
    document.querySelectorAll("[data-seg-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.segMode = btn.dataset.segMode;
        document.querySelectorAll("[data-seg-mode]").forEach((b) => b.classList.toggle("active", b.dataset.segMode === state.segMode));
        renderEDASegments();
      });
    });

    document.getElementById("delayVarSelect").addEventListener("change", (e) => {
      state.delayVar = e.target.value;
      renderEDADelays();
    });
    document.querySelectorAll("[data-delay-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.delayMode = btn.dataset.delayMode;
        document.querySelectorAll("[data-delay-mode]").forEach((b) => b.classList.toggle("active", b.dataset.delayMode === state.delayMode));
        renderEDADelays();
      });
    });

    document.querySelectorAll("[data-spearman-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.spearmanMode = btn.dataset.spearmanMode;
        document.querySelectorAll("[data-spearman-mode]").forEach((b) => b.classList.toggle("active", b.dataset.spearmanMode === state.spearmanMode));
        renderEDASpearman();
      });
    });
  }

  // ── Init ──
  renderOverview();
  renderPipeline();
  renderAuditTable();
  initExamplesSection();
  renderEDA();
  renderProvenance();
  bindEvents();
  goToSection(1);
})();
