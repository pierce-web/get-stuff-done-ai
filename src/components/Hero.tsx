
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
    <div className="relative py-16 sm:py-24 md:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Get Stuff Done with AI
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-secondary">
            From <span className="font-bold">Insight</span> to <span className="font-bold">Action</span> in <em>minutes</em>, not months
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-600 px-2 sm:px-0">
            Turn AI possibilities into real business results. We help you identify what matters and execute 10x faster. From strategy to implementation, we're obsessed with GSD (Getting Stuff Done).
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 px-4">
            <Button
              className="w-full py-5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base"
              onClick={scrollToServices}
            >
              See How We Execute
            </Button>
            <Button
              variant="outline"
              className="w-full py-5 border-2 border-secondary text-secondary hover:bg-secondary/10 text-base"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Schedule Strategic Planning Call
            </Button>
            <Button
              variant="outline"
              className="w-full py-5 border border-primary text-primary hover:bg-primary/10 gap-2 text-base"
              onClick={() => window.location.href = "tel:+18482610259"}
            >
              <Phone className="h-4 w-4" />
              <span>
                <span className="font-medium">Speak with our AI Assistant</span>
                <span className="block text-xs md:text-sm">(848) 261-0259</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
