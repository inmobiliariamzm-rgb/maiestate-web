export const site = {
  name: "MAIESTATE",
  legalName: "MAIESTATE Inmobiliaria",
  tagline: "Tu patrimonio, nuestra prioridad",
  url: "https://www.maiestate.com.ar",
  description:
    "Inmobiliaria y Departamento Contable en Maipú, Mendoza: tasaciones, compraventa, alquileres, consorcios, fondos de comercio, inversiones, sucesiones, impuestos y contabilidad.",
  address: {
    street: "Ozamis Sur y 25 de Mayo",
    city: "Maipú",
    province: "Mendoza",
    country: "Argentina",
    full: "Ozamis Sur y 25 de Mayo, Maipú, Mendoza",
  },
  contact: {
    email: "maiestate.mza@gmail.com",
    phoneDisplay: "261 569-2038",
    whatsappNumber: "5492615692038",
  },
  responsableTecnico: {
    nombre: "R. Alejandro Maidana",
    titulo: "Corredor Público Inmobiliario",
    matricula: "CCPIM Mat. 1378",
  },
  social: {
    instagramHandle: "@maiestate.mendoza",
    instagram: "https://instagram.com/maiestate.mendoza",
  },
} as const;

/**
 * Contador a cargo del Departamento Contable.
 * Por ahora no se publica (decisión del cliente): con `null` el sitio no
 * muestra nombre, matrícula ni foto, y el schema AccountingService sale sin
 * `employee`. Para mostrarlo, reemplazar por:
 *   { nombre: "Nombre Apellido", matricula: "Mat. XXXX", foto?: "/ruta.jpg" }
 */
export const contador: { nombre: string; matricula: string } | null = null;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola MAIESTATE, quisiera más información.";

export const WHATSAPP_CONTABLE_MESSAGE =
  "Hola, quiero hacer una consulta al Departamento Contable";
