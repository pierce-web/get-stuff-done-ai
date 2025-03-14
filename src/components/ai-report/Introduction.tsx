
import React from "react";

const Introduction = () => {
  return (
    <section id="introduction" className="mb-16">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary">1. Introduction</h2>
        <p className="mb-4">
          Welcome to The 2025 AI Tooling & Budget Report, brought to you by GSD at Work—your partner in helping businesses get stuff done. If you're a business owner or team lead looking to harness the power of AI, you've likely asked:
        </p>
        <blockquote className="border-l-4 border-secondary pl-6 py-4 my-6 italic bg-gray-50 rounded-r-lg">
          "How much should we realistically be spending each month on AI tools?"
        </blockquote>
        <p>
          This report provides clear, actionable answers. We'll break down the typical costs of popular AI tools—from chatbots and transcribers to coding agents and workflow automation. We'll also give you ballpark budgets for different types of users, so you can plan confidently.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
