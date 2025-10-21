export const IMAGE_URLS: Record<string, string> = {
  "/images/butterfly-logo.jpg": process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/butterfly-logo.jpg`
    : "/images/butterfly-logo.jpg",
  "/images/hero-bg.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/hero-bg.jpg`
    : "/images/hero-bg.jpg",
  "/images/site-layout.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/site-layout.jpg`
    : "/images/site-layout.jpg",
  "/images/minimal-villa-exterior-render.jpg": process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/images/minimal-villa-exterior-render.jpg`
    : "/images/minimal-villa-exterior-render.jpg",
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
}

export function getImageUrl(path: string): string {
  return IMAGE_URLS[path] || path
}
