import type { ReactNode } from "react";

// Marca visible para los textos [completar] del brief. Quedan a la vista
// en el borrador y NO deben llegar a producción sin aprobación del cliente.
export default function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="font-semibold italic text-red-700" data-placeholder="completar">
      {children}
    </span>
  );
}
