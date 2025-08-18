import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { shadows, gradients, buttonStyles } from "@/lib/design-tokens";
import { Search, AlertTriangle, TrendingUp, Shield, Database, Mic, FileText, Users, Brain, CheckCircle, ChevronRight, Clock, Zap, Play, Pause, AlertCircle, ArrowRight, Sparkles, Target } from "lucide-react";

// Interactive Data Source Explorer
export const DataSourceExplorer = ({ dataCategories }: { dataCategories: any[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("private-external");
  
  const getValueStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };
  
  return (
    <Card className={`${shadows.cardEffect} border-2 border-emerald-200`}>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Database className="w-5 h-5 text-emerald-600" />
          Data Source Value Hierarchy
        </CardTitle>
        <CardDescription>
          Organized by value for Oracle insights - start with highest value sources
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Value hierarchy overview */}
        <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Key Insight:</strong> Private data from customer interactions yields the highest-value insights.
            Each category builds on the others, but prioritize your time accordingly.
          </p>
        </div>
        
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full gap-1">
            {dataCategories.map((cat) => (
              <TabsTrigger key={cat.category} value={cat.category} className="text-xs p-2">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{cat.title.split(':')[0]}</span>
                  <div className="flex text-xs">{getValueStars(cat.valueRating)}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {dataCategories.map((cat) => (
            <TabsContent key={cat.category} value={cat.category} className="mt-6">
              <Card className={`border-${cat.colorScheme}-200 bg-gradient-to-br from-${cat.colorScheme}-50 to-white`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className={`text-lg text-${cat.colorScheme}-900`}>
                        {cat.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {cat.subtitle}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">Value:</span>
                      <div className="flex">{getValueStars(cat.valueRating)}</div>
                    </div>
                  </div>
                  <p className={`text-sm text-${cat.colorScheme}-700 mt-2`}>
                    {cat.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Data Sources:</h4>
                      <div className="grid gap-2">
                        {cat.sources.map((source: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/80 rounded-lg hover:bg-white transition-colors">
                            <CheckCircle className={`w-4 h-4 text-${cat.colorScheme}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700 text-sm">{source}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-4 bg-${cat.colorScheme}-100/50 rounded-lg border border-${cat.colorScheme}-200`}>
                      <h4 className={`font-semibold text-${cat.colorScheme}-900 mb-2`}>Why This Matters:</h4>
                      <p className={`text-sm text-${cat.colorScheme}-800`}>
                        {cat.whyValuable}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Convexity Visualizer
export const ConvexityVisualizer = () => {
  const [hoveredSide, setHoveredSide] = useState<'risk' | 'opportunity' | null>(null);
  
  return (
    <Card className={`${shadows.cardEffect} border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50`}>
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Understanding Convexity in Oracle Insights
        </CardTitle>
        <CardDescription className="text-center">
          Why we focus on asymmetric risk/reward profiles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Risk Side */}
          <div 
            className={`relative p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
              hoveredSide === 'risk' 
                ? 'border-red-400 bg-red-50 shadow-xl scale-105' 
                : 'border-red-200 bg-white hover:border-red-300'
            }`}
            onMouseEnter={() => setHoveredSide('risk')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="text-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-red-900">Overlooked Risks</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📉</span>
                <div>
                  <p className="font-medium text-gray-900">Small Probability</p>
                  <p className="text-sm text-gray-600">Often &lt;5% chance</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💥</span>
                <div>
                  <p className="font-medium text-gray-900">Massive Impact</p>
                  <p className="text-sm text-gray-600">Could destroy value</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="font-medium text-gray-900">Cheap to Mitigate</p>
                  <p className="text-sm text-gray-600">Small investment prevents disaster</p>
                </div>
              </div>
            </div>
            
            {hoveredSide === 'risk' && (
              <div className="mt-4 p-3 bg-red-100 rounded-lg animate-fade-in">
                <p className="text-sm text-red-800 font-medium">
                  Example: Customer sentiment shift detected 3 months before mass churn event
                </p>
              </div>
            )}
          </div>
          
          {/* Opportunity Side */}
          <div 
            className={`relative p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
              hoveredSide === 'opportunity' 
                ? 'border-green-400 bg-green-50 shadow-xl scale-105' 
                : 'border-green-200 bg-white hover:border-green-300'
            }`}
            onMouseEnter={() => setHoveredSide('opportunity')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="text-center mb-4">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-green-900">Hidden Opportunities</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-medium text-gray-900">High Probability</p>
                  <p className="text-sm text-gray-600">Often &gt;50% success rate</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-medium text-gray-900">Exponential Upside</p>
                  <p className="text-sm text-gray-600">10-100x returns possible</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-medium text-gray-900">First-Mover Advantage</p>
                  <p className="text-sm text-gray-600">Competition hasn't seen it yet</p>
                </div>
              </div>
            </div>
            
            {hoveredSide === 'opportunity' && (
              <div className="mt-4 p-3 bg-green-100 rounded-lg animate-fade-in">
                <p className="text-sm text-green-800 font-medium">
                  Example: Support tickets reveal unmet need for feature that becomes #1 revenue driver
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-purple-100/50 rounded-lg text-center">
          <p className="text-purple-900 font-medium">
            The Oracle focuses on insights with asymmetric payoffs - where the potential gain 
            far outweighs the cost of action
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// Interactive Session Timeline
export const SessionTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      title: "Data Preparation",
      duration: "1-2 weeks",
      activities: ["Inventory data sources", "Capture executive context", "Process & refine"],
      color: "indigo"
    },
    {
      title: "Async Analysis",
      duration: "2-3 days",
      activities: ["Multi-agent reasoning", "Generate report", "Share for pre-read"],
      color: "purple"
    },
    {
      title: "Live Session",
      duration: "60-90 min",
      activities: ["Review findings", "Interactive Q&A", "Commit to actions"],
      color: "green"
    },
    {
      title: "Follow-Up",
      duration: "Ongoing",
      activities: ["Send recap", "Track actions", "Schedule automation"],
      color: "amber"
    }
  ];
  
  return (
    <Card className={`${shadows.cardEffect} border-2 border-indigo-200`}>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          Oracle Session Timeline
        </CardTitle>
        <CardDescription>
          Click each phase to explore the activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Timeline Bar */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="relative flex justify-between">
              {phases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    activePhase === idx
                      ? `bg-${phase.color}-500 text-white scale-125 shadow-lg`
                      : 'bg-white border-2 border-gray-300 hover:scale-110'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Phase Details */}
          <div className="mt-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  activePhase === idx ? 'opacity-100' : 'hidden'
                }`}
              >
                <Card className={`border-${phase.color}-200 bg-gradient-to-br from-${phase.color}-50 to-white`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className={`text-${phase.color}-900`}>
                        Phase {idx + 1}: {phase.title}
                      </CardTitle>
                      <Badge className={`bg-${phase.color}-100 text-${phase.color}-800`}>
                        {phase.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start gap-2">
                          <ChevronRight className={`w-5 h-5 text-${phase.color}-500 mt-0.5`} />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Question Bank Component
export const QuestionBank = ({ questions }: { questions: any[] }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Card className={`${shadows.cardEffect} border-purple-200`}>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          Oracle Question Bank
        </CardTitle>
        <CardDescription>
          Click to copy powerful questions for your Oracle sessions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <p className="font-semibold text-purple-900 mb-2">{q.purpose}:</p>
                  <p className="text-gray-700 italic">"{q.question}"</p>
                  {q.warning && (
                    <Alert className="mt-2 border-amber-200 bg-amber-50">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-700 text-sm">
                        {q.warning}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(q.question, idx)}
                  className="flex-shrink-0"
                >
                  {copiedIndex === idx ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="ml-1">Copied!</span>
                    </>
                  ) : (
                    <>Copy</>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// ROI Calculator Component
export const OracleROICalculator = () => {
  const [dataVolume, setDataVolume] = useState(1000);
  const [teamSize, setTeamSize] = useState(50);
  const [avgDecisionValue, setAvgDecisionValue] = useState(100000);
  
  const calculateROI = () => {
    const insightValue = dataVolume * 0.05 * avgDecisionValue * 0.01; // 5% of data yields insights worth 1% of decision value
    const riskMitigation = avgDecisionValue * 0.2; // Preventing 20% potential loss
    const opportunityCaptured = avgDecisionValue * 0.3 * 0.5; // 30% upside with 50% capture rate
    const totalValue = insightValue + riskMitigation + opportunityCaptured;
    const sessionCost = 5000; // Estimated session cost
    const roi = ((totalValue - sessionCost) / sessionCost) * 100;
    
    return {
      insightValue,
      riskMitigation,
      opportunityCaptured,
      totalValue,
      roi
    };
  };
  
  const results = calculateROI();
  
  return (
    <Card className={`${shadows.cardEffect} border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50`}>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Target className="w-5 h-5 text-green-600" />
          Oracle Session ROI Calculator
        </CardTitle>
        <CardDescription>
          Estimate the potential value of Oracle insights for your organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Input Sliders */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Data Points (emails, tickets, calls)
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={dataVolume}
                onChange={(e) => setDataVolume(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>100</span>
                <span className="font-bold text-green-600">{dataVolume.toLocaleString()}</span>
                <span>10,000</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Size
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>10</span>
                <span className="font-bold text-green-600">{teamSize}</span>
                <span>500</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Strategic Decision Value ($)
              </label>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={avgDecisionValue}
                onChange={(e) => setAvgDecisionValue(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$10K</span>
                <span className="font-bold text-green-600">${(avgDecisionValue / 1000).toFixed(0)}K</span>
                <span>$1M</span>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Estimated Value Created</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hidden Insights Surfaced</span>
                <span className="font-semibold text-green-600">
                  ${results.insightValue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Risk Mitigation Value</span>
                <span className="font-semibold text-red-600">
                  ${results.riskMitigation.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Opportunity Capture</span>
                <span className="font-semibold text-blue-600">
                  ${results.opportunityCaptured.toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total Value</span>
                  <span className="font-bold text-2xl text-green-600">
                    ${results.totalValue.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 p-3 bg-green-100 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-800">
                    {results.roi.toFixed(0)}% ROI
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Typical first session return
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Success Story Carousel
export const SuccessStoryCarousel = () => {
  const [activeStory, setActiveStory] = useState(0);
  
  const stories = [
    {
      company: "B2B SaaS Startup",
      challenge: "Couldn't understand why enterprise deals were stalling",
      discovery: "Support tickets revealed security concerns never mentioned in sales calls",
      outcome: "Added SOC2 compliance messaging, closed 3 enterprise deals in 30 days",
      value: "$1.2M ARR added"
    },
    {
      company: "E-commerce Platform",
      challenge: "Unexplained 15% drop in repeat purchases",
      discovery: "Customer emails showed confusion about new checkout flow",
      outcome: "Reverted specific UX change, recovered 12% of lost customers",
      value: "$450K monthly revenue recovered"
    },
    {
      company: "Professional Services Firm",
      challenge: "High employee turnover despite good compensation",
      discovery: "Slack data revealed burnout from inefficient internal processes",
      outcome: "Automated report generation, saved 10 hrs/week per employee",
      value: "50% reduction in turnover"
    }
  ];
  
  return (
    <Card className={`${shadows.cardEffect} border-2 border-indigo-200`}>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          Real Oracle Success Stories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Story Display */}
          <div className="min-h-[250px]">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  activeStory === idx ? 'opacity-100' : 'hidden'
                }`}
              >
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">{story.company}</h4>
                    <p className="text-sm text-gray-700">
                      <strong>Challenge:</strong> {story.challenge}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-purple-900">Oracle Discovery:</strong> {story.discovery}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-green-900">Outcome:</strong> {story.outcome}
                    </p>
                    <div className="mt-2 inline-block">
                      <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                        {story.value}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStory(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStory === idx 
                    ? 'w-8 bg-indigo-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};