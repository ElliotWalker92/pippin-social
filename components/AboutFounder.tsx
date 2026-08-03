import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { aboutPage } from "@/lib/content";

export function AboutFounder() {
  const { founder } = aboutPage;

  return (
    <section className="border-t border-stone py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone">
            <Image
              src="/holly-payne.jpg"
              alt={founder.imageLabel}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
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
