
import { ServiceCard } from "./ServiceCard";
import { services } from "./data";

export const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Services & Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the right path for your AI transformation journey
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
