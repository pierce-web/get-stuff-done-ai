
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, List } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show navigation after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
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
            <SheetTitle>Table of Contents</SheetTitle>
          </SheetHeader>
          <nav className="mt-6">
            <ul className="space-y-3">
              <li>
                <a href="#introduction" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  1. Introduction
                </a>
              </li>
              <li>
                <a href="#why-invest" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  2. Why Invest in AI Tools
                </a>
              </li>
              <li>
                <a href="#budget-calculator" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  3. Budget Calculator
                </a>
              </li>
              <li>
                <a href="#core-categories" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  4. Core AI Tool Categories
                </a>
              </li>
              <li>
                <a href="#cost-estimates" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  5. Line-by-Line Cost Estimates
                </a>
              </li>
              <li>
                <a href="#budget-tiers" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  6. Budget Tiers
                </a>
              </li>
              <li>
                <a href="#per-employee" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  7. Per-Employee Budgeting
                </a>
              </li>
              <li>
                <a href="#practical-tips" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  8. Practical Tips
                </a>
              </li>
              <li>
                <a href="#conclusion" className="flex p-2 hover:bg-gray-100 rounded-md text-secondary">
                  9. Conclusion
                </a>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
      
      <Button 
        size="icon" 
        onClick={scrollToTop}
        className="rounded-full bg-primary hover:bg-primary/80 shadow-lg h-12 w-12"
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default FloatingNavigation;
