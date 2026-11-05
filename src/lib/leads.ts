import { writeClient } from "@/lib/sanity/writeClient";
import type { Area } from "@/lib/data/services";

export interface LeadPayload {
  tipo: "contacto" | "tasacion" | "captacion" | "consorcio";
  /** Etiqueta de área del brief v2: Inmobiliario | Contable | Conjunto. */
  area?: Area;
  /** Opción elegida en "¿En qué te podemos ayudar?". */
  motivo?: string;
  nombre: string;
  telefono: string;
  email?: string;
  direccion?: string;
  tipoPropiedad?: string;
  operacion?: string;
  mensaje?: string;
  origen?: string;
}

// Guarda la consulta como documento en Sanity para que quede visible y
// filtrable desde /studio. Si falla (ej. token mal configurado), no
// interrumpe el flujo del formulario — sendNotification() ya deja un
// rastro en los logs igual.
export async function saveLead(payload: LeadPayload) {
  try {
    await writeClient.create({
      _type: "consulta",
      estado: "nuevo",
      ...payload,
    });
  } catch (error) {
    console.error("[MAIESTATE] No se pudo guardar la consulta en Sanity:", error);
  }
}
