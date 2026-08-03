import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/sanity/image-loader.ts",
  },
};

export default nextConfig;

// Enables `next dev` to run against local Cloudflare bindings/runtime.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
