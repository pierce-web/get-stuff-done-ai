
import React from "react";

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is this just another theoretical AI presentation?</h3>
              <p className="text-gray-700">
                Not at all. This is a hands-on, practical demonstration where you'll see real AI tools applied to a real legal workflow in real-time. You'll witness the transformation process from start to finish.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How will the "live participant" whose workflow is used be chosen?</h3>
              <p className="text-gray-700">
                One attendee will be selected from those who express interest. We'll reach out before the session to gather information about your workflow, ensuring it's representative and beneficial for the broader audience.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What specific legal workflows will be covered?</h3>
              <p className="text-gray-700">
                The exact workflow will depend on the selected participant, but could include intake analysis, discovery review, document drafting, case preparation, client communication, or legal research. The principles demonstrated will be applicable across multiple practice areas.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do I need to be highly technical to benefit from this session?</h3>
              <p className="text-gray-700">
                Not at all. This session is specifically designed for legal professionals, not technologists. We focus on practical applications that don't require coding knowledge or deep technical expertise.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is it safe/confidential to discuss workflows in this session?</h3>
              <p className="text-gray-700">
                Yes. For the live participant, we'll work with anonymized data and generic examples. All attendees can rest assured that client confidentiality will be maintained throughout the session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
