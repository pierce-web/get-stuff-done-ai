
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// This is a temporary mock data structure - you can replace with real data later
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
