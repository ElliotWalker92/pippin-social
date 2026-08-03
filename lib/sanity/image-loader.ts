// Custom next/image loader, wired up in next.config.ts. Must live in its own
// file (not passed as a prop) — a loader function can't be passed directly
// from a Server Component to next/image without tripping React's "functions
// can't cross the server/client boundary" error.
//
// Sanity's CDN already resizes/transcodes on the fly via query params, so
// this just appends them instead of routing through Next's own image
// optimizer (which needs extra setup to run on Cloudflare Workers).
export default function sanityImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const url = new URL(src);
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", (quality ?? 75).toString());
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}
