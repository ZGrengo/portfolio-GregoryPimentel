"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Project } from "@/data/projects"
import { useTranslations } from "@/hooks/useTranslations"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslations()
  
  // Get translated description based on project slug
  const getTranslatedDescription = () => {
    const slugToKey: Record<string, keyof typeof t.projects.descriptions> = {
      goikounter: "goikounter",
      "portfolio-generator": "portfolioGenerator",
      "ecommerce-php": "ecommercePhp",
      "flight-search": "hackaflight",
    }
    const key = slugToKey[project.slug]
    return key ? t.projects.descriptions[key] : project.description
  }

  return (
    <Card className="group bg-white/5 dark:bg-white/5 [.light_&]:bg-[#f7f9f9]/30 border-white/10 dark:border-white/10 [.light_&]:border-[#0a2e36]/20 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#f7f9f9]/50 hover:border-white/20 dark:hover:border-white/20 [.light_&]:hover:border-[#0a2e36]/30 transition-all duration-300 hover:shadow-xl hover:shadow-palette-blue/20 dark:hover:shadow-palette-blue/20 [.light_&]:hover:shadow-[#00a676]/20 overflow-hidden flex flex-col h-full">
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
            <Badge className="bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#00a676] [.light_&]:to-[#00a676]/90 text-white border-0">
              {t.projects.featured}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-base whitespace-pre-line">
          {getTranslatedDescription()}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 bg-white/5 hover:[.light_&]:border-[#00a676] transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 bg-white/5 hover:[.light_&]:border-[#00a676] transition-colors">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 mt-auto">
        {project.liveUrl ? (
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#00a676]/10 [.light_&]:hover:border-[#00a676] transition-colors"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t.projects.demo}
            </a>
          </Button>
        ) : null}

        {project.codeUrl ? (
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#00a676]/10 [.light_&]:hover:border-[#00a676] transition-colors"
            asChild
          >
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-4 w-4" />
              {t.projects.code}
            </a>
          </Button>
        ) : null}

        <Button
          size="sm"
          className="bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#00a676] [.light_&]:to-[#00a676]/90 hover:from-palette-teal/90 hover:to-palette-blue/90 dark:hover:from-palette-teal/90 dark:hover:to-palette-blue/90 [.light_&]:hover:from-[#00a676]/90 [.light_&]:hover:to-[#00a676]/80 text-white ml-auto"
          asChild
        >
          <Link href={`/projects/${project.slug}`}>
            {t.projects.viewProject}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

