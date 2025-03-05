import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Zap, ShieldCheck, TrendingUp, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Case study data structure
const casesData = {
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
  "alena-solutions-powerline": {
    title: "How Alena Solutions Gains Peace of Mind—and $50K Upsells—with Powerline",
    subtitle: "AI-powered insights for better client relationships and business growth",
    industry: "Tech & Agency Services",
    challenge: "The CEO couldn't be on every client call, risking missed opportunities and hidden issues.",
    solution: "Implemented Powerline as an AI Chief of Staff to monitor calls and surface insights.",
    ceo: "Asbed",
    companyLogo: "/lovable-uploads/4eef189d-40ff-4a41-832f-b623cc966aed.png",
    ceoImage: "/lovable-uploads/ec07a82f-a0c9-47f1-b3b5-f6370f5650b3.png",
    results: [
      "Spotted repeated under-estimation before a big client blow-up",
      "Snagged a new $50K marketing retainer",
      "Prevented a potential security breach after offboarding",
      'Freed the CEO from note-taking and constant "what\'s happening?" anxiety',
    ],
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4">Company Background</h2>
          <p>Alena Solutions, a growing technology and agency services firm, helps clients across multiple industries build and launch products at scale. CEO Asbed manages a global team but struggles to keep tabs on every client conversation. "I can't be on every call, and I never want to miss a risk or an opportunity," he explains.</p>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold mb-4">The Challenge</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Visibility Gaps:</strong> Critical updates (like scope expansions or timeline risks) weren't always shared until they became urgent.</li>
            <li><strong>Missed Opportunities:</strong> Potential upsells often hid in casual remarks—remarks the CEO wouldn't hear if he wasn't in the room.</li>
            <li><strong>Psychological Overload:</strong> As the agency scaled, so did the worry. "People only bring me the good news or the big fires. What about everything in between?"</li>
          </ul>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold mb-4">Why Powerline</h2>
          <p>After hearing about Powerline directly from its founder (rather than a typical colleague referral), Alena Solutions decided to give the "AI Chief of Staff" a try:</p>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Daily Pulse:</strong> Each morning, a concise audio brief summarizes new client asks, internal risks, and recommended actions.</li>
            <li><strong>Spark Line:</strong> The CEO can call a dedicated number, ask "What do I focus on first?" or "Draft me an email," and get instant help.</li>
            <li><strong>Peace of Mind:</strong> "At last, I have something that surfaces hidden issues—even if I'm not on the call," says Asbed.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold mb-4">Implementation</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Fireflies + Powerline:</strong> Alena Solutions already used Fireflies.ai to record important Zoom/Google Meet calls. Connecting those transcripts to Powerline took minutes.</li>
            <li><strong>Select Role Adoption:</strong> Engineers often said "no" to AI notetakers, so the CEO focused on account managers and project leads—where the biggest client discussions happen.</li>
            <li><strong>Multilingual Bonus:</strong> Many internal calls mix English, Armenian, and Arabic. "I was stunned it picked up nearly everything," notes Asbed.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold mb-4">Results: Insights, Upsells & True Peace of Mind</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold flex items-center text-primary">
                <ShieldCheck className="h-5 w-5 mr-2" />
                Prevented Blind Spots
              </h3>
              <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Team Accountability:</strong> The system flagged a developer who consistently underestimated tasks—before the client complained.</li>
                <li><strong>Security SOP Fix:</strong> It also detected that an offboarded contractor might still have backend access. Even a "false alarm" led to better QA policies.</li>
                <li><strong>Silent Concern:</strong> Powerline noticed a partner going radio-silent mid-call; the client's deflated tone suggested deeper friction. "I addressed it right away," says Asbed.</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold flex items-center text-primary">
                <TrendingUp className="h-5 w-5 mr-2" />
                Unlocked a $50K Upsell
              </h3>
              <p class="mt-2">A new VP casually hinted she had $3–4K/month to spend on extra marketing. "Spark basically told me to follow up—right now," says Asbed. "We closed that deal within days, and I might have missed it if I wasn't on the call."</p>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold flex items-center text-primary">
                <Zap className="h-5 w-5 mr-2" />
                Strengthened Relationships
              </h3>
              <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Thoughtful Follow-Ups:</strong> One client admired the CEO's sweater on a cold day. Powerline recommended sending them a similar one as a friendly gesture.</li>
                <li><strong>Kudos & Team Culture:</strong> It flags when account managers go "above and beyond." "I'm sending more thank-you emails to my team than ever—stuff I'd normally overlook," says Asbed.</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold flex items-center text-primary">
                <CheckCircle className="h-5 w-5 mr-2" />
                Reduced Overwhelm
              </h3>
              <p class="mt-2"><strong>Confidence to Disconnect:</strong> On a hectic Friday, with family in the ER, Asbed checked Powerline's morning pulse. No urgent fires. He closed his laptop without stress. "That peace of mind alone is priceless."</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold mb-4">Looking Ahead</h2>
          <p>Alena Solutions plans to onboard more account managers while letting Powerline handle the day-to-day call intelligence. "We're finally building a real system—one that doesn't rely on me being the bottleneck," says Asbed. Eventually, he might expand Powerline usage to scheduling, emailing, and advanced AI research as the product evolves.</p>
        </section>
        
        <blockquote class="border-l-4 border-secondary pl-4 py-3 my-6">
          <p class="italic text-lg">"If you shut this down tomorrow, I'd be really upset. I rely on it daily. Powerline is the first tool I've tried that truly acts like a real-time 'chief of staff'—and I've canceled a bunch of other apps because of it."</p>
          <footer class="mt-2">
            <strong>— Asbed, CEO of Alena Solutions</strong>
          </footer>
        </blockquote>
      </div>
    `,
  },
  "startup-ai-acceleration": {
    title: "Startup AI Acceleration",
    description: "2,000% productivity improvement in core operations",
    industry: "Technology",
    tags: ["Productivity", "Startup", "Growth"],
    readTime: "4 min read",
  },
  // Add more case studies as needed
};

const CaseStudy = () => {
  const { id } = useParams();
  const caseStudy = casesData[id as keyof typeof casesData];

  if (!caseStudy) {
    return (
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
    );
  }

  // Special template for Alena Solutions case study
  if (id === 'alena-solutions-powerline') {
    return (
      <div className="min-h-screen bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link to="/cases" className="inline-block mb-8">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cases
            </Button>
          </Link>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-primary mb-2">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{caseStudy.subtitle}</p>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-2/3">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-semibold mb-4">At a Glance</h2>
                  <dl className="grid grid-cols-1 gap-4">
                    <div>
                      <dt className="font-medium text-gray-900 flex items-center">
                        <User className="h-4 w-4 mr-2" />CEO
                      </dt>
                      <dd className="text-gray-600">{caseStudy.ceo}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />Industry
                      </dt>
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
                  </dl>
                </div>
              </div>
              
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg">
                  <img 
                    src={caseStudy.companyLogo} 
                    alt="Alena Solutions Logo" 
                    className="max-h-28 object-contain" 
                  />
                </div>
                <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg">
                  <img 
                    src={caseStudy.ceoImage} 
                    alt="CEO Asbed" 
                    className="w-32 h-32 object-cover rounded-full" 
                  />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Key Wins</h2>
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

            <div className="mt-8 prose" dangerouslySetInnerHTML={{ __html: caseStudy.content }}></div>
          </article>
        </div>
      </div>
    );
  }

  // Default template for other case studies
  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link to="/cases" className="inline-block mb-8">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{caseStudy.subtitle}</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Overview</h2>
            <dl className="grid grid-cols-1 gap-4">
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

          <div className="mt-8 prose">
            {caseStudy.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default CaseStudy;
