/**
 * Nidhi Elite - Image URL Resolver
 * Dynamically serves Supabase CDN URLs if available, else falls back to /public/images
 */

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL ||
  "";

// Base path for Supabase Storage (bucket root)
const SUPABASE_ASSET_PATH = SUPABASE_URL
  ? `${SUPABASE_URL.replace(/\/$/, "")}/storage/v1/object/public/assets`
  : "";

// ✅ All app image mappings
export const IMAGE_URLS: Record<string, string> = {
  // Branding
  "/images/butterfly-logo.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/butterfly-logo.jpg`
    : "/images/butterfly-logo.jpg",

  // Hero / Main
  "/images/hero-bg.jpeg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/hero-bg.jpeg`
    : "/images/hero-bg.jpeg",

  // Site Layouts
  "/images/site-layout.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/site-layout.jpg`
    : "/images/site-layout.jpg",
  "/images/nidhi-elite-hosur-layout.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/nidhi-elite-hosur-layout.jpg`
    : "/images/nidhi-elite-hosur-layout.jpg",

  // Villas / Property
  "/images/minimal-villa-exterior-render.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/minimal-villa-exterior-render.jpg`
    : "/images/minimal-villa-exterior-render.jpg",

  // Floor Plans
  "/images/east-floor-plan.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/east-floor-plan.jpg`
    : "/images/east-floor-plan.jpg",
  "/images/north-floor-plan.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/north-floor-plan.jpg`
    : "/images/north-floor-plan.jpg",
  "/images/west-floor-plan.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/west-floor-plan.jpg`
    : "/images/west-floor-plan.jpg",

  // Approval Logos
  "/images/tnrera-logo.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/tnrera-logo.jpg`
    : "/images/tnrera-logo.jpg",
  "/images/hntda-logo.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/hntda-logo.jpg`
    : "/images/hntda-logo.jpg",
  "/images/rera-approved.png": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/rera-approved.png`
    : "/images/rera-approved.png",
  "/images/hntda-approved.png": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/hntda-approved.png`
    : "/images/hntda-approved.png",
  "/images/hntda-approved.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/hntda-approved.jpg`
    : "/images/hntda-approved.jpg",
  "/images/rera-approved.jpg": SUPABASE_ASSET_PATH
    ? `${SUPABASE_ASSET_PATH}/rera-approved.jpg`
    : "/images/rera-approved.jpg",

  // Gallery (Dynamic)
  ...Object.fromEntries(
    Array.from({ length: 50 }, (_, i) => {
      const num = String(i + 1).padStart(4, "0");
      const path = `/images/IMG-20250929-WA${num}.jpg`;
      return [
        path,
        SUPABASE_ASSET_PATH
          ? `${SUPABASE_ASSET_PATH}/IMG-20250929-WA${num}.jpg`
          : path,
      ];
    })
  ),
};

/**
 * Returns the correct image URL (Supabase CDN or fallback)
 */
export function getImageUrl(path: string): string {
  return IMAGE_URLS[path] || path;
}

/**
 * Returns optimized Supabase URL with optional query params (e.g. width, height)
 */
export function getSupabaseImageUrl(
  imagePath: string,
  options?: { width?: number; height?: number }
): string {
  const baseUrl = getImageUrl(imagePath);
  if (!baseUrl.includes("supabase")) return baseUrl;

  const params = new URLSearchParams();
  if (options?.width) params.append("width", options.width.toString());
  if (options?.height) params.append("height", options.height.toString());

  return params.size > 0 ? `${baseUrl}?${params.toString()}` : baseUrl;
}
