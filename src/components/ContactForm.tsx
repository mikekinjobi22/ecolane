"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  "General inquiry",
  "Partnership / institutional mobility",
  "Press & media",
  "Careers",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-ink/10 bg-brand-mist px-8 py-16 text-center">
        <CheckCircle2 className="text-brand-green-dark" size={40} />
        <h3 className="font-display mt-5 text-xl font-bold text-brand-ink">
          Message received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-brand-ink/60">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-ink/10 bg-white p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-ink">
            Full name
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-ink">
            Email address
          </label>
          <input
            required
            type="email"
            placeholder="you@email.com"
            className="mt-2 w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">
          Organization (optional)
        </label>
        <input
          type="text"
          placeholder="Estate, university, company..."
          className="mt-2 w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
        />
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">
          What&apos;s this about?
        </label>
        <select className="mt-2 w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green">
          {reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold text-brand-ink">
          Message
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us a bit about your location or question..."
          className="mt-2 w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
        />
      </div>

      <button
        type="submit"
        className="font-display mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-green-light"
      >
        Send message <ArrowRight size={16} />
      </button>
    </form>
  );
}
