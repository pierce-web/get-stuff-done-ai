/**
 * Keyword optimization utilities for SEO enhancement
 */

// Define keyword categories and their associated terms
export interface KeywordData {
  primary: string[];
  secondary: string[];
  longTail: string[];
  lsi: string[]; // Latent Semantic Indexing keywords
  local: string[];
  commercial: string[];
  informational: string[];
  transactional: string[];
}

export interface KeywordAnalysis {
  title: string;
  content: string;
  currentKeywords: string[];
  recommendedKeywords: string[];
  keywordDensity: Record<string, number>;
  optimization: {
    primary: string[];
    secondary: string[];
    longTail: string[];
    lsi: string[];
  };
}

// Comprehensive keyword database for AI implementation business
export const keywordDatabase: Record<string, KeywordData> = {
  "ai-implementation": {
    primary: [
      "AI implementation",
      "artificial intelligence implementation",
      "AI adoption",
      "AI integration",
      "AI deployment"
    ],
    secondary: [
      "AI strategy",
      "AI consulting",
      "AI transformation",
      "AI solutions",
      "AI services"
    ],
    longTail: [
      "how to implement AI in business",
      "AI implementation best practices",
      "AI implementation guide",
      "AI implementation services",
      "AI implementation consulting",
      "AI implementation strategy",
      "enterprise AI implementation",
      "AI implementation roadmap",
      "AI implementation framework",
      "AI implementation process"
    ],
    lsi: [
      "machine learning",
      "automation",
      "digital transformation",
      "business intelligence",
      "data analytics",
      "process optimization",
      "workflow automation",
      "intelligent automation",
      "cognitive computing",
      "smart technology"
    ],
    local: [
      "AI implementation services",
      "AI consulting services",
      "AI strategy consulting",
      "AI transformation consulting"
    ],
    commercial: [
      "AI implementation services",
      "AI implementation consulting",
      "AI implementation company",
      "AI implementation expert",
      "AI implementation specialist"
    ],
    informational: [
      "what is AI implementation",
      "AI implementation benefits",
      "AI implementation challenges",
      "AI implementation examples",
      "AI implementation case studies"
    ],
    transactional: [
      "AI implementation services",
      "hire AI implementation consultant",
      "AI implementation company",
      "AI implementation pricing",
      "AI implementation cost"
    ]
  },

  "business-automation": {
    primary: [
      "business automation",
      "process automation",
      "workflow automation",
      "business process automation",
      "intelligent automation"
    ],
    secondary: [
      "automation solutions",
      "automation services",
      "automation consulting",
      "automation strategy",
      "automation tools"
    ],
    longTail: [
      "business process automation services",
      "workflow automation solutions",
      "business automation consulting",
      "automation implementation services",
      "business automation strategy",
      "process automation consulting",
      "workflow automation tools",
      "business automation software",
      "automation transformation services",
      "intelligent process automation"
    ],
    lsi: [
      "efficiency",
      "productivity",
      "streamlining",
      "optimization",
      "digital transformation",
      "operational excellence",
      "cost reduction",
      "time savings",
      "scalability",
      "performance improvement"
    ],
    local: [
      "business automation services",
      "process automation consulting",
      "workflow automation services",
      "automation consulting services"
    ],
    commercial: [
      "business automation services",
      "automation consulting",
      "process automation company",
      "automation implementation services",
      "workflow automation solutions"
    ],
    informational: [
      "what is business automation",
      "business automation benefits",
      "types of business automation",
      "business automation examples",
      "business automation guide"
    ],
    transactional: [
      "business automation services",
      "automation consulting services",
      "hire automation consultant",
      "automation implementation cost",
      "business automation pricing"
    ]
  },

  "executive-productivity": {
    primary: [
      "executive productivity",
      "executive efficiency",
      "executive performance",
      "leadership productivity",
      "executive optimization"
    ],
    secondary: [
      "executive coaching",
      "executive development",
      "executive training",
      "executive tools",
      "executive systems"
    ],
    longTail: [
      "executive productivity coaching",
      "executive productivity training",
      "executive productivity tools",
      "executive productivity systems",
      "executive productivity consulting",
      "executive productivity improvement",
      "executive productivity solutions",
      "executive productivity program",
      "executive productivity services",
      "executive productivity transformation"
    ],
    lsi: [
      "time management",
      "decision making",
      "strategic thinking",
      "leadership skills",
      "executive presence",
      "performance optimization",
      "effectiveness",
      "delegation",
      "priority management",
      "executive excellence"
    ],
    local: [
      "executive coaching services",
      "executive productivity consulting",
      "executive training services",
      "executive development programs"
    ],
    commercial: [
      "executive coaching services",
      "executive productivity consulting",
      "executive training programs",
      "executive development services",
      "executive performance coaching"
    ],
    informational: [
      "executive productivity tips",
      "executive productivity strategies",
      "executive productivity best practices",
      "executive productivity methods",
      "executive productivity techniques"
    ],
    transactional: [
      "executive coaching services",
      "executive productivity consulting",
      "hire executive coach",
      "executive coaching cost",
      "executive training programs"
    ]
  },

  "ai-consulting": {
    primary: [
      "AI consulting",
      "AI consultant",
      "AI advisory",
      "AI consulting services",
      "artificial intelligence consulting"
    ],
    secondary: [
      "AI strategy consulting",
      "AI implementation consulting",
      "AI transformation consulting",
      "AI advisory services",
      "AI consulting firm"
    ],
    longTail: [
      "AI consulting services",
      "AI strategy consulting",
      "AI implementation consulting",
      "AI transformation consulting",
      "enterprise AI consulting",
      "AI consulting firm",
      "AI consulting company",
      "AI consulting expert",
      "AI consulting specialist",
      "AI advisory services"
    ],
    lsi: [
      "digital transformation",
      "technology consulting",
      "innovation consulting",
      "strategy consulting",
      "business consulting",
      "management consulting",
      "transformation consulting",
      "technology advisory",
      "digital strategy",
      "business transformation"
    ],
    local: [
      "AI consulting services",
      "AI consultant",
      "AI advisory services",
      "AI consulting firm"
    ],
    commercial: [
      "AI consulting services",
      "hire AI consultant",
      "AI consulting firm",
      "AI consulting company",
      "AI advisory services"
    ],
    informational: [
      "what is AI consulting",
      "AI consulting benefits",
      "AI consulting process",
      "AI consulting services",
      "AI consulting guide"
    ],
    transactional: [
      "AI consulting services",
      "hire AI consultant",
      "AI consulting cost",
      "AI consulting pricing",
      "AI consulting firm"
    ]
  }
};

/**
 * Analyze content for keyword opportunities
 */
export const analyzeKeywords = (
  title: string,
  content: string,
  pageType: 'service' | 'blog' | 'landing' | 'resource' = 'blog'
): KeywordAnalysis => {
  const text = `${title} ${content}`.toLowerCase();
  const words = text.split(/\s+/);
  const totalWords = words.length;

  // Calculate keyword density for all database keywords
  const keywordDensity: Record<string, number> = {};
  const currentKeywords: string[] = [];

  // Check all keyword categories
  Object.values(keywordDatabase).forEach(category => {
    [...category.primary, ...category.secondary, ...category.longTail, ...category.lsi].forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      const regex = new RegExp(`\\b${keywordLower.replace(/\s+/g, '\\s+')}\\b`, 'gi');
      const matches = text.match(regex);
      const count = matches ? matches.length : 0;
      
      if (count > 0) {
        keywordDensity[keyword] = (count / totalWords) * 100;
        currentKeywords.push(keyword);
      }
    });
  });

  // Find the most relevant keyword category
  const categoryScores: Record<string, number> = {};
  Object.entries(keywordDatabase).forEach(([category, keywords]) => {
    let score = 0;
    [...keywords.primary, ...keywords.secondary].forEach(keyword => {
      if (keywordDensity[keyword]) {
        score += keywordDensity[keyword] * (keywords.primary.includes(keyword) ? 2 : 1);
      }
    });
    categoryScores[category] = score;
  });

  // Get the highest scoring category
  const bestCategory = Object.entries(categoryScores)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || 'ai-implementation';

  const relevantKeywords = keywordDatabase[bestCategory];

  // Generate recommendations based on page type and current usage
  const recommendedKeywords: string[] = [];
  
  // Add primary keywords if not well represented
  relevantKeywords.primary.forEach(keyword => {
    if (!keywordDensity[keyword] || keywordDensity[keyword] < 1) {
      recommendedKeywords.push(keyword);
    }
  });

  // Add secondary keywords
  relevantKeywords.secondary.slice(0, 3).forEach(keyword => {
    if (!keywordDensity[keyword] || keywordDensity[keyword] < 0.5) {
      recommendedKeywords.push(keyword);
    }
  });

  // Add long-tail keywords based on page type
  const longTailCount = pageType === 'service' ? 3 : pageType === 'blog' ? 2 : 1;
  relevantKeywords.longTail.slice(0, longTailCount).forEach(keyword => {
    if (!keywordDensity[keyword]) {
      recommendedKeywords.push(keyword);
    }
  });

  // Add LSI keywords
  relevantKeywords.lsi.slice(0, 4).forEach(keyword => {
    if (!keywordDensity[keyword] || keywordDensity[keyword] < 0.3) {
      recommendedKeywords.push(keyword);
    }
  });

  return {
    title,
    content,
    currentKeywords: currentKeywords.slice(0, 10), // Top 10 found keywords
    recommendedKeywords: recommendedKeywords.slice(0, 10), // Top 10 recommendations
    keywordDensity,
    optimization: {
      primary: relevantKeywords.primary.slice(0, 2),
      secondary: relevantKeywords.secondary.slice(0, 3),
      longTail: relevantKeywords.longTail.slice(0, 3),
      lsi: relevantKeywords.lsi.slice(0, 5)
    }
  };
};

/**
 * Generate optimized meta description with target keywords
 */
export const generateKeywordOptimizedDescription = (
  content: string,
  targetKeywords: string[],
  maxLength: number = 155
): string => {
  const cleanContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Try to find a sentence that contains target keywords
  const sentences = cleanContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  for (const sentence of sentences) {
    const sentenceLower = sentence.toLowerCase();
    const hasKeywords = targetKeywords.some(keyword => 
      sentenceLower.includes(keyword.toLowerCase())
    );
    
    if (hasKeywords && sentence.length <= maxLength - 20) {
      return sentence.trim() + ". Get expert guidance today.";
    }
  }
  
  // Fallback: create description with primary keyword
  const primaryKeyword = targetKeywords[0] || "AI implementation";
  const shortContent = cleanContent.substring(0, maxLength - primaryKeyword.length - 30);
  
  return `${shortContent.trim()} Expert ${primaryKeyword} services available.`;
};

/**
 * Generate optimized title with target keywords
 */
export const generateKeywordOptimizedTitle = (
  originalTitle: string,
  targetKeywords: string[],
  pageType: 'service' | 'blog' | 'landing' | 'resource' = 'blog'
): string => {
  const primaryKeyword = targetKeywords[0];
  const maxLength = 60;
  
  // If title already contains primary keyword, return as is
  if (originalTitle.toLowerCase().includes(primaryKeyword?.toLowerCase() || '')) {
    return originalTitle;
  }
  
  // Generate optimized title based on page type
  switch (pageType) {
    case 'service':
      return `${primaryKeyword} Services | ${originalTitle}`.substring(0, maxLength);
    case 'blog':
      return `${originalTitle} | ${primaryKeyword} Guide`.substring(0, maxLength);
    case 'landing':
      return `${primaryKeyword} | ${originalTitle}`.substring(0, maxLength);
    case 'resource':
      return `${originalTitle} - ${primaryKeyword} Resource`.substring(0, maxLength);
    default:
      return originalTitle;
  }
};

/**
 * Suggest internal linking opportunities based on keywords
 */
export const suggestInternalLinks = (
  content: string,
  availablePages: Array<{url: string, title: string, keywords: string[]}>
): Array<{url: string, title: string, anchorText: string, relevanceScore: number}> => {
  const contentLower = content.toLowerCase();
  const suggestions: Array<{url: string, title: string, anchorText: string, relevanceScore: number}> = [];
  
  availablePages.forEach(page => {
    let relevanceScore = 0;
    let bestAnchorText = '';
    
    page.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (contentLower.includes(keywordLower)) {
        const matches = contentLower.match(new RegExp(`\\b${keywordLower.replace(/\s+/g, '\\s+')}\\b`, 'g'));
        if (matches) {
          relevanceScore += matches.length;
          if (!bestAnchorText || keyword.length > bestAnchorText.length) {
            bestAnchorText = keyword;
          }
        }
      }
    });
    
    if (relevanceScore > 0) {
      suggestions.push({
        url: page.url,
        title: page.title,
        anchorText: bestAnchorText,
        relevanceScore
      });
    }
  });
  
  return suggestions
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 5); // Top 5 suggestions
};