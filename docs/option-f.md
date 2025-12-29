# Panduan Style: Option F (Organic & Soft)
**Sumber File**: `styles/option-f.html`

## Deskripsi
Style ini mewujudkan estetika **Organic / Nature**. Menggunakan warna-warna tanah yang lembut, sudut yang sangat melengkung (superellips atau lingkaran penuh), dan jenis huruf yang ramah serta membulat. Terasa mudah didekati, tenang, dan "ramah lingkungan".

## Karakteristik Utama
- **Warna**: Latar belakang Krem/Beige (`bg-[#FDFCF6]`), Hijau Sage (`#E3EBCB`, `#D4E0B1`), Hijau Daun Tua (`#2D3A30`).
- **Bentuk**: Penggunaan `rounded-[2rem]`, `rounded-[3rem]`, dan `rounded-full` yang masif.
- **Tipografi**: `Nunito` (Rounded Sans-serif).
- **Dekorasi**: Bentuk-bentuk blob (gumpalan) di latar belakang dengan opasitas rendah.

## Komponen

### Tombol (Buttons)
Tombol berbentuk kapsul (`rounded-full`) dengan warna-warna lembut.

**Tombol Utama**:
```css
bg-[#2D3A30] text-[#F3F6E6] px-8 py-4 rounded-full font-bold shadow-lg 
hover:bg-[#1A231C] hover:scale-105 transition-all
```

**Tombol Sekunder**:
```css
bg-[#E3EBCB] text-[#2D3A30] px-8 py-3 rounded-full font-bold shadow-lg 
hover:bg-[#D4E0B1] hover:scale-105 transition-all
```

### Kartu
Kartu berbentuk "blob" atau kontainer lembut dengan radius border yang besar.

**Class**:
```css
bg-[#F3F6E6] rounded-[2rem] p-12 relative overflow-hidden
```

## Catatan Penggunaan
- Hampir tidak ada yang boleh bersudut tajam kotak.
- Gunakan `hover:scale-105` untuk interaksi yang membal dan ceria.
- Gunakan emoji bertema alam (🌱, 🍃) sebagai ikon.
- Bayangan harus lembut (`shadow-lg`, `shadow-xl`).
