
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
    title: "AI Strategy Workshop",
    description: "2-hour accelerated working session to identify your highest-impact AI opportunities",
    price: "$2,499 per session",
    features: [
      "Hands-on implementation with state-of-the-art AI tools",
      "Clear action plan with specific next steps",
      "1-3 participants from your team",
      "Live coaching and guidance",
    ],
    cta: "Book Workshop",
    calendlyLink: "https://calendly.com/gsdatwork/ai-workshop",
  },
  {
    title: "AI Transformation Program",
    description: "14-week program to revolutionize your operations with AI",
    price: "Starting at $25,000 + Performance Incentives",
    subtext: "Pricing tied to measurable business outcomes",
    features: [
      "Comprehensive AI opportunity assessment",
      "Custom implementation roadmap",
      "Team training and change management",
      "Weekly strategic guidance",
      "Performance-based pricing structure",
      "ROI-focused metrics and tracking",
    ],
    cta: "Schedule Discovery Call",
    calendlyLink: "https://calendly.com/gsdatwork/free-consult",
  },
  {
    title: "Strategic AI Partnership",
    description: "Ongoing strategic partnership for enterprise-level transformation",
    price: "Custom Pricing Based on Scope",
    subtext: "Includes base retainer + performance incentives",
    features: [
      "Fractional Chief AI Officer services",
      "Full AI transformation strategy",
      "Custom implementation across departments",
      "Priority access and support",
      "Team training and development",
      "Monthly strategic reviews",
      "Results-based compensation structure",
    ],
    cta: "Schedule Consultation",
    calendlyLink: "https://calendly.com/gsdatwork/free-consult",
  },
];

const valueMetrics = [
  "Cost reduction achieved",
  "Revenue increased",
  "Productivity gains",
  "Time saved",
  "ROI delivered",
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
            Choose the right path for your AI transformation journey
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-secondary"
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
              <CardFooter className="pt-4">
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-6"
                  onClick={() => service.calendlyLink && window.open(service.calendlyLink, '_blank')}
                >
                  {service.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Value-Based Pricing Section */}
        <div className="mt-24 mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-primary">
            Our Approach to Value-Based Pricing
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe in aligning our success with yours. After our initial engagement, 
            we offer flexible pricing structures that tie our compensation to measurable business outcomes:
          </p>
          <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
            {valueMetrics.map((metric) => (
              <li key={metric} className="flex items-center">
                <svg
                  className="h-5 w-5 text-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-gray-600">{metric}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-600">
            This ensures we're fully invested in delivering real, measurable value for your business.
          </p>
          <div className="mt-8">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Learn More About Our ROI-Focused Approach
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
