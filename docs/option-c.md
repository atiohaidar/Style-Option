# Panduan Style: Option C (Swiss Editorial)
**Sumber File**: `styles/option-c.html`

## Deskripsi
Style ini mengadaptasi estetika **Swiss Design / Editorial**. Mengandalkan grid yang ketat, kontras tipografi yang kuat (Serif vs Sans-serif), ruang kosong (whitespace) yang luas, dan palet warna earthy/netral yang terbatas. Terasa seperti majalah kelas atas atau situs web museum.

## Karakteristik Utama
- **Warna**: Latar belakang Off-white/Krem (`bg-[#f4f4f0]`), teks abu-abu tua/hitam (`text-[#1a1a1a]`), dan aksen hijau tua (`text-green-900`).
- **Tipografi**:
  - Judul: `Playfair Display` (Serif) - sering dimiringkan (italic) untuk penekanan.
  - Isi/Label: `Inter` (Sans-serif) - sering kapital (uppercase) dengan spasi huruf lebar (`tracking-widest`).
- **Tata Letak**: Penggunaan border (`border-gray-300`) yang dominan untuk membuat struktur grid terlihat.

## Komponen

### Tombol (Buttons)
Tombol terlihat minimalis, seringkali hanya berupa teks dengan border atau kotak sederhana. Mengandalkan tipografi daripada efek visual (tanpa bayangan).

**Tombol Teks Link**:
```css
text-xs font-bold uppercase tracking-widest text-gray-500 
hover:text-black transition-colors
```

**Tombol Kotak**:
```css
text-xs font-bold uppercase tracking-widest border border-black px-8 py-4 
hover:bg-black hover:text-white transition-colors
```

### Navigasi
Link teks sederhana, seringkali uppercase dan berukuran kecil (`text-xs`), dengan jarak yang lebar.

## Catatan Penggunaan
- Gunakan `font-serif` untuk judul dan `font-sans` untuk teks utilitas.
- Gunakan `italic` secukupnya namun efektif pada teks serif.
- Gunakan `tracking-widest` dan `uppercase` untuk label dan tombol kecil.
- Hindari border pada sekeliling kartu; sebagai gantinya, gunakan pembatas (`border-b`, `border-r`) untuk memisahkan area konten.
- **TIDAK ADA** bayangan atau sudut melengkung. Semuanya tajam dan datar.
