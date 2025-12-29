# Panduan Style: Option M (The Living Grid)
**Sumber File**: `styles/option-m.html`

## Deskripsi
Style ini menggunakan tren tata letak **Bento Grid** yang populer (seperti Apple atau Linear). Menampilkan potongan informasi yang sangat terorganisir, teks berjalan (marquee), dan palet warna cerah (Biru/Hijau) di atas latar belakang abu-abu muda yang bersih.

## Karakteristik Utama
- **Tata Letak**: CSS Grid dengan packing padat (`grid-dense`), merentang baris/kolom.
- **Warna**: Kanvas (`#F3F4F6`), Tinta (`#111827`), Aksen Biru (`#3B82F6`), Pop Hijau (`#10B981`).
- **Tipografi**: `Space Grotesk` (Display), `JetBrains Mono` (Teknis).
- **Gerakan**: Teks berjalan, skala saat di-hover, statistik yang berdenyut.

## Komponen

### Tombol (Buttons)
Tombol kecil dan menonjol.

**Utama**:
```css
bg-ink text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-accent 
transition-colors
```

### Kartu (Bento Box)
Blok bangunan inti.

**Class**:
```css
bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all 
hover:scale-[1.01] border border-gray-100 relative overflow-hidden
```

### Marquee
Pita teks berjalan.
```css
w-full bg-ink text-white overflow-hidden py-3 mb-8 rotate-1 shadow-xl 
border-y-4 border-pop
```

## Catatan Penggunaan
- Gunakan `md:col-span-2` atau `md:row-span-2` untuk membuat variasi visual dalam grid.
- Gunakan `font-display` untuk header dan `font-mono` untuk data/tag.
- Semuanya harus memiliki sedikit `rounded-2xl` untuk nuansa modern tersebut.
