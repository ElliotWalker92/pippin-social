import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { aboutPage } from "@/lib/content";

export function AboutBeliefs() {
  const { beliefs } = aboutPage;

  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {beliefs.heading}
          </h2>
        </FadeIn>

        <ul className="mt-16 divide-y divide-stone">
          {beliefs.items.map((item, i) => (
            <FadeIn
              as="li"
              key={item}
              delayMs={i * 60}
              className="py-6 text-center"
            >
              <p className="font-sans text-lg text-charcoal">{item}</p>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
