
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <div className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            About
          </h2>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Photo */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gray-100"></div>
              <img
                src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png"
                alt="Christian Ulstrup"
                className="relative rounded-full w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/5">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Christian Ulstrup
            </h3>
            <h4 className="text-xl sm:text-2xl font-semibold text-secondary mb-8">
              Principal and Founder
            </h4>

            <div className="space-y-6 text-gray-600">
              <p>
                As a leader in MIT's AI initiatives and former startup executive, Christian brings deep expertise in translating AI possibilities into concrete business results. His unique approach combines technical knowledge with practical business acumen to deliver rapid, measurable outcomes.
              </p>
              <p>
                Working with organizations across industries, Christian has consistently delivered transformative results: 30-40% cost reduction in target processes, and productivity gains ranging from 100% to 2,000%. His focus is on quick wins that build momentum for larger transformations.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-primary">MIT Sloan MBA</span>
                  <span className="text-sm text-gray-500">Graduate</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-primary">MIT AI</span>
                  <span className="text-sm text-gray-500">Former Co-Chair</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-primary">Client Impact</span>
                  <span className="text-sm text-gray-500">5-10x ROI Delivered</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-semibold"
                  onClick={() => window.open("https://www.linkedin.com/in/christianulstrup/", "_blank")}
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary/10"
                  onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
