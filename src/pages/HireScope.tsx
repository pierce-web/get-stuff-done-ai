import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Github, Star, TrendingUp, Users, Zap, DollarSign, Search, Award } from "lucide-react";
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
                  <div className={`w-12 h-12 ${gradients.primaryLight} rounded-lg flex items-center justify-center`}>
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
                  <div className={`w-12 h-12 ${gradients.secondaryLight} rounded-lg flex items-center justify-center`}>
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
                  <div className={`w-12 h-12 ${gradients.primaryLight} rounded-lg flex items-center justify-center`}>
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
                  <div className={`w-12 h-12 ${gradients.secondaryLight} rounded-lg flex items-center justify-center`}>
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
                  <div className={`flex-shrink-0 w-10 h-10 ${gradients.primaryLight} rounded-full flex items-center justify-center text-white font-bold`}>
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

      {/* HR Leader CTA Section */}
      <section className={`py-20 ${gradients.primaryLight}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/90">
              For HR Leaders & Recruiting Firms
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Entire Talent Strategy?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              If you're an HR leader or CEO of a recruiting firm looking to massively accelerate your hiring and onboarding processes - 
              and go beyond with employee engagement, scalable personalized pulse surveys, and data-driven insights - 
              we're here to help.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Expert Support Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Custom AI recruiting workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Automated onboarding systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Employee engagement analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Personalized pulse survey systems</span>
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

      <Footer />
    </div>
  );
};

export default HireScope;