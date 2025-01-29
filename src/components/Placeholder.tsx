import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Placeholder = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
          <Card className="mt-10">
            <CardHeader>
              <CardTitle className="text-gray-400">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">This section is under development</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};