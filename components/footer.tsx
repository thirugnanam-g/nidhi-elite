"use client"

import Image from "next/image"

export function Footer() {
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Nidhi Elite</h3>
                <p className="text-xs opacity-80">Premium Plots & Customized Villas</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Beginning of a new dream. Experience luxury living in our premium gated community with world-class
              amenities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("floor-plans")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Floor Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("amenities")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("site-plan")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Site Plan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>+91 93602 99919</p>
              <p>nidhielitelayout@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Regulatory Compliance</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/tnrera-logo.jpg"
                  alt="TNRERA Approved"
                  width={40}
                  height={40}
                  className="bg-white rounded p-1"
                />
                <div>
                  <p className="text-xs font-medium">TNRERA Approved</p>
                  <p className="text-xs opacity-60">Reg. No: TN/29/Building/0123/2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/dtcp-logo.jpg"
                  alt="DTCP Approved"
                  width={40}
                  height={40}
                  className="bg-white rounded p-1"
                />
                <div>
                  <p className="text-xs font-medium">DTCP Approved</p>
                  <p className="text-xs opacity-60">Layout Approval No: LA/2024/456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-60">
              © 2025 Nidhi Elite. All rights reserved. | Designed with luxury in mind.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/tnrera-logo.jpg"
                  alt="TNRERA"
                  width={30}
                  height={30}
                  className="bg-white rounded p-1"
                />
                <Image
                  src="/images/dtcp-logo.jpg"
                  alt="DTCP"
                  width={30}
                  height={30}
                  className="bg-white rounded p-1"
                />
              </div>
              <p className="text-xs opacity-60">Govt. Approved Project</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
