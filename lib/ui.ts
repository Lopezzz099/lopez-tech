/*
  Clases repetidas del sitio, en un solo lugar.

  Regla: la clase base de los botones NO define fondo ni color de borde. Cada
  variante trae el suyo. Así ninguna clase base pisa a una variante.
*/

export const cx = (...parts: Array<string | false | null | undefined>): string =>
  parts.filter(Boolean).join(" ");

export const container = "mx-auto w-full max-w-[78rem] px-5 tablet:px-8";

export const sectionY = "py-[clamp(4.5rem,2.5rem+7vw,8.5rem)]";

export const btn =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border-2 px-6 py-3 text-base font-semibold leading-tight text-center transition-[background-color,border-color,color,translate] duration-200 ease-out active:translate-y-px";

export const btnLg = "min-h-14 px-7 py-4 text-lg";

export const btnSm = "min-h-11 px-4 py-2 text-[0.95rem]";

export const btnVariant = {
  /** Acción principal sobre fondo oscuro (hero, cierre, encabezado). */
  primaryDark:
    "border-lima-400 bg-lima-400 text-ink-950 hover:border-lima-500 hover:bg-lima-500",
  /** Acción principal sobre fondo claro. */
  primaryLight:
    "border-cobalt-600 bg-cobalt-600 text-white hover:border-cobalt-700 hover:bg-cobalt-700",
  /** Acción secundaria sobre fondo oscuro. */
  secondaryDark:
    "border-white/50 bg-cobalt-600 text-white hover:border-white hover:bg-cobalt-500",
  /** Acción secundaria sobre el panel del menú, que es más oscuro que el resto. */
  secondaryDeep:
    "border-white/50 bg-cobalt-700 text-white hover:border-white hover:bg-cobalt-600",
  /** Acción secundaria sobre fondo claro. */
  secondaryLight:
    "border-ink-950/35 bg-white text-ink-950 hover:border-ink-950 hover:bg-mist",
} as const;

export type BtnVariant = keyof typeof btnVariant;

/** Enlace de texto con subrayado, para contenido corrido. */
export const textLink =
  "font-medium text-cobalt-600 underline decoration-cobalt-600/40 decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-600";

/** Etiqueta chica (tecnologías, tipo de proyecto). */
export const chip =
  "inline-flex items-center rounded-sm border border-line bg-white px-2.5 py-1 font-mono text-[0.8125rem] leading-none text-ink-800";

export const chipTech = chip;

/** Etiqueta de aclaración sobre la naturaleza del proyecto. */
export const badge =
  "inline-flex items-center gap-1.5 rounded-sm border border-ink-950/25 bg-cobalt-100 px-2.5 py-1 text-[0.8125rem] font-semibold leading-none text-ink-950";

/** Título de sección. */
export const h2 = "font-display text-heading font-semibold text-ink-950";

export const lead = "text-lead text-ink-600";
