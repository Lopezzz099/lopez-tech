export type NavItem = { id: string; label: string; href: string };

// Ordenados de más a menos importante para quien llega a contratar.
export const navItems: NavItem[] = [
  { id: "proyectos", label: "Proyectos", href: "/#proyectos" },
  { id: "servicios", label: "Servicios", href: "/#servicios" },
  { id: "proceso", label: "Cómo trabajo", href: "/#proceso" },
  { id: "preguntas", label: "Preguntas", href: "/#preguntas" },
  { id: "sobre-mi", label: "Sobre mí", href: "/#sobre-mi" },
];
