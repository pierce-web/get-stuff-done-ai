
import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Phone, CheckCircle } from "lucide-react";

const AssociateCallConfirmed: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Interview Call Booked | GSD@Work Associate Program" 
        description="Your interview call for the GSD@Work Associate Program is confirmed. Next steps to prepare for your call."
      />
      
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-gray-50">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-8 md:p-12 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            You're booked! 
          </h1>
          
          <div className="space-y-6 text-gray-700 mb-8">
            <p className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-secondary" />
              <span className="font-semibold">Call +1 (985) 509-0083</span>
            </p>
            
            <div className="bg-gray-100 rounded-lg p-4">
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>The line is open 24 × 7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Have a quiet place and 10–15 min ready</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Don't skip this step—Christian will read your transcript before meeting you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AssociateCallConfirmed;
