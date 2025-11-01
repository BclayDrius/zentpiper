import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, keywords, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonical);
      }
    }

    // Update Open Graph tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", title);
      }
    }

    if (description) {
      let ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute("content", description);
      }
    }

    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", canonical);
      }
    }

    // Update Twitter tags
    if (title) {
      let twitterTitle = document.querySelector(
        'meta[property="twitter:title"]'
      );
      if (twitterTitle) {
        twitterTitle.setAttribute("content", title);
      }
    }

    if (description) {
      let twitterDescription = document.querySelector(
        'meta[property="twitter:description"]'
      );
      if (twitterDescription) {
        twitterDescription.setAttribute("content", description);
      }
    }

    if (canonical) {
      let twitterUrl = document.querySelector('meta[property="twitter:url"]');
      if (twitterUrl) {
        twitterUrl.setAttribute("content", canonical);
      }
    }
  }, [title, description, keywords, canonical, location]);

  return null;
};

export default SEO;
