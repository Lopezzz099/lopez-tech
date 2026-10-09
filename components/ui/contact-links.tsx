import type { ReactNode } from "react";
import { contact, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { btn, btnLg, btnSm, btnVariant, cx, type BtnVariant } from "@/lib/ui";
import { LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";

type Size = "sm" | "md" | "lg";

const sizeClass: Record<Size, string> = { sm: btnSm, md: "", lg: btnLg };

type WhatsAppButtonProps = {
  variant?: BtnVariant;
  size?: Size;
  /** Mensaje precargado. Si falta, se usa el genérico de lib/contact.ts. */
  message?: string;
  className?: string;
  children?: ReactNode;
};

/** La acción principal de toda la página: escribir por WhatsApp. */
export function WhatsAppButton({
  variant = "primary",
  size = "md",
  message,
  className,
  children = "Escribime por WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(btn, btnVariant[variant], sizeClass[size], className)}
    >
      <WhatsAppIcon width={size === "sm" ? 18 : 22} height={size === "sm" ? 18 : 22} />
      {children}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}

type SecondaryProps = { variant?: BtnVariant; size?: Size; className?: string };

export function EmailButton({
  variant = "secondary",
  size = "md",
  className,
}: SecondaryProps) {
  return (
    <a
      href={mailtoUrl()}
      className={cx(btn, btnVariant[variant], sizeClass[size], className)}
    >
      <MailIcon />
      <span className="break-all">{contact.email}</span>
    </a>
  );
}

export function LinkedInButton({
  variant = "secondary",
  size = "md",
  className,
}: SecondaryProps) {
  return (
    <a
      href={contact.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(btn, btnVariant[variant], sizeClass[size], className)}
    >
      <LinkedInIcon />
      LinkedIn
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}
