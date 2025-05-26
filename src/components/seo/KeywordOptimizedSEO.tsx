
import React from "react";
import { Helmet } from "react-helmet";
import { 
  analyzeKeywords, 
  generateKeywordOptimizedDescription, 
  generateKeywordOptimizedTitle,
  KeywordAnalysis 
} from "@/lib/keyword-optimization";
import { generateFreshnessSignals, generateFreshnessMeta } from "@/lib/content-freshness";

interface KeywordOptimizedSEOProps {
  title: string;
  content: string;
  canonicalUrl: string;
  pageType?: 'service' | 'blog' | 'landing' | 'resource';
  author?: string;
  datePublished?: string;
  dateModified?: string;
  structuredData?: Record<string, unknown>[];
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageAlt?: string;
}

export const KeywordOptimizedSEO: React.FC<KeywordOptimizedSEOProps> = ({
  title,
  content,
  canonicalUrl,
  pageType = 'blog',
  author = "Christian Ulstrup",
  datePublished,
  dateModified,
  structuredData = [],
  ogType = "website",
  ogImage = "https://gsdat.work/og-image.png",
  ogImageAlt = "GSD at Work - AI Implementation Experts"
}) => {
  // Generate content freshness signals
  const freshnessData = generateFreshnessSignals(pageType, datePublished);
  const freshnessMeta = generateFreshnessMeta(freshnessData);
  
  // Analyze content for keyword opportunities
  const keywordAnalysis: KeywordAnalysis = analyzeKeywords(title, content, pageType);
  
  // Generate optimized meta elements
  const optimizedTitle = generateKeywordOptimizedTitle(
    title, 
    keywordAnalysis.optimization.primary, 
    pageType
  );
  
  const optimizedDescription = generateKeywordOptimizedDescription(
    content,
    [...keywordAnalysis.optimization.primary, ...keywordAnalysis.optimization.secondary],
    155
  );
  
  // Combine primary, secondary, and LSI keywords for meta keywords
  const metaKeywords = [
    ...keywordAnalysis.optimization.primary,
    ...keywordAnalysis.optimization.secondary,
    ...keywordAnalysis.optimization.lsi
  ].slice(0, 10).join(", ");
  
  // Generate enhanced structured data with keyword optimization
  const enhancedStructuredData = [...structuredData];
  
  // Add comprehensive Article/WebPage schema if not already present
  const hasMainSchema = structuredData.some(data => 
    data["@type"] === "Article" || data["@type"] === "WebPage" || data["@type"] === "BlogPosting"
  );
  
  if (!hasMainSchema) {
    const mainSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": pageType === 'blog' ? "BlogPosting" : pageType === 'service' ? "Service" : "WebPage",
      "headline": optimizedTitle,
      "description": optimizedDescription,
      "keywords": metaKeywords,
      "url": canonicalUrl,
      "author": {
        "@type": "Person",
        "name": author,
        "jobTitle": "AI Implementation Expert",
        "url": "https://www.linkedin.com/in/christianulstrup/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GSD at Work",
        "url": "https://gsdat.work"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "about": keywordAnalysis.optimization.primary.map(keyword => ({
        "@type": "Thing",
        "name": keyword
      })),
      "mentions": keywordAnalysis.optimization.lsi.map(keyword => ({
        "@type": "Thing",
        "name": keyword
      }))
    };
    
    if (datePublished) {
      mainSchema["datePublished"] = datePublished;
    }
    if (dateModified) {
      mainSchema["dateModified"] = dateModified;
    }
    
    enhancedStructuredData.push(mainSchema);
  }
  
  // Generate breadcrumb schema with keyword-optimized names
  const breadcrumbSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "AI Implementation Services",
        "item": "https://gsdat.work/"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": optimizedTitle,
        "item": canonicalUrl
      }
    ]
  };
  
  enhancedStructuredData.push(breadcrumbSchema);

  return (
    <Helmet>
      {/* Optimized Title and Description */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced Keywords */}
      <meta name="keywords" content={metaKeywords} />
      
      {/* Semantic Keywords for better understanding */}
      <meta name="subject" content={keywordAnalysis.optimization.primary[0]} />
      <meta name="topic" content={keywordAnalysis.optimization.primary.join(", ")} />
      <meta name="summary" content={optimizedDescription} />
      
      {/* Content Classification */}
      <meta name="category" content="AI Implementation" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Enhanced Open Graph with Keywords */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GSD at Work" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific OG tags */}
      {ogType === "article" && (
        <>
          {datePublished && (
            <meta property="article:published_time" content={datePublished} />
          )}
          {dateModified && (
            <meta property="article:modified_time" content={dateModified} />
          )}
          <meta property="article:author" content="https://www.linkedin.com/in/christianulstrup/" />
          <meta property="article:section" content="AI Implementation" />
          {keywordAnalysis.optimization.primary.map((keyword, index) => (
            <meta key={`tag-${index}`} property="article:tag" content={String(keyword)} />
          ))}
        </>
      )}
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:creator" content="@gsdatwork" />
      <meta name="twitter:site" content="@gsdatwork" />
      
      {/* Content Freshness Meta Tags */}
      {freshnessMeta.map((meta, index) => (
        <meta key={`freshness-${index}`} name={meta.name} content={String(meta.content)} />
      ))}
      
      {/* Advanced SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Keyword-specific meta tags for better categorization */}
      <meta name="news_keywords" content={keywordAnalysis.optimization.primary.join(", ")} />
      <meta name="standout" content={canonicalUrl} />
      
      {/* Enhanced JSON-LD Structured Data */}
      {enhancedStructuredData.map((data, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(data, null, 0)}
        </script>
      ))}
      
      {/* FAQ Schema for How-to content */}
      {(title.toLowerCase().includes("how to") || content.toLowerCase().includes("how to")) && (
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "${optimizedTitle.replace(/"/g, '\\"')}",
            "description": "${optimizedDescription.replace(/"/g, '\\"')}",
            "image": "${ogImage}",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Consultation",
                "text": "Schedule a free consultation to discuss your ${keywordAnalysis.optimization.primary[0]} needs"
              },
              {
                "@type": "HowToStep", 
                "name": "Strategy",
                "text": "Develop a customized ${keywordAnalysis.optimization.primary[0]} strategy"
              },
              {
                "@type": "HowToStep",
                "name": "Implementation", 
                "text": "Execute the ${keywordAnalysis.optimization.primary[0]} plan with expert guidance"
              }
            ],
            "totalTime": "PT2H",
            "supply": {
              "@type": "HowToSupply",
              "name": "${keywordAnalysis.optimization.primary[0]} expertise"
            }
          }
        `}</script>
      )}
    </Helmet>
  );
};
