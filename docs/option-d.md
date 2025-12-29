# Panduan Style: Option D (Modern SaaS)
**Sumber File**: `styles/option-d.html`

## Deskripsi
Style ini meniru estetika **Modern B2B SaaS** (seperti Stripe atau TailwindUI). Tampilannya bersih, profesional, ramah, dan terpercaya. Memiliki padding yang lega, bayangan lembut yang menyebar, sudut melengkung, dan skema warna putih/abu-abu/indigo.

## Karakteristik Utama
- **Warna**: Latar belakang putih, teks Abu-abu (`text-gray-500`, `text-gray-900`), warna aksi utama Indigo (`bg-[#111827]` atau `bg-indigo-600`).
- **Bentuk**: Sudut melengkung yang moderat (`rounded-xl`, `rounded-2xl`, `rounded-3xl` untuk kontainer utama).
- **Bayangan**: Bayangan lembut dengan blur radius besar (`shadow-xl`, `shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]`).
- **Tipografi**: `DM Sans` (atau Inter). Bersih, mudah dibaca, dengan spasi baris yang baik.

## Komponen

### Tombol (Buttons)
Tombol terlihat solid dan substansial namun tetap ramah.

**Tombol Utama**:
```css
bg-[#111827] text-white px-6 py-3 rounded-xl font-semibold 
hover:bg-black transition shadow-lg shadow-gray-200
```

**Tombol Sekunder**:
```css
bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-xl 
font-semibold hover:bg-gray-50 transition
```

### Kartu
Kartu berwarna putih, melengkung (`rounded-2xl` atau `3xl`), dengan border halus (`border-gray-100`) dan bayangan lembut.

## Catatan Penggunaan
- Gunakan `rounded-xl` untuk sebagian besar elemen interaktif.
- Gunakan border halus (`border-gray-100`, `border-gray-200`) untuk mendefinisikan tepi tanpa garis yang terlalu tegas.
- Bayangan harus lembut (blur radius besar), tidak boleh keras.
- Kolom input harus memiliki latar belakang abu-abu muda (`bg-gray-50`) yang berubah menjadi putih saat fokus dengan ring focus.
