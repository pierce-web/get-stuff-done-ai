
import React from "react";
import { Helmet } from "react-helmet-async";

interface BlogPostSEOProps {
  post: {
    id: string;
    title: string;
    date: string;
    content: string;
  };
  formattedDate: string;
  textContent: string;
  wordCount: number;
  readingTime: number;
}

export const BlogPostSEO: React.FC<BlogPostSEOProps> = ({
  post,
  formattedDate,
  textContent,
  wordCount,
  readingTime,
}) => {
  return (
    <Helmet>
      <title>{post.title} | Christian Ulstrup | Get Stuff Done AI</title>
      <meta name="description" content={`${textContent.substring(0, 155)}...`} />
      <link rel="canonical" href={`https://gsdat.work/blog/${post.id}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={`${textContent.substring(0, 155)}...`} />
      <meta property="og:url" content={`https://gsdat.work/blog/${post.id}`} />
      <meta property="og:image" content="https://gsdat.work/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="article:published_time" content={`${formattedDate}T00:00:00Z`} />
      <meta property="article:author" content="https://www.linkedin.com/in/christianulstrup/" />
      <meta property="og:site_name" content="Get Stuff Done AI" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={`${textContent.substring(0, 155)}...`} />
      <meta name="twitter:image" content="https://gsdat.work/og-image.png" />
      
      {/* Additional SEO */}
      <meta name="author" content="Christian Ulstrup" />
      <meta name="keywords" content={`AI implementation, generative AI, business productivity, AI tools, digital transformation, ${post.title.substring(0, 50)}`} />
      
      {/* Enhanced SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} Get Stuff Done AI. All rights reserved.`} />
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      <meta name="generator" content="React, Vite" />
      
      {/* Mobile Specific Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* JSON-LD Schema for BlogPosting - Enhanced for SEO */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://gsdat.work/blog/${post.id}"
          },
          "headline": "${post.title.replace(/"/g, '\\"')}",
          "description": "${textContent.substring(0, 155).replace(/"/g, '\\"')}...",
          "image": {
            "@type": "ImageObject",
            "url": "https://gsdat.work/og-image.png",
            "width": "1200",
            "height": "630"
          },
          "author": {
            "@type": "Person",
            "name": "Christian Ulstrup",
            "url": "https://www.linkedin.com/in/christianulstrup/",
            "jobTitle": "AI Implementation Expert",
            "sameAs": [
              "https://www.linkedin.com/in/christianulstrup/",
              "https://getstuffdone.ai"
            ]
          },
          "publisher": {
            "@type": "Organization",
            "name": "Get Stuff Done AI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://gsdat.work/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png",
              "width": "192",
              "height": "192"
            },
            "url": "https://gsdat.work"
          },
          "datePublished": "${formattedDate}T00:00:00Z",
          "dateModified": "${formattedDate}T00:00:00Z",
          "wordCount": "${wordCount}",
          "timeRequired": "PT${readingTime}M",
          "articleBody": "${textContent.substring(0, 500).replace(/"/g, '\\"')}...",
          "inLanguage": "en-US",
          "genre": "AI Implementation",
          "keywords": "AI implementation, generative AI, business productivity, AI tools, digital transformation, ${post.title.replace(/"/g, '\\"').substring(0, 50)}",
          "isAccessibleForFree": "True",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".post-content p:first-of-type", "h1"]
          },
          "articleSection": "Professional Insights"
        }
      `}</script>
      
      {/* Person Schema for Author */}
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
            "name": "Get Stuff Done AI",
            "url": "https://gsdat.work"
          }
        }
      `}</script>
    </Helmet>
  );
};
