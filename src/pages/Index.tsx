
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FeaturedReport } from "@/components/FeaturedReport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TestimonialsCarousel />
      <FeaturedReport />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
