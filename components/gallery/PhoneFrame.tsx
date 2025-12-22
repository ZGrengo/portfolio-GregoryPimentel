import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
}

/**
 * PhoneFrame component - Wraps an image in a phone frame container
 * with aspect ratio approximately 9:19.5 (typical mobile phone)
 */
export function PhoneFrame({ src, alt, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[280px] rounded-[2.5rem] border-8 border-slate-800 bg-slate-900 p-2 shadow-2xl",
        "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-6 before:w-32 before:rounded-b-3xl before:bg-slate-800 before:content-['']",
        className
      )}
      style={{ aspectRatio: "9 / 19.5" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-slate-950">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
    </div>
  )
}

