export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nidhielite.com/#organization",
        name: "Nidhi Elite",
        alternateName: [
          "Nidhi Elite Villas",
          "Nidhi Elite Properties",
          "Nidhi Elite Luxury Homes",
          "Nidhi Elite Plots Hosur",
        ],
        url: "https://nidhielite.com",
        logo: {
          "@type": "ImageObject",
          url: "https://nidhielite.com/images/butterfly-logo.png",
          width: 200,
          height: 200,
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61580792931426",
          "https://www.instagram.com/nidhi.elite/",
          "https://www.youtube.com/@NidhiElite/videos",
          "https://maps.google.com/?q=Nidhi+Elite+Hosur",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-93602-99919",
          contactType: "Sales",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sy. NO: 750 Poonapalli Village",
          addressLocality: "Hosur",
          addressRegion: "Tamil Nadu",
          postalCode: "635110",
          addressCountry: "IN",
        },
        brand: {
          "@type": "Brand",
          name: "Nidhi Elite",
        },
        slogan: "Beginning of a New Dream",
      },
      {
        "@type": "WebSite",
        "@id": "https://nidhielite.com/#website",
        url: "https://nidhielite.com",
        name: "Nidhi Elite - Premium Luxury Plots & Customized Villas",
        description:
          "Discover luxury living at Nidhi Elite — premium plots and customized villas in Hosur with HNTDA and TNRERA approvals, close to Bangalore.",
        publisher: { "@id": "https://nidhielite.com/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: "https://nidhielite.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nidhielite.com/#localbusiness",
        name: "Nidhi Elite",
        image: "https://nidhielite.com/images/IMG-20250929-WA0003.jpg",
        telephone: "+91-93602-99919",
        priceRange: "₹₹₹",
        url: "https://nidhielite.com",
        description:
          "HNTDA and TNRERA approved luxury villa and plot project located in Hosur, offering premium amenities and easy access to Bangalore.",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "12.7365",
          longitude: "77.8307",
        },
        openingHours: ["Mo-Sa 09:00-18:00", "Su 10:00-16:00"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sy. NO: 750 Poonapalli Village",
          addressLocality: "Hosur",
          addressRegion: "Tamil Nadu",
          postalCode: "635110",
          addressCountry: "IN",
        },
        areaServed: "Bangalore, Hosur, Krishnagiri",
        makesOffer: {
          "@type": "Offer",
          url: "https://nidhielite.com",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Product",
        "@id": "https://nidhielite.com/#plots",
        name: "Nidhi Elite Luxury Plots & Customized Villas",
        description:
          "HNTDA and TNRERA approved luxury plots and customized villas in Hosur. Strategically located near Electronic City and Bangalore, with top-class connectivity and amenities.",
        category: "Real Estate",
        brand: { "@type": "Brand", name: "Nidhi Elite" },
        image: [
          "https://nidhielite.com/images/IMG-20250929-WA0003.jpg",
          "https://nidhielite.com/images/IMG-20250929-WA0008.jpg",
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "5000000",
          highPrice: "15000000",
          offerCount: "50",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
