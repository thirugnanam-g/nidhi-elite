"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nidhielite.com"

    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `)

    const mailtoUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    window.location.href = mailtoUrl

    setSubmitStatus("success")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="py-8 sm:py-6 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-foreground leading-tight">
            Let's Build Your <span className="text-primary italic font-semibold">Dream Home</span> Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-1">
            Ready to make <strong>Nidhi Elite</strong> your home? Get in touch to schedule a visit or learn more about
            our premium plots and customized villas.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left — Info + Social */}
          <Card className="rounded-2xl shadow-lg border border-primary/20 bg-white/90 backdrop-blur-sm flex flex-col justify-between p-6 h-full">
            <div className="space-y-3">
              {[
                { icon: MapPin, title: "Visit Us", text: "750, Poonapalli Village, Hosur, Tamil Nadu" },
                { icon: Phone, title: "Call Us", text: "93602 99919" },
                { icon: Mail, title: "Email Us", text: "nidhielite@gmail.com" },
                { icon: Clock, title: "Office Hours", text: "Mon - Sun: 9:00 AM - 6:00 PM" },
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-base">{title}</h3>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <h3 className="font-semibold text-base mb-2 text-foreground">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "https://facebook.com" },
                  { Icon: Instagram, href: "https://instagram.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                  { Icon: Twitter, href: "https://twitter.com" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
                  >
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Right — Simple Contact CTA */}
          <Card className="rounded-2xl shadow-xl border border-primary/20 bg-white/90 backdrop-blur-sm flex flex-col">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              {submitStatus === "success" && (
                <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 lg:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-xs sm:text-sm">
                    Your email client will open — send it to reach us directly!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="phone" className="text-xs sm:text-sm">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us your requirements..."
                    rows={3}
                    required
                    className="text-xs sm:text-sm w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-4 sm:py-5 text-xs sm:text-sm"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
