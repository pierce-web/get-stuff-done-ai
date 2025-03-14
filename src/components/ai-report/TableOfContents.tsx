
import React from "react";

const TableOfContents = () => {
  return (
    <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ol className="list-decimal list-inside space-y-2 ml-2">
        <li><a href="#introduction" className="text-secondary hover:underline">Introduction</a></li>
        <li><a href="#why-invest" className="text-secondary hover:underline">Why Every Business Needs to Invest in AI Tools</a></li>
        <li><a href="#core-categories" className="text-secondary hover:underline">Core AI Tool Categories</a></li>
        <li><a href="#cost-estimates" className="text-secondary hover:underline">Cost Estimates by Category</a></li>
        <li><a href="#budget-calculator" className="text-secondary hover:underline">Interactive Budget Calculator</a></li>
        <li><a href="#budget-tiers" className="text-secondary hover:underline">Monthly Totals and Budget Tiers</a></li>
        <li><a href="#per-employee" className="text-secondary hover:underline">Scaling Up: Per-Employee Budgeting</a></li>
        <li><a href="#practical-tips" className="text-secondary hover:underline">Practical Implementation Tips</a></li>
        <li><a href="#conclusion" className="text-secondary hover:underline">Conclusion and Next Steps</a></li>
      </ol>
    </div>
  );
};

export default TableOfContents;
