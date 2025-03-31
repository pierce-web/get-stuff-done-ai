/**
 * LinkedIn Export Processor
 * 
 * This script processes LinkedIn data export into a format usable by the website.
 * It reads articles (HTML) and posts (CSV) and generates a structured data file.
 */

// Use ESM syntax
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csvParser from 'csv-parser';
import { JSDOM } from 'jsdom';

// Get current directory for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LINKEDIN_EXPORT_DIR = path.resolve(__dirname, '../linkedin-llm-txt/LinkedIn export - 20250213');
const OUTPUT_FILE = path.resolve(__dirname, '../src/lib/linkedin-posts-data.ts');
const ARTICLES_OUTPUT_DIR = path.resolve(__dirname, '../src/data/linkedin-articles');

// Ensure output directories exist
if (!fs.existsSync(ARTICLES_OUTPUT_DIR)) {
  fs.mkdirSync(ARTICLES_OUTPUT_DIR, { recursive: true });
}

// Helper functions
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractExcerpt(content, maxLength = 160) {
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

// Process HTML articles
async function processArticles() {
  const articleFiles = fs.readdirSync(LINKEDIN_EXPORT_DIR)
    .filter(file => file.endsWith('.html') && !file.startsWith('2025-'));
  
  const articles = [];
  
  for (const file of articleFiles) {
    const filePath = path.join(LINKEDIN_EXPORT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    
    // Extract data
    const title = document.querySelector('title').textContent;
    
    // Get date from filename or content
    // Pattern: articlename-date.html
    let date = new Date().toISOString().split('T')[0]; // Default to today
    const dateMatch = file.match(/(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      date = dateMatch[1];
    } else {
      // Try to extract from content
      const dateElement = document.querySelector('.post-date, .published-date');
      if (dateElement) {
        date = new Date(dateElement.textContent).toISOString().split('T')[0];
      }
    }
    
    // Extract content
    const contentElement = document.querySelector('article') || document.querySelector('.post-content') || document.body;
    const articleContent = contentElement.innerHTML;
    
    // Create ID from filename
    const id = file.replace('.html', '');
    
    // Extract original URL if available
    let originalUrl = null;
    const urlElement = document.querySelector('a[href*="linkedin.com/pulse"]');
    if (urlElement) {
      originalUrl = urlElement.href;
    } else {
      // Construct a likely URL
      originalUrl = "https://www.linkedin.com/pulse/" + id;
    }
    
    articles.push({
      id,
      title,
      date,
      content: articleContent,
      excerpt: extractExcerpt(articleContent),
      type: 'article',
      originalUrl
    });
    
    // Save full content to separate file
    fs.writeFileSync(
      path.join(ARTICLES_OUTPUT_DIR, id + ".html"), 
      articleContent
    );
  }
  
  return articles;
}

// Process LinkedIn posts from Shares.csv
async function processPosts() {
  const posts = [];
  const sharesPath = path.join(LINKEDIN_EXPORT_DIR, 'Shares.csv');
  
  if (!fs.existsSync(sharesPath)) {
    console.log('Shares.csv not found');
    return posts;
  }
  
  return new Promise((resolve) => {
    fs.createReadStream(sharesPath)
      .pipe(csvParser())
      .on('data', (row) => {
        if (row.ShareCommentary && row.ShareCommentary.trim()) {
          const date = row.Date.split(' ')[0]; // Extract date part
          const shareId = row.ShareLink.split('%3A').pop();
          
          // Create title from first sentence or first 50 chars
          let title = row.ShareCommentary.split('.')[0];
          if (title.length > 70) {
            title = title.substring(0, 67) + '...';
          }
          
          // Format content as HTML
          const content = "<p>" + row.ShareCommentary.replace(/\n/g, '</p><p>') + "</p>";
          
          posts.push({
            id: "post-" + date + "-" + shareId.replace(/[^a-zA-Z0-9-]/g, '-'),
            title,
            date,
            content,
            excerpt: extractExcerpt(row.ShareCommentary),
            type: 'post',
            originalUrl: row.ShareLink
          });
        }
      })
      .on('end', () => {
        resolve(posts);
      });
  });
}

// Main function
async function main() {
  try {
    console.log('Processing LinkedIn export...');
    
    // Process data
    const articles = await processArticles();
    console.log("Processed " + articles.length + " articles");
    
    const posts = await processPosts();
    console.log("Processed " + posts.length + " posts");
    
    // Combine all content
    const allContent = [...articles, ...posts];
    
    // Sort by date (newest first)
    allContent.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Generate TypeScript file
    const tsContent = "// Generated from LinkedIn export\n" +
      "// Last updated: " + new Date().toISOString() + "\n\n" +
      "import { LinkedInPost } from './linkedin-data';\n\n" +
      "export const linkedInPosts: LinkedInPost[] = " + JSON.stringify(allContent, null, 2) + ";\n";
    
    fs.writeFileSync(OUTPUT_FILE, tsContent);
    console.log("Data written to " + OUTPUT_FILE);
    
  } catch (error) {
    console.error('Error processing LinkedIn data:', error);
  }
}

main();