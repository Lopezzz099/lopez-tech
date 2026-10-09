import { projectBySlug } from "@/lib/projects";
import { btn, btnLg, btnVariant, container, cx } from "@/lib/ui";
import { WhatsAppButton } from "../ui/contact-links";
import { BrowserFrame, PhoneFrame } from "../ui/frames";

export function Hero() {
  const web = projectBySlug("terracoffe")!.desktop[0];
  const phone = projectBySlug("laboratorios-calden")!.mobile[1];

  return (
    <section
      data-hide-float
      aria-labelledby="titulo-principal"
      className="overflow-hidden bg-night-950 text-fg"
    >
      <div
        className={cx(
          container,
          "grid items-center gap-12 pt-12 pb-20 laptop:grid-cols-[0.95fr_1.05fr] laptop:gap-14 laptop:pt-20 laptop:pb-28",
        )}
      >
        <div>
          <h1
            id="titulo-principal"
            className="rise font-display text-display font-bold"
            style={{ ["--i" as string]: 0 }}
          >
            Tu sitio web o tu app, de la idea a la{" "}
            <span className="marker">publicación</span>
          </h1>
          <p
            className="rise measure mt-7 text-lead text-fg-soft"
            style={{ ["--i" as string]: 1 }}
          >
            Soy Ignacio López y desarrollo sitios web y aplicaciones móviles
            para negocios, empresas y startups. Diseño, programo y lo dejo en
            línea.
          </p>
          <div
            className="rise mt-9 flex flex-col gap-3 narrow:flex-row narrow:flex-wrap"
            style={{ ["--i" as string]: 2 }}
          >
            <WhatsAppButton size="lg" />
            <a
              href="#proyectos"
              className={cx(btn, btnLg, btnVariant.secondary)}
            >
              Ver proyectos
            </a>
          </div>
          <p
            className="rise mt-6 text-sm text-fg-mute"
            style={{ ["--i" as string]: 3 }}
          >
            Trabajo de forma remota desde Argentina, con clientes de cualquier ciudad.
          </p>
        </div>

        <figure className="rise" style={{ ["--i" as string]: 2 }}>
          <div className="relative pb-10 tablet:pb-14">
          <BrowserFrame
            shot={web}
            priority
            address="terracoffe-one.vercel.app"
            sizes="(min-width: 64rem) 620px, (min-width: 48rem) 720px, 100vw"
            className="w-[90%]"
          />
          <PhoneFrame
            shot={phone}
            sizes="(min-width: 64rem) 150px, 120px"
            className="absolute right-0 bottom-0 w-[24%] max-w-[10rem]"
          />
          </div>
          <figcaption className="mt-2 max-w-[44ch] text-sm text-fg-mute">
            TerraCoffe y Laboratorios Caldén, dos de mis sitios de demostración.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
