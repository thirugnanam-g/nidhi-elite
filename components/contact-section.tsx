"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
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
    formDataToSubmit.append("entry.1234567890", formData.name)
    formDataToSubmit.append("entry.0987654321", formData.email)
    formDataToSubmit.append("entry.1111111111", formData.phone)
    formDataToSubmit.append("entry.2222222222", formData.message)

    fetch(googleFormUrl, { method: "POST", body: formDataToSubmit, mode: "no-cors" }).then(() => {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    })
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
            Let’s Build Your <span className="text-primary italic font-semibold">Dream Home</span> Together
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
                { icon: Mail, title: "Email Us", text: "Contact via form below" },
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

          {/* Right — Contact Form */}
          <Card className="rounded-2xl shadow-xl border border-primary/20 bg-white/90 backdrop-blur-sm flex flex-col justify-between p-6 h-full">
            <CardContent className="flex flex-col justify-between h-full p-0">
              {submitStatus === "success" && (
                <div className="mb-3 p-2.5 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 text-sm">Message sent successfully!</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-3">
                <div className="flex-grow space-y-3">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} className="space-y-0.5">
                      <Label htmlFor={id} className="text-sm font-medium">
                        {label}
                      </Label>
                      <Input
                        id={id}
                        name={id}
                        type={type}
                        value={(formData as any)[id]}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        required
                        className="text-sm"
                      />
                    </div>
                  ))}

                  <div className="space-y-0.5">
                    <Label htmlFor="message" className="text-sm font-medium">
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
                      className="text-sm"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-2.5 text-sm mt-auto"
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
