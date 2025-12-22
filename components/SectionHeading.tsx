import React from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-6 ${className || ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-palette-teal via-palette-blue to-palette-teal bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

