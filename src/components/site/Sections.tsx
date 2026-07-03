import {
  Truck,
  Handshake,
  Gavel,
  ShieldCheck,
  Monitor,
  Printer,
  Boxes,
  Wrench,
  Check,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Laptop,
  Headset,
  BadgePercent,
  Building2,
  Layers,
  Award,
  Users,
  Zap,
  Rocket,
  Expand,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { QuoteType } from "./QuoteModal";
import { Logo } from "./Logo";
import lenovoCertificate from "@/assets/lenovo-certificate.png.asset.json";
import lenovoEmblem from "@/assets/lenovo-emblem.png.asset.json";
import gvLenovoPartnership from "@/assets/gv-lenovo-partnership.png.asset.json";

type OpenQuote = (t: QuoteType) => void;

export function Differentials() {
  const items = [
    { icon: Truck, title: "Entrega Rápida", text: "Atendimento ágil e eficiente em todo o território nacional." },
    { icon: Handshake, title: "Condições Competitivas", text: "Parcerias estratégicas com os maiores distribuidores do mercado." },
    { icon: Gavel, title: "Especialistas em Licitações", text: "Experiência sólida em fornecimento corporativo e governamental." },
    { icon: ShieldCheck, title: "Revenda Autorizada Lenovo", text: "Produtos originais com garantia nacional e suporte oficial." },
  ];
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Por que GV Connect" title="Diferenciais que se sentem em cada entrega" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative p-7 rounded-2xl border border-border bg-white hover:border-gold/60 hover:shadow-elevated transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-xl bg-navy-deep flex items-center justify-center shadow-gold ring-1 ring-gold/30 group-hover:scale-110 transition-transform">
                <it.icon className="text-gold" size={22} />
              </div>
              <h3 className="mt-5 text-lg font-display text-navy-deep">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmpresasResultados() {
  const cards = [
    {
      icon: Laptop,
      title: "Equipamentos Corporativos",
      text: "Notebooks, computadores, monitores e soluções para ambientes profissionais.",
    },
    {
      icon: Printer,
      title: "Suprimentos para Impressão",
      text: "Toners e cartuchos originais e compatíveis premium, com alto rendimento.",
    },
    {
      icon: Headset,
      title: "Atendimento Consultivo",
      text: "Auxiliamos na escolha da melhor solução para cada necessidade do seu negócio.",
    },
    {
      icon: BadgePercent,
      title: "Condições Competitivas",
      text: "Parcerias estratégicas que garantem excelente custo-benefício e previsibilidade.",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Resultados que importam"
          title="Empresas que buscam resultados escolhem a GV CONNECT"
        />
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Oferecemos soluções tecnológicas completas para empresas que valorizam
          desempenho, produtividade e atendimento especializado.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative p-7 rounded-2xl border border-border bg-white hover:border-gold/60 hover:shadow-elevated transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-gold)] flex items-center justify-center shadow-gold ring-1 ring-gold/30 group-hover:scale-110 transition-transform">
                <c.icon className="text-navy-deep" size={22} />
              </div>
              <h3 className="mt-5 text-lg font-display text-navy-deep">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TecnologiaEmpresas({ openQuote }: { openQuote: OpenQuote }) {
  const benefits = [
    "Atendimento especializado",
    "Equipamentos corporativos",
    "Soluções sob medida",
    "Suporte consultivo",
    "Condições competitivas",
    "Entrega rápida",
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-navy-gradient text-platinum overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Empresarial</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Tecnologia para <span className="text-gold-gradient">Empresas</span>
          </h2>
          <p className="mt-6 text-platinum/80 text-lg leading-relaxed max-w-xl">
            A GV CONNECT atende empresas de diferentes portes, oferecendo equipamentos,
            suprimentos e soluções tecnológicas que contribuem para produtividade,
            eficiência e crescimento.
          </p>
          <button
            onClick={() => openQuote("generico")}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.03] transition-transform"
          >
            Solicitar Cotação <ArrowRight size={16} />
          </button>
        </div>
        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 p-5 rounded-xl border border-gold/20 bg-white/[0.04] backdrop-blur hover:border-gold/50 hover:bg-white/[0.07] transition"
            >
              <span className="h-9 w-9 rounded-full bg-[image:var(--gradient-gold)] flex items-center justify-center shrink-0 shadow-gold">
                <Check size={15} className="text-navy-deep" strokeWidth={3} />
              </span>
              <span className="text-sm text-platinum/90">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LenovoSection({ openQuote }: { openQuote: OpenQuote }) {
  return (
    <section className="relative py-24 sm:py-32 bg-navy-gradient text-platinum overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="absolute -top-40 right-1/3 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft">
            Certificação Oficial
          </span>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            Revenda <span className="text-gold-gradient">Autorizada Lenovo</span>
          </h2>
          <p className="text-platinum/75 text-lg leading-relaxed max-w-xl">
            A GV CONNECT possui certificação oficial Lenovo, oferecendo equipamentos originais,
            garantia nacional e atendimento especializado para empresas e órgãos públicos.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {["Produtos 100% originais", "Garantia nacional Lenovo", "Suporte técnico oficial", "Linhas ThinkPad, ThinkBook & ThinkCentre"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-platinum/85">
                <Check size={16} className="text-gold" /> {t}
              </li>
            ))}
          </ul>
          <button
            onClick={() => openQuote("lenovo")}
            className="mt-3 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.03] transition-transform"
          >
            Solicitar Cotação Lenovo <ArrowRight size={16} />
          </button>
        </div>

        <div className="lg:col-span-6">
          <div className="space-y-4">
            {/* Imagem principal — dominante */}
            <div className="relative rounded-2xl border border-gold/30 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] aspect-[16/10]">
              <img
                src={gvLenovoPartnership.url}
                alt="Parceria GV CONNECT e Lenovo"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Linha de credibilidade — selo + certificado */}
            <div className="grid grid-cols-5 gap-4">
              {/* Selo (2/5) — destaque de credibilidade */}
              <div className="col-span-2 relative rounded-2xl border border-gold/30 bg-white overflow-hidden shadow-[0_18px_50px_-25px_rgba(0,0,0,0.55)] aspect-[4/3] flex items-center justify-center">
                <img
                  src={lenovoEmblem.url}
                  alt="Selo Lenovo 360 Authorized 2026"
                  className="max-h-full max-w-full object-contain p-3"
                />
              </div>
              {/* Certificado (3/5) — elemento complementar */}
              <div className="col-span-3 relative rounded-2xl border border-gold/30 bg-white overflow-hidden shadow-[0_18px_50px_-25px_rgba(0,0,0,0.55)] aspect-[4/3] flex items-center justify-center">
                <img
                  src={lenovoCertificate.url}
                  alt="Certificado Lenovo 360 Authorized 2026 – G V Alexandre Connect"
                  className="max-h-full max-w-full object-contain p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LenovoImage({
  src,
  alt,
  tall,
  fit = "cover",
  bg = "dark",
}: {
  src: string;
  alt: string;
  tall?: boolean;
  fit?: "cover" | "contain";
  bg?: "dark" | "light";
}) {
  return (
    <div
      className={`relative rounded-2xl border border-gold/30 ${
        bg === "light" ? "bg-white" : "bg-white/[0.04] backdrop-blur"
      } ${tall ? "h-full min-h-[300px]" : "h-36 sm:h-40"} overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full ${
          fit === "contain" ? "object-contain p-3" : "object-cover"
        }`}
      />
    </div>
  );
}

import catInformatica from "@/assets/cat-informatica.png.asset.json";
import catToners from "@/assets/cat-toners.png.asset.json";
import catManutencao from "@/assets/cat-manutencao.png.asset.json";

const SOLUTIONS = [
  {
    key: "informatica" as QuoteType,
    icon: Monitor,
    title: "Equipamentos de Informática",
    text: "Notebooks, desktops, monitores e periféricos para empresas e órgãos públicos.",
    cta: "Solicitar Cotação",
    image: catInformatica.url,
    objectPosition: "center" as const,
  },
  {
    key: "toners" as QuoteType,
    icon: Printer,
    title: "Toners e Cartuchos",
    text: "Linha completa de suprimentos originais e compatíveis premium para todos os modelos.",
    cta: "Encontrar Meu Toner",
    image: catToners.url,
    objectPosition: "top center" as const,
  },
  {
    key: "manutencao" as QuoteType,
    icon: Wrench,
    title: "Manutenção Especializada",
    text: "Serviços preventivos e corretivos para computadores, notebooks e impressoras.",
    cta: "Solicitar Atendimento",
    image: catManutencao.url,
    objectPosition: "center 30%" as const,
  },
];

export function Solutions({ openQuote }: { openQuote: OpenQuote }) {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [preview]);

  return (
    <section id="solucoes" className="relative py-24 sm:py-32 bg-gradient-to-b from-secondary via-white to-secondary overflow-hidden">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/5 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-navy/5 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeader eyebrow="Soluções" title="Tudo o que sua operação precisa, em um só parceiro" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col rounded-3xl bg-white border border-border/70 overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] hover:shadow-elevated hover:-translate-y-1 hover:border-gold/60 transition-[transform,box-shadow,border-color] duration-500"
              >
                {/* Image showcase */}
                <button
                  type="button"
                  onClick={() => setPreview({ src: s.image, alt: s.title })}
                  aria-label={`Ampliar imagem de ${s.title}`}
                  className="relative w-full aspect-square bg-gradient-to-br from-platinum via-white to-platinum overflow-hidden isolate block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    decoding="sync"
                    fetchPriority="high"
                    draggable={false}
                    style={{ imageRendering: "auto", transform: "none", filter: "none", backfaceVisibility: "hidden", objectPosition: s.objectPosition }}
                    className="absolute inset-0 h-full w-full object-contain select-none p-2"
                  />
                  {/* Subtle gradient sweep on hover */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
                  {/* Zoom affordance */}
                  <span className="absolute top-4 right-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-navy-deep/80 text-gold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand size={15} />
                  </span>
                </button>

                {/* Content */}
                <div className="relative flex flex-col flex-1 p-7 lg:p-8">
                  {/* Floating icon medallion */}
                  <span className="absolute -top-7 right-7 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[image:var(--gradient-gold)] text-navy-deep shadow-gold ring-4 ring-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>

                  <h3 className="pr-16 text-xl lg:text-[22px] font-display text-navy-deep leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.text}
                  </p>

                  <div className="mt-7 pt-5 border-t border-border/70">
                    <button
                      onClick={() => openQuote(s.key)}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-navy-deep hover:text-gold-deep transition-colors group/btn"
                    >
                      {s.cta}
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[image:var(--gradient-gold)] text-navy-deep shadow-gold transition-transform duration-300 group-hover/btn:translate-x-1">
                        <ArrowRight size={13} />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Fechar"
            className="absolute top-5 right-5 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={preview.src}
            alt={preview.alt}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            style={{ imageRendering: "auto" }}
            className="max-h-[90vh] max-w-[92vw] object-contain rounded-xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </section>
  );
}


const BRANDS = ["Lenovo", "HP", "Dell", "Samsung", "Brother", "Epson", "Canon", "Microsoft", "Logitech", "Intel", "AMD", "Asus"];

export function Brands() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">Marcas Parceiras</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-display text-navy-deep">
          Trabalhamos com as maiores marcas do mundo
        </h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {row.map((b, i) => (
            <div
              key={i}
              className="shrink-0 px-8 py-5 rounded-xl border border-border bg-white text-navy-deep font-display text-2xl tracking-wide hover:border-gold/60 hover:text-gold-deep transition"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Licitacoes({ openQuote }: { openQuote: OpenQuote }) {
  const credibility = [
    { icon: Layers, label: "Soluções Tecnológicas", text: "Portfólio completo para diferentes demandas." },
    { icon: Headset, label: "Atendimento Especializado", text: "Suporte consultivo do início à entrega." },
    { icon: Award, label: "Marcas Reconhecidas", text: "Parcerias com os principais fabricantes." },
    { icon: Users, label: "Clientes Atendidos", text: "Empresas e órgãos públicos em todo o Brasil." },
  ];
  return (
    <section id="licitacoes" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">Corporativo & Público</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display text-navy-deep leading-tight">
            Fornecimento <span className="text-gold-gradient">Especializado</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Atendemos empresas e órgãos públicos com soluções completas em tecnologia,
            suprimentos e equipamentos corporativos.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Possuímos experiência em processos licitatórios e fornecimento especializado
            para instituições que exigem qualidade, agilidade e confiança.
          </p>
          <button
            onClick={() => openQuote("licitacao")}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-platinum bg-navy-deep hover:bg-navy transition shadow-elevated"
          >
            Solicitar Proposta <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {credibility.map((c) => (
            <div
              key={c.label}
              className="group relative p-6 rounded-2xl border border-border bg-secondary hover:border-gold/60 hover:shadow-elevated transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-navy-deep flex items-center justify-center shadow-gold ring-1 ring-gold/30">
                <c.icon className="text-gold" size={20} />
              </div>
              <h3 className="mt-4 text-sm uppercase tracking-[0.18em] text-navy-deep font-semibold">
                {c.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueList({ openQuote }: { openQuote: OpenQuote }) {
  const items = [
    { icon: ShieldCheck, t: "Revenda Autorizada Lenovo" },
    { icon: Handshake, t: "Grandes distribuidores parceiros" },
    { icon: Headset, t: "Atendimento especializado" },
    { icon: Truck, t: "Entrega rápida e confiável" },
    { icon: Building2, t: "Soluções corporativas" },
    { icon: Award, t: "Produtos originais e compatíveis premium" },
    { icon: Gavel, t: "Atendimento para empresas e órgãos públicos" },
    { icon: Check, t: "Compromisso com qualidade" },
    { icon: Rocket, t: "Tecnologia ao seu alcance" },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-navy-gradient text-platinum overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-gold/15 blur-[140px]" />
      <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-navy-soft/40 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Diferenciais</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Por que escolher a <span className="text-gold-gradient">GV CONNECT?</span>
          </h2>
          <p className="mt-6 text-platinum/80 text-lg leading-relaxed">
            Trabalhamos para oferecer muito mais do que produtos. Entregamos soluções
            que ajudam empresas e instituições a alcançarem melhores resultados através
            da tecnologia.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div
              key={it.t}
              className="group flex items-center gap-4 p-5 rounded-xl border border-gold/15 bg-white/[0.04] backdrop-blur hover:border-gold/50 hover:bg-white/[0.07] transition"
            >
              <span className="h-10 w-10 rounded-xl bg-[image:var(--gradient-gold)] flex items-center justify-center shrink-0 shadow-gold">
                <it.icon size={18} className="text-navy-deep" />
              </span>
              <span className="text-sm text-platinum/90 font-medium">{it.t}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <button
            onClick={() => openQuote("generico")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.03] transition-transform"
          >
            Solicitar Cotação <ArrowRight size={16} />
          </button>
          <a
            href="https://wa.me/5544988480543"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-platinum border border-platinum/25 hover:border-gold/60 hover:text-gold transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-gold/30 bg-white/[0.04] backdrop-blur h-full min-h-[300px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_82_/0.10),transparent_70%)]" />
            <div className="absolute inset-3 border border-dashed border-gold/30 rounded-xl" />
            <span className="relative text-[10px] uppercase tracking-[0.3em] text-gold-soft/80">Imagem futura — Sobre</span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">Sobre Nós</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-navy-deep leading-tight">
            Tecnologia com <span className="text-gold-gradient">propósito</span> desde 2025
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A GV CONNECT nasceu em 2025 com o propósito de oferecer soluções em tecnologia com qualidade, agilidade e confiança para empresas e órgãos públicos.
            </p>
            <p>
              Desde o início, buscamos construir parcerias sólidas com os principais distribuidores do mercado, garantindo acesso aos melhores equipamentos, suprimentos e soluções tecnológicas para atender às mais diversas necessidades dos nossos clientes.
            </p>
            <p>
              Atuamos na comercialização de equipamentos de informática, toners e cartuchos originais e compatíveis, além de oferecer serviços de manutenção especializada e atendimento voltado ao mercado corporativo e às licitações públicas.
            </p>
            <p className="text-navy-deep font-medium">
              Nosso compromisso é conectar empresas e organizações às melhores soluções tecnológicas, sempre com excelência no atendimento, rapidez na entrega e compromisso com a qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ openQuote }: { openQuote: OpenQuote }) {
  return (
    <footer id="contato" className="relative bg-navy-deep text-platinum overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-25" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 text-lg font-display text-platinum">A tecnologia que o seu negócio precisa.</p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gold-soft/80">
            Conectamos você ao que realmente importa.
          </p>
          <button
            onClick={() => openQuote("generico")}
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.03] transition-transform"
          >
            Solicitar Cotação <ArrowRight size={16} />
          </button>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold-soft">Contato</h4>
          <ul className="mt-5 space-y-3 text-sm text-platinum/80">
            <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> (44) 98848-0543</li>
            <li className="flex items-center gap-3"><Mail size={14} className="text-gold" /> glconnect@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin size={14} className="text-gold" /> São Jorge do Ivaí — PR</li>
            <li className="flex items-center gap-3"><Instagram size={14} className="text-gold" /> GV CONNECT</li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold-soft">Links rápidos</h4>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-platinum/80">
            {[
              { href: "#top", l: "Início" },
              { href: "#solucoes", l: "Soluções" },
              { href: "#licitacoes", l: "Licitações" },
              { href: "#sobre", l: "Sobre Nós" },
              { href: "#contato", l: "Contato" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold transition-colors">{l.l}</a>
              </li>
            ))}
            <li>
              <button onClick={() => openQuote("generico")} className="text-gold hover:underline">
                Solicitar Cotação
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-platinum/50">
          <p>© {new Date().getFullYear()} GV Alexandre Connect — CNPJ 59.901.174/0001-78</p>
          <p>GV CONNECT — Tecnologia Corporativa</p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl text-navy-deep leading-tight">{title}</h2>
    </div>
  );
}
