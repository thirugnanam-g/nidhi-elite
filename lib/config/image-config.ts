export const SUPABASE_PROJECT_ID = "dylrlrpqagnbcblddglk"
export const SUPABASE_BUCKET = "assets"
export const SUPABASE_BASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${SUPABASE_BUCKET}`

export const IMAGE_URLS: Record<string, string> = {
  // Logo and branding
  "/images/butterfly-logo.jpg": `${SUPABASE_BASE_URL}/butterfly-logo.jpg`,
  "/images/nidhi-elite-og-image.jpg": `${SUPABASE_BASE_URL}/nidhi-elite-og-image.jpg`,

  // Hero and main images
  "/images/hero-bg.jpeg": `${SUPABASE_BASE_URL}/hero-bg.jpeg`,

  // Site and layout images
  "/images/site-layout.jpg": `${SUPABASE_BASE_URL}/site-layout.jpg`,
  "/images/nidhi-elite-hosur-layout.jpg": `${SUPABASE_BASE_URL}/nidhi-elite-hosur-layout.jpg`,

  // Villa and property images
  "/images/minimal-villa-exterior-render.jpg": `${SUPABASE_BASE_URL}/minimal-villa-exterior-render.jpg`,

  // Floor plans
  "/images/east-floor-plan.jpg": `${SUPABASE_BASE_URL}/east-floor-plan.jpg`,
  "/images/north-floor-plan.jpg": `${SUPABASE_BASE_URL}/north-floor-plan.jpg`,
  "/images/west-floor-plan.jpg": `${SUPABASE_BASE_URL}/west-floor-plan.jpg`,

  // Approval logos
  "/images/tnrera-logo.jpg": `${SUPABASE_BASE_URL}/tnrera-logo.jpg`,
  "/images/hntda-logo.jpg": `${SUPABASE_BASE_URL}/hntda-logo.jpg`,
  "/images/rera-approved.png": `${SUPABASE_BASE_URL}/rera-approved.png`,
  "/images/hntda-approved.png": `${SUPABASE_BASE_URL}/hntda-approved.png`,
  "/images/hntda-approved.jpg": `${SUPABASE_BASE_URL}/hntda-approved.jpg`,
  "/images/rera-approved.jpg": `${SUPABASE_BASE_URL}/rera-approved.jpg`,

  // Gallery images (IMG-20250929-WA0001 through WA0050)
  ...Object.fromEntries(
    Array.from({ length: 50 }, (_, i) => {
      const num = String(i + 1).padStart(4, "0")
      const path = `/images/IMG-20250929-WA${num}.jpg`
      return [path, `${SUPABASE_BASE_URL}/IMG-20250929-WA${num}.jpg`]
    }),
  ),
}

export function getImageUrl(path: string): string {
  return IMAGE_URLS[path] || path
}

export function getSupabaseImageUrl(imagePath: string, options?: { width?: number; height?: number }): string {
  const baseUrl = getImageUrl(imagePath)
  if (!baseUrl.includes("supabase")) return baseUrl

  const params = new URLSearchParams()
  if (options?.width) params.append("width", options.width.toString())
  if (options?.height) params.append("height", options.height.toString())

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
}
