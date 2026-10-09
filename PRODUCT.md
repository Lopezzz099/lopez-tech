# Product

## Register

brand

## Users
Dueños y responsables de negocios chicos y medianos, empresas, startups y equipos de producto digital de Argentina (y de cualquier ciudad, porque el trabajo es remoto). Llegan desde una búsqueda ("desarrollador web freelance Argentina"), un enlace que les pasó alguien o un mensaje de WhatsApp. Casi siempre desde el celular, con poco tiempo. Quieren saber tres cosas: qué hace esta persona, si lo que hizo se ve bien y funciona, y cómo escribirle.

## Product Purpose
Sitio comercial de López Tech (Ignacio López, desarrollador web y de apps, Argentina). Vende sitios web y aplicaciones móviles, de la idea a la publicación: diseño, desarrollo y puesta en línea. Es una página aparte del portfolio personal: no busca empleo, busca clientes. Éxito: el visitante entiende en 5 segundos qué se hace y para quién, ve trabajo real y escribe por WhatsApp. La propia página es la muestra del nivel: rápida, accesible, cuidada.

## Brand Personality
Oficio, claridad, trato directo. Profesional y cercana, voz en español rioplatense (voseo), frases concretas, sin jerga publicitaria ni muletillas. Emoción buscada: confianza de que del otro lado hay una persona que sabe y responde.

## Anti-references
- Portfolio genérico de desarrollador: fondo negro con neón, degradados morados, terminal falsa, "Hola, soy dev".
- Plantilla SaaS: tarjetas idénticas con ícono, métricas heroicas, eyebrows en mayúsculas sobre cada título, numeración decorativa.
- Estética de agencia con promesas ("transformamos tu negocio"), testimonios o logos inventados.
- Beige crema "artesanal" y tipografías gastadas (Inter, Fraunces, DM Sans, etc.).
- Copiar el estilo de los proyectos mostrados (petrolera, cafetería, laboratorio, app de piletas, cabañas).

## Design Principles
1. La prueba va primero: capturas reales de escritorio y celular, a tamaño grande, desde el primer pliegue.
2. Una sola acción: escribir por WhatsApp. Email y LinkedIn existen y pesan menos.
3. Honestidad visible: lo que es demostración se dice; no hay testimonios, logos ni cifras inventadas.
4. La página se defiende sola: rápida, sin saltos de layout, accesible, con poco JavaScript.
5. Identidad propia: color comprometido, tipografía con carácter, sin degradados decorativos.

## Accessibility & Inclusion
WCAG AA como piso: contraste, foco visible, objetivos táctiles de 44 px, textos alternativos descriptivos, `prefers-reduced-motion` respetado, navegación completa por teclado, enlace para saltar al contenido.

## Operating Context
Next.js (App Router) + TypeScript + Tailwind CSS 4, desplegado en Vercel en la raíz del dominio. Sin analítica ni cookies de terceros. Contacto solo por WhatsApp, email y LinkedIn, sin formulario con backend. Contenido en `lib/` tipado; datos de contacto en `lib/contact.ts`.
