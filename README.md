# Portfolio Website — Nabila Khairunnisa Dian Pranata

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-React-F56565?logo=lucide&logoColor=white)](https://lucide.dev/)

Repositori portofolio web modern, interaktif, dan modular milik **Nabila Khairunnisa Dian Pranata** (Full-Stack Web Developer & UI/UX Designer). Dibangun menggunakan **React**, **Vite**, **Tailwind CSS**, dan **Lucide React** dengan performa tinggi, struktur komponen rapi, serta dukungan tema gelap (*Dark Mode*) dan terang (*Light Mode*).

---

## 🌟 Fitur Utama

- **Arsitektur Modular & Terstruktur**: Seluruh data proyek, pengalaman, pendidikan, keahlian, dan profil dipusatkan di `src/data/portfolioData.js` sehingga mudah diperbarui.
- **Dukungan Gambar & UI Mockup Cerdas**: Setiap proyek mendukung penambahan screenshot asli di `public/images/` melalui properti `image`. Jika gambar belum tersedia, antarmuka otomatis menampilkan preview mockup UI bawaan yang dinamis dan estetis.
- **Modal Detail Interaktif**: Menyediakan studi kasus mendalam untuk setiap proyek meliputi latar belakang masalah, dampak solusi, rincian fitur utama, tech stack, dan tautan repositori GitHub.
- **Filter Kategori Proyek**: Memudahkan navigasi proyek berdasarkan kategori (*Full-Stack Web*, *Sistem Enterprise*, *UI/UX & Dashboard*).
- **Dark Mode & Light Mode**: Transisi tema mulus dengan preferensi visual kontras tinggi.
- **Privasi & Akses Kontak Cepat**: Integrasi langsung dengan email klien (`mailto:`) dan fitur salin ke clipboard satu klik, serta tautan CV terpusat via Google Drive.

---

## 📂 Daftar Proyek Unggulan

| Proyek | Kategori | Tech Stack | Penghargaan / Keterangan |
| :--- | :--- | :--- | :--- |
| **Lumbung MultiPOS** | Full-Stack Web | Next.js, Supabase, PostgreSQL, Tailwind CSS, Mayar.io | Juara 2 Performa Terbaik & Top 8 Capstone (Future Innovators Bootcamp) |
| **Document Management Center & Inventaris ATK** | Sistem Enterprise | Laravel, PHP, MySQL, Tailwind CSS | Sistem internal HR & ATK paperless (PT Nuclear Coating Fabric) |
| **Sistem Psikotes Rekrutmen Otomatis** | Sistem Enterprise | Laravel, JavaScript, MySQL, Chart.js | Digitalisasi tes DISC & PAPI Kostick dengan skoring otomatis |
| **AGV Traffic Control System (ATCS)** | UI/UX & Dashboard | Figma, UI/UX Architecture, Real-Time Monitoring | Proyek PBL Industri PT Sumitomo Wiring System Batam |
| **ADOPLUS — Platform Adopsi & Donasi Hewan** | Full-Stack Web | Laravel, PHP, MySQL, Tailwind CSS | Tugas Akhir D3 Teknik Informatika Polines (IPK 3.95) |
| **Redesign Web Perekonomian Semarang** | UI/UX & Dashboard | Laravel, MySQL, Responsive Web | Modernisasi portal publik Bagian Perekonomian Kota Semarang |

---

## 🏗️ Struktur Direktori

```text
porto-v1/
├── public/
│   ├── images/              # Folder aset screenshot / banner proyek
│   │   └── .gitkeep
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.jsx      # Komponen ikon GitHub & LinkedIn
│   │   ├── ExperienceSection.jsx    # Linimasa pengalaman kerja & pendidikan
│   │   ├── Footer.jsx               # Kontak email, lokasi & copyright
│   │   ├── Hero.jsx                 # Header perkenalan, CTA & badge profil
│   │   ├── Navbar.jsx               # Navigasi sticky, toggle tema & menu mobile
│   │   ├── ProjectCard.jsx          # Komponen kartu proyek & mockup UI
│   │   ├── ProjectModal.jsx         # Modal detail studi kasus proyek
│   │   └── SkillsSection.jsx        # Keahlian teknis & sertifikasi BNSP
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth seluruh data konten
│   ├── App.jsx                      # Komponen utama aplikasi
│   ├── index.css                    # Setup Tailwind CSS (@import "tailwindcss")
│   └── main.jsx                     # Entry point React DOM
├── package.json
├── vite.config.js                   # Konfigurasi plugin Vite & Tailwind CSS
└── README.md
```

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) versi 18 ke atas (direkomendasikan Node.js v20+)
- npm atau pnpm / yarn

### 2. Kloning Repositori & Masuk ke Folder
```bash
git clone https://github.com/nabilaakh/porto-v1.git
cd porto-v1
```

### 3. Instal Dependensi
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka browser dan akses alamat lokal yang muncul di terminal (biasanya `http://localhost:5173/`).

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di dalam folder `dist/` dan siap dideploy ke platform seperti Vercel, Netlify, atau GitHub Pages.

---

## 🎨 Menambahkan Gambar Proyek

Untuk menampilkan screenshot asli pada kartu dan modal proyek:
1. Simpan file gambar Anda ke dalam folder `public/images/` (contoh: `public/images/lumbung-1.png`, `public/images/lumbung-2.png`).
2. Buka file `src/data/portfolioData.js`.
3. Tambahkan path gambar ke dalam array `images` di proyek terkait:
   ```javascript
   {
     id: 'lumbung-multipos',
     title: 'Lumbung MultiPOS',
     // ...
     images: [
       '/images/lumbung-1.png',
       '/images/lumbung-2.png',
     ],
   }
   ```
4. **Perilaku Tampilan**:
   - **Kartu Proyek (Halaman Utama)**: Selalu menampilkan gambar pertama (`images[0]`) sebagai thumbnail. Jika terdapat lebih dari 1 gambar, terdapat penanda jumlah foto tambahan.
   - **Modal Detail Proyek**: Jika memiliki lebih dari 1 gambar, otomatis mengaktifkan slider/carousel interaktif dengan tombol navigasi Prev/Next, dot indicator, dan strip thumbnail.
   - **Fallback Mockup**: Jika array `images` kosong (`[]`), sistem otomatis menampilkan ilustrasi mockup antarmuka bawaan.

---

## 📄 Pembaruan Tautan CV & Sertifikat

1. **Tautan CV**: Ganti URL pada properti `cvUrl` di `PROFILE_DATA`:
   ```javascript
   export const PROFILE_DATA = {
     // ...
     cvUrl: 'https://drive.google.com/file/d/GANTI_DENGAN_ID_FILE_CV_KAMU/view',
   };
   ```

2. **Tautan Sertifikat**: Tambahkan atau perbarui tautan Google Drive pada properti `credentialUrl` di `CERTIFICATIONS_DATA` (`src/data/portfolioData.js`):
   ```javascript
   {
     title: 'Sertifikasi Profesi Assistant Web Developer',
     // ...
     credentialUrl: 'https://drive.google.com/file/d/GANTI_ID_SERTIFIKAT/view',
   }
   ```
   *Jika `credentialUrl` dikosongkan (`""`), tombol "Lihat Sertifikat" tidak akan ditampilkan.*

---

## 📬 Kontak

- **Email**: [kdpnabila@gmail.com](mailto:kdpnabila@gmail.com)
- **LinkedIn**: [linkedin.com/in/nabilakdp](https://linkedin.com/in/nabilakdp)
- **GitHub**: [github.com/nabilaakh](https://github.com/nabilaakh)
- **Lokasi**: Semarang, Jawa Tengah, Indonesia (Tersedia untuk kerja *Remote* WIB)
