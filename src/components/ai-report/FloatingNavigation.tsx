
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, List, Download, Share } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const toggleVisibility = () => {
      // Show navigation after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Track which section is currently in view
    const trackActiveSection = () => {
      const sections = [
        "introduction",
        "why-invest",
        "budget-calculator",
        "core-categories",
        "cost-estimates",
        "budget-tiers",
        "per-employee",
        "practical-tips",
        "conclusion"
      ];
      
      // Find the section that is most in view
      let currentSection = sections[0];
      let maxVisibility = 0;
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility = Math.min(
            Math.max(0, rect.bottom),
            window.innerHeight
          ) - Math.max(0, rect.top);
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", trackActiveSection);
    
    // Initial check
    toggleVisibility();
    trackActiveSection();
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", trackActiveSection);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="rounded-full bg-secondary hover:bg-secondary/80 shadow-lg h-12 w-12"
          >
            <List className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[280px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="text-primary">Table of Contents</SheetTitle>
          </SheetHeader>
          <nav className="mt-6">
            <ul className="space-y-1">
              {[
                { id: "introduction", title: "1. Introduction" },
                { id: "why-invest", title: "2. Why Invest in AI Tools" },
                { id: "budget-calculator", title: "3. Budget Calculator" },
                { id: "core-categories", title: "4. Core AI Tool Categories" },
                { id: "cost-estimates", title: "5. Line-by-Line Cost Estimates" },
                { id: "budget-tiers", title: "6. Budget Tiers" },
                { id: "per-employee", title: "7. Per-Employee Budgeting" },
                { id: "practical-tips", title: "8. Practical Tips" },
                { id: "conclusion", title: "9. Conclusion" }
              ].map(section => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className={`flex p-2 rounded-md transition-colors ${
                      activeSection === section.id 
                        ? "bg-secondary text-white font-medium" 
                        : "hover:bg-gray-100 text-secondary"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SheetFooter className="mt-6 flex-col space-y-2">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Share className="h-4 w-4" />
              Share Report
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      
      <div className="flex flex-col gap-2">
        <Button 
          size="icon" 
          onClick={scrollToTop}
          className="rounded-full bg-primary hover:bg-primary/80 shadow-lg h-12 w-12"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingNavigation;
