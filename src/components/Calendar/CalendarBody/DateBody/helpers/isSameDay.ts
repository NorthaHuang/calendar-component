type IsSameDayType = (dateA: Date, dateB: Date) => boolean;

/**
 * Compare 2 date is same date or not. (ignore times)
 *
 * @param dateA - A Date object that you want to compare.
 * @param dateB - A Date object that you want to compare.
 * @returns boolean.
 */
export const isSameDay: IsSameDayType = (dateA, dateB) =>
  dateA.getFullYear() === dateB.getFullYear() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getDate() === dateB.getDate();
