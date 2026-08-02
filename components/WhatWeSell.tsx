import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { partnershipPage } from "@/lib/content";

export function WhatWeSell() {
  const { whatWeSell } = partnershipPage;

  return (
    <section className="border-t border-stone py-28 lg:py-40">
      <Container className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
            {whatWeSell.heading}
          </h2>
        </FadeIn>

        <FadeIn delayMs={150} className="mt-16">
          <p className="font-serif text-2xl leading-snug font-light text-charcoal/60 sm:text-3xl">
            {whatWeSell.not}
          </p>
          <p className="mt-8 font-serif text-3xl leading-snug font-light text-softblack sm:text-4xl">
            {whatWeSell.sell}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
