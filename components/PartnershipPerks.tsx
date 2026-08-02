import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { partnershipIcons } from "@/components/icons";
import { partnershipPage } from "@/lib/content";

export function PartnershipPerks() {
  const { perks } = partnershipPage;

  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container>
        <FadeIn>
          <h2 className="text-center font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {perks.heading}
          </h2>
        </FadeIn>

        <ul className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {perks.items.map((perk, i) => {
            const Icon = partnershipIcons[perk.icon as keyof typeof partnershipIcons];
            return (
              <FadeIn as="li" key={perk.title} delayMs={i * 80}>
                <Icon className="h-9 w-9 text-softblack" />
                <p className="mt-6 max-w-[26ch] font-sans text-base leading-relaxed text-charcoal">
                  {perk.title}
                </p>
              </FadeIn>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
