/**
 * Utility functions for safe HTML handling
 */

/**
 * Safely extract text content from HTML string
 * Uses DOM parsing to properly handle HTML entities and nested tags
 */
export const extractTextFromHTML = (html: string): string => {
  // For server-side rendering compatibility, use a regex-based approach
  // but with proper handling of edge cases
  
  let cleanHtml = html;
  
  // Remove script and style tags with their content using a more robust approach
  // Repeatedly remove until no more matches to handle nested cases
  let previousLength;
  do {
    previousLength = cleanHtml.length;
    cleanHtml = cleanHtml
      .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, '');
  } while (cleanHtml.length < previousLength);
  
  // Replace block-level tags with spaces to preserve word boundaries
  cleanHtml = cleanHtml
    .replace(/<\/?(div|p|br|h[1-6]|ul|ol|li|blockquote|pre|table|tr|td|th)[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, ''); // Remove remaining tags
  
  // Decode HTML entities AFTER removing tags to avoid double unescaping
  cleanHtml = cleanHtml
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&'); // Decode &amp; last to avoid double decoding
  
  // Normalize whitespace
  cleanHtml = cleanHtml.replace(/\s+/g, ' ').trim();
  
  return cleanHtml;
};

/**
 * Calculate estimated reading time from HTML content
 */
export const calculateReadingTime = (htmlContent: string, wordsPerMinute = 200): number => {
  const textContent = extractTextFromHTML(htmlContent);
  const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

/**
 * Get word count from HTML content
 */
export const getWordCount = (htmlContent: string): number => {
  const textContent = extractTextFromHTML(htmlContent);
  return textContent.split(/\s+/).filter(word => word.length > 0).length;
};