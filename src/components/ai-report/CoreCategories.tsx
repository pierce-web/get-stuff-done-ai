
import React from "react";
import ToolCategory from "./ToolCategory";

const CoreCategories = () => {
  const categories = [
    {
      title: "1. Chatbots & Text Generation",
      examples: [
        { name: "ChatGPT", url: "https://openai.com/chatgpt" },
        { name: "Anthropic's Claude", url: "https://claude.ai" },
      ],
      useCases: "Drafting emails, strategy docs, marketing copy, brainstorming.",
    },
    {
      title: "2. Transcription & Note-Taking",
      examples: [
        { name: "WisprFlow", url: "http://wisprflow.ai" },
        { name: "Fireflies", url: "https://fireflies.ai" },
      ],
      useCases: "Liberating yourself from your keyboard, iterating faster with your AI assistants, automatically summarizing meetings, generating transcripts (and, over time, a \"data asset\"), capturing key action items.",
    },
    {
      title: "3. Coding Agents & Development Tools",
      examples: [
        { name: "Cursor", url: "https://cursor.sh" },
        { name: "Windsurf", url: "http://codeium.com" },
        { name: "orchestrated Claude Code Agents", url: "https://claude.ai/code" },
      ],
      useCases: "Automating code generation, debugging, development workflows.",
    },
    {
      title: "4. Audio/Video Editing & Creation",
      examples: [
        { name: "Descript", url: "https://www.descript.com" },
        { name: "Loom", url: "https://www.loom.com" },
        { name: "Suno", url: "https://suno.ai" },
      ],
      useCases: "Video messaging (and asynchronous communication more generally), audio overdubbing, music generation, AI-powered video editing and rich content creation.",
    },
    {
      title: "5. Automation & Scheduling",
      examples: [
        { name: "Zapier", url: "https://zapier.com" },
        { name: "Calendly", url: "https://calendly.com" },
        { name: "Zoom", url: "https://zoom.us" },
      ],
      useCases: "Workflow automation, meeting scheduling, live AI notes and meeting summaries.",
    },
    {
      title: "6. Presentation & Design Tools",
      examples: [
        { name: "Gamma", url: "https://gamma.app" },
        { name: "Figma FigJam Boards", url: "https://www.figma.com" },
      ],
      useCases: "Rapid slide deck creation, AI-assisted design, prototyping, user flow and architecture illustration.",
    },
    {
      title: "7. Web & Branding Tools",
      examples: [
        { name: "Lovable", url: "http://lovable.dev" },
        { name: "Crowdstrike cybersecurity coverage via Agency", url: "https://www.getagency.com" },
      ],
      useCases: "Building AI-enhanced websites, brand identity creation, safeguarding data.",
    },
    {
      title: "8. Email & Workspace AI",
      examples: [
        { name: "Shortwave", url: "https://shortwave.com" },
        { name: "Google Workspace with Gemini Premium", url: "http://gemini.google.com" },
      ],
      useCases: "Advanced email prioritization, summarization, plus AI-driven doc creation and analysis.",
    },
  ];

  return (
    <section id="core-categories" className="mb-16">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-primary">3. Core AI Tool Categories</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <ToolCategory
              key={index}
              title={category.title}
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
