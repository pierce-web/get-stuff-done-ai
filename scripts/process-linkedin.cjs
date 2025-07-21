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
const LINKEDIN_EXPORT_DIR = process.env.LINKEDIN_EXPORT_PATH || path.resolve(__dirname, '../linkedin-export-data');
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
  // If content is HTML, remove tags and use the plain text content
  if (content.includes('<') && content.includes('>')) {
    // Remove HTML tags more safely
    // First decode HTML entities
    let textContent = content
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
    
    // Remove script and style tags with their content
    textContent = textContent
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Replace block-level tags with spaces to preserve word boundaries
    textContent = textContent
      .replace(/<\/(div|p|br|h[1-6]|ul|ol|li|blockquote|pre|table|tr|td|th)[^>]*>/gi, ' ')
      .replace(/<[^>]+>/g, ''); // Remove remaining tags
    
    // Remove extra whitespace
    textContent = textContent.replace(/\s+/g, " ").trim();
    
    // Remove common LinkedIn artifacts
    textContent = textContent.replace(/Created on.*?Published on.*?/s, "");
    
    // Clean up LinkedIn's quotation artifacts - remove excess quotes
    textContent = textContent.replace(/""/g, "");
    textContent = textContent.replace(/\\"/g, '"');
    
    // Remove any extra quotes at the beginning or end
    textContent = textContent.replace(/^"+|"+$/g, '');
    
    // Trim and limit length
    if (textContent.length <= maxLength) {
      return textContent;
    }
    
    // Find the last space before maxLength
    const lastSpace = textContent.substring(0, maxLength).lastIndexOf(" ");
    return textContent.substring(0, lastSpace) + "...";
  } else {
    // Clean the raw content for excerpt
    let textContent = cleanLinkedInContent(content);
    
    // Clean up any double spaces
    textContent = textContent.replace(/\s+/g, " ").trim();
    
    // Trim and limit length
    if (textContent.length <= maxLength) {
      return textContent;
    }
    
    // Find the last space before maxLength
    const lastSpace = textContent.substring(0, maxLength).lastIndexOf(" ");
    return textContent.substring(0, lastSpace) + "...";
  }
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
    
    // Handle image tags - LinkedIn images aren't accessible from outside LinkedIn
    // Remove LinkedIn image references completely
    articleContent = articleContent.replace(
      /<img src="https:\/\/media\.licdn\.com\/[^"]+"([^>]*)>/g, 
      ''
    );
    
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

  // AI tools to auto-link in content
  const aiTools = [
    { pattern: /\bsuperwhisper\b/g, url: "https://superwhisper.com" },
    { pattern: /\bWispr Flow\b/g, url: "https://whisperflow.com" },
    { pattern: /\bWispr\b/g, url: "https://whisperflow.com" },
    { pattern: /\bVapi\b/g, url: "https://vapi.ai" },
    { pattern: /\bClaude\b/g, url: "https://claude.ai" },
    { pattern: /\bChatGPT\b/g, url: "https://chat.openai.com" },
    { pattern: /\bo1 Pro\b/g, url: "https://o1.ai" },
    { pattern: /\bo1 pro\b/g, url: "https://o1.ai" },
    { pattern: /\bCopilot\b/g, url: "https://copilot.microsoft.com" }
  ];

  // Read the entire file as text
  const fileContent = fs.readFileSync(sharesPath, 'utf8');
  
  console.log("Parsing LinkedIn CSV data...");
  
  // Now parse the raw content using a custom parser that can handle LinkedIn's CSV quirks
  const parsedEntries = parseLinkedInCSV(fileContent);
  
  console.log(`Found ${parsedEntries.length} entries in CSV`);
  
  let validEntryCount = 0;
  let skippedEntryCount = 0;
  
  for (const entry of parsedEntries) {
    if (!entry.date || !entry.url || !entry.content || entry.date === 'Date') {
      // Skip header row or invalid entries
      skippedEntryCount++;
      continue;
    }
    
    validEntryCount++;
    
    // Get just the date part (remove time)
    const date = entry.date.split(' ')[0];
    
    // Extract the share ID from the URL
    const shareId = entry.url.split('%3A').pop() || 'unknown';
    
    // Generate the post ID 
    const id = `post-${date}-${shareId.replace(/[^a-zA-Z0-9-]/g, '-')}`;
    
    // Process and format the content
    const formattedContent = processLinkedInPostContent(entry.content, aiTools);
    
    // Extract a reasonable title from the content
    const title = extractTitleFromContent(entry.content);
    
    // Log information about content length to debug truncation issues
    if (validEntryCount <= 3 || validEntryCount % 100 === 0) {
      console.log(`Entry ${validEntryCount}: ${date} - Content length: ${entry.content.length} chars, HTML length: ${formattedContent.length} chars`);
    }
    
    posts.push({
      id,
      title,
      date,
      content: formattedContent,
      excerpt: extractExcerpt(formattedContent), // Use the formatted content for excerpt
      type: 'post',
      originalUrl: entry.url
    });
  }
  
  console.log(`Processed ${validEntryCount} valid entries, skipped ${skippedEntryCount} invalid entries`);
  
  
  return posts;
}

/**
 * Parse LinkedIn's CSV format with special handling for multi-line fields
 * that use quotes and LinkedIn's peculiar structure
 */
function parseLinkedInCSV(csvContent) {
  const entries = [];
  
  // Remove BOM if present
  csvContent = csvContent.replace(/^\ufeff/, '');
  
  // First, split the CSV into rows of raw text while preserving newlines
  const rows = csvContent.split('\n');
  
  // Track multi-line entries and quote state
  let isInMultilineEntry = false;
  let isInQuotedField = false;
  let quoteCount = 0;
  let currentEntry = null;
  
  // Debug stats
  let multilineEntries = 0;
  let longestEntry = 0;
  let longestEntryDate = '';
  
  // Process row by row
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    
    // Skip empty rows
    if (!row.trim()) continue;
    
    // Count quotes in this row to track field boundaries
    const quotesInRow = (row.match(/"/g) || []).length;
    
    // Check if this is likely to be a new entry (date format or header)
    if (!isInMultilineEntry && !isInQuotedField && row.match(/^\d{4}-\d{2}-\d{2}|^Date/)) {
      // This is a new entry - save the previous one if it exists
      if (currentEntry) {
        // Track statistics for debug purposes
        if (currentEntry.content.length > longestEntry) {
          longestEntry = currentEntry.content.length;
          longestEntryDate = currentEntry.date;
        }
        
        entries.push(currentEntry);
      }
      
      // Parse the current row to extract fields
      const parts = parseCSVRow(row);
      
      if (parts.length >= 3) {
        currentEntry = {
          date: parts[0],
          url: parts[1],
          content: parts[2],
          isComplete: false
        };
        
        // Count quotes in the content field to determine if we're inside a quoted field
        const contentQuotes = (parts[2].match(/"/g) || []).length;
        
        // If odd number of quotes, we're still inside a quoted field
        isInQuotedField = contentQuotes % 2 !== 0;
        
        if (isInQuotedField) {
          isInMultilineEntry = true;
          quoteCount = contentQuotes;
          multilineEntries++;
        } else {
          currentEntry.isComplete = true;
        }
      }
    } else if (isInMultilineEntry) {
      // This is a continuation of a multi-line entry
      // Important: preserve newlines and don't add extra ones
      // LinkedIn CSV multiline entries should be concatenated exactly as they appear in the file
      currentEntry.content += '\n' + row;
      
      // Update quote count
      quoteCount += quotesInRow;
      
      // Check for LinkedIn's end marker - this is the most reliable indicator
      if (row.match(/,""(,"",)?MEMBER_NETWORK$/)) {
        // Clean up the content by removing trailing metadata
        currentEntry.content = currentEntry.content.replace(/,""(,"",)?MEMBER_NETWORK$/, '');
        isInMultilineEntry = false;
        isInQuotedField = false;
        currentEntry.isComplete = true;
      }
      // Otherwise rely on quote patterns
      else if (quoteCount % 2 === 0 && quotesInRow > 0) {
        // Only end the multi-line entry if we have a good reason to believe it's complete
        
        // Check for patterns that indicate end of entry
        const endOfQuotedField = row.match(/",$/) || row.endsWith('"') || row.match(/",[^"]/);
        
        // Additional check for the typical LinkedIn CSV structure:
        // If this line ends with quotes and the next line starts with a date, it's likely the end
        const nextLineIsNewEntry = i < rows.length - 1 && rows[i+1].match(/^\d{4}-\d{2}-\d{2}/);
        
        if (endOfQuotedField || nextLineIsNewEntry || i === rows.length - 1) {
          isInMultilineEntry = false;
          isInQuotedField = false;
          currentEntry.isComplete = true;
        }
      }
    }
  }
  
  // Add the last entry if it exists
  if (currentEntry) {
    // Track statistics for debug purposes
    if (currentEntry.content.length > longestEntry) {
      longestEntry = currentEntry.content.length;
      longestEntryDate = currentEntry.date;
    }
    
    entries.push(currentEntry);
  }
  
  // Debug information
  console.log(`CSV parsing stats:`);
  console.log(`- Total entries found: ${entries.length}`);
  console.log(`- Multi-line entries: ${multilineEntries}`);
  console.log(`- Longest entry: ${longestEntry} chars (date: ${longestEntryDate})`);
  
  // Clean up entry contents (removing quotes, etc.)
  const cleanedEntries = entries.map(entry => {
    if (!entry.content) return entry;
    
    const cleanedContent = cleanLinkedInContent(entry.content);
    
    // If significant content was lost in cleaning, log a warning
    if (cleanedContent.length < entry.content.length * 0.5 && entry.content.length > 100) {
      console.log(`WARNING: Content for entry ${entry.date} was reduced from ${entry.content.length} to ${cleanedContent.length} chars during cleaning`);
    }
    
    return {
      date: entry.date,
      url: entry.url,
      content: cleanedContent
    };
  });
  
  return cleanedEntries;
}

/**
 * Parse a CSV row with proper handling of quoted fields
 * This is specifically designed for LinkedIn's CSV format which may have
 * doubled quotes as escapes and other quirks
 */
function parseCSVRow(row) {
  const fields = [];
  let inQuote = false;
  let currentField = '';
  let i = 0;
  
  // Helper to check if char at position is escaped
  const isEscaped = (pos) => pos > 0 && row[pos-1] === '\\';
  
  // Track consecutive quotes to handle LinkedIn's doubled quotes as escapes
  let consecutiveQuotes = 0;
  
  while (i < row.length) {
    const char = row[i];
    
    // Handle quote characters
    if (char === '"' && !isEscaped(i)) {
      // Special case for LinkedIn's doubled quotes
      if (i + 1 < row.length && row[i + 1] === '"') {
        // Double quote inside a quoted field is an escaped quote
        if (inQuote) {
          consecutiveQuotes++;
          
          // If odd number of consecutive quotes, add a single quote to the field
          if (consecutiveQuotes % 2 === 1) {
            currentField += '"';
          }
          // Even number means we're toggling quote state (exiting/entering quotes)
          else {
            inQuote = !inQuote;
          }
        } else {
          // Starting a quoted field
          inQuote = true;
        }
        i += 2; // Skip both quotes
        continue;
      } else {
        // Reset consecutive quotes counter
        consecutiveQuotes = 0;
        
        // Toggle quote state
        inQuote = !inQuote;
      }
    } 
    // Handle commas (field delimiters)
    else if (char === ',' && !inQuote) {
      fields.push(currentField);
      currentField = '';
      consecutiveQuotes = 0;
    } 
    // All other characters
    else {
      currentField += char;
      consecutiveQuotes = 0;
    }
    
    i++; // Move to next character
  }
  
  // Add the last field
  fields.push(currentField);
  
  return fields;
}

/**
 * Clean LinkedIn content by removing quotes, fixing newlines, etc.
 */
function cleanLinkedInContent(content) {
  // Handle LinkedIn's quirky use of quotes
  let cleaned = content;
  
  // Process escape sequences first to avoid double unescaping
  // Handle actual backslash escapes
  cleaned = cleaned.replace(/\\n/g, '\n'); // Convert \n to actual newline
  cleaned = cleaned.replace(/\\"/g, '\u0001'); // Temporarily replace \" with placeholder
  
  // Handle CSV-style doubled quotes ("" -> ")
  cleaned = cleaned.replace(/""/g, '"');
  
  // Restore escaped quotes
  cleaned = cleaned.replace(/\u0001/g, '"');
  
  // Handle common LinkedIn export patterns 
  // Posts often have a quote around the entire content due to CSV format
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    // Only remove surrounding quotes if they're not part of the actual content
    // (i.e., we don't want to remove quotes from an actual quote)
    // This is complex to detect, but we can use heuristics
    
    // If there are line breaks and the content is long, the quotes are likely CSV artifacts
    if (cleaned.includes('\n') && cleaned.length > 100) {
      cleaned = cleaned.substring(1, cleaned.length - 1);
    }
    // If it's a short single line, treat the quotes as content quotes
  }
  
  // Fix nbsp characters that appear in LinkedIn exports
  cleaned = cleaned.replace(/\xa0/g, ' ');
  
  // Sometimes LinkedIn includes HTML entities
  cleaned = cleaned.replace(/&quot;/g, '"');
  cleaned = cleaned.replace(/&amp;/g, '&');
  cleaned = cleaned.replace(/&lt;/g, '<');
  cleaned = cleaned.replace(/&gt;/g, '>');
  cleaned = cleaned.replace(/&nbsp;/g, ' ');
  
  // Normalize line endings (CRLF -> LF)
  cleaned = cleaned.replace(/\r\n/g, '\n');
  
  // Fix cases where LinkedIn CSV export includes excess quotes at the end
  // But be careful not to remove legitimate ending quotes
  if (cleaned.match(/"{2,}$/)) {
    cleaned = cleaned.replace(/"{2,}$/, '');
  }
  
  // Special pattern found in LinkedIn exports: lines that contain just a quote mark
  // These are often formatting artifacts and should be removed
  cleaned = cleaned.replace(/^\s*"\s*$/gm, '');
  
  // Clean up whitespace but preserve intentional paragraph breaks
  cleaned = cleaned.replace(/\s*\n\s*/g, '\n');
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  
  return cleaned.trim();
}

/**
 * Extract a reasonable title from the LinkedIn post content
 */
function extractTitleFromContent(content) {
  // Clean the content first
  const cleanedContent = cleanLinkedInContent(content);
  
  // Get the first few lines
  const lines = cleanedContent.split('\n').filter(line => line.trim());
  
  if (lines.length === 0) {
    return "LinkedIn Post";
  }
  
  // Look for patterns that often indicate titles in LinkedIn posts
  
  // Pattern 1: First line is short (under 85 chars) and doesn't end with punctuation
  // This is likely a title-like statement
  if (lines[0].length < 85 && !lines[0].match(/[.,:;!?]$/)) {
    return removeExcessQuotes(lines[0].trim());
  }
  
  // Pattern 2: First line ends with a colon, indicating a list or key point is coming
  if (lines[0].endsWith(':')) {
    // If there's a numbered list after the colon, include the number in the title
    if (lines.length > 1 && lines[1].match(/^\d+[\.\)]/)) {
      const num = lines[1].match(/^(\d+)[\.\)]/)[1];
      return removeExcessQuotes(`${lines[0].trim()} ${num}`);
    }
    return removeExcessQuotes(lines[0].trim());
  }
  
  // Pattern 3: First line contains a question mark - questions often make good titles
  if (lines[0].includes('?')) {
    // Extract just the question if it's within a larger paragraph
    const questionMatch = lines[0].match(/([^.!]+\?)/);
    if (questionMatch) {
      return removeExcessQuotes(questionMatch[1].trim());
    }
    return removeExcessQuotes(lines[0].trim());
  }
  
  // Pattern 4: Look for emphasis markers like ** or ALL CAPS sections that might indicate a title
  const emphasisMatch = lines[0].match(/\*\*([^*]+)\*\*|([A-Z]{3,}(?:\s+[A-Z]{3,})+)/);
  if (emphasisMatch) {
    return removeExcessQuotes((emphasisMatch[1] || emphasisMatch[2]).trim());
  }
  
  // Default: Use the first line or first sentence if it's reasonably short
  let title = lines[0];
  
  // If the first line is too long, try to get just the first sentence
  if (title.length > 85) {
    const firstSentence = title.match(/^[^.!?]+[.!?]/);
    if (firstSentence) {
      title = firstSentence[0].trim();
    } else {
      // If still too long, truncate
      title = title.substring(0, 82) + '...';
    }
  }
  
  return removeExcessQuotes(title);
}

/**
 * Helper function to clean up excess quotes in text
 */
function removeExcessQuotes(text) {
  if (!text) return '';
  
  // Remove quotes at the beginning and end
  let cleaned = text.trim();
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.substring(1, cleaned.length - 1);
  }
  
  // Fix escaped quotes
  cleaned = cleaned.replace(/\\"/g, '"');
  
  // Remove any trailing quotes
  if (cleaned.endsWith('"')) {
    cleaned = cleaned.substring(0, cleaned.length - 1);
  }
  
  return cleaned;
}

/**
 * Process LinkedIn post content into clean, formatted HTML
 */
function processLinkedInPostContent(content, aiTools) {
  // Step 1: Clean and normalize the content
  let cleanedContent = cleanLinkedInContent(content);
  
  // Fix for posts with excessive quotation - make this catch more cases
  const hasExcessiveQuotation = cleanedContent.includes('\n') && 
    (cleanedContent.split('\n').filter(line => 
      line.trim().startsWith('"') && line.trim().endsWith('"')
    ).length > 2 ||
    cleanedContent.split('\n')[0].trim().endsWith('"'));

  // Check for potential list content
  const hasPotentialListContent = cleanedContent.includes('1.') || 
    cleanedContent.includes('2.') || 
    cleanedContent.includes('•') || 
    cleanedContent.includes('-') ||
    cleanedContent.includes('\n- ') ||
    cleanedContent.includes('1/') ||  // Common LinkedIn numbering pattern 
    cleanedContent.includes('2/') ||
    cleanedContent.includes('→') ||   // Arrow symbol used in lists
    cleanedContent.includes('↳');

  // Handle posts that should have proper lists and paragraphs
  // This catches posts with first-line pattern and/or excessive quotation
  // We're now more aggressive in our detection to fix more posts
  if (hasExcessiveQuotation || 
      hasPotentialListContent ||
      cleanedContent.includes('\n') && cleanedContent.split('\n').length > 3) {
    
    // Clean up the content first - remove excess quotes around lines
    let lines = cleanedContent.split('\n')
      .filter(line => line.trim())
      .map(line => removeExcessQuotes(line));
    
    let html = '';
    let inList = false;
    let listType = '';
    let currentListNumber = 1;
    
    // Process all lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Check for list items with more flexible patterns
      // Support various formats of numbered lists with different separators and spacing
      const numberedMatch = line.match(/^(\d+)[\.\)\:\-\/][\s\xa0]*(.*)/);  // Added / for LinkedIn format
      
      // Extended bullet pattern matching various bullet formats including emojis and arrows
      const bulletMatch = line.match(/^[-•*◦◆○●✓✔️❌➡️↳→][\s\xa0]*(.*)/);  // Added LinkedIn-specific arrows
      
      // Also check for lines that look like list items but don't exactly match the patterns
      // This helps catch list items that might not have proper spacing
      const probableListItem = 
        (line.match(/^(\d+)[\.\):\/]\s*/) && line.length > 3) ||  // Added / for LinkedIn format
        (line.match(/^[-•→↳]/) && line.length > 2);
      
      if (numberedMatch) {
        // Check if this is a new list or continuation
        const num = parseInt(numberedMatch[1]);
        if (!inList || listType !== 'ol' || num !== currentListNumber) {
          // End any previous list
          if (inList) {
            html += `</${listType}>\n`;
          }
          
          // Start a new ordered list
          html += `<ol${num > 1 ? ` start="${num}"` : ''}>\n`;
          inList = true;
          listType = 'ol';
          currentListNumber = num;
        }
        
        // Add the list item
        html += `<li>${linkifyContent(numberedMatch[2], aiTools)}</li>\n`;
        currentListNumber++;
      } else if (bulletMatch) {
        // Check if this is a new list or continuation
        if (!inList || listType !== 'ul') {
          // End any previous list
          if (inList) {
            html += `</${listType}>\n`;
          }
          
          // Start a new unordered list
          html += `<ul>\n`;
          inList = true;
          listType = 'ul';
        }
        
        // Add the list item
        html += `<li>${linkifyContent(bulletMatch[1], aiTools)}</li>\n`;
      } else if (probableListItem) {
        // Handle items that look like list items but don't exactly match our patterns
        // Extract the numbering or bullet and content
        let itemContent = '';
        let isNumbered = false;
        let num = 1;
        
        if (line.match(/^(\d+)/)) {
          // Probably a numbered list item
          const match = line.match(/^(\d+)[\.\)\:\-\s]+(.*)/);
          if (match) {
            num = parseInt(match[1]);
            itemContent = match[2];
            isNumbered = true;
          } else {
            // Just extract after the number
            const parts = line.split(/^(\d+)[\.\)\:\-\s]+/);
            itemContent = parts.length > 1 ? parts[parts.length - 1] : line;
            num = parseInt(line.match(/^(\d+)/)[1]);
            isNumbered = true;
          }
        } else {
          // Probably a bullet list item
          const parts = line.split(/^[-•]\s*/);
          itemContent = parts.length > 1 ? parts[parts.length - 1] : line.substring(1).trim();
        }
        
        // Start or continue appropriate list type
        if (isNumbered) {
          if (!inList || listType !== 'ol') {
            // End any previous list
            if (inList) {
              html += `</${listType}>\n`;
            }
            
            // Start a new ordered list
            html += `<ol${num > 1 ? ` start="${num}"` : ''}>\n`;
            inList = true;
            listType = 'ol';
            currentListNumber = num;
          }
          
          // Add the numbered list item
          html += `<li>${linkifyContent(itemContent, aiTools)}</li>\n`;
          currentListNumber++;
        } else {
          // Bullet list
          if (!inList || listType !== 'ul') {
            // End any previous list
            if (inList) {
              html += `</${listType}>\n`;
            }
            
            // Start a new unordered list
            html += `<ul>\n`;
            inList = true;
            listType = 'ul';
          }
          
          // Add the bulleted list item
          html += `<li>${linkifyContent(itemContent, aiTools)}</li>\n`;
        }
      } else {
        // End any open list
        if (inList) {
          html += `</${listType}>\n`;
          inList = false;
          listType = '';
        }
        
        // Add as a paragraph
        html += `<p>${linkifyContent(line, aiTools)}</p>\n`;
      }
    }
    
    // Close any open list
    if (inList) {
      html += `</${listType}>\n`;
    }
    
    return html;
  }
  
  // Step 2: Handle special formatting cases
  // Special case: LinkedIn posts that have a header line followed by bullet points
  // Example format: "Topic name:" followed by "1. First point" etc.
  if (cleanedContent.split('\n').length > 3) {
    const lines = cleanedContent.split('\n');
    const firstLine = lines[0].trim();
    
    // If first line ends with a colon followed by numbered or bulleted content
    if (firstLine.endsWith(':') && 
        lines.length > 1 && 
        (lines[1].match(/^\d+[\.\)]/) || lines[1].match(/^[-•*]/) || 
         lines[1].match(/^[a-zA-Z][\.\)]/))) {
      
      // This is a common LinkedIn post format - just treat as normal paragraphs
      // rather than blockquotes, regardless of quote marks
      let formattedContent = '';
      let listStarted = false;
      let listType = 'ul';
      
      formattedContent += `<p>${linkifyContent(firstLine, aiTools)}</p>\n`;
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Detect list items
        const numberedMatch = line.match(/^(\d+)[\.\)][\s\xa0]+(.+)$/);
        const bulletMatch = line.match(/^[-•*◦◆○●][\s\xa0]+(.+)$/);
        const alphaMatch = line.match(/^([a-zA-Z])[\.\)][\s\xa0]+(.+)$/);
        
        if (numberedMatch || bulletMatch || alphaMatch) {
          if (!listStarted) {
            // Start the list
            listType = numberedMatch ? 'ol' : 'ul';
            formattedContent += `<${listType}>\n`;
            listStarted = true;
          }
          
          const itemText = numberedMatch ? numberedMatch[2] : 
                          bulletMatch ? bulletMatch[1] : 
                          alphaMatch[2];
          
          formattedContent += `<li>${linkifyContent(itemText, aiTools)}</li>\n`;
        } else {
          // Non-list text - end any open list
          if (listStarted) {
            formattedContent += `</${listType}>\n`;
            listStarted = false;
          }
          
          // Add as paragraph
          formattedContent += `<p>${linkifyContent(line, aiTools)}</p>\n`;
        }
      }
      
      // Close any open list
      if (listStarted) {
        formattedContent += `</${listType}>\n`;
      }
      
      return formattedContent;
    }
  }
  
  // Step 3: For content not handled by special cases, use the structure identification
  const structure = identifyContentStructure(cleanedContent);
  
  // Step 4: Generate HTML based on the structure
  return generateHTMLFromStructure(structure, aiTools);
}

/**
 * Identify the structure of a LinkedIn post: paragraphs, lists, quotes, etc.
 */
function identifyContentStructure(content) {
  const structure = {
    sections: [],
    hasList: false,
    hasQuote: false
  };
  
  // Pre-process the content to detect certain patterns
  
  // Check if the entire content is surrounded by quotes
  // This is common in LinkedIn exports and shouldn't be treated as a quote
  const isEntirePostQuoted = content.startsWith('"') && 
                            content.endsWith('"') && 
                            content.includes('\n') &&
                            content.length > 200;
  
  // Special pattern: LinkedIn exports often have a quote at the beginning
  // and many paragraphs after - this should not be treated as blockquote content
  const hasInitialQuote = content.startsWith('"') && 
                          content.split('\n').length > 5 &&
                          content.split('\n')[0].endsWith('"');
  
  // Split the content into its component parts, preserving empty lines as they may indicate paragraph breaks
  const lines = content.split('\n').map(line => line.trim());
  
  // Determine section boundaries and types
  let currentSection = {
    type: 'paragraph',
    content: [],
    listStyle: null
  };
  
  // Track if we're inside a list to handle indented content correctly
  let inList = false;
  let listContext = null;
  let consecutiveEmptyLines = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Handle empty lines
    if (!line) {
      consecutiveEmptyLines++;
      
      // If we have multiple empty lines, it's a paragraph break
      if (consecutiveEmptyLines >= 2 && currentSection.content.length > 0) {
        structure.sections.push(currentSection);
        currentSection = {
          type: 'paragraph',
          content: [],
          listStyle: null
        };
        inList = false;
        listContext = null;
      }
      continue;
    }
    
    // Reset empty line counter when we hit content
    consecutiveEmptyLines = 0;
    
    // Check for various list formats with more comprehensive patterns
    const numberedListMatch = line.match(/^(\d+)[\.\)][\s\xa0]+(.+)$/);
    const romanListMatch = line.match(/^((?:i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii))[\.\)][\s\xa0]+(.+)$/i);
    const alphaListMatch = line.match(/^([a-zA-Z])[\.\)][\s\xa0]+(.+)$/);
    const bulletListMatch = line.match(/^[-•*◦◆○●][\s\xa0]+(.+)$/);
    // Also detect emoji bullets which are common in LinkedIn posts
    const emojiListMatch = line.match(/^([\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])[\s\xa0]+(.+)$/u);
    
    // Check for line that ends with colon followed by a list in the next line
    const colonEnding = line.endsWith(':');
    const nextLineIsList = i < lines.length - 1 && (
      lines[i+1].match(/^(\d+)[\.\)][\s\xa0]+/) || 
      lines[i+1].match(/^[-•*◦◆○●][\s\xa0]+/)
    );
    
    if (numberedListMatch) {
      // This is a numbered list item
      if (currentSection.type !== 'list' || currentSection.listStyle !== 'numbered') {
        // End the previous section if it had content
        if (currentSection.content.length > 0) {
          structure.sections.push(currentSection);
        }
        
        // Start a new list section
        currentSection = {
          type: 'list',
          listStyle: 'numbered',
          content: []
        };
        structure.hasList = true;
        inList = true;
        listContext = 'numbered';
      }
      
      currentSection.content.push({
        number: parseInt(numberedListMatch[1]),
        text: numberedListMatch[2]
      });
    } else if (romanListMatch) {
      // This is a roman numeral list item
      if (currentSection.type !== 'list' || currentSection.listStyle !== 'roman') {
        // End the previous section if it had content
        if (currentSection.content.length > 0) {
          structure.sections.push(currentSection);
        }
        
        // Start a new list section
        currentSection = {
          type: 'list',
          listStyle: 'roman', // will be converted to ordered list with appropriate styling
          content: []
        };
        structure.hasList = true;
        inList = true;
        listContext = 'roman';
      }
      
      currentSection.content.push({
        text: romanListMatch[2],
        roman: romanListMatch[1]
      });
    } else if (alphaListMatch) {
      // This is an alphabetical list item
      if (currentSection.type !== 'list' || currentSection.listStyle !== 'alpha') {
        // End the previous section if it had content
        if (currentSection.content.length > 0) {
          structure.sections.push(currentSection);
        }
        
        // Start a new list section
        currentSection = {
          type: 'list',
          listStyle: 'alpha', // will be converted to ordered list with appropriate styling
          content: []
        };
        structure.hasList = true;
        inList = true;
        listContext = 'alpha';
      }
      
      currentSection.content.push({
        text: alphaListMatch[2],
        letter: alphaListMatch[1]
      });
    } else if (bulletListMatch || emojiListMatch) {
      // This is a bullet list item
      if (currentSection.type !== 'list' || currentSection.listStyle !== 'bullet') {
        // End the previous section if it had content
        if (currentSection.content.length > 0) {
          structure.sections.push(currentSection);
        }
        
        // Start a new list section
        currentSection = {
          type: 'list',
          listStyle: 'bullet',
          content: []
        };
        structure.hasList = true;
        inList = true;
        listContext = 'bullet';
      }
      
      const itemText = bulletListMatch ? bulletListMatch[1] : emojiListMatch[2];
      currentSection.content.push({
        text: itemText
      });
    } else if (colonEnding && nextLineIsList) {
      // This is a line ending with a colon followed by a list
      // Add it as a paragraph, and the next iteration will handle the list
      if (currentSection.type !== 'paragraph') {
        // End the previous section
        if (currentSection.content.length > 0) {
          structure.sections.push(currentSection);
        }
        
        // Start a new paragraph section
        currentSection = {
          type: 'paragraph',
          content: []
        };
      }
      
      currentSection.content.push(line);
      
      // Add this paragraph immediately because we know a list is coming next
      structure.sections.push(currentSection);
      
      // Reset for the upcoming list
      currentSection = {
        type: 'list',
        listStyle: lines[i+1].match(/^(\d+)[\.\)]/) ? 'numbered' : 'bullet',
        content: []
      };
      inList = false;
      listContext = null;
    } else {
      // This is not a list item
      
      // Check if this is a blockquote (text in quotes, or a quote pattern)
      // But be careful not to treat everything with quotes as a blockquote
      
      // If the whole post is quoted or has initial quote pattern, don't treat regular
      // paragraphs as blockquotes - only treat specifically formatted quotes as blockquotes
      const isWholePostFormatting = isEntirePostQuoted || hasInitialQuote;
      
      // Initial post line with quotes shouldn't be treated as a separate blockquote
      const isInitialQuotedLine = i === 0 && line.startsWith('"') && line.endsWith('"');
      
      // For regular content, detect actual quotes that should be formatted as blockquotes
      const isQuote = !isWholePostFormatting && !isInitialQuotedLine && 
                     ((line.startsWith('"') && line.endsWith('"')) || 
                      line.match(/^[""].*[""]$/) || 
                      line.match(/^[''].*['']$/)) && 
                      line.length > 15 && // Only longer quotes should be blockquotes
                      !line.match(/^[""''"].{1,10}[""'']$/); // Avoid short quote marks
      
      // Also detect lines that look like quoted speech
      const speechMatch = line.match(/^[""''](.+)[""''][\s]*[-–—][\s]*(.+)$/);
      
      // Skip conversion to blockquote for lines that just have stray quotes
      // (common in LinkedIn posts when using quotes as emphasis)
      const isSingleQuote = line === '"' || line === '""';
      
      if ((isQuote || speechMatch) && !isSingleQuote) {
        // End the previous section if it had content
        if (currentSection.content.length > 0) {
          structure.sections.push(currentSection);
        }
        
        // Add this as a quote section
        if (speechMatch) {
          // This is a quote with attribution
          structure.sections.push({
            type: 'quote',
            content: [speechMatch[1]],
            attribution: speechMatch[2]
          });
        } else {
          // Regular quote
          const quoteContent = isQuote ? 
            line.replace(/^[""'']|[""'']$/g, '') : line;
          
          structure.sections.push({
            type: 'quote',
            content: [quoteContent]
          });
        }
        
        structure.hasQuote = true;
        
        // Start a new section for what comes after
        currentSection = {
          type: 'paragraph',
          content: []
        };
        inList = false;
        listContext = null;
      } else {
        // Regular paragraph text
        if (currentSection.type !== 'paragraph') {
          // End the previous section
          if (currentSection.content.length > 0) {
            structure.sections.push(currentSection);
          }
          
          // Start a new paragraph section
          currentSection = {
            type: 'paragraph',
            content: []
          };
          inList = false;
          listContext = null;
        }
        
        currentSection.content.push(line);
      }
    }
  }
  
  // Add the final section if it has content
  if (currentSection.content.length > 0) {
    structure.sections.push(currentSection);
  }
  
  return structure;
}

/**
 * Generate HTML from the identified content structure
 */
function generateHTMLFromStructure(structure, aiTools) {
  let html = [];
  
  // Process each section based on its type
  for (const section of structure.sections) {
    if (section.type === 'paragraph') {
      // Process paragraph content with proper spacing between lines
      if (section.content.length === 1) {
        // Single line paragraph
        html.push(`<p>${linkifyContent(section.content[0], aiTools)}</p>`);
      } else {
        // Multi-line paragraph - maintain spacing between separate thought lines
        // but don't add breaks for wrapped text that should flow
        const paragraphWithBreaks = section.content
          .map(line => linkifyContent(line, aiTools))
          .join(' ');
        
        html.push(`<p>${paragraphWithBreaks}</p>`);
      }
    } else if (section.type === 'list') {
      // Generate an appropriate list based on the list style
      let listItems = [];
      
      // Determine list type and any special attributes
      let listTag = 'ul';
      let listAttrs = '';
      
      if (section.listStyle === 'numbered') {
        listTag = 'ol';
      } else if (section.listStyle === 'roman') {
        listTag = 'ol';
        listAttrs = ' type="i"';
      } else if (section.listStyle === 'alpha') {
        listTag = 'ol';
        listAttrs = ' type="a"';
      }
      
      // Generate list items
      for (const item of section.content) {
        const itemText = item.text || '';
        listItems.push(`<li>${linkifyContent(itemText, aiTools)}</li>`);
      }
      
      html.push(`<${listTag}${listAttrs}>${listItems.join('')}</${listTag}>`);
    } else if (section.type === 'quote') {
      // Generate a blockquote, with attribution if available
      if (section.attribution) {
        html.push(`
          <blockquote>
            <p>${linkifyContent(section.content[0], aiTools)}</p>
            <footer>${linkifyContent(section.attribution, aiTools)}</footer>
          </blockquote>
        `);
      } else {
        html.push(`<blockquote><p>${linkifyContent(section.content[0], aiTools)}</p></blockquote>`);
      }
    }
  }
  
  // Clean up any excessive whitespace in the final HTML
  return html.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * Add hyperlinks to content where appropriate
 */
function linkifyContent(text, aiTools) {
  if (!text) return '';
  
  // Check if the text already contains HTML anchor tags
  const hasExistingLinks = /<a\s+[^>]*>.*?<\/a>/i.test(text);
  if (hasExistingLinks) {
    // If there are already links, return as-is to prevent nested links
    return text;
  }
  
  let processedText = text;
  
  // Add links to AI tools referenced in the content
  for (const tool of aiTools) {
    processedText = processedText.replace(
      tool.pattern,
      `<a href="${tool.url}" target="_blank" rel="noopener noreferrer">$&</a>`
    );
  }
  
  // Auto-link URLs that aren't already part of HTML links
  // This complex regex finds URLs that aren't already inside href attributes
  const urlRegex = /(?<!href=['"])(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;
  
  processedText = processedText.replace(
    urlRegex, 
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  
  // Convert common email patterns to mailto links
  const emailRegex = /(?<!href=['"]|\w@)\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g;
  
  processedText = processedText.replace(
    emailRegex,
    '<a href="mailto:$1">$1</a>'
  );
  
  return processedText;
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
    
    // One final pass to clean up any stray quotes in HTML content
    allContent = allContent.map(item => {
      // Clean up the title
      item.title = removeExcessQuotes(item.title);
      
      // Clean up quotes in content
      item.content = item.content
        // Fix quotes at the end of paragraph tags
        .replace(/<p>(.*?)\"<\/p>/g, '<p>$1</p>')
        // Fix quotes at the beginning of paragraph tags
        .replace(/<p>\"(.*?)<\/p>/g, '<p>$1</p>')
        // Remove escaped quotes
        .replace(/\\"/g, '"')
        // Fix nested anchor tags - remove the outer anchor tag when nested
        .replace(/<a[^>]*>(<a[^>]*>.*?<\/a>)<\/a>/g, '$1')
        // Fix the specific Wispr Flow pattern
        .replace(/<a href="https:\/\/whisperflow\.com"[^>]*><a href="https:\/\/whisperflow\.com"[^>]*>Wispr<\/a> Flow<\/a>/g, '<a href="https://whisperflow.com" target="_blank" rel="noopener noreferrer">Wispr Flow</a>');
      
      return item;
    });
    
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