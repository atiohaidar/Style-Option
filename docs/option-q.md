# Panduan Style: Option Q (Buku Catatan Sekolah)
**Sumber File**: `styles/option-q.html`

## Deskripsi
Style ini meniru **Buku Tulis / Binder Sekolah**. Sifatnya informal, personal, dan kreatif. Menggunakan latar belakang kertas bergaris, font tulisan tangan, doodle, dan elemen alat tulis lainnya seperti sticky notes dan selotip. Cocok untuk portofolio yang ingin menunjukkan sisi "humanis" dan "belajar terus menerus".

## Karakteristik Utama
- **Latar Belakang**: Pola kertas buku tulis (`notebook-paper`) dengan garis biru horizontal dan garis margin merah vertikal. Ditambah lubang binder.
- **Tipografi**: `Kalam` (Judul/Bold) dan `Patrick Hand` (Tulisan tangan rapi).
- **Warna**: Tinta Biru (`#1a73e8`), Tinta Merah (`#d93025`), Pensil (`#5f6368`), Highlighter Kuning.
- **Dekorasi**: Efek stabilo, doodle SVG, sticky notes kuning, dan elemen yang sedikit miring (rotasi).

## Komponen

### Kertas Notebook
Kontainer utama yang mensimulasikan lembaran kertas.
**Class**: `notebook-paper binder-holes`

### Tipografi Tulisan Tangan
- Gunakan `font-hand` untuk judul besar yang terkesan pakai spidol.
- Gunakan `font-neat` untuk teks paragraf yang terkesan pakai pulpen gel.
- Gunakan `decoration-wavy` untuk garis bawah yang bergelombang.

### Tombol (Buttons)
Tombol terlihat digambar tangan dengan border SVG atau coretan.

**Tombol Gambar Tangan**:
Tombol ini menggunakan SVG `path` sebagai border agar terlihat tidak sempurna (seperti digambar tangan).
```html
<button>
    <svg>...</svg> <!-- Border path -->
    <span>Teks</span>
</button>
```

### Sticky Note
Elemen catatan tempel untuk informasi tambahan.
**Class**: `bg-yellow-200 shadow-lg transform rotate-2`

## Catatan Penggunaan
- Gunakan rotasi acak kecil (`rotate-1`, `-rotate-2`) agar terlihat alami.
- Jangan gunakan garis lurus sempurna untuk pemisah, gunakan border putus-putus (`border-dashed`) atau SVG doodle.
- Gunakan warna "tinta" (biru/merah/hitam pudar) daripada hitam pekat.
