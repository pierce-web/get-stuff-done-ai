/**
 * SEO Brand Configuration
 * Centralized brand information for consistent SEO across the site
 */

export const SEO_BRAND_CONFIG = {
  // Primary brand name
  brandName: "GSD at Work",
  
  // Brand variations for structured data
  brandAlternateNames: [
    "Get Stuff Done at Work",
    "GSD at Work LLC",
    "Get Stuff Done AI"
  ],
  
  // Title tag patterns
  titlePatterns: {
    home: "GSD at Work - AI Implementation Services & Business Automation Consulting",
    service: (serviceName: string) => `${serviceName} | GSD at Work - Get Stuff Done with AI`,
    blog: (postTitle: string) => `${postTitle} | GSD at Work Blog`,
    about: "About GSD at Work - Expert AI Implementation Consulting",
    case: (caseName: string) => `${caseName} Case Study | GSD at Work`
  },
  
  // Meta description patterns (include brand in first 60 chars)
  descriptionPatterns: {
    home: "GSD at Work helps organizations implement AI to get stuff done 10x faster. Expert consulting, hands-on workshops, and proven automation strategies.",
    service: (serviceName: string) => `GSD at Work's ${serviceName} helps you implement AI effectively. Get expert guidance and hands-on support to transform your business.`,
    blog: "GSD at Work blog: Insights on AI implementation, automation strategies, and getting stuff done with artificial intelligence.",
    about: "GSD at Work was founded to help organizations harness AI's potential. Learn about our mission to help businesses get stuff done 10x faster."
  },
  
  // Brand messaging for consistency
  tagline: "Get Stuff Done 10x Faster with AI",
  shortDescription: "Expert AI implementation consulting",
  
  // Social media handles
  social: {
    linkedIn: "https://www.linkedin.com/company/gsd-at-work-llc/",
    linkedInPersonal: "https://www.linkedin.com/in/christianulstrup/"
  }
};

/**
 * Helper function to generate consistent page titles
 */
export const generatePageTitle = (pageType: keyof typeof SEO_BRAND_CONFIG.titlePatterns, pageName?: string) => {
  const pattern = SEO_BRAND_CONFIG.titlePatterns[pageType];
  if (typeof pattern === 'function' && pageName) {
    return pattern(pageName);
  }
  return pattern as string;
};

/**
 * Helper function to generate consistent meta descriptions
 */
export const generatePageDescription = (pageType: keyof typeof SEO_BRAND_CONFIG.descriptionPatterns, serviceName?: string) => {
  const pattern = SEO_BRAND_CONFIG.descriptionPatterns[pageType];
  if (typeof pattern === 'function' && serviceName) {
    return pattern(serviceName);
  }
  return pattern as string;
};