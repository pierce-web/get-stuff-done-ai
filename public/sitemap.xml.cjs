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
      url: 'https://getstuffdone.ai/', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '1.0'
    },
    { 
      url: 'https://getstuffdone.ai/cases', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://getstuffdone.ai/ai-tooling-report', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://getstuffdone.ai/10x-executive', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://getstuffdone.ai/ai-action-workshop', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://getstuffdone.ai/triple-a-transformation', 
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    { 
      url: 'https://getstuffdone.ai/blog', 
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
    return {
      url: `https://getstuffdone.ai/blog/${post.id}`,
      lastmod: post.date,
      changefreq: 'yearly',
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