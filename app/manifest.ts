import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nidhi Elite - Luxury Villas",
    short_name: "Nidhi Elite",
    description:
      "Discover luxury living at Nidhi Elite - Premium 3BHK villas with world-class amenities in a gated community.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0891b2",
    icons: [
      {
        src: "/images/butterfly-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    cope: "/",
    lang: "en",
    dir: "ltr",
    categories: ["real estate", "housing", "luxury homes", "plots", "villas"],
  }
}
