export const site = {
  name: "MAIESTATE",
  legalName: "MAIESTATE Inmobiliaria",
  tagline: "Tu legado, nuestra prioridad",
  url: "https://www.maiestate.com.ar",
  address: {
    street: "Sarmiento 630",
    city: "Maipú",
    province: "Mendoza",
    country: "Argentina",
    full: "Sarmiento 630, Maipú, Mendoza, Argentina",
  },
  contact: {
    // Email real provisto por el cliente.
    email: "inmobiliariamzm@gmail.com",
    // Placeholder: reemplazar por el número real de WhatsApp/teléfono de MAIESTATE.
    phoneDisplay: "+54 9 261 XXX-XXXX",
    whatsappNumber: "5492610000000",
  },
  responsableTecnico: {
    nombre: "Raúl Alejandro Maidana",
    matricula: "CCPIM Mat. 1378",
  },
  social: {
    instagram: "https://instagram.com/maiestate",
    facebook: "https://facebook.com/maiestate",
  },
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola MAIESTATE, quisiera más información.";
