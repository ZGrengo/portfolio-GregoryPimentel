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
import { useTheme } from "next-themes"
import { useTranslations } from "@/hooks/useTranslations"

interface ProjectDetailContentProps {
  project: Project
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  const { theme } = useTheme()
  const { t, translate } = useTranslations()
  const isGoikounter = project.slug === "goikounter"
  
  // Get project translations based on slug
  const getProjectData = () => {
    const slugToKey: Record<string, string> = {
      goikounter: "goikounter",
      "portfolio-generator": "portfolioGenerator",
      "ecommerce-php": "ecommercePhp",
      "flight-search": "hackaflight",
    }
    
    const key = slugToKey[project.slug]
    if (key) {
      const projectDetail = t.projectDetail as any
      const projectData = projectDetail[key]
      if (projectData && typeof projectData === "object") {
        return {
          longDescription: projectData.longDescription || project.longDescription,
          problem: projectData.problem || project.problem,
          solution: projectData.solution || project.solution,
          features: projectData.features || project.features,
        }
      }
    }
    
    // Fallback to original project data
    return {
      longDescription: project.longDescription,
      problem: project.problem,
      solution: project.solution,
      features: project.features,
    }
  }
  
  const projectData = getProjectData()
  
  // Adapt colors based on theme
  const borderColor = theme === "light" ? "#0a2e36" : "#0b4f6c"
  const hoverFillColor = theme === "light" ? "#00a676" : "#145c9e"
  const techBorderColor = theme === "light" ? "#00a676" : "#145c9e"

  return (
    <main className="min-h-screen pt-20 relative">
      {/* Squares Background */}
      <div className="fixed inset-0 -z-10">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction="diagonal"
          borderColor={borderColor}
          hoverFillColor={hoverFillColor}
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
            {t.projectDetail.backToProjects}
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-12 bg-slate-900/60 dark:bg-slate-900/60 [.light_&]:bg-[#f7f9f9]/60 backdrop-blur-md rounded-lg p-6 border border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30">
          <div className="flex items-center gap-3 mb-4">
            {project.featured && (
              <Badge className="bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#00a676] [.light_&]:to-[#00a676]/90 text-white border-0">
                {t.projects.featured}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-palette-teal via-palette-blue to-palette-teal dark:from-palette-teal dark:via-palette-blue dark:to-palette-teal [.light_&]:from-[#00a676] [.light_&]:via-[#00a676]/90 [.light_&]:to-[#00a676] bg-clip-text text-transparent">
              {project.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-xl text-muted-foreground text-justify whitespace-pre-line">
              {(() => {
                const slugToKey: Record<string, keyof typeof t.projects.descriptions> = {
                  goikounter: "goikounter",
                  "portfolio-generator": "portfolioGenerator",
                  "ecommerce-php": "ecommercePhp",
                  "flight-search": "hackaflight",
                }
                const key = slugToKey[project.slug]
                return key ? t.projects.descriptions[key] : project.description
              })()}
            </p>
            {isGoikounter && (
              <div className="flex items-center justify-center h-full min-h-[120px] mx-auto max-w-[280px]">
                <GlareHover
                  width="100%"
                  height="100%"
                  background={theme === "light" ? "rgba(247, 249, 249, 0.6)" : "rgba(15, 23, 42, 0.4)"}
                  borderRadius="0.5rem"
                  borderColor={theme === "light" ? "rgba(0, 166, 118, 0.5)" : "rgba(20, 92, 158, 0.5)"}
                  glareColor={theme === "light" ? "#00a676" : "#145c9e"}
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  className={`border-2 ${theme === "light" ? "bg-[#f7f9f9]/60" : "bg-slate-900/40"} backdrop-blur-md`}
                  style={{
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="p-6">
                    <p className="text-2xl md:text-3xl text-muted-foreground text-center">
                      {(() => {
                        const expansionText = t.projectDetail.goikounter.expansion
                        const parts = expansionText.split("{count}")
                        return (
                          <>
                            {parts[0]}
                            <span className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676] font-bold">
                              <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="inline"
                                onStart={() => {}}
                                onEnd={() => {}}
                              />
                            </span>
                            {parts[1]}
                          </>
                        )
                      })()}
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
            <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{t.projectDetail.overview}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {projectData.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Problem & Solution */}
            {projectData.problem && projectData.solution && (
              <>
                <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{t.projectDetail.problem}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {projectData.problem}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{t.projectDetail.solution}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {projectData.solution}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Features */}
            <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{t.projectDetail.features}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {projectData.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676] mt-0.5 flex-shrink-0" />
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
            <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{t.projectDetail.techStack}</CardTitle>
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
                      borderColor={techBorderColor}
                      glareColor={techBorderColor}
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
              <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{t.projectDetail.links}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.liveUrl ? (
                    <Button
                      variant="outline"
                      className="w-full border-white/30 dark:border-white/30 [.light_&]:border-[#0a2e36]/40 bg-white/10 dark:bg-white/10 [.light_&]:bg-[#f7f9f9]/40 hover:bg-white/20 dark:hover:bg-white/20 [.light_&]:hover:bg-[#f7f9f9]/60 justify-start"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t.projectDetail.liveDemo}
                      </a>
                    </Button>
                  ) : null}

                  {project.codeUrl ? (
                    <Button
                      variant="outline"
                      className="w-full border-white/30 dark:border-white/30 [.light_&]:border-[#0a2e36]/40 bg-white/10 dark:bg-white/10 [.light_&]:bg-[#f7f9f9]/40 hover:bg-white/20 dark:hover:bg-white/20 [.light_&]:hover:bg-[#f7f9f9]/60 justify-start"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        {t.projectDetail.viewCode}
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            )}

            {/* Top 10 Section - Only for Goikounter */}
            {isGoikounter && (
              <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-2 border-palette-blue/50 dark:border-palette-blue/50 [.light_&]:border-[#00a676]/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676] text-center">{t.projectDetail.goikounter.top10Title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px] p-6">
                  <div
                    onClick={() => setImageDialogOpen(true)}
                    className="relative w-full cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:opacity-90 border-2 border-palette-blue/30 dark:border-palette-blue/30 [.light_&]:border-[#00a676]/30 hover:border-palette-blue/50 dark:hover:border-palette-blue/50 [.light_&]:hover:border-[#00a676]/50"
                  >
                    <div className="relative w-full flex items-center justify-center">
                      <Image
                        src="/Goikounter/LaLiga.jpeg"
                        alt={t.projectDetail.goikounter.top10Title}
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
          alt={t.projectDetail.goikounter.top10Title}
        />
      )}
    </main>
  )
}

