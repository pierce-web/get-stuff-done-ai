import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Github, Download, BookOpen, Users, Target, TrendingUp, BarChart, FileText, Lightbulb, Scale, Search } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";

const TripleAFramework = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceStructuredData = generateServicePageStructuredData(
    "Triple-A Transformation Playbook - Accelerated AI Adoption Methodology",
    "Open-source methodology for systematic AI transformation. Move beyond ad-hoc AI usage to drive measurable, high-impact business outcomes through AI-powered process re-engineering.",
    "https://gsdat.work/methodology/triple-a-framework",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is the Triple-A Framework?",
      answer: "The Triple-A (Accelerated AI Adoption) Framework is an open-source methodology for systematically identifying, developing, and scaling AI opportunities across businesses. It focuses on finding process bottlenecks and achieving 10x improvements through structured discovery, prototyping, and scaling phases."
    },
    {
      question: "Who can use the Triple-A Framework?",
      answer: "The framework is designed for AI Tiger Team leaders, transformation consultants, innovation managers, and anyone responsible for driving AI adoption in their organization. It's particularly valuable for those who want to move beyond ad-hoc AI experiments to systematic transformation."
    },
    {
      question: "What makes this framework different?",
      answer: "Unlike generic AI adoption approaches, Triple-A focuses on quantifiable business impact with CFO-level validation. It emphasizes finding the biggest constraint in valuable workflows, achieving 10x improvements, and teaching stakeholders to become self-sufficient."
    },
    {
      question: "How long does a typical Triple-A transformation take?",
      answer: "The framework follows a 0-to-1-to-10-to-10+ progression. Initial discovery and prototyping (0-to-1) typically takes 2-4 weeks. Scaling to team-wide adoption (1-to-10) adds another 2-4 weeks. Full automation (10+) varies based on complexity but is only pursued when ROI justifies custom development."
    },
    {
      question: "What resources are included with the framework?",
      answer: "The open-source package includes the complete methodology guide, opportunity pipeline tracker template, discovery call scripts, workshop preparation checklists, ROI calculation templates, and implementation SOPs. Everything you need to run your own AI transformation program."
    }
  ]);

  const pipelineStages = [
    {
      stage: "Discovery",
      icon: <Search className="w-5 h-5" />,
      description: "Deep-dive into workflows to find 10x opportunities",
      activities: ["Map current process", "Quantify baseline metrics", "Identify bottlenecks", "Negotiate workshop scope"]
    },
    {
      stage: "0→1 Workshop",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Co-create AI solution with stakeholder",
      activities: ["2-hour hands-on session", "Build working prototype", "Teach AI methodology", "Achieve 10x improvement"]
    },
    {
      stage: "1→10 Scaling",
      icon: <Users className="w-5 h-5" />,
      description: "Make solution team-wide accessible",
      activities: ["Create SOP documentation", "Build Custom GPTs", "Train the team", "Monitor adoption"]
    },
    {
      stage: "10+ Automation",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Full software development when ROI justifies",
      activities: ["Evaluate business case", "Design custom solution", "Professional development", "Enterprise deployment"]
    }
  ];

  const trackerColumns = [
    { name: "Client Stakeholder", desc: "Specific person championing the opportunity" },
    { name: "Challenge/Workflow", desc: "High-level summary of the process pain point" },
    { name: "Owner", desc: "Tiger Team member responsible for this opportunity" },
    { name: "Discovery", desc: "Link to recorded discovery call and process map" },
    { name: "0→1 Workshop", desc: "Link to workshop recording and initial prototype" },
    { name: "1→10 Template", desc: "Links to SOP and Custom GPT for scaling" },
    { name: "10+ Software", desc: "Custom automation when justified by ROI" },
    { name: "Quantified Impact", desc: "Measured time/cost savings and KPI improvements" },
    { name: "EBITDA Impact", desc: "Potential financial impact if fully scaled" },
    { name: "CFO Confidence", desc: "Executive assessment of impact credibility (0-100%)" },
    { name: "Expected Value", desc: "Risk-adjusted impact (EBITDA × Confidence)" },
    { name: "CFO Sign-off", desc: "Date of executive approval" },
    { name: "Open Questions", desc: "What needs resolution to increase value" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="Triple-A Transformation Playbook - Open Source AI Transformation Methodology | GSD at Work"
        content="Accelerated AI Adoption framework for systematic business transformation. Free, open-source methodology to identify, develop, and scale AI opportunities with measurable ROI. Move from ad-hoc experiments to CFO-validated impact."
        canonicalUrl="https://gsdat.work/methodology/triple-a-framework"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="Triple-A Framework - Systematic AI Transformation Methodology"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-28 pb-20 ${gradients.backgroundSubtle}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-sm">Open Source</Badge>
              <Badge variant="outline" className="text-sm">
                <BookOpen className="w-3 h-3 mr-1" />
                Apache 2.0 License
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              The Triple-A Transformation Playbook
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Accelerated AI Adoption Methodology
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Move beyond ad-hoc AI experiments. Systematically identify, develop, and scale 
              AI opportunities that deliver <strong>10x improvements</strong> and measurable business impact.
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-emerald-900 mb-2">
                🎯 Proven Results:
              </p>
              <p className="text-emerald-800">
                "Reduced 40-hour processes to 4 hours. Transformed 5-week hiring cycles to 5 days. 
                Every opportunity validated with CFO sign-off for credible EBITDA impact."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.open("https://github.com/culstrup/get-stuff-done-ai/tree/main/methodology", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "#download"}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Core Philosophy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Focus on the Bottleneck
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Don't automate for automation's sake. Find the most significant constraint 
                    in a valuable workflow and target it with a 10x improvement mindset.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary" />
                    Quantify Everything
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Establish baselines for every process (time, cost, steps) and measure impact. 
                    This rigor enables CFO sign-off and proves value.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Teach People to Fish
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Build solutions together with stakeholders. The hands-on workshop approach 
                    builds their skills and confidence to apply methods independently.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    Scale Intelligently
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Follow the 0→1→10→10+ progression. Start with prototypes, create reusable 
                    templates, and only build custom software when ROI justifies it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Stages */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">The Opportunity Pipeline</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              A systematic approach to moving AI opportunities from discovery to scaled impact
            </p>
            
            <div className="space-y-6">
              {pipelineStages.map((stage, index) => (
                <Card key={index} className={`${shadows.cardEffect}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className={`p-2 rounded-lg ${gradients.primaryLight}`}>
                        {stage.icon}
                      </div>
                      {stage.stage}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {stage.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stage.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracker Template */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Pipeline Tracker Template</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Track every opportunity with our comprehensive spreadsheet template
            </p>
            
            <div className="overflow-x-auto">
              <Card className={shadows.cardEffect}>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Column</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {trackerColumns.map((column, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {column.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {column.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                onClick={() => window.open("/downloads/triple-a-tracker-template.csv", "_blank")}
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Tracker Template (CSV)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Sourcing */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Sourcing Opportunities: Building Your Pipeline
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary" />
                    Power User Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Weekly analysis of ChatGPT Enterprise telemetry to identify innovation hotspots:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-semibold">Top Users:</span>
                      <span className="text-gray-700">Already innovating - interview them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-semibold">Top Movers:</span>
                      <span className="text-gray-700">Usage spike = new breakthrough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-semibold">Drop-offs:</span>
                      <span className="text-gray-700">Blocked users need support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    AI Oracle Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Use AI to analyze company-wide data and surface hidden opportunities:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Analyze 7-day rolling communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Identify process bottlenecks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Surface cross-functional patterns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Weekly Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Create a culture where the Tiger Team is the go-to for process challenges:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">50-minute biweekly sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Mini-workshops and demos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Success story sharing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Executive Hunches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Engage leadership about strategic priorities and pain points:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Quarterly strategy sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Board-level priorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">Industry disruption threats</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Discovery Modes: Horizontal vs Vertical</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">🔄 Horizontal Discovery</h4>
                    <p className="text-gray-700">
                      Broad scanning across departments to identify common pain points and 
                      cross-functional opportunities. Best for initial assessments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">📍 Vertical Discovery</h4>
                    <p className="text-gray-700">
                      Deep dive into specific workflows within one department. Best when 
                      you've identified a high-value target area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Implementation Guide</h2>
            
            <div className="space-y-8">
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle>1. Form Your AI Tiger Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Assemble a cross-functional team of 3-5 people who combine technical AI knowledge 
                    with deep business understanding. Each member should be able to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Conduct effective discovery interviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Facilitate hands-on AI workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Build prototypes using AI tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Calculate and communicate ROI</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle>2. Source Opportunities Systematically</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Don't wait for opportunities to come to you. Actively source them through:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Executive Interviews:</strong> Start with strategic priorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Usage Analytics:</strong> Find power users and usage spikes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Office Hours:</strong> Create regular touchpoints for ideas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Data Analysis:</strong> Use AI to identify patterns in business data</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle>3. Master the Discovery Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Discovery is active investigation, not passive interviewing. Duration: 30-90 minutes.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-blue-900 mb-2">Discovery Call Flow:</p>
                    <ol className="space-y-2 text-blue-800">
                      <li><strong>1. Goals (10 min):</strong> "Where do you want your department to be in 3 months?"</li>
                      <li><strong>2. Bottlenecks (15 min):</strong> "What's the biggest thing slowing you down?"</li>
                      <li><strong>3. Process Mapping (30 min):</strong> "Walk me through every step..." (Get them in storytelling mode)</li>
                      <li><strong>4. Quantification (10 min):</strong> "How long from start to finish? Cost in person-hours?"</li>
                      <li><strong>5. 10x Test (10 min):</strong> "If this 5-day process took 5 hours, how would that change your work?"</li>
                      <li><strong>6. Workshop Negotiation (15 min):</strong> "Let's focus on [specific slice] in our 2-hour workshop"</li>
                    </ol>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="font-semibold text-emerald-900 mb-2">Key Outputs:</p>
                    <ul className="space-y-1 text-emerald-800">
                      <li>✓ End-to-end process flowchart</li>
                      <li>✓ Baseline metrics (time, cost, quality)</li>
                      <li>✓ Identified bottleneck with 10x potential</li>
                      <li>✓ Negotiated workshop objective</li>
                      <li>✓ List of required inputs/data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle>4. Workshop Excellence: From 0→1 in 2 Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-amber-900 mb-2">⚡ Pre-Workshop Preparation (Critical!):</p>
                    <ul className="space-y-2 text-amber-800">
                      <li><strong>T-48 hours:</strong> Send detailed recap email with objectives, required inputs</li>
                      <li><strong>T-24 hours:</strong> Verify tool access (ChatGPT, WhisperFlow, etc.)</li>
                      <li><strong>T-4 hours:</strong> Pre-build solution to de-risk live session</li>
                      <li><strong>T-1 hour:</strong> Test all technology, prepare fallback options</li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Workshop Structure:</h5>
                      <ul className="space-y-1 text-sm">
                        <li><strong>0-10 min:</strong> Setup & objectives</li>
                        <li><strong>10-90 min:</strong> Build solution together</li>
                        <li><strong>90-105 min:</strong> Test with real data</li>
                        <li><strong>105-120 min:</strong> Debrief & next steps</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Success Factors:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• They drive, you guide</li>
                        <li>• Use dictation for speed</li>
                        <li>• Explain the "why"</li>
                        <li>• Celebrate small wins</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-2">📊 Feedback Protocol:</p>
                    <p className="text-blue-800 mb-2">"On a scale of 0-5, how valuable was this session?"</p>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>If they say 4: "Why not a 3?" (captures positives)</li>
                      <li>Then: "What would make this a 5?" (captures improvements)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Essential Tools & Technologies</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-lg">🤖 AI Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>ChatGPT Enterprise</strong> - Primary tool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Claude Projects</strong> - Complex workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Gemini</strong> - Data analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-lg">🎤 Productivity Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>WhisperFlow</strong> - Voice dictation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>VEO3</strong> - Video analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Fireflies</strong> - Meeting transcription</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-lg">🛠️ Development Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Cursor</strong> - AI coding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>V0</strong> - Rapid prototyping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Custom GPTs</strong> - Process templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">💡 The Input → Operator → Output Model</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 mb-2">
                      <FileText className="w-8 h-8 mx-auto text-primary mb-2" />
                      <h4 className="font-semibold">Inputs</h4>
                    </div>
                    <p className="text-sm text-gray-700">Data sources, templates, examples, context</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 mb-2">
                      <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                      <h4 className="font-semibold">AI Operator</h4>
                    </div>
                    <p className="text-sm text-gray-700">Human + AI collaboration via voice/text</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 mb-2">
                      <Target className="w-8 h-8 mx-auto text-primary mb-2" />
                      <h4 className="font-semibold">Outputs</h4>
                    </div>
                    <p className="text-sm text-gray-700">10x improved work products</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Post-Workshop Excellence */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Post-Workshop: Ensuring Adoption</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle>📧 48-Hour Follow-up Protocol</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-2">Email Template:</p>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li>• Workshop recap with key achievements</li>
                      <li>• Link to recording and materials</li>
                      <li>• Quantified time/cost savings</li>
                      <li>• Next steps and commitments</li>
                      <li>• CC executive sponsors</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Use AI to process workshop transcript and generate comprehensive follow-up
                  </p>
                </CardContent>
              </Card>
              
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle>📈 Success Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">Week 1-2:</p>
                      <p className="text-gray-700">Stakeholder tests in production</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Week 2:</p>
                      <p className="text-gray-700">Check-in call or automated email</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Week 3-4:</p>
                      <p className="text-gray-700">Measure adoption & refine</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Month 2:</p>
                      <p className="text-gray-700">Scale to team (1→10 phase)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours / Power Hour */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Office Hours: Building a Community of Practice
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Transform individual wins into organizational momentum through structured knowledge sharing
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
                <CardHeader>
                  <CardTitle className="text-xl">The Power Hour Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Session Structure (50 min):</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">0-10 min:</span>
                          <span className="text-gray-700">News, updates, new tools, policy changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">10-40 min:</span>
                          <span className="text-gray-700">Show & tell (1-3 presenters)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-primary">40-50 min:</span>
                          <span className="text-gray-700">Open Q&A and discussion</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p><strong>Frequency:</strong> Biweekly by default (weekly if accelerating)</p>
                      <p><strong>Attendance:</strong> Optional but open to entire company</p>
                      <p><strong>Recording:</strong> Always recorded and shared</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-xl">Show & Tell Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Each presenter shares their transformation story:
                    </p>
                    <ol className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span className="text-gray-700"><strong>The Challenge:</strong> What process needed transformation?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span className="text-gray-700"><strong>The Outcome:</strong> What 10x improvement was achieved?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span className="text-gray-700"><strong>The Process:</strong> How did they do it?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">4.</span>
                        <span className="text-gray-700"><strong>The Learnings:</strong> Surprises, quirks, and tips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">5.</span>
                        <span className="text-gray-700"><strong>What's Next:</strong> Future plans and iterations</span>
                      </li>
                    </ol>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-4">
                      <p className="text-sm text-emerald-800">
                        <strong>Pro Tip:</strong> Launch with CEO or executive presenting their own transformation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className={shadows.cardEffect}>
              <CardHeader>
                <CardTitle>Office Hours Owner Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Pre-Session Tasks:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Secure 1-3 presenter commitments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Prepare news and updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Test recording setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Prep "micro magic show" demos</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Post-Session Tasks:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Generate AI summary of key insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Share recording and materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Post discussion question for async engagement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Update session tracker spreadsheet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Dedicated Channel:</strong> Slack/Teams with pinned resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Session Tracker:</strong> Spreadsheet tab in pipeline doc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Recording Library:</strong> All past sessions accessible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Resources:</strong> Company policies, guidelines, FAQs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="text-lg">Generating Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Silent Brainstorm:</strong> 1-min timer for Q&A generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Follow-up Pipeline:</strong> Questions → Action workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Async Discussion:</strong> Thread replies to recordings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700"><strong>Department Scaling:</strong> Decentralized sessions over time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly Voice Surveys */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Continuous Improvement: Voice-First Feedback
            </h2>
            
            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight}`}>
              <CardHeader>
                <CardTitle className="text-xl">Quarterly Voice Surveys</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Every quarter, use voice AI to gather rich, qualitative feedback from your entire organization:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Survey Process:</h5>
                    <ol className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span className="text-gray-700">Send email invitation with VAPI voice link</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span className="text-gray-700">AI conducts discovery-style interview</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span className="text-gray-700">Ask about recent AI usage experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">4.</span>
                        <span className="text-gray-700">Probe for strong emotions (positive/negative)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">5.</span>
                        <span className="text-gray-700">Aggregate and analyze patterns</span>
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Key Benefits:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Higher response rates than text surveys</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Richer, storytelling-style responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Uncover hidden opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-gray-700">Anonymous option available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-900">
                    <strong>Tools:</strong> Use <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer" className="underline">VAPI</a> for voice surveys. 
                    Retrieve transcripts with <a href="https://github.com/culstrup/vapi-tools" target="_blank" rel="noopener noreferrer" className="underline">vapi-tools</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${shadows.cardEffect} mt-8`}>
              <CardHeader>
                <CardTitle className="text-xl">The Feedback Protocol</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    End every Office Hour session with quantified feedback to drive continuous improvement:
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="font-semibold text-amber-900 mb-3">
                      "From 0 to 5, where 0 is 'complete waste of time' and 5 is 'far exceeded expectations', how valuable was this session?"
                    </p>
                    
                    <div className="space-y-2 text-amber-800">
                      <p><strong>Analyzing Anomalies:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• If someone rates 5 when average is 3: "Why not a 4?" (uncover what worked)</li>
                        <li>• If someone rates 2 when average is 4: "Why not a 1?" (find the baseline value)</li>
                        <li>• Then ask: "What would have made this a [target score]?" (get improvement ideas)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    This counterfactual questioning reveals the causal models people use to evaluate sessions, 
                    providing actionable insights for improvement.
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
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Real-World Transformations</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <Badge className="bg-blue-100 text-blue-800 mb-2">Recruiting</Badge>
                  <CardTitle className="text-xl">5 Weeks → 5 Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Transformed end-to-end hiring process from job req to offer letter.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Bottleneck:</strong> Manual candidate screening</p>
                    <p className="text-sm"><strong>Solution:</strong> AI-powered applicant analysis</p>
                    <p className="text-sm"><strong>Result:</strong> 80% time reduction, better candidates</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <Badge className="bg-emerald-100 text-emerald-800 mb-2">Legal</Badge>
                  <CardTitle className="text-xl">40 Hours → 4 Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Contract review and redlining process dramatically accelerated.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Bottleneck:</strong> Manual contract analysis</p>
                    <p className="text-sm"><strong>Solution:</strong> AI reasoning models + templates</p>
                    <p className="text-sm"><strong>Result:</strong> 90% faster, more consistent</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <Badge className="bg-purple-100 text-purple-800 mb-2">Finance</Badge>
                  <CardTitle className="text-xl">2 Days → 2 Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Monthly financial reporting process streamlined with AI.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Bottleneck:</strong> Data aggregation & analysis</p>
                    <p className="text-sm"><strong>Solution:</strong> Automated data pipeline + AI insights</p>
                    <p className="text-sm"><strong>Result:</strong> Real-time reporting capability</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Framework */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Measuring Success: From Activity to EBITDA</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary" />
                    Leading Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Workshop Satisfaction Score</span>
                      <span className="font-semibold">Target: 4.5+/5</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Weekly Active AI Users</span>
                      <span className="font-semibold">Target: 50%+</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Pipeline Velocity</span>
                      <span className="font-semibold">Target: 2 weeks</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Adoption Rate (30 days)</span>
                      <span className="font-semibold">Target: 80%+</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className={shadows.cardEffect}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Lagging Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Process Time Reduction</span>
                      <span className="font-semibold">Target: 10x</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Cost Savings per Process</span>
                      <span className="font-semibold">Track $$</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">Quality Improvements</span>
                      <span className="font-semibold">Error -50%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-700">EBITDA Impact</span>
                      <span className="font-semibold">CFO Validated</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className={`${shadows.cardEffect} ${gradients.secondaryLight}`}>
              <CardHeader>
                <CardTitle className="text-xl">The Financial Validation Loop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">1</div>
                    <h4 className="font-semibold mb-1">Quantify Impact</h4>
                    <p className="text-sm text-gray-600">Time saved × Loaded cost</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">2</div>
                    <h4 className="font-semibold mb-1">Calculate Potential</h4>
                    <p className="text-sm text-gray-600">Best-case EBITDA impact</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <h4 className="font-semibold mb-1">Get CFO Confidence</h4>
                    <p className="text-sm text-gray-600">0-100% assessment</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <h4 className="font-semibold mb-1">Lock in Expected Value</h4>
                    <p className="text-sm text-gray-600">Potential × Confidence</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-center text-gray-700">
                    <strong>Example:</strong> $500K potential impact × 75% confidence = <span className="text-primary font-bold">$375K expected EBITDA impact</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates & Resources */}
      <section className={`${spacing.section.md}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Templates & Resources</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
                onClick={() => window.open("/downloads/triple-a-tracker-template.csv", "_blank")}>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Pipeline Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Complete spreadsheet template with all 13 columns for tracking opportunities</p>
                  <Badge className="mt-2">Download CSV</Badge>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Discovery Scripts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Question flows and conversation guides for effective discovery calls</p>
                  <Badge variant="secondary" className="mt-2">Included Above</Badge>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Workshop Prep Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Ensure workshop success with comprehensive preparation steps</p>
                  <Badge variant="secondary" className="mt-2">Included Above</Badge>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Email Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Follow-up emails, stakeholder updates, and executive communications</p>
                  <Badge variant="outline" className="mt-2">Coming Soon</Badge>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">SOP Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">AI prompts to convert workshop transcripts into clear SOPs</p>
                  <Badge variant="outline" className="mt-2">Coming Soon</Badge>
                </CardContent>
              </Card>
              
              <Card className={`${shadows.cardEffect} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">ROI Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Interactive tool to calculate and present financial impact</p>
                  <Badge variant="outline" className="mt-2">Coming Soon</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} ${gradients.primaryLight}`}>
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Start Your AI Transformation Journey
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Everything you need to run your own Triple-A transformation program. 
                  Download our templates and start building your pipeline today.
                </p>
                
                <div className="space-y-4 max-w-2xl mx-auto mb-8">
                  <p className="text-lg text-gray-700">
                    You now have access to the complete Triple-A methodology on this page. 
                    Start with our tracker template to begin building your opportunity pipeline.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                    onClick={() => window.open("/downloads/triple-a-tracker-template.csv", "_blank")}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Pipeline Tracker
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`${buttonStyles.outline.secondary} ${shadows.buttonEffect}`}
                    onClick={() => window.location.href = "/associate-program"}
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Become an Associate
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Licensed under Apache 2.0 with GSD at Work LLC copyright. 
                    Free to use with attribution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacing.section.md} bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Need Expert Implementation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              While our methodology is open source, sometimes you need experienced 
              practitioners to accelerate your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.location.href = "/programs/step-5"}
              >
                Learn About Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary} ${shadows.buttonEffect}`}
                onClick={() => window.open("https://calendly.com/gsdatwork/strategy", "_blank")}
              >
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TripleAFramework;