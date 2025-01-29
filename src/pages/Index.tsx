import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FreeCourse } from "@/components/FreeCourse";
import { Placeholder } from "@/components/Placeholder";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <FreeCourse />
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
    </div>
  );
};

export default Index;