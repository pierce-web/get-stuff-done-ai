import React from "react";
import { ContextualServiceCTA } from "@/components/internal-linking/ContextualServiceCTA";

interface EnhancedCTASectionProps {
  blogTitle: string;
  blogContent: string;
  blogType: "article" | "post";
}

const EnhancedCTASection: React.FC<EnhancedCTASectionProps> = ({
  blogTitle,
  blogContent,
  blogType
}) => {
  return (
    <div className="my-12">
      <ContextualServiceCTA 
        blogTitle={blogTitle}
        blogContent={blogContent}
        blogType={blogType}
      />
    </div>
  );
};

export default EnhancedCTASection;