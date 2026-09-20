# Portofolio Sarjana Akuntansi — Next.js

Website portofolio profesional untuk lulusan Sarjana Akuntansi (S.Ak.), dibangun dengan **Next.js 14 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

## Arah Desain

Tema visual mengambil inspirasi dari **buku besar (ledger) akuntansi**: latar kertas dan navy gelap, garis putus-putus seperti kolom neraca, angka dalam huruf monospace tabular (IBM Plex Mono) agar terlihat presisi seperti laporan keuangan, dan sebuah kartu "Neraca Saldo" animasi di Hero sebagai elemen visual utama — merepresentasikan prinsip inti akuntansi: debit selalu sama dengan kredit.

- **Warna**: navy (`#0A1B33`), kertas/putih gading (`#FBFAF6`), abu tinta (`#3A4152`), aksen emas (`#C9A227`), aksen hijau saldo-seimbang (`#2F6F4E`)
- **Tipografi**: Fraunces (display/serif) untuk judul, Inter untuk teks isi, IBM Plex Mono untuk angka & label data
- **Mode gelap/terang**: tersedia lewat tombol di navbar, tersimpan otomatis

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Folder

```
app/
  layout.tsx        -> font, metadata SEO, inisialisasi tema
  page.tsx           -> menyusun semua section
  globals.css         -> style global & utilitas ledger
components/
  Navbar.tsx, Footer.tsx, ThemeToggle.tsx, ContactForm.tsx
  sections/           -> satu file per bagian (Hero, About, Skills, dst.)
  ui/                 -> komponen reusable (SectionHeading, Reveal, BalancedSeal)
lib/
  data.ts             -> SEMUA konten/teks website ada di sini
public/
  cv-*.pdf            -> letakkan file CV Anda di sini
```

## Mengganti Data Menjadi Data Anda

Edit satu file saja: **`lib/data.ts`**. Semua nama, riwayat pendidikan, pengalaman, proyek, sertifikasi, pencapaian, tools, dan info kontak ada di sana — tidak perlu menyentuh komponen lain.

1. Ganti `profile` dengan nama, gelar, email, telepon, LinkedIn, dan lokasi Anda.
2. Tambahkan file CV Anda ke folder `public/` lalu perbarui `profile.cvFile` agar sesuai nama file.
3. Perbarui `education`, `experience`, `projects`, `certifications`, `achievements`, `skills`, dan `tools` sesuai data asli Anda. Setiap array bisa ditambah atau dikurangi jumlah entrinya — layout menyesuaikan otomatis.

## Formulir Kontak

Formulir di bagian Kontak membuka aplikasi email pengguna (`mailto:`) dengan pesan yang sudah terisi — tidak memerlukan backend. Jika Anda ingin formulir terkirim langsung ke server (misalnya lewat layanan seperti Formspree atau Resend), ganti fungsi `handleSubmit` di `components/ContactForm.tsx`.

## Build untuk Produksi

```bash
npm run build
npm run start
```

Website ini siap di-deploy ke platform seperti Vercel, Netlify, atau hosting Node.js lainnya.
