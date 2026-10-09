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
  /** Acción principal: dorado apagado con texto oscuro. */
  primary:
    "border-gold-400 bg-gold-400 text-night-950 hover:border-gold-300 hover:bg-gold-300",
  /** Acción secundaria sobre fondo oscuro. */
  secondary:
    "border-fg/35 bg-night-900 text-fg hover:border-fg hover:bg-night-700",
  /** Acción secundaria sobre el panel del menú, que es más oscuro que el resto. */
  secondaryDeep:
    "border-fg/35 bg-night-950 text-fg hover:border-fg hover:bg-night-700",
  /** Acción principal sobre el bloque dorado del cierre. */
  onGoldPrimary:
    "border-night-950 bg-night-950 text-gold-300 hover:border-night-800 hover:bg-night-800",
  /** Acción secundaria sobre el bloque dorado del cierre. */
  onGoldSecondary:
    "border-night-950/60 bg-gold-400 text-night-950 hover:border-night-950 hover:bg-gold-300",
} as const;

export type BtnVariant = keyof typeof btnVariant;

/** Enlace de texto con subrayado, para contenido corrido. */
export const textLink =
  "font-medium text-gold-400 underline decoration-gold-400/40 decoration-2 underline-offset-4 transition-colors hover:decoration-gold-400";

/** Etiqueta chica (tecnologías, tipo de proyecto). */
export const chip =
  "inline-flex items-center rounded-sm border border-night-700 bg-night-800 px-2.5 py-1 font-mono text-[0.8125rem] leading-none text-fg-soft";

export const chipTech = chip;

/** Etiqueta de aclaración sobre la naturaleza del proyecto. */
export const badge =
  "inline-flex items-center gap-1.5 rounded-sm border border-gold-400/25 bg-night-800 px-2.5 py-1 text-[0.8125rem] font-semibold leading-none text-fg";

/** Título de sección. */
export const h2 = "font-display text-heading font-semibold text-fg";

export const lead = "text-lead text-fg-mute";
