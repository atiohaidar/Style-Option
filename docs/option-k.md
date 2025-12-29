# Panduan Style: Option K (Strict Brand Identity)
**Sumber File**: `styles/option-k.html`

## Deskripsi
Style ini adalah estetika **Developer / Coding Portfolio**, sangat terinspirasi oleh tema VS Code (seperti Dracula atau One Dark). Menggunakan latar belakang navy gelap dan warna syntax-highlighting (Cyan, Hijau).

## Karakteristik Utama
- **Warna**: Latar Belakang Navy (`#0A192F`), Teks (`#8892B0`), Aksen (`#2ECC71`, `#3BAFDA`, `#ccd6f6`).
- **Tipografi**: `Poppins` (Judul), `Fira Code` (Monospace/Detail).
- **Dekorasi**: Sintaks seperti kode (`function() {}`, `_variable`, `// comment`).

## Komponen

### Tombol (Buttons)
Tombol sering terlihat seperti token kode atau argumen baris perintah.

**Tombol Outline**:
```css
px-6 py-4 border border-[#2ECC71] text-[#2ECC71] rounded 
hover:bg-[#2ECC71]/10 transition-colors
```

**Tombol Sekunder**:
```css
px-6 py-4 border border-[#8892B0] text-[#8892B0] rounded 
hover:text-[#2ECC71] transition-colors
```

### Modal / Kontainer
Modal terlihat seperti jendela IDE atau blok kode.

**Class**:
```css
bg-[#112240] border border-[#233554] p-8 shadow-xl text-[#8892B0]
```

## Catatan Penggunaan
- Gunakan `font-fira` (monospace) untuk semua elemen interaktif dan metadata.
- Awali tombol dengan `_` atau bungkus dalam `()`.
- Input terlihat seperti baris editor kode.
- Gunakan kode hex spesifik yang disediakan; jangan gunakan warna standar Tailwind.
