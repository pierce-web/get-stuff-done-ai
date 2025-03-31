// This script processes reviews from Senja and adds structured data
(function() {
  // Function to create Schema.org structured data for reviews
  function createReviewsSchema(reviews) {
    // If no reviews, don't create schema
    if (!reviews || reviews.length === 0) {
      return;
    }
    
    // Create a base schema to hold the reviews
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Get Stuff Done AI",
      "url": "https://gsdat.work/",
      "description": "Expert AI consulting and implementation services to accelerate your business.",
      "provider": {
        "@type": "Organization",
        "name": "Get Stuff Done AI",
        "url": "https://gsdat.work/"
      },
      "review": []
    };
    
    // Add each review to the schema
    reviews.forEach(review => {
      // Format the date correctly for Schema.org (YYYY-MM-DD)
      const reviewDate = new Date(review.createdAt);
      const formattedDate = reviewDate.toISOString().split('T')[0];
      
      // Add the review
      schema.review.push({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating || 5,
          "bestRating": 5,
          "worstRating": 1
        },
        "author": {
          "@type": "Person",
          "name": review.name || "Anonymous"
        },
        "datePublished": formattedDate,
        "reviewBody": review.text || ""
      });
    });
    
    // Calculate aggregate rating
    const totalReviews = reviews.length;
    const totalRating = reviews.reduce((sum, review) => sum + (review.rating || 5), 0);
    const averageRating = totalRating / totalReviews;
    
    // Add aggregate rating
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": totalReviews,
      "bestRating": 5,
      "worstRating": 1
    };
    
    return schema;
  }
  
  // Function to inject the schema into the page
  function injectSchema(schema) {
    if (!schema) return;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
  }
  
  // Function to process reviews from Senja
  function processSenjaReviews() {
    // Check if Senja is loaded
    if (typeof window.senja === 'undefined' || typeof window.senja.getReviewsData !== 'function') {
      // Try again in 1 second
      setTimeout(processSenjaReviews, 1000);
      return;
    }
    
    // Get reviews data from Senja
    window.senja.getReviewsData()
      .then(data => {
        // Create schema
        const reviewsSchema = createReviewsSchema(data);
        
        // Inject schema
        injectSchema(reviewsSchema);
      })
      .catch(error => {
        console.error('Error loading Senja reviews for structured data:', error);
      });
  }
  
  // Wait until DOM is loaded before processing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processSenjaReviews);
  } else {
    processSenjaReviews();
  }
})();