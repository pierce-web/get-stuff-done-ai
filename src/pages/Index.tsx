
import { Hero } from "@/components/Hero";
import { Services } from "@/components/services/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { About } from "@/components/About";
import { FeaturedReport } from "@/components/FeaturedReport";
import { FeaturedIn } from "@/components/FeaturedIn";
import { LegalWorkshopPromo } from "@/components/promotions/LegalWorkshopPromo";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { Layout } from "@/components/Layout";
import { generateOrganizationStructuredData, generateLocalBusinessStructuredData, generateWebSiteStructuredData } from "@/lib/seo-utils";
import { ServiceComparison } from "@/components/internal-linking/ServiceComparison";
import { EngagementLevels } from "@/components/EngagementLevels";

const Index = () => {
  // Generate comprehensive structured data for homepage
  const structuredData = [
    generateOrganizationStructuredData(),
    generateLocalBusinessStructuredData(),
    generateWebSiteStructuredData()
  ];

  return (
    <Layout>
      <KeywordOptimizedSEO 
        title="AI Implementation Services | Expert AI Consulting & Business Automation"
        content="Transform your business with expert AI implementation services and consulting. We help organizations accelerate AI adoption, optimize business processes, and achieve measurable results through proven automation strategies, executive productivity programs, and hands-on AI workshops. From strategy to implementation, we deliver practical AI solutions that get stuff done."
        canonicalUrl="https://gsdat.work/"
        pageType="landing"
        structuredData={structuredData}
        ogType="website"
      />
      
      {/* Add padding-top to account for the fixed navigation */}
      <div className="pt-20">
        <Hero />
      </div>
      
      <div className="relative">
        {/* Clean section layout without diagonal overlays */}
        <div className="bg-gradient-to-b from-background to-gray-50">
          <TestimonialsCarousel />
        </div>
        
        <FeaturedIn />
        
        <div className="bg-gradient-to-b from-gray-50 to-background py-8">
          <FeaturedReport />
        </div>
        
        <EngagementLevels />
        
        <div className="py-8">
          <Services />
        </div>
        
        <ServiceComparison 
          title="Find Your Perfect AI Implementation Path"
          description="Whether you're just getting started or ready for full transformation, we have the right program to accelerate your success."
        />
        
        <About />
      </div>
    </Layout>
  );
};

export default Index;
