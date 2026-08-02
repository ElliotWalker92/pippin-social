import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { cn } from "@/lib/utils";
import type { servicesPage } from "@/lib/content";

type Pillar = (typeof servicesPage.pillars)[number];

export function ServicePillar({
  pillar,
  reverse,
}: {
  pillar: Pillar;
  reverse: boolean;
}) {
  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className={cn("order-2", reverse ? "lg:order-2" : "lg:order-1")}>
          <ImagePlaceholder
            label={pillar.imageLabel}
            ratio="aspect-[4/5]"
            className="w-full"
          />
        </FadeIn>

        <FadeIn
          delayMs={150}
          className={cn("order-1", reverse ? "lg:order-1" : "lg:order-2")}
        >
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {pillar.title}
          </h2>
          <p className="mt-4 font-serif text-2xl leading-snug font-light text-charcoal">
            {pillar.tagline}
          </p>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-charcoal/80">
            {pillar.items.join(" / ")}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
