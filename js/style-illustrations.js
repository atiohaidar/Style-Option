/**
 * Style Illustrations Dictionary for Slides-as-Code
 * Contains the high-fidelity HTML templates for all 18 right-column decorative cards.
 * Extracted from preview-renderer.js to keep the renderer modular and easy to maintain.
 */
const STYLE_ILLUSTRATIONS = {
  Default: (accentColor, isDark) => `
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
  `,
  
  A: (accentColor, isDark) => `
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
  `,
  
  B: (accentColor, isDark) => `
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
  `,
  
  C: (accentColor, isDark) => `
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
  `,
  
  D: (accentColor, isDark) => `
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
  `,
  
  E: (accentColor, isDark) => {
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
    return `
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
  },
  
  F: (accentColor, isDark) => `
    <!-- Blobs -->
    <div style="position: absolute; left: 0px; top: 48px; width: 288px; height: 288px; background-color: #D4E0B1; border-radius: 40% 60% 70% 30% / 50% 60% 30% 70%; opacity: 0.8;"></div>
    <div style="position: absolute; left: 96px; top: 0px; width: 192px; height: 192px; background-color: #E3EBCB; border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; opacity: 0.8;"></div>
    <div style="position: absolute; left: 58px; top: 211px; width: 144px; height: 144px; background-color: #F3F6E6; border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; opacity: 0.9;"></div>
    <!-- Centered text -->
    <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
      <span style="font-size: 38px;">🍃</span>
      <span style="font-family: 'Inter', sans-serif; font-size: 24px; font-weight: bold; color: #2D3A30; text-align: center; line-height: 1.2;">Natural<br>Growth</span>
    </div>
  `,
  
  G: (accentColor, isDark) => {
    const bMetrics = [
      { label: 'Efficiency', pct: 0.98, color: accentColor },
      { label: 'Uptime', pct: 0.95, color: '#10B981' },
      { label: 'Code Quality', pct: 0.88, color: '#8B5CF6' },
      { label: 'Repetition', pct: 0.05, color: '#EF4444' }
    ];
    return `
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
  },
  
  H: (accentColor, isDark) => `
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
  `,
  
  I: (accentColor, isDark) => `
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
  `,
  
  J: (accentColor, isDark) => `
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
  `,
  
  K: (accentColor, isDark) => {
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
    return `
      <div style="position: absolute; left: 19px; top: 0; width: 339px; height: 442px; background-color: #112240; border: 1px solid #233554; padding: 24px; box-sizing: border-box; font-family: 'Fira Code', 'Courier New', monospace; font-size: 12px; line-height: 1.5; display: flex; flex-direction: column; gap: 4px;">
        <div style="color: #44597F; margin-bottom: 10px;">// portfolio stack</div>
        ${kLines.map(ln => `
          <div style="color: ${ln.color}; min-height: 18px; white-space: pre;">${ln.text}</div>
        `).join('')}
      </div>
    `;
  },
  
  L: (accentColor, isDark) => `
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
  `,
  
  M: (accentColor, isDark) => `
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
  `,
  
  N: (accentColor, isDark) => `
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
  `,
  
  O: (accentColor, isDark) => `
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
  `,
  
  P: (accentColor, isDark) => `
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
  `,
  
  Q: (accentColor, isDark) => `
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
  `,
  
  R: (accentColor, isDark) => {
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
    return `
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
  }
};

window.STYLE_ILLUSTRATIONS = STYLE_ILLUSTRATIONS;
