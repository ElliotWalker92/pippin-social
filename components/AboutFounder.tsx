import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { aboutPage } from "@/lib/content";

export function AboutFounder() {
  const { founder } = aboutPage;

  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <ImagePlaceholder
            label={founder.imageLabel}
            ratio="aspect-[4/5]"
            className="w-full"
          />
        </FadeIn>

        <FadeIn delayMs={150}>
          <Eyebrow className="mb-6">{founder.eyebrow}</Eyebrow>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {founder.name}
          </h2>
          <p className="mt-2 font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase">
            {founder.role}
          </p>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal">
            {founder.bio}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
