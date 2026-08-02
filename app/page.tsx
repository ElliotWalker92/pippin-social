import { AboutSplit } from "@/components/AboutSplit";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { PippinDifference } from "@/components/PippinDifference";
import { Process } from "@/components/Process";
import { ServiceTicker } from "@/components/ServiceTicker";
import { Services } from "@/components/Services";
import { ThePromise } from "@/components/ThePromise";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServiceTicker />
        <AboutSplit />
        <Services />
        <PippinDifference />
        <Process />
        <ThePromise />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
