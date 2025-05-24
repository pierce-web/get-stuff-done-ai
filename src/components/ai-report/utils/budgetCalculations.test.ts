import { describe, it, expect } from 'vitest'
import { calculateBudget, type BudgetEstimate } from './budgetCalculations'

describe('calculateBudget', () => {
  it('calculates budget correctly for basic scenario', () => {
    const result = calculateBudget(100, 20, false)
    
    expect(result.basicUsers).toBe(80)
    expect(result.powerUsers).toBe(20)
    expect(result.basicUsersTotalCost).toBe(8000) // 80 * $100
    expect(result.powerUsersTotalCost).toBe(10000) // 20 * $500
    expect(result.totalMonthlyCost).toBe(18000)
    expect(result.annualCost).toBe(216000) // $18,000 * 12
    expect(result.perEmployeeCost).toBe(180) // $18,000 / 100
  })

  it('calculates budget with coding needs', () => {
    const result = calculateBudget(100, 20, true)
    
    expect(result.basicUsers).toBe(80)
    expect(result.powerUsers).toBe(20)
    expect(result.basicUsersTotalCost).toBe(8000) // 80 * $100
    expect(result.powerUsersTotalCost).toBe(30000) // 20 * ($500 + $1000)
    expect(result.totalMonthlyCost).toBe(38000)
    expect(result.annualCost).toBe(456000) // $38,000 * 12
    expect(result.perEmployeeCost).toBe(380) // $38,000 / 100
  })

  it('handles all power users scenario', () => {
    const result = calculateBudget(50, 100, false)
    
    expect(result.basicUsers).toBe(0)
    expect(result.powerUsers).toBe(50)
    expect(result.basicUsersTotalCost).toBe(0)
    expect(result.powerUsersTotalCost).toBe(25000) // 50 * $500
    expect(result.totalMonthlyCost).toBe(25000)
    expect(result.annualCost).toBe(300000)
    expect(result.perEmployeeCost).toBe(500)
  })

  it('handles all basic users scenario', () => {
    const result = calculateBudget(50, 0, false)
    
    expect(result.basicUsers).toBe(50)
    expect(result.powerUsers).toBe(0)
    expect(result.basicUsersTotalCost).toBe(5000) // 50 * $100
    expect(result.powerUsersTotalCost).toBe(0)
    expect(result.totalMonthlyCost).toBe(5000)
    expect(result.annualCost).toBe(60000)
    expect(result.perEmployeeCost).toBe(100)
  })

  it('rounds power user count correctly', () => {
    const result = calculateBudget(10, 25, false)
    
    expect(result.powerUsers).toBe(3) // Math.round(10 * 0.25) = 3
    expect(result.basicUsers).toBe(7)
  })

  it('handles small employee counts', () => {
    const result = calculateBudget(1, 50, true)
    
    expect(result.basicUsers).toBe(0) // 1 - 1 = 0 (Math.round(1 * 0.5) = 1 power user)
    expect(result.powerUsers).toBe(1) // Math.round(1 * 0.5) = 1
    expect(result.totalMonthlyCost).toBe(1500) // 1 power user * ($500 + $1000)
    expect(result.perEmployeeCost).toBe(1500)
  })

  it('handles edge case with 1 employee marked as power user', () => {
    const result = calculateBudget(1, 100, true)
    
    expect(result.basicUsers).toBe(0)
    expect(result.powerUsers).toBe(1)
    expect(result.powerUsersTotalCost).toBe(1500) // 1 * ($500 + $1000)
    expect(result.totalMonthlyCost).toBe(1500)
    expect(result.perEmployeeCost).toBe(1500)
  })

  it('validates the return type structure', () => {
    const result = calculateBudget(100, 20, false)
    
    // Check that all expected properties exist and are numbers
    expect(result).toHaveProperty('basicUsers')
    expect(result).toHaveProperty('powerUsers')
    expect(result).toHaveProperty('basicUsersTotalCost')
    expect(result).toHaveProperty('powerUsersTotalCost')
    expect(result).toHaveProperty('totalMonthlyCost')
    expect(result).toHaveProperty('annualCost')
    expect(result).toHaveProperty('perEmployeeCost')
    
    // Verify all values are numbers
    Object.values(result).forEach(value => {
      expect(typeof value).toBe('number')
      expect(isNaN(value)).toBe(false)
    })
  })

  it('handles large employee counts', () => {
    const result = calculateBudget(10000, 10, true)
    
    expect(result.powerUsers).toBe(1000) // 10% of 10,000
    expect(result.basicUsers).toBe(9000)
    expect(result.basicUsersTotalCost).toBe(900000) // 9000 * $100
    expect(result.powerUsersTotalCost).toBe(1500000) // 1000 * $1500
    expect(result.totalMonthlyCost).toBe(2400000)
    expect(result.annualCost).toBe(28800000)
    expect(result.perEmployeeCost).toBe(240)
  })

  it('handles fractional percentages', () => {
    const result = calculateBudget(100, 12.5, false)
    
    expect(result.powerUsers).toBe(13) // Math.round(100 * 0.125) = 13
    expect(result.basicUsers).toBe(87)
  })
})