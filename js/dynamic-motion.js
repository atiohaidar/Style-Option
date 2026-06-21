/**
 * Dynamic Motion Graphics Engine
 * Reads JSON Slides Object Model (SOM) and proceduraly renders motion graphics.
 */

const THEMES = {
  Default: { bg: '#222222', accent: '#BFFF00', isDark: true, font: "'Poppins', sans-serif" },
  A: { bg: '#FFDEE9', accent: '#FF69B4', isDark: false, font: "'Space Grotesk', sans-serif" },
  B: { bg: '#0F172A', accent: '#3B82F6', isDark: true, font: "'Inter', sans-serif" },
  // Fallback defaults for other themes to keep code lightweight for now
};

function getTheme(id) {
  return THEMES[id] || THEMES.Default;
}

// Math/Spring helper
function getSpringValue(t, tension = 150, friction = 12) {
  if (t < 0) return 0;
  const w0 = Math.sqrt(tension);
  const zeta = friction / (2 * Math.sqrt(tension));
  if (zeta < 1) {
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    const a = -zeta * w0;
    const b = (zeta * w0) / wd;
    return 1 - Math.exp(a * t) * (Math.cos(wd * t) + b * Math.sin(wd * t));
  }
  return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  if (!text) return 0;
  const words = text.split(' ');
  let line = '';
  let lines = [];
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());
  for (let k = 0; k < lines.length; k++) {
    ctx.fillText(lines[k], x, y + (k * lineHeight));
  }
  return lines.length * lineHeight;
}

class DynamicVideoEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    
    // Explicit fixed resolution
    this.canvas.width = 1280;
    this.canvas.height = 720;
    
    this.slides = [];
    this.themeId = 'Default';
    
    this.isPlaying = false;
    this.frame = 0;
    this.framesPerSlide = 150; // 2.5 seconds per slide at 60fps
    this.totalFrames = 0;
    this.timerId = null;
    
    this.onFrameCallbacks = [];
  }

  loadData(jsonArray, themeId = 'Default') {
    this.slides = Array.isArray(jsonArray) ? jsonArray : [];
    this.themeId = themeId;
    this.totalFrames = this.slides.length * this.framesPerSlide;
    this.setFrame(0);
  }

  registerFrameCallback(cb) {
    this.onFrameCallbacks.push(cb);
  }

  setFrame(f) {
    if (this.totalFrames === 0) return;
    this.frame = Math.max(0, Math.min(this.totalFrames - 1, f));
    this.draw();
    this.onFrameCallbacks.forEach(cb => cb(this.frame));
  }

  play() {
    if (this.isPlaying || this.totalFrames === 0) return;
    this.isPlaying = true;
    const tick = () => {
      if (!this.isPlaying) return;
      this.frame++;
      if (this.frame >= this.totalFrames) {
        this.frame = 0; // loop
      }
      this.draw();
      this.onFrameCallbacks.forEach(cb => cb(this.frame));
      this.timerId = requestAnimationFrame(tick);
    };
    this.timerId = requestAnimationFrame(tick);
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      cancelAnimationFrame(this.timerId);
      this.timerId = null;
    }
  }

  draw() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;
    
    if (this.slides.length === 0) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#555';
      ctx.font = '24px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('No JSON data loaded', w/2, h/2);
      return;
    }

    const slideIdx = Math.floor(this.frame / this.framesPerSlide);
    const slideFrame = this.frame % this.framesPerSlide;
    const t = slideFrame / 60; // time in seconds
    const slide = this.slides[slideIdx];
    const theme = getTheme(this.themeId);

    // Wipe background
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, w, h);

    const textColor = theme.isDark ? '#FFFFFF' : '#111827';
    const mutedColor = theme.isDark ? '#94A3B8' : '#6B7280';

    ctx.save();
    
    // Draw based on type dynamically
    if (slide.type === 'title') {
      const titlePop = getSpringValue(t - 0.2, 120, 10);
      const subPop = getSpringValue(t - 0.4, 100, 12);
      
      ctx.textAlign = 'center';
      
      // Title
      ctx.translate(w/2, h/2 - 40 + Math.sin(t*2)*10);
      ctx.scale(titlePop, titlePop);
      ctx.fillStyle = textColor;
      ctx.font = `bold 64px ${theme.font}`;
      ctx.fillText(slide.title || '', 0, 0);
      
      // Subtitle
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = Math.min(1, subPop);
      ctx.translate(w/2, h/2 + 40 + Math.cos(t*1.5)*5);
      ctx.fillStyle = theme.accent;
      ctx.font = `24px monospace`;
      ctx.fillText(slide.subtitle || '', 0, 0);
      
      // Authors
      if (slide.authors) {
         ctx.setTransform(1, 0, 0, 1, 0, 0);
         const authPop = getSpringValue(t - 0.6, 90, 15);
         ctx.globalAlpha = Math.min(1, authPop);
         ctx.translate(w/2, h - 100);
         ctx.fillStyle = mutedColor;
         ctx.font = `18px sans-serif`;
         const authorsArr = slide.authors.split('\n');
         authorsArr.forEach((txt, idx) => {
            ctx.fillText(txt, 0, idx * 25);
         });
      }

    } else if (slide.type === 'content' || slide.type === 'split') {
      
      // Header Slide-In
      const headerX = (1 - getSpringValue(t - 0.1, 140, 14)) * -100;
      ctx.translate(100 + headerX, 120);
      ctx.fillStyle = textColor;
      ctx.font = `bold 48px ${theme.font}`;
      ctx.textAlign = 'left';
      ctx.fillText(slide.title || '', 0, 0);
      
      // Underline expand
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      const lineW = getSpringValue(t - 0.3, 100, 15) * 800;
      ctx.fillStyle = theme.accent;
      ctx.fillRect(100, 150, lineW, 4);
      
      // Bullets dynamic cascade
      if (slide.bullets) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.font = `24px sans-serif`;
        
        slide.bullets.forEach((b, i) => {
          const bTime = t - 0.4 - (i * 0.15); // stagger delay
          const bPop = getSpringValue(bTime, 120, 12);
          if (bPop <= 0) return;
          
          ctx.save();
          ctx.globalAlpha = Math.min(1, bPop);
          ctx.translate(100 - (1 - bPop)*50, 220 + (i * 45));
          
          // Render bullet content
          let indent = 0;
          let text = b;
          if (b.startsWith('  ▪')) {
            indent = 40; text = b.substring(3).trim();
            ctx.fillStyle = theme.accent;
            ctx.fillText('▪', indent, 0);
            ctx.fillStyle = mutedColor;
            ctx.font = `20px sans-serif`;
            ctx.fillText(text, indent + 25, 0);
          } else {
             ctx.fillStyle = theme.accent;
             ctx.fillText('▸', 0, 0);
             ctx.fillStyle = textColor;
             ctx.fillText(text, 30, 0);
          }
          ctx.restore();
        });
      }
      
      // Right side Split
      if (slide.type === 'split') {
         ctx.save();
         const splitPop = getSpringValue(t - 0.6, 100, 14);
         ctx.globalAlpha = Math.min(1, splitPop);
         ctx.translate(850, 200 + (1 - splitPop)*50);
         
         ctx.fillStyle = theme.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
         ctx.fillRect(0, 0, 350, 400);
         
         if (slide.rightType === 'metric' && slide.metric) {
            ctx.fillStyle = theme.accent;
            ctx.font = `bold 72px ${theme.font}`;
            ctx.textAlign = 'center';
            ctx.fillText(slide.metric.value, 175, 180);
            
            ctx.fillStyle = textColor;
            ctx.font = `18px sans-serif`;
            wrapText(ctx, slide.metric.label, 175, 240, 300, 24);
         } else {
            ctx.fillStyle = theme.accent;
            ctx.font = '24px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(`[${slide.rightType.toUpperCase()} ANIMATION]`, 175, 200);
         }
         ctx.restore();
      }
    }
    
    ctx.restore();
  }

  exportVideo(onProgress, onComplete) {
    if (this.totalFrames === 0) return;
    this.pause();
    this.isExporting = true;
    
    const stream = this.canvas.captureStream(60);
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
    const chunks = [];
    
    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      onComplete(URL.createObjectURL(blob));
      this.isExporting = false;
    };
    
    recorder.start();
    let exportFrame = 0;
    
    const renderNextFrame = () => {
      if (exportFrame >= this.totalFrames) {
        recorder.stop();
        return;
      }
      this.frame = exportFrame;
      this.draw();
      
      if (exportFrame % 10 === 0) {
        onProgress(Math.floor((exportFrame / this.totalFrames) * 100));
      }
      
      exportFrame++;
      // Give UI a tiny break, then run next frame
      setTimeout(renderNextFrame, 0); 
    };
    
    renderNextFrame();
  }
}

// Controller Logic
document.addEventListener('DOMContentLoaded', () => {
  const engine = new DynamicVideoEngine('motion-canvas');
  
  const jsonInput = document.getElementById('json-input');
  const btnSync = document.getElementById('btn-sync');
  const styleSelect = document.getElementById('style-select');
  const scrubber = document.getElementById('timeline-scrubber');
  const btnPlay = document.getElementById('btn-play');
  const btnReset = document.getElementById('btn-reset');
  const playIcon = document.getElementById('play-icon');
  const playText = document.getElementById('play-text');
  const timeReadout = document.getElementById('time-readout');
  const secReadout = document.getElementById('sec-readout');
  const btnExport = document.getElementById('btn-export-video');
  const loadingOverlay = document.getElementById('loading-overlay');
  const renderProgress = document.getElementById('render-progress');
  const renderPercent = document.getElementById('render-percent');
  const recIndicator = document.getElementById('rec-indicator');

  const DEFAULT_DEMO_JSON = JSON.stringify([
    {
      "type": "title",
      "title": "Tio Haidar Hanif",
      "subtitle": "Vibe coder • Tukang Penasaran • Automation Enthusiast",
      "authors": "Universitas Telkom\ntio@example.com",
      "notes": "Opening: Perkenalkan diri, jelaskan ketertarikan di bidang software engineering."
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
        "  ▪ VBA & Google Apps Script"
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
      "notes": "Tunjukkan efisiensi tools yang pernah dibuat."
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
  ], null, 2);

  function syncFromEditor() {
    try {
      let data = localStorage.getItem('som_slides_json') || localStorage.getItem('slidesAsCode_Data');
      if (!data) {
        data = DEFAULT_DEMO_JSON;
      }
      
      jsonInput.value = data;
      const parsedData = JSON.parse(data);
      engine.loadData(parsedData, styleSelect.value);
      scrubber.max = Math.max(0, engine.totalFrames - 1);
    } catch (e) {
      console.error("Invalid JSON, falling back to demo template", e);
      jsonInput.value = DEFAULT_DEMO_JSON;
      engine.loadData(JSON.parse(DEFAULT_DEMO_JSON), styleSelect.value);
      scrubber.max = Math.max(0, engine.totalFrames - 1);
    }
  }

  // Bind UI Events
  btnSync.addEventListener('click', syncFromEditor);
  
  jsonInput.addEventListener('input', () => {
    try {
      const arr = JSON.parse(jsonInput.value);
      engine.loadData(arr, styleSelect.value);
      scrubber.max = Math.max(0, engine.totalFrames - 1);
    } catch(e) { } // Ignore parse errors while typing
  });

  styleSelect.addEventListener('change', () => {
    try {
      engine.loadData(JSON.parse(jsonInput.value), styleSelect.value);
    } catch(e) {}
  });

  engine.registerFrameCallback((frame) => {
    scrubber.value = frame;
    timeReadout.textContent = `F ${String(frame).padStart(4, '0')} / ${engine.totalFrames}`;
    secReadout.textContent = `(${(frame / 60).toFixed(2)}s)`;
  });

  function syncPlayButton() {
    if (engine.isPlaying) {
      playIcon.textContent = "⏸";
      playText.textContent = "Pause";
    } else {
      playIcon.textContent = "▶";
      playText.textContent = "Play";
    }
  }

  btnPlay.addEventListener('click', () => {
    engine.isPlaying ? engine.pause() : engine.play();
    syncPlayButton();
  });

  btnReset.addEventListener('click', () => {
    engine.pause();
    syncPlayButton();
    engine.setFrame(0);
  });

  scrubber.addEventListener('input', (e) => {
    engine.pause();
    syncPlayButton();
    engine.setFrame(parseInt(e.target.value));
  });

  btnExport.addEventListener('click', () => {
    loadingOverlay.classList.remove('hidden');
    recIndicator.style.display = 'block';
    
    engine.exportVideo(
      (pct) => {
        renderProgress.style.width = pct + '%';
        renderPercent.textContent = pct + '% Completed';
      },
      (url) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = `dynamic-slides.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        loadingOverlay.classList.add('hidden');
        recIndicator.style.display = 'none';
        engine.setFrame(0);
      }
    );
  });

  // Init
  syncFromEditor();
});
