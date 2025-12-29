# Panduan Style: Option J (Research Labs)
**Sumber File**: `styles/option-j.html`

## Deskripsi
Style ini meniru situs web **Academic Research / Laboratory**. Tampilannya steril, presisi, dan berfokus pada konten. Menggunakan palet yang sangat netral (Slate/Putih) dan mengandalkan struktur untuk menyampaikan otoritas.

## Karakteristik Utama
- **Warna**: Putih, Slate-50, Slate-900.
- **Tipografi**: Sans-serif (bersih), Monospace untuk "data" atau label (`ABSTRACT_VIEW.JS`).
- **Tata Letak**: Layar terbagi (split screen), pembagi yang jelas, penanda struktur (misalnya, `01`, `02`).

## Komponen

### Tombol (Buttons)
Tombol tidak mencolok.

**Tombol Aksi**:
```css
text-xs font-bold text-slate-500 hover:text-slate-900 uppercase 
tracking-wide hover:underline cursor-pointer
```
*(Sering di dalam [ KURUNG ])*

**Tombol Submit**:
```css
bg-slate-900 text-white text-sm font-bold px-6 py-3 hover:bg-slate-800 
transition shadow
```

### Kartu
Kartu adalah kontainer sederhana, sering merepresentasikan "paper" atau "abstrak".

**Class**:
```css
bg-slate-50 border border-slate-100 p-8 rounded-sm
```

## Catatan Penggunaan
- Gunakan `rounded-sm` atau tanpa radius.
- Gunakan `border-l-2` untuk item list guna menciptakan tampilan "timeline" atau "langkah".
- Sorot teks kunci dengan efek "stabilo" (`bg-yellow-100`).
- Pertahankan animasi seminimal mungkin.
