
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ExternalLink } from "lucide-react";
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

interface ServiceCardProps {
  service: ServiceType;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
        <CardDescription className="mt-2">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {service.extraText && (
          <p className="mb-4 text-gray-600">{service.extraText}</p>
        )}
        <ul className="space-y-4">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <svg
                className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <p className="text-xl font-bold text-primary">{service.price}</p>
          {service.subtext && (
            <p className="text-sm text-gray-500 mt-1">{service.subtext}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex flex-col gap-3">
        {service.learnMoreLink ? (
          <Link to={service.learnMoreLink} className="w-full">
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-6 flex items-center gap-2"
            >
              {service.cta}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button 
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-6"
            onClick={() => service.calendlyLink && window.open(service.calendlyLink, '_blank')}
          >
            {service.cta}
          </Button>
        )}
        <Button
          variant="outline"
          className="w-full border border-primary text-primary hover:bg-primary/10 gap-2 text-sm"
          onClick={() => service.calendlyLink && window.open(service.calendlyLink, '_blank')}
        >
          <Phone className="h-4 w-4" />
          <span>{service.secondaryCta}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
