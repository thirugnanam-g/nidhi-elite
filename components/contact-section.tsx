"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdIEGQHhcbpcmKL6yQYmAM08YailWGjMvBPf60YUf8waWA_Jg/formResponse"

    const formDataToSubmit = new FormData()
    formDataToSubmit.append("entry.1234567890", formData.name) // Replace with actual Google Form field IDs
    formDataToSubmit.append("entry.0987654321", formData.email)
    formDataToSubmit.append("entry.1111111111", formData.phone)
    formDataToSubmit.append("entry.2222222222", formData.message)

    fetch(googleFormUrl, {
      method: "POST",
      body: formDataToSubmit,
      mode: "no-cors",
    }).then(() => {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Auto-dismiss success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    })
  }

  return (
    <section
      id="contact"
      className="py-6 sm:py-8 lg:py-10 flex items-center bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden min-h-screen lg:min-h-auto"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light mb-1 sm:mb-2 text-foreground leading-tight">
            Let's Build Your <span className="text-primary italic font-semibold">Dream Home</span> Together
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to make <strong>Nidhi Elite</strong> your home? Get in touch to schedule a visit or learn more about
            our premium plots and customized villas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left — Combined Contact Info + Social Links */}
          <Card className="rounded-2xl shadow-lg border border-primary/20 bg-white/90 backdrop-blur-sm p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-5 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm">Visit Us</h3>
                  <p className="text-xs text-muted-foreground">750, Poonapalli Village, Hosur, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm">Call Us</h3>
                  <p className="text-xs text-muted-foreground">93602 99919</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm">Email Us</h3>
                  <p className="text-xs text-muted-foreground">Contact via form below</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm">Office Hours</h3>
                  <p className="text-xs text-muted-foreground">Mon - Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-primary/20">
              <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-2 sm:mb-3">Follow Us</h3>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Twitter className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          </Card>

          {/* Right — Contact Form */}
          <Card className="rounded-2xl shadow-xl border border-primary/20 bg-white/90 backdrop-blur-sm flex flex-col">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              {submitStatus === "success" && (
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 animate-in fade-in">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-xs">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs">
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
                    className="text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs">
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
                    className="text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="text-xs">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us your requirements..."
                    rows={2}
                    required
                    className="text-xs"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-3 text-xs"
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
