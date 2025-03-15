
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Case Studies
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our case studies are currently being prepared and will be available soon.
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center space-y-6">
            <Construction className="h-16 w-16 text-secondary/70" />
            <p className="text-xl text-gray-500">
              We're working on documenting our success stories.
            </p>
            <p className="text-gray-600 max-w-md">
              Check back soon to see detailed case studies of how we've helped businesses transform with practical AI solutions.
            </p>
            
            <div className="mt-8">
              <Link to="/">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl mb-16">
          <Card className="bg-secondary/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                New Report: 2025 AI Tooling & Budget Guide
              </CardTitle>
              <CardDescription>
                Get comprehensive insights on AI tool costs, budget tiers, and implementation strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/ai-tooling-report">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Read the Full Report <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cases;
