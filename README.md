# López Tech

Sitio comercial de López Tech: desarrollo de sitios web y aplicaciones móviles, de la idea a la publicación. Es una página aparte del portfolio personal. Se enfoca en vender el servicio y en llevar a la persona a escribir por WhatsApp.

Hecho con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4. Se despliega en Vercel, en la raíz del dominio.

## Cómo correrlo

Requiere Node 20 o superior.

```bash
npm install
npm run dev
```

El sitio queda en http://localhost:3000.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (debe pasar sin errores antes de cada push) |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Chequeo de tipos (también debe pasar antes de cada push) |

## Variables de entorno

Ninguna es obligatoria; el sitio compila y funciona sin definir nada. Están en `.env.example`.

| Variable | Para qué sirve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública, sin barra final. Se usa en Open Graph, sitemap, robots y datos estructurados. |
| `VERCEL_PROJECT_PRODUCTION_URL` | La define Vercel sola. Se usa si falta la anterior. |

Sin ninguna de las dos se usa `http://localhost:3000`.

## Estructura

```
app/
  globals.css            Tokens de diseño en @theme: colores OKLCH (fondo casi negro y dorado apagado), tipografías, escala fluida, puntos de corte
  layout.tsx             Fuentes (next/font), encabezado, pie, botón flotante, metadatos globales
  page.tsx               Portada: todas las secciones y el JSON-LD ProfessionalService
  proyectos/[slug]/      Página de detalle por proyecto (estática) y su imagen Open Graph
  opengraph-image.tsx    Imagen para compartir de la portada
  sitemap.ts, robots.ts  Generados con las convenciones de Next
components/
  header.tsx             Encabezado fijo y menú lateral (dialog nativo), con enlace actual marcado
  whatsapp-float.tsx     Botón flotante de WhatsApp para celular
  site-footer.tsx
  sections/              Hero, proyectos, servicios, proceso, preguntas, sobre mí y contacto
  ui/                    Logo, íconos, marcos de captura, botones de contacto
lib/
  contact.ts             ÚNICO archivo con WhatsApp, email y LinkedIn, y los constructores de enlaces
  projects.ts            Los cinco proyectos: textos, tecnologías, enlaces y capturas
  services.ts, process.ts, faq.ts, about.ts   Contenido tipado
  ui.ts                  Clases repetidas (botones, chips, títulos), en un solo lugar
  site.ts, json-ld.ts, og.tsx, nav.ts
public/proyectos/<slug>/ Capturas en WebP (escritorio y celular)
PRODUCT.md               Contexto de producto y de diseño
```

Los componentes son de servidor por defecto. Llevan `'use client'` solo el encabezado (menú y enlace actual) y el botón flotante.

## Cómo actualizar el contenido

- **Contacto**: editá `lib/contact.ts` (`whatsapp`, `email`, `linkedin`). El mensaje precargado de WhatsApp y el asunto del email también están ahí.
- **Foto y datos propios**: en `lib/about.ts`, completá `photo` con el archivo en `public/`, el texto alternativo y las medidas.
- **Agregar o cambiar un proyecto**: editá `lib/projects.ts`. Cada proyecto tiene `slug`, `kind` (`web` o `app`), `badge` (la aclaración visible: "Proyecto de demostración" o "Proyecto propio"), puntos técnicos, tecnologías, `siteUrl` y `repoUrl` (opcionales) y capturas. Para los proyectos con repositorio privado no se carga `repoUrl`. La página `/proyectos/[slug]`, el sitemap y la imagen para compartir se generan solos.
- **Capturas**: archivos `escritorio-N.webp` (1800×1125) y `celular-N.webp` (780×1688) en `public/proyectos/<slug>/`. Tienen que mostrar solo contenido real del proyecto.

## Reglas del proyecto

- Nada de testimonios, logos de clientes, cantidades de clientes ni resultados inventados.
- Los proyectos de demostración llevan la etiqueta visible "Proyecto de demostración".
- La clase base de los botones (`btn` en `lib/ui.ts`) no define fondo ni color de borde: cada variante trae el suyo.
- Sin analítica ni cookies de terceros.

## Despliegue en Vercel

1. Importar el repositorio en Vercel (preset Next.js, sin cambios).
2. No hace falta configurar variables de entorno. Para tener el dominio propio en Open Graph y sitemap, definí `NEXT_PUBLIC_SITE_URL`.
3. No se usa `output: 'export'` ni `basePath`: el sitio funciona en la raíz del dominio.

No hay workflows de GitHub Actions ni GitHub Pages.
