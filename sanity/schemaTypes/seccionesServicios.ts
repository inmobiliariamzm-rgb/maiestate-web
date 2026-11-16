import { defineField, defineType } from "sanity";
import { AREAS } from "../../src/lib/data/services";
import { AREA_CAMPO, SECCIONES_SERVICIOS } from "../../src/lib/data/contenido";

const initialValue = {
  etiqueta: SECCIONES_SERVICIOS.etiqueta,
  titulo: SECCIONES_SERVICIOS.titulo,
  descripcion: SECCIONES_SERVICIOS.descripcion,
  ...Object.fromEntries(
    AREAS.map((a) => [AREA_CAMPO[a], SECCIONES_SERVICIOS.areas[a]])
  ),
};

export default defineType({
  name: "seccionesServicios",
  title: "Áreas de servicios",
  type: "document",
  initialValue,
  fields: [
    defineField({
      name: "etiqueta",
      title: "Página Servicios: etiqueta",
      type: "string",
    }),
    defineField({
      name: "titulo",
      title: "Página Servicios: título",
      type: "string",
    }),
    defineField({
      name: "descripcion",
      title: "Página Servicios: descripción",
      type: "text",
      rows: 3,
    }),
    ...AREAS.map((area) =>
      defineField({
        name: AREA_CAMPO[area],
        title: `Área ${area}`,
        type: "object",
        options: { collapsible: true, collapsed: false },
        fields: [
          defineField({
            name: "descripcion",
            title: "Descripción (debajo del nombre del área)",
            type: "text",
            rows: 2,
          }),
          defineField({
            name: "textoSinServicios",
            title: "Texto cuando el área no tiene servicios",
            type: "string",
          }),
        ],
      })
    ),
  ],
  preview: { prepare: () => ({ title: "Áreas de servicios" }) },
});
