
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Video } from "lucide-react";

interface HeroSectionProps {
  eventbriteUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ eventbriteUrl }) => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-secondary bg-secondary/10 w-fit px-3 py-1 rounded-full text-sm font-medium mb-2">
              <Calendar className="h-4 w-4" />
              <span>Tuesday, May 20th • 12:00-1:30 PM EDT</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              AI in Action for Lawyers: Live Workflow Transformation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              Witness AI transform a legal workflow LIVE! Join GSD & Melior for a hands-on session for lawyers. One attendee's workflow featured! <span className="font-semibold">Plus, one lucky attendee will be selected for a LIVE workflow transformation – a $2,500 value!</span> Limited spots available for this unique, hands-on experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white font-medium py-6 px-8"
                onClick={() => window.open(eventbriteUrl, "_blank")}
              >
                Reserve Your Spot
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex flex-col">
                <div className="bg-secondary/10 text-secondary font-medium rounded-lg px-4 py-2 flex items-center justify-center">
                  <span className="font-bold">$299</span> - <span className="font-bold">$499</span>
                  <span className="ml-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Early bird discount</span>
                </div>
                <p className="text-sm font-semibold text-red-600 mt-2 text-center">Spaces are strictly limited!</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png" 
                alt="AI in Action for Lawyers Workshop" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border border-gray-100">
                <Video className="h-5 w-5 text-secondary" />
                <span className="font-medium">Online via Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
