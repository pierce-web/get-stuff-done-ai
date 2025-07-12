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
  "2xl": "shadow-2xl",
  hoverEffect: "shadow-sm hover:shadow-md transition-shadow duration-300",
  cardEffect: "shadow-md hover:shadow-xl transition-all duration-300",
  buttonEffect: "shadow-sm hover:shadow-md transition-all duration-300",
  // Enhanced shadow effects
  floating: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
  floatingHover: "hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500",
  glassCard: "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
  deepFloat: "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)]",
  coloredGlow: {
    primary: "shadow-[0_0_20px_rgba(26,31,44,0.15)]",
    secondary: "shadow-[0_0_20px_rgba(210,43,43,0.15)]"
  }
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
  gradientBorder: "bg-gradient-to-r from-primary/20 to-secondary/20 p-[1px] rounded-lg",
  // Enhanced glass morphism effects
  navGlass: {
    default: "bg-white/85 backdrop-blur-xl border-b border-white/30",
    scrolled: "bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-lg shadow-black/5"
  },
  premiumGlass: "bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-black/10",
  subtleGlass: "bg-white/60 backdrop-blur-md border border-white/20"
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
  },
  // Enhanced button effects
  effects: {
    magnetic: "group relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:rounded-md",
    glowPulse: "hover:shadow-[0_0_30px_rgba(210,43,43,0.3)] transition-all duration-300",
    morphing: "hover:rounded-2xl transition-all duration-500 ease-out",
    liftGlow: "hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300",
    ripple: "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300",
    borderGlow: "hover:ring-2 hover:ring-secondary/30 hover:ring-offset-2 transition-all duration-300"
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
  ripple: "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 motion-reduce:before:transition-none",
  // Advanced hero animations
  floatingElements: "animate-[float_6s_ease-in-out_infinite] motion-reduce:animate-none",
  pulsingGlow: "animate-[pulse_4s_ease-in-out_infinite] motion-reduce:animate-none",
  slowRotate: "animate-[spin_20s_linear_infinite] motion-reduce:animate-none",
  gentleBounce: "animate-[bounce_3s_ease-in-out_infinite] motion-reduce:animate-none",
  // Advanced micro-interactions
  magneticPull: "hover:scale-105 hover:-translate-y-1 hover:rotate-1 transition-all duration-300 ease-out motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0",
  breathingGlow: "hover:shadow-2xl hover:shadow-secondary/20 animate-[pulse_2s_ease-in-out_infinite] hover:animate-none transition-all duration-500 motion-reduce:animate-none",
  liquidMotion: "hover:bg-gradient-to-r hover:from-primary/10 hover:via-secondary/10 hover:to-primary/10 transition-all duration-700 ease-out",
  parallaxHover: "hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)] transition-transform duration-300 ease-out motion-reduce:hover:transform-none",
  textShimmer: "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] motion-reduce:animate-none"
};

// Spacing system
export const spacing = {
  section: {
    sm: "py-16",
    md: "py-24 sm:py-32",
    lg: "py-24 sm:py-32 md:py-40" 
  },
  // Advanced layout spacing
  asymmetric: {
    offset: "ml-8 md:ml-16 lg:ml-24",
    stagger: "mt-8 md:mt-16 lg:mt-24",
    flowing: "mb-12 md:mb-20 lg:mb-32"
  }
};

// Border radius
export const borderRadius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
};

// Typography system
export const typography = {
  fluid: {
    // Fluid typography using clamp for responsive design
    h1: "text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[1.1]",
    h2: "text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight leading-[1.2]",
    h3: "text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-tight leading-[1.3]",
    h4: "text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold leading-[1.4]",
    large: "text-[clamp(1rem,2vw,1.25rem)] leading-[1.6]",
    base: "text-base leading-[1.6]",
    small: "text-sm leading-[1.5]"
  },
  letterSpacing: {
    tighter: "tracking-tighter", // -0.05em
    tight: "tracking-tight",     // -0.025em  
    normal: "tracking-normal",   // 0em
    wide: "tracking-wide",       // 0.025em
    wider: "tracking-wider",     // 0.05em
    widest: "tracking-widest"    // 0.1em
  },
  touchTargets: {
    // Minimum 44px touch targets for mobile
    button: "min-h-[44px] min-w-[44px]",
    link: "min-h-[44px] flex items-center",
    input: "min-h-[44px]"
  }
};

// Advanced layout systems
export const layouts = {
  // Asymmetrical grids
  asymmetric: {
    hero: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
    features: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 [&>*:nth-child(2)]:md:mt-12 [&>*:nth-child(4)]:lg:mt-16",
    testimonials: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start [&>*:nth-child(2)]:lg:mt-12",
    split: "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
  },
  // Flowing sections
  flowing: {
    wave: "relative before:absolute before:top-0 before:left-0 before:right-0 before:h-24 before:bg-gradient-to-b before:from-transparent before:to-current before:opacity-10",
    curved: "relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5 before:rounded-b-[50%]",
    diagonal: "relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-primary/5 before:to-secondary/10 before:transform before:skew-y-1"
  },
  // Content rhythm
  rhythm: {
    alternating: "[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray-50",
    staggered: "[&>*:nth-child(2n)]:lg:mt-16 [&>*:nth-child(3n)]:lg:mt-8",
    floating: "[&>*:nth-child(odd)]:lg:-translate-y-8 [&>*:nth-child(even)]:lg:translate-y-8"
  }
};