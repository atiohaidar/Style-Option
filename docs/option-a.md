# Panduan Style: Option A (Neo-Pop)
**Sumber File**: `styles/option-a.html`

## Deskripsi
Style ini mengusung estetika **Neo-Pop / Neo-Brutalist**. Karakteristik utamanya adalah kontras tinggi, border tebal, warna-warna jenuh (saturated) yang berani, dan nuansa visual yang mentah namun ceria. Style ini meniru tren "gumroad" atau "neo-brutalism" yang populer dalam desain web modern.

## Karakteristik Utama
- **Border**: Border hitam tebal dengan tepi tajam (`border-4 border-black`, `border-2`).
- **Bayangan (Shadows)**: Bayangan keras dan offset (tanpa blur) yang menciptakan efek 3D seperti "stiker" (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`).
- **Warna**: Saturasi tinggi.
  - Latar Belakang: `#FFDEE9` dikombinasikan dengan gradien linear.
  - Aksen: `bg-yellow-300`, `bg-pink-500`, `bg-blue-300`.
- **Tipografi**: `Space Grotesk` untuk judul (Geometric Sans), font sans default untuk isi.

## Komponen

### Tombol (Buttons)
Tombol memiliki border tebal, teks huruf kapital semua (uppercase), dan state interaksi "tertekan" dengan menggeser posisi dan mengurangi bayangan.

**Class**:
```css
bg-pink-500 text-white font-bold border-2 border-black px-8 py-3 
shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
hover:translate-x-[2px] hover:translate-y-[2px] 
hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
transition-all
```

### Kartu / Kontainer
Kontainer menggunakan latar belakang putih dengan border hitam tebal dan bayangan keras yang dalam.

**Class**:
```css
bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10
```

### Modal
Modal mempertahankan tampilan brutalis dengan sudut tajam dan kontras yang kuat.

## Catatan Penggunaan
- Gunakan `border-black` dan `border-2` atau `border-4` pada hampir semua elemen.
- Hindari sudut melengkung (rounded corners), gunakan sudut siku (`rounded-none`).
- Gunakan `uppercase` untuk tombol dan label kecil.
- Bayangan harus selalu solid (blur `0px`).
