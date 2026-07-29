import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "./WhatsAppFab";
import {
  buildWhatsAppMessage,
  hasMinLength,
  isValidCity,
  isValidEmail,
  isValidModel,
  isValidName,
  isValidPhone,
  isValidQuantity,
  maskPhone,
  normalizeText,
  onlyDigits,
  waLink,
} from "@/lib/form-utils";

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
  produto: string;
  quantidade: string;
  tipo: string;
  modelo: string;
  precisa: string;
  servico: string;
  nome: string;
  cidade: string;
  telefone: string;
  email: string;
};

type FieldKey = keyof Form;

const EMPTY_FORM: Form = {
  quem: "",
  produto: "",
  quantidade: "",
  tipo: "",
  modelo: "",
  precisa: "",
  servico: "",
  nome: "",
  cidade: "",
  telefone: "",
  email: "",
};

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

function validate(type: QuoteType, form: Form): Partial<Record<FieldKey, string>> {
  const e: Partial<Record<FieldKey, string>> = {};

  if (!form.quem) e.quem = "Selecione quem está solicitando.";

  if (type === "informatica" || type === "lenovo") {
    if (!hasMinLength(form.produto, 2) || !/[A-Za-z0-9À-ÿ]/.test(form.produto))
      e.produto = "Informe o produto desejado.";
    if (!isValidQuantity(form.quantidade)) e.quantidade = "Informe uma quantidade válida.";
  }

  if (type === "toners") {
    if (!form.tipo) e.tipo = "Selecione Original ou Compatível.";
    if (!isValidModel(form.modelo)) e.modelo = "Informe um modelo válido.";
    if (!isValidQuantity(form.quantidade)) e.quantidade = "Informe uma quantidade válida.";
  }

  if (type === "impressao3d" && !hasMinLength(form.precisa, 10))
    e.precisa = "Descreva sua necessidade com mais detalhes.";

  if (type === "manutencao") {
    if (!hasMinLength(form.servico, 10))
      e.servico = "Descreva o equipamento e o problema com mais detalhes.";
  }

  if (!isValidName(form.nome)) e.nome = "Informe um nome válido.";
  if (!isValidCity(form.cidade)) e.cidade = "Informe uma cidade válida.";
  if (!isValidPhone(form.telefone)) e.telefone = "Informe um telefone válido com DDD.";
  if (!isValidEmail(form.email)) e.email = "Informe um e-mail válido.";

  return e;
}

export const QuoteModal = memo(function QuoteModal({
  open,
  onClose,
  type,
}: {
  open: boolean;
  onClose: () => void;
  type: QuoteType;
}) {
  const [form, setForm] = useState<Form>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descId = useId();

  const reset = useCallback(() => {
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setSent(false);
    setWaUrl("");
  }, []);

  // Reset whenever the modal opens or the form type changes — never persist data.
  useEffect(() => {
    if (open) {
      reset();
      openerRef.current = (document.activeElement as HTMLElement) ?? null;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => firstFieldRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      reset();
      openerRef.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, type, reset]);

  // Escape to close + focus trap
  useEffect(() => {
    if (!open) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        ev.stopPropagation();
        onClose();
        return;
      }
      if (ev.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (n) => n.offsetParent !== null,
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (ev.shiftKey && document.activeElement === first) {
        ev.preventDefault();
        last.focus();
      } else if (!ev.shiftKey && document.activeElement === last) {
        ev.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [open, onClose]);

  const update = (k: FieldKey, v: string) => {
    setForm((f) => {
      const next = { ...f, [k]: k === "telefone" ? maskPhone(v) : v };
      if (touched[k] || errors[k]) {
        const fieldErrors = validate(type, next);
        setErrors((prev) => ({ ...prev, [k]: fieldErrors[k] }));
      }
      return next;
    });
  };

  const blur = (k: FieldKey) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setForm((f) => {
      const cleaned: Form = { ...f };
      if (k === "email") cleaned.email = f.email.trim().toLowerCase();
      else if (k !== "precisa" && k !== "servico") cleaned[k] = normalizeText(f[k]);
      const fieldErrors = validate(type, cleaned);
      setErrors((prev) => ({ ...prev, [k]: fieldErrors[k] }));
      return cleaned;
    });
  };

  const errorProps = (k: FieldKey) => ({
    error: errors[k],
    errorId: `${descId}-${k}`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned: Form = {
      ...form,
      nome: normalizeText(form.nome),
      cidade: normalizeText(form.cidade),
      produto: normalizeText(form.produto),
      modelo: normalizeText(form.modelo),
      quantidade: form.quantidade.trim(),
      email: form.email.trim().toLowerCase(),
      precisa: form.precisa.trim(),
      servico: form.servico.trim(),
    };
    setForm(cleaned);

    const found = validate(type, cleaned);
    setErrors(found);
    const keys = Object.keys(found) as FieldKey[];
    if (keys.length > 0) {
      setTouched((t) => ({ ...t, ...Object.fromEntries(keys.map((k) => [k, true])) }));
      const el = panelRef.current?.querySelector<HTMLElement>(`[data-field="${keys[0]}"]`);
      el?.focus();
      return;
    }

    const message = buildWhatsAppMessage("Olá! Gostaria de solicitar uma cotação.", [
      ["Categoria", TITLES[type].replace(/^.*—\s*/, "")],
      ["Solicitante", cleaned.quem],
      ["Produto", cleaned.produto],
      ["Tipo", cleaned.tipo],
      ["Modelo", cleaned.modelo],
      ["Quantidade", cleaned.quantidade],
      ["Descrição", cleaned.precisa],
      ["Serviço", cleaned.servico],
      ["Nome", cleaned.nome],
      ["Cidade", cleaned.cidade],
      ["Telefone", cleaned.telefone ? maskPhone(onlyDigits(cleaned.telefone)) : ""],
      ["E-mail", cleaned.email],
    ]);

    const url = waLink(WHATSAPP_NUMBER, message);
    setWaUrl(url);
    setSent(true);
    // Data is cleared only after the URL is fully built.
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const showQuantity = useMemo(
    () => type === "informatica" || type === "lenovo" || type === "toners",
    [type],
  );

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 ${
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-navy-deep/80" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full sm:max-w-xl bg-background rounded-t-3xl sm:rounded-3xl shadow-elevated border border-gold/20 overflow-hidden"
      >
        {/* gold bar */}
        <div className="h-1 w-full bg-[image:var(--gradient-gold)]" />
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar formulário"
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition"
        >
          <X size={18} />
        </button>

        {!sent ? (
          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">GV Connect</p>
            <h3 id={titleId} className="mt-2 text-2xl font-display text-navy-deep">
              {TITLES[type]}
            </h3>
            <p id={descId} className="mt-1 text-sm text-muted-foreground">
              Preencha os campos e nossa equipe entrará em contato.
            </p>

            <div className="mt-6 space-y-5">
              <Field label="Quem está solicitando?" {...errorProps("quem")}>
                <div className="grid grid-cols-2 gap-2">
                  {["Pessoa Física", "Órgão Público"].map((o, i) => (
                    <button
                      type="button"
                      key={o}
                      ref={i === 0 ? firstFieldRef : undefined}
                      data-field={i === 0 ? "quem" : undefined}
                      aria-pressed={form.quem === o}
                      onClick={() => {
                        setTouched((t) => ({ ...t, quem: true }));
                        setForm((f) => ({ ...f, quem: o }));
                        setErrors((e) => ({ ...e, quem: undefined }));
                      }}
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
                <Input
                  label="Produto"
                  name="produto"
                  autoComplete="off"
                  value={form.produto}
                  onChange={(v) => update("produto", v)}
                  onBlur={() => blur("produto")}
                  {...errorProps("produto")}
                />
              )}

              {type === "toners" && (
                <>
                  <Field label="Tipo" {...errorProps("tipo")}>
                    <div className="grid grid-cols-2 gap-2">
                      {TONER_TYPES.map((o, i) => (
                        <button
                          type="button"
                          key={o}
                          translate="no"
                          data-field={i === 0 ? "tipo" : undefined}
                          aria-pressed={form.tipo === o}
                          aria-label={o}
                          onClick={() => {
                            setTouched((t) => ({ ...t, tipo: true }));
                            setForm((f) => ({ ...f, tipo: o }));
                            setErrors((e) => ({ ...e, tipo: undefined }));
                          }}
                          className={`notranslate px-3 py-2.5 rounded-xl border text-xs font-medium transition ${
                            form.tipo === o
                              ? "border-gold bg-navy text-white shadow-gold"
                              : "border-border hover:border-gold/60"
                          }`}
                        >
                          <span translate="no" className="notranslate">
                            {o}
                          </span>
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Input
                    label="Modelo"
                    name="modelo"
                    autoComplete="off"
                    value={form.modelo}
                    onChange={(v) => update("modelo", v)}
                    onBlur={() => blur("modelo")}
                    {...errorProps("modelo")}
                  />
                </>
              )}

              {showQuantity && (
                <Input
                  label="Quantidade"
                  name="quantidade"
                  inputMode="numeric"
                  autoComplete="off"
                  value={form.quantidade}
                  onChange={(v) => update("quantidade", v.replace(/[^\d]/g, ""))}
                  onBlur={() => blur("quantidade")}
                  {...errorProps("quantidade")}
                />
              )}

              {type === "impressao3d" && (
                <Textarea
                  label="O que você precisa?"
                  name="descricao"
                  value={form.precisa}
                  onChange={(v) => update("precisa", v.slice(0, 800))}
                  onBlur={() => blur("precisa")}
                  {...errorProps("precisa")}
                />
              )}

              {type === "manutencao" && (
                <Textarea
                  label="Equipamento e descrição do problema"
                  name="servico"
                  value={form.servico}
                  onChange={(v) => update("servico", v.slice(0, 800))}
                  onBlur={() => blur("servico")}
                  {...errorProps("servico")}
                />
              )}

              {(type === "licitacao" || type === "generico") && (
                <Textarea
                  label="Descreva sua necessidade"
                  name="descricao"
                  value={form.precisa}
                  onChange={(v) => update("precisa", v.slice(0, 800))}
                  onBlur={() => blur("precisa")}
                  {...errorProps("precisa")}
                />
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Nome"
                  name="name"
                  autoComplete="name"
                  value={form.nome}
                  onChange={(v) => update("nome", v)}
                  onBlur={() => blur("nome")}
                  {...errorProps("nome")}
                />
                <Input
                  label="Cidade"
                  name="city"
                  autoComplete="address-level2"
                  value={form.cidade}
                  onChange={(v) => update("cidade", v)}
                  onBlur={() => blur("cidade")}
                  {...errorProps("cidade")}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Telefone"
                  name="tel"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(44) 98848-0543"
                  value={form.telefone}
                  onChange={(v) => update("telefone", v)}
                  onBlur={() => blur("telefone")}
                  {...errorProps("telefone")}
                />
                <Input
                  label="E-mail"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  onBlur={() => blur("email")}
                  {...errorProps("email")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-navy-deep bg-[image:var(--gradient-gold)] shadow-gold hover:scale-[1.01] transition-transform duration-300 ease-out"
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
            <h3 id={titleId} className="mt-5 text-2xl font-display text-navy-deep">
              Solicitação recebida com sucesso
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Nossa equipe já recebeu suas informações. Continue no WhatsApp para finalizar o atendimento.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-elevated hover:scale-[1.02] transition-transform duration-300 ease-out"
            >
              Continuar no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
});

function Field({
  label,
  children,
  error,
  errorId,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  errorId?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-navy-deep/70 mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

type BaseFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  errorId?: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  errorId,
  type = "text",
  inputMode,
  autoComplete,
  placeholder,
}: BaseFieldProps & {
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <Field label={label} error={error} errorId={errorId}>
      <input
        data-field={name === "tel" ? "telefone" : name === "name" ? "nome" : name === "city" ? "cidade" : name}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm outline-none transition ${
          error
            ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/25"
            : "border-border focus:border-gold focus:ring-2 focus:ring-gold/30"
        }`}
      />
    </Field>
  );
}

function Textarea({ label, name, value, onChange, onBlur, error, errorId }: BaseFieldProps) {
  return (
    <Field label={label} error={error} errorId={errorId}>
      <textarea
        data-field={name === "descricao" ? "precisa" : name}
        name={name}
        value={value}
        rows={3}
        maxLength={800}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm outline-none transition resize-none ${
          error
            ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/25"
            : "border-border focus:border-gold focus:ring-2 focus:ring-gold/30"
        }`}
      />
    </Field>
  );
}
