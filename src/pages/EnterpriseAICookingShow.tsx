import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { 
  Clock, Users, Zap, Target, TrendingUp, 
  CheckCircle, ArrowRight, Play, Calendar,
  ChefHat, Rocket, Building2, Award,
  Timer, Sparkles, MessageSquare, FileText,
  Video, Code2, Mic, BarChart3
} from "lucide-react";

const EnterpriseAICookingShow = () => {
  // Calendly links
  const cookingShowCalendlyLink = "https://calendly.com/gsdatwork/free-consult";

  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];

  // Service structured data
  const serviceStructuredData = generateServicePageStructuredData(
    "Enterprise AI Cooking Show - Live AI Transformation Workshop",
    "Watch your business transform in real-time. The 2-hour executive workshop where 6-month projects become 6-week victories through live AI implementation.",
    "https://gsdat.work/enterprise-ai-cooking-show",
    "https://gsdat.work/lovable-uploads/34b71833-b38f-4c6a-b8d2-4d9b3dcc99f3.png",
    "GSD at Work",
    "$4,999"
  );

  // FAQ structured data
  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the Enterprise AI Cooking Show?",
      answer: "The Enterprise AI Cooking Show is a live, interactive 2-hour workshop where Fortune 500 executives watch their actual workflows transform before their eyes. Unlike traditional demos, we build real solutions for your specific challenges in real-time, with your team participating and providing feedback throughout."
    },
    {
      question: "Is this just another AI demo?",
      answer: "No. We build real solutions for your actual workflows during the session. You leave with working tools, not just ideas. Your team participates in the creation process, providing real-time feedback as we transform your processes live."
    },
    {
      question: "What if our data is confidential?",
      answer: "We use synthetic data for demonstrations, or work with anonymized datasets. All sessions follow enterprise-grade security protocols. We can sign NDAs and work within your compliance requirements."
    },
    {
      question: "How technical do participants need to be?",
      answer: "Zero technical knowledge required. If you can use email, you can participate. The session is designed for business leaders, not technologists. We handle all the technical complexity while you focus on the business impact."
    },
    {
      question: "What happens after the workshop?",
      answer: "You keep everything created during the session, plus receive implementation guides, recordings, and 30-day support. Your team will have the knowledge and tools to continue the transformation independently."
    },
    {
      question: "How much does the Enterprise AI Cooking Show cost?",
      answer: "$4,999 for a 2-hour workshop with up to 30 participants. This includes pre-workshop discovery, the live session, all created assets, and 30-day follow-up support. Custom packages available for series or extended sessions."
    }
  ]);

  const testimonials = [
    {
      quote: "I'm impressed... pretty much spot on.",
      context: "On AI analysis accuracy during live session",
      role: "HR Leader, Global Logistics"
    },
    {
      quote: "This is awesome. Can I have a copy of this?",
      context: "On recruitment tools demonstrated",
      role: "Head of Talent, Fortune 500"
    },
    {
      quote: "The potential is just crazy.",
      context: "After seeing 6-month process compressed to 2 hours",
      role: "Innovation Director"
    },
    {
      quote: "20-40% of top candidates AI surfaced had been previously rejected.",
      context: "Discovery during talent analysis session",
      role: "VP People Operations"
    }
  ];

  const transformations = [
    {
      before: "12-16 weeks",
      after: "2 hours",
      process: "Market Research & Analysis",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      before: "6 months",
      after: "6 weeks",
      process: "Recruitment & Hiring",
      icon: <Users className="h-8 w-8" />
    },
    {
      before: "2 weeks",
      after: "20 minutes",
      process: "Customer Insights",
      icon: <MessageSquare className="h-8 w-8" />
    },
    {
      before: "Manual",
      after: "Automated",
      process: "Data Enrichment",
      icon: <Sparkles className="h-8 w-8" />
    }
  ];

  const toolsShowcase = [
    "ChatGPT & Claude",
    "Gemini Deep Research",
    "Clay Data Enrichment",
    "Lovable Instant Websites",
    "VAPI Voice Assistants",
    "Happenstance Networking",
    "Custom AI Agents",
    "10+ Specialized Tools"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Enterprise AI Cooking Show - Live AI Transformation | GSD at Work"
        description="Watch your business transform in real-time. The 2-hour executive workshop where 6-month projects become 6-week victories through live AI implementation."
        canonicalUrl="https://gsdat.work/enterprise-ai-cooking-show"
        keywords="enterprise AI transformation, executive AI workshop, AI implementation demo, business process automation, AI ROI demonstration, live AI workshop"
        structuredData={[serviceStructuredData, faqStructuredData]}
      />
      
      {/* Navigation */}
      <Navigation />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
                <ChefHat className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Live AI Transformation Workshop</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                The Enterprise AI Cooking Show
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-4xl mx-auto">
                Where 6-Month Projects Become 6-Week Victories
              </p>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A live, interactive workshop where Fortune 500 executives watch their workflows transform before their eyes. No slides. No theory. Just your actual processes reimagined with AI—in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-white"
                  onClick={() => window.open(cookingShowCalendlyLink, '_blank')}
                >
                  Book Your Transformation Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-8 justify-center mt-12 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-secondary" />
                  <span>100+ Transformations Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Up to 30 Participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>2-Hour Intensive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Opportunity Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Your Teams Are Drowning in Yesterday's Processes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">The Reality Today</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Timer className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Product development cycles taking 1-2 years</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Timer className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Recruitment processes stretching 6+ months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Timer className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Manual analysis limiting insight depth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Timer className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Teams drowning in repetitive tasks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Timer className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Competitors moving faster with AI</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">The Possibility Tomorrow</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Launch products in weeks, not years</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Fill critical roles 10x faster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Uncover insights humans miss</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Teams focused on strategic work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Lead your industry's AI transformation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Results */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Real Transformations, Real Time
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Watch complex processes compress from months to minutes—live, with your actual workflows
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {transformations.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-secondary mb-4">{item.icon}</div>
                    <h3 className="font-semibold mb-3">{item.process}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Before:</span>
                        <span className="font-semibold text-red-600 line-through">{item.before}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">After:</span>
                        <span className="font-semibold text-green-600">{item.after}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Your AI Transformation, Live and Unscripted
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pre-Session Discovery (1 Week Before)</h3>
                    <p className="text-gray-600">We deploy an AI agent to interview your team, gathering burning questions and understanding your specific challenges. This ensures the session addresses your exact needs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opening Magic (10 Minutes)</h3>
                    <p className="text-gray-600">We address the burning questions from your team, ensuring everyone's concerns are heard before we dive into the transformation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live Transformation (90 Minutes)</h3>
                    <p className="text-gray-600">Watch as we transform your actual workflow in real-time. Your team participates, providing feedback as we build AI-powered solutions live. No slides, no theory—just your processes being revolutionized.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Creation (Throughout)</h3>
                    <p className="text-gray-600">Your team provides real-time feedback as solutions emerge. Watch AI analyze data, create websites, generate content, and automate processes—all responding to your input.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tangible Deliverables (Take Home)</h3>
                    <p className="text-gray-600">Leave with working tools, automated workflows, custom AI agents, and a clear implementation roadmap. Plus recordings and 30-day support to ensure success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Created Live */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What We Create Together—Live
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
                  <p className="text-gray-600">Watch AI analyze years of data in minutes, surfacing insights your teams never knew existed</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Websites & Apps</h3>
                  <p className="text-gray-600">Create professional landing pages, dashboards, and tools in minutes, not months</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Voice AI Assistants</h3>
                  <p className="text-gray-600">Deploy AI agents that can interview, survey, and gather data at scale</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Content & Campaigns</h3>
                  <p className="text-gray-600">Generate job descriptions, marketing materials, and strategic documents instantly</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Video & Multimedia</h3>
                  <p className="text-gray-600">Create professional video ads and multimedia content on demand</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Automated Workflows</h3>
                  <p className="text-gray-600">Build repeatable processes that save hundreds of hours monthly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Live Reactions from Executive Sessions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <p className="text-lg font-semibold mb-2">"{testimonial.quote}"</p>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.context}</p>
                    <p className="text-sm font-medium text-secondary">{testimonial.role}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/5 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Average Session Rating: 4.8/5 from 100+ Executives</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Enterprise-Grade AI Arsenal
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                We bring the full power of cutting-edge AI to your challenge
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {toolsShowcase.map((tool, index) => (
                  <div key={index} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">
                    {tool}
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mt-8">
                Each tool carefully selected and orchestrated for your specific workflow transformation
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perfect For Leaders Ready to Lead
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ideal Participants</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>C-Suite Executives</strong> ready to see AI's real impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Department Heads</strong> facing 10x demands with same resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Innovation Leaders</strong> who need to prove AI ROI quickly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Teams of 20-30</strong> who need alignment on AI strategy</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Industries Transformed</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span>Financial Services & Banking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span>Logistics & Supply Chain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span>Healthcare & Life Sciences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span>Technology & Software</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span>Government & Public Sector</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Investment & Format Options
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border-2 border-primary rounded-xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold">Standard Cooking Show</h3>
                    <span className="text-3xl font-bold text-primary">$4,999</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>2-hour intensive workshop</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Up to 30 participants</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Pre-session AI discovery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>All created assets included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Recording & implementation guide</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>30-day follow-up support</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                    size="lg"
                    onClick={() => window.open(cookingShowCalendlyLink, '_blank')}
                  >
                    Book Your Standard Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3">Extended Experience</h3>
                    <p className="text-gray-600 mb-4">Half-day deep dive with multiple workflow transformations</p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(cookingShowCalendlyLink, '_blank')}
                    >
                      Inquire About Extended
                    </Button>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3">Series Package</h3>
                    <p className="text-gray-600 mb-4">Monthly sessions to transform different departments</p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(cookingShowCalendlyLink, '_blank')}
                    >
                      Design Your Series
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  <strong>Virtual or On-Site:</strong> We come to you anywhere globally, or join virtually
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Reversal */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Promise to You
              </h2>
              <p className="text-xl mb-8">
                If you don't see at least one 10x improvement opportunity in the first 30 minutes, 
                we'll stop the session and refund your investment. No questions asked.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full">
                <CheckCircle className="h-6 w-6" />
                <span className="font-semibold">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "What is the Enterprise AI Cooking Show?",
                    a: "It's a live, interactive 2-hour workshop where Fortune 500 executives watch their actual workflows transform before their eyes. Unlike traditional demos, we build real solutions for your specific challenges in real-time, with your team participating and providing feedback throughout."
                  },
                  {
                    q: "Is this just another AI demo?",
                    a: "No. We build real solutions for your actual workflows during the session. You leave with working tools, not just ideas. Your team participates in the creation process, providing real-time feedback as we transform your processes live."
                  },
                  {
                    q: "What if our data is confidential?",
                    a: "We use synthetic data for demonstrations, or work with anonymized datasets. All sessions follow enterprise-grade security protocols. We can sign NDAs and work within your compliance requirements."
                  },
                  {
                    q: "How technical do participants need to be?",
                    a: "Zero technical knowledge required. If you can use email, you can participate. The session is designed for business leaders, not technologists."
                  },
                  {
                    q: "What happens after the workshop?",
                    a: "You keep everything created during the session, plus receive implementation guides, recordings, and 30-day support. Your team will have the knowledge and tools to continue the transformation independently."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to See Your Future—Today?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                In 2 hours, watch your team go from AI-curious to AI-capable. 
                No theory. No slides. Just your actual workflows transforming in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-white"
                  onClick={() => window.open(cookingShowCalendlyLink, '_blank')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Cooking Show
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                  onClick={() => window.location.href = 'mailto:hello@gsdat.work?subject=Enterprise AI Cooking Show Inquiry'}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask a Question
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-8">
                Not ready for the full experience? Join our monthly AI Leaders Roundtable to see mini-demonstrations.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EnterpriseAICookingShow;