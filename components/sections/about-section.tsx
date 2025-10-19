"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, MapPin, TreePine, CheckCircle } from "lucide-react"

export function AboutSection() {
  const handleBrochureDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1JgqyFQDsNJV9Tj12iadmpdUt4w1p32nJ/view?usp=sharing",
      "_blank"
    )
  }

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Soft glowing accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full opacity-20" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-tight mb-4">
            Redefining{" "}
            <span className="text-primary italic font-semibold">Luxury Living</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light">
            Hosur's exclusive gated community with premium plots and customized villas
          </p>
        </div>

        {/* ✅ Two-column layout with equal height */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
          {/* LEFT — Text + Centered Download Button */}
          <div className="flex flex-col justify-between bg-white/5 rounded-2xl p-6 sm:p-8 border border-primary/10 backdrop-blur-sm">
            <div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light text-justify sm:text-left">
                Nidhi Elite is Hosur's exclusive gated community offering affordable
                premium plots and customizable villas on Thali Road. Perfectly connected to
                NH844 and Electronic City, it’s the ideal blend of comfort, security, and
                investment growth.
              </p>
            </div>

            {/* ✅ Centered & Enhanced Download Button */}
            <div className="pt-8 flex justify-center">
              <Button
                onClick={handleBrochureDownload}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-8 sm:px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Download Brochure
              </Button>
            </div>
          </div>

          {/* RIGHT — Why Choose Nidhi Elite */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-6 text-center sm:text-left">
                Why Choose <span className="text-primary italic">Nidhi Elite?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Prime Location</p>
                    <p className="text-xs text-muted-foreground">
                      Close to Electronic City & IT hubs
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TreePine className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Green Environment</p>
                    <p className="text-xs text-muted-foreground">
                      Landscaped parks & open spaces
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Approved & Secure</p>
                    <p className="text-xs text-muted-foreground">
                      TNRERA & HNTDA approved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
