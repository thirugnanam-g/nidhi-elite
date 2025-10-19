"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function LocationConnectivity() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const proximityData = {
    "Educational Institutions": [
      "Advaith International Academy - Hosur School",
      "Chinai College Of Nursing",
      "Carmel International School",
      "Sishya School",
      "M S Dhoni Global School, Hosur",
      "PES University Electronic City Campus",
      "Christ University, Bannerghatta Road",
      "Harvest International School, Electronic City",
    ],
    "Offices / Industries": [
      "Ashok Leyland Unit II",
      "Caterpillar India Pvt. Ltd.",
      "Ather Energy Ltd.",
      "Spark Minda Corporation Ltd.",
      "Wipro Limited",
      "Infosys",
      "TVS Motor Company",
    ],
    Hospitals: [
      "Gunam Super Speciality Hospital",
      "Sri Chandra Sekara Hospital",
      "Kauvery Hospital - Hosur",
      "Fortis Hospital - Bannerghatta",
      "Apollo Hospitals - Bannerghatta",
      "Narayana Institute of Cardiac Sciences, Bommasandra",
    ],
    "Malls & Shopping": [
      "Royal Meenakshi Mall",
      "Forum South Bengaluru",
      "Grand Cinemas",
      "M5 Ecity Mall",
      "Apple City Mall",
    ],
  } as const

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section
      id="location"
      className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
    >
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,100,0.05),_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-2 sm:mb-3 leading-tight">
            Perfectly Connected to <span className="text-primary italic font-semibold">Everything You Need</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Strategically located in Hosur, offering quick access to Bengaluru's major tech hubs, schools, and
            conveniences - the balance of serenity and connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left — Map + Key Distances */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="overflow-hidden shadow-xl border-0 rounded-2xl">
              <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d297666.1274161688!2d77.68898185068478!3d12.794217924061819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7b31a6464c49%3A0xcb83815a66492049!2sNidhi+Elite+Hosur!5e0!3m2!1sen!2sin!4v1758338170645!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nidhi Elite Location - Hosur, Tamil Nadu"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Right — Expandable Lists */}
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(proximityData).map(([category, items]) => (
              <Card
                key={category}
                className="overflow-hidden hover:shadow-lg transition-shadow border border-border/30 rounded-xl"
              >
                <button
                  onClick={() => toggleSection(category)}
                  aria-expanded={expandedSection === category}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-muted/40 transition-colors duration-300"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">{category}</h3>
                  {expandedSection === category ? (
                    <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                  )}
                </button>

                {expandedSection === category && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-border/50">
                    <div className="pt-3 sm:pt-4 space-y-2">
                      {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
