import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-ink">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--brand-green-light) 0%, transparent 70%)",
        }}
      />
      <Container className="relative py-20 lg:py-28">
        <Badge tone="dark">{eyebrow}</Badge>
        <h1 className="font-display mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          {description}
        </p>
      </Container>
    </section>
  );
}
