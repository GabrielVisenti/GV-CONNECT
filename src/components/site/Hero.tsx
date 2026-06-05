import { ArrowRight } from "lucide-react";
import logo from "@/assets/gv-connect-logo.png.asset.json";

export function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-hero text-platinum">
      {/* tech grid */}
      <div className="absolute inset-0 tech-grid opacity-60" />
      {/* ambient orbs */}
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gold/20 blur-[140px] animate-glow" />
      <div className="absolute -bottom-40 -left-20 h-[460px] w-[460px] rounded-full bg-navy-soft/40 blur-[130px]" />

      {/* faint particles */}
      <Particles />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 pt-36 pb-24 lg:pt-44 lg:pb-32 flex flex-col items-center text-center">
        {/* Premium logo showcase */}
        <div className="relative">
          {/* rotating gold rings */}
          <div className="absolute inset-0 -m-10 rounded-full border border-gold/20 animate-spin-slow" />
          <div className="absolute inset-0 -m-20 rounded-full border border-gold/10 animate-spin-slower" />
          {/* glow */}
          <div className="absolute inset-0 -m-6 rounded-full bg-gold/20 blur-3xl animate-glow" />

          <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-[2rem] bg-[image:var(--gradient-navy)] ring-1 ring-gold/30 shadow-elevated overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_82_/0.22),transparent_65%)]" />
            <div className="absolute inset-0 flex items-center justify-center p-7">
              <img
                src={logo.url}
                alt="GV Connect logo"
                className="w-full h-full object-contain animate-float drop-shadow-[0_20px_50px_rgba(212,175,55,0.45)]"
              />
            </div>
            <Corner className="top-3 left-3" />
            <Corner className="top-3 right-3 rotate-90" />
            <Corner className="bottom-3 right-3 rotate-180" />
            <Corner className="bottom-3 left-3 -rotate-90" />
          </div>
        </div>

        <h1 className="mt-12 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
          <span className="text-shimmer">GV CONNECT</span>
        </h1>
        <p className="mt-5 text-xl sm:text-2xl text-platinum/90 font-light max-w-3xl">
          Tecnologia que impulsiona negócios.
        </p>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-platinum/70 leading-relaxed">
          Conectamos empresas e órgãos públicos às melhores soluções em tecnologia,
          suprimentos e inovação — com atendimento especializado, condições competitivas
          e entrega confiável.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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

        <p className="mt-10 text-xs sm:text-sm uppercase tracking-[0.35em] text-gold-soft/80">
          Parceiros estratégicos para empresas e órgãos públicos.
        </p>
      </div>

      {/* bottom fade to white */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return <span className={`absolute h-6 w-6 border-t border-l border-gold/70 ${className}`} />;
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
