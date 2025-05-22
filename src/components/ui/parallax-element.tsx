import { useEffect, useRef, useState } from 'react';

interface ParallaxElementProps {
  speed?: number;
  children: React.ReactNode;
  className?: string;
}

export const ParallaxElement = ({ 
  speed = 0.5, 
  children, 
  className = '' 
}: ParallaxElementProps) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return; // Don't apply parallax if user prefers reduced motion
    }

    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset;
        const elementTop = rect.top + scrollTop;
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const yPos = (scrollTop - elementTop) * speed;
          setOffset(yPos);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};