import { ArrowRight } from "lucide-react";
import logo from "@/assets/gv-connect-logo-hero.png.asset.json";
import { WHATSAPP_HREF } from "./WhatsAppFab";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-hero text-platinum"
    >
      <BackgroundLayers />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 pt-32 lg:pt-36 pb-32 lg:pb-40 flex flex-col items-center text-center">
        {/* Hero logo composition */}
        <LogoStage />

        <h1 className="mt-10 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
          <span className="text-shimmer">GV CONNECT</span>
        </h1>

        <p className="mt-5 max-w-3xl text-xl sm:text-2xl lg:text-3xl text-platinum/90 font-light leading-tight">
          Equipamentos originais. <span className="text-gold-gradient font-medium">Resultados reais.</span>
        </p>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-platinum/65 leading-relaxed">
          Parceiro estratégico em tecnologia para empresas e órgãos públicos, oferecendo
          distribuição, soluções e atendimento com a qualidade das maiores marcas do mercado.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold transition-transform hover:scale-[1.04]"
          >
            <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity -z-10" />
            Solicitar Cotação
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-platinum border border-platinum/25 hover:border-gold/60 hover:text-gold transition-colors backdrop-blur"
          >
            Conhecer Soluções
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function BackgroundLayers() {
  return (
    <>
      <div className="absolute inset-0 tech-grid opacity-50" aria-hidden />
      <div className="absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-gold/15 blur-[120px]" aria-hidden />
      <div className="absolute -top-32 -right-32 h-[380px] w-[380px] rounded-full bg-navy-soft/50 blur-[110px]" aria-hidden />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.86 0.10 86)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.78 0.13 82)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.86 0.10 86)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M0,180 L1440,420",
          "M0,720 L1440,360",
          "M0,520 L1440,640",
          "M0,80 L1440,820",
        ].map((d, i) => (
          <path key={i} d={d} stroke="url(#lineGold)" strokeWidth="1" fill="none" />
        ))}
      </svg>

      <Particles />
    </>
  );
}

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: 1 + (i % 3),
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          className="absolute rounded-full bg-gold/70"
        />
      ))}
    </div>
  );
}

function LogoStage() {
  return (
    <div className="relative mt-14 flex items-center justify-center">
      <div className="absolute h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] rounded-full border border-gold/15" aria-hidden />
      <div className="absolute h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full border border-gold/20" aria-hidden />
      <div className="absolute h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] rounded-full border border-gold/30" aria-hidden />

      <div className="absolute h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] animate-spin-slower" aria-hidden>
        <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-gold shadow-gold" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-gold-soft" />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-gold/80" />
        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 h-2 w-2 rounded-full bg-gold shadow-gold" />
      </div>

      <div className="absolute h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] rounded-full bg-gold/25 blur-3xl" aria-hidden />



      <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 flex items-center justify-center animate-float">
        <img
          src={logo.url}
          alt="GV Connect"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={512}
          height={512}
          className="relative h-full w-full object-contain"
        />

      </div>
    </div>
  );
}
