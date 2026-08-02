import type { Metadata } from "next";
import { AboutBeliefs } from "@/components/AboutBeliefs";
import { AboutCommunication } from "@/components/AboutCommunication";
import { AboutFounder } from "@/components/AboutFounder";
import { AboutManifesto } from "@/components/AboutManifesto";
import { AboutMissionVision } from "@/components/AboutMissionVision";
import { AboutPurpose } from "@/components/AboutPurpose";
import { ClosingCta } from "@/components/ClosingCta";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { aboutPage } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <Eyebrow className="mb-6 justify-center">
                {aboutPage.hero.eyebrow}
              </Eyebrow>
              <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl">
                {aboutPage.hero.headline}
              </h1>
            </FadeIn>
          </Container>
        </section>

        <AboutPurpose />
        <AboutManifesto />
        <AboutBeliefs />
        <AboutMissionVision />
        <AboutCommunication />
        <AboutFounder />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
