
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FeaturedReport } from "@/components/FeaturedReport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content sections with subtle transitions between them */}
      <Hero />
      <div className="relative">
        <TestimonialsCarousel />
        <FeaturedReport />
        <Services />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
