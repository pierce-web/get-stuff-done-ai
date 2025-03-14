
import React from "react";
import { Gift } from "lucide-react";

const BudgetTiers = () => {
  return (
    <section id="budget-tiers" className="mb-16">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary">5. Monthly Totals and Budget Tiers</h2>
        <p className="mb-6">
          Most organizations don't need every service on this list for every employee. Still, it's helpful to see an "all-in" scenario:
        </p>
        
        <div className="space-y-8">
          <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10">
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
              <Gift className="mr-2 h-5 w-5 text-secondary" />
              A. Lower-End "Power User" Estimate
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Subscriptions total (lower ranges): <strong className="text-secondary">~$529/month</strong></li>
              <li>Light orchestration usage ($10/day × 20 days): <strong className="text-secondary">~$200/month</strong></li>
              <li className="font-bold text-lg">Combined Total: <span className="text-secondary">~$729/month per heavy user</span></li>
            </ul>
          </div>
          
          <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10">
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
              <Gift className="mr-2 h-5 w-5 text-secondary" />
              B. Higher-End "Power User" Estimate
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Subscriptions total (upper ranges): <strong className="text-secondary">~$649/month</strong></li>
              <li>Heavy orchestration usage ($100/day × 20 days): <strong className="text-secondary">~$2,000/month</strong></li>
              <li className="font-bold text-lg">Combined Total: <span className="text-secondary">~$2,649/month per heavy user</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 border-l-4 border-secondary rounded-r-lg">
          <p className="font-semibold">
            Key Insight: If your teams rely on heavy AI agent usage for coding, debugging, and advanced tasks, usage-based fees can quickly become your largest expense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BudgetTiers;
