
import React from "react";
import { Phone, MessageSquare, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "hello@gsdat.work";
  const subject = "Website Inquiry";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const linkedInUrl = "https://www.linkedin.com/company/100624720";
  const phoneNumber = "+18482610259";

  return (
    <footer className="mt-20 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">GSD at Work</h3>
            <p className="text-gray-600 mb-4">
              Strategic AI adoption for teams that need to move fast and get results.
            </p>
            <p className="text-gray-600">© {currentYear} GSD at Work LLC</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-primary hover:text-primary-light transition-colors flex items-center gap-2"
                  aria-label="Call our AI Assistant"
                >
                  <Phone className="h-4 w-4" />
                  <span>AI Assistant: (848) 261-0259</span>
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink}
                  className="text-primary hover:text-primary-light transition-colors flex items-center gap-2"
                  aria-label="Email Us"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>hello@gsdat.work</span>
                </a>
              </li>
              <li>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors flex items-center gap-2"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/ai-tooling-report" className="text-primary hover:text-primary-light transition-colors">
                  AI Tooling Report
                </a>
              </li>
              <li>
                <a href="/cases" className="text-primary hover:text-primary-light transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/gsdatwork/free-consult" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Book a Strategy Session
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
