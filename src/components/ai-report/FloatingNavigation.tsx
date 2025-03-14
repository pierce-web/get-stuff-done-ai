
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, List, Download, Share, Menu, ChevronRight } from "lucide-react";
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
  const [progress, setProgress] = useState(0);

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
      
      // Calculate reading progress
      const docElement = document.documentElement;
      const winScroll = document.body.scrollTop || docElement.scrollTop;
      const height = docElement.scrollHeight - docElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
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

  const getReadingProgress = () => {
    return Math.min(Math.max(progress, 0), 100).toFixed(0);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Reading progress indicator */}
      <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full py-2 px-3 text-xs font-medium text-primary hidden md:flex items-center">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
          {getReadingProgress()}%
        </div>
        <span>Progress</span>
      </div>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="rounded-full bg-secondary hover:bg-secondary/80 shadow-lg h-12 w-12"
            aria-label="Open table of contents"
          >
            <Menu className="h-5 w-5 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[320px] sm:w-[380px]">
          <SheetHeader>
            <SheetTitle className="text-primary flex items-center">
              <Menu className="h-5 w-5 mr-2 text-secondary" />
              Table of Contents
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-6">
            <ul className="space-y-2">
              {[
                { id: "introduction", title: "1. Introduction", icon: "BookOpen" },
                { id: "why-invest", title: "2. Why Invest in AI Tools", icon: "DollarSign" },
                { id: "budget-calculator", title: "3. Budget Calculator", icon: "Calculator" },
                { id: "core-categories", title: "4. Core AI Tool Categories", icon: "Grid" },
                { id: "cost-estimates", title: "5. Line-by-Line Cost Estimates", icon: "PieChart" },
                { id: "budget-tiers", title: "6. Budget Tiers", icon: "DollarSign" },
                { id: "per-employee", title: "7. Per-Employee Budgeting", icon: "Users" },
                { id: "practical-tips", title: "8. Practical Tips", icon: "Lightbulb" },
                { id: "conclusion", title: "9. Conclusion", icon: "CheckSquare" }
              ].map(section => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className={`flex p-3 rounded-md transition-colors ${
                      activeSection === section.id 
                        ? "bg-secondary text-white font-medium" 
                        : "hover:bg-gray-100 text-secondary"
                    }`}
                  >
                    <span className="mr-2">{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 mb-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary rounded-full transition-all duration-300" 
              style={{ width: `${getReadingProgress()}%` }}
            ></div>
          </div>
          <SheetFooter className="mt-2 flex-col space-y-3">
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
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingNavigation;
