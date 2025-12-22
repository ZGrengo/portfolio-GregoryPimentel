"use client"

import React, { useEffect, useCallback } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { GalleryImage } from "@/data/projects"

interface LightboxDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  images: GalleryImage[]
  index: number
  onIndexChange: (index: number) => void
}

/**
 * LightboxDialog component - Full-screen lightbox with navigation
 * Supports keyboard navigation (ESC, Arrow keys)
 * Shows counter and prev/next buttons
 */
export function LightboxDialog({
  open,
  onOpenChange,
  images,
  index,
  onIndexChange,
}: LightboxDialogProps) {
  const currentImage = images[index]
  const isMobileImage = currentImage?.kind === "mobile"

  const handlePrev = useCallback(() => {
    const newIndex = index > 0 ? index - 1 : images.length - 1
    onIndexChange(newIndex)
  }, [index, images.length, onIndexChange])

  const handleNext = useCallback(() => {
    const newIndex = index < images.length - 1 ? index + 1 : 0
    onIndexChange(newIndex)
  }, [index, images.length, onIndexChange])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false)
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, handlePrev, handleNext, onOpenChange])

  if (!currentImage) return null

  // Standardized dialog sizes based on image type
  const dialogSizeClass = isMobileImage
    ? "w-[420px] h-[800px] max-w-[95vw] max-h-[95vh]" // Mobile: vertical phone-like size
    : "w-[1200px] h-[800px] max-w-[95vw] max-h-[95vh]" // Desktop: wide landscape size

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${dialogSizeClass} p-2 gap-0 bg-slate-900/95 border-white/10 overflow-hidden`}>
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onOpenChange(false)}
          className="absolute right-2 top-2 z-20 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Image container with minimal padding */}
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
          {/* Previous button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="absolute left-2 z-10 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {/* Image display - centered within fixed dialog size with overflow protection */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-2">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full w-auto h-auto object-contain block"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="absolute right-2 z-10 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

