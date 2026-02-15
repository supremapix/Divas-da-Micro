import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  schemas?: any[];
  ogType?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/hero.png',
  url,
  schemas = [],
  ogType = 'website'
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:type', ogType);
    if (url) updatePropertyTag('og:url', url);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    schemas.forEach((schema) => {
      removeExistingSchema(schema['@type']);
      addSchemaScript(schema);
    });

    return () => {
    };
  }, [title, description, keywords, image, url, schemas, ogType]);

  return null;
};

function addSchemaScript(schema: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  script.className = `schema-${schema['@type']}`;
  document.head.appendChild(script);
}

function removeExistingSchema(type: string) {
  const existing = document.querySelector(`script.schema-${type}`);
  if (existing) {
    existing.remove();
  }
}

export default SEOHead;
