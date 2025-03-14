
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar, BookOpen, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const BudgetCalculator = () => {
  const [employeeCount, setEmployeeCount] = useState<number>(10);
  const [powerUserPercentage, setPowerUserPercentage] = useState<number>(20);
  const [needsCoding, setNeedsCoding] = useState<boolean>(false);
  const [needsDesign, setNeedsDesign] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // Calculate budget estimates
  const calculateBudget = () => {
    // Basic costs
    const basicUserCost = 100; // $100/month per basic user
    const powerUserCost = 500; // $500/month per power user
    const codingUserCost = needsCoding ? 1000 : 0; // Additional cost if coding tools needed
    const designUserCost = needsDesign ? 300 : 0; // Additional cost if design tools needed

    // Calculate user distribution
    const powerUsers = Math.round(employeeCount * (powerUserPercentage / 100));
    const basicUsers = employeeCount - powerUsers;

    // Calculate total costs
    const basicUsersTotalCost = basicUsers * basicUserCost;
    const powerUsersTotalCost = powerUsers * (powerUserCost + codingUserCost + designUserCost);
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

  return (
    <section id="budget-calculator" className="mb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <Calculator className="h-6 w-6 text-secondary" />
          Interactive AI Budget Calculator
        </h2>
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
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="needs-design" className="cursor-pointer">
                    AI Design Tools
                  </Label>
                  <p className="text-sm text-gray-500">Midjourney, DALL-E, etc.</p>
                </div>
                <Switch
                  id="needs-design"
                  checked={needsDesign}
                  onCheckedChange={setNeedsDesign}
                />
              </div>
            </div>

            <Button 
              onClick={handleCalculate}
              className="w-full bg-primary hover:bg-primary/90"
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
                    <li>Otter.ai or other meeting transcription</li>
                    <li>Voice dictation software</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full gap-2">
                      <Zap className="h-4 w-4" />
                      Get Quick-Win Implementation Plan
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
                        className="bg-secondary hover:bg-secondary/90 gap-2 w-full"
                      >
                        <Calendar className="h-4 w-4 text-white" />
                        <span className="text-white">Schedule Free Strategy Session</span>
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
    </section>
  );
};

export default BudgetCalculator;
