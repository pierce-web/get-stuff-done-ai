/**
 * This script regenerates the sitemap.xml file to ensure all blog posts are included
 * Run this with: node scripts/regenerate-sitemap.js
 */

// Run the sitemap generator from the public directory
require('../public/sitemap.xml.cjs');

console.log('Sitemap regeneration completed.');