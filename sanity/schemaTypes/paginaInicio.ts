import { defineField, defineType } from "sanity";
import { PAGINA_INICIO } from "../../src/lib/data/contenido";

const texto = (name: string, title: string, group: string, rows = 3) =>
  defineField({ name, title, type: "text", rows, group });
const linea = (name: string, title: string, group: string) =>
  defineField({ name, title, type: "string", group });

export default defineType({
  name: "paginaInicio",
  title: "Página de inicio",
  type: "document",
  groups: [
    { name: "portada", title: "Portada", default: true },
    { name: "pilares", title: "Pilares" },
    { name: "servicios", title: "Servicios" },
    { name: "contable", title: "Departamento Contable" },
    { name: "porque", title: "Por qué MAIESTATE" },
    { name: "cierre", title: "Cierre" },
  ],
  // Los elementos de una lista necesitan `_key` en Sanity.
  initialValue: {
    ...PAGINA_INICIO,
    pilares: PAGINA_INICIO.pilares.map((p, i) => ({ _key: `pilar${i + 1}`, ...p })),
  } as Record<string, unknown>,
  fields: [
    linea("heroEtiqueta", "Etiqueta (arriba del título)", "portada"),
    linea("heroTitulo", "Título principal", "portada"),
    texto("heroTexto", "Texto de presentación", "portada", 4),
    defineField({
      name: "pilares",
      title: "Pilares (los cuatro destacados debajo de la portada)",
      type: "array",
      group: "pilares",
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: "object",
          name: "pilar",
          title: "Pilar",
          fields: [
            defineField({ name: "titulo", title: "Título", type: "string" }),
            defineField({ name: "texto", title: "Texto", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
    linea("serviciosEtiqueta", "Etiqueta", "servicios"),
    linea("serviciosTitulo", "Título", "servicios"),
    linea("contableEtiqueta", "Etiqueta", "contable"),
    linea("contableTitulo", "Título", "contable"),
    linea("contableTituloDestacado", "Final del título (en dorado)", "contable"),
    linea("contableSoloTitulo", "Columna 1: título", "contable"),
    texto("contableSoloTexto", "Columna 1: texto", "contable"),
    linea("contableJuntoTitulo", "Columna 2: título", "contable"),
    texto("contableJuntoTexto", "Columna 2: texto", "contable"),
    linea("contableBoton", "Texto del botón", "contable"),
    linea("porQueEtiqueta", "Etiqueta", "porque"),
    linea("porQueTitulo", "Título", "porque"),
    texto("porQueTexto", "Texto", "porque", 5),
    linea("cierreTitulo", "Título", "cierre"),
    texto("cierreTexto", "Texto", "cierre"),
  ],
  preview: { prepare: () => ({ title: "Página de inicio" }) },
});
