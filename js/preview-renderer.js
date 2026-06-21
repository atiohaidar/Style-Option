/**
 * Preview Renderer for Slides-as-Code Workspace
 * Generates dynamic, responsive HTML/CSS structures inside the 16:9 mockup container
 * matching the design properties (background, typography, borders, charts, tables) of each style option.
 */

// Using GLOBAL_STYLES_CONFIG from window (loaded via styles-config.js)

/**
 * Main render function loaded in editor.html
 */
function renderSlidePreview(slide, styleId, container, slideNum, totalSlides) {
  // 1. Setup config
  const cfg = window.GLOBAL_STYLES_CONFIG[styleId] || window.GLOBAL_STYLES_CONFIG.Default;
  const isDark = window.isColorDark(cfg.bg);
  
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
            barWrapper.className = 'flex flex-col items-center justify-end h-full flex-grow mx-1';

            const valLabel = document.createElement('span');
            valLabel.className = 'text-[12px] font-mono mb-1 font-bold';
            valLabel.style.color = textColor;
            valLabel.textContent = val;
            barWrapper.appendChild(valLabel);

            // Track container to resolve percentage heights properly
            const barTrack = document.createElement('div');
            barTrack.className = 'w-10 h-44 flex flex-col justify-end relative';

            const bar = document.createElement('div');
            bar.className = 'w-full rounded-t relative group transition-all duration-500';
            bar.style.backgroundColor = cfg.accent;
            const pct = Math.max(8, Math.round((val / maxVal) * 100));
            bar.style.height = `${pct}%`;
            
            if (isDark) {
              bar.style.boxShadow = `0 0 10px ${cfg.accent}80`;
            }

            barTrack.appendChild(bar);
            barWrapper.appendChild(barTrack);

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
 * Injects themed DOM elements inside the right panel to show signature decorative styles
 */
function injectStyleIllustration(parent, id, cfg, isDark) {
  // Clear parent
  parent.innerHTML = '';
  
  const inner = document.createElement('div');
  inner.className = 'w-full h-full relative';

  const accentColor = cfg.accent;
  const renderer = (window.STYLE_ILLUSTRATIONS && window.STYLE_ILLUSTRATIONS[id]) || 
                   (window.STYLE_ILLUSTRATIONS && window.STYLE_ILLUSTRATIONS.Default);
  
  if (renderer) {
    inner.innerHTML = renderer(accentColor, isDark);
  } else {
    // Fallback if illustrations module is not loaded
    inner.innerHTML = `<div class="absolute w-24 h-24 rounded-full border-4 opacity-70 animate-spin" style="border-color: ${accentColor} transparent ${accentColor} transparent;"></div>`;
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
