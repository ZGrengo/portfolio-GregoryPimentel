import { Hero } from "@/components/Hero"
import { Highlights } from "@/components/Highlights"
import { SectionHeading } from "@/components/SectionHeading"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { SkillsGrid } from "@/components/SkillsGrid"
import { AboutSection } from "@/components/AboutSection"
import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Highlights />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title="Proyectos"
          subtitle="Proyectos que he construido, desde ideas hasta producción"
        />
      </div>
      <ProjectsGrid />

      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title="Habilidades y Herramientas"
          subtitle="Tecnologías que uso para construir productos digitales"
        />
      </div>
      <SkillsGrid />

      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title="Sobre mí"
          subtitle="Conoce más sobre mi trayectoria y valores"
        />
      </div>
      <AboutSection />

      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Me encantaría escucharte"
        />
      </div>
      <ContactForm />
    </main>
  )
}

