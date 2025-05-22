/**
 * Enhanced SEO utilities specifically for blog posts
 */

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  type: "article" | "post";
  originalUrl?: string;
}

/**
 * Generate optimized meta description for blog posts
 * Prioritizes compelling hooks over simple truncation
 */
export const generateBlogMetaDescription = (
  title: string,
  content: string,
  type: "article" | "post"
): string => {
  // Remove HTML tags
  const cleanContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Try to find a compelling first sentence or paragraph
  const sentences = cleanContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let description = '';
  
  // Look for actionable or engaging opening
  for (let i = 0; i < Math.min(3, sentences.length); i++) {
    const sentence = sentences[i].trim();
    if (sentence.length < 160 && sentence.length > 20) {
      // Check for compelling words/phrases
      const compellingWords = [
        'how to', 'why', 'discover', 'learn', 'transform', 'implement', 
        'accelerate', 'optimize', 'increase', 'improve', 'master', 'unlock'
      ];
      
      const hasCompellingWords = compellingWords.some(word => 
        sentence.toLowerCase().includes(word)
      );
      
      if (hasCompellingWords || i === 0) {
        description = sentence;
        break;
      }
    }
  }
  
  // Fallback to first 155 characters if no compelling opener found
  if (!description && cleanContent.length > 155) {
    description = cleanContent.substring(0, 155).trim();
  } else if (!description) {
    description = cleanContent;
  }
  
  // Add type-specific context and CTA
  const typeContext = type === "article" ? "Expert insights on" : "Latest thoughts on";
  const cta = type === "article" ? "Read the full analysis." : "Get the details.";
  
  // Ensure we don't exceed 160 characters including CTA
  const maxLength = 160 - cta.length - 1;
  if (description.length > maxLength) {
    description = description.substring(0, maxLength).trim();
  }
  
  return `${description} ${cta}`;
};

/**
 * Extract keywords from blog content using simple NLP techniques
 */
export const extractBlogKeywords = (title: string, content: string): string[] => {
  // Remove HTML and normalize text
  const cleanText = `${title} ${content}`.replace(/<[^>]*>/g, ' ').toLowerCase();
  
  // AI/Business focused keywords to prioritize
  const priorityKeywords = [
    'ai implementation', 'artificial intelligence', 'machine learning', 'automation',
    'digital transformation', 'business optimization', 'productivity', 'efficiency',
    'workflow automation', 'ai tools', 'generative ai', 'chatgpt', 'ai strategy',
    'business intelligence', 'data analysis', 'process improvement', 'innovation',
    'technology adoption', 'ai consulting', 'business automation', 'ai solutions'
  ];
  
  const foundKeywords: string[] = [];
  
  // Check for priority keywords
  priorityKeywords.forEach(keyword => {
    if (cleanText.includes(keyword) && !foundKeywords.includes(keyword)) {
      foundKeywords.push(keyword);
    }
  });
  
  // Extract important words from title (likely to be key topics)
  const titleWords = title.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !['this', 'that', 'with', 'from', 'will', 'have', 'been'].includes(word));
  
  titleWords.forEach(word => {
    if (!foundKeywords.includes(word) && foundKeywords.length < 8) {
      foundKeywords.push(word);
    }
  });
  
  return foundKeywords.slice(0, 6); // Limit to 6 keywords
};

/**
 * Categorize blog posts for better structured data
 */
export const categorizeBlogPost = (title: string, content: string): {
  category: string;
  tags: string[];
  articleSection: string;
} => {
  const lowerTitle = title.toLowerCase();
  const lowerContent = content.toLowerCase();
  const combinedText = `${lowerTitle} ${lowerContent}`;
  
  // Define category patterns
  const categories = {
    'AI Strategy': ['strategy', 'planning', 'roadmap', 'transformation', 'adoption', 'implementation plan'],
    'AI Tools': ['tools', 'software', 'platform', 'chatgpt', 'claude', 'copilot', 'application'],
    'Business Automation': ['automation', 'workflow', 'process', 'efficiency', 'productivity', 'streamline'],
    'Executive Insights': ['leadership', 'executive', 'management', 'decision', 'strategy', 'okr'],
    'AI Implementation': ['implementation', 'deploy', 'integrate', 'execute', 'practical', 'hands-on'],
    'Industry Analysis': ['industry', 'market', 'trends', 'analysis', 'future', 'prediction'],
    'Case Studies': ['case study', 'example', 'success story', 'results', 'outcome', 'achievement']
  };
  
  let bestCategory = 'AI Implementation'; // Default
  let bestScore = 0;
  
  Object.entries(categories).forEach(([category, keywords]) => {
    const score = keywords.reduce((acc, keyword) => {
      return acc + (combinedText.includes(keyword) ? 1 : 0);
    }, 0);
    
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  });
  
  // Generate tags based on content
  const allTags = [
    'AI', 'Artificial Intelligence', 'Business Transformation', 'Productivity',
    'Automation', 'Digital Strategy', 'Technology', 'Innovation', 'Efficiency',
    'Workflow Optimization', 'AI Tools', 'Business Intelligence'
  ];
  
  const relevantTags = allTags.filter(tag => 
    combinedText.includes(tag.toLowerCase())
  ).slice(0, 4);
  
  return {
    category: bestCategory,
    tags: relevantTags.length > 0 ? relevantTags : ['AI', 'Business Transformation'],
    articleSection: bestCategory
  };
};

/**
 * Generate enhanced structured data for blog posts
 */
export const generateEnhancedBlogStructuredData = (
  post: BlogPost,
  textContent: string,
  wordCount: number,
  readingTime: number,
  metaDescription: string,
  keywords: string[],
  categorization: ReturnType<typeof categorizeBlogPost>
) => {
  const formattedDate = new Date(post.date).toISOString();
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://gsdat.work/blog/${post.id}`
    },
    "headline": post.title.replace(/"/g, '\\"'),
    "description": metaDescription.replace(/"/g, '\\"'),
    "image": {
      "@type": "ImageObject",
      "url": "https://gsdat.work/og-image.png",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Christian Ulstrup",
      "url": "https://www.linkedin.com/in/christianulstrup/",
      "jobTitle": "AI Implementation Expert",
      "sameAs": [
        "https://www.linkedin.com/in/christianulstrup/",
        "https://gsdat.work"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "GSD at Work",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gsdat.work/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png",
        "width": 192,
        "height": 192
      },
      "url": "https://gsdat.work"
    },
    "datePublished": formattedDate,
    "dateModified": formattedDate,
    "wordCount": wordCount,
    "timeRequired": `PT${readingTime}M`,
    "articleBody": textContent.substring(0, 500).replace(/"/g, '\\"') + "...",
    "inLanguage": "en-US",
    "genre": categorization.category,
    "keywords": keywords.join(", "),
    "isAccessibleForFree": true,
    "articleSection": categorization.articleSection,
    "about": {
      "@type": "Thing",
      "name": "AI Implementation",
      "description": "Practical application of artificial intelligence in business operations"
    },
    "mentions": categorization.tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    })),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".post-content p:first-of-type", "h1"]
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": `https://gsdat.work/blog/${post.id}`
    }
  };
};

/**
 * Generate Open Graph description optimized for social sharing
 */
export const generateSocialDescription = (
  title: string,
  content: string,
  type: "article" | "post"
): string => {
  const cleanContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Social media descriptions should be more engaging and action-oriented
  const actionWords = [
    'Discover', 'Learn', 'Master', 'Unlock', 'Transform', 'Accelerate',
    'Optimize', 'Implement', 'Achieve', 'Build', 'Create', 'Develop'
  ];
  
  let description = cleanContent.substring(0, 150);
  
  // Try to start with an action word if possible
  const firstSentence = cleanContent.split(/[.!?]/)[0];
  if (firstSentence.length < 150) {
    const hasActionWord = actionWords.some(word => 
      firstSentence.toLowerCase().includes(word.toLowerCase())
    );
    
    if (hasActionWord) {
      description = firstSentence;
    }
  }
  
  // Add engaging suffix based on type
  const suffix = type === "article" ? " 💡 Expert insights inside." : " 🚀 Read more.";
  
  if (description.length + suffix.length > 155) {
    description = description.substring(0, 155 - suffix.length).trim();
  }
  
  return description + suffix;
};