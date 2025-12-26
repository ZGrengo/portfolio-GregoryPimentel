"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"

export function ContactForm() {
  const { t } = useTranslations()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : t.contact.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="pt-8 pb-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <Card className="bg-white/5 dark:bg-white/5 [.light_&]:bg-[#f7f9f9]/30 border-white/10 dark:border-white/10 [.light_&]:border-[#0a2e36]/20 backdrop-blur-sm max-w-2xl mx-auto">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.contact.firstName}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 focus:[.light_&]:border-[#00a676] focus:[.light_&]:ring-[#00a676]/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.contact.lastName}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 focus:[.light_&]:border-[#00a676] focus:[.light_&]:ring-[#00a676]/20 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                    className="bg-background/50 border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 focus:[.light_&]:border-[#00a676] focus:[.light_&]:ring-[#00a676]/20 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                    className="bg-background/50 border-white/20 dark:border-white/20 [.light_&]:border-[#00a676]/50 focus:[.light_&]:border-[#00a676] focus:[.light_&]:ring-[#00a676]/20 transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#00a676] [.light_&]:to-[#00a676]/90 hover:from-palette-teal/90 hover:to-palette-blue/90 dark:hover:from-palette-teal/90 dark:hover:to-palette-blue/90 [.light_&]:hover:from-[#00a676]/90 [.light_&]:hover:to-[#00a676]/80 text-white"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting || isSubmitted ? (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitted ? t.contact.success.split('.')[0] : t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.send}
                  </>
                )}
              </Button>

              {isSubmitted && (
                <p className="text-sm text-green-400 text-center">
                  {t.contact.success}
                </p>
              )}

              {error && (
                <p className="text-sm text-red-400 text-center">
                  {error}
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                {t.contact.contactDirectly}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:zgrengo@gmail.com"
                  className="p-3 rounded-lg bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 [.light_&]:border-[#00a676]/50 hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#00a676]/10 [.light_&]:hover:border-[#00a676] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gregory-pimentel-b0744314b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 [.light_&]:border-[#00a676]/50 hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#00a676]/10 [.light_&]:hover:border-[#00a676] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/ZGrengo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 [.light_&]:border-[#00a676]/50 hover:bg-white/10 dark:hover:bg-white/10 [.light_&]:hover:bg-[#00a676]/10 [.light_&]:hover:border-[#00a676] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

