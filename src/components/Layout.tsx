
import React from "react";
import { HeadManager } from "./head/HeadManager";
import { Navigation } from "./navigation/Navigation";
import { EnhancedFooter } from "./EnhancedFooter";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout component that wraps all pages
 * Includes the head manager, navigation, and footer
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <HeadManager />
      <Navigation />
      <main>{children}</main>
      <EnhancedFooter />
    </div>
  );
};
