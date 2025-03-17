
import React from "react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import FloatingNavigation from "@/components/ai-report/FloatingNavigation";

interface ReportLayoutProps {
  children: React.ReactNode;
}

const ReportLayout: React.FC<ReportLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              <span className="flex items-center">
                <img 
                  src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
                  alt="GSD" 
                  className="h-6 w-6 mr-1"
                />
                <span>Back to <span className="font-medium">at Work</span></span>
              </span>
            </Link>
          </div>

          {children}
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
};

export default ReportLayout;
