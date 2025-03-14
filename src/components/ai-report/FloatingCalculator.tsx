
import React from "react";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

interface FloatingCalculatorProps {
  onClick: () => void;
}

const FloatingCalculator: React.FC<FloatingCalculatorProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-10 md:bottom-auto md:right-auto md:static">
      <Button
        onClick={onClick}
        className="group bg-primary hover:bg-primary/90 shadow-lg rounded-full p-4 flex items-center gap-3"
        size="lg"
      >
        <Calculator className="h-5 w-5 text-white" />
        <span className="text-white font-medium">Get Your Personalized AI Budget</span>
      </Button>
    </div>
  );
};

export default FloatingCalculator;
