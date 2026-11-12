import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "dark" ? "text-brand-ink" : "text-white";
  const sub = variant === "dark" ? "text-brand-green-dark" : "text-brand-green-light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-ink p-1">
        <Image
          src="/images/icon-mark.png"
          alt="Ecolane"
          width={34}
          height={28}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-tight text-lg ${text}`}>
          ECOLANE
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.2em] ${sub}`}>
          MOVE FREELY. MOVE SMARTER.
        </span>
      </span>
    </span>
  );
}
