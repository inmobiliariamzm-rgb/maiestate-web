import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, SINGLETONS } from "./sanity/schemaTypes";
import { structure, SERVICIO_TEMPLATE } from "./sanity/structure";
import { servicioPorDefecto } from "./src/lib/data/services";

export default defineConfig({
  name: "maiestate",
  title: "MAIESTATE — Panel de contenido",

  projectId,
  dataset,
  basePath: "/studio",

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: SERVICIO_TEMPLATE,
        title: "Servicio original",
        schemaType: "servicio",
        parameters: [{ name: "clave", type: "string" }],
        value: (params: { clave: string }) => servicioPorDefecto(params.clave),
      },
    ],
  },

  document: {
    // Las páginas únicas no se pueden borrar ni duplicar.
    actions: (prev, { schemaType }) =>
      SINGLETONS.includes(schemaType)
        ? prev.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : prev,
    // "Crear nuevo" no ofrece las páginas únicas (inicio, áreas) ni la
    // plantilla interna de los servicios originales.
    newDocumentOptions: (prev) =>
      prev.filter(
        (item) =>
          item.templateId !== SERVICIO_TEMPLATE && !SINGLETONS.includes(item.templateId)
      ),
  },

  plugins: [
    structureTool({ structure, title: "Contenido" }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
