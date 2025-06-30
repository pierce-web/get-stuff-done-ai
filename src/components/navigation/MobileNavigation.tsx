
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-white p-0">
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center justify-center pt-12 pb-8">
            <img 
              src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
              alt="GSD at Work Logo" 
              className="h-16 w-16" 
            />
            <span className="text-xl font-bold text-primary mt-2">at Work</span>
          </div>
          
          <div className="flex flex-col space-y-6 px-6">
            <Link to="/" className="text-lg font-medium">
              Home
            </Link>
            <Link to="/ai-action-workshop" className="text-lg font-medium">
              AI Action Workshop
            </Link>
            <Link to="/ai-oracle-session" className="text-lg font-medium">
              AI Oracle Session
            </Link>
            <Link to="/10x-executive" className="text-lg font-medium">
              10x Executive Program
            </Link>
            <Link to="/ai-automation-integration" className="text-lg font-medium">
              AI Automation & Integration
            </Link>
            <Link to="/triple-a-transformation" className="text-lg font-medium">
              Triple-A Transformation
            </Link>
            <Link to="/cases" className="text-lg font-medium">
              Case Studies
            </Link>
            <Link to="/ai-tooling-report" className="text-lg font-medium">
              AI Tooling Report
            </Link>
            <Link to="/blog" className="text-lg font-medium">
              Professional Insights
            </Link>
          </div>
          
          <div className="mt-auto px-6 pb-8 pt-12 flex flex-col gap-4">
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-6"
              onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
            >
              Book a Strategy Call
            </Button>
            <Button
              variant="outline"
              className="w-full border border-primary text-primary hover:bg-primary/10 gap-2 py-6"
              onClick={() => window.location.href = "tel:+18482610259"}
            >
              <Phone className="h-4 w-4" />
              <span>(848) 261-0259</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
