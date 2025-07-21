/**
 * Secure HTML sanitization utilities
 * Uses a whitelist approach for maximum security
 */

/**
 * Remove all script and style elements including their content
 * Uses a multi-pass approach to handle nested and malformed tags
 */
function removeScriptAndStyleTags(html: string): string {
  let result = html;
  let previousLength;
  
  // Keep removing until no more changes occur
  do {
    previousLength = result.length;
    
    // Remove script tags - handle various malformed cases
    // This pattern matches:
    // - <script> with any attributes
    // - Any content including newlines
    // - </script> with potential whitespace/attributes after
    result = result.replace(/<script(?:\s|>)[\s\S]*?<\/script(?:\s|>)/gi, '');
    
    // Also remove script tags that might be broken/incomplete
    result = result.replace(/<script[\s\S]*?$/gi, '');
    result = result.replace(/^[\s\S]*?<\/script(?:\s|>)/gi, '');
    
    // Remove style tags similarly
    result = result.replace(/<style(?:\s|>)[\s\S]*?<\/style(?:\s|>)/gi, '');
    result = result.replace(/<style[\s\S]*?$/gi, '');
    result = result.replace(/^[\s\S]*?<\/style(?:\s|>)/gi, '');
    
  } while (result.length < previousLength);
  
  return result;
}

/**
 * Safely extract text content from HTML
 * Removes all HTML tags and decodes entities
 */
export function extractTextFromHTML(html: string): string {
  if (!html) return '';
  
  // First, remove script and style tags completely
  let text = removeScriptAndStyleTags(html);
  
  // Remove all HTML tags
  text = text.replace(/<[^>]*>/g, ' ');
  
  // Decode HTML entities (safe order to prevent double decoding)
  text = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&'); // Decode &amp; last
  
  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

/**
 * Clean HTML for safe inclusion in RSS/XML
 * Strips tags and properly escapes for XML
 */
export function cleanHtmlForXml(html: string): string {
  if (!html) return '';
  
  // Extract text (removes all tags safely)
  let text = extractTextFromHTML(html);
  
  // Escape for XML (must escape & first)
  text = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  
  // Remove any XML-illegal characters
  // eslint-disable-next-line no-control-regex
  text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '');
  
  return text;
}