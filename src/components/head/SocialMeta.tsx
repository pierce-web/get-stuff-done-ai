
import React from "react";
import { Helmet } from "react-helmet";

export const SocialMeta: React.FC = () => {
  return (
    <Helmet>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gsdat.work/" />
      <meta property="og:title" content="Get Stuff Done with AI | AI Consulting & Implementation Services" />
      <meta property="og:description" content="Expert AI consulting and implementation services to accelerate your business. From solopreneurs to enterprises, we help you harness AI's potential with proven strategies." />
      <meta property="og:image" content="https://gsdat.work/og-image.png" />
      <meta property="og:image:alt" content="GSD AI consulting services" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Get Stuff Done AI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://gsdat.work/" />
      <meta name="twitter:title" content="Get Stuff Done with AI | AI Consulting & Implementation Services" />
      <meta name="twitter:description" content="Expert AI consulting and implementation services to accelerate your business. From solopreneurs to enterprises, we help you harness AI's potential with proven strategies." />
      <meta property="twitter:image" content="https://gsdat.work/og-image.png" />
      <meta property="twitter:image:alt" content="GSD AI consulting services" />
      <meta name="twitter:creator" content="@gsdatwork" />
      
      {/* Pinterest */}
      <meta name="pinterest:title" content="Get Stuff Done with AI | AI Consulting & Implementation Services" />
      <meta name="pinterest:description" content="Expert AI consulting and implementation services to accelerate your business with proven AI strategies." />
      <meta name="pinterest:image" content="https://gsdat.work/og-image.png" />
      
      {/* Fallback Open Graph Image Script */}
      <script type="text/javascript">
        {`
        document.addEventListener('DOMContentLoaded', function() {
          function checkImageExists(url, callback) {
            var img = new Image();
            img.onload = function() { callback(true); };
            img.onerror = function() { callback(false); };
            img.src = url;
          }
          
          var ogImage = document.querySelector('meta[property="og:image"]');
          var twitterImage = document.querySelector('meta[property="twitter:image"]');
          var pinterestImage = document.querySelector('meta[name="pinterest:image"]');
          var primaryImgUrl = ogImage.getAttribute('content');
          
          checkImageExists(primaryImgUrl, function(exists) {
            if (!exists) {
              var fallbackUrl = 'https://gsdat.work/og-image.png';
              ogImage.setAttribute('content', fallbackUrl);
              twitterImage.setAttribute('content', fallbackUrl);
              pinterestImage.setAttribute('content', fallbackUrl);
              console.log('Using fallback image for social media tags');
            }
          });
        });
        `}
      </script>
    </Helmet>
  );
};
