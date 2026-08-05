import { writeClient } from "@/lib/sanity/writeClient";

export interface LeadPayload {
  tipo: "contacto" | "tasacion" | "captacion";
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
