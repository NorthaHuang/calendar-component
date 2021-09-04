import { isNextMonthDate } from './isNextMonthDate';
import { isLastMonthDate } from './isLastMonthDate';

type IsThisMonthDateType = (rowIndex: number, dateNumber: number) => boolean;

/**
 * Check the date is in this month or not.
 *
 * @param rowIndex - Date row index number.
 * @param dateNumber - Date number.
 * @returns Boolean.
 */
export const isThisMonthDate: IsThisMonthDateType = (rowIndex, dateNumber) =>
  !isNextMonthDate(rowIndex, dateNumber) &&
  !isLastMonthDate(rowIndex, dateNumber);
