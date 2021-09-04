type IsNextMonthDateType = (rowIndex: number, dateNumber: number) => boolean;

/**
 * Check the date is in next month or not.
 *
 * @param rowIndex - Date row index number.
 * @param dateNumber - Date number.
 * @returns Boolean.
 */
export const isNextMonthDate: IsNextMonthDateType = (rowIndex, dateNumber) =>
  (rowIndex === 4 || rowIndex === 5) && dateNumber < 15;
