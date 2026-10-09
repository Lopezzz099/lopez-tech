// Los montos están sin completar a propósito: reemplazá cada [PRECIO] por el valor real.
export type Plan = {
  name: string;
  summary: string;
  price: string;
  priceNote: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Página para tu negocio",
    summary: "Una página para presentar tu negocio y recibir consultas.",
    price: "[PRECIO]",
    priceNote: "pago único",
    features: [
      "Diseño a medida",
      "Versión para celular",
      "Preparada para buscadores",
      "Botón de WhatsApp y datos de contacto",
      "Publicación en línea",
    ],
  },
  {
    name: "Sitio completo",
    summary: "Varias secciones, catálogo o contenido propio.",
    price: "[PRECIO]",
    priceNote: "pago único",
    featured: true,
    features: [
      "Todo lo de la página para tu negocio",
      "Varias páginas con navegación",
      "Catálogo con filtros o secciones de contenido",
      "Textos y estructura trabajados con vos",
      "Publicación y soporte inicial",
    ],
  },
  {
    name: "App móvil",
    summary: "Una aplicación para Android y iPhone.",
    price: "[PRECIO]",
    priceNote: "pago único",
    features: [
      "Diseño de pantallas",
      "Desarrollo con React Native y Expo",
      "Datos guardados en el teléfono, con o sin conexión",
      "Recordatorios locales si la app los necesita",
      "Entrega del proyecto y acompañamiento inicial",
    ],
  },
];

export const maintenance = {
  name: "Mantenimiento mensual",
  text: "Correcciones, actualizaciones y cambios de contenido después de publicar.",
  price: "[PRECIO]",
  priceNote: "por mes",
};
