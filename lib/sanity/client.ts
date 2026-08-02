import { createClient } from "@sanity/client";

const projectId = "uez78jeb";
const dataset = "production";
const apiVersion = "2025-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});
