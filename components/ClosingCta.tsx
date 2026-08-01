import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { closingCta } from "@/lib/content";

export function ClosingCta() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <FadeIn className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {closingCta.headline}
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-charcoal">
            {closingCta.body}
          </p>
          <Link
            href={closingCta.cta.href}
            className="mt-10 inline-block border border-sage bg-sage px-8 py-4 font-sans text-xs tracking-widest-plus text-softblack uppercase transition-colors hover:bg-transparent"
          >
            {closingCta.cta.label}
          </Link>
          <p className="mt-6 font-sans text-sm text-charcoal/70">
            <Link
              href={`mailto:${closingCta.email}`}
              className="underline decoration-stone underline-offset-4 hover:text-softblack"
            >
              {closingCta.email}
            </Link>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
