/**
 * Performance optimization utilities for animations and interactions
 */

// Intersection Observer for animation triggers
export const createAnimationObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounced scroll handler
export const createScrollHandler = (
  callback: () => void,
  delay: number = 16
) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Prefered motion check
export const respectsReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// GPU-optimized transform utilities
export const gpuOptimizedStyles = {
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden' as const,
  perspective: '1000px',
  transformStyle: 'preserve-3d' as const
};

// Lazy loading utility for images
export const createLazyImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void
) => {
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
};
