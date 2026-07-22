import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
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
  Licitacoes,
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

  const openQuote = useCallback((t: QuoteType) => {
    setType(t);
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => setOpen(false), []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Differentials />
      <EmpresasResultados />
      <LenovoSection />
      <Solutions openQuote={openQuote} />
      <Brands />
      <TecnologiaEmpresas />
      <Licitacoes />
      <ValueList />
      <About />
      <Footer />
      <WhatsAppFab />
      <QuoteModal open={open} onClose={closeQuote} type={type} />
    </main>
  );
}
