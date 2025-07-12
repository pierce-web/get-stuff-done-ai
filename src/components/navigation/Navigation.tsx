
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { gradients } from "@/lib/design-tokens";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? `${gradients.navGlass.scrolled} py-3 shadow-xl shadow-black/5`
          : `${gradients.navGlass.default} py-5`
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};
