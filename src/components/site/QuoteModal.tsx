import { useEffect, useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "./WhatsAppFab";

export type QuoteType = "informatica" | "toners" | "impressao3d" | "manutencao" | "lenovo" | "licitacao" | "generico";

const TITLES: Record<QuoteType, string> = {
  informatica: "Cotação — Equipamentos de Informática",
  toners: "Cotação — Toners e Cartuchos",
  impressao3d: "Orçamento — Impressão 3D",
  manutencao: "Solicitar Atendimento",
  lenovo: "Cotação Lenovo",
  licitacao: "Proposta para Licitação",
  generico: "Solicitar Cotação",
};

const SUBMIT_LABEL: Record<QuoteType, string> = {
  informatica: "Solicitar Cotação",
  toners: "Solicitar Cotação",
  impressao3d: "Solicitar Orçamento",
  manutencao: "Solicitar Atendimento",
  lenovo: "Solicitar Cotação",
  licitacao: "Solicitar Proposta",
  generico: "Solicitar Cotação",
};

type Form = {
  quem: string;
  produto?: string;
  quantidade?: string;
  tipo?: string;
  modelo?: string;
  precisa?: string;
  servico?: string;
  nome: string;
  cidade: string;
  telefone: string;
  email: string;
};

export function QuoteModal({
  open,
  onClose,
  type,
}: {
  open: boolean;
  onClose: () => void;
  type: QuoteType;
}) {
  const [form, setForm] = useState<Form>({
    quem: "Empresa",
    nome: "",
    cidade: "",
    telefone: "",
    email: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      setSent(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const update = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const buildMessage = () => {
    const lines = [
      `*Nova solicitação — ${TITLES[type]}*`,
      `Solicitante: ${form.quem}`,
      form.produto && `Produto: ${form.produto}`,
      form.tipo && `Tipo: ${form.tipo}`,
      form.modelo && `Modelo: ${form.modelo}`,
      form.quantidade && `Quantidade: ${form.quantidade}`,
      form.precisa && `Descrição: ${form.precisa}`,
      form.servico && `Serviço: ${form.servico}`,
      "",
      `Nome: ${form.nome}`,
      `Cidade: ${form.cidade}`,
      `Telefone: ${form.telefone}`,
      `E-mail: ${form.email}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />
      <div className="relative w-full sm:max-w-xl bg-background rounded-t-3xl sm:rounded-3xl shadow-elevated border border-gold/20 overflow-hidden animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-500">
        {/* gold bar */}
        <div className="h-1 w-full bg-[image:var(--gradient-gold)]" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition"
        >
          <X size={18} />
        </button>

        {!sent ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">GV Connect</p>
            <h3 className="mt-2 text-2xl font-display text-navy-deep">{TITLES[type]}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha os campos e nossa equipe entrará em contato.
            </p>

            <div className="mt-6 space-y-5">
              <Field label="Quem está solicitando?">
                <div className="grid grid-cols-3 gap-2">
                  {["Pessoa Física", "Empresa", "Órgão Público"].map((o) => (
                    <button
                      type="button"
                      key={o}
                      onClick={() => update("quem", o)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition ${
                        form.quem === o
                          ? "border-gold bg-navy text-white shadow-gold"
                          : "border-border text-foreground hover:border-gold/60"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </Field>

              {(type === "informatica" || type === "lenovo") && (
                <>
                  <Input label="Qual equipamento você precisa?" value={form.marcaModelo || ""} onChange={(v) => update("marcaModelo", v)} required />
                  <Input label="Quantidade" value={form.quantidade || ""} onChange={(v) => update("quantidade", v)} required />
                </>
              )}

              {type === "toners" && (
                <>
                  <Field label="Tipo">
                    <div className="grid grid-cols-2 gap-2">
                      {["Original", "Compatível Premium"].map((o) => (
                        <button
                          type="button"
                          key={o}
                          onClick={() => update("tipo", o)}
                          className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition ${
                            form.tipo === o
                              ? "border-gold bg-navy text-white shadow-gold"
                              : "border-border hover:border-gold/60"
                          }`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Input label="Modelo" value={form.modelo || ""} onChange={(v) => update("modelo", v)} required />
                  <Input label="Quantidade" value={form.quantidade || ""} onChange={(v) => update("quantidade", v)} required />
                </>
              )}

              {type === "impressao3d" && (
                <Textarea label="O que você precisa?" value={form.precisa || ""} onChange={(v) => update("precisa", v)} required />
              )}

              {type === "manutencao" && (
                <Textarea label="O que será realizado?" value={form.servico || ""} onChange={(v) => update("servico", v)} required />
              )}

              {(type === "licitacao" || type === "generico") && (
                <Textarea label="Descreva sua necessidade" value={form.precisa || ""} onChange={(v) => update("precisa", v)} />
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Nome" value={form.nome} onChange={(v) => update("nome", v)} required />
                <Input label="Cidade" value={form.cidade} onChange={(v) => update("cidade", v)} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Telefone" value={form.telefone} onChange={(v) => update("telefone", v)} required />
                <Input label="E-mail" type="email" value={form.email} onChange={(v) => update("email", v)} required />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.01] transition-transform"
            >
              {SUBMIT_LABEL[type]}
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="p-8 sm:p-12 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="text-emerald-600" size={32} />
            </div>
            <h3 className="mt-5 text-2xl font-display text-navy-deep">Solicitação recebida com sucesso</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Nossa equipe já recebeu suas informações. Continue no WhatsApp para finalizar o atendimento.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-elevated hover:scale-[1.02] transition-transform"
            >
              Continuar no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-navy-deep/70 mb-2">{label}</label>
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <Field label={label}>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
      />
    </Field>
  );
}

function Textarea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <Field label={label}>
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition resize-none"
      />
    </Field>
  );
}
