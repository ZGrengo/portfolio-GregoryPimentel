import React from "react"
import { ProjectCard } from "./ProjectCard"
import { projects } from "@/data/projects"

export function ProjectsGrid() {
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Featured Project */}
          {featuredProject && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Featured Project
              </h3>
              <div className="max-w-4xl mx-auto">
                <ProjectCard project={featuredProject} />
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Other Projects
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

