import Image from "next/image";
import { about } from "@/lib/about";
import { contact } from "@/lib/contact";
import { chip, container, cx, h2, sectionY, textLink } from "@/lib/ui";

const tools = ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo"];

export function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="titulo-sobre-mi"
      className={cx("bg-mist", sectionY)}
    >
      <div className={cx(container, "grid gap-12 laptop:grid-cols-12 laptop:gap-16")}>
        <div className="laptop:col-span-5">
          <h2 id="titulo-sobre-mi" className={h2}>
            {about.title}
          </h2>
          {about.photo ? (
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              width={about.photo.width}
              height={about.photo.height}
              sizes="(min-width: 64rem) 420px, 100vw"
              className="mt-8 h-auto w-full max-w-sm rounded-lg border-2 border-ink-950"
            />
          ) : null}
        </div>

        <div className="laptop:col-span-7">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="measure mb-5 text-lead text-ink-800">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologías con las que trabajo">
            {tools.map((tool) => (
              <li key={tool} className={chip}>
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              Mi perfil de LinkedIn
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
