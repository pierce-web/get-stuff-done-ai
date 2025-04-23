
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">Is this just another theoretical AI presentation?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Not at all. This is a hands-on, practical demonstration where you'll see real AI tools applied to a real legal workflow in real-time. You'll witness the transformation process from start to finish.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">How will the "live participant" whose workflow is used be chosen?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                One attendee will be selected from those who express interest. We'll reach out before the session to gather information about your workflow, ensuring it's representative and beneficial for the broader audience.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">What specific legal workflows will be covered?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                The exact workflow will depend on the selected participant, but could include intake analysis, discovery review, document drafting, case preparation, client communication, or legal research. The principles demonstrated will be applicable across multiple practice areas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">Do I need to be highly technical to benefit from this session?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Not at all. This session is specifically designed for legal professionals, not technologists. We focus on practical applications that don't require coding knowledge or deep technical expertise.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">Is it safe/confidential to discuss workflows in this session?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Yes. For the live participant, we'll work with anonymized data and generic examples. All attendees can rest assured that client confidentiality will be maintained throughout the session.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-bold text-left">What is the $2,500 live workflow transformation opportunity?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                This is a unique chance for one selected attendee to have their actual legal workflow analyzed and transformed using AI tools live during the session, guided by expert Christian Ulstrup. It mirrors our private AI Action Workshop ($2,500 value). You'll see the practical application of AI on a real-world legal process, gaining insights applicable to your own firm. Participants interested in this opportunity will be contacted beforehand to discuss details and ensure confidentiality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
