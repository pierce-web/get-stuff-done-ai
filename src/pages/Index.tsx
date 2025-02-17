
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Placeholder } from "@/components/Placeholder";
import { TestimonialsWall } from "@/components/TestimonialsWall";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <TestimonialsWall />
      <Placeholder
        title="Select Cases"
        description="Explore our most impactful AI implementation projects"
      />
      <Placeholder
        title="About Us"
        description="Learn about our expertise and commitment to AI excellence"
      />
      <Footer />
    </div>
  );
};

export default Index;
