# Google Indexing Guide for Zentpiper

## 🚀 Immediate Steps to Get Indexed

### 1. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your Vercel domain as a property
3. Verify ownership using HTML file method:
   - Download the verification file from GSC
   - Replace `/public/google-site-verification.html` with the downloaded file
   - Deploy to Vercel
   - Click "Verify" in GSC

### 2. Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Submit: `https://your-domain.vercel.app/sitemap.xml`
3. Submit: `https://your-domain.vercel.app/robots.txt`

### 3. Request Indexing

1. In GSC, go to "URL Inspection"
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for `/planes` and `/contacto` pages

### 4. Build Backlinks

- Submit to local business directories
- Create social media profiles linking to your site
- Guest post on relevant blogs
- Partner with other local businesses

### 5. Content Optimization

- Add blog section with SEO-focused articles
- Create location-specific landing pages
- Add customer testimonials and case studies
- Include local keywords (Lima, Perú, etc.)

## 📊 Monitoring Progress

### Check Indexing Status

```bash
# Search Google with:
site:your-domain.vercel.app
```

### Key Metrics to Track

- Pages indexed
- Average position
- Click-through rate
- Core Web Vitals

## ⚡ Quick Wins

1. **Social Signals**: Share your site on social media
2. **Local SEO**: Add Google My Business listing
3. **Speed**: Your site is already optimized
4. **Mobile**: Already responsive
5. **HTTPS**: Vercel provides this automatically

## 🔍 Troubleshooting

If not indexed after 2 weeks:

- Check robots.txt isn't blocking crawlers
- Verify sitemap is accessible
- Ensure no noindex tags
- Check for crawl errors in GSC

## 📈 Expected Timeline

- **Week 1**: Submit to GSC, request indexing
- **Week 2-4**: Google discovers and crawls site
- **Month 2-3**: Start appearing in search results
- **Month 3-6**: Improve rankings with content and backlinks
