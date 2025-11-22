import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nidhi Elite - Premium Plots & Villas in Hosur",
    short_name: "Nidhi Elite",
    description:
      "HNTDA & TNRERA approved premium plots and customized villas in Hosur near Bangalore. Starting from ₹21 Lakhs with modern amenities.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E9C46A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    scope: "/",
    lang: "en",
    dir: "ltr",
    categories: ["real estate", "housing", "luxury homes", "plots", "villas"],
    screenshots: [
      {
        src: "/images/nidhi-elite-og-image.jpg",
        sizes: "540x720",
        type: "image/jpeg",
        form_factor: "narrow",
      },
      {
        src: "/images/nidhi-elite-og-image.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
      },
    ],
  }
}
