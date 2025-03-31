# LinkedIn Content Update Guide

This guide explains how to update the blog content from LinkedIn exports.

## Process Overview

The site imports content from LinkedIn using two sources:
1. **Articles**: HTML files from your LinkedIn data export
2. **Posts**: CSV file (Shares.csv) from your LinkedIn data export

The `process-linkedin.cjs` script processes this data and generates the content for your blog.

## Steps to Update LinkedIn Content

### 1. Export Data from LinkedIn

1. Go to [LinkedIn Data Privacy](https://www.linkedin.com/psettings/data-privacy)
2. Click on "Get a copy of your data"
3. Select "Download larger data archive"
4. In the "Want something specific?" section, select at minimum:
   - Posts
   - Articles
5. Request the archive
6. Wait for LinkedIn to prepare your data (usually takes 24 hours)
7. Download the ZIP file when you receive the email

### 2. Prepare the Files

1. Extract the LinkedIn export ZIP file
2. Navigate to the extracted folder (usually named something like "LinkedIn Data Export...")
3. Make sure you have:
   - HTML files for your articles (with names like "article-123456789.html")
   - A `Shares.csv` file containing your posts

### 3. Update the Processing Script Configuration

1. Open `/scripts/process-linkedin.cjs`
2. Update the `LINKEDIN_EXPORT_DIR` path to point to your new export folder:

```javascript
// Find this line near the top of the file
const LINKEDIN_EXPORT_DIR = path.resolve(__dirname, '../path/to/your/LinkedIn export folder');
```

### 4. Run the Processing Script

```bash
# Navigate to the project root
cd /path/to/get-stuff-done-ai

# Run the script
npm run process-linkedin
```

The script will:
- Process all articles from the HTML files
- Process all posts from the Shares.csv file
- Generate a new `linkedin-posts-data.ts` file in `src/lib/`
- Filter out content before September 2022
- Sort posts by date (newest first)

### 5. Build and Deploy

After processing the new content:

```bash
# Build the project
npm run build

# Preview the changes
npm run preview

# Deploy by pushing to the main branch
git add .
git commit -m "Update LinkedIn content"
git push origin main
```

## Technical Notes

### LinkedIn Content Processing Details

- **Articles**: The script extracts the title, date, and content from HTML files.
- **Posts**: The script processes the CSV data, handles multi-line fields, and formats the content.

### Content Formatting

The script handles several formatting challenges:

- **Lists**: Detects and formats numbered and bulleted lists
- **Paragraphs**: Preserves paragraph breaks
- **Quotes**: Cleans up excess quotation marks
- **Links**: Auto-links URLs and email addresses
- **LinkedIn References**: Auto-links mentions of AI tools

### Troubleshooting

If you encounter issues:

1. **CSV Parsing Problems**: LinkedIn format can sometimes change. Check the `parseLinkedInCSV` function.
2. **Missing Images**: LinkedIn images are not downloaded during export. The script removes image references.
3. **Date Formatting**: If dates appear incorrect, check the date extraction in the processing functions.

## Customization

If you want to customize the content processing:

- **Filter Criteria**: Modify the `cutoffDate` in the main function to change which posts are included
- **AI Tool Links**: Update the `aiTools` array to change which tools are auto-linked
- **Content Cleaning**: Adjust the cleaning functions if you notice formatting issues

For more complex changes, consult the detailed comments in the `process-linkedin.cjs` file.