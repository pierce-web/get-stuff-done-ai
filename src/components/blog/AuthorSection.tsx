import React from "react";
import { Linkedin } from "lucide-react";

interface AuthorSectionProps {
  showSocial?: boolean;
}

const AuthorSection: React.FC<AuthorSectionProps> = ({ showSocial = true }) => {
  return (
    <div 
      className="flex items-center justify-start bg-white py-5 px-6 rounded-lg shadow-sm border border-gray-100 my-8"
      itemScope 
      itemType="https://schema.org/Person"
    >
      <img 
        src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png" 
        alt="Christian Ulstrup - AI Implementation Expert" 
        className="h-16 w-16 rounded-full mr-5 object-cover border-2 border-secondary/20"
        itemProp="image"
        width="128"
        height="128"
        loading="eager"
      />
      <div>
        <h3 className="font-semibold text-lg text-primary" itemProp="name">
          Christian Ulstrup
        </h3>
        <p className="text-gray-600 text-sm mb-1" itemProp="jobTitle">
          Principal & Founder, GSD at Work LLC
        </p>
        <p className="text-gray-500 text-sm mb-2">
          AI implementation expert helping leaders get tangible results from generative AI
        </p>
        
        {showSocial && (
          <div className="flex space-x-3">
            <a 
              href="https://www.linkedin.com/in/christianulstrup/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/90 flex items-center text-sm"
              aria-label="Christian Ulstrup on LinkedIn"
              itemProp="sameAs"
            >
              <Linkedin className="h-4 w-4 mr-1" />
              <span>LinkedIn</span>
            </a>
          </div>
        )}
        
        <meta itemProp="url" content="https://getstuffdone.ai" />
      </div>
    </div>
  );
};

export default AuthorSection;