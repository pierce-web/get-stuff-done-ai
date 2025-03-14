
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Share2, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const TableOfContents = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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

  const tocItems = [
    { id: "introduction", label: "1. Introduction" },
    { id: "why-invest", label: "2. Why Invest in AI Tools" },
    { id: "core-categories", label: "3. Core AI Categories" },
    { id: "cost-estimates", label: "4. Tool Cost Estimates" },
    { id: "budget-tiers", label: "5. Budget Tiers" },
    { id: "per-employee", label: "6. Per-Employee Budgeting" },
    { id: "calculator", label: "7. Interactive Calculator" },
    { id: "practical-tips", label: "8. Practical Tips" },
    { id: "conclusion", label: "9. Conclusion" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          variant="outline"
          size="sm"
          className="fixed top-4 right-4 z-50 rounded-full p-2 shadow-md bg-white"
          onClick={toggleExpanded}
        >
          {isExpanded ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      )}

      {/* Table of contents */}
      <div 
        className={`
          ${isMobile ? 'fixed top-0 right-0 bottom-0 z-40 w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out p-4 overflow-y-auto' : 'sticky top-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm'} 
          ${isMobile && !isExpanded ? 'translate-x-full' : 'translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Table of Contents</h3>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1" 
              onClick={toggleExpanded}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>

        <nav className="mt-2 mb-6">
          <ul className="space-y-2 text-sm">
            {tocItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="block py-1.5 px-3 hover:bg-gray-100 rounded-md cursor-pointer transition-all"
                  activeClass="bg-gray-100 text-secondary font-medium"
                  onClick={() => isMobile && setIsExpanded(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          onClick={handleShare}
          variant="outline"
          className="w-full justify-center gap-2 mt-2"
          size="sm"
        >
          <Share2 className="h-4 w-4" />
          <span>Share Report</span>
        </Button>
      </div>
    </>
  );
};

export default TableOfContents;
