"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "@/hooks/useTranslations"

type TimelineType = "Work" | "Education"

export type TimelineItem = {
  title: string
  org?: string
  period: string
  type: TimelineType
  description: string
  highlights?: string[]
}

const typeStyles: Record<TimelineType, string> = {
  Work: "bg-palette-blue/20 dark:bg-palette-blue/20 [.light_&]:bg-[#5db7de]/20 text-white dark:text-white [.light_&]:text-[#716a5c] border-palette-blue/30 dark:border-palette-blue/30 [.light_&]:border-[#5db7de]/30",
  Education: "bg-palette-teal/20 dark:bg-palette-teal/20 [.light_&]:bg-[#5db7de]/20 text-white/90 dark:text-white/90 [.light_&]:text-[#716a5c]/90 border-palette-teal/30 dark:border-palette-teal/30 [.light_&]:border-[#5db7de]/30",
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
        <h2 className="text-2xl font-semibold tracking-tight text-palette-blue dark:text-palette-blue [.light_&]:text-[#5db7de]">{displayHeading}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{displaySubheading}</p>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 h-full w-px bg-palette-blue/30 dark:bg-palette-blue/30 [.light_&]:bg-[#5db7de]/30" />
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-10">
              {/* Dot */}
              <div className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-palette-blue dark:bg-palette-blue [.light_&]:bg-[#5db7de] ring-4 ring-palette-dark/60 dark:ring-palette-dark/60 [.light_&]:ring-[#f1e9db]/60" />
              <Card className="bg-slate-900/80 dark:bg-slate-900/80 [.light_&]:bg-[#f1e9db]/80 border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 backdrop-blur-md shadow-lg">
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
                  <Separator className="bg-white/10 dark:bg-white/10 [.light_&]:bg-[#716a5c]/20" />
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {item.description}
                  </p>
                  {item.highlights?.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
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

