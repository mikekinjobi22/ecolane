import type { ReactNode } from "react";

export default function Badge({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const style =
    tone === "dark"
      ? "border-brand-green-light/30 bg-brand-green-light/10 text-brand-green-light"
      : "border-brand-green-dark/20 bg-brand-green-dark/5 text-brand-green-dark";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase ${style}`}
    >
      {children}
    </span>
  );
}
