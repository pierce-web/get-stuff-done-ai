/**
 * This script generates a sitemap.xml file for the website
 * including dynamically generated links for all LinkedIn blog posts
 */

const fs = require('fs');
const path = require('path');

// Load the LinkedIn posts data
const linkedInDataPath = path.resolve(__dirname, '../src/lib/linkedin-posts-data.ts');

// Function to extract the posts array from the TypeScript file
const extractPostsFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const postsMatch = content.match(/export const linkedInPosts: LinkedInPost\[\] = (\[[\s\S]*?\]);/);
    
    if (postsMatch && postsMatch[1]) {
      // Replace export syntax with normal JS array
      const postsJson = postsMatch[1];
      // Safely evaluate the array (this approach avoids using eval)
      const posts = JSON.parse(postsJson);
      return posts;
    }
    
    return [];
  } catch (error) {
    console.error('Error reading LinkedIn posts data:', error);
    return [];
  }
};

// Main function to generate the sitemap
const generateSitemap = () => {
  // Get today's date formatted as YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  // Main website URLs
  const mainUrls = [
    { 
      url: 'https://gsdat.work/', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '1.0'
    },
    { 
      url: 'https://gsdat.work/cases', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://gsdat.work/ai-tooling-report', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://gsdat.work/10x-executive', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://gsdat.work/ai-action-workshop', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://gsdat.work/triple-a-transformation', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://gsdat.work/blog', 
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];
  
  // Extract LinkedIn posts
  let posts = [];
  try {
    // Try to load and parse the LinkedIn posts data
    posts = extractPostsFromFile(linkedInDataPath);
    console.log(`Found ${posts.length} LinkedIn posts for sitemap`);
  } catch (error) {
    console.error('Error loading LinkedIn posts data:', error);
  }
  
  // Generate blog post URLs
  const blogUrls = posts.map(post => {
    // Ensure we have the correct date format for lastmod (YYYY-MM-DD)
    const lastmod = new Date(post.date).toISOString().split('T')[0];
    
    return {
      url: `https://gsdat.work/blog/${post.id}`,
      lastmod: lastmod,
      changefreq: 'monthly', // Changed from yearly to monthly for better crawl frequency
      priority: '0.7'
    };
  });
  
  // Combine all URLs
  const allUrls = [...mainUrls, ...blogUrls];
  
  // Generate XML
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;
  
  // Write to file
  const outputPath = path.resolve(__dirname, 'sitemap.xml');
  fs.writeFileSync(outputPath, xmlContent, 'utf8');
  
  console.log(`Sitemap generated with ${allUrls.length} URLs at: ${outputPath}`);
};

// Run the sitemap generator
generateSitemap();