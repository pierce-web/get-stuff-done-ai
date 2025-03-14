
export interface ToolPrice {
  tool: string;
  url: string;
  secondUrl?: string;
  cost: string;
  purpose: string;
}

export const toolPricingData: ToolPrice[] = [
  {
    tool: "ChatGPT Pro",
    url: "https://openai.com/chatgpt",
    cost: "$200 ($20 for Plus and $25 for \"Teams\")",
    purpose: "Premium chatbot plan (advanced text generation). Nascent collaboration features w/ Teams via, e.g., shared Projects.",
  },
  {
    tool: "Anthropic Claude Pro",
    url: "https://claude.ai",
    cost: "$20 ($30 for Teams)",
    purpose: "AI text generation/analysis.",
  },
  {
    tool: "WisprFlow",
    url: "http://wisprflow.ai",
    cost: "$15",
    purpose: "Speech-to-text/transcription (Mac/Windows).",
  },
  {
    tool: "SuperWhisper",
    url: "https://superwhisper.com",
    cost: "$9",
    purpose: "Mac/iPhone transcription/AI assistant.",
  },
  {
    tool: "Fireflies (Enterprise)",
    url: "https://fireflies.ai",
    cost: "$40",
    purpose: "AI meeting notes and summaries.",
  },
  {
    tool: "Raycast",
    url: "https://raycast.com",
    cost: "$10",
    purpose: "AI-enhanced \"command line\" productivity tool for interacting with your desktop applications and running automation scripts.",
  },
  {
    tool: "Cursor or Windsurf",
    url: "https://cursor.sh",
    secondUrl: "http://codeium.com",
    cost: "$15–$20",
    purpose: "AI-driven coding IDE.",
  },
  {
    tool: "Figma FigJam Boards",
    url: "https://www.figma.com",
    cost: "$5",
    purpose: "For visual collaboration and remote whiteboarding",
  },
  {
    tool: "Loom",
    url: "https://www.loom.com",
    cost: "$20",
    purpose: "Video messaging with AI editing/transcripts.",
  },
  {
    tool: "Calendly",
    url: "https://calendly.com",
    cost: "$16",
    purpose: "Meeting scheduling with AI suggestions.",
  },
  {
    tool: "Zoom",
    url: "https://zoom.us",
    cost: "$17",
    purpose: "AI summary/transcripts (depending on plan).",
  },
  {
    tool: "Zapier",
    url: "https://zapier.com",
    cost: "$30",
    purpose: "Automation/workflow orchestration with AI triggers.",
  },
  {
    tool: "Shortwave",
    url: "https://shortwave.com",
    cost: "$30–$50",
    purpose: "AI-powered inbox management and prioritization.",
  },
  {
    tool: "Agency",
    url: "https://www.getagency.com",
    cost: "$20",
    purpose: "Crowdstrike cybersecurity coverage for SMBs",
  },
  {
    tool: "Gamma",
    url: "https://gamma.app",
    cost: "$10",
    purpose: "AI-driven presentation/slidedeck creation.",
  },
  {
    tool: "Lovable",
    url: "http://lovable.dev",
    cost: "$20",
    purpose: "Lightning fast AI website builder",
  },
  {
    tool: "VAPI",
    url: "https://vapi.ai",
    cost: "$20–$100",
    purpose: "Voice-based AI interactions; usage-based.",
  },
  {
    tool: "Descript",
    url: "https://www.descript.com",
    cost: "$20",
    purpose: "AI audio/video editing.",
  },
  {
    tool: "Suno",
    url: "https://suno.ai",
    cost: "$10",
    purpose: "AI music generation.",
  },
  {
    tool: "Gemini Premium (Google Workspace)",
    url: "http://gemini.google.com",
    cost: "$10–$20",
    purpose: "Access to Notebook LM+ and advanced Workspace AI.",
  },
  {
    tool: "Claude Code",
    url: "https://claude.ai/code",
    cost: "$10–$100/day (usage-based)",
    purpose: "\"Coin-operated\" coding agent that can run a $200–$2,000/month tab for software development support.",
  },
];
