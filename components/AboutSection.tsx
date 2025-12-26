"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"

export function AboutSection() {
  const { t } = useTranslations()

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
                    {t.about.paragraph1}
                  </p>
                  <p>
                    {t.about.paragraph2}
                  </p>
                  <p>
                    {t.about.paragraph3}
                  </p>
                  <p>
                    {t.about.paragraph4}
                  </p>
                  <p>
                    {t.about.paragraph5}
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

