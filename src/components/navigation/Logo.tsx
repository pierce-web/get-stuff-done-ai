
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
        alt="GSD at Work - AI Implementation Consulting Logo" 
        className="h-10 w-10" 
      />
      <span className="text-xl font-bold text-primary ml-2">at Work</span>
    </Link>
  );
};
