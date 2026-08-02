import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { aboutPage } from "@/lib/content";

export function AboutManifesto() {
  const { manifesto } = aboutPage;

  return (
    <section className="border-t border-stone py-28 lg:py-40">
      <Container className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {manifesto.heading}
          </h2>
        </FadeIn>

        <div className="mt-20">
          {manifesto.stanzas.map((stanza, i) => (
            <FadeIn
              key={stanza}
              delayMs={i * 120}
              className={
                i === 0
                  ? "text-center"
                  : "mt-14 border-t border-stone pt-14 text-center lg:mt-16 lg:pt-16"
              }
            >
              <p className="font-serif text-3xl leading-snug font-light text-softblack sm:text-4xl">
                {stanza}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
