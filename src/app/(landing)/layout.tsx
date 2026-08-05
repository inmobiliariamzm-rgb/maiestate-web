import { Cormorant_Garamond, Montserrat } from "next/font/google";
import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Root layout independiente para landing pages de captación (ej.
// /tasacion): mismas fuentes y theme que el sitio principal, pero con
// header/footer mínimos (sin menú de navegación) para mantener el foco
// en la conversión. Mismo patrón que src/app/studio/layout.tsx.
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-navy">
        <LandingHeader />
        <main className="flex-1">{children}</main>
        <LandingFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
