
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Cases = () => {
  return (
    <>
      <SEOHead 
        title="Case Studies | AI Implementation Success Stories"
        description="Discover real-world AI implementation success stories from Get Stuff Done AI. See how our clients achieved significant productivity gains and operational efficiency."
        canonicalUrl="/cases"
        keywords="AI case studies, AI implementation examples, business transformation, AI success stories, AI ROI, productivity gains"
      />
      
      <Navigation />
      
      <div className="min-h-screen bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real-world examples of AI implementation success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-16">
            {/* Othership Case Study Card */}
            <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-secondary/5 pb-4">
                <div className="mb-2">
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                    Wellness Industry
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2">
                  Othership Accelerates Growth with AI Implementation
                </CardTitle>
                <CardDescription>
                  Significant efficiency gains in recruitment, operations, and creative development
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-gray-600 line-clamp-3">
                    How a rapidly growing social bathhouse experience transformed key operational processes through targeted AI adoption coaching and implementation sprints.
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>May 2025</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/cases/othership-ai-partnership">
                    <Button className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-white">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Tooling Report Card */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  2025 AI Tooling & Budget Guide
                </CardTitle>
                <CardDescription>
                  Get comprehensive insights on AI tool costs, budget tiers, and implementation strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" 
                    alt="2025 AI Tooling & Budget Report" 
                    className="w-full rounded-md shadow-sm"
                    width="600"
                    height="315"
                  />
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <Badge variant="outline" className="mr-2">
                      <CalendarDays className="mr-1 h-3 w-3" /> Updated for 2025
                    </Badge>
                    <span>7-minute read</span>
                  </div>
                </div>
                <Link to="/ai-tooling-report">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Read the Full Report <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          {/* Coming soon section */}
          <div className="mx-auto max-w-2xl mt-24 text-center">
            <h2 className="text-2xl font-bold mb-4">More Case Studies Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We're continuously documenting our client success stories. Check back for additional case studies demonstrating the practical impact of AI implementation.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Cases;
