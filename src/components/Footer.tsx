import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "hello@gsdat.work";
  const subject = "site inquiry";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <footer className="mt-20 pb-8 text-sm text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {currentYear} GSD at Work LLC</div>
        <a
          href={mailtoLink}
          className="text-primary hover:text-primary-light transition-colors"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};