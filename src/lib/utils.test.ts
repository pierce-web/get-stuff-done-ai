import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
  it('combines class names', () => {
    const result = cn('base-class', 'additional-class');
    expect(result).toBe('base-class additional-class');
  });

  it('handles conditional classes', () => {
    const result = cn('base', {
      'active': true,
      'disabled': false
    });
    expect(result).toBe('base active');
  });

  it('filters out falsy values', () => {
    const result = cn('base', null, undefined, false, '', 'valid');
    expect(result).toBe('base valid');
  });

  it('merges tailwind classes correctly', () => {
    // clsx handles tailwind class conflicts
    const result = cn('px-2 py-1', 'px-4');
    expect(result).toBe('px-4 py-1');
  });

  it('handles arrays of classes', () => {
    const result = cn(['base', 'secondary'], 'additional');
    expect(result).toBe('base secondary additional');
  });

  it('returns empty string for no arguments', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('handles complex nested conditions', () => {
    const isActive = true;
    const isDisabled = false;
    
    const result = cn(
      'btn',
      isActive && 'btn-active',
      isDisabled && 'btn-disabled',
      {
        'hover:bg-blue-500': isActive && !isDisabled
      }
    );
    
    expect(result).toBe('btn btn-active hover:bg-blue-500');
  });
});