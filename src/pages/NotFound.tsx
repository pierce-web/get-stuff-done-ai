import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  // Get the original path that led to the 404 (passed from our handler)
  const originalPath = searchParams.get('path') || location.pathname;

  useEffect(() => {
    // Log the 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      originalPath
    );
    
    // Set the HTML status code for SEO
    if (typeof document !== 'undefined') {
      // This will be picked up by Netlify's SPA renderer
      document.title = "404 - Page Not Found | Get Stuff Done AI";
      
      // Add a meta tag to indicate 404 status
      const statusMeta = document.createElement('meta');
      statusMeta.setAttribute('http-equiv', 'Status-Code');
      statusMeta.setAttribute('content', '404');
      document.head.appendChild(statusMeta);
    }
  }, [originalPath]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Get Stuff Done AI</title>
        <meta name="description" content="The page you are looking for does not exist. Please check the URL or return to the homepage." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://gsdat.work" />
        
        {/* Additional SEO for 404 page */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Script to set status code for Netlify */}
        <script type="text/javascript">{`
          if (typeof window !== 'undefined') {
            // For Netlify to detect and serve the correct status code
            // Inspired by https://www.netlify.com/blog/2020/04/07/creating-better-more-predictable-redirect-rules-for-spas/
            const meta = document.createElement('meta');
            meta.setAttribute('http-equiv', 'Status-Code');
            meta.setAttribute('content', '404');
            document.head.appendChild(meta);
          }
        `}</script>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-lg p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-6">The page you are looking for doesn't exist or has been moved.</p>
          <a href="/" className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
