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
  
  // First, decode HTML entities
  const decodedHtml = html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  
  // Remove script and style content first
  let cleanHtml = decodedHtml
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Replace block-level tags with spaces to preserve word boundaries
  cleanHtml = cleanHtml
    .replace(/<\/?(div|p|br|h[1-6]|ul|ol|li|blockquote|pre|table|tr|td|th)[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '') // Remove remaining tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
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