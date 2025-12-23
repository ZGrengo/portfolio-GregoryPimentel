"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TextType } from "@/components/TextType"
import FaultyTerminal from "@/components/FaultyTerminal"
import ProfileCard from "@/components/ProfileCard"
import { useTranslations } from "@/hooks/useTranslations"
import { useTheme } from "next-themes"

export function Hero() {
  const { t, translate } = useTranslations()
  const { theme } = useTheme()
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-10">
      {/* Faulty Terminal Background */}
      <div className="absolute inset-0 z-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.3}
          pause={false}
          scanlineIntensity={0.3}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.5}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint={theme === "light" ? "#5db7de" : "#0b4f6c"}
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={true}
          brightness={theme === "light" ? 0.8 : 0.4}
          className="w-full h-full"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-palette-dark/80 via-slate-900/60 to-palette-dark/80 dark:from-palette-dark/80 dark:via-slate-900/60 dark:to-palette-dark/80 [.light_&]:from-[#f1e9db]/90 [.light_&]:via-[#f1e9db]/70 [.light_&]:to-[#f1e9db]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-palette-teal via-palette-blue to-palette-teal dark:from-palette-teal dark:via-palette-blue dark:to-palette-teal [.light_&]:from-[#5db7de] [.light_&]:via-[#5db7de]/90 [.light_&]:to-[#5db7de] bg-clip-text text-transparent">
                <TextType 
                  texts={[t.hero.title1, t.hero.title2]}
                  speed={100}
                  deleteSpeed={50}
                  delay={2000}
                />
              </span>
              <br />
              <span className="text-white dark:text-white [.light_&]:text-[#716a5c]">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {translate("hero.description", { projects: t.hero.projects, restaurants: t.hero.restaurants })}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#5db7de] [.light_&]:to-[#5db7de]/90 hover:from-palette-teal/90 hover:to-palette-blue/90 dark:hover:from-palette-teal/90 dark:hover:to-palette-blue/90 [.light_&]:hover:from-[#5db7de]/90 [.light_&]:hover:to-[#5db7de]/80 text-white"
              >
                {t.hero.ctaProjects}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 bg-white/5 dark:bg-white/5 [.light_&]:bg-[#f1e9db]/50 hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#f1e9db]/70"
              >
                {t.hero.ctaContact}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/ZGrengo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gregory-pimentel-b0744314b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:zgrengo@gmail.com"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex-1 flex justify-center">
            <ProfileCard
              name="Gregory Pimentel"
              title={t.hero.profileTitle}
              handle="zgrengo"
              status={t.hero.status}
              contactText={t.hero.downloadCV}
              avatarUrl="/Profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const link = document.createElement('a')
                link.href = '/CV Gregory Pimentel Desarrollo Web.pdf'
                link.download = 'CV Gregory Pimentel Desarrollo Web.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              innerGradient="linear-gradient(145deg, rgba(11, 79, 108, 0.55) 0%, rgba(20, 92, 158, 0.27) 100%)"
              behindGlowColor="rgba(20, 92, 158, 0.67)"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}

