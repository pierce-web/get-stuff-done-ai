
import { useEffect } from "react";

export const TestimonialsWall = () => {
  useEffect(() => {
    // Load the iframeResizer script
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/js/iframeResizer.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Once the script is loaded, initialize the iframe resizer
      // @ts-ignore - iFrameResize is loaded from external script
      if (window.iFrameResize) {
        // @ts-ignore
        iFrameResize({ log: false, checkOrigin: false }, "#wall-of-love-dq6aUlD");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="animate-fade-in">
      <iframe
        id="wall-of-love-dq6aUlD"
        src="https://senja.io/p/gsd-work/dq6aUlD?hideNavigation=true&embed=true"
        title="Wall of Love"
        frameBorder="0"
        scrolling="no"
        width="100%"
        className="min-h-[400px]"
      />
    </div>
  );
};
