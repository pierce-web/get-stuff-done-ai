
import React from "react";
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

const AIToolingReport = () => {
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

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors">
              &larr; Back to Home
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <ReportHeader />
            <TableOfContents />
            <Introduction />
            <WhyInvest />
            <CoreCategories />
            <CostEstimates />
            <BudgetCalculator />
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
