"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Plot Owner",
      content:
        "Nidhi Elite exceeded my expectations! The location is perfect, and the amenities are world-class. Highly recommended for anyone looking for premium plots near Bangalore.",
      rating: 5,
      image: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Plot Owner",
      content:
        "The plot booking process was smooth and transparent. The team guided us through every step and helped us choose the perfect location. Truly the best investment decision we’ve made!",
      rating: 5,
      image: "PS",
    },
    {
      name: "Amit Patel",
      role: "Plot Owner",
      content:
        "Outstanding customer service and transparent dealings. The HNTDA and TNRERA approvals gave me complete peace of mind. Truly a trustworthy developer.",
      rating: 5,
      image: "AP",
    },
    {
      name: "Sneha Desai",
      role: "Villa Owner",
      content:
        "Living in Nidhi Elite feels like a dream. The gated community, security, and amenities make it a perfect place to raise a family. Worth every penny!",
      rating: 5,
      image: "SD",
    },
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-2 sm:mb-3 text-foreground leading-tight">
            What Our <span className="text-primary italic font-semibold">Customers</span> Say
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who have made Nidhi Elite their dream home.
          </p>
        </div>

        {/* Testimonials Grid - Reduced padding and grid to fit in single viewport */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10 bg-white/80 backdrop-blur-sm p-3 sm:p-4 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xs text-muted-foreground mb-3 flex-grow leading-relaxed italic line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-semibold text-xs">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-xs text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
