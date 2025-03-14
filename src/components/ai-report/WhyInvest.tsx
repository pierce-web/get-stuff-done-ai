
import React from "react";
import { BarChart, CheckCircle, ShieldCheck } from "lucide-react";

const WhyInvest = () => {
  return (
    <section id="why-invest" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary">2. Why Invest in AI Tools Now</h2>
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 flex items-start pt-1">
              <div className="bg-secondary/10 rounded-full p-2">
                <BarChart className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Productivity Gains</h3>
              <p>AI-based assistants, coding agents, and transcription tools dramatically cut down on repetitive work, allowing your team to focus on higher-value tasks.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 flex items-start pt-1">
              <div className="bg-secondary/10 rounded-full p-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Competitive Advantage</h3>
              <p>Staying on the cutting edge of tech can differentiate your brand, attract top talent, and give you a faster path from idea to execution.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 flex items-start pt-1">
              <div className="bg-secondary/10 rounded-full p-2">
                <ShieldCheck className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Scalable Efficiency</h3>
              <p>Many AI tools charge per usage, letting you pay only for what you need—but you have the option to scale up quickly as your workloads grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
