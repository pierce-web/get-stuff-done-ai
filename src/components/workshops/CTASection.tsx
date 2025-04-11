
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock } from "lucide-react";

interface CTASectionProps {
  eventbriteUrl: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ eventbriteUrl }) => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Reserve Your Spot Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Limited spaces available. Don't miss this opportunity to see AI transform legal workflows in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white font-medium py-6 px-8"
              onClick={() => window.open(eventbriteUrl, "_blank")}
            >
              Get Your Ticket Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <div className="bg-white border border-gray-200 text-gray-700 font-medium rounded-lg px-6 py-4 flex items-center justify-center shadow-sm">
              <Clock className="h-5 w-5 mr-2 text-secondary" />
              <span>1.5 Hour Session</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-6">
            Refund Policy: Full refunds available up to 7 days before the event.
          </p>
        </div>
      </div>
    </section>
  );
};
