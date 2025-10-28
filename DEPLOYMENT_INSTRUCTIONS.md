# Deployment Instructions for Nidhi Elite Website

## Pre-Deployment Checklist

Before deploying, make sure you have completed:

- [ ] All environment variables added to v0 Vars
- [ ] Google Sheets webhook URL configured
- [ ] Sanity API token added
- [ ] Blog posts created in Sanity Studio
- [ ] Contact form tested locally
- [ ] All links verified

---

## Step 1: Verify Environment Variables

In v0 workspace, click **Vars** and confirm all are present:

\`\`\`
✅ NEXT_PUBLIC_SANITY_PROJECT_ID = 9vgq2wji
✅ NEXT_PUBLIC_SANITY_DATASET = nidhielite
✅ SANITY_API_TOKEN = skMpTLPTMxpikksGvQziQXbfOpDu93ilgRuUDBJnAx0x1IQBWcdMH1dq7NuoD4FOnVzxhoBz1fubmrYxhav02h2hjy07RDi4SZGfpBn4O5m7rL2KknBb60ce1aYNapQsL6BZuOu8G61Gk3C40vYrNcqqJtj6uC0n83XOGTAb4EDfwa66a9IQ
✅ GOOGLE_SHEETS_WEBHOOK_URL = (Your Google Apps Script URL)
✅ RESEND_API_KEY = (Your Resend API key - optional)
\`\`\`

---

## Step 2: Deploy to Production

### Option A: Deploy via v0 UI (Recommended)

1. In v0 workspace, click **Publish** button (top right)
2. Select deployment target (Vercel recommended)
3. Follow the deployment wizard
4. Wait for deployment to complete (usually 2-5 minutes)
5. You'll receive a deployment URL

### Option B: Deploy via GitHub

1. Click **GitHub** button in v0
2. Connect your GitHub account
3. Select repository
4. Push code to main branch
5. Vercel will auto-deploy

### Option C: Deploy via Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
\`\`\`

---

## Step 3: Configure Custom Domain

### If using Vercel:

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your domain: `nidhielite.com`
5. Follow DNS configuration instructions
6. Wait for DNS to propagate (usually 24 hours)

### DNS Configuration:

Add these records to your domain registrar:

\`\`\`
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.20
\`\`\`

---

## Step 4: Verify Deployment

After deployment completes:

### Check Website
1. Go to `https://nidhielite.com` (or your deployment URL)
2. Verify homepage loads correctly
3. Check all links work

### Check Blog
1. Go to `https://nidhielite.com/blog`
2. Verify blog posts appear
3. Click on a post to view full content

### Check Contact Form
1. Scroll to contact form
2. Fill in all fields
3. Submit form
4. Verify success message
5. Check Google Sheet for new row
6. Check email at nidhielite@gmail.com

### Check Sanity Studio
1. Go to `https://nidhielite.com/studio`
2. Verify you can login
3. Verify you can create/edit blog posts

---

## Step 5: Post-Deployment Tasks

### Update DNS Records
- [ ] Update domain DNS to point to Vercel
- [ ] Wait for DNS propagation (24 hours)
- [ ] Verify domain works

### Set Up SSL Certificate
- [ ] Vercel automatically provides SSL
- [ ] Verify HTTPS works: `https://nidhielite.com`

### Configure Email
- [ ] Verify emails are being sent
- [ ] Check spam folder
- [ ] Add domain to Resend (if using)

### Monitor Performance
- [ ] Check Vercel Analytics
- [ ] Monitor error logs
- [ ] Check Core Web Vitals

---

## Step 6: Create Initial Content

### Create Blog Posts
1. Go to `https://nidhielite.com/studio`
2. Create 2-3 blog posts
3. Publish them
4. Verify they appear on blog page

### Test Contact Form
1. Submit test contact form
2. Verify Google Sheet updates
3. Verify email is received

---

## Troubleshooting Deployment

### Website not loading
- [ ] Check Vercel deployment status
- [ ] Verify environment variables are set
- [ ] Check browser console for errors
- [ ] Clear browser cache

### Blog posts not showing
- [ ] Verify Sanity environment variables
- [ ] Check Sanity API token is correct
- [ ] Verify blog posts are published
- [ ] Check browser console for errors

### Contact form not working
- [ ] Verify Google Sheets webhook URL
- [ ] Check Google Apps Script is deployed
- [ ] Verify Resend API key (if using)
- [ ] Check browser console for errors

### Custom domain not working
- [ ] Verify DNS records are correct
- [ ] Wait for DNS propagation (up to 24 hours)
- [ ] Check Vercel domain settings
- [ ] Try clearing browser cache

---

## Rollback Instructions

If something goes wrong after deployment:

### Via Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Deployments**
4. Find the previous working deployment
5. Click **Promote to Production**

### Via v0
1. Go to v0 workspace
2. Find previous version
3. Click **Redeploy**

---

## Performance Optimization

After deployment, optimize performance:

### Enable Caching
- [ ] Vercel caching is enabled by default
- [ ] Configure cache headers in `next.config.js`

### Optimize Images
- [ ] Use Next.js Image component (already done)
- [ ] Compress images before uploading to Sanity
- [ ] Use WebP format when possible

### Monitor Performance
- [ ] Check Vercel Analytics
- [ ] Monitor Core Web Vitals
- [ ] Check page load times

---

## Monitoring & Maintenance

### Daily
- [ ] Check for new contact form submissions
- [ ] Respond to inquiries

### Weekly
- [ ] Review analytics
- [ ] Check error logs
- [ ] Monitor performance

### Monthly
- [ ] Create new blog posts
- [ ] Update content
- [ ] Review SEO performance

---

## Support During Deployment

If you encounter issues:

1. **Check Vercel Status**: https://www.vercel-status.com/
2. **Check Sanity Status**: https://status.sanity.io/
3. **Review Logs**: Check Vercel deployment logs for errors
4. **Contact Support**: nidhielite@gmail.com or 93602 99919

---

## Deployment Checklist Summary

\`\`\`
Pre-Deployment:
- [ ] Environment variables configured
- [ ] Google Sheets webhook set up
- [ ] Sanity API token added
- [ ] Blog posts created
- [ ] Contact form tested

Deployment:
- [ ] Click Publish in v0
- [ ] Wait for deployment to complete
- [ ] Verify deployment URL works

Post-Deployment:
- [ ] Configure custom domain
- [ ] Verify all pages load
- [ ] Test contact form
- [ ] Test blog system
- [ ] Test Sanity Studio
- [ ] Monitor performance

Content:
- [ ] Create initial blog posts
- [ ] Test contact form submission
- [ ] Verify Google Sheet updates
- [ ] Verify emails are received
\`\`\`

---

## Estimated Timeline

- Pre-deployment setup: 40 minutes
- Deployment: 5-10 minutes
- DNS propagation: 24 hours
- Post-deployment verification: 10 minutes
- **Total: ~1 hour (plus 24 hours for DNS)**

---

## Success Indicators

After deployment, you should see:

✅ Website loads at `https://nidhielite.com`
✅ Blog page displays posts from Sanity
✅ Contact form submits successfully
✅ Google Sheet updates with submissions
✅ Emails received at nidhielite@gmail.com
✅ Sanity Studio accessible at `/studio`
✅ All links working correctly
✅ Images loading properly
✅ Mobile responsive design working
✅ No console errors

---

## Next Steps

1. Complete deployment
2. Create initial blog posts
3. Monitor contact form submissions
4. Optimize based on analytics
5. Plan content calendar

---

**Last Updated**: October 2025
**Version**: 1.0
