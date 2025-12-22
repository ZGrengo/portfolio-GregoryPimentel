"use client"

import React, { useState, useEffect, useRef } from "react"

interface TextTypeProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delay?: number
  className?: string
}

export function TextType({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000,
  className = "" 
}: TextTypeProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize with first character of first text
  useEffect(() => {
    if (texts.length > 0 && displayedText === "" && !isDeleting) {
      setDisplayedText(texts[0][0] || "")
    }
  }, [texts, displayedText, isDeleting])

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    if (!currentText) return

    const currentSpeed = isDeleting ? deleteSpeed : speed

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          pauseTimeoutRef.current = setTimeout(() => {
            setIsDeleting(true)
          }, delay)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, currentSpeed)

    return () => {
      clearTimeout(timeout)
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

