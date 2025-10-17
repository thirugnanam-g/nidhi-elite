export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://v0-nidhi-elite.vercel.app/#organization",
        name: "Nidhi Elite",
        alternateName: [
          "Nidhi Elite Villas",
          "Nidhi Elite Properties",
          "Nidhi Elite Luxury Homes",
          "Nidhi Elite Plots Hosur"
        ],
        url: "https://v0-nidhi-elite.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://v0-nidhi-elite.vercel.app/images/butterfly-logo.png",
          width: 200,
          height: 200
        },
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/",
          "https://maps.google.com/?q=Nidhi+Elite+Hosur"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-93602-99919",
          contactType: "Sales",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil"]
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sy. NO: 750 Poonapalli Village",
          addressLocality: "Hosur",
          addressRegion: "Tamil Nadu",
          postalCode: "635110",
          addressCountry: "IN"
        },
        brand: {
          "@type": "Brand",
          name: "Nidhi Elite"
        },
        slogan: "Beginning of a New Dream"
      },
      {
        "@type": "WebSite",
        "@id": "https://v0-nidhi-elite.vercel.app/#website",
        url: "https://v0-nidhi-elite.vercel.app",
        name: "Nidhi Elite - Premium Luxury Plots & Customized Villas",
        description:
          "Discover luxury living at Nidhi Elite — HNTDA & TN RERA approved premium residential plots (1200-2400 sq ft) and 3BHK customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities.",
        publisher: { "@id": "https://v0-nidhi-elite.vercel.app/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: "https://v0-nidhi-elite.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://v0-nidhi-elite.vercel.app/#localbusiness",
        name: "Nidhi Elite",
        image: "https://v0-nidhi-elite.vercel.app/images/IMG-20250929-WA0003.jpg",
        telephone: "+91-93602-99919",
        priceRange: "₹₹₹",
        url: "https://v0-nidhi-elite.vercel.app",
        description:
          "HNTDA & TN RERA approved luxury villa and residential plot project in Hosur with 106 plots, secure gated community, 30ft roads, underground sewage, CCTV surveillance, and premium amenities. Easy access to Bangalore IT hubs.",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "12.7365",
          longitude: "77.8307"
        },
        openingHours: [
          "Mo-Sa 09:00-18:00",
          "Su 10:00-16:00"
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sy. NO: 750 Poonapalli Village",
          addressLocality: "Hosur",
          addressRegion: "Tamil Nadu",
          postalCode: "635110",
          addressCountry: "IN"
        },
        areaServed: "Bangalore, Hosur, Krishnagiri",
        makesOffer: {
          "@type": "Offer",
          url: "https://v0-nidhi-elite.vercel.app",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": "https://v0-nidhi-elite.vercel.app/#plots",
        name: "Nidhi Elite Luxury Plots & Customized Villas",
        description:
          "HNTDA & TN RERA approved luxury residential plots (1200-2400 sq ft) and 3BHK customized villas in Hosur. Strategically located in Poonapalli Village near Electronic City and Bangalore IT corridors, with world-class connectivity and modern amenities. Starting from ₹21 Lakhs.",
        category: "Real Estate",
        brand: { "@type": "Brand", name: "Nidhi Elite" },
        image: [
          "https://v0-nidhi-elite.vercel.app/images/IMG-20250929-WA0003.jpg",
          "https://v0-nidhi-elite.vercel.app/images/IMG-20250929-WA0008.jpg"
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "2100000",
          highPrice: "4200000",
          offerCount: "106",
          availability: "https://schema.org/InStock"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
