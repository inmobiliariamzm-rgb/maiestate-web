import { defineField, defineType } from "sanity";

export const TIPO_OPTIONS = [
  { title: "Departamento", value: "departamento" },
  { title: "Casa", value: "casa" },
  { title: "Lote", value: "lote" },
  { title: "Local comercial", value: "local-comercial" },
  { title: "Quinta", value: "quinta" },
];

export default defineType({
  name: "property",
  title: "Propiedad",
  type: "document",
  groups: [
    { name: "principal", title: "Principal", default: true },
    { name: "detalles", title: "Detalles técnicos" },
    { name: "media", title: "Fotos" },
  ],
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      group: "principal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "principal",
      options: { source: "titulo", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "operacion",
      title: "Operación",
      type: "string",
      group: "principal",
      options: {
        list: [
          { title: "Venta", value: "venta" },
          { title: "Alquiler", value: "alquiler" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tipo",
      title: "Tipo de propiedad",
      type: "string",
      group: "principal",
      options: { list: TIPO_OPTIONS },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "zona",
      title: "Zona / Barrio",
      type: "string",
      group: "principal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "direccion",
      title: "Dirección",
      type: "string",
      group: "principal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "precio",
      title: "Precio",
      type: "number",
      group: "principal",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "moneda",
      title: "Moneda",
      type: "string",
      group: "principal",
      options: {
        list: [
          { title: "USD", value: "USD" },
          { title: "ARS", value: "ARS" },
        ],
        layout: "radio",
      },
      initialValue: "USD",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      rows: 5,
      group: "principal",
    }),
    defineField({
      name: "destacada",
      title: "Destacada en Home",
      type: "boolean",
      group: "principal",
      initialValue: false,
    }),

    defineField({
      name: "ambientes",
      title: "Ambientes",
      type: "number",
      group: "detalles",
      initialValue: 0,
    }),
    defineField({
      name: "dormitorios",
      title: "Dormitorios",
      type: "number",
      group: "detalles",
      initialValue: 0,
    }),
    defineField({
      name: "banos",
      title: "Baños",
      type: "number",
      group: "detalles",
      initialValue: 0,
    }),
    defineField({
      name: "superficieCubierta",
      title: "Superficie cubierta (m²)",
      type: "number",
      group: "detalles",
      initialValue: 0,
    }),
    defineField({
      name: "superficieTotal",
      title: "Superficie total (m²)",
      type: "number",
      group: "detalles",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caracteristicas",
      title: "Características",
      type: "array",
      of: [{ type: "string" }],
      group: "detalles",
      options: { layout: "tags" },
    }),

    defineField({
      name: "imagenes",
      title: "Fotos",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "titulo",
      subtitle: "zona",
      media: "imagenes.0",
    },
  },
});
