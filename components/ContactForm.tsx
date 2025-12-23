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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
    }, 3000)
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
        <Card className="bg-white/5 dark:bg-white/5 [.light_&]:bg-[#f1e9db]/30 border-white/10 dark:border-white/10 [.light_&]:border-[#716a5c]/20 backdrop-blur-sm max-w-2xl mx-auto">
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
                    className="bg-background/50 border-white/20"
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
                    className="bg-background/50 border-white/20"
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
                  className="bg-background/50 border-white/20"
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
                  className="bg-background/50 border-white/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-palette-teal to-palette-blue dark:from-palette-teal dark:to-palette-blue [.light_&]:from-[#5db7de] [.light_&]:to-[#5db7de]/90 hover:from-palette-teal/90 hover:to-palette-blue/90 dark:hover:from-palette-teal/90 dark:hover:to-palette-blue/90 [.light_&]:hover:from-[#5db7de]/90 [.light_&]:hover:to-[#5db7de]/80 text-white"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.sending}
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
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                {t.contact.contactDirectly}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:zgrengo@gmail.com"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gregory-pimentel-b0744314b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/ZGrengo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
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

