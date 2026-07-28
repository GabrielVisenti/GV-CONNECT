/** Lightweight, dependency-free helpers for quote forms. */

export const normalizeText = (v: string) => v.replace(/\s+/g, " ").trim();

export const onlyDigits = (v: string) => v.replace(/\D+/g, "");

export function maskPhone(v: string) {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export const isValidName = (v: string) => {
  const n = normalizeText(v);
  return n.length >= 3 && /[A-Za-zÀ-ÿ]/.test(n) && !/^\d+$/.test(n);
};

export const isValidPhone = (v: string) => {
  const d = onlyDigits(v);
  if (d.length !== 10 && d.length !== 11) return false;
  if (/^(\d)\1+$/.test(d)) return false;
  const ddd = Number(d.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;
  if (d.length === 11 && d[2] !== "9") return false;
  return true;
};

export const isValidEmail = (v: string) => {
  const e = v.trim().toLowerCase();
  if (/\s/.test(e) || e.length > 254) return false;
  return /^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/.test(e);
};

export const isValidCity = (v: string) => {
  const c = normalizeText(v);
  return c.length >= 2 && /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'.-]*$/.test(c);
};

export const isValidQuantity = (v: string) => {
  const q = v.trim();
  if (!/^\d+$/.test(q)) return false;
  const n = Number(q);
  return n >= 1 && n <= 100000;
};

export const isValidModel = (v: string) => {
  const m = normalizeText(v);
  return m.length >= 2 && /[A-Za-z0-9]/.test(m) && /^[A-Za-z0-9À-ÿ\s\-/.]+$/.test(m);
};

export const hasMinLength = (v: string, min: number) => normalizeText(v).length >= min;

/** Builds a WhatsApp message containing only filled-in fields. */
export function buildWhatsAppMessage(
  intro: string,
  fields: Array<[label: string, value: string | undefined | null]>,
) {
  const lines = fields
    .map(([label, value]) => {
      const v = (value ?? "").toString().trim();
      return v ? `${label}: ${v}` : null;
    })
    .filter((l): l is string => Boolean(l));
  return [intro, "", ...lines].join("\n");
}

export const waLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
