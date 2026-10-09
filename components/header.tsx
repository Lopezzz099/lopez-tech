"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { contact, mailtoUrl } from "@/lib/contact";
import { navItems } from "@/lib/nav";
import { btn, btnSm, btnVariant, cx } from "@/lib/ui";
import { WhatsAppButton } from "./ui/contact-links";
import { CloseIcon, LinkedInIcon, MailIcon, MenuIcon } from "./ui/icons";
import { Logo } from "./ui/logo";

/** Devuelve el id de la sección de la portada que está en la franja de lectura. */
function useActiveSection(enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Gana la última de la lista que esté en la franja, que coincide con el orden de la página.
        const current = sections.filter((s) => visible.has(s.id)).at(-1);
        setActive(current?.id ?? null);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function Header() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isHome = pathname === "/";
  const sectionActive = useActiveSection(isHome);
  const activeId = isHome
    ? sectionActive
    : pathname.startsWith("/proyectos")
      ? "proyectos"
      : null;

  const openMenu = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // El panel se cierra al cambiar de ruta.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-(--z-header) border-b border-night-700 bg-night-950 text-fg">
      <div className="mx-auto flex h-16 w-full max-w-[78rem] items-center justify-between gap-3 pr-2 pl-4 tablet:px-8">
        <Logo current={isHome && activeId === null} />

        <nav aria-label="Principal" className="hidden laptop:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const current = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={current ? "location" : undefined}
                    className={cx(
                      "relative inline-flex min-h-11 items-center px-3 text-[0.95rem] font-medium transition-colors hover:text-gold-300",
                      current ? "text-fg" : "text-fg-soft",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cx(
                        "absolute inset-x-3 bottom-1.5 h-0.5 rounded-full bg-gold-400 transition-opacity",
                        current ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <WhatsAppButton size="sm" className="px-3.5 tablet:px-4">
            Escribime
          </WhatsAppButton>
          <button
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            aria-controls="menu-movil"
            aria-label="Abrir menú"
            className="inline-flex size-12 items-center justify-center rounded-lg text-fg transition-colors hover:bg-night-700 laptop:hidden"
          >
            <MenuIcon width={26} height={26} />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="menu-movil"
        aria-label="Menú"
        onClick={(e) => {
          // Un clic sobre el fondo oscuro llega al propio <dialog>.
          if (e.target === dialogRef.current) closeMenu();
        }}
        className="drawer fixed inset-y-0 right-0 left-auto z-(--z-drawer) m-0 h-dvh max-h-none w-[min(21rem,86vw)] max-w-none border-0 border-l border-night-700 bg-night-950 p-0 text-fg"
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 pt-3 pb-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">Menú</span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="-mr-2 inline-flex size-12 items-center justify-center rounded-lg transition-colors hover:bg-night-950"
            >
              <CloseIcon width={26} height={26} />
            </button>
          </div>

          <nav aria-label="Secciones" className="mt-4">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const current = activeId === item.id;
                return (
                  <li key={item.id} className="border-b border-night-700/15 last:border-b-0">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={current ? "location" : undefined}
                      className={cx(
                        "flex min-h-14 items-center justify-between gap-3 font-display text-title font-semibold transition-colors hover:text-gold-300",
                        current ? "text-gold-400" : "text-fg",
                      )}
                    >
                      {item.label}
                      {current ? (
                        <span
                          aria-hidden="true"
                          className="size-2.5 rounded-full bg-gold-400"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <WhatsAppButton size="lg" className="w-full" />
            <a
              href={mailtoUrl()}
              className={cx(btn, btnSm, btnVariant.secondaryDeep, "w-full")}
            >
              <MailIcon />
              <span className="break-all">{contact.email}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(btn, btnSm, btnVariant.secondaryDeep, "w-full")}
            >
              <LinkedInIcon />
              LinkedIn
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
