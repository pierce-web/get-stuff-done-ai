
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

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            alt="GSD at Work" 
            className="h-10 w-10" 
          />
          <span className="text-xl font-bold text-primary ml-2">GSD at Work</span>
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
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <Link to="/ai-tooling-report">
                        <NavigationMenuLink
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/60 to-primary/90 p-6 no-underline outline-none focus:shadow-md"
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
            Book a Call
          </Button>
        </nav>

        {/* Mobile menu button */}
        <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-screen h-screen mt-2 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/26896559-83b7-4f50-b009-c8d2378a3bb9.png" 
                  alt="GSD at Work" 
                  className="h-16 w-16 mx-auto" 
                />
              </div>
              <DropdownMenuItem asChild className="hover:bg-transparent cursor-pointer">
                <Link to="/" className="text-xl font-medium w-full text-center">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-transparent cursor-pointer">
                <Link to="/ai-tooling-report" className="text-xl font-medium w-full text-center">
                  AI Tooling Report
                </Link>
              </DropdownMenuItem>
              <div className="flex flex-col gap-4 w-64 pt-8">
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                >
                  Book a Call
                </Button>
                <Button
                  variant="outline"
                  className="w-full border border-primary text-primary hover:bg-primary/10 gap-2"
                  onClick={() => window.location.href = "tel:+18482610259"}
                >
                  <Phone className="h-4 w-4" />
                  <span>(848) 261-0259</span>
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
