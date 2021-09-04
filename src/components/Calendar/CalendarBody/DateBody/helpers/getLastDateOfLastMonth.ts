import { getMonthLength } from './getMonthLength';

type GetLastDateOfLastMonthType = (date: Date) => number;

/**
 * Get the last date number of laste month.
 *
 * @param date - A Date object that you want to calculate.
 * @returns the last date number.
 */
export const getLastDateOfLastMonth: GetLastDateOfLastMonthType = (date) => {
  const lastMonthLength = new Date(date);
  lastMonthLength.setDate(1);
  lastMonthLength.setMonth(lastMonthLength.getMonth() - 1);
  const lastMonthLastDate = getMonthLength(lastMonthLength);

  return lastMonthLastDate;
};
