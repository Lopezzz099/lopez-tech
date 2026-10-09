export type AboutPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const about = {
  title: "Quién va a trabajar en tu proyecto",
  paragraphs: [
    "Soy Ignacio López, desarrollador frontend. Trabajo con React, Next.js y TypeScript, y también desarrollo aplicaciones móviles con React Native.",
    "López Tech es el nombre con el que tomo proyectos de sitios web y apps, de principio a fin, para clientes de cualquier ciudad. Estudio la Licenciatura en Gestión de Tecnología de la Información en UADE.",
  ],
  // Completar cuando haya foto: archivo dentro de /public, con su texto alternativo y medidas.
  photo: null as AboutPhoto | null,
};
