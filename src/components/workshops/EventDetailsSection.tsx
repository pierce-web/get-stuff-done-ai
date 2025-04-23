
import React from "react";
import { CheckCircle } from "lucide-react";

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Tired of AI Hype? See Real Legal Workflows Transformed LIVE!
          </h2>
          
          <p className="text-gray-700 mb-6">
            The legal landscape is buzzing with talk of Artificial Intelligence, but how does it actually translate into tangible benefits for your law firm? Moving beyond theoretical discussions, this unique session offers a practical, sleeves-rolled-up approach to understanding and implementing AI.
          </p>
          
          <p className="text-gray-700 mb-6">
            Join AI implementation experts Christian Ulstrup (Principal, GSD at Work LLC) and Ryan Markman (CEO, Melior) for a dynamic, live working session – think of it as an "AI Cooking Show" specifically for lawyers. We won't just talk about AI; we'll demonstrate its power in real-time by tackling a genuine legal workflow submitted by one selected attendee.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-secondary p-6 mb-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-primary mb-3">The $2,500 Live Workflow Transformation Opportunity</h3>
            <p className="text-gray-700 mb-4">
              One participant will receive an invaluable <span className="font-semibold">live, hands-on workflow transformation</span> during the session, guided by Christian Ulstrup. This is the same process offered in our private 2-Hour AI Action Workshops, valued at $2,500. You'll work directly with Christian to analyze one of <em>your</em> firm's specific workflows (using anonymized data/examples for confidentiality) and see how AI tools can be implemented step-by-step to drive efficiency. This is an unparalleled chance to get personalized, expert AI implementation insight for your practice.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">How is the participant selected?</span> Attendees who express interest in being the live participant will be considered. We will contact potential candidates before the event to briefly discuss their workflow and ensure it's a good fit for the live demonstration, benefiting both the participant and all attendees.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-primary">What Makes This Session Different?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Live Workflow Build:</strong> Witness the step-by-step process of analyzing and accelerating a real legal workflow using cutting-edge AI tools. No simulations, just practical application.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Focus on Actionable Insights:</strong> Learn how AI can automate tasks, enhance analysis, and improve efficiency in areas relevant to your practice (e.g., intake analysis, discovery review, document drafting, case preparation).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Expert Guidance:</strong> Benefit from Christian's extensive experience across 100+ AI implementations (including multiple law firms) and Ryan's deep understanding of org-wide AI adoption.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Demystify AI for Legal:</strong> Understand the tools, techniques, and strategies that are delivering real value in law firms today.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span><strong>Boost Efficiency & Profitability:</strong> Leave with concrete ideas and the confidence to identify and implement high-impact AI use cases within your own firm.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
