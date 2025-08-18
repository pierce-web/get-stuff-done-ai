import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, AlertTriangle, Sparkles, Database, Mic, FileText, Users, Target, Brain, Zap, ArrowRight, CheckCircle, Clock, Shield, ChevronRight, Telescope, BookOpen, ExternalLink } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";
import { dataSourceCategories } from "./AIOracle.data";
import { DataSourceExplorer } from "./AIOracle.components";

const AIOracle = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceStructuredData = generateServicePageStructuredData(
    "AI Oracle/Crystal Ball Methodology - Surface Hidden Insights at Scale",
    "Open-source methodology for conducting AI Oracle sessions. Learn to use AI as a macroscope to surface overlooked risks and emergent opportunities from your organizational data.",
    "https://gsdat.work/methodology/ai-oracle",
    "https://gsdat.work/lovable-uploads/ai-oracle-methodology.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is an AI Oracle/Crystal Ball session?",
      answer: "An AI Oracle session is a 60-90 minute executive workshop that uses AI to analyze vast amounts of organizational data to surface previously overlooked risks and emergent opportunities with significant business impact."
    },
    {
      question: "What's the 'macroscope' concept?",
      answer: "Unlike a microscope (zooming in) or telescope (viewing distant objects), AI acts as a macroscope - making large-scale, complex patterns in your data legible and actionable. It reveals insights that were always there but invisible to human analysis."
    },
    {
      question: "What data sources work best for Oracle sessions?",
      answer: "The most valuable insights come from unstructured, qualitative 'digital exhaust': customer interactions, support tickets, meeting transcripts, emails, and internal communications. Proprietary data generated through external interactions tends to yield the highest value."
    },
    {
      question: "How do you ensure insights are actionable?",
      answer: "Every session targets two key outputs: one overlooked risk and one emergent opportunity, both with convexity (asymmetric upside/downside). We ensure concrete next steps with clear ownership and follow-up commitments."
    },
    {
      question: "Can this process be automated?",
      answer: "Yes, after 2-3 manual iterations to refine the process, Oracle analysis can be automated as a recurring input to executive meetings, transforming from a one-time intervention to continuous strategic advantage."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="AI Oracle Methodology - Surface Hidden Business Insights | GSD at Work"
        content="Master the AI Oracle/Crystal Ball methodology. Learn to analyze massive datasets and surface overlooked risks and opportunities using AI as a macroscope. Open-source playbook for data-driven transformation."
        canonicalUrl="https://gsdat.work/methodology/ai-oracle"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="GSD AI Oracle - The Macroscope for Business Intelligence"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float animation-delay-500" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-300/10 to-transparent rounded-full animate-pulse-soft" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in-down hover:scale-110 transition-transform duration-300">
              <Telescope className="w-3 h-3 mr-1" />
              Open Source Methodology
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up animate-gradient-shift">
              The AI Oracle
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 animate-fade-in-up animation-delay-200">
              Your Macroscope for Hidden Business Intelligence
            </p>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Transform <strong className="text-indigo-600">vast organizational data</strong> into 
              actionable insights. Surface the overlooked risks and emergent opportunities that 
              traditional analysis misses entirely.
            </p>
            
            <div className="glass-effect border border-indigo-200/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-xl animate-fade-in-up animation-delay-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg font-semibold text-indigo-900 mb-2">
                🔮 The Macroscope Promise
              </p>
              <p className="text-indigo-800">
                In 60-90 minutes, discover what's been hiding in plain sight: the critical risk 
                no one saw coming and the game-changing opportunity everyone missed.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "#methodology"}
              >
                Learn the Methodology
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "/ai-oracle-session"}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Book an Oracle Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Macroscope Concept */}
      <section className={`py-${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in-down">
              The Macroscope: A New Lens for Business Intelligence
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up`}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-center">Microscope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Traditional analytics zoom in on specific metrics and KPIs, missing the forest for the trees.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up animation-delay-200`}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Telescope className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-center">Telescope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Market research looks at distant trends and competitors, but can't see what's happening internally.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up animation-delay-400 border-2 border-indigo-200`}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform animate-pulse-soft">
                    <Brain className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-center text-indigo-900">Macroscope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-indigo-700 font-medium">
                    AI Oracle sessions reveal system-wide patterns across all your data, making the invisible visible.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className={`${shadows.cardEffect} border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  The Power of Legibility
                </h3>
                <p className="text-indigo-800 mb-4">
                  Your organization generates massive amounts of "digital exhaust" - customer emails, support tickets, 
                  meeting transcripts, Slack conversations. This data contains critical insights, but they remain 
                  <strong> unactivated</strong> because they're not legible to decision-makers.
                </p>
                <p className="text-indigo-800 font-medium">
                  The Oracle methodology makes these patterns visible, affording you new options and fundamentally 
                  better decisions. Once you can see what was always there, you can act on it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className={`py-${spacing.section.md} bg-gradient-to-br from-gray-50 to-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-down">
              What Success Looks Like
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Every Oracle session delivers concrete, high-impact outcomes with convexity
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} border-2 border-red-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up`}>
                <CardHeader className="bg-gradient-to-br from-red-50 to-orange-50">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-red-100">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-red-900">One Overlooked Risk</CardTitle>
                      <CardDescription className="text-red-700">Previously invisible threat</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-gray-700">Subtle shifts in customer sentiment signaling churn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-gray-700">Recurring bottlenecks indicating future failure points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-gray-700">Competitive threats emerging in the periphery</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm font-semibold text-red-900">Asymmetric Downside</p>
                    <p className="text-sm text-red-700 mt-1">Mitigating prevents massive losses</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} border-2 border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200`}>
                <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-green-100">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-green-900">One Emergent Opportunity</CardTitle>
                      <CardDescription className="text-green-700">High-upside potential</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">New customer persona showing intense demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Repeated feature requests pointing to new product lines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Internal processes ripe for high-ROI automation</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-green-900">Asymmetric Upside</p>
                    <p className="text-sm text-green-700 mt-1">Seizing could lead to exponential gains</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className={`${shadows.cardEffect} border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Beyond Individual Insights
                </h3>
                <p className="text-purple-800 mb-4">
                  The session naturally uncovers a pipeline of AI implementation opportunities - from automating 
                  rote processes to creating new customer-facing tools. It becomes a catalyst for broader transformation.
                </p>
                <p className="text-purple-800 font-medium">
                  Success = Clear, committed next steps with ownership and accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Three-Phase Process */}
      <section id="methodology" className={`py-${spacing.section.lg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in-down">
              The Three-Phase Oracle Process
            </h2>
            
            {/* Phase 1: Preparation & Data Curation */}
            <div className="mb-16 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Phase 1: Preparation & Data Curation
                  </h3>
                  <p className="text-gray-600">1-2 weeks prior • Gathering the raw materials</p>
                </div>
              </div>
              
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Data Inventory */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-indigo-600" />
                        Step 1: Create Comprehensive Data Inventory
                      </h4>
                      
                      <Card className={`${shadows.cardEffect} border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50`}>
                        <CardContent className="p-6">
                          <div className="mb-4 p-4 bg-emerald-100/80 rounded-lg border border-emerald-300">
                            <p className="font-semibold text-emerald-900 mb-2">🎯 Value Hierarchy Principle</p>
                            <p className="text-sm text-emerald-800">
                              <strong>Private data from customer interactions</strong> yields the highest Oracle insights. 
                              Start here first - recorded calls, support tickets, customer emails contain unfiltered truth.
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                              <span className="text-2xl">🔥</span>
                              <div>
                                <p className="font-semibold text-gray-900">Private External (★★★★★)</p>
                                <p className="text-sm text-gray-600">Customer calls, support tickets, emails - your proprietary gold mine</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                              <span className="text-2xl">📊</span>
                              <div>
                                <p className="font-semibold text-gray-900">Private Quantitative (★★★)</p>
                                <p className="text-sm text-gray-600">ERP data, metrics, analytics - reliable ground truth for sizing</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                              <span className="text-2xl">🏢</span>
                              <div>
                                <p className="font-semibold text-gray-900">Private Internal (★★)</p>
                                <p className="text-sm text-gray-600">Employee surveys, Slack, meetings - organizational context</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                              <span className="text-2xl">🌐</span>
                              <div>
                                <p className="font-semibold text-gray-900">Public Data (★)</p>
                                <p className="text-sm text-gray-600">Reviews, industry reports - supplementary validation</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">
                          <strong>Note on Bias:</strong> Every data source has inherent bias. Support tickets skew negative, 
                          sales calls skew optimistic. Cross-functional experts contextualize these biases during analysis.
                        </p>
                      </div>
                    </div>
                    
                    {/* Interactive Data Source Explorer */}
                    <div className="mt-8">
                      <DataSourceExplorer dataCategories={dataSourceCategories} />
                    </div>
                    
                    {/* Executive Context */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Mic className="w-5 h-5 text-indigo-600" />
                        Step 2: Capture Executive Context with Voice AI
                      </h4>
                      
                      <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <CardContent className="p-6">
                          <p className="text-gray-700 mb-4">
                            Deploy an AI voice assistant (e.g., Vapi) to interview each participant before the session:
                          </p>
                          <div className="space-y-3">
                            <div className="p-3 bg-white/80 rounded-lg">
                              <p className="font-medium text-indigo-900 mb-1">The Crystal Ball Question:</p>
                              <p className="text-sm text-gray-700 italic">
                                "If you had a crystal ball that saw everything the company did for the past 60 days, 
                                what three questions would you ask it?"
                              </p>
                            </div>
                            <div className="p-3 bg-white/80 rounded-lg">
                              <p className="font-medium text-indigo-900 mb-1">The Attention Question:</p>
                              <p className="text-sm text-gray-700 italic">
                                "What's the most important thing happening that no one is paying enough attention to?"
                              </p>
                            </div>
                            <div className="p-3 bg-white/80 rounded-lg">
                              <p className="font-medium text-indigo-900 mb-1">The Pre-Mortem:</p>
                              <p className="text-sm text-gray-700 italic">
                                "It's one year from now and we've failed to hit our goals. What's the most likely reason?"
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Data Processing */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-indigo-600" />
                        Step 3: Process and Refine the Data
                      </h4>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Consolidate</h5>
                          <p className="text-sm text-gray-600">
                            Gather all raw exports into a single local directory
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Sequence</h5>
                          <p className="text-sm text-gray-600">
                            Create chronologically-ordered text file or JSON/CSV
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Compress</h5>
                          <p className="text-sm text-gray-600">
                            Maximize signal density while preserving core facts
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-4 italic">
                        Think of raw data as crude oil - you need to refine it into dense, usable fuel for the AI.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Phase 2: Asynchronous Analysis */}
            <div className="mb-16 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Phase 2: Initial Analysis
                  </h3>
                  <p className="text-gray-600">Asynchronous • Multi-agent reasoning</p>
                </div>
              </div>
              
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Multi-Agent Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Step 4: Conduct Multi-Agent Analysis
                      </h4>
                      
                      <p className="text-gray-700 mb-6">
                        Use Claude Code or similar to instantiate AI agents with distinct personalities:
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-blue-200 bg-blue-50/50">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <span className="text-2xl">🔍</span>
                              The Explorer
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">
                              Insatiably curious, always looking for novel connections and patterns
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-orange-200 bg-orange-50/50">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <span className="text-2xl">🤔</span>
                              The Skeptic
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">
                              Demands hard evidence for every claim, pushes back on assumptions
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-green-200 bg-green-50/50">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <span className="text-2xl">🎯</span>
                              The Strategist
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">
                              Focused on "So what?" and "What can we do about this?"
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-sm text-purple-800">
                          <strong>Setup:</strong> Create a shared "scratchpad" for agents to debate. 
                          Task them to identify the single most critical risk and opportunity. 
                          Let them use code for quantitative analysis where needed.
                        </p>
                      </div>
                    </div>
                    
                    {/* Intelligence Report */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-600" />
                        Step 5: Generate Initial Intelligence Report
                      </h4>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Clean up multi-agent output into structured markdown report</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Share with stakeholders ahead of time for comments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>This becomes the anchor for live discussion</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Phase 3: Live Session */}
            <div className="mb-16 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Phase 3: The Live Oracle Session
                  </h3>
                  <p className="text-gray-600">60-90 minutes • Interactive discovery</p>
                </div>
              </div>
              
              <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Session Setup */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-green-600" />
                        Step 6: Set the Stage
                      </h4>
                      
                      <Card className="border-green-200 bg-green-50/50">
                        <CardContent className="p-4">
                          <p className="text-gray-700 mb-2">
                            <strong>Amazon-Style Reading:</strong> If participants haven't pre-read, 
                            start with 10-20 minutes of silent reading to ensure shared baseline.
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            The initial report is a starting point for debate, not a final verdict.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Interactive Discussion */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-600" />
                        Step 7: Facilitate Interactive Discussion
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Your Role</h5>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Guide conversation</li>
                            <li>• Manage time strictly</li>
                            <li>• Ensure all voices heard</li>
                            <li>• Push for concrete actions</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Participant Role</h5>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• React to findings</li>
                            <li>• Challenge assumptions</li>
                            <li>• Provide context</li>
                            <li>• Commit to actions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Oracle */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-green-600" />
                        Step 8: Use Large Context Window AI for Real-Time Inquiry
                      </h4>
                      
                      <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-indigo-900">The Live Oracle Toolkit</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <Badge className="bg-indigo-100 text-indigo-800">1</Badge>
                              <div>
                                <p className="font-medium text-gray-900">Google AI Studio with Gemini 1.5 Pro</p>
                                <p className="text-sm text-gray-600">Pre-load entire dataset into context window</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Badge className="bg-indigo-100 text-indigo-800">2</Badge>
                              <div>
                                <p className="font-medium text-gray-900">Fireflies.ai Live Transcript</p>
                                <p className="text-sm text-gray-600">Capture questions and discussions in real-time</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Badge className="bg-indigo-100 text-indigo-800">3</Badge>
                              <div>
                                <p className="font-medium text-gray-900">Interactive Loop</p>
                                <p className="text-sm text-gray-600">Copy questions from transcript → Paste to Gemini → Share insights</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-indigo-100/50 rounded-lg">
                            <p className="text-sm text-indigo-800">
                              This highly interactive loop allows the team to battle-test insights in real-time, 
                              ask follow-ups, and dig deeper until satisfied.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`py-${spacing.section.md} bg-gradient-to-br from-gray-50 to-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Best Practices & Advanced Techniques
            </h2>
            
            {/* The Art of Insightful Questioning */}
            <Card className={`${shadows.cardEffect} mb-8 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50`}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  The Art of Insightful Questioning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white/80 rounded-lg">
                    <p className="font-medium text-purple-900 mb-2">To Surface the Unknown:</p>
                    <p className="text-sm text-gray-700 italic">
                      "What is the most important thing in this data that no one is paying attention to?"
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/80 rounded-lg">
                    <p className="font-medium text-purple-900 mb-2">To Make Insights Actionable:</p>
                    <p className="text-sm text-gray-700 italic">
                      "What is one action that [Executive Name] can take in the next 60 seconds to get the ball rolling?"
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/80 rounded-lg">
                    <p className="font-medium text-purple-900 mb-2">To Uncover Social Dynamics (Use with Care):</p>
                    <p className="text-sm text-gray-700 italic">
                      "Perform a 'Straussian reading' of the internal communications. What are the esoteric power dynamics?"
                    </p>
                    <p className="text-xs text-amber-600 mt-2">
                      ⚠️ Can yield powerful but sometimes conspiratorial-sounding insights
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/80 rounded-lg">
                    <p className="font-medium text-purple-900 mb-2">To Quantify Findings:</p>
                    <p className="text-sm text-gray-700 italic">
                      "Can you size this opportunity? Based on the financial data, what's the potential quarterly impact?"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Technical Best Practices */}
            <Card className={`${shadows.cardEffect} border-indigo-200`}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-600" />
                  Technical & Operational Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Data Security</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Always use .gitignore for sensitive data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Never upload client data to remote repos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Use local processing whenever possible</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Transparency</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Share agent configurations with technical clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Document your methodology in private repos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Build trust through radical transparency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* After the Session */}
      <section className={`py-${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Ensuring Lasting Impact
            </h2>
            
            <div className="space-y-8">
              {/* Feedback Loop */}
              <Card className={`${shadows.cardEffect} border-green-200`}>
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Step 1: Close the Feedback Loop Immediately
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Ask each participant for a satisfaction score (0-5) and use counterfactual questions:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">For scores &lt; 5:</p>
                        <p className="text-sm text-gray-700 italic">
                          "What would have had to be true for this to be a [score + 1]?"
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">For score = 5:</p>
                        <p className="text-sm text-gray-700 italic">
                          "What was the most valuable aspect for you?"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recap & Accountability */}
              <Card className={`${shadows.cardEffect} border-purple-200`}>
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Step 2: Send Comprehensive Recap & Establish Accountability
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5" />
                      <span>Use AI to summarize Fireflies transcript within hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5" />
                      <span>Highlight key insights, decisions, and commitments (who/what/when)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5" />
                      <span>Request permission to follow up on action items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5" />
                      <span>Schedule check-in emails immediately</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* From One-Off to Recurring */}
              <Card className={`${shadows.cardEffect} border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50`}>
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-600" />
                    Step 3: Transition from One-Off to Recurring Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="border-indigo-200">
                        <CardHeader>
                          <Badge className="bg-indigo-100 text-indigo-800">Manual (0→1)</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">
                            Oracle analysis becomes standing input for weekly leadership meetings
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-purple-200">
                        <CardHeader>
                          <Badge className="bg-purple-100 text-purple-800">Refine (1→10)</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">
                            Run manually 2-3 times, gather feedback, perfect the format
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-pink-200">
                        <CardHeader>
                          <Badge className="bg-pink-100 text-pink-800">Automate (10→100)</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">
                            APIs and SDKs run analysis as recurring "cron job"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="p-4 bg-indigo-100/50 rounded-lg">
                      <p className="text-indigo-800 font-medium">
                        This transforms the AI Oracle from a one-time intervention into a continuous source 
                        of strategic advantage, permanently integrated into decision-making.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-${spacing.section.lg} bg-gradient-to-br from-primary/5 to-indigo-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to See What You've Been Missing?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              This methodology is open source because insight shouldn't be proprietary. 
              Master it yourself, or work with our certified practitioners.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Study the Method</h3>
                  <p className="text-sm text-gray-600">
                    Everything you need is documented here. Start with your own data.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Join the Community</h3>
                  <p className="text-sm text-gray-600">
                    Connect with practitioners applying Oracle methodology worldwide.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Book a Session</h3>
                  <p className="text-sm text-gray-600">
                    Work with certified experts to surface your hidden insights.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "/ai-oracle-session"}
              >
                Book Your Oracle Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect} hover:scale-105 transition-transform duration-300`}
                onClick={() => window.location.href = "https://github.com/culstrup/oracle-methodology"}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIOracle;