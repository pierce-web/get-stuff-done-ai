
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, BrainCircuit, Rocket, BarChart3, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              10x Effective Executive
            </h1>
            <p className="text-xl text-gray-600">
              A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep you ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white shadow-md"
                onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
              >
                Apply For This Program
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('benefits')}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-secondary mb-4">Program Overview</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Clock className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-medium block">10-Week Duration</span>
                      <span className="text-gray-600 text-sm">Focused transformation with lasting results</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <BrainCircuit className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Personalized AI Stack</span>
                      <span className="text-gray-600 text-sm">Tools tailored to your specific workflow</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Rocket className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Weekly 1:1 Coaching</span>
                      <span className="text-gray-600 text-sm">50-minute focused implementation sessions</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <BarChart3 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Measurable Outcomes</span>
                      <span className="text-gray-600 text-sm">Tied directly to your key results</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-secondary mb-1">$10,000</div>
                  <div className="text-gray-600 text-sm">One-time engagement fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
