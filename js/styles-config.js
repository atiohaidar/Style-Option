/**
 * Global Styles Configuration for Slides-as-Code Workspace
 * Centralizes the design properties (background, typography, colors, vibe) 
 * for all rendering engines (Preview, PPTX, Video).
 */

const GLOBAL_STYLES_CONFIG = {
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

// Global binding
window.GLOBAL_STYLES_CONFIG = GLOBAL_STYLES_CONFIG;
window.isColorDark = isColorDark;
