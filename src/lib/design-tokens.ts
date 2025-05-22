/**
 * Design Tokens
 * 
 * This file contains standardized design values to ensure consistency across the application.
 * Import these values when implementing components to maintain a cohesive design system.
 */

// Shadow classes
export const shadows = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  hoverEffect: "shadow-sm hover:shadow-md transition-shadow duration-300",
  cardEffect: "shadow-md hover:shadow-xl transition-all duration-300",
  buttonEffect: "shadow-sm hover:shadow-md transition-all duration-300"
};

// Gradient classes
export const gradients = {
  primaryLight: "bg-gradient-to-b from-primary/10 to-primary/5",
  primaryMedium: "bg-gradient-to-b from-primary/30 to-primary/20",
  secondaryLight: "bg-gradient-to-b from-secondary/10 to-secondary/5",
  secondaryMedium: "bg-gradient-to-b from-secondary/30 to-secondary/20",
  secondaryStrong: "bg-gradient-to-b from-secondary/60 to-secondary/90",
  subtle: "bg-gradient-to-b from-white to-gray-50",
  decorative: {
    primary: "bg-primary/5 rounded-full blur-3xl opacity-70",
    secondary: "bg-secondary/10 rounded-full blur-3xl opacity-70"
  },
  glassMorphism: "bg-white/80 backdrop-blur-lg border border-white/20",
  cardGlass: "bg-gray-50/80 backdrop-blur-sm border border-gray-200/50",
  gradientBorder: "bg-gradient-to-r from-primary/20 to-secondary/20 p-[1px] rounded-lg"
};

// Button styles
export const buttonStyles = {
  primary: "bg-secondary hover:bg-secondary/90 text-white",
  outline: {
    primary: "border border-primary text-primary hover:bg-primary/10",
    secondary: "border border-secondary text-secondary hover:bg-secondary/10"
  },
  sizes: {
    default: "",
    large: "py-5 text-base sm:px-8"
  }
};

// Animation classes with reduced motion support
export const animations = {
  fadeIn: "animate-fade-in motion-reduce:animate-none",
  transition: "transition-all duration-300 motion-reduce:transition-none",
  staggerIn: "animate-stagger-in motion-reduce:animate-none",
  slideInLeft: "animate-slide-in-left motion-reduce:animate-none",
  slideInRight: "animate-slide-in-right motion-reduce:animate-none",
  slideInUp: "animate-slide-in-up motion-reduce:animate-none",
  scaleIn: "animate-scale-in motion-reduce:animate-none",
  bounceIn: "animate-bounce-in motion-reduce:animate-none",
  hoverLift: "hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:transition-none",
  hoverGlow: "hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 motion-reduce:transition-none",
  ripple: "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 motion-reduce:before:transition-none"
};

// Spacing system
export const spacing = {
  section: {
    sm: "py-16",
    md: "py-24 sm:py-32",
    lg: "py-24 sm:py-32 md:py-40" 
  }
};

// Border radius
export const borderRadius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
};