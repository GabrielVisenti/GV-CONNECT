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
} from "lucide-react";
import type { QuoteType } from "./QuoteModal";
import { Logo } from "./Logo";

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
          <div className="grid grid-cols-2 gap-4">
            <Placeholder label="Certificado Lenovo" tall />
            <div className="space-y-4">
              <Placeholder label="Selo Oficial" />
              <Placeholder label="Imagem futura" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Placeholder({ label, tall }: { label: string; tall?: boolean }) {
  return (
    <div
      className={`relative rounded-2xl border border-gold/30 bg-white/[0.04] backdrop-blur ${
        tall ? "h-full min-h-[300px]" : "h-36"
      } flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_82_/0.10),transparent_70%)]" />
      <div className="absolute inset-3 border border-dashed border-gold/30 rounded-xl" />
      <span className="relative text-[10px] uppercase tracking-[0.3em] text-gold-soft/80">
        {label}
      </span>
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
  return (
    <section id="licitacoes" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Placeholder label="Imagem futura — Licitações" tall />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">Setor Público</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display text-navy-deep leading-tight">
            Especialistas em <span className="text-gold-gradient">Licitações</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A GV CONNECT atua no fornecimento de equipamentos, suprimentos e soluções tecnológicas
            para empresas e órgãos públicos, atendendo processos licitatórios com agilidade,
            responsabilidade e compromisso.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { n: "100%", l: "Documentação em dia" },
              { n: "24h", l: "Resposta a editais" },
              { n: "BR", l: "Cobertura nacional" },
            ].map((s) => (
              <div key={s.l} className="p-4 rounded-2xl border border-border bg-secondary">
                <div className="text-2xl font-display text-gold-deep">{s.n}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => openQuote("licitacao")}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-platinum bg-navy-deep hover:bg-navy transition shadow-elevated"
          >
            Solicitar Proposta <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function ValueList({ openQuote }: { openQuote: OpenQuote }) {
  const items = [
    "Revenda Autorizada Lenovo",
    "Grandes distribuidores parceiros",
    "Atendimento especializado",
    "Soluções corporativas completas",
    "Atendimento para licitações",
    "Produtos originais e compatíveis premium",
    "Suporte consultivo",
    "Entrega rápida e confiável",
    "Atendimento personalizado",
    "Compromisso com qualidade",
    "Tecnologia ao seu alcance",
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-navy-gradient text-platinum overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-gold/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">A GV Connect</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Construída sobre <span className="text-gold-gradient">princípios sólidos</span>
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div
              key={it}
              className="group flex items-center gap-3 p-4 rounded-xl border border-gold/15 bg-white/[0.03] backdrop-blur hover:border-gold/50 hover:bg-white/[0.06] transition"
            >
              <span className="h-8 w-8 rounded-full bg-[image:var(--gradient-gold)] flex items-center justify-center shrink-0 shadow-gold">
                <Check size={14} className="text-navy-deep" strokeWidth={3} />
              </span>
              <span className="text-sm text-platinum/90">{it}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button
            onClick={() => openQuote("generico")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.03] transition-transform"
          >
            Solicitar Cotação <ArrowRight size={16} />
          </button>
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
          <Placeholder label="Imagem futura — Sobre" tall />
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
