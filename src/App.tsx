
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import CaseStudy from "./pages/CaseStudy";
import AIToolingReport from "./pages/ai-report";
import TenXExecutive from "./pages/10xExecutive";
import NotFound from "./pages/NotFound";
import StrategySessionConfirmed from "./pages/StrategySessionConfirmed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseStudy />} />
          <Route path="/ai-tooling-report" element={<AIToolingReport />} />
          <Route path="/10x-executive" element={<TenXExecutive />} />
          <Route path="/strategy-session-confirmed" element={<StrategySessionConfirmed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
