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
} from "lucide-react";
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

const SOLUTIONS = [
  {
    key: "informatica" as QuoteType,
    icon: Monitor,
    title: "Equipamentos de Informática",
    text: "Notebooks, computadores, monitores, impressoras, periféricos e soluções completas para empresas e órgãos públicos.",
    cta: "Solicitar Cotação",
  },
  {
    key: "toners" as QuoteType,
    icon: Printer,
    title: "Toners e Cartuchos",
    text: "Linha completa de suprimentos originais e compatíveis premium para praticamente todos os modelos do mercado.",
    cta: "Encontrar Meu Toner",
    tags: ["Originais", "Compatíveis Premium", "Alto rendimento", "Pronta entrega"],
  },
  {
    key: "impressao3d" as QuoteType,
    icon: Boxes,
    title: "Impressão 3D e Prototipagem",
    text: "Desenvolvimento de peças personalizadas, protótipos e soluções sob medida com tecnologia de impressão 3D.",
    cta: "Solicitar Projeto",
  },
  {
    key: "manutencao" as QuoteType,
    icon: Wrench,
    title: "Manutenção Especializada",
    text: "Serviços preventivos e corretivos para computadores, notebooks, impressoras e equipamentos corporativos.",
    cta: "Solicitar Atendimento",
  },
];

export function Solutions({ openQuote }: { openQuote: OpenQuote }) {
  return (
    <section id="solucoes" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Soluções" title="Tudo o que sua operação precisa, em um só parceiro" />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {SOLUTIONS.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl bg-white border border-border overflow-hidden hover:shadow-elevated hover:border-gold/50 transition-all duration-500"
            >
              <div className="grid sm:grid-cols-5">
                <div className="sm:col-span-2 relative bg-navy-gradient min-h-[180px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 tech-grid opacity-40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_82_/0.18),transparent_70%)]" />
                  <s.icon className="relative text-gold" size={56} strokeWidth={1.25} />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.3em] text-gold-soft/70">
                    Imagem futura
                  </span>
                </div>
                <div className="sm:col-span-3 p-7">
                  <h3 className="text-xl font-display text-navy-deep">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  {s.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-navy-deep/5 text-navy-deep border border-navy-deep/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => openQuote(s.key)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep group/btn"
                  >
                    {s.cta}
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[image:var(--gradient-gold)] text-navy-deep shadow-gold transition-transform group-hover/btn:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
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
              A GV CONNECT nasceu em 2025 com a missão de fornecer soluções tecnológicas completas
              para empresas e órgãos públicos.
            </p>
            <p>
              Desde o início buscamos construir parcerias sólidas com grandes distribuidores do
              mercado, garantindo acesso aos melhores equipamentos, suprimentos e soluções
              tecnológicas disponíveis.
            </p>
            <p>
              Hoje atuamos no fornecimento de equipamentos de informática, toners e cartuchos,
              manutenção especializada, impressão 3D e atendimento voltado ao mercado corporativo e
              licitações públicas.
            </p>
            <p className="text-navy-deep font-medium">
              Nosso compromisso é conectar pessoas e organizações às melhores soluções tecnológicas
              com rapidez, confiança e excelência.
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
