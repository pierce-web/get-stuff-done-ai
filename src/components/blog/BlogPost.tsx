
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Helmet } from "react-helmet";
import { Footer } from "../Footer";
import { Separator } from "../ui/separator";
import { Navigation } from "../navigation/Navigation";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    date: string;
    content: string;
    type: "article" | "post";
    originalUrl?: string;
  };
}

// Import the new components
import AuthorSection from "./AuthorSection";
import CTASection from "./CTASection";

export default function BlogPost({ post }: BlogPostProps) {
  // Calculate estimated reading time
  const wordsPerMinute = 200;
  const textContent = post.content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  // Format the date for SEO
  const formattedDate = new Date(post.date).toISOString().split('T')[0];

  return (
    <>
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

      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-3xl">
          {/* Breadcrumb Navigation with Schema.org markup */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol 
              className="flex items-center space-x-2 text-sm text-gray-600"
              itemScope 
              itemType="https://schema.org/BreadcrumbList"
            >
              <li 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <Link 
                  to="/" 
                  className="text-gray-500 hover:text-primary"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                  <meta itemProp="position" content="1" />
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <Link 
                  to="/blog" 
                  className="text-gray-500 hover:text-primary"
                  itemProp="item"
                >
                  <span itemProp="name">Blog</span>
                  <meta itemProp="position" content="2" />
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
                className="text-secondary font-medium truncate max-w-[200px] sm:max-w-xs"
              >
                <span itemProp="name">{post.title}</span>
                <meta 
                  itemProp="item" 
                  content={`https://gsdat.work/blog/${post.id}`} 
                />
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>
          
          {/* Legacy Back Link (kept for compatibility) */}
          <Link to="/blog" className="text-secondary hover:text-secondary/80 hover:underline mb-6 inline-block flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
          
          <article 
            className="prose prose-lg max-w-none"
            itemScope 
            itemType="https://schema.org/BlogPosting"
          >
            <meta itemProp="author" content="Christian Ulstrup" />
            <meta itemProp="datePublished" content={`${formattedDate}T00:00:00Z`} />
            <meta itemProp="dateModified" content={`${formattedDate}T00:00:00Z`} />
            <meta itemProp="publisher" content="Get Stuff Done AI" />
            <meta itemProp="image" content="https://gsdat.work/og-image.png" />
            
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 break-words" itemProp="headline">{post.title}</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                  <time dateTime={formattedDate} itemProp="datePublished">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                  <span>{readingTime} min read</span>
                </div>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  post.type === "article" 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-green-100 text-green-800"
                } self-start sm:self-auto`}>
                  {post.type === "article" ? "Article" : "Post"}
                </span>
              </div>
              
              <AuthorSection />
            </header>
            
            <div 
              className="post-content prose prose-lg max-w-none leading-relaxed
                prose-headings:font-bold prose-headings:text-primary prose-headings:mt-10 prose-headings:mb-6
                prose-p:my-6 prose-p:leading-relaxed prose-p:text-gray-800 prose-p:text-lg
                prose-a:text-secondary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-blockquote:bg-secondary/5 prose-blockquote:border-l-4 prose-blockquote:border-secondary/50 
                prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700
                prose-strong:text-primary prose-em:text-primary
                prose-ol:my-8 prose-ol:pl-8 prose-ol:list-decimal prose-ol:space-y-5
                prose-ul:my-8 prose-ul:pl-8 prose-ul:list-disc prose-ul:space-y-5
                prose-li:my-4 prose-li:pl-2 prose-li:marker:text-secondary
                prose-img:rounded-md prose-img:shadow-md prose-img:my-10
                [&>ol]:list-decimal [&>ul]:list-disc [&>ol]:pl-8 [&>ul]:pl-8
                [&>ol>li]:my-4 [&>ul>li]:my-4 [&>ol]:my-8 [&>ul]:my-8 [&>ol]:space-y-4 [&>ul]:space-y-4
                space-y-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
              itemProp="articleBody"
            />
            
            <CTASection />
            
            {post.originalUrl && (
              <div className="mt-10 p-5 bg-secondary/5 rounded-lg border border-secondary/20">
                <p className="flex flex-wrap items-center gap-3 text-gray-700">
                  <ExternalLink className="h-5 w-5 text-secondary" />
                  <span>This content was originally published on LinkedIn</span>
                  <a 
                    href={post.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-1.5 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium rounded-full transition-colors shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    View original post
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </p>
              </div>
            )}
          </article>
        </main>
        
        <Separator />
        <Footer />
      </div>
    </>
  );
}
