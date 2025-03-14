
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const ReportCTA = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/gsdat/30min", "_blank");
  };

  return (
    <section className="my-16">
      <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-6 sm:p-8 rounded-xl shadow-md overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure where to start with AI implementation?
          </h2>
          
          <p className="text-white/90 mb-6 text-base sm:text-lg">
            Book a free 30-minute AI strategy session with our team. We'll help you navigate the AI landscape and create a tailored implementation plan for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={openCalendly}
              className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-3 text-base"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Strategy Session
            </Button>
            
            <Button 
              variant="link" 
              className="text-white hover:text-white/90"
              onClick={openCalendly}
            >
              Learn more about our services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCTA;
