
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Christian understands businesses, he has real empathy for leaders that are going through transformation.",
    author: "Justin Wilcox",
    role: "CTO and Co-founder at BurnRate.io",
  },
  {
    id: 2,
    quote: "Christian helped us identify exactly where to start with AI and created a clear roadmap for implementation.",
    author: "Maria Chen",
    role: "Operations Director",
  },
  {
    id: 3,
    quote: "The strategy session was incredibly valuable. We now have a clear path forward with AI adoption.",
    author: "David Thompson",
    role: "CEO at TechStart",
  },
  {
    id: 4,
    quote: "Working with Christian gave us the confidence to move forward with AI implementation. His approach is practical and results-focused.",
    author: "Sarah Johnson",
    role: "Head of Innovation",
  }
];

export const TestimonialsCarousel = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center mb-12">
          What Leaders Say
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                <div className="h-full p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <blockquote className="text-xl text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="mt-8 text-center">
          <a 
            href="https://love.gsdat.work" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className="gap-2">
              See all testimonials
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
