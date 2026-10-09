import { container, cx, sectionY } from "@/lib/ui";
import { EmailButton, LinkedInButton, WhatsAppButton } from "../ui/contact-links";

type Props = {
  /** Mensaje precargado de WhatsApp (por ejemplo, el de una página de proyecto). */
  message?: string;
  title?: string;
  text?: string;
};

/** Cierre con el llamado a la acción repetido. WhatsApp pesa más; email y LinkedIn acompañan. */
export function Contact({
  message,
  title = "Contame qué querés construir",
  text = "Escribime por WhatsApp con tu idea, aunque todavía sea general. Te respondo y vemos cómo seguir.",
}: Props) {
  return (
    <section
      id="contacto"
      data-hide-float
      aria-labelledby="titulo-contacto"
      className={cx("on-gold bg-gold-400 text-night-950", sectionY)}
    >
      <div className={cx(container, "grid items-end gap-10 laptop:grid-cols-12 laptop:gap-16")}>
        <div className="laptop:col-span-7">
          <h2
            id="titulo-contacto"
            className="font-display text-display font-bold"
          >
            {title}
          </h2>
          <p className="measure mt-6 text-lead text-night-800">{text}</p>
        </div>

        <div className="flex flex-col gap-6 laptop:col-span-5">
          <WhatsAppButton variant="onGoldPrimary" size="lg" message={message} className="w-full" />
          <div>
            <p className="mb-3 text-sm text-night-800">También podés escribirme por:</p>
            <div className="flex flex-col gap-3 narrow:flex-row narrow:flex-wrap">
              <EmailButton variant="onGoldSecondary" />
              <LinkedInButton variant="onGoldSecondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
