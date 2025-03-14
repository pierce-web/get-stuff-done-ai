
export interface BudgetEstimate {
  basicUsers: number;
  powerUsers: number;
  basicUsersTotalCost: number;
  powerUsersTotalCost: number;
  totalMonthlyCost: number;
  annualCost: number;
  perEmployeeCost: number;
}

export const calculateBudget = (
  employeeCount: number,
  powerUserPercentage: number,
  needsCoding: boolean
): BudgetEstimate => {
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
