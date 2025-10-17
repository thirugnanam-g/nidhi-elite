import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/api/", "/drafts/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
      },
    ],
    sitemap: "https://v0-nidhi-elite.vercel.app/sitemap.xml",
    host: "https://v0-nidhi-elite.vercel.app",
  }
}
