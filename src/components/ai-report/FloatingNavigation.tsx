
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronUp, ListOrdered, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingNavigation = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      // Show back to top after scrolling down a bit
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      // Show navigation after scrolling past the initial content
      if (window.scrollY > 600) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      
      // Determine active section for highlighting
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentActive = section.id;
        }
      });
      
      setActiveSection(currentActive);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  
  const sections = [
    { id: "introduction", label: "1" },
    { id: "why-invest", label: "2" },
    { id: "core-categories", label: "3" },
    { id: "cost-estimates", label: "4" },
    { id: "budget-tiers", label: "5" },
    { id: "per-employee", label: "6" },
    { id: "calculator", label: "7" },
    { id: "practical-tips", label: "8" },
    { id: "conclusion", label: "9" },
  ];

  if (!showNav && !showBackToTop) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-30">
      {/* Mobile-friendly navigation */}
      {showNav && (
        <div className="bg-white shadow-lg rounded-full border border-gray-100 p-1.5 flex items-center">
          <Link
            to="calculator"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="mr-2 flex-shrink-0"
          >
            <Button 
              size="sm" 
              className="h-8 bg-secondary text-white hover:bg-secondary/90 rounded-full px-3"
            >
              Calculator
            </Button>
          </Link>
          
          {!isMobile && (
            <>
              <div className="flex items-center space-x-1 px-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-8 h-8 p-0 rounded-full ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-gray-500 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {section.label}
                    </Button>
                  </Link>
                ))}
              </div>
              
              <Button 
                variant="outline"
                size="sm" 
                className="ml-1 rounded-full h-8 w-8 p-0"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </>
          )}
          
          {isMobile && (
            <Button 
              variant="outline"
              size="sm" 
              className="rounded-full h-8 w-8 p-0"
              asChild
            >
              <Link
                to="introduction"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <ListOrdered className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      )}
      
      {/* Back to top button */}
      {showBackToTop && (
        <Link
          to="introduction"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <Button
            size="sm"
            variant="outline"
            className="h-10 w-10 rounded-full p-0 shadow-md bg-white hover:bg-gray-50"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default FloatingNavigation;
