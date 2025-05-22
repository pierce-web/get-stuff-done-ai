import React from "react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { 
  generateBlogMetaDescription, 
  extractBlogKeywords, 
  categorizeBlogPost,
  generateEnhancedBlogStructuredData,
  generateSocialDescription,
  BlogPost
} from "@/lib/blog-seo-utils";

interface EnhancedBlogPostSEOProps {
  post: BlogPost;
  formattedDate: string;
  textContent: string;
  wordCount: number;
  readingTime: number;
}

export const EnhancedBlogPostSEO: React.FC<EnhancedBlogPostSEOProps> = ({
  post,
  formattedDate,
  textContent,
  wordCount,
  readingTime,
}) => {
  // Generate enhanced SEO elements
  const metaDescription = generateBlogMetaDescription(post.title, post.content, post.type);
  const keywords = extractBlogKeywords(post.title, post.content);
  const categorization = categorizeBlogPost(post.title, post.content);
  const socialDescription = generateSocialDescription(post.title, post.content, post.type);
  
  // Enhanced structured data
  const structuredData = generateEnhancedBlogStructuredData(
    post,
    textContent,
    wordCount,
    readingTime,
    metaDescription,
    keywords,
    categorization
  );
  
  // Generate content-specific title optimization
  const optimizedTitle = post.type === "article" 
    ? `${post.title} | AI Implementation Guide | Christian Ulstrup`
    : `${post.title} | Christian Ulstrup | AI Expert Insights`;
  
  return (
    <KeywordOptimizedSEO 
      title={post.title}
      content={`${post.content} ${metaDescription}`}
      canonicalUrl={`https://gsdat.work/blog/${post.id}`}
      pageType="blog"
      datePublished={`${formattedDate}T00:00:00Z`}
      dateModified={`${formattedDate}T00:00:00Z`}
      structuredData={[structuredData]}
      ogType="article"
    />
  );
  
  /*
  // Keeping the original detailed Helmet implementation as backup
  return (
    <Helmet>
      {/* Enhanced Title and Description */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={`https://gsdat.work/blog/${post.id}`} />
      
      {/* Enhanced Keywords */}
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="article:tag" content={categorization.tags.join(", ")} />
      <meta name="article:section" content={categorization.articleSection} />
      
      {/* Content Classification */}
      <meta name="article:category" content={categorization.category} />
      <meta name="content-type" content={post.type} />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={`https://gsdat.work/blog/${post.id}`} />
      <meta property="og:image" content="https://gsdat.work/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${post.title} - AI Implementation Insights`} />
      <meta property="article:published_time" content={`${formattedDate}T00:00:00Z`} />
      <meta property="article:modified_time" content={`${formattedDate}T00:00:00Z`} />
      <meta property="article:author" content="https://www.linkedin.com/in/christianulstrup/" />
      <meta property="article:section" content={categorization.articleSection} />
      <meta property="og:site_name" content="GSD at Work" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content="https://gsdat.work/og-image.png" />
      <meta name="twitter:image:alt" content={`${post.title} - AI Implementation Insights`} />
      <meta name="twitter:creator" content="@gsdatwork" />
      <meta name="twitter:site" content="@gsdatwork" />
      
      {/* Additional Article Meta */}
      <meta name="author" content="Christian Ulstrup" />
      <meta name="article:author" content="Christian Ulstrup" />
      <meta name="article:reading_time" content={`${readingTime} minutes`} />
      <meta name="article:word_count" content={wordCount.toString()} />
      
      {/* Enhanced SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Content Freshness */}
      <meta name="revised" content={formattedDate} />
      <meta name="last-modified" content={`${formattedDate}T00:00:00Z`} />
      
      {/* Mobile and Performance */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Enhanced JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 0)}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gsdat.work/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Professional Insights",
              "item": "https://gsdat.work/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "${categorization.category}",
              "item": "https://gsdat.work/blog?category=${categorization.category.toLowerCase().replace(/\s+/g, '-')}"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "${post.title.replace(/"/g, '\\"')}",
              "item": "https://gsdat.work/blog/${post.id}"
            }
          ]
        }
      `}</script>
      
      {/* FAQ Schema for How-to Articles */}
      {post.type === "article" && post.content.includes("how to") && (
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "${post.title.replace(/"/g, '\\"')}",
            "description": "${metaDescription.replace(/"/g, '\\"')}",
            "image": "https://gsdat.work/og-image.png",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "totalTime": "PT${readingTime}M",
            "supply": {
              "@type": "HowToSupply",
              "name": "AI Tools and Knowledge"
            },
            "tool": {
              "@type": "HowToTool",
              "name": "AI Implementation Expertise"
            }
          }
        `}</script>
      )}
      
      {/* Author Schema */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Christian Ulstrup",
          "jobTitle": "AI Implementation Expert",
          "url": "https://gsdat.work",
          "sameAs": [
            "https://www.linkedin.com/in/christianulstrup/"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "GSD at Work",
            "url": "https://gsdat.work",
            "description": "Expert AI consulting and implementation services"
          },
          "knowsAbout": [
            "Artificial Intelligence",
            "AI Implementation",
            "Business Automation",
            "Digital Transformation",
            "Productivity Optimization"
          ]
        }
      `}</script>
    </Helmet>
  );
  */
};