
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
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/lib/navigation-menu-variants";
import { shadows, gradients, buttonStyles, animations, borderRadius } from "@/lib/design-tokens";

export const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="col-span-2">
                  <NavigationMenuLink asChild>
                    <Link to="/ai-action-workshop" 
                      className={`block select-none space-y-1 ${borderRadius.md} ${gradients.primaryLight} p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-base font-medium leading-none text-primary">AI Action Workshop</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                        2-hour hands-on session with immediate AI implementation
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/qualitative-data-insights-workshop"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">Qualitative Data Insights</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        AI-powered analysis of customer conversations and feedback
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/10x-executive"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">10x Effective Executive</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        AI-powered transformation program for busy leaders
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/triple-a-transformation"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">Triple-A Transformation</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        Complete organizational AI implementation program
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link to="/ai-tooling-report"
                      className={`flex h-full w-full select-none flex-col justify-end ${borderRadius.md} ${gradients.secondaryStrong} p-6 no-underline outline-none ${shadows.hoverEffect}`}
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        2025 AI Tooling & Budget Report
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Comprehensive guide to AI tool budgeting for businesses
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/cases"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">Case Studies</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        Real-world AI implementation success stories
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/blog"
                      className={`block select-none space-y-1 ${borderRadius.md} p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                    >
                      <div className="text-sm font-medium leading-none">Professional Insights</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        Articles and posts on AI strategy and digital transformation
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Button
        variant="outline"
        className={`ml-4 ${buttonStyles.outline.primary} gap-2 ${shadows.buttonEffect}`}
        onClick={() => window.location.href = "tel:+18482610259"}
      >
        <Phone className="h-4 w-4" />
        <span>
          <span className="font-medium">Call</span>
          <span className="hidden lg:block text-xs">(848) 261-0259</span>
        </span>
      </Button>
      
      <Button
        className={`ml-2 ${buttonStyles.primary} ${shadows.buttonEffect}`}
        onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
      >
        Book a Strategy Call
      </Button>
    </nav>
  );
};
