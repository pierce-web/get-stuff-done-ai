
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { ToolPrice } from "../utils/toolPricingData";

interface ToolSearchProps {
  onSearch: (searchTerm: string) => void;
  onCategoryFilter: (category: string) => void;
  activeCategory: string | null;
}

const ToolSearch: React.FC<ToolSearchProps> = ({ 
  onSearch, 
  onCategoryFilter,
  activeCategory 
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    "Chatbots",
    "Transcription",
    "Coding",
    "Multimedia",
    "Automation"
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="mb-6 space-y-4">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search tools, features, or pricing..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 py-2"
        />
        {searchTerm && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </form>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={`cursor-pointer ${
              activeCategory === category 
                ? "bg-secondary hover:bg-secondary/80 text-white" 
                : "hover:bg-gray-100"
            }`}
            onClick={() => onCategoryFilter(category === activeCategory ? "" : category)}
          >
            {category}
            {activeCategory === category && (
              <X className="ml-1 h-3 w-3" onClick={(e) => {
                e.stopPropagation();
                onCategoryFilter("");
              }} />
            )}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ToolSearch;
