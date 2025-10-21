# Nidhi Elite - Deployment Checklist

## Pre-Deployment (Before Pushing to GitHub)

### 1. Environment Variables Setup
- [ ] Add `SUPABASE_NEXT_PUBLIC_SUPABASE_URL` to Vercel project
- SUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY_ANON_KEY` to Vercel project
- [ ] Add `SUPABASE_SUPABASE_SERVICE_ROLE_KEY` to Vercel project
- [ ] Add `NEXT_PUBLIC_CONTACT_EMAIL` to Vercel project
- [ ] Verify all env vars are set in Vercel dashboard

### 2. Supabase Setup
- [ ] Create Supabase storage bucket named `assets`
- [ ] Make bucket **Public** (critical for CDN)
- [ ] Run upload script: `pnpm tsx scripts/upload-images-to-supabase.ts`
- [ ] Verify all 70+ images uploaded successfully
- [ ] Check `scripts/image-urls.json` for mapping

### 3. Code Quality
- [ ] Run `pnpm build` locally - should complete without errors
- [ ] Run `pnpm lint` - fix any linting issues
- [ ] Test responsive images on mobile/tablet/desktop
- [ ] Verify all images load correctly
- [ ] Check console for any errors or warnings

### 4. SEO Verification
- [ ] Verify canonical tags in layout.tsx
- [ ] Check robots.txt is accessible
- [ ] Verify sitemap.xml is accessible
- [ ] Test structured data with Google Rich Results Test
- [ ] Verify meta descriptions are under 160 characters

### 5. Performance Testing
- [ ] Run Lighthouse audit locally
- [ ] Check Core Web Vitals (LCP, FID, CLS)
- [ ] Verify images are lazy-loaded
- [ ] Check image formats (WebP/AVIF)
- [ ] Verify cache headers are set

## Deployment Steps

### Step 1: Push to GitHub
\`\`\`bash
git add .
git commit -m "feat: migrate images to Supabase and optimize performance"
git push origin main
\`\`\`

### Step 2: Vercel Deployment
1. Go to Vercel dashboard
2. Select your project
3. Click "Deployments" → "Redeploy"
4. Wait for build to complete (should be < 2 minutes)
5. Verify deployment is successful

### Step 3: Domain Configuration
1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add `nidhielite.com` if not already added
4. Update DNS records at your registrar
5. Wait for DNS propagation (24-48 hours)

### Step 4: SSL Certificate
- [ ] Verify SSL certificate is active
- [ ] Test HTTPS connection
- [ ] Verify no mixed content warnings

## Post-Deployment Verification

### 1. Website Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load from Supabase
- [ ] WhatsApp button works
- [ ] Contact form works
- [ ] Mobile menu works

### 2. Performance Metrics
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev
- [ ] Check FCP < 1.8s
- [ ] Check LCP < 2.5s
- [ ] Check CLS < 0.1
- [ ] Performance score > 85

### 3. SEO Verification
- [ ] Run SEO Site Checkup: https://seositecheckup.com/seo-audit/nidhielite.com
- [ ] Verify SEO score > 90
- [ ] Check all images have alt text
- [ ] Verify no 404 errors
- [ ] Check robots.txt and sitemap

### 4. Search Engine Indexing
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Check indexing status
- [ ] Verify no crawl errors

### 5. Security Check
- [ ] Run security headers test: https://securityheaders.com
- [ ] Verify HSTS header is set
- [ ] Check X-Frame-Options
- [ ] Verify no sensitive data in console

## Monitoring & Maintenance

### Weekly
- [ ] Check Vercel deployment logs
- [ ] Monitor Core Web Vitals
- [ ] Check for any error reports

### Monthly
- [ ] Review SEO metrics
- [ ] Check search console for issues
- [ ] Monitor image loading performance
- [ ] Review analytics

### Quarterly
- [ ] Full SEO audit
- [ ] Performance optimization review
- [ ] Update images if needed
- [ ] Review and update content

## Rollback Plan

If deployment fails:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous successful deployment
4. Click "Redeploy" on that version
5. Verify site is working

## Support & Troubleshooting

### Common Issues

**Images not loading:**
- Check Supabase bucket is public
- Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
- Check image paths in `lib/image-config.ts`

**Slow performance:**
- Verify images are in Supabase
- Check quality settings (85 is optimal)
- Run Lighthouse to identify bottlenecks

**SEO score not improving:**
- Verify all images have alt text
- Check meta descriptions
- Verify canonical tags
- Submit sitemap to search engines

## Contact

For deployment issues:
- Vercel Support: https://vercel.com/help
- Supabase Support: https://supabase.com/support
- Email: support@nidhielite.com
