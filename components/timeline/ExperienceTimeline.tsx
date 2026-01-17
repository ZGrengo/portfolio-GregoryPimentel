"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "@/hooks/useTranslations"

type TimelineType = "Work" | "Education"

// Keywords to highlight (technologies and strategies)
const highlightKeywords = [
  // Technologies
  "React", "Node.js", "MySQL", "HTML", "CSS", "WordPress", "JSON",
  "TypeScript", "JavaScript", "Next.js", "Express", "Socket.IO",
  "MongoDB", "Frontend", "Backend", "Full stack", "full stack",
  // Methodologies & Strategies
  "Scrum", "Scrumban", "end-to-end", "refactorización", "refactoring",
  "metodologías ágiles", "agile methodologies", "sprints", "dailies",
  "reviews", "retrospectivas", "retrospectives", "planificación", "planning",
  "mantenimiento", "maintenance", "optimización", "optimization",
  "validación", "validation", "arquitectura", "architecture",
  "diseño modular", "modular design", "buenas prácticas", "best practices",
  "algoritmos", "algorithms", "estructuras de datos", "data structures",
  "producción", "production", "implementación", "implementation",
  "desarrollo", "development", "sostenibilidad técnica", "technical sustainability",
  "colaboración", "collaboration", "comunicación técnica", "technical communication",
  "resolución de problemas", "problem solving", "liderazgo", "leadership",
  "coordinación", "coordination", "fiabilidad", "reliability", "robustez", "robustness"
]

// Function to highlight keywords in text
function highlightKeywordsInText(text: string): React.ReactNode {
  // Sort keywords by length (longest first) to match multi-word phrases first
  const sortedKeywords = [...highlightKeywords].sort((a, b) => b.length - a.length)
  
  // Collect all matches from all keywords
  const allMatches: Array<{ index: number; length: number; text: string }> = []
  
  for (const keyword of sortedKeywords) {
    // Escape special regex characters
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Match keyword as whole word/phrase (case insensitive)
    // Use word boundaries for single words, but allow spaces/hyphens for phrases
    const isMultiWord = keyword.includes(' ') || keyword.includes('-')
    const pattern = isMultiWord
      ? new RegExp(`(${escapedKeyword})`, 'gi')
      : new RegExp(`\\b(${escapedKeyword})\\b`, 'gi')
    
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
    
    // Add highlighted keyword
    result.push(<strong key={m.index}>{m.text}</strong>)
    
    currentIndex = m.index + m.length
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    result.push(text.substring(currentIndex))
  }
  
  return result.length > 0 ? <>{result}</> : text
}

export type TimelineItem = {
  title: string
  org?: string
  period: string
  type: TimelineType
  description: string
  highlights?: string[]
}

const typeStyles: Record<TimelineType, string> = {
  Work: "bg-palette-blue/20 dark:bg-palette-blue/20 [.light_&]:bg-[#00a676]/20 text-white dark:text-white [.light_&]:text-[#0a2e36] border-palette-blue/30 dark:border-palette-blue/30 [.light_&]:border-[#00a676]/30",
  Education: "bg-palette-teal/20 dark:bg-palette-teal/20 [.light_&]:bg-[#00a676]/20 text-white/90 dark:text-white/90 [.light_&]:text-[#0a2e36]/90 border-palette-teal/30 dark:border-palette-teal/30 [.light_&]:border-[#00a676]/30",
}

export function ExperienceTimeline({
  items,
  heading,
  subheading,
}: {
  items: TimelineItem[]
  heading?: string
  subheading?: string
}) {
  const { t } = useTranslations()
  const displayHeading = heading || t.sections.timeline.title
  const displaySubheading = subheading || t.sections.timeline.subtitle
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-palette-blue dark:text-palette-blue [.light_&]:text-[#00a676]">{displayHeading}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{displaySubheading}</p>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 h-full w-px bg-palette-blue/30 dark:bg-palette-blue/30 [.light_&]:bg-[#00a676]/30" />
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-10">
              {/* Dot */}
              <div className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-palette-blue dark:bg-palette-blue [.light_&]:bg-[#00a676] ring-4 ring-palette-dark/60 dark:ring-palette-dark/60 [.light_&]:ring-[#f7f9f9]/60" />
              <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f7f9f9]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#0a2e36]/30 backdrop-blur-md shadow-lg">
                <CardHeader className="space-y-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className={`rounded-full ${typeStyles[item.type]}`}
                      >
                        {item.type === "Work" ? t.timeline.work : t.timeline.education}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.period}</div>
                  </div>
                  {item.org ? (
                    <div className="text-sm text-muted-foreground">{item.org}</div>
                  ) : null}
                  <Separator className="bg-white/10 dark:bg-white/10 [.light_&]:bg-[#0a2e36]/20" />
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {highlightKeywordsInText(item.description)}
                  </p>
                  {item.highlights?.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{highlightKeywordsInText(h)}</li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

