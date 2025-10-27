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
          "Nidhi Elite Plots Hosur",
        ],
        url: "https://v0-nidhi-elite.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61580792931426",
          "https://www.instagram.com/nidhi.elite/",
          "https://www.youtube.com/@NidhiElite/videos",
          "https://maps.google.com/?q=Nidhi+Elite+Hosur",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9360299919",
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
        "@id": "https://v0-nidhi-elite.vercel.app/#website",
        url: "https://v0-nidhi-elite.vercel.app",
        name: "Nidhi Elite - Premium Luxury Plots & Customized Villas",
        description:
          "Discover luxury living at Nidhi Elite — premium plots and customized villas in Hosur with HNTDA and TNRERA approvals, close to Bangalore.",
        publisher: { "@id": "https://v0-nidhi-elite.vercel.app/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: "https://v0-nidhi-elite.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://v0-nidhi-elite.vercel.app/#localbusiness",
        name: "Nidhi Elite",
        image: "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
        telephone: "+91-9360299919",
        priceRange: "₹₹₹",
        url: "https://v0-nidhi-elite.vercel.app",
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
        areaServed: ["Bangalore", "Hosur", "Krishnagiri", "Tamil Nadu"],
        makesOffer: {
          "@type": "Offer",
          url: "https://v0-nidhi-elite.vercel.app",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "150",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Product",
        "@id": "https://v0-nidhi-elite.vercel.app/#plots",
        name: "Nidhi Elite Luxury Plots & Customized Villas",
        description:
          "HNTDA and TNRERA approved luxury plots and customized villas in Hosur. Strategically located near Electronic City and Bangalore, with top-class connectivity and amenities.",
        category: "Real Estate",
        brand: { "@type": "Brand", name: "Nidhi Elite" },
        image: [
          "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/butterfly-logo.jpg",
          "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/nidhi-elite-og-image.jpg",
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "5000000",
          highPrice: "15000000",
          offerCount: "106",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://v0-nidhi-elite.vercel.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the payment plans available at Nidhi Elite?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nidhi Elite offers flexible payment plans with options for 20% down payment and easy EMI schemes. Contact our sales team for detailed information.",
            },
          },
          {
            "@type": "Question",
            name: "Is Nidhi Elite TNRERA approved?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Nidhi Elite is fully TNRERA and HNTDA approved, ensuring complete transparency and buyer protection.",
            },
          },
          {
            "@type": "Question",
            name: "What is the distance from Nidhi Elite to Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nidhi Elite is located in Hosur, approximately 40-50 km from Bangalore, with easy connectivity via NH-44.",
            },
          },
          {
            "@type": "Question",
            name: "What amenities are available at Nidhi Elite?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nidhi Elite offers premium amenities including 24/7 security, landscaped gardens, community center, sports facilities, and more.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://v0-nidhi-elite.vercel.app/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://v0-nidhi-elite.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Plots",
            item: "https://v0-nidhi-elite.vercel.app/#plots",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Villas",
            item: "https://v0-nidhi-elite.vercel.app/#customized-villas",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Amenities",
            item: "https://v0-nidhi-elite.vercel.app/#amenities",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Location",
            item: "https://v0-nidhi-elite.vercel.app/#location",
          },
        ],
      },
      {
        "@type": "AggregateRating",
        "@id": "https://v0-nidhi-elite.vercel.app/#rating",
        ratingValue: "4.8",
        ratingCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
