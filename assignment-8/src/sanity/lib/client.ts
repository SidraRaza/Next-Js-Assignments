import { createClient } from "next-sanity";

export const Client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-03",
  useCdn: false,
});

export const fetchProducts = async () => {
  const query = `*[_type == "product"]`;
  const products = await Client.fetch(query);
  return products;
};
