document.addEventListener('DOMContentLoaded', () => {
  // Default templates to pre-fill the workspace
  const defaultTemplate = [
    {
      "type": "title",
      "title": "Tio Haidar Hanif",
      "subtitle": "Vibe coder • Tukang Penasaran • Automation Enthusiast",
      "authors": "Universitas Telkom\ntio@example.com",
      "notes": "Opening: Perkenalkan diri, jelaskan ketertarikan di bidang software engineering, vibe coding, dan otomasi."
    },
    {
      "type": "content",
      "title": "Core Expertise & Software Skills",
      "bullets": [
        "Backend Web Development:",
        "  ▪ Laravel (PHP) & Express.js (Node.js)",
        "  ▪ SQLite, MySQL, PostgreSQL",
        "Otomasi & Scripting:",
        "  ▪ Python Scripting & Telegram Bot API",
        "  ▪ VBA & Google Apps Script (Spreadsheet Automation)"
      ],
      "notes": "Terangkan teknologi yang sering digunakan sehari-hari untuk ngoding."
    },
    {
      "type": "split",
      "title": "Perbandingan Kecepatan Pembuatan Surat",
      "bullets": [
        "Surat Generator menghemat waktu administrasi secara drastis.",
        "Mencegah kesalahan ketik data penerima surat."
      ],
      "rightType": "table",
      "table": {
        "headers": ["Metode", "Waktu Pengerjaan", "Kesalahan Input"],
        "rows": [
          ["Manual Word", "10 - 15 Menit", "Sering Terjadi"],
          ["Google Doc Script", "1 - 2 Menit", "Minim"],
          ["Surat-Generator Web", "10 Detik", "Hampir 0%"]
        ]
      },
      "notes": "Tunjukkan efisiensi tools yang pernah dibuat dibandingkan pengerjaan manual."
    },
    {
      "type": "split",
      "title": "Keaktifan Anggota Kelas",
      "bullets": [
        "Grafik menunjukkan jumlah anggota aktif yang berpartisipasi dalam pengerjaan tugas.",
        "Menggunakan Telegram bot pengingat tugas otomatis."
      ],
      "rightType": "chart",
      "chart": {
        "type": "bar",
        "labels": ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
        "values": [24, 28, 35, 42]
      },
      "notes": "Jelaskan pengaruh Bot Telegram Pengingat terhadap keaktifan kelas."
    },
    {
      "type": "split",
      "title": "Evaluasi & Kesimpulan Akhir",
      "bullets": [
        "Otomasi merubah administrative chaos menjadi keteraturan.",
        "Terus berinovasi mencari solusi efisien untuk masalah sehari-hari."
      ],
      "rightType": "metric",
      "metric": {
        "value": "100%",
        "label": "Akurasi Distribusi Laporan Otomatis"
      },
      "notes": "Closing: Tekankan core values Tio yaitu efisiensi, otomasi, dan inovasi."
    }
  ];

  // DOM Elements
  const codeEditor = document.getElementById('code-editor');
  const editorStatus = document.getElementById('editor-status');
  const styleSelect = document.getElementById('style-select');
  const activeStyleBadge = document.getElementById('active-style-badge');
  const btnExportPPT = document.getElementById('btn-export-ppt');
  const btnPrevSlide = document.getElementById('btn-prev-slide');
  const btnNextSlide = document.getElementById('btn-next-slide');
  const slideJumpSelect = document.getElementById('slide-jump-select');
  const previewContainer = document.getElementById('slide-preview-container');
  const speakerNotesBox = document.getElementById('speaker-notes-box');
  
  const btnQuickRef = document.getElementById('btn-quick-ref');
  const btnResetTemplate = document.getElementById('btn-reset-template');
  const schemaModal = document.getElementById('schema-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');

  // State
  let slidesData = [];
  let currentSlideIdx = 0;
  let selectedStyle = 'Default';

  // Load initial code from localStorage or default
  const savedCode = localStorage.getItem('som_slides_json');
  if (savedCode) {
    codeEditor.value = savedCode;
  } else {
    codeEditor.value = JSON.stringify(defaultTemplate, null, 2);
  }

  // Initialize
  validateAndRender();

  // ResizeObserver to scale slide preview canvas dynamically
  const resizeObserver = new ResizeObserver(() => {
    if (typeof window.updateSlideScale === 'function') {
      window.updateSlideScale();
    }
  });
  if (previewContainer) {
    resizeObserver.observe(previewContainer);
    if (previewContainer.parentElement) {
      resizeObserver.observe(previewContainer.parentElement);
    }
  }
  // Initial scale calculation trigger
  if (typeof window.updateSlideScale === 'function') {
    window.updateSlideScale();
  }

  // Event Listeners
  codeEditor.addEventListener('input', () => {
    validateAndRender();
  });

  styleSelect.addEventListener('change', (e) => {
    selectedStyle = e.target.value;
    const text = styleSelect.options[styleSelect.selectedIndex].text;
    activeStyleBadge.textContent = text.replace('★ ', '').split(':')[0].toUpperCase();
    localStorage.setItem('som_selected_style', selectedStyle);
    updatePreview();
  });

  // Retrieve last selected style if present
  const savedStyle = localStorage.getItem('som_selected_style');
  if (savedStyle && [...styleSelect.options].some(o => o.value === savedStyle)) {
    styleSelect.value = savedStyle;
    selectedStyle = savedStyle;
    const text = styleSelect.options[styleSelect.selectedIndex].text;
    activeStyleBadge.textContent = text.replace('★ ', '').split(':')[0].toUpperCase();
  }

  // Slide Navigation
  btnPrevSlide.addEventListener('click', () => {
    if (currentSlideIdx > 0) {
      currentSlideIdx--;
      slideJumpSelect.value = currentSlideIdx;
      updatePreview();
    }
  });

  btnNextSlide.addEventListener('click', () => {
    if (currentSlideIdx < slidesData.length - 1) {
      currentSlideIdx++;
      slideJumpSelect.value = currentSlideIdx;
      updatePreview();
    }
  });

  slideJumpSelect.addEventListener('change', (e) => {
    currentSlideIdx = parseInt(e.target.value);
    updatePreview();
  });

  // Modals
  btnQuickRef.addEventListener('click', () => {
    schemaModal.classList.remove('hidden');
  });

  btnCloseModal.addEventListener('click', () => {
    schemaModal.classList.add('hidden');
  });

  schemaModal.addEventListener('click', (e) => {
    if (e.target === schemaModal) {
      schemaModal.classList.add('hidden');
    }
  });

  btnResetTemplate.addEventListener('click', () => {
    if (confirm('Apakah kamu yakin ingin mereset kode editor ke template bawaan? Perubahan kamu akan hilang.')) {
      codeEditor.value = JSON.stringify(defaultTemplate, null, 2);
      currentSlideIdx = 0;
      validateAndRender();
    }
  });

  // PPTX Export Click
  btnExportPPT.addEventListener('click', () => {
    if (slidesData.length === 0) {
      alert('Tidak ada data slide yang valid untuk diekspor!');
      return;
    }

    btnExportPPT.disabled = true;
    const originalText = btnExportPPT.innerHTML;
    btnExportPPT.innerHTML = '⌛ Exporting...';

    // Call the generation function inside ppt-generator.js
    if (typeof generatePresentation === 'function') {
      generatePresentation(slidesData, selectedStyle)
        .then(() => {
          btnExportPPT.disabled = false;
          btnExportPPT.innerHTML = '✅ Downloaded!';
          setTimeout(() => { btnExportPPT.innerHTML = originalText; }, 3000);
        })
        .catch((err) => {
          console.error('Export error:', err);
          alert('Gagal mengekspor PowerPoint: ' + err.message);
          btnExportPPT.disabled = false;
          btnExportPPT.innerHTML = '❌ Gagal!';
          setTimeout(() => { btnExportPPT.innerHTML = originalText; }, 3000);
        });
    } else {
      alert('Export engine tidak ditemukan!');
      btnExportPPT.disabled = false;
      btnExportPPT.innerHTML = originalText;
    }
  });

  // Validation and Rendering Pipeline
  function validateAndRender() {
    const rawValue = codeEditor.value;
    try {
      const parsed = JSON.parse(rawValue);
      if (!Array.isArray(parsed)) {
        throw new Error('JSON harus berupa Array of Objects.');
      }

      slidesData = parsed;
      localStorage.setItem('som_slides_json', rawValue);

      // Update Status Badge
      editorStatus.classList.remove('border-red-500/20', 'bg-red-500/10', 'text-red-400');
      editorStatus.classList.add('border-green-500/20', 'bg-green-500/10', 'text-green-400');
      editorStatus.innerHTML = '<span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> JSON Valid';

      // Clamp active index
      if (currentSlideIdx >= slidesData.length) {
        currentSlideIdx = Math.max(0, slidesData.length - 1);
      }

      // Update Select menu for jumping
      populateSlideSelector();

      // Render active slide
      updatePreview();

    } catch (err) {
      // Update Status Badge to show error
      editorStatus.classList.remove('border-green-500/20', 'bg-green-500/10', 'text-green-400');
      editorStatus.classList.add('border-red-500/20', 'bg-red-500/10', 'text-red-400');
      editorStatus.innerHTML = `<span class="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Error: ${err.message}`;
      slidesData = [];
    }
  }

  function populateSlideSelector() {
    slideJumpSelect.innerHTML = '';
    slidesData.forEach((slide, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      const slideNum = String(idx + 1).padStart(2, '0');
      const slideTitle = slide.title ? (slide.title.substring(0, 20) + (slide.title.length > 20 ? '...' : '')) : 'Untitled';
      opt.textContent = `Slide ${slideNum}: ${slideTitle}`;
      slideJumpSelect.appendChild(opt);
    });
    slideJumpSelect.value = currentSlideIdx;
  }

  function updatePreview() {
    // Handle empty slides state
    if (slidesData.length === 0 || !slidesData[currentSlideIdx]) {
      previewContainer.innerHTML = '<div class="w-full h-full bg-[#1e1e1e] text-neutral-500 flex items-center justify-center font-mono text-sm">Pratinjau tidak tersedia</div>';
      speakerNotesBox.textContent = '';
      btnPrevSlide.disabled = true;
      btnNextSlide.disabled = true;
      return;
    }

    const activeSlide = slidesData[currentSlideIdx];

    // Enable/Disable pagination buttons
    btnPrevSlide.disabled = (currentSlideIdx === 0);
    btnNextSlide.disabled = (currentSlideIdx === slidesData.length - 1);

    // Update speaker notes text
    speakerNotesBox.textContent = activeSlide.notes || '(Tidak ada naskah presenter/speaker notes untuk slide ini)';

    // Call the visual renderer module
    if (typeof renderSlidePreview === 'function') {
      renderSlidePreview(activeSlide, selectedStyle, previewContainer, currentSlideIdx + 1, slidesData.length);
      if (typeof window.updateSlideScale === 'function') {
        window.updateSlideScale();
      }
    } else {
      previewContainer.innerHTML = '<div class="w-full h-full bg-[#1e1e1e] text-neutral-500 flex items-center justify-center font-mono text-sm">Renderer function not found!</div>';
    }
  }
});
