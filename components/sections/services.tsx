import { services } from "@/lib/services";
import { container, cx, h2, lead, sectionY } from "@/lib/ui";

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="titulo-servicios"
      className={cx("bg-mist", sectionY)}
    >
      <div className={cx(container, "grid gap-12 laptop:grid-cols-12 laptop:gap-16")}>
        <div className="laptop:col-span-4">
          <div className="laptop:sticky laptop:top-28">
            <h2 id="titulo-servicios" className={h2}>
              Lo que hago
            </h2>
            <p className={cx(lead, "mt-5")}>
              Desde una página para tu negocio hasta una app para el teléfono,
              todo pasa por las mismas manos.
            </p>
          </div>
        </div>

        <ul className="border-t-2 border-ink-950 laptop:col-span-8">
          {services.map((service) => (
            <li
              key={service.title}
              className="reveal grid gap-2 border-b border-line py-7 tablet:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] tablet:gap-8"
            >
              <h3 className="font-display text-title font-semibold">{service.title}</h3>
              <p className="text-ink-800">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
