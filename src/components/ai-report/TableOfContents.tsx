
import React from "react";
import { FileText } from "lucide-react";

const TableOfContents = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-12">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <FileText className="mr-2 text-secondary h-5 w-5" />
        Table of Contents
      </h2>
      <ol className="list-decimal list-inside space-y-3 ml-2">
        <li><a href="#introduction" className="text-primary hover:text-secondary transition-colors">Introduction</a></li>
        <li><a href="#why-invest" className="text-primary hover:text-secondary transition-colors">Why Invest in AI Tools Now</a></li>
        <li><a href="#core-categories" className="text-primary hover:text-secondary transition-colors">Core AI Tool Categories</a></li>
        <li><a href="#cost-estimates" className="text-primary hover:text-secondary transition-colors">Line-by-Line Cost Estimates</a></li>
        <li><a href="#budget-tiers" className="text-primary hover:text-secondary transition-colors">Monthly Totals and Budget Tiers</a></li>
        <li><a href="#per-employee" className="text-primary hover:text-secondary transition-colors">Scaling Up: Per-Employee Budgeting</a></li>
        <li><a href="#practical-tips" className="text-primary hover:text-secondary transition-colors">Practical Tips: Zero-Based Budgeting & Monthly Reviews</a></li>
        <li><a href="#conclusion" className="text-primary hover:text-secondary transition-colors">Conclusion & Next Steps</a></li>
      </ol>
    </div>
  );
};

export default TableOfContents;
