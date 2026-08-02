import type { Metadata } from "next";
import { ClosingCta } from "@/components/ClosingCta";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ServicePillar } from "@/components/ServicePillar";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl">
                {servicesPage.hero.headline}
              </h1>
              <p className="mt-6 font-sans text-lg leading-relaxed text-charcoal">
                {servicesPage.hero.subline}
              </p>
            </FadeIn>
          </Container>
        </section>

        {servicesPage.pillars.map((pillar, i) => (
          <ServicePillar key={pillar.key} pillar={pillar} reverse={i % 2 === 1} />
        ))}

        <WhoWeWorkWith />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
