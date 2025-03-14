
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const ReportHeader = () => {
  return (
    <header className="mb-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-center mb-4">
        <Badge variant="outline" className="px-4 py-1 bg-white text-secondary border-secondary">
          <CalendarDays className="mr-1 h-3 w-3" /> Updated for 2025
        </Badge>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        The 2025 AI Tooling & Budget Report
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        How to Equip Your Team for Quick Wins and Right-Side Steps Toward Long-Term Transformation
      </p>
      
      <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
      
      <div className="flex items-center justify-center bg-white py-4 px-6 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
        <img 
          src="/lovable-uploads/eb3e02b7-4b6b-4085-bd2c-fd961a1b1003.png" 
          alt="Christian Ulstrup" 
          className="h-12 w-12 rounded-full mr-4 object-cover border-2 border-gray-200"
        />
        <div className="text-left">
          <p className="font-medium text-gray-800">
            Christian Ulstrup
          </p>
          <p className="text-gray-500 text-sm">
            Principal & Founder, GSD at Work LLC
          </p>
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
