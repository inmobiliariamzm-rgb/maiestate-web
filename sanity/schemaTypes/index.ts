import property from "./property";
import testimonial from "./testimonial";
import consulta from "./consulta";
import servicio from "./servicio";
import paginaInicio from "./paginaInicio";
import seccionesServicios from "./seccionesServicios";

export const schemaTypes = [
  paginaInicio,
  seccionesServicios,
  servicio,
  property,
  testimonial,
  consulta,
];

/** Documentos únicos: se editan, pero no se crean ni se borran. */
export const SINGLETONS = ["paginaInicio", "seccionesServicios"];
