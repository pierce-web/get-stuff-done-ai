
import React from "react";
import { Users } from "lucide-react";

export const WhoShouldAttendSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Who Should Watch?
          </h2>
          
          <p className="text-gray-700 mb-6 text-center">
            This recording is valuable for forward-thinking legal professionals, including:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Law Firm Partners & Managing Partners</h3>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Practicing Attorneys</h3>
              </div>
              <p className="text-gray-700 mt-2 ml-16">
                PI, Criminal Defense, HOA, Corporate, etc.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Legal Operations Leaders & Staff</h3>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Anyone in a Law Firm</h3>
              </div>
              <p className="text-gray-700 mt-2 ml-16">
                Looking to understand practical AI applications beyond theory.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 text-center font-medium">
            Bridge the gap between AI's potential and your firm's reality. See how to leverage this technology effectively, gain a competitive edge, <span className="text-secondary font-semibold">and see a $2,500 value workflow transformation demonstrated.</span>
          </p>
          
          <div className="bg-blue-50 border border-secondary/20 rounded-lg p-6 mt-8 text-center">
            <p className="text-gray-800 font-medium">
              <span className="font-bold text-secondary">In this replay:</span> Witness a $2,500 value workflow transformation and learn how to apply the same process to your own firm's operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
