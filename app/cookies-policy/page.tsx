"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function CookiesPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">Cookies Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Effective Date: October 24, 2025</p>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
                a website. They help websites remember your preferences, improve functionality, and provide analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the basic functionality of the website, such as
                  navigating pages and accessing secure areas.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Collect information about how visitors use the website (pages
                  visited, time spent, errors) to improve website performance.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences, such as language settings or login
                  details, to enhance user experience.
                </li>
                <li>
                  <strong>Advertising and Analytics Cookies:</strong> Help us analyze website traffic, track user
                  interactions, and display relevant advertisements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
              <p>
                We may use third-party services (such as Google Analytics, Facebook Pixel, or advertising networks) that
                place cookies on your device. These third parties may collect information about your use of the website
                and other websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
              <p>
                You can manage or disable cookies through your browser settings. However, please note that disabling
                cookies may affect the functionality and user experience of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Consent</h2>
              <p>
                By continuing to use www.nidhielite.com, you consent to the use of cookies in accordance with this
                Cookies Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time. The latest version will always be available on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Cookies Policy, please contact us at:
                <br />
                Email: nidhielitelayout@gmail.com
                <br />
                Website: www.nidhielite.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
