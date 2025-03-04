
import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "hello@gsdat.work"; // Corrected from gsdai.work to gsdat.work
  const subject = "site inquiry";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const linkedInUrl = "https://www.linkedin.com/company/100624720";
  const phoneNumber = "+18482610259";

  return (
    <footer className="mt-20 pb-8 text-sm text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {currentYear} GSD at Work LLC</div>
        <div className="flex items-center flex-wrap gap-4 justify-center">
          <a
            href={`tel:${phoneNumber}`}
            className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
            aria-label="Call our AI Assistant"
          >
            <Phone className="h-4 w-4" />
            <span>AI Assistant: (848) 261-0259</span>
          </a>
          <a
            href={mailtoLink}
            className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Contact Us</span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
