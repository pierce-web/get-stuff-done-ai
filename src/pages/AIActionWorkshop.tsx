
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ServiceFeaturesList } from "@/components/services/ServiceFeaturesList";
import { services } from "@/components/services/data";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { ServiceRecommendation } from "@/components/internal-linking/ServiceRecommendation";

const AIActionWorkshop = () => {
  const workshop = services.find(s => s.title === "AI Action Workshop");
  
  if (!workshop) return null;
  
  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Extract pricing tiers for better display
  const pricingTiers = workshop.pricingTiers || [];

  // Generate structured data with enhanced descriptions from our Helmet implementation
  const serviceStructuredData = generateServicePageStructuredData(
    workshop.title,
    workshop.description,
    "https://gsdat.work/ai-action-workshop",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    "$1,199 - $2,499"
  );

  // Enhanced FAQ structured data with more comprehensive answers
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the AI Action Workshop?",
      answer: "The AI Action Workshop is your quick win in a box - a hands-on session where you'll break your four-minute mile with AI. Transform tasks that take days or weeks into victories achieved in hours, while gaining the know-how to replicate this success across your organization."
    },
    {
      question: "Who should attend the AI Action Workshop?",
      answer: "The workshop is ideal for business professionals, executives, and teams who want to quickly implement AI solutions for specific workflows or processes. It's perfect for those who prefer learning by doing rather than theoretical discussions."
    },
    {
      question: "What will I accomplish during the workshop?",
      answer: "You'll achieve your own four-minute mile moment: 1) Identify your highest-leverage AI opportunity, 2) Transform a 2-day task into a 2-hour victory, 3) Create documented SOPs and templates your team can use, 4) Learn to fish - gain the skills to replicate this success independently."
    },
    {
      question: "What results can I expect from the workshop?",
      answer: "Participants typically achieve 100-2000% efficiency gains for targeted tasks. You'll develop transferable SOPs, reduce cycle times, and maintain higher energy levels throughout your workday by eliminating tedious tasks."
    },
    {
      question: "How much does the AI Action Workshop cost?",
      answer: "We offer two pricing options: $2,499 for a Founder-led workshop with Christian Ulstrup (limited availability), or $1,199 for an Associate-led workshop with one of our GSD Certified Associates. Both deliver the same transformative results and satisfaction guarantee."
    },
    {
      question: "How does the workshop process work?",
      answer: "The process is designed for maximum impact: 1) Discovery call to identify what takes you 2 days that we'll do in 2 hours, 2) AI Action Workshop where you'll experience your 10X transformation firsthand and create reusable processes, and 3) Follow-up support to ensure your success becomes charismatic - spreading throughout your organization."
    },
    {
      question: "What's the difference between Founder-led and Associate-led workshops?",
      answer: "Both workshops follow the exact same proven process and deliver identical outcomes. The key difference is the facilitator: Christian Ulstrup personally leads the Founder workshops (limited availability), while our GSD Certified Associates - who have been hand-picked and trained by Christian - lead the Associate workshops with more flexible scheduling. The Associate option provides the same quality at a lower price point."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="AI Action Workshop | Starting at $1,199 | Quick Win in a Box"
        content="Quick win in a box starting at $1,199: Break your four-minute mile with AI. Choose between founder-led ($2,499) or associate-led ($1,199) workshops. Transform tasks that take days into victories achieved in hours while learning to replicate success across your organization."
        canonicalUrl="https://gsdat.work/ai-action-workshop"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
      />
      
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              AI Action Workshop: Your Quick Win in a Box
            </h1>
            
            <p className="text-xl text-gray-700 mb-6">
              Break your four-minute mile with AI. Turn what takes days or weeks into hours of focused execution. Learn to fish while achieving immediate, game-changing results that inspire your entire organization.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold text-yellow-900">
                🎉 Now starting at $1,199 with our GSD Certified Associates
              </p>
              <p className="text-sm text-yellow-800 mt-1">
                Same transformative workshop, more accessible pricing and flexible scheduling
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">🎯 Perfect for Business Leaders Who Want:</h2>
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>Immediate AI implementation</strong> with working solutions</li>
                <li>• <strong>Practical automation strategies</strong> for workflow optimization</li>
                <li>• <strong>Hands-on experience</strong> with proven AI tools and frameworks</li>
                <li>• <strong>Executable roadmaps</strong> for scaling AI across your organization</li>
              </ul>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 mb-12">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Results You Can Expect</h2>
              <p className="text-gray-700 mb-0">
                {workshop.extraText}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200 mb-12">
              <h2 className="text-3xl font-bold text-center text-primary mb-6">🎯 Quick Win in a Box</h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Your Challenge</h3>
                  <p className="text-gray-600">Something that takes you 2 days or 2 weeks</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Workshop</h3>
                  <p className="text-gray-600">Get it done in hours with 10X transformation</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Your Victory</h3>
                  <p className="text-gray-600">Break your four-minute mile & inspire others</p>
                </div>
              </div>
              
              <p className="text-center mt-6 text-lg font-medium text-gray-800">
                Experience success so compelling it becomes charismatic - spreading throughout your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Workshop Benefits</h2>
                <ServiceFeaturesList features={workshop.features} />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Choose Your Workshop Leader</h2>
                
                {/* Pricing Tiers Display */}
                <div className="space-y-4 mb-6">
                  {pricingTiers.map((tier, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${index === 0 ? 'border-secondary bg-secondary/5' : 'border-blue-300 bg-blue-50'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{tier.label}</h3>
                          <p className="text-sm text-gray-600">{tier.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-secondary">{tier.price}</p>
                          <p className="text-xs text-gray-500">{tier.availability}</p>
                        </div>
                      </div>
                      {index === 0 ? (
                        <Button 
                          className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-white font-semibold"
                          onClick={() => tier.calendlyLink && window.open(tier.calendlyLink, '_blank')}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Founder Workshop
                        </Button>
                      ) : (
                        <Button 
                          className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                          onClick={() => workshop.calendlyLink && window.open(workshop.calendlyLink, '_blank')}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Consultation
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 text-center mb-2">
                    Not sure which option is right for you?
                  </p>
                  <p className="text-xs text-gray-500 text-center mb-4">
                    For associate-led workshops, we'll match you with the right expert during consultation
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => workshop.calendlyLink && window.open(workshop.calendlyLink, '_blank')}
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-900">
                    ✅ Same Workshop, Same Results
                  </p>
                  <p className="text-sm text-green-800 mt-1">
                    Our GSD Certified Associates are hand-picked and trained by Christian to deliver 
                    the exact same transformative workshop experience.
                  </p>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-900">
                    🎯 Volume Discounts Available
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    Planning multiple workshops? Bundle pricing available starting at 10 workshops. 
                    Ask about our organizational transformation packages.
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
                    <h3 className="text-xl font-medium text-gray-900 mb-2">AI Action Workshop</h3>
                    <p className="text-gray-700">Experience your 10X transformation: What normally takes 2 days gets done in 2 hours. Build real solutions, create reusable SOPs, and gain the confidence to replicate this success. Your victory becomes charismatic - inspiring others to follow.</p>
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
            
            {/* GSD Associates Section */}
            <div className="border-t border-gray-200 pt-12 mt-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">About GSD Certified Associates</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
                <p className="text-lg text-gray-700 mb-4">
                  To expand our capacity and help more organizations achieve AI transformation, we've established the GSD Associate Program. 
                  Our associates are experienced professionals who have been:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-700">Hand-picked by Christian Ulstrup for their expertise and alignment with our methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-700">Trained extensively in the GSD AI Action Workshop framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-700">Certified to deliver the same transformative results you expect from GSD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-700">Backed by our satisfaction guarantee - same as founder-led workshops</span>
                  </li>
                </ul>
                
                <p className="text-lg font-semibold text-secondary">
                  Choose an associate-led workshop when you want immediate scheduling flexibility and a more accessible price point 
                  without compromising on quality or outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Service Recommendations */}
      <div className="container mx-auto px-4 pb-16">
        <ServiceRecommendation 
          currentService="ai-action-workshop"
          recommendationType="upsell"
          maxServices={2}
          title="Ready to Scale Your AI Success?"
          description="Great results start with action. Now accelerate your AI transformation with these comprehensive programs."
        />
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <ServiceRecommendation 
          currentService="ai-action-workshop"
          recommendationType="crosssell"
          maxServices={1}
          title="Specialized Workshops"
          description="Explore our other hands-on workshops designed for specific use cases."
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default AIActionWorkshop;
