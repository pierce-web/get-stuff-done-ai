import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { 
  Database, Files, Clock, MessageSquare, 
  DollarSign, Zap, Target, Search, 
  UserRound, Lightbulb, BrainCircuit, Rocket, 
  CheckCircle, FileText, Mail, Phone, Clipboard, 
  Users, ArrowRight
} from "lucide-react";

const QualitativeDataInsightsWorkshop = () => {
  // Calendly links
  const workshopCalendlyLink = "https://calendly.com/gsdatwork/ai-workshop"; 
  const consultationCalendlyLink = "https://calendly.com/gsdatwork/free-consult";

  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];

  // Service structured data
  const serviceStructuredData = generateServicePageStructuredData(
    "Qualitative Data Insights AI Workshop",
    "Transform messy qualitative data (calls, emails, surveys) into clear, actionable business insights with our AI-powered workshop. Drive data-driven decisions faster.",
    "https://gsdat.work/qualitative-data-insights-workshop",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "Get Stuff Done AI",
    "$2,499"
  );

  // FAQ structured data
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the Qualitative Data Insights AI Workshop?",
      answer: "The Qualitative Data Insights AI Workshop is an intensive session where we use advanced AI models to rapidly analyze your qualitative data (like call transcripts, emails, and surveys) to extract actionable business insights. It's a hands-on, guided session where you'll see your own data transformed into clear, actionable intelligence."
    },
    {
      question: "What kind of data can be analyzed in this workshop?",
      answer: "We can analyze virtually any text-based data, including call center transcripts, customer support chats, email threads, survey responses, support tickets, and internal meeting notes. We work with data from tools like Dialpad, Five9, Gong, AI Scribe, Intercom, LiveChat, Zendesk, and more."
    },
    {
      question: "How much data can we analyze in the workshop?",
      answer: "Using AI, we can process and analyze significantly more data than would be possible manually - typically hundreds or even thousands of interactions. The exact volume depends on the complexity of your data and the specific insights you're seeking."
    },
    {
      question: "What results can I expect from the workshop?",
      answer: "You'll leave with a concise summary of key insights discovered in your data, identification of surprising trends or patterns, a prioritized list of actionable recommendations, and a repeatable process framework for future analysis."
    },
    {
      question: "How much does the Qualitative Data Insights Workshop cost?",
      answer: "$2,499 for an intensive AI Action Workshop with satisfaction guaranteed."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Qualitative Data Insights AI Workshop | GSD at Work"
        description="Transform messy qualitative data (calls, emails, surveys) into clear, actionable business insights with our AI-powered workshop. Drive data-driven decisions faster."
        canonicalUrl="https://gsdat.work/qualitative-data-insights-workshop"
        keywords="qualitative data analysis AI, call transcript analysis, customer insight mining, AI workshop, sentiment analysis, data insights"
        structuredData={[serviceStructuredData, faqStructuredData]}
      />
      
      {/* Navigation */}
      <Navigation />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-3/5 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Unlock Hidden Insights from Your Customer Data with AI
                </h1>
                
                <p className="text-xl text-gray-700">
                  Our intensive AI Action Workshop uses cutting-edge AI to rapidly analyze call transcripts, emails, surveys, and more – revealing surprising insights you can act on immediately.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">Intensive Results Session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <DollarSign className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">$2,499 Flat Fee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">Hands-On Implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Target className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium">Actionable Insights Guaranteed</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                    onClick={() => workshopCalendlyLink && window.open(workshopCalendlyLink, '_blank')}
                  >
                    Book Your Insights Workshop
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => consultationCalendlyLink && window.open(consultationCalendlyLink, '_blank')}
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg">
                  <div className="absolute -top-3 -left-3 bg-white p-3 rounded-full shadow-md">
                    <BrainCircuit className="h-8 w-8 text-secondary" />
                  </div>
                  <img 
                    src="/data-insights-analytics.png" 
                    alt="AI Data Analysis Visualization" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Problem Section */}
        <section className="bg-gray-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Is Your Valuable Customer Data Going Unused?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Database className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fragmented Data Sources</h3>
                      <p className="text-gray-700">Calls in Dialpad, chats in Intercom, emails elsewhere? Bringing it all together manually is slow and painful.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Slow Manual Analysis</h3>
                      <p className="text-gray-700">Teams spend weeks sifting through transcripts or surveys, delaying critical decisions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Search className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Hidden Issues & Opportunities</h3>
                      <p className="text-gray-700">Critical customer pain points, operational bottlenecks, or product ideas are buried in thousands of interactions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <UserRound className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Overload, Insight Deficit</h3>
                      <p className="text-gray-700">You have the data, but lack the time or tools to extract meaningful, actionable intelligence consistently.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Solution Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Transform Raw Data into Actionable Insights Fast
            </h2>
            
            <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
              This intensive, hands-on workshop leverages the power of advanced AI models (like Claude Code (Sonnet 3.7), Gemini 2.5 Pro (via Google AI Studio), and o3 (OpenAI)) to rapidly process and analyze large volumes of your qualitative data, delivering results you can act on immediately.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Define Objective</h3>
                  <p className="text-gray-700">We start by clarifying the key business question you want to answer.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Data Preparation</h3>
                  <p className="text-gray-700">You provide a data dump (transcripts, CSVs, text files). We guide light preprocessing if needed.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI Analysis (Live)</h3>
                  <p className="text-gray-700">Together, we use powerful AI tools to query, summarize, categorize, and analyze your data in real-time.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Insight Generation</h3>
                  <p className="text-gray-700">We collaboratively identify surprising patterns, key themes, sentiment trends, and critical anomalies.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-secondary text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Action Planning</h3>
                  <p className="text-gray-700">We translate insights into concrete, prioritized recommendations and next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Why Choose the Qualitative Data Insights Workshop?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Rocket className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed</h3>
                  <p className="text-gray-700">Get actionable insights immediately, not weeks or months later.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <BrainCircuit className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Objectivity & Scale</h3>
                  <p className="text-gray-700">AI processes vast data without human bias, uncovering patterns missed by manual review.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Uncover the Unknown</h3>
                  <p className="text-gray-700">Find surprising pain points, operational flaws, or hidden opportunities you weren't looking for.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Recommendations</h3>
                  <p className="text-gray-700">Leave with clear, prioritized steps based directly on your data.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Internal Capability</h3>
                  <p className="text-gray-700">Your team learns the process and tools, enabling ongoing internal analysis.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                    <DollarSign className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High ROI Initial Engagement</h3>
                  <p className="text-gray-700">A cost-effective investment ($2,499) to experience the power of AI and get immediate value.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who Is This For & Data Inputs Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Ideal For:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Teams with large volumes of text-based customer interactions (Call Centers, Customer Support, Sales, UX Research)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Organizations struggling with fragmented data silos (e.g., separate systems for calls, chat, email)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Leaders seeking faster, deeper insights into customer experience, operational efficiency, or product feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Companies wanting a low-risk, high-impact way to start leveraging AI for business intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Businesses using tools like Dialpad, Intercom, Zendesk, Gong, AI Scribe, or collecting survey data</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Data We Can Analyze:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Call Center Transcripts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Chat Logs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Email Threads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Survey Responses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Clipboard className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Support Tickets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Meeting Notes / Transcripts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Deliverables Section */}
        <section className="bg-gray-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">What You'll Leave With:</h3>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">A concise summary of the key insights discovered.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Identification of surprising trends, patterns, or anomalies.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">A prioritized list of actionable recommendations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">A repeatable process framework for future analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary-50 py-16 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Unlock Your Data's Potential?
              </h2>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-secondary">$2,499</span>
                <p className="text-gray-700 mt-2">For an intensive AI Action Workshop</p>
                <p className="text-sm font-medium text-secondary mt-1">Satisfaction Guaranteed</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-6"
                  onClick={() => workshopCalendlyLink && window.open(workshopCalendlyLink, '_blank')}
                >
                  Book Your Insights Workshop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10"
                  onClick={() => consultationCalendlyLink && window.open(consultationCalendlyLink, '_blank')}
                >
                  Have Questions? Schedule a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QualitativeDataInsightsWorkshop;