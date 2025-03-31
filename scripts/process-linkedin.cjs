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
    
    // More aggressive cleanup of the HTML
    
    // Replace direct <div> elements with paragraphs for better formatting
    articleContent = articleContent.replace(/<div>([^<]+)<\/div>/g, '<p>$1</p>');
    
    // Remove unnecessary divs
    articleContent = articleContent.replace(/<div>/g, '');
    articleContent = articleContent.replace(/<\/div>/g, '');
    
    // Improve blockquote formatting - look for patterns that indicate quotes
    articleContent = articleContent.replace(/<p><em>(.*?)<\/em><\/p>/g, '<blockquote><p>$1</p></blockquote>');
    
    // If there's a <p> with quotes around entire content, it's probably a blockquote
    articleContent = articleContent.replace(/<p>"(.*?)"<\/p>/g, '<blockquote><p>$1</p></blockquote>');
    
    // Clean up empty paragraphs
    articleContent = articleContent.replace(/<p>\s*<\/p>/g, '');
    
    // Standardize whitespace
    articleContent = articleContent.replace(/\s{2,}/g, ' ');
    
    // Add space between paragraphs
    articleContent = articleContent.replace(/<\/p><p>/g, '</p>\n\n<p>');
    
    // Ensure proper spacing around headings
    articleContent = articleContent.replace(/<\/h(\d)><h(\d)>/g, '</h$1>\n\n<h$2>');
    articleContent = articleContent.replace(/<\/p><h(\d)>/g, '</p>\n\n<h$1>');
    articleContent = articleContent.replace(/<\/h(\d)><p>/g, '</h$1>\n\n<p>');
    
    // Clean up excessive newlines
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
          
          // We'll take a completely different approach - parse the LinkedIn post more carefully
          // Start by normalizing newlines and cleaning up escaped characters
          let content = row.ShareCommentary;
          
          // Normalize line endings
          content = content.replace(/\r\n/g, '\n');
          content = content.replace(/\r/g, '\n');
          
          // Clean up any escaped characters
          content = content.replace(/\\n/g, '\n');
          content = content.replace(/\\"/g, '"');
          content = content.replace(/\\'/g, "'");
          content = content.replace(/\\t/g, '\t');
          content = content.replace(/\\(.)/g, '$1');
          
          // Detect if we have numbered list items
          const hasNumberedItems = /^\d+\.\s/m.test(content);
          
          // Detect if we have bulleted list items
          const hasBulletItems = /^-\s/m.test(content);
          
          // Split the content into paragraphs and process each one
          const paragraphs = content.split(/\n\n+/);
          const processedParagraphs = [];
          
          let inNumberedList = false;
          let inBulletList = false;
          let listItems = [];
          
          for (let paragraph of paragraphs) {
            // Skip empty paragraphs
            if (!paragraph.trim()) continue;
            
            // Check if this is a numbered list item
            if (/^\d+\.\s/.test(paragraph)) {
              // If we weren't in a list before, start a new one
              if (!inNumberedList) {
                if (inBulletList) {
                  // Close previous bullet list
                  processedParagraphs.push('<ul>' + listItems.join('') + '</ul>');
                  listItems = [];
                  inBulletList = false;
                }
                inNumberedList = true;
              }
              
              // Add this item to the list
              const itemText = paragraph.replace(/^\d+\.\s/, '');
              listItems.push('<li>' + itemText + '</li>');
              continue;
            }
            
            // Check if this is a bullet list item
            if (/^-\s/.test(paragraph)) {
              // If we weren't in a bullet list before, start a new one
              if (!inBulletList) {
                if (inNumberedList) {
                  // Close previous numbered list
                  processedParagraphs.push('<ol>' + listItems.join('') + '</ol>');
                  listItems = [];
                  inNumberedList = false;
                }
                inBulletList = true;
              }
              
              // Add this item to the list
              const itemText = paragraph.replace(/^-\s/, '');
              listItems.push('<li>' + itemText + '</li>');
              continue;
            }
            
            // If we were in a list but this isn't a list item, close the list
            if (inNumberedList) {
              processedParagraphs.push('<ol>' + listItems.join('') + '</ol>');
              listItems = [];
              inNumberedList = false;
            } else if (inBulletList) {
              processedParagraphs.push('<ul>' + listItems.join('') + '</ul>');
              listItems = [];
              inBulletList = false;
            }
            
            // Process regular paragraphs
            processedParagraphs.push('<p>' + paragraph + '</p>');
          }
          
          // If we ended while still in a list, close it
          if (inNumberedList) {
            processedParagraphs.push('<ol>' + listItems.join('') + '</ol>');
          } else if (inBulletList) {
            processedParagraphs.push('<ul>' + listItems.join('') + '</ul>');
          }
          
          // Join all the processed paragraphs
          content = processedParagraphs.join('\n');
          
          // Clean up any newlines in the HTML
          content = content.replace(/\\n/g, '');
          
          // Final cleanup - remove any leftover quotes that look like LinkedIn export artifacts
          content = content.replace(/\\"/g, '"');
          content = content.replace(/"{2,}/g, '"');
          content = content.replace(/^"(.+?)"$/gm, '$1');
          
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