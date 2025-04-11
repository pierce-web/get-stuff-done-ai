
import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
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
  
  const structuredData = generateServicePageStructuredData(
    "AI in Action for Lawyers: Live Workflow Transformation Session",
    "Witness AI transform a legal workflow LIVE! Join GSD & Melior for a hands-on session specifically for lawyers on May 20th. See real legal workflows transformed, not just talked about.",
    "https://gsdat.work/ai-legal-workshop",
    "https://gsdat.work/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png",
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
        ogImage="https://gsdat.work/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png"
        ogImageAlt="AI in Action for Lawyers workshop banner with Christian Ulstrup and Ryan Markman"
        keywords="legal AI, law firm AI, AI for lawyers, legal technology, legal workflow automation, AI implementation for law, legal efficiency"
        structuredData={[structuredData]}
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
      </main>
      
      <Footer />
    </>
  );
};

export default AILegalWorkshop;
