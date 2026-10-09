function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const site = {
  name: "López Tech",
  title: "Desarrollador web freelance en Argentina",
  description:
    "Sitios web y aplicaciones móviles a medida, de la idea a la publicación. Diseño, desarrollo y puesta en línea para negocios, empresas y startups. Trabajo remoto con clientes de cualquier ciudad de Argentina.",
  locale: "es_AR",
} as const;
