import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Helmet } from "react-helmet";
import { Footer } from "../../components/Footer";
import { Separator } from "../../components/ui/separator";
import { Navigation } from "../../components/navigation/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";
import AuthorSection from "@/components/blog/AuthorSection";

// Import data from generated file
import { linkedInPosts as posts } from "../../lib/linkedin-posts-data";

export default function BlogPage() {
  const [filter, setFilter] = useState("all"); // all, posts, articles
  
  const filteredPosts = filter === "all" 
    ? posts 
    : posts.filter(post => post.type === filter);
    
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Count posts by type
  const articleCount = posts.filter(post => post.type === "article").length;
  const postCount = posts.filter(post => post.type === "post").length;

  // Get latest post date for SEO
  const latestPostDate = sortedPosts.length > 0 
    ? new Date(sortedPosts[0].date).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Professional Insights | GSD at Work - Get Stuff Done with AI Blog</title>
        <meta name="description" content="GSD at Work's AI Implementation Blog: Explore expert insights, strategies, and practical advice on AI implementation, digital transformation, and executive productivity from Christian Ulstrup." />
        <link rel="canonical" href="https://gsdat.work/blog" />
        <link rel="alternate" type="application/rss+xml" title="GSD at Work - Professional Insights" href="https://gsdat.work/feed.xml" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Insights | GSD at Work - AI Implementation Blog" />
        <meta property="og:description" content="Explore expert insights, strategies, and practical advice on AI implementation, digital transformation, and executive productivity from Christian Ulstrup." />
        <meta property="og:url" content="https://gsdat.work/blog" />
        <meta property="og:image" content="https://gsdat.work/og-image.png" />
        <meta property="og:site_name" content="GSD at Work" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Insights | GSD at Work - AI Implementation Blog" />
        <meta name="twitter:description" content="Explore expert insights, strategies, and practical advice on AI implementation, digital transformation, and executive productivity from Christian Ulstrup." />
        <meta name="twitter:image" content="https://gsdat.work/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="author" content="Christian Ulstrup" />
        <meta name="keywords" content="AI implementation, generative AI, business productivity, AI tools, Christian Ulstrup, digital transformation, executive productivity, AI strategy, AI consulting" />
        <meta name="last-modified" content={latestPostDate} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="copyright" content={`© ${new Date().getFullYear()} GSD at Work. All rights reserved.`} />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        <meta name="generator" content="React, Vite" />
        
        {/* Mobile Specific Meta */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* JSON-LD Schema for Blog - More comprehensive */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "Professional Insights | AI Implementation Blog",
            "description": "Expert insights, strategies, and practical advice on AI implementation, digital transformation, and executive productivity.",
            "image": "https://getstuffdone.ai/og-image.png",
            "author": {
              "@type": "Person",
              "name": "Christian Ulstrup",
              "url": "https://gsdat.work",
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
                "width": "192",
                "height": "192"
              },
              "url": "https://gsdat.work",
              "sameAs": [
                "https://www.linkedin.com/company/get-stuff-done-ai"
              ]
            },
            "url": "https://gsdat.work/blog",
            "dateModified": "${latestPostDate}",
            "inLanguage": "en-US",
            "keywords": "AI implementation, generative AI, digital transformation, business productivity, executive productivity, AI tools, AI strategy",
            "isAccessibleForFree": "True",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gsdat.work/blog"
            }
          }
        `}</script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Get Stuff Done AI",
            "url": "https://gsdat.work",
            "logo": "https://gsdat.work/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "christian@gsdat.work",
              "url": "https://gsdat.work"
            },
            "sameAs": [
              "https://www.linkedin.com/company/get-stuff-done-ai"
            ],
            "founder": {
              "@type": "Person",
              "name": "Christian Ulstrup"
            }
          }
        `}</script>
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-5xl">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Professional Insights</h1>
              <a 
                href="/feed.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
                title="Subscribe to RSS Feed"
                aria-label="Subscribe to RSS Feed"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                </svg>
                <span className="ml-2 hidden md:inline">Subscribe</span>
              </a>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Practical insights on AI implementation, digital transformation, and organizational productivity
              from my work with executives and teams around the world.
            </p>
            
            <AuthorSection showSocial={true} />
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <button 
                onClick={() => setFilter("all")}
                className={`px-5 py-2 rounded-md flex items-center ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                <span>All ({posts.length})</span>
              </button>
              <button 
                onClick={() => setFilter("article")}
                className={`px-5 py-2 rounded-md ${filter === "article" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                Articles ({articleCount})
              </button>
              <button 
                onClick={() => setFilter("post")}
                className={`px-5 py-2 rounded-md ${filter === "post" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                Posts ({postCount})
              </button>
            </div>
          </div>
          
          <div 
            className="space-y-8"
            itemScope 
            itemType="https://schema.org/Blog"
          >
            <meta itemProp="name" content="Professional Insights | Christian Ulstrup" />
            <meta itemProp="description" content="Expert insights on AI implementation, digital transformation, and executive productivity." />
            <meta itemProp="author" content="Christian Ulstrup" />
            
            {sortedPosts.map(post => (
              <div 
                key={post.id} 
                className="border rounded-lg p-6 hover:shadow-md transition duration-300"
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="author" content="Christian Ulstrup" />
                <meta itemProp="datePublished" content={`${post.date}T00:00:00Z`} />
                <meta itemProp="publisher" content="Get Stuff Done AI" />
                
                <Link to={`/blog/${post.id}`} className="no-underline block">
                  <h2 
                    className="text-2xl font-semibold mb-3 hover:text-blue-600 line-clamp-2"
                    itemProp="headline"
                    title={post.title} // Show full title on hover
                  >
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center text-gray-500 mb-3 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <time dateTime={post.date} itemProp="datePublished">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <p 
                    className="text-gray-700 line-clamp-3 mb-4"
                    itemProp="abstract"
                  >
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      post.type === "article" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {post.type === "article" ? "Article" : "Post"}
                    </span>
                    <span className="text-blue-600 text-sm flex items-center">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
        
        <Separator />
        <Footer />
      </div>
    </>
  );
}