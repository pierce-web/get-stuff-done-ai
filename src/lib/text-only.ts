/**
 * Text-only extraction - no HTML parsing at all
 * This approach completely avoids HTML handling
 */

/**
 * Convert HTML to plain text by stripping ALL tags
 * No special handling for script/style - just remove everything
 */
export function htmlToText(html: string): string {
  if (!html) return '';
  
  // Simply remove all tags - no special cases
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Only decode nbsp to space, leave other entities as-is
  // This avoids any double-decoding issues
  text = text.replace(/&nbsp;/g, ' ');
  
  // Clean whitespace
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Convert text to XML-safe format
 */
export function textToXml(text: string): string {
  if (!text) return '';
  
  // Escape for XML
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    // Remove control characters
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');
}

/**
 * Convert HTML directly to XML-safe text
 */
export function htmlToXmlText(html: string): string {
  return textToXml(htmlToText(html));
}