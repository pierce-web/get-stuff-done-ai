
import { Button } from "@/components/ui/button";
import { GraduationCap, CircuitBoard, TrendingUp, File } from "lucide-react";

export const About = () => {
  return (
    <div className="py-24 sm:py-32 bg-gray-50/50 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            About
          </h2>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Photo */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-[270px] h-[270px] sm:w-[360px] sm:h-[360px]">
              <div className="absolute inset-0 rounded-full bg-gray-100"></div>
              <img
                src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png"
                alt="Christian Ulstrup"
                className="relative rounded-full w-full h-full object-cover shadow-lg"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/5">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Christian Ulstrup
            </h3>
            <h4 className="text-xl sm:text-2xl font-semibold text-secondary mb-8">
              AI Implementation Expert | Founder, GSD at Work
            </h4>

            <div className="space-y-8 text-gray-600">
              <p>
                As the Former MIT AI Co-Chair and startup executive, Christian brings deep expertise in translating AI possibilities into concrete business results. His unique approach combines technical knowledge with practical business acumen to deliver rapid, measurable outcomes.
              </p>
              <p>
                Working with enterprise and growth-stage companies across regulated industries, Christian has consistently delivered transformative results: 30-40% cost reduction in target processes, and productivity gains ranging from 100% to 2,000%. His focus is on quick wins that build momentum for larger transformations.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-12">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:bg-gray-100">
                  <GraduationCap className="w-8 h-8 text-secondary mb-3" />
                  <span className="font-semibold text-primary">MIT Sloan MBA</span>
                  <span className="text-sm text-gray-500">Graduate</span>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:bg-gray-100">
                  <CircuitBoard className="w-8 h-8 text-secondary mb-3" />
                  <span className="font-semibold text-primary">MIT AI</span>
                  <span className="text-sm text-gray-500">Former Co-Chair</span>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:bg-gray-100">
                  <TrendingUp className="w-8 h-8 text-secondary mb-3" />
                  <span className="font-semibold text-primary">Productivity Gains</span>
                  <span className="text-sm text-gray-500">100-2,000% Improvement</span>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:bg-gray-100">
                  <File className="w-8 h-8 text-secondary mb-3" />
                  <span className="font-semibold text-primary">Patent Holder</span>
                  <span className="text-sm text-gray-500">Medical Imaging AI</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-16">
                <Button
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-semibold transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/christianulstrup/", "_blank")}
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300"
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
