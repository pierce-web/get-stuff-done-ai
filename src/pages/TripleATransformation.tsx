
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ServiceFeaturesList } from "@/components/services/ServiceFeaturesList";
import { services, valueMetrics } from "@/components/services/data";

const TripleATransformation = () => {
  const program = services.find(s => s.title === "Triple-A Transformation Program");
  
  if (!program) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {program.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              {program.description}
            </p>
            
            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 mb-12">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Organizational Transformation</h2>
              <p className="text-gray-700 mb-0">
                {program.extraText}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Program Components</h2>
                <ServiceFeaturesList features={program.features} />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Investment</h2>
                <p className="text-3xl font-bold text-secondary mb-2">{program.price}</p>
                <p className="text-gray-600 mb-6">{program.subtext}</p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                    onClick={() => program.calendlyLink && window.open(program.calendlyLink, '_blank')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Strategy Call
                  </Button>
                  
                  <p className="text-gray-600 text-sm text-center">
                    Discuss your organization's specific needs and explore how this program can drive transformation
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value-Based Pricing Section */}
            <div className="border-t border-gray-200 pt-12 mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-6">Our Approach to Value-Based Pricing</h2>
              
              <p className="text-gray-700 mb-6">
                We believe in aligning our success with yours. After our initial engagement, 
                we offer flexible pricing structures that tie our compensation to measurable business outcomes:
              </p>
              
              <ul className="space-y-4 mb-8">
                {valueMetrics.map((metric) => (
                  <li key={metric} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-secondary flex-shrink-0 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-gray-600">{metric}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-700 font-medium mb-4">
                Results typically seen within first 30 days
              </p>
              
              <p className="text-gray-700">
                This ensures we're fully invested in delivering real, measurable value for your business.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">Program Timeline</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Assessment Phase (2 weeks)</h3>
                    <p className="text-gray-700">Comprehensive evaluation of your organization's AI readiness, opportunity mapping, and strategic alignment.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Implementation Phase (8 weeks)</h3>
                    <p className="text-gray-700">Systematic deployment of AI solutions across priority areas, team training, and process integration.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Optimization Phase (4 weeks)</h3>
                    <p className="text-gray-700">Refining implementations, measuring outcomes, and establishing sustainable AI governance.</p>
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

export default TripleATransformation;
