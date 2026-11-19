/**
 * ============================================================================
 * PRJ 21 — CHƯƠNG 3: LOGIC DASHBOARD THUYẾT TRÌNH TƯƠNG TÁC (app.js)
 * Sử dụng 100% dữ liệu thực từ window.PRJ21_DATA (được trích xuất từ
 * Data/raw/Du lieu khong sach.csv, Data/processed/PJ21.csv và outputs/chuong3/)
 * Hoạt động 100% ngoại tuyến (Offline-first, không phụ thuộc CDN ngoài)
 * ============================================================================
 */

(function () {
  "use strict";

  const DATA = window.PRJ21_DATA;
  if (!DATA) {
    console.error("Không tìm thấy dữ liệu window.PRJ21_DATA từ data.js");
    return;
  }

  // ── 1. HÀM ĐỊNH DẠNG SỐ HỌC THUẬT TIẾNG VIỆT ─────────────────────────────
  function fmtInt(n) {
    if (n === null || n === undefined || isNaN(n)) return "—";
    return Math.round(Number(n))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function fmtDec(val, digits = 2) {
    if (val === null || val === undefined || isNaN(val)) return "—";
    return Number(val).toFixed(digits).replace(".", ",");
  }

  function fmtPct(val, digits = 2) {
    if (val === null || val === undefined || isNaN(val)) return "—";
    return Number(val).toFixed(digits).replace(".", ",") + "%";
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatRawDisplay(val) {
    if (val === "") return '<span class="badge badge-red">(ô trống "")</span>';
    const hasLeadOrTrail = val !== val.trim();
    if (hasLeadOrTrail) {
      const visual = val.replace(/ /g, "␣");
      return `<code>'${escapeHtml(visual)}'</code> <span class="badge badge-amber" style="font-size:0.68rem;">dư khoảng trắng</span>`;
    }
    return `<code>'${escapeHtml(val)}'</code>`;
  }

  // ── 2. TOOLTIP NỔI TOÀN CỤC ──────────────────────────────────────────────
  const tooltipEl = document.getElementById("floatingTooltip");

  function showTooltip(evt, htmlContent) {
    if (!tooltipEl) return;
    tooltipEl.innerHTML = htmlContent;
    tooltipEl.style.display = "block";
    moveTooltip(evt);
  }

  function moveTooltip(evt) {
    if (!tooltipEl || tooltipEl.style.display === "none") return;
    const pad = 14;
    let x = evt.clientX + pad;
    let y = evt.clientY + pad;
    const rect = tooltipEl.getBoundingClientRect();
    if (x + rect.width > window.innerWidth - 12) {
      x = evt.clientX - rect.width - pad;
    }
    if (y + rect.height > window.innerHeight - 12) {
      y = evt.clientY - rect.height - pad;
    }
    tooltipEl.style.left = Math.max(8, x) + "px";
    tooltipEl.style.top = Math.max(8, y) + "px";
  }

  function hideTooltip() {
    if (tooltipEl) tooltipEl.style.display = "none";
  }

  // ── 3. TRÌNH ĐIỀU KHIỂN THUYẾT TRÌNH (SLIDE / AUTOPLAY / FULLSCREEN) ────
  const TOTAL_SECTIONS = 6;
  let currentStep = 1;
  let isSlideMode = true;
  let autoplayTimer = null;
  let autoplayTickTimer = null;
  let autoplayStartMs = 0;
  let fontScaleIdx = 0; // 0: 100%, 1: 112%, 2: 124%

  const btnPrevSlide = document.getElementById("btnPrevSlide");
  const btnNextSlide = document.getElementById("btnNextSlide");
  const slideCounterPill = document.getElementById("slideCounterPill");
  const deckProgressFill = document.getElementById("deckProgressFill");
  const autoplayProgressBar = document.getElementById("autoplayProgressBar");
  const btnAutoplayToggle = document.getElementById("btnAutoplayToggle");
  const selectAutoplaySec = document.getElementById("selectAutoplaySec");
  const btnModeToggle = document.getElementById("btnModeToggle");
  const btnFontScale = document.getElementById("btnFontScale");
  const btnThemeToggle = document.getElementById("btnThemeToggle");
  const btnFullscreen = document.getElementById("btnFullscreen");
  const stepTabs = Array.from(document.querySelectorAll(".step-tab"));
  const sections = Array.from(document.querySelectorAll(".deck-section"));

  function goToSection(stepNum, fromUser = true) {
    const target = Math.max(1, Math.min(TOTAL_SECTIONS, Number(stepNum)));
    currentStep = target;

    stepTabs.forEach((tab) => {
      const s = Number(tab.getAttribute("data-step"));
      tab.classList.toggle("active", s === currentStep);
    });

    sections.forEach((sec) => {
      const s = Number(sec.getAttribute("data-section"));
      sec.classList.toggle("active-slide", s === currentStep);
    });

    if (slideCounterPill) {
      slideCounterPill.textContent = `Phần ${currentStep} / ${TOTAL_SECTIONS}`;
    }
    if (deckProgressFill) {
      deckProgressFill.style.width = `${(currentStep / TOTAL_SECTIONS) * 100}%`;
    }
    if (btnPrevSlide) btnPrevSlide.disabled = currentStep <= 1;
    if (btnNextSlide) btnNextSlide.disabled = currentStep >= TOTAL_SECTIONS;

    if (isSlideMode) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (fromUser) {
      const el = document.getElementById(`sec-${currentStep}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (autoplayTimer && fromUser) {
      resetAutoplayCycle();
    }
  }

  function startAutoplay() {
    stopAutoplay();
    const durationMs = Number(selectAutoplaySec?.value || 18) * 1000;
    autoplayStartMs = Date.now();
    btnAutoplayToggle.classList.add("autoplay-active");
    btnAutoplayToggle.innerHTML = "⏸ Tạm dừng";

    autoplayTickTimer = setInterval(() => {
      const elapsed = Date.now() - autoplayStartMs;
      const pct = Math.min(100, (elapsed / durationMs) * 100);
      if (autoplayProgressBar) autoplayProgressBar.style.width = `${pct}%`;
    }, 80);

    autoplayTimer = setInterval(() => {
      const next = currentStep < TOTAL_SECTIONS ? currentStep + 1 : 1;
      goToSection(next, false);
      autoplayStartMs = Date.now();
    }, durationMs);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    if (autoplayTickTimer) clearInterval(autoplayTickTimer);
    autoplayTimer = null;
    autoplayTickTimer = null;
    if (autoplayProgressBar) autoplayProgressBar.style.width = "0%";
    if (btnAutoplayToggle) {
      btnAutoplayToggle.classList.remove("autoplay-active");
      btnAutoplayToggle.innerHTML = "▶ Tự chạy";
    }
  }

  function resetAutoplayCycle() {
    if (autoplayTimer) {
      startAutoplay();
    }
  }

  function togglePresentationMode() {
    isSlideMode = !isSlideMode;
    document.body.classList.toggle("mode-slide", isSlideMode);
    document.body.classList.toggle("mode-scroll", !isSlideMode);
    if (btnModeToggle) {
      btnModeToggle.classList.toggle("active", isSlideMode);
      btnModeToggle.innerHTML = isSlideMode
        ? "🖥 Chế độ: Từng phần"
        : "📜 Chế độ: Cuộn toàn trang";
    }
    goToSection(currentStep, true);
  }

  function cycleFontScale() {
    fontScaleIdx = (fontScaleIdx + 1) % 3;
    document.body.classList.remove("scale-lg", "scale-xl");
    const labels = ["100%", "112%", "124%"];
    if (fontScaleIdx === 1) document.body.classList.add("scale-lg");
    if (fontScaleIdx === 2) document.body.classList.add("scale-xl");
    if (btnFontScale) {
      btnFontScale.innerHTML = `A+ Cỡ chữ: ${labels[fontScaleIdx]}`;
      btnFontScale.classList.toggle("active", fontScaleIdx > 0);
    }
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle("theme-dark");
    if (btnThemeToggle) {
      btnThemeToggle.innerHTML = isDark ? "☀ Nền sáng" : "🌙 Nền tối";
      btnThemeToggle.classList.toggle("active", isDark);
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  document.addEventListener("fullscreenchange", () => {
    if (btnFullscreen) {
      const isFs = Boolean(document.fullscreenElement);
      btnFullscreen.classList.toggle("active", isFs);
      btnFullscreen.innerHTML = isFs ? "🗗 Thoát toàn màn hình" : "⛶ Toàn màn hình";
    }
  });

  // Gắn sự kiện nút thanh thuyết trình
  btnPrevSlide?.addEventListener("click", () => goToSection(currentStep - 1, true));
  btnNextSlide?.addEventListener("click", () => goToSection(currentStep + 1, true));
  btnAutoplayToggle?.addEventListener("click", () => {
    if (autoplayTimer) stopAutoplay();
    else startAutoplay();
  });
  selectAutoplaySec?.addEventListener("change", () => {
    if (autoplayTimer) startAutoplay();
  });
  btnModeToggle?.addEventListener("click", togglePresentationMode);
  btnFontScale?.addEventListener("click", cycleFontScale);
  btnThemeToggle?.addEventListener("click", toggleTheme);
  btnFullscreen?.addEventListener("click", toggleFullscreen);

  stepTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      goToSection(Number(tab.getAttribute("data-step")), true);
    });
  });

  // Phím tắt bàn phím cho thuyết trình
  document.addEventListener("keydown", (e) => {
    const tag = (e.target?.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea") return;

    if (e.key === "ArrowRight" || e.key === "PageDown") {
      e.preventDefault();
      if (currentStep < TOTAL_SECTIONS) goToSection(currentStep + 1, true);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      if (currentStep > 1) goToSection(currentStep - 1, true);
    } else if (e.key >= "1" && e.key <= "6" && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      goToSection(Number(e.key), true);
    } else if (e.key === " " && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      if (autoplayTimer) stopAutoplay();
      else startAutoplay();
    } else if (e.key.toLowerCase() === "f" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key.toLowerCase() === "t" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      toggleTheme();
    } else if (e.key.toLowerCase() === "m" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      togglePresentationMode();
    }
  });

  // ── 4. PHẦN 1: BIỂU ĐỒ CƠ CẤU NHÃN & BỘ NHỚ RAM ──────────────────────────
  function renderChartLabelStructure() {
    const container = document.getElementById("chartLabelStructure");
    if (!container) return;

    const kq = DATA.ket_qua;
    const rawRows = kq.rows_raw; // 129880
    const cleanRows = kq.rows_clean; // 119092
    const droppedRows = kq.rows_dropped_missing_target; // 10788
    const keptPct = (cleanRows / rawRows) * 100; // 91.6939
    const dropPct = (droppedRows / rawRows) * 100; // 8.3061

    const satCount = kq.satisfied_count; // 51740
    const disCount = kq.dissatisfied_count; // 67352
    const satPct = kq.rate_satisfied_pct; // 43.4454
    const disPct = kq.rate_dissatisfied_pct; // 56.5546

    const svg = `
      <svg viewBox="0 0 680 285" role="img" aria-label="Biểu đồ sàng lọc nhãn và cơ cấu hai lớp Satisfaction">
        <!-- Khung Trái: Sàng lọc từ 129.880 dòng -->
        <text x="165" y="22" text-anchor="middle" font-size="12.5" font-weight="700" fill="currentColor">
          1. Sàng lọc nhãn từ dữ liệu bẩn (n = 129.880)
        </text>
        <line x1="45" y1="225" x2="295" y2="225" stroke="#94a3b8" stroke-width="1.2" />
        <line x1="45" y1="45" x2="45" y2="225" stroke="#94a3b8" stroke-width="1.2" />
        <text x="15" y="135" text-anchor="middle" font-size="10.5" fill="#64748b" transform="rotate(-90 15 135)">Tỷ lệ dòng (%)</text>

        <!-- Cột Giữ lại 91,69% -->
        <rect x="75" y="${225 - keptPct * 1.55}" width="72" height="${keptPct * 1.55}" rx="5" fill="#1a5fb4" />
        <text x="111" y="${225 - keptPct * 1.55 - 18}" text-anchor="middle" font-size="11.5" font-weight="800" fill="currentColor">${fmtInt(cleanRows)}</text>
        <text x="111" y="${225 - keptPct * 1.55 - 5}" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0284c7">(${fmtPct(keptPct)})</text>
        <text x="111" y="244" text-anchor="middle" font-size="10.5" font-weight="700" fill="currentColor">Có nhãn hợp lệ</text>
        <text x="111" y="258" text-anchor="middle" font-size="9.5" fill="#64748b">(Giữ lại PJ21)</text>

        <!-- Cột Loại bỏ 8,31% -->
        <rect x="188" y="${225 - dropPct * 1.55}" width="72" height="${dropPct * 1.55}" rx="5" fill="#dc2626" />
        <text x="224" y="${225 - dropPct * 1.55 - 18}" text-anchor="middle" font-size="11.5" font-weight="800" fill="currentColor">${fmtInt(droppedRows)}</text>
        <text x="224" y="${225 - dropPct * 1.55 - 5}" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">(${fmtPct(dropPct)})</text>
        <text x="224" y="244" text-anchor="middle" font-size="10.5" font-weight="700" fill="currentColor">Thiếu nhãn</text>
        <text x="224" y="258" text-anchor="middle" font-size="9.5" fill="#64748b">(Loại bỏ)</text>

        <!-- Vạch ngăn cách -->
        <line x1="335" y1="20" x2="335" y2="265" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.2" />

        <!-- Khung Phải: Cơ cấu trên PJ21.csv (119.092 dòng) -->
        <text x="510" y="22" text-anchor="middle" font-size="12.5" font-weight="700" fill="currentColor">
          2. Cơ cấu nhãn trên PJ21.csv (n = 119.092)
        </text>
        <line x1="385" y1="225" x2="645" y2="225" stroke="#94a3b8" stroke-width="1.2" />
        <line x1="385" y1="45" x2="385" y2="225" stroke="#94a3b8" stroke-width="1.2" />
        <text x="358" y="135" text-anchor="middle" font-size="10.5" fill="#64748b" transform="rotate(-90 358 135)">Tỷ lệ trên PJ21 (%)</text>

        <!-- Cột Satisfied 43,45% -->
        <rect x="418" y="${225 - satPct * 2.1}" width="76" height="${satPct * 2.1}" rx="5" fill="#0d9488" />
        <text x="456" y="${225 - satPct * 2.1 - 18}" text-anchor="middle" font-size="11.5" font-weight="800" fill="currentColor">${fmtInt(satCount)}</text>
        <text x="456" y="${225 - satPct * 2.1 - 5}" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0d9488">(${fmtPct(satPct)})</text>
        <text x="456" y="244" text-anchor="middle" font-size="10.5" font-weight="700" fill="currentColor">Satisfied (1)</text>
        <text x="456" y="258" text-anchor="middle" font-size="9.5" fill="#64748b">(Hài lòng)</text>

        <!-- Cột Neutral or Dissatisfied 56,55% -->
        <rect x="536" y="${225 - disPct * 2.1}" width="76" height="${disPct * 2.1}" rx="5" fill="#d97706" />
        <text x="574" y="${225 - disPct * 2.1 - 18}" text-anchor="middle" font-size="11.5" font-weight="800" fill="currentColor">${fmtInt(disCount)}</text>
        <text x="574" y="${225 - disPct * 2.1 - 5}" text-anchor="middle" font-size="10.5" font-weight="700" fill="#d97706">(${fmtPct(disPct)})</text>
        <text x="574" y="244" text-anchor="middle" font-size="10.5" font-weight="700" fill="currentColor">Neutral / Dissatisfied (0)</text>
        <text x="574" y="258" text-anchor="middle" font-size="9.5" fill="#64748b">(Trung lập / Không HL)</text>
      </svg>
    `;
    container.innerHTML = svg;
  }

  function renderChartMemoryUsage() {
    const container = document.getElementById("chartMemoryUsage");
    if (!container) return;

    const kq = DATA.ket_qua;
    const rawMib = kq.memory_raw_bytes / (1024 * 1024); // 151.3627
    const beforeMib = kq.memory_before_bytes / (1024 * 1024); // 51.4713
    const afterMib = kq.memory_after_bytes / (1024 * 1024); // 3.4081
    const maxMib = 165;

    const wRaw = (rawMib / maxMib) * 410;
    const wBef = (beforeMib / maxMib) * 410;
    const wAft = Math.max(14, (afterMib / maxMib) * 410);

    container.innerHTML = `
      <svg viewBox="0 0 680 215" role="img" aria-label="Biểu đồ so sánh dung lượng RAM DataFrame">
        <text x="15" y="22" font-size="12" font-weight="700" fill="currentColor">
          Dung lượng bộ nhớ DataFrame (Đơn vị: MiB = 2²⁰ bytes, đo bằng memory_usage(deep=True))
        </text>

        <!-- Thanh 1: Dữ liệu thô dtype=str -->
        <text x="15" y="58" font-size="11.5" font-weight="700" fill="currentColor">1. Dữ liệu bẩn (dtype=str)</text>
        <text x="15" y="73" font-size="9.8" fill="#64748b">129.880 × 24 cột chuỗi object</text>
        <rect x="200" y="45" width="${wRaw}" height="28" rx="5" fill="#64748b" />
        <text x="${200 + wRaw + 8}" y="64" font-size="11.5" font-weight="800" fill="currentColor">
          ${fmtDec(rawMib, 2)} MiB (${fmtInt(kq.memory_raw_bytes)} bytes)
        </text>

        <!-- Thanh 2: PJ21.csv mặc định -->
        <text x="15" y="116" font-size="11.5" font-weight="700" fill="currentColor">2. PJ21.csv (Nạp mặc định)</text>
        <text x="15" y="131" font-size="9.8" fill="#64748b">5 cột str/object + 19 cột int64</text>
        <rect x="200" y="103" width="${wBef}" height="28" rx="5" fill="#0284c7" />
        <text x="${200 + wBef + 8}" y="122" font-size="11.5" font-weight="800" fill="currentColor">
          ${fmtDec(beforeMib, 2)} MiB (${fmtInt(kq.memory_before_bytes)} bytes)
        </text>

        <!-- Thanh 3: PJ21.csv tối ưu -->
        <text x="15" y="174" font-size="11.5" font-weight="700" fill="currentColor">3. PJ21.csv (Tối ưu kiểu)</text>
        <text x="15" y="189" font-size="9.8" fill="#0d9488">5 category + 15 int8 + 3 int16 + 1 int32</text>
        <rect x="200" y="161" width="${wAft}" height="28" rx="5" fill="#15803d" />
        <text x="${200 + wAft + 8}" y="180" font-size="12" font-weight="800" fill="#15803d">
          ${fmtDec(afterMib, 2)} MiB (${fmtInt(kq.memory_after_bytes)} bytes) — Giảm ${fmtPct(kq.memory_reduction_pct)} so với mặc định!
        </text>
      </svg>
    `;
  }

  // ── 5. PHẦN 2: ACCORDION QUY TRÌNH & TRÌNH DIỄN KẾT QUẢ ĐÃ TÍNH ──────────
  const pipeCards = Array.from(document.querySelectorAll(".pipe-step-card"));
  pipeCards.forEach((card) => {
    const header = card.querySelector(".pipe-step-header");
    header?.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });

  document.getElementById("btnExpandAllSteps")?.addEventListener("click", () => {
    pipeCards.forEach((c) => c.classList.add("open"));
  });
  document.getElementById("btnCollapseAllSteps")?.addEventListener("click", () => {
    pipeCards.forEach((c) => c.classList.remove("open"));
  });

  // Dữ liệu 6 bước trình diễn quy trình (100% khớp số liệu kiểm toán thực tế)
  const SIM_STATES = [
    {
      step: 0,
      name: "0 / 6 (Trạng thái thô)",
      rows: 129880,
      fmt: 419228,
      out: 128076,
      miss: 410614,
      log: "[Sẵn sàng] Dữ liệu thô Data/raw/Du lieu khong sach.csv: 129.880 dòng × 24 cột (3.117.120 ô). Tổng lượt lỗi = 957.918 (920.170 ô lỗi duy nhất).",
    },
    {
      step: 1,
      name: "Bước 1 / 6: Đọc & Nhận diện mã thiếu",
      rows: 129880,
      fmt: 419228,
      out: 128076,
      miss: 410614,
      log: "[Trình diễn Bước 1 - Đã tính] Nhận diện 269.947 ô trống CSV + 140.667 ô chứa 9 mã thiếu ẩn (?, -, null, None, N/A, unknown, chưa rõ) = 410.614 ô thiếu. Khóa ID duy nhất 1–129.880.",
    },
    {
      step: 2,
      name: "Bước 2 / 6: Chuẩn hóa 5 cột phân loại",
      rows: 129880,
      fmt: 231887, // 419228 - 187341 lỗi định dạng ở 5 cột phân loại
      out: 128076,
      miss: 410614,
      log: "[Trình diễn Bước 2 - Đã tính] Chuẩn hóa 187.341 ô sai định dạng ở 5 biến phân loại (Gender: 21.763; Customer Type: 56.288; Type of Travel: 44.719; Class: 26.256; Satisfaction: 38.315).",
    },
    {
      step: 3,
      name: "Bước 3 / 6: Trích số Regex & Lọc BOUNDS",
      rows: 129880,
      fmt: 10484, // Chỉ còn 10.484 lỗi khoảng trắng ở cột ID chờ Bước 5c
      out: 0, // 128.076 giá trị ngoài miền đã chuyển thành NaN
      miss: 538690, // 410.614 thiếu ban đầu + 128.076 ngoài miền chuyển thành NaN
      log: "[Trình diễn Bước 3 - Đã tính] Xử lý 221.403 lượt sai định dạng ở 18 cột số (bỏ đơn vị USD/VND/đ/kg/%, đuôi .0). Chuyển 128.076 giá trị ngoài miền BOUNDS thành NaN (tổng NaN = 538.690).",
    },
    {
      step: 4,
      name: "Bước 4 / 6: Loại 10.788 dòng thiếu nhãn",
      rows: 119092,
      fmt: 9631, // 10.484 - 853 ở cột ID trên dòng bị loại
      out: 0,
      miss: 483994, // Số ô NaN còn lại trên 119.092 dòng giữ lại cần điền khuyết
      log: "[Trình diễn Bước 4 - Đã tính] Loại 10.788 dòng thiếu Satisfaction (chứa 83.037 ô lỗi duy nhất). Còn lại 119.092 dòng hợp lệ với 483.994 ô NaN chờ điền khuyết.",
    },
    {
      step: 5,
      name: "Bước 5 / 6: Điền khuyết & Cắt khoảng trắng ID",
      rows: 119092,
      fmt: 0,
      out: 0,
      miss: 0,
      log: "[Trình diễn Bước 5 - Đã tính] Điền Mode (Gender=Female: 9.517; Class=Business: 9.113), gán Unknown (Customer Type: 40.408; Type of Travel: 45.607), điền Trung vị cho 18 cột số và cắt khoảng trắng 9.631 ô ID.",
    },
    {
      step: 6,
      name: "Bước 6 / 6: Kiểm toán PJ21.csv hoàn tất",
      rows: 119092,
      fmt: 0,
      out: 0,
      miss: 0,
      log: "[Hoàn tất Trình diễn Kết quả Đã tính] Kiểm toán thực tế từng ô trên PJ21.csv (2.858.208 ô): 0 thiếu, 0 sai định dạng, 0 ngoài miền. Khớp 100% assert_frame_equal và SHA-256.",
    },
  ];

  let simCurrentIdx = 0;
  let simInterval = null;

  function updateSimUI(idx) {
    simCurrentIdx = idx;
    const st = SIM_STATES[idx];
    document.getElementById("simStepName").textContent = st.name;
    document.getElementById("simRowCount").textContent = fmtInt(st.rows);
    document.getElementById("simFmtCount").textContent = fmtInt(st.fmt);
    document.getElementById("simOutCount").textContent = fmtInt(st.out);
    document.getElementById("simMissCount").textContent = fmtInt(st.miss);
    document.getElementById("simStatusLog").textContent = st.log;

    pipeCards.forEach((card) => {
      const s = Number(card.getAttribute("data-pipe-step"));
      card.classList.toggle("sim-highlight", s === idx);
      card.classList.toggle("sim-done", s < idx || idx === 6);
      if (s === idx) {
        card.classList.add("open");
      }
    });
  }

  document.getElementById("btnRunPipelineSim")?.addEventListener("click", () => {
    if (simInterval) {
      clearInterval(simInterval);
      simInterval = null;
    }
    updateSimUI(1);
    simInterval = setInterval(() => {
      if (simCurrentIdx < 6) {
        updateSimUI(simCurrentIdx + 1);
      } else {
        clearInterval(simInterval);
        simInterval = null;
      }
    }, 1100);
  });

  document.getElementById("btnStepPipelineSim")?.addEventListener("click", () => {
    if (simInterval) {
      clearInterval(simInterval);
      simInterval = null;
    }
    const next = simCurrentIdx < 6 ? simCurrentIdx + 1 : 1;
    updateSimUI(next);
  });

  document.getElementById("btnResetPipelineSim")?.addEventListener("click", () => {
    if (simInterval) {
      clearInterval(simInterval);
      simInterval = null;
    }
    updateSimUI(0);
  });

  // ── 6. PHẦN 3: BẢNG KIỂM TOÁN 24 BIẾN, LỌC, TÌM KIẾM, CSV & BIỂU ĐỒ ───────
  let auditSearchQuery = "";
  let auditGroupSelected = "all";
  let auditSpecialSelected = "all";
  let auditSortSelected = "default";
  let auditChartMode = "disposition";

  function getFilteredAuditRows() {
    let rows = DATA.audit_24.slice();

    if (auditSearchQuery.trim() !== "") {
      const q = auditSearchQuery.trim().toLowerCase();
      rows = rows.filter(
        (r) =>
          r.bien.toLowerCase().includes(q) ||
          r.nhom.toLowerCase().includes(q) ||
          r.gia_tri_dien_khuyet.toLowerCase().includes(q)
      );
    }

    if (auditGroupSelected !== "all") {
      const allowed = auditGroupSelected.split(",");
      rows = rows.filter((r) => allowed.includes(r.nhom));
    }

    if (auditSpecialSelected === "has_overlap") {
      rows = rows.filter((r) => r.o_trung_2_loi_raw > 0);
    } else if (auditSpecialSelected === "high_impute") {
      rows = rows.filter((r) => r.ty_le_dien_khuyet_tren_pj21_pct >= 20);
    } else if (auditSpecialSelected === "med_3") {
      rows = rows.filter((r) => r.nhom === "Điểm dịch vụ" && r.gia_tri_dien_khuyet === "3");
    } else if (auditSpecialSelected === "med_4") {
      rows = rows.filter((r) => r.nhom === "Điểm dịch vụ" && r.gia_tri_dien_khuyet === "4");
    } else if (auditSpecialSelected === "no_impute") {
      rows = rows.filter((r) => r.so_o_dien_khuyet_tren_pj21 === 0);
    }

    if (auditSortSelected === "unique_desc") {
      rows.sort((a, b) => b.so_o_loi_duy_nhat_raw - a.so_o_loi_duy_nhat_raw);
    } else if (auditSortSelected === "occ_desc") {
      rows.sort((a, b) => b.tong_luot_loi_raw - a.tong_luot_loi_raw);
    } else if (auditSortSelected === "impute_desc") {
      rows.sort((a, b) => b.so_o_dien_khuyet_tren_pj21 - a.so_o_dien_khuyet_tren_pj21);
    } else if (auditSortSelected === "std_desc") {
      rows.sort((a, b) => b.o_chuan_hoa_giu_gia_tri - a.o_chuan_hoa_giu_gia_tri);
    } else if (auditSortSelected === "overlap_desc") {
      rows.sort((a, b) => b.o_trung_2_loi_raw - a.o_trung_2_loi_raw);
    }

    return rows;
  }

  function getGroupBadgeClass(nhom) {
    if (nhom === "Định danh") return "badge-slate";
    if (nhom === "Mục tiêu") return "badge-red";
    if (nhom === "Phân loại") return "badge-blue";
    if (nhom === "Vận hành") return "badge-purple";
    return "badge-teal";
  }

  function renderAuditTableAndChart() {
    const rows = getFilteredAuditRows();
    const tbody = document.getElementById("tbodyAudit24");
    const tfoot = document.getElementById("tfootAudit24");
    if (!tbody || !tfoot) return;

    let sumThieu = 0;
    let sumSaiDD = 0;
    let sumNgoaiMien = 0;
    let sumOverlap = 0;
    let sumOcc = 0;
    let sumUniq = 0;
    let sumDrop = 0;
    let sumFixed = 0;
    let sumStd = 0;
    let sumImp = 0;
    let sumAfter = 0;

    tbody.innerHTML = rows
      .map((r) => {
        sumThieu += r.thieu_raw;
        sumSaiDD += r.sai_dinh_dang_raw;
        sumNgoaiMien += r.ngoai_mien_raw;
        sumOverlap += r.o_trung_2_loi_raw;
        sumOcc += r.tong_luot_loi_raw;
        sumUniq += r.so_o_loi_duy_nhat_raw;
        sumDrop += r.o_loi_thuoc_dong_bi_loai;
        sumFixed += r.o_loi_duoc_sua_dong_giu_lai;
        sumStd += r.o_chuan_hoa_giu_gia_tri;
        sumImp += r.so_o_dien_khuyet_tren_pj21;
        sumAfter += r.o_loi_duy_nhat_sau;

        const impPctStr =
          r.so_o_dien_khuyet_tren_pj21 > 0
            ? ` <span style="font-size:0.74rem; color:var(--text-muted);">(${fmtPct(r.ty_le_dien_khuyet_tren_pj21_pct)})</span>`
            : "";

        return `
          <tr>
            <td>
              <button type="button" class="id-chip btn-jump-var" data-var="${escapeHtml(r.bien)}" title="Xem ví dụ Trước/Sau thực tế của biến ${escapeHtml(r.bien)} ở Phần 4" style="margin-right:0.35rem;">
                ${escapeHtml(r.bien)}
              </button>
              <span class="badge ${getGroupBadgeClass(r.nhom)}" style="font-size:0.68rem;">${escapeHtml(r.nhom)}</span>
            </td>
            <td title="Trống CSV: ${fmtInt(r.thieu_doc_csv_raw)} | Mã thiếu ẩn: ${fmtInt(r.thieu_ma_an_raw)}">${fmtInt(r.thieu_raw)}</td>
            <td>${fmtInt(r.sai_dinh_dang_raw)}</td>
            <td>${fmtInt(r.ngoai_mien_raw)}</td>
            <td>${r.o_trung_2_loi_raw > 0 ? `<span class="cell-highlight-warn">${fmtInt(r.o_trung_2_loi_raw)}</span>` : "0"}</td>
            <td><strong>${fmtInt(r.tong_luot_loi_raw)}</strong></td>
            <td><strong>${fmtInt(r.so_o_loi_duy_nhat_raw)}</strong></td>
            <td>${fmtInt(r.o_loi_thuoc_dong_bi_loai)}</td>
            <td><strong>${fmtInt(r.o_loi_duoc_sua_dong_giu_lai)}</strong></td>
            <td style="color:var(--brand-blue); font-weight:700;">${fmtInt(r.o_chuan_hoa_giu_gia_tri)}</td>
            <td style="color:var(--brand-teal); font-weight:700;">${fmtInt(r.so_o_dien_khuyet_tren_pj21)}${impPctStr}</td>
            <td><code>${escapeHtml(r.gia_tri_dien_khuyet)}</code></td>
            <td class="cell-zero-ok">${fmtInt(r.o_loi_duy_nhat_sau)}</td>
            <td><code>${escapeHtml(r.kieu_pj21)}</code> → <code>${escapeHtml(r.kieu_toi_uu)}</code></td>
          </tr>
        `;
      })
      .join("");

    const totalCellsKept = rows.length * 119092;
    const sumImpPct = totalCellsKept > 0 ? (sumImp / totalCellsKept) * 100 : 0;

    tfoot.innerHTML = `
      <tr>
        <td>Tổng cộng (${rows.length} cột đang hiển thị)</td>
        <td>${fmtInt(sumThieu)}</td>
        <td>${fmtInt(sumSaiDD)}</td>
        <td>${fmtInt(sumNgoaiMien)}</td>
        <td>${fmtInt(sumOverlap)}</td>
        <td>${fmtInt(sumOcc)}</td>
        <td>${fmtInt(sumUniq)}</td>
        <td>${fmtInt(sumDrop)}</td>
        <td>${fmtInt(sumFixed)}</td>
        <td>${fmtInt(sumStd)}</td>
        <td>${fmtInt(sumImp)} (${fmtPct(sumImpPct)})</td>
        <td>—</td>
        <td class="cell-zero-ok">${fmtInt(sumAfter)}</td>
        <td>—</td>
      </tr>
    `;

    // Gắn sự kiện click vào tên biến để nhảy sang Phần 4 xem ví dụ thực tế
    tbody.querySelectorAll(".btn-jump-var").forEach((btn) => {
      btn.addEventListener("click", () => {
        const varName = btn.getAttribute("data-var");
        const sel = document.getElementById("selectExampleVar");
        if (sel && varName) {
          sel.value = varName;
          renderVariableExamples();
          goToSection(4, true);
        }
      });
    });

    renderAudit24Chart(rows);
  }

  function renderAudit24Chart(rows) {
    const container = document.getElementById("chartAudit24Svg");
    if (!container) return;
    if (rows.length === 0) {
      container.innerHTML = `<p style="padding:1rem; color:var(--text-muted);">Không có biến nào khớp bộ lọc hiện tại.</p>`;
      return;
    }

    const rowHeight = 25;
    const topPad = 42;
    const bottomPad = 28;
    const leftPad = 235;
    const rightPad = 125;
    const chartW = 980;
    const plotW = chartW - leftPad - rightPad;
    const svgH = topPad + rows.length * rowHeight + bottomPad;

    let maxVal = 1;
    if (auditChartMode === "disposition") {
      maxVal = Math.max(...rows.map((r) => r.so_o_loi_duy_nhat_raw), 1);
    } else if (auditChartMode === "error_types") {
      maxVal = Math.max(...rows.map((r) => r.tong_luot_loi_raw), 1);
    } else {
      maxVal = 100;
    }

    let legendHtml = "";
    if (auditChartMode === "disposition") {
      legendHtml = `
        <rect x="${leftPad}" y="10" width="12" height="12" rx="2" fill="#64748b" />
        <text x="${leftPad + 16}" y="20" font-size="11" font-weight="700" fill="currentColor">Ô lỗi thuộc 10.788 dòng bị loại</text>
        <rect x="${leftPad + 215}" y="10" width="12" height="12" rx="2" fill="#0284c7" />
        <text x="${leftPad + 231}" y="20" font-size="11" font-weight="700" fill="currentColor">Chuẩn hóa định dạng (Giữ giá trị thực)</text>
        <rect x="${leftPad + 475}" y="10" width="12" height="12" rx="2" fill="#0d9488" />
        <text x="${leftPad + 491}" y="20" font-size="11" font-weight="700" fill="currentColor">Điền khuyết / Gán Unknown trên PJ21.csv</text>
      `;
    } else if (auditChartMode === "error_types") {
      legendHtml = `
        <rect x="${leftPad}" y="10" width="12" height="12" rx="2" fill="#dc2626" />
        <text x="${leftPad + 16}" y="20" font-size="11" font-weight="700" fill="currentColor">Thiếu (Ô trống + Mã thiếu ẩn)</text>
        <rect x="${leftPad + 215}" y="10" width="12" height="12" rx="2" fill="#d97706" />
        <text x="${leftPad + 231}" y="20" font-size="11" font-weight="700" fill="currentColor">Sai định dạng (Khoảng trắng, cắt cụt, đơn vị, .0)</text>
        <rect x="${leftPad + 515}" y="10" width="12" height="12" rx="2" fill="#7c3aed" />
        <text x="${leftPad + 531}" y="20" font-size="11" font-weight="700" fill="currentColor">Ngoài miền quy ước BOUNDS</text>
      `;
    } else {
      legendHtml = `
        <rect x="${leftPad}" y="10" width="12" height="12" rx="2" fill="#d97706" />
        <text x="${leftPad + 16}" y="20" font-size="11" font-weight="700" fill="currentColor">Tỷ lệ % ô Điền khuyết / Gán Unknown trên PJ21.csv</text>
        <rect x="${leftPad + 335}" y="10" width="12" height="12" rx="2" fill="#cbd5e1" />
        <text x="${leftPad + 351}" y="20" font-size="11" font-weight="700" fill="currentColor">Tỷ lệ % ô Quan sát hợp lệ thực tế (n = 119.092)</text>
      `;
    }

    const barsSvg = rows
      .map((r, i) => {
        const y = topPad + i * rowHeight;
        const barH = 16;
        if (auditChartMode === "disposition") {
          const wDrop = (r.o_loi_thuoc_dong_bi_loai / maxVal) * plotW;
          const wStd = (r.o_chuan_hoa_giu_gia_tri / maxVal) * plotW;
          const wImp = (r.so_o_dien_khuyet_tren_pj21 / maxVal) * plotW;
          const totalW = wDrop + wStd + wImp;
          return `
            <g class="audit-bar-row" data-var="${escapeHtml(r.bien)}">
              <text x="${leftPad - 8}" y="${y + 12}" text-anchor="end" font-size="10.8" font-weight="600" fill="currentColor">${escapeHtml(r.bien)}</text>
              <rect x="${leftPad}" y="${y}" width="${wDrop}" height="${barH}" fill="#64748b" />
              <rect x="${leftPad + wDrop}" y="${y}" width="${wStd}" height="${barH}" fill="#0284c7" />
              <rect x="${leftPad + wDrop + wStd}" y="${y}" width="${wImp}" height="${barH}" fill="#0d9488" />
              <text x="${leftPad + totalW + 6}" y="${y + 12}" font-size="10.2" font-weight="700" fill="currentColor">
                ${fmtInt(r.so_o_loi_duy_nhat_raw)} ô (${fmtPct(r.ty_le_o_loi_raw_pct, 1)})
              </text>
            </g>
          `;
        } else if (auditChartMode === "error_types") {
          const wMiss = (r.thieu_raw / maxVal) * plotW;
          const wFmt = (r.sai_dinh_dang_raw / maxVal) * plotW;
          const wOut = (r.ngoai_mien_raw / maxVal) * plotW;
          const totalW = wMiss + wFmt + wOut;
          return `
            <g class="audit-bar-row" data-var="${escapeHtml(r.bien)}">
              <text x="${leftPad - 8}" y="${y + 12}" text-anchor="end" font-size="10.8" font-weight="600" fill="currentColor">${escapeHtml(r.bien)}</text>
              <rect x="${leftPad}" y="${y}" width="${wMiss}" height="${barH}" fill="#dc2626" />
              <rect x="${leftPad + wMiss}" y="${y}" width="${wFmt}" height="${barH}" fill="#d97706" />
              <rect x="${leftPad + wMiss + wFmt}" y="${y}" width="${wOut}" height="${barH}" fill="#7c3aed" />
              <text x="${leftPad + totalW + 6}" y="${y + 12}" font-size="10.2" font-weight="700" fill="currentColor">
                ${fmtInt(r.tong_luot_loi_raw)} lượt ${r.o_trung_2_loi_raw > 0 ? `(trùng ${fmtInt(r.o_trung_2_loi_raw)})` : ""}
              </text>
            </g>
          `;
        } else {
          const wImp = (r.ty_le_dien_khuyet_tren_pj21_pct / 100) * plotW;
          const wObs = plotW - wImp;
          return `
            <g class="audit-bar-row" data-var="${escapeHtml(r.bien)}">
              <text x="${leftPad - 8}" y="${y + 12}" text-anchor="end" font-size="10.8" font-weight="600" fill="currentColor">${escapeHtml(r.bien)}</text>
              <rect x="${leftPad}" y="${y}" width="${wImp}" height="${barH}" fill="#d97706" />
              <rect x="${leftPad + wImp}" y="${y}" width="${wObs}" height="${barH}" fill="#e2e8f0" opacity="0.45" />
              <text x="${leftPad + plotW + 6}" y="${y + 12}" font-size="10.2" font-weight="700" fill="currentColor">
                ${fmtPct(r.ty_le_dien_khuyet_tren_pj21_pct)} (${fmtInt(r.so_o_dien_khuyet_tren_pj21)} ô)
              </text>
            </g>
          `;
        }
      })
      .join("");

    container.innerHTML = `
      <svg viewBox="0 0 ${chartW} ${svgH}" role="img" aria-label="Biểu đồ kiểm toán 24 biến">
        ${legendHtml}
        <line x1="${leftPad}" y1="${topPad - 6}" x2="${leftPad}" y2="${svgH - bottomPad + 4}" stroke="#94a3b8" stroke-width="1.2" />
        ${barsSvg}
      </svg>
    `;
  }

  // Sự kiện tìm kiếm, lọc và tải CSV Phần 3
  document.getElementById("inputSearchAudit")?.addEventListener("input", (e) => {
    auditSearchQuery = e.target.value || "";
    renderAuditTableAndChart();
  });

  document.querySelectorAll("#auditGroupFilter .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#auditGroupFilter .pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      auditGroupSelected = btn.getAttribute("data-group") || "all";
      renderAuditTableAndChart();
    });
  });

  document.getElementById("selectAuditSpecial")?.addEventListener("change", (e) => {
    auditSpecialSelected = e.target.value || "all";
    renderAuditTableAndChart();
  });

  document.getElementById("selectAuditSort")?.addEventListener("change", (e) => {
    auditSortSelected = e.target.value || "default";
    renderAuditTableAndChart();
  });

  document.querySelectorAll("#auditChartModeGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#auditChartModeGroup .pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      auditChartMode = btn.getAttribute("data-chartmode") || "disposition";
      renderAuditTableAndChart();
    });
  });

  // Xuất CSV Kiểm toán 24 biến (chuẩn UTF-8 BOM cho Excel tiếng Việt)
  document.getElementById("btnExportAuditCsv")?.addEventListener("click", () => {
    const rows = getFilteredAuditRows();
    const headers = [
      "Biến",
      "Nhóm biến",
      "Thiếu đọc CSV (trước)",
      "Thiếu mã ẩn (trước)",
      "Tổng thiếu (trước)",
      "Sai định dạng (trước)",
      "Ngoài miền (trước)",
      "Ô trùng 2 lỗi (ĐD & NM)",
      "Tổng lượt lỗi (trước)",
      "Số ô lỗi duy nhất (trước)",
      "Ô lỗi thuộc dòng bị loại (10.788 dòng)",
      "Ô lỗi được sửa trên dòng giữ lại (119.092 dòng)",
      "Ô chuẩn hóa giữ giá trị thực (PJ21)",
      "Số ô điền khuyết / Unknown (PJ21)",
      "Tỷ lệ điền khuyết trên PJ21 (%)",
      "Giá trị điền",
      "Lỗi sau xử lý (PJ21)",
      "Kiểu PJ21",
      "Kiểu tối ưu RAM",
    ];

    const csvLines = [headers.join(",")];
    rows.forEach((r) => {
      csvLines.push(
        [
          `"${r.bien}"`,
          `"${r.nhom}"`,
          r.thieu_doc_csv_raw,
          r.thieu_ma_an_raw,
          r.thieu_raw,
          r.sai_dinh_dang_raw,
          r.ngoai_mien_raw,
          r.o_trung_2_loi_raw,
          r.tong_luot_loi_raw,
          r.so_o_loi_duy_nhat_raw,
          r.o_loi_thuoc_dong_bi_loai,
          r.o_loi_duoc_sua_dong_giu_lai,
          r.o_chuan_hoa_giu_gia_tri,
          r.so_o_dien_khuyet_tren_pj21,
          r.ty_le_dien_khuyet_tren_pj21_pct.toFixed(4),
          `"${r.gia_tri_dien_khuyet}"`,
          r.o_loi_duy_nhat_sau,
          `"${r.kieu_pj21}"`,
          `"${r.kieu_toi_uu}"`,
        ].join(",")
      );
    });

    const blob = new Blob(["\uFEFF" + csvLines.join("\r\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "PRJ21_Chuong3_Kiem_Toan_24_Bien.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // ── 7. PHẦN 4: VÍ DỤ THỰC TẾ TRƯỚC / SAU THEO CÙNG ID ─────────────────────
  let selectedExampleType = "all";
  const selectExampleVar = document.getElementById("selectExampleVar");
  const selectRecordId = document.getElementById("selectRecordId");

  function initExamplesSection() {
    if (selectExampleVar) {
      selectExampleVar.innerHTML = DATA.audit_24
        .map(
          (r, idx) =>
            `<option value="${escapeHtml(r.bien)}">${idx + 1}. ${escapeHtml(r.bien)} (${escapeHtml(r.nhom)} — ${fmtInt(r.o_loi_duoc_sua_dong_giu_lai)} ô sửa)</option>`
        )
        .join("");
      selectExampleVar.value = "Customer Type";
      selectExampleVar.addEventListener("change", renderVariableExamples);
    }

    document.querySelectorAll("#exampleTypeFilter .pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#exampleTypeFilter .pill-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedExampleType = btn.getAttribute("data-extype") || "all";
        renderVariableExamples();
      });
    });

    // Khởi tạo danh sách 164 ID thực tế có hồ sơ đầy đủ 24 biến
    if (selectRecordId) {
      const ids = Object.keys(DATA.full_records_lookup).sort((a, b) => Number(a) - Number(b));
      selectRecordId.innerHTML = ids
        .map((id) => {
          const rec = DATA.full_records_lookup[id];
          const sat = rec?.Satisfaction?.sau || "";
          return `<option value="${id}">ID = ${id} (${sat})</option>`;
        })
        .join("");
      selectRecordId.value = "1";
      selectRecordId.addEventListener("change", () => {
        renderRecordInspector(selectRecordId.value);
      });
    }

    // Bảng ví dụ các dòng bị loại do thiếu nhãn Satisfaction
    const tbodyDropped = document.getElementById("tbodyDroppedExamples");
    if (tbodyDropped && DATA.dropped_examples) {
      tbodyDropped.innerHTML = DATA.dropped_examples
        .slice(0, 7)
        .map(
          (d) => `
          <tr>
            <td><strong>ID = ${d.id}</strong></td>
            <td style="text-align:left;">${formatRawDisplay(d.satisfaction_raw)}</td>
            <td style="text-align:left;">${formatRawDisplay(d.gender_raw)}</td>
            <td style="text-align:left;">${formatRawDisplay(d.age_raw)}</td>
            <td style="text-align:left;">${formatRawDisplay(d.customer_type_raw)}</td>
            <td style="text-align:left;">${formatRawDisplay(d.class_raw)}</td>
            <td style="text-align:left; font-size:0.79rem;">${escapeHtml(d.ly_do)}</td>
          </tr>
        `
        )
        .join("");
    }

    renderVariableExamples();
    renderRecordInspector("1");
  }

  function renderVariableExamples() {
    const varName = selectExampleVar?.value || "Customer Type";
    const auditInfo = DATA.audit_24.find((x) => x.bien === varName);
    const summaryBox = document.getElementById("exampleVarSummaryBox");
    const tbody = document.getElementById("tbodyVarExamples");

    if (summaryBox && auditInfo) {
      summaryBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <strong>Biến đang chọn: <code>${escapeHtml(auditInfo.bien)}</code> (${escapeHtml(auditInfo.nhom)})</strong> —
            Trên 119.092 dòng <code>PJ21.csv</code> có <strong>${fmtInt(auditInfo.o_loi_duoc_sua_dong_giu_lai)} ô được xử lý</strong>:
            tách thành <span class="badge badge-blue">Chuẩn hóa định dạng (Giữ giá trị gốc): ${fmtInt(auditInfo.o_chuan_hoa_giu_gia_tri)} ô</span>
            và <span class="badge badge-amber">Điền khuyết / Gán Unknown: ${fmtInt(auditInfo.so_o_dien_khuyet_tren_pj21)} ô (${fmtPct(auditInfo.ty_le_dien_khuyet_tren_pj21_pct)}, giá trị điền: ${escapeHtml(auditInfo.gia_tri_dien_khuyet)})</span>.
          </div>
          <span class="badge badge-slate">Thuộc dòng bị loại: ${fmtInt(auditInfo.o_loi_thuoc_dong_bi_loai)} ô</span>
        </div>
      `;
    }

    if (!tbody) return;
    let list = (DATA.examples_by_var[varName] || []).slice();
    if (selectedExampleType !== "all") {
      list = list.filter((x) => x.loai === selectedExampleType);
    }

    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:1rem; color:var(--text-muted);">
            Biến <strong>${escapeHtml(varName)}</strong> không có trường hợp nào thuộc phân loại này (ví dụ: biến phân loại không có lỗi ngoài miền số, hoặc biến ID/Satisfaction không điền khuyết). Hãy chọn "Tất cả".
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list
      .map((ex) => {
        const isImputed =
          ex.loai === "dien_khuyet_thieu" ||
          ex.loai === "dien_khuyet_ngoai_mien" ||
          ex.loai === "trung_2_loi";
        const badgeClass =
          ex.loai === "chuan_hoa"
            ? "badge-blue"
            : ex.loai === "hop_le"
            ? "badge-green"
            : ex.loai === "trung_2_loi"
            ? "badge-purple"
            : "badge-amber";

        return `
          <tr>
            <td>
              <button type="button" class="id-chip btn-inspect-id" data-id="${ex.id}" title="Bấm để xem toàn bộ 24 biến của hành khách ID = ${ex.id}">
                ID = ${ex.id}
              </button>
            </td>
            <td style="text-align:left;">
              <span class="val-before">${ex.truoc === "" ? '(trống "")' : escapeHtml(ex.truoc.replace(/ /g, "␣"))}</span>
            </td>
            <td style="text-align:left;">
              <span class="val-after ${isImputed ? "imputed" : ""}">${escapeHtml(ex.sau)}</span>
            </td>
            <td style="text-align:left;">
              <span class="badge ${badgeClass}">${escapeHtml(ex.nhan_loai)}</span>
            </td>
            <td style="text-align:left; font-size:0.8rem;">
              ${escapeHtml(ex.giai_thich)}
            </td>
          </tr>
        `;
      })
      .join("");

    tbody.querySelectorAll(".btn-inspect-id").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idStr = btn.getAttribute("data-id");
        if (idStr && selectRecordId) {
          selectRecordId.value = idStr;
          renderRecordInspector(idStr);
        }
      });
    });
  }

  function renderRecordInspector(idStr) {
    const rec = DATA.full_records_lookup[String(idStr)];
    const grid = document.getElementById("recordInspectorGrid");
    const summaryEl = document.getElementById("recordInspectorSummary");
    if (!grid || !rec) return;

    let cntValid = 0;
    let cntStd = 0;
    let cntImp = 0;

    const cardsHtml = DATA.audit_24
      .map((a) => {
        const col = a.bien;
        const cell = rec[col];
        if (!cell) return "";
        if (cell.trang_thai === "hop_le") cntValid++;
        else if (cell.trang_thai === "chuan_hoa") cntStd++;
        else cntImp++;

        const statusBadge =
          cell.trang_thai === "hop_le"
            ? '<span class="badge badge-green" style="font-size:0.66rem;">Hợp lệ gốc</span>'
            : cell.trang_thai === "chuan_hoa"
            ? '<span class="badge badge-blue" style="font-size:0.66rem;">Chuẩn hóa</span>'
            : '<span class="badge badge-amber" style="font-size:0.66rem;">Điền khuyết</span>';

        const rawShow = cell.truoc === "" ? '(trống "")' : cell.truoc.replace(/ /g, "␣");
        return `
          <div class="rec-field-card status-${cell.trang_thai}">
            <div class="rec-field-name">
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${escapeHtml(col)}">${escapeHtml(col)}</span>
              ${statusBadge}
            </div>
            <div class="raw-clean-diff">
              <span class="val-before" title="Giá trị thô trong Du lieu khong sach.csv">${escapeHtml(rawShow)}</span>
              <span>→</span>
              <span class="val-after ${cell.trang_thai === "dien_khuyet" ? "imputed" : ""}" title="Giá trị sạch trong PJ21.csv">${escapeHtml(cell.sau)}</span>
            </div>
          </div>
        `;
      })
      .join("");

    if (summaryEl) {
      summaryEl.innerHTML = `
        <span class="badge badge-slate">Đang soi hành khách <strong>ID = ${escapeHtml(idStr)}</strong></span>
        <span class="badge badge-green">Hợp lệ gốc: ${cntValid}/24 ô</span>
        <span class="badge badge-blue">Chuẩn hóa (giữ giá trị): ${cntStd}/24 ô</span>
        <span class="badge badge-amber">Điền khuyết / Unknown: ${cntImp}/24 ô</span>
      `;
    }
    grid.innerHTML = cardsHtml;
  }

  // ── 8. PHẦN 5: KHÁM PHÁ DỮ LIỆU (EDA) — RQ1, RQ2, RQ3 ─────────────────────
  // Chuyển tab giữa 5A (RQ1), 5B (RQ2), 5C (RQ3)
  document.querySelectorAll(".eda-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".eda-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-edapane");
      document.querySelectorAll(".eda-pane").forEach((p) => {
        p.classList.toggle("active", p.id === `eda-pane-${target}`);
      });
    });
  });

  // ── 8A. RQ1: PHÂN KHÚC HÀNH KHÁCH ─────────────────────────────────────────
  let segScopeMode = "compare"; // compare | full | observed

  function renderSegmentsRQ1() {
    const container = document.getElementById("chartSegmentsSvg");
    const tbody = document.getElementById("tbodySegmentTable");
    if (!container) return;

    const kq = DATA.ket_qua;
    // Dữ liệu chuẩn Bảng 3.7
    const segRows = [
      { bien: "Class", nhom: "Business (Toàn PJ21 - gồm 9.113 ô điền Mode)", n: 61826, hl: 40611, rate: 65.6860, scope: "full" },
      { bien: "Class", nhom: "Business (Chỉ ô Class quan sát thực tế)", n: 52713, hl: 36610, rate: 69.4516, scope: "obs" },
      { bien: "Class", nhom: "↳ Ô khuyết Class được điền Mode 'Business'", n: 9113, hl: 4001, rate: 43.9043, scope: "imp" },
      { bien: "Class", nhom: "Economy Plus (100% quan sát)", n: 7939, hl: 1955, rate: 24.6253, scope: "both" },
      { bien: "Class", nhom: "Economy (100% quan sát)", n: 49327, hl: 9174, rate: 18.5983, scope: "both" },
      { bien: "Type of Travel", nhom: "Business Travel (Quan sát)", n: 50834, hl: 29566, rate: 58.1619, scope: "both" },
      { bien: "Type of Travel", nhom: "Personal Travel (Quan sát)", n: 22651, hl: 2353, rate: 10.3881, scope: "both" },
      { bien: "Type of Travel", nhom: "Unknown (38,30% - Gán nhãn riêng)", n: 45607, hl: 19821, rate: 43.4604, scope: "full" },
      { bien: "Customer Type", nhom: "Returning Customer (Quan sát)", n: 64203, hl: 30859, rate: 48.0647, scope: "both" },
      { bien: "Customer Type", nhom: "First-time Customer (Quan sát)", n: 14481, hl: 3458, rate: 23.8796, scope: "both" },
      { bien: "Customer Type", nhom: "Unknown (33,93% - Gán nhãn riêng)", n: 40408, hl: 17423, rate: 43.1177, scope: "full" },
      { bien: "Gender", nhom: "Female (Toàn PJ21 - gồm 9.517 ô điền Mode)", n: 65241, hl: 28064, rate: 43.0159, scope: "full" },
      { bien: "Gender", nhom: "Female (Chỉ ô Gender quan sát thực tế)", n: 55724, hl: 23936, rate: 42.9546, scope: "obs" },
      { bien: "Gender", nhom: "Male (100% quan sát)", n: 53851, hl: 23676, rate: 43.9658, scope: "both" },
    ];

    if (tbody) {
      tbody.innerHTML = segRows
        .map(
          (r) => `
          <tr>
            <td><strong><code>${escapeHtml(r.bien)}</code></strong></td>
            <td style="text-align:left;">${escapeHtml(r.nhom)}</td>
            <td>${fmtInt(r.n)}</td>
            <td>${fmtInt(r.hl)}</td>
            <td><strong>${fmtPct(r.rate, 2)}</strong> <span style="font-size:0.73rem; color:var(--text-muted);">(${fmtDec(r.rate, 4)}%)</span></td>
          </tr>
        `
        )
        .join("");
    }

    // Vẽ 3 cụm biểu đồ: Class, Customer Type, Type of Travel
    const panels = [
      {
        title: "1. Hạng ghế (Class)",
        sub: segScopeMode === "observed" ? "Cramér's V = 0,5051 (n = 109.979)" : "Cramér's V = 0,4671 PJ21 | 0,5051 Quan sát",
        bars:
          segScopeMode === "full"
            ? [
                { label: "Business\n(PJ21)", rate: 65.69, n: 61826, color: "#1a5fb4" },
                { label: "Economy\nPlus", rate: 24.63, n: 7939, color: "#0284c7" },
                { label: "Economy", rate: 18.60, n: 49327, color: "#0d9488" },
              ]
            : segScopeMode === "observed"
            ? [
                { label: "Business\n(Quan sát)", rate: 69.45, n: 52713, color: "#15803d" },
                { label: "Economy\nPlus", rate: 24.63, n: 7939, color: "#0284c7" },
                { label: "Economy", rate: 18.60, n: 49327, color: "#0d9488" },
              ]
            : [
                { label: "Business\n(Quan sát)", rate: 69.45, n: 52713, color: "#15803d" },
                { label: "Business\n(Gộp PJ21)", rate: 65.69, n: 61826, color: "#1a5fb4" },
                { label: "Ô điền Mode\n(Business)", rate: 43.90, n: 9113, color: "#d97706" },
                { label: "Economy\nPlus", rate: 24.63, n: 7939, color: "#0284c7" },
                { label: "Economy", rate: 18.60, n: 49327, color: "#0d9488" },
              ],
      },
      {
        title: "2. Loại khách hàng (Customer Type)",
        sub: segScopeMode === "observed" ? "Cramér's V = 0,1890 (n = 78.684, 2×2)" : "Cramér's V = 0,1890 Quan sát | 0,1538 PJ21",
        bars:
          segScopeMode === "observed"
            ? [
                { label: "Returning\nCustomer", rate: 48.06, n: 64203, color: "#1a5fb4" },
                { label: "First-time\nCustomer", rate: 23.88, n: 14481, color: "#0284c7" },
              ]
            : [
                { label: "Returning\nCustomer", rate: 48.06, n: 64203, color: "#1a5fb4" },
                { label: "First-time\nCustomer", rate: 23.88, n: 14481, color: "#0284c7" },
                { label: "Unknown\n(33,93%)", rate: 43.12, n: 40408, color: "#64748b" },
              ],
      },
      {
        title: "3. Mục đích chuyến đi (Type of Travel)",
        sub: segScopeMode === "observed" ? "Cramér's V = 0,4451 (n = 73.485, 2×2)" : "Cramér's V = 0,4451 Quan sát | 0,3496 PJ21",
        bars:
          segScopeMode === "observed"
            ? [
                { label: "Business\nTravel", rate: 58.16, n: 50834, color: "#1a5fb4" },
                { label: "Personal\nTravel", rate: 10.39, n: 22651, color: "#0284c7" },
              ]
            : [
                { label: "Business\nTravel", rate: 58.16, n: 50834, color: "#1a5fb4" },
                { label: "Personal\nTravel", rate: 10.39, n: 22651, color: "#0284c7" },
                { label: "Unknown\n(38,30%)", rate: 43.46, n: 45607, color: "#64748b" },
              ],
      },
    ];

    const panelW = 350;
    const svgW = 1080;
    const svgH = 290;
    const baseY = 230;
    const scaleY = 2.15; // 80% -> 172px

    const panelsSvg = panels
      .map((p, pIdx) => {
        const x0 = pIdx * 360 + 25;
        const count = p.bars.length;
        const slotW = 310 / count;
        const barW = Math.min(54, slotW * 0.66);

        const barsHtml = p.bars
          .map((b, bIdx) => {
            const cx = x0 + bIdx * slotW + slotW / 2;
            const bx = cx - barW / 2;
            const bh = b.rate * scaleY;
            const by = baseY - bh;
            const lines = b.label.split("\n");
            return `
              <g>
                <rect x="${bx}" y="${by}" width="${barW}" height="${bh}" rx="4" fill="${b.color}" />
                <text x="${cx}" y="${by - 15}" text-anchor="middle" font-size="10.5" font-weight="800" fill="currentColor">${fmtDec(b.rate, 2)}%</text>
                <text x="${cx}" y="${by - 4}" text-anchor="middle" font-size="8.8" fill="#64748b">(n=${fmtInt(b.n)})</text>
                <text x="${cx}" y="${baseY + 15}" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">${escapeHtml(lines[0])}</text>
                ${lines[1] ? `<text x="${cx}" y="${baseY + 27}" text-anchor="middle" font-size="8.8" fill="#64748b">${escapeHtml(lines[1])}</text>` : ""}
              </g>
            `;
          })
          .join("");

        // Đường trung bình mẫu 43,45%
        const avgY = baseY - 43.45 * scaleY;

        return `
          <g>
            <text x="${x0 + 155}" y="20" text-anchor="middle" font-size="12.5" font-weight="800" fill="currentColor">${escapeHtml(p.title)}</text>
            <text x="${x0 + 155}" y="35" text-anchor="middle" font-size="9.8" font-weight="600" fill="#0284c7">${escapeHtml(p.sub)}</text>
            <line x1="${x0}" y1="${baseY}" x2="${x0 + 315}" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
            <line x1="${x0}" y1="48" x2="${x0}" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
            <line x1="${x0}" y1="${avgY}" x2="${x0 + 315}" y2="${avgY}" stroke="#dc2626" stroke-dasharray="3 3" stroke-width="1" />
            ${pIdx === 0 ? `<text x="${x0 + 312}" y="${avgY - 4}" text-anchor="end" font-size="8.5" font-weight="700" fill="#dc2626">TB mẫu: 43,45%</text>` : ""}
            ${barsHtml}
          </g>
        `;
      })
      .join("");

    container.innerHTML = `
      <svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="Biểu đồ tỷ lệ hài lòng theo phân khúc hành khách">
        ${panelsSvg}
      </svg>
    `;
  }

  document.querySelectorAll("#segScopeGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#segScopeGroup .pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      segScopeMode = btn.getAttribute("data-segscope") || "compare";
      renderSegmentsRQ1();
    });
  });

  // ── 8B. RQ2: ĐỘ TRỄ KHỞI HÀNH & ĐẾN + PHÂN PHỐI TUỔI & BOXPLOT ────────────
  let delayScopeMode = "decomposed"; // decomposed | observed | full
  let distScopeMode = "both"; // both | full | observed

  function renderDelayRQ2() {
    const container = document.getElementById("chartDelaySvg");
    if (!container) return;

    // Dữ liệu thực từ nhom_do_tre_khoi_hanh.csv, nhom_do_tre.csv & ket_qua.json
    const dep6 = [
      { label: "0 phút\n(Quan sát)", rate: 45.6429, n: 44020, color: "#d97706" },
      { label: "Ô khuyết\n(Điền 0)", rate: 43.6012, n: 41414, color: "#64748b" },
      { label: "0 phút\n(Gộp PJ21)", rate: 44.6532, n: 85434, color: "#0f294a" },
      { label: "1–15\nphút", rate: 43.3786, n: 16439, color: "#1a5fb4" },
      { label: "16–60\nphút", rate: 38.2320, n: 11765, color: "#1a5fb4" },
      { label: "Trên 60\nphút", rate: 35.9736, n: 5454, color: "#1a5fb4" },
    ];

    const arr6 = [
      { label: "0 phút\n(Quan sát)", rate: 47.3477, n: 62605, color: "#d97706" },
      { label: "Ô khuyết\n(Điền 0)", rate: 44.1279, n: 8038, color: "#64748b" },
      { label: "0 phút\n(Gộp PJ21)", rate: 46.9813, n: 70643, color: "#0f294a" },
      { label: "1–15\nphút", rate: 40.9973, n: 23082, color: "#0d9488" },
      { label: "16–60\nphút", rate: 35.8252, n: 17390, color: "#0d9488" },
      { label: "Trên 60\nphút", rate: 35.8280, n: 7977, color: "#0d9488" },
    ];

    function filterBars(arr) {
      if (delayScopeMode === "observed") {
        return [arr[0], arr[3], arr[4], arr[5]];
      }
      if (delayScopeMode === "full") {
        return [arr[2], arr[3], arr[4], arr[5]];
      }
      return arr;
    }

    const panels = [
      {
        title: "1. Độ trễ khởi hành (Departure Delay — Đơn vị: phút)",
        sub: "Quan sát: n = 77.678 (giảm 9,67 điểm %, r_rb = -0,0658) | Toàn PJ21: n = 119.092 (điền 0: 41.414 ô = 34,77%)",
        bars: filterBars(dep6),
      },
      {
        title: "2. Độ trễ đến (Arrival Delay — Đơn vị: phút)",
        sub: "Quan sát: n = 111.054 (giảm 11,52 điểm %, r_rb = -0,1058) | Toàn PJ21: n = 119.092 (điền 0: 8.038 ô = 6,75%)",
        bars: filterBars(arr6),
      },
    ];

    const svgW = 1080;
    const svgH = 295;
    const baseY = 235;
    const scaleY = 2.85; // 60% -> 171px

    const panelsSvg = panels
      .map((p, pIdx) => {
        const x0 = pIdx * 535 + 40;
        const plotW = 485;
        const count = p.bars.length;
        const slotW = plotW / count;
        const barW = Math.min(54, slotW * 0.66);

        const barsHtml = p.bars
          .map((b, bIdx) => {
            const cx = x0 + bIdx * slotW + slotW / 2;
            const bx = cx - barW / 2;
            const bh = b.rate * scaleY;
            const by = baseY - bh;
            const lines = b.label.split("\n");
            return `
              <g>
                <rect x="${bx}" y="${by}" width="${barW}" height="${bh}" rx="4" fill="${b.color}" />
                <text x="${cx}" y="${by - 15}" text-anchor="middle" font-size="10.2" font-weight="800" fill="currentColor">${fmtDec(b.rate, 2)}%</text>
                <text x="${cx}" y="${by - 4}" text-anchor="middle" font-size="8.6" fill="#64748b">(n=${fmtInt(b.n)})</text>
                <text x="${cx}" y="${baseY + 15}" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">${escapeHtml(lines[0])}</text>
                ${lines[1] ? `<text x="${cx}" y="${baseY + 27}" text-anchor="middle" font-size="8.8" fill="#64748b">${escapeHtml(lines[1])}</text>` : ""}
              </g>
            `;
          })
          .join("");

        const dividerLine =
          delayScopeMode === "decomposed"
            ? `
              <line x1="${x0 + slotW * 3}" y1="52" x2="${x0 + slotW * 3}" y2="${baseY}" stroke="#64748b" stroke-dasharray="4 4" stroke-width="1.3" />
              <text x="${x0 + slotW * 1.5}" y="58" text-anchor="middle" font-size="9.5" font-weight="700" fill="#d97706">Phân rã nhóm 0 phút</text>
              <text x="${x0 + slotW * 4.5}" y="58" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1a5fb4">Các mức trễ dương (&gt; 0 phút, 100% quan sát)</text>
            `
            : "";

        return `
          <g>
            <text x="${x0 + plotW / 2}" y="20" text-anchor="middle" font-size="12.2" font-weight="800" fill="currentColor">${escapeHtml(p.title)}</text>
            <text x="${x0 + plotW / 2}" y="35" text-anchor="middle" font-size="9.2" font-weight="600" fill="#0284c7">${escapeHtml(p.sub)}</text>
            <line x1="${x0}" y1="${baseY}" x2="${x0 + plotW}" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
            <line x1="${x0}" y1="48" x2="${x0}" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
            ${dividerLine}
            ${barsHtml}
          </g>
        `;
      })
      .join("");

    container.innerHTML = `
      <svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="Biểu đồ tỷ lệ hài lòng theo độ trễ khởi hành và độ trễ đến">
        <text x="14" y="145" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90 14 145)">Tỷ lệ hài lòng (%)</text>
        ${panelsSvg}
      </svg>
    `;
  }

  function renderAgeAndBoxRQ2() {
    const container = document.getElementById("chartAgeAndBoxSvg");
    if (!container) return;

    const age = DATA.age_dist;
    const bins = age.bins; // 19 bins: 5-9 .. 95-100
    const fullCounts = age.full_counts;
    const obsCounts = age.obs_counts;
    const maxCount = 22000;

    const baseY = 215;
    const plotH = 155;
    const x0 = 48;
    const plotW = 285;
    const bw = plotW / bins.length;

    const ageBars = bins
      .map((b, i) => {
        const fc = fullCounts[i];
        const oc = obsCounts[i];
        const fh = (fc / maxCount) * plotH;
        const oh = (oc / maxCount) * plotH;
        const bx = x0 + i * bw;
        const isBin40 = b.startsWith("40");

        let rects = "";
        if (distScopeMode === "both") {
          rects = `
            <rect x="${bx + 1}" y="${baseY - fh}" width="${bw - 2}" height="${fh}" fill="${isBin40 ? "#d97706" : "#93c5fd"}" />
            <rect x="${bx + 1}" y="${baseY - oh}" width="${bw - 2}" height="${oh}" fill="#1a5fb4" />
          `;
        } else if (distScopeMode === "full") {
          rects = `<rect x="${bx + 1}" y="${baseY - fh}" width="${bw - 2}" height="${fh}" fill="${isBin40 ? "#d97706" : "#1a5fb4"}" />`;
        } else {
          rects = `<rect x="${bx + 1}" y="${baseY - oh}" width="${bw - 2}" height="${oh}" fill="#0d9488" />`;
        }

        const showTick = i % 3 === 0 || isBin40;
        return `
          <g>
            ${rects}
            ${showTick ? `<text x="${bx + bw / 2}" y="${baseY + 13}" text-anchor="middle" font-size="8.2" fill="currentColor">${escapeHtml(b.split("–")[0])}</text>` : ""}
          </g>
        `;
      })
      .join("");

    // Boxplot bên phải: log(1 + Arrival Delay)
    const boxSource =
      distScopeMode === "observed"
        ? DATA.delay_box.arrival_log1p_obs
        : DATA.delay_box.arrival_log1p_full;
    const satBox = boxSource["Satisfied"];
    const disBox = boxSource["Neutral or Dissatisfied"];
    const maxLog = 5.0; // log(1+148) ~ 5
    const boxY = (v) => baseY - (Math.min(maxLog, v) / maxLog) * plotH;

    function drawBox(cx, stats, color, label, subN) {
      const yMed = boxY(stats.median);
      const yQ1 = boxY(stats.q1);
      const yQ3 = boxY(stats.q3);
      const yW = boxY(stats.upper_whisker);
      return `
        <g>
          <line x1="${cx}" y1="${yQ3}" x2="${cx}" y2="${yW}" stroke="${color}" stroke-width="1.8" stroke-dasharray="3 2" />
          <line x1="${cx - 18}" y1="${yW}" x2="${cx + 18}" y2="${yW}" stroke="${color}" stroke-width="1.8" />
          <rect x="${cx - 28}" y="${yQ3}" width="56" height="${Math.max(3, yQ1 - yQ3)}" fill="${color}" fill-opacity="0.22" stroke="${color}" stroke-width="2" rx="3" />
          <line x1="${cx - 28}" y1="${yMed}" x2="${cx + 28}" y2="${yMed}" stroke="#ea580c" stroke-width="3" />
          <text x="${cx + 34}" y="${yQ3 + 4}" font-size="8.8" font-weight="700" fill="${color}">Q3=${fmtDec(stats.q3, 2)}</text>
          <text x="${cx + 34}" y="${yW + 4}" font-size="8.5" fill="#64748b">Râu=${fmtDec(stats.upper_whisker, 2)}</text>
          <text x="${cx}" y="${baseY + 14}" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">${escapeHtml(label)}</text>
          <text x="${cx}" y="${baseY + 26}" text-anchor="middle" font-size="8.5" fill="#64748b">(n=${fmtInt(subN)}, Med=0)</text>
        </g>
      `;
    }

    container.innerHTML = `
      <svg viewBox="0 0 680 255" role="img" aria-label="Phân bố tuổi và Boxplot độ trễ đến">
        <!-- Trái: Histogram Tuổi -->
        <text x="190" y="18" text-anchor="middle" font-size="11.5" font-weight="800" fill="currentColor">
          Phân bố Tuổi hành khách (Đơn vị: Năm)
        </text>
        <text x="190" y="32" text-anchor="middle" font-size="9" fill="#d97706" font-weight="700">
          Đỉnh tại nhóm 40–44 tuổi do +9.012 ô điền trung vị 40
        </text>
        <line x1="${x0}" y1="${baseY}" x2="${x0 + plotW}" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
        <line x1="${x0}" y1="50" x2="${x0}" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
        ${ageBars}
        <text x="190" y="244" text-anchor="middle" font-size="9.5" font-weight="600" fill="#64748b">Tuổi hành khách (7–100 năm)</text>

        <!-- Phải: Boxplot log(1 + Arrival Delay) -->
        <text x="520" y="18" text-anchor="middle" font-size="11.5" font-weight="800" fill="currentColor">
          Boxplot log(1 + Arrival Delay [phút])
        </text>
        <text x="520" y="32" text-anchor="middle" font-size="9" fill="#0284c7" font-weight="700">
          Mann–Whitney U: r_rb = ${distScopeMode === "observed" ? "-0,1058 (Quan sát)" : "-0,0985 (PJ21)"}
        </text>
        <line x1="390" y1="${baseY}" x2="655" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
        <line x1="390" y1="50" x2="390" y2="${baseY}" stroke="#94a3b8" stroke-width="1.2" />
        ${drawBox(455, satBox, "#0d9488", "Satisfied", satBox.n)}
        ${drawBox(580, disBox, "#d97706", "Neutral/Dissatisfied", disBox.n)}
      </svg>
    `;
  }

  document.querySelectorAll("#delayScopeGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#delayScopeGroup .pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      delayScopeMode = btn.getAttribute("data-delayscope") || "decomposed";
      renderDelayRQ2();
    });
  });

  document.querySelectorAll("#distScopeGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#distScopeGroup .pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      distScopeMode = btn.getAttribute("data-distscope") || "both";
      renderAgeAndBoxRQ2();
    });
  });

  // ── 8C. RQ3: TƯƠNG QUAN SPEARMAN 14 ĐIỂM DỊCH VỤ & HEATMAP 15x15 ─────────
  let spearmanMode = "compare3"; // compare3 | giu_0 | bo_0 | quan_sat

  function renderSpearmanRQ3() {
    const chartContainer = document.getElementById("chartSpearmanBarsSvg");
    const tbody = document.getElementById("tbodySpearmanSensitivity");
    if (!chartContainer) return;

    const items = DATA.spearman_sensitivity.slice();
    // Sắp xếp theo phương án đang chọn
    if (spearmanMode === "bo_0") {
      items.sort((a, b) => a.hang_bo_0 - b.hang_bo_0);
    } else if (spearmanMode === "quan_sat") {
      items.sort((a, b) => a.hang_quan_sat - b.hang_quan_sat);
    } else {
      items.sort((a, b) => a.hang_giu_0 - b.hang_giu_0);
    }

    // Render bảng Bảng 3.9
    if (tbody) {
      tbody.innerHTML = items
        .map((it) => {
          const rankChanged =
            it.hang_giu_0 !== it.hang_bo_0 || it.hang_giu_0 !== it.hang_quan_sat;
          const badgeShift = rankChanged
            ? `<span class="badge badge-amber">#${it.hang_giu_0} → #${it.hang_bo_0} (bỏ 0) | #${it.hang_quan_sat} (QS)</span>`
            : `<span class="badge badge-green">Giữ nguyên #${it.hang_giu_0}</span>`;

          return `
            <tr>
              <td><strong>${escapeHtml(it.bien)}</strong></td>
              <td><strong>${fmtDec(it.giu_0, 4)}</strong> (#${it.hang_giu_0})</td>
              <td><strong>${fmtDec(it.bo_0, 4)}</strong> (#${it.hang_bo_0})</td>
              <td><strong>${fmtDec(it.quan_sat, 4)}</strong> (#${it.hang_quan_sat})</td>
              <td>${badgeShift}</td>
              <td>${fmtInt(it.so_o_khac_0)} <span style="font-size:0.74rem; color:var(--text-muted);">(${fmtInt(it.so_o_diem_0)} ô=0)</span></td>
              <td>${fmtInt(it.so_o_quan_sat)} <span style="font-size:0.74rem; color:var(--text-muted);">(điền ${it.gia_tri_dien}: ${fmtPct(it.ty_le_dien_khuyet_pct, 1)})</span></td>
            </tr>
          `;
        })
        .join("");
    }

    // Vẽ biểu đồ ngang Spearman
    const rowH = spearmanMode === "compare3" ? 30 : 25;
    const topPad = 42;
    const bottomPad = 26;
    const leftPad = 240;
    const rightPad = 280;
    const svgW = 1140;
    const plotW = svgW - leftPad - rightPad;
    const svgH = topPad + items.length * rowH + bottomPad;

    // Thang [-0.10, +0.60]
    const minRho = -0.1;
    const maxRho = 0.6;
    const xZero = leftPad + ((0 - minRho) / (maxRho - minRho)) * plotW;
    const rhoToX = (r) => leftPad + ((r - minRho) / (maxRho - minRho)) * plotW;

    const rowsSvg = items
      .map((it, i) => {
        const y = topPad + i * rowH;
        const rankChanged =
          it.hang_giu_0 !== it.hang_bo_0 || it.hang_giu_0 !== it.hang_quan_sat;

        if (spearmanMode === "compare3") {
          const bars = [
            { val: it.giu_0, rank: it.hang_giu_0, color: "#1a5fb4", dy: 2 },
            { val: it.bo_0, rank: it.hang_bo_0, color: "#d97706", dy: 10 },
            { val: it.quan_sat, rank: it.hang_quan_sat, color: "#0d9488", dy: 18 },
          ];
          const rects = bars
            .map((b) => {
              const xVal = rhoToX(b.val);
              const bx = Math.min(xZero, xVal);
              const bw = Math.max(2, Math.abs(xVal - xZero));
              return `<rect x="${bx}" y="${y + b.dy}" width="${bw}" height="6.5" rx="2" fill="${b.color}" />`;
            })
            .join("");

          const maxX = Math.max(rhoToX(it.giu_0), rhoToX(it.bo_0), rhoToX(it.quan_sat), xZero);
          return `
            <g>
              <text x="${leftPad - 10}" y="${y + 16}" text-anchor="end" font-size="10.8" font-weight="${rankChanged ? "800" : "600"}" fill="currentColor">
                ${escapeHtml(it.bien)}
              </text>
              ${rects}
              <text x="${maxX + 8}" y="${y + 16}" font-size="9.8" font-weight="700" fill="${rankChanged ? "#d97706" : "currentColor"}">
                ${fmtDec(it.giu_0, 4)} (#${it.hang_giu_0}) | Bỏ 0: ${fmtDec(it.bo_0, 4)} (#${it.hang_bo_0}) | QS: ${fmtDec(it.quan_sat, 4)} (#${it.hang_quan_sat})
              </text>
            </g>
          `;
        } else {
          const val =
            spearmanMode === "bo_0"
              ? it.bo_0
              : spearmanMode === "quan_sat"
              ? it.quan_sat
              : it.giu_0;
          const rank =
            spearmanMode === "bo_0"
              ? it.hang_bo_0
              : spearmanMode === "quan_sat"
              ? it.hang_quan_sat
              : it.hang_giu_0;
          const color =
            val < 0
              ? "#dc2626"
              : spearmanMode === "bo_0"
              ? "#d97706"
              : spearmanMode === "quan_sat"
              ? "#0d9488"
              : "#1a5fb4";
          const xVal = rhoToX(val);
          const bx = Math.min(xZero, xVal);
          const bw = Math.max(2, Math.abs(xVal - xZero));
          return `
            <g>
              <text x="${leftPad - 10}" y="${y + 14}" text-anchor="end" font-size="10.8" font-weight="700" fill="currentColor">
                #${rank}. ${escapeHtml(it.bien)}
              </text>
              <rect x="${bx}" y="${y + 2}" width="${bw}" height="16" rx="3" fill="${color}" />
              <text x="${Math.max(xVal, xZero) + 8}" y="${y + 14}" font-size="10.5" font-weight="800" fill="currentColor">
                ρ = ${fmtDec(val, 4)} (Hạng #${rank})
              </text>
            </g>
          `;
        }
      })
      .join("");

    chartContainer.innerHTML = `
      <svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="Biểu đồ tương quan hạng Spearman của 14 điểm dịch vụ">
        <rect x="${leftPad}" y="10" width="12" height="12" rx="2" fill="#1a5fb4" />
        <text x="${leftPad + 16}" y="20" font-size="10.8" font-weight="700" fill="currentColor">(1) Giữ mã 0 trên PJ21.csv (n=119.092)</text>
        <rect x="${leftPad + 235}" y="10" width="12" height="12" rx="2" fill="#d97706" />
        <text x="${leftPad + 251}" y="20" font-size="10.8" font-weight="700" fill="currentColor">(2) Loại mã 0 (0 → NaN) trên PJ21.csv</text>
        <rect x="${leftPad + 475}" y="10" width="12" height="12" rx="2" fill="#0d9488" />
        <text x="${leftPad + 491}" y="20" font-size="10.8" font-weight="700" fill="currentColor">(3) Chỉ ô quan sát hợp lệ trước điền khuyết</text>

        <line x1="${xZero}" y1="${topPad - 6}" x2="${xZero}" y2="${svgH - bottomPad + 4}" stroke="#64748b" stroke-width="1.3" />
        ${rowsSvg}
      </svg>
    `;
  }

  function spearmanColor(val) {
    // Thang màu RdBu_r cho [-1, 1]
    const v = Math.max(-1, Math.min(1, Number(val)));
    if (v >= 0) {
      const t = Math.pow(v, 0.85);
      const r = Math.round(248 - t * (248 - 22));
      const g = Math.round(250 - t * (250 - 78));
      const b = Math.round(252 - t * (252 - 159));
      return { bg: `rgb(${r},${g},${b})`, fg: v > 0.44 ? "#ffffff" : "#0f172a" };
    } else {
      const t = Math.pow(Math.abs(v), 0.85);
      const r = Math.round(248 - t * (248 - 185));
      const g = Math.round(250 - t * (250 - 28));
      const b = Math.round(252 - t * (252 - 28));
      return { bg: `rgb(${r},${g},${b})`, fg: Math.abs(v) > 0.44 ? "#ffffff" : "#0f172a" };
    }
  }

  function renderSpearmanHeatmap() {
    const container = document.getElementById("heatmapContainer");
    const infoBox = document.getElementById("heatmapHoverInfo");
    if (!container) return;

    const labels = DATA.spearman_matrix.labels;
    const values = DATA.spearman_matrix.values;

    const shortName = (s) =>
      s
        .replace("Departure and Arrival Time Convenience", "Time Convenience")
        .replace("In-flight Entertainment", "In-flight Entert.")
        .replace("In-flight Wifi Service", "In-flight Wifi")
        .replace("Ease of Online Booking", "Online Booking");

    const theadCells = labels
      .map((l) => `<th title="${escapeHtml(l)}">${escapeHtml(shortName(l))}</th>`)
      .join("");

    const tbodyRows = labels
      .map((rowLbl, i) => {
        const tds = values[i]
          .map((val, j) => {
            const c = spearmanColor(val);
            const isTarget = (i === 14 || j === 14) && i !== j;
            return `
              <td
                class="hm-cell ${isTarget ? "target-cell" : ""}"
                data-r="${i}"
                data-c="${j}"
                style="background:${c.bg}; color:${c.fg};"
              >${fmtDec(val, 2)}</td>
            `;
          })
          .join("");
        return `
          <tr>
            <th title="${escapeHtml(rowLbl)}">${escapeHtml(shortName(rowLbl))}</th>
            ${tds}
          </tr>
        `;
      })
      .join("");

    container.innerHTML = `
      <table class="heatmap-table" aria-label="Ma trận tương quan Spearman 15x15">
        <thead>
          <tr>
            <th></th>
            ${theadCells}
          </tr>
        </thead>
        <tbody>
          ${tbodyRows}
        </tbody>
      </table>
    `;

    container.querySelectorAll(".hm-cell").forEach((td) => {
      td.addEventListener("mouseenter", (evt) => {
        const r = Number(td.getAttribute("data-r"));
        const c = Number(td.getAttribute("data-c"));
        const v = values[r][c];
        const l1 = labels[r];
        const l2 = labels[c];
        const desc =
          r === c
            ? "Đường chéo chính (ρ = 1,0000)"
            : r === 14 || c === 14
            ? "Tương quan với biến mục tiêu nhị phân Satisfaction (0/1)"
            : Math.abs(v) >= 0.45
            ? "Tương quan nội bộ mạnh giữa hai điểm chạm dịch vụ (cần lưu ý đa cộng tuyến ở Chương 4)"
            : "Tương quan hạng Spearman giữa hai tiêu chí dịch vụ";

        const html = `
          <div><strong>${escapeHtml(l1)}</strong> × <strong>${escapeHtml(l2)}</strong></div>
          <div style="font-size:1rem; font-weight:800; color:#38bdf8; margin:0.2rem 0;">Spearman ρ = ${fmtDec(v, 4)}</div>
          <div style="color:#cbd5e1;">${escapeHtml(desc)}</div>
        `;
        showTooltip(evt, html);
        if (infoBox) {
          infoBox.innerHTML = `<strong>Đang chọn cặp biến:</strong> <code>${escapeHtml(l1)}</code> × <code>${escapeHtml(l2)}</code> ➔ <strong>Spearman &rho; = ${fmtDec(v, 4)}</strong> (${escapeHtml(desc)}).`;
        }
      });
      td.addEventListener("mousemove", moveTooltip);
      td.addEventListener("mouseleave", hideTooltip);
    });
  }

  document.querySelectorAll("#spearmanSchemeGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#spearmanSchemeGroup .pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      spearmanMode = btn.getAttribute("data-spmode") || "compare3";
      renderSpearmanRQ3();
    });
  });

  // ── 9. PHẦN 6: SAO CHÉP MÃ BĂM SHA-256 ───────────────────────────────────
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-copy") || "";
      navigator.clipboard?.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = "✓ Đã chép!";
        setTimeout(() => {
          btn.textContent = orig;
        }, 1600);
      });
    });
  });

  // ── 10. KHỞI CHẠY TOÀN BỘ DASHBOARD ──────────────────────────────────────
  function initDashboard() {
    renderChartLabelStructure();
    renderChartMemoryUsage();
    renderAuditTableAndChart();
    initExamplesSection();
    renderSegmentsRQ1();
    renderDelayRQ2();
    renderAgeAndBoxRQ2();
    renderSpearmanRQ3();
    renderSpearmanHeatmap();
    goToSection(1, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDashboard);
  } else {
    initDashboard();
  }
})();
