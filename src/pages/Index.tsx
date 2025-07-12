
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
        {/* Flowing section transitions with advanced layouts */}
        <div className="bg-gradient-to-b from-background to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary/3 to-secondary/3 rounded-b-[50%] transform -translate-y-16"></div>
          <TestimonialsCarousel />
        </div>
        
        {/* Asymmetrical featured section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-secondary/5 transform skew-y-1"></div>
          <FeaturedIn />
        </div>
        
        <div className="bg-gradient-to-b from-gray-50 to-background py-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-secondary/5 to-transparent rounded-b-[30%]"></div>
          <FeaturedReport />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 transform -skew-y-1"></div>
          <EngagementLevels />
        </div>
        
        <div className="py-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-b-[60%] transform -translate-y-20"></div>
          <Services />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-primary/3 transform skew-y-1"></div>
          <ServiceComparison 
            title="Find Your Perfect AI Implementation Path"
            description="Whether you're just getting started or ready for full transformation, we have the right program to accelerate your success."
          />
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent rounded-b-[40%]"></div>
          <About />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
