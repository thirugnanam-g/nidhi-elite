"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = "919360299919"
    const message = encodeURIComponent(
      `Hi! I would like to book a visit to Nidhi Elite.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nPlease let me know the available time slots.`,
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, "_blank")
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Book Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-primary font-medium">
              Name:
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="mt-1 border-gray-300 focus:border-primary"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-primary font-medium">
              Phone:
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 border-gray-300 focus:border-primary"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-primary font-medium">
              Email:
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="mt-1 border-gray-300 focus:border-primary"
              required
            />
          </div>

          <p className="text-sm text-gray-600 text-center">Click submit to continue on WhatsApp for instant booking</p>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-medium">
            Continue on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
