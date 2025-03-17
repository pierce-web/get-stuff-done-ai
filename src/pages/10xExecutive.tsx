
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

// Import refactored components
import { Hero } from "@/components/10x-executive/Hero";
import { Benefits } from "@/components/10x-executive/Benefits";
import { ProgramStructure } from "@/components/10x-executive/ProgramStructure";
import { FAQ } from "@/components/10x-executive/FAQ";

const TenXExecutive: React.FC = () => {
  // Service structured data
  const serviceData = generateServicePageStructuredData(
    "10x Effective Executive Program",
    "A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep you ahead.",
    "https://gsdat.work/10x-executive",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    "$10,000"
  );

  // FAQ structured data
  const faqData = generateFAQStructuredData([
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
  ]);

  return (
    <>
      <SEOHead 
        title="10x Effective Executive | AI-Powered Transformation Program"
        description="A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep executives ahead in their field."
        canonicalUrl="/10x-executive"
        keywords="AI executive coaching, AI productivity, executive AI program, AI transformation, AI for executives, AI implementation, time-saving AI"
        structuredData={[serviceData, faqData]}
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
