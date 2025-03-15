
import React from "react";
import { Lightbulb, DollarSign, Target, Sparkle } from "lucide-react";

const Introduction = () => {
  return (
    <section id="introduction" className="mb-16">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full"></div>
        
        <div className="relative">
          <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction to AI Tool Budgeting</h2>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle className="h-5 w-5 text-secondary" />
              <h3 className="text-lg font-semibold text-gray-800">The AI Revolution in Business for 2025</h3>
            </div>
            
            <p className="mb-4">
              Welcome to The 2025 AI Tooling & Budget Report, brought to you by GSD at Work—your partner in helping businesses get stuff done. If you're a business owner or team lead looking to harness the power of AI, you've likely asked:
            </p>
            
            <blockquote className="border-l-4 border-secondary pl-6 py-4 my-6 italic bg-gray-50 rounded-r-lg">
              "How much should we realistically be spending each month on AI tools?"
            </blockquote>
            
            <p className="mb-4">
              This report provides clear, actionable answers. We'll break down the typical costs of popular AI tools—from chatbots and transcribers to coding agents and workflow automation. We'll also give you ballpark budgets for different types of users, so you can plan confidently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-primary/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">What You'll Learn</h3>
              <p className="text-sm text-gray-600">Discover which AI tools provide the best ROI and how to build a strategic implementation roadmap for small businesses, mid-market companies, and enterprises.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-primary/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Budget Planning</h3>
              <p className="text-sm text-gray-600">Get realistic cost estimates for AI tools across different user types and company sizes, from startups to enterprise organizations.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-primary/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Implementation Guide</h3>
              <p className="text-sm text-gray-600">Follow practical steps to introduce AI tools with minimal disruption and maximum adoption for your business in 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
