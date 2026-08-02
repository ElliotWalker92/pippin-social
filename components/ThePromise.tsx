import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { promise } from "@/lib/content";

export function ThePromise() {
  return (
    <section className="bg-stone py-24 lg:py-32">
      <Container className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {promise.headline}
          </h2>
        </FadeIn>

        <ul className="mt-14 space-y-5">
          {promise.items.map((item, i) => (
            <FadeIn as="li" key={item} delayMs={i * 80}>
              <p className="font-sans text-lg text-charcoal">{item}</p>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
