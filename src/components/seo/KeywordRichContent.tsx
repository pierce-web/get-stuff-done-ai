import React from "react";

interface KeywordRichContentProps {
  children: React.ReactNode;
  keywords?: string[];
  className?: string;
}

/**
 * Component to help create keyword-rich content sections
 * Helps with on-page SEO by highlighting important terms
 */
export const KeywordRichContent: React.FC<KeywordRichContentProps> = ({
  children,
  keywords = [],
  className = ""
}) => {
  return (
    <div 
      className={`keyword-rich-content ${className}`}
      itemScope 
      itemType="https://schema.org/Article"
    >
      {keywords.length > 0 && (
        <meta itemProp="keywords" content={keywords.join(", ")} />
      )}
      <div itemProp="articleBody">
        {children}
      </div>
    </div>
  );
};

/**
 * Component for keyword-optimized headings
 */
interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  keywords?: string[];
  className?: string;
  id?: string;
}

export const SEOHeading: React.FC<SEOHeadingProps> = ({
  level,
  children,
  keywords = [],
  className = "",
  id
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag 
      className={`seo-heading ${className}`}
      id={id}
      itemProp="headline"
    >
      {children}
    </Tag>
  );
};

/**
 * Component for keyword-rich paragraphs
 */
interface SEOParagraphProps {
  children: React.ReactNode;
  keywords?: string[];
  className?: string;
  emphasis?: boolean;
}

export const SEOParagraph: React.FC<SEOParagraphProps> = ({
  children,
  keywords = [],
  className = "",
  emphasis = false
}) => {
  return (
    <p 
      className={`seo-paragraph ${className} ${emphasis ? 'font-medium' : ''}`}
      itemProp={emphasis ? "description" : "text"}
    >
      {children}
    </p>
  );
};

/**
 * Component for FAQ sections with keyword optimization
 */
interface SEOFAQProps {
  faqs: Array<{
    question: string;
    answer: string;
    keywords?: string[];
  }>;
  className?: string;
}

export const SEOFAQ: React.FC<SEOFAQProps> = ({
  faqs,
  className = ""
}) => {
  return (
    <div 
      className={`seo-faq ${className}`}
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="faq-item mb-6"
          itemScope 
          itemType="https://schema.org/Question"
          itemProp="mainEntity"
        >
          <h3 
            className="text-lg font-semibold text-primary mb-2"
            itemProp="name"
          >
            {faq.question}
          </h3>
          <div 
            itemScope 
            itemType="https://schema.org/Answer" 
            itemProp="acceptedAnswer"
          >
            <p 
              className="text-gray-700"
              itemProp="text"
            >
              {faq.answer}
            </p>
            {faq.keywords && (
              <meta itemProp="keywords" content={faq.keywords.join(", ")} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Component for service features with keyword optimization
 */
interface SEOServiceFeaturesProps {
  title: string;
  features: Array<{
    name: string;
    description: string;
    keywords?: string[];
  }>;
  serviceType?: string;
  className?: string;
}

export const SEOServiceFeatures: React.FC<SEOServiceFeaturesProps> = ({
  title,
  features,
  serviceType = "Service",
  className = ""
}) => {
  return (
    <div 
      className={`seo-service-features ${className}`}
      itemScope 
      itemType="https://schema.org/Service"
    >
      <h2 
        className="text-2xl font-semibold text-primary mb-6"
        itemProp="name"
      >
        {title}
      </h2>
      
      <meta itemProp="serviceType" content={serviceType} />
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="feature-item"
            itemScope 
            itemType="https://schema.org/ServiceFeature"
            itemProp="hasOfferCatalog"
          >
            <h3 
              className="text-lg font-medium text-primary mb-2"
              itemProp="name"
            >
              {feature.name}
            </h3>
            <p 
              className="text-gray-700"
              itemProp="description"
            >
              {feature.description}
            </p>
            {feature.keywords && (
              <meta itemProp="keywords" content={feature.keywords.join(", ")} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};