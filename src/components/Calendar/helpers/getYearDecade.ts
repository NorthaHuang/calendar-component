type GetYearDecadeType = (date: Date) => string;

/**
 * Get the string of the year that removed units digit.
 *
 * @param date - A Date object that you want to calculate.
 * @returns The string of the year that removed units digit.
 */
export const getYearDecade: GetYearDecadeType = (date) => {
  const year = date.getFullYear().toString();
  const yearDecade = year.slice(0, year.length - 1);
  return yearDecade;
};
