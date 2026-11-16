/**
 * Textos por defecto de las secciones editables desde el panel (/studio).
 *
 * El sitio usa estos textos mientras no haya nada publicado en el panel; en
 * cuanto se publica un cambio, manda lo del panel. También son los valores
 * con los que arranca cada formulario del panel, así se edita sobre el texto
 * actual y no sobre un campo vacío.
 *
 * Archivo sin dependencias de Next ni de Sanity: lo importan tanto el sitio
 * como el Studio.
 */
import { site } from "../site";
import type { Area } from "./services";

export interface Pilar {
  titulo: string;
  texto: string;
}

export interface PaginaInicio {
  heroEtiqueta: string;
  heroTitulo: string;
  heroTexto: string;
  pilares: Pilar[];
  serviciosEtiqueta: string;
  serviciosTitulo: string;
  contableEtiqueta: string;
  contableTitulo: string;
  contableTituloDestacado: string;
  contableSoloTitulo: string;
  contableSoloTexto: string;
  contableJuntoTitulo: string;
  contableJuntoTexto: string;
  contableBoton: string;
  porQueEtiqueta: string;
  porQueTitulo: string;
  porQueTexto: string;
  cierreTitulo: string;
  cierreTexto: string;
}

export const PAGINA_INICIO: PaginaInicio = {
  heroEtiqueta: "Inmobiliaria boutique · Maipú, Mendoza",
  heroTitulo: site.tagline,
  heroTexto:
    "Tasaciones, compraventa, alquileres, consorcios y fondos de comercio en Maipú y el Gran Mendoza, con el respaldo de un Corredor Público Inmobiliario matriculado y un Departamento Contable propio.",
  pilares: [
    {
      titulo: "12 años de trayectoria",
      texto: "Conocimiento profundo del mercado inmobiliario de Maipú y Gran Mendoza.",
    },
    {
      titulo: "Matrícula CCPIM",
      texto: `Tasaciones y operaciones respaldadas por ${site.responsableTecnico.nombre}, ${site.responsableTecnico.matricula}.`,
    },
    {
      titulo: "Atención personalizada",
      texto: "Un asesor dedicado te acompaña en cada etapa, sin intermediarios anónimos.",
    },
    {
      titulo: "Respaldo contable propio",
      texto:
        "Cada operación sale con su lado impositivo resuelto. Nuestro Departamento Contable trabaja junto al área inmobiliaria, o por su cuenta cuando lo que necesitás es solo contable.",
    },
  ],
  serviciosEtiqueta: "Qué hacemos",
  serviciosTitulo: "Todo tu patrimonio, en un solo lugar",
  contableEtiqueta: "Departamento Contable",
  contableTitulo: "Tu patrimonio también necesita sus",
  contableTituloDestacado: "números en orden",
  contableSoloTitulo: "Solo contable",
  contableSoloTexto:
    "Monotributo, impuestos, sueldos o balances: el departamento te atiende directamente.",
  contableJuntoTitulo: "Junto al área inmobiliaria",
  contableJuntoTexto:
    "Alquileres, ventas, sucesiones, consorcios o negocios, con un solo referente para vos.",
  contableBoton: "Hablar con el contador",
  porQueEtiqueta: "Por qué MAIESTATE",
  porQueTitulo: "Legado, trayectoria y compromiso",
  porQueTexto:
    "En MAIESTATE entendemos que cada propiedad representa un patrimonio construido con esfuerzo. Por eso combinamos el rigor técnico de la matrícula CCPIM con un enfoque cercano y transparente, priorizando la sustentabilidad y el valor a largo plazo de cada operación por sobre el volumen de ventas.",
  cierreTitulo: "¿Querés conocer el valor de tu propiedad?",
  cierreTexto:
    "Solicitá una tasación profesional o hablá directamente con un asesor de MAIESTATE.",
};

export interface TextoArea {
  descripcion: string;
  /** Se muestra cuando el área todavía no tiene servicios. */
  textoSinServicios: string;
}

export interface SeccionesServicios {
  etiqueta: string;
  titulo: string;
  descripcion: string;
  areas: Record<Area, TextoArea>;
}

const SIN_SERVICIOS = "Muy pronto vas a encontrar acá estos servicios.";

export const SECCIONES_SERVICIOS: SeccionesServicios = {
  etiqueta: "MAIESTATE",
  titulo: "Todo tu patrimonio, en un solo lugar",
  descripcion:
    "Nuestros servicios, organizados por área: Inmobiliaria, Inmobiliaria-Contable, Contable y Jurídica.",
  areas: {
    Inmobiliaria: {
      descripcion: "Tasaciones, compraventa, captación e inversiones.",
      textoSinServicios: SIN_SERVICIOS,
    },
    "Inmobiliaria-Contable": {
      descripcion:
        "Administración de alquileres y consorcios, y fondos de comercio, con el respaldo del Departamento Contable.",
      textoSinServicios: SIN_SERVICIOS,
    },
    Contable: {
      descripcion: "Impuestos, contabilidad y sueldos con nuestro Departamento Contable.",
      textoSinServicios: SIN_SERVICIOS,
    },
    Jurídica: {
      descripcion: "Estamos preparando esta sección.",
      textoSinServicios: "Muy pronto vas a encontrar acá nuestros servicios jurídicos.",
    },
  },
};

/** Nombre de cada área en los documentos del panel (sin acentos ni guiones). */
export const AREA_CAMPO: Record<Area, "inmobiliaria" | "inmobiliariaContable" | "contable" | "juridica"> = {
  Inmobiliaria: "inmobiliaria",
  "Inmobiliaria-Contable": "inmobiliariaContable",
  Contable: "contable",
  Jurídica: "juridica",
};
