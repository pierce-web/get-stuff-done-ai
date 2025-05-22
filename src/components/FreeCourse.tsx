import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { animations } from "@/lib/design-tokens";

export const FreeCourse = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div id="free-course" className="bg-primary py-24 sm:py-32 animate-fade-in relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight text-white sm:text-4xl ${animations.slideInUp}`}>
            AI as Electricity
          </h2>
          <p className={`mt-6 text-lg leading-8 text-gray-300 ${animations.slideInUp}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Free email course for team leads and knowledge workers. Dispel AI myths and get started with practical implementation strategies.
          </p>
          <form 
            onSubmit={handleSubmit} 
            className={`mt-10 flex gap-x-4 justify-center ${animations.scaleIn}`}
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md focus:ring-2 focus:ring-white/50 transition-all duration-300"
              required
            />
            <Button 
              type="submit" 
              className={`bg-primary-light hover:bg-primary-light/90 ${animations.hoverLift} ${animations.hoverGlow} hover:shadow-red-400/25`}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};