
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ServiceFeaturesList } from "@/components/services/ServiceFeaturesList";
import { services } from "@/components/services/data";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const AIActionWorkshop = () => {
  const workshop = services.find(s => s.title === "2-Hour AI Action Workshop");
  
  if (!workshop) return null;

  // Generate structured data
  const serviceStructuredData = generateServicePageStructuredData(
    workshop.title,
    workshop.description,
    "https://gsdat.work/ai-action-workshop",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    workshop.price
  );

  // FAQ structured data
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the 2-Hour AI Action Workshop?",
      answer: "The 2-Hour AI Action Workshop is a hands-on working session where you'll implement real AI solutions and leave with concrete results. It focuses on immediate execution with expert guidance to deliver tangible outcomes."
    },
    {
      question: "How much does the AI Action Workshop cost?",
      answer: workshop.price + ". " + workshop.subtext
    },
    {
      question: "What can I expect to achieve during the workshop?",
      answer: "You'll achieve concrete results with hands-on AI implementation, get coached through rapid implementation with proven frameworks, develop repeatable processes and SOPs for your team, and gain access to state-of-the-art AI tools and templates."
    },
    {
      question: "How does the workshop process work?",
      answer: "The process includes three steps: 1) A discovery call to discuss your specific challenges and identify the most impactful area for AI implementation, 2) The 2-hour hands-on implementation session where you'll build real AI solutions with expert guidance, and 3) Follow-up support with access to guides, templates, and a check-in to ensure continued value."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="2-Hour AI Action Workshop"
        description="Hands-on AI implementation working session where you'll implement real AI solutions and leave with concrete results—no theoretical discussions, just pure execution."
        canonicalUrl="/ai-action-workshop"
        keywords="AI workshop, AI implementation, hands-on AI, AI solutions, AI execution, AI coaching, rapid AI implementation"
        structuredData={[serviceStructuredData, faqStructuredData]}
      />
      
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {workshop.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              {workshop.description}
            </p>
            
            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 mb-12">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Results You Can Expect</h2>
              <p className="text-gray-700 mb-0">
                {workshop.extraText}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Workshop Benefits</h2>
                <ServiceFeaturesList features={workshop.features} />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Investment</h2>
                <p className="text-3xl font-bold text-secondary mb-2">{workshop.price}</p>
                <p className="text-gray-600 mb-6">{workshop.subtext}</p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                    onClick={() => workshop.calendlyLink && window.open(workshop.calendlyLink, '_blank')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Free Consultation
                  </Button>
                  
                  <p className="text-gray-600 text-sm text-center">
                    Discuss your specific needs and explore if this workshop is right for you
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">How It Works</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Discovery Call</h3>
                    <p className="text-gray-700">We'll discuss your specific challenges and identify the most impactful area for AI implementation during the workshop.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">2-Hour Workshop</h3>
                    <p className="text-gray-700">Hands-on implementation session where you'll build real AI solutions with expert guidance, leaving with working processes and concrete results.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Follow-Up Support</h3>
                    <p className="text-gray-700">Access to implementation guides, templates, and a follow-up check-in to ensure your solutions continue to deliver value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIActionWorkshop;
