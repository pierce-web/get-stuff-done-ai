
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
    <div className="relative overflow-hidden py-24 sm:py-32 md:py-40 animate-fade-in">
      {/* Background gradient elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
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
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              className="py-5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base w-full sm:w-auto sm:px-8 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={scrollToServices}
            >
              See How We Execute
            </Button>
            <Button
              variant="outline"
              className="py-5 border-2 border-secondary text-secondary hover:bg-secondary/10 text-base w-full sm:w-auto sm:px-8 shadow-sm hover:shadow transition-all duration-300"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Schedule Strategic Planning Call
            </Button>
            <Button
              variant="outline"
              className="py-5 border border-primary text-primary hover:bg-primary/10 gap-2 text-base w-full sm:w-auto sm:px-8 shadow-sm hover:shadow transition-all duration-300"
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
