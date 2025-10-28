# Nidhi Elite Website - Complete Setup Checklist

## ✅ Phase 1: Environment Variables (5 minutes)

### In v0 Workspace - Click "Vars" and add:

- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` = `9vgq2wji`
- [ ] `NEXT_PUBLIC_SANITY_DATASET` = `nidhielite`
- [ ] `SANITY_API_TOKEN` = `skMpTLPTMxpikksGvQziQXbfOpDu93ilgRuUDBJnAx0x1IQBWcdMH1dq7NuoD4FOnVzxhoBz1fubmrYxhav02h2hjy07RDi4SZGfpBn4O5m7rL2KknBb60ce1aYNapQsL6BZuOu8G61Gk3C40vYrNcqqJtj6uC0n83XOGTAb4EDfwa66a9IQ`
- [ ] `GOOGLE_SHEETS_WEBHOOK_URL` = (See Phase 2)
- [ ] `RESEND_API_KEY` = (Optional - See Phase 3)

---

## ✅ Phase 2: Google Sheets Setup (10 minutes)

### Create Google Sheet:
- [ ] Go to [Google Sheets](https://sheets.google.com)
- [ ] Create new spreadsheet: "Nidhi Elite Contact Submissions"
- [ ] Add headers: Timestamp | Name | Email | Phone | Message

### Create Google Apps Script:
- [ ] Click **Extensions** → **Apps Script**
- [ ] Paste the code from `GOOGLE_SHEETS_SETUP.md`
- [ ] Click **Save**
- [ ] Click **Deploy** → **New deployment**
- [ ] Select Type: "Web app"
- [ ] Execute as: Your account
- [ ] Who has access: "Anyone"
- [ ] Click **Deploy**
- [ ] Copy the **Deployment URL**

### Add to Environment Variables:
- [ ] In v0 Vars, add `GOOGLE_SHEETS_WEBHOOK_URL` = (Your deployment URL)

---

## ✅ Phase 3: Email Notifications (5 minutes)

### Option A: Using Resend (Recommended)
- [ ] Go to [Resend.com](https://resend.com)
- [ ] Sign up for free account
- [ ] Go to **API Keys**
- [ ] Copy your API key
- [ ] In v0 Vars, add `RESEND_API_KEY` = (Your API key)

### Option B: Using Gmail (Free)
- [ ] No additional setup needed!
- [ ] Google Apps Script will send emails via Gmail

---

## ✅ Phase 4: Sanity CMS Setup (5 minutes)

### Access Sanity Studio:
- [ ] After deployment, go to `https://nidhielite.com/studio`
- [ ] Login with your Google account

### Create First Blog Post:
- [ ] Click **Blog Post** → **Create**
- [ ] Fill in all required fields (Title, Slug, Author, etc.)
- [ ] Click **Publish**

### Verify Blog Page:
- [ ] Go to `https://nidhielite.com/blog`
- [ ] You should see your blog post listed

---

## ✅ Phase 5: Testing (10 minutes)

### Test Contact Form:
- [ ] Go to `https://nidhielite.com`
- [ ] Scroll to contact form
- [ ] Fill in all fields
- [ ] Click "Send Message"
- [ ] Verify success message appears
- [ ] Check Google Sheet for new row
- [ ] Check email at nidhielite@gmail.com

### Test Blog:
- [ ] Go to `https://nidhielite.com/blog`
- [ ] Verify blog post appears
- [ ] Click on post to view full content
- [ ] Verify all formatting looks correct

### Test Email Notifications:
- [ ] Submit contact form again
- [ ] Verify email received within 1 minute
- [ ] Check that email contains all form data

---

## ✅ Phase 6: Deployment (5 minutes)

### Deploy to Production:
- [ ] In v0, click **Publish** button (top right)
- [ ] Follow deployment instructions
- [ ] Wait for deployment to complete
- [ ] Test all functionality on live site

### Verify Live Site:
- [ ] Go to `https://nidhielite.com`
- [ ] Test contact form
- [ ] Check blog page
- [ ] Verify all links work

---

## ✅ Phase 7: Content Creation (Ongoing)

### Create Blog Posts:
- [ ] Plan 2-3 blog posts per month
- [ ] Target keywords: "plots in Hosur", "real estate investment", etc.
- [ ] Use Sanity Studio to create posts
- [ ] Add featured images (1200x630px)
- [ ] Optimize for SEO

### Monitor Contact Submissions:
- [ ] Check Google Sheet regularly
- [ ] Respond to inquiries within 24 hours
- [ ] Track conversion metrics

---

## 🎯 Success Criteria

After completing all phases, you should have:

✅ Contact form submissions saved to Google Sheets
✅ Email notifications sent to nidhielite@gmail.com
✅ Blog page displaying posts from Sanity CMS
✅ Individual blog post pages with full content
✅ All environment variables configured
✅ Website deployed and live

---

## 📞 Support

If you encounter any issues:

1. **Check the troubleshooting section** in `GOOGLE_SHEETS_SETUP.md`
2. **Review environment variables** - Make sure all are set correctly
3. **Check browser console** (F12) for error messages
4. **Contact support**: nidhielite@gmail.com or 93602 99919

---

## 📋 Estimated Timeline

- Phase 1: 5 minutes
- Phase 2: 10 minutes
- Phase 3: 5 minutes
- Phase 4: 5 minutes
- Phase 5: 10 minutes
- Phase 6: 5 minutes
- **Total: ~40 minutes**

---

## 🚀 Next Steps

1. Complete all phases above
2. Create your first 2-3 blog posts
3. Monitor contact form submissions
4. Optimize based on analytics
5. Plan content calendar for next 3 months

---

**Last Updated**: October 2025
**Status**: Ready for Production
