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
  
  // Ensure all data is properly serialized before passing to Helmet
  const cleanStructuredData = JSON.parse(JSON.stringify([structuredData]));
  
  return (
    <KeywordOptimizedSEO 
      title={String(post.title)}
      content={String(`${post.content} ${metaDescription}`)}
      canonicalUrl={`https://gsdat.work/blog/${post.id}`}
      pageType="blog"
      datePublished={`${formattedDate}T00:00:00Z`}
      dateModified={`${formattedDate}T00:00:00Z`}
      structuredData={cleanStructuredData}
      ogType="article"
    />
  );
};