
import React from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Zap, Mic, Headphones } from "lucide-react";

interface CollapsedCalculatorProps {
  onExpand: () => void;
}

const CollapsedCalculator: React.FC<CollapsedCalculatorProps> = ({ onExpand }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Calculator className="h-6 w-6 text-secondary" />
            Interactive AI Budget Calculator
          </h2>
          <p className="text-gray-600 mt-2">
            Estimate your organization's AI tooling budget based on your specific needs and team composition.
          </p>
        </div>
        <Button 
          onClick={onExpand}
          className="bg-secondary hover:bg-secondary/90 w-full md:w-auto text-white"
          size="lg"
        >
          <Calculator className="mr-2 h-5 w-5" />
          <span>Calculate Your Budget</span>
        </Button>
      </div>

      {/* Calculator collapsed preview with benefits */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-3">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">General-Purpose AI</h3>
          <p className="text-sm text-gray-600">Essential AI tools that serve as the foundation for productivity gains, research, and analysis.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-3">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Voice Dictation</h3>
          <p className="text-sm text-gray-600">"Stop typing, start talking" - rapidly iterate and direct AI through speech.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-3">
            <Headphones className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Meeting Transcription</h3>
          <p className="text-sm text-gray-600">Cultivate high-quality qualitative data assets from meetings and calls.</p>
        </div>
      </div>
    </div>
  );
};

export default CollapsedCalculator;
