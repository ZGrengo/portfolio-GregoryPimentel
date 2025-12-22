"use client"

import React, { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SimpleImageDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  src: string
  alt: string
}

/**
 * SimpleImageDialog component - Simple lightbox for a single image
 * No navigation arrows, just close button and ESC key support
 */
export function SimpleImageDialog({
  open,
  onOpenChange,
  src,
  alt,
}: SimpleImageDialogProps) {
  // Keyboard navigation (ESC only)
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[1200px] h-[800px] max-w-[95vw] max-h-[95vh] p-2 gap-0 bg-slate-900/95 border-white/10 overflow-hidden">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onOpenChange(false)}
          className="absolute right-2 top-2 z-20 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Image container */}
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-2">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full w-auto h-auto object-contain block"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

