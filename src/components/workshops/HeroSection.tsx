
import React from "react";
import { ExternalLink, Video } from "lucide-react";

interface HeroSectionProps {
  showReplayForm: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ showReplayForm }) => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-secondary bg-secondary/10 w-fit px-3 py-1 rounded-full text-sm font-medium mb-2">
              <Video className="h-4 w-4" />
              <span>Webinar Replay Now Available</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Watch the Replay: AI in Action for Lawyers - Live Workflow Transformation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              Missed the live session? Access the full recording of our hands-on workshop where we transformed a real legal workflow using AI. See practical AI applications for your law firm.
            </p>
            
            {showReplayForm ? (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Get Instant Access to the Webinar Replay!</h3>
                <p className="text-gray-600 mb-4">Enter your details below to watch the full recording:</p>
                
                <div className="hs-form-frame" data-region="na2" data-form-id="1272eebe-26a6-408b-b5fc-8aea7251513e" data-portal-id="242078229"></div>
              </div>
            ) : null}
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png" 
                alt="AI in Action for Lawyers Workshop Replay" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border border-gray-100">
                <Video className="h-5 w-5 text-secondary" />
                <span className="font-medium">Webinar Replay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
