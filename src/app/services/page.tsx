import type { Metadata } from "next";
import Image from "next/image";
import {
  Bike,
  Zap,
  Smartphone,
  Radar,
  Building2,
  MapPin,
  QrCode,
  Lock,
  Satellite,
  ShieldCheck,
  Wrench,
  CreditCard,
  Wallet,
  Repeat,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Ecolane",
  description:
    "Shared e-bikes, e-scooters, the Ecolane app, fleet management and institutional mobility arrangements.",
};

const coreServices = [
  {
    icon: Bike,
    title: "Shared e-bike services",
    desc: "Pedal-assist electric bicycles available for short-distance trips through a shared-use model — a flexible alternative to ownership for suitable journeys.",
  },
  {
    icon: Zap,
    title: "Shared e-scooter services",
    desc: "Electric scooters extend the range of short-distance mobility options, deployed based on location suitability, operational controls and safety considerations.",
  },
  {
    icon: Smartphone,
    title: "Digital mobility services",
    desc: "The Ecolane app helps you locate available devices, unlock them and pay — reducing friction and making access convenient.",
  },
  {
    icon: Radar,
    title: "Fleet management & operations",
    desc: "A connected fleet, organised and monitored for availability, maintenance and asset security, because your ride depends on it.",
  },
  {
    icon: Building2,
    title: "Institutional mobility",
    desc: "Dedicated arrangements with estate managers, universities, corporate organisations and hotels — tailored to each location and its users.",
  },
];

const steps = [
  { icon: MapPin, title: "Find", desc: "Locate an available bike or scooter in the app." },
  { icon: QrCode, title: "Scan", desc: "Scan the QR code to release the smart lock." },
  { icon: Bike, title: "Ride", desc: "Ride pedal-assist within the operating zone." },
  { icon: Lock, title: "Park", desc: "Park at a designated station and auto-pay." },
];

const tech = [
  { icon: Satellite, title: "GPS & IoT tracking", desc: "Real-time fleet visibility, location monitoring and asset management." },
  { icon: Lock, title: "Smart locking", desc: "Controlled, digital unlocking for secure access to every device." },
  { icon: CreditCard, title: "Digital payments", desc: "Convenient, traceable transactions built into the app experience." },
  { icon: Wrench, title: "Maintenance tools", desc: "Operational data on usage, availability and maintenance needs." },
];

const plans = [
  { icon: Wallet, title: "Pay-per-use", desc: "Pay according to the duration of your ride — simple and flexible." },
  { icon: Repeat, title: "Subscriptions", desc: "Packages designed for frequent riders, subject to service terms." },
  { icon: Building2, title: "Institutional plans", desc: "Service agreements for estates, universities, corporates and hotels." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="One service, built from device to destination"
        description="Ecolane combines e-bikes, e-scooters, a digital platform and organised fleet operations into a service that's simple for riders and practical for the communities that host it."
      />

      {/* Fleet banner */}
      <section className="bg-white pt-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/scooter-fleet-path.jpg"
              alt="Ecolane e-scooters lined up and ready for deployment"
              width={640}
              height={1080}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </Container>
      </section>

      {/* Core services */}
      <section className="bg-white py-24">
        <Container>
          <div className="relative mb-10 h-56 overflow-hidden rounded-3xl sm:h-72">
            <Image
              src="/images/ebike-prototype-shop.jpg"
              alt="Early Ecolane e-bike prototype fitted with branding"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {coreServices.map((s) => (
              <div
                key={s.title}
                className="flex gap-5 rounded-3xl border border-brand-ink/10 p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-ink text-brand-green-light">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* App / how it works */}
      <section id="app" className="bg-brand-mist py-24 scroll-mt-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
              The Ecolane app
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Your ride, in four steps
            </h2>
            <p className="mt-4 text-brand-ink/60">
              The app is the customer-facing heart of the service: locating
              devices, initiating access, completing payment and receiving
              relevant ride information.
            </p>
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

      {/* Technology */}
      <section className="bg-brand-ink py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-light">
              Connected technology
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Appropriate technology, used well
            </h2>
            <p className="mt-4 text-white/60">
              Our objective isn&apos;t technology for its own sake, but using
              it to improve convenience, security, operational discipline and
              service quality.
            </p>
          </div>

          <div className="relative mt-10 h-56 overflow-hidden rounded-3xl sm:h-72">
            <Image
              src="/images/ops-center-dashboard.jpg"
              alt="Ecolane 24/7 fleet operations dashboard showing live GPS tracking across Nigeria"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tech.map((t) => (
              <div key={t.title} className="rounded-3xl bg-white/5 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-green-light">
                  <t.icon size={18} />
                </div>
                <h3 className="font-display mt-5 text-base font-bold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety */}
      <section id="safety" className="bg-white py-24 scroll-mt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
                <ShieldCheck size={22} />
              </div>
              <h2 className="font-display mt-6 text-3xl font-extrabold tracking-tight text-brand-ink">
                Safety & responsible operations
              </h2>
              <p className="mt-5 leading-relaxed text-brand-ink/60">
                Equipment inspection, routine maintenance, user guidance and
                incident reporting are built into how we operate. GPS
                monitoring and smart locking support asset security, while
                designated parking and approved operating areas help reduce
                disorder and keep devices well managed within host locations.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-mist p-10">
              <h3 className="font-display text-lg font-bold text-brand-ink">
                Ways to ride
              </h3>
              <div className="mt-6 space-y-5">
                {plans.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-green-dark">
                      <p.icon size={16} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-brand-ink">
                        {p.title}
                      </p>
                      <p className="text-sm text-brand-ink/60">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Button href="/partners" variant="dark">
              Explore institutional mobility <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
