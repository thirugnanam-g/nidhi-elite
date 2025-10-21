# Nidhi Elite - Image Migration & Performance Optimization Guide

## Overview
This guide explains the image migration to Supabase and performance optimizations implemented for nidhielite.com.

## 1. Image Migration to Supabase

### Why Supabase?
- **CDN Delivery**: Images served from global CDN for faster loading
- **Automatic Optimization**: Supabase automatically optimizes images
- **Reduced Server Load**: Offload image serving to dedicated storage
- **Better SEO**: Faster image delivery improves Core Web Vitals

### Setup Steps

#### Step 1: Create Supabase Storage Bucket
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to **Storage** → **Buckets**
3. Click **New Bucket** and name it `assets`
4. Make it **Public** (important for CDN delivery)

#### Step 2: Upload Images
Run the upload script:
\`\`\`bash
pnpm tsx scripts/upload-images-to-supabase.ts
\`\`\`

This will:
- Upload all 70+ images from `/public/images` to Supabase
- Generate public URLs automatically
- Save mapping to `scripts/image-urls.json`

#### Step 3: Update Image URLs
The `lib/image-config.ts` file automatically uses Supabase URLs when available:
\`\`\`typescript
export const IMAGE_URLS: Record<string, string> = {
  "/images/butterfly-logo.jpg": "https://[project].supabase.co/storage/v1/object/public/assets/images/butterfly-logo.jpg",
  // ... more images
}
\`\`\`

## 2. Responsive Image Implementation

### Key Features
- **Automatic Format Selection**: WebP/AVIF for modern browsers, JPEG fallback
- **Lazy Loading**: Images load only when needed (`loading="lazy"`)
- **Responsive Sizes**: Different image sizes for different screen sizes
- **Quality Optimization**: 85% quality for photos, 80% for gallery

### Image Component Usage
\`\`\`tsx
import Image from "next/image"
import { getImageUrl } from "@/lib/image-config"

export function MyComponent() {
  return (
    <Image
      src={getImageUrl("/images/hero-bg.jpg") || "/placeholder.svg"}
      alt="Descriptive alt text"
      fill
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      quality={85}
    />
  )
}
\`\`\`

### Sizes Attribute Guide
- **Hero/Full-width**: `100vw`
- **Half-width**: `(max-width: 768px) 100vw, 50vw`
- **Third-width**: `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`
- **Gallery**: `(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw`

## 3. Performance Metrics

### Before Migration
- First Contentful Paint (FCP): 3.99s
- Largest Contentful Paint (LCP): 3.99s
- Total Image Size: 2.61 MB
- HTTP Requests: 39

### Expected After Migration
- FCP: < 1.8s (50%+ improvement)
- LCP: < 2.5s (40%+ improvement)
- Total Image Size: ~1.2 MB (55% reduction with WebP)
- HTTP Requests: < 20 (50% reduction)

## 4. SEO Improvements

### Image SEO Best Practices
1. **Alt Text**: All images have descriptive alt text
2. **Responsive Images**: Proper `sizes` attributes for responsive loading
3. **Modern Formats**: WebP/AVIF reduce file size and improve Core Web Vitals
4. **Lazy Loading**: Improves page load speed (Core Web Vital)
5. **Structured Data**: Images properly tagged for search engines

### Core Web Vitals Impact
- **LCP (Largest Contentful Paint)**: Improved by faster image delivery
- **FID (First Input Delay)**: Improved by reduced JavaScript blocking
- **CLS (Cumulative Layout Shift)**: Prevented by proper image dimensions

## 5. Environment Variables

Add to your Vercel project:
\`\`\`
SUPABASE_NEXT_PUBLIC_SUPABASE_URL=https://[project].supSUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY_ANON_KEY=[your-anon-key]
SUPABASE_SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]
\`\`\`

## 6. Monitoring & Testing

### Test Image Performance
1. Run Lighthouse audit: `npm run build && npm run start`
2. Check Core Web Vitals at [PageSpeed Insights](https://pagespeed.web.dev)
3. Monitor SEO at [SEO Site Checkup](https://seositecheckup.com)

### Expected Improvements
- SEO Score: 72 → 90+
- Performance Score: 40 → 85+
- Accessibility Score: 90 → 95+

## 7. Troubleshooting

### Images Not Loading
1. Check Supabase bucket is **Public**
2. Verify `NEXT_PUBLIC_SUPABASE_URL` is set correctly
3. Check image paths in `lib/image-config.ts`

### Slow Image Loading
1. Verify images are in Supabase storage
2. Check `quality` setting (85 is optimal)
3. Ensure `sizes` attribute is correct

### Build Errors
1. Run `pnpm install` to ensure dependencies
2. Check `next.config.mjs` for syntax errors
3. Verify all image paths exist

## 8. Future Optimizations

- [ ] Implement image compression pipeline
- [ ] Add image caching headers
- [ ] Setup image CDN edge caching
- [ ] Monitor Core Web Vitals continuously
- [ ] A/B test image quality settings

## Support

For issues or questions:
1. Check Supabase documentation: https://supabase.com/docs
2. Review Next.js Image docs: https://nextjs.org/docs/app/api-reference/components/image
3. Contact support: support@nidhielite.com
