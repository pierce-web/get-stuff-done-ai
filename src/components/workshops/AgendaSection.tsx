
import React from "react";
import { Video } from "lucide-react";

export const AgendaSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Webinar Replay Highlights
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center flex items-center justify-center md:justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  <span>Part 1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Understanding Burning AI Questions for Lawyers</h3>
                  <p className="text-gray-600 text-sm">Christian Ulstrup & Ryan Markman</p>
                </div>
              </div>
              <p className="text-gray-700">
                Introductions, overview of the session's goals, and addressing common AI concerns specific to lawyers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center flex items-center justify-center md:justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  <span>Part 2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Watch the Live AI Workflow Transformation</h3>
                  <p className="text-gray-600 text-sm">Christian Ulstrup</p>
                </div>
              </div>
              <p className="text-gray-700">
                The core of the session. See Christian Ulstrup build and demonstrate AI solutions for a real legal workflow, transforming it before your eyes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center flex items-center justify-center md:justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  <span>Part 3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Key Insights and Next Steps for Your Firm</h3>
                  <p className="text-gray-600 text-sm">Ryan Markman & Christian Ulstrup</p>
                </div>
              </div>
              <p className="text-gray-700">
                Processing the live build. Learn about key takeaways, potential ROI, and how to apply these principles strategically within your own law firm context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
