"use client"

import { Hero } from "@/components/Hero"
import { Highlights } from "@/components/Highlights"
import { SectionHeading } from "@/components/SectionHeading"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { SkillsGrid } from "@/components/SkillsGrid"
import { AboutSection } from "@/components/AboutSection"
import { ContactForm } from "@/components/ContactForm"
import { ExperienceTimeline } from "@/components/timeline/ExperienceTimeline"
import { getTimeline } from "@/data/timeline-translations"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/contexts/LanguageContext"

export function HomeContent() {
  const { t } = useTranslations()
  const { language } = useLanguage()
  const timeline = getTimeline(language)

  return (
    <main className="min-h-screen">
      <Hero />
      <Highlights />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title={t.sections.projects.title}
          subtitle={t.sections.projects.subtitle}
        />
      </div>
      <ProjectsGrid />

      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title={t.sections.skills.title}
          subtitle={t.sections.skills.subtitle}
        />
      </div>
      <SkillsGrid />

      <div id="sobre-mi-heading" className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title={t.sections.about.title}
          subtitle={t.sections.about.subtitle}
        />
      </div>
      <AboutSection />

      <div id="trayectoria" className="container mx-auto px-4 pt-20 pb-8">
        <ExperienceTimeline items={timeline} />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <SectionHeading
          title={t.sections.contact.title}
          subtitle={t.sections.contact.subtitle}
        />
      </div>
      <ContactForm />
    </main>
  )
}

