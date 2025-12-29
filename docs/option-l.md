# Panduan Style: Option L (The Dashboard)
**Sumber File**: `styles/option-l.html`

## Deskripsi
Style ini merepresentasikan **SaaS Admin Dashboard**. Menampilkan tata letak sidebar, kartu seperti widget, metrik data, dan nuansa "produktivitas". Mengorganisir informasi kompleks menjadi blok-blok yang mudah dicerna.

## Karakteristik Utama
- **Tata Letak**: Sidebar + Area Konten Utama.
- **Warna**: Latar belakang Abu-abu Terang (`bg-gray-100`), Kartu Putih, Sidebar Navy Gelap (`#0A192F`).
- **Tipografi**: `Inter` (Font UI standar).
- **Visual**: Border bersih, bayangan kecil, indikator status (titik berwarna).

## Komponen

### Tombol (Buttons)
Tombol UI standar yang ditemukan dalam aplikasi web.

**Aksi Utama**:
```css
bg-[#2ECC71] text-white px-5 py-2 rounded-lg font-bold shadow-lg 
hover:brightness-105 transition
```

**Sekunder**:
```css
bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg 
font-bold hover:text-gray-900 shadow-sm transition
```

### Kartu (Widgets)
Digunakan untuk menampilkan statistik atau daftar.

**Class**:
```css
p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white
```

## Catatan Penggunaan
- Gunakan `rounded-xl` untuk kartu dan `rounded-lg` untuk tombol.
- Gunakan tata letak `grid` untuk mengatur widget.
- Titik status (`w-2 h-2 rounded-full`) sangat bagus untuk daftar.
- Navigasi sidebar adalah identitas kunci dari style ini.
