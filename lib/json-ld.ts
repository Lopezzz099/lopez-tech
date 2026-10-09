import { contact } from "./contact";
import { site, siteUrl } from "./site";

/** Datos estructurados ProfessionalService para los buscadores. */
export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#negocio`,
    name: site.name,
    url: siteUrl,
    description: site.description,
    telephone: `+${contact.whatsapp}`,
    email: contact.email,
    sameAs: [contact.linkedin],
    areaServed: { "@type": "Country", name: "Argentina" },
    address: { "@type": "PostalAddress", addressCountry: "AR" },
    availableLanguage: "es",
    knowsAbout: [
      "Desarrollo web",
      "Aplicaciones móviles",
      "Diseño web",
      "React",
      "Next.js",
      "React Native",
    ],
    makesOffer: [
      "Sitio institucional",
      "Página para un negocio",
      "Tienda o catálogo",
      "Rediseño de un sitio existente",
      "App móvil",
      "Mantenimiento",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}
