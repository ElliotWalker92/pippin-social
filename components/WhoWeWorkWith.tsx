import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { servicesPage } from "@/lib/content";

export function WhoWeWorkWith() {
  const { whoWeWorkWith } = servicesPage;

  return (
    <section className="border-t border-stone bg-stone/40 py-24 lg:py-32">
      <Container className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {whoWeWorkWith.heading}
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-charcoal">
            {whoWeWorkWith.lead}
          </p>
        </FadeIn>

        <FadeIn
          delayMs={150}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          {whoWeWorkWith.industries.map((industry, i) => (
            <span key={industry} className="flex items-center gap-3">
              <span className="font-sans text-xs tracking-widest-plus text-charcoal uppercase">
                {industry}
              </span>
              {i < whoWeWorkWith.industries.length - 1 && (
                <span aria-hidden="true" className="text-sage">
                  •
                </span>
              )}
            </span>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
