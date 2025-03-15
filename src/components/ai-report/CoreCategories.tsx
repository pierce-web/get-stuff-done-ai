
import React from "react";
import ToolCategory from "./ToolCategory";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  MessageSquare, 
  Mic, 
  Code, 
  Video, 
  Workflow, 
  PenTool, 
  ShieldCheck, 
  Mail 
} from "lucide-react";

const CoreCategories = () => {
  const isMobile = useIsMobile();
  
  const categories = [
    {
      title: "Chatbots & Text Generation",
      icon: <MessageSquare className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "ChatGPT", url: "https://openai.com/chatgpt" },
        { name: "Anthropic's Claude", url: "https://claude.ai" },
      ],
      useCases: "Deep research, analysis, thought partnership, drafting emails, strategy docs, marketing copy, brainstorming, and general assistance.",
    },
    {
      title: "Transcription & Note-Taking",
      icon: <Mic className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "WisprFlow", url: "http://wisprflow.ai" },
        { name: "Fireflies", url: "https://fireflies.ai" },
      ],
      useCases: "Liberating yourself from your keyboard, iterating faster with your AI assistants, automatically summarizing meetings, generating transcripts (and, over time, a \"data asset\"), capturing key action items.",
    },
    {
      title: "Coding Agents & Development Tools",
      icon: <Code className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "Cursor", url: "https://cursor.sh" },
        { name: "Replit", url: "https://replit.com" },
        { name: "orchestrated Claude Code Agents", url: "https://claude.ai/code" },
      ],
      useCases: "Automating code generation, debugging, development workflows, and rapid prototyping with voice-to-app capabilities for non-engineers.",
    },
    {
      title: "Audio/Video Editing & Creation",
      icon: <Video className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "Descript", url: "https://www.descript.com" },
        { name: "Loom", url: "https://www.loom.com" },
        { name: "Suno", url: "https://suno.ai" },
      ],
      useCases: "Video messaging (and asynchronous communication more generally), audio overdubbing, music generation, AI-powered video editing and rich content creation.",
    },
    {
      title: "Automation & Scheduling",
      icon: <Workflow className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "Zapier", url: "https://zapier.com" },
        { name: "Calendly", url: "https://calendly.com" },
        { name: "Zoom", url: "https://zoom.us" },
      ],
      useCases: "Workflow automation, meeting scheduling, live AI notes and meeting summaries.",
    },
    {
      title: "Presentation & Design Tools",
      icon: <PenTool className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "Gamma", url: "https://gamma.app" },
        { name: "Figma FigJam Boards", url: "https://www.figma.com" },
        { name: "Lovable", url: "http://lovable.dev" },
      ],
      useCases: "Rapid slide deck creation, AI-assisted design, prototyping, user flow and architecture illustration, building AI-enhanced websites, and brand identity creation.",
    },
    {
      title: "Security & Data Protection",
      icon: <ShieldCheck className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "Crowdstrike cybersecurity coverage via Agency", url: "https://www.getagency.com" },
      ],
      useCases: "Safeguarding sensitive data, protecting digital assets, securing AI workflows, and ensuring proper data protection as you digitize more of your business processes.",
    },
    {
      title: "Email & Workspace AI",
      icon: <Mail className="h-5 w-5 text-secondary mr-2" />,
      examples: [
        { name: "Shortwave", url: "https://shortwave.com" },
        { name: "Google Workspace with Gemini Premium", url: "http://gemini.google.com" },
      ],
      useCases: "Advanced email prioritization, summarization, plus AI-driven doc creation and analysis.",
    },
  ];

  return (
    <section id="core-categories" className="mb-16">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 sm:mb-8 text-primary">Core AI Tool Categories for 2025</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <ToolCategory
              key={index}
              title={category.title}
              icon={category.icon}
              examples={category.examples}
              useCases={category.useCases}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCategories;
