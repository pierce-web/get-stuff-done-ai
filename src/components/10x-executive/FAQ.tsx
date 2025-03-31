
import React from "react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How much time will I need to commit each week?",
      answer: "Beyond the weekly 50-minute coaching session, you'll need approximately 2-3 hours per week for implementation. However, this time investment will quickly pay for itself as your new AI systems begin saving you 10+ hours weekly."
    },
    {
      question: "Do I need technical expertise to benefit from this program?",
      answer: "No technical background is required. The program is specifically designed for busy executives who want results without needing to become AI experts. All implementations are practical, guided, and focused on your specific workflow."
    },
    {
      question: "How is this different from just taking an AI course?",
      answer: "Unlike generic courses, this program provides personalized coaching and implementation specific to your role, industry, and challenges. We focus on implementation rather than theory, with direct accountability and support throughout."
    },
    {
      question: "Will the AI tools integrate with my existing systems?",
      answer: "Yes. We carefully select tools that integrate with your current technology stack. The program includes integration assistance to ensure seamless adoption without disrupting your existing workflows."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Most participants see 10+ hours saved weekly, 50-80% reduction in email handling time, and significant improvements in meeting productivity within the first 4 weeks. By program completion, many report working 20-30 fewer hours while accomplishing more."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions? Schedule a free consultation to discuss how the program can be tailored to your specific needs.
            </p>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white shadow-md"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
