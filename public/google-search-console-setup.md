# Google Search Console Setup Guide

## Step 1: Add Your Website
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter your URL: `https://noorazami.github.io/portfolio/`
4. Choose "HTML tag" verification method

## Step 2: Verify Ownership
Add this meta tag to your Layout.astro file in the <head> section:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

## Step 3: Monitor Performance
- **Search Performance**: See how your site appears in Google search
- **Index Coverage**: Check if all pages are indexed
- **Core Web Vitals**: Monitor page speed and user experience
- **Mobile Usability**: Ensure mobile-friendly design

## Step 4: Submit Sitemap
1. Go to "Sitemaps" section
2. Submit: `https://noorazami.github.io/portfolio/sitemap.xml`
3. Monitor indexing status

## Key Metrics to Watch:
- ✅ **Clicks**: How many times your site appears in search results
- ✅ **Impressions**: How often your site is shown
- ✅ **CTR (Click-Through Rate)**: Percentage of clicks vs impressions
- ✅ **Average Position**: Your ranking position in search results 