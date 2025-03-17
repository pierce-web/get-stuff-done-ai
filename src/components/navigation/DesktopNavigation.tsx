
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const DesktopNavigation = () => {
  return (
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
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="col-span-2">
                  <Link to="/ai-action-workshop">
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md bg-gradient-to-b from-primary/10 to-primary/5 p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-base font-medium leading-none text-primary">AI Action Workshop</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                        2-hour hands-on session with immediate AI implementation
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>

                <li>
                  <Link to="/10x-executive">
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">10x Effective Executive</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
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
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
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
            <NavigationMenuContent className="bg-white">
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
  );
};
