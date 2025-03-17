
import { useEffect } from "react";

const ScrollManager: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has a hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top when page loads without hash
      window.scrollTo(0, 0);
    }
    
    // Add scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Update URL without page reload
            history.pushState(null, '', `#${targetId}`);
          }
        }
      });
    });
  }, []);

  return null;
};

export default ScrollManager;
