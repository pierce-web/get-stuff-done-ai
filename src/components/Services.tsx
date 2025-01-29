import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "A La Carte Sessions",
    description: "2-hour accelerated AI adoption working sessions",
    features: [
      "1-3 participants",
      "Live coaching",
      "Hands-on implementation",
      "State-of-the-art AI tools",
    ],
    cta: "Book Session",
    calendlyLink: "#", // Replace with actual Calendly link
  },
  {
    title: "C-Level Office Hours",
    description: "Strategic AI consultation for executives",
    price: "$2,000 per session",
    features: [
      "Executive-level guidance",
      "Strategic planning",
      "Implementation roadmap",
      "Priority access",
    ],
    cta: "Schedule Consultation",
  },
  {
    title: "Fractional Chief AI Officer",
    description: "14-week accelerated AI adoption cycle",
    price: "$100,000",
    features: [
      "Complete AI transformation",
      "Custom implementation",
      "Team training",
      "Ongoing support",
    ],
    cta: "Contact Us",
  },
];

export const Services = () => {
  return (
    <div id="services" className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Services & Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect package for your AI adoption journey
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-primary-light"
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
              </CardContent>
              <CardFooter>
                {service.price && (
                  <p className="mb-4 text-lg font-semibold">{service.price}</p>
                )}
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {service.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};