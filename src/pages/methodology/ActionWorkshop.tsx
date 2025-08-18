import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Download, BookOpen, Users, Target, TrendingUp, BarChart, FileText, Lightbulb, Clock, Brain, Zap, AlertCircle, Mic, Shield, ArrowRight, XCircle, Timer, MessageSquare, Sparkles, Rocket, Search, FileSearch, Edit, PenTool, Database, ChevronRight, CheckCircle, PlayCircle, RefreshCw } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";
import { corePhilosophy, workshopPhases, fiveRs, criticalTools as criticalToolsData, realExamples, iterativeLoopSteps, feedbackFramework } from "./ActionWorkshop.data";
import { 
  ExitRampSection, 
  EnergyDrainingSection, 
  ExcelTipSection, 
  WorkflowQualificationChecklist, 
  WorkshopTimeline, 
  PILawyerCaseStudy, 
  PeopleTypeWarning,
  MagicMomentVisualization,
  FormalCausesEnhanced
} from "./ActionWorkshop.enhancements";
import {
  FacilitatorPrepWork,
  WorkflowMappingTools,
  LiveTranscriptStrategy,
  FollowUpProtocol,
  CommonPitfalls,
  CounterfactualQuestions,
  EnterpriseAnalytics,
  ShowAndTellProtocol,
  WorkshopIntensity
} from "./ActionWorkshop.additions";

const ActionWorkshop = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceStructuredData = generateServicePageStructuredData(
    "AI Action Workshop Methodology - Transform Workflows 10x Faster",
    "Open-source methodology for running AI Action Workshops. Learn to compress 2-week workflows into 2 hours through hands-on coaching, rapid iteration, and immediate implementation.",
    "https://gsdat.work/methodology/action-workshop",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is an AI Action Workshop?",
      answer: "An AI Action Workshop is a 90-120 minute intensive session where we re-engineer a single critical business workflow in real-time using AI, targeting a 10x improvement in speed and efficiency. It's the atomic unit of AI transformation - teaching people to fish while solving real problems."
    },
    {
      question: "What makes a good candidate workflow for transformation?",
      answer: "Ideal workflows are high-value, repetitive processes taking 2 days to 2 weeks that involve the '5 R's': Research, Retrieval, Reading, Writing, and Reasoning with unstructured data. They should be energy-draining for the human expert and critical to business value delivery."
    },
    {
      question: "Who needs to be involved in an Action Workshop?",
      answer: "You need two key roles: The Expert (10+ years experience who knows what 'good' looks like) and The Operator (who will perform the re-engineered workflow). Sometimes this is the same person. Both must be committed to real change."
    },
    {
      question: "What is the 'Magic Moment' in workshops?",
      answer: "The Magic Moment occurs when participants see AI incorporate their nuanced, spoken feedback into a second or third iteration with shocking accuracy. This is when their internal model of what's possible shifts forever - they truly grasp the new paradigm of working with AI."
    },
    {
      question: "How do you ensure workshops create lasting change?",
      answer: "Success requires commitment to repetition (3-5 times minimum), scheduled follow-ups, and the 0-5 feedback framework. We quantify time savings, schedule check-ins, and help successful workshops seed additional transformations through internal show-and-tells."
    }
  ]);

  // All data imported from ActionWorkshop.data.ts
  const criticalTools = criticalToolsData;

  // Removed - now imported from ActionWorkshop.data.ts

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="AI Action Workshop Methodology - Transform Any Workflow 10x | GSD at Work"
        content="Master the AI Action Workshop methodology. Learn to compress 2-week workflows into 2 hours through hands-on transformation. Open-source playbook for creating magic moments and lasting change."
        canonicalUrl="https://gsdat.work/methodology/action-workshop"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="GSD AI Action Workshop - The Atomic Unit of Transformation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float animation-delay-500" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in-down hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-3 h-3 mr-1" />
              Open Source Methodology
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animate-gradient-shift">
              The AI Action Workshop
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 animate-fade-in-up animation-delay-200">
              The Atomic Unit of AI Transformation
            </p>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Transform any workflow from <strong className="text-purple-600">2 weeks to 2 hours</strong>. 
              This isn't about automation - it's about empowering experts to delegate repetitive tasks 
              while focusing on judgment, relationships, and strategic thinking.
            </p>
            
            <div className="glass-effect border border-purple-200/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-xl animate-fade-in-up animation-delay-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg font-semibold text-purple-900 mb-2">
                ⚡ The Magic Moment Guarantee
              </p>
              <p className="text-purple-800">
                Every workshop creates that breakthrough moment where participants viscerally 
                understand AI's potential. When they see their spoken feedback transformed into 
                refined output, their entire paradigm shifts.
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
                onClick={() => window.location.href = "/associate-program"}
              >
                <Users className="mr-2 h-5 w-5" />
                Become a Practitioner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in-down">
              Core Philosophy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {corePhilosophy.map((principle, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group hover-lift overflow-hidden relative animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight} group-hover:scale-110 transition-transform duration-300`}>
                        {principle.icon}
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Formal Causes Section */}
            <div className="mt-8">
              <FormalCausesEnhanced />
            </div>
          </div>
        </div>
      </section>

      {/* The 5 R's */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative`}>
        <div className="absolute inset-0 bg-grid-gray-100/[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-down">
              The 5 R's: Ideal Workflow Characteristics
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Workflows heavy in these activities are prime candidates for 10x transformation
            </p>
            
            <div className="grid md:grid-cols-5 gap-6">
              {fiveRs.map((r, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift animate-fade-in-up text-center`} style={{ animationDelay: `${index * 50}ms` }}>
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mb-3">
                      {r.r[0]}
                    </div>
                    <CardTitle className="text-lg">{r.r}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{r.description}</p>
                    <p className="text-xs text-gray-500 italic">{r.example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className={`${spacing.section.sm}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <WorkshopTimeline />
          </div>
        </div>
      </section>

      {/* The Four-Phase Process */}
      <section id="methodology" className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center animate-fade-in-down">
              The Four-Phase Process
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              From discovery to lasting change - every phase is critical
            </p>
            
            {workshopPhases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${phaseIndex * 150}ms` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full ${gradients.primaryLight} animate-pulse-soft`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {phase.phase}: {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.subtitle}</p>
                  </div>
                </div>
                
                <Card className={`${shadows.cardEffect} hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
                  <CardHeader>
                    <CardDescription className="text-base">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex gap-4 group hover:bg-gray-50/50 p-3 rounded-lg transition-all duration-200">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {stepIndex + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Phase 1: Discovery & Preparation Tools */}
            <div className="mt-16 space-y-12">
              <h3 className="text-2xl font-bold text-primary text-center">Discovery & Preparation Tools</h3>
              
              {/* Facilitator Prep */}
              <div className={`${animations.fadeInUp} animation-delay-100`}>
                <FacilitatorPrepWork />
              </div>
              
              {/* Workflow Mapping */}
              <div className={`${animations.fadeInUp} animation-delay-200`}>
                <WorkflowMappingTools />
              </div>
              
              {/* Enterprise Analytics */}
              <div className={`${animations.fadeInUp} animation-delay-300`}>
                <EnterpriseAnalytics />
              </div>
              
              {/* Energy-Draining Tasks */}
              <div className={`${animations.fadeInUp} animation-delay-400`}>
                <EnergyDrainingSection />
              </div>
              
              {/* Workflow Qualification */}
              <div className={`${animations.fadeInUp} animation-delay-500`}>
                <WorkflowQualificationChecklist />
              </div>
            </div>
            
            {/* Phase 3: Live Workshop Execution */}
            <div className="mt-16 space-y-12">
              <h3 className="text-2xl font-bold text-primary text-center">Live Workshop Execution</h3>
              
              {/* Exit Ramp - Trust Building */}
              <div className={`${animations.fadeInUp} animation-delay-100`}>
                <ExitRampSection />
              </div>
              
              {/* Live Transcript Strategy */}
              <div className={`${animations.fadeInUp} animation-delay-200`}>
                <LiveTranscriptStrategy />
              </div>
              
              {/* Workshop Intensity Warning */}
              <div className={`${animations.fadeInUp} animation-delay-300`}>
                <WorkshopIntensity />
              </div>
              
              {/* People Type Warning */}
              <div className={`${animations.fadeInUp} animation-delay-400`}>
                <PeopleTypeWarning />
              </div>
            </div>
            
            {/* Phase 4: Follow-Up & Scaling */}
            <div className="mt-16 space-y-12">
              <h3 className="text-2xl font-bold text-primary text-center">Follow-Up & Scaling Success</h3>
              
              {/* Follow-Up Protocol */}
              <div className={`${animations.fadeInUp} animation-delay-100`}>
                <FollowUpProtocol />
              </div>
              
              {/* Show and Tell Sessions */}
              <div className={`${animations.fadeInUp} animation-delay-200`}>
                <ShowAndTellProtocol />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Iterative Loop */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-purple-50 via-white to-blue-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              The Iterative Loop: Creating Magic
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              This cycle is the heart of the workshop - repeat until excellence
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {iterativeLoopSteps.map((step, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-600 italic">{step.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Magic Moment Visualization */}
            <MagicMomentVisualization />
          </div>
        </div>
      </section>

      {/* Critical Tools */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Critical Tools & Setup
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {criticalTools.map((tool, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                        {tool.icon}
                      </div>
                      <CardTitle className="text-xl">{tool.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tool.tools.map((t, idx) => (
                        <Badge key={idx} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{tool.importance}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className={`mt-8 ${shadows.cardEffect} border-red-200 bg-gradient-to-br from-red-50 to-orange-50`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  The Non-Negotiable Rule
                </h3>
                <p className="text-red-800 mb-4">
                  <strong>Stop typing. Start speaking.</strong> 99% of the time you would have 
                  typed before, use dictation instead. This is the single biggest lever for 
                  productivity gains, yet the hardest habit to break.
                </p>
                <p className="text-red-800">
                  Typing is the old way. Speech is the new way. No exceptions during workshops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Critical Excel Technical Tip */}
      <section className={`${spacing.section.sm}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ExcelTipSection />
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Real-World Transformations
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {realExamples.map((example, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover-lift animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${gradients.primaryLight}`}>
                        {example.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{example.title}</CardTitle>
                        <CardDescription>{example.workflow}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500">Before</p>
                          <p className="text-sm text-gray-700">{example.before}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-500">After</p>
                          <p className="text-sm text-gray-700">{example.after}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm font-semibold text-primary">{example.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Detailed PI Lawyer Case Study */}
            <div className="mt-16">
              <PILawyerCaseStudy />
            </div>
          </div>
        </div>
      </section>

      {/* The 0-5 Feedback Framework */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              The 0-5 Feedback Framework
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Never skip this question - it's your most valuable calibration tool
            </p>
            
            {/* Enhanced Counterfactual Questions */}
            <div className="mb-8">
              <CounterfactualQuestions />
            </div>

            <Card className={`${shadows.cardEffect} mb-8`}>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-lg font-semibold text-gray-900 mb-2">The Critical Question:</p>
                  <p className="text-2xl text-primary font-bold">
                    "Given the time, money, and energy invested, from 0 to 5, how do you feel?"
                  </p>
                  <p className="text-gray-600 mt-2">
                    0 = Complete regret | 5 = Exceeded expectations
                  </p>
                </div>

                <div className="space-y-4">
                  {feedbackFramework.map((level, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0">
                        <Badge variant="outline" className="font-bold">{level.score}</Badge>
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-gray-900 mb-1">{level.meaning}</p>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Follow-up:</strong> {level.followUp}
                        </p>
                        <p className="text-sm text-gray-600 italic">{level.insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${shadows.cardEffect} border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Why Counterfactuals Matter
                </h3>
                <p className="text-blue-800 mb-4">
                  Asking "Why not a [score-1]?" forces people to articulate value even when 
                  disappointed. Asking "What would make it a [score+1]?" reveals specific 
                  friction points and opportunities.
                </p>
                <p className="text-blue-800 font-medium">
                  The answers are <em>always</em> surprising. This raw, quantified feedback 
                  is how you continuously improve and maintain your edge as a practitioner.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scaling Success */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-gray-50 via-white to-green-50/30`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              From Workshop to Transformation
            </h2>
            
            <div className="space-y-8">
              <Card className={`${shadows.cardEffect} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-primary" />
                    The 0→1→10→100 Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mx-auto mb-2">
                        0→1
                      </div>
                      <p className="text-sm font-semibold">First Success</p>
                      <p className="text-xs text-gray-600">Single workshop breakthrough</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mx-auto mb-2">
                        1→10
                      </div>
                      <p className="text-sm font-semibold">Repetition</p>
                      <p className="text-xs text-gray-600">3-5 times builds habit</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mx-auto mb-2">
                        10→100
                      </div>
                      <p className="text-sm font-semibold">Formalization</p>
                      <p className="text-xs text-gray-600">Custom GPTs, templates</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mx-auto mb-2">
                        100+
                      </div>
                      <p className="text-sm font-semibold">Software</p>
                      <p className="text-xs text-gray-600">Bespoke automation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Creating Viral Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Internal Show & Tell</p>
                      <p className="text-sm text-gray-600">
                        15-minute demo by workshop participant. Screen share the before/after. 
                        Creates social proof and generates inbound interest.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Identify Adjacent Workflows</p>
                      <p className="text-sm text-gray-600">
                        Success creates curiosity. "Could we do this for X?" conversations 
                        naturally emerge. Your pipeline builds itself.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Build Champions Network</p>
                      <p className="text-sm text-gray-600">
                        Workshop graduates become AI champions. They spot opportunities, 
                        advocate for change, and teach others the new way of working.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Avoiding Common Pitfalls
            </h2>
            
            <div className="space-y-6">
              <Card className={`${shadows.cardEffect} border-l-4 border-red-500`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Skipping to Automation
                  </h3>
                  <p className="text-gray-700">
                    Don't sell automation before transformation. People need to experience the 
                    new way of working before they can specify what to automate. Go 0→1 first, 
                    always.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-red-500`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Ignoring Formal Causes
                  </h3>
                  <p className="text-gray-700">
                    If the business model rewards inefficiency (billable hours), no amount of 
                    AI will create lasting change. Address structural issues or expect friction.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-red-500`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Working with Procedure-Focused Experts
                  </h3>
                  <p className="text-gray-700">
                    People who value process over outcomes resist AI fundamentally. They see 
                    workflow changes as threats, not opportunities. Choose outcome-focused partners.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-red-500`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Using Inferior Models
                  </h3>
                  <p className="text-gray-700">
                    Never compromise on model quality to save pennies. The difference between 
                    GPT-5 and older models is the difference between magic and frustration. Always 
                    use the best available (GPT-5, Claude 4, Gemini 2.5 Pro).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls Warning */}
      <section className={`${spacing.section.md} bg-gradient-to-br from-red-50 via-white to-orange-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <CommonPitfalls />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${spacing.section.lg} bg-gradient-to-br from-primary/5 to-purple-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your First Workflow?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              This methodology is open source because we believe in permissionless learning. 
              Master it yourself, or work with our certified associates.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Study</h3>
                  <p className="text-sm text-gray-600">
                    Practice with your own workflows. Document your results.
                  </p>
                </CardContent>
              </Card>
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-sm text-gray-600">
                    Run workshops in your organization. Create magic moments.
                  </p>
                </CardContent>
              </Card>
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Join</h3>
                  <p className="text-sm text-gray-600">
                    Become a certified associate. Help others transform.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "/associate-program"}
              >
                Become an Associate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "/ai-action-workshop"}
              >
                Book Your First Workshop
              </Button>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Questions? Read our <a href="/methodology/sales-discovery" className="text-primary underline">Sales Discovery methodology</a> to understand how we identify workshop opportunities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ActionWorkshop;