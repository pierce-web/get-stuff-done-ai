
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

export const TestimonialsCarousel = () => {
  useEffect(() => {
    // Load Senja widget script
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/widget/65930308-2b7d-4525-8c89-002db8d5b1af/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center mb-12">
          What Leaders Say
        </h2>
        
        <div 
          className="senja-embed" 
          data-id="65930308-2b7d-4525-8c89-002db8d5b1af" 
          data-mode="shadow" 
          data-lazyload="false" 
          style={{ display: "block" }}
        />

        <div className="mt-8 text-center">
          <a 
            href="https://love.gsdat.work" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className="gap-2">
              See all testimonials
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
