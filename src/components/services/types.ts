
export interface PricingTier {
  label: string;
  price: string;
  description?: string;
  calendlyLink?: string;
  availability?: string;
}

export interface ServiceType {
  title: string;
  description: string;
  price: string;
  pricingTiers?: PricingTier[];
  subtext?: string;
  extraText?: string;
  features: string[];
  cta: string;
  secondaryCta: string;
  calendlyLink?: string;
  learnMoreLink?: string;
}
