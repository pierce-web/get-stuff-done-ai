import { Layout } from "@/components/Layout";
import { KeywordOptimizedSEO } from "@/components/seo/KeywordOptimizedSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Star, Users } from "lucide-react";
import { shadows, gradients, buttonStyles, borderRadius } from "@/lib/design-tokens";

const CustomGPTs = () => {
  return (
    <Layout>
      <KeywordOptimizedSEO 
        title="Custom GPTs - AI-Powered Tools for Business | GSD at Work"
        content="Explore our collection of custom-built GPT tools designed to accelerate business processes and enhance productivity. Professional AI assistants for client engagement, analysis, and workflow automation."
        canonicalUrl="https://gsdat.work/custom-gpts"
        pageType="page"
        ogType="website"
      />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className={`\${gradients.primaryLight} p-6 \${borderRadius.full} \${shadows.cardEffect}`}>
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Custom GPTs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our collection of specialized AI assistants designed to accelerate your business processes and enhance productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className={`h-full \${shadows.cardEffect} hover:\${shadows.hoverEffect} transition-all duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className={`\${gradients.secondaryStrong} p-3 \${borderRadius.md} text-white`}>
                    <Users className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    New
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">
                  Client Engagement Assessment
                </CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered tool for analyzing client engagement patterns and providing strategic insights for improved relationship management.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Client Analysis</Badge>
                    <Badge variant="outline" className="text-xs">Engagement</Badge>
                    <Badge variant="outline" className="text-xs">Strategy</Badge>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Comprehensive client engagement scoring</li>
                      <li>• Actionable improvement recommendations</li>
                      <li>• Integration with existing CRM workflows</li>
                      <li>• Data-driven insights for relationship optimization</li>
                    </ul>
                  </div>

                  <Button 
                    className={`w-full \${buttonStyles.primary} \${shadows.buttonEffect} gap-2`}
                    onClick={() => window.open("https://chatgpt.com/g/g-685435835688819192a9245b85512233-client-engagement-assessment", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Try Client Engagement Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className={`h-full \${shadows.cardEffect} border-dashed border-2 border-gray-300 flex items-center justify-center`}>
              <CardContent className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
                </div>
                <CardTitle className="text-lg text-gray-500 mb-2">
                  More GPTs Coming Soon
                </CardTitle>
                <CardDescription className="text-gray-400">
                  We're continuously developing new custom GPTs to solve specific business challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={`h-full \${shadows.cardEffect} border-dashed border-2 border-gray-300 flex items-center justify-center`}>
              <CardContent className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
                </div>
                <CardTitle className="text-lg text-gray-500 mb-2">
                  Request a Custom GPT
                </CardTitle>
                <CardDescription className="text-gray-400 mb-4">
                  Need a specialized AI assistant for your business? Let us know what you need.
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomGPTs;
