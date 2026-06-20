/**
 * Preview Renderer for Slides-as-Code Workspace
 * Generates dynamic, responsive HTML/CSS structures inside the 16:9 mockup container
 * matching the design properties (background, typography, borders, charts, tables) of each style option.
 */

// Local Styles definitions matching the PPT & Video Showcase configurations
const EDITOR_STYLES_CONFIG = {
  Default: {
    bg: '#222222',
    accent: '#BFFF00',
    colors: ['#222222', '#494949', '#525252', '#656565', '#BFFF00'],
    fontFamily: "'Poppins', 'Inter', sans-serif",
    fontClass: 'font-display',
    vibe: 'Dark showcase look with neon lime green highlights and tech grid overlay.'
  },
  A: {
    bg: '#FFDEE9',
    accent: '#FF69B4',
    colors: ['#FFDEE9', '#B5FFFC', '#FFEB3B', '#FF69B4', '#000000'],
    fontFamily: "'Space Grotesk', sans-serif",
    fontClass: 'font-display',
    vibe: 'Brutalist-playful, thick borders, hard offsets, yellow and pink accents.'
  },
  B: {
    bg: '#0F172A',
    accent: '#3B82F6',
    colors: ['#0F172A', '#7C3AED', '#3B82F6', '#FFFFFF', '#94A3B8'],
    fontFamily: "'Inter', sans-serif",
    fontClass: 'font-sans',
    vibe: 'Glassmorphism, dark mode, glowing blur orbs, gradient text.'
  },
  C: {
    bg: '#F4F4F0',
    accent: '#166534',
    colors: ['#F4F4F0', '#1A1A1A', '#166534', '#D1D5DB', '#FFFFFF'],
    fontFamily: "Georgia, serif",
    fontClass: 'font-serif',
    vibe: 'Minimalist, editorial, serif typography, structured grid, lots of whitespace.'
  },
  D: {
    bg: '#F9FAFB',
    accent: '#4F46E5',
    colors: ['#F9FAFB', '#FFFFFF', '#4F46E5', '#111827', '#F3F4F6'],
    fontFamily: "'Inter', sans-serif",
    fontClass: 'font-sans',
    vibe: 'Clean SaaS, rounded cards, soft shadows, indigo accent, pill navigation.'
  },
  E: {
    bg: '#1A1A1A',
    accent: '#4ADE80',
    colors: ['#1A1A1A', '#0C0C0C', '#22C55E', '#4ADE80', '#FFFFFF'],
    fontFamily: "'Fira Code', monospace",
    fontClass: 'font-mono',
    vibe: 'Green-on-black terminal, scanlines, monospace, hacking feel.'
  },
  F: {
    bg: '#FDFCF6',
    accent: '#64853F',
    colors: ['#FDFCF6', '#F3F6E6', '#E3EBCB', '#2D3A30', '#64853F'],
    fontFamily: "'Inter', sans-serif",
    fontClass: 'font-sans',
    vibe: 'Soft greens, rounded shapes, organic blobs, earthy & natural feel.'
  },
  G: {
    bg: '#F0F4F8',
    accent: '#2563EB',
    colors: ['#F0F4F8', '#FFFFFF', '#2563EB', '#1E293B', '#94A3B8'],
    fontFamily: "'Fira Code', monospace",
    fontClass: 'font-mono',
    vibe: 'Blueprint grid, technical markers, dashed borders, engineering aesthetic.'
  },
  H: {
    bg: '#FFFFFF',
    accent: '#DC2626',
    colors: ['#FFFFFF', '#000000', '#F5F5F5', '#737373', '#DC2626'],
    fontFamily: "'Poppins', sans-serif",
    fontClass: 'font-display',
    vibe: 'Black & white, thick borders, brutalist utility, function over form.'
  },
  I: {
    bg: '#050505',
    accent: '#A855F7',
    colors: ['#050505', '#6366F1', '#A855F7', '#EC4899', '#FFFFFF'],
    fontFamily: "'Inter', sans-serif",
    fontClass: 'font-sans',
    vibe: 'Ultra-dark, gradient glow (indigo > purple > pink), futuristic AI.'
  },
  J: {
    bg: '#FFFFFF',
    accent: '#64748B',
    colors: ['#FFFFFF', '#F8FAFC', '#0F172A', '#FEF08A', '#64748B'],
    fontFamily: "Georgia, serif",
    fontClass: 'font-serif',
    vibe: 'Academic, clean, yellow highlight, left-border accents.'
  },
  K: {
    bg: '#0A192F',
    accent: '#2ECC71',
    colors: ['#0A192F', '#112240', '#2ECC71', '#3BAFDA', '#8892B0'],
    fontFamily: "'Fira Code', monospace",
    fontClass: 'font-mono',
    vibe: 'Developer portfolio classic, navy bg, green accent, code elements.'
  },
  L: {
    bg: '#F3F4F6',
    accent: '#3BAFDA',
    colors: ['#F3F4F6', '#0A192F', '#3BAFDA', '#2ECC71', '#FFFFFF'],
    fontFamily: "'Inter', sans-serif",
    fontClass: 'font-sans',
    vibe: 'Dashboard UI, dark sidebar, clean data presentation.'
  },
  M: {
    bg: '#F3F4F6',
    accent: '#3B82F6',
    colors: ['#F3F4F6', '#111827', '#3B82F6', '#10B981', '#FFFFFF'],
    fontFamily: "'Space Grotesk', sans-serif",
    fontClass: 'font-display',
    vibe: 'Bento grid, marquee ticker, rounded cards, modern portfolio.'
  },
  N: {
    bg: '#FDFBF6',
    accent: '#8B0000',
    colors: ['#FDFBF6', '#1A1A1A', '#8B0000', '#F4F1EA', '#444444'],
    fontFamily: "Georgia, serif",
    fontClass: 'font-serif',
    vibe: 'Newspaper layout, serif fonts, double borders, dossier/classified.'
  },
  O: {
    bg: '#050505',
    accent: '#D4AF37',
    colors: ['#050505', '#0A0A0A', '#D4AF37', '#F7E7CE', '#FFFFFF'],
    fontFamily: "Georgia, serif",
    fontClass: 'font-serif',
    vibe: 'Gold on black, corner ornaments, luxury branding.'
  },
  P: {
    bg: '#F0F0F0',
    accent: '#8C7B6C',
    colors: ['#F0F0F0', '#E3DAC9', '#D4C5B0', '#8C7B6C', '#EFEEB4'],
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    fontClass: 'font-sans',
    vibe: 'Messy, tape/stickers, grunge aesthetic.'
  },
  Q: {
    bg: '#F0F0F0',
    accent: '#1A73E8',
    colors: ['#FFFFFF', '#A2D2FF', '#FFB7B2', '#1A73E8', '#5F6368'],
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    fontClass: 'font-sans',
    vibe: 'School notebook, lined paper, doodles, highlighter marks.'
  },
  R: {
    bg: '#2B2B2B',
    accent: '#8B0000',
    colors: ['#2B2B2B', '#FDF6E3', '#8B0000', '#EAB308', '#000000'],
    fontFamily: "'Courier New', monospace",
    fontClass: 'font-mono',
    vibe: 'Typewriter on aged paper, stamp effect, confidential feel.'
  }
};

/**
 * Main render function loaded in editor.html
 */
function renderSlidePreview(slide, styleId, container, slideNum, totalSlides) {
  // 1. Setup config
  const cfg = EDITOR_STYLES_CONFIG[styleId] || EDITOR_STYLES_CONFIG.Default;
  const isDark = isColorDark(cfg.bg);
  
  // Theme text coloring variables
  const textColor = isDark ? '#FFFFFF' : '#111827';
  const mutedColor = isDark ? '#94A3B8' : '#6B7280';
  const borderColor = isDark ? '#334155' : '#D1D5DB';
  const cardBg = isDark ? '#1E293B' : '#F3F4F6';
  
  // Clean container
  container.innerHTML = '';
  container.style.backgroundColor = cfg.bg;
  
  // Create fixed-resolution Slide Canvas (1280x720 matches PPT widescreen exactly at 96 DPI)
  const canvas = document.createElement('div');
  canvas.className = 'slide-canvas absolute top-0 left-0 overflow-hidden';
  canvas.style.width = '1280px';
  canvas.style.height = '720px';
  canvas.style.transformOrigin = 'top left';
  canvas.style.boxSizing = 'border-box';
  canvas.style.backgroundColor = cfg.bg;
  canvas.style.color = textColor;
  canvas.style.fontFamily = cfg.fontFamily;
  
  // Special background treatments
  if (styleId === 'Default') {
    // Technical thin border matching PPT exactly
    const technicalBorder = document.createElement('div');
    technicalBorder.className = 'absolute pointer-events-none';
    technicalBorder.style.left = '29px'; // 0.3 * 96
    technicalBorder.style.top = '29px';
    technicalBorder.style.width = '1222px'; // 1280 - 58
    technicalBorder.style.height = '662px'; // 720 - 58
    technicalBorder.style.border = '1px solid #333333';
    canvas.appendChild(technicalBorder);
  } else if (styleId === 'E') {
    // Retro Terminal Scanline
    const scanline = document.createElement('div');
    scanline.className = 'absolute inset-0 pointer-events-none z-10';
    scanline.style.backgroundImage = 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))';
    scanline.style.backgroundSize = '100% 4px, 6px 100%';
    canvas.appendChild(scanline);
  } else if (styleId === 'G') {
    // Engineer Blueprint Grid
    const blueprintGrid = document.createElement('div');
    blueprintGrid.className = 'absolute inset-0 pointer-events-none opacity-20';
    blueprintGrid.style.backgroundImage = `
      linear-gradient(${cfg.accent} 1px, transparent 1px),
      linear-gradient(90deg, ${cfg.accent} 1px, transparent 1px)
    `;
    blueprintGrid.style.backgroundSize = '20px 20px';
    canvas.appendChild(blueprintGrid);
  } else if (styleId === 'Q') {
    // School Notebook Ruled Lines
    const ruledPaper = document.createElement('div');
    ruledPaper.className = 'absolute inset-0 pointer-events-none';
    ruledPaper.style.backgroundImage = 'linear-gradient(#A2D2FF 1px, transparent 1px)';
    ruledPaper.style.backgroundSize = '100% 28px';
    ruledPaper.style.backgroundPosition = '0 12px';
    
    const marginLine = document.createElement('div');
    marginLine.className = 'absolute top-0 bottom-0 w-0.5 pointer-events-none';
    marginLine.style.left = '77px';
    marginLine.style.backgroundColor = '#FFB7B2';
    
    canvas.appendChild(ruledPaper);
    canvas.appendChild(marginLine);
  }
  
  // 2. Add top visual accent bar
  const accentBar = document.createElement('div');
  accentBar.className = 'absolute top-0 left-0 w-full z-20';
  accentBar.style.height = '6px'; // 0.06 * 96
  accentBar.style.backgroundColor = cfg.accent;
  canvas.appendChild(accentBar);

  // 3. Add active slide pagination indicator at bottom right
  const pageNumStr = String(slideNum).padStart(2, '0');
  const totalStr = String(totalSlides).padStart(2, '0');
  const pageIndicator = document.createElement('div');
  pageIndicator.className = 'absolute bottom-[48px] right-[96px] text-xs font-mono opacity-60 z-20';
  pageIndicator.textContent = `${pageNumStr} / ${totalStr}`;
  canvas.appendChild(pageIndicator);
  
  // Render layouts
  if (slide.type === 'title') {
    // -------------------------------------------------------------
    // TITLE / COVER SLIDE LAYOUT
    // -------------------------------------------------------------
    
    // Badge
    if (slide.badge) {
      const badge = document.createElement('div');
      badge.className = 'absolute flex items-center justify-center px-3 py-1 text-[15px] font-mono font-semibold uppercase tracking-wider rounded-full border';
      badge.style.left = '400px';
      badge.style.top = '96px';
      badge.style.width = '480px';
      badge.style.height = '40px';
      badge.style.backgroundColor = cardBg;
      badge.style.borderColor = borderColor;
      badge.style.color = cfg.accent;
      badge.textContent = slide.badge;
      canvas.appendChild(badge);
    }

    // Title
    const titleEl = document.createElement('h1');
    titleEl.className = 'absolute flex items-center justify-center text-center font-bold leading-tight tracking-tight';
    titleEl.style.left = '144px';
    titleEl.style.top = '173px';
    titleEl.style.width = '992px';
    titleEl.style.height = '211px';
    titleEl.style.color = textColor;
    titleEl.style.fontSize = '58px';
    titleEl.textContent = slide.title || 'Untitled Presentation';
    canvas.appendChild(titleEl);

    // Subtitle
    if (slide.subtitle) {
      const subEl = document.createElement('p');
      subEl.className = 'absolute text-center font-light leading-normal flex items-start justify-center';
      subEl.style.left = '144px';
      subEl.style.top = '394px';
      subEl.style.width = '992px';
      subEl.style.height = '77px';
      subEl.style.color = mutedColor;
      subEl.style.fontSize = '24px';
      subEl.textContent = slide.subtitle;
      canvas.appendChild(subEl);
    }

    // Authors divider line
    const divider = document.createElement('div');
    divider.className = 'absolute';
    divider.style.left = '496px';
    divider.style.top = '490px';
    divider.style.width = '288px';
    divider.style.height = '1px';
    divider.style.backgroundColor = borderColor;
    canvas.appendChild(divider);

    // Authors / Institution metadata
    if (slide.authors) {
      const authorsEl = document.createElement('div');
      authorsEl.className = 'absolute text-center font-mono leading-relaxed whitespace-pre-line flex items-start justify-center';
      authorsEl.style.left = '192px';
      authorsEl.style.top = '509px';
      authorsEl.style.width = '896px';
      authorsEl.style.height = '115px';
      authorsEl.style.color = mutedColor;
      authorsEl.style.fontSize = '16px';
      authorsEl.textContent = slide.authors;
      canvas.appendChild(authorsEl);
    }

  } else {
    // -------------------------------------------------------------
    // CONTENT & SPLIT SLIDES LAYOUT
    // -------------------------------------------------------------
    
    // Pill Badge
    if (slide.badge) {
      const badge = document.createElement('div');
      badge.className = 'absolute flex items-center px-3 py-1 text-[13px] font-mono font-semibold uppercase tracking-wider rounded border';
      badge.style.left = '77px';
      badge.style.top = '48px';
      badge.style.width = '269px';
      badge.style.height = '40px';
      badge.style.backgroundColor = cardBg;
      badge.style.borderColor = borderColor;
      badge.style.color = cfg.accent;
      badge.textContent = slide.badge;
      canvas.appendChild(badge);
    }

    // Slide Header
    const headerEl = document.createElement('h2');
    headerEl.className = 'absolute font-bold tracking-tight border-b flex items-center';
    headerEl.style.left = '77px';
    headerEl.style.top = '106px';
    headerEl.style.width = '691px';
    headerEl.style.height = '77px';
    headerEl.style.borderColor = borderColor;
    headerEl.style.color = textColor;
    headerEl.style.fontSize = '37px';
    headerEl.style.lineHeight = '1.2';
    headerEl.textContent = slide.title || 'Untitled Slide';
    canvas.appendChild(headerEl);

    // Bullets list
    if (slide.bullets && Array.isArray(slide.bullets)) {
      const listEl = document.createElement('ul');
      listEl.className = 'absolute space-y-1.5 overflow-y-auto pr-2 custom-scrollbar';
      listEl.style.lineHeight = '1.35';
      listEl.style.left = '77px';
      listEl.style.top = '192px';
      listEl.style.width = '691px';
      listEl.style.height = '432px';
      
      slide.bullets.forEach(b => {
        const li = document.createElement('li');
        
        // Detect nesting / sub-bullet indentation
        if (b.startsWith('  ▪') || b.startsWith('  -') || b.startsWith('  *') || b.match(/^[\s\t]*[▪\-*]/)) {
          li.className = 'pl-6 list-none opacity-80';
          li.style.fontSize = '17px';
          const content = b.replace(/^[\s\t]*[▪\-*]/, '').trim();
          li.innerHTML = `<span style="color: ${cfg.accent};" class="mr-2">▪</span> ${content}`;
        } else if (b.startsWith('  1.') || b.startsWith('  2.') || b.match(/^[\s\t]*\d+\./)) {
          li.className = 'pl-6 list-none opacity-80';
          li.style.fontSize = '17px';
          const match = b.match(/^[\s\t]*(\d+\.)/);
          const num = match ? match[1] : '1.';
          const content = b.replace(/^[\s\t]*\d+\./, '').trim();
          li.innerHTML = `<span style="color: ${cfg.accent};" class="mr-2 font-mono">${num}</span> ${content}`;
        } else {
          // Top-level bullet point
          li.className = 'list-none relative pl-5';
          li.style.fontSize = '20px';
          li.innerHTML = `<span style="color: ${cfg.accent};" class="absolute left-0">▸</span> ${b}`;
        }
        
        listEl.appendChild(li);
      });
      
      canvas.appendChild(listEl);
    }

    // -------------------------------------------------------------
    // RIGHT COLUMN VISUAL REPRESENTATION
    // -------------------------------------------------------------
    const rightCol = document.createElement('div');
    rightCol.className = 'absolute flex flex-col justify-center items-stretch overflow-hidden';
    rightCol.style.left = '826px';
    rightCol.style.top = '134px';
    rightCol.style.width = '377px';
    rightCol.style.height = '442px';

    if (slide.type === 'split' && slide.rightType) {
      if (slide.rightType === 'table' && slide.table) {
        // Table element
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'w-full h-full overflow-y-auto rounded-lg border bg-black/10 custom-scrollbar';
        tableWrapper.style.borderColor = borderColor;
        
        const table = document.createElement('table');
        table.className = 'w-full text-left border-collapse';
        table.style.fontSize = '12px';
        
        // Headers
        if (slide.table.headers) {
          const thead = document.createElement('thead');
          thead.style.backgroundColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
          const tr = document.createElement('tr');
          slide.table.headers.forEach(h => {
            const th = document.createElement('th');
            th.className = 'p-2 font-bold font-mono border-b';
            th.style.borderColor = borderColor;
            th.style.color = cfg.accent;
            th.textContent = h;
            tr.appendChild(th);
          });
          thead.appendChild(tr);
          table.appendChild(thead);
        }
        
        // Rows
        if (slide.table.rows) {
          const tbody = document.createElement('tbody');
          slide.table.rows.forEach((row, rIdx) => {
            const tr = document.createElement('tr');
            if (rIdx % 2 === 0) {
              tr.style.backgroundColor = 'rgba(255,255,255,0.02)';
            }
            row.forEach(cell => {
              const td = document.createElement('td');
              td.className = 'p-2 border-b';
              td.style.borderColor = borderColor;
              td.textContent = cell;
              tr.appendChild(td);
            });
            tbody.appendChild(tr);
          });
          table.appendChild(tbody);
        }
        
        tableWrapper.appendChild(table);
        rightCol.appendChild(tableWrapper);

      } else if (slide.rightType === 'chart' && slide.chart) {
        // Dynamic CSS Chart representation
        const chartWrapper = document.createElement('div');
        chartWrapper.className = 'w-full h-full flex flex-col items-center justify-between p-4 rounded-lg border bg-black/15';
        chartWrapper.style.borderColor = borderColor;

        const chartTitle = document.createElement('div');
        chartTitle.className = 'text-[12px] font-mono text-center uppercase tracking-widest';
        chartTitle.style.color = mutedColor;
        chartTitle.textContent = `Native Chart : ${slide.chart.type.toUpperCase()}`;
        chartWrapper.appendChild(chartTitle);

        const barsContainer = document.createElement('div');
        barsContainer.className = 'w-full flex items-end justify-around h-64 px-2';

        const maxVal = Math.max(...(slide.chart.values || [100]));
        
        if (slide.chart.labels && slide.chart.values) {
          slide.chart.values.forEach((val, idx) => {
            const label = slide.chart.labels[idx] || '';
            const barWrapper = document.createElement('div');
            barWrapper.className = 'flex flex-col items-center flex-grow mx-1';

            const bar = document.createElement('div');
            bar.className = 'w-10 rounded-t relative group transition-all duration-500';
            bar.style.backgroundColor = cfg.accent;
            const pct = Math.max(8, Math.round((val / maxVal) * 100));
            bar.style.height = `${pct}%`;
            
            if (isDark) {
              bar.style.boxShadow = `0 0 10px ${cfg.accent}80`;
            }

            const valLabel = document.createElement('span');
            valLabel.className = 'text-[12px] font-mono mb-1 font-bold';
            valLabel.style.color = textColor;
            valLabel.textContent = val;
            barWrapper.appendChild(valLabel);

            barWrapper.appendChild(bar);

            const axisLabel = document.createElement('span');
            axisLabel.className = 'text-[11px] font-mono mt-2 truncate w-16 text-center opacity-85';
            axisLabel.style.color = mutedColor;
            axisLabel.textContent = label;
            barWrapper.appendChild(axisLabel);

            barsContainer.appendChild(barWrapper);
          });
        }

        chartWrapper.appendChild(barsContainer);
        rightCol.appendChild(chartWrapper);

      } else if (slide.rightType === 'metric' && slide.metric) {
        // High impact metric card
        const metricCard = document.createElement('div');
        metricCard.className = 'w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-xl border relative overflow-hidden';
        metricCard.style.backgroundColor = cardBg;
        metricCard.style.borderColor = borderColor;
        
        const valueEl = document.createElement('div');
        valueEl.className = 'text-[72px] font-extrabold tracking-tighter mb-2';
        valueEl.style.color = cfg.accent;
        valueEl.textContent = slide.metric.value || '0%';
        metricCard.appendChild(valueEl);
        
        const labelEl = document.createElement('div');
        labelEl.className = 'text-[17px] font-medium';
        labelEl.style.color = textColor;
        labelEl.textContent = slide.metric.label || 'Indicator Label';
        metricCard.appendChild(labelEl);
        
        rightCol.appendChild(metricCard);
      }

    } else {
      // Fallback illustration container (transparent, layouts handled by card components)
      const illustration = document.createElement('div');
      illustration.className = 'w-full h-full relative overflow-hidden';
      
      injectStyleIllustration(illustration, styleId, cfg, isDark);
      rightCol.appendChild(illustration);
    }
    
    canvas.appendChild(rightCol);
  }
  
  container.appendChild(canvas);
}

/**
 * Helper to determine if background color is dark
 */
function isColorDark(hexColor) {
  if (!hexColor || hexColor.charAt(0) !== '#') return true;
  const c = hexColor.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 130;
}

/**
 * Injects themed DOM elements inside the right panel to show signature decorative styles.
 */
function injectStyleIllustration(parent, id, cfg, isDark) {
  // Clear parent
  parent.innerHTML = '';
  
  const inner = document.createElement('div');
  inner.className = 'w-full h-full relative';

  const accentColor = cfg.accent;
  
  switch (id) {
    case 'Default': // Default Showcase
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #494949; border: 1px solid #656565; border-radius: 10px; overflow: hidden; box-sizing: border-box;">
          <!-- Lime top accent line -->
          <div style="position: absolute; left: 0; top: 0; width: 100%; height: 5px; background-color: #BFFF00;"></div>
          
          <!-- Tech grid dots -->
          <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; pointer-events: none;">
            ${Array.from({length: 6}).map((_, r) => 
              Array.from({length: 5}).map((_, c) => `
                <div style="position: absolute; left: ${38 + c * 48}px; top: ${58 + r * 48}px; width: 4px; height: 4px; background-color: #656565; border-radius: 50%;"></div>
              `).join('')
            ).join('')}
          </div>
          
          <!-- Central rings -->
          <div class="animate-spin" style="position: absolute; left: calc(50% - 67px); top: calc(50% - 67px); width: 134px; height: 134px; border: 2px dashed #BFFF00; border-radius: 50%; animation-duration: 6s; box-sizing: border-box;"></div>
          <div style="position: absolute; left: calc(50% - 38px); top: calc(50% - 38px); width: 77px; height: 77px; background-color: #BFFF00; border-radius: 50%; display: flex; align-items: center; justify-content: center; align-items: center;">
            <div style="font-family: 'Courier New', monospace; font-size: 11px; font-weight: bold; color: #000000; text-align: center;">SHOWCASE</div>
          </div>
        </div>
      `;
      break;
      
    case 'A': // Neo-Pop
      inner.innerHTML = `
        <!-- Shadow -->
        <div style="position: absolute; left: 38px; top: 19px; width: 339px; height: 442px; background-color: #000000; box-sizing: border-box;"></div>
        <!-- Card -->
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #FFEB3B; border: 3px solid #000000; display: flex; flex-direction: column; align-items: center; justify-content: center; box-sizing: border-box;">
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: 36px; font-weight: bold; color: #000000; text-align: center; line-height: 1.2; margin-top: -30px;">
            NEO<br>POP!
          </div>
          <!-- Pink accent bar -->
          <div style="position: absolute; left: 29px; bottom: 34px; width: 281px; height: 34px; background-color: #FF69B4; border: 2px solid #000000; box-sizing: border-box;"></div>
        </div>
      `;
      break;
      
    case 'B': // Tech Glass
      inner.innerHTML = `
        <!-- Purple glow orb -->
        <div style="position: absolute; left: -10px; top: 19px; width: 288px; height: 288px; background-color: #7C3AED; border-radius: 50%; filter: blur(40px); opacity: 0.4;"></div>
        <!-- Blue glow orb -->
        <div style="position: absolute; left: 96px; top: 173px; width: 211px; height: 211px; background-color: #3B82F6; border-radius: 50%; filter: blur(40px); opacity: 0.3;"></div>
        <!-- Glass card overlay -->
        <div style="position: absolute; left: 48px; top: 77px; width: 192px; height: 240px; background: rgba(30, 41, 59, 0.7); border: 1px solid #475569; border-radius: 12px; backdrop-filter: blur(8px); padding: 19px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: bold; color: #FFFFFF;">Core Focus</div>
          <div style="display: flex; flex-direction: column; gap: 15px;">
            ${['Immersive UX', 'Data Driven', 'Deep Focus'].map((t, i) => `
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 10px; height: 10px; background-color: ${i === 0 ? '#60A5FA' : i === 1 ? '#C084FC' : '#818CF8'}; border-radius: 50%; box-shadow: 0 0 8px ${i === 0 ? '#60A5FA' : i === 1 ? '#C084FC' : '#818CF8'};"></div>
                <span style="font-family: 'Inter', sans-serif; font-size: 12px; color: #94A3B8;">${t}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;
      
    case 'C': // Swiss Editorial
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; overflow: hidden; box-sizing: border-box;">
          <!-- Grid lines -->
          ${Array.from({length: 7}).map((_, i) => `
            <div style="position: absolute; left: 0; top: ${i * 58}px; width: 100%; height: 1px; background-color: #D1D5DB;"></div>
          `).join('')}
          ${Array.from({length: 5}).map((_, i) => `
            <div style="position: absolute; left: ${i * 84.75}px; top: 0; width: 1px; height: 346px; background-color: #D1D5DB;"></div>
          `).join('')}
          <!-- Numbers -->
          ${['01', '02', '03', '04'].map((n, i) => `
            <div style="position: absolute; left: ${5 + i * 84.75}px; top: 5px; font-family: 'Georgia', serif; font-size: 11px; color: #9CA3AF;">${n}</div>
          `).join('')}
          <!-- Big italic text -->
          <div style="position: absolute; left: 19px; top: 115px; width: 301px; height: 144px; display: flex; align-items: center; font-family: 'Georgia', serif; font-size: 32px; font-style: italic; color: #166534; line-height: 1.2;">
            Clarity<br>First.
          </div>
        </div>
      `;
      break;
      
    case 'D': // Modern SaaS
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.06); padding: 19px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-start; gap: 20px;">
          <!-- Title bar dots -->
          <div style="display: flex; gap: 8px;">
            <div style="width: 14px; height: 14px; background-color: #EF4444; border-radius: 50%;"></div>
            <div style="width: 14px; height: 14px; background-color: #F59E0B; border-radius: 50%;"></div>
            <div style="width: 14px; height: 14px; background-color: #22C55E; border-radius: 50%;"></div>
          </div>
          <!-- Skeleton lines -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="width: 60%; height: 14px; background-color: #F3F4F6; border-radius: 3px;"></div>
            <div style="width: 50%; height: 14px; background-color: #F3F4F6; border-radius: 3px;"></div>
            <div style="width: 40%; height: 14px; background-color: #F3F4F6; border-radius: 3px;"></div>
          </div>
          <!-- Chart area -->
          <div style="flex-grow: 1; min-height: 154px; background-color: #EEF2FF; border: 1px solid #C7D2FE; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Inter', sans-serif; font-size: 13px; color: #A5B4FC; font-weight: 500;">Chart Preview</span>
          </div>
        </div>
      `;
      break;
      
    case 'E': // Retro Terminal
      const terminalLines = [
        'user@edu:~$ ./init.sh',
        '',
        'Loading modules...',
        '[OK] Data Science',
        '[OK] Web Development',
        '[OK] Artificial Intelligence',
        '',
        'All systems nominal.',
        '',
        '> Ready_█'
      ];
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #0C0C0C; border: 2px solid ${accentColor}; overflow: hidden; box-sizing: border-box; display: flex; flex-direction: column;">
          <!-- Header bar -->
          <div style="width: 100%; height: 34px; background-color: #1A1A1A; display: flex; align-items: center; padding-left: 15px; gap: 8px; border-bottom: 1px solid ${accentColor}30; box-sizing: border-box;">
            <div style="width: 12px; height: 12px; background-color: #EF4444; border-radius: 50%;"></div>
            <div style="width: 12px; height: 12px; background-color: #F59E0B; border-radius: 50%;"></div>
            <div style="width: 12px; height: 12px; background-color: #22C55E; border-radius: 50%;"></div>
          </div>
          <!-- Terminal lines -->
          <div style="flex-grow: 1; padding: 15px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 11px; line-height: 1.4; display: flex; flex-direction: column; gap: 2px; box-sizing: border-box;">
            ${terminalLines.map(line => {
              const isOk = line.startsWith('[OK]');
              const color = isOk ? '#4ADE80' : accentColor;
              return `<div style="color: ${color}; min-height: 15px; white-space: pre;">${line}</div>`;
            }).join('')}
          </div>
        </div>
      `;
      break;
      
    case 'F': // Organic & Soft
      inner.innerHTML = `
        <!-- Blobs -->
        <div style="position: absolute; left: 0px; top: 48px; width: 288px; height: 288px; background-color: #D4E0B1; border-radius: 40% 60% 70% 30% / 50% 60% 30% 70%; opacity: 0.8;"></div>
        <div style="position: absolute; left: 96px; top: 0px; width: 192px; height: 192px; background-color: #E3EBCB; border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; opacity: 0.8;"></div>
        <div style="position: absolute; left: 58px; top: 211px; width: 144px; height: 144px; background-color: #F3F6E6; border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; opacity: 0.9;"></div>
        <!-- Centered text -->
        <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
          <span style="font-size: 38px;">🍃</span>
          <span style="font-family: 'Inter', sans-serif; font-size: 24px; font-weight: bold; color: #2D3A30; text-align: center; line-height: 1.2;">Natural<br>Growth</span>
        </div>
      `;
      break;
      
    case 'G': // Blueprint
      const bMetrics = [
        { label: 'Efficiency', pct: 0.98, color: accentColor },
        { label: 'Uptime', pct: 0.95, color: '#10B981' },
        { label: 'Code Quality', pct: 0.88, color: '#8B5CF6' },
        { label: 'Repetition', pct: 0.05, color: '#EF4444' }
      ];
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #FFFFFF; border: 2px dashed ${accentColor}; box-sizing: border-box; display: flex; flex-direction: column; padding: 19px; justify-content: flex-start; gap: 24px;">
          <div style="font-family: 'Fira Code', 'Courier New', monospace; font-size: 11px; font-weight: bold; color: #94A3B8;">METRICS</div>
          
          <div style="display: flex; flex-direction: column; gap: 19px;">
            ${bMetrics.map(m => `
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; justify-content: justify-between; font-family: 'Fira Code', 'Courier New', monospace; font-size: 11px; font-weight: bold; color: #64748B; justify-content: space-between;">
                  <span>${m.label}</span>
                  <span>${Math.round(m.pct * 100)}%</span>
                </div>
                <!-- Progress bar track -->
                <div style="width: 100%; height: 15px; background-color: #E2E8F0; position: relative;">
                  <div style="position: absolute; left: 0; top: 0; height: 100%; width: ${m.pct * 100}%; background-color: ${m.color};"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;
      
    case 'H': // Pure Utility
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
          <!-- White box -->
          <div style="width: 100%; height: 173px; background-color: #F5F5F5; border: 3px solid #000000; padding: 19px; display: flex; align-items: center; box-sizing: border-box;">
            <div style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: bold; color: #000000; line-height: 1.2;">
              MODULE<br>Backend API
            </div>
          </div>
          <!-- Black box -->
          <div style="width: 100%; height: 173px; background-color: #000000; border: 3px solid #000000; padding: 19px; display: flex; align-items: center; box-sizing: border-box;">
            <div style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: bold; color: #FFFFFF; line-height: 1.2;">
              MODULE<br>Automation
            </div>
          </div>
        </div>
      `;
      break;
      
    case 'I': // AI Innovator
      inner.innerHTML = `
        <!-- Glow circles -->
        <div style="position: absolute; left: -10px; top: 19px; width: 307px; height: 307px; background-color: #6366F1; border-radius: 50%; filter: blur(50px); opacity: 0.5;"></div>
        <div style="position: absolute; left: 58px; top: 86px; width: 192px; height: 192px; background-color: #A855F7; border-radius: 50%; filter: blur(30px); opacity: 0.4;"></div>
        <div style="position: absolute; left: 106px; top: 134px; width: 96px; height: 96px; background-color: #EC4899; border-radius: 50%; filter: blur(20px); opacity: 0.3;"></div>
        
        <!-- Text Overlay -->
        <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
          <div style="font-family: 'Inter', sans-serif; font-size: 48px; font-weight: 800; letter-spacing: -2px; background: linear-gradient(135deg, #EC4899, #A855F7, #6366F1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 20px rgba(168,85,247,0.3);">
            AI
          </div>
        </div>
      `;
      break;
      
    case 'J': // Research
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #F8FAFC; border: 1px solid #E2E8F0; box-sizing: border-box; display: flex; flex-direction: column;">
          <!-- Top grey line -->
          <div style="width: 100%; height: 6px; background-color: #CBD5E1;"></div>
          
          <div style="padding: 19px; flex-grow: 1; display: flex; flex-direction: column; gap: 15px; box-sizing: border-box;">
            <div style="font-family: 'Fira Code', 'Courier New', monospace; font-size: 10px; color: #94A3B8;">ABSTRACT_VIEW.JS</div>
            
            <!-- Skeleton lines -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${Array.from({length: 6}).map((_, i) => `
                <div style="width: ${85 - i * 5}%; height: 8px; background-color: #E2E8F0;"></div>
              `).join('')}
            </div>
            
            <!-- Yellow highlight box -->
            <div style="margin-top: 20px; width: 154px; height: 29px; background-color: #FEF08A; display: flex; align-items: center; padding-left: 10px; border-left: 3px solid #EAB308; box-sizing: border-box;">
              <span style="font-family: 'Georgia', serif; font-size: 11px; font-weight: bold; color: #0F172A;">validitas data</span>
            </div>
          </div>
        </div>
      `;
      break;
      
    case 'K': // Brand Identity
      const kLines = [
        { text: 'function connect() {', color: '#2ECC71' },
        { text: '  // skills list', color: '#8892B0' },
        { text: '  ▹ Laravel', color: '#8892B0' },
        { text: '  ▹ Express.js', color: '#8892B0' },
        { text: '  ▹ Docker', color: '#8892B0' },
        { text: '  ▹ Python/VBA', color: '#8892B0' },
        { text: '', color: '#8892B0' },
        { text: '  return message;', color: '#2ECC71' },
        { text: '}', color: '#2ECC71' }
      ];
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #112240; border: 1px solid #233554; padding: 24px; box-sizing: border-box; font-family: 'Fira Code', 'Courier New', monospace; font-size: 12px; line-height: 1.5; display: flex; flex-direction: column; gap: 4px;">
          <div style="color: #44597F; margin-bottom: 10px;">// portfolio stack</div>
          ${kLines.map(ln => `
            <div style="color: ${ln.color}; min-height: 18px; white-space: pre;">${ln.text}</div>
          `).join('')}
        </div>
      `;
      break;
      
    case 'L': // Dashboard
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; display: flex; box-sizing: border-box; overflow: hidden; border-radius: 12px; border: 1px solid #E5E7EB; background-color: #F9FAFB;">
          <!-- Sidebar -->
          <div style="width: 82px; height: 100%; background-color: #0A192F; padding: 14px 10px; box-sizing: border-box; display: flex; flex-direction: column; gap: 15px;">
            <div style="width: 100%; height: 29px; background-color: #3BAFDA; border-radius: 5px;"></div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="width: 100%; height: 8px; background-color: rgba(255,255,255,0.15); border-radius: 2px;"></div>
              <div style="width: 80%; height: 8px; background-color: rgba(255,255,255,0.15); border-radius: 2px;"></div>
              <div style="width: 90%; height: 8px; background-color: rgba(255,255,255,0.15); border-radius: 2px;"></div>
            </div>
          </div>
          <!-- Main Content -->
          <div style="flex-grow: 1; height: 100%; background-color: #FFFFFF; padding: 14px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
            <!-- Stats row -->
            <div style="display: flex; gap: 10px;">
              ${['#3BAFDA', '#A855F7', '#2ECC71'].map(c => `
                <div style="flex-grow: 1; height: 58px; background-color: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 5px; display: flex; align-items: center; justify-content: center;">
                  <div style="width: 12px; height: 12px; background-color: ${c}; border-radius: 50%;"></div>
                </div>
              `).join('')}
            </div>
            <!-- Activity lines -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${Array.from({length: 4}).map(() => `
                <div style="width: 100%; height: 8px; background-color: #F3F4F6; border-radius: 2px;"></div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      break;
      
    case 'M': // Bento Living Grid
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; box-sizing: border-box; position: relative;">
          <!-- Bento Items -->
          <!-- Item 1 (left vertical) -->
          <div style="position: absolute; left: 0; top: 0; width: 144px; height: 192px; background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); padding: 15px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="width: 30px; height: 30px; background-color: #EFF6FF; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 14px;">💡</span>
            </div>
            <div style="width: 70%; height: 10px; background-color: #F3F4F6; border-radius: 2px;"></div>
          </div>
          <!-- Item 2 (right horizontal top) -->
          <div style="position: absolute; left: 154px; top: 0; width: 125px; height: 86px; background-color: #111827; border-radius: 12px; overflow: hidden; padding: 15px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
            <div style="position: absolute; left: 0; top: 0; width: 100%; height: 5px; background-color: #10B981;"></div>
            <div style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: bold; color: #3B82F6;">42+</div>
          </div>
          <!-- Item 3 (right horizontal middle) -->
          <div style="position: absolute; left: 154px; top: 96px; width: 125px; height: 96px; background-color: #E0E7FF; border-radius: 12px; padding: 15px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 24px;">🚀</span>
          </div>
          <!-- Item 4 (bottom horizontal) -->
          <div style="position: absolute; left: 0; top: 202px; width: 173px; height: 86px; background-color: #D1FAE5; border-radius: 12px; padding: 15px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">
            <div style="font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: bold; color: #065F46;">Highly Performant</div>
          </div>
          <!-- Item 5 (bottom right) -->
          <div style="position: absolute; left: 182px; top: 202px; width: 96px; height: 86px; background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 24px;">🔥</span>
          </div>
        </div>
      `;
      break;
      
    case 'N': // The Chronicle
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #FDFBF6; border: 2px solid #1A1A1A; padding: 8px; box-sizing: border-box;">
          <div style="width: 100%; height: 100%; border: 1px solid #1A1A1A; padding: 15px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px; overflow: hidden;">
            <div style="font-family: 'Georgia', serif; font-size: 18px; font-weight: bold; color: #1A1A1A; text-align: center; border-bottom: 2px solid #1A1A1A; padding-bottom: 4px; text-transform: uppercase;">
              THE DAILY<br>ENGINEER
            </div>
            
            <div style="border-bottom: 1px solid #1A1A1A; padding-bottom: 2px;"></div>
            
            <!-- Newspaper columns -->
            <div style="display: flex; gap: 15px; flex-grow: 1;">
              <!-- Col 1 -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                ${Array.from({length: 8}).map((_, i) => `
                  <div style="width: ${i % 2 === 0 ? '100%' : '90%'}; height: 6px; background-color: #D1D5DB;"></div>
                `).join('')}
              </div>
              <!-- Col 2 -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                ${Array.from({length: 8}).map((_, i) => `
                  <div style="width: ${i % 2 === 0 ? '90%' : '100%'}; height: 6px; background-color: #D1D5DB;"></div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
      break;
      
    case 'O': // Royal Luxury
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #0A0A0A; border: 2px solid #D4AF37; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px; overflow: hidden; position: relative;">
          <!-- Gold borders -->
          <div style="position: absolute; left: 0; top: 0; width: 100%; height: 4px; background-color: #D4AF37;"></div>
          <div style="position: absolute; left: 0; bottom: 0; width: 100%; height: 4px; background-color: #D4AF37;"></div>
          
          <!-- Corner boxes -->
          <div style="position: absolute; left: 12px; top: 12px; width: 24px; height: 24px; border: 1px solid #D4AF37;"></div>
          <div style="position: absolute; right: 12px; top: 12px; width: 24px; height: 24px; border: 1px solid #D4AF37;"></div>
          <div style="position: absolute; left: 12px; bottom: 12px; width: 24px; height: 24px; border: 1px solid #D4AF37;"></div>
          <div style="position: absolute; right: 12px; bottom: 12px; width: 24px; height: 24px; border: 1px solid #D4AF37;"></div>
          
          <!-- Crown and text -->
          <div style="font-size: 48px; color: #D4AF37;">👑</div>
          <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: bold; color: #D4AF37; letter-spacing: 4px; text-transform: uppercase;">IMPERIAL</div>
          <div style="font-family: 'Georgia', serif; font-size: 9px; color: #D4AF37; opacity: 0.8; letter-spacing: 1px;">Est. MMXXIV</div>
        </div>
      `;
      break;
      
    case 'P': // The Slum
      inner.innerHTML = `
        <!-- Shadow sheet -->
        <div style="position: absolute; left: 38px; top: 19px; width: 300px; height: 336px; background-color: #8C7B6C; transform: rotate(2deg); box-sizing: border-box;"></div>
        <!-- Card sheet -->
        <div style="position: absolute; left: 19px; top: 0; width: 300px; height: 336px; background-color: #E3DAC9; border: 1px dashed #8C7B6C; transform: rotate(-1deg); box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
          <!-- Tape overlay -->
          <div style="position: absolute; left: 96px; top: -14px; width: 96px; height: 29px; background-color: rgba(239, 238, 180, 0.7); transform: rotate(-3deg); border: 1px dashed rgba(0,0,0,0.1); box-sizing: border-box;"></div>
          
          <div style="font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 18px; font-weight: bold; color: #8C7B6C; text-align: center; line-height: 1.4;">
            WIP<br>*males ngoding
          </div>
        </div>
      `;
      break;
      
    case 'Q': // Buku Catatan
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #FFFFFF; border: 1px solid #D1D5DB; box-sizing: border-box; overflow: hidden; position: relative;">
          <!-- Red vertical margin line -->
          <div style="position: absolute; left: 53px; top: 0; bottom: 0; width: 2px; background-color: #FFB7B2;"></div>
          
          <!-- Ruled lines -->
          ${Array.from({length: 14}).map((_, i) => `
            <div style="position: absolute; left: 0; top: ${28 + i * 27}px; width: 100%; height: 1px; background-color: #A2D2FF;"></div>
          `).join('')}
          
          <!-- Binder holes -->
          ${[58, 173, 288].map(y => `
            <div style="position: absolute; left: 8px; top: ${y}px; width: 18px; height: 18px; background-color: #F0F0F0; border: 1px solid #D1D5DB; border-radius: 50%;"></div>
          `).join('')}
          
          <!-- Written text -->
          <div style="position: absolute; left: 67px; top: 38px; font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 13px; font-weight: bold; color: #1A73E8;">
            Catatan Hari Ini:
          </div>
          
          <!-- Grade circle A+ -->
          <div style="position: absolute; right: 15px; top: 15px; width: 55px; height: 55px; border: 2px solid #EF4444; border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(12deg); box-sizing: border-box;">
            <span style="font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 15px; font-weight: bold; color: #EF4444;">A+</span>
          </div>
        </div>
      `;
      break;
      
    case 'R': // Mesin Ketik
      const rTexts = [
        { text: '01. OBJECTIVE', bold: true },
        { text: '' },
        { text: 'To design robust' },
        { text: 'backend systems.' },
        { text: '' },
        { text: '02. KNOWN SKILLS', bold: true },
        { text: '[x] Laravel (Expert)' },
        { text: '[x] Python Scripting' },
        { text: '[x] System Architecture' },
        { text: '[ ] Sleep Early (Failed)' }
      ];
      inner.innerHTML = `
        <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #FDF6E3; box-shadow: 0 10px 25px rgba(0,0,0,0.15); padding: 19px; box-sizing: border-box; display: flex; flex-direction: column;">
          <!-- Title bar -->
          <div style="display: flex; justify-content: justify-between; font-family: 'Courier New', monospace; font-size: 10px; font-weight: bold; color: #2B2B2B; justify-content: space-between; border-bottom: 2px solid #2B2B2B; padding-bottom: 6px; margin-bottom: 15px;">
            <span>FILE: #882-BIO</span>
          </div>
          
          <!-- Content lines -->
          <div style="display: flex; flex-direction: column; gap: 4px;">
            ${rTexts.map(ln => `
              <div style="font-family: 'Courier New', monospace; font-size: 11px; font-weight: ${ln.bold ? 'bold' : 'normal'}; color: #2B2B2B; min-height: 14px;">${ln.text}</div>
            `).join('')}
          </div>
          
          <!-- APPROVED Stamp -->
          <div style="position: absolute; right: 19px; top: 58px; width: 115px; height: 44px; border: 3px solid #8B0000; border-radius: 5px; display: flex; align-items: center; justify-content: center; transform: rotate(15deg); box-sizing: border-box;">
            <span style="font-family: 'Courier New', monospace; font-size: 12px; font-weight: bold; color: #8B0000; letter-spacing: 1px;">APPROVED</span>
          </div>
        </div>
      `;
      break;
  }

  parent.appendChild(inner);
}

// Helper function to scale the slide-canvas inside the mockup container
function updateSlideScale() {
  requestAnimationFrame(() => {
    const container = document.getElementById('slide-preview-container');
    if (!container) return;
    const canvas = container.querySelector('.slide-canvas');
    if (!canvas) return;
    
    // Prioritize parent element width (mockup-outer) as it determines absolute child dimensions
    const parentWidth = container.parentElement ? container.parentElement.clientWidth : 0;
    const containerWidth = parentWidth || container.clientWidth || container.offsetWidth;
    
    let scale = containerWidth / 1280;
    if (isNaN(scale) || scale <= 0) {
      scale = 0.5; // safety fallback
    }
    
    console.log("updateSlideScale: containerWidth =", containerWidth, "scale =", scale);
    canvas.style.transform = `scale(${scale})`;
  });
}

// Global binding
window.renderSlidePreview = renderSlidePreview;
window.updateSlideScale = updateSlideScale;
