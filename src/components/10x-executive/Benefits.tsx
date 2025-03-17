
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Email Mastery",
      description: "Cut your email handling time by 50-80% with AI-powered systems that organize, draft, and respond effectively.",
    },
    {
      title: "Meeting Effectiveness",
      description: "Transform meetings with AI-assisted agenda setting, note-taking, summarization, and follow-up automation.",
    },
    {
      title: "Delegate to AI",
      description: "Learn to delegate appropriate tasks to AI, freeing you to focus on the highest-impact activities only you can perform.",
    },
    {
      title: "Strategic Decision-Making",
      description: "Leverage AI to gather better intelligence, analyze complex data, and make more informed decisions, faster.",
    },
    {
      title: "Content Amplification",
      description: "Amplify your authority with AI-powered content creation that maintains your voice while saving hours.",
    },
    {
      title: "Customized Workflow",
      description: "Develop a personalized AI workflow that integrates seamlessly with your existing processes and tools.",
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Transform How You Work</h2>
          <p className="text-lg text-gray-600">
            The 10x Effective Executive program delivers proven systems to help busy leaders harness AI for exponential productivity, without technical complexity.
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
            Schedule Your Free Consultation
          </Button>
          <p className="mt-4 text-gray-600">
            Limited availability. Only accepting 2 executives per quarter.
          </p>
        </div>
      </div>
    </section>
  );
};
