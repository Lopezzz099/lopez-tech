import type { Project } from "@/lib/projects";
import { cx } from "@/lib/ui";
import { BrowserFrame, PhoneFrame } from "./frames";

type Props = {
  project: Project;
  /** La primera imagen de la página puede cargarse con prioridad. */
  priority?: boolean;
  className?: string;
};

function hostOf(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).host;
  } catch {
    return undefined;
  }
}

/**
 * Composición de capturas para las tarjetas de proyecto: ventana de escritorio con
 * el teléfono encima (sitios) o dos teléfonos escalonados (apps).
 */
export function ProjectMedia({ project, priority, className }: Props) {
  if (project.kind === "app") {
    const [a, b] = project.mobile;
    return (
      <div
        className={cx(
          "flex items-start justify-center gap-4 rounded-lg bg-cobalt-100 px-6 pt-8 tablet:gap-8 tablet:px-10 tablet:pt-10",
          className,
        )}
      >
        <PhoneFrame
          shot={a}
          priority={priority}
          sizes="(min-width: 64rem) 240px, 40vw"
          className="w-[44%] max-w-[15rem]"
        />
        <PhoneFrame
          shot={b}
          priority={priority}
          sizes="(min-width: 64rem) 240px, 40vw"
          className="mt-10 w-[44%] max-w-[15rem] tablet:mt-14"
        />
      </div>
    );
  }

  return (
    <div className={cx("relative pr-[4%] pb-10 tablet:pb-14", className)}>
      <BrowserFrame
        shot={project.desktop[0]}
        priority={priority}
        address={hostOf(project.siteUrl)}
        sizes="(min-width: 64rem) 700px, 100vw"
      />
      <PhoneFrame
        shot={project.mobile[0]}
        priority={priority}
        sizes="(min-width: 64rem) 150px, 28vw"
        className="absolute right-0 bottom-0 w-[24%] max-w-[9.5rem]"
      />
    </div>
  );
}
