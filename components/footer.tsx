"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { getImageUrl } from "@/lib/image-config"

export function Footer() {
  const router = useRouter()

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  const handleLegalPageClick = (path: string) => {
    router.push(path)
    setTimeout(() => window.scrollTo(0, 0), 100)
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

  const encodeEmail = (email: string) => {
    return email
      .split("")
      .map((char) => `&#${char.charCodeAt(0)};`)
      .join("")
  }

  const email = "nidhielitelayout@gmail.com"
  const encodedEmail = encodeEmail(email)

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
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-sm">NE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Nidhi Elite</h3>
                <p className="text-xs opacity-80">Premium Plots & Villas</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              HNTDA & TNRERA approved gated community with world-class amenities near Bangalore.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Nidhi Elite on ${social.name}`}
                    className="w-9 h-9 bg-background/20 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {["home", "plots", "customized-villas", "amenities", "location", "about", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className="hover:text-primary transition-colors text-left hover:translate-x-1 duration-200"
                  >
                    {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h4 className="font-semibold mb-4 text-base">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="tel:+919360299919" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 93602 99919</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = `mailto:${email}`
                  }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: encodedEmail }} />
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs">750, Poonapalli Village, Hosur, TN 635110</span>
              </li>
            </ul>
          </address>

          {/* Regulatory */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Approvals</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Image
                  src={getImageUrl("/images/tnrera-logo.jpg") || "/placeholder.svg"}
                  alt="TNRERA Approved"
                  width={40}
                  height={40}
                  className="bg-white rounded p-0.5"
                />
                <div>
                  <p className="text-xs font-medium">TNRERA</p>
                  <p className="text-xs opacity-60">Approved</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Image
                  src={getImageUrl("/images/hntda-logo.jpg") || "/placeholder.svg"}
                  alt="HNTDA Layout Approval"
                  width={40}
                  height={40}
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

        <div className="border-t border-background/20 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => handleLegalPageClick("/terms-and-conditions")}
              className="hover:text-primary transition-colors hover:underline"
            >
              Terms & Conditions
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => handleLegalPageClick("/privacy-policy")}
              className="hover:text-primary transition-colors hover:underline"
            >
              Privacy Policy
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => handleLegalPageClick("/cookies-policy")}
              className="hover:text-primary transition-colors hover:underline"
            >
              Cookies Policy
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center text-xs opacity-70">
          <p>© 2025 Nidhi Elite. All rights reserved.</p>
          <p className="mt-2 opacity-60">HNTDA & TNRERA Approved | Premium Plots & Customized Villas</p>
        </div>
      </div>
    </footer>
  )
}
