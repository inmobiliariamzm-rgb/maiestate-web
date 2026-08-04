import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../../sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Token de solo lectura (rol "viewer") — server-only, nunca se expone
  // al navegador. `useCdn` en false porque el sitio ya controla el
  // cacheo vía `next: { revalidate }` en cada fetch.
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

// Las URLs de imagen se resuelven directo desde `asset->url` en las
// queries (ver src/lib/sanity/queries.ts) + parámetros de la CDN de
// Sanity (w/h/fit) en src/components/PropertyImage.tsx — no hace falta
// el builder de @sanity/image-url para este caso de uso.
