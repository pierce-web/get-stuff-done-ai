
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TestimonialsWall } from "@/components/TestimonialsWall";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <TestimonialsWall />
      <Footer />
    </div>
  );
};

export default Index;
