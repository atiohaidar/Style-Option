/**
 * PPT Generator for Style-Option Gallery
 * Uses PptxGenJS to generate a .pptx showcasing all 18 design styles.
 * Each style gets its own slide with colors, fonts, and decorative elements.
 * Layout: Standard widescreen 13.33" x 7.5"
 */

const STYLES = [
    {
        id: 'Default', label: 'Default Showcase',
        bg: '222222',
        colors: ['222222', '494949', '525252', '656565', 'BFFF00'],
        font: 'Calibri', fontLabel: 'Poppins + Inter + Fira Code',
        heading: 'STYLE GUIDE SHOWCASE',
        subtitle: '18 design system options playground. Modern neon-brutalist styling.',
        vibe: 'Dark slate background, neon lime highlights, engineering grid lines, and smooth animations.',
    },
    {
        id: 'A', label: 'Neo-Pop',
        bg: 'FFDEE9',
        colors: ['FFDEE9', 'B5FFFC', 'FFEB3B', 'FF69B4', '000000'],
        font: 'Calibri', fontLabel: 'Space Grotesk',
        heading: 'BELAJAR LEBIH\nSIMPLE & SERU',
        subtitle: 'Platform edukasi tanpa basa-basi. Langsung ke inti, desain berani.',
        vibe: 'Bold borders, hard shadows, pop colors, brutalist-playful aesthetic',
    },
    {
        id: 'B', label: 'Tech Glass',
        bg: '0F172A',
        colors: ['0F172A', '7C3AED', '3B82F6', 'FFFFFF', '94A3B8'],
        font: 'Calibri', fontLabel: 'Inter',
        heading: 'Innovation in\nLearning',
        subtitle: 'Experience the future of education with a sleek, immersive interface.',
        vibe: 'Glassmorphism, dark mode, glowing blur orbs, gradient text',
    },
    {
        id: 'C', label: 'Swiss Editorial',
        bg: 'F4F4F0',
        colors: ['F4F4F0', '1A1A1A', '166534', 'D1D5DB', 'FFFFFF'],
        font: 'Georgia', fontLabel: 'Playfair Display + Inter',
        heading: 'Simplify your\nlearning curve.',
        subtitle: 'Clarity, whitespace, and typography. No distractions, pure knowledge.',
        vibe: 'Minimalist, editorial, serif typography, structured grid, lots of whitespace',
    },
    {
        id: 'D', label: 'Modern SaaS',
        bg: 'F9FAFB',
        colors: ['F9FAFB', 'FFFFFF', '4F46E5', '111827', 'F3F4F6'],
        font: 'Calibri', fontLabel: 'DM Sans',
        heading: 'Learning made\neffortless.',
        subtitle: 'Platform modern. Desain bersih, fitur lengkap, dan menyenangkan.',
        vibe: 'Clean SaaS, rounded cards, soft shadows, indigo accent, pill navigation',
    },
    {
        id: 'E', label: 'Retro Terminal',
        bg: '1A1A1A',
        colors: ['1A1A1A', '0C0C0C', '22C55E', '4ADE80', 'FFFFFF'],
        font: 'Courier New', fontLabel: 'VT323',
        heading: '> BELAJAR.\n> KODE.\n> MASA DEPAN.',
        subtitle: 'System initialized. Loading modules... [OK]',
        vibe: 'Green-on-black terminal, scanlines, monospace, blinking cursor, hacker feel',
    },
    {
        id: 'F', label: 'Organic & Soft',
        bg: 'FDFCF6',
        colors: ['FDFCF6', 'F3F6E6', 'E3EBCB', '2D3A30', '64853F'],
        font: 'Calibri', fontLabel: 'Nunito',
        heading: 'Tumbuh Bersama\nPengetahuan Alam.',
        subtitle: 'Belajar dengan suasana yang tenang, natural, dan menyegarkan pikiran.',
        vibe: 'Soft greens, rounded shapes, organic blobs, earthy & natural feel',
    },
    {
        id: 'G', label: 'Engineer Blueprint',
        bg: 'F0F4F8',
        colors: ['F0F4F8', 'FFFFFF', '2563EB', '1E293B', '94A3B8'],
        font: 'Courier New', fontLabel: 'JetBrains Mono',
        heading: 'Engineered for\nMaximum Efficiency.',
        subtitle: '// Platform belajar untuk problem solver. Langsung eksekusi.',
        vibe: 'Blueprint grid, technical markers, dashed borders, monospace, engineering aesthetic',
    },
    {
        id: 'H', label: 'Pure Utility',
        bg: 'FFFFFF',
        colors: ['FFFFFF', '000000', 'F5F5F5', '737373', 'DC2626'],
        font: 'Calibri', fontLabel: 'IBM Plex Sans',
        heading: 'DO THE\nWORK.',
        subtitle: 'Stop wasting time. We automate so you can focus on innovation.',
        vibe: 'Black & white, no decoration, thick borders, brutalist utility, function over form',
    },
    {
        id: 'I', label: 'AI Innovator',
        bg: '050505',
        colors: ['050505', '6366F1', 'A855F7', 'EC4899', 'FFFFFF'],
        font: 'Calibri', fontLabel: 'System Default',
        heading: 'Unlock Your\nPotential.',
        subtitle: 'An intelligent platform for the curious mind. Powered by advanced learning algorithms.',
        vibe: 'Ultra-dark, gradient glow (indigo > purple > pink), centered hero, futuristic AI',
    },
    {
        id: 'J', label: 'Research Focused',
        bg: 'FFFFFF',
        colors: ['FFFFFF', 'F8FAFC', '0F172A', 'FEF08A', '64748B'],
        font: 'Calibri', fontLabel: 'System Sans',
        heading: 'Research-Driven\nBackend Solutions.',
        subtitle: 'Mengutamakan validitas data dan struktur yang solid.',
        vibe: 'Academic, clean, understated, yellow highlight, left-border accents, minimal palette',
    },
    {
        id: 'K', label: 'Brand Identity',
        bg: '0A192F',
        colors: ['0A192F', '112240', '2ECC71', '3BAFDA', '8892B0'],
        font: 'Calibri', fontLabel: 'Poppins + Fira Code',
        heading: 'Tio Haidar Hanif.\nI build scalable backends.',
        subtitle: 'Vibe coder & Tukang Penasaran. Fokus pada sistem yang highly performant.',
        vibe: 'Developer portfolio classic, navy bg, green accent, code-like elements',
    },
    {
        id: 'L', label: 'Dashboard',
        bg: 'F3F4F6',
        colors: ['F3F4F6', '0A192F', '3BAFDA', '2ECC71', 'FFFFFF'],
        font: 'Calibri', fontLabel: 'Inter',
        heading: 'System Automation\nDashboard',
        subtitle: 'SaaS product interface with sidebar navigation, stat cards, and activity feed.',
        vibe: 'Dashboard UI, dark sidebar, stat cards, activity log, clean data presentation',
    },
    {
        id: 'M', label: 'Living Grid',
        bg: 'F3F4F6',
        colors: ['F3F4F6', '111827', '3B82F6', '10B981', 'FFFFFF'],
        font: 'Calibri', fontLabel: 'Space Grotesk + JetBrains Mono',
        heading: 'TIO HAIDAR\nPORTFOLIO_V2',
        subtitle: 'Bento grid layout. Architecting digital chaos into order.',
        vibe: 'Bento grid, marquee ticker, rounded cards, blue-green gradient, modern portfolio',
    },
    {
        id: 'N', label: 'The Chronicle',
        bg: 'FDFBF6',
        colors: ['FDFBF6', '1A1A1A', '8B0000', 'F4F1EA', '444444'],
        font: 'Georgia', fontLabel: 'Cinzel Decorative + Merriweather',
        heading: 'THE TIO\nCHRONICLE',
        subtitle: 'Providing Reliable Backend Solutions Since 2024.',
        vibe: 'Newspaper layout, serif fonts, double borders, drop caps, classifieds section',
    },
    {
        id: 'O', label: 'Royal Luxury',
        bg: '050505',
        colors: ['050505', '0A0A0A', 'D4AF37', 'F7E7CE', 'FFFFFF'],
        font: 'Georgia', fontLabel: 'Cinzel + Playfair Display',
        heading: 'Crafting\nTimeless\nDigital Legacies',
        subtitle: 'The pinnacle of sophistication. Precision meets prestige in every pixel.',
        vibe: 'Gold on black, corner ornaments, luxury branding, fleur-de-lis, shimmer effect',
    },
    {
        id: 'P', label: 'The Slum',
        bg: 'F0F0F0',
        colors: ['F0F0F0', 'E3DAC9', 'D4C5B0', '8C7B6C', 'EFEEB4'],
        font: 'Comic Sans MS', fontLabel: 'Reenie Beanie + Just Me Again',
        heading: 'Halaman\nBelum Jadi.',
        subtitle: '*maaf berantakan, lagi males beres-beres.',
        vibe: 'Messy, crumpled paper, tape/stickers, noise texture, intentionally ugly, grunge',
    },
    {
        id: 'Q', label: 'Buku Catatan',
        bg: 'F0F0F0',
        colors: ['FFFFFF', 'A2D2FF', 'FFB7B2', '1A73E8', '5F6368'],
        font: 'Comic Sans MS', fontLabel: 'Kalam + Patrick Hand',
        heading: 'Catatan\nTio Haidar',
        subtitle: 'Vibe coder / Rajin Menabung / Tidak Sombong',
        vibe: 'School notebook, lined paper, binder holes, doodles, highlighter marks, pencil',
    },
    {
        id: 'R', label: 'Mesin Ketik Klasik',
        bg: '2B2B2B',
        colors: ['2B2B2B', 'FDF6E3', '8B0000', 'EAB308', '000000'],
        font: 'Courier New', fontLabel: 'Special Elite',
        heading: 'TIO HAIDAR\nVIBE CODER',
        subtitle: '// FULL STACK CAPABLE — File #882-BIO',
        vibe: 'Typewriter on aged paper, ink bleed, stamp effect, dossier/classified document feel',
    },
];

// ==========================================
// CONSTANTS — Standard widescreen 13.33 x 7.5
// ==========================================
const SW = 13.33; // slide width
const SH = 7.5;   // slide height
const MARGIN = 1.0; // standard margin
const DARK_BG_LIST = ['050505', '0F172A', '1A1A1A', '0A192F', '2B2B2B', '111827', '222222'];

// ==========================================
// TITLE SLIDE
// ==========================================
function createTitleSlide(pptx) {
    const slide = pptx.addSlide();
    slide.background = { color: '0F172A' };

    // Accent bar top
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: SW, h: 0.07,
        fill: { type: 'solid', color: '6366F1' },
    });
    // Accent bar bottom
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: SH - 0.07, w: SW, h: 0.07,
        fill: { type: 'solid', color: '6366F1' },
    });

    // Left vertical accent
    slide.addShape(pptx.ShapeType.rect, {
        x: MARGIN, y: 1.8, w: 0.06, h: 2.8,
        fill: { type: 'solid', color: '818CF8' },
    });

    // Main title
    slide.addText('Design Style\nAssessment', {
        x: MARGIN + 0.3, y: 1.6, w: 8, h: 2.8,
        fontSize: 52, fontFace: 'Calibri Light',
        color: 'FFFFFF', bold: true,
        lineSpacingMultiple: 0.9,
        valign: 'middle',
    });

    // Subtitle
    slide.addText('18 Unique Visual Styles — Portfolio Showcase', {
        x: MARGIN + 0.3, y: 4.5, w: 7, h: 0.5,
        fontSize: 18, fontFace: 'Calibri',
        color: '94A3B8',
    });

    // Divider
    slide.addShape(pptx.ShapeType.line, {
        x: MARGIN + 0.3, y: 5.2, w: 4, h: 0,
        line: { color: '334155', width: 1 },
    });

    // Author
    slide.addText('Tio Haidar Hanif', {
        x: MARGIN + 0.3, y: 5.4, w: 5, h: 0.45,
        fontSize: 16, fontFace: 'Calibri',
        color: 'C7D2FE', bold: true,
    });
    slide.addText('Vibe coder  •  Tukang Penasaran  •  Automation & AI Enthusiast', {
        x: MARGIN + 0.3, y: 5.8, w: 7, h: 0.4,
        fontSize: 12, fontFace: 'Calibri',
        color: '64748B',
    });

    // Right side decorative dots grid
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            slide.addShape(pptx.ShapeType.ellipse, {
                x: 10.0 + col * 0.35, y: 1.8 + row * 0.45, w: 0.06, h: 0.06,
                fill: { type: 'solid', color: '334155' },
            });
        }
    }

    // Slide number
    slide.addText('01 / 20', {
        x: SW - 2, y: SH - 0.6, w: 1.5, h: 0.3,
        fontSize: 9, fontFace: 'Calibri',
        color: '475569', align: 'right',
    });
}

// Helper to draw blueprint grid (Style G)
function addBlueprintGrid(pptx, slide) {
    const gridColor = 'C7D7F5';
    for (let h = 0.25; h < SH; h += 0.25) {
        slide.addShape(pptx.ShapeType.line, {
            x: 0, y: h, w: SW, h: 0,
            line: { color: gridColor, width: 0.5 },
        });
    }
    for (let v = 0.25; v < SW; v += 0.25) {
        slide.addShape(pptx.ShapeType.line, {
            x: v, y: 0, w: 0, h: SH,
            line: { color: gridColor, width: 0.5 },
        });
    }
}

// Helper to draw notebook background (Style Q)
function addNotebookBackground(pptx, slide) {
    slide.addShape(pptx.ShapeType.line, {
        x: 0.8, y: 0, w: 0, h: SH,
        line: { color: 'FFB7B2', width: 1.5 },
    });
    for (let h = 0.4; h < SH; h += 0.3) {
        slide.addShape(pptx.ShapeType.line, {
            x: 0, y: h, w: SW, h: 0,
            line: { color: 'A2D2FF', width: 0.5 },
        });
    }
}

// ==========================================
// STYLE CARD SLIDE
// ==========================================
function createStyleSlide(pptx, style, index) {
    const slide = pptx.addSlide();
    const isDark = DARK_BG_LIST.includes(style.bg);
    const textColor = isDark ? 'FFFFFF' : '111827';
    const mutedColor = isDark ? '94A3B8' : '6B7280';
    const borderColor = isDark ? '334155' : 'D1D5DB';
    const cardBg = isDark ? '1E293B' : 'F3F4F6';
    const slideNum = String(index + 2).padStart(2, '0');
    const accentColor = style.colors[2] || style.colors[1];

    // Layout zones
    const leftX = MARGIN;
    const contentW = 6.5;
    const decoX = 9.0;
    const decoW = 3.33;

    slide.background = { color: style.bg };

    if (style.id === 'G') {
        addBlueprintGrid(pptx, slide);
    } else if (style.id === 'Q') {
        addNotebookBackground(pptx, slide);
    }

    // ── Top accent bar ──
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: SW, h: 0.06,
        fill: { type: 'solid', color: accentColor },
    });

    // ── Badge ──
    slide.addShape(pptx.ShapeType.roundRect, {
        x: leftX, y: 0.5, w: 3.0, h: 0.42,
        rectRadius: 0.05,
        fill: { type: 'solid', color: cardBg },
        line: { color: borderColor, width: 0.5 },
    });
    slide.addText(`Option ${style.id}  ·  ${style.label}`, {
        x: leftX + 0.15, y: 0.52, w: 2.7, h: 0.38,
        fontSize: 11, fontFace: 'Calibri',
        color: accentColor, bold: true,
        valign: 'middle',
    });

    // ── Main Heading ──
    slide.addText(style.heading, {
        x: leftX, y: 1.3, w: contentW, h: 2.2,
        fontSize: 38, fontFace: style.font,
        color: textColor, bold: true,
        lineSpacingMultiple: 0.95,
        valign: 'top',
    });

    // ── Subtitle ──
    slide.addText(style.subtitle, {
        x: leftX, y: 3.5, w: contentW, h: 0.7,
        fontSize: 14, fontFace: 'Calibri',
        color: mutedColor,
        lineSpacingMultiple: 1.3,
    });

    // ── Divider ──
    slide.addShape(pptx.ShapeType.line, {
        x: leftX, y: 4.4, w: 5, h: 0,
        line: { color: borderColor, width: 0.75 },
    });

    // ── Vibe description ──
    slide.addText(`"${style.vibe}"`, {
        x: leftX, y: 4.6, w: contentW, h: 0.5,
        fontSize: 11, fontFace: 'Calibri',
        color: mutedColor, italic: true,
    });

    // ── Font info ──
    slide.addText(`Font: ${style.fontLabel}`, {
        x: leftX, y: 5.2, w: 4, h: 0.3,
        fontSize: 10, fontFace: 'Calibri',
        color: mutedColor,
    });

    // ── Color Palette ──
    slide.addText('COLOR PALETTE', {
        x: leftX, y: 5.7, w: 2, h: 0.25,
        fontSize: 8, fontFace: 'Calibri',
        color: mutedColor, bold: true,
    });

    const swatchW = 1.2;
    const swatchH = 0.6;
    const swatchGap = 0.2;
    style.colors.forEach((c, i) => {
        const sx = leftX + i * (swatchW + swatchGap);
        // Swatch
        slide.addShape(pptx.ShapeType.roundRect, {
            x: sx, y: 6.05, w: swatchW, h: swatchH,
            rectRadius: 0.06,
            fill: { type: 'solid', color: c },
            line: { color: borderColor, width: 0.5 },
            shadow: { type: 'outer', blur: 3, offset: 1, color: '000000', opacity: 0.1 },
        });
        // Hex label
        slide.addText(`#${c}`, {
            x: sx, y: 6.7, w: swatchW, h: 0.22,
            fontSize: 7.5, fontFace: 'Courier New',
            color: mutedColor, align: 'center',
        });
    });

    // ── Decorative Element (right panel) ──
    addDecorativeElement(pptx, slide, style, isDark, decoX, decoW);

    // ── Slide number ──
    slide.addText(`${slideNum} / 20`, {
        x: SW - 2, y: SH - 0.55, w: 1.5, h: 0.3,
        fontSize: 9, fontFace: 'Calibri',
        color: mutedColor, align: 'right',
    });
}

// ==========================================
// DECORATIVE ELEMENTS (right panel)
// ==========================================
function addDecorativeElement(pptx, slide, style, isDark, decoX, decoW, cy = 0.8, ph = 4.2) {
    // Centered panel position
    const cx = decoX + 0.2;  // inner x
    const pw = decoW - 0.4;  // panel width (~2.93)

    switch (style.id) {
        case 'Default': { // Default Showcase
            // Card wrapper
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx, y: cy, w: pw, h: ph,
                rectRadius: 0.1,
                fill: { type: 'solid', color: '494949' },
                line: { color: '656565', width: 0.5 },
            });
            // Lime border line
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: 0.05,
                fill: { type: 'solid', color: 'BFFF00' },
            });
            // Tech grid dots
            for (let row = 0; row < 6; row++) {
                for (let col = 0; col < 5; col++) {
                    slide.addShape(pptx.ShapeType.ellipse, {
                        x: cx + 0.4 + col * 0.5, y: cy + 0.6 + row * 0.5, w: 0.04, h: 0.04,
                        fill: { type: 'solid', color: '656565' },
                    });
                }
            }
            // Central rotating-like rings
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + pw/2 - 0.7, y: cy + ph/2 - 0.7, w: 1.4, h: 1.4,
                fill: { type: 'none' },
                line: { color: 'BFFF00', width: 2, dashType: 'dash' },
            });
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + pw/2 - 0.4, y: cy + ph/2 - 0.4, w: 0.8, h: 0.8,
                fill: { type: 'solid', color: 'BFFF00' },
            });
            slide.addText('SHOWCASE', {
                x: cx + pw/2 - 0.5, y: cy + ph/2 - 0.15, w: 1.0, h: 0.3,
                fontSize: 8, fontFace: 'Courier New', color: '000000',
                bold: true, align: 'center',
            });
            break;
        }
        case 'A': { // Neo-Pop
            // Shadow
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 0.2, y: cy + 0.2, w: pw, h: ph,
                fill: { type: 'solid', color: '000000' },
            });
            // Card
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: 'FFEB3B' },
                line: { color: '000000', width: 3 },
            });
            slide.addText('NEO\nPOP!', {
                x: cx + 0.3, y: cy + 1.0, w: pw - 0.6, h: 2,
                fontSize: 36, fontFace: 'Calibri', bold: true,
                color: '000000', align: 'center', valign: 'middle',
            });
            // Pink accent bar
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 0.3, y: cy + ph - 0.7, w: pw - 0.6, h: 0.35,
                fill: { type: 'solid', color: 'FF69B4' },
                line: { color: '000000', width: 2 },
            });
            break;
        }
        case 'B': { // Tech Glass
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx - 0.3, y: cy + 0.2, w: 3, h: 3,
                fill: { type: 'solid', color: '7C3AED' },
                shadow: { type: 'outer', blur: 40, offset: 0, color: '7C3AED', opacity: 0.4 },
            });
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + 0.8, y: cy + 1.8, w: 2.2, h: 2.2,
                fill: { type: 'solid', color: '3B82F6' },
                shadow: { type: 'outer', blur: 40, offset: 0, color: '3B82F6', opacity: 0.3 },
            });
            // Glass card overlay
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx + 0.3, y: cy + 0.8, w: 2, h: 2.5,
                rectRadius: 0.12,
                fill: { type: 'solid', color: '1E293B' },
                line: { color: '475569', width: 0.5 },
            });
            slide.addText('Core Focus', {
                x: cx + 0.5, y: cy + 1.0, w: 1.6, h: 0.35,
                fontSize: 11, fontFace: 'Calibri', color: 'FFFFFF', bold: true,
            });
            ['Immersive UX', 'Data Driven', 'Deep Focus'].forEach((t, i) => {
                slide.addShape(pptx.ShapeType.ellipse, {
                    x: cx + 0.55, y: cy + 1.55 + i * 0.5, w: 0.1, h: 0.1,
                    fill: { type: 'solid', color: i === 0 ? '60A5FA' : i === 1 ? 'C084FC' : '818CF8' },
                });
                slide.addText(t, {
                    x: cx + 0.75, y: cy + 1.45 + i * 0.5, w: 1.5, h: 0.3,
                    fontSize: 9, fontFace: 'Calibri', color: '94A3B8',
                });
            });
            break;
        }
        case 'C': { // Swiss Editorial
            // Grid
            for (let i = 0; i < 7; i++) {
                slide.addShape(pptx.ShapeType.line, {
                    x: cx, y: cy + i * 0.6, w: pw, h: 0,
                    line: { color: 'D1D5DB', width: 0.5 },
                });
            }
            for (let i = 0; i < 5; i++) {
                slide.addShape(pptx.ShapeType.line, {
                    x: cx + i * (pw / 4), y: cy, w: 0, h: 3.6,
                    line: { color: 'D1D5DB', width: 0.5 },
                });
            }
            // Numbers
            ['01', '02', '03', '04'].forEach((n, i) => {
                slide.addText(n, {
                    x: cx + 0.05 + i * (pw / 4), y: cy + 0.05, w: 0.4, h: 0.25,
                    fontSize: 8, fontFace: 'Georgia', color: '9CA3AF',
                });
            });
            // Big italic text
            slide.addText('Clarity\nFirst.', {
                x: cx + 0.2, y: cy + 1.2, w: pw - 0.4, h: 1.5,
                fontSize: 24, fontFace: 'Georgia', color: '166534',
                italic: true, valign: 'middle',
            });
            break;
        }
        case 'D': { // Modern SaaS card
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx, y: cy, w: pw, h: ph,
                rectRadius: 0.15,
                fill: { type: 'solid', color: 'FFFFFF' },
                line: { color: 'E5E7EB', width: 1 },
                shadow: { type: 'outer', blur: 10, offset: 3, color: '000000', opacity: 0.08 },
            });
            // Window dots
            ['EF4444', 'F59E0B', '22C55E'].forEach((c, i) => {
                slide.addShape(pptx.ShapeType.ellipse, {
                    x: cx + 0.25 + i * 0.22, y: cy + 0.2, w: 0.14, h: 0.14,
                    fill: { type: 'solid', color: c },
                });
            });
            // Skeleton lines
            [0.7, 1.05, 1.4].forEach((yOff) => {
                slide.addShape(pptx.ShapeType.roundRect, {
                    x: cx + 0.25, y: cy + yOff, w: pw * 0.6, h: 0.14,
                    rectRadius: 0.03,
                    fill: { type: 'solid', color: 'F3F4F6' },
                });
            });
            // Chart area
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx + 0.25, y: cy + 1.9, w: pw - 0.5, h: 1.6,
                rectRadius: 0.1,
                fill: { type: 'solid', color: 'EEF2FF' },
                line: { color: 'C7D2FE', width: 0.5 },
            });
            slide.addText('Chart Preview', {
                x: cx + 0.3, y: cy + 2.4, w: pw - 0.6, h: 0.5,
                fontSize: 10, fontFace: 'Calibri', color: 'A5B4FC', align: 'center',
            });
            break;
        }
        case 'E': { // Terminal
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: '0C0C0C' },
                line: { color: '166534', width: 1.5 },
            });
            // Terminal header bar
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: 0.35,
                fill: { type: 'solid', color: '1A1A1A' },
            });
            ['EF4444', 'F59E0B', '22C55E'].forEach((c, i) => {
                slide.addShape(pptx.ShapeType.ellipse, {
                    x: cx + 0.15 + i * 0.22, y: cy + 0.1, w: 0.12, h: 0.12,
                    fill: { type: 'solid', color: c },
                });
            });
            const lines = [
                'user@edu:~$ ./init.sh',
                '',
                'Loading modules...',
                '[OK] Data Science',
                '[OK] Web Development',
                '[OK] Artificial Intelligence',
                '',
                'All systems nominal.',
                '',
                '> Ready_\u2588',
            ];
            lines.forEach((line, i) => {
                slide.addText(line, {
                    x: cx + 0.2, y: cy + 0.5 + i * 0.33, w: pw - 0.4, h: 0.28,
                    fontSize: 8.5, fontFace: 'Courier New',
                    color: line.startsWith('[OK]') ? '4ADE80' : '22C55E',
                });
            });
            break;
        }
        case 'F': { // Organic blobs
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx - 0.2, y: cy + 0.5, w: 3, h: 3,
                fill: { type: 'solid', color: 'D4E0B1' },
            });
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + 0.8, y: cy, w: 2, h: 2,
                fill: { type: 'solid', color: 'E3EBCB' },
            });
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + 0.4, y: cy + 2.2, w: 1.5, h: 1.5,
                fill: { type: 'solid', color: 'F3F6E6' },
            });
            slide.addText('Natural\nGrowth', {
                x: cx + 0.3, y: cy + 1.2, w: 2, h: 1.2,
                fontSize: 20, fontFace: 'Calibri', color: '2D3A30',
                bold: true, align: 'center', valign: 'middle',
            });
            break;
        }
        case 'G': { // Blueprint
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: 'FFFFFF' },
                line: { color: '2563EB', width: 1.5, dashType: 'dash' },
            });
            // Corner marks
            [[cx - 0.12, cy - 0.12, 0.25, 0], [cx - 0.12, cy - 0.12, 0, 0.25]].forEach(([x, y, w, h]) => {
                slide.addShape(pptx.ShapeType.line, { x, y, w, h, line: { color: '2563EB', width: 2 } });
            });
            slide.addText('METRICS', {
                x: cx + 0.2, y: cy + 0.2, w: 1.2, h: 0.3,
                fontSize: 8, fontFace: 'Courier New', color: '94A3B8', bold: true,
            });
            // Bars
            const metrics = [
                { label: 'Efficiency', pct: 0.98, color: '2563EB' },
                { label: 'Uptime', pct: 0.95, color: '10B981' },
                { label: 'Code Quality', pct: 0.88, color: '8B5CF6' },
                { label: 'Repetition', pct: 0.05, color: 'EF4444' },
            ];
            metrics.forEach((m, i) => {
                const by = cy + 0.7 + i * 0.7;
                slide.addText(`${m.label}  ${Math.round(m.pct * 100)}%`, {
                    x: cx + 0.2, y: by, w: pw - 0.4, h: 0.22,
                    fontSize: 7.5, fontFace: 'Courier New', color: '64748B', bold: true,
                });
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + 0.2, y: by + 0.28, w: pw - 0.4, h: 0.16,
                    fill: { type: 'solid', color: 'E2E8F0' },
                });
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + 0.2, y: by + 0.28, w: (pw - 0.4) * m.pct, h: 0.16,
                    fill: { type: 'solid', color: m.color },
                });
            });
            break;
        }
        case 'H': { // Utility boxes
            // White box
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: 1.8,
                fill: { type: 'solid', color: 'F5F5F5' },
                line: { color: '000000', width: 2.5 },
            });
            slide.addText('MODULE\nBackend API', {
                x: cx + 0.2, y: cy + 0.3, w: pw - 0.4, h: 1.2,
                fontSize: 14, fontFace: 'Calibri', color: '000000', bold: true,
            });
            // Black box
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy + 2.1, w: pw, h: 1.8,
                fill: { type: 'solid', color: '000000' },
                line: { color: '000000', width: 2.5 },
            });
            slide.addText('MODULE\nAutomation', {
                x: cx + 0.2, y: cy + 2.4, w: pw - 0.4, h: 1.2,
                fontSize: 14, fontFace: 'Calibri', color: 'FFFFFF', bold: true,
            });
            break;
        }
        case 'I': { // AI glow
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx - 0.3, y: cy + 0.2, w: 3.2, h: 3.2,
                fill: { type: 'solid', color: '6366F1' },
                shadow: { type: 'outer', blur: 50, offset: 0, color: '6366F1', opacity: 0.5 },
            });
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + 0.4, y: cy + 0.9, w: 2, h: 2,
                fill: { type: 'solid', color: 'A855F7' },
                shadow: { type: 'outer', blur: 30, offset: 0, color: 'A855F7', opacity: 0.4 },
            });
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + 0.9, y: cy + 1.4, w: 1, h: 1,
                fill: { type: 'solid', color: 'EC4899' },
                shadow: { type: 'outer', blur: 20, offset: 0, color: 'EC4899', opacity: 0.3 },
            });
            slide.addText('AI', {
                x: cx + 0.5, y: cy + 3.5, w: 2, h: 0.5,
                fontSize: 14, fontFace: 'Calibri', color: 'FFFFFF',
                bold: true, align: 'center',
            });
            break;
        }
        case 'J': { // Research paper
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: 'F8FAFC' },
                line: { color: 'E2E8F0', width: 1 },
            });
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: 0.06,
                fill: { type: 'solid', color: 'CBD5E1' },
            });
            slide.addText('ABSTRACT_VIEW.JS', {
                x: cx + 0.15, y: cy + 0.15, w: 2, h: 0.25,
                fontSize: 7.5, fontFace: 'Courier New', color: '94A3B8',
            });
            // Skeleton paragraphs
            for (let i = 0; i < 6; i++) {
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + 0.15, y: cy + 0.6 + i * 0.25, w: pw * (0.85 - i * 0.05), h: 0.08,
                    fill: { type: 'solid', color: 'E2E8F0' },
                });
            }
            // Yellow highlight
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 0.15, y: cy + 2.3, w: 1.6, h: 0.3,
                fill: { type: 'solid', color: 'FEF08A' },
            });
            slide.addText('validitas data', {
                x: cx + 0.2, y: cy + 2.32, w: 1.5, h: 0.26,
                fontSize: 9, fontFace: 'Calibri', color: '0F172A', bold: true,
            });
            break;
        }
        case 'K': { // Brand Identity code editor
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: '112240' },
                line: { color: '233554', width: 1 },
            });
            const codeLines = [
                { text: 'function', color: '2ECC71' },
                { text: ' connect() {', color: 'CCD6F6' },
                { text: '', color: '8892B0' },
                { text: '  // skills list', color: '8892B0' },
                { text: '  \u25B9 Laravel', color: '8892B0' },
                { text: '  \u25B9 Express.js', color: '8892B0' },
                { text: '  \u25B9 Docker', color: '8892B0' },
                { text: '  \u25B9 Python/VBA', color: '8892B0' },
                { text: '', color: '8892B0' },
                { text: '  return message;', color: '2ECC71' },
                { text: '}', color: '2ECC71' },
            ];
            codeLines.forEach((ln, i) => {
                slide.addText(ln.text, {
                    x: cx + 0.2, y: cy + 0.25 + i * 0.34, w: pw - 0.4, h: 0.28,
                    fontSize: 9, fontFace: 'Courier New', color: ln.color,
                });
            });
            break;
        }
        case 'L': { // Dashboard
            // Sidebar
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx, y: cy, w: 0.85, h: ph,
                rectRadius: 0.1,
                fill: { type: 'solid', color: '0A192F' },
            });
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx + 0.12, y: cy + 0.15, w: 0.6, h: 0.3,
                rectRadius: 0.05,
                fill: { type: 'solid', color: '3BAFDA' },
            });
            // Main area
            slide.addShape(pptx.ShapeType.roundRect, {
                x: cx + 1.0, y: cy, w: pw - 1.0, h: ph,
                rectRadius: 0.1,
                fill: { type: 'solid', color: 'FFFFFF' },
                line: { color: 'E5E7EB', width: 0.5 },
            });
            // Stats row
            ['3BAFDA', 'A855F7', '2ECC71'].forEach((c, i) => {
                const sx = cx + 1.15 + i * 0.6;
                slide.addShape(pptx.ShapeType.roundRect, {
                    x: sx, y: cy + 0.15, w: 0.5, h: 0.6,
                    rectRadius: 0.05,
                    fill: { type: 'solid', color: 'F9FAFB' },
                    line: { color: 'F3F4F6', width: 0.5 },
                });
                slide.addShape(pptx.ShapeType.ellipse, {
                    x: sx + 0.18, y: cy + 0.35, w: 0.12, h: 0.12,
                    fill: { type: 'solid', color: c },
                });
            });
            // Activity lines
            for (let i = 0; i < 4; i++) {
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + 1.15, y: cy + 1.1 + i * 0.35, w: pw - 1.3, h: 0.08,
                    fill: { type: 'solid', color: 'F3F4F6' },
                });
            }
            break;
        }
        case 'M': { // Bento grid
            const bentoItems = [
                { x: 0, y: 0, w: 1.5, h: 2.0, color: 'FFFFFF' },
                { x: 1.6, y: 0, w: 1.3, h: 0.9, color: '111827' },
                { x: 1.6, y: 1.0, w: 1.3, h: 1.0, color: 'E0E7FF' },
                { x: 0, y: 2.1, w: 1.8, h: 0.9, color: 'D1FAE5' },
                { x: 1.9, y: 2.1, w: 1, h: 0.9, color: 'FFFFFF' },
            ];
            bentoItems.forEach(item => {
                slide.addShape(pptx.ShapeType.roundRect, {
                    x: cx + item.x, y: cy + item.y, w: item.w, h: item.h,
                    rectRadius: 0.1,
                    fill: { type: 'solid', color: item.color },
                    line: { color: 'E5E7EB', width: 0.5 },
                    shadow: { type: 'outer', blur: 4, offset: 1, color: '000000', opacity: 0.06 },
                });
            });
            // Gradient bar on dark card
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 1.6, y: cy, w: 1.3, h: 0.05,
                fill: { type: 'solid', color: '10B981' },
            });
            slide.addText('42+', {
                x: cx + 1.7, y: cy + 0.25, w: 1, h: 0.5,
                fontSize: 20, fontFace: 'Calibri', color: '3B82F6', bold: true,
            });
            break;
        }
        case 'N': { // Newspaper
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: 'FDFBF6' },
                line: { color: '1A1A1A', width: 1.5 },
            });
            // Inner double border
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 0.08, y: cy + 0.08, w: pw - 0.16, h: ph - 0.16,
                fill: { type: 'none' },
                line: { color: '1A1A1A', width: 0.5 },
            });
            slide.addText('THE DAILY\nENGINEER', {
                x: cx + 0.2, y: cy + 0.2, w: pw - 0.4, h: 0.7,
                fontSize: 16, fontFace: 'Georgia', color: '1A1A1A',
                bold: true, align: 'center', lineSpacingMultiple: 0.9,
            });
            // Horizontal rules
            slide.addShape(pptx.ShapeType.line, {
                x: cx + 0.2, y: cy + 1.0, w: pw - 0.4, h: 0,
                line: { color: '1A1A1A', width: 1.5 },
            });
            slide.addShape(pptx.ShapeType.line, {
                x: cx + 0.2, y: cy + 1.08, w: pw - 0.4, h: 0,
                line: { color: '1A1A1A', width: 0.5 },
            });
            // Column lines
            for (let i = 0; i < 10; i++) {
                const lw = i % 2 === 0 ? (pw - 0.6) * 0.45 : (pw - 0.6) * 0.4;
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + 0.2, y: cy + 1.3 + i * 0.22, w: lw, h: 0.07,
                    fill: { type: 'solid', color: 'D1D5DB' },
                });
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + pw / 2 + 0.15, y: cy + 1.3 + i * 0.22, w: lw, h: 0.07,
                    fill: { type: 'solid', color: 'D1D5DB' },
                });
            }
            break;
        }
        case 'O': { // Royal Luxury
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: '0A0A0A' },
                line: { color: 'D4AF37', width: 1.5 },
            });
            // Gold bars
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: 0.04,
                fill: { type: 'solid', color: 'D4AF37' },
            });
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy + ph - 0.04, w: pw, h: 0.04,
                fill: { type: 'solid', color: 'D4AF37' },
            });
            // Corner ornaments
            const corners = [
                { x: 0.12, y: 0.12 }, { x: pw - 0.37, y: 0.12 },
                { x: 0.12, y: ph - 0.37 }, { x: pw - 0.37, y: ph - 0.37 }
            ];
            corners.forEach(pos => {
                slide.addShape(pptx.ShapeType.rect, {
                    x: cx + pos.x, y: cy + pos.y, w: 0.25, h: 0.25,
                    fill: { type: 'none' },
                    line: { color: 'D4AF37', width: 0.5 },
                });
            });
            slide.addText('\u2654', {
                x: cx + 0.5, y: cy + 1.0, w: pw - 1, h: 1,
                fontSize: 48, align: 'center', color: 'D4AF37',
            });
            slide.addText('IMPERIAL', {
                x: cx + 0.3, y: cy + 2.2, w: pw - 0.6, h: 0.5,
                fontSize: 14, fontFace: 'Georgia', align: 'center',
                color: 'D4AF37', bold: true,
            });
            slide.addText('Est. MMXXIV', {
                x: cx + 0.3, y: cy + 2.8, w: pw - 0.6, h: 0.3,
                fontSize: 8, fontFace: 'Georgia', align: 'center',
                color: 'D4AF37',
            });
            break;
        }
        case 'P': { // The Slum
            // Shadow offset
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 0.2, y: cy + 0.2, w: pw - 0.2, h: 3.5,
                fill: { type: 'solid', color: '8C7B6C' },
                rotate: 2,
            });
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw - 0.2, h: 3.5,
                fill: { type: 'solid', color: 'E3DAC9' },
                line: { color: '8C7B6C', width: 1, dashType: 'dash' },
                rotate: -1,
            });
            // Tape
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + 0.8, y: cy - 0.15, w: 1, h: 0.3,
                fill: { type: 'solid', color: 'EFEEB4' },
                rotate: -3,
            });
            slide.addText('WIP\n*males ngoding', {
                x: cx + 0.3, y: cy + 0.8, w: pw - 0.8, h: 1.5,
                fontSize: 18, fontFace: 'Comic Sans MS', color: '8C7B6C',
                bold: true, align: 'center', valign: 'middle',
            });
            break;
        }
        case 'Q': { // Notebook
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: 'FFFFFF' },
                line: { color: 'D1D5DB', width: 0.5 },
            });
            // Margin line
            slide.addShape(pptx.ShapeType.line, {
                x: cx + 0.55, y: cy, w: 0, h: ph,
                line: { color: 'FFB7B2', width: 1.5 },
            });
            // Ruled lines
            for (let i = 0; i < 14; i++) {
                slide.addShape(pptx.ShapeType.line, {
                    x: cx, y: cy + 0.3 + i * 0.28, w: pw, h: 0,
                    line: { color: 'A2D2FF', width: 0.3 },
                });
            }
            // Binder holes
            [0.6, 1.8, 3.0].forEach(yOff => {
                slide.addShape(pptx.ShapeType.ellipse, {
                    x: cx + 0.08, y: cy + yOff, w: 0.18, h: 0.18,
                    fill: { type: 'solid', color: 'F0F0F0' },
                    line: { color: 'D1D5DB', width: 0.5 },
                });
            });
            // A+ grade circle
            slide.addShape(pptx.ShapeType.ellipse, {
                x: cx + pw - 0.7, y: cy + 0.15, w: 0.55, h: 0.55,
                fill: { type: 'none' },
                line: { color: 'EF4444', width: 1.5 },
            });
            slide.addText('A+', {
                x: cx + pw - 0.68, y: cy + 0.22, w: 0.5, h: 0.42,
                fontSize: 14, fontFace: 'Comic Sans MS', color: 'EF4444',
                bold: true, align: 'center', valign: 'middle',
            });
            // Written text
            slide.addText('Catatan Hari Ini:', {
                x: cx + 0.7, y: cy + 0.4, w: 2, h: 0.35,
                fontSize: 12, fontFace: 'Comic Sans MS', color: '1A73E8', bold: true,
            });
            break;
        }
        case 'R': { // Typewriter
            slide.addShape(pptx.ShapeType.rect, {
                x: cx, y: cy, w: pw, h: ph,
                fill: { type: 'solid', color: 'FDF6E3' },
                shadow: { type: 'outer', blur: 12, offset: 4, color: '000000', opacity: 0.4 },
            });
            // Header line
            slide.addShape(pptx.ShapeType.line, {
                x: cx + 0.2, y: cy + 0.4, w: pw - 0.4, h: 0,
                line: { color: '2B2B2B', width: 1.5 },
            });
            slide.addText('FILE: #882-BIO', {
                x: cx + 0.2, y: cy + 0.12, w: 1.5, h: 0.25,
                fontSize: 8, fontFace: 'Courier New', color: '2B2B2B', bold: true,
            });
            // Content
            const doc = [
                { text: '01. OBJECTIVE', bold: true },
                { text: '' },
                { text: 'To design robust' },
                { text: 'backend systems.' },
                { text: '' },
                { text: '02. KNOWN SKILLS', bold: true },
                { text: '[x] Laravel (Expert)' },
                { text: '[x] Python Scripting' },
                { text: '[x] System Architecture' },
                { text: '[ ] Sleep Early (Failed)' },
            ];
            doc.forEach((ln, i) => {
                slide.addText(ln.text, {
                    x: cx + 0.25, y: cy + 0.6 + i * 0.3, w: pw - 0.5, h: 0.25,
                    fontSize: 8.5, fontFace: 'Courier New', color: '2B2B2B',
                    bold: !!ln.bold,
                });
            });
            // APPROVED stamp
            slide.addShape(pptx.ShapeType.rect, {
                x: cx + pw - 1.4, y: cy + 0.6, w: 1.2, h: 0.45,
                fill: { type: 'none' },
                line: { color: '8B0000', width: 2 },
                rotate: 15,
            });
            slide.addText('APPROVED', {
                x: cx + pw - 1.38, y: cy + 0.63, w: 1.16, h: 0.39,
                fontSize: 9, fontFace: 'Courier New', color: '8B0000',
                bold: true, align: 'center', rotate: 15,
            });
            break;
        }
    }
}

// ==========================================
// SUMMARY SLIDE
// ==========================================
function createSummarySlide(pptx) {
    const slide = pptx.addSlide();
    slide.background = { color: '0F172A' };

    // Top bar
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: SW, h: 0.06,
        fill: { type: 'solid', color: '6366F1' },
    });

    // Title
    slide.addText('Style Overview', {
        x: MARGIN, y: 0.35, w: 5, h: 0.55,
        fontSize: 28, fontFace: 'Calibri Light',
        color: 'FFFFFF', bold: true,
    });
    slide.addText('All 18 design styles at a glance', {
        x: MARGIN, y: 0.85, w: 5, h: 0.3,
        fontSize: 12, fontFace: 'Calibri',
        color: '64748B',
    });

    // Grid: 6 cols x 3 rows
    const cols = 6;
    const cardW = 1.7;
    const cardH = 1.8;
    const gapX = 0.18;
    const gapY = 0.18;
    const gridW = cols * cardW + (cols - 1) * gapX;
    const startX = (SW - gridW) / 2;
    const startY = 1.4;

    STYLES.forEach((style, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = startX + col * (cardW + gapX);
        const y = startY + row * (cardH + gapY);

        // Card
        slide.addShape(pptx.ShapeType.roundRect, {
            x, y, w: cardW, h: cardH,
            rectRadius: 0.08,
            fill: { type: 'solid', color: '1E293B' },
            line: { color: '334155', width: 0.5 },
        });

        // Accent bar
        slide.addShape(pptx.ShapeType.rect, {
            x, y, w: cardW, h: 0.06,
            fill: { type: 'solid', color: style.colors[2] || style.colors[1] },
        });

        // Mini swatches
        style.colors.slice(0, 5).forEach((c, ci) => {
            slide.addShape(pptx.ShapeType.roundRect, {
                x: x + 0.1 + ci * 0.28, y: y + 0.2, w: 0.22, h: 0.22,
                rectRadius: 0.03,
                fill: { type: 'solid', color: c },
                line: { color: '475569', width: 0.3 },
            });
        });

        // Label
        slide.addText(style.id, {
            x: x + 0.08, y: y + 0.55, w: 0.35, h: 0.3,
            fontSize: 14, fontFace: 'Calibri',
            color: style.colors[2] || 'C7D2FE', bold: true,
        });
        slide.addText(style.label, {
            x: x + 0.4, y: y + 0.58, w: 1.2, h: 0.25,
            fontSize: 8.5, fontFace: 'Calibri',
            color: '94A3B8',
        });

        // Font info
        slide.addText(style.fontLabel, {
            x: x + 0.08, y: y + 0.9, w: cardW - 0.16, h: 0.2,
            fontSize: 6.5, fontFace: 'Calibri',
            color: '64748B', italic: true,
        });

        // BG preview
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x + 0.08, y: y + 1.2, w: cardW - 0.16, h: 0.45,
            rectRadius: 0.05,
            fill: { type: 'solid', color: style.bg },
            line: { color: '475569', width: 0.3 },
        });
    });

    // Slide number
    slide.addText('20 / 20', {
        x: SW - 2, y: SH - 0.55, w: 1.5, h: 0.3,
        fontSize: 9, fontFace: 'Calibri',
        color: '475569', align: 'right',
    });
}

// ==========================================
// MAIN: Generate & Download
// ==========================================
function generateStylePPT() {
    const btn = document.getElementById('btn-download-ppt');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '\u23F3 Generating...';
    }

    try {
        const pptx = new PptxGenJS();
        pptx.defineLayout({ name: 'WIDESCREEN_16x9', width: 13.33, height: 7.5 });
        pptx.layout = 'WIDESCREEN_16x9';
        pptx.author = 'Tio Haidar Hanif';
        pptx.title = 'Design Style Assessment — 18 Style Options';
        pptx.subject = 'Style Guide Showcase';

        // 1. Title slide
        createTitleSlide(pptx);

        // 2. 18 style slides
        STYLES.forEach((style, index) => {
            createStyleSlide(pptx, style, index);
        });

        // 3. Summary slide
        createSummarySlide(pptx);

        // Filename with timestamp
        const now = new Date();
        const ts = now.getFullYear().toString() +
            String(now.getMonth() + 1).padStart(2, '0') +
            String(now.getDate()).padStart(2, '0') +
            String(now.getHours()).padStart(2, '0') +
            String(now.getMinutes()).padStart(2, '0');

        pptx.writeFile({ fileName: `Style_Guide_${ts}.pptx` })
            .then(() => {
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '\u2705 Downloaded!';
                    setTimeout(() => { btn.innerHTML = '\uD83D\uDCE5 Download PPT'; }, 3000);
                }
            })
            .catch(err => {
                console.error('PPT Export Error:', err);
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '\u274C Error! Try Again';
                    setTimeout(() => { btn.innerHTML = '\uD83D\uDCE5 Download PPT'; }, 3000);
                }
            });

    } catch (err) {
        console.error('PPT Generation Error:', err);
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '\u274C Error! Try Again';
            setTimeout(() => { btn.innerHTML = '\uD83D\uDCE5 Download PPT'; }, 3000);
        }
    }
}

// ==========================================
// PORTFOLIO / USER SLIDES GENERATION
// ==========================================
function generatePresentation(slidesData, styleId) {
    const style = STYLES.find(s => s.id === styleId) || STYLES.find(s => s.id === 'Default');
    const isDark = DARK_BG_LIST.includes(style.bg);
    const textColor = isDark ? 'FFFFFF' : '111827';
    const mutedColor = isDark ? '94A3B8' : '6B7280';
    const borderColor = isDark ? '334155' : 'D1D5DB';
    const cardBg = isDark ? '1E293B' : 'F3F4F6';
    const accentColor = style.id === 'Default' ? 'BFFF00' : (style.colors[2] || style.colors[1]);

    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: 'WIDESCREEN_16x9', width: 13.33, height: 7.5 });
    pptx.layout = 'WIDESCREEN_16x9';
    pptx.author = 'Tio Haidar Hanif';
    pptx.title = 'Slides-as-Code Presentation';

    slidesData.forEach((slide, index) => {
        const sObj = pptx.addSlide();
        sObj.background = { color: style.bg };
        
        // Add Speaker Notes
        if (slide.notes) {
            sObj.notes = slide.notes;
        }

        // 1. Top accent bar
        sObj.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: SW, h: 0.06,
            fill: { type: 'solid', color: accentColor },
        });

        // Add visual grid background for G, Q and Default styles
        if (style.id === 'G') {
            addBlueprintGrid(pptx, sObj);
        } else if (style.id === 'Q') {
            addNotebookBackground(pptx, sObj);
        }

        // Add visual grid background for default style
        if (style.id === 'Default') {
            sObj.addShape(pptx.ShapeType.rect, {
                x: 0.3, y: 0.3, w: SW - 0.6, h: SH - 0.6,
                fill: { type: 'none' },
                line: { color: '333333', width: 1 },
            });
        }

        if (slide.type === 'title') {
            // Slide Cover Layout
            // Badge
            if (slide.badge) {
                sObj.addShape(pptx.ShapeType.roundRect, {
                    x: SW / 2 - 2.5, y: 1.0, w: 5.0, h: 0.42,
                    rectRadius: 0.05,
                    fill: { type: 'solid', color: cardBg },
                    line: { color: borderColor, width: 0.5 },
                });
                sObj.addText(slide.badge, {
                    x: SW / 2 - 2.5, y: 1.02, w: 5.0, h: 0.38,
                    fontSize: 11, fontFace: style.font,
                    color: accentColor, bold: true, align: 'center', valign: 'middle',
                });
            }

            // Title
            sObj.addText(slide.title || 'Presentation Title', {
                x: 1.5, y: 1.8, w: SW - 3.0, h: 2.2,
                fontSize: 44, fontFace: style.font,
                color: textColor, bold: true, align: 'center', valign: 'middle',
            });

            // Subtitle
            if (slide.subtitle) {
                sObj.addText(slide.subtitle, {
                    x: 1.5, y: 4.1, w: SW - 3.0, h: 0.8,
                    fontSize: 18, fontFace: style.font,
                    color: mutedColor, align: 'center', valign: 'top',
                });
            }

            // Divider Line
            sObj.addShape(pptx.ShapeType.line, {
                x: SW / 2 - 1.5, y: 5.1, w: 3.0, h: 0,
                line: { color: borderColor, width: 1 },
            });

            // Authors
            if (slide.authors) {
                sObj.addText(slide.authors, {
                    x: 2.0, y: 5.3, w: SW - 4.0, h: 1.2,
                    fontSize: 12, fontFace: 'Courier New',
                    color: mutedColor, align: 'center', valign: 'top',
                });
            }

        } else {
            // Content & Split Slide layouts
            const leftX = 0.8;
            const contentW = 7.2;

            // Slide Number Badge
            if (slide.badge) {
                sObj.addShape(pptx.ShapeType.roundRect, {
                    x: leftX, y: 0.5, w: 2.8, h: 0.42,
                    rectRadius: 0.05,
                    fill: { type: 'solid', color: cardBg },
                    line: { color: borderColor, width: 0.5 },
                });
                sObj.addText(slide.badge, {
                    x: leftX + 0.15, y: 0.52, w: 2.5, h: 0.38,
                    fontSize: 10, fontFace: style.font,
                    color: accentColor, bold: true, valign: 'middle',
                });
            }

            // Heading
            sObj.addText(slide.title || 'Slide Title', {
                x: leftX, y: 1.1, w: contentW, h: 0.8,
                fontSize: 28, fontFace: style.font,
                color: textColor, bold: true, valign: 'top',
            });

            // Left Column Bullets (Custom style matching browser preview bullets)
            if (slide.bullets && slide.bullets.length > 0) {
                const textObjects = slide.bullets.map(b => {
                    const isSubBullet = b.startsWith('  ▪') || b.startsWith('  -') || b.startsWith('  *') || b.match(/^[\s\t]*[▪\-*]/);
                    const isNumbered = b.match(/^[\s\t]*\d+\./);
                    
                    if (isNumbered) {
                        return {
                            text: b.trim(),
                            options: {
                                color: textColor,
                                fontSize: 13,
                                indentLevel: 1,
                                fontFace: style.font,
                                paraSpaceBefore: 4,
                                breakLine: true
                            }
                        };
                    } else {
                        const cleanText = b.trim().replace(/^[▪\-\*\s]+/, '');
                        return {
                            text: cleanText,
                            options: {
                                bullet: { 
                                    code: isSubBullet ? '25AA' : '25B8', 
                                    color: accentColor 
                                },
                                color: textColor,
                                fontSize: isSubBullet ? 13 : 15,
                                indentLevel: isSubBullet ? 1 : 0,
                                fontFace: style.font,
                                paraSpaceBefore: isSubBullet ? 4 : 8,
                                breakLine: true
                            }
                        };
                    }
                });
                sObj.addText(textObjects, {
                    x: leftX, y: 2.0, w: contentW, h: 4.5,
                    fontFace: style.font, valign: 'top'
                });
            }

            // Right Column visual content
            const rightX = 8.6;
            const rightW = 3.93;
            const cy = 1.4;
            const ph = 4.6;
            
            if (slide.type === 'split' && slide.rightType) {
                if (slide.rightType === 'table' && slide.table) {
                    // Table rendering
                    const tableRows = [];
                    // Header row
                    if (slide.table.headers) {
                        const headerRow = slide.table.headers.map(h => ({
                            text: h,
                            options: {
                                fill: cardBg,
                                color: accentColor,
                                bold: true,
                                fontSize: 10,
                                fontFace: style.font,
                                align: 'center'
                            }
                        }));
                        tableRows.push(headerRow);
                    }
                    // Data rows
                    if (slide.table.rows) {
                        slide.table.rows.forEach(row => {
                            const dataRow = row.map(cell => ({
                                text: cell,
                                options: {
                                    color: textColor,
                                    fontSize: 9,
                                    fontFace: style.font,
                                    valign: 'middle'
                                }
                            }));
                            tableRows.push(dataRow);
                        });
                    }

                    sObj.addTable(tableRows, {
                        x: rightX, y: cy, w: rightW,
                        border: { type: 'solid', color: borderColor, width: 0.5 }
                    });

                } else if (slide.rightType === 'chart' && slide.chart) {
                    // Chart rendering
                    const chartData = [
                        {
                            name: 'Data Values',
                            labels: slide.chart.labels || [],
                            values: slide.chart.values || []
                        }
                    ];
                    let chartType = pptx.ChartType.bar;
                    if (slide.chart.type === 'line') chartType = pptx.ChartType.line;
                    if (slide.chart.type === 'pie') chartType = pptx.ChartType.pie;

                    sObj.addChart(chartType, chartData, {
                        x: rightX, y: cy, w: rightW, h: ph,
                        showLegend: (slide.chart.type === 'pie'),
                        chartColors: [accentColor, '3B82F6', '10B981', '8B5CF6'],
                        titleColor: textColor,
                        titleFontSize: 9,
                        legendColor: textColor,
                        legendFontSize: 8,
                        valAxisLabelColor: textColor,
                        valAxisLabelFontSize: 8,
                        catAxisLabelColor: textColor,
                        catAxisLabelFontSize: 8
                    });

                } else if (slide.rightType === 'metric' && slide.metric) {
                    // Metric Callout Card
                    sObj.addShape(pptx.ShapeType.roundRect, {
                        x: rightX, y: cy, w: rightW, h: ph,
                        rectRadius: 0.1,
                        fill: { type: 'solid', color: cardBg },
                        line: { color: borderColor, width: 1 },
                    });
                    
                    // Large metric value
                    sObj.addText(slide.metric.value || '0%', {
                        x: rightX + 0.2, y: cy + 0.8, w: rightW - 0.4, h: 1.2,
                        fontSize: 54, fontFace: style.font,
                        color: accentColor, bold: true, align: 'center', valign: 'middle',
                    });
                    
                    // Label
                    sObj.addText(slide.metric.label || 'Indicator', {
                        x: rightX + 0.2, y: cy + 2.3, w: rightW - 0.4, h: 1.2,
                        fontSize: 13, fontFace: style.font,
                        color: textColor, align: 'center', valign: 'top',
                    });
                }
            } else {
                // Fallback: draw decorative element on the right
                addDecorativeElement(pptx, sObj, style, isDark, rightX, rightW, cy, ph);
            }
        }
    });

    // Filename timestamp
    const now = new Date();
    const ts = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0') +
        String(now.getHours()).padStart(2, '0') +
        String(now.getMinutes()).padStart(2, '0');

    return pptx.writeFile({ fileName: `Slides_As_Code_${ts}.pptx` });
}
