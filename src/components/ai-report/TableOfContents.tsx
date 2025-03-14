
import React from "react";
import { ArrowRight, BookOpen, DollarSign, Calculator, Grid, PieChart, Users, Lightbulb, CheckSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const TableOfContents = () => {
  const { toast } = useToast();
  
  const sections = [
    { id: "introduction", number: "1", title: "Introduction", icon: <BookOpen className="h-4 w-4" /> },
    { id: "why-invest", number: "2", title: "Why Every Business Needs to Invest in AI Tools", icon: <DollarSign className="h-4 w-4" /> },
    { id: "budget-calculator", number: "3", title: "Interactive Budget Calculator", icon: <Calculator className="h-4 w-4" /> },
    { id: "core-categories", number: "4", title: "Core AI Tool Categories", icon: <Grid className="h-4 w-4" /> },
    { id: "cost-estimates", number: "5", title: "Cost Estimates by Category", icon: <PieChart className="h-4 w-4" /> },
    { id: "budget-tiers", number: "6", title: "Monthly Totals and Budget Tiers", icon: <DollarSign className="h-4 w-4" /> },
    { id: "per-employee", number: "7", title: "Scaling Up: Per-Employee Budgeting", icon: <Users className="h-4 w-4" /> },
    { id: "practical-tips", number: "8", title: "Practical Implementation Tips", icon: <Lightbulb className="h-4 w-4" /> },
    { id: "conclusion", number: "9", title: "Conclusion and Next Steps", icon: <CheckSquare className="h-4 w-4" /> }
  ];

  const handleDownloadPDF = () => {
    toast({
      title: "PDF download started",
      description: "Your 2025 AI Tooling & Budget Report is being prepared for download.",
      duration: 3000,
    });
    
    // In a real implementation, this would generate and download a PDF
    // For now, we'll simulate a download after a short delay
    setTimeout(() => {
      toast({
        title: "Report downloaded",
        description: "The 2025 AI Tooling & Budget Report PDF has been downloaded.",
        duration: 3000,
      });
    }, 2000);
  };

  const handleShareReport = () => {
    // Check if navigator.share is available (modern browsers)
    if (navigator.share) {
      navigator.share({
        title: '2025 AI Tooling & Budget Report',
        text: 'Check out this comprehensive guide to AI tool budgeting for 2025',
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "Report shared successfully",
          description: "Thank you for sharing our 2025 AI Tooling & Budget Report!",
          duration: 3000,
        });
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link copied to clipboard",
          description: "Share this link with others to view the 2025 AI Tooling & Budget Report.",
          duration: 3000,
        });
      });
    }
  };

  return (
    <div className="my-10 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-primary">Table of Contents</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <a 
            key={section.id}
            href={`#${section.id}`} 
            className="group flex items-center p-3 bg-white hover:bg-secondary/5 rounded-lg border border-gray-100 transition-colors hover:shadow-sm"
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3 font-semibold text-sm">
              {section.number}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 group-hover:text-secondary transition-colors font-medium">
                {section.title}
              </span>
              <div className="text-gray-400 text-xs mt-1 flex items-center">
                {section.icon}
                <span className="ml-1">Section {section.number}</span>
              </div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-secondary transform group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-3">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-secondary" />
          <span>Estimated reading time: 7 minutes</span>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="text-secondary border-secondary hover:bg-secondary/5 flex items-center gap-2"
            onClick={handleDownloadPDF}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download PDF
          </Button>
          <Button 
            variant="outline" 
            className="text-secondary border-secondary hover:bg-secondary/5 flex items-center gap-2"
            onClick={handleShareReport}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" x2="12" y1="2" y2="15"/>
            </svg>
            Share Report
          </Button>
        </div>
        <a href="#introduction" className="flex items-center text-secondary hover:underline group bg-secondary/5 px-4 py-2 rounded-full">
          Begin Reading
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;
