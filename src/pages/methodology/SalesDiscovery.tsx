import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Github, Download, BookOpen, Users, Target, TrendingUp, BarChart, FileText, Lightbulb, Scale, Search, Phone, Heart, DollarSign, Clock, Brain, Zap, AlertCircle, Mic, Shield, Link, ArrowRight, XCircle } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";

const SalesDiscovery = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceStructuredData = generateServicePageStructuredData(
    "GSD Sales Discovery Playbook - AI Adoption Sales Methodology",
    "Open-source sales discovery methodology for AI transformation. Learn to uncover 10x opportunities through structured discovery conversations focused on creating genuine value for prospects.",
    "https://gsdat.work/methodology/sales-discovery",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the GSD Sales Discovery methodology?",
      answer: "The GSD Sales Discovery methodology is an open-source framework for conducting discovery calls that focuses on 'willing the good of the other person.' It transforms sales conversations from transactions into partnerships by ensuring every prospect is incontrovertibly better off from the interaction."
    },
    {
      question: "What makes this discovery approach different?",
      answer: "Unlike traditional sales methodologies, GSD Discovery prioritizes the prospect's success over closing deals. Every call must leave the prospect less anxious, more excited, and on a better trajectory - regardless of whether they become a customer."
    },
    {
      question: "What are the three paths in the methodology?",
      answer: "The methodology presents three clear paths: Pause (advising against action when appropriate), DIY (providing explicit steps for self-implementation with scheduled follow-up), and Accelerate (formal engagement to increase probability of desired outcomes). This structure respects prospect agency while ensuring value delivery."
    },
    {
      question: "How should I prepare for discovery calls?",
      answer: "Preparation is critical. Build a comprehensive dossier using AI research agents, gather financial data, estimate ROI potential, and use pre-call data gathering techniques like strategic email questions or AI voice assistants. Never enter a call unprepared - success is determined before you speak."
    },
    {
      question: "How do I price engagements using this methodology?",
      answer: "Never bill hourly - sell outcomes. Use the 'offensive amount' question to gauge maximum willingness to pay, then discount based on your confidence level (minimum 51%) and payment terms. Cash upfront with satisfaction guarantee for smaller engagements, performance-based for larger ones."
    }
  ]);

  const philosophyPrinciples = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Will the Good of the Other",
      description: "Every interaction must prioritize the prospect's goals. Based on the classical definition of charity (caritas), we commit to understanding and advancing their good, not ours."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Value Over Revenue",
      description: "Whether or not they become a customer is secondary. What matters is that they leave better off - less anxious, more excited, on a genuinely better trajectory."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Come to Terms First",
      description: "Before you can will someone's good, you must understand what that good is. Deep discovery and genuine curiosity are prerequisites for value creation."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Create Immediate Impact",
      description: "Every call should deliver actionable insights they can apply immediately. Share counterintuitive wisdom from your experience that challenges their assumptions."
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "The Preparation",
      subtitle: "Before the Call",
      icon: <Search className="w-5 h-5" />,
      description: "Success is determined before you ever speak to the prospect",
      steps: [
        {
          title: "Block Your Time",
          details: "Schedule 15 minutes before for focused prep, 15 minutes after for comprehensive follow-up"
        },
        {
          title: "Build the Dossier",
          details: "Use AI research agents to gather public information about the person, organization, and financials"
        },
        {
          title: "Understand the Financials",
          details: "Estimate revenue, profit, peer comparison, and potential ROI from your solution"
        },
        {
          title: "Gather Private Data",
          details: "Send strategic email questions or deploy AI voice assistants for pre-call intake"
        }
      ]
    },
    {
      phase: "Phase 2",
      title: "The Execution",
      subtitle: "During the Call",
      icon: <Phone className="w-5 h-5" />,
      description: "Guide the conversation with purpose and curiosity",
      steps: [
        {
          title: "Set the Stage",
          details: "Confirm time, state your goal to understand context and be maximally helpful"
        },
        {
          title: "Establish Present State",
          details: "Share your research findings, let them correct and fill gaps"
        },
        {
          title: "Define Desired Future",
          details: "Ask 'If you could wave a magic wand, where would you want to be in 3 months?'"
        },
        {
          title: "Identify the Gap",
          details: "Use counterfactuals: 'What would have to be true for that to happen?'"
        },
        {
          title: "Vision Stress Test",
          details: "Paint vivid picture of proximal outcome - answer must be 'fantastic' or keep discovering"
        }
      ]
    },
    {
      phase: "Phase 3",
      title: "The Decision",
      subtitle: "Structuring the Offer",
      icon: <Scale className="w-5 h-5" />,
      description: "Present three clear paths forward",
      steps: [
        {
          title: "Path 1: Pause",
          details: "Advise against action when it would be detrimental - builds immense trust"
        },
        {
          title: "Path 2: DIY",
          details: "Provide explicit action plan, secure commitment on timeline, schedule follow-up"
        },
        {
          title: "Path 3: Accelerate",
          details: "Formal engagement to increase probability of achieving desired outcome faster"
        }
      ]
    },
    {
      phase: "Phase 4",
      title: "The Commitment",
      subtitle: "After the Call",
      icon: <Check className="w-5 h-5" />,
      description: "Every successful call ends with clear mutual commitment",
      steps: [
        {
          title: "Execute Follow-Up",
          details: "Use your 15-minute block to draft comprehensive email using call transcript"
        },
        {
          title: "Schedule Check-ins",
          details: "For DIY path, schedule automated follow-up for their committed date"
        },
        {
          title: "Cultivate Goodwill",
          details: "Create space for reciprocity - ask for introductions or connections"
        }
      ]
    }
  ];

  const pricingFramework = [
    {
      title: "Never Bill Hourly",
      icon: <Clock className="w-5 h-5" />,
      description: "You're selling outcomes, not time. AI enables massive acceleration - hourly billing leaves value on the table."
    },
    {
      title: "The 'Offensive Amount' Question",
      icon: <DollarSign className="w-5 h-5" />,
      description: "Ask: 'If I could guarantee that outcome right now, what would be an offensive amount to ask for?' This reveals maximum willingness to pay."
    },
    {
      title: "Risk-Based Pricing",
      icon: <AlertCircle className="w-5 h-5" />,
      description: "Discount based on confidence (minimum 51%) and payment terms. Cash upfront = lower price, performance-based = higher price."
    },
    {
      title: "Quantify Both Sides",
      icon: <BarChart className="w-5 h-5" />,
      description: "Frame the upside potential AND the downside risk of inaction. Loss aversion is powerful motivation."
    }
  ];

  const researchPromptTemplate = `
Draft a dossier on [Person's Name], [Title] at [Company]. 
I am meeting with them to discuss [Context].

Focus on:
1. Professional background and recent activity
2. The organization's business model and customer experience
3. Financial metrics:
   - Revenue & profit estimates
   - Growth trajectory
   - Peer comparison
4. Potential ROI from our solution
5. Strategic initiatives they may be pursuing
6. Challenges they're likely facing

Draw a line from our potential solution to financial outcomes 
(increased revenue, cost savings, higher ROE).
  `;

  const visionTestQuestions = [
    "If I could snap my fingers and guarantee you'd have 10 qualified meetings with LPs booked by the conference, how would that feel?",
    "If we could guarantee your team would save 20 hours per week on repetitive tasks starting next month, what would that mean for you?",
    "If you knew with certainty that your conversion rate would double in 90 days, how would that change your planning?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="GSD Sales Discovery Playbook - Open Source AI Sales Methodology | GSD at Work"
        content="Master AI transformation discovery calls with our open-source methodology. Learn to uncover 10x opportunities while genuinely helping prospects succeed. Transform sales from transaction to partnership."
        canonicalUrl="https://gsdat.work/methodology/sales-discovery"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="GSD Sales Discovery Playbook - Willing the Good of the Other"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-28 pb-20 ${gradients.backgroundSubtle}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <BookOpen className="w-3 h-3 mr-1" />
              Open Source Methodology
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              The GSD Sales Discovery Playbook
            </h1>
            
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Willing the Good of the Other
            </p>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform sales conversations from transactions into partnerships. 
              Every interaction must leave the prospect <strong>incontrovertibly better off</strong> - 
              less anxious, more excited, and on a genuinely better trajectory.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                📚 Based on St. Thomas Aquinas's Definition of Charity
              </p>
              <p className="text-blue-800">
                <em>"Caritas"</em> - To will the good of the other. This isn't about closing deals; 
                it's about creating value. When you commit to this, the right business naturally follows.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "#methodology"}
              >
                Start Learning the Methodology
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "/associate-program"}
              >
                <Users className="mr-2 h-5 w-5" />
                Become an Associate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Core Philosophy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {philosophyPrinciples.map((principle, index) => (
                <Card key={index} className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
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

            <Card className={`mt-8 ${shadows.cardEffect} border-orange-200 bg-orange-50`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">
                  The Mindset Shift
                </h3>
                <p className="text-orange-800 mb-4">
                  This approach fights against selfish human nature, but the results compound. 
                  Get enough reps, see the fruit, and it becomes natural. Justice works in mysterious ways - 
                  goodwill creates capital, attention, and opportunities that flow back to you.
                </p>
                <p className="text-orange-800 font-medium">
                  Even if you don't get paid immediately, you're cultivating a network of authentic advocates 
                  who spread your name in private channels where decisions are made.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Four Phases */}
      <section id="methodology" className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              The Four-Phase Process
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              From preparation to commitment, every step is designed to maximize value delivery
            </p>
            
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full ${gradients.primaryLight}`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {phase.phase}: {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.subtitle}</p>
                  </div>
                </div>
                
                <Card className={`${shadows.cardEffect}`}>
                  <CardHeader>
                    <CardDescription className="text-base">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                            {stepIndex + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Three Paths */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              The Three Paths Forward
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="destructive">Path 1</Badge>
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">Pause</CardTitle>
                  <CardDescription>When action would be detrimental</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Rare but powerful. When pursuing their idea would harm them, advise against it.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Example:</strong> "You're chasing an AI trend that doesn't fit your business model. 
                      I recommend focusing on your core strengths instead."
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    This builds immense trust and demonstrates true commitment to their success.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300 border-blue-200`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800">Path 2 (Default)</Badge>
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">DIY</CardTitle>
                  <CardDescription>Self-implementation with guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Your default value-add. Provide explicit, actionable steps to achieve their goal themselves.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Share the "secret" - exact steps and tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Include counterintuitive insights from experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Get commitment: "When will you have this done?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Schedule follow-up: "Can I check in on that date?"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300 border-green-200`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800">Path 3</Badge>
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Accelerate</CardTitle>
                  <CardDescription>Formal engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Take on the work to increase probability of success, faster.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900">Frame the Value</p>
                      <p className="text-sm text-green-800">
                        Quantify upside potential + downside of inaction
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900">Determine Investment</p>
                      <p className="text-sm text-green-800">
                        Use "offensive amount" question, discount by confidence
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900">Structure Terms</p>
                      <p className="text-sm text-green-800">
                        Cash upfront or performance-based, never hourly
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Framework */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Pricing & Terms Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {pricingFramework.map((item, index) => (
                <Card key={index} className={`${shadows.cardEffect}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight}`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Payment Structure Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Cash Upfront (Lower Risk)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Lower price for client</li>
                      <li>• Satisfaction guarantee</li>
                      <li>• Ideal for initial engagements</li>
                      <li>• Filters for serious clients</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance-Based (Higher Risk)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Higher price for client</li>
                      <li>• Pay on successful completion</li>
                      <li>• Demonstrates confidence</li>
                      <li>• Suitable for larger engagements</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong>Remember:</strong> Minimum 51% confidence required. Never take on engagements 
                    where success probability is below this threshold. Rescope if needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Real-World Examples & Scenarios
            </h2>
            
            <div className="space-y-8">
              <Card className={`${shadows.cardEffect} border-l-4 border-red-500`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    The Pause Path: AI Trend Chaser
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Scenario:</strong> A traditional manufacturing CEO wants to "put AI on everything" after a conference.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Discovery:</strong> Their core competency is precision engineering. Their customers value reliability over innovation. 
                    AI implementation would distract from their differentiator.
                  </p>
                  <p className="text-gray-700 italic">
                    <strong>Your Response:</strong> "I'm going to recommend something unusual - don't pursue AI right now. 
                    Your 98% on-time delivery is why Fortune 500s choose you. Focus on getting to 99.5% instead. 
                    That's worth $2M more than any AI initiative."
                  </p>
                  <p className="text-sm text-green-700 mt-3">
                    <strong>Result:</strong> They become your biggest advocate, referring 3 clients who actually need AI transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-blue-500`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    The DIY Path: Recruiter's 10x Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Scenario:</strong> A $500 engagement to help one recruiter optimize their workflow.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Discovery:</strong> They spend 3 hours daily typing up candidate notes into their ATS.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>DIY Solution:</strong> "Use this voice-to-text template with Claude. Record your thoughts, 
                    paste the transcript, and it formats everything for your ATS. Here's the exact prompt..."
                  </p>
                  <p className="text-gray-600 italic mb-3">
                    <strong>Commitment:</strong> "When will you test this with 5 candidates?" → "By Friday."
                    <br />
                    <strong>Follow-up:</strong> Automated email scheduled for Friday afternoon.
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Result:</strong> They save 2.5 hours daily. Six months later, their company engages you for 
                    a $50K enterprise transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-green-500`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    The Accelerate Path: Top-of-Funnel Crisis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Scenario:</strong> SaaS startup with 0.1% cold email response rate, burning $50K/month, 
                    4 months runway remaining.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Discovery:</strong> Generic messaging, no personalization, targeting too broad.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Vision Test:</strong> "If I could guarantee 100 qualified meetings booked next month, 
                    how would that feel?" → "That would literally save our company!"
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Offensive Amount Question:</strong> "What would be an offensive amount to ask for that?" 
                    → "$75,000"
                  </p>
                  <p className="text-gray-700 italic mb-3">
                    <strong>Your Offer:</strong> "For $15K upfront, I'll build an AI-powered outbound system using 
                    Clay + GPT-4 + multi-channel sequences. If we don't book 50 meetings, full refund."
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Result:</strong> 73 meetings booked, 12 deals closed, company extends runway by 18 months.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-orange-500`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-orange-600" />
                    The Tire Kicker: "Just Exploring Options"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Red Flags:</strong> Vague about budget, no specific pain point, "just want to learn about AI," 
                    multiple stakeholders but no decision maker present.
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Your Response:</strong> Shift to DIY immediately. Give them valuable resources, 
                    connect on LinkedIn, but don't invest more time.
                  </p>
                  <p className="text-gray-700 italic">
                    <strong>Script:</strong> "Based on what you've shared, you're in exploration mode. Here's my 
                    AI Readiness Checklist. Once you identify a specific workflow bottleneck costing over $50K annually, 
                    let's reconnect."
                  </p>
                  <p className="text-sm text-blue-700 mt-3">
                    <strong>Lesson:</strong> Qualify early and often. Your time has value - protect it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Technology Stack & Implementation
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                      <Search className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Research & Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>ChatGPT/Claude:</strong> Deep research agents with web browsing
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Perplexity:</strong> Real-time market intelligence
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Clay.com:</strong> Scalable data enrichment and qualification
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                      <Mic className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Call & Capture Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Fireflies.ai:</strong> Automatic transcription and note-taking
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Vapi:</strong> AI voice assistant for pre-call intake
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Calendly:</strong> Scheduling with intake questions
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                      <Link className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Relationship & Follow-up</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Happenstance:</strong> Find warm intros in your network
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Shortwave/Superhuman:</strong> Email scheduling and automation
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <strong>Clay:</strong> Data enrichment and personalization
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Voice Assistant Setup (Vapi)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-4">
                    <p className="text-sm text-yellow-900">
                      <strong>Note:</strong> This is a sample intake script. To deploy, you'll need to create a proper system prompt 
                      that gives the assistant full context about your business, expertise, and discovery goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sample Pre-Call Intake Script</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm font-mono">
                        "Hi! I'm helping [Your Name] prepare for your upcoming conversation. 
                        To make the most of your time together, I'd love to learn more about your situation.
                        <br /><br />
                        First, what's the biggest challenge you're facing in your business right now?
                        <br /><br />
                        [Listen and probe deeper]
                        <br /><br />
                        What would success look like for you in 3 months?
                        <br /><br />
                        What have you already tried to solve this problem?
                        <br /><br />
                        On a scale of 1-10, how urgent is solving this for you?"
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implementation Steps</h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">1.</span>
                        Deploy Vapi agent with intake script
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">2.</span>
                        Add phone number to calendar invite: "Call 555-XXX-XXXX for optional pre-meeting intake (5 min)"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">3.</span>
                        Review transcript before live call
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">4.</span>
                        Start conversation with: "I reviewed your intake call notes..."
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Tools & Templates */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Practical Tools & Templates
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Research Dossier Prompt
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <pre className="whitespace-pre-wrap">{researchPromptTemplate}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Vision Test Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Use these to validate you've found the right proximal goal:
                  </p>
                  <ul className="space-y-3">
                    {visionTestQuestions.map((question, index) => (
                      <li key={index} className="text-sm italic text-gray-700 pl-4 border-l-2 border-primary/30">
                        "{question}"
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    The answer must be "fantastic" or "incredible" - anything less means more discovery needed.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Time Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Before Call (15 min)</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Review dossier and research</li>
                        <li>• Prepare questions and hypothesis</li>
                        <li>• Set up note-taking (Fireflies)</li>
                        <li>• Get in the right mindset</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">During Call (20-50 min)</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• 2 min: Set stage and confirm time</li>
                        <li>• 10 min: Establish current state</li>
                        <li>• 15 min: Discovery and future state</li>
                        <li>• 10 min: Present paths forward</li>
                        <li>• 5 min: Secure commitments</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">After Call (15 min)</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Draft comprehensive follow-up</li>
                        <li>• Schedule DIY check-ins</li>
                        <li>• Update CRM and pipeline</li>
                        <li>• Share insights with team</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Follow-Up Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">DIY Follow-Up Structure</p>
                      <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
                        <li>Thank them for their time</li>
                        <li>Summarize key insights discovered</li>
                        <li>Provide detailed DIY instructions</li>
                        <li>Include resources and tools</li>
                        <li>Confirm their commitment date</li>
                        <li>Schedule check-in reminder</li>
                      </ol>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Accelerate Follow-Up Structure</p>
                      <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
                        <li>Restate the discovered opportunity</li>
                        <li>Quantify potential impact</li>
                        <li>Outline proposed approach</li>
                        <li>Present investment and terms</li>
                        <li>Include clear next steps</li>
                        <li>Attach relevant case studies</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification & Red Flags */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Qualification & Red Flags
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} border-red-200`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <XCircle className="w-5 h-5" />
                    Red Flags to Watch For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>No specific pain point:</strong> "We just want to explore AI"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>No budget authority:</strong> "I need to check with my boss"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Comparison shopping:</strong> "We're talking to 10 vendors"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>No urgency:</strong> "Maybe next year"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Wants free consulting:</strong> Multiple "quick questions" emails
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Past payment issues:</strong> "Can we do net 90?"
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-green-200`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Shield className="w-5 h-5" />
                    Green Flags of Quality Prospects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Specific, quantified pain:</strong> "We waste 20 hours/week on X"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Decision maker present:</strong> CEO/VP directly engaged
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Budget allocated:</strong> "We have $X set aside for this"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Clear timeline:</strong> "We need this solved by Q2"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Past success with consultants:</strong> Track record of investing
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <strong>Prepared for call:</strong> Completed intake, shared context
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardHeader>
                <CardTitle>Early Disqualification Scripts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Tire Kicker:</p>
                    <p className="text-sm italic text-gray-700">
                      "It sounds like you're in early exploration mode. I've created a free resource - 
                      the AI Readiness Assessment - that will help you identify if and where AI makes sense 
                      for your business. Once you find a specific bottleneck costing over $50K annually, 
                      let's reconnect."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Budget-Less:</p>
                    <p className="text-sm italic text-gray-700">
                      "Based on what you've shared, the solution would require about $X investment. 
                      It sounds like that's not in the cards right now. Here's what you can do yourself 
                      in the meantime... When budget becomes available, I'm happy to help accelerate your progress."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm mb-2">For the Wrong Fit:</p>
                    <p className="text-sm italic text-gray-700">
                      "I specialize in AI-powered process transformation for workflows losing over $50K annually. 
                      Your challenge sounds more like a pure software development need. 
                      Let me introduce you to [Name] who specializes in exactly what you're looking for."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Critical Best Practices
            </h2>
            
            <div className="space-y-6">
              <Card className={`${shadows.cardEffect} border-l-4 border-primary`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Always Secure Mutual Commitments</h3>
                  <p className="text-gray-600">
                    Every call must end with both parties committing to specific actions. 
                    Even if it's just connecting on LinkedIn, create mutual accountability. 
                    "Let me think about it" is a failure signal.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-blue-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Create Space for Reciprocity</h3>
                  <p className="text-gray-600">
                    After providing value, ask "How can I be helpful to you beyond this?" 
                    or "I'm looking to connect with more [target audience] - who's one person I should talk to?" 
                    People want to reciprocate value.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-green-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Use Technology as Force Multiplier</h3>
                  <p className="text-gray-600">
                    Deploy AI research agents for prep, Fireflies for note-taking, 
                    voice assistants for pre-call intake, and LLMs for follow-up drafting. 
                    But remember: technology enables the human connection, it doesn't replace it.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-purple-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Share Counterintuitive Insights</h3>
                  <p className="text-gray-600">
                    The mark of true expertise is sharing insights that challenge assumptions. 
                    "To achieve X, you might need to do the opposite of what you're thinking." 
                    Back it with stories and data from your experience.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} border-l-4 border-orange-600`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Speak the Language of Finance</h3>
                  <p className="text-gray-600">
                    Everything reduces to financial impact. Before every call, draw a line from 
                    your solution to ROI. Understand their revenue, costs, and profit structure. 
                    CFO-level validation transforms conversations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Flywheel Effect */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                  The Goodwill Flywheel
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 text-center">
                    When you consistently apply this methodology, something magical happens:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold">You Create Genuine Value</p>
                          <p className="text-sm text-gray-600">Every interaction leaves people better off</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold">Goodwill Accumulates</p>
                          <p className="text-sm text-gray-600">People remember and share their experience</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold">Private Networks Activate</p>
                          <p className="text-sm text-gray-600">Your name spreads in decision-maker circles</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-semibold">Quality Opportunities Flow</p>
                          <p className="text-sm text-gray-600">The right clients find you naturally</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <p className="text-lg font-semibold text-gray-800">
                      You can't measure this channel, but it has no ceiling.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Trust the process. Will the good. The rest follows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section id="download" className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Start Tracking Your Discovery Calls
            </h2>
            
            <Card className={`${shadows.cardEffect} max-w-2xl mx-auto`}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Discovery Call Tracker</h3>
                    <p className="text-gray-600 mb-4">
                      Download our CSV tracker to start documenting your discovery calls. 
                      Each completed row represents one solid rep toward mastery.
                    </p>
                    <ul className="text-left space-y-2 text-gray-600 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Track prospect details and company info
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Document long-term goals and proximal challenges
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Record estimated value and path chosen
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Monitor concrete commitments and follow-ups
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Link to discovery call recordings
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Button
                      size="lg"
                      className={`${buttonStyles.primary} ${shadows.buttonEffect} w-full`}
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/downloads/discovery-tracker-template.csv';
                        link.download = 'discovery-tracker-template.csv';
                        link.click();
                      }}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Discovery Tracker (CSV)
                    </Button>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Ready to take the next step?</strong> Complete 3+ successful discovery-to-engagement 
                        conversions using this methodology, then apply to become a GSD Associate.
                      </p>
                      <Button
                        size="lg"
                        variant="outline"
                        className={`${buttonStyles.outline.primary} ${shadows.buttonEffect} w-full`}
                        onClick={() => window.location.href = "/associate-program"}
                      >
                        <Users className="mr-2 h-5 w-5" />
                        Learn About the Associate Program
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-sm text-gray-500 mt-6">
              Licensed under Apache 2.0 with GSD at Work LLC copyright. 
              Free to use, modify, and distribute with attribution.
            </p>
          </div>
        </div>
      </section>

      {/* Connection to Other Methodologies */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              How This Connects to Other GSD Methodologies
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Discovery → Triple-A Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Discovery calls identify 10x opportunities that become candidates for the Triple-A transformation process.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold">Discovery Output</p>
                      <p className="text-xs text-gray-600">Qualified 10x opportunity with stakeholder buy-in</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-semibold">Triple-A Input</p>
                      <p className="text-xs text-gray-600">0→1 Action Workshop to prototype solution</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Discovery → Action Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The "Accelerate" path often leads directly to booking an Action Workshop as the first engagement.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm font-semibold">Discovery Negotiation</p>
                      <p className="text-xs text-gray-600">"Let's do a 2-hour workshop for $X to prove the 10x improvement"</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm font-semibold">Workshop Delivery</p>
                      <p className="text-xs text-gray-600">Hands-on transformation with immediate ROI</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Discovery → Associate Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Master discovery calls to qualify for the GSD Associate Program.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Complete 3+ successful discovery-to-engagement conversions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Demonstrate mastery of the three paths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Build reputation for creating genuine value</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    Discovery → AI Oracle Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complex organizations may need an AI Oracle session before individual discoveries.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <p className="text-sm font-semibold">Oracle First</p>
                      <p className="text-xs text-gray-600">Top-down analysis identifies opportunities</p>
                    </div>
                    <div className="p-3 bg-teal-50 rounded-lg">
                      <p className="text-sm font-semibold">Discovery Second</p>
                      <p className="text-xs text-gray-600">Deep-dive with specific stakeholders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.primaryLight} mt-8`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">The Discovery Foundation</h3>
                <p className="text-gray-700 text-center mb-6">
                  Sales Discovery is the foundation of all GSD engagements. Master this methodology first, 
                  then layer on specialized frameworks based on client needs.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className={buttonStyles.outline.secondary}
                    onClick={() => window.location.href = "/methodology/triple-a-framework"}
                  >
                    Triple-A Framework
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={buttonStyles.outline.secondary}
                    onClick={() => window.location.href = "/ai-action-workshop"}
                  >
                    Action Workshops
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={buttonStyles.outline.secondary}
                    onClick={() => window.location.href = "/associate-program"}
                  >
                    Associate Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              The Bottom Line
            </Badge>
            
            <h2 className="text-2xl font-bold text-primary mb-4">
              It's Not About Closing Deals
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              It's about creating value. When you commit to willing the good of the other person, 
              you transform from a salesperson into a trusted advisor. 
              The right business naturally follows.
            </p>
            
            <Button
              size="lg"
              className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
              onClick={() => window.location.href = "/associate-program"}
            >
              Join Our Associate Program
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesDiscovery;