
import React from "react";

const ReportFooter = () => {
  return (
    <footer className="border-t pt-8 text-sm text-gray-600">
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-primary">About GSD at Work</h3>
          <p>
            GSD at Work specializes in strategic AI adoption, equipping teams with the right processes and tools to thrive in a rapidly changing digital landscape. Whether you're an emerging startup or a growing enterprise, we help you streamline operations, boost productivity, and deliver results—fast.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-2 text-primary">Connect with Us</h3>
          <p className="space-y-1">
            <strong>Website:</strong> <a href="https://gsdat.work" className="text-secondary hover:underline">GSDat.work</a><br />
            <strong>Email:</strong> <a href="mailto:christian@gsdat.work" className="text-secondary hover:underline">christian@gsdat.work</a><br />
            <strong>Social:</strong> <a href="https://www.linkedin.com/company/100624720" className="text-secondary hover:underline">LinkedIn</a>
          </p>
        </div>
      </div>
      
      <div className="border-t pt-6">
        <p className="italic text-xs mb-2">
          Disclaimer: All pricing and tool recommendations reflect estimated costs as of early 2025. Actual costs and tool availability are subject to change. Always review each provider's terms for the most accurate and up-to-date information.
        </p>
        <p className="text-xs">
          © 2025 GSD at Work LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ReportFooter;
