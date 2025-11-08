import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente SEO
 * Actualiza dinámicamente las etiquetas meta y Open Graph.
 */
const SEO = ({
  title = "Zentpiper",
  description = "Potencia tu negocio con soluciones digitales inteligentes.",
  keywords = "software, inteligencia artificial, automatización, desarrollo web, zentpiper",
  canonical,
  image = "/assets/logo.png", // ruta desde /public o servida por tu build
  favicon = "/favicon.ico",
}) => {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = canonical || `https://zentpiper.com${location.pathname}`;

    // Helper para actualizar o crear meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 🔹 Title
    document.title = title;

    // 🔹 Descripción, keywords y canonical
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // 🔹 Favicon
    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.setAttribute("rel", "icon");
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute("href", favicon);

    // 🔹 Open Graph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:image", image);

    // 🔹 Twitter Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
    setMetaTag("name", "twitter:url", currentUrl);
  }, [title, description, keywords, canonical, image, favicon, location]);

  return null;
};

export default SEO;
