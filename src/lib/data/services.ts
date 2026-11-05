export type Area = "Inmobiliario" | "Contable" | "Conjunto";

export const AREAS: Area[] = ["Inmobiliario", "Contable", "Conjunto"];

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
  /** Bloque extra del Departamento Contable para servicios "Conjunto". */
  bloqueContable?: { titulo: string; texto: string };
}

export const services: Service[] = [
  {
    slug: "tasaciones",
    titulo: "Tasaciones",
    resumen:
      "Tasadores profesionales y matriculados, con más de 15 años de experiencia, para conocer el valor real de tu propiedad.",
    area: "Inmobiliario",
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
      "Acompañamiento integral en la compra o venta de tu propiedad, desde la oferta hasta la escritura, sabiendo de antemano el costo real de la operación.",
    area: "Conjunto",
    icono: "compraventa",
    contenido: [
      "Búsqueda de propiedades según el perfil del comprador o de compradores calificados para tu propiedad.",
      "Negociación de precio y condiciones, redacción de reserva y boleto de compraventa.",
      "Seguimiento de la operación hasta la escrituración, coordinando con escribanía.",
    ],
    cta: "Quiero comprar o vender",
    motivo: "compraventa",
    bloqueContable: {
      titulo: "Costo real de la operación",
      texto:
        "Antes de firmar, el Departamento Contable calcula los impuestos y gastos de comprar o vender, para que decidas con todos los números a la vista.",
    },
  },
  {
    slug: "alquileres",
    titulo: "Administración de alquileres",
    resumen:
      "Gestión integral de tu propiedad alquilada: contratos, cobros, actualizaciones, atención a inquilinos e impuestos.",
    area: "Conjunto",
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
    area: "Inmobiliario",
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
    area: "Conjunto",
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

/** Rutas de servicio con página propia (no usan la plantilla [slug]). */
export const DEDICATED_SERVICE_SLUGS = ["consorcios", "inversiones", "sucesiones"] as const;

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

export const serviceCards: ServiceCardData[] = [
  {
    titulo: "Tasaciones",
    texto:
      "Un valor profesional y fundamentado, para vender, heredar o presentar ante bancos y juzgados.",
    area: "Inmobiliario",
    href: "/servicios/tasaciones",
    icono: "tasacion",
  },
  {
    titulo: "Compraventa",
    texto: "Comprá o vendé sabiendo de antemano el costo real de la operación.",
    area: "Conjunto",
    href: "/servicios/compraventa",
    icono: "compraventa",
  },
  {
    titulo: "Administración de alquileres",
    texto:
      "Cobramos, actualizamos y declaramos tu alquiler. Vos solo recibís la renta.",
    area: "Conjunto",
    href: "/servicios/alquileres",
    icono: "administracion",
  },
  {
    titulo: "Administración de consorcios",
    texto:
      "Expensas claras, fondos ordenados y rendiciones que todos entienden.",
    area: "Conjunto",
    href: "/servicios/consorcios",
    icono: "consorcio",
  },
  {
    titulo: "Fondos de comercio",
    texto:
      "Valuamos tu negocio con números reales y lo vendemos con los papeles en orden.",
    area: "Conjunto",
    href: "/servicios/fondos-de-comercio",
    icono: "fondo-comercio",
  },
  {
    titulo: "Inversiones",
    texto:
      "Te ayudamos a elegir dónde invertir y a saber cuánto rinde y cuánto tributa.",
    area: "Conjunto",
    href: "/servicios/inversiones",
    icono: "inversion",
  },
  {
    titulo: "Sucesiones",
    texto:
      "Ordenamos la herencia y te ayudamos a decidir qué hacer con cada inmueble.",
    area: "Conjunto",
    href: "/servicios/sucesiones",
    icono: "sucesion",
  },
  {
    titulo: "Captación",
    texto:
      "¿Querés vender o alquilar? Nos ocupamos de todo, desde la tasación hasta la firma.",
    area: "Inmobiliario",
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

/* ------------------------------------------------------------------ */
/* Selector "¿En qué te podemos ayudar?" — brief v2 §12                */
/* ------------------------------------------------------------------ */

export const MOTIVOS = [
  { value: "compraventa", label: "Comprar o vender", area: "Inmobiliario" },
  { value: "tasacion", label: "Tasación", area: "Inmobiliario" },
  { value: "contable", label: "Impuestos y contabilidad", area: "Contable" },
  { value: "alquileres", label: "Alquileres", area: "Conjunto" },
  { value: "consorcios", label: "Consorcios", area: "Conjunto" },
  { value: "fondo-comercio", label: "Fondo de comercio", area: "Conjunto" },
  { value: "inversiones", label: "Inversiones", area: "Conjunto" },
  { value: "sucesion", label: "Sucesión", area: "Conjunto" },
] as const satisfies readonly { value: string; label: string; area: Area }[];

export type MotivoValue = (typeof MOTIVOS)[number]["value"];

export const MOTIVO_VALUES = MOTIVOS.map((m) => m.value) as [
  MotivoValue,
  ...MotivoValue[],
];

export function areaForMotivo(motivo: MotivoValue): Area {
  return MOTIVOS.find((m) => m.value === motivo)?.area ?? "Inmobiliario";
}

export function labelForMotivo(motivo: MotivoValue): string {
  return MOTIVOS.find((m) => m.value === motivo)?.label ?? motivo;
}
