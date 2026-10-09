import { steps } from "@/lib/process";
import { container, cx, h2, lead, sectionY } from "@/lib/ui";

/** Los números sí van acá: el orden de los pasos es información. */
export function Process() {
  return (
    <section
      id="proceso"
      aria-labelledby="titulo-proceso"
      className={cx("bg-paper", sectionY)}
    >
      <div className={container}>
        <div className="max-w-3xl">
          <h2 id="titulo-proceso" className={h2}>
            Cómo trabajo
          </h2>
          <p className={cx(lead, "measure mt-5")}>
            Cinco pasos, siempre en el mismo orden, para que sepas en qué punto
            está tu proyecto.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 laptop:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="reveal grid grid-cols-[3.5rem_1fr] gap-x-4 laptop:block"
            >
              <span
                aria-hidden="true"
                className="font-display text-[3rem] leading-none font-bold text-cobalt-600 laptop:block laptop:text-[3.75rem]"
              >
                {i + 1}
              </span>
              <div className="laptop:mt-5 laptop:border-t-2 laptop:border-ink-950 laptop:pt-5">
                <h3 className="font-display text-title font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink-800">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
