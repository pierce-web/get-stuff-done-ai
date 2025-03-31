import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Helmet } from "react-helmet";
import { Footer } from "../../components/Footer";
import { Separator } from "../../components/ui/separator";
import { Navigation } from "../../components/navigation/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Helmet>
        <title>Professional Insights | Christian Ulstrup | Get Stuff Done AI</title>
        <meta name="description" content="Explore articles and insights on AI strategy, digital transformation, and executive productivity." />
        <link rel="canonical" href="https://getstuffdone.ai/blog" />
        <meta property="og:title" content="Professional Insights | Christian Ulstrup | Get Stuff Done AI" />
        <meta property="og:description" content="Explore articles and insights on AI strategy, digital transformation, and executive productivity." />
        <meta property="og:url" content="https://getstuffdone.ai/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Insights | Christian Ulstrup | Get Stuff Done AI" />
        <meta name="twitter:description" content="Explore articles and insights on AI strategy, digital transformation, and executive productivity." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 max-w-5xl">
          <h1 className="text-4xl font-bold mb-8">Professional Insights</h1>
          
          <div className="mb-8">
            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter("article")}
                className={`px-4 py-2 rounded-md ${filter === "article" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
              >
                Articles
              </button>
              <button 
                onClick={() => setFilter("post")}
                className={`px-4 py-2 rounded-md ${filter === "post" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
              >
                Posts
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            {sortedPosts.map(post => (
              <div key={post.id} className="border rounded-lg p-6 hover:shadow-md transition duration-300">
                <Link to={`/blog/${post.id}`} className="no-underline">
                  <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
                  <p className="text-gray-500 mb-2 text-sm">{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                  })}</p>
                  <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      post.type === "article" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {post.type === "article" ? "Article" : "Post"}
                    </span>
                    <span className="text-blue-600 text-sm">Read more →</span>
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