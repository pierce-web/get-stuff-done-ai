import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  link: string;
  badge?: string;
  features: string[];
}

interface ServiceRecommendationProps {
  currentService?: string;
  recommendationType: "upsell" | "crosssell" | "alternative" | "starter";
  maxServices?: number;
  title?: string;
  description?: string;
}

export const ServiceRecommendation: React.FC<ServiceRecommendationProps> = ({
  currentService,
  recommendationType,
  maxServices = 2,
  title,
  description
}) => {
  // Define all services with their relationships
  const allServices: Record<string, Service> = {
    "ai-action-workshop": {
      id: "ai-action-workshop",
      title: "2-Hour AI Action Workshop",
      description: "Hands-on AI implementation working session with immediate results",
      price: "$2,497",
      link: "/ai-action-workshop",
      badge: "Quick Start",
      features: ["2-hour intensive session", "Immediate implementation", "Proven frameworks"]
    },
    "qualitative-data-workshop": {
      id: "qualitative-data-workshop", 
      title: "Qualitative Data Insights Workshop",
      description: "Transform messy qualitative data into actionable business insights",
      price: "$1,997",
      link: "/qualitative-data-insights-workshop",
      badge: "Specialized",
      features: ["Data transformation", "AI-powered analysis", "Clear insights"]
    },
    "10x-executive": {
      id: "10x-executive",
      title: "10x Effective Executive Program",
      description: "10-week AI-powered transformation program for executive productivity",
      price: "$9,999",
      link: "/10x-executive",
      badge: "Premium",
      features: ["10-week program", "1:1 coaching", "Executive focus"]
    },
    "triple-a-transformation": {
      id: "triple-a-transformation",
      title: "Triple-A Transformation Program", 
      description: "14-week comprehensive AI adoption program for organizations",
      price: "Custom",
      link: "/triple-a-transformation",
      badge: "Enterprise",
      features: ["14-week program", "Team transformation", "Measurable ROI"]
    }
  };

  // Define recommendation logic
  const getRecommendations = (): Service[] => {
    const recommendations: Service[] = [];
    
    switch (currentService) {
      case "ai-action-workshop":
        if (recommendationType === "upsell") {
          recommendations.push(allServices["10x-executive"], allServices["triple-a-transformation"]);
        } else if (recommendationType === "crosssell") {
          recommendations.push(allServices["qualitative-data-workshop"]);
        }
        break;
        
      case "qualitative-data-workshop":
        if (recommendationType === "upsell") {
          recommendations.push(allServices["10x-executive"]);
        } else if (recommendationType === "crosssell") {
          recommendations.push(allServices["ai-action-workshop"]);
        }
        break;
        
      case "10x-executive":
        if (recommendationType === "alternative" || recommendationType === "starter") {
          recommendations.push(allServices["ai-action-workshop"]);
        } else if (recommendationType === "upsell") {
          recommendations.push(allServices["triple-a-transformation"]);
        } else if (recommendationType === "crosssell") {
          recommendations.push(allServices["qualitative-data-workshop"]);
        }
        break;
        
      case "triple-a-transformation":
        if (recommendationType === "alternative" || recommendationType === "starter") {
          recommendations.push(allServices["ai-action-workshop"], allServices["10x-executive"]);
        } else if (recommendationType === "crosssell") {
          recommendations.push(allServices["qualitative-data-workshop"]);
        }
        break;
        
      default:
        // If no current service (e.g., blog post), show popular services
        if (recommendationType === "starter") {
          recommendations.push(allServices["ai-action-workshop"], allServices["qualitative-data-workshop"]);
        } else {
          recommendations.push(allServices["10x-executive"], allServices["triple-a-transformation"]);
        }
    }
    
    return recommendations.slice(0, maxServices);
  };

  const recommendedServices = getRecommendations();
  
  if (recommendedServices.length === 0) {
    return null;
  }

  // Generate contextual titles and descriptions
  const getContextualContent = () => {
    switch (recommendationType) {
      case "upsell":
        return {
          title: title || "Ready for More?",
          description: description || "Take your AI implementation to the next level with these advanced programs.",
          icon: <Sparkles className="h-5 w-5 text-yellow-500" />
        };
      case "crosssell":
        return {
          title: title || "You Might Also Like",
          description: description || "Expand your AI capabilities with these complementary services.",
          icon: <ArrowRight className="h-5 w-5 text-blue-500" />
        };
      case "alternative":
        return {
          title: title || "Other Options",
          description: description || "Explore alternative approaches that might better fit your needs.",
          icon: <ArrowRight className="h-5 w-5 text-green-500" />
        };
      case "starter":
        return {
          title: title || "Get Started",
          description: description || "Begin your AI transformation with these proven programs.",
          icon: <Sparkles className="h-5 w-5 text-purple-500" />
        };
    }
  };

  const contextualContent = getContextualContent();

  return (
    <section className="py-12 bg-gray-50 rounded-lg" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content={contextualContent.title} />
      <meta itemProp="description" content={contextualContent.description} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            {contextualContent.icon}
            <h2 className="text-2xl font-bold text-primary">
              {contextualContent.title}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {contextualContent.description}
          </p>
        </div>

        <div className={`grid gap-6 ${recommendedServices.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'}`}>
          {recommendedServices.map((service, index) => (
            <Card 
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-secondary/30 bg-white"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <meta itemProp="url" content={`https://gsdat.work${service.link}`} />
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {service.badge}
                  </Badge>
                  <span className="text-lg font-bold text-secondary" itemProp="offers">
                    {service.price}
                  </span>
                </div>
                
                <CardTitle 
                  className="text-xl group-hover:text-secondary transition-colors"
                  itemProp="name"
                >
                  <Link to={service.link} className="hover:underline">
                    {service.title}
                  </Link>
                </CardTitle>
                
                <CardDescription itemProp="description">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ArrowRight className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 group-hover:shadow-md transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">
            Not sure which program is right for you?
          </p>
          <Link to="https://calendly.com/gsdatwork/free-consult" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};