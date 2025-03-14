
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Users, PercentIcon, Code } from "lucide-react";

interface BudgetFormProps {
  employeeCount: number;
  setEmployeeCount: (value: number) => void;
  powerUserPercentage: number;
  setPowerUserPercentage: (value: number) => void;
  needsCoding: boolean;
  setNeedsCoding: (value: boolean) => void;
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
    <div className="space-y-5 p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center mb-1">
          <Label className="text-base font-medium flex items-center">
            <Users className="mr-2 h-4 w-4 text-secondary" />
            Company Size
          </Label>
          <span className="text-sm font-medium bg-primary/5 px-2 py-1 rounded-full">
            {employeeCount} {employeeCount === 1 ? "employee" : "employees"}
          </span>
        </div>
        <Slider
          value={[employeeCount]}
          onValueChange={(value) => setEmployeeCount(value[0])}
          min={1}
          max={1000}
          step={1}
          className="my-6"
        />
        <div className="flex justify-between text-xs text-gray-500 px-2">
          <span>1</span>
          <span>250</span>
          <span>500</span>
          <span>750</span>
          <span>1000</span>
        </div>
      </div>

      <div className="flex flex-col space-y-2 pt-2">
        <div className="flex justify-between items-center mb-1">
          <Label className="text-base font-medium flex items-center">
            <PercentIcon className="mr-2 h-4 w-4 text-secondary" />
            Power Users Percentage
          </Label>
          <span className="text-sm font-medium bg-primary/5 px-2 py-1 rounded-full">
            {powerUserPercentage}%
          </span>
        </div>
        <Slider
          value={[powerUserPercentage]}
          onValueChange={(value) => setPowerUserPercentage(value[0])}
          min={0}
          max={100}
          step={1}
          className="my-6"
        />
        <div className="flex justify-between text-xs text-gray-500 px-2">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <Label className="text-base font-medium flex items-center" htmlFor="coding-needs">
          <Code className="mr-2 h-4 w-4 text-secondary" />
          AI Coding Tools Needed
        </Label>
        <Switch
          id="coding-needs"
          checked={needsCoding}
          onCheckedChange={setNeedsCoding}
        />
      </div>

      <Button
        onClick={onCalculate}
        className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-white"
        size="lg"
      >
        <Calculator className="mr-2 h-5 w-5" />
        Calculate Budget
      </Button>

      <p className="text-xs text-gray-500 text-center mt-2">
        This calculator provides estimates based on current market rates and typical AI tool usage patterns.
      </p>
    </div>
  );
};

export default BudgetForm;
