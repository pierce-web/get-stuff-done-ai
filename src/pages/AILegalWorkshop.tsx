
import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { generateServicePageStructuredData } from "@/lib/seo-utils";
import { HeroSection } from "@/components/workshops/HeroSection";
import { CoHostedSection } from "@/components/workshops/CoHostedSection";
import { EventDetailsSection } from "@/components/workshops/EventDetailsSection";
import { AgendaSection } from "@/components/workshops/AgendaSection";
import { WhoShouldAttendSection } from "@/components/workshops/WhoShouldAttendSection";
import { FAQSection } from "@/components/workshops/FAQSection";
import { CTASection } from "@/components/workshops/CTASection";

const AILegalWorkshop: React.FC = () => {
  const eventbriteUrl = "https://www.eventbrite.com/e/ai-in-action-for-lawyers-live-workflow-transformation-session-tickets-1321545932459";
  const meliorUrl = "https://www.getmelior.com";
  const homeUrl = "https://gsdat.work";
  const workshopImageUrl = "https://gsdat.work/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png";
  
  // Generate FAQ schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this just another theoretical AI presentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. This is a hands-on, practical demonstration where you'll see real AI tools applied to a real legal workflow in real-time. You'll witness the transformation process from start to finish."
        }
      },
      {
        "@type": "Question",
        "name": "How will the \"live participant\" whose workflow is used be chosen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One attendee will be selected from those who express interest. We'll reach out before the session to gather information about your workflow, ensuring it's representative and beneficial for the broader audience."
        }
      },
      {
        "@type": "Question",
        "name": "What specific legal workflows will be covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The exact workflow will depend on the selected participant, but could include intake analysis, discovery review, document drafting, case preparation, client communication, or legal research. The principles demonstrated will be applicable across multiple practice areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be highly technical to benefit from this session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. This session is specifically designed for legal professionals, not technologists. We focus on practical applications that don't require coding knowledge or deep technical expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe/confidential to discuss workflows in this session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For the live participant, we'll work with anonymized data and generic examples. All attendees can rest assured that client confidentiality will be maintained throughout the session."
        }
      },
      {
        "@type": "Question",
        "name": "What is the $2,500 live workflow transformation opportunity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is a unique chance for one selected attendee to have their actual legal workflow analyzed and transformed using AI tools live during the session, guided by expert Christian Ulstrup. It mirrors our private AI Action Workshop ($2,500 value). You'll see the practical application of AI on a real-world legal process, gaining insights applicable to your own firm. Participants interested in this opportunity will be contacted beforehand to discuss details and ensure confidentiality."
        }
      }
    ]
  };
  
  const structuredData = generateServicePageStructuredData(
    "AI in Action for Lawyers: Live Workflow Transformation Session",
    "Witness AI transform a legal workflow LIVE! Join GSD & Melior for a hands-on session specifically for lawyers on May 20th. See real legal workflows transformed, not just talked about.",
    "https://gsdat.work/ai-legal-workshop",
    workshopImageUrl,
    "GSD at Work LLC",
    "$299 - $499"
  );

  return (
    <>
      <SEOHead 
        title="AI in Action for Lawyers: Live Workflow Transformation"
        description="Witness AI transform a legal workflow LIVE! Join Christian Ulstrup (GSD at Work) & Ryan Markman (Melior) for a hands-on session specifically for lawyers on May 20th. See real legal workflows transformed, not just talked about."
        canonicalUrl="https://gsdat.work/ai-legal-workshop"
        ogType="website"
        ogImage={workshopImageUrl}
        ogImageAlt="AI in Action for Lawyers workshop banner with Christian Ulstrup and Ryan Markman"
        keywords="legal AI, law firm AI, AI for lawyers, legal technology, legal workflow automation, AI implementation for law, legal efficiency"
        structuredData={[structuredData, faqSchema]}
      />
      
      <Navigation />
      
      <main className="pt-24">
        <HeroSection eventbriteUrl={eventbriteUrl} />
        <CoHostedSection meliorUrl={meliorUrl} homeUrl={homeUrl} />
        <EventDetailsSection />
        <AgendaSection />
        <WhoShouldAttendSection />
        <FAQSection />
        <CTASection eventbriteUrl={eventbriteUrl} />
        
        {/* Cross-promotion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Also Interested in Data Analysis?</h3>
                <p className="text-gray-700 mb-4">
                  Check out our <span className="font-semibold">Qualitative Data Insights AI Workshop</span> – a specialized 2-hour session focused on extracting actionable insights from customer conversations, feedback, and qualitative data.
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => window.location.href = "/qualitative-data-insights-workshop"}
                  >
                    Learn about our Qualitative Data Insights Workshop
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AILegalWorkshop;
