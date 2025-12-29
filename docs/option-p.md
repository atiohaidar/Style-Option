# Panduan Style: Option P (Messy / Grunge)
**Sumber File**: `styles/option-p.html`

## Deskripsi
Style ini mewujudkan estetika **Berantakan / Kumuh / Grunge**. Terlihat "belum selesai", "kotor", atau "malas". Menggunakan elemen yang diputar, tekstur selotip, noda, dan font tulisan tangan agar tampak kacau namun personal.

## Karakteristik Utama
- **Latar Belakang**: Beige Kotor (`#e3dac9`) dengan gradien noda.
- **Tipografi**: `Just Me Again Down Here`, `Reenie Beanie` (Tulisan Tangan/Spidol).
- **Tata Letak**: Semuanya sedikit diputar (`rotate-1`, `-rotate-2`). Tidak ada yang lurus.

## Komponen

### Tombol (Buttons)
Tombol terlihat seperti sobekan kertas atau sticky notes.

**Tombol Selotip**:
```css
bg-[#efeeb4] shadow-sm transform -rotate-1 hover:rotate-0 
text-red-700
```
*(Gunakan class `.tape` untuk efek css)*

**Tombol Aksi**:
```css
bg-gray-200 border-2 border-gray-400 border-dashed text-gray-500 
hover:border-solid transform hover:-rotate-1 active:scale-95
```

### Kontainer
Lembaran kertas dengan bayangan dan noda.

**Class**:
```css
bg-[#fcf5e5] box-shadow: 2px 3px 10px rgba(0,0,0,0.1) relative
```

## Catatan Penggunaan
- **Jangan pernah** meluruskan sesuatu dengan sempurna. Gunakan `transform` untuk memiringkan.
- Gunakan `border-dashed`.
- Copywriting harus informal, malas, atau merendahkan diri sendiri ("Belum jadi", "Males").
- Gunakan elemen "Stiker" untuk versi atau pemberitahuan.
