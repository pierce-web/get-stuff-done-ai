
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import CollapsedCalculator from "./CollapsedCalculator";
import BudgetForm from "./BudgetForm";
import BudgetResults from "./BudgetResults";
import FloatingCalculator from "./FloatingCalculator";
import { calculateBudget } from "./utils/budgetCalculations";

const BudgetCalculator = () => {
  const [employeeCount, setEmployeeCount] = useState<number>(10);
  const [powerUserPercentage, setPowerUserPercentage] = useState<number>(5);
  const [needsCoding, setNeedsCoding] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);

  const budget = calculateBudget(employeeCount, powerUserPercentage, needsCoding);

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section id="budget-calculator" className="mb-16">
      {!isCalculatorOpen ? (
        <CollapsedCalculator onExpand={() => setIsCalculatorOpen(true)} />
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
            <BudgetForm 
              employeeCount={employeeCount}
              setEmployeeCount={setEmployeeCount}
              powerUserPercentage={powerUserPercentage}
              setPowerUserPercentage={setPowerUserPercentage}
              needsCoding={needsCoding}
              setNeedsCoding={setNeedsCoding}
              onCalculate={handleCalculate}
            />

            {showResults && <BudgetResults budget={budget} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default BudgetCalculator;
