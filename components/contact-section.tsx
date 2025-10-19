"use client"

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
      className="min-h-screen flex items-center bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3 text-foreground leading-tight">
            Let's Build Your <span className="text-primary italic font-semibold">Dream Home</span> Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to make <strong>Nidhi Elite</strong> your home? Get in touch to schedule a visit or learn more about our
            premium plots and customized villas.
          </p>
        </div>

        {/* Grid Layout — Left Info + Right Form */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left — Combined Contact Info */}
          <Card className="rounded-2xl shadow-lg border border-primary/20 bg-white/90 backdrop-blur-sm p-6 sm:p-8 space-y-6 h-full flex flex-col justify-center">
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Visit Us</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  750, Poonapalli Village, Hosur, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Call Us</h3>
                <p className="text-sm sm:text-base text-muted-foreground">93602 99919</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Email Us</h3>
                <p className="text-sm sm:text-base text-muted-foreground">nidhielitelayout@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Office Hours</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Mon - Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </Card>

          {/* Right — Contact Form */}
          <Card className="rounded-2xl shadow-xl border border-primary/20 bg-white/90 backdrop-blur-sm h-full flex flex-col justify-center">
            <CardContent>
              {submitStatus === "success" && (
                <div className="mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-xs sm:text-sm">
                    Your email client will open — send it to reach us directly!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us your requirements..."
                    rows={3}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-5"
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
