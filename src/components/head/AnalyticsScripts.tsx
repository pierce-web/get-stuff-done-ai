
import React from "react";
import { Helmet } from "react-helmet-async";

export const AnalyticsScripts: React.FC = () => {
  return (
    <Helmet>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVF8V8Y4X0"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVF8V8Y4X0');
        `}
      </script>
      
      {/* Vector Analytics */}
      <script>
        {`
          !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
          vector.load("8c4793bd-2836-4b7e-9eb9-f12b310d3e85");
        `}
      </script>
      
      {/* Swan Visitor Tracking */}
      <script>
        {`
          (function () {
            var w = window;
            var swan = (w.swan = w.swan || []);
            if (swan.isLoaded) return;
            swan.isLoaded = true;
            swan.pk = 'cmadwkxyb0005l105i95r08te';
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://script.getswan.com?pk=cmadwkxyb0005l105i95r08te';
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(script);
          })();
        `}
      </script>
      
      {/* Senja */}
      <script src="https://widget.senja.io/rich-snippet/4dd0a438-982e-4df8-a7d6-47c6d1edbbcb.js" type="text/javascript" async></script>
      <script src="/reviews-schema.js" type="text/javascript" async></script>
      
      {/* HubSpot */}
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/242078229.js"></script>
      
      {/* Hotjar */}
      <script>
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3572823,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </script>
    </Helmet>
  );
};
