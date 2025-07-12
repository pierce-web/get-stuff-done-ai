import React, { useEffect, useRef, useState } from 'react';
import { createAnimationObserver, respectsReducedMotion, gpuOptimizedStyles } from '@/lib/performance-utils';

interface OptimizedAnimationProps {
  children: React.ReactNode;
  animation: string;
  delay?: number;
  threshold?: number;
  className?: string;
}

export const OptimizedAnimation: React.FC<OptimizedAnimationProps> = ({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    setShouldAnimate(!respectsReducedMotion());
  }, []);

  useEffect(() => {
    if (!elementRef.current || !shouldAnimate) return;

    const observer = createAnimationObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [delay, threshold, shouldAnimate]);

  const animationClass = shouldAnimate && isVisible ? animation : '';
  
  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={shouldAnimate ? gpuOptimizedStyles : undefined}
    >
      {children}
    </div>
  );
};
