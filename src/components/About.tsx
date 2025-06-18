
import { Button } from "@/components/ui/button";
import { GraduationCap, CircuitBoard, TrendingUp, File } from "lucide-react";
import { animations, gradients } from "@/lib/design-tokens";
import { SEOHeading, SEOParagraph, KeywordRichContent } from "@/components/seo/KeywordRichContent";

export const About = () => {
  return (
    <div className="py-16 sm:py-24 bg-gray-50/50 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SEOHeading 
            level={2} 
            className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            keywords={["AI implementation expert", "AI consulting", "business automation"]}
          >
            About Christian Ulstrup - AI Implementation Expert
          </SEOHeading>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Photo */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-[180px] h-[180px] sm:w-[360px] sm:h-[360px]">
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
                As a former MIT AI Conference Co-Chair and startup executive, Christian brings deep expertise in translating AI possibilities into concrete business results.
              </p>
              <p className="mb-12">
                Working with enterprise and growth-stage companies across regulated industries, he has consistently delivered transformative outcomes: 30-40% cost reduction in target processes, and productivity gains ranging from 100% to 2,000%. His focus is on quick wins that build momentum for larger transformations.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-12">
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                >
                  <GraduationCap className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">MIT Sloan MBA</span>
                  <span className="text-sm text-gray-500">Graduate</span>
                </div>
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                >
                  <CircuitBoard className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">MIT AI</span>
                  <span className="text-sm text-gray-500">Former Co-Chair</span>
                </div>
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
                >
                  <TrendingUp className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">Productivity Gains</span>
                  <span className="text-sm text-gray-500">100-2,000% Improvement</span>
                </div>
                <div 
                  className={`flex flex-col items-center text-center p-6 ${gradients.cardGlass} rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${animations.hoverLift} ${animations.hoverGlow} hover:bg-white/90 h-full group ${animations.scaleIn}`}
                  style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
                >
                  <File className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-primary">Patent Holder</span>
                  <span className="text-sm text-gray-500">Medical Imaging AI</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <Button
                  className={`w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 sm:py-2 ${animations.hoverLift} ${animations.hoverGlow} hover:shadow-secondary/25`}
                  onClick={() => window.open("https://www.linkedin.com/in/christianulstrup/", "_blank")}
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className={`w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary/10 py-6 sm:py-2 ${animations.hoverLift} hover:border-secondary/70`}
                  onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                >
                  Schedule Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* GSD Associates Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Expanding Our Impact Through GSD Associates
            </h3>
            
            <div className="text-left space-y-6 text-gray-600">
              <p className="text-lg">
                To meet the growing demand for AI transformation services, we've established the GSD Associate Program. 
                Our associates are carefully selected professionals who share our commitment to delivering practical, 
                results-driven AI implementations.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  GSD Certified Associates:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Are hand-selected based on their expertise and alignment with our methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Complete rigorous training in the GSD AI Action Workshop framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Deliver the same transformative results at a more accessible price point</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Operate with Christian's oversight to ensure quality and consistency</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg font-semibold text-secondary text-center pt-4">
                This expansion allows us to serve more organizations while maintaining our 
                commitment to exceptional results and client satisfaction.
              </p>
              
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className={`border-2 border-secondary text-secondary hover:bg-secondary/10 ${animations.hoverLift}`}
                  onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                >
                  Learn More About Working With Associates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
