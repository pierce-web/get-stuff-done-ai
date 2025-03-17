
import React from "react";

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

const ReportContent: React.FC = () => {
  return (
    <article className="prose prose-lg max-w-none" itemScope itemType="https://schema.org/Article">
      <meta itemProp="headline" content="The 2025 AI Tooling & Budget Report: Complete Implementation Guide" />
      <meta itemProp="author" content="Christian Ulstrup" />
      <meta itemProp="datePublished" content="2024-08-01T08:00:00-04:00" />
      <meta itemProp="dateModified" content="2024-08-15T08:00:00-04:00" />
      <meta itemProp="keywords" content="AI budgeting, AI tools 2025, business AI implementation, AI ROI calculator, AI productivity tools" />
      
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
  );
};

export default ReportContent;
