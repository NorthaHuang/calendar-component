type monthLengthType = (date: Date) => number;

/**
 * Get month length by date.
 *
 * @param date - A Date object that you want to calculate.
 * @returns Month length
 */
export const getMonthLength: monthLengthType = (date) => {
  const year = date.getFullYear();
  const isLeapYear = year % 4 === 0;

  switch (date.getMonth()) {
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    case 1:
      return isLeapYear ? 29 : 28;
    default:
      return 31;
  }
};
