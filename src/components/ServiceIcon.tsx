import type { Service } from "@/lib/data/services";

const PATHS: Record<Service["icono"], string> = {
  tasacion: "M4 21h16M6 21V9l6-5 6 5v12M10 21v-6h4v6",
  compraventa: "M4 7h16M4 7l2 12h12l2-12M9 11v4M15 11v4M8 7l1.5-4h5L16 7",
  administracion: "M4 21V8l8-5 8 5v13M9 21v-6h6v6M4 21h16",
  captacion: "M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21Z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  "fondo-comercio": "M3 9l1-5h16l1 5M4 9v11h16V9M4 9h16M9 20v-6h6v6",
};

export default function ServiceIcon({ icon, className = "h-8 w-8" }: { icon: Service["icono"]; className?: string }) {
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
