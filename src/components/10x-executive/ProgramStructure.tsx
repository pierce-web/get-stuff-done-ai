
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const ProgramStructure: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">Program Structure</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            A proven 10-week framework designed to deliver rapid, sustainable results
          </p>

          <div className="space-y-12">
            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Weeks 1-2: Assessment & Setup</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive workflow audit and bottleneck identification</li>
                <li>• Personalized AI toolset selection and setup</li>
                <li>• Initial quick wins implementation</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Weeks 3-6: Core Systems Implementation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Email management system setup and optimization</li>
                <li>• Meeting effectiveness protocols implementation</li>
                <li>• Decision-making frameworks and AI-assisted intelligence gathering</li>
                <li>• Content creation and amplification systems</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Weeks 7-9: Advanced Integration & Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Team delegation and collaboration enhancement</li>
                <li>• Custom workflow automation</li>
                <li>• Personalized prompting strategies and advanced AI usage</li>
                <li>• Metrics tracking and system refinement</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Week 10: Sustainability & Future Growth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Long-term sustainability planning</li>
                <li>• Creating your personal AI roadmap</li>
                <li>• Measuring and communicating ROI</li>
                <li>• Final optimization and review</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">What's Included:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>10 weekly one-on-one coaching sessions (50 minutes each)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Custom AI toolset recommendations and implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Implementation guides and process templates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Email and chat support between sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Lifetime access to program resources and updates</span>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white shadow-md px-8 py-2"
                onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
              >
                Apply For This Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
