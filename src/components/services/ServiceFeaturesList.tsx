
import { ServiceType } from "./types";

interface ServiceFeaturesListProps {
  features: ServiceType['features'];
}

export const ServiceFeaturesList = ({ features }: ServiceFeaturesListProps) => {
  return (
    <ul className="space-y-4">
      {features.map((feature) => (
        <li key={feature} className="flex items-start">
          <svg
            className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-3 text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  );
};
