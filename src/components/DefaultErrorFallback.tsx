import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DefaultErrorFallbackProps {
  error?: Error;
}

export const DefaultErrorFallback: React.FC<DefaultErrorFallbackProps> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="max-w-md w-full mx-auto p-6 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-primary mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      {process.env.NODE_ENV === 'development' && error && (
        <details className="mb-4 text-left bg-muted p-4 rounded-md">
          <summary className="cursor-pointer font-medium">Error Details</summary>
          <pre className="mt-2 text-sm text-destructive overflow-auto">
            {error.message}
            {error.stack}
          </pre>
        </details>
      )}
      <Button onClick={() => window.location.reload()}>
        Refresh Page
      </Button>
    </div>
  </div>
);