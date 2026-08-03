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

        {/*
          On mobile the steps run as a horizontal, snapping timeline — the
          next card peeks in to signal there's more to swipe, which keeps a
          five-step sequence from eating a screen and a half of scroll. From
          `sm` up there's room for the grid, so it reverts to columns.
        */}
        <ol className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-10 sm:overflow-visible sm:pb-0 lg:mt-20 lg:grid-cols-5 lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {process.steps.map((step, i) => (
            <FadeIn
              as="li"
              key={step.number}
              delayMs={i * 80}
              className="w-[78%] shrink-0 snap-start sm:w-auto"
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl font-light text-sage">
                  {step.number}
                </span>
                {/* Hairline carries the eye between steps, reading as a timeline. */}
                <span aria-hidden="true" className="h-px flex-1 bg-stone" />
              </div>
              <h3 className="mt-4 font-sans text-xs tracking-widest-plus text-softblack uppercase">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/80 sm:max-w-[24ch]">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </ol>

        <FadeIn
          delayMs={process.steps.length * 80}
          className="mt-14 text-center lg:mt-16"
        >
          <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-charcoal/70">
            {process.note}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
