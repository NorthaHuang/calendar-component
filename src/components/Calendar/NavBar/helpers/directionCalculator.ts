import type { ClickDirectionType } from '../type';

type DirectionCalculatorType = (
  direction: ClickDirectionType,
  number: number,
) => number;

/**
 * Get the number that you want to increase.
 *
 * @param direction - A specific string for decide "increase" or "decrease" number.
 * @param number - The number that you want to calculate.
 * @returns number
 */
export const directionCalculator: DirectionCalculatorType = (
  direction,
  number,
) => (direction === 'increase' ? number : number * -1);
