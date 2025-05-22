import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categorizeBlogPost, extractBlogKeywords } from "@/lib/blog-seo-utils";

interface RelatedPost {
  id: string;
  title: string;
  date: string;
  content: string;
  type: "article" | "post";
}

interface RelatedPostsProps {
  currentPost: RelatedPost;
  allPosts: RelatedPost[];
  maxPosts?: number;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  currentPost,
  allPosts,
  maxPosts = 3
}) => {
  // Find related posts based on keyword similarity and category
  const findRelatedPosts = (): RelatedPost[] => {
    const currentKeywords = extractBlogKeywords(currentPost.title, currentPost.content);
    const currentCategorization = categorizeBlogPost(currentPost.title, currentPost.content);
    
    // Score posts based on similarity
    const scoredPosts = allPosts
      .filter(post => post.id !== currentPost.id) // Exclude current post
      .map(post => {
        const postKeywords = extractBlogKeywords(post.title, post.content);
        const postCategorization = categorizeBlogPost(post.title, post.content);
        
        let score = 0;
        
        // Category match bonus
        if (postCategorization.category === currentCategorization.category) {
          score += 10;
        }
        
        // Keyword overlap scoring
        const keywordOverlap = currentKeywords.filter(keyword => 
          postKeywords.includes(keyword)
        ).length;
        score += keywordOverlap * 5;
        
        // Tag overlap scoring
        const tagOverlap = currentCategorization.tags.filter(tag =>
          postCategorization.tags.includes(tag)
        ).length;
        score += tagOverlap * 3;
        
        // Title similarity (simple word overlap)
        const currentTitleWords = currentPost.title.toLowerCase().split(/\s+/);
        const postTitleWords = post.title.toLowerCase().split(/\s+/);
        const titleOverlap = currentTitleWords.filter(word => 
          postTitleWords.includes(word) && word.length > 3
        ).length;
        score += titleOverlap * 2;
        
        // Recency bonus (prefer newer content)
        const postDate = new Date(post.date);
        const monthsAgo = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
        if (monthsAgo < 3) score += 2;
        else if (monthsAgo < 6) score += 1;
        
        return { post, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, maxPosts)
      .map(item => item.post);
    
    return scoredPosts;
  };
  
  const relatedPosts = findRelatedPosts();
  
  if (relatedPosts.length === 0) {
    return null;
  }
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };
  
  return (
    <section className="mt-16 border-t pt-12" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Related Articles" />
      <meta itemProp="description" content="Related AI implementation articles and insights" />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Continue Reading
        </h2>
        <p className="text-gray-600">
          More insights on AI implementation and business transformation
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post, index) => {
          const categorization = categorizeBlogPost(post.title, post.content);
          const readingTime = calculateReadingTime(post.content);
          
          return (
            <Card 
              key={post.id} 
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-secondary/30"
              itemScope 
              itemType="https://schema.org/BlogPosting"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <meta itemProp="url" content={`https://gsdat.work/blog/${post.id}`} />
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                  >
                    {categorization.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {readingTime} min
                  </div>
                </div>
                
                <CardTitle 
                  className="text-lg leading-tight group-hover:text-secondary transition-colors line-clamp-2"
                  itemProp="headline"
                >
                  <Link 
                    to={`/blog/${post.id}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                
                <meta itemProp="datePublished" content={new Date(post.date).toISOString()} />
                <meta itemProp="author" content="Christian Ulstrup" />
                <meta itemProp="publisher" content="GSD at Work" />
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription 
                  className="text-sm text-gray-600 mb-4 line-clamp-3"
                  itemProp="description"
                >
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {formatDate(post.date)}
                  </span>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          to="/blog"
          className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
        >
          View All Articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};