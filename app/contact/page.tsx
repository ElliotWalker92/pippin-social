import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — pippin",
  description:
    "Tell us a little about your business and we'll be in touch within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
          <Container className="mx-auto max-w-2xl">
            <FadeIn>
              <Eyebrow className="mb-6">Get in touch</Eyebrow>
              <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl">
                Let&apos;s talk.
              </h1>
              <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-charcoal">
                Tell us a little about your business and we&apos;ll be in
                touch within one working day.
              </p>
            </FadeIn>

            <FadeIn delayMs={150} className="mt-14">
              <ContactForm />
            </FadeIn>

            <p className="mt-12 border-t border-stone pt-8 font-sans text-sm text-charcoal/70">
              Prefer email? Reach us at{" "}
              <Link
                href={`mailto:${brand.email}`}
                className="underline decoration-stone underline-offset-4 hover:text-softblack"
              >
                {brand.email}
              </Link>
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
