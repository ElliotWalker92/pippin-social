import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-6 justify-center">
            {process.eyebrow}
          </Eyebrow>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {process.headline}
          </h2>
        </FadeIn>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          {process.steps.map((step, i) => (
            <FadeIn as="li" key={step.number} delayMs={i * 80}>
              <span className="font-serif text-2xl font-light text-sage">
                {step.number}
              </span>
              <h3 className="mt-4 font-sans text-xs tracking-widest-plus text-softblack uppercase">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[24ch] font-sans text-sm leading-relaxed text-charcoal/80">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
