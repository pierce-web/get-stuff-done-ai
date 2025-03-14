
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportHeader = () => {
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.href;
    const title = "2025 AI Tooling & Budget Report by GSD at Work";
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
        toast({
          title: "Report shared successfully",
          description: "Thanks for spreading the word!",
        });
      } catch (error) {
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Link copied to clipboard",
      description: "You can now paste it anywhere to share the report",
    });
  };
  
  return (
    <header className="py-6 px-4 md:px-6 mb-8 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-secondary mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              2025 AI Tooling & Budget Report
            </h1>
          </div>

          <Button 
            onClick={handleShare} 
            variant="outline"
            className="gap-2 whitespace-nowrap"
            size="sm"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share Report</span>
            <span className="sm:hidden">Share</span>
          </Button>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span className="inline-block bg-secondary/10 text-secondary font-medium px-2 py-1 rounded-full text-xs">
            Updated April 2024
          </span>
          <span className="mx-2">·</span>
          <span>10 min read</span>
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
