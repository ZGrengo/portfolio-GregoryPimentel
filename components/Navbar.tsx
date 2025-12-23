"use client"

import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"
  const { theme, setTheme } = useTheme()
  const { t } = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle hash navigation when landing on home page
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [isHomePage])

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      // If on home page, scroll to section
      // For "about" section, scroll to the SectionHeading container
      if (id === "about") {
        const headingElement = document.getElementById("sobre-mi-heading")
        if (headingElement) {
          const rect = headingElement.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const targetPosition = rect.top + scrollTop - 100 // 100px offset to show title and subtitle
          window.scrollTo({ top: targetPosition, behavior: "smooth" })
          setIsMobileMenuOpen(false)
          return
        }
      }

      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    } else {
      // If on different page, navigate to home with hash
      router.push(`/#${id}`)
      setIsMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const DesktopToggles = () => (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/30 bg-background/60 dark:bg-background/60 [.light_&]:bg-[#f1e9db]/80 backdrop-blur-md p-2 flex items-center justify-center hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#716a5c]/20 transition-colors"
        aria-label="Cambiar tema"
      >
        {mounted &&
          (theme === "light" ? (
            <Sun className="h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="h-4 w-4 text-slate-200 dark:text-slate-200 [.light_&]:text-[#716a5c]" />
          ))}
      </button>
      <div className="inline-flex items-center rounded-full border border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/30 bg-background/60 dark:bg-background/60 [.light_&]:bg-[#f1e9db]/80 backdrop-blur-md text-xs font-medium overflow-hidden">
        <button
          type="button"
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 transition-colors ${
            language === "es" 
              ? "bg-white/10 dark:bg-white/10 [.light_&]:bg-[#5db7de]/30 text-white dark:text-white [.light_&]:text-[#716a5c]" 
              : "text-muted-foreground"
          }`}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 transition-colors ${
            language === "en" 
              ? "bg-white/10 dark:bg-white/10 [.light_&]:bg-[#5db7de]/30 text-white dark:text-white [.light_&]:text-[#716a5c]" 
              : "text-muted-foreground"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )

  const MobileToggles = () => (
    <div className="flex items-center justify-between gap-3 pb-2">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/30 bg-background/60 dark:bg-background/60 [.light_&]:bg-[#f1e9db]/80 backdrop-blur-md p-2 flex items-center justify-center hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#716a5c]/20 transition-colors"
        aria-label="Cambiar tema"
      >
        {mounted &&
          (theme === "light" ? (
            <Sun className="h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="h-4 w-4 text-slate-200 dark:text-slate-200 [.light_&]:text-[#716a5c]" />
          ))}
      </button>
      <div className="inline-flex items-center rounded-full border border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/30 bg-background/60 dark:bg-background/60 [.light_&]:bg-[#f1e9db]/80 backdrop-blur-md text-xs font-medium overflow-hidden">
        <button
          type="button"
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 transition-colors ${
            language === "es" 
              ? "bg-white/10 dark:bg-white/10 [.light_&]:bg-[#5db7de]/30 text-white dark:text-white [.light_&]:text-[#716a5c]" 
              : "text-muted-foreground"
          }`}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 transition-colors ${
            language === "en" 
              ? "bg-white/10 dark:bg-white/10 [.light_&]:bg-[#5db7de]/30 text-white dark:text-white [.light_&]:text-[#716a5c]" 
              : "text-muted-foreground"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#5db7de] [.light_&]:to-[#5db7de]/90 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              GP
            </Link>
            <DesktopToggles />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-primary transition-colors"
            >
              {t.navbar.projects}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm hover:text-primary transition-colors"
            >
              {t.navbar.skills}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-primary transition-colors"
            >
              {t.navbar.about}
            </button>
            <button
              onClick={() => scrollToSection("trayectoria")}
              className="text-sm hover:text-primary transition-colors"
            >
              {t.navbar.timeline}
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#5db7de] [.light_&]:to-[#5db7de]/90 hover:from-palette-teal/90 hover:to-palette-blue/90 dark:hover:from-palette-teal/90 dark:hover:to-palette-blue/90 [.light_&]:hover:from-[#5db7de]/90 [.light_&]:hover:to-[#5db7de]/80"
            >
              {t.navbar.contact}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
            <MobileToggles />
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-2"
            >
              {t.navbar.projects}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-2"
            >
              {t.navbar.skills}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-2"
            >
              {t.navbar.about}
            </button>
            <button
              onClick={() => scrollToSection("trayectoria")}
              className="block w-full text-left text-sm hover:text-primary transition-colors py-2"
            >
              {t.navbar.timeline}
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#5db7de] [.light_&]:to-[#5db7de]/90 hover:from-palette-teal/90 hover:to-palette-blue/90 dark:hover:from-palette-teal/90 dark:hover:to-palette-blue/90 [.light_&]:hover:from-[#5db7de]/90 [.light_&]:hover:to-[#5db7de]/80"
            >
              {t.navbar.contact}
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}


