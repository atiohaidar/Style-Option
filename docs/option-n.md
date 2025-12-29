# Panduan Style: Option N (The Daily Engineer)
**Sumber File**: `styles/option-n.html`

## Deskripsi
Style ini mensimulasikan **Koran Vintage** atau Broadsheet. Menggunakan tipografi serif, tekstur kertas, teks rata kiri-kanan (justified), tata letak kolom, dan warna "tinta" agar terasa seperti media cetak fisik.

## Karakteristik Utama
- **Latar Belakang**: Kertas putih gading (`#fdfbf6`) dengan lapisan filter noise.
- **Tipografi**: `Cinzel Decorative` (Masthead), `Playfair Display` (Judul), `Merriweather` (Isi).
- **Tata Letak**: Berkolom (`column-count: 2`), border pemisah bagian, masthead di atas.

## Komponen

### Tombol (Buttons)
Tombol terlihat seperti iklan baris atau permintaan formal.

**Standar**:
```css
background: transparent; border: 2px solid #1a1a1a; color: #1a1a1a; 
padding: 0.6rem 1.2rem; font-family: 'Playfair Display', serif; 
font-weight: bold; text-transform: uppercase;
```

### Elemen Tata Letak
- **Masthead**: Judul besar di bagian atas dengan bar meta-data.
- **Drop Cap**: Huruf pertama dari cerita utama berukuran besar dan dekoratif.
- **Double Borders**: Sering digunakan (`border-style: double`) untuk membingkai konten.

## Catatan Penggunaan
- Gunakan `text-align: justify` untuk teks isi.
- Gunakan `text-transform: uppercase` untuk meta-data kecil.
- Gunakan garis horizontal (`border-bottom`) untuk memisahkan cerita.
- Gambar harus grayscale atau seni garis kontras tinggi jika memungkinkan.
