export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nidhi-elite.vercel.app/#organization",
        name: "Nidhi Elite",
        alternateName: ["Nidhi Elite Villas", "Nidhi Elite Properties", "Nidhi Elite Luxury Homes"],
        url: "https://nidhi-elite.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://nidhi-elite.vercel.app/images/butterfly-logo.png",
          width: 200,
          height: 200,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Your State",
          addressLocality: "Your City",
        },
        brand: {
          "@type": "Brand",
          name: "Nidhi Elite",
        },
        slogan: "Beginning of a New Dream",
      },
      {
        "@type": "WebSite",
        "@id": "https://nidhi-elite.vercel.app/#website",
        url: "https://nidhi-elite.vercel.app",
        name: "Nidhi Elite - Premium Luxury Villas",
        description:
          "Nidhi Elite - Discover premium luxury 3BHK villas with world-class amenities in an exclusive gated community.",
        publisher: {
          "@id": "https://nidhi-elite.vercel.app/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://nidhi-elite.vercel.app/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://nidhi-elite.vercel.app/#realestate",
        name: "Nidhi Elite",
        url: "https://nidhi-elite.vercel.app",
        logo: "https://nidhi-elite.vercel.app/images/butterfly-logo.png",
        description:
          "Nidhi Elite - Premium luxury villa developer specializing in 3BHK villas with world-class amenities",
        areaServed: "India",
        serviceType: ["Luxury Villa Sales", "Real Estate Development", "Property Management"],
        brand: {
          "@type": "Brand",
          name: "Nidhi Elite",
        },
      },
      {
        "@type": "Product",
        "@id": "https://nidhi-elite.vercel.app/#villas",
        name: "Nidhi Elite Luxury Villas",
        description: "Nidhi Elite premium 3BHK villas with world-class amenities in a gated community",
        category: "Real Estate",
        brand: {
          "@type": "Brand",
          name: "Nidhi Elite",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "5000000",
          highPrice: "15000000",
          offerCount: "50",
        },
        image: [
          "https://nidhi-elite.vercel.app/images/exterior-villas.png",
          "https://nidhi-elite.vercel.app/images/property-1.png",
        ],
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
