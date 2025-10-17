"use client"

import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/nidhi.elite/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61580792931426",
      icon: Facebook,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@NidhiElite/videos",
      icon: Youtube,
    },
  ]

  return (
    <footer
      className="bg-foreground text-background py-12 sm:py-16"
      role="contentinfo"
      aria-label="Footer for Nidhi Elite website"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Nidhi Elite</h3>
                <p className="text-xs opacity-80">Premium Plots & Villas</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              HNTDA & TNRERA approved gated community with world-class amenities.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Nidhi Elite on ${social.name}`}
                    className="w-8 h-8 bg-background/20 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["home", "plots", "customized-villas", "amenities", "location", "about", "contact"].map((id) => (
              <li key={id}>
                <button onClick={() => handleNavClick(id)} className="hover:text-primary transition-colors text-left">
                  {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>
        </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="tel:+919360299919" className="hover:text-primary transition-colors">
                  +91 93602 99919
                </a>
              </li>
              <li>
                <a href="mailto:nidhielitelayout@gmail.com" className="hover:text-primary transition-colors">
                  nidhielitelayout@gmail.com
                </a>
              </li>
              <li className="text-xs">750, Poonapalli Village, Hosur, TN 635110</li>
            </ul>
          </address>

          {/* Regulatory */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Approvals</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/tnrera-logo.jpg"
                  alt="TNRERA Approved"
                  width={36}
                  height={36}
                  className="bg-white rounded p-0.5"
                />
                <div>
                  <p className="text-xs font-medium">TNRERA</p>
                  <p className="text-xs opacity-60">Approved</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/hntda-logo.jpg"
                  alt="HNTDA Layout Approval"
                  width={36}
                  height={36}
                  className="bg-white rounded p-0.5"
                />
                <div>
                  <p className="text-xs font-medium">HNTDA</p>
                  <p className="text-xs opacity-60">Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center text-xs opacity-70">
          © 2025 Nidhi Elite. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
