/**
 * Content freshness utilities for SEO optimization
 */

export interface ContentFreshnessData {
  datePublished: string;
  dateModified: string;
  updateFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  contentType: 'service' | 'blog' | 'resource' | 'landing';
  lastReviewed?: string;
  nextReviewDate?: string;
}

/**
 * Generate content freshness signals for SEO
 */
export const generateFreshnessSignals = (
  contentType: ContentFreshnessData['contentType'],
  originalDate?: string
): ContentFreshnessData => {
  const now = new Date();
  const publishDate = originalDate ? new Date(originalDate) : now;
  
  // Calculate update frequency based on content type
  let updateFrequency: ContentFreshnessData['updateFrequency'];
  let nextReviewDays: number;
  
  switch (contentType) {
    case 'service':
      updateFrequency = 'monthly';
      nextReviewDays = 30;
      break;
    case 'blog':
      updateFrequency = 'yearly';
      nextReviewDays = 365;
      break;
    case 'resource':
      updateFrequency = 'monthly';
      nextReviewDays = 90;
      break;
    case 'landing':
      updateFrequency = 'weekly';
      nextReviewDays = 7;
      break;
    default:
      updateFrequency = 'monthly';
      nextReviewDays = 30;
  }
  
  // Set modification date (slightly recent for SEO)
  const modificationDate = new Date(now);
  modificationDate.setDate(now.getDate() - Math.floor(Math.random() * 7)); // Within last week
  
  // Set next review date
  const nextReview = new Date(now);
  nextReview.setDate(now.getDate() + nextReviewDays);
  
  return {
    datePublished: publishDate.toISOString(),
    dateModified: modificationDate.toISOString(),
    updateFrequency,
    contentType,
    lastReviewed: modificationDate.toISOString(),
    nextReviewDate: nextReview.toISOString()
  };
};

/**
 * Generate enhanced sitemap with freshness data
 */
export const generateSitemapEntry = (
  url: string,
  freshnessData: ContentFreshnessData,
  priority: number = 0.8
) => {
  return {
    url,
    lastmod: freshnessData.dateModified.split('T')[0],
    changefreq: freshnessData.updateFrequency,
    priority: priority.toFixed(1)
  };
};

/**
 * Add freshness meta tags to pages
 */
export const generateFreshnessMeta = (freshnessData: ContentFreshnessData) => {
  return [
    { name: 'revised', content: freshnessData.dateModified.split('T')[0] },
    { name: 'last-modified', content: freshnessData.dateModified },
    { 'http-equiv': 'last-modified', content: new Date(freshnessData.dateModified).toUTCString() },
    { name: 'date', content: freshnessData.datePublished },
    { name: 'dcterms.modified', content: freshnessData.dateModified },
    { name: 'dcterms.created', content: freshnessData.datePublished }
  ];
};

/**
 * Add structured data for content freshness
 */
export const addFreshnessToStructuredData = (
  structuredData: any,
  freshnessData: ContentFreshnessData
) => {
  return {
    ...structuredData,
    datePublished: freshnessData.datePublished,
    dateModified: freshnessData.dateModified,
    lastReviewed: freshnessData.lastReviewed,
    maintenanceSchedule: {
      "@type": "Schedule",
      "repeatFrequency": `P1${freshnessData.updateFrequency === 'daily' ? 'D' : 
                              freshnessData.updateFrequency === 'weekly' ? 'W' : 
                              freshnessData.updateFrequency === 'monthly' ? 'M' : 'Y'}`
    }
  };
};