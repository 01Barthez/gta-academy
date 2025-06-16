
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  image = "/images/logo.png",
  url,
  type = 'website',
  author = 'GTA Academy',
  publishedTime,
  modifiedTime
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | GTA Academy - Centre de Formation Professionnelle`;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta') as HTMLMetaElement;
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index,follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:image', image, true);
    if (url) updateMetaTag('og:url', url, true);
    updateMetaTag('og:site_name', 'GTA Academy', true);
    updateMetaTag('og:locale', 'fr_FR', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@gta_academy');

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      updateMetaTag('article:author', author, true);
    }

    // Structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'Organization',
      "name": type === 'article' ? title : 'GTA Academy',
      "description": description,
      "url": url || window.location.href,
      "image": image,
      ...(type === 'website' && {
        "sameAs": [
          "https://facebook.com/gtaacademy",
          "https://twitter.com/gta_academy",
          "https://linkedin.com/company/academy.gta-it"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+237-XXX-XXX-XXX",
          "contactType": "customer service"
        }
      })
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script') as HTMLScriptElement;
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime]);
};
