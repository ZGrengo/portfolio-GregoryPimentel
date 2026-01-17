import type { TimelineItem } from "@/components/timeline/ExperienceTimeline"
import { translations } from "./translations"

export function getTimeline(language: "es" | "en"): TimelineItem[] {
  const t = translations[language].timeline.items

  return [
    {
      title: t.goikounter.title,
      org: t.goikounter.org,
      period: t.goikounter.period,
      type: "Work",
      description: t.goikounter.description,
      highlights: t.goikounter.highlights ? [...t.goikounter.highlights] : undefined,
    },
    {
      title: t.bootcamp.title,
      org: t.bootcamp.org,
      period: t.bootcamp.period,
      type: "Education",
      description: t.bootcamp.description,
      highlights: t.bootcamp.highlights ? [...t.bootcamp.highlights] : undefined,
    },
    {
      title: t.practicas.title,
      org: t.practicas.org,
      period: t.practicas.period,
      type: "Work",
      description: t.practicas.description,
      highlights: t.practicas.highlights ? [...t.practicas.highlights] : undefined,
    },
    {
      title: t.frontend.title,
      org: t.frontend.org,
      period: t.frontend.period,
      type: "Work",
      description: t.frontend.description,
      highlights: t.frontend.highlights ? [...t.frontend.highlights] : undefined,
    },
    {
      title: t.ingenieria.title,
      org: t.ingenieria.org,
      period: t.ingenieria.period,
      type: "Education",
      description: t.ingenieria.description,
      highlights: t.ingenieria.highlights ? [...t.ingenieria.highlights] : undefined,
    },
    {
      title: t.cocina.title,
      org: t.cocina.org,
      period: t.cocina.period,
      type: "Work",
      description: t.cocina.description,
    },
  ]
}

