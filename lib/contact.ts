// Único lugar donde viven los datos de contacto. Todo el sitio los lee de acá.
export const contact = {
  whatsapp: "542914048598",
  email: "nacholopez1903@gmail.com",
  linkedin: "https://www.linkedin.com/in/ignacio-lopez099/",
} as const;

export const WHATSAPP_MESSAGE =
  "Hola, vi tu página de López Tech y quiero consultarte por un proyecto.";

export const EMAIL_SUBJECT = "Consulta desde la web de López Tech";

export function whatsappUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string = EMAIL_SUBJECT): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
