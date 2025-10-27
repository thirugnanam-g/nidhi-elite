"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">Terms and Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">Effective Date: October 24, 2025</p>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By using this website, you acknowledge that you have read, understood, and agree to be bound by these
                Terms and Conditions. If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Website</h2>
              <p>
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights
                of, restrict, or inhibit anyone else's use and enjoyment of the website. You must not use the website to
                post or transmit any content that is unlawful, harmful, defamatory, abusive, or objectionable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of
                NidhiElite or its content suppliers and is protected by intellectual property laws. You may not
                reproduce, distribute, or create derivative works from any content without prior written permission from
                NidhiElite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Property Listings and Information</h2>
              <p>
                While we strive to provide accurate property listings and information, NidhiElite does not guarantee the
                accuracy, completeness, or reliability of any content on the website. Users are responsible for
                verifying all information before making any decisions related to property purchase, sale, or rental.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Links and Content</h2>
              <p>
                Our website may contain links to third-party websites or display content from third parties. These links
                and content are provided for your convenience only. NidhiElite is not responsible for the content,
                accuracy, privacy practices, or availability of third-party websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                NidhiElite shall not be liable for any direct, indirect, incidental, or consequential damages arising
                from the use of, or inability to use, this website. Use of the website is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy</h2>
              <p>
                Our collection and use of personal information is described in our Privacy Policy. By using this
                website, you consent to the terms outlined in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Dispute Resolution</h2>
              <p>
                Any disputes arising out of or relating to these Terms and Conditions or your use of the website shall
                be resolved amicably through good-faith negotiation. If a resolution cannot be reached, the dispute
                shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications</h2>
              <p>
                NidhiElite reserves the right to modify, update, or remove any part of the website, its content, or
                these Terms and Conditions at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms and Conditions, please contact us at:
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
