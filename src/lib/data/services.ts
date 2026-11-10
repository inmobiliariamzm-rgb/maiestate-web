export type Area = "Inmobiliaria" | "Contable" | "Jurídica";

/** Secciones de servicios. Jurídica está en construcción (sin servicios aún). */
export const AREAS: Area[] = ["Inmobiliaria", "Contable", "Jurídica"];

export type IconName =
  | "tasacion"
  | "compraventa"
  | "administracion"
  | "captacion"
  | "fondo-comercio"
  | "consorcio"
  | "inversion"
  | "sucesion"
  | "impuestos"
  | "contabilidad";

/**
 * Servicios con página propia bajo /servicios/[slug] (plantilla genérica).
 * Consorcios, inversiones y sucesiones tienen página dedicada en
 * src/app/(site)/servicios/<slug>/page.tsx.
 */
export interface Service {
  slug: string;
  titulo: string;
  resumen: string;
  area: Area;
  icono: IconName;
  contenido: string[];
  cta: string;
  /** Opción preseleccionada del selector de área en el formulario. */
  motivo?: MotivoValue;
  /** Bloque extra del Departamento Contable para servicios "Inmobiliaria". */
  bloqueContable?: { titulo: string; texto: string };
}

export const services: Service[] = [
  {
    slug: "tasaciones",
    titulo: "Tasaciones",
    resumen:
      "Tasadores profesionales y matriculados, con más de 15 años de experiencia, para conocer el valor real de tu propiedad.",
    area: "Inmobiliaria",
    icono: "tasacion",
    contenido: [
      "Tasación realizada por tasadores profesionales y matriculados, con más de 15 años de experiencia, siguiendo los estándares del Tribunal de Tasaciones de la Nación.",
      "Relevamiento del inmueble, análisis de comparables de mercado en la zona y homogeneización de superficies.",
      "Informe escrito con fundamentos técnicos, útil para sucesiones, créditos hipotecarios, divisiones de condominio o toma de decisiones de venta.",
    ],
    cta: "Solicitar tasación",
    motivo: "tasacion",
  },
  {
    slug: "compraventa",
    titulo: "Compraventa",
    resumen:
      "Acompañamiento integral en la compra o venta de tu propiedad, desde la oferta hasta la escritura.",
    area: "Inmobiliaria",
    icono: "compraventa",
    contenido: [
      "Búsqueda de propiedades según el perfil del comprador o de compradores calificados para tu propiedad.",
      "Negociación de precio y condiciones, redacción de reserva y boleto de compraventa.",
      "Seguimiento de la operación hasta la escrituración, coordinando con escribanía.",
    ],
    cta: "Quiero comprar o vender",
    motivo: "compraventa",
  },
  {
    slug: "alquileres",
    titulo: "Administración de alquileres",
    resumen:
      "Gestión integral de tu propiedad alquilada: contratos, cobros, actualizaciones, atención a inquilinos e impuestos.",
    area: "Inmobiliaria",
    icono: "administracion",
    contenido: [
      "Redacción de contratos de locación conforme a la normativa vigente y actualizaciones periódicas según el índice pactado.",
      "Cobro de alquileres, liquidación y reporte mensual al propietario.",
      "Gestión de vencimientos, renovaciones, rescisiones y atención de reclamos del inquilino.",
    ],
    cta: "Quiero administrar mi propiedad",
    motivo: "alquileres",
    bloqueContable: {
      titulo: "Tu alquiler, también en regla con los impuestos",
      texto:
        "La facturación, los impuestos del locador y la declaración anual quedan a cargo del Departamento Contable. Vos solo recibís la renta.",
    },
  },
  {
    slug: "captacion",
    titulo: "Captación de propiedades",
    resumen:
      "¿Querés vender o alquilar tu propiedad? Sumala a la cartera de MAIESTATE con exclusividad y visibilidad en los principales portales.",
    area: "Inmobiliaria",
    icono: "captacion",
    contenido: [
      "Visita y relevamiento fotográfico profesional de tu propiedad.",
      "Publicación en los principales portales inmobiliarios (Zonaprop, Argenprop, MercadoLibre) con ficha técnica y descripción optimizada.",
      "Autorización de venta o alquiler con condiciones claras de exclusividad y honorarios.",
    ],
    cta: "Quiero vender o alquilar",
    motivo: "compraventa",
  },
  {
    slug: "fondos-de-comercio",
    titulo: "Fondos de comercio",
    resumen:
      "Valuamos tu negocio con números reales y lo vendemos con los papeles en orden, en Maipú y el Gran Mendoza.",
    area: "Inmobiliaria",
    icono: "fondo-comercio",
    contenido: [
      "Valuación del negocio y del valor llave, con análisis financiero e impositivo previo a la transferencia.",
      "Armado de dossier de venta y checklist de due diligence para comprador y vendedor.",
      "Gestión del proceso de transferencia conforme a la Ley 11.867, incluyendo edictos y oposición de acreedores.",
    ],
    cta: "Consultar sobre mi fondo de comercio",
    motivo: "fondo-comercio",
    bloqueContable: {
      titulo: "Los números del negocio",
      texto:
        "Antes de valuar y vender, el Departamento Contable analiza los resultados, las deudas y la situación impositiva del negocio.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

/**
 * Sucesiones queda en pausa hasta tener los textos finales (decisión del
 * cliente). Con `false`: /servicios/sucesiones responde 404 y no aparece en
 * la Home, /servicios, el footer ni el sitemap. Para activarla, completar
 * los textos de src/app/(site)/servicios/sucesiones/page.tsx y pasar a `true`.
 */
export const SUCESIONES_ACTIVA = false;

/** Rutas de servicio con página propia (no usan la plantilla [slug]). */
export const DEDICATED_SERVICE_SLUGS = [
  "consorcios",
  "inversiones",
  ...(SUCESIONES_ACTIVA ? ["sucesiones"] : []),
];

/* ------------------------------------------------------------------ */
/* Tarjetas de servicio (Home y /servicios) — brief v2 §5              */
/* ------------------------------------------------------------------ */

export interface ServiceCardData {
  titulo: string;
  texto: string;
  area: Area;
  href: string;
  icono: IconName;
}

const allServiceCards: ServiceCardData[] = [
  {
    titulo: "Tasaciones",
    texto:
      "Un valor profesional y fundamentado, para vender, heredar o presentar ante bancos y juzgados.",
    area: "Inmobiliaria",
    href: "/servicios/tasaciones",
    icono: "tasacion",
  },
  {
    titulo: "Compraventa",
    texto:
      "Te acompañamos en la compra o venta de tu propiedad, desde la oferta hasta la escritura.",
    area: "Inmobiliaria",
    href: "/servicios/compraventa",
    icono: "compraventa",
  },
  {
    titulo: "Administración de alquileres",
    texto:
      "Cobramos, actualizamos y declaramos tu alquiler. Vos solo recibís la renta.",
    area: "Inmobiliaria",
    href: "/servicios/alquileres",
    icono: "administracion",
  },
  {
    titulo: "Administración de consorcios",
    texto:
      "Expensas claras, fondos ordenados y rendiciones que todos entienden.",
    area: "Inmobiliaria",
    href: "/servicios/consorcios",
    icono: "consorcio",
  },
  {
    titulo: "Fondos de comercio",
    texto:
      "Valuamos tu negocio con números reales y lo vendemos con los papeles en orden.",
    area: "Inmobiliaria",
    href: "/servicios/fondos-de-comercio",
    icono: "fondo-comercio",
  },
  {
    titulo: "Inversiones",
    texto:
      "Te ayudamos a elegir dónde invertir y a saber cuánto rinde y cuánto tributa.",
    area: "Inmobiliaria",
    href: "/servicios/inversiones",
    icono: "inversion",
  },
  {
    titulo: "Sucesiones",
    texto:
      "Ordenamos la herencia y te ayudamos a decidir qué hacer con cada inmueble.",
    area: "Inmobiliaria",
    href: "/servicios/sucesiones",
    icono: "sucesion",
  },
  {
    titulo: "Captación",
    texto:
      "¿Querés vender o alquilar? Nos ocupamos de todo, desde la tasación hasta la firma.",
    area: "Inmobiliaria",
    href: "/servicios/captacion",
    icono: "captacion",
  },
  {
    titulo: "Monotributo e impuestos",
    texto: "Tus impuestos al día, sin vencimientos que se te pasen.",
    area: "Contable",
    href: "/contable#impuestos",
    icono: "impuestos",
  },
  {
    titulo: "Contabilidad y sueldos",
    texto:
      "Contabilidad, liquidación de sueldos y balances para tu pyme o comercio.",
    area: "Contable",
    href: "/contable#contabilidad",
    icono: "contabilidad",
  },
];

export const serviceCards = allServiceCards.filter(
  (c) => SUCESIONES_ACTIVA || c.href !== "/servicios/sucesiones"
);

/* ------------------------------------------------------------------ */
/* Selector "¿En qué te podemos ayudar?" — brief v2 §12                */
/* ------------------------------------------------------------------ */

export const MOTIVOS = [
  { value: "compraventa", label: "Comprar o vender", area: "Inmobiliaria" },
  { value: "tasacion", label: "Tasación", area: "Inmobiliaria" },
  { value: "contable", label: "Impuestos y contabilidad", area: "Contable" },
  { value: "alquileres", label: "Alquileres", area: "Inmobiliaria" },
  { value: "consorcios", label: "Consorcios", area: "Inmobiliaria" },
  { value: "fondo-comercio", label: "Fondo de comercio", area: "Inmobiliaria" },
  { value: "inversiones", label: "Inversiones", area: "Inmobiliaria" },
  { value: "sucesion", label: "Sucesión", area: "Inmobiliaria" },
] as const satisfies readonly { value: string; label: string; area: Area }[];

export type MotivoValue = (typeof MOTIVOS)[number]["value"];

export const MOTIVO_VALUES = MOTIVOS.map((m) => m.value) as [
  MotivoValue,
  ...MotivoValue[],
];

export function areaForMotivo(motivo: MotivoValue): Area {
  return MOTIVOS.find((m) => m.value === motivo)?.area ?? "Inmobiliaria";
}

export function labelForMotivo(motivo: MotivoValue): string {
  return MOTIVOS.find((m) => m.value === motivo)?.label ?? motivo;
}
