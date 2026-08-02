import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import { partnershipPage } from "@/lib/content";

export function Packages() {
  const { packages } = partnershipPage;

  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container>
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {packages.heading}
          </h2>
        </FadeIn>

        <ul className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.tiers.map((tier, i) => (
            <FadeIn
              as="li"
              key={tier.name}
              delayMs={i * 100}
              className={cn(
                "border p-10",
                tier.featured ? "border-stone border-t-2 border-t-sage" : "border-stone"
              )}
            >
              {tier.featured && (
                <p className="mb-3 font-sans text-xs tracking-widest-plus text-sage uppercase">
                  Most popular
                </p>
              )}
              <h3 className="font-serif text-2xl font-light text-softblack uppercase">
                {tier.name}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
                {tier.tagline}
              </p>
              {tier.items.length > 0 && (
                <p className="mt-6 font-sans text-sm leading-relaxed text-charcoal/80">
                  {tier.items.join(" / ")}
                </p>
              )}
            </FadeIn>
          ))}
        </ul>

        <FadeIn delayMs={300} className="mt-14 text-center">
          <p className="mx-auto max-w-lg font-sans text-sm leading-relaxed text-charcoal/70">
            {packages.footnote}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
