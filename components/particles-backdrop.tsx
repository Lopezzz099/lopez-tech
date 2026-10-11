"use client";

import { useEffect, useState, type ComponentType } from "react";
import type { ParticlesProps } from "./particles";

// Dorado apagado de la marca y un gris azulado, para que no compitan con el texto.
const COLORS = ["#d6b265", "#d6b265", "#ebcd8c", "#a0a5ae"];

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

/**
 * Fondo de partículas para las cabeceras oscuras. Se carga después de que la
 * página ya pintó, no se carga con movimiento reducido ni con ahorro de datos, y
 * no recibe clics: el contenido queda por encima.
 */
export function ParticlesBackdrop() {
  const [Particles, setParticles] = useState<ComponentType<ParticlesProps> | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;
    if (reduce || saveData) return;

    let cancelled = false;
    let timer = 0;
    let started = false;
    const events = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;

    const load = () => {
      import("./particles").then((mod) => {
        if (!cancelled) setParticles(() => mod.default);
      });
    };
    const start = () => {
      if (started) return;
      started = true;
      events.forEach((e) => window.removeEventListener(e, start));
      window.clearTimeout(timer);
      load();
    };
    // El fondo es decorativo: arranca con la primera interacción, o 1,2 segundos después de cargada la página.
    events.forEach((e) => window.addEventListener(e, start, { passive: true, once: true }));
    const arm = () => {
      timer = window.setTimeout(start, 1200);
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });

    return () => {
      cancelled = true;
      events.forEach((e) => window.removeEventListener(e, start));
      window.removeEventListener("load", arm);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div aria-hidden="true" className="particles-in pointer-events-none absolute inset-0 z-0">
      {Particles ? (
        <Particles
          particleColors={COLORS}
          particleCount={190}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={420}
          sizeRandomness={1.4}
          alphaParticles
          moveParticlesOnHover
          particleHoverFactor={1.2}
        />
      ) : null}
    </div>
  );
}
