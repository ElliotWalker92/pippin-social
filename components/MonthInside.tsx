import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { partnershipPage } from "@/lib/content";

export function MonthInside() {
  const { monthInside } = partnershipPage;

  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container>
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {monthInside.heading}
          </h2>
        </FadeIn>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {monthInside.weeks.map((week, i) => (
            <FadeIn
              as="li"
              key={week.label}
              delayMs={i * 100}
              className="border border-stone p-8"
            >
              <p className="font-sans text-xs tracking-widest-plus text-charcoal/60 uppercase">
                {week.label}
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-charcoal">
                {week.body}
              </p>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
