import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity/image";
import type { UpdateImage } from "@/lib/sanity/queries";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 font-sans text-base leading-relaxed text-charcoal">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 font-serif text-3xl font-light text-softblack">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 font-serif text-2xl font-light text-softblack">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-sage pl-6 font-serif text-xl leading-snug font-light text-charcoal italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-softblack">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href);
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="underline decoration-stone underline-offset-4 hover:text-softblack"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const image = value as UpdateImage;
      if (!image?.asset?.url) return null;
      const { width, height } = image.asset.metadata.dimensions;
      return (
        <span className="my-10 block">
          <Image
            src={urlForImage(image).url()}
            alt={image.alt ?? ""}
            width={width}
            height={height}
            sizes="(min-width: 768px) 680px, 100vw"
            className="h-auto w-full border border-stone"
          />
        </span>
      );
    },
  },
};

export function PortableTextBody({ value }: { value: TypedObject[] }) {
  return <PortableText value={value} components={components} />;
}
