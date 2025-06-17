
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData } from "@/lib/seo-utils";

// Import refactored components
import { Hero } from "@/components/10x-executive/Hero";
import { Benefits } from "@/components/10x-executive/Benefits";
import { ProgramStructure } from "@/components/10x-executive/ProgramStructure";
import { FAQ } from "@/components/10x-executive/FAQ";

const TenXExecutive: React.FC = () => {
  // Service structured data with updated price and enhanced description
  const serviceData = generateServicePageStructuredData(
    "10x Effective Executive Program",
    "A 10-week AI-powered transformation program for executives and their teams to accelerate productivity, reclaim time, and master AI tools organization-wide.",
    "https://gsdat.work/10x-executive",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    "$20,000"
  );

  return (
    <>
      <SEOHead 
        title="10x Effective Executive | AI Transformation for Teams"
        description="A 10-week AI-powered transformation program for executives and their teams. 5 bi-weekly sessions to accelerate productivity and master AI tools organization-wide."
        canonicalUrl="/10x-executive"
        keywords="AI executive coaching, AI team transformation, executive AI program, organizational AI adoption, AI for teams, AI implementation, team productivity AI"
        structuredData={[serviceData]}
        ogType="article"
      />
      
      <Navigation />
      
      <main className="pt-24">
        <Hero />
        <Benefits />
        <ProgramStructure />
        <FAQ />
      </main>

      <Footer />
    </>
  );
};

export default TenXExecutive;
