#!/bin/bash

echo "🚀 Notifying Search Engines about Zentpiper.com"

# Ping Google about sitemap
echo "📍 Pinging Google..."
curl -s "https://www.google.com/ping?sitemap=https://zentpiper.com/sitemap.xml"

# Ping Bing about sitemap  
echo "📍 Pinging Bing..."
curl -s "https://www.bing.com/ping?sitemap=https://zentpiper.com/sitemap.xml"

echo "✅ Search engines notified!"
echo "🔍 Next steps:"
echo "1. Set up Google Search Console"
echo "2. Submit sitemap manually in GSC"
echo "3. Request indexing for main pages"
echo "4. Share on social media"

# Test if site is live
echo "🌐 Testing if site is live..."
if curl -s --head https://zentpiper.com | head -n 1 | grep -q "200 OK"; then
    echo "✅ Site is LIVE at https://zentpiper.com"
else
    echo "❌ Site not responding - check Vercel deployment"
fi