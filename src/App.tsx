
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
import AIActionWorkshop from "./pages/AIActionWorkshop";
import TripleATransformation from "./pages/TripleATransformation";
import NotFound from "./pages/NotFound";
import StrategySessionConfirmed from "./pages/StrategySessionConfirmed";
import BlogPage from "./pages/blog";
import BlogPostPage from "./pages/blog/[id]";
import AILegalWorkshop from "./pages/AILegalWorkshop";
import AssociateCallConfirmed from "./pages/AssociateCallConfirmed";
import QualitativeDataInsightsWorkshop from "./pages/QualitativeDataInsightsWorkshop";
import { HeadManager } from "./components/head/HeadManager";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <HeadManager />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseStudy />} />
            <Route path="/ai-tooling-report" element={<AIToolingReport />} />
            <Route path="/10x-executive" element={<TenXExecutive />} />
            <Route path="/ai-action-workshop" element={<AIActionWorkshop />} />
            <Route path="/ai-legal-workshop" element={<AILegalWorkshop />} />
            <Route path="/qualitative-data-insights-workshop" element={<QualitativeDataInsightsWorkshop />} />
            <Route path="/triple-a-transformation" element={<TripleATransformation />} />
            <Route path="/strategy-session-confirmed" element={<StrategySessionConfirmed />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/associate-call-confirmed" element={<AssociateCallConfirmed />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
