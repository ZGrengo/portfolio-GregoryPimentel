import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { skills, skillsByCategory } from "@/data/skills"

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  other: "Other"
}

export function SkillsGrid() {
  return (
    <section id="skills" className="pt-8 pb-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill) => (
                  <Card
                    key={skill.id}
                    className={`bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                      skill.isCore
                        ? "border-2 border-palette-teal/50 shadow-lg shadow-palette-teal/20"
                        : ""
                    }`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium">{skill.name}</div>
                      {skill.isCore && (
                        <div className="mt-2 text-xs text-palette-blue">Core</div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

