import { Timer, Shield, Battery, FileSpreadsheet, CheckSquare, AlertTriangle, Coffee, Gauge, TrendingDown, Award, XCircle, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { shadows, gradients } from "@/lib/design-tokens";

// The Exit Ramp - Trust Building Mechanism
export const ExitRampSection = () => (
  <Card className={`${shadows.cardEffect} border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-green-100">
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-green-900">The Exit Ramp: Building Absolute Trust</CardTitle>
          <p className="text-green-700 mt-1">The most powerful 30 seconds of any workshop</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-white/80 p-6 rounded-lg border border-green-200">
        <p className="text-lg font-semibold text-green-900 mb-3">The Upfront Contract Script:</p>
        <blockquote className="italic text-green-800 border-l-4 border-green-400 pl-4">
          "Given that this is our objective [restate goal], and we're all investing significant time and energy here, 
          I want to be clear: If at any point you feel we're not making outsized progress toward this goal, 
          just say the word. We can stop, no hard feelings, and you'll receive a [full/pro-rated] refund. 
          Given all that, would you like to proceed?"
        </blockquote>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white/60 rounded-lg">
          <div className="text-2xl font-bold text-green-600">Control</div>
          <p className="text-sm text-gray-600">They hold the reins</p>
        </div>
        <div className="text-center p-4 bg-white/60 rounded-lg">
          <div className="text-2xl font-bold text-green-600">Trust</div>
          <p className="text-sm text-gray-600">You mean what you say</p>
        </div>
        <div className="text-center p-4 bg-white/60 rounded-lg">
          <div className="text-2xl font-bold text-green-600">Commitment</div>
          <p className="text-sm text-gray-600">Mutual investment</p>
        </div>
      </div>
      <p className="text-green-800 font-medium">
        💡 This changes everything. People relax, open up, and become willing to try new things. 
        The trust you build in these 30 seconds determines the entire workshop's success.
      </p>
    </CardContent>
  </Card>
);

// Energy-Draining Tasks Identifier
export const EnergyDrainingSection = () => (
  <Card className={`${shadows.cardEffect} border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-amber-100">
          <Battery className="w-6 h-6 text-amber-600" />
        </div>
        <CardTitle className="text-2xl">Identifying Energy-Draining Tasks</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-700">
        The secret to change management: Find what people <strong>hate doing</strong>. 
        These become your leverage points for transformation.
      </p>
      
      <div className="bg-white/80 p-4 rounded-lg">
        <p className="font-semibold mb-3">The Discovery Question:</p>
        <blockquote className="italic text-amber-800 border-l-4 border-amber-400 pl-4">
          "Look back at your calendar for the last 2 weeks. What tasks made you think 'Ugh, I really don't want to do this'? 
          What felt like it was draining your energy?"
        </blockquote>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-amber-900">Common Energy Drainers:</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <TrendingDown className="w-4 h-4 text-amber-600 mt-0.5" />
              <span>Manual data entry and reconciliation</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingDown className="w-4 h-4 text-amber-600 mt-0.5" />
              <span>Repetitive email responses</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingDown className="w-4 h-4 text-amber-600 mt-0.5" />
              <span>Document formatting and reformatting</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingDown className="w-4 h-4 text-amber-600 mt-0.5" />
              <span>Status update compilation</span>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-amber-900">Why This Matters:</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Creates intrinsic motivation for change</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Reduces resistance to new methods</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Guarantees emotional buy-in</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Identifies quick wins</span>
            </li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Excel Copy-Paste Technical Tip
export const ExcelTipSection = () => (
  <Card className={`${shadows.cardEffect} border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-red-100 animate-pulse">
          <FileSpreadsheet className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <CardTitle className="text-xl text-red-900">Critical Technical Secret: The Excel Problem</CardTitle>
          <Badge variant="destructive">Most Common Failure Point</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="bg-white/90 p-4 rounded-lg border-l-4 border-red-400">
          <p className="font-semibold text-red-900 mb-2">⚠️ The Problem:</p>
          <p className="text-gray-700">
            Uploading Excel files to AI systems triggers data analysis mode, 
            <strong> completely ignoring the qualitative text data</strong> that contains the actual value.
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="font-semibold text-green-900 mb-2">✅ The Solution:</p>
          <ol className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold">1.</span>
              <span>Select ALL data in the spreadsheet (Cmd/Ctrl + A)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">2.</span>
              <span>Copy to clipboard (Cmd/Ctrl + C)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">3.</span>
              <span>Paste as PLAIN TEXT into the AI chat</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">4.</span>
              <span>Repeat for EACH TAB in the spreadsheet</span>
            </li>
          </ol>
        </div>
        
        <p className="text-sm text-gray-600 italic">
          "This hasn't been fixed yet. I'm sure it will be at some point, but it's just this crazy thing 
          that's always been true and continues to be true." - From the field
        </p>
      </div>
    </CardContent>
  </Card>
);

// Workflow Qualification Checklist
export const WorkflowQualificationChecklist = () => {
  const criteria = [
    { label: "Takes 2 days to 2 weeks currently", required: true },
    { label: "Heavy in Research, Retrieval, Reading, Writing, or Reasoning", required: true },
    { label: "Contains energy-draining subtasks", required: true },
    { label: "Core to business value chain", required: true },
    { label: "Happens frequently (weekly/monthly)", required: true },
    { label: "Clear inputs and outputs", required: true },
    { label: "Expert available who knows 'good' from 'bad'", required: true },
    { label: "Economic incentives aligned (not billing hourly)", required: false },
    { label: "Outcome-focused stakeholders (not procedural)", required: false },
    { label: "Within team's control to change", required: false }
  ];

  return (
    <Card className={`${shadows.cardEffect} border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-indigo-100">
            <CheckSquare className="w-6 h-6 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl">Workflow Qualification Checklist</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-6">
          Use this checklist to evaluate if a workflow is ready for 10x transformation:
        </p>
        
        <div className="space-y-3">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
              <div className={`mt-0.5 ${item.required ? 'text-indigo-600' : 'text-gray-400'}`}>
                {item.required ? (
                  <CheckSquare className="w-5 h-5" />
                ) : (
                  <AlertTriangle className="w-5 h-5" />
                )}
              </div>
              <div className="flex-grow">
                <span className="text-gray-800">{item.label}</span>
                {item.required && (
                  <Badge variant="secondary" className="ml-2 text-xs">Required</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-indigo-100/50 rounded-lg">
          <p className="text-sm text-indigo-900">
            <strong>Scoring:</strong> All required items must be checked. 
            Optional items increase success probability but aren't blockers.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// Visual Timeline Component
export const WorkshopTimeline = () => {
  const timeline = [
    { time: "T-2 weeks", phase: "Discovery", duration: "30-60 min", color: "bg-blue-500" },
    { time: "T-1 week", phase: "Prep Email", duration: "15 min", color: "bg-purple-500" },
    { time: "T-15 min", phase: "Final Prep", duration: "15 min", color: "bg-indigo-500" },
    { time: "T-0", phase: "Live Workshop", duration: "90-120 min", color: "bg-green-500" },
    { time: "T+15 min", phase: "Follow-up", duration: "15 min", color: "bg-amber-500" },
    { time: "T+1 week", phase: "Check-in", duration: "Automated", color: "bg-red-500" }
  ];

  return (
    <Card className={`${shadows.cardEffect}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Timer className="w-6 h-6 text-primary" />
          <CardTitle>Workshop Timeline</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative pl-2">
          {/* Vertical line positioned to align with circle centers */}
          <div className="absolute left-10 top-8 bottom-8 w-0.5 bg-gray-300"></div>
          
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-6 mb-8 last:mb-0 relative">
              {/* Timeline circle - fixed width to prevent text overlap */}
              <div className={`flex-shrink-0 w-20 h-20 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg`}>
                <div className="text-center">
                  <div className="leading-tight">{item.time.split(' ')[0]}</div>
                  <div className="text-xs">{item.time.split(' ')[1]}</div>
                </div>
              </div>
              
              {/* Content card with proper spacing */}
              <div className="flex-grow ml-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
                <div className="font-semibold text-gray-900">{item.phase}</div>
                <div className="text-sm text-gray-600 mt-1">{item.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Detailed PI Lawyer Case Study
export const PILawyerCaseStudy = () => (
  <Card className={`${shadows.cardEffect} border-2 border-purple-200`}>
    <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
      <CardTitle className="text-2xl flex items-center gap-2">
        <Shield className="w-6 h-6 text-purple-600" />
        Deep Dive: Personal Injury Lawyer Transformation
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-6 space-y-6">
      <div>
        <h4 className="font-semibold text-lg mb-3">The Challenge</h4>
        <p className="text-gray-700 mb-2">
          A PI lawyer spending 2-3 days per demand letter, involving:
        </p>
        <ul className="space-y-1 ml-4 text-gray-600">
          <li>• Reading 200+ pages of medical records</li>
          <li>• Analyzing police reports and witness statements</li>
          <li>• Researching comparable case settlements</li>
          <li>• Calculating economic damages</li>
          <li>• Drafting persuasive narrative</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-3">The Workshop Process</h4>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Badge className="bg-purple-100 text-purple-800">Prep</Badge>
            <span className="text-gray-700">Gathered all case documents into organized folders</span>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-purple-100 text-purple-800">Setup</Badge>
            <span className="text-gray-700">Installed WisprFlow, opened Claude 4 with 200k context</span>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-purple-100 text-purple-800">Iteration 1</Badge>
            <span className="text-gray-700">First draft: structure right, tone too aggressive</span>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-purple-100 text-purple-800">Iteration 2</Badge>
            <span className="text-gray-700">Applied feedback via dictation, tone perfect</span>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-purple-100 text-purple-800">Iteration 3</Badge>
            <span className="text-gray-700">Added specific medical timeline, ready to send</span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-lg mb-3 text-green-900">The Results</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">2 hours</div>
            <div className="text-sm text-gray-600">Total time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">15x</div>
            <div className="text-sm text-gray-600">Speed improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">$45k</div>
            <div className="text-sm text-gray-600">Settlement increase</div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">The "Magic Moment"</h4>
        <blockquote className="italic text-purple-800">
          "When I saw it incorporate my feedback about the client's specific suffering - 
          using the exact medical terminology I mentioned but weaving it into a compelling narrative - 
          I literally stood up from my chair. This changes everything about how I practice law."
        </blockquote>
      </div>
    </CardContent>
  </Card>
);

// Procedural vs Outcome-Focused People Warning
export const PeopleTypeWarning = () => (
  <Card className={`${shadows.cardEffect} border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-6 h-6 text-orange-600 animate-pulse" />
        <CardTitle className="text-xl text-orange-900">Warning: Choose Your Champions Wisely</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Avoid: Procedural People
          </h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Focus on "doing it the right way"</li>
            <li>• Resistant to process changes</li>
            <li>• Value adherence over outcomes</li>
            <li>• See AI as threat to expertise</li>
            <li>• Will sabotage transformation</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Seek: Outcome-Focused People
          </h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Care about results over process</li>
            <li>• Willing to experiment</li>
            <li>• Value efficiency and impact</li>
            <li>• See AI as force multiplier</li>
            <li>• Become transformation champions</li>
          </ul>
        </div>
      </div>
      <p className="text-orange-800 font-medium bg-orange-100/50 p-3 rounded-lg">
        💡 Pro tip: In discovery, ask "What matters more - following the established process or achieving the outcome?" 
        Their answer tells you everything.
      </p>
    </CardContent>
  </Card>
);
// Visual Magic Moment Component
export const MagicMomentVisualization = () => (
  <Card className={`${shadows.cardEffect} border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50`}>
    <CardHeader className="text-center">
      <div className="mx-auto mb-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse-soft mx-auto" />
          <Sparkles className="w-12 h-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        The Magic Moment
      </CardTitle>
      <p className="text-gray-600 mt-2">When paradigms shift forever</p>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          The breakthrough occurs during the <strong>second or third iteration</strong> when participants see AI 
          incorporate their nuanced, spoken feedback with shocking accuracy.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white/60 rounded-lg border border-purple-100">
          <div className="text-4xl mb-2">🗣️</div>
          <div className="font-semibold text-purple-900">They Speak</div>
          <p className="text-sm text-gray-600 mt-1">Natural, unfiltered feedback via dictation</p>
        </div>
        <div className="text-center p-4 bg-white/60 rounded-lg border border-indigo-100">
          <div className="text-4xl mb-2">🤖</div>
          <div className="font-semibold text-indigo-900">AI Learns</div>
          <p className="text-sm text-gray-600 mt-1">Captures nuance and context perfectly</p>
        </div>
        <div className="text-center p-4 bg-white/60 rounded-lg border border-blue-100">
          <div className="text-4xl mb-2">✨</div>
          <div className="font-semibold text-blue-900">Mind Blown</div>
          <p className="text-sm text-gray-600 mt-1">Output exceeds all expectations</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
        <p className="text-center text-purple-900 font-medium">
          "This is when they truly understand - AI isn't just a tool, it's a collaborative partner 
          that amplifies their expertise. Their internal model of what's possible shifts permanently."
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-4">
            <h4 className="font-semibold text-purple-900 mb-2">Before the Moment</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Skeptical about AI capabilities</li>
              <li>• Protective of expertise</li>
              <li>• Focused on what could go wrong</li>
              <li>• Thinking in old paradigms</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4">
            <h4 className="font-semibold text-blue-900 mb-2">After the Moment</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Excited about possibilities</li>
              <li>• Seeing AI as amplifier</li>
              <li>• Imagining new workflows</li>
              <li>• Ready for transformation</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
);

// Enhanced Formal Causes Section
export const FormalCausesEnhanced = () => (
  <Card className={`${shadows.cardEffect} border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-amber-100">
          <Shield className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-amber-900">The Formal Causes: Beyond Technology</CardTitle>
          <Badge variant="secondary" className="mt-1">Critical Success Factor</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-6">
      <p className="text-lg text-amber-800 font-medium">
        Technology is only half the equation. The business model, incentive structures, and organizational 
        architecture determine success as much as the AI itself.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold text-amber-900 text-lg">🚨 Red Flags (Input-Based Models)</h4>
          <div className="space-y-3">
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-red-900">Law Firms (Billable Hours)</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Partners resist efficiency when revenue = hours × rate. 
                  The firm's economic model punishes speed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-red-900">Consulting (Time & Materials)</h5>
                <p className="text-sm text-gray-700 mt-1">
                  More junior hours = more revenue. AI threatens the pyramid model 
                  where partners sell leverage.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-red-900">Agencies (Retainer Models)</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Fixed monthly fees for X hours of work. Efficiency means doing 
                  more work for same pay.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-green-900 text-lg">✅ Green Lights (Outcome-Based Models)</h4>
          <div className="space-y-3">
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-green-900">Contingency Lawyers</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Paid on results (% of settlement). Every efficiency gain 
                  directly increases profit margins.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-green-900">Value-Based Consultants</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Fixed price for deliverables. Faster delivery = higher margins 
                  and capacity for more clients.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-green-900">Product Companies</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Revenue from sales, not hours. AI acceleration means faster 
                  time-to-market and competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-100/50 p-6 rounded-lg border border-amber-200">
        <h4 className="font-semibold text-amber-900 mb-3">The Discovery Questions</h4>
        <ol className="space-y-2 text-amber-800">
          <li className="flex gap-2">
            <span className="font-bold">1.</span>
            <span>"How does your company make money from this workflow?"</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold">2.</span>
            <span>"If this took 10x less time, who wins and who loses?"</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold">3.</span>
            <span>"Are you selling your time or your outcomes?"</span>
          </li>
        </ol>
      </div>
      
      <p className="text-amber-800 font-medium italic">
        💡 Remember: This isn't about good or bad people. It's about structural incentives. 
        Even the most innovative person can't overcome a business model that punishes efficiency.
      </p>
    </CardContent>
  </Card>
);
