import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle, Clock, Calendar, Video, Users, ExternalLink } from "lucide-react";
import { generateServicePageStructuredData } from "@/lib/seo-utils";

const AILegalWorkshop: React.FC = () => {
  const eventbriteUrl = "https://www.eventbrite.com/e/ai-in-action-for-lawyers-live-workflow-transformation-session-tickets-1321545932459";
  const meliorUrl = "https://www.getmelior.com";
  const homeUrl = "https://gsdat.work";
  
  const structuredData = generateServicePageStructuredData(
    "AI in Action for Lawyers: Live Workflow Transformation Session",
    "Witness AI transform a legal workflow LIVE! Join GSD & Melior for a hands-on session for lawyers. One attendee's workflow featured!",
    "https://gsdat.work/ai-legal-workshop",
    "https://gsdat.work/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png",
    "GSD at Work LLC",
    "$299 - $499"
  );

  return (
    <>
      <SEOHead 
        title="AI in Action for Lawyers: Live Workflow Transformation"
        description="Witness AI transform a legal workflow LIVE! Join Christian Ulstrup (GSD at Work) & Ryan Markman (Melior) for a hands-on session specifically for lawyers on May 20th. See real legal workflows transformed, not just talked about."
        canonicalUrl="https://gsdat.work/ai-legal-workshop"
        ogType="website"
        ogImage="https://gsdat.work/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png"
        ogImageAlt="AI in Action for Lawyers workshop banner with Christian Ulstrup and Ryan Markman"
        keywords="legal AI, law firm AI, AI for lawyers, legal technology, legal workflow automation, AI implementation for law, legal efficiency"
        structuredData={[structuredData]}
      />
      
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-secondary bg-secondary/10 w-fit px-3 py-1 rounded-full text-sm font-medium mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Tuesday, May 20th • 12:00-1:30 PM EDT</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  AI in Action for Lawyers: Live Workflow Transformation
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700">
                  Witness AI transform a legal workflow LIVE! Join GSD & Melior for a hands-on session for lawyers. One attendee's workflow featured!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white font-medium py-6 px-8"
                    onClick={() => window.open(eventbriteUrl, "_blank")}
                  >
                    Reserve Your Spot
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="bg-secondary/10 text-secondary font-medium rounded-lg px-4 py-2 flex items-center justify-center">
                    <span className="font-bold">$299</span> - <span className="font-bold">$499</span>
                    <span className="ml-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Early bird discount</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/bde19514-d59a-41ee-8213-67b208023d15.png" 
                    alt="AI in Action for Lawyers Workshop" 
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border border-gray-100">
                    <Video className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Online via Zoom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-Hosted Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 border-t border-b border-gray-100 py-6">
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm uppercase font-medium mb-2">Co-hosted by</p>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex flex-col items-center">
                    <a 
                      href={meliorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <div className="bg-gray-800 p-2 rounded-md mb-2">
                        <img 
                          src="/lovable-uploads/43198a75-4248-4d5e-8c90-32a39c77889e.png" 
                          alt="Melior Logo" 
                          className="h-10"
                        />
                      </div>
                      <span className="text-sm text-secondary hover:underline">
                        www.getmelior.com
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-4 hidden md:block">&</span>
                  </div>
                  <div className="flex flex-col items-center mt-4 md:mt-0">
                    <a 
                      href={homeUrl}
                      className="flex flex-col items-center"
                    >
                      <div className="font-bold text-xl text-primary mb-2">GSD at Work</div>
                      <span className="text-sm text-secondary hover:underline">
                        www.gsdat.work
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
                Tired of AI Hype? See Real Legal Workflows Transformed LIVE!
              </h2>
              
              <p className="text-gray-700 mb-6">
                The legal landscape is buzzing with talk of Artificial Intelligence, but how does it actually translate into tangible benefits for your law firm? Moving beyond theoretical discussions, this unique session offers a practical, sleeves-rolled-up approach to understanding and implementing AI.
              </p>
              
              <p className="text-gray-700 mb-6">
                Join AI implementation experts Christian Ulstrup (Principal, GSD at Work LLC) and Ryan Markman (CEO, Melior) for a dynamic, live working session – think of it as an "AI Cooking Show" specifically for lawyers. We won't just talk about AI; we'll demonstrate its power in real-time by tackling a genuine legal workflow submitted by one selected attendee.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 text-primary">What Makes This Session Different?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Live Workflow Build:</strong> Witness the step-by-step process of analyzing and accelerating a real legal workflow using cutting-edge AI tools. No simulations, just practical application.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Focus on Actionable Insights:</strong> Learn how AI can automate tasks, enhance analysis, and improve efficiency in areas relevant to your practice (e.g., intake analysis, discovery review, document drafting, case preparation).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Expert Guidance:</strong> Benefit from Christian's extensive experience across 100+ AI implementations (including multiple law firms) and Ryan's deep understanding of org-wide AI adoption.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Demystify AI for Legal:</strong> Understand the tools, techniques, and strategies that are delivering real value in law firms today.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Boost Efficiency & Profitability:</strong> Leave with concrete ideas and the confidence to identify and implement high-impact AI use cases within your own firm.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Agenda Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
                Event Agenda
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center">
                      12:00 - 12:30 PM EDT
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Welcome & Addressing Your Burning AI Questions</h3>
                      <p className="text-gray-600 text-sm">Christian Ulstrup & Ryan Markman</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Introductions, overview of the session's goals, and tackling pre-submitted or common AI concerns specific to lawyers.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center">
                      12:30 - 1:00 PM EDT
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Live AI Workflow Transformation: The "Cooking Show" in Action</h3>
                      <p className="text-gray-600 text-sm">Christian Ulstrup</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    The core of the session. Watch Christian Ulstrup build and demonstrate AI solutions for a real legal workflow provided by the selected live participant.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-lg w-full md:w-auto text-center">
                      1:00 - 1:30 PM EDT
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Key Insights, Q&A, and Next Steps for Your Firm</h3>
                      <p className="text-gray-600 text-sm">Ryan Markman & Christian Ulstrup</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Processing the live build. Discussing the key takeaways, potential ROI, and how to apply these principles strategically within different law firm contexts. Open floor for attendee questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who Should Attend Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
                Who Should Attend?
              </h2>
              
              <p className="text-gray-700 mb-6 text-center">
                This session is designed for forward-thinking legal professionals, including:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">Law Firm Partners & Managing Partners</h3>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">Practicing Attorneys</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-16">
                    PI, Criminal Defense, HOA, Corporate, etc.
                  </p>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">Legal Operations Leaders & Staff</h3>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">Anyone in a Law Firm</h3>
                  </div>
                  <p className="text-gray-700 mt-2 ml-16">
                    Looking to understand practical AI applications beyond theory.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-8 text-center font-medium">
                Bridge the gap between AI's potential and your firm's reality. See how to leverage this technology effectively and gain a competitive edge.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Is this just another theoretical AI presentation?</h3>
                  <p className="text-gray-700">
                    Not at all. This is a hands-on, practical demonstration where you'll see real AI tools applied to a real legal workflow in real-time. You'll witness the transformation process from start to finish.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How will the "live participant" whose workflow is used be chosen?</h3>
                  <p className="text-gray-700">
                    One attendee will be selected from those who express interest. We'll reach out before the session to gather information about your workflow, ensuring it's representative and beneficial for the broader audience.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What specific legal workflows will be covered?</h3>
                  <p className="text-gray-700">
                    The exact workflow will depend on the selected participant, but could include intake analysis, discovery review, document drafting, case preparation, client communication, or legal research. The principles demonstrated will be applicable across multiple practice areas.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Do I need to be highly technical to benefit from this session?</h3>
                  <p className="text-gray-700">
                    Not at all. This session is specifically designed for legal professionals, not technologists. We focus on practical applications that don't require coding knowledge or deep technical expertise.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Is it safe/confidential to discuss workflows in this session?</h3>
                  <p className="text-gray-700">
                    Yes. For the live participant, we'll work with anonymized data and generic examples. All attendees can rest assured that client confidentiality will be maintained throughout the session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Reserve Your Spot Today
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Limited spaces available. Don't miss this opportunity to see AI transform legal workflows in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium py-6 px-8"
                  onClick={() => window.open(eventbriteUrl, "_blank")}
                >
                  Get Your Ticket Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <div className="bg-white border border-gray-200 text-gray-700 font-medium rounded-lg px-6 py-4 flex items-center justify-center shadow-sm">
                  <Clock className="h-5 w-5 mr-2 text-secondary" />
                  <span>1.5 Hour Session</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-6">
                Refund Policy: Full refunds available up to 7 days before the event.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AILegalWorkshop;
