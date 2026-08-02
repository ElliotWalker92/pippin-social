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
              <FadeIn as="li" key={service.title} delayMs={i * 100}>
                <Icon className="h-9 w-9 text-softblack" />
                <h3 className="mt-6 font-sans text-xs tracking-widest-plus text-softblack uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[22ch] font-sans text-sm leading-relaxed text-softblack/80">
                  {service.body}
                </p>
              </FadeIn>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
