
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ReportHeader } from "@/components/ai-report/ReportHeader";
import { TableOfContents } from "@/components/ai-report/TableOfContents";
import { Introduction } from "@/components/ai-report/Introduction";
import { WhyInvest } from "@/components/ai-report/WhyInvest";
import { CoreCategories } from "@/components/ai-report/CoreCategories";
import { CostEstimates } from "@/components/ai-report/CostEstimates";
import { BudgetTiers } from "@/components/ai-report/BudgetTiers";
import { PerEmployeeBudgeting } from "@/components/ai-report/PerEmployeeBudgeting";
import { BudgetCalculator } from "@/components/ai-report/BudgetCalculator";
import { PracticalTips } from "@/components/ai-report/PracticalTips";
import { Conclusion } from "@/components/ai-report/Conclusion";
import { ReportCTA } from "@/components/ai-report/ReportCTA";
import { ReportFooter } from "@/components/ai-report/ReportFooter";
import { FloatingNavigation } from "@/components/ai-report/FloatingNavigation";
import { Toaster } from "@/components/ui/toaster";
import { useIsMobile } from "@/hooks/use-mobile";

const metaTitle = "2025 AI Tooling & Budget Report | GSD at Work";
const metaDescription = 
  "Get comprehensive insights on AI tool costs, budget tiers, and implementation strategies for businesses. Plan your AI investment with confidence.";
const metaImage = "https://example.com/report-og-image.jpg"; // replace with actual image URL

const AIToolingReport = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />
        
        {/* Additional SEO */}
        <meta name="author" content="GSD at Work" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <ReportHeader />
        
        <main className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 xl:gap-8">
              <div className="space-y-8 order-2 lg:order-1">
                <Introduction />
                <WhyInvest />
                <CoreCategories />
                <CostEstimates />
                <BudgetTiers />
                <PerEmployeeBudgeting />
                <section id="calculator">
                  <BudgetCalculator />
                </section>
                <PracticalTips />
                <Conclusion />
                <ReportCTA />
              </div>
              
              {!isMobile && (
                <aside className="order-1 lg:order-2">
                  <TableOfContents />
                </aside>
              )}
              
              {isMobile && <TableOfContents />}
            </div>
          </div>
        </main>
        
        <ReportFooter />
        <FloatingNavigation />
        <Toaster />
      </div>
    </>
  );
};

export default AIToolingReport;
