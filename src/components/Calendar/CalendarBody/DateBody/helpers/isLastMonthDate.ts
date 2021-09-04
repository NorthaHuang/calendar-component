type IsLastMonthDateType = (rowIndex: number, dateNumber: number) => boolean;

/**
 * Check the date is in last month or not.
 *
 * @param rowIndex - Date row index number.
 * @param dateNumber - Date number.
 * @returns Boolean.
 */
export const isLastMonthDate: IsLastMonthDateType = (rowIndex, dateNumber) =>
  (rowIndex === 0 || rowIndex === 1) && dateNumber >= 15;
