import { Brain, Database, Edit, Mic, MessageSquare, Zap, RefreshCw, Rocket, Users, Target, Sparkles, Search, FileSearch, PlayCircle, Shield, TrendingUp } from "lucide-react";

export const corePhilosophy = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "The Atomic Unit of Change",
    description: "True transformation doesn't happen in boardrooms - it happens at the workflow level. Each workshop is a building block for broader organizational change."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Teaching to Fish",
    description: "We're not automating jobs away. We're empowering human experts to delegate repetitive tasks while focusing on judgment, relationships, and strategic thinking."
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "10x or Bust",
    description: "We target processes that take 2 days to 2 weeks and compress them to 2-4 hours. If we can't achieve meaningful compression, we pivot or abort."
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Creating Magic Moments",
    description: "Every workshop must create that breakthrough moment where participants viscerally understand AI's potential. Without this conversion experience, transformation fails."
  }
];

export const workshopPhases = [
  {
    phase: "Phase 1",
    title: "Discovery & Scoping",
    subtitle: "Before the Workshop",
    icon: <Search className="w-5 h-5" />,
    description: "Success is determined before the session begins",
    steps: [
      {
        title: "Identify Candidate Workflows",
        details: "Look for processes heavy in the '5 R's': Research, Retrieval, Reading, Writing, and Reasoning"
      },
      {
        title: "Quantify the Opportunity",
        details: "Baseline metrics: current time, error rates, economic impact of 10x improvement"
      },
      {
        title: "Define Key Roles",
        details: "Identify the Expert (knows what 'good' looks like) and Operator (will perform the new workflow)"
      },
      {
        title: "Map Current State",
        details: "30-60 minute session to decompose the workflow, inventory inputs, and clarify outputs/outcomes"
      }
    ]
  },
  {
    phase: "Phase 2",
    title: "Preparation",
    subtitle: "The Homework",
    icon: <FileSearch className="w-5 h-5" />,
    description: "Set the stage for live transformation",
    steps: [
      {
        title: "Set Binary Goal",
        details: "Must be verifiable: 'Draft and send the Johnson demand letter in under 2 hours'"
      },
      {
        title: "Install Dictation Tools",
        details: "WisprFlow or SuperWhisper - 'Typing is the old way; speech is the new way'"
      },
      {
        title: "Access Best Models",
        details: "GPT-5, Claude 4, or Gemini 2.5 Pro - use developer platforms for more control"
      },
      {
        title: "Gather All Inputs",
        details: "Have all files, documents, and data for the specific work item ready"
      }
    ]
  },
  {
    phase: "Phase 3",
    title: "The Live Workshop",
    subtitle: "90-120 Minutes of Magic",
    icon: <PlayCircle className="w-5 h-5" />,
    description: "High-energy coaching through transformation",
    steps: [
      {
        title: "The Upfront Contract",
        details: "Restate goal, offer exit ramp: 'If we're not making outsized progress, say the word'"
      },
      {
        title: "The Iterative Loop",
        details: "Formalize intent → Generate → Get feedback → Capture in transcript → Iterate"
      },
      {
        title: "Create Magic Moment",
        details: "Second/third iteration incorporating spoken feedback - the paradigm shift moment"
      },
      {
        title: "Drive to Finish",
        details: "Continue iterations until work product is production-ready, then execute final action"
      }
    ]
  },
  {
    phase: "Phase 4",
    title: "Solidifying Gains",
    subtitle: "After the Workshop",
    icon: <RefreshCw className="w-5 h-5" />,
    description: "Turn one-time success into new standard",
    steps: [
      {
        title: "The 0-5 Question",
        details: "Rate experience from 'complete regret' to 'exceeded expectations'"
      },
      {
        title: "Counterfactual Analysis",
        details: "Ask what would make it better/worse to uncover friction and value"
      },
      {
        title: "Commitment & Check-in",
        details: "Commit to 3-5 repetitions, schedule automated follow-up"
      },
      {
        title: "Scale Success",
        details: "Internal show-and-tell, identify adjacent workflows, formalize into tools"
      }
    ]
  }
];

export const fiveRs = [
  {
    r: "Research",
    description: "Finding and gathering information from internal and external sources",
    example: "Legal precedents, market data, competitor analysis"
  },
  {
    r: "Retrieval",
    description: "Accessing and organizing existing documents and data",
    example: "Medical records, contracts, customer histories"
  },
  {
    r: "Reading",
    description: "Processing and understanding large volumes of text",
    example: "Reports, emails, documentation, transcripts"
  },
  {
    r: "Writing",
    description: "Creating documents, reports, and communications",
    example: "Proposals, demand letters, summaries, emails"
  },
  {
    r: "Reasoning",
    description: "Making connections, drawing conclusions, strategic thinking",
    example: "Case valuation, risk assessment, recommendations"
  }
];

export const criticalTools = [
  {
    category: "Dictation",
    tools: ["WisprFlow", "SuperWhisper"],
    importance: "Non-negotiable. Stop typing, start speaking.",
    icon: <Mic className="w-5 h-5" />
  },
  {
    category: "AI Models",
    tools: ["GPT-5", "Claude 4", "Gemini 2.5 Pro"],
    importance: "Always use the most powerful model available.",
    icon: <Brain className="w-5 h-5" />
  },
  {
    category: "Developer Platforms",
    tools: ["OpenAI Platform", "Anthropic Console", "Google AI Studio"],
    importance: "Less restricted access with full context windows.",
    icon: <Database className="w-5 h-5" />
  },
  {
    category: "Software Development",
    tools: ["Claude Code", "Lovable.dev", "Replit"],
    importance: "Rapid prototyping and automation building.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    category: "Automation & Voice",
    tools: ["Vapi", "n8n", "Zapier"],
    importance: "Voice assistants and workflow automation (keep data in client environment).",
    icon: <RefreshCw className="w-5 h-5" />
  },
  {
    category: "Transcription",
    tools: ["Fireflies.ai"],
    importance: "Capture everything for rapid iteration.",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    category: "Collaboration",
    tools: ["Figma FigJam", "Miro"],
    importance: "Visual workflow mapping and real-time collaboration.",
    icon: <Edit className="w-5 h-5" />
  }
];

export const realExamples = [
  {
    title: "Personal Injury Lawyer",
    workflow: "Demand Letter Creation",
    before: "2-3 days of document review and drafting",
    after: "Under 2 hours from zero to sent",
    impact: "10x speed, higher settlement rates",
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: "VC General Partner",
    workflow: "LP Meeting Preparation",
    before: "Week of research and prep",
    after: "2 hours to qualified leads and materials",
    impact: "Higher close rates, more strategic conversations",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    title: "HR Team",
    workflow: "Onboarding Material Creation",
    before: "2 weeks to create custom training",
    after: "3 hours for multimedia onboarding package",
    impact: "Faster time-to-productivity for new hires",
    icon: <Users className="w-5 h-5" />
  }
];

export const iterativeLoopSteps = [
  {
    step: 1,
    title: "Formalize Intent",
    description: "Coach operator to articulate entire thought process via dictation",
    details: "Context is king - share all inputs, examples, goals, audience, tone"
  },
  {
    step: 2,
    title: "Generate First Draft",
    description: "AI produces initial work product",
    details: "Don't expect perfection - this is just the starting point"
  },
  {
    step: 3,
    title: "Capture Gut Reaction",
    description: "Expert provides unfiltered feedback",
    details: "What's right? What's wrong? No punches pulled"
  },
  {
    step: 4,
    title: "Iterate with Feedback",
    description: "Copy transcript, paste back, generate new version",
    details: "This is where the magic happens - AI incorporates nuanced feedback"
  }
];

export const feedbackFramework = [
  {
    score: "0-1",
    meaning: "Complete regret",
    followUp: "Why not a 0? What would make it a 2?",
    insight: "Identifies baseline value and critical gaps"
  },
  {
    score: "2-3",
    meaning: "Some value but issues",
    followUp: "Why not lower? What would make it higher?",
    insight: "Reveals friction points and improvement opportunities"
  },
  {
    score: "4-5",
    meaning: "Exceeded expectations",
    followUp: "Why not a 3? What would make it a 6?",
    insight: "Highlights key successes and expansion potential"
  }
];