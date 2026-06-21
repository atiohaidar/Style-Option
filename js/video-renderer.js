/**
 * Video Renderer for Style Guide Showcase (High Precision Transition-Fixed Version)
 * Handles HTML5 Canvas 2D drawings, spring physics, custom visual option styling,
 * transitions, playback timing, and WebM exports.
 */

// Core Design Tokens
const PALETTE = {
  bgPrimary: '#222222',
  bgUI: '#494949',
  uiElement: '#525252',
  accentBorder: '#656565',
  textBody: '#AAAAAA',
  accentHighlight: '#BFFF00'
};

// 18 Style Guides Data with Specific High-Contrast Accents
const VIDEO_STYLES_RAW = [
  {
    id: 'A', label: 'Neo-Pop',
                font: 'Space Grotesk, sans-serif',
    heading: 'BELAJAR LEBIH SIMPLE & SERU',
    subtitle: 'Platform edukasi tanpa basa-basi. Desain berani, langsung ke inti.',
        code: `export default makeScene2D(function* (view) {
  const card = createRef<Rect>();
  view.add(<Rect ref={card} fill="#FFEB3B" lineWidth={4} stroke="#000000" />);
  yield* card().scale(1, 0.8, easeOutBack);
});`
  },
  {
    id: 'B', label: 'Tech Glass',
                font: 'Inter, sans-serif',
    heading: 'Innovation in Learning',
    subtitle: 'Experience the future of education with a sleek, immersive interface.',
        code: `export default makeScene2D(function* (view) {
  const glass = createRef<Rect>();
  view.add(<Rect ref={glass} fill="rgba(30, 41, 59, 0.7)" blur={20} />);
  yield* glass().opacity(1, 1, easeInOutSine);
});`
  },
  {
    id: 'C', label: 'Swiss Editorial',
                font: 'Georgia, serif',
    heading: 'Simplify your learning curve.',
    subtitle: 'Clarity, whitespace, and typography. No distractions, pure knowledge.',
        code: `export default makeScene2D(function* (view) {
  const line = createRef<Line>();
  view.add(<Line ref={line} points={[[0, 0], [400, 0]]} stroke="#1A1A1A" />);
  yield* line().end(1, 1.2);
});`
  },
  {
    id: 'D', label: 'Modern SaaS',
                font: 'Inter, sans-serif',
    heading: 'Learning made effortless.',
    subtitle: 'Platform modern. Desain bersih, fitur lengkap, dan menyenangkan.',
        code: `export default makeScene2D(function* (view) {
  const panel = createRef<Rect>();
  view.add(<Rect ref={panel} radius={16} fill="#FFFFFF" shadowColor="rgba(0,0,0,0.05)" />);
  yield* panel().y(0, 0.8, easeOutCubic);
});`
  },
  {
    id: 'E', label: 'Retro Terminal',
                font: 'Fira Code, monospace',
    heading: '> INITIALIZE CORE...',
    subtitle: 'System initialized. Loading education modules... [OK]',
        code: `export default makeScene2D(function* (view) {
  const terminalText = createRef<Txt>();
  view.add(<Txt ref={terminalText} text="> " fill="#22C55E" font="Courier New" />);
  yield* terminalText().text("> System initialized. [OK]", 1.5);
});`
  },
  {
    id: 'F', label: 'Organic & Soft',
                font: 'Inter, sans-serif',
    heading: 'Tumbuh Bersama Alam.',
    subtitle: 'Belajar dengan suasana yang tenang, natural, dan menyegarkan pikiran.',
        code: `export default makeScene2D(function* (view) {
  const blob = createRef<Path>();
  view.add(<Path ref={blob} fill="#E3EBCB" data="M 0,0 C 50,20 ..." />);
  yield* blob().scale(1.2, 2.0).to(1.0, 1.0);
});`
  },
  {
    id: 'G', label: 'Engineer Blueprint',
                font: 'Fira Code, monospace',
    heading: 'Engineered for Performance.',
    subtitle: '// Platform belajar untuk problem solver. Langsung eksekusi.',
        code: `export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  view.add(<Grid ref={grid} stroke="#2563EB" spacing={40} opacity={0.3} />);
  yield* grid().spacing(80, 1.5, easeInOutCubic);
});`
  },
  {
    id: 'H', label: 'Pure Utility',
                font: 'Poppins, sans-serif',
    heading: 'DO THE WORK.',
    subtitle: 'Stop wasting time. We automate so you can focus on innovation.',
        code: `export default makeScene2D(function* (view) {
  const box = createRef<Rect>();
  view.add(<Rect ref={box} fill="#FFFFFF" stroke="#000000" lineWidth={6} />);
  yield* box().width(300, 0.5);
});`
  },
  {
    id: 'I', label: 'AI Innovator',
                font: 'Inter, sans-serif',
    heading: 'Unlock Your Potential.',
    subtitle: 'An intelligent platform for the curious mind. Powered by advanced learning algorithms.',
        code: `export default makeScene2D(function* (view) {
  const node = createRef<Circle>();
  view.add(<Circle ref={node} fill="#A855F7" shadowBlur={30} />);
  yield* node().scale(1.5, 1).to(1.0, 1);
});`
  },
  {
    id: 'J', label: 'Research Focused',
                font: 'Georgia, serif',
    heading: 'Research-Driven Backend.',
    subtitle: 'Mengutamakan validitas data, analisis terstruktur, dan performa optimal.',
        code: `export default makeScene2D(function* (view) {
  const highlight = createRef<Rect>();
  view.add(<Rect ref={highlight} fill="#FEF08A" zIndex={-1} scaleX={0} />);
  yield* highlight().scaleX(1, 0.8, easeOutExpo);
});`
  },
  {
    id: 'K', label: 'Brand Identity',
                font: 'Fira Code, monospace',
    heading: 'Tio Haidar Hanif.',
    subtitle: 'Vibe coder & Tukang Penasaran. Fokus pada sistem yang highly performant.',
        code: `export default makeScene2D(function* (view) {
  const codeBlock = createRef<Rect>();
  view.add(<Rect ref={codeBlock} fill="#112240" stroke="#233554" />);
  yield* codeBlock().x(0, 1.0, easeOutBack);
});`
  },
  {
    id: 'L', label: 'Dashboard',
                font: 'Inter, sans-serif',
    heading: 'System Automation Dashboard',
    subtitle: 'SaaS product interface with sidebar navigation, stat cards, and activity feed.',
        code: `export default makeScene2D(function* (view) {
  const bar = createRef<Rect>();
  view.add(<Rect ref={bar} fill="#2ECC71" height={0} />);
  yield* bar().height(150, 1.2, easeOutBounce);
});`
  },
  {
    id: 'M', label: 'Living Grid',
                font: 'Space Grotesk, sans-serif',
    heading: 'TIO HAIDAR PORTFOLIO_V2',
    subtitle: 'Bento grid layout. Architecting digital chaos into order.',
        code: `export default makeScene2D(function* (view) {
  const gridItem = createRef<Rect>();
  view.add(<Rect ref={gridItem} radius={12} fill="#FFFFFF" scale={0} />);
  yield* gridItem().scale(1, 0.8, easeOutElastic);
});`
  },
  {
    id: 'N', label: 'The Chronicle',
                font: 'Georgia, serif',
    heading: 'THE TIO CHRONICLE',
    subtitle: 'Providing Reliable Backend Solutions Since 2024. Tech news bulletin.',
        code: `export default makeScene2D(function* (view) {
  const line = createRef<Line>();
  view.add(<Line ref={line} points={[[0, 0], [500, 0]]} stroke="#1A1A1A" lineWidth={3} />);
  yield* line().position.y(100, 1.0);
});`
  },
  {
    id: 'O', label: 'Royal Luxury',
                font: 'Georgia, serif',
    heading: 'Crafting Timeless Legacies.',
    subtitle: 'The pinnacle of sophistication. Precision meets prestige in every pixel.',
        code: `export default makeScene2D(function* (view) {
  const border = createRef<Rect>();
  view.add(<Rect ref={border} stroke="#D4AF37" lineWidth={2} margin={20} />);
  yield* border().lineWidth(4, 2.0);
});`
  },
  {
    id: 'P', label: 'The Slum',
                font: 'Comic Sans MS, cursive, sans-serif',
    heading: 'Halaman Belum Jadi.',
    subtitle: '*maaf berantakan, lagi males beres-beres ngerapihin berkas.',
        code: `export default makeScene2D(function* (view) {
  const tape = createRef<Rect>();
  view.add(<Rect ref={tape} fill="#EFEEB4" rotation={15} opacity={0.8} />);
  yield* tape().rotation(12, 0.4);
});`
  },
  {
    id: 'Q', label: 'Buku Catatan',
                font: 'Comic Sans MS, cursive, sans-serif',
    heading: 'Catatan Tio Haidar',
    subtitle: 'Vibe coder / Rajin Menabung / RPL Telkom.',
        code: `export default makeScene2D(function* (view) {
  const doodle = createRef<Path>();
  view.add(<Path ref={doodle} data="M 0,0 Q 50,50 100,0" stroke="#1A73E8" />);
  yield* doodle().opacity(1, 0.5);
});`
  },
  {
    id: 'R', label: 'Mesin Ketik Klasik',
                font: 'Courier New, monospace',
    heading: 'TIO HAIDAR HANIF',
    subtitle: '// DOSSIER REFERENCE #882-BIO: TOP CLASSIFIED',
        code: `export default makeScene2D(function* (view) {
  const stamp = createRef<Txt>();
  view.add(<Txt ref={stamp} text="CONFIDENTIAL" fill="#8B0000" scale={3.0} />);
  yield* stamp().scale(1.0, 0.3, easeOutBounce);
});`
  }
];

const STYLES = VIDEO_STYLES_RAW.map(s => ({
  ...s,
  bg: window.GLOBAL_STYLES_CONFIG[s.id].bg,
  colors: window.GLOBAL_STYLES_CONFIG[s.id].colors,
  accent: window.GLOBAL_STYLES_CONFIG[s.id].accent,
  vibe: window.GLOBAL_STYLES_CONFIG[s.id].vibe
}));

// Helper: Easing Springs (Motion Canvas feeling)
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

// Helper: High-precision text wrapping on canvas context
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let lines = [];

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
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

// Helper: Technical background grid renderer
function drawGrid(ctx, w, h, t, glowColor = 'rgba(191, 255, 0, 0.05)') {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;
  const gridSize = 40;

  const offsetX = (t * 20) % gridSize;
  const offsetY = (t * 15) % gridSize;

  for (let x = offsetX; x < w; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = offsetY; y < h; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const gradient = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w / 1.2);
  gradient.addColorStop(0, glowColor);
  gradient.addColorStop(1, 'transparent');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
}

// -------------------------------------------------------------
// PROCEDURAL AUDIO ENGINE
// -------------------------------------------------------------
class ProceduralAudioEngine {
  constructor() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.6;
    this.masterGain.connect(this.ctx.destination);
    
    // Create MediaStreamDestination for WebM recording
    this.streamDest = this.ctx.createMediaStreamDestination();
    this.masterGain.connect(this.streamDest);
  }
  
  ensureInit() {
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playWhoosh() {
    this.ensureInit();
    const t = this.ctx.currentTime;
    const duration = 0.5;
    
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(100, t);
    filter.frequency.exponentialRampToValueAtTime(1000, t + duration / 2);
    filter.frequency.exponentialRampToValueAtTime(100, t + duration);
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.exponentialRampToValueAtTime(0.3, t + duration / 2);
    gain.gain.exponentialRampToValueAtTime(0.01, t + duration);
    
    noiseSource.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    
    noiseSource.start(t);
  }

  playThemeSound(vibeStr) {
    this.ensureInit();
    const t = this.ctx.currentTime;
    const duration = 0.8;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    let freq = 600;
    let type = 'sine';
    let gVal = 0.3;
    
    vibeStr = vibeStr.toLowerCase();
    
    if (vibeStr.includes('brutalist') || vibeStr.includes('utility') || vibeStr.includes('engineering')) {
       type = 'square';
       freq = 150;
       osc.frequency.exponentialRampToValueAtTime(20, t + 0.3);
       gVal = 0.15;
    } else if (vibeStr.includes('glass') || vibeStr.includes('soft') || vibeStr.includes('organic')) {
       type = 'sine';
       freq = 880;
       gVal = 0.4;
    } else if (vibeStr.includes('terminal') || vibeStr.includes('code') || vibeStr.includes('tech')) {
       type = 'sawtooth';
       freq = 400;
       osc.frequency.setValueAtTime(800, t + 0.1);
       gVal = 0.05;
    } else {
       type = 'triangle';
       freq = 523.25;
       gVal = 0.4;
    }

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    
    gain.gain.setValueAtTime(gVal, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + duration);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start(t);
    osc.stop(t + duration);
  }
}

// -------------------------------------------------------------
// CORE VIDEO ENGINE
// -------------------------------------------------------------
class VideoShowcaseEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    // Explicit coordinate system scale to lock ratio and prevent blur/distortions
    this.canvas.width = 1280;
    this.canvas.height = 720;

    this.isPlaying = false;
    this.isExporting = false;
    this.frame = 0;
    this.timerId = null;

    this.framesPerSlide = 120; // 2 seconds at 60fps
    this.transitionFrames = 30; // 0.5 seconds transition
    this.totalSlides = STYLES.length + 2; // Intro + 18 styles + Outro
    this.totalFrames = this.totalSlides * this.framesPerSlide;

    this.onFrameCallbacks = [];

    // Preload Logo Image
    this.logoImg = new Image();
    this.logoImg.src = 'image.png';

    // Init Audio Engine
    this.audioEngine = new ProceduralAudioEngine();
  }

  registerFrameCallback(cb) {
    this.onFrameCallbacks.push(cb);
  }

  getSlideIndexAndProgress(frame) {
    const slideIdx = Math.floor(frame / this.framesPerSlide);
    const slideProgress = (frame % this.framesPerSlide) / this.framesPerSlide;
    return { slideIdx, slideProgress };
  }

  getSlideTime(idx, frame) {
    // A slide starts animating 30 frames before its nominal index boundary
    const startFrame = idx === 0 ? 0 : idx * this.framesPerSlide - this.transitionFrames;
    const localFrame = frame - startFrame;
    return Math.max(0, localFrame) / 60; // elapsed time in seconds
  }

  setFrame(f) {
    this.frame = Math.max(0, Math.min(this.totalFrames - 1, f));
    this.draw();
    this.triggerFrameCallbacks();
  }

  triggerFrameCallbacks() {
    const { slideIdx } = this.getSlideIndexAndProgress(this.frame);
    this.onFrameCallbacks.forEach(cb => cb(this.frame, slideIdx));
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;

    const tick = () => {
      if (!this.isPlaying) return;
      this.frame++;
      if (this.frame >= this.totalFrames) {
        this.frame = 0; // loop
      }
      this.draw();
      this.triggerFrameCallbacks();
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

    const { slideIdx } = this.getSlideIndexAndProgress(this.frame);

    // Draw base slide frame
    this.drawSlide(ctx, slideIdx, this.frame, w, h);

    // Smooth Transition Wipes
    const framesIntoSlide = this.frame % this.framesPerSlide;
    const isTransitioning = (this.framesPerSlide - framesIntoSlide) <= this.transitionFrames;

    // --- Procedural Audio Triggers ---
    if (this.isPlaying || this.isExporting) {
      // Play a whoosh at the very beginning (frame 0)
      if (this.frame === 0) {
         this.audioEngine.playWhoosh();
      }
      // Play a whoosh when a transition starts
      if (framesIntoSlide === this.framesPerSlide - this.transitionFrames && slideIdx < this.totalSlides - 1) {
         this.audioEngine.playWhoosh();
      }
    }
    // ---------------------------------

    if (isTransitioning && slideIdx < this.totalSlides - 1) {
      const transProgress = (this.transitionFrames - (this.framesPerSlide - framesIntoSlide)) / this.transitionFrames;
      this.drawTransition(ctx, slideIdx, slideIdx + 1, transProgress, this.frame, w, h);
    }
  }

  drawTransition(ctx, fromIdx, toIdx, progress, frame, w, h) {
    ctx.save();

    // Smooth easing for transitions
    const easedProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out

    // Choose transition type based on toIdx (10 different transitions)
    const transType = toIdx % 10;

    ctx.beginPath();

    if (transType === 0) {
      // 0: Diagonal Stinger Wipe
      const slant = 180;
      const edgeX = easedProgress * (w + slant);
      ctx.moveTo(0, 0); ctx.lineTo(edgeX, 0); ctx.lineTo(edgeX - slant, h); ctx.lineTo(0, h); ctx.closePath();
    } else if (transType === 1) {
      // 1: Circle Iris Expand
      const maxRadius = Math.sqrt(w * w / 4 + h * h / 4);
      ctx.arc(w / 2, h / 2, easedProgress * maxRadius, 0, Math.PI * 2);
    } else if (transType === 2) {
      // 2: Horizontal Split Wipe (opens from middle horizontally)
      const halfOpen = easedProgress * (h / 2);
      ctx.rect(0, h / 2 - halfOpen, w, halfOpen * 2);
    } else if (transType === 3) {
      // 3: Vertical Venetian Blinds
      const blindCount = 10;
      const blindW = w / blindCount;
      const openW = easedProgress * blindW;
      for (let i = 0; i < blindCount; i++) {
        ctx.rect(i * blindW, 0, openW, h);
      }
    } else if (transType === 4) {
      // 4: Clock Wipe (Radial Sweep)
      ctx.moveTo(w / 2, h / 2);
      ctx.arc(w / 2, h / 2, Math.sqrt(w * w + h * h), -Math.PI / 2, -Math.PI / 2 + easedProgress * Math.PI * 2);
      ctx.closePath();
    } else if (transType === 5) {
      // 5: Vertical Split Wipe (opens from middle vertically)
      const halfOpen = easedProgress * (w / 2);
      ctx.rect(w / 2 - halfOpen, 0, halfOpen * 2, h);
    } else if (transType === 6) {
      // 6: Sine Wave Wipe (Sweeps left to right with a wavy edge)
      const edgeX = easedProgress * (w + 200);
      ctx.moveTo(0, 0);
      ctx.lineTo(edgeX, 0);
      for (let y = 0; y <= h; y += 10) {
        ctx.lineTo(edgeX + Math.sin(y * 0.05 + easedProgress * 10) * 50, y);
      }
      ctx.lineTo(0, h);
      ctx.closePath();
    } else if (transType === 7) {
      // 7: Diamond Iris Expand
      const maxDist = w / 2 + h / 2;
      const d = easedProgress * maxDist;
      ctx.moveTo(w / 2, h / 2 - d); ctx.lineTo(w / 2 + d, h / 2); ctx.lineTo(w / 2, h / 2 + d); ctx.lineTo(w / 2 - d, h / 2); ctx.closePath();
    } else if (transType === 8) {
      // 8: Checkerboard Block Reveal
      const cols = 16; const rows = 9;
      const cellW = w / cols; const cellH = h / rows;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const delay = (c + r) / (cols + rows); // staggered delay
          let cellP = (easedProgress - delay * 0.5) * 2;
          cellP = Math.max(0, Math.min(1, cellP));
          const cw = cellP * cellW; const ch = cellP * cellH;
          ctx.rect(c * cellW + (cellW - cw) / 2, r * cellH + (cellH - ch) / 2, cw, ch);
        }
      }
    } else if (transType === 9) {
      // 9: Cross Sweep (4 directions into center)
      const maxR = Math.sqrt(w * w / 4 + h * h / 4);
      const pr = easedProgress * maxR;
      // Top left
      ctx.moveTo(0, 0); ctx.arc(0, 0, pr, 0, Math.PI / 2);
      // Top right
      ctx.moveTo(w, 0); ctx.arc(w, 0, pr, Math.PI / 2, Math.PI);
      // Bottom right
      ctx.moveTo(w, h); ctx.arc(w, h, pr, Math.PI, Math.PI * 1.5);
      // Bottom left
      ctx.moveTo(0, h); ctx.arc(0, h, pr, Math.PI * 1.5, Math.PI * 2);
    }

    // Clip incoming slide
    ctx.clip();
    this.drawSlide(ctx, toIdx, frame, w, h);
    ctx.restore();

    // Draw glowing transition border/accent line
    ctx.save();
    ctx.strokeStyle = PALETTE.accentHighlight;
    ctx.lineWidth = 6;
    ctx.shadowColor = PALETTE.accentHighlight;
    ctx.shadowBlur = 15;
    ctx.beginPath();

    if (transType === 0) {
      const slant = 180; const edgeX = easedProgress * (w + slant);
      ctx.moveTo(edgeX, 0); ctx.lineTo(edgeX - slant, h); ctx.stroke();
    } else if (transType === 1) {
      const maxRadius = Math.sqrt(w * w / 4 + h * h / 4);
      ctx.arc(w / 2, h / 2, easedProgress * maxRadius, 0, Math.PI * 2); ctx.stroke();
    } else if (transType === 2) {
      const halfOpen = easedProgress * (h / 2);
      ctx.moveTo(0, h / 2 - halfOpen); ctx.lineTo(w, h / 2 - halfOpen);
      ctx.moveTo(0, h / 2 + halfOpen); ctx.lineTo(w, h / 2 + halfOpen); ctx.stroke();
    } else if (transType === 3) {
      const blindCount = 10; const blindW = w / blindCount; const openW = easedProgress * blindW;
      for (let i = 0; i < blindCount; i++) {
        ctx.moveTo(i * blindW + openW, 0); ctx.lineTo(i * blindW + openW, h);
      }
      ctx.lineWidth = 3; ctx.stroke();
    } else if (transType === 4) {
      ctx.moveTo(w / 2, h / 2);
      const angle = -Math.PI / 2 + easedProgress * Math.PI * 2;
      ctx.lineTo(w / 2 + Math.cos(angle) * 2000, h / 2 + Math.sin(angle) * 2000);
      ctx.stroke();
    } else if (transType === 5) {
      const halfOpen = easedProgress * (w / 2);
      ctx.moveTo(w / 2 - halfOpen, 0); ctx.lineTo(w / 2 - halfOpen, h);
      ctx.moveTo(w / 2 + halfOpen, 0); ctx.lineTo(w / 2 + halfOpen, h); ctx.stroke();
    } else if (transType === 6) {
      const edgeX = easedProgress * (w + 200);
      ctx.moveTo(edgeX, 0);
      for (let y = 0; y <= h; y += 10) { ctx.lineTo(edgeX + Math.sin(y * 0.05 + easedProgress * 10) * 50, y); }
      ctx.stroke();
    } else if (transType === 7) {
      const d = easedProgress * (w / 2 + h / 2);
      ctx.moveTo(w / 2, h / 2 - d); ctx.lineTo(w / 2 + d, h / 2); ctx.lineTo(w / 2, h / 2 + d); ctx.lineTo(w / 2 - d, h / 2); ctx.closePath();
      ctx.stroke();
    } else if (transType === 9) {
      const pr = easedProgress * Math.sqrt(w * w / 4 + h * h / 4);
      ctx.moveTo(0, 0); ctx.arc(0, 0, pr, 0, Math.PI / 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w, 0); ctx.arc(w, 0, pr, Math.PI / 2, Math.PI); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w, h); ctx.arc(w, h, pr, Math.PI, Math.PI * 1.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, h); ctx.arc(0, h, pr, Math.PI * 1.5, Math.PI * 2); ctx.stroke();
    }
    // Type 8 (checkerboard) has no outline

    ctx.restore();
  }

  drawSlide(ctx, slideIdx, frame, w, h) {
    // Explicitly reset canvas state to resolve alignment/bleeding issues
    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.globalAlpha = 1.0;
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';

    const t = this.getSlideTime(slideIdx, frame); // continuous elapsed slide time in seconds

    // -------------------------------------------------------------
    // INTRO SLIDE (0)
    // -------------------------------------------------------------
    if (slideIdx === 0) {
      ctx.fillStyle = PALETTE.bgPrimary;
      ctx.fillRect(0, 0, w, h);
      drawGrid(ctx, w, h, t, 'rgba(191, 255, 0, 0.08)');

      // 1. Dramatic Logo Entrance (Zoom-Out / Slam effect)
      const logoSpring = getSpringValue(t - 0.05, 180, 14); // Snappy drop-in
      if (this.logoImg && this.logoImg.complete && this.logoImg.naturalWidth > 0) {
        ctx.save();

        // Fade in quickly at the very start to avoid an abrupt jump
        ctx.globalAlpha = Math.min(1, Math.max(0, t * 5));

        // Interpolate position: starts centered (0), moves up to -150
        const logoFloatY = Math.sin(t * 3) * 8;
        const targetY = -150 + logoFloatY;
        const currentY = (1 - logoSpring) * 0 + logoSpring * targetY;

        // Interpolate scale: starts massive (8x), shrinks to 1x
        const currentScale = (1 - logoSpring) * 6 + logoSpring * 1;

        ctx.translate(w / 2, h / 2 + currentY);
        ctx.scale(currentScale, currentScale);

        // Dramatic glowing shadow that flashes as it slams down
        ctx.shadowColor = PALETTE.accentHighlight;
        ctx.shadowBlur = (1 - logoSpring) * 100 + 30 + Math.max(0, Math.sin(t * 5) * 15);

        const logoH = 100; // Final logo size
        const aspect = this.logoImg.naturalWidth / this.logoImg.naturalHeight;
        const logoW = logoH * aspect;

        // Draw centered on its new anchor
        ctx.drawImage(this.logoImg, -logoW / 2, -logoH / 2, logoW, logoH);
        ctx.restore();
      }

      // 2. Text Entrance
      const springScale = getSpringValue(t - 0.3, 120, 10); // Delays slightly after logo

      ctx.save();
      ctx.translate(w / 2, h / 2 - 10); // Move text container down a bit
      ctx.scale(springScale, springScale);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = "bold 56px Poppins, sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = PALETTE.accentHighlight;
      ctx.shadowBlur = 30 * springScale;
      ctx.fillText("STYLE GUIDE SHOWCASE", 0, 0);

      ctx.shadowBlur = 0;
      ctx.fillStyle = PALETTE.accentHighlight;
      ctx.font = "bold 20px 'Fira Code', monospace";
      ctx.fillText("18 DESIGN SYSTEM OPTIONS PLAYGROUND", 0, 60);
      ctx.restore();

      ctx.fillStyle = PALETTE.textBody;
      ctx.font = "16px Inter, sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText("Tio Haidar Hanif  |  Vibe coder & Tukang Penasaran", w / 2, h - 100);

      ctx.restore();
      return;
    }

    // -------------------------------------------------------------
    // OUTRO SLIDE (LAST)
    // -------------------------------------------------------------
    if (slideIdx === this.totalSlides - 1) {
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, w, h);
      drawGrid(ctx, w, h, t, 'rgba(191, 255, 0, 0.04)');

      ctx.fillStyle = '#FFFFFF';
      ctx.font = "bold 44px Poppins, sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText("TERIMA KASIH", w / 2, h / 2 - 20);

      ctx.fillStyle = PALETTE.textBody;
      ctx.font = "18px Inter, sans-serif";
      ctx.fillText("Explore the full layouts in Gallery Mode", w / 2, h / 2 + 30);

      ctx.strokeStyle = PALETTE.accentHighlight;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(w / 2 - 200, h / 2 + 80, 400, 50, 8);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = "14px 'Fira Code', monospace";
      ctx.fillText("Generated fully client-side as WebM", w / 2, h / 2 + 105);

      ctx.restore();
      return;
    }

    // -------------------------------------------------------------
    // ACTIVE STYLE DESIGN SLIDES
    // -------------------------------------------------------------
    const style = STYLES[slideIdx - 1];

    // Fill Slide background
    ctx.fillStyle = style.bg;
    ctx.fillRect(0, 0, w, h);

    const isDark = this.isColorDark(style.bg);

    // --- AMBIENT BACKGROUND PARTICLES ---
    ctx.save();
    const particleCount = 35; // increased count
    ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'; // increased opacity
    for (let i = 0; i < particleCount; i++) {
      const pOffset = i * 23.45;
      const speed = 25 + (i % 5) * 15; // increased speed
      const px = ((pOffset * 100 + t * speed) % (w + 200)) - 100;
      const py = (Math.cos(pOffset) * h / 2 + h / 2) + Math.sin(t * 1.5 + i) * 80; // bigger vertical wave
      const radius = 8 + (i % 25) + Math.sin(t * 2.5 + i) * 6; // larger particles
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    const textColor = isDark ? '#FFFFFF' : '#111827';
    const mutedColor = isDark ? '#94A3B8' : '#6B7280';
    const borderColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
    const cardBg = isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)';

    // Grid alignment parameters
    const startX = 120;
    const rightPanelX = 800;
    const rightPanelY = 80;
    const rightPanelW = 380;
    const rightPanelH = 540;

    // 1. TOP ANCHORED ACCENT BAR
    const barProgress = getSpringValue(t, 120, 16);
    ctx.fillStyle = style.accent;
    ctx.fillRect(0, 0, w * barProgress, 8);

    // 2. BADGE CHIP DESIGN (Precise dimensions and contrasting typography)
    const badgeScale = getSpringValue(t - 0.1, 100, 12);
    ctx.save();
    // Ambient float: sine wave on Y axis (amplified)
    ctx.translate(startX, 80 + Math.sin(t * 2.5) * 12);
    ctx.scale(badgeScale, badgeScale);

    ctx.fillStyle = cardBg;
    ctx.beginPath();
    ctx.roundRect(0, 0, 240, 42, 21); // Pill shape
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Small color indicator circle inside badge
    ctx.fillStyle = style.accent;
    ctx.beginPath();
    ctx.arc(20, 21, 6, 0, Math.PI * 2);
    ctx.fill();

    // Text label matching background theme
    ctx.fillStyle = isDark ? '#FFFFFF' : '#111827';
    ctx.font = "bold 13px 'Fira Code', monospace";
    ctx.textBaseline = 'middle';
    ctx.fillText(`OPTION ${style.id} : ${style.label.toUpperCase()}`, 38, 21);
    ctx.restore();

    // 3. MAIN HEADING (Lines staggered slide-up)
    const titleSpring = getSpringValue(t - 0.3, 100, 12);
    ctx.save();
    // Ambient float: cosine wave on Y axis with slight offset (amplified)
    ctx.translate(startX, 150 + Math.cos(t * 2.0) * 10);
    ctx.globalAlpha = Math.min(1, titleSpring);
    ctx.fillStyle = textColor;
    ctx.font = `bold 42px ${style.font}`;

    // Wrap and draw title
    wrapText(ctx, style.heading, 0, (1 - titleSpring) * 15, 600, 52);
    ctx.restore();

    // 4. SUBTITLE DESCRIPTION
    const subSpring = getSpringValue(t - 0.5, 90, 12);
    ctx.save();
    // Ambient float (amplified)
    ctx.translate(startX, 320 + Math.sin(t * 2.2) * 12);
    ctx.globalAlpha = Math.min(1, subSpring);
    ctx.fillStyle = mutedColor;
    ctx.font = "16px Inter, sans-serif";
    wrapText(ctx, style.subtitle, 0, (1 - subSpring) * 10, 600, 24);
    ctx.restore();

    // 5. COLOR PALETTE SWATCH BOUNCING
    const paletteSpring = getSpringValue(t - 0.6, 90, 10);
    ctx.save();
    // Ambient float (amplified)
    ctx.translate(startX, 460 + Math.cos(t * 1.8) * 8);
    ctx.globalAlpha = Math.min(1, paletteSpring);

    ctx.fillStyle = mutedColor;
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillText("COLOR PALETTE", 0, 0);

    style.colors.forEach((col, idx) => {
      const sx = idx * 90;
      const sy = 20;
      const swatchW = 75;
      const swatchH = 45;

      const swatchPop = getSpringValue(t - 0.7 - idx * 0.05, 120, 11);
      ctx.save();
      ctx.translate(sx + swatchW / 2, sy + swatchH / 2);
      ctx.scale(swatchPop, swatchPop);

      // Draw swatch color
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.roundRect(-swatchW / 2, -swatchH / 2, swatchW, swatchH, 6);
      ctx.fill();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Hex label
      ctx.fillStyle = mutedColor;
      ctx.font = "10px 'Fira Code', monospace";
      ctx.textAlign = 'center';
      ctx.fillText(col, sx + swatchW / 2, sy + swatchH + 10);
    });
    ctx.restore();

    // 6. STYLE SUMMARY FOOTNOTE
    const footnoteSpring = getSpringValue(t - 0.9, 100, 12);
    ctx.save();
    // Ambient float (amplified)
    ctx.translate(startX, 620 + Math.sin(t * 2.8) * 6);
    ctx.globalAlpha = Math.min(1, footnoteSpring);
    ctx.fillStyle = mutedColor;
    ctx.font = "italic 13px Inter, sans-serif";
    ctx.fillText(`Vibe: "${style.vibe}"`, 0, 0);
    ctx.font = "11px 'Fira Code', monospace";
    ctx.fillText(`Typography Font Face: ${style.font.split(',')[0]}`, 0, 20);
    ctx.restore();

    // 7. DECORATIVE SIDE PANEL AND DYNAMIC ANIMATION
    // Add an ambient float to the entire panel container (amplified with X & Y)
    const ambientPanelX = rightPanelX + Math.cos(t * 2) * 8;
    const ambientPanelY = rightPanelY + Math.sin(t * 2.5) * 15;
    this.drawDecorativeElement(ctx, style.id, t, ambientPanelX, ambientPanelY, rightPanelW, rightPanelH, isDark, style.accent, borderColor);

    ctx.restore(); // Restore root clean state
  }

  drawDecorativeElement(ctx, id, t, x, y, width, height, isDark, accentColor, borderColor) {
    ctx.save();

    // Create card wrapper
    ctx.fillStyle = isDark ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 16);
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Clip inner content
    ctx.clip();

    // Thin structural grids
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
    ctx.lineWidth = 1;
    for (let gx = x; gx < x + width; gx += 30) {
      ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx, y + height); ctx.stroke();
    }
    for (let gy = y; gy < y + height; gy += 30) {
      ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x + width, gy); ctx.stroke();
    }

    const cx = x + width / 2;
    const cy = y + height / 2;

    switch (id) {
      case 'A': // Neo-Pop
        const angle = t * 1.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        // Shadow offset
        ctx.fillStyle = '#000000';
        ctx.fillRect(-70, -70, 160, 160);

        ctx.fillStyle = '#FFEB3B';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;
        ctx.fillRect(-80, -80, 160, 160);
        ctx.strokeRect(-80, -80, 160, 160);

        ctx.rotate(-angle * 2.5);
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(-35, -35, 70, 70);
        ctx.strokeRect(-35, -35, 70, 70);
        ctx.restore();

        ctx.fillStyle = '#000000';
        ctx.font = "40px sans-serif";
        ctx.fillText("⚡", cx - 110, cy - 130 + Math.sin(t * 3) * 15);
        ctx.fillText("✨", cx + 70, cy + 100 + Math.cos(t * 3) * 15);
        break;

      case 'B': // Tech Glass
        // Drift color nodes behind
        const bx1 = cx - 40 + Math.sin(t) * 40;
        const by1 = cy - 40 + Math.cos(t) * 35;
        const g1 = ctx.createRadialGradient(bx1, by1, 10, bx1, by1, 160);
        g1.addColorStop(0, 'rgba(124, 92, 246, 0.4)');
        g1.addColorStop(1, 'rgba(124, 92, 246, 0)');
        ctx.fillStyle = g1;
        ctx.beginPath(); ctx.arc(bx1, by1, 160, 0, Math.PI * 2); ctx.fill();

        const bx2 = cx + 50 + Math.cos(t * 1.5) * 30;
        const by2 = cy + 40 + Math.sin(t * 1.5) * 40;
        const g2 = ctx.createRadialGradient(bx2, by2, 10, bx2, by2, 140);
        g2.addColorStop(0, 'rgba(59, 130, 246, 0.35)');
        g2.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = g2;
        ctx.beginPath(); ctx.arc(bx2, by2, 140, 0, Math.PI * 2); ctx.fill();

        // Blurred Glass Panel Overlay
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.roundRect(cx - 100, cy - 120, 200, 240, 16);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#FFFFFF';
        ctx.font = "bold 18px Inter, sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText("TECH GLASS", cx, cy - 20);

        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = "12px Inter, sans-serif";
        ctx.fillText("Immersive glass panel", cx, cy + 15);
        break;

      case 'C': // Swiss Editorial
        ctx.fillStyle = '#1A1A1A';
        ctx.font = "bold 130px Georgia, serif";
        ctx.textAlign = 'center';
        ctx.fillText("Aa", cx, cy - 40);

        ctx.strokeStyle = '#1A1A1A';
        ctx.lineWidth = 2;
        const dividerLen = Math.min(1, t) * 260;
        ctx.beginPath();
        ctx.moveTo(cx - 130, cy + 50);
        ctx.lineTo(cx - 130 + dividerLen, cy + 50);
        ctx.stroke();

        ctx.fillStyle = '#1A1A1A';
        ctx.font = "italic 14px Georgia, serif";
        ctx.fillText("Clarity and grid structure.", cx, cy + 85);
        break;

      case 'D': // Modern SaaS
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.04)';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.roundRect(cx - 130, cy - 140, 260, 280, 12);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Window bar
        ctx.fillStyle = '#F9FAFB';
        ctx.beginPath();
        ctx.roundRect(cx - 130, cy - 140, 260, 36, { tl: 12, tr: 12, bl: 0, br: 0 });
        ctx.fill();

        ['#EF4444', '#F59E0B', '#22C55E'].forEach((col, i) => {
          ctx.fillStyle = col;
          ctx.beginPath(); ctx.arc(cx - 110 + i * 15, cy - 122, 5, 0, Math.PI * 2); ctx.fill();
        });

        // Stats chart graph path
        ctx.strokeStyle = '#4F46E5';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - 100, cy + 60);
        for (let i = 0; i <= 5; i++) {
          const px = cx - 100 + i * 40;
          const py = cy + 40 - Math.sin(t * 2 + i) * 35 - (i * 8);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);

          ctx.fillStyle = '#4F46E5';
          ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2); ctx.fill();
        }
        ctx.stroke();
        break;

      case 'E': // Retro Terminal
        ctx.fillStyle = '#0C0C0C';
        ctx.fillRect(x + 15, y + 15, width - 30, height - 30);
        ctx.strokeStyle = '#22C55E';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 15, y + 15, width - 30, height - 30);

        ctx.fillStyle = '#4ADE80';
        ctx.font = "12px 'Fira Code', monospace";
        ctx.textAlign = 'left';

        const logs = [
          "guest@rpl-terminal:~$ run",
          "Loading modules...",
          "[OK] NestJS Database API",
          "[OK] Docker Containment",
          `Engine: Running t = ${t.toFixed(1)}s`,
          "> Connection secure" + ((Math.floor(t * 2.5) % 2 === 0) ? "_" : " ")
        ];
        logs.forEach((line, i) => {
          ctx.fillText(line, x + 35, y + 55 + i * 26);
        });
        break;

      case 'F': // Organic & Soft
        ctx.fillStyle = '#E3EBCB';
        ctx.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.1) {
          const r = 90 + Math.sin(a * 4 + t * 2) * 12 + Math.cos(a * 2 - t) * 6;
          const px = cx + Math.cos(a) * r;
          const py = cy + Math.sin(a) * r;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#64853F';
        ctx.beginPath();
        ctx.arc(cx, cy, 32 + Math.sin(t * 3.5) * 4, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'G': // Blueprint
        ctx.fillStyle = '#2563EB';
        ctx.fillRect(x, y, width, height);

        // Grid blueprint overlay
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 1;
        for (let gx = x; gx < x + width; gx += 20) {
          ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx, y + height); ctx.stroke();
        }
        for (let gy = y; gy < y + height; gy += 20) {
          ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x + width, gy); ctx.stroke();
        }

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, 35, 0, Math.PI * 2); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 100, cy); ctx.lineTo(cx + 100, cy);
        ctx.moveTo(cx, cy - 100); ctx.lineTo(cx, cy + 100);
        ctx.stroke();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * 0.8);
        ctx.strokeStyle = '#FFFFFF';
        ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -80); ctx.stroke();
        ctx.restore();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = "9px 'Fira Code', monospace";
        ctx.fillText("GRID_SCALE = 20", cx - 110, cy - 110);
        break;

      case 'H': // Pure Utility
        ctx.fillStyle = '#000000';
        ctx.fillRect(cx - 90, cy - 110, 180, 220);

        const ux = cx - 70 + Math.sin(t * 2.5) * 15;
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;
        ctx.fillRect(ux, cy - 70, 140, 140);
        ctx.strokeRect(ux, cy - 70, 140, 140);

        ctx.fillStyle = '#000000';
        ctx.font = "bold 20px Poppins, sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText("UTILITY", ux + 70, cy);
        break;

      case 'I': // AI Innovator
        const points = [];
        const nodesCount = 8;
        for (let i = 0; i < nodesCount; i++) {
          const rAngle = (i * Math.PI * 2) / nodesCount + t * 0.35;
          const rDist = 80 + Math.sin(t * 2 + i) * 12;
          points.push({
            x: cx + Math.cos(rAngle) * rDist,
            y: cy + Math.sin(rAngle) * rDist,
            col: i % 2 === 0 ? '#6366F1' : '#A855F7'
          });
        }

        ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            ctx.beginPath(); ctx.moveTo(points[i].x, points[i].y); ctx.lineTo(points[j].x, points[j].y); ctx.stroke();
          }
        }

        points.forEach(p => {
          ctx.save();
          ctx.shadowBlur = 15;
          ctx.shadowColor = p.col;
          ctx.fillStyle = p.col;
          ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        });

        ctx.save();
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#EC4899';
        ctx.fillStyle = '#EC4899';
        ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        break;

      case 'J': // Research Focused
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(cx - 100, cy - 130, 200, 260);
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1;
        ctx.strokeRect(cx - 100, cy - 130, 200, 260);

        ctx.fillStyle = '#0F172A';
        ctx.fillRect(cx - 85, cy - 105, 170, 8);
        ctx.fillStyle = '#64748B';
        ctx.fillRect(cx - 85, cy - 88, 110, 5);

        ctx.fillStyle = '#E2E8F0';
        for (let i = 0; i < 5; i++) {
          ctx.fillRect(cx - 85, cy - 60 + i * 18, 170 - (i % 2) * 20, 5);
        }

        const textHighlightW = Math.min(1, Math.max(0, t - 0.4) * 1.5) * 140;
        ctx.fillStyle = '#FEF08A';
        ctx.fillRect(cx - 85, cy + 60, textHighlightW, 15);

        ctx.fillStyle = '#0F172A';
        ctx.font = "bold 9px Inter, sans-serif";
        ctx.fillText("Structured data models", cx - 80, cy + 63);
        break;

      case 'K': // Brand Identity
        ctx.fillStyle = '#112240';
        ctx.fillRect(x + 20, y + 20, width - 40, height - 40);
        ctx.strokeStyle = '#233554';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 20, y + 20, width - 40, height - 40);

        ctx.fillStyle = '#8892B0';
        ctx.font = "11px 'Fira Code', monospace";
        ctx.fillText("class Developer {", x + 35, y + 50);

        const items = ['Laravel', 'Express.js', 'Docker Stack', 'VBA Automation'];
        items.forEach((item, i) => {
          const vis = Math.min(1, Math.max(0, t - i * 0.12) * 2);
          ctx.fillStyle = `rgba(46, 204, 113, ${vis})`;
          ctx.fillText(`  build("${item}");`, x + 35, y + 78 + i * 22);
        });

        ctx.fillStyle = '#8892B0';
        ctx.fillText("}", x + 35, y + 78 + items.length * 22);
        break;

      case 'L': // Dashboard
        ctx.fillStyle = '#0A192F';
        ctx.fillRect(x + 10, y + 10, 75, height - 20); // sidebar

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(x + 85, y + 10, width - 95, height - 20); // main canvas

        ctx.fillStyle = '#F3F4F6';
        ctx.fillRect(x + 105, cy - 35, 160, 16);
        ctx.fillRect(x + 105, cy + 20, 160, 16);

        ctx.fillStyle = '#3BAFDA';
        ctx.fillRect(x + 105, cy - 35, Math.min(1, t) * 140, 16);
        ctx.fillStyle = '#2ECC71';
        ctx.fillRect(x + 105, cy + 20, Math.min(1, t * 0.8) * 120, 16);
        break;

      case 'M': // Bento Living Grid
        const bentoGrid = [
          { rx: -110, ry: -130, rw: 100, rh: 120, col: '#FFFFFF', delay: 0 },
          { rx: 10, ry: -130, rw: 100, rh: 80, col: '#111827', delay: 0.1 },
          { rx: 10, ry: -30, rw: 100, rh: 160, col: '#FFFFFF', delay: 0.2 },
          { rx: -110, ry: 10, rw: 100, rh: 120, col: '#3B82F6', delay: 0.3 }
        ];

        bentoGrid.forEach(box => {
          const boxPop = getSpringValue(t - box.delay, 120, 10);
          ctx.save();
          ctx.translate(cx + box.rx + box.rw / 2, cy + box.ry + box.rh / 2);
          ctx.scale(boxPop, boxPop);

          ctx.fillStyle = box.col;
          ctx.beginPath(); ctx.roundRect(-box.rw / 2, -box.rh / 2, box.rw, box.rh, 8); ctx.fill();

          if (box.col === '#111827') {
            ctx.fillStyle = '#10B981';
            ctx.fillRect(-box.rw / 2, -box.rh / 2, box.rw, 3);
          }
          ctx.restore();
        });
        break;

      case 'N': // The Chronicle (Newspaper)
        ctx.fillStyle = '#FDFBF6';
        ctx.fillRect(x, y, width, height);

        ctx.strokeStyle = '#1A1A1A';
        ctx.lineWidth = 3;
        ctx.strokeRect(x + 10, y + 10, width - 20, height - 20);
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x + 14, y + 14, width - 28, height - 28);

        ctx.fillStyle = '#1A1A1A';
        ctx.font = "bold 18px Georgia, serif";
        ctx.textAlign = 'center';
        ctx.fillText("THE DAILY TIO", cx, y + 45);

        ctx.beginPath();
        ctx.moveTo(x + 25, y + 65); ctx.lineTo(x + width - 25, y + 65); ctx.stroke();

        ctx.fillStyle = '#444444';
        for (let i = 0; i < 5; i++) {
          ctx.fillRect(x + 25, y + 80 + i * 16, 110, 3);
          ctx.fillRect(cx + 10, y + 80 + i * 16, 110, 3);
        }

        ctx.fillStyle = '#8B0000';
        ctx.font = "bold 40px Georgia, serif";
        ctx.fillText("T", x + 35, y + 130);
        break;

      case 'O': // Royal Luxury
        ctx.strokeStyle = '#D4AF37';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 15, y + 15, width - 30, height - 30);

        ctx.lineWidth = 0.5;
        ctx.strokeRect(x + 20, y + 20, width - 40, height - 40);

        // Elegant rotating star curves
        ctx.save();
        ctx.translate(cx, cy - 20);
        ctx.rotate(t * 0.45);
        ctx.strokeStyle = '#D4AF37';
        ctx.lineWidth = 1;
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2);
          ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(-15, -40, 15, -40, 0, 0); ctx.stroke();
        }
        ctx.restore();

        ctx.fillStyle = '#D4AF37';
        ctx.font = "bold 15px Georgia, serif";
        ctx.textAlign = 'center';
        ctx.fillText("ROYAL DIGITAL", cx, cy + 90);
        break;

      case 'P': // The Slum
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(0.08 + Math.sin(t * 3.5) * 0.015);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(-90, -90, 180, 180);
        ctx.strokeStyle = '#8C7B6C';
        ctx.lineWidth = 2;
        ctx.strokeRect(-90, -90, 180, 180);

        ctx.fillStyle = '#555555';
        ctx.font = "italic 14px 'Comic Sans MS', cursive";
        ctx.fillText("doodle bio...", -70, -50);
        ctx.fillText("males ngoding,", -70, -15);
        ctx.fillText("capek beut.", -70, 20);

        // Sticky tape card
        ctx.fillStyle = 'rgba(239, 238, 180, 0.85)';
        ctx.fillRect(-110, -110, 60, 24);
        ctx.restore();
        break;

      case 'Q': // Buku Catatan
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(x + 10, y + 10, width - 20, height - 20);

        // Ruled sheet lines
        ctx.strokeStyle = '#A2D2FF';
        ctx.lineWidth = 1;
        for (let ly = y + 40; ly < y + height - 20; ly += 24) {
          ctx.beginPath(); ctx.moveTo(x + 20, ly); ctx.lineTo(x + width - 20, ly); ctx.stroke();
        }
        // Red vertical margins
        ctx.strokeStyle = '#FFB7B2';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x + 55, y + 10); ctx.lineTo(x + 55, y + height - 10); ctx.stroke();

        ctx.fillStyle = '#1A73E8';
        ctx.font = "14px 'Comic Sans MS', cursive";
        ctx.textAlign = 'left';
        ctx.fillText("1. Tio Haidar", x + 70, y + 80);
        ctx.fillText("2. Backend Eng", x + 70, y + 104);
        ctx.fillText("3. Telkom Univ", x + 70, y + 128);

        // Small doodle rotating star
        ctx.save();
        ctx.translate(cx + 60, cy + 60);
        ctx.rotate(t * 1.2);
        ctx.strokeStyle = '#5F6368';
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(0, -20);
          ctx.translate(0, -20);
          ctx.rotate(Math.PI * 4 / 5);
        }
        ctx.stroke();
        ctx.restore();
        break;

      case 'R': // Mesin Ketik
        ctx.fillStyle = '#FDF6E3';
        ctx.fillRect(x + 10, y + 10, width - 20, height - 20);
        ctx.strokeStyle = '#8B0000';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 10, y + 10, width - 20, height - 20);

        ctx.fillStyle = '#000000';
        ctx.font = "bold 13px 'Courier New', monospace";
        ctx.fillText("DOSSIER #882-BIO", x + 30, y + 45);
        ctx.fillText("----------------", x + 30, y + 58);

        const ketik = [
          "NAME: Tio Haidar Hanif",
          "CORE: Vibe codering",
          "STATUS: Verified [OK]"
        ];
        ketik.forEach((l, i) => {
          ctx.fillText(l, x + 30, y + 80 + i * 22);
        });

        // Stamp stamp card animation slamming down
        const stampSlam = getSpringValue(t - 0.8, 160, 10);
        if (stampSlam > 0) {
          ctx.save();
          ctx.translate(cx + 60, cy + 60);
          ctx.scale(stampSlam, stampSlam);
          ctx.rotate(-0.2);
          ctx.strokeStyle = '#8B0000';
          ctx.lineWidth = 2;
          ctx.strokeRect(-50, -16, 100, 32);

          ctx.fillStyle = '#8B0000';
          ctx.font = "bold 11px 'Courier New', monospace";
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText("APPROVED", 0, 0);
          ctx.restore();
        }
        break;
    }

    ctx.restore();
  }

  isColorDark(hexColor) {
    const c = hexColor.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma < 130;
  }

  exportVideo(onProgress, onFinished) {
    this.pause();
    this.frame = 0;
    this.isExporting = true;

    const videoStream = this.canvas.captureStream(60);
    const audioTrack = this.audioEngine.streamDest.stream.getAudioTracks()[0];
    
    const stream = new MediaStream([
      ...videoStream.getVideoTracks(),
      ...(audioTrack ? [audioTrack] : [])
    ]);

    let options = { mimeType: 'video/webm; codecs=vp9' };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options = { mimeType: 'video/webm; codecs=vp8' };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options = { mimeType: 'video/webm' };
      }
    }

    const chunks = [];
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      this.isExporting = false;
      const blob = new Blob(chunks, { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      onFinished(videoURL);
    };

    mediaRecorder.start();

    const renderNextFrame = () => {
      if (this.frame >= this.totalFrames) {
        setTimeout(() => {
          mediaRecorder.stop();
        }, 200);
        return;
      }

      this.draw();
      this.triggerFrameCallbacks();
      this.frame++;

      const percent = Math.floor((this.frame / this.totalFrames) * 100);
      onProgress(percent);

      setTimeout(renderNextFrame, 16);
    };

    renderNextFrame();
  }
}

window.VideoShowcaseEngine = VideoShowcaseEngine;
window.STYLES = STYLES;
