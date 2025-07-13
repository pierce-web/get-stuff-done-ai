import { describe, it, expect } from 'vitest';
import {
  calculateCoreAIBudget,
  calculateTotalWithEfficiency,
  formatBudget,
  getRecommendedTier
} from '@/lib/ai-report/utils/budgetCalculations';

describe('Budget Calculations', () => {
  describe('calculateCoreAIBudget', () => {
    it('should calculate budget correctly for different employee counts', () => {
      expect(calculateCoreAIBudget(10)).toBeCloseTo(2550);
      expect(calculateCoreAIBudget(50)).toBeCloseTo(9150);
      expect(calculateCoreAIBudget(100)).toBeCloseTo(15300);
    });
  });

  describe('calculateTotalWithEfficiency', () => {
    it('should apply efficiency discount correctly', () => {
      const base = 1000;
      // 10 employees = 0% discount
      expect(calculateTotalWithEfficiency(base, 10)).toBe(1000);
      // 50 employees = 10% discount
      expect(calculateTotalWithEfficiency(base, 50)).toBe(900);
      // 500 employees = 25% discount
      expect(calculateTotalWithEfficiency(base, 500)).toBe(750);
    });
  });

  describe('formatBudget', () => {
    it('should format budget numbers correctly', () => {
      expect(formatBudget(1000)).toBe('$1,000');
      expect(formatBudget(10000)).toBe('$10,000');
      expect(formatBudget(1000000)).toBe('$1,000,000');
    });
  });

  describe('getRecommendedTier', () => {
    it('should recommend correct tier based on employee count', () => {
      expect(getRecommendedTier(5)).toBe('starter');
      expect(getRecommendedTier(15)).toBe('growth');
      expect(getRecommendedTier(60)).toBe('scale');
      expect(getRecommendedTier(200)).toBe('enterprise');
    });
  });
});