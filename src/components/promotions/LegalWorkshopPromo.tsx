
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const LegalWorkshopPromo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="bottom" className="h-auto max-h-[85vh] sm:h-auto">
        <SheetHeader className="space-y-3">
          <SheetTitle className="text-2xl font-bold text-primary">
            AI Legal Workshop - Live Demo Event
          </SheetTitle>
          <SheetDescription className="text-base">
            <div className="flex items-center gap-2 text-secondary font-medium mb-4">
              <Calendar className="h-4 w-4" />
              <span>Tuesday, May 20th • 12:00-1:30 PM EDT</span>
            </div>
            <p className="text-gray-600 mb-6">
              Join us for a hands-on demonstration where you'll see real AI tools applied to
              legal workflows in real-time. One attendee's workflow will be transformed live!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => {
                  navigate("/ai-legal-workshop");
                  setIsOpen(false);
                }}
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
              >
                Book a Strategy Call
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
