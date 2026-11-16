import { client } from "@/lib/sanity/client";
import {
  AREAS,
  MOTIVO_VALUES,
  SERVICIO_ID_PREFIX,
  SUCESIONES_ACTIVA,
  allServiceCards,
  getServiceBySlug,
  type Area,
  type IconName,
  type MotivoValue,
  type Service,
  type ServiceCardData,
} from "@/lib/data/services";
import {
  AREA_CAMPO,
  PAGINA_INICIO,
  SECCIONES_SERVICIOS,
  type PaginaInicio,
  type SeccionesServicios,
} from "@/lib/data/contenido";

/*
 * Textos editables desde el panel (/studio). Regla general: lo publicado
 * en el panel manda; si un campo está vacío o el panel no responde, se usa
 * el texto por defecto de src/lib/data/. Así el sitio nunca queda en blanco.
 */

const FETCH_OPTIONS = { next: { revalidate: 60, tags: ["contenido"] } };
// Solo lo publicado: los borradores del panel no se ven en el sitio.
const published = client.withConfig({ perspective: "published" });

async function fetchSeguro<T>(query: string, params: Record<string, unknown> = {}) {
  try {
    return await published.fetch<T>(query, params, FETCH_OPTIONS);
  } catch (error) {
    console.error("[contenido] No se pudo leer el panel; uso textos por defecto.", error);
    return null;
  }
}

/** Copia los campos con contenido de `extra` sobre `base`. */
function combinar<T extends object>(base: T, extra: Partial<T> | null | undefined): T {
  if (!extra) return base;
  const out = { ...base } as Record<string, unknown>;
  for (const [k, v] of Object.entries(extra)) {
    const vacio =
      v === null ||
      v === undefined ||
      (typeof v === "string" && v.trim() === "") ||
      (Array.isArray(v) && v.length === 0);
    if (!vacio && k in out) out[k] = v;
  }
  return out as T;
}

/* --------------------------- Página de inicio --------------------------- */

export async function getPaginaInicio(): Promise<PaginaInicio> {
  const doc = await fetchSeguro<Partial<PaginaInicio> | null>(
    `*[_id == "paginaInicio"][0]`
  );
  const pagina = combinar(PAGINA_INICIO, doc);
  pagina.pilares = pagina.pilares.filter((p) => p?.titulo || p?.texto);
  return pagina;
}

/* -------------------------- Áreas de servicios -------------------------- */

export async function getSeccionesServicios(): Promise<SeccionesServicios> {
  const doc = await fetchSeguro<Record<string, unknown> | null>(
    `*[_id == "seccionesServicios"][0]`
  );
  const base = SECCIONES_SERVICIOS;
  const textos = combinar(
    { etiqueta: base.etiqueta, titulo: base.titulo, descripcion: base.descripcion },
    doc as Partial<{ etiqueta: string; titulo: string; descripcion: string }>
  );
  const areas = Object.fromEntries(
    AREAS.map((a) => [
      a,
      combinar(base.areas[a], doc?.[AREA_CAMPO[a]] as Partial<SeccionesServicios["areas"][Area]>),
    ])
  ) as SeccionesServicios["areas"];
  return { ...textos, areas };
}

/* ------------------------------- Servicios ------------------------------ */

interface ServicioDoc {
  _id: string;
  titulo?: string;
  slug?: string;
  area?: Area;
  icono?: IconName;
  orden?: number;
  textoTarjeta?: string;
  visible?: boolean;
  resumen?: string;
  contenido?: string[];
  cta?: string;
  motivo?: string;
  bloqueContable?: { titulo?: string; texto?: string };
}

export interface Servicio {
  card: ServiceCardData;
  /** Solo para servicios que usan la plantilla /servicios/[slug]. */
  detalle?: Service;
  orden: number;
  visible: boolean;
}

const esArea = (v: unknown): v is Area => AREAS.includes(v as Area);
const esMotivo = (v: unknown): v is MotivoValue => MOTIVO_VALUES.includes(v as MotivoValue);

function bloque(b: ServicioDoc["bloqueContable"]) {
  return b?.titulo && b?.texto ? { titulo: b.titulo, texto: b.texto } : undefined;
}

async function getServicios(): Promise<Servicio[]> {
  const docs =
    (await fetchSeguro<ServicioDoc[]>(
      `*[_type == "servicio"]{ ..., "slug": slug.current }`
    )) ?? [];
  const porId = new Map(docs.map((d) => [d._id, d]));

  const originales: Servicio[] = allServiceCards.map((base, i) => {
    const doc = porId.get(SERVICIO_ID_PREFIX + base.clave);
    const card = combinar(base, {
      titulo: doc?.titulo,
      texto: doc?.textoTarjeta,
      area: esArea(doc?.area) ? doc.area : undefined,
      icono: doc?.icono,
    });
    const detalleBase = getServiceBySlug(base.clave);
    const detalle = detalleBase
      ? {
          ...combinar(detalleBase, {
            // La página puede tener un título más largo que la tarjeta
            // ("Captación de propiedades"); si se edita en el panel, manda ese.
            titulo: doc?.titulo,
            area: card.area,
            icono: card.icono,
            resumen: doc?.resumen,
            contenido: doc?.contenido?.filter(Boolean),
            cta: doc?.cta,
          }),
          motivo: esMotivo(doc?.motivo) ? doc.motivo : detalleBase.motivo,
          // Si el servicio ya se editó en el panel, el bloque vacío = quitarlo.
          bloqueContable: doc ? bloque(doc.bloqueContable) : detalleBase.bloqueContable,
        }
      : undefined;
    const pausado = base.clave === "sucesiones" && !SUCESIONES_ACTIVA;
    return {
      card,
      detalle,
      orden: doc?.orden ?? (i + 1) * 10,
      visible: !pausado && doc?.visible !== false,
    };
  });

  const clavesOriginales = new Set(allServiceCards.map((c) => c.clave));
  const nuevos: Servicio[] = docs
    .filter(
      (d) =>
        !d._id.startsWith(SERVICIO_ID_PREFIX) ||
        !clavesOriginales.has(d._id.slice(SERVICIO_ID_PREFIX.length))
    )
    .filter((d) => d.titulo && d.slug && esArea(d.area))
    // Una dirección nueva no puede pisar una página que ya existe.
    .filter((d) => !clavesOriginales.has(d.slug!))
    .map((d) => {
      const card: ServiceCardData = {
        clave: d.slug!,
        titulo: d.titulo!,
        texto: d.textoTarjeta ?? "",
        area: d.area!,
        href: `/servicios/${d.slug}`,
        icono: d.icono ?? "tasacion",
      };
      return {
        card,
        detalle: {
          slug: d.slug!,
          titulo: d.titulo!,
          resumen: d.resumen ?? d.textoTarjeta ?? "",
          area: d.area!,
          icono: card.icono,
          contenido: d.contenido?.filter(Boolean) ?? [],
          cta: d.cta || "Consultanos",
          motivo: esMotivo(d.motivo) ? d.motivo : undefined,
          bloqueContable: bloque(d.bloqueContable),
        },
        orden: d.orden ?? 100,
        visible: d.visible !== false,
      };
    });

  return [...originales, ...nuevos].sort((a, b) => a.orden - b.orden);
}

/** Tarjetas visibles, en el orden elegido en el panel. */
export async function getServiceCards(): Promise<ServiceCardData[]> {
  return (await getServicios()).filter((s) => s.visible).map((s) => s.card);
}

/** Servicio de plantilla por dirección (null si no existe o está oculto). */
export async function getServicioDetalle(slug: string): Promise<Service | null> {
  const s = (await getServicios()).find((x) => x.detalle?.slug === slug);
  return s && s.visible && s.detalle ? s.detalle : null;
}

/** Direcciones de todas las páginas de servicio de plantilla visibles. */
export async function getServicioSlugs(): Promise<string[]> {
  return (await getServicios())
    .filter((s) => s.visible && s.detalle)
    .map((s) => s.detalle!.slug);
}
