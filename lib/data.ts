// =============================================================
// SEMUA KONTEN DI SINI. Ganti data dummy di bawah dengan data
// asli Anda — nama, riwayat pendidikan, pengalaman, dsb.
// =============================================================

export const profile = {
  name: "Amelia Putri Wardhani",
  degree: "S.Ak.",
  fullDegree: "Sarjana Akuntansi",
  tagline: "Accounting Graduate — Financial Reporting · Taxation · Financial Analysis",
  summary:
    "Lulusan Akuntansi dengan pemahaman kuat pada penyusunan laporan keuangan, perpajakan, dan analisis data keuangan. Terbiasa bekerja teliti dengan tenggat waktu, dan nyaman menerjemahkan angka menjadi keputusan yang jelas.",
  location: "Jakarta Selatan, Indonesia",
  email: "amelia.wardhani@email.com",
  phone: "+62 812-3456-7890",
  linkedin: "linkedin.com/in/ameliawardhani",
  github: "github.com/ameliawardhani",
  cvFile: "/cv-amelia-wardhani.pdf",
  availability: "Terbuka untuk posisi entry-level di bidang akuntansi & keuangan",
};

export const about = {
  paragraphs: [
    "Saya seorang lulusan Sarjana Akuntansi (S.Ak.) dari Universitas Indonesia dengan minat khusus pada financial reporting, perpajakan, dan analisis laporan keuangan. Selama masa studi, saya membangun kebiasaan kerja yang teliti — memeriksa dua kali sebelum menyimpulkan satu kali.",
    "Saya memahami siklus akuntansi dari pencatatan transaksi hingga penyusunan laporan keuangan sesuai SAK, termasuk rekonsiliasi, penyusunan neraca saldo, dan pelaporan pajak dasar. Saya juga terbiasa mengolah data keuangan dalam jumlah besar menggunakan Excel dan software akuntansi seperti Accurate dan MYOB.",
    "Tujuan karier saya adalah berkontribusi di tim finance & accounting yang mengutamakan akurasi dan integritas data, sambil terus memperdalam keahlian di bidang audit dan analisis keuangan melalui sertifikasi profesional seperti Brevet Pajak dan CPSAK.",
  ],
  focusAreas: [
    "Penyusunan Laporan Keuangan",
    "Akuntansi Dasar & Menengah",
    "Analisis Laporan Keuangan",
    "Perpajakan (PPh & PPN)",
    "Dasar-Dasar Audit",
    "Pengelolaan Data Keuangan",
    "Microsoft Excel & Spreadsheet",
    "Software Akuntansi",
  ],
};

export type Skill = { name: string; level: number; note: string };

export const skills: Skill[] = [
  { name: "Financial Accounting", level: 88, note: "Siklus akuntansi penuh, jurnal hingga laporan" },
  { name: "Financial Reporting", level: 85, note: "Laporan laba rugi, neraca, arus kas" },
  { name: "Taxation", level: 78, note: "PPh 21/23, PPN, e-Filing dasar" },
  { name: "Auditing", level: 70, note: "Audit sampling & kertas kerja dasar" },
  { name: "Financial Analysis", level: 82, note: "Analisis rasio & tren keuangan" },
  { name: "Bookkeeping", level: 90, note: "Pencatatan transaksi harian yang rapi" },
  { name: "Microsoft Excel", level: 92, note: "Pivot table, VLOOKUP, formula keuangan" },
  { name: "Microsoft Office", level: 88, note: "Word, PowerPoint untuk pelaporan" },
  { name: "Data Analysis", level: 75, note: "Pengolahan & visualisasi data keuangan" },
  { name: "Accounting Software", level: 80, note: "Accurate, MYOB, dasar SAP" },
];

export type EducationItem = {
  id: string;
  institution: string;
  program: string;
  degreeAwarded: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    id: "EDU-01",
    institution: "Universitas Indonesia",
    program: "S1 Akuntansi, Fakultas Ekonomi dan Bisnis",
    degreeAwarded: "Sarjana Akuntansi (S.Ak.)",
    startYear: "2020",
    endYear: "2024",
    gpa: "3.72 / 4.00",
    note: "Skripsi: Analisis Pengaruh Rasio Likuiditas terhadap Kinerja Keuangan Perusahaan Manufaktur",
  },
  {
    id: "EDU-02",
    institution: "SMA Negeri 3 Jakarta",
    program: "Jurusan IPS",
    degreeAwarded: "Ijazah SMA",
    startYear: "2017",
    endYear: "2020",
    gpa: "88.5 / 100",
  },
];

export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  period: string;
  type: "Magang" | "Organisasi" | "Proyek Akademik";
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "EXP-01",
    org: "KAP Sudrajat & Rekan",
    role: "Intern Auditor",
    period: "Jun 2023 — Ags 2023",
    type: "Magang",
    points: [
      "Membantu proses audit laporan keuangan untuk 4 klien di sektor ritel dan manufaktur",
      "Menyusun kertas kerja audit (working paper) dan melakukan vouching dokumen transaksi",
      "Melakukan rekonsiliasi bank dan konfirmasi piutang untuk 12 akun klien",
    ],
  },
  {
    id: "EXP-02",
    org: "PT Nusantara Retail Indonesia",
    role: "Finance & Accounting Intern",
    period: "Jan 2023 — Mar 2023",
    type: "Magang",
    points: [
      "Mencatat transaksi harian ke dalam sistem Accurate untuk 3 cabang toko",
      "Membantu penyusunan laporan arus kas bulanan dan rekap pengeluaran operasional",
      "Menyusun rekonsiliasi stok dengan tim gudang, mengurangi selisih pencatatan sebesar 15%",
    ],
  },
  {
    id: "EXP-03",
    org: "Himpunan Mahasiswa Akuntansi FEB UI",
    role: "Kepala Divisi Keuangan",
    period: "2022 — 2023",
    type: "Organisasi",
    points: [
      "Mengelola anggaran organisasi senilai Rp85.000.000 untuk 9 program kerja",
      "Menyusun laporan pertanggungjawaban keuangan yang diaudit oleh dewan pengawas",
      "Merancang sistem pencatatan kas berbasis Google Sheets untuk transparansi antar divisi",
    ],
  },
  {
    id: "EXP-04",
    org: "Program Studi Akuntansi UI",
    role: "Asisten Praktikum Akuntansi Keuangan Menengah",
    period: "2022",
    type: "Proyek Akademik",
    points: [
      "Membantu 40+ mahasiswa memahami penyusunan laporan keuangan sesuai PSAK",
      "Mengoreksi tugas praktikum dan memberikan umpan balik studi kasus akuntansi",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "PRJ-01",
    title: "Analisis Rasio Keuangan Emiten Sektor Konsumer",
    description:
      "Menganalisis likuiditas, solvabilitas, dan profitabilitas 5 emiten sektor barang konsumer selama periode 2019—2023 menggunakan laporan tahunan publik.",
    tools: ["Microsoft Excel", "Laporan Tahunan", "Analisis Rasio"],
    outcome: "Menemukan korelasi antara current ratio dan pertumbuhan laba bersih pasca-pandemi",
  },
  {
    id: "PRJ-02",
    title: "Penyusunan Laporan Keuangan UMKM Simulasi",
    description:
      "Menyusun laporan keuangan lengkap (laba rugi, neraca, arus kas) untuk studi kasus UMKM fiktif berdasarkan 200+ transaksi simulasi selama satu tahun buku.",
    tools: ["Microsoft Excel", "Accurate"],
    outcome: "Laporan keuangan balanced dengan selisih neraca nol dan siap diaudit",
  },
  {
    id: "PRJ-03",
    title: "Simulasi Perhitungan & Pelaporan PPh 21",
    description:
      "Menghitung PPh Pasal 21 karyawan tetap untuk 30 skenario gaji berbeda, termasuk PTKP dan tunjangan, serta menyusun bukti potong.",
    tools: ["Microsoft Excel", "Peraturan Perpajakan"],
    outcome: "Modul perhitungan otomatis yang mengurangi waktu kalkulasi manual hingga 70%",
  },
  {
    id: "PRJ-04",
    title: "Dashboard Keuangan Interaktif",
    description:
      "Membangun dashboard arus kas dan profitabilitas bulanan menggunakan pivot table dan chart dinamis untuk memantau kesehatan keuangan bisnis simulasi.",
    tools: ["Microsoft Excel", "Power BI"],
    outcome: "Dashboard satu halaman yang menyajikan 6 indikator keuangan utama secara real-time",
  },
  {
    id: "PRJ-05",
    title: "Proyek Audit Akademik: Siklus Pendapatan",
    description:
      "Melakukan audit akademik terhadap siklus pendapatan perusahaan simulasi, mengidentifikasi kelemahan pengendalian internal dan menyusun rekomendasi.",
    tools: ["Kertas Kerja Audit", "Internal Control Checklist"],
    outcome: "Mengidentifikasi 4 celah pengendalian internal beserta rekomendasi perbaikannya",
  },
  {
    id: "PRJ-06",
    title: "Sistem Pencatatan Keuangan Kas Kecil",
    description:
      "Merancang sistem pencatatan kas kecil sederhana berbasis spreadsheet untuk organisasi kampus dengan validasi otomatis agar saldo selalu balanced.",
    tools: ["Google Sheets", "Spreadsheet Formula"],
    outcome: "Diadopsi oleh 3 divisi organisasi untuk pencatatan kas harian",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
};

export const certifications: Certification[] = [
  { id: "CERT-01", name: "Brevet Pajak A & B", issuer: "Ikatan Konsultan Pajak Indonesia", year: "2024", link: "#" },
  { id: "CERT-02", name: "Certified Accounting Professional (CAP)", issuer: "Institut Akuntan Publik Indonesia", year: "2024", link: "#" },
  { id: "CERT-03", name: "Financial Modeling & Valuation", issuer: "Corporate Finance Institute", year: "2023", link: "#" },
  { id: "CERT-04", name: "Excel for Financial Analysis", issuer: "Coursera — University of Pennsylvania", year: "2023", link: "#" },
  { id: "CERT-05", name: "Dasar-Dasar SAP FI/CO", issuer: "SAP Learning Hub", year: "2023", link: "#" },
];

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Akademik" | "Kompetisi" | "Beasiswa" | "Organisasi";
};

export const achievements: Achievement[] = [
  { id: "ACH-01", title: "Cum Laude, IPK 3.72", issuer: "Universitas Indonesia", year: "2024", category: "Akademik" },
  { id: "ACH-02", title: "Juara 2, Lomba Studi Kasus Akuntansi Nasional", issuer: "Ikatan Mahasiswa Akuntansi Indonesia", year: "2023", category: "Kompetisi" },
  { id: "ACH-03", title: "Penerima Beasiswa Unggulan", issuer: "Kementerian Pendidikan RI", year: "2021—2024", category: "Beasiswa" },
  { id: "ACH-04", title: "Finalis Olimpiade Akuntansi Tingkat Universitas", issuer: "Universitas Indonesia", year: "2022", category: "Kompetisi" },
  { id: "ACH-05", title: "Kepala Divisi Keuangan Terbaik", issuer: "Himpunan Mahasiswa Akuntansi FEB UI", year: "2023", category: "Organisasi" },
];

export type Tool = { name: string; category: string };

export const tools: Tool[] = [
  { name: "Microsoft Excel", category: "Spreadsheet" },
  { name: "Microsoft Word", category: "Dokumen" },
  { name: "Microsoft PowerPoint", category: "Presentasi" },
  { name: "Accurate", category: "Software Akuntansi" },
  { name: "MYOB", category: "Software Akuntansi" },
  { name: "SAP", category: "Enterprise" },
  { name: "Google Sheets", category: "Spreadsheet" },
  { name: "Power BI", category: "Data Analysis" },
];

export const socials = [
  { label: "LinkedIn", href: `https://${profile.linkedin}` },
  { label: "GitHub", href: `https://${profile.github}` },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const nav = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pendidikan", href: "#education" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Proyek", href: "#projects" },
  { label: "Sertifikasi", href: "#certifications" },
  { label: "Pencapaian", href: "#achievements" },
  { label: "Tools", href: "#tools" },
  { label: "Kontak", href: "#contact" },
];
