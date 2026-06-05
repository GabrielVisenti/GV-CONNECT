import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/gv-connect-logo.png.asset.json";

export function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-hero text-platinum">
      {/* tech grid */}
      <div className="absolute inset-0 tech-grid opacity-60" />
      {/* gold orb */}
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gold/20 blur-[140px] animate-glow" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-navy-soft/40 blur-[120px]" />

      {/* faint particles */}
      <Particles />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 lg:pt-44 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft backdrop-blur">
            <Sparkles size={12} /> Revenda Autorizada Lenovo
          </div>
          <h1 className="mt-7 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            <span className="text-shimmer">GV CONNECT</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-platinum/85 font-light">
            A tecnologia que o seu negócio precisa.
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-platinum/65 leading-relaxed">
            Soluções completas em tecnologia, suprimentos, manutenção especializada, impressão 3D
            e fornecimento para empresas e órgãos públicos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onQuote}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold transition-transform hover:scale-[1.03]"
            >
              Solicitar Cotação
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`https://wa.me/5544988480543`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-platinum border border-platinum/25 hover:border-gold/60 hover:text-gold transition-colors"
            >
              Falar com Especialista
            </a>
          </div>

          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-gold-soft/80">
            Conectamos você ao que realmente importa.
          </p>
        </div>

        {/* logo showcase / placeholder area */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-[image:var(--gradient-navy)] ring-1 ring-gold/20 shadow-elevated overflow-hidden">
              <div className="absolute inset-0 tech-grid opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_82_/0.18),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <img src={logo.url} alt="GV Connect logo" className="w-full h-full object-contain animate-float drop-shadow-[0_20px_50px_rgba(212,175,55,0.35)]" />
              </div>
              {/* corner glints */}
              <Corner className="top-3 left-3" />
              <Corner className="top-3 right-3 rotate-90" />
              <Corner className="bottom-3 right-3 rotate-180" />
              <Corner className="bottom-3 left-3 -rotate-90" />
            </div>
            {/* floating tags */}
            <Pill className="-top-4 -left-4" label="Certificado Lenovo" />
            <Pill className="-bottom-4 -right-4" label="Licitações Públicas" />
          </div>
        </div>
      </div>

      {/* bottom fade to white */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <span className={`absolute h-6 w-6 border-t border-l border-gold/70 ${className}`} />
  );
}

function Pill({ className = "", label }: { className?: string; label: string }) {
  return (
    <div className={`absolute ${className} px-4 py-2 rounded-full bg-navy-deep/80 backdrop-blur border border-gold/30 text-xs uppercase tracking-widest text-gold-soft shadow-elevated`}>
      {label}
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 41) % 100;
        const top = (i * 67) % 100;
        const delay = (i % 8) * 0.6;
        const size = 1 + (i % 3);
        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
            }}
            className="absolute rounded-full bg-gold/70 animate-glow"
          />
        );
      })}
    </div>
  );
}
