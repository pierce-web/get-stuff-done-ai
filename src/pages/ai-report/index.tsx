
import React from "react";
import ReportLayout from "./ReportLayout";
import ReportContent from "./ReportContent";
import SEOMetadata from "./SEOMetadata";
import ScrollManager from "./ScrollManager";

const AIToolingReport: React.FC = () => {
  return (
    <>
      <SEOMetadata />
      <ScrollManager />
      <ReportLayout>
        <ReportContent />
      </ReportLayout>
    </>
  );
};

export default AIToolingReport;
