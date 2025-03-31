
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ToolCategoryProps {
  title: string;
  icon?: React.ReactNode;
  examples: { name: string; url: string }[];
  useCases: string;
  // Allow any other props to pass through
  [x: string]: any;
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ title, icon, examples, useCases, ...rest }) => {
  const isMobile = useIsMobile();
  
  // Filter out Lovable editor props that shouldn't be passed to DOM elements
  const domProps = Object.fromEntries(
    Object.entries(rest).filter(([key]) => !key.startsWith('data-lov'))
  );
  
  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg transition-all hover:shadow-md" {...domProps}>
      <h3 className="text-xl font-semibold mb-3 flex items-center">
        {icon}
        {title}
      </h3>
      <ul className="list-disc list-inside ml-2 sm:ml-4 space-y-2 text-sm sm:text-base">
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
