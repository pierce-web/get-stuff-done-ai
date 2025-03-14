
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const ReportCTA = () => {
  return (
    <div className="bg-gradient-to-r from-secondary/20 to-secondary/5 p-8 rounded-xl mb-12 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-primary">Get a Personalized AI Tool Recommendation</h2>
      <p className="mb-6">
        Want to know which AI tools would best fit your specific business needs and budget? Schedule a free consultation with our team or speak with our AI assistant for personalized recommendations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
          className="bg-secondary hover:bg-secondary/90 gap-2"
        >
          <Calendar className="h-4 w-4 text-white" />
          <span className="text-white">Schedule Free Consultation</span>
        </Button>
        <Button
          variant="outline"
          className="border border-secondary text-secondary hover:bg-secondary/10 gap-2"
          onClick={() => window.location.href = "tel:+18482610259"}
        >
          <Phone className="h-4 w-4" />
          Speak with our AI Assistant
        </Button>
      </div>
    </div>
  );
};

export default ReportCTA;
