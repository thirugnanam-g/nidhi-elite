# Image Optimization Guide

## Current Status
- All images are stored in Supabase CDN
- Images should be converted to WebP format for better performance

## WebP Benefits
- 25-35% smaller file size than JPEG
- 26% smaller than PNG
- Better compression without quality loss
- Supported by 95%+ of modern browsers

## Images to Convert
1. butterfly-logo.jpg → butterfly-logo.webp
2. nidhi-elite-og-image.jpg → nidhi-elite-og-image.webp
3. site-layout.jpg → site-layout.webp
4. IMG-20250929-WA0008.jpg → IMG-20250929-WA0008.webp

## How to Convert
Run the conversion script:
\`\`\`bash
npm run convert-images
\`\`\`

## Upload to Supabase
1. Go to Supabase Dashboard
2. Navigate to Storage → assets bucket
3. Upload WebP versions of images
4. Update image URLs in code to use .webp extension

## Expected Performance Improvement
- Reduce page load time by 15-20%
- Improve Core Web Vitals scores
- Better mobile performance
- Reduced bandwidth usage

## Image URL Format
\`\`\`
https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets/image-name.webp
