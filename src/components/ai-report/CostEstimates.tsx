
import React, { useState, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileToolPricing from "./cost-estimates/MobileToolPricing";
import DesktopToolPricing from "./cost-estimates/DesktopToolPricing";
import ToolSearch from "./cost-estimates/ToolSearch";
import { toolPricingData } from "./utils/toolPricingData";
import { DollarSign } from "lucide-react";

const CostEstimates = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredTools = useMemo(() => {
    let filtered = [...toolPricingData];
    
    // Apply search filter
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.tool.toLowerCase().includes(lowerSearchTerm) ||
        tool.purpose.toLowerCase().includes(lowerSearchTerm) ||
        tool.cost.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    // Apply category filter
    if (activeCategory) {
      const categoryMap: Record<string, string[]> = {
        "Chatbots": ["chatgpt", "claude", "gemini"],
        "Transcription": ["wisprflow", "superwhisper", "fireflies", "descript"],
        "Coding": ["cursor", "windsurf", "codeium", "code", "claude code"],
        "Multimedia": ["loom", "descript", "suno", "gamma"],
        "Automation": ["zapier", "calendly", "zoom", "raycast"]
      };
      
      filtered = filtered.filter(tool => {
        const lowerToolName = tool.tool.toLowerCase();
        return categoryMap[activeCategory]?.some(keyword => 
          lowerToolName.includes(keyword)
        );
      });
    }
    
    return filtered;
  }, [searchTerm, activeCategory]);
  
  return (
    <section id="cost-estimates" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-primary flex items-center">
          <DollarSign className="h-6 w-6 text-secondary mr-2" />
          Line-by-Line Cost Estimates
        </h2>
        <p className="mb-6">
          Below is a snapshot of popular AI tools with approximate monthly costs per user. Actual pricing may vary based on usage, plan tiers, and new competitive offerings.
        </p>
        
        <ToolSearch 
          onSearch={setSearchTerm} 
          onCategoryFilter={setActiveCategory}
          activeCategory={activeCategory}
        />
        
        {filteredTools.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No tools match your search criteria.</p>
            <button 
              onClick={() => { setSearchTerm(""); setActiveCategory(null); }}
              className="text-secondary hover:underline mt-2"
            >
              Clear filters
            </button>
          </div>
        ) : isMobile ? (
          <MobileToolPricing tools={filteredTools} />
        ) : (
          <DesktopToolPricing tools={filteredTools} />
        )}
      </div>
    </section>
  );
};

export default CostEstimates;
