
import React from "react";

export const AgendaSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Event Agenda
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center">
                  12:00 - 12:30 PM EDT
                </div>
                <div>
                  <h3 className="text-xl font-bold">Welcome & Addressing Your Burning AI Questions</h3>
                  <p className="text-gray-600 text-sm">Christian Ulstrup & Ryan Markman</p>
                </div>
              </div>
              <p className="text-gray-700">
                Introductions, overview of the session's goals, and tackling pre-submitted or common AI concerns specific to lawyers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center">
                  12:30 - 1:00 PM EDT
                </div>
                <div>
                  <h3 className="text-xl font-bold">Live AI Workflow Transformation: The "Cooking Show" in Action</h3>
                  <p className="text-gray-600 text-sm">Christian Ulstrup</p>
                </div>
              </div>
              <p className="text-gray-700">
                The core of the session. Watch Christian Ulstrup build and demonstrate AI solutions for a real legal workflow provided by the selected live participant.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center">
                  1:00 - 1:30 PM EDT
                </div>
                <div>
                  <h3 className="text-xl font-bold">Key Insights, Q&A, and Next Steps for Your Firm</h3>
                  <p className="text-gray-600 text-sm">Ryan Markman & Christian Ulstrup</p>
                </div>
              </div>
              <p className="text-gray-700">
                Processing the live build. Discussing the key takeaways, potential ROI, and how to apply these principles strategically within different law firm contexts. Open floor for attendee questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
