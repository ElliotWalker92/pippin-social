import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { formatDate } from "@/lib/format-date";
import { updatesPage } from "@/lib/content";
import { getUpdates } from "@/lib/sanity/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: updatesPage.meta.title,
  description: updatesPage.meta.description,
  openGraph: {
    title: updatesPage.meta.title,
    description: updatesPage.meta.description,
  },
};

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <Container className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl leading-[1.1] font-light text-softblack sm:text-6xl">
                {updatesPage.heading}
              </h1>
              <p className="mt-6 font-sans text-lg leading-relaxed text-charcoal">
                {updatesPage.subline}
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="border-t border-stone pb-24 lg:pb-32">
          <Container className="mx-auto max-w-3xl">
            {updates.length === 0 ? (
              <FadeIn className="py-20 text-center">
                <p className="font-sans text-base text-charcoal/70">
                  {updatesPage.emptyState}
                </p>
              </FadeIn>
            ) : (
              <ul className="divide-y divide-stone">
                {updates.map((update, i) => (
                  <FadeIn
                    as="li"
                    key={update._id}
                    delayMs={i * 60}
                    className="py-12"
                  >
                    <p className="font-sans text-xs tracking-widest-plus text-charcoal/60 uppercase">
                      {formatDate(update.publishedAt)}
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-light text-softblack sm:text-4xl">
                      {update.title}
                    </h2>
                    <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-charcoal">
                      {update.excerpt}
                    </p>
                    <Link
                      href={`/updates/${update.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-sans text-xs tracking-widest-plus text-softblack uppercase underline decoration-stone underline-offset-4 hover:decoration-softblack"
                    >
                      {updatesPage.readMore}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </FadeIn>
                ))}
              </ul>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
