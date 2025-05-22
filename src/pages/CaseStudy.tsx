
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { generateServicePageStructuredData } from "@/lib/seo-utils";
import { Layout } from "@/components/Layout";

// Define a TypeScript interface for our case study data structure
interface CaseStudy {
  title: string;
  subtitle: string;
  industry: string;
  client?: string; // Make client optional
  clientUrl?: string; // Add client URL
  challenge: string;
  solution: string;
  results: string[];
  content: string;
  images?: string[]; // Add images array
}

// This is our case studies data structure
const casesData: Record<string, CaseStudy> = {
  "enterprise-ai-transformation": {
    title: "Enterprise AI Transformation",
    subtitle: "30-40% cost reduction in target processes",
    industry: "Manufacturing",
    challenge: "A Fortune 500 manufacturing company needed to reduce operational costs while maintaining quality standards.",
    solution: "Implemented AI-driven process optimization across key manufacturing lines.",
    results: [
      "35% reduction in operational costs",
      "20% improvement in quality control accuracy",
      "50% faster decision-making in production planning",
    ],
    content: `
      [Your detailed case study content will go here. You can format it with markdown or HTML.]
      
      This is a placeholder for the full case study content. When you're ready to add your real case studies,
      you can replace this with the actual content from your meeting transcripts and Google Docs.
    `,
  },
  "othership-ai-partnership": {
    title: "Othership Accelerates Growth and Efficiency Across Operations, Recruiting, and Creative Development with AI Partnership",
    subtitle: "AI implementation drives significant efficiency gains in key areas",
    industry: "Wellness & Social Bathhouse",
    client: "Othership (Robbie Bent, CEO & Team)",
    clientUrl: "https://www.othership.us",
    challenge: "Rapid growth leading to operational bottlenecks, inefficiencies in key processes (recruiting, construction management, creative development), and a desire to leverage AI for strategic advantage.",
    solution: "Targeted AI adoption coaching and implementation sprints led by Christian Ulstrup, GSD at Work LLC Founder & Principal, focusing on practical application, workflow automation, and strategic AI integration.",
    results: [
      "Significant efficiency gains in recruitment screening",
      "Enhanced productivity in creative content generation", 
      "Established frameworks for AI-driven operational analysis",
      "Empowered team members with practical AI skills, saving time and reducing cognitive load"
    ],
    images: [
      "/lovable-uploads/283d4388-2ef1-45f2-a71e-beb881d9d1e5.png",
      "/lovable-uploads/644343d3-9cb9-4381-b623-c7cf3474f0a0.png"
    ],
    content: `
      <h2 class="text-2xl font-semibold mt-8 mb-4">Executive Summary</h2>
      <p class="mb-4">
        Othership, a rapidly expanding social bathhouse experience, faced the classic challenges of scaling: operational bottlenecks, time-consuming manual processes, and the need to maintain quality and efficiency across diverse functions like recruitment, construction, and creative development. CEO Robbie Bent and his team partnered with AI adoption consultant Christian Ulstrup to identify high-impact areas where AI could provide immediate value. Through a series of collaborative workshops and hands-on coaching sessions tailored to specific departmental needs (Growth/Partnerships, Recruiting, Construction, Creative), Othership implemented practical AI workflows. Key outcomes included reducing pre-screening cycle time for a key open role, accelerating class creation by over 2x, improving communication efficiency via AI-assisted drafting and dictation, and establishing processes for leveraging AI in construction analysis and operational oversight. The engagement empowered the Othership team with tangible AI skills and delivered measurable productivity improvements.
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">About Othership</h2>
      <p class="mb-4">
        Othership is pioneering the concept of the social bathhouse, creating unique wellness experiences centered around sauna, ice baths, and community connection. With popular locations and ambitious expansion plans, the company is navigating rapid growth while striving to maintain its unique brand ethos and operational excellence.
      </p>
      
      <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/lovable-uploads/283d4388-2ef1-45f2-a71e-beb881d9d1e5.png" 
             alt="Othership bathhouse with ice bath and sauna" 
             class="w-full h-auto rounded-lg shadow-md"
             width="600" 
             height="400" />
        <img src="/lovable-uploads/644343d3-9cb9-4381-b623-c7cf3474f0a0.png" 
             alt="Othership sauna interior" 
             class="w-full h-auto rounded-lg shadow-md"
             width="600" 
             height="400" />
      </div>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Challenge: Scaling Pains and Untapped AI Potential</h2>
      <p class="mb-4">
        As Othership grew, CEO Robbie Bent and his leadership team identified several key areas where existing processes were becoming strained:
      </p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>
          <span class="font-medium">Operational Inefficiencies:</span> Othership's Director of Partnerships, managing hundreds of partnerships, spent 5-6 hours daily on email, manually handling intro offer requests, donation tracking, and event coordination. Manual data checks between systems like BrandBot and MarianaTek were time-consuming and prone to error.
        </li>
        <li>
          <span class="font-medium">Recruitment Bottlenecks:</span> An Area Manager faced challenges scaling the hiring process for roles like Assistant Ship Captain. Manual pre-screening by VAs, while cost-effective per hour, introduced delays (up to a week cycle time). Building a high-quality talent pipeline proactively was also a significant challenge.
        </li>
        <li>
          <span class="font-medium">Complex Construction Management:</span> The Head of Expansion managed complex build-outs with large teams and vast amounts of information scattered across documents, drawings, and meeting minutes. Key pain points included delays in getting accurate cost estimates and the risk of repeating past mistakes due to siloed knowledge.
        </li>
        <li>
          <span class="font-medium">Time-Intensive Creative Development:</span> One Co-founder found the process of creating Othership's unique class experiences took months, involving extensive research and painstaking scriptwriting, impacting the ability to scale content creation.
        </li>
      </ul>
      <p class="mb-4">
        Robbie recognized the potential of AI but needed a practical, results-oriented approach to integrate it effectively without disrupting momentum.
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Solution: Targeted AI Adoption Sprints with Christian Ulstrup</h2>
      <p class="mb-4">
        Christian partnered with Othership, employing a hands-on, outcome-driven coaching methodology focused on immediate application and tangible results. The approach involved:
      </p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>
          <span class="font-medium">Discovery & Prioritization:</span> Initial sessions focused on understanding Othership's core objectives (growth, efficiency, risk mitigation) and identifying the highest-priority pain points across departments.
        </li>
        <li>
          <span class="font-medium">Targeted Workshops:</span> Christian conducted dedicated 2-hour working sessions with key team members focused on their specific workflows and challenges.
        </li>
        <li>
          <span class="font-medium">Practical Tooling & Techniques:</span> Introduced and coached the team on leveraging readily available AI tools like ChatGPT (Plus & Pro), dictation software (Wispr Flow), meeting analysis tools (Fathom, Fireflies), automation platforms (Zapier), and networking tools (Happenstance). Emphasis was placed on using the right tool (and the most powerful available models like GPT-4.5/o1 Pro) for the specific task.
        </li>
        <li>
          <span class="font-medium">Workflow Co-Creation:</span> Collaboratively designed and implemented AI-powered workflows, such as automating recruitment screening using Zapier, Replit, and ChatGPT, or using AI to draft emails and analyze meeting transcripts.
        </li>
        <li>
          <span class="font-medium">Skills Transfer:</span> Focused on empowering the Othership team to use these tools independently, emphasizing techniques like effective prompting (context + intent), iterative refinement, and leveraging dictation for speed and reduced cognitive load.
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Implementation: Tackling Bottlenecks Department by Department</h2>

      <div class="mt-6 mb-6">
        <h3 class="text-xl font-semibold mb-2">Growth & Partnerships</h3>
        <p class="mb-2">
          <span class="font-medium">Challenge:</span> 5-6 hours daily email volume, manual tracking of partnerships, intro offers, and donations.
        </p>
        <p class="mb-2">
          <span class="font-medium">AI Application:</span> Christian coached the Partnerships Director on using ChatGPT and Fathom transcripts to rapidly draft personalized follow-up emails after meetings ("That's insane... That's actually so, so good," she noted about an AI-drafted summary). They explored using Wispr Flow for faster email composition and identified opportunities to automate donation tracking and potentially intro offer verification using Zapier and Notion. The goal was set to reduce email time to ~1 hour daily.
        </p>
        <p class="mb-4">
          <span class="font-medium">Outcome:</span> Shannon gained time-saving techniques for communication and identified clear paths for automating repetitive data entry and email responses, freeing up time for strategic growth initiatives like corporate ambassador activation. (Rated session 4/5, citing Zapier/Brand Bot integration as the path to a 5).
        </p>
      </div>

      <div class="mt-6 mb-6">
        <h3 class="text-xl font-semibold mb-2">Recruiting</h3>
        <p class="mb-2">
          <span class="font-medium">Challenge:</span> Manual, time-delayed pre-screening process.
        </p>
        <p class="mb-2">
          <span class="font-medium">AI Application:</span> Christian worked with an Area Manager to build and deploy a Zapier workflow automating the Assistant Ship Captain screening process. This involved:
        </p>
        <ul class="list-disc pl-6 mb-2 space-y-1">
          <li>Triggering on new Notion form submissions.</li>
          <li>Converting resumes (PDFs via Cloud Convert, text extraction via Replit).</li>
          <li>Using ChatGPT via Zapier's AI step to analyze the application/resume against the job description, providing a pass/decline verdict and reasoning.</li>
          <li>Updating the Notion tracker automatically.</li>
          <li>Sending automated emails (via the Manager's Gmail for personalization) to candidates (decline notification or Calendly link for passed candidates) after a 1-hour delay to maintain a human touch.</li>
          <li>Notifying the Manager via Slack.</li>
        </ul>
        <p class="mb-4">
          <span class="font-medium">Outcome:</span> Successfully launched an automated screening workflow, drastically reducing the cycle time goal from one week to potentially ~1 hour. Manager gained a templatized, AI-powered Zapier pre-screening pipeline that can be adapted for other roles by duplicating and editing on Zapier and identified how to further refine the AI's decision-making by providing examples of good/bad candidates. (Rated session 5/5: "Very straightforward and also like, surprisingly, like, such a time save... It's just kind of cool to see it in action").
        </p>
      </div>

      <div class="mt-6 mb-6">
        <h3 class="text-xl font-semibold mb-2">Construction</h3>
        <p class="mb-2">
          <span class="font-medium">Challenge:</span> Managing complex projects, needing faster cost estimates, mitigating risks by leveraging past project data, organizing vast amounts of information.
        </p>
        <p class="mb-2">
          <span class="font-medium">AI Application:</span> Christian introduced the Construction Manager to ChatGPT, focusing on practical applications:
        </p>
        <ul class="list-disc pl-6 mb-2 space-y-1">
          <li>Analyzing meeting transcripts (Fathom) to extract action items, deliverables, and due dates into structured tables.</li>
          <li>Using AI as a thought partner to identify potential risks or overlooked requirements (e.g., steam room requirements).</li>
          <li>Leveraging Deep Research for specific code/regulatory questions.</li>
          <li>Exploring cost estimation by providing project context (plans, LOIs, transcripts) to ChatGPT o1 model.</li>
          <li>Setting up a dedicated ChatGPT Project for the Upper East Side location to centralize context (within current limitations).</li>
        </ul>
        <p class="mb-4">
          <span class="font-medium">Outcome:</span> The Construction Manager learned the fundamentals of using ChatGPT for analysis and information extraction, successfully generating actionable tables from meeting transcripts ("This is amazing... Perfect"). He identified high-value use cases for AI in understanding requirements and improving planning, despite limitations in current knowledge base integration technology. (Rated session 4-5/5: "Definitely gave good start point for sure... helpful information").
        </p>
      </div>

      <div class="mt-6 mb-6">
        <h3 class="text-xl font-semibold mb-2">Creative Development</h3>
        <p class="mb-2">
          <span class="font-medium">Challenge:</span> Months-long class creation process, desire to improve research depth and scriptwriting efficiency/quality.
        </p>
        <p class="mb-2">
          <span class="font-medium">AI Application:</span> Christian coached the Co-founder on leveraging ChatGPT (specifically GPT-4.5 for prose, o1 Pro for reasoning) and Wispr Flow:
        </p>
        <ul class="list-disc pl-6 mb-2 space-y-1">
          <li>Using AI for deep research and ideation (e.g., generating visualization meditation ideas).</li>
          <li>Providing detailed context (existing classes, templates, specific arc/flow instructions) to guide AI scriptwriting.</li>
          <li>Iteratively refining AI-generated prose section by section.</li>
          <li>Significantly accelerating the writing process through dictation (Whisper Flow).</li>
        </ul>
        <p class="mb-4">
          <span class="font-medium">Outcome:</span> The Co-founder reported a 2-2.5x increase in class writing efficiency, finding the process significantly more enjoyable and less cognitively draining. AI proved highly effective at generating ideas and drafting high-quality prose, allowing him to focus on structure and refinement. Dictation was a "game changer," increasing productivity "fourfold" for communication tasks. (High enthusiasm: "Legendary... insane... Hugely instrumental").
        </p>
      </div>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Key Results & Outcomes Across Othership</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>
          <span class="font-medium">Increased Operational Efficiency:</span> Demonstrated potential for significant time savings in email management, recruitment screening, and creative development.
        </li>
        <li>
          <span class="font-medium">Empowered Team:</span> Team members gained hands-on experience and confidence using practical AI tools (ChatGPT, Whisper Flow, Zapier, Fathom analysis) integrated into their daily workflows.
        </li>
        <li>
          <span class="font-medium">Reduced Cognitive Load:</span> AI assistance in tasks like drafting emails, summarizing meetings, and generating creative content freed up mental bandwidth for higher-level strategic thinking. Harrison noted it removed "cognitive strain."
        </li>
        <li>
          <span class="font-medium">Improved Communication:</span> AI-generated meeting summaries and email drafts improved clarity and speed of communication, both internally and externally.
        </li>
        <li>
          <span class="font-medium">Established Foundation for AI:</span> Created specific AI workflows (recruiting automation) and established best practices (using powerful models, providing context, iterative refinement) for future AI integration.
        </li>
        <li>
          <span class="font-medium">Identified Future Opportunities:</span> Pinpointed areas for further AI application, including advanced knowledge management, automated customer/vendor interactions (VAPI), and proactive talent sourcing.
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Direct Quotes</h2>
      <div class="bg-gray-50 p-6 rounded-lg mb-8 space-y-4">
        <blockquote class="italic border-l-4 border-gray-300 pl-4">
          "What it helps for me to relieve is like the beautiful prose... This tool is hugely instrumental... It feels more enjoyable as a result. Doesn't feel as like just like intense and just like a draw of my cognitive strain... [Dictation increased productivity] even like fourfold. It's insane."
          <footer class="font-medium mt-2">— Harrison</footer>
        </blockquote>
        
        <blockquote class="italic border-l-4 border-gray-300 pl-4">
          "[The automation is] very straightforward and also like, surprisingly, like, such a time save... It's just kind of cool to see it in action." (Rated session 5/5)
          <footer class="font-medium mt-2">— Kelsea</footer>
        </blockquote>
        
        <blockquote class="italic border-l-4 border-gray-300 pl-4">
          "[AI-drafted meeting follow-up] is insane... That's actually so, so good." (Rated session 4/5)
          <footer class="font-medium mt-2">— Shannon</footer>
        </blockquote>
        
        <blockquote class="italic border-l-4 border-gray-300 pl-4">
          "[Generating table from transcript] This is amazing... Perfect... Definitely gave good start point for sure... helpful information." (Rated session 4-5/5)
          <footer class="font-medium mt-2">— Chad</footer>
        </blockquote>
        
        <blockquote class="italic border-l-4 border-gray-300 pl-4">
          "[Seeing Shannon's results] It's amazing when you have, like, your first moment and you're just like, what?... Wait until it's also, like, trained on your voice and, like, we have the templates in and it's just gonna be... It's going to be so great."
          <footer class="font-medium mt-2">— Robbie (Observing)</footer>
        </blockquote>
      </div>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion: A Practical Path to AI-Powered Scaling</h2>
      <p class="mb-4">
        Othership's partnership with Christian via GSD at Work demonstrates the power of a pragmatic, results-driven approach to AI adoption. By focusing on specific, high-impact use cases within individual workflows and empowering team members through hands-on coaching, Othership achieved measurable efficiency gains and established a strong foundation for leveraging AI as they continue to scale. While acknowledging the current limitations of AI technology (especially around unified knowledge bases), the engagement proved that significant value can be unlocked today by strategically integrating the right tools and techniques. Othership is now better positioned to navigate its rapid growth with enhanced productivity and data-driven insights across the organization.
      </p>
    `,
  },
};

const CaseStudy = () => {
  const { id } = useParams();
  const caseStudy = casesData[id as keyof typeof casesData];

  if (!caseStudy) {
    return (
      <Layout>
        <SEOHead 
          title="Case Study Not Found"
          description="The requested case study could not be found. Browse our other AI implementation success stories and case studies."
          canonicalUrl={`https://gsdat.work/cases/${id}`}
        />
        <div className="min-h-screen bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-primary">Case Study Not Found</h1>
            <Link to="/cases" className="mt-8 inline-block">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cases
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Generate structured data for the case study  
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": caseStudy.title,
      "description": caseStudy.subtitle,
      "author": {
        "@type": "Person",
        "name": "Christian Ulstrup",
        "jobTitle": "AI Implementation Expert",
        "url": "https://www.linkedin.com/in/christianulstrup/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GSD at Work",
        "url": "https://gsdat.work"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://gsdat.work/cases/${id}`
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "articleSection": "Case Studies",
      "keywords": `AI implementation, ${caseStudy.industry}, business transformation, case study`,
      "about": {
        "@type": "Thing",
        "name": "AI Implementation",
        "description": "Artificial Intelligence implementation in business operations"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gsdat.work/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Case Studies",
          "item": "https://gsdat.work/cases"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": caseStudy.title,
          "item": `https://gsdat.work/cases/${id}`
        }
      ]
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title={`${caseStudy.title} | AI Implementation Case Study`}
        description={`${caseStudy.subtitle} - Learn how we helped a ${caseStudy.industry} company achieve remarkable results through strategic AI implementation.`}
        canonicalUrl={`https://gsdat.work/cases/${id}`}
        ogType="article"
        keywords={`AI case study, ${caseStudy.industry} AI, AI implementation, business transformation, AI consulting, practical AI solutions`}
        structuredData={structuredData}
        author="Christian Ulstrup"
      />
      <div className="min-h-screen bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/cases">
              <Button variant="secondary" className="text-white bg-secondary hover:bg-secondary/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cases
              </Button>
            </Link>
            
            {caseStudy.clientUrl && (
              <a 
                href={caseStudy.clientUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
              >
                <span className="hidden sm:inline">Visit {caseStudy.client?.split(' ')[0] || 'Client'}</span>
                <ExternalLink className="h-4 w-4" />
                <img 
                  src="/lovable-uploads/7c90134e-205f-43e0-a801-914a4c367808.png" 
                  alt="Othership Logo" 
                  className="h-8 w-auto"
                  width="32"
                  height="32"
                />
              </a>
            )}
          </div>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-primary mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{caseStudy.subtitle}</p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Quick Overview</h2>
              <dl className="grid grid-cols-1 gap-4">
                {caseStudy.client && (
                  <div>
                    <dt className="font-medium text-gray-900">Client</dt>
                    <dd className="text-gray-600">{caseStudy.client}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-medium text-gray-900">Industry</dt>
                  <dd className="text-gray-600">{caseStudy.industry}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Challenge</dt>
                  <dd className="text-gray-600">{caseStudy.challenge}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Solution</dt>
                  <dd className="text-gray-600">{caseStudy.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Date</dt>
                  <dd className="text-gray-600">May 2025</dd>
                </div>
              </dl>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
            <ul className="space-y-2 mb-8">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-secondary flex-shrink-0 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">{result}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          </article>
          
          {/* Additional call to action */}
          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Ready to transform your business with AI?</h2>
            <p className="mb-6 text-gray-700">
              Learn how we can help you implement practical AI solutions that drive real results, just like we did for Othership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank", "noopener,noreferrer")}
              >
                Book a Strategy Call
              </Button>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10"
                onClick={() => window.location.href = "/ai-tooling-report"}
              >
                Read our AI Tooling Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudy;
