import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const FreeCourse = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div id="free-course" className="bg-primary py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI as Electricity
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Free email course for team leads and knowledge workers. Dispel AI myths and get started with practical implementation strategies.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 flex gap-x-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md"
              required
            />
            <Button type="submit" className="bg-primary-light hover:bg-primary-light/90">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};