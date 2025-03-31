
import React from "react";
import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string;
  structuredData?: Record<string, any>[];
  author?: string;
}

/**
 * Reusable SEO component to ensure consistent metadata across all pages
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = "https://gsdat.work/",
  ogType = "website",
  ogImage = "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
  ogImageAlt = "GSD at Work - AI Implementation Experts",
  keywords = "AI consulting, AI implementation, artificial intelligence, business automation, AI strategy",
  structuredData = [],
  author = "Christian Ulstrup"
}) => {
  const fullTitle = title.includes("GSD") || title.includes("Get Stuff Done") 
    ? title 
    : `${title} | Get Stuff Done with AI`;

  // Ensure canonical URL is properly formatted
  const resolvedCanonicalUrl = (() => {
    if (canonicalUrl.startsWith("http")) {
      return canonicalUrl;
    }
    
    const baseUrl = "https://gsdat.work";
    return `${baseUrl}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`;
  })();

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={resolvedCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Get Stuff Done AI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:creator" content="@gsdatwork" />
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
