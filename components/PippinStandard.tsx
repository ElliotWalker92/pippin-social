import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { partnershipPage } from "@/lib/content";

export function PippinStandard() {
  const { standard } = partnershipPage;

  return (
    <section className="border-t border-stone bg-stone/40 py-24 lg:py-32">
      <Container className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {standard.heading}
          </h2>
          <p className="mt-8 font-sans text-lg leading-relaxed text-charcoal">
            {standard.body}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
