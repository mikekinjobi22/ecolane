import type { Metadata } from "next";
import { MapPin, Building2, Smartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ecolane",
  description: "Get in touch with the Ecolane team about rides, partnerships or press.",
};

const info = [
  { icon: MapPin, title: "Where we are", desc: "Nigeria, nationwide" },
  { icon: Building2, title: "Partnerships", desc: "Estates, universities & corporate campuses" },
  { icon: Smartphone, title: "Riders", desc: "Launching across Nigeria in 2026" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about moving freely, moving smarter"
        description="Whether you're a future rider, an estate manager, a university or a corporate campus — we'd love to hear from you."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-brand-ink">
                Reach out directly
              </h2>
              <div className="mt-8 space-y-6">
                {info.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-green-dark">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-brand-ink">
                        {item.title}
                      </p>
                      <p className="text-sm text-brand-ink/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
