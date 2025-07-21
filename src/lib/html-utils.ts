/**
 * Utility functions for safe HTML handling
 */

// Re-export from the more secure implementation
export { extractTextFromHTML } from './sanitize-html';

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