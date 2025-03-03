
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Get Stuff Done with AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Turn AI possibilities into real business results. We help you identify what matters and execute 10x faster. From strategy to implementation, we're obsessed with GSD (Getting Stuff Done).
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
            <Button
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-semibold"
              onClick={scrollToServices}
            >
              See How We Execute
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Schedule Strategic Planning Call
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border border-primary text-primary hover:bg-primary/10 gap-2"
              onClick={() => window.location.href = "tel:+18482610259"}
            >
              <Phone className="h-4 w-4" />
              Call Now: (848) 261-0259
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
