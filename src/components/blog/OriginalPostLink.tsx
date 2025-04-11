
import React from "react";
import { ExternalLink } from "lucide-react";

interface OriginalPostLinkProps {
  url: string;
}

export const OriginalPostLink: React.FC<OriginalPostLinkProps> = ({ url }) => {
  if (!url) return null;
  
  return (
    <div className="mt-10 p-5 bg-secondary/5 rounded-lg border border-secondary/20">
      <p className="flex flex-wrap items-center gap-3 text-gray-700">
        <ExternalLink className="h-5 w-5 text-secondary" />
        <span>This content was originally published on LinkedIn</span>
        <a 
          href={url} 
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
  );
};
