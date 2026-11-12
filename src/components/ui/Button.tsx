import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-brand-green text-brand-ink hover:bg-brand-green-light shadow-[0_0_0_1px_rgba(0,0,0,0.02)]",
  secondary:
    "bg-white text-brand-ink hover:bg-brand-mist",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
  dark:
    "bg-brand-ink text-white hover:bg-brand-ink-soft",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
