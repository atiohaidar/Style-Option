# Panduan Style: Option I (AI Innovator)
**Sumber File**: `styles/option-i.html`

## Deskripsi
Style ini mewujudkan estetika **Futuristic AI / Deep Tech**. Menggunakan warna hitam pekat, gradien bercahaya (indigo/ungu/pink), dan elemen "bersinar" yang sangat interaktif untuk memberi kesan teknologi canggih dan kecerdasan.

## Karakteristik Utama
- **Latar Belakang**: Hitam Pekat (`#050505`) dengan bola-bola warna besar yang di-blur di belakang konten.
- **Tipografi**: Sans-serif, spasi huruf rapat (`tracking-tight`), judul besar dengan isian gradien (`bg-clip-text`).
- **Pencahayaan**: Semuanya "bersinar" melalui `drop-shadow` atau `box-shadow` saat di-hover.

## Komponen

### Tombol (Buttons)
Tombol terlihat kompleks, sering menampilkan gradien, border, atau efek kaca.

**Tombol Peluncuran**:
```css
relative px-8 py-4 bg-black rounded-lg leading-none flex items-center 
divide-x divide-gray-600
```
*(Sering dibungkus dalam kontainer untuk efek border gradien)*

**Tombol Kaca**:
```css
px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-gray-300 
hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all
```

### Modal
Modal sangat kental nuansa glass-morphism dengan background blur dan border gradien.

**Class**:
```css
bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl 
shadow-[0_0_50px_rgba(79,70,229,0.2)]
```

## Catatan Penggunaan
- Gunakan `backdrop-blur-xl` dengan bebas.
- Gradien teks sangat penting untuk judul.
- Animasi (`animate-tilt`, `hover:shadow`) membuat antarmuka terasa "hidup".
- Kontras tinggi adalah kuncinya (Teks putih di atas hitam).
