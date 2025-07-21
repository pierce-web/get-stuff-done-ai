
import React from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { generateFAQStructuredData } from "@/lib/seo-utils";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Can my team members join the sessions?",
      answer: "Absolutely! Team participation is encouraged. You can bring relevant team members to each session based on the topics being covered. This helps spread AI adoption throughout your organization more effectively."
    },
    {
      question: "How do we decide who should attend each session?",
      answer: "We'll work with you to identify the right participants for each session based on the topics and your organizational structure. For example, your operations lead might join the workflow automation session, while your content team joins the content amplification session."
    },
    {
      question: "How much time will we need to commit?",
      answer: "The program consists of 5 bi-weekly sessions (2 hours each) over 10 weeks, plus approximately 2-3 hours per week for implementation. This investment quickly pays for itself as your team begins saving 10+ hours weekly through AI automation."
    },
    {
      question: "Do we need technical expertise to benefit from this program?",
      answer: "No technical background is required. The program is designed for busy executives and their teams who want practical results without becoming AI experts. All implementations are guided and focused on your specific workflows."
    },
    {
      question: "How is this different from just taking an AI course?",
      answer: "Unlike generic courses, this program provides personalized coaching and implementation specific to your organization, industry, and challenges. We focus on practical implementation with your actual work, not theory, with direct accountability and support throughout."
    },
    {
      question: "Will the AI tools integrate with our existing systems?",
      answer: "Yes. We carefully select tools that integrate with your current technology stack. The program includes integration assistance to ensure seamless adoption without disrupting your existing workflows."
    },
    {
      question: "What kind of results can organizations expect?",
      answer: "Most organizations see 10+ hours saved weekly per participant, 50-80% reduction in email handling time across teams, and significant improvements in meeting productivity within the first 4 weeks. By program completion, many teams report accomplishing significantly more with less effort."
    },
    {
      question: "Is the program still valuable if only the executive attends some sessions?",
      answer: "Yes. While team participation amplifies the benefits, executives who attend solo can still achieve significant personal productivity gains and learn how to cascade AI practices throughout their organization."
    },
    {
      question: "How do we cascade the learnings to the broader organization?",
      answer: "The program includes creation of scalable processes, documentation templates, and best practices designed to spread throughout your organization. Session recordings are provided for knowledge sharing, and we'll help you build internal champions."
    },
    {
      question: "What if we're already using some AI tools?",
      answer: "Perfect. We'll refine and integrate them into a cohesive organizational system. The goal is to move beyond random usage to consistent, reliable processes that deliver measurable ROI across your entire team."
    }
  ];

  // Generate FAQ structured data
  const faqData = generateFAQStructuredData(faqItems);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>
      
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
