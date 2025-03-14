
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, LineChart, Sparkles } from "lucide-react";

const ReportHeader = () => {
  return (
    <header className="mb-16 text-center">
      <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-bl-full" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-tr-full" aria-hidden="true"></div>
        
        <div className="relative">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="px-4 py-1 bg-white text-secondary border-secondary">
              <CalendarDays className="mr-1 h-3 w-3" aria-hidden="true" /> Updated for 2025
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The 2025 AI Tooling & Budget Report
          </h1>
          
          <div className="flex flex-col items-center mb-8">
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-3">
              How to Equip Your Team for Quick Wins and Right-Sized Steps Toward Long-Term Transformation
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-secondary" aria-hidden="true" />
              <span>7-minute read</span>
              <span className="mx-2" aria-hidden="true">•</span>
              <LineChart className="h-4 w-4 text-secondary" aria-hidden="true" />
              <span>Updated quarterly</span>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" aria-hidden="true"></div>
          
          <div className="flex items-center justify-center bg-white py-4 px-6 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto relative" itemScope itemType="https://schema.org/Person">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 text-xs text-gray-500 border border-gray-100 rounded-full">
              Author
            </div>
            <img 
              src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png" 
              alt="Christian Ulstrup - AI Implementation Expert" 
              className="h-12 w-12 rounded-full mr-4 object-cover border-2 border-gray-200"
              itemProp="image"
              width="48"
              height="48"
              loading="eager"
            />
            <div className="text-left">
              <p className="font-medium text-gray-800" itemProp="name">
                Christian Ulstrup
              </p>
              <p className="text-gray-500 text-sm" itemProp="jobTitle">
                Principal & Founder, GSD at Work LLC
              </p>
              <meta itemProp="url" content="https://www.linkedin.com/in/christianulstrup/" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
