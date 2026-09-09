import { useEffect } from 'react';

const BASE_URL = 'https://shalom-one-pi.vercel.app';
const SITE_NAME = 'Jehovah Shalom International Missions';
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

export default function SEO({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  breadcrumbs = []
}) {
  useEffect(() => {
    // 1. Document Title
    const fullTitle = title.includes(SITE_NAME) 
      ? title 
      : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    if (description) {
      updateMeta('meta[name="description"]', 'name', 'description', description);
    }
    if (keywords) {
      updateMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // 3. Canonical Link
    const fullUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/$/, '') || `${BASE_URL}/`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 4. Open Graph Tags
    updateMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    if (description) {
      updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
    updateMeta('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    updateMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);

    // 5. Twitter Tags
    updateMeta('meta[property="twitter:title"]', 'property', 'twitter:title', fullTitle);
    if (description) {
      updateMeta('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    }
    updateMeta('meta[property="twitter:url"]', 'property', 'twitter:url', fullUrl);
    updateMeta('meta[property="twitter:image"]', 'property', 'twitter:image', DEFAULT_IMAGE);

    // 6. JSON-LD Breadcrumbs (if provided)
    let breadcrumbScript = document.getElementById('json-ld-breadcrumbs');
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'json-ld-breadcrumbs';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `${BASE_URL}/`
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': b.name,
            'item': `${BASE_URL}${b.path}`
          }))
        ]
      };
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }
  }, [title, description, canonicalPath, keywords, ogType, breadcrumbs]);

  return null;
}
