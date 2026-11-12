import { Layout, Database, Cpu, Award, CheckCircle2, Sparkles } from 'lucide-react';

export const PROFILE_DATA = {
  name: 'Nabila Khairunnisa Dian Pranata',
  initials: 'NK',
  brand: 'nabilakdp',
  brandSuffix: '.dev',
  role: 'Full-Stack Web Developer & UI/UX Designer',
  availability: 'Available for Web Developer • Remote / Semarang',
  summary:
    'Full-Stack Web Developer dan UI/UX Designer yang berfokus membangun aplikasi web yang fungsional, responsif, dan mudah digunakan. Berbekal latar belakang Teknik Informatika serta pengalaman merancang berbagai sistem mulai dari aplikasi POS hingga dashboard internal, saya terbiasa menerjemahkan kebutuhan produk menjadi solusi digital yang rapi dan siap pakai.',
  email: 'kdpnabila@gmail.com',
  cvUrl: 'https://drive.google.com/file/d/1YvPANCQGQK8WXOvA5H265Tjn7rXGmqqb/view',
  githubUrl: 'https://github.com/nabilaakh',
  linkedinUrl: 'https://linkedin.com/in/nabilakdp',
  location: 'Semarang, Jawa Tengah, Indonesia (Siap Kerja Remote WIB)',
  highlights: [
    {
      title: 'Juara 2 Performa Terbaik',
      subtitle: '& Top 8 Capstone Future Innovators Bootcamp',
      icon: Award,
      iconColor: 'text-amber-400'
    },
    {
      title: 'Tersertifikasi BNSP',
      subtitle: 'Assistant Web Developer & Mobile Programmer',
      icon: CheckCircle2,
      iconColor: 'text-indigo-500'
    },
    {
      title: 'AI-Assisted Engineering',
      subtitle: 'Next.js, Laravel, Supabase & MySQL Stack',
      icon: Sparkles,
      iconColor: 'text-emerald-400'
    }
  ]
};

export const PROJECTS_DATA = [
  {
    id: 'lumbung-multipos',
    title: 'Lumbung MultiPOS',
    subtitle: 'Aplikasi Point of Sale (POS) Multi-Cabang Berbasis Cloud',
    category: 'Full-Stack Web',
    badge: 'Juara 2 Performa Terbaik & Top 8 Capstone',
    organization: 'Future Innovators Bootcamp (Plan Indonesia × Ioda Academy)',
    period: 'Sep 2026 – Okt 2026',
    featured: true,
    images: [
      "/images/lumbung-1.png",
      "/images/lumbung-2.png",
      "/images/lumbung-3.png",
      "/images/lumbung-4.png",
      "/images/lumbung-5.png"
    ], // Contoh: ['/images/lumbung-1.png', '/images/lumbung-2.png'] (jika kosong, menampilkan mockup bawaan)
    description:
      'Aplikasi Point of Sale (POS) multi-cabang modern yang mengintegrasikan autentikasi berbasis peran (RBAC), manajemen shift kasir, penyesuaian stok multi-mode, pembayaran QRIS otomatis, serta ekspor laporan operasional CSV.',
    problemSolved:
      'Membantu pelaku usaha multi-cabang memantau transaksi kasir, selisih shift, dan pergerakan stok antar-cabang secara terpusat dan real-time tanpa rekap manual.',
    features: [
      'Role-Based Access Control (Owner, Admin Cabang, Kasir)',
      'Manajemen Shift Kasir (Buka/Tutup Kas & Rekonsiliasi Tunai)',
      'Penyesuaian Stok Multi-Mode & Pelacakan Inventori Real-Time',
      'Integrasi Payment Gateway QRIS Dinamis (Mayar.io)',
      'Otomasi Ekspor Laporan Penjualan & Shift ke Format CSV'
    ],
    techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Mayar.io API'],
    githubUrl: 'https://github.com/nabilaakh/lumbung-multi-pos',
    liveUrl: 'multi-pos.kdpnabila.site',
    mockupTheme: 'indigo'
  },
  {
    id: 'dmc-hr-nuclear',
    title: 'Document Management Center (DMC)',
    subtitle: 'Sentralisasi Arsip Digital & Distribusi Dokumen HR',
    category: 'Sistem Enterprise',
    badge: 'Magang IT Developer / Programmer',
    organization: 'PT Nuclear Coating Fabric — Semarang',
    period: 'Des 2025 – Jun 2026',
    featured: true,
    images: [
      "/images/dmc-1.png",
      "/images/dmc-2.png",
      "/images/dmc-3.png",
      "/images/dmc-4.png",
      "/images/dmc-5.png",
      "/images/dmc-6.png",
      "/images/dmc-7.png"
    ],
    description:
      'Platform arsip digital internal berbasis web untuk sentralisasi dokumen HR dan distribusi berkas lintas 20+ departemen perusahaan secara terstruktur dan aman.',
    problemSolved:
      'Memangkas waktu pencarian berkas fisik lintas departemen serta mengurangi ketergantungan pada distribusi dokumen cetak di lingkungan HR.',
    features: [
      'Sentralisasi & Kategorisasi Arsip Digital HR untuk 20+ Departemen',
      'Akses Pencarian Cepat & Unduh Mandiri Dokumen Internal',
      'Manajemen Hak Akses Berkas Berdasarkan Divisi/Departemen',
      'Riwayat Pembaruan & Pengelolaan Dokumen Terpusat'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/nabilaakh/ncf-dmc',
    liveUrl: 'https://dmc.ncf.co.id',
    mockupTheme: 'emerald'
  },
  {
    id: 'inventaris-atk-nuclear',
    title: 'Sistem Inventaris & Pengajuan ATK',
    subtitle: 'Portal Permintaan User (Vue.js) & Dashboard Admin (Filament)',
    category: 'Sistem Enterprise',
    badge: 'Magang IT Developer / Programmer',
    organization: 'PT Nuclear Coating Fabric — Semarang',
    period: 'Des 2025 – Jun 2026',
    featured: true,
    images: [
      "/images/atk-1.png",
      "/images/atk-2.png",
      "/images/atk-3.png",
      "/images/atk-4.png",
      "/images/atk-5.png",
      "/images/atk-6.png",
      "/images/atk-7.png",
    ],
    description:
      'Aplikasi web pencatatan inventaris Alat Tulis Kantor (ATK) dengan portal pengajuan mandiri berbasis Vue.js untuk karyawan lintas divisi serta dashboard admin terpusat menggunakan Filament untuk pengelolaan stok dan persetujuan berjenjang.',
    problemSolved:
      'Mengeliminasi penggunaan formulir kertas untuk permintaan ATK antar-divisi serta mencegah selisih pencatatan maupun kekosongan stok mendadak di gudang.',
    features: [
      'Dashboard Admin Terpusat Berbasis Filament untuk Monitoring Gudang & Approval',
      'Portal Pengajuan ATK Mandiri yang Responsif Menggunakan Vue.js & Laravel',
      'Notifikasi Otomatis Batas Minimum Stok (Reorder Level Logic)',
      'Pembaruan Saldo Stok Real-Time di MySQL Pasca-Persetujuan Admin'
    ],
    techStack: ['Laravel', 'Filament', 'Vue.js', 'MySQL'],
    githubUrl: 'https://github.com/nabilaakh/ncf-simatik',
    liveUrl: '#',
    mockupTheme: 'blue'
  },
  {
    id: 'psikotes-disc-papi',
    title: 'Sistem Psikotes Rekrutmen Otomatis (DISC & PAPI Kostick)',
    subtitle: 'Digitalisasi Asesmen Kandidat & Visualisasi Grafik Kepribadian',
    category: 'Sistem Enterprise',
    badge: 'Magang IT Developer / Programmer',
    organization: 'PT Nuclear Coating Fabric — Semarang',
    period: 'Des 2025 – Jun 2026',
    featured: false,
    images: [
      "/images/sirect-1.png",
      "/images/sirect-2.png",
      "/images/sirect-3.png",
      "/images/sirect-4.png",
      "/images/sirect-5.png",
      "/images/sirect-6.png",
      "/images/sirect-7.png"
    ],
    description:
      'Mendigitalisasi alur psikotes rekrutmen manual (sebelumnya menggunakan Google Form) ke dalam platform web terintegrasi dengan skoring otomatis dan visualisasi grafik profil kandidat.',
    problemSolved:
      'Mengeliminasi proses hitung skor psikotes secara manual oleh tim HR sehingga hasil evaluasi kandidat langsung tersedia begitu tes selesai.',
    features: [
      'Pengerjaan Tes DISC & PAPI Kostick Berbasis Web dengan Timer',
      'Algoritma Skoring Otomatis Sesuai Norma Psikometri',
      'Visualisasi Grafik Profil Kepribadian Kandidat untuk Tim HR',
      'Rekapitulasi & Arsip Hasil Asesmen Pelamar Terintegrasi'
    ],
    techStack: ['Laravel', 'DaisyUI', 'MySQL', 'Chart Visualization'],
    githubUrl: 'https://github.com/nabilaakh/ncf-psikotest-hr',
    liveUrl: 'https://sirect.ncf.co.id/',
    mockupTheme: 'violet'
  },
  {
    id: 'atcs-sumitomo',
    title: 'AGV Traffic Control System (ATCS)',
    subtitle: 'Dashboard Pemantauan Armada Logistik Pabrik Real-Time',
    category: 'UI/UX & Dashboard',
    badge: 'Proyek PBL Industri (PMM Batch 4)',
    organization: 'PT Sumitomo Wiring System Batam × Politeknik Negeri Batam',
    period: 'Feb 2024 – Jul 2024',
    featured: true,
    images: [
      "/images/agv-1.png",
      "/images/agv-2.png",
      "/images/agv-3.png",
      "/images/agv-4.png",
      "/images/agv-5.png"
    ],
    description:
      'Merancang arsitektur antarmuka dan modul pelaporan web untuk memonitor pergerakan, rute, serta status operasional armada Automated Guided Vehicle (AGV) di lini produksi pabrik secara real-time.',
    problemSolved:
      'Memberikan visibilitas penuh kepada operator pabrik dalam memantau lalu lintas robot logistik (AGV) dan mendeteksi hambatan jalur produksi lebih cepat.',
    features: [
      'Peta Monitoring Status & Posisi Armada AGV Real-Time',
      'Modul Pelaporan Log Operasional & Efisiensi Perjalanan',
      'Indikator Peringatan Dini Kendala Jalur / Baterai Armada',
      'Arsitektur UI/UX Dashboard Berbasis Kebutuhan Industri'
    ],
    techStack: ['UI/UX Architecture', 'Web Dashboard', 'Real-Time Monitoring', 'Figma'],
    githubUrl: '#',
    liveUrl: '#',
    mockupTheme: 'amber'
  },
  {
    id: 'adoplus-platform',
    title: 'ADOPLUS — Platform Adopsi & Donasi Hewan',
    subtitle: 'Sistem Informasi Terpadu Tempat Penampungan Hewan (Animal Shelter)',
    category: 'Full-Stack Web',
    badge: 'Tugas Akhir D3 Teknik Informatika',
    organization: 'Politeknik Negeri Semarang',
    period: '2025',
    featured: false,
    images: [
      "/images/adoplus-1.png",
      "/images/adoplus-2.png",
      "/images/adoplus-3.png",
      "/images/adoplus-4.png",
      "/images/adoplus-5.png",
      "/images/adoplus-6.png",
      "/images/adoplus-7.png",
      "/images/adoplus-8.png",
      "/images/adoplus-9.png",
      "/images/adoplus-10.png"
    ],
    description:
      'Platform web full-stack untuk memfasilitasi proses pengajuan adopsi hewan, katalog profil hewan terawat, serta pengelolaan transparansi donasi operasional bagi tempat penampungan hewan.',
    problemSolved:
      'Mempermudah calon pengadopsi menemukan informasi hewan yang siap adopsi secara terstruktur sekaligus meningkatkan transparansi penyaluran donasi.',
    features: [
      'Katalog Hewan Siap Adopsi dengan Filter Karakteristik & Kesehatan',
      'Formulir Pengajuan Adopsi & Pelacakan Status Verifikasi',
      'Manajemen Kampanye Donasi & Laporan Transparansi Dana',
      'Dashboard Admin Shelter untuk Manajemen Data Hewan & Adopter'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Alzhifa7/Project-TA-2025-Adoplus',
    liveUrl: 'adoplus.ta2025.web.id',
    mockupTheme: 'rose'
  },
  {
    id: 'diskominfo-semarang',
    title: 'Redesign Portal Web Bagian Perekonomian Kota Semarang',
    subtitle: 'Modernisasi Antarmuka & Struktur Navigasi Informasi Publik',
    category: 'UI/UX & Dashboard',
    badge: 'Magang Web Developer & IT Support',
    organization: 'Diskominfo Kota Semarang',
    period: 'Agu 2024 – Des 2024',
    featured: false,
    images: [
      "/images/bpks-0.png",
      "/images/bpks-1.png",
      "/images/bpks-2.png",
      "/images/bpks-3.png",
      "/images/bpks-4.png",
      "/images/bpks-5.png",
      "/images/bpks-6.png"
    ],
    description:
      'Merancang ulang antarmuka web Bagian Perekonomian Pemerintah Kota Semarang berbasis Laravel & MySQL guna menghadirkan struktur tata letak modern dan alur navigasi informasi publik yang lebih intuitif.',
    problemSolved:
      'Memperbaiki hierarki informasi portal instansi agar masyarakat dan pelaku usaha lebih mudah mengakses regulasi, data ekonomi, dan layanan publik.',
    features: [
      'Restrukturisasi Arsitektur Informasi & Navigasi Menu Publik',
      'Antarmuka Responsif untuk Akses Desktop maupun Perangkat Mobile',
      'Pengelolaan Repositori Dokumen & Publikasi Data Perekonomian',
      'Validasi & Kurasi Data Administrasi Internal Instansi'
    ],
    techStack: ['Laravel', 'MySQL', 'UI/UX Design', 'Responsive Web'],
    githubUrl: '#',
    liveUrl: '#',
    mockupTheme: 'cyan'
  }
];

export const EXPERIENCE_DATA = [
  {
    type: 'work',
    role: 'IT Developer / Programmer (Magang)',
    company: 'PT Nuclear Coating Fabric',
    location: 'Semarang, Jawa Tengah',
    period: 'Desember 2025 – Juni 2026',
    highlights: [
      'Mengembangkan platform Document Management Center untuk sentralisasi arsip digital HR bagi 20+ departemen.',
      'Membangun sistem inventaris ATK berbasis web 100% paperless dengan logika reorder level dan stok real-time.',
      'Mendigitalisasi psikotes rekrutmen manual ke web terintegrasi dengan skoring otomatis & grafik DISC/PAPI Kostick.'
    ]
  },
  {
    type: 'work',
    role: 'Web Developer & IT Support (Magang)',
    company: 'Diskominfo Kota Semarang',
    location: 'Semarang, Jawa Tengah',
    period: 'Agustus 2024 – Desember 2024',
    highlights: [
      'Merancang ulang antarmuka web Bagian Perekonomian Semarang berbasis Laravel & MySQL agar navigasi lebih intuitif.',
      'Mengelola rekapitulasi data operasional dan repositori berkas internal secara terstruktur dan valid.'
    ]
  },
  {
    type: 'org',
    role: 'Staf Divisi Workshop & Departemen Multimedia',
    company: 'UKM Polytechnic Computer Club (PCC) — Polines',
    location: 'Semarang, Jawa Tengah',
    period: 'Mei 2023 – Mei 2025',
    highlights: [
      'PIC Lomba bidang UI/UX tingkat nasional pada TECHCOMFEST 2025, memimpin alur kompetisi hingga koordinasi penjurian.',
      'Menyusun modul & menjadi pemateri workshop UI/UX Figma untuk 20+ peserta.',
      'Merancang antarmuka UI/UX website profil UKM PCC 2023 serta kebutuhan aset visual digital organisasi.'
    ]
  }
];

export const EDUCATION_DATA = [
  {
    institution: 'Politeknik Negeri Semarang',
    degree: 'D3 Teknik Informatika',
    gpa: 'IPK: 3.95 / 4.00 (Dengan Pujian / Cum Laude)',
    period: 'Agustus 2022 – September 2025',
    details:
      'Tugas Akhir: Membangun platform web ADOPLUS (adopsi & donasi hewan) dengan Laravel, MySQL, dan Tailwind CSS.'
  },
  {
    institution: 'Politeknik Negeri Batam',
    degree: 'Pertukaran Mahasiswa Merdeka (PMM) Batch 4 — D3 Teknik Informatika',
    gpa: 'IPK: 3.91 / 4.00',
    period: 'Februari 2024 – Juli 2024',
    details:
      'Proyek PBL Industri: Arsitektur antarmuka & modul pelaporan web AGV Traffic Control System (ATCS) PT Sumitomo Wiring System Batam.'
  }
];

export const SKILLS_DATA = [
  {
    category: 'Frontend Development',
    icon: Layout,
    items: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    category: 'Backend & Database',
    icon: Database,
    items: ['PHP', 'Laravel', 'Filament', 'RESTful API', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase']
  },
  {
    category: 'Design, Tools & AI Workflow',
    icon: Cpu,
    items: [
      'Figma (UI/UX & Prototyping)',
      'Git & GitHub',
      'AI-Assisted Coding (Generative AI)',
      'Canva',
      'CorelDraw',
      'Google Workspace'
    ]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Juara 2 Performa Terbaik & Finalis Top 8 Capstone',
    issuer: 'Future Innovators Bootcamp (Plan Indonesia × Ioda Academy)',
    year: '2026',
    highlight: true,
    credentialUrl: ''
  },
  {
    title: 'Juara 1 Desain Produk Inovasi (UI/UX Mobile App)',
    issuer: 'Elektro Expo Nasional — Politeknik Negeri Semarang',
    year: '2024',
    highlight: true,
    credentialUrl: 'https://drive.google.com/file/d/1c5ohtGIDx-j6wCoNGDZbXbNTTA6A1mmj/view'
  },
  {
    title: 'Sertifikasi Profesi Assistant Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) — LSP BBPVP Semarang',
    year: 'Sertifikasi Kompetensi',
    highlight: true,
    credentialUrl: 'https://drive.google.com/file/d/1SpDEK2MhoI4K85tO_7p_VZ2SkGz1rvv6/view'
  },
  {
    title: 'Sertifikasi Profesi Junior Mobile Programmer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) — LSP Polines',
    year: 'Sertifikasi Kompetensi',
    highlight: false,
    credentialUrl: 'https://drive.google.com/file/d/1iD2ODvckRBBktfexhQI8KzmVdkMZUwQs/view'
  },
  {
    title: 'Web Programming dengan Pemanfaatan AI (112 Jam)',
    issuer: 'Plan Indonesia & BBPVP Semarang',
    year: '2026',
    highlight: false,
    credentialUrl: 'https://drive.google.com/file/d/1Xt_DgrzpN-9DggqeYH42gJk-JknK0xWB/view'
  },
  {
    title: 'Big Data Analyst Associate & MTCNA MikroTik',
    issuer: 'Solusi247 & MikroTik Certified Network Associate',
    year: 'Sertifikasi Teknis',
    highlight: false,
    credentialUrl: 'https://drive.google.com/file/d/1_FoKCgoUinYGUjUD8nixBmgmE1bpoXPF/view'
  },
  {
    title: 'Intermediate UI/UX Design & UX Fundamentals',
    issuer: 'Talenthub Kemnaker RI & IBM SkillsBuild',
    year: 'UI/UX',
    highlight: false,
    credentialUrl: 'https://drive.google.com/file/d/1IGMEtaIFs6AN3QhEHffCe9flKRG7K3zz/view'
  },
  {
    title: 'Test of English for International Communication (TOEIC)',
    issuer: 'Score: 485',
    year: 'Bahasa Inggris',
    highlight: false,
    credentialUrl: 'https://drive.google.com/file/d/13yZBWkkfdKIYMaoKFoQOEv0ajpXLnwj0/view'
  }
];

