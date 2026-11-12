import type { Metadata } from "next";
import Image from "next/image";
import {
  Eye,
  Target,
  Sparkles,
  Leaf,
  ShieldCheck,
  Zap,
  Building2,
  Wallet,
  Brain,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Ecolane",
  description:
    "Ecolane's vision, mission, principles and leadership behind Nigeria's first shared electric mobility service.",
};

const principles = [
  { icon: Zap, title: "Accessibility", desc: "Making the service straightforward to understand and use." },
  { icon: Wallet, title: "Affordability", desc: "Pricing and service options that reflect different user groups." },
  { icon: Leaf, title: "Sustainability", desc: "Encouraging electric journeys as an alternative to conventional trips." },
  { icon: Brain, title: "Intelligence", desc: "Using technology and operational data to improve service delivery." },
  { icon: ShieldCheck, title: "Reliability", desc: "Maintaining equipment and responding to issues quickly." },
];

const values = [
  { icon: Sparkles, title: "Innovation", desc: "Ecolane embraces practical technology and fresh ideas to make mobility smarter." },
  { icon: Leaf, title: "Sustainability", desc: "We promote cleaner mobility choices for greener, more liveable cities." },
  { icon: ShieldCheck, title: "Safety", desc: "User wellbeing, equipment condition and secure operations come first." },
  { icon: Zap, title: "Convenience", desc: "Everyday journeys made easier through a simple digital experience." },
  { icon: Building2, title: "Reliability", desc: "Dependable equipment, effective fleet management and consistent service." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ecolane"
        title="Transforming short-distance movement in Nigeria"
        description="Ecolane is a technology-enabled electric mobility company established to make everyday journeys easier, cleaner and smarter — through shared e-bikes and e-scooters, a digital platform and organised fleet operations."
      />

      {/* Overview */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Company overview
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink">
                An integrated mobility service
              </h2>
              <p className="mt-5 leading-relaxed text-brand-ink/60">
                Rather than simply providing bicycles or scooters, Ecolane
                brings together electric mobility devices, a mobile
                application, digital access and payment functionality,
                connected fleet monitoring, designated parking and
                operational management into a single service.
              </p>
              <p className="mt-4 leading-relaxed text-brand-ink/60">
                Our market focus is Nigeria, nationwide, with a longer-term
                intention to expand into wider African markets as the
                business grows.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Our motto
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink">
                Move Freely. Move Smarter.
              </h2>
              <p className="mt-5 leading-relaxed text-brand-ink/60">
                &ldquo;Move Freely&rdquo; reflects the convenience of
                accessing a shared e-bike or scooter when and where it&apos;s
                needed, without owning and maintaining a personal vehicle.
                &ldquo;Move Smarter&rdquo; reflects the use of digital tools,
                connected devices and organised operations to make
                short-distance journeys more efficient and responsive.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Fleet gallery */}
      <section className="bg-white pb-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/scooter-fleet-outdoor.jpg"
                alt="Branded Ecolane e-scooters ready for deployment"
                width={810}
                height={1080}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/scooter-qr-lock.jpg"
                alt="Close-up of an Ecolane e-scooter's QR code smart lock and battery indicator"
                width={810}
                height={1080}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-mist py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink text-brand-green-light">
                <Eye size={22} />
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-brand-ink">
                Our vision
              </h3>
              <p className="mt-3 leading-relaxed text-brand-ink/60">
                To become a leading electric mobility company in Africa,
                transforming how people move within cities and communities.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-ink p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-green-light">
                <Target size={22} />
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-white">
                Our mission
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">
                To provide convenient, reliable and technology-driven
                mobility solutions for a cleaner and more connected Nigeria.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
              Corporate philosophy
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Mobility designed around real needs
            </h2>
            <p className="mt-4 text-brand-ink/60">
              A useful mobility service combines an appropriate product,
              convenient access, dependable operations and responsible use.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p) => (
              <div key={p.title} className="rounded-3xl border border-brand-ink/10 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
                  <p.icon size={18} />
                </div>
                <h3 className="font-display mt-5 text-base font-bold text-brand-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section id="values" className="bg-brand-ink py-24 scroll-mt-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-light">
              Core values
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What guides every decision we make
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white/5 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-green-light">
                  <v.icon size={18} />
                </div>
                <h3 className="font-display mt-5 text-base font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-white py-24 scroll-mt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Leadership
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink">
                Built with a focus on execution
              </h2>
              <p className="mt-5 leading-relaxed text-brand-ink/60">
                As Ecolane develops, management and operating responsibilities
                are organised across business development, fleet operations,
                technology and product, customer experience, finance and
                compliance &mdash; with an emphasis on accountability, clear
                responsibilities and sound decision-making.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-ink/10 bg-brand-mist p-10">
              <p className="font-display text-xl font-bold text-brand-ink">
                Ibrahim Hammed Olalekan
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-green-dark">
                Director
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink/60">
                Directs Ecolane&apos;s strategic and business development
                objectives, supporting the establishment of a reliable and
                scalable electric mobility service in Nigeria.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Environmental & social */}
      <section className="bg-brand-mist py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Environmental responsibility
              </p>
              <h2 className="font-display mt-3 text-2xl font-extrabold tracking-tight text-brand-ink">
                Cleaner short-distance travel
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/60">
                Electric mobility reduces direct tailpipe emissions at the
                point of use compared with petrol-powered alternatives.
                Ecolane approaches environmental responsibility as an
                operational commitment &mdash; from responsible battery
                handling to maintenance practices and appropriate end-of-life
                management.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                Social responsibility
              </p>
              <h2 className="font-display mt-3 text-2xl font-extrabold tracking-tight text-brand-ink">
                Opportunity within communities
              </h2>
              <p className="mt-4 leading-relaxed text-brand-ink/60">
                Our social objectives include improving access to practical
                mobility, supporting more convenient movement within
                communities, and creating opportunities for employment and
                skills development in fleet operations, maintenance,
                customer support and technology-enabled services.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Button href="/contact" variant="primary">
              Get in touch <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
