
// Netlify Function to properly handle 404 errors
// This ensures search engines receive proper 404 status codes
exports.handler = async function(event, context) {
  // Get the path from the event
  const path = event.path || '/';
  
  // Check if the path exists in our application routes
  // If not, return a 404 status
  
  // This response tells Netlify to return a 404 status
  // while still rendering the SPA's 404 page
  return {
    statusCode: 404,
    headers: {
      'Content-Type': 'text/html',
      'X-Robots-Tag': 'noindex'
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Status-Code" content="404">
          <meta name="robots" content="noindex, follow">
          <title>404 - Page Not Found | Get Stuff Done AI</title>
          <script>
            // Redirect to the SPA's 404 page component
            window.location.href = '/not-found?path=' + encodeURIComponent('${path}');
          </script>
        </head>
        <body>
          <p>Page not found. Redirecting to 404 page...</p>
        </body>
      </html>
    `
  };
};
