import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonio",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relacion",
      title: "Relación con MAIESTATE",
      type: "string",
      description: "Ej: Propietario, Comprador, Inquilino",
    }),
    defineField({
      name: "texto",
      title: "Testimonio",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto (opcional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publicado",
      title: "Publicado en el sitio",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "nombre", subtitle: "relacion" },
  },
});
