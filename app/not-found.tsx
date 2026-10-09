import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/contact-links";
import { btn, btnVariant, container, cx } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="bg-night-950 py-24 text-fg">
      <div className={container}>
        <h1 className="font-display text-display font-bold">No encontré esa página</h1>
        <p className="measure mt-5 text-lead text-fg-soft">
          El enlace puede estar mal escrito o la página ya no existe. Podés
          volver al inicio o escribirme directamente.
        </p>
        <div className="mt-8 flex flex-col gap-3 narrow:flex-row">
          <Link href="/" className={cx(btn, btnVariant.secondary)}>
            Volver al inicio
          </Link>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
