# 📝 Panduan JSON Schema — Slides-as-Code

Sistem **Slides-as-Code** ini menggunakan format data terstruktur bernama **SOM (Slide Object Model)** berbasis JSON. JSON ini berisi sebuah `Array of Objects`, di mana setiap objek mewakili satu halaman slide presentasi.

Kamu bisa menyusun presentasi secara dinamis menggunakan berbagai tipe slide dan konfigurasi layout di bawah ini.

---

## 1. Tipe-Tipe Slide (`type`)

Terdapat 3 tipe slide utama yang didukung oleh editor dan generator:

### 1.1. `title` (Slide Cover / Pembuka)
Digunakan khusus untuk slide judul presentasi di awal atau akhir bab.
* **Fields:**
  - `type`: `"title"`
  - `title`: Judul besar presentasi.
  - `subtitle`: Sub-judul presentasi.
  - `authors`: Penulis, kontak, atau informasi institusi (gunakan `\n` untuk baris baru).
  - `notes`: (Opsional) Catatan naskah presenter (Speaker Notes).

* **Contoh JSON:**
```json
{
  "type": "title",
  "title": "Sistem Informasi Kelas Modern",
  "subtitle": "Otomasi Administrasi Berbasis Web",
  "authors": "Tio Haidar Hanif\ntio@example.com",
  "notes": "Selamat pagi semuanya. Hari ini saya akan mempresentasikan tentang..."
}
```

---

### 1.2. `content` (Slide Isi Standar)
Slide konten standar yang berisi daftar poin (bullet list) secara berurutan.
* **Fields:**
  - `type`: `"content"`
  - `title`: Judul halaman slide.
  - `bullets`: Array string berisi daftar poin. Mendukung hierarki/indentasi dengan menambahkan spasi di awal string.
  - `notes`: (Opsional) Catatan naskah presenter.

* **Hierarki Bullets (Nested):**
  - Gunakan `  ▪ ` (dua spasi + simbol) untuk level kedua bullet biasa.
  - Gunakan `  1. ` atau `  2. ` untuk sub-list bernomor.

* **Contoh JSON:**
```json
{
  "type": "content",
  "title": "Fitur Utama Aplikasi",
  "bullets": [
    "Otomasi Dokumen & Surat Menyurat:",
    "  ▪ Auto-generate format PDF langsung di web",
    "  ▪ Sinkronisasi metadata menggunakan Google Apps Script",
    "Presensi Real-time:",
    "  1. Scan QR Code dinamis",
    "  2. Rekapitulasi otomatis ke Excel spreadsheet"
  ],
  "notes": "Di slide ini, kita akan membahas dua pilar fitur utama..."
}
```

---

### 1.3. `split` (Slide Layout 2 Kolom)
Membagi slide menjadi dua kolom: kolom kiri berisi penjelasan teks (bullet points), dan kolom kanan berisi elemen visual interaktif/data.
* **Fields:**
  - `type`: `"split"`
  - `title`: Judul slide.
  - `bullets`: Daftar poin penjelasan di kolom kiri.
  - `rightType`: Tipe visualisasi kolom kanan. Nilai yang didukung: `"table"`, `"chart"`, atau `"metric"`.
  - `table`: (Wajib jika `rightType` adalah `"table"`) Objek tabel.
  - `chart`: (Wajib jika `rightType` adalah `"chart"`) Objek diagram.
  - `metric`: (Wajib jika `rightType` adalah `"metric"`) Objek metrik angka.
  - `notes`: (Opsional) Catatan naskah presenter.

---

## 2. Pilihan Kolom Kanan (`rightType`) untuk Slide `split`

### 2.1. Tabel (`rightType: "table"`)
Merender tabel berisi baris dan kolom.
* **Format:**
  - `headers`: Array string nama kolom header.
  - `rows`: Array of arrays string berisi baris data.
* **Contoh JSON:**
```json
{
  "type": "split",
  "title": "Tabel Response Time API",
  "bullets": [
    "Performa diuji menggunakan load test 1000 request per detik.",
    "Database dioptimasi menggunakan indexing yang tepat."
  ],
  "rightType": "table",
  "table": {
    "headers": ["Modul API", "Bahasa", "Avg Latency"],
    "rows": [
      ["Auth Service", "Node.js", "25ms"],
      ["Report Engine", "Python", "180ms"],
      ["Data Sync", "Go", "12ms"]
    ]
  }
}
```

---

### 2.2. Diagram/Chart (`rightType: "chart"`)
Merender diagram grafik batang (*bar chart*), lingkaran (*pie chart*), atau garis (*line chart*) secara native di PowerPoint dan mockup visual di browser.
* **Format:**
  - `type`: `"bar"`, `"line"`, atau `"pie"`.
  - `labels`: Array string untuk label sumbu X atau kategori.
  - `values`: Array number untuk nilai data.
* **Contoh JSON:**
```json
{
  "type": "split",
  "title": "Statistik Pertumbuhan Anggota",
  "bullets": [
    "Kenaikan signifikan terjadi setelah sosialisasi digital.",
    "Target kuartal depan adalah mencapai 150 anggota aktif baru."
  ],
  "rightType": "chart",
  "chart": {
    "type": "bar",
    "labels": ["Kuartal 1", "Kuartal 2", "Kuartal 3", "Kuartal 4"],
    "values": [35, 62, 88, 120]
  }
}
```

---

### 2.3. Key Metric / Angka Metrik (`rightType: "metric"`)
Menonjolkan satu angka metrik besar di sisi kanan slide untuk visual impact.
* **Format:**
  - `value`: String angka atau nilai besar (misal: `"98%"`, `"+150"`, `"#1"`).
  - `label`: Deskripsi pendek penjelasan metrik tersebut.
* **Contoh JSON:**
```json
{
  "type": "split",
  "title": "Evaluasi Efisiensi Waktu",
  "bullets": [
    "Mengeliminasi input manual dokumen berulang.",
    "Proses pembuatan laporan kini selesai dalam hitungan detik."
  ],
  "rightType": "metric",
  "metric": {
    "value": "85%",
    "label": "Penghematan Waktu Kerja Administrasi"
  }
}
```

---

## 3. Template Presentasi Lengkap (Default Template)

Gunakan contoh template ini sebagai bahan dasar saat menulis presentasi di editor:

```json
[
  {
    "type": "title",
    "title": "Tio Haidar Hanif",
    "subtitle": "Vibe coder • Tukang Penasaran • Automation Enthusiast",
    "authors": "Universitas Telkom\ntio@example.com",
    "notes": "Opening: Perkenalkan diri, jelaskan ketertarikan di bidang engineering dan otomasi."
  },
  {
    "type": "content",
    "title": "Core Expertise & Software Skills",
    "bullets": [
      "Backend Web Development:",
      "  ▪ Laravel (PHP) & Express.js (Node.js)",
      "  ▪ SQLite, MySQL, PostgreSQL",
      "Otomasi & Scripting:",
      "  ▪ Python Scripting & Telegram Bot API",
      "  ▪ VBA & Google Apps Script (Spreadsheet Automation)"
    ],
    "notes": "Terangkan teknologi yang sering digunakan sehari-hari untuk ngoding."
  },
  {
    "type": "split",
    "title": "Perbandingan Kecepatan Pembuatan Surat",
    "bullets": [
      "Surat Generator menghemat waktu administrasi secara drastis.",
      "Mencegah kesalahan ketik data penerima surat."
    ],
    "rightType": "table",
    "table": {
      "headers": ["Metode", "Waktu Pengerjaan", "Kesalahan Input"],
      "rows": [
        ["Manual Word", "10 - 15 Menit", "Sering Terjadi"],
        ["Google Doc Script", "1 - 2 Menit", "Minim"],
        ["Surat-Generator Web", "10 Detik", "Hampir 0%"]
      ]
    },
    "notes": "Tunjukkan efisiensi tools yang pernah dibuat dibandingkan pengerjaan manual."
  },
  {
    "type": "split",
    "title": "Keaktifan Anggota Kelas",
    "bullets": [
      "Grafik menunjukkan jumlah anggota aktif yang berpartisipasi dalam pengerjaan tugas.",
      "Menggunakan Telegram bot pengingat tugas otomatis."
    ],
    "rightType": "chart",
    "chart": {
      "type": "bar",
      "labels": ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
      "values": [24, 28, 35, 42]
    },
    "notes": "Jelaskan pengaruh Bot Telegram Pengingat terhadap keaktifan kelas."
  },
  {
    "type": "split",
    "title": "Evaluasi & Kesimpulan Akhir",
    "bullets": [
      "Otomasi merubah administrative chaos menjadi keteraturan.",
      "Terus berinovasi mencari solusi efisien untuk masalah sehari-hari."
    ],
    "rightType": "metric",
    "metric": {
      "value": "100%",
      "label": "Akurasi Distribusi Laporan Otomatis"
    },
    "notes": "Closing: Tekankan core values Tio yaitu efisiensi, otomasi, dan inovasi."
  }
]
```
