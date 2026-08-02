import type { Metadata } from "next";
import { ClosingCta } from "@/components/ClosingCta";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { MonthInside } from "@/components/MonthInside";
import { Nav } from "@/components/Nav";
import { Packages } from "@/components/Packages";
import { PartnerJourney } from "@/components/PartnerJourney";
import { PartnershipPerks } from "@/components/PartnershipPerks";
import { PippinStandard } from "@/components/PippinStandard";
import { WhatWeSell } from "@/components/WhatWeSell";
import { partnershipPage } from "@/lib/content";

export const metadata: Metadata = {
  title: partnershipPage.meta.title,
  description: partnershipPage.meta.description,
};

export default function PartnershipPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl">
                {partnershipPage.hero.headline}
              </h1>
              <p className="mt-6 font-sans text-lg leading-relaxed text-charcoal">
                {partnershipPage.hero.subline}
              </p>
            </FadeIn>
          </Container>
        </section>

        <PartnershipPerks />
        <PartnerJourney />
        <MonthInside />
        <Packages />
        <WhatWeSell />
        <PippinStandard />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
