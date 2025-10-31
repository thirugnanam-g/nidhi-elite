
# Sanity CMS Setup Guide for Nidhi Elite

## Quick Start for Non-Technical Users

### 1. Access Sanity Studio

Once set up, you can access your blog management dashboard at:
\`\`\`
https://your-domain.com/studio
\`\`\`

Or locally during development:
\`\`\`
http://localhost:3000/studio
\`\`\`

### 2. Login Credentials

Use your Google account or email to log in to Sanity Studio.

### 3. Creating a New Blog Post

#### Step-by-Step Instructions:

1. **Click "Create" button** in the top right corner
2. **Select "Post"** from the document types
3. **Fill in the required fields:**
   - **Title**: Your blog post headline (e.g., "Top 5 Reasons to Invest in Hosur Plots")
   - **Slug**: Auto-generated URL (e.g., "top-5-reasons-invest-hosur-plots")
   - **Excerpt**: Short summary (150-160 characters for SEO)
   - **Author**: Select your name from the dropdown
   - **Categories**: Choose relevant categories (Real Estate, Investment Tips, etc.)
   - **Main Image**: Upload a featured image (recommended size: 1200x630px)
   - **Published Date**: Select the publication date
   - **Body**: Write your blog content using the rich text editor

4. **Click "Publish"** when ready

### 4. Rich Text Editor Features

The body editor supports:
- **Headings** (H2, H3, H4)
- **Bold** and *Italic* text
- **Bullet points** and numbered lists
- **Links** to external websites
- **Images** with captions
- **Quotes** for testimonials
- **Code blocks** (if needed)

### 5. SEO Best Practices

When creating blog posts:
- Use keywords naturally in the title and first paragraph
- Keep excerpts between 150-160 characters
- Use descriptive alt text for images
- Include internal links to your property pages
- Add relevant categories for better organization

### 6. Publishing Workflow

1. **Draft**: Save your work without publishing
2. **Preview**: See how it looks before publishing
3. **Publish**: Make it live on your website
4. **Unpublish**: Remove from website (keeps in drafts)

## Technical Setup (For Developers)

### Installation Steps:

1. **Install Sanity CLI:**
\`\`\`bash
npm install -g @sanity/cli
\`\`\`

2. **Initialize Sanity Project:**
\`\`\`bash
sanity init
\`\`\`

3. **Configure Environment Variables:**
Create `.env.local` file:
\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
\`\`\`

4. **Deploy Sanity Studio:**
\`\`\`bash
sanity deploy
\`\`\`

### Schema Configuration:

The blog schema includes:
- **Post**: Main blog post document
- **Author**: Author information
- **Category**: Blog categories
- **Tag**: Post tags

### API Integration:

The Next.js app fetches blog data using:
- `lib/sanity/client.ts`: Sanity client configuration
- `lib/sanity/queries.ts`: GROQ queries for fetching posts
- `lib/sanity/types.ts`: TypeScript types

## Sample Blog Posts Included

We've created 3 sample blog posts to get you started:

1. **"Why Hosur is the Next Real Estate Hotspot Near Bangalore"**
   - Keywords: Hosur real estate, Bangalore proximity, investment opportunity
   
2. **"HNTDA vs RERA Approved Plots: What You Need to Know"**
   - Keywords: HNTDA approved, RERA approved, plot approval

3. **"5 Things to Check Before Buying a Plot in Hosur"**
   - Keywords: buying plots Hosur, plot checklist, real estate tips

## Support

For technical issues or questions:
- Email: support@nidhielite.com
- Phone: 93602 99919

## Video Tutorial

[Coming Soon] We'll provide a video walkthrough of creating and publishing blog posts.
