import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { about } from "@/lib/content";

export function AboutSplit() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="order-2 lg:order-1">
          <ImagePlaceholder
            label="About image — team at work"
            ratio="aspect-[4/5]"
            className="w-full"
          />
        </FadeIn>

        <FadeIn className="order-1 lg:order-2" delayMs={150}>
          <Eyebrow className="mb-6">{about.eyebrow}</Eyebrow>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {about.headline}
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal">
            {about.body}
          </p>
          <Link
            href={about.link.href}
            className="mt-8 inline-flex items-center gap-2 border-b border-softblack pb-1 font-sans text-xs tracking-widest-plus text-softblack uppercase transition-colors hover:border-sage hover:text-sage"
          >
            {about.link.label}
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
