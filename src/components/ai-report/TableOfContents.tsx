
import React from "react";
import { ArrowRight } from "lucide-react";

const TableOfContents = () => {
  const sections = [
    { id: "introduction", number: "1", title: "Introduction" },
    { id: "why-invest", number: "2", title: "Why Every Business Needs to Invest in AI Tools" },
    { id: "budget-calculator", number: "3", title: "Interactive Budget Calculator" },
    { id: "core-categories", number: "4", title: "Core AI Tool Categories" },
    { id: "cost-estimates", number: "5", title: "Cost Estimates by Category" },
    { id: "budget-tiers", number: "6", title: "Monthly Totals and Budget Tiers" },
    { id: "per-employee", number: "7", title: "Scaling Up: Per-Employee Budgeting" },
    { id: "practical-tips", number: "8", title: "Practical Implementation Tips" },
    { id: "conclusion", number: "9", title: "Conclusion and Next Steps" }
  ];

  return (
    <div className="my-10 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-primary">Table of Contents</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <a 
            key={section.id}
            href={`#${section.id}`} 
            className="group flex items-center p-3 bg-white hover:bg-secondary/5 rounded-lg border border-gray-100 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3 font-semibold text-sm">
              {section.number}
            </div>
            <span className="text-gray-700 group-hover:text-secondary transition-colors">
              {section.title}
            </span>
            <ArrowRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-secondary transform group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
        <span>Estimated reading time: 7 minutes</span>
        <a href="#introduction" className="flex items-center text-secondary hover:underline">
          Begin Reading
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;
