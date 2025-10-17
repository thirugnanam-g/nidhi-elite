"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `)

    const mailtoUrl = `mailto:nidhielitelayout@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoUrl

    setSubmitStatus("success")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm">
              Get in Touch
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3 sm:mb-4 text-foreground leading-tight">
            Let's Build Your <span className="text-primary italic font-semibold">Dream Home</span> Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to make <strong>Nidhi Elite</strong> your home? Reach out to schedule a visit or learn more about our
            premium plots and customized villas.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left — Contact Info Cards */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="rounded-2xl shadow-lg border border-primary/20 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-semibold text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Visit Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>Site Address: 750 Poonapalli Village, Hosur, Tamil Nadu</p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="rounded-2xl shadow-md border border-primary/10 hover:shadow-lg transition-all bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Call Us</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">93602 99919</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md border border-primary/10 hover:shadow-lg transition-all bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Email Us</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">nidhielitelayout@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl shadow-md border border-primary/10 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-foreground text-sm sm:text-base">Office Hours</p>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right — Contact Form */}
          <Card className="rounded-2xl shadow-xl border border-primary/20 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" && (
                <div className="mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-xs sm:text-sm">
                    Your email client will open with the message. Send it to reach us directly!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">
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
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 text-sm sm:text-base font-semibold py-5 sm:py-6"
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
