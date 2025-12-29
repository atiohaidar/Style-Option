# Panduan Style: Option B (Tech Glass)
**Sumber File**: `styles/option-b.html`

## Deskripsi
Style ini merepresentasikan estetika **Futuristic Glassmorphism**. Fokusnya pada mode gelap (dark mode), transparansi, latar belakang blur (efek kaca es), dan gradien neon. Style ini memunculkan nuansa teknologi, crypto, atau antarmuka AI.

## Karakteristik Utama
- **Latar Belakang**: Slate gelap (`bg-[#0f172a]`) dengan bola cahaya/gradien yang bersinar di latar belakang.
- **Efek Kaca**: Penggunaan `backdrop-blur` yang intens, latar belakang semi-transparan (`bg-white/10`, `bg-slate-900/50`).
- **Border**: Border putih tipis dan semi-transparan (`border-white/10`, `border-white/20`) untuk mempertegas tepi kaca.
- **Gradien**: Gradien pada teks (`bg-clip-text`) dan latar belakang (Biru/Ungu).
- **Tipografi**: Font `Inter` untuk tampilan teknis yang bersih.

## Komponen

### Tombol (Buttons)
Tombol berbentuk bulat penuh (`rounded-full`) dengan latar belakang gradien solid atau gaya outline "kaca".

**Tombol Utama**:
```css
rounded-full bg-blue-600 hover:bg-blue-500 
shadow-[0_0_20px_rgba(37,99,235,0.5)] 
transition-all
```

**Tombol Sekunder/Kaca**:
```css
rounded-full border border-white/20 hover:bg-white/5 transition-all
```

### Kartu
Kartu terlihat seperti lembaran kaca dengan efek blur di belakangnya.

**Class**:
```css
bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl
```

## Catatan Penggunaan
- Selalu pastikan latar belakang di belakang elemen memiliki objek (blob/gradien) agar efek `backdrop-blur` terlihat.
- Gunakan `text-white` atau `text-slate-300` untuk kontras tinggi terhadap tema gelap.
- Gunakan `rounded-xl` atau `rounded-2xl` untuk kontainer, `rounded-full` untuk tombol.
- Tambahkan efek "cahaya" (glow) menggunakan drop shadow berwarna (misalnya, `shadow-blue-500/50`).
