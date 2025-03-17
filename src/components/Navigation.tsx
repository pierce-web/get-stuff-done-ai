
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
            alt="GSD" 
            className="h-10 w-10" 
          />
          <span className="text-xl font-bold text-primary ml-2">at Work</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link to="/ai-action-workshop">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">AI Action Workshop</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            2-hour hands-on session with immediate AI implementation
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    
                    <li className="row-span-3">
                      <Link to="/10x-executive">
                        <NavigationMenuLink
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/60 to-primary/90 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            10x Effective Executive
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            AI-powered transformation program for busy leaders
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>

                    <li>
                      <Link to="/triple-a-transformation">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Triple-A Transformation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Complete organizational AI implementation program
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <Link to="/ai-tooling-report">
                        <NavigationMenuLink
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary/60 to-secondary/90 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            2025 AI Tooling & Budget Report
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Comprehensive guide to AI tool budgeting for businesses
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button
            variant="outline"
            className="ml-4 border border-primary text-primary hover:bg-primary/10 gap-2"
            onClick={() => window.location.href = "tel:+18482610259"}
          >
            <Phone className="h-4 w-4" />
            <span>
              <span className="font-medium">Call</span>
              <span className="hidden lg:block text-xs">(848) 261-0259</span>
            </span>
          </Button>
          
          <Button
            className="ml-2 bg-secondary hover:bg-secondary/90 text-white"
            onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
          >
            Book a Strategy Call
          </Button>
        </nav>

        {/* Mobile menu using Sheet component instead of DropdownMenu */}
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
                  alt="GSD" 
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
                <Link to="/10x-executive" className="text-lg font-medium">
                  10x Executive Program
                </Link>
                <Link to="/triple-a-transformation" className="text-lg font-medium">
                  Triple-A Transformation
                </Link>
                <Link to="/ai-tooling-report" className="text-lg font-medium">
                  AI Tooling Report
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
      </div>
    </header>
  );
};
