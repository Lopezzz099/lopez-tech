import { maintenance, plans, type Plan } from "@/lib/plans";
import { container, cx, h2, lead, sectionY } from "@/lib/ui";
import { WhatsAppButton } from "../ui/contact-links";
import { CheckIcon } from "../ui/icons";

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.featured === true;
  return (
    <li
      className={cx(
        "reveal flex flex-col rounded-lg border-2 p-7",
        featured
          ? "on-dark border-cobalt-600 bg-cobalt-600 text-white"
          : "border-ink-950 bg-white text-ink-950",
      )}
    >
      <h3 className="font-display text-title font-semibold">{plan.name}</h3>
      <p className={cx("mt-2", featured ? "text-cobalt-100" : "text-ink-600")}>
        {plan.summary}
      </p>

      <p className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-[2.4rem] leading-none font-bold">
          {plan.price}
        </span>
        <span className={cx("text-sm", featured ? "text-cobalt-200" : "text-ink-600")}>
          {plan.priceNote}
        </span>
      </p>

      <ul className="mt-6 grid gap-3 border-t border-current/20 pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <CheckIcon
              width={20}
              height={20}
              className={cx("mt-1 shrink-0", featured ? "text-lima-400" : "text-cobalt-600")}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <WhatsAppButton
          variant={featured ? "primaryDark" : "primaryLight"}
          className="w-full"
          message={`Hola, vi la página de López Tech y quiero consultarte por el plan «${plan.name}».`}
        >
          Consultar este plan
        </WhatsAppButton>
      </div>
    </li>
  );
}

export function Plans() {
  return (
    <section
      id="planes"
      aria-labelledby="titulo-planes"
      className={cx("bg-mist", sectionY)}
    >
      <div className={container}>
        <div className="max-w-3xl">
          <h2 id="titulo-planes" className={h2}>
            Planes
          </h2>
          <p className={cx(lead, "measure mt-5")}>
            Tres puntos de partida. Después de la charla inicial te paso una
            propuesta con el alcance y el precio exacto de tu proyecto.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 laptop:grid-cols-3 laptop:items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </ul>

        <div className="reveal mt-6 flex flex-col gap-4 rounded-lg border-2 border-ink-950 bg-white p-7 tablet:flex-row tablet:items-center tablet:justify-between">
          <div>
            <h3 className="font-display text-title font-semibold">{maintenance.name}</h3>
            <p className="mt-1 text-ink-600">{maintenance.text}</p>
          </div>
          <p className="flex items-baseline gap-2">
            <span className="font-display text-[2rem] leading-none font-bold">
              {maintenance.price}
            </span>
            <span className="text-sm text-ink-600">{maintenance.priceNote}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
