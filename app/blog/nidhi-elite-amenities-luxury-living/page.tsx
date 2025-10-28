"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"
import { useEffect } from "react"

export default function BlogPost() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Experience Luxury Living: Nidhi Elite's World-Class Amenities
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published on October 28, 2025</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <p className="text-lg text-muted-foreground mt-4">
              Discover the premium amenities that make Nidhi Elite the perfect choice for families seeking luxury and
              comfort in Hosur.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction: Redefining Luxury Living</h2>
              <p>
                At Nidhi Elite, we believe that a home is more than just a place to live—it's a lifestyle. Our gated
                community is designed with meticulous attention to detail, offering world-class amenities that cater to
                every member of your family. From fitness enthusiasts to families with children, Nidhi Elite has
                something for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. State-of-the-Art Fitness Center</h2>
              <p>Health and wellness are at the core of our community. Our fitness center is equipped with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modern gym equipment and machines</li>
                <li>Professional fitness trainers</li>
                <li>Yoga and meditation studios</li>
                <li>Aerobics and dance classes</li>
                <li>Personal training sessions</li>
              </ul>
              <p>
                Whether you're a fitness enthusiast or just starting your wellness journey, our fitness center provides
                everything you need to maintain a healthy lifestyle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Olympic-Size Swimming Pool</h2>
              <p>Beat the heat and stay active with our Olympic-size swimming pool. Features include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Olympic dimensions for serious swimmers</li>
                <li>Professional swimming instructors</li>
                <li>Separate children's pool with safety features</li>
                <li>Aqua aerobics classes</li>
                <li>Poolside lounging area</li>
              </ul>
              <p>
                Perfect for families, the pool is maintained to the highest standards with regular cleaning and water
                quality checks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Landscaped Gardens and Parks</h2>
              <p>Immerse yourself in nature with our beautifully landscaped gardens and parks:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lush green spaces throughout the community</li>
                <li>Walking and jogging trails</li>
                <li>Meditation gardens</li>
                <li>Flower gardens and botanical displays</li>
                <li>Seating areas for relaxation</li>
              </ul>
              <p>
                These green spaces not only enhance the aesthetic appeal but also improve air quality and provide a
                peaceful environment for residents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Children's Play Area</h2>
              <p>We understand the importance of safe play spaces for children. Our play area includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Age-appropriate play equipment</li>
                <li>Safety-certified structures</li>
                <li>Shaded play zones</li>
                <li>Supervised play areas</li>
                <li>Sports facilities for older children</li>
              </ul>
              <p>Parents can relax knowing their children are playing in a safe, well-maintained environment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Community Hall and Event Spaces</h2>
              <p>Celebrate life's special moments in our spacious community facilities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-purpose community hall</li>
                <li>Banquet facilities for events</li>
                <li>Conference rooms for meetings</li>
                <li>Indoor sports facilities</li>
                <li>Event management support</li>
              </ul>
              <p>
                Whether it's a birthday celebration, wedding reception, or community gathering, our facilities are
                perfect for hosting memorable events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. 24/7 Security and Safety</h2>
              <p>Your safety is our top priority. We provide comprehensive security measures:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>24/7 CCTV surveillance</li>
                <li>Trained security personnel</li>
                <li>Gated community with controlled access</li>
                <li>Emergency response system</li>
                <li>Fire safety equipment</li>
              </ul>
              <p>Live with peace of mind knowing that your family and property are protected round the clock.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Reliable Utilities and Infrastructure</h2>
              <p>We ensure uninterrupted access to essential services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>24/7 water supply with backup tanks</li>
                <li>Backup power generation</li>
                <li>Underground drainage system</li>
                <li>High-speed internet connectivity</li>
                <li>Waste management system</li>
              </ul>
              <p>
                These utilities ensure that you enjoy a comfortable lifestyle without worrying about service
                interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Community Living and Social Spaces</h2>
              <p>Nidhi Elite fosters a sense of community with dedicated social spaces:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Community gathering areas</li>
                <li>Social clubs and groups</li>
                <li>Regular community events</li>
                <li>Networking opportunities</li>
                <li>Friendly neighborhood atmosphere</li>
              </ul>
              <p>Build lasting friendships and connections with your neighbors in a welcoming community environment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion: Your Luxury Lifestyle Awaits</h2>
              <p>
                Nidhi Elite is more than just a residential community—it's a lifestyle destination. With world-class
                amenities, top-notch security, and a vibrant community atmosphere, we offer everything you need for a
                comfortable and fulfilling life.
              </p>
              <p>
                Experience the difference that premium amenities can make. Visit Nidhi Elite today and discover your
                perfect home.
              </p>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Schedule Your Site Visit</h3>
              <p className="mb-4">
                Experience the luxury and comfort of Nidhi Elite firsthand. Our team is ready to show you around and
                answer all your questions.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Book Your Visit Now
              </a>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
