"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/contexts/LanguageContext"

// Phrases to highlight in bold
const highlightPhrases = {
  es: [
    "ingeniero de sistemas y desarrollador full stack",
    "software robusto y mantenible",
    "en producción en 10+ restaurantes",
    "entender el problema desde dentro, diseñar una solución con criterio de ingeniería y llevarla a producción cuidando la fiabilidad, el mantenimiento y la evolución del sistema.",
    "Next.js, React, TypeScript y Node.js",
    "bases de datos relacionales y no relacionales",
    "Software / Full Stack Developer",
  ],
  en: [
    "systems engineer and full stack developer",
    "robust and maintainable software",
    "in production in 10+ restaurants",
    "understanding the problem from within, designing a solution with engineering criteria and bringing it to production while ensuring reliability, maintenance and system evolution.",
    "Next.js, React, TypeScript and Node.js",
    "relational and non-relational databases",
    "Software / Full Stack Developer",
  ],
}

// Function to highlight phrases in text
function highlightPhrasesInText(text: string, language: "es" | "en"): React.ReactNode {
  const phrases = highlightPhrases[language]
  // Sort by length (longest first) to match longer phrases first
  const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length)
  
  const allMatches: Array<{ index: number; length: number; text: string }> = []
  
  for (const phrase of sortedPhrases) {
    // Escape special regex characters
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Match phrase (case insensitive)
    const pattern = new RegExp(`(${escapedPhrase})`, 'gi')
    
    let match
    while ((match = pattern.exec(text)) !== null) {
      // Check if this match overlaps with an already collected match
      const overlaps = allMatches.some(m => 
        (match!.index >= m.index && match!.index < m.index + m.length) ||
        (m.index >= match!.index && m.index < match!.index + match![0].length)
      )
      
      if (!overlaps) {
        allMatches.push({
          index: match.index,
          length: match[0].length,
          text: match[0]
        })
      }
    }
  }
  
  // Sort matches by index
  allMatches.sort((a, b) => a.index - b.index)
  
  // Build result
  const result: React.ReactNode[] = []
  let currentIndex = 0
  
  for (const m of allMatches) {
    // Add text before match
    if (m.index > currentIndex) {
      result.push(text.substring(currentIndex, m.index))
    }
    
    // Add highlighted phrase
    result.push(<strong key={m.index}>{m.text}</strong>)
    
    currentIndex = m.index + m.length
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    result.push(text.substring(currentIndex))
  }
  
  return result.length > 0 ? <>{result}</> : text
}

export function AboutSection() {
  const { t } = useTranslations()
  const { language } = useLanguage()

  const values = [
    t.about.value1,
    t.about.value2,
    t.about.value3,
    t.about.value4,
    t.about.value5,
  ]
  return (
    <section id="about" className="pt-8 pb-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <Card className="bg-white/5 dark:bg-white/5 [.light_&]:bg-[#f7f9f9]/30 border-white/10 dark:border-white/10 [.light_&]:border-[#0a2e36]/30 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1: About Text */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#00a676] [.light_&]:to-[#00a676]/90 bg-clip-text text-transparent">
                  {t.about.title}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {highlightPhrasesInText(t.about.paragraph1, language)}
                  </p>
                  <p>
                    {highlightPhrasesInText(t.about.paragraph2, language)}
                  </p>
                  <p>
                    {highlightPhrasesInText(t.about.paragraph3, language)}
                  </p>
                  <p>
                    {highlightPhrasesInText(t.about.paragraph4, language)}
                  </p>
                  <p>
                    {highlightPhrasesInText(t.about.paragraph5, language)}
                  </p>
                </div>
              </div>

              {/* Column 2: Values */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#00a676] [.light_&]:to-[#00a676]/90 bg-clip-text text-transparent">
                  {t.about.valuesTitle}
                </h2>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

