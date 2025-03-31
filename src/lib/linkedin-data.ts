// LinkedIn data types
export interface LinkedInPost {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  type: "article" | "post";
  originalUrl?: string;
}

// This will be populated programmatically from the LinkedIn export
export const linkedInPosts: LinkedInPost[] = [
  // Articles - these will be populated from HTML files
  {
    id: "accelerated-ai-adoption",
    title: "Accelerated AI Adoption",
    date: "2024-09-15", // Will be extracted from filename or content
    content: "<p>Full HTML content will go here...</p>",
    excerpt: "How organizations can accelerate their AI adoption journey with practical steps.",
    type: "article",
    originalUrl: "https://www.linkedin.com/pulse/accelerated-ai-adoption-christian-ulstrup"
  },
  
  // Posts - these will be populated from Shares.csv
  {
    id: "post-20250208",
    title: "Gen AI integration / applied AI",
    date: "2025-02-08",
    content: "<p>Gen AI integration / applied AI has thus far been about: 1. Arming curious power users with state-of-the-art general tools that allow them to move 10x faster and \"discover\" new AI-native workflows...</p>",
    excerpt: "Gen AI integration / applied AI has thus far been about...",
    type: "post",
    originalUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7294030896783851520"
  }
];

/**
 * Helper functions to convert LinkedIn export to site content
 */

// Function to generate a slug from a title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove consecutive hyphens
}

// Function to extract excerpt from content
export function extractExcerpt(content: string, maxLength: number = 160): string {
  // Remove HTML tags
  const textContent = content.replace(/<\/?[^>]+(>|$)/g, "");
  
  // Trim and limit length
  if (textContent.length <= maxLength) {
    return textContent;
  }
  
  // Find the last space before maxLength
  const lastSpace = textContent.substring(0, maxLength).lastIndexOf(" ");
  return textContent.substring(0, lastSpace) + "...";
}

// These functions would be used to parse the actual LinkedIn export
// exportLinkedInData() - to be implemented