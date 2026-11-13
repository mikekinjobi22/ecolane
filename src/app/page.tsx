import Link from "next/link";
import Image from "next/image";
import {
  Bike,
  Smartphone,
  Radar,
  ShieldCheck,
  Leaf,
  Zap,
  Building2,
  ArrowRight,
  MapPin,
  QrCode,
  Lock,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const stats = [
  { value: "100%", label: "Electric, zero tailpipe emissions" },
  { value: "Nationwide", label: "Expanding across Nigeria" },
  { value: "2026", label: "Launch year" },
];

const gapCards = [
  {
    title: "Walking",
    desc: "Slow, weather-exposed, and frequently too far for practical daily point-to-point trips.",
    tag: "Inefficient for micro-trips",
    tagColor: "text-red-500",
    highlight: false,
  },
  {
    title: "Ecolane",
    desc: "Flexible point-to-point trips inside defined operating areas on zero-emission e-bikes and e-scooters.",
    tag: "The optimal transit gap-filler",
    tagColor: "text-brand-green-light",
    highlight: true,
  },
  {
    title: "Cars, buses & taxis",
    desc: "Fragmented, held up by sustained urban congestion, and expensive for short hops.",
    tag: "Congested & expensive",
    tagColor: "text-amber-500",
    highlight: false,
  },
];

const steps = [
  { icon: MapPin, title: "Find", desc: "Locate an available e-bike or e-scooter near you in the Ecolane app." },
  { icon: QrCode, title: "Scan", desc: "Scan the QR code to release the smart lock in seconds." },
  { icon: Bike, title: "Ride", desc: "Ride pedal-assist within the designated operating zone." },
  { icon: Lock, title: "Park", desc: "Return to a designated station and auto-pay through the app." },
];

const solutions = [
  {
    icon: Bike,
    title: "Shared e-bikes",
    desc: "Pedal-assist electric bicycles for everyday short trips.",
    image: "/images/ebike-render-orange.jpg",
    imageAlt: "Ecolane-branded e-bike studio render in orange",
  },
  {
    icon: Zap,
    title: "Shared e-scooters",
    desc: "Quick, agile electric scooters for point-to-point journeys.",
    image: "/images/fleet-green-mixed.jpg",
    imageAlt: "Ecolane e-scooters and e-bike staged outdoors",
  },
  { icon: Smartphone, title: "Ecolane app", desc: "Find, unlock, ride and pay — all from your phone." },
  {
    icon: Radar,
    title: "Connected fleet",
    desc: "GPS tracking, smart locks and a monitored, maintained fleet.",
    image: "/images/ops-center-dashboard.jpg",
    imageAlt: "Ecolane 24/7 fleet operations dashboard showing live GPS tracking across Nigeria",
  },
];

const gallery = [
  {
    src: "/images/ebike-render-orange.jpg",
    alt: "Ecolane e-bike studio render in orange, partner-branded battery pack",
    caption: "Orange colorway",
  },
  {
    src: "/images/ebike-render-green.jpg",
    alt: "Ecolane e-bike studio render in green, partner-branded battery pack",
    caption: "Green colorway",
  },
  {
    src: "/images/ebike-render-green-closeup.jpg",
    alt: "Close-up of the Ecolane e-bike frame and branded battery pack",
    caption: "Frame detail",
  },
  {
    src: "/images/fleet-green-mixed.jpg",
    alt: "Mixed Ecolane e-bike and e-scooter fleet staged outdoors",
    caption: "Mixed fleet, staged",
  },
  {
    src: "/images/ebike-prototype-shop.jpg",
    alt: "Early Ecolane e-bike prototype fitted with branding",
    caption: "Early prototype",
  },
  {
    src: "/images/ebike-fattire-indoor.jpg",
    alt: "Fat-tire e-bike platform under evaluation for the Ecolane fleet",
    caption: "Fat-tire platform",
  },
];

const values = [
  { icon: Sparkles, title: "Innovation", desc: "Smarter mobility for a better tomorrow" },
  { icon: Leaf, title: "Sustainability", desc: "Cleaner cities, greener future" },
  { icon: ShieldCheck, title: "Safety", desc: "Your safety, our priority" },
  { icon: Zap, title: "Convenience", desc: "Easy rides, every day" },
  { icon: Building2, title: "Reliability", desc: "You can count on us" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--brand-green-light) 0%, transparent 70%)",
          }}
        />
        <Image
          src="/images/icon-mark.png"
          alt=""
          width={680}
          height={560}
          className="pointer-events-none absolute -right-24 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-[0.12] lg:block"
          priority
        />
        <Container className="relative py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="max-w-3xl">
              <Badge tone="dark">Electric mobility for Nigeria</Badge>
              <h1 className="font-display mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Move Freely.{" "}
                <span className="text-brand-green-light">Move Smarter.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Technology-enabled shared electric mobility, transforming
                short-distance transportation in Nigeria &mdash; launching
                nationwide.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Get notified at launch <ArrowRight size={16} />
                </Button>
                <Button href="/partners" variant="ghost">
                  Partner with Ecolane
                </Button>
              </div>
            </div>

            <div className="lg:pr-14">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl lg:-rotate-2">
                <Image
                  src="/images/scooter-fleet-outdoor.jpg"
                  alt="Branded Ecolane e-scooters lined up and ready for deployment"
                  width={810}
                  height={1080}
                  className="h-72 w-full object-cover sm:h-96 lg:h-[26rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>

        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <Container>
            <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-brand-green-light sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* The short-distance mobility gap */}
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
              Market context
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              The short-distance mobility gap
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gapCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-3xl border p-8 ${
                  card.highlight
                    ? "border-brand-green/40 bg-brand-ink text-white"
                    : "border-brand-ink/10 bg-brand-mist text-brand-ink"
                }`}
              >
                <h3 className="font-display text-xl font-bold">{card.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    card.highlight ? "text-white/70" : "text-brand-ink/60"
                  }`}
                >
                  {card.desc}
                </p>
                <p className={`mt-8 text-xs font-bold uppercase tracking-wide ${card.tagColor}`}>
                  {card.tag}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-brand-mist py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Simple by design
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                Your ride, in four steps
              </h2>
            </div>
            <Button href="/services" variant="secondary" className="border border-brand-ink/10">
              Explore services <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
            <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-72 lg:h-full">
              <Image
                src="/images/scooter-qr-lock.jpg"
                alt="Scanning the QR code on an Ecolane e-scooter to release the smart lock"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {steps.map((step, i) => (
                <div key={step.title} className="rounded-3xl bg-white p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
                      <step.icon size={20} />
                    </div>
                    <span className="font-display text-2xl font-extrabold text-brand-ink/10">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-lg font-bold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions teaser */}
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
              Our solutions
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              An integrated mobility service, not just a bicycle
            </h2>
            <p className="mt-4 text-brand-ink/60">
              Ecolane brings together electric mobility devices, a mobile app,
              digital payments, connected fleet monitoring and designated
              parking &mdash; one simple service for riders, and a practical
              partner for the places that host it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-brand-ink/10 transition-colors hover:border-brand-green/30 hover:bg-brand-mist"
              >
                {item.image && (
                  <div className="relative h-40 w-full overflow-hidden sm:h-32">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-brand-green-light">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-display mt-6 text-lg font-bold text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fleet gallery */}
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
              In the field
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Every device, built and branded
            </h2>
            <p className="mt-4 text-brand-ink/60">
              From studio renders to real test units, here&apos;s a closer
              look at the hardware behind the Ecolane fleet.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.src}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-brand-ink/50 sm:text-sm">
                  {g.caption}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fleet showcase video */}
      <section className="bg-brand-mist py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] shadow-sm">
              <video
                src="/Videos/ebike-walkthrough.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Real fleet, real build
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                Not a concept &mdash; equipment already on the ground
              </h2>
              <p className="mt-4 text-brand-ink/60">
                Every e-bike and e-scooter in the Ecolane fleet carries our
                branding, GPS tracking and smart lock hardware from day one,
                so what you see here is what rolls out onto streets across
                Nigeria.
              </p>
              <Button href="/services" variant="secondary" className="mt-8 border border-brand-ink/10">
                See the full service <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Values bar */}
      <section className="bg-brand-ink py-20">
        <Container>
          <h2 className="font-display text-center text-2xl font-extrabold text-white sm:text-3xl">
            What guides every ride
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-brand-green-light">
                  <v.icon size={22} />
                </div>
                <h3 className="font-display mt-4 text-sm font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-1 text-xs text-white/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Target markets teaser */}
      <section className="bg-brand-mist py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Built for communities
              </p>
              <Button href="/partners" variant="secondary" className="mt-6 border border-brand-ink/10">
                See where we operate <ArrowRight size={16} />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Gated residential estates", image: "/images/scooter-fleet-outdoor.jpg" },
                { label: "University communities", image: "/images/scooter-fleet-path.jpg" },
                { label: "Corporate workplaces", image: "/images/ops-center-dashboard.jpg" },
                { label: "Hotels & leisure spots", image: "/images/scooter-qr-lock.jpg" },
              ].map(({ label, image }) => (
                <div
                  key={label}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/10 to-transparent" />
                  <p className="font-display absolute inset-x-4 bottom-4 text-sm font-bold text-white">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-green-dark px-8 py-16 text-center sm:px-16">
            <div
              className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--brand-green-light) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-balance text-3xl font-extrabold text-white sm:text-4xl">
                Bring Ecolane to your community
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Estate manager, university or corporate campus? Let&apos;s
                design a mobility arrangement that fits your location.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary">
                  Talk to our team <ArrowRight size={16} />
                </Button>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
                >
                  Learn about Ecolane <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
