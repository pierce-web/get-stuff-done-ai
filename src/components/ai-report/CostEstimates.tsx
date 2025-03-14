
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileToolPricing from "./cost-estimates/MobileToolPricing";
import DesktopToolPricing from "./cost-estimates/DesktopToolPricing";
import { toolPricingData } from "./utils/toolPricingData";

const CostEstimates = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="cost-estimates" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-primary">4. Line-by-Line Cost Estimates</h2>
        <p className="mb-6">
          Below is a snapshot of popular AI tools with approximate monthly costs per user. Actual pricing may vary based on usage, plan tiers, and new competitive offerings.
        </p>
        
        {isMobile ? (
          <MobileToolPricing tools={toolPricingData} />
        ) : (
          <DesktopToolPricing tools={toolPricingData} />
        )}
      </div>
    </section>
  );
};

export default CostEstimates;
