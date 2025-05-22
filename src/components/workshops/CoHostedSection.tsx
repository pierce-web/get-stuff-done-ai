
import React from "react";

interface CoHostedSectionProps {
  meliorUrl: string;
  homeUrl: string;
}

export const CoHostedSection: React.FC<CoHostedSectionProps> = ({ meliorUrl, homeUrl }) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 border-t border-b border-gray-100 py-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm uppercase font-medium mb-2">Co-hosted by</p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center">
                <a 
                  href={meliorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className="bg-gray-800 p-2 rounded-md">
                    <img 
                      src="/lovable-uploads/43198a75-4248-4d5e-8c90-32a39c77889e.png" 
                      alt="Melior Legal Technology - Workshop Co-host Logo" 
                      className="h-10"
                    />
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mx-4 hidden md:block">&</span>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <a 
                  href={homeUrl}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
                    alt="GSD at Work Logo" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
