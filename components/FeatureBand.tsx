import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { featureIcons } from "@/components/icons";
import { featureBand } from "@/lib/content";

export function FeatureBand() {
  return (
    <section className="bg-sage py-20 lg:py-24">
      <Container>
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {featureBand.map((feature, i) => {
            const Icon = featureIcons[feature.icon];
            return (
              <FadeIn as="li" key={feature.title} delayMs={i * 100}>
                <Icon className="h-9 w-9 text-softblack" />
                <h3 className="mt-6 font-sans text-xs tracking-widest-plus text-softblack uppercase">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-[22ch] font-sans text-sm leading-relaxed text-softblack/80">
                  {feature.body}
                </p>
              </FadeIn>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
