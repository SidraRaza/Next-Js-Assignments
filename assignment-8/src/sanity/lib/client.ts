import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-12-31",
  useCdn: false,
});

export const fetchProducts = async () => {
  const query = `*[_type == "product"]`;
  const products = await sanityClient.fetch(query);
  return products;
};
