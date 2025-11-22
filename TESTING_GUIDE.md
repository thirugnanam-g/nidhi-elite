# Testing & Verification Guide - Nidhi Elite

## Pre-Deployment Testing

### 1. Local Build Test
\`\`\`bash
# Clean build
pnpm clean
pnpm install
pnpm build

# Expected output:
# ✓ Compiled successfully
# ✓ Generating static pages (8/8)
# Route sizes should be < 150 KB
\`\`\`

### 2. Local Performance Test
\`\`\`bash
# Start production server
pnpm start

# Open http://localhost:3000 in browser
# Check:
# - All images load correctly
# - No console errors
# - Responsive on mobile/tablet/desktop
# - All links work
\`\`\`

### 3. Image Loading Test
- [ ] Hero background image loads
- [ ] Logo loads in header
- [ ] Site plan images load
- [ ] Villa render image loads
- [ ] Gallery images load (50 images)
- [ ] Footer logos load
- [ ] All images are responsive

### 4. Responsive Design Test
Test on these breakpoints:
- [ ] Mobile (320px): Single column layout
- [ ] Tablet (768px): Two column layout
- [ ] Desktop (1024px): Full layout
- [ ] Wide (1920px): Optimized spacing

### 5. SEO Test
\`\`\`bash
# Check meta tags
curl -s https://nidhielite.com | grep -E "<title>|<meta name=\"description\""

# Expected:
# <title>Nidhi Elite - Luxury Plots & Villas in Hosur</title>
# <meta name="description" content="...">
\`\`\`

## Post-Deployment Testing

### 1. Website Functionality
- [ ] Homepage loads in < 3 seconds
- [ ] All navigation links work
- [ ] WhatsApp button opens chat
- [ ] Contact form submits
- [ ] Mobile menu opens/closes
- [ ] Smooth scrolling works

### 2. Image Verification
- [ ] All images load from Supabase
- [ ] Images are responsive
- [ ] Images have alt text
- [ ] No broken image links
- [ ] Gallery carousel works

### 3. Performance Metrics

#### Lighthouse Audit
1. Go to https://pagespeed.web.dev
2. Enter: https://nidhielite.com
3. Check scores:
   - [ ] Performance: > 85
   - [ ] Accessibility: > 90
   - [ ] Best Practices: > 90
   - [ ] SEO: > 90

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

#### Network Performance
- [ ] Total page size: < 2 MB
- [ ] HTTP requests: < 20
- [ ] Time to interactive: < 3s

### 4. SEO Verification

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://nidhielite.com
3. Submit sitemap: https://nidhielite.com/sitemap.xml
4. Check:
   - [ ] No crawl errors
   - [ ] All pages indexed
   - [ ] No mobile usability issues

#### SEO Site Checkup
1. Go to https://seositecheckup.com/seo-audit/nidhielite.com
2. Verify:
   - [ ] SEO Score: > 90
   - [ ] No critical issues
   - [ ] All images have alt text
   - [ ] Meta descriptions present

#### Rich Results Test
1. Go to https://search.google.com/test/rich-results
2. Enter: https://nidhielite.com
3. Check:
   - [ ] Organization schema valid
   - [ ] LocalBusiness schema valid
   - [ ] No errors

### 5. Security Check

#### Security Headers
1. Go to https://securityheaders.com
2. Enter: https://nidhielite.com
3. Check:
   - [ ] HSTS header present
   - [ ] X-Frame-Options set
   - [ ] X-Content-Type-Options set
   - [ ] Grade: A or A+

#### SSL Certificate
- [ ] HTTPS works
- [ ] No mixed content warnings
- [ ] Certificate valid
- [ ] No security warnings

### 6. Mobile Testing

#### Mobile Responsiveness
- [ ] Header is responsive
- [ ] Navigation menu works
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Forms are usable

#### Mobile Performance
- [ ] Page loads in < 4s on 4G
- [ ] Images load progressively
- [ ] No layout shifts
- [ ] Smooth scrolling

### 7. Browser Compatibility
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Automated Testing

### Run Tests
\`\`\`bash
# Lint check
pnpm lint

# Type check
pnpm type-check

# Build check
pnpm build
\`\`\`

## Performance Benchmarks

### Target Metrics
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| FCP | < 1.8s | TBD | ⏳ |
| LCP | < 2.5s | TBD | ⏳ |
| CLS | < 0.1 | TBD | ⏳ |
| Performance Score | > 85 | TBD | ⏳ |
| SEO Score | > 90 | TBD | ⏳ |
| Total Size | < 2 MB | TBD | ⏳ |

## Monitoring Setup

### Google Analytics
1. Add tracking code to layout.tsx
2. Monitor:
   - Page views
   - User engagement
   - Bounce rate
   - Conversion rate

### Vercel Analytics
1. Enable in Vercel dashboard
2. Monitor:
   - Core Web Vitals
   - Performance metrics
   - Error rates

## Troubleshooting

### Images Not Loading
\`\`\`bash
# Check Supabase bucket
# 1. Go to Supabase dashboard
# 2. Storage → assets bucket
# 3. Verify bucket is PUBLIC
# 4. Check image files exist
\`\`\`

### Slow Performance
\`\`\`bash
# Run Lighthouse
# 1. Open DevTools (F12)
# 2. Lighthouse tab
# 3. Generate report
# 4. Check bottlenecks
\`\`\`

### SEO Issues
\`\`\`bash
# Check robots.txt
curl https://nidhielite.com/robots.txt

# Check sitemap
curl https://nidhielite.com/sitemap.xml

# Check meta tags
curl -s https://nidhielite.com | grep -E "<meta|<title"
\`\`\`

## Sign-Off Checklist

- [ ] All tests passed
- [ ] Performance metrics met
- [ ] SEO score > 90
- [ ] No console errors
- [ ] No security warnings
- [ ] Mobile responsive
- [ ] All links work
- [ ] Images load correctly
- [ ] Ready for production

## Support

For testing issues:
- Check PERFORMANCE_GUIDE.md
- Check DEPLOYMENT_CHECKLIST.md
- Contact: support@nidhielite.com
