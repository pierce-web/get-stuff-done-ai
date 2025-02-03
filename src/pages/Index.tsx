import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Placeholder } from "@/components/Placeholder";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Placeholder
        title="Client Success Stories"
        description="Discover how our clients have transformed their businesses with AI"
      />
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