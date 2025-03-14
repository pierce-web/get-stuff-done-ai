
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportCTA = () => {
  const { toast } = useToast();

  const handleScheduleCall = () => {
    window.open("https://calendly.com/gsdatwork/free-consult", "_blank");
    toast({
      title: "Calendly opened",
      description: "Schedule your free AI tools consultation now.",
      duration: 3000,
    });
  };

  const handleSpeakWithAI = () => {
    window.location.href = "tel:+18482610259";
    toast({
      title: "Phone call initiated",
      description: "You're being connected to our AI assistant.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-gradient-to-r from-secondary/20 to-secondary/5 p-8 rounded-xl mb-12 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-primary">Get a Personalized AI Tool Recommendation</h2>
      <p className="mb-6">
        Want to know which AI tools would best fit your specific business needs and budget? Schedule a free consultation with our team or speak with our AI assistant for personalized recommendations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={handleScheduleCall}
          className="bg-secondary hover:bg-secondary/90 gap-2"
        >
          <Calendar className="h-4 w-4 text-white" />
          <span className="text-white">Schedule Free Consultation</span>
        </Button>
        <Button
          variant="outline"
          className="border border-secondary text-secondary hover:bg-secondary/10 gap-2"
          onClick={handleSpeakWithAI}
        >
          <Phone className="h-4 w-4" />
          Speak with our AI Assistant
        </Button>
      </div>
    </div>
  );
};

export default ReportCTA;
