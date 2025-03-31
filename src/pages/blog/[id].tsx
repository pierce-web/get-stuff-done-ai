import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { useParams, Navigate } from "react-router-dom";
import BlogPost from "../../components/blog/BlogPost";
import { linkedInPosts } from "../../lib/linkedin-posts-data";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  
  // Find the post in our data
  const post = linkedInPosts.find(post => post.id === id);
  
  // If no post is found, redirect to blog index
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return <BlogPost post={post} />;
}