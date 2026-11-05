"use client";

import { useEffect, useState } from "react";

// Campo oculto "origen" con el utm_source de la URL (ej. "instagram" desde
// /enlaces). Se lee en el navegador para que las páginas sigan siendo
// estáticas. Si la página ya conoce el origen, se pasa por `value`.
export default function OrigenInput({ value }: { value?: string }) {
  const [origen, setOrigen] = useState(value ?? "");

  useEffect(() => {
    if (value) return;
    const utm = new URLSearchParams(window.location.search).get("utm_source");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lectura única de la URL al montar
    if (utm) setOrigen(utm);
  }, [value]);

  return <input type="hidden" name="origen" value={origen} />;
}
