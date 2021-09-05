import { isValidDateObject } from './isValidDateObject';
import type { PassingDateType } from '../type';

type GetDateObjectType = (date: PassingDateType) => Date;

/**
 * Get Date object by string or number.
 *
 * @param date - A string, number that you want to get Date object.
 * @returns Date object.
 */
export const getDateObject: GetDateObjectType = (date) => {
  if (date instanceof Date) {
    return date;
  }
  if (!isValidDateObject(date)) {
    // eslint-disable-next-line no-console
    console.info('invalid date');
    return new Date();
  }

  const [yearString, monthString, dateString] = date.toString().split('-');
  return new Date(+yearString, +monthString - 1, +dateString);
};
