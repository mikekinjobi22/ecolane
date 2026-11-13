import type { Metadata } from "next";
import Image from "next/image";
import {
  Home,
  GraduationCap,
  Building2,
  Hotel,
  Users,
  ShieldCheck,
  MapPinned,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partners | Ecolane",
  description:
    "Where Ecolane operates and how estates, universities, corporate campuses and hospitality venues can partner with us.",
};

const markets = [
  {
    icon: Home,
    title: "Residential estates & gated communities",
    desc: "Residents, domestic staff, visitors and service personnel moving within larger residential environments or between nearby facilities.",
    image: "/images/Residential.jpg",
    fit: "contain" as const,
  },
  {
    icon: GraduationCap,
    title: "University communities",
    desc: "Students, staff, contractors and visitors benefiting from short-distance mobility within or around campus environments.",
    image: "/images/university.jpg",
    fit: "contain" as const,
  },
  {
    icon: Building2,
    title: "Corporate workplaces & business campuses",
    desc: "Organisations with large premises or clustered facilities considering shared electric mobility for staff and visitors.",
    image: "/images/workplace.jpg",
    fit: "contain" as const,
  },
  {
    icon: Hotel,
    title: "Commercial, hospitality & leisure",
    desc: "Hotels, shopping centres and recreational facilities using shared mobility to improve visitor convenience.",
    image: "/images/recreational.jpg",
    fit: "contain" as const,
  },
  {
    icon: Users,
    title: "Neighbourhood users",
    desc: "Residents, commuters and visitors needing practical short-distance journeys wherever Ecolane is operational.",
    image: "/images/ebike-render-orange.jpg",
  },
];

const partnerTypes = [
  { icon: MapPinned, title: "Site & location partners", desc: "Estate managers, universities, property developers and corporates hosting our fleet." },
  { icon: ShieldCheck, title: "Infrastructure partners", desc: "Charging, parking and equipment providers supporting safe, reliable operations." },
  { icon: TrendingUp, title: "Technology & growth partners", desc: "Payment providers and fleet-management technology that keeps the service running smoothly." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we operate"
        title="Built for communities, designed with partners"
        description="Ecolane works with estate managers, universities, corporate organisations and hospitality venues to bring structured, dedicated mobility to the places people live, study and work."
      />

      {/* Fleet banner */}
      <section className="bg-white pt-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/scooter-fleet-outdoor.jpg"
              alt="Branded Ecolane e-scooters deployed within a community setting"
              width={810}
              height={1080}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </Container>
      </section>

      {/* Target markets */}
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-dark">
              Target markets
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Who Ecolane serves
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m) => (
              <div key={m.title} className="overflow-hidden rounded-3xl border border-brand-ink/10">
                <div className="relative h-36 w-full bg-white">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className={m.fit === "contain" ? "object-contain p-4" : "object-cover"}
                  />
                </div>
                <div className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink text-brand-green-light">
                    <m.icon size={20} />
                  </div>
                  <h3 className="font-display mt-6 text-lg font-bold text-brand-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner types */}
      <section className="bg-brand-ink py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green-light">
              Strategic partnerships
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Mobility is a team effort
            </h2>
            <p className="mt-4 text-white/60">
              Successful electric mobility requires cooperation across a
              range of stakeholders &mdash; here&apos;s who we build with.
            </p>
          </div>

          <div className="relative mt-10 h-56 overflow-hidden rounded-3xl sm:h-72">
            <Image
              src="/images/ebike-render-green.jpg"
              alt="Ecolane e-bike studio render in green, partner-branded battery pack"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {partnerTypes.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white/5 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-green-light">
                  <p.icon size={20} />
                </div>
                <h3 className="font-display mt-6 text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-brand-mist px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-balance text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Manage an estate, campus or venue?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-ink/60">
              Let&apos;s talk about whether a dedicated Ecolane deployment is
              right for your location.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="dark">
                Start a conversation <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
