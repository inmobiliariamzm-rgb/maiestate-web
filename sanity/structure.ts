import type { StructureResolver } from "sanity/structure";
import { allServiceCards, SERVICIO_ID_PREFIX } from "../src/lib/data/services";

export const SERVICIO_TEMPLATE = "servicio-original";

const IDS_ORIGINALES = allServiceCards.map((c) => SERVICIO_ID_PREFIX + c.clave);

/**
 * Menú del panel. Los servicios originales del sitio aparecen siempre (con
 * su texto actual precargado), aunque todavía no se hayan editado nunca.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Página de inicio")
        .id("paginaInicio")
        .child(
          S.document()
            .schemaType("paginaInicio")
            .documentId("paginaInicio")
            .title("Página de inicio")
        ),
      S.listItem()
        .title("Servicios")
        .id("servicios")
        .child(
          S.list()
            .title("Servicios")
            .items([
              S.listItem()
                .title("Áreas (títulos y descripciones)")
                .id("seccionesServicios")
                .child(
                  S.document()
                    .schemaType("seccionesServicios")
                    .documentId("seccionesServicios")
                    .title("Áreas de servicios")
                ),
              S.divider(),
              ...allServiceCards.map((card) =>
                S.listItem()
                  .title(card.titulo)
                  .id(SERVICIO_ID_PREFIX + card.clave)
                  .child(
                    S.document()
                      .schemaType("servicio")
                      .documentId(SERVICIO_ID_PREFIX + card.clave)
                      .initialValueTemplate(SERVICIO_TEMPLATE, { clave: card.clave })
                      .title(card.titulo)
                  )
              ),
              S.divider(),
              S.listItem()
                .title("Servicios nuevos")
                .id("serviciosNuevos")
                .child(
                  S.documentList()
                    .title("Servicios nuevos")
                    .schemaType("servicio")
                    .filter('_type == "servicio" && !(_id in $ids)')
                    .params({ ids: IDS_ORIGINALES })
                ),
            ])
        ),
      S.divider(),
      S.documentTypeListItem("property").title("Propiedades"),
      S.documentTypeListItem("testimonial").title("Testimonios"),
      S.documentTypeListItem("consulta").title("Consultas recibidas"),
    ]);
