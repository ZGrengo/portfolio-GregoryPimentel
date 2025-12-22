"use client"

import React, { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Monitor, Smartphone } from "lucide-react"
import { BentoGrid } from "./BentoGrid"
import { LightboxDialog } from "./LightboxDialog"
import { GalleryImage } from "@/data/projects"

interface ProjectGalleryProps {
  images: GalleryImage[]
  title?: string
}

/**
 * ProjectGallery component - Main gallery with Desktop/Mobile tabs
 * Renders BentoGrid for each view and handles lightbox
 */
export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("desktop")

  // Filter images by kind
  const desktopImages = images.filter((img) => img.kind !== "mobile")
  const mobileImages = images.filter((img) => img.kind === "mobile")

  // Determine if we should show tabs (only if both desktop and mobile images exist)
  const showTabs = desktopImages.length > 0 && mobileImages.length > 0

  // Get current images based on active tab
  const currentImages = activeTab === "desktop" ? desktopImages : mobileImages

  const handleImageSelect = (index: number) => {
    // Find the actual index in the full images array
    const selectedImage = currentImages[index]
    const actualIndex = images.findIndex((img) => img.src === selectedImage.src)
    setLightboxIndex(actualIndex)
    setLightboxOpen(true)
  }

  // If no images, return null
  if (images.length === 0) return null

  // If only one type of images exists, don't show tabs
  if (!showTabs) {
    const allImages = desktopImages.length > 0 ? desktopImages : mobileImages
    const isMobileOnly = mobileImages.length > 0 && desktopImages.length === 0

    return (
      <>
        <div className="mb-12">
          <BentoGrid
            images={allImages}
            onSelect={handleImageSelect}
            isMobileView={isMobileOnly}
          />
        </div>
        <LightboxDialog
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          images={images}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
        />
      </>
    )
  }

  return (
    <>
      <div className="mb-12">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "desktop" | "mobile")}
          className="w-full"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="desktop">
              <Monitor className="mr-2 h-4 w-4" />
              Escritorio
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <Smartphone className="mr-2 h-4 w-4" />
              Móvil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desktop" className="mt-0">
            <BentoGrid
              images={desktopImages}
              onSelect={handleImageSelect}
              isMobileView={false}
            />
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <BentoGrid
              images={mobileImages}
              onSelect={handleImageSelect}
              isMobileView={true}
            />
          </TabsContent>
        </Tabs>
      </div>

      <LightboxDialog
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        images={images}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </>
  )
}

