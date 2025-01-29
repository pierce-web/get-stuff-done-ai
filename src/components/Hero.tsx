import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Get Stuff Done with AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Accelerate your AI adoption journey with proven strategies and hands-on expertise. From solopreneurs to enterprises, we help you harness AI's potential.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
              onClick={() => window.location.href = "#services"}
            >
              View Services
            </Button>
            <Button
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => window.location.href = "#free-course"}
            >
              Free AI Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};