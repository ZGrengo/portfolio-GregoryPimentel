"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectViewSwitcherProps {
  desktopImage: string
  mobileImage?: string
  projectTitle: string
}

export function ProjectViewSwitcher({ desktopImage, mobileImage, projectTitle }: ProjectViewSwitcherProps) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop")

  // If no mobile image, just show desktop view without toggle
  if (!mobileImage) {
    return (
      <Card className="bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/30 mb-12 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={desktopImage}
              alt={projectTitle}
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/30 mb-12 overflow-hidden">
      <CardContent className="p-0">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-2 p-4 bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border-b border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/20">
          <Button
            variant={view === "desktop" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("desktop")}
            className={
              view === "desktop"
                ? "bg-gradient-to-r from-palette-teal to-palette-blue hover:from-palette-teal/90 hover:to-palette-blue/90 text-white"
                : "border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 bg-transparent hover:bg-white/5 dark:hover:bg-white/10 [.light_&]:hover:bg-[#f1e9db]/40"
            }
          >
            <Monitor className="mr-2 h-4 w-4" />
            Desktop
          </Button>
          <Button
            variant={view === "mobile" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("mobile")}
            className={
              view === "mobile"
                ? "bg-gradient-to-r from-palette-teal to-palette-blue hover:from-palette-teal/90 hover:to-palette-blue/90 text-white"
                : "border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 bg-transparent hover:bg-white/5 dark:hover:bg-white/10 [.light_&]:hover:bg-[#f1e9db]/40"
            }
          >
            <Smartphone className="mr-2 h-4 w-4" />
            Mobile
          </Button>
        </div>

        {/* Image Display */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={view === "desktop" ? desktopImage : mobileImage}
            alt={`${projectTitle} - ${view} view`}
            fill
            className="object-cover transition-opacity duration-300"
          />
        </div>
      </CardContent>
    </Card>
  )
}

