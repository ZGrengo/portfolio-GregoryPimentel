"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Code, Zap } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"

export function Highlights() {
  const { t } = useTranslations()

  const highlights = [
    {
      icon: TrendingUp,
      title: t.highlights.realImpact.title,
      description: t.highlights.realImpact.description,
    },
    {
      icon: Code,
      title: t.highlights.crud.title,
      description: t.highlights.crud.description,
    },
    {
      icon: Zap,
      title: t.highlights.ui.title,
      description: t.highlights.ui.description,
    },
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-palette-blue/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-palette-teal/20 to-palette-blue/20 border border-palette-teal/30">
                      <Icon className="h-6 w-6 text-palette-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

