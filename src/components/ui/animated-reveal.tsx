import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { animations } from '@/lib/design-tokens';

interface AnimatedRevealProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedReveal = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
  threshold = 0.1,
}: AnimatedRevealProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  const animationClass = animations[animation];
  
  return (
    <div
      ref={targetRef}
      className={`${className} ${isIntersecting ? animationClass : 'opacity-0'}`}
      style={{
        animationDelay: isIntersecting ? `${delay}ms` : undefined,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};