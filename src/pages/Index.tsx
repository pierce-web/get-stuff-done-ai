
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { About } from "@/components/About";
import { FeaturedReport } from "@/components/FeaturedReport";
import { FeaturedIn } from "@/components/FeaturedIn";
import { LegalWorkshopPromo } from "@/components/promotions/LegalWorkshopPromo";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <SEOHead 
        title="Get Stuff Done with AI"
        description="Transform your business with AI implementation expertise. From insight to action in minutes, not months."
        canonicalUrl="https://gsdat.work/"
      />
      <LegalWorkshopPromo />
      
      {/* Add padding-top to account for the fixed navigation */}
      <div className="pt-20">
        <Hero />
      </div>
      
      <div className="relative">
        {/* Add subtle dividers and consistent spacing between sections */}
        <div className="bg-gradient-to-b from-background to-gray-50">
          <TestimonialsCarousel />
        </div>
        
        {/* Add the new FeaturedIn component here */}
        <FeaturedIn />
        
        <div className="bg-gradient-to-b from-gray-50 to-background py-8">
          <FeaturedReport />
        </div>
        
        <div className="py-8">
          <Services />
        </div>
        
        <About />
      </div>
    </Layout>
  );
};

export default Index;
