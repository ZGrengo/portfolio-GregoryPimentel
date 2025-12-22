import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-palette-blue/20 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-gradient-to-r from-palette-teal to-palette-blue text-white border-0">
              Destacado
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-base">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-white/20 bg-white/5"
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="border-white/20 bg-white/5">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {project.liveUrl ? (
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/5 hover:bg-white/10"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo en Vivo
            </a>
          </Button>
        ) : null}

        {project.codeUrl ? (
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/5 hover:bg-white/10"
            asChild
          >
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-4 w-4" />
              Código
            </a>
          </Button>
        ) : null}

        <Button
          size="sm"
          className="bg-gradient-to-r from-palette-teal to-palette-blue hover:from-palette-teal/90 hover:to-palette-blue/90 text-white ml-auto"
          asChild
        >
          <Link href={`/projects/${project.slug}`}>
            Ver Proyecto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

