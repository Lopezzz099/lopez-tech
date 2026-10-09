"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/contact";
import { cx } from "@/lib/ui";
import { WhatsAppIcon } from "./ui/icons";

/**
 * Botón flotante solo para celular. Se esconde mientras haya a la vista un
 * bloque marcado con data-hide-float (el hero, que ya tiene el botón, el cierre
 * y el pie), así nunca tapa esas zonas ni se repite.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-hide-float]");
    if (targets.length === 0) {
      setVisible(true);
      return;
    }
    const covering = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) covering.add(entry.target);
        else covering.delete(entry.target);
      }
      setVisible(covering.size === 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribime por WhatsApp (se abre en una pestaña nueva)"
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
      className={cx(
        "fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-(--z-float) inline-flex size-14 items-center justify-center rounded-full border-2 border-ink-950 bg-lima-400 text-ink-950 shadow-[0_4px_14px_oklch(0.2_0.045_265/0.35)] transition-[opacity,translate,background-color] duration-300 ease-out hover:bg-lima-500 laptop:hidden",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
