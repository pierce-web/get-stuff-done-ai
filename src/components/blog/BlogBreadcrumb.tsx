
import React from "react";
import { Link } from "react-router-dom";

interface BlogBreadcrumbProps {
  title: string;
  postId: string;
}

export const BlogBreadcrumb: React.FC<BlogBreadcrumbProps> = ({ title, postId }) => {
  return (
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
          <span itemProp="name">{title}</span>
          <meta 
            itemProp="item" 
            content={`https://gsdat.work/blog/${postId}`} 
          />
          <meta itemProp="position" content="3" />
        </li>
      </ol>
    </nav>
  );
};
