# Nidhi Elite Project Structure

## Organized Folder Structure

\`\`\`
nidhi-elite/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog pages
│   │   ├── [slug]/              # Individual blog post
│   │   │   └── page.tsx
│   │   └── page.tsx             # Blog listing
│   ├── (legal)/                 # Legal pages group
│   │   ├── cookies-policy/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms-and-conditions/
│   │       └── page.tsx
│   ├── api/                     # API routes
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── subscribe/
│   │       └── route.ts
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   ├── robots.ts                # Robots.txt
│   ├── sitemap.ts               # Sitemap
│   └── globals.css              # Global styles
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-menu.tsx
│   │
│   ├── sections/                # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── location-connectivity.tsx
│   │   ├── auto-scroll-gallery.tsx
│   │   ├── testimonials.tsx
│   │   └── contact-section.tsx
│   │
│   ├── features/                # Feature components
│   │   ├── plots-intro.tsx
│   │   ├── villa-intro.tsx
│   │   └── amenities.tsx
│   │
│   ├── shared/                  # Shared/reusable components
│   │   ├── floating-whatsapp.tsx
│   │   ├── contact-form.tsx
│   │   ├── newsletter-form.tsx
│   │   └── image-modal.tsx
│   │
│   ├── analytics/               # Analytics components
│   │   ├── google-analytics.tsx
│   │   ├── analytics-tracker.tsx
│   │   └── conversion-tracking.tsx
│   │
│   ├── seo/                     # SEO components
│   │   ├── structured-data.tsx
│   │   ├── seo-monitor.tsx
│   │   ├── performance-optimizer.tsx
│   │   └── accessibility-enhancer.tsx
│   │
│   └── ui/                      # UI components (shadcn)
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (other shadcn components)
│
├── lib/
│   ├── sanity/                  # Sanity CMS
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   │
│   ├── config/                  # Configuration files
│   │   ├── site-config.ts
│   │   └── seo-config.ts
│   │
│   ├── integrations/            # Third-party integrations
│   │   ├── supabase.ts
│   │   └── resend.ts
│   │
│   └── utils.ts                 # General utilities
│
├── public/
│   ├── images/                  # Image assets
│   ├── icons/                   # Icon assets
│   ├── favicon.ico
│   ├── favicon.svg
│   └── site.webmanifest
│
└── docs/                        # Documentation
    ├── SANITY_CMS_SETUP_GUIDE.md
    ├── SEO_OPTIMIZATION_GUIDE.md
    └── DEPLOYMENT_GUIDE.md
\`\`\`

## Component Organization

### Layout Components (`components/layout/`)
Core layout elements that appear across multiple pages:
- **header.tsx**: Main navigation header with mobile menu
- **footer.tsx**: Site footer with links and contact info
- **mobile-menu.tsx**: Mobile navigation drawer

### Section Components (`components/sections/`)
Full-width page sections for the homepage:
- **hero-section.tsx**: Hero banner with CTA
- **about-section.tsx**: Company introduction
- **location-connectivity.tsx**: Location map and connectivity info
- **auto-scroll-gallery.tsx**: Automated image gallery
- **testimonials.tsx**: Customer testimonials carousel
- **contact-section.tsx**: Contact form and information

### Feature Components (`components/features/`)
Product/feature-specific components:
- **plots-intro.tsx**: Plots information and pricing
- **villa-intro.tsx**: Villa customization options
- **amenities.tsx**: Community amenities showcase

### Shared Components (`components/shared/`)
Reusable components used across the site:
- **floating-whatsapp.tsx**: Floating WhatsApp button
- **contact-form.tsx**: Reusable contact form
- **newsletter-form.tsx**: Email subscription form
- **image-modal.tsx**: Lightbox for images

### Analytics Components (`components/analytics/`)
Tracking and analytics integrations:
- **google-analytics.tsx**: Google Analytics 4 setup
- **analytics-tracker.tsx**: Custom event tracking
- **conversion-tracking.tsx**: Conversion pixel tracking

### SEO Components (`components/seo/`)
SEO optimization and monitoring:
- **structured-data.tsx**: JSON-LD structured data
- **seo-monitor.tsx**: SEO health monitoring
- **performance-optimizer.tsx**: Performance enhancements
- **accessibility-enhancer.tsx**: A11y improvements

## Library Organization

### Sanity CMS (`lib/sanity/`)
- **client.ts**: Sanity client configuration
- **queries.ts**: GROQ queries for blog posts
- **types.ts**: TypeScript types for Sanity data

### Configuration (`lib/config/`)
- **site-config.ts**: Site-wide configuration (contact info, social links)
- **seo-config.ts**: SEO defaults and metadata

### Integrations (`lib/integrations/`)
- **supabase.ts**: Supabase client setup
- **resend.ts**: Email service configuration

## Key Features

### 1. Blog System (Sanity CMS)
- Content management for non-technical users
- SEO-optimized blog structure
- Category and tag support
- Rich text editing with Portable Text

### 2. Performance Optimizations
- Next.js Image optimization
- Code splitting and lazy loading
- Aggressive caching strategies
- Reduced HTTP requests
- Font optimization

### 3. SEO Enhancements
- Comprehensive structured data
- Optimized meta tags and Open Graph
- XML sitemap generation
- Robots.txt configuration
- Local SEO optimization (geo tags)
- Blog for content marketing

### 4. Analytics & Tracking
- Google Analytics 4 integration
- Custom event tracking
- Conversion tracking
- Performance monitoring

### 5. Integrations
- **Supabase**: Database for contact forms and subscriptions
- **Resend**: Email delivery service
- **Sanity**: Headless CMS for blog content

## Environment Variables

Required environment variables (set in Vercel or `.env.local`):

\`\`\`env
# Supabase
SUPABASE_POSTGRES_URL=
SUPABASE_SUPABASE_URL=
SUPABASE_SUPABASE_ANON_KEY=
SUPABASE_NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Resend
RESEND_API_KEY=

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=
\`\`\`

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Set up environment variables**: Copy `.env.example` to `.env.local`
3. **Configure Sanity**: Follow `docs/SANITY_CMS_SETUP_GUIDE.md`
4. **Run development server**: `npm run dev`
5. **Build for production**: `npm run build`
6. **Deploy to Vercel**: Push to GitHub (auto-deploys)

## File Naming Conventions

- **Components**: kebab-case (e.g., `hero-section.tsx`)
- **Pages**: kebab-case (e.g., `privacy-policy/page.tsx`)
- **Utilities**: kebab-case (e.g., `site-config.ts`)
- **Types**: PascalCase for interfaces/types (e.g., `Post`, `SiteConfig`)

## Import Aliases

The project uses TypeScript path aliases for cleaner imports:

\`\`\`typescript
import { Header } from "@/components/layout/header"
import { siteConfig } from "@/lib/config/site-config"
import { cn } from "@/lib/utils"
\`\`\`

## Next Steps

1. ✅ Organize components into logical folders
2. ✅ Update all import paths
3. ✅ Document project structure
4. 🔄 Set up Sanity CMS project
5. 🔄 Create initial blog content
6. 🔄 Test all functionality
7. 🔄 Deploy to production

## Maintenance

- **Adding new sections**: Create in `components/sections/`
- **Adding new features**: Create in `components/features/`
- **Adding blog posts**: Use Sanity Studio
- **Updating SEO**: Modify `lib/config/seo-config.ts`
- **Updating site info**: Modify `lib/config/site-config.ts`
