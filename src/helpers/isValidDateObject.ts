import type { PassingDateType } from '@type/PassingDateType';

type IsValidDateObjectType = (date: PassingDateType) => boolean;

/**
 * Check the string, number variable is a valid Date object or not.
 *
 * @param date - A string, number that you want to check.
 * @returns boolean.
 */
export const isValidDateObject: IsValidDateObjectType = (date) => {
  if (date instanceof Date) {
    return true;
  }

  if (typeof date === 'string') {
    const dateStringArray = date.split('-');
    return (
      dateStringArray.length === 3 &&
      dateStringArray.every(
        (dateString) => typeof +dateString === 'number' && +dateString !== 0,
      )
    );
  }

  const dateObject = new Date(date);
  return !Number.isNaN(dateObject?.getTime());
};
