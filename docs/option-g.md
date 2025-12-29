# Panduan Style: Option G (System Architecture)
**Sumber File**: `styles/option-g.html`

## Deskripsi
Style ini meniru diagram **Technical Blueprint / System Architecture**. Terlihat seperti skema atau gambar CAD. Menarik bagi insinyur dan pengembang yang menghargai presisi dan struktur.

## Karakteristik Utama
- **Latar Belakang**: Class `blueprint-grid` (Pola garis grid CSS 1px).
- **Tipografi**: `JetBrains Mono` (Font kode).
- **Warna**: Biru Teknis (`blue-600`), Abu-abu Slate (`slate-500`), Putih.
- **Dekorasi**: Crosshair (pembidik), garis putus-putus, node penghubung (`w-2 h-2 rounded-full`).

## Komponen

### Tombol (Buttons)
Tombol murni fungsional, sering diberi label istilah teknis (`INITIALIZE`, `EXECUTE`).

**Tombol Utama**:
```css
bg-slate-900 text-white px-6 py-3 text-sm font-bold hover:bg-blue-700 
transition-colors flex items-center gap-2
```

**Tombol Teks/Link**:
```css
border-b-2 border-blue-600 text-blue-700 font-bold uppercase text-xs 
tracking-wider pb-1 hover:bg-blue-50 transition
```

### Kartu / Panel
Panel terlihat seperti spesifikasi teknis yang melayang. Seringkali memiliki border putus-putus atau "penanda sudut".

**Class**:
```css
border-2 border-slate-400 bg-white/80 backdrop-blur-sm p-8 
shadow-[4px_4px_0_0_#94a3b8] relative
```
*(Perhatikan offset bayangan yang keras)*

## Catatan Penggunaan
- Gunakan `[ KURUNG ]` untuk label.
- Hiasi sudut kontainer dengan "penanda" (markers) yang diposisikan secara absolut.
- Gunakan HURUF KAPITAL (UPPERCASE) untuk hampir semua elemen UI.
- Gunakan `border-dashed` sesering mungkin.
