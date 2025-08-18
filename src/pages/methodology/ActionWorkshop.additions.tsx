import { AlertTriangle, MapPin, Mic2, Calendar, Users2, FileText, Zap, Activity, Database, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { shadows, gradients } from "@/lib/design-tokens";

// Facilitator Prep Work Section
export const FacilitatorPrepWork = () => (
  <Card className={`${shadows.cardEffect} border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-blue-100">
          <Activity className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-blue-900">Facilitator Prep: De-Risk Before You Demo</CardTitle>
          <p className="text-blue-700 mt-1">Do the homework to guarantee workshop success</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-white/80 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-3">Pre-Workshop Testing Protocol:</h4>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">1.</span>
            <div>
              <p className="font-medium">Request Sample Data</p>
              <p className="text-sm text-gray-600 mt-1">Get real (anonymized) examples of inputs and outputs from the workflow</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">2.</span>
            <div>
              <p className="font-medium">Test the Workflow Yourself</p>
              <p className="text-sm text-gray-600 mt-1">Run through the entire process before the workshop to identify friction points</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">3.</span>
            <div>
              <p className="font-medium">Experiment with Tools</p>
              <p className="text-sm text-gray-600 mt-1">Try new models (Veo for video, NotebookLM for research) if relevant</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">4.</span>
            <div>
              <p className="font-medium">Document Gotchas</p>
              <p className="text-sm text-gray-600 mt-1">Note any technical issues, model limitations, or workflow quirks</p>
            </div>
          </li>
        </ol>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h5 className="font-semibold text-blue-900 mb-2">Why This Matters</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Builds your confidence as facilitator</li>
            <li>• Identifies tool/model selection</li>
            <li>• Prevents embarrassing failures</li>
            <li>• Creates backup plans</li>
          </ul>
        </div>
        <div className="p-4 bg-indigo-50 rounded-lg">
          <h5 className="font-semibold text-indigo-900 mb-2">Time Investment</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• 30-60 min for familiar workflows</li>
            <li>• 2-3 hours for new industries</li>
            <li>• Always worth it for de-risking</li>
            <li>• Creates reusable templates</li>
          </ul>
        </div>
      </div>
      
      <p className="text-blue-800 font-medium bg-blue-100/50 p-3 rounded-lg">
        💡 Pro tip: By the time you get to the workshop, you should already know it's possible. 
        The workshop is about teaching them, not discovering if it works.
      </p>
    </CardContent>
  </Card>
);

// Visual Workflow Mapping Tools
export const WorkflowMappingTools = () => (
  <Card className={`${shadows.cardEffect} border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-indigo-100">
          <MapPin className="w-6 h-6 text-indigo-600" />
        </div>
        <CardTitle className="text-xl">Visual Workflow Mapping</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-700">
        Use collaborative whiteboards to map the current state in real-time during discovery.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white/60 rounded-lg">
          <h5 className="font-semibold text-indigo-900 mb-2">Recommended Tools</h5>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Figma FigJam</Badge>
              <span className="text-gray-600">Best for design-aware teams</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Miro</Badge>
              <span className="text-gray-600">Great templates library</span>
            </li>
          </ul>
        </div>
        <div className="p-4 bg-white/60 rounded-lg">
          <h5 className="font-semibold text-indigo-900 mb-2">What to Map</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• All inputs and data sources</li>
            <li>• Decision points and branches</li>
            <li>• Time estimates per step</li>
            <li>• Systems and tools used</li>
            <li>• Handoffs and dependencies</li>
          </ul>
        </div>
      </div>
      
      <p className="text-sm text-indigo-700 italic">
        "Experts have often never been asked to lay it all out before. For them, it's a somewhat 
        satisfying experience to formalize what they've been doing."
      </p>
    </CardContent>
  </Card>
);

// Live Transcript Strategy
export const LiveTranscriptStrategy = () => (
  <Card className={`${shadows.cardEffect} border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-green-100">
          <Mic2 className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-green-900">Live Transcript Magic</CardTitle>
          <Badge className="bg-green-100 text-green-800">Critical Success Factor</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-white/80 p-4 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-900 mb-3">The Live Feedback Loop:</h4>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">1</div>
            <div>
              <p className="font-medium">Record Everything with Fireflies.ai</p>
              <p className="text-sm text-gray-600">Enable live transcript view for real-time capture</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">2</div>
            <div>
              <p className="font-medium">Capture Expert Reactions</p>
              <p className="text-sm text-gray-600">"Read this silently, then dictate ALL thoughts - no punches pulled"</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
            <div>
              <p className="font-medium">Copy Transcript → Paste into AI</p>
              <p className="text-sm text-gray-600">Take the raw feedback and inject it directly into next iteration</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">4</div>
            <div>
              <p className="font-medium">Share via Google Doc</p>
              <p className="text-sm text-gray-600">Paste complex prompts into shared doc for easy copying</p>
            </div>
          </li>
        </ol>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h5 className="font-semibold text-green-900 mb-2">Why Live Transcripts Change Everything:</h5>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Captures tacit knowledge that would otherwise be lost</li>
          <li>• Creates permanent record for follow-up emails</li>
          <li>• Enables rapid iteration with full context</li>
          <li>• Executive sponsors can review async if not present</li>
        </ul>
      </div>
      
      <p className="text-green-800 font-medium">
        💡 Secret: The transcript becomes your co-pilot. You're literally piping human expertise 
        through AI in real-time.
      </p>
    </CardContent>
  </Card>
);

// Enhanced Follow-Up Protocol
export const FollowUpProtocol = () => (
  <Card className={`${shadows.cardEffect} border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-purple-100">
          <Calendar className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-purple-900">The Follow-Up Protocol</CardTitle>
          <p className="text-purple-700 mt-1">Closing the loop is non-negotiable</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-white/80 p-5 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-900 mb-3">Immediate Post-Workshop (Same Day):</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-2">
            <span>📧</span>
            <span>Send comprehensive recap email (AI-generated from transcript)</span>
          </li>
          <li className="flex gap-2">
            <span>📊</span>
            <span>Include quantified time savings and projected ROI</span>
          </li>
          <li className="flex gap-2">
            <span>👥</span>
            <span>CC executive sponsor for visibility</span>
          </li>
          <li className="flex gap-2">
            <span>✅</span>
            <span>List specific commitments made during workshop</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-900 mb-3">1-2 Week Check-In (Automated):</h4>
        <div className="space-y-3">
          <p className="text-gray-700">Schedule this during the workshop - get explicit permission!</p>
          <div className="bg-white/70 p-3 rounded border border-purple-100">
            <p className="text-sm font-mono text-purple-800">
              "Did you complete the 3 demand letters you committed to doing this week? 
              What worked? What didn't? Actual time saved?"
            </p>
          </div>
          <ul className="space-y-1 text-sm text-gray-700 mt-3">
            <li>• Track adoption rate (did they actually do it?)</li>
            <li>• Measure real vs projected time savings</li>
            <li>• Identify friction points for iteration</li>
            <li>• Surface opportunities for expansion</li>
          </ul>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4">
            <h5 className="font-semibold text-green-900 mb-2">If Successful:</h5>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Schedule show-and-tell session</li>
              <li>• Identify adjacent workflows</li>
              <li>• Plan team training</li>
              <li>• Consider automation (1→10→100)</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-amber-200 bg-amber-50/50">
          <CardContent className="p-4">
            <h5 className="font-semibold text-amber-900 mb-2">If Struggling:</h5>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Diagnose structural blockers</li>
              <li>• Offer mini follow-up session</li>
              <li>• Simplify the approach</li>
              <li>• Find different champion</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <p className="text-purple-800 font-medium bg-purple-100/50 p-3 rounded-lg">
        💡 The follow-up email is where you prove ROI. No follow-up = no evidence = no expansion.
      </p>
    </CardContent>
  </Card>
);

// Common Pitfalls and Warnings
export const CommonPitfalls = () => (
  <Card className={`${shadows.cardEffect} border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-red-100 animate-pulse">
          <AlertTriangle className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-red-900">Critical Warning: Avoid Premature Automation</CardTitle>
          <Badge variant="destructive">Most Common Failure Mode</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-white/90 p-4 rounded-lg border-l-4 border-red-400">
        <p className="font-semibold text-red-900 mb-2">The Fatal Mistake:</p>
        <p className="text-gray-700">
          Jumping straight to n8n, Zapier, or custom software before proving the workflow 
          transformation works with general-purpose tools.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <h5 className="font-semibold text-red-900 mb-3">❌ Wrong: The "Worst Impulses"</h5>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-800">Employer Impulse:</p>
              <p className="text-sm text-gray-700">"I want to automate these jobs away"</p>
            </div>
            <div>
              <p className="font-medium text-red-800">Worker Impulse:</p>
              <p className="text-sm text-gray-700">"I want this fully automated so I don't have to change"</p>
            </div>
            <div>
              <p className="font-medium text-red-800">Vendor Impulse:</p>
              <p className="text-sm text-gray-700">"Buy our workflow automation platform!"</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h5 className="font-semibold text-green-900 mb-3">✅ Right: The GSD Approach</h5>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-green-800">Phase 1 (0→1):</p>
              <p className="text-sm text-gray-700">Human + AI with general tools</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Phase 2 (1→10):</p>
              <p className="text-sm text-gray-700">Custom GPTs, templates, light automation</p>
            </div>
            <div>
              <p className="font-medium text-green-800">Phase 3 (10→100):</p>
              <p className="text-sm text-gray-700">Only NOW consider full automation</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
        <h5 className="font-semibold text-amber-900 mb-2">Other Common Pitfalls:</h5>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Working with procedural people:</strong> They care more about "the right way" than outcomes</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Skipping the exit ramp:</strong> Without trust, people won't fully engage</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Not recording everything:</strong> You lose critical feedback and evidence</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Using weak models:</strong> GPT-4o for complex tasks will fail - use o1 or Claude</span>
          </li>
        </ul>
      </div>
      
      <p className="text-red-800 font-bold text-center bg-red-100/50 p-4 rounded-lg">
        Remember: This is about empowering experts to delegate repetitive tasks while focusing on 
        judgment, relationships, and strategic thinking. Not replacing them.
      </p>
    </CardContent>
  </Card>
);

// Enhanced Counterfactual Questions
export const CounterfactualQuestions = () => (
  <Card className={`${shadows.cardEffect} border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-teal-100">
          <Search className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <CardTitle className="text-2xl text-teal-900">The Counterfactual Technique</CardTitle>
          <p className="text-teal-700 mt-1">Extract maximum learning from every workshop</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-white/80 p-4 rounded-lg border border-teal-200">
        <p className="text-gray-700 mb-3">
          After asking the 0-5 rating, focus on outliers and ask unexpected follow-ups:
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-teal-50 rounded-lg">
            <h5 className="font-semibold text-teal-900 mb-2">For Low Scores (0-2):</h5>
            <div className="space-y-2">
              <div className="flex gap-3">
                <span className="text-teal-600 font-bold">Q1:</span>
                <div>
                  <p className="font-medium">"Why not a [lower number]?"</p>
                  <p className="text-sm text-gray-600 italic">Forces them to identify what WAS valuable</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-600 font-bold">Q2:</span>
                <div>
                  <p className="font-medium">"What would have made this a 3?"</p>
                  <p className="text-sm text-gray-600 italic">Reveals specific improvement opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-cyan-50 rounded-lg">
            <h5 className="font-semibold text-cyan-900 mb-2">For High Scores (4-5):</h5>
            <div className="space-y-2">
              <div className="flex gap-3">
                <span className="text-cyan-600 font-bold">Q1:</span>
                <div>
                  <p className="font-medium">"Why not a 3?"</p>
                  <p className="text-sm text-gray-600 italic">Identifies your unique value drivers</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-cyan-600 font-bold">Q2:</span>
                <div>
                  <p className="font-medium">"What would make this a 6?"</p>
                  <p className="text-sm text-gray-600 italic">Surfaces expansion opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-teal-100/30 p-4 rounded-lg">
        <h5 className="font-semibold text-teal-900 mb-2">Why This Works:</h5>
        <ul className="space-y-1 text-gray-700">
          <li>• People don't expect these questions - catches them off guard (in a good way)</li>
          <li>• Answers are ALWAYS surprising and valuable</li>
          <li>• Creates psychological safety - you're asking about positives even from critics</li>
          <li>• Quantifies feedback for easier pattern recognition</li>
        </ul>
      </div>
      
      <p className="text-teal-800 font-medium italic">
        "The gap between their expectations and reality is actually the source of your information 
        edge as an expert. Use it to publish content, enhance processes, and become more expert."
      </p>
    </CardContent>
  </Card>
);

// Enterprise Analytics Tip
export const EnterpriseAnalytics = () => (
  <Card className={`${shadows.cardEffect} border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-indigo-100">
          <Database className="w-6 h-6 text-indigo-600" />
        </div>
        <CardTitle className="text-xl">Enterprise Usage Analytics</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-gray-700">
        If the company has enterprise ChatGPT or Claude accounts, check the admin console for usage data.
      </p>
      
      <div className="bg-white/60 p-4 rounded-lg">
        <h5 className="font-semibold text-indigo-900 mb-2">What to Look For:</h5>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="text-indigo-600">📊</span>
            <span><strong>Heavy users:</strong> Natural champions for workshops</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-600">🎯</span>
            <span><strong>Department patterns:</strong> Where AI fits naturally</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-600">📈</span>
            <span><strong>Growth trends:</strong> Who's accelerating adoption</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-600">⚡</span>
            <span><strong>Zero usage:</strong> Where you'll face most resistance</span>
          </li>
        </ul>
      </div>
      
      <p className="text-sm text-indigo-700 font-medium">
        Pro tip: Focus on the top 20% of users - they're 10x more likely to champion transformation.
      </p>
    </CardContent>
  </Card>
);

// Show and Tell Protocol
export const ShowAndTellProtocol = () => (
  <Card className={`${shadows.cardEffect} border-green-200 bg-gradient-to-br from-green-50 to-emerald-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-green-100">
          <Users2 className="w-6 h-6 text-green-600" />
        </div>
        <CardTitle className="text-xl">Internal Show & Tell Sessions</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-gray-700">
        Transform successful workshops into company-wide momentum through structured sharing.
      </p>
      
      <div className="bg-white/70 p-4 rounded-lg border border-green-200">
        <h5 className="font-semibold text-green-900 mb-2">The 15-Minute Format:</h5>
        <ol className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="font-bold text-green-600">1.</span>
            <span><strong>The Challenge (2 min):</strong> What took 2 days before</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-green-600">2.</span>
            <span><strong>The Process (5 min):</strong> Live demo of new workflow</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-green-600">3.</span>
            <span><strong>The Results (3 min):</strong> Time saved, quality improved</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-green-600">4.</span>
            <span><strong>The Lessons (3 min):</strong> What surprised them</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-green-600">5.</span>
            <span><strong>Q&A (2 min):</strong> Spark curiosity</span>
          </li>
        </ol>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div className="p-3 bg-green-50 rounded-lg">
          <p className="text-sm font-medium text-green-900">Frequency</p>
          <p className="text-sm text-gray-600">Weekly or bi-weekly, optional attendance</p>
        </div>
        <div className="p-3 bg-emerald-50 rounded-lg">
          <p className="text-sm font-medium text-emerald-900">Impact</p>
          <p className="text-sm text-gray-600">Builds FOMO and organic demand</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// CrossFit Analogy
export const WorkshopIntensity = () => (
  <Card className={`${shadows.cardEffect} border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-orange-100">
          <Zap className="w-6 h-6 text-orange-600" />
        </div>
        <CardTitle className="text-xl">The Workshop Intensity Reality</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-gray-700 font-medium">
        Fair warning: Workshops can feel like an intense workout.
      </p>
      
      <div className="bg-white/70 p-4 rounded-lg italic">
        <p className="text-orange-800">
          "I've had workshops where people were like 'This is incredible, we did this!' 
          but you can see on their face they're just wrecked. Like after CrossFit - 
          glad they did it, but feeling like they might die right now."
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-2xl mb-1">🏋️</div>
          <p className="text-sm font-medium">Mental Effort</p>
          <p className="text-xs text-gray-600">Paradigm shifts are exhausting</p>
        </div>
        <div className="text-center p-3 bg-amber-50 rounded-lg">
          <div className="text-2xl mb-1">⚡</div>
          <p className="text-sm font-medium">Time Pressure</p>
          <p className="text-xs text-gray-600">90-120 minutes of focus</p>
        </div>
      </div>
      
      <p className="text-sm text-orange-700 font-medium">
        This is why the time constraint matters - it creates healthy pressure to push through 
        resistance and actually complete the transformation.
      </p>
    </CardContent>
  </Card>
);