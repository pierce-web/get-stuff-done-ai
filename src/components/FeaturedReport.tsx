
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart2, FileText, CalendarDays } from "lucide-react";
import { shadows, gradients, buttonStyles, animations, spacing, borderRadius } from "@/lib/design-tokens";

export const FeaturedReport = () => {
  return (
    <section className={`${spacing.section.sm} ${gradients.subtle} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-80" />
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-3">Featured Resource</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest insights to help you implement AI effectively in your organization
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className={`overflow-hidden border-none ${shadows.cardEffect} relative z-10`}>
            <div className="flex flex-col lg:flex-row">
              <div className={`lg:w-2/5 ${gradients.secondaryLight} p-6 flex items-center justify-center`}>
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" 
                    alt="2025 AI Tooling & Budget Report" 
                    className={`max-w-[200px] mx-auto mb-4 ${borderRadius.md} ${shadows.sm}`}
                    width="200"
                    height="105"
                  />
                  <Badge variant="outline" className={`px-3 py-1 bg-white text-secondary border-secondary mb-2 ${shadows.sm}`}>
                    <CalendarDays className="mr-1 h-3 w-3" aria-hidden="true" /> Updated for 2025
                  </Badge>
                  <div className="mt-3 flex items-center justify-center gap-1 text-sm text-gray-500">
                    <BarChart2 className="h-4 w-4 text-secondary" />
                    <span>7-minute read</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-primary">
                    The 2025 AI Tooling & Budget Report
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    How to equip your team for quick wins and right-sized steps toward long-term transformation
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 mb-6">
                  <p className="text-gray-600">
                    Our comprehensive guide helps you understand AI tool categories, budget appropriately, 
                    and implement solutions that deliver real ROI. Perfect for leaders responsible for 
                    AI strategy and implementation.
                  </p>
                  
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 ${borderRadius.full} bg-green-100 flex items-center justify-center mr-2 mt-0.5`}>
                        <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Cost estimates for all major AI tool categories</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 ${borderRadius.full} bg-green-100 flex items-center justify-center mr-2 mt-0.5`}>
                        <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Budgeting frameworks for different company sizes</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 ${borderRadius.full} bg-green-100 flex items-center justify-center mr-2 mt-0.5`}>
                        <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Interactive budget calculator to plan your AI investment</span>
                    </li>
                  </ul>
                </CardContent>
                
                <CardFooter className="p-0 flex flex-col sm:flex-row gap-3">
                  <Link to="/ai-tooling-report">
                    <Button className={`w-full sm:w-auto ${buttonStyles.primary} ${shadows.buttonEffect}`}>
                      Read The Full Report <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className={`w-full sm:w-auto ${buttonStyles.outline.secondary} ${shadows.buttonEffect}`}
                    onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank", "noopener,noreferrer")}
                  >
                    Schedule Your Strategy Session
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
