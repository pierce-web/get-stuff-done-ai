
import React from "react";
import { Link } from "react-router-dom";

export const BackToBlogs: React.FC = () => {
  return (
    <Link to="/blog" className="text-secondary hover:text-secondary/80 hover:underline mb-6 inline-block flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to all posts
    </Link>
  );
};
