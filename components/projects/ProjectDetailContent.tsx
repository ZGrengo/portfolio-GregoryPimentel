"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ProjectGallery } from "@/components/gallery/ProjectGallery"
import { SimpleImageDialog } from "@/components/gallery/SimpleImageDialog"
import Squares from "@/components/Squares"
import Image from "next/image"
import { Project } from "@/data/projects"
import CountUp from "@/components/CountUp"
import GlareHover from "@/components/GlareHover"

interface ProjectDetailContentProps {
  project: Project
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  const isGoikounter = project.slug === "goikounter"

  return (
    <main className="min-h-screen pt-20 relative">
      {/* Squares Background */}
      <div className="fixed inset-0 -z-10">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction="diagonal"
          borderColor="#0b4f6c"
          hoverFillColor="#145c9e"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/#projects">
          <Button
            variant="ghost"
            className="mb-8 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Proyectos
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-12 bg-slate-900/60 backdrop-blur-md rounded-lg p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            {project.featured && (
              <Badge className="bg-gradient-to-r from-palette-teal to-palette-blue text-white border-0">
                Destacado
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-palette-teal via-palette-blue to-palette-teal bg-clip-text text-transparent">
              {project.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-xl text-muted-foreground text-justify">
              {project.longDescription}
            </p>
            {isGoikounter && (
              <div className="flex items-center justify-center h-full min-h-[120px] mx-auto max-w-xs">
                <GlareHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderRadius="0.5rem"
                  borderColor="rgba(20, 92, 158, 0.5)"
                  glareColor="#145c9e"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  className="border-2"
                  style={{
                    background: 'rgba(15, 23, 42, 0.4)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="p-6">
                    <p className="text-2xl md:text-3xl text-muted-foreground text-center">
                      En expansión para más de{" "}
                      <span className="text-palette-blue font-bold">
                        <CountUp
                          from={0}
                          to={100}
                          separator=","
                          direction="up"
                          duration={1}
                          className="inline"
                        />
                      </span>{" "}
                      locales en 2026
                    </p>
                  </div>
                </GlareHover>
              </div>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        <ProjectGallery images={project.gallery} title={project.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="bg-slate-900/80 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-palette-blue">Resumen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Problem & Solution */}
            {project.problem && project.solution && (
              <>
                <Card className="bg-slate-900/80 border-white/20 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-palette-blue">El Problema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {project.problem}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/80 border-white/20 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-palette-blue">La Solución</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {project.solution}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Features */}
            <Card className="bg-slate-900/80 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-palette-blue">Características Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-palette-blue mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card className="bg-slate-900/80 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-palette-blue">Stack Tecnológico</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {project.tech.map((tech) => (
                    <GlareHover
                      key={tech}
                      width="100%"
                      height="80px"
                      background="transparent"
                      borderRadius="0.5rem"
                      borderColor="rgba(255, 255, 255, 0.2)"
                      glareColor="#145c9e"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                      className="border"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <div className="flex items-center justify-center h-full p-4">
                        <span className="text-base font-medium text-muted-foreground text-center">
                          {tech}
                        </span>
                      </div>
                    </GlareHover>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links - Only show if not Goikounter */}
            {!isGoikounter && (
              <Card className="bg-slate-900/80 border-white/20 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-palette-blue">Enlaces</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.liveUrl ? (
                    <Button
                      variant="outline"
                      className="w-full border-white/30 bg-white/10 hover:bg-white/20 justify-start"
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
                      className="w-full border-white/30 bg-white/10 hover:bg-white/20 justify-start"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        Ver Código
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            )}

            {/* Top 10 Section - Only for Goikounter */}
            {isGoikounter && (
              <Card className="bg-slate-900/80 border-2 border-palette-blue/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-palette-blue text-center">Top 10 locales más rápidos de España</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px] p-6">
                  <div
                    onClick={() => setImageDialogOpen(true)}
                    className="relative w-full cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:opacity-90 border-2 border-palette-blue/30 hover:border-palette-blue/50"
                  >
                    <div className="relative w-full flex items-center justify-center">
                      <Image
                        src="/Goikounter/LaLiga.jpeg"
                        alt="Top 10 locales más rápidos de España"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Simple Image Dialog for LaLiga image */}
      {isGoikounter && (
        <SimpleImageDialog
          open={imageDialogOpen}
          onOpenChange={setImageDialogOpen}
          src="/Goikounter/LaLiga.jpeg"
          alt="Top 10 locales más rápidos de España"
        />
      )}
    </main>
  )
}

