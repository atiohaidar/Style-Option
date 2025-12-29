# Panduan Style: Option E (Retro Terminal)
**Sumber File**: `styles/option-e.html`

## Deskripsi
Style ini meniru estetika **Retro CRT Terminal** atau Hacker. Menggunakan skema warna kontras tinggi hitam dan hijau, efek scanline, dan tipografi monospace untuk membangkitkan nostalgia komputasi jaman dulu.

## Karakteristik Utama
- **Warna**: Latar belakang hitam (`bg-[#1a1a1a]`, `bg-[#0c0c0c]`) dengan teks hijau matrix (`text-green-500`).
- **Tipografi**: `VT323` (Monospace Pixelated).
- **Efek**:
  - Lapisan Scanlines (CSS linear gradient).
  - Animasi teks berkedip (pulsing/glitching).
  - Teks gaya "Prompt" (`user@edugreen:~$`).

## Komponen

### Tombol (Buttons)
Tombol terlihat seperti blok eksekusi atau prompt perintah.

**Tombol Eksekusi**:
```css
group relative inline-flex items-center justify-center px-6 py-3 
text-lg font-bold tracking-tighter text-black bg-green-500 
hover:bg-green-400 transition-all
```

**Tombol Kurung**:
```css
text-green-500 border border-green-500 px-4 py-2 hover:bg-green-900/30 
transition-colors text-sm font-bold tracking-wider
```
*(Sering dibungkus dalam `[ ]` pada kontennya)*

### Kartu / Jendela
Kontainer terlihat seperti jendela terminal, seringkali dengan "title bar" di bagian atas.

**Class**:
```css
bg-[#0c0c0c] border-[2px] border-green-700/50 p-6 shadow-2xl rounded-sm
```

## Catatan Penggunaan
- Gunakan `font-mono` untuk semuanya.
- Apit snippet interaktif dengan `[` `]` atau `>`.
- Gunakan huruf kapital (uppercase) untuk pesan "sistem".
- Tambahkan class `scanlines` pada kontainer utama untuk efek CRT.
