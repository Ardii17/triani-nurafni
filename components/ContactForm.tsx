"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Peluang Kerja — dari ${name || "Website Portofolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulir kontak">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
            Nama
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-navy-900/15 bg-paper px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-500 dark:border-paper/15 dark:bg-navy-950 dark:text-paper"
            placeholder="Nama Anda"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-navy-900/15 bg-paper px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-500 dark:border-paper/15 dark:bg-navy-950 dark:text-paper"
            placeholder="nama@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
          Pesan
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-md border border-navy-900/15 bg-paper px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-500 dark:border-paper/15 dark:bg-navy-950 dark:text-paper"
          placeholder="Ceritakan tentang posisi atau peluang yang Anda tawarkan..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-navy-900 px-6 py-3 font-mono text-[13px] tracking-wide text-paper transition-colors hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
      >
        Kirim Pesan
      </button>

      {sent && (
        <p role="status" className="font-mono text-xs text-balance-600 dark:text-balance-400">
          Membuka aplikasi email Anda dengan pesan yang sudah disiapkan.
        </p>
      )}
    </form>
  );
}
