// =============================================================
// DATA PORTOFOLIO TRIANI NURAFNI, S.Ak.
// Diperbarui berdasarkan dokumen kurikulum dan portofolio resmi.
// =============================================================

export const profile = {
  name: "Triani Nurafni",
  degree: "S.Ak.",
  fullDegree: "Sarjana Akuntansi",
  tagline: "Teliti pada Angka, Terstruktur dalam Setiap Proses",
  summary:
    "Lulusan Sarjana Akuntansi (S.Ak.) Universitas Muhammadiyah Bandung dengan IPK 3,76/4,00 dan minat pada financial accounting, financial reporting, perpajakan, serta audit. Terbiasa bekerja secara teliti dan sistematis dalam mengolah data, memverifikasi informasi keuangan, dan memastikan setiap proses berjalan sesuai prosedur.",
  location: "Tasikmalaya, Jawa Barat, Indonesia",
  email: "trianinurafni03@gmail.com",
  phone: "+62 821-3090-2040",
  linkedin: "linkedin.com/in/trianinurafni",
  cvFile: "/CV.pdf",
  availability: "Terbuka untuk posisi Accounting, Finance, Tax, atau Audit (Fresh Graduate)",
};

export const about = {
  paragraphs: [
    "Lulusan Sarjana Akuntansi (S.Ak.) Universitas Muhammadiyah Bandung dengan IPK 3,76/4,00 dan minat pada financial accounting, financial reporting, perpajakan, serta audit. Saya terbiasa bekerja secara teliti dan sistematis dalam mengolah data, memverifikasi informasi keuangan, dan memastikan setiap proses berjalan sesuai prosedur.",
    "Saya memahami siklus akuntansi secara menyeluruh, mulai dari pencatatan transaksi hingga penyusunan laporan keuangan. Di bidang perpajakan, pemahaman saya diperkuat oleh sertifikasi Brevet Pajak A & B dan Certified Tax Technician (CTT), serta pengalaman langsung sebagai Relawan Pajak yang mendampingi wajib pajak dalam pelaporan SPT Tahunan PPh Orang Pribadi dan meraih Sertifikat Silver.",
    "Dalam praktik, saya telah mengerjakan proyek audit menggunakan ATLAS, mengelola pencatatan transaksi terkomputerisasi dengan Accurate, dan menganalisis data penelitian kuantitatif menggunakan SPSS.",
    "Sebagai fresh graduate, saya mencari kesempatan berkarier di bidang Accounting, Finance, Tax, atau Audit pada lingkungan kerja yang menjunjung ketelitian, integritas, tanggung jawab, dan akurasi informasi.",
  ],
  focusAreas: [
    "Siklus Akuntansi & Laporan Keuangan",
    "Perpajakan (Brevet A & B, CTT)",
    "Audit & Kertas Kerja (ATLAS)",
    "Software Akuntansi Accurate",
    "Analisis Data Kuantitatif (SPSS)",
    "Microsoft Excel & Spreadsheet",
    "Pelaporan SPT Tahunan PPh OP",
    "Administrasi & Dokumentasi Kas",
  ],
};

export type Skill = { name: string; level: number; note: string };

export const skills: Skill[] = [
  {
    name: "Akuntansi & Pelaporan Keuangan",
    level: 86,
    note: "Siklus akuntansi, jurnal, buku besar, penyusunan laporan keuangan, serta administrasi keuangan",
  },
  {
    name: "Perpajakan",
    level: 80,
    note: "PPh Orang Pribadi, pelaporan SPT Tahunan, administrasi perpajakan (Brevet A & B, CTT)",
  },
  {
    name: "Audit & Dokumentasi",
    level: 75,
    note: "Prosedur audit, penyusunan kertas kerja, identifikasi temuan, dan rekomendasi (ATLAS)",
  },
  {
    name: "Accurate Accounting Software",
    level: 72,
    note: "Pencatatan transaksi dan penyusunan laporan keuangan terkomputerisasi",
  },
  {
    name: "Microsoft Excel",
    level: 80,
    note: "Pengolahan data keuangan, formula spreadsheet, dan rekapitulasi transaksi",
  },
  {
    name: "Analisis Data SPSS",
    level: 75,
    note: "Uji validitas, uji reliabilitas, dan analisis data statistik kuantitatif",
  },
  {
    name: "Software ATLAS",
    level: 72,
    note: "Penyusunan kertas kerja audit dan dokumentasi prosedur pemeriksaan",
  },
  {
    name: "Administrasi & Tata Kelola Keuangan",
    level: 88,
    note: "Pengarsipan bukti transaksi, penyusunan LPJ, dan manajemen kas",
  },
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
    institution: "Universitas Muhammadiyah Bandung",
    program: "S1 Akuntansi, Fakultas Ekonomi dan Bisnis",
    degreeAwarded: "Sarjana Akuntansi (S.Ak.)",
    startYear: "2022",
    endYear: "2026",
    gpa: "3,76 / 4,00",
    note: "Skripsi: Transparansi & Akuntabilitas Laporan Keuangan Koperasi",
  },
  {
    id: "EDU-02",
    institution: "SMA Muhammadiyah Singaparna",
    program: "Jurusan IPS",
    degreeAwarded: "Ijazah SMA",
    startYear: "2019",
    endYear: "2022",
    gpa: "90,35 / 100",
    note: "Rata-rata nilai ijazah: 90,35 / 100",
  },
];

export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  period: string;
  type: "Organisasi" | "Volunteer" | "Kepanitiaan" | "Magang" | "Proyek Akademik";
  points: string[];
  certificateLink?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "EXP-01",
    org: "Tax Center Universitas Muhammadiyah Bandung",
    role: "Bendahara",
    period: "2024 — 2025",
    type: "Organisasi",
    points: [
      "Mengelola pencatatan pemasukan dan pengeluaran seluruh kegiatan Tax Center.",
      "Menyusun Laporan Pertanggungjawaban (LPJ) atas penggunaan dana kegiatan.",
      "Mengarsipkan bukti transaksi dan dokumentasi keuangan secara tertib dan sistematis.",
    ],
  },
  {
    id: "EXP-02",
    org: "KPP Pratama Kabupaten Sumedang",
    role: "Relawan Pajak",
    period: "2025",
    type: "Volunteer",
    points: [
      "Mendampingi wajib pajak dalam pelaporan SPT Tahunan PPh Orang Pribadi sesuai prosedur yang berlaku.",
      "Menjelaskan tahapan dan informasi yang dibutuhkan agar proses pelaporan berjalan lancar.",
      "Melayani wajib pajak secara langsung sehingga melatih komunikasi, ketelitian, dan orientasi pelayanan.",
      "Pencapaian: Meraih Sertifikat Silver Relawan Pajak 2025.",
    ],
    certificateLink: "/certificate/relawan_pajak.pdf",
  },
  {
    id: "EXP-03",
    org: "Program KIP Kuliah",
    role: "Relawan KIP Kuliah",
    period: "2024",
    type: "Volunteer",
    points: [
      "Memberikan informasi dan pendampingan kepada calon penerima terkait proses pendaftaran KIP Kuliah.",
      "Membantu peserta memahami persyaratan dan tahapan yang harus dipenuhi.",
      "Menjawab kebutuhan informasi peserta secara komunikatif selama kegiatan.",
    ],
  },
  {
    id: "EXP-04",
    org: "Yayasan Al Amanah",
    role: "Panitia Pelatihan Kepeloporan Pemuda",
    period: "2023",
    type: "Kepanitiaan",
    points: [
      "Terlibat dalam persiapan dan pelaksanaan pelatihan sesuai pembagian tugas kepanitiaan.",
      "Berkoordinasi dengan panitia lain agar kegiatan berjalan sesuai rencana.",
    ],
  },
  {
    id: "EXP-05",
    org: "IPM Luwisari",
    role: "Panitia PKDTM 1",
    period: "2022",
    type: "Kepanitiaan",
    points: [
      "Terlibat dalam persiapan dan pelaksanaan kegiatan PKDTM 1 sesuai tanggung jawab yang diberikan.",
      "Berkoordinasi dengan tim untuk mendukung kelancaran acara.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  outcome: string;
  certificateLink?: string;
};

export const projects: Project[] = [
  {
    id: "PRJ-01",
    title: "Audit PT Patra Makmur Sejahtera",
    description:
      "Simulasi audit perusahaan yang dikerjakan secara berkelompok untuk menerapkan prosedur audit pada data dan informasi keuangan.",
    tools: ["ATLAS", "Kertas Kerja Audit", "Audit Procedure"],
    outcome:
      "Menyusun kertas kerja dan dokumentasi audit menggunakan ATLAS serta mendokumentasikan proses pemeriksaan secara sistematis dan terstruktur.",
  },
  {
    id: "PRJ-02",
    title: "Audit Internal SMP Buana Raya Kota Bandung",
    description:
      "Praktik audit internal pada lembaga pendidikan berdasarkan data dan informasi yang diberikan untuk memeriksa kondisi operasional keuangan.",
    tools: ["Audit Internal", "Kertas Kerja", "Analisis Data"],
    outcome:
      "Memeriksa data, mengidentifikasi kondisi audit, dan menyusun temuan audit beserta rekomendasi perbaikan dalam laporan audit internal.",
  },
  {
    id: "PRJ-03",
    title: "Penyusunan Laporan Keuangan",
    description:
      "Praktik penyusunan laporan keuangan dari transaksi mentah secara komprehensif, selaras dengan materi Uji Kompetensi Ikatan Akuntan Indonesia (IAI).",
    tools: ["Siklus Akuntansi", "Jurnal & Buku Besar", "Laporan Keuangan"],
    outcome:
      "Mencatat dan mengolah transaksi sesuai siklus akuntansi serta menghasilkan laporan keuangan utuh dari data transaksi yang diberikan.",
    certificateLink: "/certificate/IAI.pdf",
  },
  {
    id: "PRJ-04",
    title: "Pencatatan Transaksi dengan Accurate",
    description:
      "Studi kasus pengelolaan transaksi keuangan secara terkomputerisasi menggunakan software akuntansi Accurate.",
    tools: ["Accurate", "Accounting Software", "Financial Reporting"],
    outcome:
      "Menginput berbagai jenis transaksi, mengelola data transaksi, dan menghasilkan laporan keuangan otomatis melalui aplikasi Accurate.",
  },
  {
    id: "PRJ-05",
    title: "Skripsi: Transparansi & Akuntabilitas Laporan Keuangan Koperasi",
    description:
      "Penelitian kuantitatif mengenai pengaruh transparansi dan akuntabilitas laporan keuangan terhadap tingkat kepercayaan anggota koperasi.",
    tools: ["SPSS", "Kuesioner", "Metodologi Penelitian"],
    outcome:
      "Mengumpulkan data primer via kuesioner, menguji validitas dan reliabilitas instrumen, serta melakukan uji statistik sebagai dasar kesimpulan.",
  },
  {
    id: "PRJ-06",
    title: "Pengolahan & Analisis Data Penelitian dengan SPSS",
    description:
      "Pengolahan data penelitian kuantitatif menggunakan SPSS untuk memastikan instrumen penelitian memenuhi standar uji statistik.",
    tools: ["SPSS", "Uji Reliabilitas", "Statistik Kuantitatif"],
    outcome:
      "Melakukan analisis statistik sesuai kebutuhan penelitian serta menyajikan dan menginterpretasikan hasil pengujian untuk mendukung riset.",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  certNumber?: string;
  link?: string;
  points?: string[];
};

export const certifications: Certification[] = [
  {
    id: "CERT-01",
    name: "Uji Kompetensi Praktik Akuntansi IAI",
    issuer: "Ikatan Akuntan Indonesia (IAI) Wilayah Jawa Barat",
    year: "2026",
    certNumber: "No. 2881/SERT/IAI-JB/VII/2026",
    link: "/certificate/IAI.pdf",
    points: [
      "Dinyatakan kompeten dalam mengelola buku jurnal, buku besar, dan siklus akuntansi penuh.",
      "Uji praktik akuntansi terstandar Ikatan Akuntan Indonesia Wilayah Jawa Barat.",
    ],
  },
  {
    id: "CERT-02",
    name: "Kursus Pajak Terapan Brevet A & B Terpadu",
    issuer: "Tax Center Universitas Muhammadiyah Bandung & Padyangan School of Tax",
    year: "2025",
    certNumber: "No. 085/AK-UMB/2025016",
    link: "/certificate/Brevet.pdf",
    points: [
      "Seluruh mata uji meraih predikat Nilai A (KUP 81, PPh OP 86.67, PPh Potput 82, PPN/PPnBM 80, PPh Badan 80, PBB/BPHTB 83, Akuntansi Pajak 80).",
      "Menguasai administrasi ketentuan perpajakan, pelaporan SPT elektronik, dan perencanaan pajak.",
    ],
  },
  {
    id: "CERT-03",
    name: "Certified Tax Technician (CTT)",
    issuer: "Asosiasi Teknisi Perpajakan Indonesia (ATPI)",
    year: "2026",
    certNumber: "No. 024.315/PTSP-TP/ATPI/III/2026",
    link: "/certificate/CTT.pdf",
    points: [
      "Gelar profesi resmi Teknisi Perpajakan Madya (Brevet A&B) tersertifikasi ATPI.",
      "Kompetensi teknis perpajakan PPh Orang Pribadi, PPh Badan, dan kepatuhan administrasi fiskal.",
    ],
  },
  {
    id: "CERT-04",
    name: "Piagam Penghargaan Relawan Pajak (Predikat Perak / Silver)",
    issuer: "Direktorat Jenderal Pajak (DJP) & Renjani — KPP Pratama Sumedang",
    year: "2025",
    link: "/certificate/relawan_pajak.pdf",
    points: [
      "Penghargaan resmi Renjani (Relawan Pajak Untuk Negeri) dari Direktorat Jenderal Pajak.",
      "Mendampingi wajib pajak secara langsung dalam pelaporan SPT Tahunan PPh Orang Pribadi.",
    ],
  },
];

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Akademik" | "Kompetisi" | "Beasiswa" | "Organisasi" | "Penghargaan";
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "ACH-01",
    title: "Juara 2 — Accounting Got Talent (ASST Seri Nasional Ke-1)",
    issuer: "Universitas Muhammadiyah Bandung",
    year: "2022",
    category: "Kompetisi",
    link: "/certificate/juara2_accounting_sesminar.png",
  },
  {
    id: "ACH-02",
    title: "Lulus S1 Akuntansi dengan IPK 3,76 / 4,00",
    issuer: "Universitas Muhammadiyah Bandung",
    year: "2026",
    category: "Akademik",
  },
  {
    id: "ACH-03",
    title: "Meraih Sertifikat Silver pada Program Relawan Pajak 2025",
    issuer: "KPP Pratama Kabupaten Sumedang",
    year: "2025",
    category: "Penghargaan",
    link: "/certificate/relawan_pajak.pdf",
  },
  {
    id: "ACH-04",
    title: "Pemegang Sertifikasi Brevet Pajak A & B dan Certified Tax Technician (CTT)",
    issuer: "Lembaga Sertifikasi Perpajakan",
    year: "2025",
    category: "Kompetisi",
  },
  {
    id: "ACH-05",
    title: "Mengikuti Uji Kompetensi Ikatan Akuntan Indonesia (IAI)",
    issuer: "Ikatan Akuntan Indonesia",
    year: "2026",
    category: "Akademik",
    link: "/certificate/IAI.pdf",
  },
  {
    id: "ACH-06",
    title: "Lulus SMA dengan Rata-rata Nilai Ijazah 90,35 / 100",
    issuer: "SMA Muhammadiyah Singaparna",
    year: "2022",
    category: "Akademik",
  },
];

export type Tool = { name: string; category: string };

export const tools: Tool[] = [
  { name: "Accurate", category: "Software Akuntansi" },
  { name: "ATLAS", category: "Software Audit" },
  { name: "SPSS", category: "Analisis Data Statistik" },
  { name: "Microsoft Excel", category: "Spreadsheet & Formula" },
  { name: "Microsoft Word", category: "Dokumentasi & Administrasi" },
  { name: "Microsoft PowerPoint", category: "Presentasi & Laporan" },
];

export const socials = [
  { label: "LinkedIn", href: `https://${profile.linkedin}` },
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
