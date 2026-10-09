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
      className={cx("on-dark bg-cobalt-600 text-white", sectionY)}
    >
      <div className={container}>
        <div className="max-w-3xl">
          <h2
            id="titulo-contacto"
            className="font-display text-display font-bold"
          >
            {title}
          </h2>
          <p className="measure mt-6 text-lead text-cobalt-100">{text}</p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <div>
            <WhatsAppButton size="lg" message={message} className="w-full tablet:w-auto" />
          </div>
          <div>
            <p className="mb-3 text-sm text-cobalt-200">También podés escribirme por:</p>
            <div className="flex flex-col gap-3 tablet:flex-row tablet:flex-wrap">
              <EmailButton />
              <LinkedInButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
