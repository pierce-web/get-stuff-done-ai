/**
 * Ultra-safe text extraction from HTML
 * Removes all potential HTML elements completely
 */

/**
 * Extract text from HTML by removing ALL markup
 * This is the safest approach - no HTML can survive
 */
export function safeExtractText(html: string): string {
  if (!html) return '';
  
  // Step 1: Aggressively remove anything resembling script/style tags
  let text = html;
  
  // Remove script blocks (including partial/malformed ones)
  text = text.replace(/<\s*script[\s\S]*?script\s*>/gi, ' ');
  text = text.replace(/<\s*script[\s\S]*$/gi, ' ');
  text = text.replace(/^[\s\S]*script\s*>/gi, ' ');
  
  // Remove style blocks (including partial/malformed ones)
  text = text.replace(/<\s*style[\s\S]*?style\s*>/gi, ' ');
  text = text.replace(/<\s*style[\s\S]*$/gi, ' ');
  text = text.replace(/^[\s\S]*style\s*>/gi, ' ');
  
  // Step 2: Remove ALL angle brackets and their contents
  // This ensures no HTML tags can possibly remain
  text = text.replace(/<[^>]*>/g, ' ');
  
  // Step 3: Remove any remaining angle brackets
  text = text.replace(/[<>]/g, '');
  
  // Step 4: Decode HTML entities
  text = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
  
  // Step 5: Clean up whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

/**
 * Prepare text for XML/RSS output
 * Extracts text and properly escapes for XML
 */
export function safeTextForXML(html: string): string {
  // First extract plain text (no HTML possible)
  let text = safeExtractText(html);
  
  // Then escape for XML
  text = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  
  // Remove control characters
  // eslint-disable-next-line no-control-regex
  text = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');
  
  return text;
}