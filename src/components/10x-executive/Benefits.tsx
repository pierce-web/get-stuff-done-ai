
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Email Mastery for Teams",
      description: "Cut your organization's email handling time by 50-80% with AI-powered systems that your entire team can leverage.",
    },
    {
      title: "Meeting Transformation",
      description: "Transform team meetings with AI-assisted agenda setting, note-taking, summarization, and automated follow-ups.",
    },
    {
      title: "Scalable AI Delegation",
      description: "Build systems where your entire team learns to delegate to AI, multiplying productivity across departments.",
    },
    {
      title: "Strategic Decision-Making",
      description: "Empower your organization with AI-driven intelligence gathering and analysis for faster, better decisions.",
    },
    {
      title: "Content & Knowledge Amplification",
      description: "Create AI-powered content systems that maintain your organization's voice while scaling thought leadership.",
    },
    {
      title: "Organization-Wide Workflows",
      description: "Develop AI workflows that integrate seamlessly across teams, spreading best practices virally.",
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Transform How Your Organization Works</h2>
          <p className="text-lg text-gray-600">
            The 10x Effective Executive program delivers proven systems to help leaders and their teams harness AI for exponential productivity gains across the entire organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4"><CheckCircle className="h-8 w-8 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            className="bg-secondary hover:bg-secondary/90 text-white shadow-md px-8 py-6 text-lg"
            onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
          >
            Schedule a Strategy Call
          </Button>
          <p className="mt-4 text-gray-600">
            Transform your executive leadership to drive organization-wide AI adoption.
          </p>
        </div>
      </div>
    </section>
  );
};
