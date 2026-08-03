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

// Route segments render dynamically (see `export const dynamic`), so every
// request should see Sanity's current published state — no caching layer
// on top that could serve a stale (e.g. since-unpublished) result.
const cacheOptions = { cache: "no-store" as const };

export async function getUpdates(): Promise<UpdateListItem[]> {
  try {
    return await sanityClient.fetch(listQuery, {}, cacheOptions);
  } catch (error) {
    console.error("Failed to fetch updates from Sanity:", error);
    return [];
  }
}

export async function getUpdateBySlug(
  slug: string
): Promise<UpdateDetail | null> {
  try {
    return await sanityClient.fetch(detailQuery, { slug }, cacheOptions);
  } catch (error) {
    console.error(`Failed to fetch update "${slug}" from Sanity:`, error);
    return null;
  }
}
