import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from "./WhatsAppFab";

const links = [
  { href: "#top", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#licitacoes", label: "Licitações" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contato", label: "Contato" },
];

const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-xl border-b border-gold/15 shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-32 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-platinum/80 hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold transition-transform hover:scale-[1.03] active:scale-100"
          >
            Solicitar Cotação
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy-deep animate-glow" />
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-platinum"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-navy-deep/95 backdrop-blur-xl border-t border-gold/15`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-platinum/90 text-base py-2 border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)]"
          >
            Solicitar Cotação
          </a>
        </div>
      </div>
    </header>
  );
}
