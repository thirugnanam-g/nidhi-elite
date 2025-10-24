export const IMAGE_URLS: Record<string, string> = {
  // Logo and branding
  "/images/butterfly-logo.jpg": process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/butterfly-logo.jpg`
    : "/images/butterfly-logo.jpg",

  // Hero and main images
  "/images/hero-bg.jpeg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/hero-bg.jpeg`
    : "/images/hero-bg.jpeg",

  // Site and layout images
  "/images/site-layout.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/site-layout.jpg`
    : "/images/site-layout.jpg",
  "/images/nidhi-elite-hosur-layout.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/nidhi-elite-hosur-layout.jpg`
    : "/images/nidhi-elite-hosur-layout.jpg",

  // Villa and property images
  "/images/minimal-villa-exterior-render.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/minimal-villa-exterior-render.jpg`
    : "/images/minimal-villa-exterior-render.jpg",

  // Floor plans
  "/images/east-floor-plan.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/east-floor-plan.jpg`
    : "/images/east-floor-plan.jpg",
  "/images/north-floor-plan.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/north-floor-plan.jpg`
    : "/images/north-floor-plan.jpg",
  "/images/west-floor-plan.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/west-floor-plan.jpg`
    : "/images/west-floor-plan.jpg",

  // Approval logos
  "/images/tnrera-logo.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/tnrera-logo.jpg`
    : "/images/tnrera-logo.jpg",
  "/images/hntda-logo.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/hntda-logo.jpg`
    : "/images/hntda-logo.jpg",
  "/images/rera-approved.png": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/rera-approved.png`
    : "/images/rera-approved.png",
  "/images/hntda-approved.png": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/hntda-approved.png`
    : "/images/hntda-approved.png",
  "/images/hntda-approved.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/hntda-approved.jpg`
    : "/images/hntda-approved.jpg",
  "/images/rera-approved.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/rera-approved.jpg`
    : "/images/rera-approved.jpg",

  // Gallery images (IMG-20250929-WA0001 through WA0050)
  ...Object.fromEntries(
    Array.from({ length: 50 }, (_, i) => {
      const num = String(i + 1).padStart(4, "0")
      const path = `/images/IMG-20250929-WA${num}.jpg`
      return [
        path,
        process.env.NEXT_PUBLIC_SUPABASE_URL
          ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/IMG-20250929-WA${num}.jpg`
          : path,
      ]
    }),
  ),
}

export function getImageUrl(path: string): string {
  return IMAGE_URLS[path] || path
}

export function getSupabaseImageUrl(imagePath: string, options?: { width?: number; height?: number }): string {
  const baseUrl = getImageUrl(imagePath)
  if (!baseUrl.includes("supabase")) return baseUrl

  // Add cache busting and optimization params
  const params = new URLSearchParams()
  if (options?.width) params.append("width", options.width.toString())
  if (options?.height) params.append("height", options.height.toString())

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
}
