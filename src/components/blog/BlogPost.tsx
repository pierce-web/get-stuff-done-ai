
import React from "react";
import DOMPurify from 'dompurify';
import { Footer } from "../Footer";
import { Separator } from "../ui/separator";
import { Navigation } from "../navigation/Navigation";
import { SEOHead } from "../SEOHead";
import { BlogBreadcrumb } from "./BlogBreadcrumb";
import { BackToBlogs } from "./BackToBlogs";
import { BlogPostHeader } from "./BlogPostHeader";
import { OriginalPostLink } from "./OriginalPostLink";
import EnhancedCTASection from "./EnhancedCTASection";
import { RelatedPosts } from "./RelatedPosts";
import { extractTextFromHTML, getWordCount, calculateReadingTime } from "@/lib/html-utils";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    date: string;
    content: string;
    type: "article" | "post";
    originalUrl?: string;
  };
  allPosts?: Array<{
    id: string;
    title: string;
    date: string;
    content: string;
    type: "article" | "post";
  }>;
}

export default function BlogPost({ post, allPosts = [] }: BlogPostProps) {
  // Calculate estimated reading time
  const textContent = extractTextFromHTML(post.content);
  const wordCount = getWordCount(post.content);
  const readingTime = calculateReadingTime(post.content);
  
  // Format the date for SEO
  const formattedDate = new Date(post.date).toISOString().split('T')[0];

  return (
    <>
      <SEOHead 
        title={`${post.title} | Professional Insights | Christian Ulstrup`}
        description={textContent.substring(0, 160)}
        canonicalUrl={`https://gsdat.work/blog/${post.id}`}
        keywords={`AI implementation, ${post.title.split(' ').slice(0, 3).join(', ')}`}
        ogType="article"
      />

      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-3xl">
          <BlogBreadcrumb title={post.title} postId={post.id} />
          
          <BackToBlogs />
          
          <article 
            className="prose prose-lg max-w-none"
            itemScope 
            itemType="https://schema.org/BlogPosting"
          >
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="author" content="Christian Ulstrup" />
            <meta itemProp="datePublished" content={`${formattedDate}T00:00:00Z`} />
            <meta itemProp="dateModified" content={`${formattedDate}T00:00:00Z`} />
            <meta itemProp="publisher" content="GSD at Work" />
            <meta itemProp="image" content="https://gsdat.work/og-image.png" />
            <meta itemProp="wordCount" content={wordCount.toString()} />
            <meta itemProp="timeRequired" content={`PT${readingTime}M`} />
            <meta itemProp="inLanguage" content="en-US" />
            <meta itemProp="genre" content="AI Implementation" />
            
            <BlogPostHeader 
              title={post.title}
              date={post.date}
              readingTime={readingTime}
              type={post.type}
            />
            
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
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
              itemProp="articleBody"
            />
            
            <EnhancedCTASection 
              blogTitle={post.title}
              blogContent={post.content}
              blogType={post.type}
            />
            
            <OriginalPostLink url={post.originalUrl} />
          </article>
          
          {/* Related Posts Section */}
          {allPosts.length > 0 && (
            <RelatedPosts 
              currentPost={post}
              allPosts={allPosts}
            />
          )}
        </main>
        
        <Separator />
        <Footer />
      </div>
    </>
  );
}
