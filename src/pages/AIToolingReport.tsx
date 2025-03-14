
import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import report components
import ReportHeader from "@/components/ai-report/ReportHeader";
import TableOfContents from "@/components/ai-report/TableOfContents";
import Introduction from "@/components/ai-report/Introduction";
import WhyInvest from "@/components/ai-report/WhyInvest";
import CoreCategories from "@/components/ai-report/CoreCategories";
import CostEstimates from "@/components/ai-report/CostEstimates";
import BudgetTiers from "@/components/ai-report/BudgetTiers";
import PerEmployeeBudgeting from "@/components/ai-report/PerEmployeeBudgeting";
import PracticalTips from "@/components/ai-report/PracticalTips";
import Conclusion from "@/components/ai-report/Conclusion";
import ReportCTA from "@/components/ai-report/ReportCTA";
import ReportFooter from "@/components/ai-report/ReportFooter";
import BudgetCalculator from "@/components/ai-report/BudgetCalculator";
import FloatingNavigation from "@/components/ai-report/FloatingNavigation";

const AIToolingReport = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has a hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top when page loads without hash
      window.scrollTo(0, 0);
    }
    
    // Add scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Update URL without page reload
            history.pushState(null, '', `#${targetId}`);
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>2025 AI Tooling & Budget Report | GSD at Work</title>
        <meta name="description" content="Discover how to equip your team with AI tools, boost productivity, and stay competitive in 2025. Get comprehensive cost estimates and budget tiers for AI implementation." />
        <meta name="keywords" content="AI tools budget, AI cost estimates, business AI investment, AI productivity tools, AI ROI, AI implementation guide" />
        <meta property="og:title" content="2025 AI Tooling & Budget Report | GSD at Work" />
        <meta property="og:description" content="A comprehensive guide to budgeting for AI tools in 2025 - from chatbots to coding agents" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://gsdat.work/ai-tooling-report" />
      </Helmet>

      <FloatingNavigation />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Home
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <ReportHeader />
            <TableOfContents />
            <Introduction />
            <WhyInvest />
            <BudgetCalculator />
            <CoreCategories />
            <CostEstimates />
            <BudgetTiers />
            <PerEmployeeBudgeting />
            <PracticalTips />
            <Conclusion />
            <ReportCTA />
            <ReportFooter />
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIToolingReport;
