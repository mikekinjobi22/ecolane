"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/5 bg-white/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-ink/70 transition-colors hover:text-brand-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Partner with us
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 text-brand-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-ink/5 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-ink/80 hover:bg-brand-mist"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 w-full">
              Partner with us
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
