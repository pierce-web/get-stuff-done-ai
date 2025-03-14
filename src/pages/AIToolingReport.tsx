import React from "react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight, CheckCircle, FileText, ShieldCheck, Gift, BarChart } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AIToolingReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>2025 AI Tooling & Budget Report | GSD at Work</title>
        <meta name="description" content="Discover how to equip your team with AI tools, boost productivity, and stay competitive in 2025. Get comprehensive cost estimates and budget tiers for AI implementation." />
        <meta name="keywords" content="AI tools budget, AI cost estimates, business AI investment, AI productivity tools, AI ROI, AI implementation guide" />
        <meta property="og:title" content="2025 AI Tooling & Budget Report | GSD at Work" />
        <meta property="og:description" content="A comprehensive guide to budgeting for AI tools in 2025 - from chatbots to coding agents" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://gsdat.work/ai-tooling-report" />
      </Helmet>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors">
              &larr; Back to Home
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <header className="mb-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                The 2025 AI Tooling & Budget Report
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                How to Equip Your Team, Boost Productivity, and Stay Competitive
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-500">
                Published by Christian Ulstrup, Principal & Founder, GSD at Work LLC
              </p>
            </header>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-12">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <FileText className="mr-2 text-secondary h-5 w-5" />
                Table of Contents
              </h2>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li><a href="#introduction" className="text-primary hover:text-secondary transition-colors">Introduction</a></li>
                <li><a href="#why-invest" className="text-primary hover:text-secondary transition-colors">Why Invest in AI Tools Now</a></li>
                <li><a href="#core-categories" className="text-primary hover:text-secondary transition-colors">Core AI Tool Categories</a></li>
                <li><a href="#cost-estimates" className="text-primary hover:text-secondary transition-colors">Line-by-Line Cost Estimates</a></li>
                <li><a href="#budget-tiers" className="text-primary hover:text-secondary transition-colors">Monthly Totals and Budget Tiers</a></li>
                <li><a href="#per-employee" className="text-primary hover:text-secondary transition-colors">Scaling Up: Per-Employee Budgeting</a></li>
                <li><a href="#practical-tips" className="text-primary hover:text-secondary transition-colors">Practical Tips: Zero-Based Budgeting & Monthly Reviews</a></li>
                <li><a href="#conclusion" className="text-primary hover:text-secondary transition-colors">Conclusion & Next Steps</a></li>
              </ol>
            </div>

            <section id="introduction" className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-primary">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to The 2025 AI Tooling & Budget Report, brought to you by GSD at Work—your partner in helping businesses get stuff done. If you're a business owner or team lead looking to harness the power of AI, you've likely asked:
                </p>
                <blockquote className="border-l-4 border-secondary pl-6 py-4 my-6 italic bg-gray-50 rounded-r-lg">
                  "How much should we realistically be spending each month on AI tools?"
                </blockquote>
                <p>
                  This report provides clear, actionable answers. We'll break down the typical costs of popular AI tools—from chatbots and transcribers to coding agents and workflow automation. We'll also give you ballpark budgets for different types of users, so you can plan confidently.
                </p>
              </div>
            </section>

            <section id="why-invest" className="mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-primary">2. Why Invest in AI Tools Now</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-start pt-1">
                      <div className="bg-secondary/10 rounded-full p-2">
                        <BarChart className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">Productivity Gains</h3>
                      <p>AI-based assistants, coding agents, and transcription tools dramatically cut down on repetitive work, allowing your team to focus on higher-value tasks.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-start pt-1">
                      <div className="bg-secondary/10 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">Competitive Advantage</h3>
                      <p>Staying on the cutting edge of tech can differentiate your brand, attract top talent, and give you a faster path from idea to execution.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-start pt-1">
                      <div className="bg-secondary/10 rounded-full p-2">
                        <ShieldCheck className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">Scalable Efficiency</h3>
                      <p>Many AI tools charge per usage, letting you pay only for what you need—but you have the option to scale up quickly as your workloads grow.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="core-categories" className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-8 text-primary">3. Core AI Tool Categories</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">1. Chatbots & Text Generation</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">ChatGPT</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Anthropic's Claude</a></li>
                      <li><strong>Use Cases:</strong> Drafting emails, strategy docs, marketing copy, brainstorming.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">2. Transcription & Note-Taking</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://whisperflow.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">WisprFlow</a>, <a href="https://fireflies.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Fireflies</a></li>
                      <li><strong>Use Cases:</strong> Liberating yourself from your keyboard, iterating faster with your AI assistants, automatically summarizing meetings, generating transcripts (and, over time, a "data asset"), capturing key action items.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">3. Coding Agents & Development Tools</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Cursor</a>, <a href="https://windsurf.io" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Windsurf</a>, <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">orchestrated Claude Code Agents</a></li>
                      <li><strong>Use Cases:</strong> Automating code generation, debugging, development workflows.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">4. Audio/Video Editing & Creation</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://www.descript.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Descript</a>, <a href="https://www.loom.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Loom</a>, <a href="https://suno.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Suno</a></li>
                      <li><strong>Use Cases:</strong> Video messaging (and asynchronous communication more generally), audio overdubbing, music generation, AI-powered video editing and rich content creation.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">5. Automation & Scheduling</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Zapier</a>, <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Calendly</a>, <a href="https://zoom.us" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Zoom</a></li>
                      <li><strong>Use Cases:</strong> Workflow automation, meeting scheduling, live AI notes and meeting summaries.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">6. Presentation & Design Tools</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://gamma.app" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Gamma</a>, <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Figma FigJam Boards</a> (for visual collaboration and remote white boarding)</li>
                      <li><strong>Use Cases:</strong> Rapid slide deck creation, AI-assisted design, prototyping, user flow and architecture illustration.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">7. Web & Branding Tools</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://lovable.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Lovable</a> (AI website builder), <a href="https://www.withagency.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Crowdstrike cybersecurity coverage via Agency</a></li>
                      <li><strong>Use Cases:</strong> Building AI-enhanced websites, brand identity creation, safeguarding data.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-3">8. Email & Workspace AI</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li><strong>Examples:</strong> <a href="https://shortwave.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Shortwave</a> (AI email client), <a href="https://workspace.google.com/products/gemini/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Workspace with Gemini Premium</a></li>
                      <li><strong>Use Cases:</strong> Advanced email prioritization, summarization, plus AI-driven doc creation and analysis.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="cost-estimates" className="mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-primary">4. Line-by-Line Cost Estimates</h2>
                <p className="mb-6">
                  Below is a snapshot of popular AI tools with approximate monthly costs per user. Actual pricing may vary based on usage, plan tiers, and new competitive offerings.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tool / Service</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Approx. Monthly Cost</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">ChatGPT Pro</a></td>
                        <td className="border border-gray-200 px-4 py-3">$200 ($20 for Plus and $25 for "Teams")</td>
                        <td className="border border-gray-200 px-4 py-3">Premium chatbot plan (advanced text generation). Nascent collaboration features w/ Teams via, e.g., shared Projects.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Anthropic Claude Pro</a></td>
                        <td className="border border-gray-200 px-4 py-3">$20 ($30 for Teams)</td>
                        <td className="border border-gray-200 px-4 py-3">AI text generation/analysis.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://whisperflow.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">WisprFlow</a></td>
                        <td className="border border-gray-200 px-4 py-3">$15</td>
                        <td className="border border-gray-200 px-4 py-3">Speech-to-text/transcription (Mac/Windows).</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://superwhisper.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">SuperWhisper</a></td>
                        <td className="border border-gray-200 px-4 py-3">$9</td>
                        <td className="border border-gray-200 px-4 py-3">Mac/iPhone transcription/AI assistant.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://fireflies.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Fireflies (Enterprise)</a></td>
                        <td className="border border-gray-200 px-4 py-3">$40</td>
                        <td className="border border-gray-200 px-4 py-3">AI meeting notes and summaries.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://raycast.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Raycast</a></td>
                        <td className="border border-gray-200 px-4 py-3">$10</td>
                        <td className="border border-gray-200 px-4 py-3">AI-enhanced "command line" productivity tool for interacting with your desktop applications and running automation scripts.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Cursor</a> or <a href="https://windsurf.io" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Windsurf</a></td>
                        <td className="border border-gray-200 px-4 py-3">$15–$20</td>
                        <td className="border border-gray-200 px-4 py-3">AI-driven coding IDE.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Figma FigJam Boards</a></td>
                        <td className="border border-gray-200 px-4 py-3">$5</td>
                        <td className="border border-gray-200 px-4 py-3">For visual collaboration and remote whiteboarding</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://www.loom.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Loom</a></td>
                        <td className="border border-gray-200 px-4 py-3">$20</td>
                        <td className="border border-gray-200 px-4 py-3">Video messaging with AI editing/transcripts.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Calendly</a></td>
                        <td className="border border-gray-200 px-4 py-3">$16</td>
                        <td className="border border-gray-200 px-4 py-3">Meeting scheduling with AI suggestions.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://zoom.us" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Zoom</a></td>
                        <td className="border border-gray-200 px-4 py-3">$17</td>
                        <td className="border border-gray-200 px-4 py-3">AI summary/transcripts (depending on plan).</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Zapier</a></td>
                        <td className="border border-gray-200 px-4 py-3">$30</td>
                        <td className="border border-gray-200 px-4 py-3">Automation/workflow orchestration with AI triggers.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://shortwave.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Shortwave</a></td>
                        <td className="border border-gray-200 px-4 py-3">$30–$50</td>
                        <td className="border border-gray-200 px-4 py-3">AI-powered inbox management and prioritization.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://www.withagency.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Agency</a></td>
                        <td className="border border-gray-200 px-4 py-3">$20</td>
                        <td className="border border-gray-200 px-4 py-3">Crowdstrike cybersecurity coverage for SMBs</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://gamma.app" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Gamma</a></td>
                        <td className="border border-gray-200 px-4 py-3">$10</td>
                        <td className="border border-gray-200 px-4 py-3">AI-driven presentation/slidedeck creation.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://lovable.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Lovable</a></td>
                        <td className="border border-gray-200 px-4 py-3">$20</td>
                        <td className="border border-gray-200 px-4 py-3">Lightning fast AI website builder</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">VAPI</a></td>
                        <td className="border border-gray-200 px-4 py-3">$20–$100</td>
                        <td className="border border-gray-200 px-4 py-3">Voice-based AI interactions; usage-based.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://www.descript.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Descript</a></td>
                        <td className="border border-gray-200 px-4 py-3">$20</td>
                        <td className="border border-gray-200 px-4 py-3">AI audio/video editing.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://suno.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Suno</a></td>
                        <td className="border border-gray-200 px-4 py-3">$10</td>
                        <td className="border border-gray-200 px-4 py-3">AI music generation.</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://workspace.google.com/products/gemini/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Gemini Premium (Google Workspace)</a></td>
                        <td className="border border-gray-200 px-4 py-3">$10–$20</td>
                        <td className="border border-gray-200 px-4 py-3">Access to Notebook LM+ and advanced Workspace AI.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3"><a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Claude Code</a></td>
                        <td className="border border-gray-200 px-4 py-3">$10–$100/day (usage-based)</td>
                        <td className="border border-gray-200 px-4 py-3">"Coin-operated" coding agent that can run a $200–$2,000/month tab for software development support.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="budget-tiers" className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-primary">5. Monthly Totals and Budget Tiers</h2>
                <p className="mb-6">
                  Most organizations don't need every service on this list for every employee. Still, it's helpful to see an "all-in" scenario:
                </p>
                
                <div className="space-y-8">
                  <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10">
                    <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                      <Gift className="mr-2 h-5 w-5 text-secondary" />
                      A. Lower-End "Power User" Estimate
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Subscriptions total (lower ranges): <strong className="text-secondary">~$529/month</strong></li>
                      <li>Light orchestration usage ($10/day × 20 days): <strong className="text-secondary">~$200/month</strong></li>
                      <li className="font-bold text-lg">Combined Total: <span className="text-secondary">~$729/month per heavy user</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10">
                    <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                      <Gift className="mr-2 h-5 w-5 text-secondary" />
                      B. Higher-End "Power User" Estimate
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Subscriptions total (upper ranges): <strong className="text-secondary">~$649/month</strong></li>
                      <li>Heavy orchestration usage ($100/day × 20 days): <strong className="text-secondary">~$2,000/month</strong></li>
                      <li className="font-bold text-lg">Combined Total: <span className="text-secondary">~$2,649/month per heavy user</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 border-l-4 border-secondary rounded-r-lg">
                  <p className="font-semibold">
                    Key Insight: If your teams rely on heavy AI agent usage for coding, debugging, and advanced tasks, usage-based fees can quickly become your largest expense.
                  </p>
                </div>
              </div>
            </section>

            <section id="per-employee" className="mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-primary">6. Scaling Up: Per-Employee Budgeting</h2>
                <p className="mb-6">
                  We recommend segmenting your staff based on how heavily they use AI:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-primary">1. Basic User: <span className="text-secondary">~$100/month</span></h3>
                    <p>Needs ChatGPT (e.g., Plus at $20/month), meeting transcription, a few automations.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-primary">2. Semi-Power User: <span className="text-secondary">$300–$500/month</span></h3>
                    <p>Multiple AI tools for advanced tasks, moderate usage of coding or design AI.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-primary">3. Full Power User: <span className="text-secondary">$500–$700/month</span></h3>
                    <p>Heavy use of premium AI subscriptions, possibly advanced dev tools, robust automations.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-primary">4. Engineer / Agent-Orchestrator: <span className="text-secondary">$1,000–$2,500+/month</span></h3>
                    <p>Extensive coding-agent usage, large API calls, specialized enterprise tools.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="practical-tips" className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-8 text-primary">7. Practical Tips: Zero-Based Budgeting & Monthly Reviews</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">7.1 Zero-Based Budgeting Approach</h3>
                    <ul className="list-disc list-inside ml-4 space-y-4">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-secondary/10 text-secondary p-1 mr-2 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </span>
                        <div>
                          <strong>Avoid Annual Subscriptions:</strong> The AI landscape evolves so rapidly that committing to year-long contracts may prevent you from pivoting to superior tools or renegotiating better terms.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-secondary/10 text-secondary p-1 mr-2 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </span>
                        <div>
                          <strong>Add/Remove Tools Fluidly:</strong> Sign up for tools when you have a specific need, and turn them off if they're no longer delivering value. The freedom to iterate monthly can keep your stack fresh and cost-effective.
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">7.2 Monthly Review Process</h3>
                    <ol className="list-decimal list-inside ml-4 space-y-6">
                      <li>
                        <strong className="text-primary">Set a Recurring CFO Check-In</strong>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                          <li>Schedule a monthly meeting to review every AI vendor and subscription line by line.</li>
                          <li>Sort expenses from highest to lowest to see where the budget is most heavily allocated.</li>
                        </ul>
                      </li>
                      <li>
                        <strong className="text-primary">Justify Each Expense</strong>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                          <li>Ask the question, "Would I miss this tool if it were gone?" or "Did this tool enable a result that justifies its cost?"</li>
                          <li>Gather feedback from the actual users if you're unsure.</li>
                          <li>If the answer is "no," consider pausing or canceling that subscription.</li>
                        </ul>
                      </li>
                      <li>
                        <strong className="text-primary">Track New Tools & Free Trials</strong>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                          <li>AI startups pop up constantly; it's worth experimenting.</li>
                          <li>Keep an eye on free trials or one-month usage to test ROI quickly without a long-term lock-in.</li>
                        </ul>
                      </li>
                      <li>
                        <strong className="text-primary">Empower Team Leaders</strong>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                          <li>Encourage department heads or team leads to do the same exercise with their teams before finalizing each month's budget.</li>
                          <li>This ensures all AI spending is intentional and aligns with real, on-the-ground needs.</li>
                          <li>Important: ensure ~decentralized IT purchasing decisions still comply with corporate security and other policies; work with IT leadership to streamline assessment and approval processes and delegate decision-making authority and experimentation as much as you prudently can to folks on the "shop floor"</li>
                        </ul>
                      </li>
                    </ol>
                    <div className="mt-6 p-4 bg-gray-50 border-l-4 border-secondary rounded-r-lg italic">
                      <p>
                        <strong>Pro Tip:</strong> Tools you rely on every day (e.g., essential chatbots, daily transcription) will quickly prove their worth. Everything else should face monthly scrutiny to ensure maximum ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-primary">8. Conclusion & Next Steps</h2>
                <p className="mb-6">
                  AI is reshaping how businesses operate—from the way we schedule meetings to how we build software. By budgeting correctly and providing the right tools, you can increase efficiency, reduce manual work, and empower your team to get stuff done faster.
                </p>
                
                <div className="bg-secondary/10 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Ready to Implement?</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li><strong>Identify Core vs. Optional Tools:</strong> Not every employee needs every subscription.</li>
                    <li><strong>Adopt a Zero-Based Budget:</strong> Evaluate each line item every month.</li>
                    <li><strong>Pilot, Measure, Scale:</strong> Start small with promising new tools, measure ROI, and expand if they deliver.</li>
                  </ol>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-secondary/20 to-secondary/5 p-8 rounded-xl mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-primary">Get a Personalized AI Tool Recommendation</h2>
              <p className="mb-6">
                Want to know which AI tools would best fit your specific business needs and budget? Schedule a free consultation with our team or speak with our AI assistant for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                  className="bg-secondary hover:bg-secondary/90 gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border border-secondary text-secondary hover:bg-secondary/10 gap-2"
                  onClick={() => window.location.href = "tel:+18482610259"}
                >
                  <Phone className="h-4 w-4" />
                  Speak with our AI Assistant
                </Button>
              </div>
            </div>

            <footer className="border-t pt-8 text-sm text-gray-600">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">About GSD at Work</h3>
                  <p>
                    GSD at Work specializes in strategic AI adoption, equipping teams with the right processes and tools to thrive in a rapidly changing digital landscape. Whether you're an emerging startup or a growing enterprise, we help you streamline operations, boost productivity, and deliver results—fast.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Connect with Us</h3>
                  <p className="space-y-1">
                    <strong>Website:</strong> <a href="https://gsdat.work" className="text-secondary hover:underline">GSDat.work</a><br />
                    <strong>Email:</strong> <a href="mailto:christian@gsdat.work" className="text-secondary hover:underline">christian@gsdat.work</a><br />
                    <strong>Social:</strong> <a href="https://www.linkedin.com/company/100624720" className="text-secondary hover:underline">LinkedIn</a>
                  </p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <p className="italic text-xs mb-2">
                  Disclaimer: All pricing and tool recommendations reflect estimated costs as of early 2025. Actual costs and tool availability are subject to change. Always review each provider's terms for the most accurate and up-to-date information.
                </p>
                <p className="text-xs">
                  © 2025 GSD at Work LLC. All rights reserved.
                </p>
              </div>
            </footer>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIToolingReport;
