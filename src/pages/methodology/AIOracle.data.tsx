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
    title: "High-Value External",
    category: "external",
    colorScheme: "indigo",
    sources: [
      "Sales call transcripts",
      "Support tickets & chats",
      "Customer emails",
      "Meeting recordings"
    ]
  },
  {
    title: "Valuable Internal",
    category: "internal",
    colorScheme: "purple",
    sources: [
      "Employee surveys",
      "Slack exports",
      "Code repositories",
      "Project management data"
    ]
  },
  {
    title: "Quantitative & Public",
    category: "public",
    colorScheme: "pink",
    sources: [
      "Financial/ERP data",
      "Sales figures",
      "Public reviews (G2, etc)",
      "Market research"
    ]
  }
];

export const executiveQuestions = [
  {
    name: "The Crystal Ball Question",
    question: "If you had a crystal ball that saw everything the company did for the past 60 days, what three questions would you ask it?",
    purpose: "Surfaces unspoken priorities"
  },
  {
    name: "The Attention Question",
    question: "What's the most important thing happening that no one is paying enough attention to?",
    purpose: "Identifies blind spots"
  },
  {
    name: "The Pre-Mortem",
    question: "It's one year from now and we've failed to hit our goals. What's the most likely reason?",
    purpose: "Reveals hidden risks"
  }
];

export const aiAgentPersonalities = [
  {
    name: "The Explorer",
    emoji: "🔍",
    description: "Insatiably curious, always looking for novel connections and patterns",
    colorScheme: "blue"
  },
  {
    name: "The Skeptic",
    emoji: "🤔",
    description: "Demands hard evidence for every claim, pushes back on assumptions",
    colorScheme: "orange"
  },
  {
    name: "The Strategist",
    emoji: "🎯",
    description: "Focused on \"So what?\" and \"What can we do about this?\"",
    colorScheme: "green"
  }
];

export const insightfulQuestions = [
  {
    purpose: "To Surface the Unknown",
    question: "What is the most important thing in this data that no one is paying attention to?",
    type: "discovery"
  },
  {
    purpose: "To Make Insights Actionable",
    question: "What is one action that [Executive Name] can take in the next 60 seconds to get the ball rolling?",
    type: "action"
  },
  {
    purpose: "To Uncover Social Dynamics (Use with Care)",
    question: "Perform a 'Straussian reading' of the internal communications. What are the esoteric power dynamics?",
    type: "advanced",
    warning: "Can yield powerful but sometimes conspiratorial-sounding insights"
  },
  {
    purpose: "To Quantify Findings",
    question: "Can you size this opportunity? Based on the financial data, what's the potential quarterly impact?",
    type: "metrics"
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