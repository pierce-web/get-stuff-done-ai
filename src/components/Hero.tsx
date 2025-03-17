
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { shadows, gradients, buttonStyles, animations, spacing } from "@/lib/design-tokens";

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative overflow-hidden ${spacing.section.lg} ${animations.fadeIn}`}>
      {/* Background gradient elements */}
      <div className={`absolute -top-24 -right-24 w-96 h-96 ${gradients.decorative.secondary}`} />
      <div className={`absolute -bottom-24 -left-24 w-96 h-96 ${gradients.decorative.primary}`} />
      
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
              className={`${buttonStyles.primary} ${buttonStyles.sizes.large} font-semibold w-full sm:w-auto ${shadows.buttonEffect}`}
              onClick={scrollToServices}
            >
              See How We Execute
            </Button>
            <Button
              variant="outline"
              className={`${buttonStyles.outline.secondary} ${buttonStyles.sizes.large} w-full sm:w-auto ${shadows.buttonEffect}`}
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Schedule Strategic Planning Call
            </Button>
            <Button
              variant="outline"
              className={`${buttonStyles.outline.primary} ${buttonStyles.sizes.large} gap-2 w-full sm:w-auto ${shadows.buttonEffect}`}
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
