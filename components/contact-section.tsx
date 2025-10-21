"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

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
      className="py-10 sm:py-12 lg:py-14 flex items-center bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-2 sm:mb-3 text-foreground leading-tight">
            Let's Build Your <span className="text-primary italic font-semibold">Dream Home</span> Together
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to make <strong>Nidhi Elite</strong> your home? Get in touch to schedule a visit or learn more about
            our premium plots and customized villas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left — Combined Contact Info */}
          <Card className="rounded-2xl shadow-lg border border-primary/20 bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Visit Us</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">750, Poonapalli Village, Hosur, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Call Us</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">93602 99919</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Email Us</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">nidhielitelayout@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Office Hours</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Mon - Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </Card>

          {/* Right — Contact Form */}
          <Card className="rounded-2xl shadow-xl border border-primary/20 bg-white/90 backdrop-blur-sm">
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
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us your requirements..."
                    rows={3}
                    required
                    className="text-xs sm:text-sm"
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
