
import React from "react";
import { ToolPrice } from "../utils/toolPricingData";

interface MobileToolPricingProps {
  tools: ToolPrice[];
}

const MobileToolPricing: React.FC<MobileToolPricingProps> = ({ tools }) => {
  return (
    <div className="space-y-4">
      {tools.map((tool, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-secondary mb-2">
            {tool.secondUrl ? (
              <>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {tool.tool.split(" or ")[0]}
                </a>
                {" or "}
                <a href={tool.secondUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {tool.tool.split(" or ")[1]}
                </a>
              </>
            ) : (
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {tool.tool}
              </a>
            )}
          </h4>
          <div className="text-sm space-y-1">
            <p><strong>Cost:</strong> {tool.cost}</p>
            <p><strong>Purpose:</strong> {tool.purpose}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileToolPricing;
