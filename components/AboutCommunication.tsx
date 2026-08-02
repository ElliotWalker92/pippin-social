import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { aboutPage } from "@/lib/content";

export function AboutCommunication() {
  const { communication } = aboutPage;

  return (
    <section className="py-24 lg:py-32">
      <Container className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {communication.heading}
          </h2>
          <div className="mt-8 space-y-6">
            {communication.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-lg leading-relaxed text-charcoal"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
