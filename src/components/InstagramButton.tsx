import { site } from "@/lib/site";

// Botón flotante de Instagram, encima del de WhatsApp.
export default function InstagramButton() {
  return (
    <a
      href={site.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Seguinos en Instagram ${site.social.instagramHandle}`}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}
