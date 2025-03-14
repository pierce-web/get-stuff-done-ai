
import React from "react";
import { CheckCircle, Lightbulb, BookOpen } from "lucide-react";

const PracticalTips = () => {
  return (
    <section id="practical-tips" className="mb-16">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-primary flex items-center">
          <Lightbulb className="h-6 w-6 text-secondary mr-2" />
          Practical Tips: Zero-Based Budgeting & Monthly Reviews
        </h2>
        
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
              <BookOpen className="h-5 w-5 text-secondary mr-2" />
              Zero-Based Budgeting Approach
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-secondary/10 text-secondary p-1 mr-2 mt-1">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <div>
                  <strong>Avoid Annual Subscriptions:</strong> The AI landscape evolves so rapidly that committing to year-long contracts may prevent you from pivoting to superior tools or renegotiating better terms.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-secondary/10 text-secondary p-1 mr-2 mt-1">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <div>
                  <strong>Add/Remove Tools Fluidly:</strong> Sign up for tools when you have a specific need, and turn them off if they're no longer delivering value. The freedom to iterate monthly can keep your stack fresh and cost-effective.
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
              <BookOpen className="h-5 w-5 text-secondary mr-2" />
              Monthly Review Process
            </h3>
            <ol className="list-decimal list-inside ml-4 space-y-6">
              <li>
                <strong className="text-primary">Set a Recurring CFO Check-In</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>Schedule a monthly meeting to review every AI vendor and subscription line by line.</li>
                  <li>Sort expenses from highest to lowest to see where the budget is most heavily allocated.</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Justify Each Expense</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>Ask the question, "Would I miss this tool if it were gone?" or "Did this tool enable a result that justifies its cost?"</li>
                  <li>Gather feedback from the actual users if you're unsure.</li>
                  <li>If the answer is "no," consider pausing or canceling that subscription.</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Track New Tools & Free Trials</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>AI startups pop up constantly; it's worth experimenting.</li>
                  <li>Keep an eye on free trials or one-month usage to test ROI quickly without a long-term lock-in.</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Empower Team Leaders</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>Encourage department heads or team leads to do the same exercise with their teams before finalizing each month's budget.</li>
                  <li>This ensures all AI spending is intentional and aligns with real, on-the-ground needs.</li>
                  <li>Important: ensure ~decentralized IT purchasing decisions still comply with corporate security and other policies; work with IT leadership to streamline assessment and approval processes and delegate decision-making authority and experimentation as much as you prudently can to folks on the "shop floor"</li>
                </ul>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-gray-50 border-l-4 border-secondary rounded-r-lg italic">
              <p>
                <strong>Pro Tip:</strong> Tools you rely on every day (e.g., essential chatbots, daily transcription) will quickly prove their worth. Everything else should face monthly scrutiny to ensure maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalTips;
