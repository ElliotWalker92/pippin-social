import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/ClosingCta";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PortableTextBody } from "@/components/PortableTextBody";
import { formatDate } from "@/lib/format-date";
import { updatesPage } from "@/lib/content";
import { sanityImageLoader, urlForImage } from "@/lib/sanity/image";
import { getUpdateBySlug } from "@/lib/sanity/queries";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getUpdateBySlug(slug);

  if (!post) {
    return { title: "Update not found — pippin" };
  }

  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title: `${post.title} — pippin`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function UpdatePage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getUpdateBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main>
        <article className="pt-32 pb-24 lg:pt-40 lg:pb-32">
          <Container>
            <div className="mx-auto max-w-prose">
              <FadeIn>
                <Link
                  href="/updates"
                  className="font-sans text-xs tracking-widest-plus text-charcoal/60 uppercase hover:text-softblack"
                >
                  ← {updatesPage.backLink}
                </Link>

                <p className="mt-8 font-sans text-xs tracking-widest-plus text-charcoal/60 uppercase">
                  {formatDate(post.publishedAt)}
                </p>
                <h1 className="mt-3 font-serif text-4xl leading-[1.15] font-light text-softblack sm:text-5xl">
                  {post.title}
                </h1>
              </FadeIn>

              {post.coverImage && (
                <FadeIn delayMs={100} className="mt-10">
                  <Image
                    src={urlForImage(post.coverImage).url()}
                    loader={sanityImageLoader}
                    alt={post.coverImage.alt ?? ""}
                    width={post.coverImage.asset.metadata.dimensions.width}
                    height={post.coverImage.asset.metadata.dimensions.height}
                    sizes="(min-width: 768px) 680px, 100vw"
                    className="h-auto w-full border border-stone"
                    priority
                  />
                </FadeIn>
              )}

              <FadeIn delayMs={150} className="mt-12">
                <PortableTextBody value={post.body} />
              </FadeIn>
            </div>
          </Container>
        </article>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
