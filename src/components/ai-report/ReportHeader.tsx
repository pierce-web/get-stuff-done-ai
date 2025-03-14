
import React from "react";
import { Link } from "react-router-dom";

const ReportHeader = () => {
  return (
    <header className="mb-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        The 2025 AI Tooling & Budget Report
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        How to Equip Your Team, Boost Productivity, and Stay Competitive
      </p>
      <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
      <div className="flex items-center justify-center">
        <img 
          src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png" 
          alt="Christian Ulstrup" 
          className="h-10 w-10 rounded-full mr-3 object-cover border-2 border-gray-200"
        />
        <p className="text-gray-500">
          Published by Christian Ulstrup, Principal & Founder, GSD at Work LLC
        </p>
      </div>
    </header>
  );
};

export default ReportHeader;
