/**
 * Utility functions for generating structured data for SEO
 */

/**
 * Generate structured data for a service page
 */
export const generateServicePageStructuredData = (
  name: string,
  description: string,
  url: string,
  image: string = "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
  provider: string = "Get Stuff Done AI",
  price?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://gsdat.work"
    },
    "offers": {
      "@type": "Offer",
      "price": price ? price.replace(/[^\d.-]/g, '') : "",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "url": url,
    "image": image
  };
};

/**
 * Generate structured data for a person
 */
export const generatePersonStructuredData = (
  name: string = "Christian Ulstrup",
  jobTitle: string = "AI Implementation Expert",
  url: string = "https://www.linkedin.com/in/christianulstrup/",
  image: string = "https://gsdat.work/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "url": url,
    "image": image,
    "worksFor": {
      "@type": "Organization",
      "name": "GSD at Work LLC",
      "url": "https://gsdat.work"
    }
  };
};

/**
 * Generate structured data for the organization
 */
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Get Stuff Done AI",
    "description": "Expert AI consulting and implementation services to accelerate your business. From solopreneurs to enterprises, we help you harness AI's potential with proven strategies.",
    "url": "https://gsdat.work/",
    "image": "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "priceRange": "$$",
    "serviceType": ["AI Consulting", "AI Implementation", "Business Automation", "AI Strategy", "Productivity Improvement"],
    "areaServed": "Worldwide",
    "founder": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "jobTitle": "AI Implementation Expert",
      "sameAs": "https://www.linkedin.com/in/christianulstrup/"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+18482610259",
      "contactType": "customer service",
      "email": "hello@gsdat.work",
      "availableLanguage": "English"
    }
  };
};

/**
 * Generate structured data for FAQ section
 */
export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};