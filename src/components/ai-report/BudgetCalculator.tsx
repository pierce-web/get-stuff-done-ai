
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar, BookOpen, Zap, Headphones, Mic, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

const BudgetCalculator = () => {
  const [employeeCount, setEmployeeCount] = useState<number>(10);
  const [powerUserPercentage, setPowerUserPercentage] = useState<number>(5);
  const [needsCoding, setNeedsCoding] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);

  // Calculate budget estimates
  const calculateBudget = () => {
    // Basic costs
    const basicUserCost = 100; // $100/month per basic user
    const powerUserCost = 500; // $500/month per power user
    const codingUserCost = needsCoding ? 1000 : 0; // Additional cost if coding tools needed

    // Calculate user distribution
    const powerUsers = Math.round(employeeCount * (powerUserPercentage / 100));
    const basicUsers = employeeCount - powerUsers;

    // Calculate total costs
    const basicUsersTotalCost = basicUsers * basicUserCost;
    const powerUsersTotalCost = powerUsers * (powerUserCost + codingUserCost);
    const totalMonthlyCost = basicUsersTotalCost + powerUsersTotalCost;
    const annualCost = totalMonthlyCost * 12;

    return {
      basicUsers,
      powerUsers,
      basicUsersTotalCost,
      powerUsersTotalCost,
      totalMonthlyCost,
      annualCost,
      perEmployeeCost: totalMonthlyCost / employeeCount,
    };
  };

  const budget = calculateBudget();

  const handleCalculate = () => {
    setShowResults(true);
  };

  // Closed calculator view (floating button)
  const renderFloatingCalculator = () => (
    <div className="fixed bottom-6 right-6 z-10 md:bottom-auto md:right-auto md:static">
      <Button
        onClick={() => setIsCalculatorOpen(true)}
        className="group bg-primary hover:bg-primary/90 shadow-lg rounded-full p-4 flex items-center gap-3"
        size="lg"
      >
        <Calculator className="h-5 w-5 text-white" />
        <span className="text-white font-medium">Get Your Personalized AI Budget</span>
      </Button>
    </div>
  );

  return (
    <section id="budget-calculator" className="mb-16">
      {!isCalculatorOpen ? (
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Calculator className="h-6 w-6 text-secondary" />
                Interactive AI Budget Calculator
              </h2>
              <p className="text-gray-600 mt-2">
                Estimate your organization's AI tooling budget based on your specific needs and team composition.
              </p>
            </div>
            <Button 
              onClick={() => setIsCalculatorOpen(true)}
              className="bg-secondary hover:bg-secondary/90 w-full md:w-auto text-white"
              size="lg"
            >
              <Calculator className="mr-2 h-5 w-5" />
              <span>Calculate Your Budget</span>
            </Button>
          </div>

          {/* Calculator collapsed preview with benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">General-Purpose AI</h3>
              <p className="text-sm text-gray-600">Essential AI tools that serve as the foundation for productivity gains, research, and analysis.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Voice Dictation</h3>
              <p className="text-sm text-gray-600">"Stop typing, start talking" - rapidly iterate and direct AI through speech.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Meeting Transcription</h3>
              <p className="text-sm text-gray-600">Cultivate high-quality qualitative data assets from meetings and calls.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold mb-0 text-primary flex items-center gap-2">
              <Calculator className="h-6 w-6 text-secondary" />
              Interactive AI Budget Calculator
            </h2>
            <Button 
              variant="outline" 
              onClick={() => setIsCalculatorOpen(false)}
              className="border-gray-300"
            >
              Collapse Calculator
            </Button>
          </div>
          
          <p className="mb-6">
            Use this calculator to estimate your organization's AI tooling budget based on your specific needs and team composition.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="employee-count" className="text-lg font-medium">
                  Number of Employees
                </Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="employee-count"
                    defaultValue={[employeeCount]}
                    max={500}
                    min={1}
                    step={1}
                    onValueChange={(value) => setEmployeeCount(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(parseInt(e.target.value) || 1)}
                    className="w-20"
                    min={1}
                    max={500}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="power-user-percentage" className="text-lg font-medium">
                  Percentage of Power Users ({powerUserPercentage}%)
                </Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="power-user-percentage"
                    defaultValue={[powerUserPercentage]}
                    max={100}
                    min={0}
                    step={5}
                    onValueChange={(value) => setPowerUserPercentage(value[0])}
                    className="flex-1"
                  />
                  <span className="w-20 text-center">{powerUserPercentage}%</span>
                </div>
                <p className="text-sm text-gray-500">
                  Power users need more advanced AI tools and typically use AI more extensively.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Special Tool Requirements</h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="needs-coding" className="cursor-pointer">
                      AI Coding Tools
                    </Label>
                    <p className="text-sm text-gray-500">GitHub Copilot, code generators, etc.</p>
                  </div>
                  <Switch
                    id="needs-coding"
                    checked={needsCoding}
                    onCheckedChange={setNeedsCoding}
                  />
                </div>
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
              >
                Calculate Budget Estimate
              </Button>
            </div>

            {showResults && (
              <Card className="border-secondary/20 shadow-md">
                <CardHeader className="bg-secondary/5">
                  <CardTitle className="text-xl">Your Budget Estimate</CardTitle>
                  <CardDescription>Based on your organization's specific needs</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-secondary">
                      ${budget.totalMonthlyCost.toLocaleString()}
                    </h3>
                    <p className="text-gray-500">Estimated Monthly Total</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Basic Users ({budget.basicUsers})</span>
                      <span>${budget.basicUsersTotalCost.toLocaleString()}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Power Users ({budget.powerUsers})</span>
                      <span>${budget.powerUsersTotalCost.toLocaleString()}/mo</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Per Employee Average</span>
                      <span>${Math.round(budget.perEmployeeCost).toLocaleString()}/mo</span>
                    </div>
                    <div className="flex justify-between font-medium pt-2">
                      <span>Annual Budget</span>
                      <span>${budget.annualCost.toLocaleString()}/year</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      Essential Starter Tools
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>ChatGPT Plus ($20/mo per user)</li>
                      <li>Wispr Flow or similar voice dictation software</li>
                      <li>Fireflies.ai or similar meeting transcription</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="w-full gap-2 text-white">
                        <Zap className="h-4 w-4" />
                        <span>Get Quick-Win Implementation Plan</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Get Your Personalized AI Strategy</DialogTitle>
                        <DialogDescription>
                          Book a free consultation to receive a customized implementation plan with quick wins to demonstrate immediate ROI to stakeholders.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <h4 className="font-medium">What You'll Receive:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Precise budget breakdown for your organization</li>
                          <li>30-60-90 day implementation roadmap</li>
                          <li>Quick-win tactics aligned with long-term strategy</li>
                          <li>ROI tracking framework for stakeholder reporting</li>
                          <li>Personalized tool recommendations for your industry</li>
                        </ul>
                      </div>
                      <DialogFooter className="flex flex-col sm:flex-row gap-2">
                        <Button
                          onClick={() => window.open("https://calendly.com/gsdatwork/free-consult", "_blank")}
                          className="bg-secondary hover:bg-secondary/90 gap-2 w-full text-white"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>Schedule Free Strategy Session</span>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="link"
                    className="text-secondary"
                    onClick={() => window.location.href = "#budget-tiers"}
                  >
                    Compare to standard budget tiers
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BudgetCalculator;
