
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
            5 intensive bi-weekly sessions over 10 weeks to transform your organization's productivity
          </p>

          <div className="space-y-12">
            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Session 1: Foundation & Quick Wins</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive workflow audit for executive and key team members</li>
                <li>• AI toolset selection and initial setup</li>
                <li>• Immediate productivity gains implementation</li>
                <li>• Team readiness assessment and engagement planning</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Session 2: Core Systems Implementation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Email and communication systems optimization</li>
                <li>• Meeting effectiveness protocols for teams</li>
                <li>• Team collaboration enhancement with AI tools</li>
                <li>• Knowledge sharing processes setup</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Session 3: Strategic AI Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Decision-making frameworks with AI</li>
                <li>• Content creation and thought leadership amplification</li>
                <li>• Delegation strategies (both to AI and team)</li>
                <li>• Cross-functional process optimization</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Session 4: Advanced Automation & Scaling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom workflow automation across the organization</li>
                <li>• Advanced prompting strategies for teams</li>
                <li>• Metrics and ROI tracking setup</li>
                <li>• Department-specific AI implementation</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Session 5: Sustainability & Expansion</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Long-term AI roadmap for the organization</li>
                <li>• Knowledge transfer protocols</li>
                <li>• Future growth planning and capability building</li>
                <li>• Final optimization and success celebration</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">What's Included:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>5 bi-weekly intensive sessions (2 hours each)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Flexible team participation - bring relevant team members to each session</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Custom AI toolset for your entire organization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Implementation guides and scalable process templates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Email and chat support between sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span>Session recordings for knowledge sharing</span>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white shadow-md px-8 py-2"
                onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
              >
                Schedule a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
