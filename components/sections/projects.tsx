import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import {
  badge,
  btn,
  btnVariant,
  chip,
  container,
  cx,
  h2,
  lead,
  sectionY,
  textLink,
} from "@/lib/ui";
import { WhatsAppButton } from "../ui/contact-links";
import { ArrowRightIcon, ExternalIcon } from "../ui/icons";
import { ProjectMedia } from "../ui/project-media";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <article
      aria-labelledby={`proyecto-${project.slug}`}
      className="reveal grid items-center gap-8 laptop:grid-cols-12 laptop:gap-14"
    >
      <div
        className={cx(
          "laptop:col-span-7",
          flipped ? "laptop:order-2" : "laptop:order-1",
        )}
      >
        <ProjectMedia project={project} />
      </div>

      <div
        className={cx(
          "laptop:col-span-5",
          flipped ? "laptop:order-1" : "laptop:order-2",
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className={chip}>{project.type}</span>
          <span className={badge}>{project.badge}</span>
        </div>
        <h3
          id={`proyecto-${project.slug}`}
          className="mt-4 font-display text-heading font-semibold"
        >
          {project.name}
        </h3>
        <p className="mt-3 text-lead text-ink-800">{project.tagline}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech} className={chip}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/proyectos/${project.slug}`}
            className={cx(btn, btnVariant.primaryLight)}
          >
            Ver el proyecto
            <span className="sr-only">: {project.name}</span>
            <ArrowRightIcon />
          </Link>
          {project.siteUrl ? (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(textLink, "inline-flex min-h-11 items-center gap-1.5")}
            >
              Ver el sitio
              <span className="sr-only">
                de {project.name} (se abre en una pestaña nueva)
              </span>
              <ExternalIcon width={16} height={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="titulo-proyectos"
      className={cx("bg-paper", sectionY)}
    >
      <div className={container}>
        <div className="max-w-3xl">
          <h2 id="titulo-proyectos" className={h2}>
            Cinco proyectos para mirar de cerca
          </h2>
          <p className={cx(lead, "measure mt-5")}>
            Tres sitios de demostración, una app móvil y un sitio de cabañas.
            Cada proyecto tiene su página con lo que resuelve por dentro.
          </p>
        </div>

        <div className="mt-14 grid gap-20 laptop:mt-20 laptop:gap-28">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 border-t border-line pt-10 tablet:flex-row tablet:items-center tablet:justify-between">
          <p className="font-display text-title font-semibold">
            ¿Te imaginás algo parecido para lo tuyo?
          </p>
          <WhatsAppButton variant="primaryLight" />
        </div>
      </div>
    </section>
  );
}
