export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Point = { title: string; text: string };

export type Project = {
  slug: string;
  name: string;
  kind: "web" | "app";
  /** Tipo de proyecto, se muestra como etiqueta. */
  type: string;
  /** Aclaración visible sobre la naturaleza del proyecto. */
  badge: string;
  tagline: string;
  description: string;
  demonstrates: Point[];
  stack: string[];
  siteUrl?: string;
  repoUrl?: string;
  /** Capturas de escritorio (solo proyectos web) y de celular. */
  desktop: Shot[];
  mobile: Shot[];
  /** Nota que se muestra bajo las capturas. */
  shotsNote?: string;
  /** Mensaje precargado de WhatsApp en la página del proyecto. */
  whatsappMessage: string;
};

const DESKTOP = { width: 1800, height: 1125 } as const;
const MOBILE = { width: 780, height: 1688 } as const;

const desktop = (slug: string, n: number, alt: string): Shot => ({
  src: `/proyectos/${slug}/escritorio-${n}.webp`,
  alt,
  ...DESKTOP,
});
const mobile = (slug: string, n: number, alt: string): Shot => ({
  src: `/proyectos/${slug}/celular-${n}.webp`,
  alt,
  ...MOBILE,
});

export const projects: Project[] = [
  {
    slug: "orient-express",
    name: "Orient Express",
    kind: "web",
    type: "Sitio corporativo",
    badge: "Proyecto de demostración",
    tagline: "Sitio corporativo de una petrolera ficticia de Neuquén.",
    description:
      "Pensado como si lo encargara una empresa real con cinco públicos distintos: inversores, clientes industriales, proveedores, candidatos y prensa. La empresa, las personas, las cifras y los documentos son inventados.",
    demonstrates: [
      {
        title: "Mapa de operaciones que no depende del mapa",
        text: "Leaflet se carga bajo demanda con import() dinámico. Si el mapa o las teselas fallan, la lista de activos sigue completa, con ficha, capacidad y coordenadas.",
      },
      {
        title: "Filtros que se pueden compartir",
        text: "El activo elegido en Operaciones y los filtros de Carreras viven en la URL, así que un enlace abre la misma vista.",
      },
      {
        title: "Movimiento hecho en CSS",
        text: "Las animaciones de scroll usan animation-timeline, sin librerías. Con movimiento reducido, o en navegadores sin soporte, la página se ve completa y quieta.",
      },
      {
        title: "Navegación y formularios accesibles",
        text: "Menú móvil lateral que se cierra con Escape, enlace de la sección actual marcado y formularios con resumen de errores, aria-invalid y aria-describedby.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Leaflet"],
    siteUrl: "https://orient-express-ashy.vercel.app",
    repoUrl: "https://github.com/Lopezzz099/orient-express",
    desktop: [
      desktop(
        "orient-express",
        1,
        "Portada de Orient Express: un balancín petrolero al atardecer bajo el titular «Producimos, refinamos y transportamos energía desde Neuquén», con el menú superior y el botón Contacto.",
      ),
      desktop(
        "orient-express",
        2,
        "Página Operaciones de Orient Express: lista de siete activos junto a un mapa de Neuquén y Río Negro con yacimientos, una refinería y terminales unidos por oleoductos.",
      ),
    ],
    mobile: [
      mobile(
        "orient-express",
        1,
        "Portada de Orient Express en un celular, con el titular sobre energía desde Neuquén y los botones Ver operaciones e Información para inversores.",
      ),
      mobile(
        "orient-express",
        2,
        "Página Carreras de Orient Express en un celular, con una foto industrial y el comienzo del listado de vacantes con filtro por área.",
      ),
    ],
    whatsappMessage:
      "Hola, vi el proyecto Orient Express en tu página de López Tech y quiero consultarte por un sitio corporativo.",
  },
  {
    slug: "terracoffe",
    name: "TerraCoffe",
    kind: "web",
    type: "Sitio de un local gastronómico",
    badge: "Proyecto de demostración",
    tagline: "Sitio de una cafetería de especialidad ficticia en Palermo, CABA.",
    description:
      "Una cafetería con tostadora propia que quiere mostrar su menú, contar su historia y llevar a la gente al local. La cafetería y las personas mencionadas son ficticias.",
    demonstrates: [
      {
        title: "Menú filtrable por categoría",
        text: "El filtro queda en la URL (?cat=frios), de modo que se puede compartir el menú ya filtrado.",
      },
      {
        title: "Estado de apertura en hora de Buenos Aires",
        text: "El aviso «abierto ahora» se calcula con la zona horaria de Argentina, sin importar desde dónde se mire el sitio.",
      },
      {
        title: "Mapa de orígenes con rutas y distancias",
        text: "Un mapa Leaflet dibuja un arco desde cada finca hasta Palermo y calcula los kilómetros de cada recorrido.",
      },
      {
        title: "Video de fondo con criterio",
        text: "El video del hero no se reproduce si la persona pidió menos movimiento o activó el ahorro de datos.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Leaflet"],
    siteUrl: "https://terracoffe-one.vercel.app",
    repoUrl: "https://github.com/Lopezzz099/TerraCoffe",
    desktop: [
      desktop(
        "terracoffe",
        1,
        "Portada de TerraCoffe: un café servido sobre un video de fondo y el titular «Café de tostadora propia, servido en Palermo», con los botones Ver el menú y Cómo llegar.",
      ),
      desktop(
        "terracoffe",
        2,
        "Página Origen de TerraCoffe: mapa oscuro con las tres fincas y la ficha de una finca de Huila, Colombia, con altura, proceso y distancia hasta Palermo.",
      ),
    ],
    mobile: [
      mobile(
        "terracoffe",
        1,
        "Portada de TerraCoffe en un celular, con el titular, los botones Ver el menú y Cómo llegar, y el aviso de que el local está abierto.",
      ),
      mobile(
        "terracoffe",
        2,
        "Página Origen de TerraCoffe en un celular, con el título «Tres fincas, tres tazas distintas» y el mapa de orígenes.",
      ),
    ],
    whatsappMessage:
      "Hola, vi el proyecto TerraCoffe en tu página de López Tech y quiero consultarte por un sitio para mi local.",
  },
  {
    slug: "laboratorios-calden",
    name: "Laboratorios Caldén",
    kind: "web",
    type: "Sitio institucional",
    badge: "Proyecto de demostración",
    tagline: "Sitio de un laboratorio farmacéutico ficticio con sede en Buenos Aires.",
    description:
      "Seis públicos (pacientes, profesionales de la salud, farmacias, inversores, candidatos y prensa) y dos acciones sensibles: reportar un efecto adverso y postularse a una vacante. Todo es de ejemplo y nada es consejo médico.",
    demonstrates: [
      {
        title: "Dos zonas con reglas del rubro",
        text: "Los productos de venta libre son públicos. El portafolio bajo receta vive en una zona para profesionales, detrás de una confirmación, como en un sitio real.",
      },
      {
        title: "Catálogo con filtros en la URL",
        text: "Se filtra por nombre, área y forma farmacéutica, y la selección queda en el enlace.",
      },
      {
        title: "Pensado para vista cansada",
        text: "Tipografía Atkinson Hyperlegible Next, cuerpo de 17 a 18 px, contraste medido de 7,8:1 en adelante y objetivos táctiles de 44 px.",
      },
      {
        title: "Formularios y cookies honestos",
        text: "Los formularios llevan el foco al primer error. El aviso de cookies tiene Rechazar y Aceptar con el mismo peso y no carga nada de terceros por defecto.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Leaflet"],
    siteUrl: "https://laboratorios-calden.vercel.app",
    repoUrl: "https://github.com/Lopezzz099/laboratorios-calden",
    desktop: [
      desktop(
        "laboratorios-calden",
        1,
        "Portada de Laboratorios Caldén: titular «Medicamentos hechos con cuidado, controlados paso a paso» sobre un video en tonos violeta, con los botones Ver productos y Reportar un efecto adverso.",
      ),
      desktop(
        "laboratorios-calden",
        2,
        "Catálogo de productos de Laboratorios Caldén con un aviso de sitio de demostración y filtros por nombre, área terapéutica y forma farmacéutica.",
      ),
    ],
    mobile: [
      mobile(
        "laboratorios-calden",
        1,
        "Portada de Laboratorios Caldén en un celular, con el titular, los botones Ver productos y Reportar un efecto adverso, y el menú arriba a la derecha.",
      ),
      mobile(
        "laboratorios-calden",
        2,
        "Catálogo de productos de Laboratorios Caldén en un celular, con el aviso de demostración y el comienzo de los filtros de búsqueda.",
      ),
    ],
    whatsappMessage:
      "Hola, vi el proyecto Laboratorios Caldén en tu página de López Tech y quiero consultarte por un sitio institucional.",
  },
  {
    slug: "chapuzon",
    name: "Chapuzón",
    kind: "app",
    type: "App móvil",
    badge: "Proyecto propio",
    tagline: "App móvil para llevar el mantenimiento de piletas, sin internet.",
    description:
      "Mediciones del agua, tareas con recordatorios, productos y gastos, todo guardado en el teléfono. Sirve para la pileta de una casa y para una de club. Todavía no está publicada en ninguna tienda y no tiene enlace público.",
    demonstrates: [
      {
        title: "Todo en el teléfono, sin cuentas",
        text: "Los datos viven en una base SQLite local con migraciones. No hay nube ni analítica, y funciona sin conexión. Un respaldo en JSON, con las fotos incluidas, se exporta e importa desde la app.",
      },
      {
        title: "Recordatorios que se reprograman",
        text: "Las tareas se repiten cada cierto tiempo con un recordatorio local. Al marcarlas como hechas, se programa la siguiente.",
      },
      {
        title: "Gráficos dibujados con SVG",
        text: "La evolución de pH, cloro y temperatura se dibuja con react-native-svg, en rangos de 7 días, 30 días o todo el historial.",
      },
      {
        title: "Accesible por diseño",
        text: "Cada estado lleva ícono y texto, no solo color. Los pares de colores del tema claro y del oscuro se verifican con una prueba automática de contraste AA.",
      },
    ],
    stack: [
      "React Native 0.86",
      "Expo SDK 57",
      "Expo Router",
      "TypeScript",
      "expo-sqlite",
      "react-native-svg",
      "Jest",
    ],
    desktop: [],
    mobile: [
      mobile(
        "chapuzon",
        1,
        "Pantalla de una pileta de club en Chapuzón: panel azul con «2 valores fuera de rango» y el estado del agua, con pH 7,5 y cloro libre 1,1 ppm marcados como En rango.",
      ),
      mobile(
        "chapuzon",
        2,
        "Lista de tareas atrasadas en Chapuzón, cada una con su ícono, los días de atraso y el botón para marcarla como hecha.",
      ),
      mobile(
        "chapuzon",
        3,
        "Pantalla de productos de Chapuzón con el stock de cada uno y la etiqueta Poco stock en el reductor de pH.",
      ),
      mobile(
        "chapuzon",
        4,
        "Historial de Chapuzón: línea de tiempo con tareas hechas y una medición con pH, cloro libre y temperatura.",
      ),
    ],
    shotsNote:
      "Capturas de la versión web de la app en tamaño de celular, con los datos de ejemplo que trae la app.",
    whatsappMessage:
      "Hola, vi la app Chapuzón en tu página de López Tech y quiero consultarte por una app móvil.",
  },
  {
    slug: "yellowstone-ranch",
    name: "Yellowstone Ranch",
    kind: "web",
    type: "Sitio de alquiler de cabañas",
    badge: "Proyecto propio",
    tagline: "Sitio de alquiler de cabañas de madera en Monte Hermoso.",
    description:
      "Una sola página para presentar las cabañas de un barrio cerrado, sus comodidades, la galería, las normas, la ubicación y la forma de consultar disponibilidad.",
    demonstrates: [
      {
        title: "Galería con visor nativo",
        text: "El visor usa el elemento dialog del navegador: se cierra con Escape, avanza con las flechas del teclado y devuelve el foco a la foto de la que salió.",
      },
      {
        title: "Barra de secciones que sabe dónde estás",
        text: "La barra fija marca la sección visible según la posición de lectura, y no marca ninguna cuando la pantalla está en una sección fuera del menú.",
      },
      {
        title: "Datos estructurados para buscadores",
        text: "El sitio publica un JSON-LD de tipo LodgingBusiness con la dirección y las comodidades.",
      },
      {
        title: "Movimiento con límites",
        text: "Las entradas por scroll usan IntersectionObserver y el video de portada se oculta cuando la persona pide menos movimiento.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    siteUrl: "https://monte-hermoso.vercel.app",
    desktop: [
      desktop(
        "yellowstone-ranch",
        1,
        "Portada de Yellowstone Ranch: paisaje de montañas al atardecer con la frase «Un lugar para descansar» y los botones Reserva ahora y Ver la galería.",
      ),
      desktop(
        "yellowstone-ranch",
        2,
        "Sección Servicios y comodidades de Yellowstone Ranch, con ocho íconos: hogar a leña, wifi, parrilla, cocina equipada, ropa blanca, smart TV, cochera y seguridad.",
      ),
    ],
    mobile: [
      mobile(
        "yellowstone-ranch",
        1,
        "Portada de Yellowstone Ranch en un celular, con la frase «Un lugar para descansar» y los botones Reserva ahora y Ver la galería.",
      ),
      mobile(
        "yellowstone-ranch",
        2,
        "Sección Servicios y comodidades de Yellowstone Ranch en un celular, con la barra de secciones fija arriba y las primeras comodidades.",
      ),
    ],
    whatsappMessage:
      "Hola, vi el proyecto Yellowstone Ranch en tu página de López Tech y quiero consultarte por un sitio de alquileres.",
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
