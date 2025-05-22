
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./data";
import { animations } from "@/lib/design-tokens";

export const Services = React.memo(() => {
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
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${animations.slideInUp}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
