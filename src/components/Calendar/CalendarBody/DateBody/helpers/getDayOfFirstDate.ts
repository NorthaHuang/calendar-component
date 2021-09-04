type getDayOfFirstDateType = (date: Date) => number;

/**
 * Get the day of week of first date.
 *
 * @param date - A Date object that you want to calculate.
 * @returns the day of week number.
 */
export const getDayOfFirstDate: getDayOfFirstDateType = (date) => {
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDate.getDay();
};
