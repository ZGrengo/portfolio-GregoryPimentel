"use client"

import React from "react"
import { ProjectCard } from "./ProjectCard"
import { projects } from "@/data/projects"
import { useTranslations } from "@/hooks/useTranslations"

export function ProjectsGrid() {
  const { t } = useTranslations()
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="pt-8 pb-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                {t.projects.featuredProject || "Proyecto Destacado"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              {t.projects.otherProjects || "Otros Proyectos"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

