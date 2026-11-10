import { defineField, defineType } from "sanity";

export default defineType({
  name: "consulta",
  title: "Consulta",
  type: "document",
  fields: [
    defineField({
      name: "tipo",
      title: "Tipo de formulario",
      type: "string",
      options: {
        list: [
          { title: "Contacto", value: "contacto" },
          { title: "Tasación", value: "tasacion" },
          { title: "Captación", value: "captacion" },
          { title: "Propuesta de consorcio", value: "consorcio" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "estado",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "Nuevo", value: "nuevo" },
          { title: "Contactado", value: "contactado" },
          { title: "Descartado", value: "descartado" },
        ],
        layout: "radio",
      },
      initialValue: "nuevo",
    }),
    defineField({
      name: "area",
      title: "Área",
      type: "string",
      options: {
        list: [
          { title: "Inmobiliaria", value: "Inmobiliaria" },
          { title: "Contable", value: "Contable" },
          { title: "Jurídica", value: "Jurídica" },
        ],
      },
    }),
    defineField({
      name: "motivo",
      title: "¿En qué te podemos ayudar?",
      type: "string",
    }),
    defineField({ name: "nombre", title: "Nombre y apellido", type: "string" }),
    defineField({ name: "telefono", title: "Teléfono", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "direccion",
      title: "Dirección de la propiedad",
      type: "string",
      description: "Solo aplica a Tasación y Captación",
    }),
    defineField({
      name: "tipoPropiedad",
      title: "Tipo de propiedad",
      type: "string",
      description: "Solo aplica a Tasación",
    }),
    defineField({
      name: "operacion",
      title: "Operación (vender/alquilar)",
      type: "string",
      description: "Solo aplica a Captación",
    }),
    defineField({
      name: "mensaje",
      title: "Mensaje / comentarios",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "origen",
      title: "Origen (UTM)",
      type: "string",
      description: "Ej: instagram, google-ads, whatsapp-status",
    }),
  ],
  orderings: [
    {
      title: "Más recientes primero",
      name: "recientes",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "nombre", subtitle: "tipo", estado: "estado", area: "area" },
    prepare({ title, subtitle, estado, area }) {
      return {
        title: title || "(sin nombre)",
        subtitle: `${area ? `[${area}] ` : ""}${subtitle}${estado ? ` · ${estado}` : ""}`,
      };
    },
  },
});
