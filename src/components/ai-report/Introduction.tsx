
import React from "react";
import { Calendar } from "lucide-react";

const Introduction = () => {
  return (
    <section id="introduction" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
        
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>April 3, 2025</span>
            <span className="mx-2">·</span>
            <span className="font-medium">By Christian Keil, CEO @ GSD at Work</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-base leading-relaxed">
              Allocating resources for AI tools requires careful planning and foresight. This report provides a comprehensive breakdown of what companies should expect to budget for AI implementation in 2025, along with practical guidance on making smart investments.
            </p>
            
            <p className="text-base leading-relaxed mt-4">
              Based on our work with dozens of teams across industries, we've distilled the essential tools, pricing tiers, and implementation strategies that deliver the best ROI. This guide focuses on practical, actionable insights rather than speculative future tech.
            </p>
            
            <div className="bg-secondary/10 p-4 rounded-md mt-6 border-l-4 border-secondary">
              <p className="font-medium mb-1">Actionable Resource:</p>
              <p className="text-sm">
                This report includes real pricing data current as of early 2025, an interactive budget calculator, and specific tool recommendations for companies of different sizes and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
