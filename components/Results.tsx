import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { results } from "@/lib/content";

// Stat figures are placeholders — swap in real client results when available.
export function Results() {
  return (
    <section className="border-t border-stone bg-stone/40 py-24 lg:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {results.headline}
          </h2>
        </FadeIn>

        <dl className="mt-16 grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {results.stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delayMs={i * 100}
              className="text-center"
            >
              <dd className="font-serif text-4xl font-light text-softblack sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-3 font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase">
                {stat.label}
              </dt>
            </FadeIn>
          ))}
        </dl>
      </Container>
    </section>
  );
}
