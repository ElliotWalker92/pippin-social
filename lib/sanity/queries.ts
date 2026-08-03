import type { TypedObject } from "@portabletext/types";
import { sanityClient } from "@/lib/sanity/client";

export type UpdateImage = {
  asset: {
    url: string;
    metadata: { dimensions: { width: number; height: number } };
  };
  alt?: string;
};

export type UpdateListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
};

export type UpdateDetail = UpdateListItem & {
  coverImage?: UpdateImage;
  body: TypedObject[];
};

const imageProjection = `{
  ...,
  asset->{ url, metadata { dimensions } }
}`;

const listQuery = `*[_type == "update" && defined(slug.current) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt
  }`;

const detailQuery = `*[_type == "update" && slug.current == $slug && publishedAt <= now()][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  coverImage ${imageProjection},
  body[] {
    ...,
    _type == "image" => ${imageProjection}
  }
}`;

// These routes are force-dynamic: every request must reflect Sanity's
// current published state, so unpublishing takes effect immediately.
//
// `cache: "no-store"` alone wasn't enough on Cloudflare Workers — the
// OpenNext adapter layers a persistent Cache API store underneath, which
// survives redeploys and kept serving an unpublished post. Sending a
// unique param per request makes the URL unmatchable in any cache, so the
// response can only come from Sanity itself.
const cacheOptions = { cache: "no-store" as const };

function freshParams() {
  return { cacheBust: `${Date.now()}-${Math.random().toString(36).slice(2)}` };
}

export async function getUpdates(): Promise<UpdateListItem[]> {
  try {
    return await sanityClient.fetch(listQuery, freshParams(), cacheOptions);
  } catch (error) {
    console.error("Failed to fetch updates from Sanity:", error);
    return [];
  }
}

export async function getUpdateBySlug(
  slug: string
): Promise<UpdateDetail | null> {
  try {
    return await sanityClient.fetch(
      detailQuery,
      { slug, ...freshParams() },
      cacheOptions
    );
  } catch (error) {
    console.error(`Failed to fetch update "${slug}" from Sanity:`, error);
    return null;
  }
}
