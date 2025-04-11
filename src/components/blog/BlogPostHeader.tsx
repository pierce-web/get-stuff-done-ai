
import React from "react";
import { Calendar, Clock } from "lucide-react";
import AuthorSection from "./AuthorSection";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  readingTime: number;
  type: "article" | "post";
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ 
  title, 
  date, 
  readingTime,
  type
}) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4 break-words" itemProp="headline">{title}</h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
          <time dateTime={new Date(date).toISOString().split('T')[0]} itemProp="datePublished">
            {new Date(date).toLocaleDateString('en-US', {
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
          type === "article" 
            ? "bg-blue-100 text-blue-800" 
            : "bg-green-100 text-green-800"
        } self-start sm:self-auto`}>
          {type === "article" ? "Article" : "Post"}
        </span>
      </div>
      
      <AuthorSection />
    </header>
  );
};
