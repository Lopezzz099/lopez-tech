import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Onest, Spline_Sans_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
  // Solo se usa en etiquetas debajo del primer pliegue: no compite con el titular.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Ignacio López" }],
  keywords: [
    "desarrollador web freelance Argentina",
    "desarrollo de sitios web",
    "desarrollo de apps móviles",
    "React Native",
    "Next.js",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.title} | ${site.name}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.title} | ${site.name}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e1218",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${bricolage.variable} ${onest.variable} ${splineMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="fixed top-2 left-2 z-70 -translate-y-20 rounded-lg bg-gold-400 px-4 py-3 font-semibold text-night-950 focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
