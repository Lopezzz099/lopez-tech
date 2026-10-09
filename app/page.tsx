import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { professionalServiceJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Faq />
      <About />
      <Contact />
      <script
        type="application/ld+json"
        // Contenido propio y serializado con JSON.stringify.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
