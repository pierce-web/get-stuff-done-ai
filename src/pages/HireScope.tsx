import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Github, Star, TrendingUp, Users, Zap, DollarSign, Search, Award, FileText, Target, Brain, Phone, Shield } from "lucide-react";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { generateServicePageStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";
import { shadows, gradients, buttonStyles, animations, borderRadius, spacing } from "@/lib/design-tokens";

const HireScope = () => {
  // Current date for dateModified schema property
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate structured data
  const serviceStructuredData = generateServicePageStructuredData(
    "HireScope - AI-Powered Candidate Analysis for Greenhouse ATS",
    "Analyze hundreds of job applications in minutes with HireScope. Uses OpenAI's advanced reasoning models to evaluate every candidate in your Greenhouse ATS, helping recruiters find hidden gems among rejected applicants.",
    "https://gsdat.work/hirescope",
    "https://gsdat.work/lovable-uploads/621fea6b-e235-4db5-99a0-4570284b0f48.png",
    "GSD at Work LLC",
    "Free (Open Source)"
  );

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "What is HireScope?",
      answer: "HireScope is an open-source AI-powered candidate analysis tool that integrates with Greenhouse ATS. It uses OpenAI's advanced reasoning models to evaluate every candidate, helping recruiters discover hidden gems - previously rejected applicants who score highly in AI evaluation."
    },
    {
      question: "How much does HireScope cost?",
      answer: "HireScope is completely free and open source. The only costs are the API usage fees: approximately $0.02 per candidate analyzed (e.g., ~$20 to analyze 1,000 candidates). You'll need your own Greenhouse API key and OpenAI API key."
    },
    {
      question: "What are 'hidden gems' in recruiting?",
      answer: "Hidden gems are high-quality candidates who were previously rejected but score 70+ in AI evaluation. In real-world testing, we found that 20-40% of top AI-recommended candidates were hidden gems who deserved a second look."
    },
    {
      question: "How does HireScope integrate with Greenhouse?",
      answer: "HireScope connects directly to your Greenhouse account via the Harvest API. It fetches all candidates and their attachments, processes resumes and cover letters, and generates comprehensive reports with direct links back to candidate profiles in Greenhouse."
    },
    {
      question: "What kind of analysis does HireScope provide?",
      answer: "HireScope provides 0-100 scoring across four criteria: Skills & Experience Match (40 points), Achievements & Impact (30 points), Culture & Industry Fit (20 points), and Growth Potential (10 points). It generates markdown reports, CSV summaries, and JSON data exports."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <KeywordOptimizedSEO 
        title="HireScope - Free AI Candidate Analysis for Greenhouse ATS | GSD at Work"
        content="Discover hidden gems in your applicant pool with HireScope. Free, open-source AI tool that analyzes all Greenhouse candidates in minutes. 20-40% of top candidates are previously rejected applicants. Only ~$0.02 per candidate."
        canonicalUrl="https://gsdat.work/hirescope"
        pageType="service"
        structuredData={[serviceStructuredData, faqStructuredData]}
        ogType="website"
        ogImage="https://gsdat.work/og-image.png"
        ogImageAlt="HireScope - Find Hidden Gems in Your Applicant Pool - Free Open Source AI Tool"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-28 pb-20 ${gradients.backgroundSubtle}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-sm">Open Source</Badge>
              <Badge variant="outline" className="text-sm">
                <Github className="w-3 h-3 mr-1" />
                MIT License
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Find Hidden Gems in Your Applicant Pool
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              HireScope uses AI to analyze <strong>every candidate</strong> in your Greenhouse ATS - including rejected ones. 
              Discover the 20-40% of top candidates you might have missed.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                🎯 Real Discovery from 1,049 Candidates:
              </p>
              <p className="text-blue-800">
                "We found 176 hidden gems - high-quality candidates who had been rejected but scored 70+ in our AI evaluation. 
                The #1 highest-scoring candidate (92/100) had been rejected after phone screen!"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                onClick={() => window.open("https://github.com/culstrup/hirescope", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${buttonStyles.outline.primary}`}
                onClick={() => window.open("https://github.com/culstrup/hirescope#-quick-start", "_blank")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Quick Start Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className={`py-16 bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className={`text-center ${shadows.cardEffect}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold text-primary">20-40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Hidden gems found in rejected candidates</p>
              </CardContent>
            </Card>
            
            <Card className={`text-center ${shadows.cardEffect}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold text-primary">~$0.02</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Cost per candidate analyzed</p>
              </CardContent>
            </Card>
            
            <Card className={`text-center ${shadows.cardEffect}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold text-primary">0-100</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">AI scoring with detailed reasoning</p>
              </CardContent>
            </Card>
            
            <Card className={`text-center ${shadows.cardEffect}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold text-primary">Minutes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Not hours to analyze all candidates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Powerful Features for Smarter Hiring
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Analysis</h3>
                  <p className="text-gray-600">
                    Evaluates ALL candidates, including rejected ones. Never miss a great candidate again.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Scoring</h3>
                  <p className="text-gray-600">
                    Uses OpenAI's o3 model for detailed 0-100 scoring with transparent reasoning.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                  <p className="text-gray-600">
                    ~$0.02 per candidate. Analyze 1,000 candidates for approximately $20.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Reports</h3>
                  <p className="text-gray-600">
                    Markdown reports, CSV summaries, and JSON exports with direct Greenhouse links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-20 bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How HireScope Works
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Connect to Greenhouse",
                  description: "HireScope connects to your Greenhouse account via API to fetch all candidates and their attachments."
                },
                {
                  step: "2",
                  title: "Process Documents",
                  description: "Extracts text from resumes (PDF/DOCX) and cover letters to build comprehensive candidate profiles."
                },
                {
                  step: "3",
                  title: "AI Evaluation",
                  description: "Sends profiles to OpenAI for scoring across skills, achievements, culture fit, and growth potential."
                },
                {
                  step: "4",
                  title: "Smart Ranking",
                  description: "Ranks candidates and identifies 'hidden gems' - high-scoring candidates who were previously rejected."
                },
                {
                  step: "5",
                  title: "Generate Reports",
                  description: "Creates detailed reports with scores, insights, and direct links back to Greenhouse profiles."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete AI Recruiting Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Complete AI-Powered Hiring Workflow
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              HireScope is most powerful when combined with a comprehensive AI recruiting strategy. 
              Here's how leading companies are hiring the right person <strong>10 times faster</strong>.
            </p>
            
            {/* Workflow Steps */}
            <div className="space-y-8">
              {/* Step 1: Job Description Excellence */}
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <CardTitle>Job Description Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Start with precision. Use state-of-the-art AI models like o3 Pro or Claude Opus combined with meeting transcripts 
                    from tools like ReadAI, Fireflies, or your preferred platform to craft precise job descriptions.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900">💡 Pro Tip:</p>
                    <p className="text-sm text-blue-800">Better JDs = Better AI matching accuracy throughout your entire workflow</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 2: Expand Your Candidate Pool */}
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <CardTitle>Expand Your Candidate Pool</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">🔍 Deep Research for Niche Communities</h4>
                      <p className="text-gray-600 text-sm">
                        Use AI to discover specialty forums and communities. For example, find dedicated DevOps forums for site reliability engineers 
                        or niche medical device communities for regulatory affairs specialists.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">🎯 Network Mining</h4>
                      <p className="text-gray-600 text-sm">
                        Tools like <a href="https://happenstance.ai/invite/friend/y5ZeyS7RWfqXvukP0QbZb0ThvZn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Happenstance</a> make it 10x easier to get referrals by proactively identifying candidates 
                        your employees are connected to but may not even know about.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-500">
                      <strong>Traditional channels still matter:</strong> LinkedIn, Indeed, ZipRecruiter - now enhanced with AI-discovered sources
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 3: Smart Screening with HireScope */}
              <Card className={`${shadows.cardEffect} border-2 border-primary`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <CardTitle>Smart Screening with HireScope</CardTitle>
                    <Badge variant="secondary" className="ml-auto">You Are Here</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    This is where HireScope shines. Analyze ALL candidates, including rejected ones, to discover hidden gems.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">20-40%</p>
                      <p className="text-sm text-gray-600">Hidden gems found</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">Minutes</p>
                      <p className="text-sm text-gray-600">Not hours to analyze</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">~$0.02</p>
                      <p className="text-sm text-gray-600">Per candidate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 4: Advanced Candidate Intelligence */}
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <CardTitle>Advanced Candidate Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Before screening calls, run comprehensive background research on your top candidates:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Portfolio Discovery:</strong> Especially valuable for creative and technical roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Professional Insights:</strong> Gather context from public profiles and contributions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700"><strong>Culture Fit Signals:</strong> Understand values and work style before the interview</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Step 5: Qualification Acceleration */}
              <Card className={`${shadows.cardEffect}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <CardTitle>Qualification Acceleration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Not a substitute for face-to-face interviews, but a powerful complement: Use custom voice AI assistants 
                    behind a phone number to collect rich candidate information on their schedule.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">🛡️ Fraud Prevention Bonus</h4>
                    <p className="text-sm text-yellow-800">
                      Real-time voice responses are much harder to fake than written applications. 
                      As GPT-generated content becomes more common, this becomes an increasingly valuable safeguard.
                    </p>
                  </div>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <p className="font-semibold">Complements human interaction</p>
                      <p className="text-sm text-gray-600">Not a replacement</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <p className="font-semibold">Richer data collected</p>
                      <p className="text-sm text-gray-600">Better interview preparation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced HR Leader CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Want the Complete AI Recruiting Playbook?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Hire the Right Person 10x Faster?
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              HireScope is just one piece of the puzzle. If you're an HR leader or CEO of a recruiting firm ready to implement 
              the complete AI-powered workflow - from job description optimization to automated screening, network activation, 
              and beyond - we'll show you exactly how to do it.
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mb-8 max-w-2xl mx-auto border border-white/30">
              <h3 className="text-2xl font-semibold text-white mb-4">Complete Workflow Implementation:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">AI-powered job description optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Automated Greenhouse integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Network activation & referral mining</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Voice AI screening implementation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Advanced candidate intelligence setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Complete workflow automation</span>
                </div>
              </div>
            </div>
            
            <Button
              size="lg"
              variant="secondary"
              className={`${shadows.buttonEffect} bg-white hover:bg-gray-100`}
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source CTA Section */}
      <section className={`py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className={`${shadows.cardEffect} overflow-hidden`}>
              <CardHeader className={`${gradients.backgroundSubtle} text-center pb-8 pt-8`}>
                <CardTitle className="text-2xl md:text-3xl mb-2">Start Finding Hidden Gems Today</CardTitle>
                <CardDescription className="text-lg">
                  HireScope is free, open source, and ready to use
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Setup</h3>
                    <ol className="space-y-2 text-gray-600">
                      <li className="flex gap-2">
                        <span className="font-semibold">1.</span>
                        Clone the repository
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">2.</span>
                        Run the setup script
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">3.</span>
                        Add your API keys
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">4.</span>
                        Start analyzing candidates
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Python 3.8 or higher
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Greenhouse API access
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        OpenAI API key
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        ~$0.02 per candidate
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    className={`${buttonStyles.primary} ${shadows.buttonEffect}`}
                    onClick={() => window.open("https://github.com/culstrup/hirescope", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Get Started on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className={`${buttonStyles.outline.primary}`}
                    onClick={() => window.open("https://github.com/culstrup/hirescope/blob/main/README.md", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Motivation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Start Small, Think Big
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              HireScope is free and open source - the perfect entry point into AI-powered recruiting. 
              Start discovering hidden gems today, then expand to the complete workflow when you're ready.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                🎯 Your Next Steps:
              </p>
              <ol className="text-left max-w-xl mx-auto space-y-2 text-blue-800">
                <li>1. Clone HireScope and analyze your current open roles</li>
                <li>2. Interview the hidden gems you discover</li>
                <li>3. Activate your network with tools like Happenstance</li>
                <li>4. Consider voice AI screening for high-volume roles</li>
                <li>5. Book a strategy call when you're ready to scale</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HireScope;