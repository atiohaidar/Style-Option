# Panduan Style: Option O (Royal Luxury)
**Sumber File**: `styles/option-o.html`

## Deskripsi
Style ini membangkitkan nuansa **Kemewahan Kelas Atas / Prestise**. Menggunakan skema warna hitam dan emas, font serif, gradien yang terlihat seperti kilauan logam, dan spasi yang lega. Terasa seperti situs web hotel mewah atau merek jam tangan.

## Karakteristik Utama
- **Warna**: Hitam Royal (`#050505`), Emas Royal (`#D4AF37`), Krem (`#F5F5DC`).
- **Tipografi**: `Cinzel` (Roman Serif), `Playfair Display`.
- **Efek**: Gradien emas (`text-gold-gradient`), putaran lambat, kilauan logam.

## Komponen

### Tombol (Buttons)
Tombol teks elegan dengan spasi lebar.

**Tombol Emas**:
```css
px-8 py-4 bg-royal-gold text-royal-black font-royal text-xs font-bold 
tracking-widest uppercase hover:bg-white transition-colors
```

**Tombol Outline**:
```css
border border-white/20 text-white hover:border-royal-gold 
hover:text-royal-gold tracking-widest uppercase
```

### Dekorasi
- **Border Sudut**: Border parsial kecil di sudut-sudut kartu.
- **Fleur-de-lis / Simbol**: Simbol Unicode seperti ♔, ⚜.

## Catatan Penggunaan
- Gunakan `tracking-widest` atau `tracking-[0.3em]` untuk label huruf kapital.
- Gunakan `font-serif` italic untuk kata-kata penekanan.
- Latar belakang harus gelap (`#0f172a` atau hitam) dengan tekstur halus.
