import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Helmet } from "react-helmet";
import { Footer } from "../Footer";
import { Separator } from "../ui/separator";
import { Navigation } from "../navigation/Navigation";
import { Link } from "react-router-dom";

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

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Helmet>
        <title>{post.title} | Christian Ulstrup | Get Stuff Done AI</title>
        <meta name="description" content={`${post.content.substring(0, 155)}...`} />
        <link rel="canonical" href={`https://getstuffdone.ai/blog/${post.id}`} />
        <meta property="og:title" content={`${post.title} | Christian Ulstrup | Get Stuff Done AI`} />
        <meta property="og:description" content={`${post.content.substring(0, 155)}...`} />
        <meta property="og:url" content={`https://getstuffdone.ai/blog/${post.id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Christian Ulstrup | Get Stuff Done AI`} />
        <meta name="twitter:description" content={`${post.content.substring(0, 155)}...`} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-3xl">
          <Link to="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to all posts
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  post.type === "article" 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-green-100 text-green-800"
                }`}>
                  {post.type === "article" ? "Article" : "Post"}
                </span>
              </div>
            </header>
            
            <div 
              className="post-content prose prose-lg max-w-none leading-relaxed
                prose-headings:font-bold prose-headings:text-blue-900 prose-headings:mt-10 prose-headings:mb-6
                prose-p:my-6 prose-p:leading-relaxed prose-p:text-gray-800 prose-p:text-lg
                prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-blockquote:bg-blue-50 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700
                prose-strong:text-blue-800 prose-em:text-blue-800
                prose-ol:my-8 prose-ol:pl-8 prose-ol:list-decimal prose-ol:space-y-4
                prose-ul:my-8 prose-ul:pl-8 prose-ul:list-disc prose-ul:space-y-4
                prose-li:my-3 prose-li:pl-2 prose-li:marker:text-blue-600
                prose-img:rounded-md prose-img:shadow-md prose-img:my-10
                [&>br]:my-6
                [&>p>br]:hidden
                [&>p]:whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {post.originalUrl && (
              <div className="mt-12 p-5 bg-blue-50 rounded-lg border border-blue-100">
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  This content was originally published on LinkedIn
                  <a 
                    href={post.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-2 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
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