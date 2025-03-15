
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
        <title>2025 AI Tooling & Budget Report | Ultimate Implementation Guide for Businesses</title>
        <meta name="description" content="Comprehensive guide to AI tool budgeting for 2025. Learn how to equip your team with the right AI tools, optimize costs from $50-2,500/month per employee, and increase productivity by 20-40% for businesses of all sizes." />
        <meta name="keywords" content="AI tools budget 2025, AI implementation guide, AI business ROI, AI investment strategy, AI productivity tools, AI cost calculator, AI tool categories, AI for business, AI budgeting calculator, AI for small business, enterprise AI implementation, AI productivity gains, AI team management" />
        
        {/* Enhanced canonical URL */}
        <link rel="canonical" href="https://gsdat.work/ai-tooling-report" />
        
        {/* Updated Open Graph tags with new image for social sharing */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="2025 AI Tooling & Budget Report | Ultimate Implementation Guide for Businesses" />
        <meta property="og:description" content="Comprehensive guide to AI tool budgeting for 2025. Learn optimal AI investments from $50-2,500/month per employee to boost productivity by 20-40% across businesses of all sizes." />
        <meta property="og:url" content="https://gsdat.work/ai-tooling-report" />
        <meta property="og:image" content="https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="2025 AI Tooling & Budget Report Cover - Comprehensive AI Implementation Guide" />
        <meta property="og:site_name" content="GSD at Work" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card data (also used by LinkedIn) with updated image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2025 AI Tooling & Budget Report | Ultimate Implementation Guide for Businesses" />
        <meta name="twitter:description" content="Comprehensive guide to AI tool budgeting for 2025. Learn optimal AI investments from $50-2,500/month per employee to boost productivity by 20-40% across businesses of all sizes." />
        <meta name="twitter:image" content="https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png" />
        <meta name="twitter:image:alt" content="2025 AI Tooling & Budget Report Cover - Comprehensive AI Implementation Guide" />
        
        {/* Article specific metadata */}
        <meta property="article:published_time" content="2024-08-01T08:00:00-04:00" />
        <meta property="article:modified_time" content="2024-08-15T08:00:00-04:00" />
        <meta property="article:author" content="Christian Ulstrup" />
        <meta property="article:section" content="AI Business Strategy" />
        <meta property="article:tag" content="AI, Budget, Productivity Tools, Business Strategy, AI Implementation, ROI, Cost Calculator, AI Tools 2025" />
        
        {/* Updated JSON-LD structured data for rich snippets with new image */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "The 2025 AI Tooling & Budget Report: Complete Implementation Guide",
              "description": "How to equip your team for quick wins and right-sized steps toward long-term AI transformation with proper budgeting from $50-2,500 per employee",
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
              },
              "keywords": "AI budgeting, AI tools 2025, business AI implementation, AI ROI calculator, AI productivity tools"
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
                    "text": "Businesses should expect to budget from $50-100/month for entry-level AI users, $300-500/month for semi-power users, and $500-700/month for power users. Enterprise implementations may require $1,000-2,500+ per month for specialized roles. A typical organization should plan for 5% of employees as power users, 30% as semi-power users, and the rest as basic users."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What categories of AI tools should businesses invest in for 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key AI tool categories for 2025 include: chatbots & text generation (like ChatGPT and Claude), transcription & note-taking tools (Fireflies, WisprFlow), coding agents (Cursor, Replit), multimedia creation tools (Loom, Descript, Suno), automation & scheduling tools (Zapier, Calendly), presentation & design tools (Gamma, Figma), security solutions (Crowdstrike via Agency), and workspace AI (Google Workspace with Gemini)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the ROI for implementing AI tools in business operations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses implementing AI tools typically see productivity gains of 20-40%, significant time savings on repetitive tasks, enhanced competitive advantage, and scalable efficiency as workloads grow. For a team of 10 employees, proper AI implementation can provide productivity equivalent to adding 2-4 team members without the associated hiring and management costs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How should small businesses approach AI tool adoption in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Small businesses should start with a modest investment of $100-200 per month on core tools like ChatGPT Teams ($25/user), transcription tools ($15-20/month), and basic automation solutions. Focus on identifying repetitive tasks that can be automated, then gradually expand adoption as ROI becomes clear, potentially scaling to $300-500 per employee for key roles as skills develop."
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
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
};

export default AIToolingReport;
