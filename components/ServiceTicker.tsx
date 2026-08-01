import { Container } from "@/components/Container";
import { serviceTicker } from "@/lib/content";

export function ServiceTicker() {
  return (
    <section
      id="services"
      className="border-y border-stone py-6"
      aria-label="Our services"
    >
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {serviceTicker.map((service, i) => (
            <li key={service} className="flex items-center gap-3">
              <span className="font-sans text-xs tracking-widest-plus text-charcoal uppercase">
                {service}
              </span>
              {i < serviceTicker.length - 1 && (
                <span aria-hidden="true" className="text-sage">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
