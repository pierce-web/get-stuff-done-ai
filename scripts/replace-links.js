#!/usr/bin/env node

/**
 * Link Replacement Script
 * 
 * This script finds and replaces hyperlinks across the project, with a special exception
 * for links containing the word "Christian" (case-insensitive).
 * 
 * Usage: node scripts/replace-links.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const FOUNDER_LED_CALL_URL = 'https://calendly.com/gsdatwork/free-consult';
const STRATEGY_CALL_URL = 'https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call';
const FILE_EXTENSIONS = ['.html', '.js', '.jsx', '.tsx', '.vue'];
const IGNORE_DIRECTORIES = ['node_modules', '.git', 'dist', 'build'];

/**
 * Check if a directory should be ignored
 */
function shouldIgnoreDirectory(dirName) {
  return IGNORE_DIRECTORIES.includes(dirName) || dirName.startsWith('.');
}

/**
 * Check if a file has a supported extension
 */
function hasSupportedExtension(fileName) {
  return FILE_EXTENSIONS.some(ext => fileName.toLowerCase().endsWith(ext));
}

/**
 * Get all files recursively from a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip ignored directories
      if (!shouldIgnoreDirectory(file)) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only include files with supported extensions
      if (hasSupportedExtension(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

/**
 * Extract text content from an anchor tag
 * This handles both simple text and nested HTML elements
 */
function extractAnchorText(anchorMatch) {
  // anchorMatch[0] is the full match, anchorMatch[1] is the content between <a> and </a>
  const innerContent = anchorMatch[1];
  
  // Remove HTML tags to get plain text
  const textContent = innerContent.replace(/<[^>]*>/g, ' ').trim();
  
  // Clean up extra whitespace
  return textContent.replace(/\s+/g, ' ');
}

/**
 * Determine which URL to use based on the anchor text
 */
function determineTargetUrl(anchorText) {
  const lowerText = anchorText.toLowerCase();
  
  // Check for founder-led call patterns
  if (lowerText.includes('founder') && lowerText.includes('call')) {
    return FOUNDER_LED_CALL_URL;
  }
  if (lowerText.includes('founder-led')) {
    return FOUNDER_LED_CALL_URL;
  }
  if (lowerText.includes('founder led')) {
    return FOUNDER_LED_CALL_URL;
  }
  
  // Check for general strategy call patterns
  if (lowerText.includes('strategy') && lowerText.includes('call')) {
    return STRATEGY_CALL_URL;
  }
  if (lowerText.includes('strategic') && lowerText.includes('call')) {
    return STRATEGY_CALL_URL;
  }
  if (lowerText.includes('planning') && lowerText.includes('call')) {
    return STRATEGY_CALL_URL;
  }
  
  // Check for other call-related patterns that should use strategy URL
  if (lowerText.includes('consult') || lowerText.includes('consultation')) {
    return STRATEGY_CALL_URL;
  }
  if (lowerText.includes('free') && lowerText.includes('call')) {
    return STRATEGY_CALL_URL;
  }
  if (lowerText.includes('book') && lowerText.includes('call')) {
    return STRATEGY_CALL_URL;
  }
  if (lowerText.includes('schedule') && lowerText.includes('call')) {
    return STRATEGY_CALL_URL;
  }
  
  // Default to strategy call URL for any other links
  return STRATEGY_CALL_URL;
}

/**
 * Process a single file to replace links
 */
function processFile(filePath) {
  try {
    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8');
    let modifiedContent = content;
    let hasChanges = false;

    // Regular expression to match anchor tags
    // This captures the full anchor tag and its content
    const anchorRegex = /<a\s+[^>]*href\s*=\s*["'][^"']*["'][^>]*>(.*?)<\/a>/gi;
    
    let match;
    const replacements = [];

    // Find all anchor tags
    while ((match = anchorRegex.exec(content)) !== null) {
      const fullAnchorTag = match[0];
      const anchorText = extractAnchorText(match);
      
      // Check if the anchor text contains "Christian" (case-insensitive)
      if (anchorText.toLowerCase().includes('christian')) {
        // Skip this link - it contains "Christian"
        console.log(`  Skipping link with text: "${anchorText}" (contains "Christian")`);
        continue;
      }

      // Determine the appropriate target URL based on the anchor text
      const targetUrl = determineTargetUrl(anchorText);

      // Extract the current href value
      const hrefMatch = fullAnchorTag.match(/href\s*=\s*["']([^"']*)["']/i);
      if (hrefMatch && hrefMatch[1] !== targetUrl) {
        // This link should be replaced
        const currentHref = hrefMatch[1];
        const newAnchorTag = fullAnchorTag.replace(
          /href\s*=\s*["'][^"']*["']/i,
          `href="${targetUrl}"`
        );
        
        replacements.push({
          original: fullAnchorTag,
          replacement: newAnchorTag,
          oldHref: currentHref,
          newHref: targetUrl,
          text: anchorText
        });
      }
    }

    // Apply all replacements
    replacements.forEach(replacement => {
      modifiedContent = modifiedContent.replace(replacement.original, replacement.replacement);
      hasChanges = true;
      console.log(`  Replaced: "${replacement.text}" (${replacement.oldHref} → ${replacement.newHref})`);
    });

    // Write the modified content back to the file if there were changes
    if (hasChanges) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function to process all files
 */
function main() {
  console.log('🔗 Starting intelligent link replacement script...');
  console.log(`📋 Configuration:`);
  console.log(`   Founder-led calls → ${FOUNDER_LED_CALL_URL}`);
  console.log(`   Strategy calls → ${STRATEGY_CALL_URL}`);
  console.log(`   File extensions: ${FILE_EXTENSIONS.join(', ')}`);
  console.log(`   Ignored directories: ${IGNORE_DIRECTORIES.join(', ')}`);
  console.log(`   Exception: Links containing "Christian" (case-insensitive) will be preserved`);
  console.log('');

  // Get the current working directory (where the script is run from)
  const startDir = process.cwd();
  console.log(`📁 Scanning directory: ${startDir}`);
  console.log('');

  // Get all files to process
  const allFiles = getAllFiles(startDir);
  console.log(`📄 Found ${allFiles.length} files to scan`);
  console.log('');

  let processedFiles = 0;
  let modifiedFiles = 0;

  // Process each file
  allFiles.forEach(filePath => {
    console.log(`Processing: ${path.relative(startDir, filePath)}`);
    processedFiles++;
    
    const wasModified = processFile(filePath);
    if (wasModified) {
      modifiedFiles++;
      console.log(`  ✅ File modified`);
    } else {
      console.log(`  ⏭️  No changes needed`);
    }
    console.log('');
  });

  // Summary
  console.log('🎉 Link replacement complete!');
  console.log(`📊 Summary:`);
  console.log(`   Files scanned: ${processedFiles}`);
  console.log(`   Files modified: ${modifiedFiles}`);
  console.log(`   Files unchanged: ${processedFiles - modifiedFiles}`);
  
  if (modifiedFiles > 0) {
    console.log('');
    console.log('✨ All eligible links have been updated with intelligent URL routing:');
    console.log('   📞 Founder-led calls → Free consult URL');
    console.log('   🎯 Strategy calls → Strategic planning URL');
    console.log('🛡️  Links containing "Christian" were preserved as requested.');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { processFile, getAllFiles, extractAnchorText };