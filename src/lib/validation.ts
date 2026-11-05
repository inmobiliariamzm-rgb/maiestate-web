import { z } from "zod";
import { MOTIVO_VALUES } from "@/lib/data/services";

const nombre = z.string().trim().min(2, "Ingresá tu nombre completo.");
const telefono = z.string().trim().min(6, "Ingresá un teléfono de contacto válido.");
const email = z
  .string()
  .trim()
  .email("Ingresá un email válido.")
  .optional()
  .or(z.literal(""));

export const contactSchema = z.object({
  nombre,
  telefono,
  email,
  motivo: z.enum(MOTIVO_VALUES, "Elegí en qué te podemos ayudar."),
  mensaje: z.string().trim().min(10, "Contanos un poco más (mínimo 10 caracteres)."),
  propiedad: z.string().optional(),
  origen: z.string().trim().optional(),
});

export const tasacionSchema = z.object({
  nombre,
  telefono,
  email,
  direccion: z.string().trim().min(5, "Ingresá la dirección de la propiedad."),
  tipoPropiedad: z.string().trim().min(1, "Seleccioná el tipo de propiedad."),
  comentarios: z.string().trim().optional(),
  // De dónde vino el prospecto (ej. "instagram", "google-ads") cuando el
  // formulario se completa desde la landing de captación (/tasacion).
  origen: z.string().trim().optional(),
});

export const captacionSchema = z.object({
  nombre,
  telefono,
  email,
  direccion: z.string().trim().min(5, "Ingresá la dirección de la propiedad."),
  operacion: z.string().trim().min(1, "Indicá si querés vender o alquilar."),
  comentarios: z.string().trim().optional(),
  origen: z.string().trim().optional(),
});

export const consorcioSchema = z.object({
  consorcio: z.string().trim().min(2, "Ingresá el nombre del consorcio."),
  direccion: z.string().trim().min(5, "Ingresá la dirección del consorcio."),
  unidades: z.coerce
    .number("Indicá la cantidad de unidades.")
    .int("Indicá un número entero.")
    .min(1, "Indicá la cantidad de unidades."),
  nombre,
  telefono,
  origen: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type TasacionFormValues = z.infer<typeof tasacionSchema>;
export type CaptacionFormValues = z.infer<typeof captacionSchema>;
export type ConsorcioFormValues = z.infer<typeof consorcioSchema>;
