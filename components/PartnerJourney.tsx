import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { partnershipPage } from "@/lib/content";

export function PartnerJourney() {
  const { journey } = partnershipPage;

  return (
    <section className="border-t border-stone bg-stone/40 py-24 lg:py-32">
      <Container className="mx-auto max-w-xl">
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {journey.heading}
          </h2>
        </FadeIn>

        <ol className="mt-16 divide-y divide-sage/40">
          {journey.steps.map((step, i) => (
            <FadeIn
              as="li"
              key={step}
              delayMs={i * 50}
              className="py-6 text-center"
            >
              <p className="font-serif text-2xl font-light text-softblack">
                {step}
              </p>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
