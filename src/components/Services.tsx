
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

const services = [
  {
    title: "2-Hour AI Action Workshop",
    description: "Hands-on working session where you'll implement real AI solutions and leave with concrete results—no theoretical discussions, just pure execution",
    price: "$2,499 per session",
    subtext: "Satisfaction Guaranteed",
    extraText: "Ready to implement AI right now? Our workshop delivers immediate, concrete results you can use.",
    features: [
      "Achieve concrete results with hands-on AI implementation",
      "Get coached through rapid implementation with proven frameworks",
      "Develop repeatable processes and SOPs for your team",
      "Access to state-of-the-art AI tools and templates",
      "Includes pre-session discovery and post-session support",
    ],
    cta: "Book Workshop",
    secondaryCta: "Not sure yet? Talk to our AI Assistant",
    calendlyLink: "https://calendly.com/gsdatwork/ai-workshop",
  },
  {
    title: "10x Effective Executive",
    description: "A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep you ahead",
    price: "$10,000",
    subtext: "One-time engagement fee",
    extraText: "Ready for a systematic approach to AI adoption? Our 10-week program delivers measurable results for busy executives.",
    features: [
      "Weekly 1:1 coaching sessions (50 minutes each)",
      "Personalized AI tool stack tailored to your needs",
      "Cut email handling time by 50-80%",
      "Amplify your authority with AI-powered content",
      "Measurable outcomes tied to your key results",
    ],
    cta: "Learn More",
    secondaryCta: "Schedule a Consultation",
    calendlyLink: "https://calendly.com/gsdatwork/free-consult",
    learnMoreLink: "/10x-executive", // Link to the dedicated page
  },
  {
    title: "Triple-A Transformation Program",
    description: "14-week program to revolutionize your operations with AI (Triple-A = Accelerated AI Adoption)",
    price: "Starting at $25,000 + Performance Incentives",
    subtext: "Pricing tied to measurable business outcomes",
    extraText: "Ready to go beyond quick wins? Our transformation program helps you revolutionize your operations with AI.",
    features: [
      "Fractional Chief AI Officer services",
      "Comprehensive AI opportunity assessment",
      "Custom implementation roadmap",
      "Team training and change management",
      "ROI-focused metrics and tracking",
    ],
    cta: "Schedule Discovery Call",
    secondaryCta: "Have questions? Call our AI Assistant",
    calendlyLink: "https://calendly.com/gsdatwork/free-consult",
  },
];

const valueMetrics = [
  "Immediate cost reduction (e.g., 30-40% on target processes)",
  "Direct revenue impact (e.g., 25%+ growth in target areas)",
  "Productivity gains (e.g., 3x faster execution on key tasks)",
  "Time saved (e.g., 15+ hours per week per team)",
  "ROI delivered (e.g., 5-10x return)",
];

export const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Services & Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the right path for your AI transformation journey
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col justify-between">
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
          ))}
        </div>

        {/* Value-Based Pricing Section */}
        <div className="mt-24 mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-primary">
            Our Approach to Value-Based Pricing
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe in aligning our success with yours. After our initial engagement, 
            we offer flexible pricing structures that tie our compensation to measurable business outcomes:
          </p>
          <ul className="mt-8 space-y-4 text-left mx-auto">
            {valueMetrics.map((metric) => (
              <li key={metric} className="flex items-start">
                <svg
                  className="h-6 w-6 text-secondary flex-shrink-0 mt-1"
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
          <p className="mt-6 text-gray-600 font-medium">
            Results typically seen within first 30 days
          </p>
          <p className="mt-8 text-gray-600">
            This ensures we're fully invested in delivering real, measurable value for your business.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                onClick={() => window.open("https://love.gsdat.work", "_blank")}
              >
                See Client Success Stories
              </Button>
              <Button
                variant="outline"
                className="border border-primary text-primary hover:bg-primary/10 gap-2"
                onClick={() => window.location.href = "tel:+18482610259"}
              >
                <Phone className="h-4 w-4" />
                <span>
                  <span className="font-medium">Talk to our AI Assistant</span>
                  <span className="block text-xs">(848) 261-0259</span>
                </span>
              </Button>
            </div>
            <p className="text-gray-600">
              Or{" "}
              <a 
                href="https://calendly.com/gsdatwork/free-consult" 
                target="_blank" 
                className="text-secondary hover:text-secondary/90 font-medium inline-flex items-center"
              >
                book a quick call to discuss your goals →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
