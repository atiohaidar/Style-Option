# Panduan Style: Option H (Pure Utility)
**Sumber File**: `styles/option-h.html`

## Deskripsi
Style ini merepresentasikan estetika **High-Contrast Utility / Swiss Brutalist**, mirip dengan "Uber" atau "Notion" tetapi lebih berani. Menggunakan warna hitam dan putih yang tegas, garis pemisah yang tebal, dan tipografi yang sangat mudah dibaca. Memprioritaskan fungsi di atas bentuk.

## Karakteristik Utama
- **Warna**: Hitam & Putih yang ketat (`bg-white`, `text-black`, `bg-black`, `text-white`). Kadang abu-abu (`text-neutral-600`).
- **Tipografi**: `IBM Plex Sans` (Humanist Linear).
- **Bentuk**: Hanya persegi panjang. Tanpa radius border (`rounded-none`).
- **Tata Letak**: Berbasis grid, dipisahkan oleh border yang eksplisit.

## Komponen

### Tombol (Buttons)
Tombol berupa persegi panjang solid dengan state hover kontras tinggi.

**Utama**:
```css
bg-black text-white font-bold border-2 border-black py-4 
hover:bg-white hover:text-black transition-colors uppercase 
tracking-widest text-sm
```

**List Item / Aksi**:
```css
bg-white border-2 border-black p-4 text-left hover:bg-black 
hover:text-white transition-colors duration-200
```

### Modal / Kartu
Kotak putih tegas dengan border hitam tebal.

**Class**:
```css
bg-white border-4 border-black p-8 shadow-none relative
```

## Catatan Penggunaan
- **Nol** border radius (sama sekali tidak melengkung).
- Gunakan `border-b-2`, `border-r-2`, dll untuk membagi konten.
- Tipografi harus besar dan tebal untuk judul.
- "Hover Invert" adalah pola interaksi utama (Hitam->Putih, Putih->Hitam).
