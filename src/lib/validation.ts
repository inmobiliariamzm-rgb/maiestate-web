import { z } from "zod";

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
  mensaje: z.string().trim().min(10, "Contanos un poco más (mínimo 10 caracteres)."),
  propiedad: z.string().optional(),
});

export const tasacionSchema = z.object({
  nombre,
  telefono,
  email,
  direccion: z.string().trim().min(5, "Ingresá la dirección de la propiedad."),
  tipoPropiedad: z.string().trim().min(1, "Seleccioná el tipo de propiedad."),
  comentarios: z.string().trim().optional(),
});

export const captacionSchema = z.object({
  nombre,
  telefono,
  email,
  direccion: z.string().trim().min(5, "Ingresá la dirección de la propiedad."),
  operacion: z.string().trim().min(1, "Indicá si querés vender o alquilar."),
  comentarios: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type TasacionFormValues = z.infer<typeof tasacionSchema>;
export type CaptacionFormValues = z.infer<typeof captacionSchema>;
