import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-xl border border-secondary/20 my-10">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Need help implementing AI in your organization?
      </h3>
      <p className="text-gray-700 mb-4">
        Book a complimentary strategy session to discuss how you can leverage AI tools to get tangible 
        business results and enhance your team's productivity.
      </p>
      <Button 
        className="bg-secondary hover:bg-secondary/90 text-white flex items-center shadow-sm hover:shadow-md transition-all duration-300"
        onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
      >
        <CalendarDays className="mr-2 h-4 w-4" />
        Schedule Strategy Session
      </Button>
    </div>
  );
};

export default CTASection;