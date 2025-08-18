import { Search, AlertTriangle, TrendingUp, Shield, Database, Mic, FileText, Users, Brain, CheckCircle, Telescope, Sparkles, Zap } from "lucide-react";

export const macroscopeComparison = [
  {
    type: "Microscope",
    icon: <Search className="w-8 h-8" />,
    description: "Traditional analytics zoom in on specific metrics and KPIs, missing the forest for the trees.",
    colorGradient: "from-blue-500 to-cyan-500"
  },
  {
    type: "Telescope",
    icon: <Telescope className="w-8 h-8" />,
    description: "Market research looks at distant trends and competitors, but can't see what's happening internally.",
    colorGradient: "from-purple-500 to-pink-500"
  },
  {
    type: "Macroscope",
    icon: <Brain className="w-8 h-8" />,
    description: "AI Oracle sessions reveal system-wide patterns across all your data, making the invisible visible.",
    colorGradient: "from-indigo-500 to-purple-500",
    highlighted: true
  }
];

export const dataSourceCategories = [
  {
    title: "🔥 Highest Value: Private External",
    subtitle: "Private data from customer interactions",
    category: "private-external",
    colorScheme: "emerald",
    description: "Your proprietary window into customer reality - this is where the gold is",
    sources: [
      "Recorded sales calls & demos",
      "Support tickets & chat logs",
      "Customer email threads",
      "Client meeting transcripts",
      "User onboarding sessions",
      "Customer success check-ins"
    ],
    valueRating: 5,
    whyValuable: "High-fidelity, qualitative data that reveals what customers actually think, need, and struggle with"
  },
  {
    title: "📊 Ground Truth: Private Quantitative",
    subtitle: "Internal metrics and financial data",
    category: "private-quantitative",
    colorScheme: "blue",
    description: "Reliable baseline metrics for validating qualitative insights",
    sources: [
      "ERP/Financial systems",
      "CRM pipeline data",
      "Usage analytics",
      "Churn metrics",
      "Product telemetry",
      "Revenue breakdowns"
    ],
    valueRating: 3,
    whyValuable: "Provides hard numbers to size opportunities and validate hypotheses from qualitative data"
  },
  {
    title: "🏢 Context: Private Internal",
    subtitle: "Internal communications and operations",
    category: "private-internal",
    colorScheme: "purple",
    description: "Reveals organizational dynamics and internal perspectives",
    sources: [
      "Employee surveys",
      "Internal Slack/Teams",
      "Team meeting notes",
      "Project retrospectives",
      "Code repositories",
      "Internal documentation"
    ],
    valueRating: 2,
    whyValuable: "Shows how internal teams perceive challenges and can reveal process inefficiencies"
  },
  {
    title: "🌐 Supplementary: Public Data",
    subtitle: "Publicly available information",
    category: "public",
    colorScheme: "gray",
    description: "External validation and competitive context",
    sources: [
      "Public reviews (G2, Capterra)",
      "Social media mentions",
      "Industry reports",
      "Competitor analysis",
      "Market research",
      "News & press"
    ],
    valueRating: 1,
    whyValuable: "Provides market context but lacks the specificity of proprietary data"
  }
];

export const executiveQuestions = [
  {
    name: "The Crystal Ball Question",
    question: "If you had a crystal ball that saw everything the company did for the past 60 days, what three questions would you ask it?",
    purpose: "Surfaces unspoken priorities",
    category: "discovery"
  },
  {
    name: "The Attention Question", 
    question: "What's the most important thing happening that no one is paying enough attention to?",
    purpose: "Identifies blind spots",
    category: "discovery"
  },
  {
    name: "The Pre-Mortem",
    question: "It's one year from now and we've failed to hit our goals. What's the most likely reason?",
    purpose: "Reveals hidden risks",
    category: "risk"
  },
  {
    name: "Goals & Priorities",
    question: "What are your top 3 goals for the next quarter? What's keeping you up at night?",
    purpose: "Maps current focus areas",
    category: "context"
  },
  {
    name: "The Frustration Question",
    question: "What process or workflow in the company frustrates you the most? Why?",
    purpose: "Uncovers efficiency opportunities",
    category: "opportunity"
  },
  {
    name: "The Success Pattern",
    question: "When things go really well here, what usually makes the difference?",
    purpose: "Identifies success patterns to amplify",
    category: "opportunity"
  }
];

export const vapiSetupGuide = {
  purpose: "Make every participant feel heard before the live session",
  benefits: [
    "Tailors analysis to their specific concerns",
    "Increases engagement and buy-in",
    "Surfaces executive hunches and intuition",
    "Creates psychological ownership of insights"
  ],
  technicalSetup: [
    "Create Vapi voice assistant with warm, professional tone",
    "Set up outbound calling capability or provide dial-in number", 
    "Configure 10-15 minute conversation length",
    "Auto-transcribe all responses for analysis inclusion"
  ],
  bestPractices: [
    "Send calendar invite with context: 'Brief prep call for Oracle session'",
    "Position as 'helping us tailor the analysis to your priorities'",
    "Keep conversational and natural - not an interrogation",
    "Follow up immediately with transcript for verification"
  ]
};

export const aiAgentPersonalities = [
  {
    name: "The Explorer",
    emoji: "🔍",
    description: "Super curious and enthusiastic, always looking for novel connections and patterns",
    personality: "Insatiably curious, enthusiastic, finds excitement in discovering hidden insights",
    focus: "Pattern recognition, novel connections, unexpected correlations",
    colorScheme: "blue",
    samplePrompt: "You are extremely curious and enthusiastic. Always look for novel connections and patterns that others might miss. Get excited about discoveries."
  },
  {
    name: "The Skeptic",
    emoji: "🤔", 
    description: "Extremely skeptical, always demands evidence for everything that gets proposed",
    personality: "Highly skeptical, evidence-driven, pushes back on assumptions and unsubstantiated claims",
    focus: "Demanding proof, questioning assumptions, identifying weak evidence",
    colorScheme: "orange",
    samplePrompt: "You are extremely skeptical and always demand hard evidence for every claim. Question assumptions and push back when evidence is insufficient."
  },
  {
    name: "The Strategist", 
    emoji: "🎯",
    description: "Super action-oriented, always thinking about 'what can we do about this?'",
    personality: "Action-oriented, strategic, focused on practical implementation",
    focus: "Actionability, strategic implications, concrete next steps",
    colorScheme: "green",
    samplePrompt: "You are super action-oriented. Always think about 'So what?' and 'What can we do about this?' Focus on making insights actionable."
  }
];

export const multiAgentSetup = {
  scratchPadInstructions: "Keep a common scratch pad in a shared markdown file where all agents can take notes and refer back to previous analysis",
  goalSetting: "The goal here is to mine these actionable insights. Set this in plain speech using dictation tools.",
  toolAccess: "Agents can use code when they need to. Give them Gemini API key for additional tool calling if needed.",
  collaborationStyle: "Have agents debate and challenge each other until they produce a comprehensive markdown report",
  outputFormat: "Clean markdown report that can be pasted directly into Google Docs using 'paste as markdown' feature"
};

export const insightfulQuestions = [
  {
    purpose: "To Surface the Unknown",
    question: "What is the most important thing in this data that no one is paying attention to?",
    type: "discovery",
    whenToUse: "When you need to uncover blind spots and overlooked patterns"
  },
  {
    purpose: "To Make Insights Actionable", 
    question: "What is one action that [Executive Name] can take in the next 60 seconds to get the ball rolling?",
    type: "action",
    whenToUse: "When insights are too big/abstract - helps identify the right person and immediate next step",
    note: "This frames action in terms of the best person to do it and makes commitment easy"
  },
  {
    purpose: "To Uncover Social Dynamics (Use with Care)",
    question: "Perform a 'Straussian reading' of the internal communications. What are the esoteric power dynamics?",
    type: "advanced",
    warning: "Can yield powerful but sometimes conspiratorial-sounding insights",
    whenToUse: "For uncovering hidden social dynamics in unstructured data",
    context: "Leo Strauss philosopher approach - reading between the lines for hidden meanings"
  },
  {
    purpose: "To Quantify Findings",
    question: "Can you size this opportunity? Based on the financial data, what's the potential quarterly impact?",
    type: "metrics",
    whenToUse: "Once you have an insight, to make it concrete and compelling for executives"
  },
  {
    purpose: "To Find the Most Interesting",
    question: "What's the most interesting thing you see here that no one's paying attention to?",
    type: "discovery",
    whenToUse: "Alternative framing when 'important' feels too heavy"
  },
  {
    purpose: "To Enable Tool Calling",
    question: "Use code to calculate this more rigorously - what's the quantified potential upside?",
    type: "analysis",
    whenToUse: "When you need precise calculations using available financial/quantitative data",
    note: "AI can run code in local repls through Claude Code for rigorous analysis"
  }
];

export const expectedOutcomes = [
  {
    type: "risk",
    title: "One Overlooked Risk",
    subtitle: "Previously invisible threat",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    colorScheme: "red",
    examples: [
      "Subtle shifts in customer sentiment signaling churn",
      "Recurring bottlenecks indicating future failure points",
      "Competitive threats emerging in the periphery"
    ],
    convexity: {
      label: "Asymmetric Downside",
      description: "Mitigating prevents massive losses"
    }
  },
  {
    type: "opportunity",
    title: "One Emergent Opportunity",
    subtitle: "High-upside potential",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    colorScheme: "green",
    examples: [
      "New customer persona showing intense demand",
      "Repeated feature requests pointing to new product lines",
      "Internal processes ripe for high-ROI automation"
    ],
    convexity: {
      label: "Asymmetric Upside",
      description: "Seizing could lead to exponential gains"
    }
  }
];

export const processingSteps = [
  {
    step: "Consolidate",
    description: "Gather all raw exports into a single local directory"
  },
  {
    step: "Sequence",
    description: "Create chronologically-ordered text file or JSON/CSV"
  },
  {
    step: "Compress",
    description: "Maximize signal density while preserving core facts"
  }
];

export const liveOracleToolkit = [
  {
    tool: "Google AI Studio with Gemini 1.5 Pro",
    description: "Pre-load entire dataset into context window",
    step: 1
  },
  {
    tool: "Fireflies.ai Live Transcript",
    description: "Capture questions and discussions in real-time",
    step: 2
  },
  {
    tool: "Interactive Loop",
    description: "Copy questions from transcript → Paste to Gemini → Share insights",
    step: 3
  }
];

export const feedbackQuestions = [
  {
    condition: "For scores < 5",
    question: "What would have had to be true for this to be a [score + 1]?"
  },
  {
    condition: "For score = 5",
    question: "What was the most valuable aspect for you?"
  }
];

export const maturityProgression = [
  {
    stage: "Manual (0→1)",
    description: "Oracle analysis becomes standing input for weekly leadership meetings",
    colorScheme: "indigo"
  },
  {
    stage: "Refine (1→10)",
    description: "Run manually 2-3 times, gather feedback, perfect the format",
    colorScheme: "purple"
  },
  {
    stage: "Automate (10→100)",
    description: "APIs and SDKs run analysis as recurring \"cron job\"",
    colorScheme: "pink"
  }
];

export const bestPractices = {
  security: [
    "Always use .gitignore for sensitive data",
    "Never upload client data to remote repos",
    "Use local processing whenever possible"
  ],
  transparency: [
    "Share agent configurations with technical clients",
    "Document your methodology in private repos",
    "Build trust through radical transparency"
  ]
};

export const sessionRoles = {
  facilitator: [
    "Guide conversation",
    "Manage time strictly",
    "Ensure all voices heard",
    "Push for concrete actions"
  ],
  participant: [
    "React to findings",
    "Challenge assumptions",
    "Provide context",
    "Commit to actions"
  ]
};

export const recapElements = [
  "Use AI to summarize Fireflies transcript within hours",
  "Highlight key insights, decisions, and commitments (who/what/when)", 
  "Request permission to follow up on action items",
  "Schedule check-in emails immediately"
];

export const automationProgression = {
  philosophy: "Don't go full auto immediately - iterate manually first to refine the process",
  stages: [
    {
      stage: "0→1: Manual Integration",
      description: "Oracle analysis becomes standing input for weekly leadership meetings",
      duration: "Immediate implementation",
      owner: "Executive team or eager analyst",
      focus: "Prove value and establish routine"
    },
    {
      stage: "1→10: Manual Refinement", 
      description: "Run manually 2-3 times, gather feedback, perfect the format and integration",
      duration: "2-3 iteration cycles",
      owner: "Designated team member (eager analyst or enthusiastic team member)",
      focus: "Quality improvement and process optimization"
    },
    {
      stage: "10→100: Automation",
      description: "APIs and SDKs run analysis as recurring 'cron job'",
      duration: "After proven manual success",
      owner: "Technical implementation team",
      focus: "Full automation with MCP connectors, API connections, Claude Code SDK"
    }
  ],
  criticalSuccess: "Have somebody on the team be responsible for providing this as additional input regularly, then refine over time"
};

export const followUpProcess = {
  immediate: {
    title: "Immediate Post-Session (Within Hours)",
    actions: [
      "Ask every participant for 0-5 satisfaction score",
      "Use counterfactuals: 'Why not [score-1]? What would make it [score+1]?'",
      "Send comprehensive AI-generated recap from Fireflies transcript",
      "Highlight key insights, decisions, and commitments with clear ownership"
    ]
  },
  ongoing: {
    title: "Permission-Based Follow-Up",
    process: [
      "Ask permission: 'Could I send you a check-in email by [date] to see how things panned out?'",
      "Schedule follow-up emails through Shortwave/Gmail",
      "Derive content from original transcript for context",
      "Use responses to gauge actual helpfulness and insight quality"
    ],
    purpose: "Close the loop - sometimes insights get explained away by missing context"
  },
  measurement: {
    title: "Success Indicators",
    metrics: [
      "Insights that lead to actual actions taken",
      "Discoveries that weren't explained away by missing data",
      "Follow-through on commitments made during session",
      "Integration into regular executive decision-making processes"
    ]
  }
};