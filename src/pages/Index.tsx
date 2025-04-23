
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FeaturedReport } from "@/components/FeaturedReport";
import { Navigation } from "@/components/Navigation";
import { FeaturedIn } from "@/components/FeaturedIn";
import { LegalWorkshopPromo } from "@/components/promotions/LegalWorkshopPromo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
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
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
