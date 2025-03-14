
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface BudgetFormProps {
  employeeCount: number;
  setEmployeeCount: (count: number) => void;
  powerUserPercentage: number;
  setPowerUserPercentage: (percentage: number) => void;
  needsCoding: boolean;
  setNeedsCoding: (needs: boolean) => void;
  onCalculate: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  employeeCount,
  setEmployeeCount,
  powerUserPercentage,
  setPowerUserPercentage,
  needsCoding,
  setNeedsCoding,
  onCalculate,
}) => {
  return (
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
        onClick={onCalculate}
        className="w-full bg-secondary hover:bg-secondary/90 text-white"
      >
        Calculate Budget Estimate
      </Button>
    </div>
  );
};

export default BudgetForm;
