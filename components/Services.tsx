import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { featureIcons } from "@/components/icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-sage py-20 lg:py-24">
      <Container>
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {services.map((service, i) => {
            const Icon = featureIcons[service.icon];
            return (
              // Single-column (mobile) lays each pillar out as a row — icon
              // left, copy filling the rest of the width. From `sm` up the
              // grid splits into columns, where the stacked version reads
              // better and the measure cap keeps lines short.
              <FadeIn
                as="li"
                key={service.title}
                delayMs={i * 100}
                className="flex items-start gap-6 sm:block"
              >
                <Icon className="h-9 w-9 shrink-0 text-softblack" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-sans text-xs tracking-widest-plus text-softblack uppercase sm:mt-6">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-softblack/80 sm:max-w-[22ch]">
                    {service.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
