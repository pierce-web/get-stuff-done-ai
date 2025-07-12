
import React, { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { animations, typography } from "@/lib/design-tokens";

export const TestimonialsCarousel = React.memo(() => {
  const handleScriptCleanup = useCallback(() => {
    const scripts = document.querySelectorAll('script[src*="senja.io"]');
    scripts.forEach(script => script.remove());
  }, []);

  useEffect(() => {
    // Load Senja widget script
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/widget/65930308-2b7d-4525-8c89-002db8d5b1af/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return handleScriptCleanup;
  }, [handleScriptCleanup]);

  return (
    <div className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative ${animations.fadeIn}`}>
      {/* Subtle animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-50"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`${typography.fluid.h2} text-primary text-center mb-12 ${animations.slideInUp}`}>
          What Leaders Say
        </h2>
        
        <div 
          className={`senja-embed ${animations.scaleIn}`}
          data-id="65930308-2b7d-4525-8c89-002db8d5b1af" 
          data-mode="shadow" 
          data-lazyload="false" 
          style={{ display: "block", animationDelay: '0.2s', animationFillMode: 'both' }}
        />

        <div className={`mt-8 text-center ${animations.slideInUp}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <a 
            href="https://love.gsdat.work" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className={`gap-2 ${animations.hoverLift} hover:border-primary/70 hover:bg-primary/5`}>
              See all testimonials
              <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
});

TestimonialsCarousel.displayName = 'TestimonialsCarousel';
