import Link from "next/link";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { notFoundPage } from "@/lib/content";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
          <Container className="mx-auto max-w-xl text-center">
            <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl">
              {notFoundPage.heading}
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-charcoal">
              {notFoundPage.body}
            </p>
            <Link
              href={notFoundPage.cta.href}
              className="mt-10 inline-block border border-sage bg-sage px-8 py-4 font-sans text-xs tracking-widest-plus text-softblack uppercase transition-colors hover:bg-transparent"
            >
              {notFoundPage.cta.label}
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
