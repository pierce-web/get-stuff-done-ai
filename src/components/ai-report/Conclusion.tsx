
import React from "react";
import { CheckSquare } from "lucide-react";

const Conclusion = () => {
  return (
    <section id="conclusion" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center">
          <CheckSquare className="h-6 w-6 text-secondary mr-2" />
          Conclusion & Next Steps
        </h2>
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
  );
};

export default Conclusion;
