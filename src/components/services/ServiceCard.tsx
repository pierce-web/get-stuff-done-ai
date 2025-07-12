
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceType } from "./types";
import { ServiceFeaturesList } from "./ServiceFeaturesList";
import { animations, shadows, typography, borderRadius, gradients } from "@/lib/design-tokens";

interface ServiceCardProps {
  service: ServiceType;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className={`group flex flex-col justify-between ${shadows.floating} ${shadows.floatingHover} hover:-translate-y-2 hover:rotate-1 hover:scale-[1.02] transition-all duration-500 ${borderRadius.xl} relative overflow-hidden border-0 ring-1 ring-gray-200/50 hover:ring-secondary/30`}>
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
        <CardDescription className="mt-2">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        {service.extraText && (
          <p className="mb-4 text-gray-700 bg-secondary/5 p-3 rounded-md border border-secondary/10 text-sm">
            <strong className="text-secondary">ROI: </strong>
            {service.extraText}
          </p>
        )}
        <ServiceFeaturesList features={service.features} />
        <div className="mt-6">
          <p className="text-xl font-bold text-primary">{service.price}</p>
          {service.subtext && (
            <p className="text-sm text-gray-500 mt-1">{service.subtext}</p>
          )}
          
          {/* Display pricing tiers if available */}
          {service.pricingTiers && service.pricingTiers.length > 0 && (
            <div className="mt-4 space-y-3">
              {service.pricingTiers.map((tier, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{tier.label}</p>
                      {tier.description && (
                        <p className="text-xs text-gray-600 mt-0.5">{tier.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-secondary">{tier.price}</p>
                      {tier.availability && (
                        <p className="text-xs text-gray-500 mt-0.5">{tier.availability}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex flex-col gap-3 relative z-10">
        {service.learnMoreLink && (
          <Link to={service.learnMoreLink} className="w-full">
            <Button 
              className={`w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-6 ${typography.touchTargets.button} flex items-center gap-2 ${shadows.buttonEffect} hover:shadow-lg hover:shadow-secondary/20`}
            >
              Learn More
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        )}
        
        <Button 
          variant="outline"
          className={`w-full border border-primary text-primary hover:bg-primary/10 gap-2 ${typography.touchTargets.button} ${shadows.buttonEffect} hover:border-primary/70`}
          onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
        >
          <Calendar className="h-4 w-4" />
          Schedule Strategy Call
        </Button>
      </CardFooter>
    </Card>
  );
};
