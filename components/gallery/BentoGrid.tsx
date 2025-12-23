"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { PhoneFrame } from "./PhoneFrame"
import { GalleryImage } from "@/data/projects"

interface BentoGridProps {
  images: GalleryImage[]
  onSelect: (index: number) => void
  isMobileView?: boolean
}

/**
 * BentoGrid component - Modern grid layout with featured image taking more space
 * Desktop: 2-column grid with hero image (col-span-2 row-span-2)
 * Mobile: Stack vertical with hero on top, then 2-column mini grid
 */
export function BentoGrid({ images, onSelect, isMobileView = false }: BentoGridProps) {
  if (images.length === 0) return null

  // Find featured image or use first image as hero
  const featuredIndex = images.findIndex((img) => img.featured)
  const heroIndex = featuredIndex >= 0 ? featuredIndex : 0
  const heroImage = images[heroIndex]
  const otherImages = images.filter((_, idx) => idx !== heroIndex)

  if (isMobileView) {
    // Mobile view: Stack vertical with standardized phone frame sizes
    return (
      <div className="space-y-4">
        {/* Hero image in phone frame - standardized size */}
        <div
          onClick={() => onSelect(heroIndex)}
          className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 transition-all duration-300 hover:border-white/30 dark:hover:border-white/30 [.light_&]:hover:border-[#716a5c]/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-palette-blue/20 dark:hover:shadow-palette-blue/20 [.light_&]:hover:shadow-[#5db7de]/20"
        >
          <div className="flex justify-center p-4">
            <div className="w-full max-w-[280px]">
              <PhoneFrame src={heroImage.src} alt={heroImage.alt} />
            </div>
          </div>
        </div>

        {/* Other images in 2-column grid - standardized smaller size */}
        {otherImages.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {otherImages.map((image, idx) => {
              const actualIndex = images.findIndex((img) => img.src === image.src)
              return (
                <div
                  key={idx}
                  onClick={() => onSelect(actualIndex)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 transition-all duration-300 hover:border-white/30 dark:hover:border-white/30 [.light_&]:hover:border-[#716a5c]/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-palette-blue/20 dark:hover:shadow-palette-blue/20 [.light_&]:hover:shadow-[#5db7de]/20"
                >
                  <div className="flex justify-center p-3">
                    <div className="w-full max-w-[200px]">
                      <PhoneFrame src={image.src} alt={image.alt} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // Desktop view: Bento grid layout with standardized sizes
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Hero image - takes 2 columns and 2 rows, standardized height */}
      <div
        onClick={() => onSelect(heroIndex)}
        className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 transition-all duration-300 hover:border-white/30 dark:hover:border-white/30 [.light_&]:hover:border-[#716a5c]/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-palette-blue/20 dark:hover:shadow-palette-blue/20 [.light_&]:hover:shadow-[#5db7de]/20 md:col-span-2 md:row-span-2"
      >
        <div className="relative h-[500px] w-full">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Other images - standardized smaller cells */}
      {otherImages.slice(0, 4).map((image, idx) => {
        const actualIndex = images.findIndex((img) => img.src === image.src)
        return (
          <div
            key={idx}
            onClick={() => onSelect(actualIndex)}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-900 dark:bg-slate-900 [.light_&]:bg-[#f1e9db] border border-white/20 dark:border-white/20 [.light_&]:border-[#716a5c]/30 transition-all duration-300 hover:border-white/30 dark:hover:border-white/30 [.light_&]:hover:border-[#716a5c]/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-palette-blue/20 dark:hover:shadow-palette-blue/20 [.light_&]:hover:shadow-[#5db7de]/20"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

