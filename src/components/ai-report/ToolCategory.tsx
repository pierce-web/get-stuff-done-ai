
import React from "react";

interface ToolCategoryProps {
  title: string;
  examples: { name: string; url: string }[];
  useCases: string;
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ title, examples, useCases }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          <strong>Examples:</strong>{" "}
          {examples.map((example, index) => (
            <React.Fragment key={index}>
              {index > 0 && ", "}
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                {example.name}
              </a>
            </React.Fragment>
          ))}
        </li>
        <li>
          <strong>Use Cases:</strong> {useCases}
        </li>
      </ul>
    </div>
  );
};

export default ToolCategory;
