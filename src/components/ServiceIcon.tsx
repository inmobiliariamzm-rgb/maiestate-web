import type { IconName } from "@/lib/data/services";

// Íconos de línea (stroke) — se usan en dorado sobre fondo navy cuando
// no hay foto propia disponible.
const PATHS: Record<IconName, string> = {
  tasacion: "M4 21h16M6 21V9l6-5 6 5v12M10 21v-6h4v6",
  compraventa: "M4 7h16M4 7l2 12h12l2-12M9 11v4M15 11v4M8 7l1.5-4h5L16 7",
  administracion: "M4 21V8l8-5 8 5v13M9 21v-6h6v6M4 21h16",
  captacion: "M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21Z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  "fondo-comercio": "M3 9l1-5h16l1 5M4 9v11h16V9M4 9h16M9 20v-6h6v6",
  consorcio: "M3 21h18M5 21V5h8v16M13 9h6v12M8 9h2M8 13h2M8 17h2M16 13h1M16 17h1",
  inversion: "M4 20h16M6 16v-3M10 16V9M14 16v-5M18 16V6M5 11l5-5 4 3 5-5",
  sucesion: "M12 3v4M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 21v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3M4 21h16",
  impuestos: "M7 3h10l2 2v16H5V5l2-2ZM9 8h6M9 12h6M9 16h3M15 15l-2 3",
  contabilidad: "M5 3h14v18H5zM8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M8 18h8",
};

export default function ServiceIcon({
  icon,
  className = "h-8 w-8",
}: {
  icon: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[icon]} />
    </svg>
  );
}
