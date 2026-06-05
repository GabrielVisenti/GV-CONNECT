import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { QuoteModal, type QuoteType } from "@/components/site/QuoteModal";
import {
  Differentials,
  EmpresasResultados,
  LenovoSection,
  Solutions,
  Brands,
  TecnologiaEmpresas,
  Licitacoes,
  ValueList,
  About,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GV Connect — Tecnologia Corporativa, Licitações e Soluções" },
      {
        name: "description",
        content:
          "GV Connect: revenda autorizada Lenovo, equipamentos, suprimentos, impressão 3D, manutenção especializada e atendimento para licitações públicas.",
      },
      { property: "og:title", content: "GV Connect — A tecnologia que o seu negócio precisa" },
      {
        property: "og:description",
        content:
          "Soluções tecnológicas premium para empresas e órgãos públicos. Conectamos você ao que realmente importa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<QuoteType>("generico");

  const openQuote = (t: QuoteType = "generico") => {
    setType(t);
    setOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Nav onQuote={() => openQuote("generico")} />
      <Hero onQuote={() => openQuote("generico")} />
      <Differentials />
      <LenovoSection openQuote={openQuote} />
      <Solutions openQuote={openQuote} />
      <Brands />
      <Licitacoes openQuote={openQuote} />
      <ValueList openQuote={openQuote} />
      <About />
      <Footer openQuote={openQuote} />
      <WhatsAppFab />
      <QuoteModal open={open} onClose={() => setOpen(false)} type={type} />
    </main>
  );
}
