# Environment Variables Setup Guide

## Overview

Your Nidhi Elite website requires several environment variables to function properly. This guide explains each one and how to set them up.

---

## Required Environment Variables

### 1. Sanity CMS Variables

#### `NEXT_PUBLIC_SANITY_PROJECT_ID`
- **Value**: `9vgq2wji`
- **Purpose**: Identifies your Sanity project
- **Type**: Public (can be exposed in frontend)
- **Required**: Yes

#### `NEXT_PUBLIC_SANITY_DATASET`
- **Value**: `nidhielite`
- **Purpose**: Specifies which dataset to use in Sanity
- **Type**: Public (can be exposed in frontend)
- **Required**: Yes

#### `SANITY_API_TOKEN`
- **Value**: `skMpTLPTMxpikksGvQziQXbfOpDu93ilgRuUDBJnAx0x1IQBWcdMH1dq7NuoD4FOnVzxhoBz1fubmrYxhav02h2hjy07RDi4SZGfpBn4O5m7rL2KknBb60ce1aYNapQsL6BZuOu8G61Gk3C40vYrNcqqJtj6uC0n83XOGTAb4EDfwa66a9IQ`
- **Purpose**: Authenticates API requests to Sanity
- **Type**: Secret (never expose in frontend)
- **Required**: Yes
- **Note**: This is a read-only token for fetching blog posts

---

### 2. Google Sheets Integration

#### `GOOGLE_SHEETS_WEBHOOK_URL`
- **Value**: Your Google Apps Script deployment URL
- **Purpose**: Sends contact form data to Google Sheets
- **Type**: Secret (but can be public)
- **Required**: Yes (for Google Sheets integration)
- **How to get**:
  1. Create Google Apps Script (see `GOOGLE_SHEETS_SETUP.md`)
  2. Deploy as Web app
  3. Copy the deployment URL
  4. Example: `https://script.google.com/macros/d/1ABC...xyz/usercontent`

---

### 3. Email Notifications (Optional)

#### `RESEND_API_KEY`
- **Value**: Your Resend API key
- **Purpose**: Sends email notifications for contact form submissions
- **Type**: Secret (never expose)
- **Required**: No (optional, but recommended)
- **How to get**:
  1. Go to [Resend.com](https://resend.com)
  2. Sign up for free account
  3. Go to API Keys section
  4. Copy your API key
  5. Example: `re_1234567890abcdef`

---

## How to Add Environment Variables in v0

### Step 1: Open v0 Workspace
1. Go to your v0 project
2. Look for the **Vars** option in the left sidebar

### Step 2: Add Each Variable
1. Click **Vars**
2. Click **Add Variable** (or **+** button)
3. Enter the variable name (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)
4. Enter the value
5. Click **Save**

### Step 3: Verify All Variables
Make sure you have added:
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID`
- ✅ `NEXT_PUBLIC_SANITY_DATASET`
- ✅ `SANITY_API_TOKEN`
- ✅ `GOOGLE_SHEETS_WEBHOOK_URL`
- ✅ `RESEND_API_KEY` (optional)

---

## Environment Variables Summary Table

| Variable Name | Value | Type | Required | Purpose |
|---|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `9vgq2wji` | Public | Yes | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `nidhielite` | Public | Yes | Sanity dataset name |
| `SANITY_API_TOKEN` | Your token | Secret | Yes | Sanity authentication |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Your URL | Secret | Yes | Google Sheets webhook |
| `RESEND_API_KEY` | Your key | Secret | No | Email notifications |

---

## Testing Environment Variables

### Test Sanity Connection
1. Go to your blog page: `https://nidhielite.com/blog`
2. If blog posts appear, Sanity variables are correct ✅
3. If blank, check Sanity variables

### Test Google Sheets
1. Submit contact form
2. Check your Google Sheet
3. If new row appears, Google Sheets webhook is correct ✅
4. If not, check `GOOGLE_SHEETS_WEBHOOK_URL`

### Test Email Notifications
1. Submit contact form
2. Check email at nidhielite@gmail.com
3. If email received, Resend API key is correct ✅
4. If not, check `RESEND_API_KEY`

---

## Troubleshooting

### "Blog posts not loading"
- ✅ Check `NEXT_PUBLIC_SANITY_PROJECT_ID` = `9vgq2wji`
- ✅ Check `NEXT_PUBLIC_SANITY_DATASET` = `nidhielite`
- ✅ Check `SANITY_API_TOKEN` is correct
- ✅ Verify blog posts are published in Sanity

### "Google Sheets not updating"
- ✅ Check `GOOGLE_SHEETS_WEBHOOK_URL` is correct
- ✅ Verify Google Apps Script is deployed
- ✅ Check Google Sheet has correct column headers
- ✅ Check browser console for errors

### "Emails not received"
- ✅ Check `RESEND_API_KEY` is correct
- ✅ Check spam folder
- ✅ Verify email address in form is correct
- ✅ Check Resend dashboard for failed emails

---

## Security Best Practices

### Do's ✅
- ✅ Keep secret variables (tokens, API keys) private
- ✅ Use different tokens for different environments
- ✅ Rotate API keys regularly
- ✅ Use strong, unique tokens

### Don'ts ❌
- ❌ Don't commit `.env` files to Git
- ❌ Don't share API keys in emails or chat
- ❌ Don't use the same token for multiple projects
- ❌ Don't expose secret variables in frontend code

---

## Regenerating Tokens

### Sanity API Token
1. Go to [Sanity Manage](https://manage.sanity.io)
2. Select your project
3. Go to **Settings** → **API** → **Tokens**
4. Click the token to regenerate
5. Update `SANITY_API_TOKEN` in v0

### Resend API Key
1. Go to [Resend Dashboard](https://resend.com)
2. Go to **API Keys**
3. Click the key to regenerate
4. Update `RESEND_API_KEY` in v0

---

## Support

For issues with environment variables:
- Email: nidhielite@gmail.com
- Phone: 93602 99919
- Check troubleshooting section above

---

**Last Updated**: October 2025
**Version**: 1.0
