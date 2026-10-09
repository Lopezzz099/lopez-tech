import { faqs } from "@/lib/faq";
import { container, cx, h2, lead, sectionY } from "@/lib/ui";
import { PlusIcon } from "../ui/icons";

/** Acordeón con <details>: funciona sin JavaScript. */
export function Faq() {
  return (
    <section
      id="preguntas"
      aria-labelledby="titulo-preguntas"
      className={cx("bg-night-800", sectionY)}
    >
      <div className={cx(container, "grid gap-12 laptop:grid-cols-12 laptop:gap-16")}>
        <div className="laptop:col-span-4">
          <h2 id="titulo-preguntas" className={h2}>
            Preguntas frecuentes
          </h2>
          <p className={cx(lead, "mt-5")}>
            Lo que suelen preguntarme antes de empezar.
          </p>
        </div>

        <div className="border-t-2 border-gold-400 laptop:col-span-8">
          {faqs.map((item) => (
            <details key={item.question} className="group border-b border-night-700">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-4 font-display text-title font-semibold hover:text-gold-400">
                {item.question}
                <PlusIcon
                  width={24}
                  height={24}
                  className="faq-icon shrink-0 text-gold-400 transition-[rotate] duration-200 ease-out"
                />
              </summary>
              <p className="measure pb-6 text-fg-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
