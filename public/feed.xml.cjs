/**
 * This script generates an RSS feed for the blog
 */

const fs = require('fs');
const path = require('path');

// Load the LinkedIn posts data
const linkedInDataPath = path.resolve(__dirname, '../src/lib/linkedin-posts-data.ts');

// Function to extract the posts array from the TypeScript file
const extractPostsFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Try to require the module directly instead of parsing as JSON
    // First, create a temporary JS file
    const tempPath = filePath.replace('.ts', '.temp.js');
    
    // Convert TS to JS by removing types and fixing imports
    let jsContent = content
      .replace(/import.*from.*['"].*['"];?\n?/g, '') // Remove imports
      .replace(/export\s+/g, '') // Remove export keywords
      .replace(/:\s*LinkedInPost\[\]/g, '') // Remove type annotations
      .replace(/interface\s+LinkedInPost\s*{[^}]*}/g, ''); // Remove interface definitions
    
    // Write temporary file
    fs.writeFileSync(tempPath, jsContent, 'utf8');
    
    // Clear require cache and require the temp file
    delete require.cache[require.resolve(tempPath)];
    const posts = require(tempPath).linkedInPosts;
    
    // Clean up temp file
    fs.unlinkSync(tempPath);
    
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error('Error reading LinkedIn posts data:', error.message);
    return [];
  }
};

// Function to clean HTML content for RSS - simple approach
const cleanHtmlForRss = (html) => {
  if (!html) return '';
  
  // Simply remove all tags - no special handling
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  // Escape for XML
  text = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  
  // Remove control characters
  text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '');
  
  return text;
};

// Function to escape XML entities
const escapeXml = (text) => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Generate the RSS feed
const generateRSSFeed = () => {
  // Get all posts
  let posts = [];
  try {
    posts = extractPostsFromFile(linkedInDataPath);
  } catch (error) {
    console.log('Skipping LinkedIn posts due to parsing issues - no RSS feed generated');
    posts = [];
  }
  
  if (posts.length === 0) {
    console.log('No posts found for RSS feed');
    return;
  }
  
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Get the build date
  const buildDate = new Date().toUTCString();
  const latestPostDate = new Date(sortedPosts[0].date).toUTCString();
  
  // Create the RSS XML content
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
>
  <channel>
    <title>Get Stuff Done AI - Professional Insights</title>
    <description>Expert insights, strategies, and practical advice on AI implementation, digital transformation, and executive productivity.</description>
    <link>https://gsdat.work/blog</link>
    <atom:link href="https://gsdat.work/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${latestPostDate}</pubDate>
    <ttl>60</ttl>
    <sy:updatePeriod>daily</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <image>
      <url>https://gsdat.work/og-image.png</url>
      <title>Get Stuff Done AI - Professional Insights</title>
      <link>https://gsdat.work/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    <managingEditor>christian@gsdat.work (Christian Ulstrup)</managingEditor>
    <webMaster>christian@gsdat.work (Christian Ulstrup)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Get Stuff Done AI</copyright>
${sortedPosts.map(post => {
  const postDate = new Date(post.date).toUTCString();
  const cleanContent = cleanHtmlForRss(post.content);
  const cleanTitle = escapeXml(post.title);
  const cleanExcerpt = cleanHtmlForRss(post.excerpt);
  
  return `
    <item>
      <title>${cleanTitle}</title>
      <link>https://gsdat.work/blog/${post.id}</link>
      <guid isPermaLink="true">https://gsdat.work/blog/${post.id}</guid>
      <pubDate>${postDate}</pubDate>
      <description>${cleanExcerpt}</description>
      <author>christian@gsdat.work (Christian Ulstrup)</author>
      <category>AI Implementation</category>
      <category>Digital Transformation</category>
      <category>Executive Productivity</category>
      <category>Generative AI</category>
    </item>`;
}).join('')}
  </channel>
</rss>`;

  // Write the feed file
  const outputPath = path.resolve(__dirname, 'feed.xml');
  fs.writeFileSync(outputPath, rssContent, 'utf8');
  
  console.log(`RSS feed generated with ${sortedPosts.length} posts at: ${outputPath}`);
};

// Run the RSS feed generator
generateRSSFeed();