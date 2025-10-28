# Google Sheets & Email Integration Setup Guide

## Overview
This guide will help you set up:
1. **Google Sheets** - Automatically save contact form responses
2. **Email Notifications** - Get notified when someone submits the form
3. **Sanity CMS** - Manage blog posts from a user-friendly dashboard

---

## Part 1: Google Sheets Integration

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ New"** → **"Blank spreadsheet"**
3. Name it: `Nidhi Elite Contact Submissions`
4. Create column headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Message`

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete the default code and paste this:

\`\`\`javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add new row with data
    sheet.appendRow([
      new Date(data.timestamp).toLocaleString('en-IN'),
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    // Send email notification
    GmailApp.sendEmail(
      'nidhielite@gmail.com',
      `New Contact Form Submission from ${data.name}`,
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
    );
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error: ' + error);
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

3. Click **Save** (name it anything, e.g., "Contact Form Handler")
4. Click **Deploy** → **New deployment**
5. Select **Type**: "Web app"
6. Set **Execute as**: Your Google account
7. Set **Who has access**: "Anyone"
8. Click **Deploy**
9. Copy the **Deployment URL** (you'll need this)

### Step 3: Add Environment Variable to Vercel

1. Go to your v0 workspace
2. Click **Vars** in the left sidebar
3. Add a new variable:
   - **Name**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: Paste the deployment URL from Step 2.9

---

## Part 2: Email Notifications (Optional but Recommended)

### Option A: Using Resend (Recommended)

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Go to **API Keys** and copy your API key
4. In v0 workspace, click **Vars** and add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Paste your Resend API key

### Option B: Using Gmail (Free)

The Google Apps Script above already sends emails via Gmail. No additional setup needed!

---

## Part 3: Sanity CMS Setup

### Step 1: Add Sanity API Key to Environment Variables

1. In v0 workspace, click **Vars** and add:
   - **Name**: `SANITY_API_TOKEN`
   - **Value**: `skMpTLPTMxpikksGvQziQXbfOpDu93ilgRuUDBJnAx0x1IQBWcdMH1dq7NuoD4FOnVzxhoBz1fubmrYxhav02h2hjy07RDi4SZGfpBn4O5m7rL2KknBb60ce1aYNapQsL6BZuOu8G61Gk3C40vYrNcqqJtj6uC0n83XOGTAb4EDfwa66a9IQ`

2. Also add these (if not already present):
   - **Name**: `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - **Value**: `9vgq2wji`

   - **Name**: `NEXT_PUBLIC_SANITY_DATASET`
   - **Value**: `nidhielite`

### Step 2: Access Sanity Studio

After deployment, you can access Sanity Studio at:
\`\`\`
https://nidhielite.com/studio
\`\`\`

Or locally during development:
\`\`\`
http://localhost:3000/studio
\`\`\`

### Step 3: Create Your First Blog Post

1. Go to Sanity Studio
2. Click **Blog Post** → **Create**
3. Fill in:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated (e.g., `my-first-post`)
   - **Author**: Select or create an author
   - **Main Image**: Upload a featured image
   - **Categories**: Select relevant categories
   - **Published Date**: Today's date
   - **Body**: Write your content using the rich text editor
   - **Excerpt**: Short summary (150-160 characters)
   - **SEO Title**: Title for search engines
   - **SEO Description**: Description for search engines
   - **SEO Keywords**: Comma-separated keywords

4. Click **Publish**

### Step 4: View Your Blog

Your blog will automatically appear at:
\`\`\`
https://nidhielite.com/blog
\`\`\`

Individual posts will be at:
\`\`\`
https://nidhielite.com/blog/your-post-slug
\`\`\`

---

## Testing

### Test Contact Form Submission

1. Go to your website
2. Scroll to the contact form
3. Fill in all fields and submit
4. Check:
   - ✅ Success message appears
   - ✅ Google Sheet has new row
   - ✅ Email received at nidhielite@gmail.com

### Test Blog

1. Create a blog post in Sanity Studio
2. Go to `https://nidhielite.com/blog`
3. You should see your blog post listed
4. Click on it to view the full post

---

## Troubleshooting

### Form not submitting?
- Check browser console (F12) for errors
- Verify all environment variables are set correctly
- Check that Google Apps Script deployment URL is correct

### Blog posts not showing?
- Verify Sanity API token is correct
- Check that blog posts are published (not in draft)
- Clear browser cache and refresh

### Emails not received?
- Check spam folder
- Verify email address in contact form is correct
- Check Google Apps Script logs for errors

### Google Sheet not updating?
- Verify Google Apps Script deployment URL is in `GOOGLE_SHEETS_WEBHOOK_URL`
- Check Google Apps Script logs for errors
- Make sure Google Sheet has correct column headers

---

## Support

For issues or questions:
- Email: nidhielite@gmail.com
- Phone: 93602 99919

---

## Summary of Environment Variables

Add these to your v0 workspace **Vars**:

| Variable Name | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `9vgq2wji` |
| `NEXT_PUBLIC_SANITY_DATASET` | `nidhielite` |
| `SANITY_API_TOKEN` | Your Sanity API token |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Your Google Apps Script deployment URL |
| `RESEND_API_KEY` | (Optional) Your Resend API key |

---

## What's Next?

1. ✅ Set up Google Sheets integration
2. ✅ Configure email notifications
3. ✅ Add Sanity environment variables
4. ✅ Create your first blog post
5. ✅ Test the contact form
6. Deploy to production!
