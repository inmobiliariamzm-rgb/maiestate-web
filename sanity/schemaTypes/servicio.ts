import { defineField, defineType } from "sanity";
import {
  AREAS,
  ICONOS,
  MOTIVOS,
  SERVICIO_ID_PREFIX,
  allServiceCards,
  tienePaginaPropia,
} from "../../src/lib/data/services";

/** Clave fija del servicio (si es uno de los originales del sitio). */
function claveOriginal(id: string | undefined) {
  const clave = (id ?? "").replace(/^drafts\./, "").replace(SERVICIO_ID_PREFIX, "");
  return allServiceCards.some((c) => c.clave === clave) ? clave : null;
}

/** Los servicios con página de diseño propio solo editan su tarjeta. */
function soloTarjeta({ document }: { document?: { _id?: string } }) {
  const clave = claveOriginal(document?._id);
  return clave !== null && tienePaginaPropia(clave);
}

export default defineType({
  name: "servicio",
  title: "Servicio",
  type: "document",
  groups: [
    { name: "tarjeta", title: "Tarjeta", default: true },
    { name: "pagina", title: "Página del servicio" },
  ],
  fields: [
    defineField({
      name: "titulo",
      title: "Nombre del servicio",
      type: "string",
      group: ["tarjeta", "pagina"],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Dirección de la página",
      type: "slug",
      group: "pagina",
      description: "Queda como maiestate.com.ar/servicios/<esto>. Se genera desde el nombre.",
      options: { source: "titulo", maxLength: 60 },
      // Los servicios originales ya tienen su dirección fija.
      hidden: ({ document }) => claveOriginal(document?._id) !== null,
      validation: (Rule) =>
        Rule.custom((value, { document }) =>
          claveOriginal(document?._id) !== null || value?.current
            ? true
            : "Generá la dirección de la página"
        ),
    }),
    defineField({
      name: "area",
      title: "Área",
      type: "string",
      group: "tarjeta",
      options: { list: AREAS.map((a) => ({ title: a, value: a })), layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icono",
      title: "Ícono",
      type: "string",
      group: "tarjeta",
      options: { list: ICONOS.map((i) => ({ title: i.label, value: i.value })) },
      initialValue: "tasacion",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "textoTarjeta",
      title: "Texto de la tarjeta",
      type: "text",
      rows: 2,
      group: "tarjeta",
      description: "Frase corta que aparece en la tarjeta del servicio (Inicio y Servicios).",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "orden",
      title: "Orden dentro del área",
      type: "number",
      group: "tarjeta",
      description: "Los números más bajos aparecen primero.",
      initialValue: 100,
    }),
    defineField({
      name: "visible",
      title: "Mostrar en el sitio",
      type: "boolean",
      group: "tarjeta",
      initialValue: true,
    }),
    defineField({
      name: "aviso",
      title: "Página con diseño propio",
      type: "string",
      group: "pagina",
      readOnly: true,
      description:
        "Este servicio tiene una página armada a medida. Desde acá se edita su tarjeta; los textos de la página por ahora se cambian desde el código del sitio.",
      hidden: (ctx) => !soloTarjeta(ctx),
    }),
    defineField({
      name: "resumen",
      title: "Resumen (debajo del título)",
      type: "text",
      rows: 3,
      group: "pagina",
      hidden: soloTarjeta,
    }),
    defineField({
      name: "contenido",
      title: "Cómo trabajamos (pasos)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      group: "pagina",
      hidden: soloTarjeta,
    }),
    defineField({
      name: "cta",
      title: "Título del formulario",
      type: "string",
      group: "pagina",
      description: "Ej: Solicitar tasación",
      hidden: soloTarjeta,
    }),
    defineField({
      name: "motivo",
      title: "Motivo preseleccionado en el formulario",
      type: "string",
      group: "pagina",
      options: { list: MOTIVOS.map((m) => ({ title: m.label, value: m.value })) },
      hidden: soloTarjeta,
    }),
    defineField({
      name: "bloqueContable",
      title: "Bloque del Departamento Contable (opcional)",
      type: "object",
      group: "pagina",
      hidden: soloTarjeta,
      fields: [
        defineField({ name: "titulo", title: "Título", type: "string" }),
        defineField({ name: "texto", title: "Texto", type: "text", rows: 3 }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "orden",
      by: [
        { field: "area", direction: "asc" },
        { field: "orden", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "titulo", subtitle: "area", visible: "visible" },
    prepare: ({ title, subtitle, visible }) => ({
      title,
      subtitle: visible === false ? `${subtitle} · oculto` : subtitle,
    }),
  },
});
