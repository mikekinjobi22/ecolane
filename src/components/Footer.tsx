import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/ui/Container";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8 8.25h4.3v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.8c0-1.62-.03-3.7-2.25-3.7-2.26 0-2.6 1.77-2.6 3.59V23H8V8.25Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Ecolane" },
      { href: "/about#values", label: "Our values" },
      { href: "/about#leadership", label: "Leadership" },
    ],
  },
  {
    title: "Ride",
    links: [
      { href: "/services", label: "E-bikes & e-scooters" },
      { href: "/services#app", label: "The Ecolane app" },
      { href: "/services#safety", label: "Safety" },
    ],
  },
  {
    title: "Partners",
    links: [
      { href: "/partners", label: "Where we operate" },
      { href: "/partners", label: "Institutional mobility" },
      { href: "/contact", label: "Become a partner" },
    ],
  },
];

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Technology-enabled shared electric mobility, launching
              nationwide. Cleaner environment. Smarter mobility. Connected
              communities.
            </p>
            <div className="mt-6 flex gap-3">
              {[InstagramIcon, XIcon, LinkedinIcon].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/40">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Ecolane Limited. All rights reserved.</p>
          <p>Nigeria, nationwide &mdash; Move Freely. Move Smarter.</p>
        </div>
      </Container>
    </footer>
  );
}
