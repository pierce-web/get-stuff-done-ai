
import React from "react";
import { ArrowRight, BookOpen, DollarSign, Calculator, Grid, PieChart, Users, Lightbulb, CheckSquare } from "lucide-react";

const TableOfContents = () => {
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
        <a href="#introduction" className="flex items-center text-secondary hover:underline group bg-secondary/5 px-4 py-2 rounded-full">
          Begin Reading
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;
