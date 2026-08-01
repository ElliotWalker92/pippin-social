import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
          <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl lg:text-7xl">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-8 max-w-md space-y-4">
            {hero.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-base leading-relaxed text-charcoal"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href={hero.cta.href}
            className="mt-10 inline-block border border-sage bg-sage px-8 py-4 font-sans text-xs tracking-widest-plus text-softblack uppercase transition-colors hover:bg-transparent"
          >
            {hero.cta.label}
          </Link>
        </FadeIn>

        <FadeIn delayMs={150}>
          <ImagePlaceholder
            label="Hero image — portrait lifestyle / brand photography"
            ratio="aspect-[4/5]"
            className="w-full"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
