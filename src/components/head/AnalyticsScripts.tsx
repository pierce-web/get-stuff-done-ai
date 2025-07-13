
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Performance-optimized analytics loading
export const AnalyticsScripts: React.FC = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Delay analytics loading until after critical content is loaded
    const loadAnalytics = () => {
      if (scriptsLoaded) return;
      
      // Only load analytics after user interaction or 3 seconds
      const timer = setTimeout(() => {
        setScriptsLoaded(true);
      }, 3000);

      // Load immediately on user interaction
      const handleInteraction = () => {
        clearTimeout(timer);
        setScriptsLoaded(true);
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      };

      document.addEventListener('click', handleInteraction, { passive: true });
      document.addEventListener('scroll', handleInteraction, { passive: true });
      document.addEventListener('touchstart', handleInteraction, { passive: true });

      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      };
    };

    // Load analytics after component mounts
    if (typeof window !== 'undefined') {
      loadAnalytics();
    }
  }, [scriptsLoaded]);

  return (
    <Helmet>
      {/* Critical: Google Analytics - Load early but async */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <script 
        async 
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVF8V8Y4X0"
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVF8V8Y4X0', {
            // Performance optimizations
            transport_type: 'beacon',
            custom_map: {'dimension1': 'page_load_time'}
          });
        `}
      </script>
      
      {/* Non-critical analytics - Load after user interaction */}
      {scriptsLoaded && (
        <>
          {/* Vector Analytics - Deferred */}
          <script>
            {`
              (function() {
                if (window.vector) return;
                try {
                  var t = {};
                  t.q = t.q || [];
                  var methods = ["load", "identify", "on"];
                  var createMethod = function(method) {
                    return function() {
                      var args = Array.prototype.slice.call(arguments);
                      t.q.push([method, args]);
                    };
                  };
                  for (var i = 0; i < methods.length; i++) {
                    t[methods[i]] = createMethod(methods[i]);
                  }
                  window.vector = t;
                  if (!t.loaded) {
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = "https://cdn.vector.co/pixel.js";
                    script.onload = function() { t.loaded = true; };
                    var firstScript = document.getElementsByTagName("script")[0];
                    firstScript.parentNode.insertBefore(script, firstScript);
                  }
                  vector.load("8c4793bd-2836-4b7e-9eb9-f12b310d3e85");
                } catch (e) {
                  console.error("Error loading Vector:", e);
                }
              })();
            `}
          </script>
          
          {/* Swan Visitor Tracking - Deferred */}
          <script>
            {`
              (function() {
                if (window.swan && window.swan.isLoaded) return;
                try {
                  var swan = window.swan = window.swan || [];
                  swan.isLoaded = true;
                  swan.pk = 'cmadwkxyb0005l105i95r08te';
                  var script = document.createElement('script');
                  script.type = 'text/javascript';
                  script.async = true;
                  script.src = 'https://script.getswan.com?pk=cmadwkxyb0005l105i95r08te';
                  document.head.appendChild(script);
                } catch (e) {
                  console.error("Error loading Swan:", e);
                }
              })();
            `}
          </script>
          
          {/* Senja - Load with intersection observer */}
          <script>
            {`
              (function() {
                var script1 = document.createElement('script');
                script1.src = 'https://widget.senja.io/rich-snippet/4dd0a438-982e-4df8-a7d6-47c6d1edbbcb.js';
                script1.async = true;
                script1.type = 'text/javascript';
                document.head.appendChild(script1);
                
                var script2 = document.createElement('script');
                script2.src = '/reviews-schema.js';
                script2.async = true;
                script2.type = 'text/javascript';
                document.head.appendChild(script2);
              })();
            `}
          </script>
          
          {/* HubSpot - Deferred */}
          <script>
            {`
              (function() {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.id = 'hs-script-loader';
                script.async = true;
                script.defer = true;
                script.src = '//js-na2.hs-scripts.com/242078229.js';
                document.head.appendChild(script);
              })();
            `}
          </script>
          
          {/* Hotjar - Deferred */}
          <script>
            {`
              (function() {
                if (window.hj) return;
                try {
                  window.hj = window.hj || function() {
                    (window.hj.q = window.hj.q || []).push(arguments);
                  };
                  window._hjSettings = { hjid: 3572823, hjsv: 6 };
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://static.hotjar.com/c/hotjar-' + window._hjSettings.hjid + '.js?sv=' + window._hjSettings.hjsv;
                  document.head.appendChild(script);
                } catch (e) {
                  console.error("Error loading Hotjar:", e);
                }
              })();
            `}
          </script>
        </>
      )}
    </Helmet>
  );
};
