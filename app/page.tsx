import { AboutSplit } from "@/components/AboutSplit";
import { ClosingCta } from "@/components/ClosingCta";
import { FeatureBand } from "@/components/FeatureBand";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { ServiceTicker } from "@/components/ServiceTicker";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServiceTicker />
        <AboutSplit />
        <FeatureBand />
        <Process />
        <Results />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
