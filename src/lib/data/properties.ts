export type Operacion = "venta" | "alquiler";

export type TipoPropiedad =
  | "departamento"
  | "casa"
  | "lote"
  | "local-comercial"
  | "quinta";

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
}

// Datos de ejemplo (mock) para maquetar el sitio — no representan propiedades
// reales en cartera. Reemplazar por el listado real de MAIESTATE.
export const properties: Property[] = [
  {
    id: "1",
    slug: "departamento-centro-maipu-2-ambientes",
    operacion: "alquiler",
    tipo: "departamento",
    zona: "Centro Maipú",
    titulo: "Departamento 2 ambientes a nuevo en Centro Maipú",
    direccion: "Av. San Martín al 1200, Maipú",
    precio: 280000,
    moneda: "ARS",
    ambientes: 2,
    dormitorios: 1,
    banos: 1,
    superficieCubierta: 45,
    superficieTotal: 45,
    descripcion:
      "Departamento a estrenar en pleno centro de Maipú, a metros de la plaza departamental. Living-comedor integrado, cocina con isla, balcón y cochera cubierta.",
    caracteristicas: ["Balcón", "Cochera", "Apto crédito", "A estrenar"],
    destacada: true,
  },
  {
    id: "2",
    slug: "casa-barrio-kobe-3-dormitorios",
    operacion: "venta",
    tipo: "casa",
    zona: "Barrio Kobe",
    titulo: "Casa de 3 dormitorios con quincho en Barrio Kobe",
    direccion: "Calle Los Álamos al 400, Barrio Kobe, Maipú",
    precio: 145000,
    moneda: "USD",
    ambientes: 5,
    dormitorios: 3,
    banos: 2,
    superficieCubierta: 140,
    superficieTotal: 300,
    descripcion:
      "Casa familiar en barrio residencial consolidado, con quincho, parrilla y pileta. Terreno amplio con lugar para ampliar.",
    caracteristicas: ["Pileta", "Quincho", "Parrilla", "Terreno amplio"],
    destacada: true,
  },
  {
    id: "3",
    slug: "lote-coquimbito-1000m2",
    operacion: "venta",
    tipo: "lote",
    zona: "Coquimbito",
    titulo: "Lote de 1000 m² con vista a la Cordillera",
    direccion: "Camino Coquimbito s/n, Maipú",
    precio: 68000,
    moneda: "USD",
    ambientes: 0,
    dormitorios: 0,
    banos: 0,
    superficieCubierta: 0,
    superficieTotal: 1000,
    descripcion:
      "Lote plano en zona de quintas y viñedos, ideal para construir la casa de tus sueños con vista abierta a la Cordillera de los Andes.",
    caracteristicas: ["Vista a la Cordillera", "Servicios en la calle", "Zona de quintas"],
    destacada: true,
  },
  {
    id: "4",
    slug: "local-comercial-cruz-de-piedra",
    operacion: "alquiler",
    tipo: "local-comercial",
    zona: "Cruz de Piedra",
    titulo: "Local comercial sobre avenida en Cruz de Piedra",
    direccion: "Ruta Provincial 60 al 800, Cruz de Piedra, Maipú",
    precio: 450000,
    moneda: "ARS",
    ambientes: 1,
    dormitorios: 0,
    banos: 1,
    superficieCubierta: 80,
    superficieTotal: 80,
    descripcion:
      "Local a la calle con gran visibilidad y tránsito vehicular constante. Ideal para comercio o showroom, baño y depósito.",
    caracteristicas: ["Sobre avenida", "Vidriera amplia", "Depósito"],
    destacada: false,
  },
  {
    id: "5",
    slug: "departamento-3-ambientes-fray-luis-beltran",
    operacion: "venta",
    tipo: "departamento",
    zona: "Fray Luis Beltrán",
    titulo: "Departamento 3 ambientes con cochera",
    direccion: "Calle Belgrano al 250, Fray Luis Beltrán, Maipú",
    precio: 92000,
    moneda: "USD",
    ambientes: 3,
    dormitorios: 2,
    banos: 1,
    superficieCubierta: 65,
    superficieTotal: 65,
    descripcion:
      "Departamento luminoso en planta baja con patio propio y cochera. Excelente estado de conservación.",
    caracteristicas: ["Patio propio", "Cochera", "Planta baja"],
    destacada: false,
  },
  {
    id: "6",
    slug: "quinta-lujan-de-cuyo-con-vinedo",
    operacion: "venta",
    tipo: "quinta",
    zona: "Luján de Cuyo",
    titulo: "Quinta con viñedo propio en Luján de Cuyo",
    direccion: "Camino Los Olivos s/n, Luján de Cuyo",
    precio: 320000,
    moneda: "USD",
    ambientes: 6,
    dormitorios: 4,
    banos: 3,
    superficieCubierta: 220,
    superficieTotal: 15000,
    descripcion:
      "Propiedad de campo con casa principal, viñedo en producción y galpón. A minutos de bodegas reconocidas de la zona.",
    caracteristicas: ["Viñedo en producción", "Galpón", "Casa principal", "Pileta"],
    destacada: true,
  },
  {
    id: "7",
    slug: "departamento-1-ambiente-guaymallen",
    operacion: "alquiler",
    tipo: "departamento",
    zona: "Guaymallén",
    titulo: "Monoambiente equipado cerca de Ciudad de Mendoza",
    direccion: "Av. Las Heras al 3500, Guaymallén",
    precio: 190000,
    moneda: "ARS",
    ambientes: 1,
    dormitorios: 1,
    banos: 1,
    superficieCubierta: 32,
    superficieTotal: 32,
    descripcion:
      "Monoambiente totalmente equipado, ideal para estudiantes o profesionales. A pasos de paradas de colectivo y comercios.",
    caracteristicas: ["Amoblado", "Bien ubicado", "Apto profesional"],
    destacada: false,
  },
  {
    id: "8",
    slug: "casa-cruz-de-piedra-2-dormitorios",
    operacion: "alquiler",
    tipo: "casa",
    zona: "Cruz de Piedra",
    titulo: "Casa 2 dormitorios con patio en Cruz de Piedra",
    direccion: "Calle Mitre al 150, Cruz de Piedra, Maipú",
    precio: 310000,
    moneda: "ARS",
    ambientes: 4,
    dormitorios: 2,
    banos: 1,
    superficieCubierta: 90,
    superficieTotal: 200,
    descripcion:
      "Casa tranquila en zona residencial con patio con árboles frutales y espacio para cochera.",
    caracteristicas: ["Patio con frutales", "Espacio para cochera"],
    destacada: false,
  },
  {
    id: "9",
    slug: "local-comercial-centro-maipu",
    operacion: "venta",
    tipo: "local-comercial",
    zona: "Centro Maipú",
    titulo: "Local comercial en peatonal céntrica",
    direccion: "Av. San Martín al 950, Maipú",
    precio: 130000,
    moneda: "USD",
    ambientes: 2,
    dormitorios: 0,
    banos: 1,
    superficieCubierta: 110,
    superficieTotal: 110,
    descripcion:
      "Local en esquina con doble frente sobre la principal arteria comercial de Maipú. Alta afluencia peatonal.",
    caracteristicas: ["Esquina", "Doble frente", "Alta afluencia"],
    destacada: false,
  },
  {
    id: "10",
    slug: "departamento-2-ambientes-barrio-kobe",
    operacion: "venta",
    tipo: "departamento",
    zona: "Barrio Kobe",
    titulo: "Departamento 2 ambientes en complejo cerrado",
    direccion: "Barrio Kobe, Maipú",
    precio: 78000,
    moneda: "USD",
    ambientes: 2,
    dormitorios: 1,
    banos: 1,
    superficieCubierta: 50,
    superficieTotal: 50,
    descripcion:
      "Departamento en complejo con seguridad 24hs, espacios verdes comunes y pileta compartida.",
    caracteristicas: ["Seguridad 24hs", "Pileta compartida", "Espacios verdes"],
    destacada: false,
  },
];

export const ZONAS = Array.from(new Set(properties.map((p) => p.zona))).sort();

export const TIPOS: { value: TipoPropiedad; label: string }[] = [
  { value: "departamento", label: "Departamento" },
  { value: "casa", label: "Casa" },
  { value: "lote", label: "Lote" },
  { value: "local-comercial", label: "Local comercial" },
  { value: "quinta", label: "Quinta" },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export interface PropertyFilters {
  operacion?: Operacion;
  tipo?: TipoPropiedad;
  zona?: string;
  ambientes?: number;
  precioMax?: number;
}

export function filterProperties(filters: PropertyFilters): Property[] {
  return properties.filter((p) => {
    if (filters.operacion && p.operacion !== filters.operacion) return false;
    if (filters.tipo && p.tipo !== filters.tipo) return false;
    if (filters.zona && p.zona !== filters.zona) return false;
    if (filters.ambientes && p.ambientes < filters.ambientes) return false;
    if (filters.precioMax && p.precio > filters.precioMax) return false;
    return true;
  });
}
