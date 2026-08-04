export type Operacion = "venta" | "alquiler";

export type TipoPropiedad =
  | "departamento"
  | "casa"
  | "lote"
  | "local-comercial"
  | "quinta";

export interface PropertyImage {
  alt?: string;
  asset?: { url: string } | null;
}

export interface Property {
  id: string;
  slug: string;
  operacion: Operacion;
  tipo: TipoPropiedad;
  zona: string;
  titulo: string;
  direccion: string;
  precio: number;
  moneda: "USD" | "ARS";
  ambientes: number;
  dormitorios: number;
  banos: number;
  superficieCubierta: number;
  superficieTotal: number;
  descripcion: string;
  caracteristicas: string[];
  destacada: boolean;
  imagenes: PropertyImage[];
}

export interface PropertyFilters {
  operacion?: Operacion;
  tipo?: TipoPropiedad;
  zona?: string;
  ambientes?: number;
  precioMax?: number;
}

// Taxonomía fija de tipos de propiedad — no se carga desde el CMS, se
// mantiene en código y se refleja como lista de opciones en el schema de
// Sanity (sanity/schemaTypes/property.ts).
export const TIPOS: { value: TipoPropiedad; label: string }[] = [
  { value: "departamento", label: "Departamento" },
  { value: "casa", label: "Casa" },
  { value: "lote", label: "Lote" },
  { value: "local-comercial", label: "Local comercial" },
  { value: "quinta", label: "Quinta" },
];

// El contenido de las propiedades (listado, filtros, ficha) ahora vive en
// Sanity — ver src/lib/sanity/queries.ts para las funciones que
// reemplazan lo que antes era un array hardcodeado acá.
