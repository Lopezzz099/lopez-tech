import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/ui/contact-links";
import { BrowserFrame, PhoneFrame } from "@/components/ui/frames";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeIcon,
  ExternalIcon,
} from "@/components/ui/icons";
import { ProjectMedia } from "@/components/ui/project-media";
import { projectBySlug, projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";
import {
  badge,
  btn,
  btnLg,
  btnVariant,
  chip,
  container,
  cx,
  h2,
  sectionY,
} from "@/lib/ui";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const title = `${project.name}: ${project.type.toLowerCase()}`;
  const description = `${project.tagline} ${project.description}`;
  return {
    title,
    description,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${title} | López Tech`,
      description,
      url: `${siteUrl}/proyectos/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const isApp = project.kind === "app";

  return (
    <>
      <section
        aria-labelledby="titulo-proyecto"
        className="on-dark overflow-hidden bg-cobalt-600 text-white"
      >
        <div
          className={cx(
            container,
            "grid items-center gap-12 pt-8 pb-16 laptop:grid-cols-[1fr_1.05fr] laptop:gap-14 laptop:pt-12 laptop:pb-24",
          )}
        >
          <div>
            <Link
              href="/#proyectos"
              className="inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-medium text-cobalt-100 underline-offset-4 hover:text-lima-400 hover:underline"
            >
              <ArrowLeftIcon width={18} height={18} />
              Todos los proyectos
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className={chip}>{project.type}</span>
              <span className={badge}>{project.badge}</span>
            </div>
            <h1
              id="titulo-proyecto"
              className="mt-5 font-display text-display font-bold"
            >
              {project.name}
            </h1>
            <p className="mt-5 text-lead text-white">{project.tagline}</p>
            <p className="measure mt-4 text-cobalt-100">{project.description}</p>

            <div className="mt-8 flex flex-col gap-3 narrow:flex-row narrow:flex-wrap">
              {project.siteUrl ? (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(btn, btnLg, btnVariant.primaryDark)}
                >
                  Ver el sitio
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  <ExternalIcon />
                </a>
              ) : (
                <WhatsAppButton size="lg" message={project.whatsappMessage}>
                  Pedime una demo
                </WhatsAppButton>
              )}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(btn, btnLg, btnVariant.secondaryDark)}
                >
                  <CodeIcon />
                  Ver el código
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              ) : null}
            </div>
            {!project.siteUrl ? (
              <p className="mt-5 max-w-[46ch] text-sm text-cobalt-200">
                La app no está publicada en ninguna tienda ni tiene enlace
                público. Escribime y te la muestro funcionando.
              </p>
            ) : !project.repoUrl ? (
              <p className="mt-5 max-w-[46ch] text-sm text-cobalt-200">
                El código de este proyecto es privado.
              </p>
            ) : null}
          </div>

          <ProjectMedia project={project} priority />
        </div>
      </section>

      <section
        aria-labelledby="titulo-demuestra"
        className={cx("bg-paper", sectionY)}
      >
        <div className={container}>
          <h2 id="titulo-demuestra" className={h2}>
            Qué demuestra por dentro
          </h2>
          <ul className="mt-12 grid gap-x-12 gap-y-10 tablet:grid-cols-2">
            {project.demonstrates.map((point) => (
              <li key={point.title} className="border-t-2 border-ink-950 pt-5">
                <h3 className="font-display text-title font-semibold">
                  {point.title}
                </h3>
                <p className="mt-3 text-ink-800">{point.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <h3 className="font-display text-title font-semibold">Tecnologías</h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías del proyecto">
              {project.stack.map((tech) => (
                <li key={tech} className={chip}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="titulo-capturas"
        className={cx("bg-mist", sectionY)}
      >
        <div className={container}>
          <h2 id="titulo-capturas" className={h2}>
            Capturas
          </h2>
          {project.shotsNote ? (
            <p className="mt-4 max-w-[60ch] text-ink-600">{project.shotsNote}</p>
          ) : null}

          {project.desktop.length > 0 ? (
            <div className="mt-10">
              <h3 className="font-display text-title font-semibold">En escritorio</h3>
              <div className="mt-5 grid gap-6 laptop:grid-cols-2">
                {project.desktop.map((shot) => (
                  <BrowserFrame
                    key={shot.src}
                    shot={shot}
                    sizes="(min-width: 64rem) 560px, 100vw"
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12">
            <h3 className="font-display text-title font-semibold">En celular</h3>
            <div
              className={cx(
                "mt-5 grid gap-6",
                project.mobile.length > 2
                  ? "grid-cols-2 laptop:grid-cols-4"
                  : "grid-cols-2 tablet:max-w-xl",
              )}
            >
              {project.mobile.map((shot) => (
                <PhoneFrame
                  key={shot.src}
                  shot={shot}
                  sizes="(min-width: 64rem) 280px, 45vw"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label="Otros proyectos"
        className="border-b border-line bg-paper"
      >
        <div className={cx(container, "grid tablet:grid-cols-2")}>
          <Link
            href={`/proyectos/${prev.slug}`}
            className="group flex min-h-24 flex-col justify-center gap-1 py-6 tablet:pr-8"
          >
            <span className="inline-flex items-center gap-2 text-sm text-ink-600">
              <ArrowLeftIcon width={16} height={16} />
              Proyecto anterior
            </span>
            <span className="font-display text-title font-semibold group-hover:text-cobalt-600">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/proyectos/${next.slug}`}
            className="group flex min-h-24 flex-col justify-center gap-1 border-t border-line py-6 tablet:items-end tablet:border-t-0 tablet:border-l tablet:pl-8"
          >
            <span className="inline-flex items-center gap-2 text-sm text-ink-600">
              Proyecto siguiente
              <ArrowRightIcon width={16} height={16} />
            </span>
            <span className="font-display text-title font-semibold group-hover:text-cobalt-600">
              {next.name}
            </span>
          </Link>
        </div>
      </nav>

      <Contact
        message={project.whatsappMessage}
        title="¿Querés algo así para lo tuyo?"
        text="Contame tu idea por WhatsApp y vemos qué haría falta. Te respondo y seguimos desde ahí."
      />
    </>
  );
}
