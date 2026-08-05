import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../../sanity/env";

// Cliente separado del de lectura (src/lib/sanity/client.ts): usa un
// token con permiso de escritura (rol "editor"), server-only. Se usa
// exclusivamente para crear documentos "consulta" (leads) desde las
// Server Actions — nunca para leer/mostrar contenido público.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});
