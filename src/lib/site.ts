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
  // Contador a cargo del Departamento Contable.
  // [completar] — pendiente de confirmación del cliente. No publicar a
  // producción con estos placeholders.
  contador: {
    nombre: "[completar nombre del contador]",
    matricula: "[completar matrícula]",
  },
  social: {
    instagramHandle: "@maiestate.mendoza",
    instagram: "https://instagram.com/maiestate.mendoza",
  },
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola MAIESTATE, quisiera más información.";

export const WHATSAPP_CONTABLE_MESSAGE =
  "Hola, quiero hacer una consulta al Departamento Contable";
