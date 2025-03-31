/**
 * LinkedIn Export Processor
 * 
 * This script processes LinkedIn data export into a format usable by the website.
 * It reads articles (HTML) and posts (CSV) and generates a structured data file.
 */

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

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
  let textContent = content.replace(/<\/?[^>]+(>|$)/g, "");
  
  // Remove extra whitespace
  textContent = textContent.replace(/\s+/g, " ").trim();
  
  // Remove common LinkedIn artifacts
  textContent = textContent.replace(/Created on.*?Published on.*?/s, "");
  
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
    
    // Get date from content first, then fallback to other methods
    let date = new Date().toISOString().split('T')[0]; // Default to today
    
    // First try to extract from published date in content
    const publishedDateElement = document.querySelector('.published');
    if (publishedDateElement) {
      const publishedMatch = publishedDateElement.textContent.match(/Published on (\d{4}-\d{2}-\d{2})/);
      if (publishedMatch && publishedMatch[1]) {
        date = publishedMatch[1];
      }
    }
    
    // If not found, try created date
    if (date === new Date().toISOString().split('T')[0]) {
      const createdDateElement = document.querySelector('.created');
      if (createdDateElement) {
        const createdMatch = createdDateElement.textContent.match(/Created on (\d{4}-\d{2}-\d{2})/);
        if (createdMatch && createdMatch[1]) {
          date = createdMatch[1];
        }
      }
    }
    
    // Fallback to filename
    if (date === new Date().toISOString().split('T')[0]) {
      const dateMatch = file.match(/(\d{4}-\d{2}-\d{2})/);
      if (dateMatch) {
        date = dateMatch[1];
      }
    }
    
    // Extract content
    const contentElement = document.querySelector('article') || document.querySelector('.post-content') || document.body;
    // Clean up the content
    let articleContent = contentElement.innerHTML;
    
    // Remove the title and publication info that's already shown separately
    articleContent = articleContent.replace(/<h1>.*?<\/h1>/s, '');
    articleContent = articleContent.replace(/<p class="created">.*?<\/p>/s, '');
    articleContent = articleContent.replace(/<p class="published">.*?<\/p>/s, '');
    
    // Find all paragraphs with class="created" or class="published"
    articleContent = articleContent.replace(/<p[^>]*class="created"[^>]*>.*?<\/p>/gs, '');
    articleContent = articleContent.replace(/<p[^>]*class="published"[^>]*>.*?<\/p>/gs, '');
    
    // Fix common formatting issues
    articleContent = articleContent.replace(/&quot;/g, '"');
    articleContent = articleContent.replace(/&amp;/g, '&');
    articleContent = articleContent.replace(/&lt;/g, '<');
    articleContent = articleContent.replace(/&gt;/g, '>');
    
    // Improve blockquote formatting
    articleContent = articleContent.replace(/<p><em>(.*?)<\/em><\/p>/g, '<blockquote><p>$1</p></blockquote>');
    
    // Clean up unnecessary tags
    articleContent = articleContent.replace(/<div>/g, '');
    articleContent = articleContent.replace(/<\/div>/g, '');
    
    // Add space between paragraphs
    articleContent = articleContent.replace(/<\/p><p>/g, '</p>\n<p>');
    
    // Ensure proper spacing around headings
    articleContent = articleContent.replace(/<\/h(\d)><h(\d)>/g, '</h$1>\n<h$2>');
    articleContent = articleContent.replace(/<\/p><h(\d)>/g, '</p>\n<h$1>');
    articleContent = articleContent.replace(/<\/h(\d)><p>/g, '</h$1>\n<p>');
    
    // Clean up any double spaces or excessive newlines
    articleContent = articleContent.replace(/\s{2,}/g, ' ');
    articleContent = articleContent.replace(/\n{3,}/g, '\n\n');
    
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
      .pipe(csv())
      .on('data', (row) => {
        if (row.ShareCommentary && row.ShareCommentary.trim()) {
          // Parse the date correctly - Format is usually "2025-02-08 16:34:42"
          let date;
          if (row.Date && row.Date.includes(' ')) {
            date = row.Date.split(' ')[0]; // Extract date part
          } else {
            // If date format is unexpected, use a more reliable approach
            try {
              const dateParts = new Date(row.Date).toISOString().split('T');
              date = dateParts[0]; // YYYY-MM-DD
            } catch (e) {
              // Fallback to current date if parsing fails
              date = new Date().toISOString().split('T')[0];
            }
          }
          
          const shareId = row.ShareLink.split('%3A').pop();
          
          // Create title from first sentence or first 50 chars
          let title = row.ShareCommentary.split('.')[0];
          if (title.length > 70) {
            title = title.substring(0, 67) + '...';
          }
          
          // Format content as HTML with better quote handling
          let content = row.ShareCommentary;
          
          // Remove literal '\n' strings that might be in the text
          content = content.replace(/\\n/g, '\n');
          
          // Remove duplicate quotes (replace with just one)
          content = content.replace(/""+/g, '"');
          
          // Remove any literal "\n" sequences
          content = content.replace(/\\n/g, '\n');
          
          // Fix escaped quotes
          content = content.replace(/\\"/g, '"');
          
          // Replace any backslash plus character with just the character
          content = content.replace(/\\(.)/g, '$1');
          
          // Handle quoted text better by checking for runs of quotes
          content = content.replace(/"([^"]+)"/g, function(match, text) {
            // If it looks like a quotation, make it a blockquote
            if (text.length > 20) {
              return '<blockquote>' + text + '</blockquote>';
            }
            // Otherwise return as-is with proper curly quotes
            return '"' + text + '"';
          });
          
          // Handle numbered lists that start with "1. ", "2. ", etc.
          let hasNumberedList = /\d+\.\s/.test(content);
          if (hasNumberedList) {
            let parts = content.split(/\n/);
            let inList = false;
            let processedParts = [];
            
            for (let part of parts) {
              if (/^\d+\.\s/.test(part)) {
                if (!inList) {
                  processedParts.push('<ol>');
                  inList = true;
                }
                processedParts.push('<li>' + part.replace(/^\d+\.\s/, '') + '</li>');
              } else {
                if (inList) {
                  processedParts.push('</ol>');
                  inList = false;
                }
                processedParts.push(part);
              }
            }
            
            if (inList) {
              processedParts.push('</ol>');
            }
            
            content = processedParts.join('\\n');
          }
          
          // Handle bulleted lists that start with "- "
          let hasBulletList = /^-\s/m.test(content);
          if (hasBulletList) {
            let parts = content.split(/\n/);
            let inList = false;
            let processedParts = [];
            
            for (let part of parts) {
              if (/^-\s/.test(part)) {
                if (!inList) {
                  processedParts.push('<ul>');
                  inList = true;
                }
                processedParts.push('<li>' + part.replace(/^-\s/, '') + '</li>');
              } else {
                if (inList) {
                  processedParts.push('</ul>');
                  inList = false;
                }
                processedParts.push(part);
              }
            }
            
            if (inList) {
              processedParts.push('</ul>');
            }
            
            content = processedParts.join('\\n');
          }
          
          // Clean up any \n\n\n sequences (more than 2 newlines) to just \n\n
          content = content.replace(/\n{3,}/g, '\n\n');
          
          // Clean up any literal "\n"
          content = content.replace(/\\n/g, '\n');
          
          // Find any "1. ", "2. " pattern at the start of a line and make sure it has proper spacing
          content = content.replace(/\n(\d+\.\s)/g, '\n\n$1');
          
          // Same for "- " bullets
          content = content.replace(/\n(-\s)/g, '\n\n$1');
          
          // Handle line breaks and paragraphs - double newlines become new paragraphs
          content = "<p>" + content.replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br />') + "</p>";
          
          // Clean up any empty paragraphs
          content = content.replace(/<p>\s*<\/p>/g, '');
          
          // Add spacing between paragraphs for better readability
          content = content.replace(/<\/p><p>/g, '</p>\n\n<p>');
          
          // Remove any literal '\n' characters in the HTML markup
          content = content.replace(/\\n/g, '');
          
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
    let allContent = [...articles, ...posts];
    
    // Filter out content before September 2022
    const cutoffDate = new Date('2022-09-01');
    allContent = allContent.filter(item => new Date(item.date) >= cutoffDate);
    
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