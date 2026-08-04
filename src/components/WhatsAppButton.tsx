import { buildWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.226.611 4.313 1.671 6.1L4 29l8.104-1.634A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 17.05c-.293.828-1.453 1.516-2.386 1.712-.634.132-1.462.238-4.25-.913-3.564-1.477-5.86-5.09-6.04-5.328-.174-.239-1.442-1.918-1.442-3.658s.9-2.59 1.22-2.947c.32-.357.7-.446.933-.446.234 0 .467.002.671.012.216.01.507-.082.792.605.293.706 1 2.434 1.086 2.611.087.178.146.386.03.62-.117.239-.176.386-.352.593-.176.208-.37.462-.53.62-.176.176-.36.365-.155.716.205.35.912 1.503 1.958 2.434 1.345 1.2 2.48 1.571 2.832 1.747.352.176.557.147.762-.088.205-.235.878-1.024 1.113-1.376.234-.352.469-.293.79-.176.322.117 2.05.966 2.402 1.142.352.176.586.264.674.41.088.147.088.85-.205 1.678Z" />
      </svg>
    </a>
  );
}
