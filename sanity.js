import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const Sanityclient = createClient({
  projectId: "m0ldygxt",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: process.env.SANITY_STUDIO_TOKEN,
});
const builder = imageUrlBuilder(Sanityclient);

export const urlFor = (source) => builder.image(source);
