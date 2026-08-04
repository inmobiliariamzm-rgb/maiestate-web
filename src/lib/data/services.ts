export interface Service {
  slug: string;
  titulo: string;
  resumen: string;
  icono: "tasacion" | "compraventa" | "administracion" | "captacion" | "fondo-comercio";
  contenido: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "tasaciones",
    titulo: "Tasaciones",
    resumen:
      "Informes de tasación profesionales, respaldados por la matrícula CCPIM, para conocer el valor real de tu propiedad.",
    icono: "tasacion",
    contenido: [
      "Tasación realizada por un Corredor Público Inmobiliario matriculado (CCPIM Mat. 1378), siguiendo los estándares del Tribunal de Tasaciones de la Nación.",
      "Relevamiento del inmueble, análisis de comparables de mercado en la zona y homogeneización de superficies.",
      "Informe escrito con fundamentos técnicos, útil para sucesiones, créditos hipotecarios, divisiones de condominio o toma de decisiones de venta.",
    ],
    cta: "Solicitar tasación",
  },
  {
    slug: "compraventa",
    titulo: "Compraventa",
    resumen:
      "Acompañamiento integral en la compra o venta de tu propiedad, desde la oferta hasta la escritura.",
    icono: "compraventa",
    contenido: [
      "Búsqueda de propiedades según el perfil del comprador o de compradores calificados para tu propiedad.",
      "Negociación de precio y condiciones, redacción de reserva y boleto de compraventa.",
      "Seguimiento de la operación hasta la escrituración, coordinando con escribanía.",
    ],
    cta: "Quiero comprar o vender",
  },
  {
    slug: "administracion",
    titulo: "Administración de Alquileres",
    resumen:
      "Gestión integral de tu propiedad alquilada: contratos, cobros, actualizaciones y atención a inquilinos.",
    icono: "administracion",
    contenido: [
      "Redacción de contratos de locación conforme a la Ley 27.551 y actualizaciones periódicas según índice ICL del BCRA.",
      "Cobro de alquileres, liquidación y reporte mensual al propietario.",
      "Gestión de vencimientos, renovaciones, rescisiones y atención de reclamos del inquilino.",
    ],
    cta: "Quiero administrar mi propiedad",
  },
  {
    slug: "captacion",
    titulo: "Captación de Propiedades",
    resumen:
      "¿Querés vender o alquilar tu propiedad? Sumala a la cartera de MAIESTATE con exclusividad y visibilidad en los principales portales.",
    icono: "captacion",
    contenido: [
      "Visita y relevamiento fotográfico profesional de tu propiedad.",
      "Publicación en los principales portales inmobiliarios (Zonaprop, Argenprop, MercadoLibre) con ficha técnica y descripción optimizada.",
      "Autorización de venta o alquiler con condiciones claras de exclusividad y honorarios.",
    ],
    cta: "Quiero vender o alquilar",
  },
  {
    slug: "fondos-de-comercio",
    titulo: "Fondos de Comercio",
    resumen:
      "Asesoramiento especializado en la compra, venta y transferencia de fondos de comercio en Mendoza.",
    icono: "fondo-comercio",
    contenido: [
      "Valuación del negocio y del valor llave, análisis financiero e impositivo previo a la transferencia.",
      "Armado de dossier de venta y checklist de due diligence para comprador y vendedor.",
      "Gestión del proceso de transferencia conforme a la Ley 11.867, incluyendo edictos y oposición de acreedores.",
    ],
    cta: "Consultar sobre mi fondo de comercio",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
