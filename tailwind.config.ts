
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./index.html",
    ],
    extract: {
      // Custom extractor for better CSS purging
      tsx: (content) => {
        // Extract Tailwind classes more accurately
        return content.match(/[\w-/:]+(?<!:)/g) || [];
      },
    },
  },
  // More aggressive purging in production
  safelist: [
    // Keep essential classes that might be dynamically generated
    'animate-fade-in',
    'animate-slide-in-left', 
    'animate-slide-in-right',
    'animate-slide-in-up',
    'animate-scale-in',
    'animate-bounce-in',
    // Keep responsive variants for key components
    'md:hidden',
    'md:flex',
    'lg:grid-cols-3',
    'lg:grid-cols-2',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A1F2C",
          light: "#D22B2B",
        },
        secondary: {
          DEFAULT: "#D22B2B",
          light: "#ff9999",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-up": "slide-in-up 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
  // Optimize for production builds
  corePlugins: {
    // Disable unused core plugins to reduce bundle size
    preflight: true,
    container: true,
    accessibility: true,
    pointerEvents: true,
    visibility: true,
    position: true,
    inset: true,
    isolation: false, // Disable if not used
    zIndex: true,
    order: true,
    gridColumn: true,
    gridColumnStart: true,
    gridColumnEnd: true,
    gridRow: true,
    gridRowStart: true,
    gridRowEnd: true,
    float: false, // Modern layout doesn't need float
    clear: false,
    margin: true,
    padding: true,
    space: true,
    width: true,
    minWidth: true,
    maxWidth: true,
    height: true,
    minHeight: true,
    maxHeight: true,
    fontSize: true,
    fontFamily: true,
    fontWeight: true,
    lineHeight: true,
    letterSpacing: true,
    textAlign: true,
    textColor: true,
    textDecoration: true,
    textDecorationColor: true,
    textDecorationStyle: true,
    textDecorationThickness: true,
    textUnderlineOffset: true,
    textTransform: true,
    textOverflow: true,
    textIndent: false, // Rarely used
    verticalAlign: true,
    whitespace: true,
    wordBreak: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundSize: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundAttachment: false, // Rarely used
    borderRadius: true,
    borderWidth: true,
    borderColor: true,
    borderStyle: true,
    divideWidth: true,
    divideColor: true,
    divideStyle: true,
    ringWidth: true,
    ringColor: true,
    ringOffsetWidth: true,
    ringOffsetColor: true,
    boxShadow: true,
    opacity: true,
    mixBlendMode: false, // Advanced feature, disable if unused
    backgroundBlendMode: false,
  },
} satisfies Config;
