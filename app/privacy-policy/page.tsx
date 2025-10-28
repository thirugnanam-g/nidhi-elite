"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Effective Date: October 24, 2025</p>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, and contact details when you fill out
                  forms or subscribe to our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, such as pages visited and time
                  spent, collected through cookies and similar technologies.
                </li>
                <li>
                  <strong>Payment Information:</strong> If you make a purchase through our website, we collect payment
                  details securely.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>Your information may be used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide requested services.</li>
                <li>Improve website functionality and user experience.</li>
                <li>Send newsletters, updates, or promotional content (only if you opt-in).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with
                trusted service providers who help us operate the website or process payments, under strict
                confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. You can disable cookies in your browser settings,
                but some website features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights Regarding Your Information</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections or deletion of your personal data.</li>
                <li>Opt-out of receiving promotional communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. How We Protect Your Information</h2>
              <p>
                We implement appropriate measures, including administrative, technical, and physical safeguards, to
                protect your information from unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review their privacy policies when visiting
                them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be available on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
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
