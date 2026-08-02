import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { difference } from "@/lib/content";

export function PippinDifference() {
  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {difference.heading}
          </h2>
        </FadeIn>

        <ul className="mt-16 divide-y divide-stone">
          {difference.pairs.map((pair, i) => (
            <FadeIn
              as="li"
              key={pair.before}
              delayMs={i * 100}
              className="py-8 text-center"
            >
              <p className="font-sans text-lg text-charcoal/60">
                {pair.before}
              </p>
              <p className="mt-1 font-sans text-lg font-medium text-softblack">
                {pair.after}
              </p>
            </FadeIn>
          ))}
        </ul>

        <FadeIn
          delayMs={difference.pairs.length * 100}
          className="mt-16 text-center"
        >
          <p className="font-serif text-3xl leading-snug font-light text-softblack sm:text-4xl">
            {difference.closing}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
