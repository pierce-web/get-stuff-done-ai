
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Linkedin, Phone } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const StrategySessionConfirmed = () => {
  // Track conversion with Google Analytics
  React.useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'G-ZVF8V8Y4X0',
        'event_category': 'Strategy Session',
        'event_label': 'Booking Confirmed',
        'value': 1
      });
    }
  }, []);

  return (
    <Layout>
      <SEOHead 
        title="Strategy Session Confirmed | Next Steps"
        description="Your AI strategy session is confirmed. Learn what to expect and important next steps to prepare for our conversation about AI implementation."
        canonicalUrl="https://gsdat.work/strategy-session-confirmed"
        keywords="AI strategy session, AI consulting, AI implementation consultation, business transformation"
      />
      <div className="min-h-screen bg-background flex items-center justify-center py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-secondary mb-6" />
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
          Looking forward to speaking with you very soon
        </h1>
        
        <div className="mt-8 space-y-6 text-left bg-gray-50 p-8 rounded-lg">
          <h2 className="text-xl font-semibold text-primary">What to Expect</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Identify your highest-impact AI opportunity</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Map out your 30-day quick win</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Design your execution roadmap</span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <div className="bg-secondary/5 border-2 border-secondary rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg text-primary mb-3">📞 Important Next Step</h3>
            <p className="text-gray-600 mb-4">
              To make our session as valuable as possible, please take 2 minutes to speak with our AI assistant. This helps me customize the session specifically for your needs.
            </p>
            <a 
              href="tel:+14159917188" 
              className="inline-flex items-center justify-center w-full bg-secondary text-white py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call AI Assistant Now: +1 (415) 991-7188
            </a>
          </div>
          
          <p className="text-gray-600 mb-6">
            Please check your email for the meeting details and Google Meet link.
          </p>
          <a 
            href="https://www.linkedin.com/in/christianulstrup/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </a>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default StrategySessionConfirmed;
