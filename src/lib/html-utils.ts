/**
 * Utility functions for safe HTML handling
 */

// Import the text-only approach
import { htmlToText } from './text-only';

// Export with the expected name
export const extractTextFromHTML = htmlToText;

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