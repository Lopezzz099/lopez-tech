import Link from "next/link";
import { contact, mailtoUrl } from "@/lib/contact";
import { navItems } from "@/lib/nav";
import { container } from "@/lib/ui";
import { Logo } from "./ui/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-hide-float
      className="bg-night-950 pt-14 pb-10 text-fg-soft"
    >
      <div className={container}>
        <div className="grid gap-10 tablet:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="text-fg" />
            <p className="mt-4 max-w-[34ch] text-sm text-fg-mute">
              Sitios web y aplicaciones móviles, de la idea a la publicación.
              Trabajo de forma remota desde Argentina.
            </p>
          </div>

          <nav aria-label="Secciones del pie">
            <h2 className="font-display text-base font-semibold text-fg">Secciones</h2>
            <ul className="mt-3 grid gap-0.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-fg-soft underline-offset-4 hover:text-gold-300 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-semibold text-fg">Contacto</h2>
            <ul className="mt-3 grid gap-0.5">
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[0.95rem] text-fg-soft underline-offset-4 hover:text-gold-300 hover:underline"
                >
                  WhatsApp
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
              <li>
                <a
                  href={mailtoUrl()}
                  className="inline-flex min-h-11 items-center break-all text-[0.95rem] text-fg-soft underline-offset-4 hover:text-gold-300 hover:underline"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[0.95rem] text-fg-soft underline-offset-4 hover:text-gold-300 hover:underline"
                >
                  LinkedIn
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-night-700 pt-6 text-sm text-fg-mute">
          © {year} López Tech. Hecho con Next.js y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
