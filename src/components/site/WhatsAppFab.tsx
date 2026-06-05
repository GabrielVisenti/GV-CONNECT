import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "5544988480543";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Olá! Vim pelo site da GV Connect e gostaria de mais informações."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-xl animate-glow" />
      <span className="relative flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-elevated transition-transform group-hover:scale-105">
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </span>
    </a>
  );
}
