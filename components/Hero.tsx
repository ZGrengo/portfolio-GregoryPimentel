"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TextType } from "@/components/TextType"
import FaultyTerminal from "@/components/FaultyTerminal"

export function Hero() {
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
          tint="#0b4f6c"
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={true}
          brightness={0.4}
          className="w-full h-full"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-palette-dark/80 via-slate-900/60 to-palette-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-palette-teal via-palette-blue to-palette-teal bg-clip-text text-transparent">
                <TextType 
                  texts={["Ingeniero Informático", "Full Stack Developer"]}
                  speed={100}
                  deleteSpeed={50}
                  delay={2000}
                />
              </span>
              <br />
              <span className="text-white">Construyendo Productos Digitales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              He construido <span className="text-primary font-semibold">4 proyectos</span> y uno de ellos está en producción en{" "}
              <span className="text-primary font-semibold">más de 10 restaurantes</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-palette-teal to-palette-blue hover:from-palette-teal/90 hover:to-palette-blue/90 text-white"
              >
                Ver Proyectos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10"
              >
                Contacto
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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-palette-teal to-palette-blue rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-palette-teal to-palette-blue flex items-center justify-center text-6xl font-bold text-white">
                  GP
                </div>
              </div>
            </div>
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

