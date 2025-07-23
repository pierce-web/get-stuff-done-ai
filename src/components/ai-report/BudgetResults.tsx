
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, Calendar, Zap } from "lucide-react";
import { BudgetEstimate } from "./utils/budgetCalculations";

interface BudgetResultsProps {
  budget: BudgetEstimate;
}

const BudgetResults: React.FC<BudgetResultsProps> = ({ budget }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
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
                onClick={() => window.open("https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call", "_blank")}
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
  );
};

export default BudgetResults;
