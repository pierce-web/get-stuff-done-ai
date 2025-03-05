
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// This is a temporary mock data structure - you can replace with real data later
const cases = [
  {
    id: "enterprise-ai-transformation",
    title: "Enterprise AI Transformation",
    description: "30-40% cost reduction in target processes for Fortune 500 company",
    industry: "Manufacturing",
    tags: ["Process Automation", "Cost Reduction", "Enterprise"],
    readTime: "5 min read",
  },
  {
    id: "startup-ai-acceleration",
    title: "Startup AI Acceleration",
    description: "2,000% productivity improvement in core operations",
    industry: "Technology",
    tags: ["Productivity", "Startup", "Growth"],
    readTime: "4 min read",
  },
  // Add more case studies as needed
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Case Studies
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real results from our AI implementation work. See how we help businesses transform with practical AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy) => (
            <Link to={`/cases/${caseStudy.id}`} key={caseStudy.id}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        {caseStudy.industry} • {caseStudy.readTime}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="space-x-2">
                    {caseStudy.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-secondary font-medium">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
