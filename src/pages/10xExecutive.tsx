
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ArrowRight, BrainCircuit, Rocket, BarChart3 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

const TenXExecutive: React.FC = () => {
  // Service structured data
  const serviceData = generateServicePageStructuredData(
    "10x Effective Executive Program",
    "A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep you ahead.",
    "https://gsdat.work/10x-executive",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    "$10,000"
  );

  // FAQ structured data
  const faqData = generateFAQStructuredData([
    {
      question: "How much time will I need to commit each week?",
      answer: "Beyond the weekly 50-minute coaching session, you'll need approximately 2-3 hours per week for implementation. However, this time investment will quickly pay for itself as your new AI systems begin saving you 10+ hours weekly."
    },
    {
      question: "Do I need technical expertise to benefit from this program?",
      answer: "No technical background is required. The program is specifically designed for busy executives who want results without needing to become AI experts. All implementations are practical, guided, and focused on your specific workflow."
    },
    {
      question: "How is this different from just taking an AI course?",
      answer: "Unlike generic courses, this program provides personalized coaching and implementation specific to your role, industry, and challenges. We focus on implementation rather than theory, with direct accountability and support throughout."
    },
    {
      question: "Will the AI tools integrate with my existing systems?",
      answer: "Yes. We carefully select tools that integrate with your current technology stack. The program includes integration assistance to ensure seamless adoption without disrupting your existing workflows."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Most participants see 10+ hours saved weekly, 50-80% reduction in email handling time, and significant improvements in meeting productivity within the first 4 weeks. By program completion, many report working 20-30 fewer hours while accomplishing more."
    }
  ]);

  return (
    <>
      <SEOHead 
        title="10x Effective Executive | AI-Powered Transformation Program"
        description="A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep executives ahead in their field."
        canonicalUrl="/10x-executive"
        keywords="AI executive coaching, AI productivity, executive AI program, AI transformation, AI for executives, AI implementation, time-saving AI"
        structuredData={[serviceData, faqData]}
        ogType="article"
      />
      
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                  10x Effective Executive
                </h1>
                <p className="text-xl text-gray-600">
                  A 10-week AI-powered transformation program to accelerate productivity, reclaim time, and master AI tools that keep you ahead.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white shadow-md"
                    onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                  >
                    Apply For This Program
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => {
                      const benefitsSection = document.getElementById('benefits');
                      if (benefitsSection) benefitsSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-secondary mb-4">Program Overview</h2>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <Clock className="h-6 w-6 text-secondary flex-shrink-0" />
                        <div>
                          <span className="font-medium block">10-Week Duration</span>
                          <span className="text-gray-600 text-sm">Focused transformation with lasting results</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <BrainCircuit className="h-6 w-6 text-secondary flex-shrink-0" />
                        <div>
                          <span className="font-medium block">Personalized AI Stack</span>
                          <span className="text-gray-600 text-sm">Tools tailored to your specific workflow</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Rocket className="h-6 w-6 text-secondary flex-shrink-0" />
                        <div>
                          <span className="font-medium block">Weekly 1:1 Coaching</span>
                          <span className="text-gray-600 text-sm">50-minute focused implementation sessions</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <BarChart3 className="h-6 w-6 text-secondary flex-shrink-0" />
                        <div>
                          <span className="font-medium block">Measurable Outcomes</span>
                          <span className="text-gray-600 text-sm">Tied directly to your key results</span>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="text-2xl font-bold text-secondary mb-1">$10,000</div>
                      <div className="text-gray-600 text-sm">One-time engagement fee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Transform How You Work</h2>
              <p className="text-lg text-gray-600">
                The 10x Effective Executive program delivers proven systems to help busy leaders harness AI for exponential productivity, without technical complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Email Mastery",
                  description: "Cut your email handling time by 50-80% with AI-powered systems that organize, draft, and respond effectively.",
                  icon: <CheckCircle className="h-8 w-8 text-secondary" />
                },
                {
                  title: "Meeting Effectiveness",
                  description: "Transform meetings with AI-assisted agenda setting, note-taking, summarization, and follow-up automation.",
                  icon: <CheckCircle className="h-8 w-8 text-secondary" />
                },
                {
                  title: "Delegate to AI",
                  description: "Learn to delegate appropriate tasks to AI, freeing you to focus on the highest-impact activities only you can perform.",
                  icon: <CheckCircle className="h-8 w-8 text-secondary" />
                },
                {
                  title: "Strategic Decision-Making",
                  description: "Leverage AI to gather better intelligence, analyze complex data, and make more informed decisions, faster.",
                  icon: <CheckCircle className="h-8 w-8 text-secondary" />
                },
                {
                  title: "Content Amplification",
                  description: "Amplify your authority with AI-powered content creation that maintains your voice while saving hours.",
                  icon: <CheckCircle className="h-8 w-8 text-secondary" />
                },
                {
                  title: "Customized Workflow",
                  description: "Develop a personalized AI workflow that integrates seamlessly with your existing processes and tools.",
                  icon: <CheckCircle className="h-8 w-8 text-secondary" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white shadow-md px-8 py-6 text-lg"
                onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
              >
                Schedule Your Free Consultation
              </Button>
              <p className="mt-4 text-gray-600">
                Limited availability. Only accepting 2 executives per quarter.
              </p>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Program Structure</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                A proven 10-week framework designed to deliver rapid, sustainable results
              </p>

              <div className="space-y-12">
                <div className="border-l-4 border-secondary pl-6 relative">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
                  <h3 className="text-xl font-bold text-primary mb-2">Weeks 1-2: Assessment & Setup</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comprehensive workflow audit and bottleneck identification</li>
                    <li>• Personalized AI toolset selection and setup</li>
                    <li>• Initial quick wins implementation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6 relative">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
                  <h3 className="text-xl font-bold text-primary mb-2">Weeks 3-6: Core Systems Implementation</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Email management system setup and optimization</li>
                    <li>• Meeting effectiveness protocols implementation</li>
                    <li>• Decision-making frameworks and AI-assisted intelligence gathering</li>
                    <li>• Content creation and amplification systems</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6 relative">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
                  <h3 className="text-xl font-bold text-primary mb-2">Weeks 7-9: Advanced Integration & Optimization</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Team delegation and collaboration enhancement</li>
                    <li>• Custom workflow automation</li>
                    <li>• Personalized prompting strategies and advanced AI usage</li>
                    <li>• Metrics tracking and system refinement</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6 relative">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-secondary"></div>
                  <h3 className="text-xl font-bold text-primary mb-2">Week 10: Sustainability & Future Growth</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Long-term sustainability planning</li>
                    <li>• Creating your personal AI roadmap</li>
                    <li>• Measuring and communicating ROI</li>
                    <li>• Final optimization and review</li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-4">What's Included:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>10 weekly one-on-one coaching sessions (50 minutes each)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Custom AI toolset recommendations and implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Implementation guides and process templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Email and chat support between sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Lifetime access to program resources and updates</span>
                  </li>
                </ul>

                <div className="mt-8 text-center">
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white shadow-md px-8 py-2"
                    onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                  >
                    Apply For This Program
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "How much time will I need to commit each week?",
                    answer: "Beyond the weekly 50-minute coaching session, you'll need approximately 2-3 hours per week for implementation. However, this time investment will quickly pay for itself as your new AI systems begin saving you 10+ hours weekly."
                  },
                  {
                    question: "Do I need technical expertise to benefit from this program?",
                    answer: "No technical background is required. The program is specifically designed for busy executives who want results without needing to become AI experts. All implementations are practical, guided, and focused on your specific workflow."
                  },
                  {
                    question: "How is this different from just taking an AI course?",
                    answer: "Unlike generic courses, this program provides personalized coaching and implementation specific to your role, industry, and challenges. We focus on implementation rather than theory, with direct accountability and support throughout."
                  },
                  {
                    question: "Will the AI tools integrate with my existing systems?",
                    answer: "Yes. We carefully select tools that integrate with your current technology stack. The program includes integration assistance to ensure seamless adoption without disrupting your existing workflows."
                  },
                  {
                    question: "What kind of results can I expect?",
                    answer: "Most participants see 10+ hours saved weekly, 50-80% reduction in email handling time, and significant improvements in meeting productivity within the first 4 weeks. By program completion, many report working 20-30 fewer hours while accomplishing more."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Still have questions? Schedule a free consultation to discuss how the program can be tailored to your specific needs.
                </p>
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white shadow-md"
                  onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TenXExecutive;
