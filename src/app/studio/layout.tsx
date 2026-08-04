import type { Metadata } from "next";
import { NextStudioLayout } from "next-sanity/studio";

export const metadata: Metadata = {
  title: "MAIESTATE — Panel de contenido",
  robots: "noindex",
};

// Layout raíz independiente para /studio: el Sanity Studio necesita
// controlar toda la pantalla y no debe heredar el Header/Footer ni el
// theme (navy/gold, fuentes) del sitio público.
export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NextStudioLayout>{children}</NextStudioLayout>
      </body>
    </html>
  );
}
