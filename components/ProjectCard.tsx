import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/50">{project.title.charAt(0)}</span>
            </div>
            <p className="text-sm">Screenshot placeholder</p>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              Featured
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
              Live Demo
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
              Code
            </a>
          </Button>
        ) : null}

        <Button
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white ml-auto"
          asChild
        >
          <Link href={`/projects/${project.slug}`}>
            View Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

