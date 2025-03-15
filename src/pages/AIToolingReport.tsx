
import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";

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
        <title>2025 AI Tooling & Budget Report | Complete Implementation Guide</title>
        <meta name="description" content="Comprehensive guide to AI tool budgeting in 2025. Learn how to equip your team with the right AI tools, optimize costs, and increase productivity for businesses of all sizes." />
        <meta name="keywords" content="AI tools budget, AI implementation guide, AI ROI, business AI investment, AI productivity tools, AI cost estimates, AI tool categories, AI for business, AI budgeting, small business AI, enterprise AI implementation" />
        
        {/* Enhanced canonical URL */}
        <link rel="canonical" href="https://gsdat.work/ai-tooling-report" />
        
        {/* Updated Open Graph tags with new image for social sharing */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="2025 AI Tooling & Budget Report | Complete Implementation Guide" />
        <meta property="og:description" content="Comprehensive guide to AI tool budgeting in 2025. Learn how to equip your team with the right AI tools, optimize costs, and increase productivity." />
        <meta property="og:url" content="https://gsdat.work/ai-tooling-report" />
        <meta property="og:image" content="https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="2025 AI Tooling & Budget Report Cover" />
        <meta property="og:site_name" content="GSD at Work" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card data (also used by LinkedIn) with updated image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2025 AI Tooling & Budget Report | Complete Implementation Guide" />
        <meta name="twitter:description" content="Comprehensive guide to AI tool budgeting in 2025. Learn how to equip your team with the right AI tools, optimize costs, and increase productivity." />
        <meta name="twitter:image" content="https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" />
        <meta name="twitter:image:alt" content="2025 AI Tooling & Budget Report Cover" />
        
        {/* Article specific metadata */}
        <meta property="article:published_time" content="2024-08-01T08:00:00-04:00" />
        <meta property="article:modified_time" content="2024-08-15T08:00:00-04:00" />
        <meta property="article:author" content="Christian Ulstrup" />
        <meta property="article:section" content="AI Business" />
        <meta property="article:tag" content="AI, Budget, Productivity Tools, Business Strategy, AI Implementation" />
        
        {/* Updated JSON-LD structured data for rich snippets with new image */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "The 2025 AI Tooling & Budget Report",
              "description": "How to equip your team for quick wins and right-sized steps toward long-term AI transformation",
              "image": "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
              "author": {
                "@type": "Person",
                "name": "Christian Ulstrup",
                "url": "https://www.linkedin.com/in/christianulstrup/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "GSD at Work LLC",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gsdat.work/lovable-uploads/27fe830f-8000-40cf-9d6d-49cfa6d1275a.png"
                }
              },
              "datePublished": "2024-08-01T08:00:00-04:00",
              "dateModified": "2024-08-15T08:00:00-04:00",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://gsdat.work/ai-tooling-report"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much should a business budget for AI tools in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses should expect to budget from $50-100/month for entry-level AI users, $300-500/month for semi-power users, and $500-700/month for power users. Enterprise implementations may require $1,000-2,500+ per month for specialized roles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What categories of AI tools should businesses invest in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key AI tool categories include: chatbots & text generation, transcription & note-taking, coding agents, multimedia creation tools, automation & scheduling tools, presentation & design tools, security solutions, and workspace AI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the ROI for implementing AI tools in business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses implementing AI tools typically see productivity gains of 20-40%, significant time savings on repetitive tasks, enhanced competitive advantage, and scalable efficiency as workloads grow."
                  }
                }
              ]
            }
          `}
        </script>
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

          <article className="prose prose-lg max-w-none" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content="The 2025 AI Tooling & Budget Report" />
            <meta itemProp="author" content="Christian Ulstrup" />
            <meta itemProp="datePublished" content="2024-08-01T08:00:00-04:00" />
            <meta itemProp="dateModified" content="2024-08-15T08:00:00-04:00" />
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
      <Toaster />
    </div>
  );
};

export default AIToolingReport;
