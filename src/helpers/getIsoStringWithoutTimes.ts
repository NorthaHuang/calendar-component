import type { PassingDateType } from '@type/PassingDateType';

type GetIsoStringWithoutTimes = (date: PassingDateType) => string;

export const getIsoStringWithoutTimes: GetIsoStringWithoutTimes = (date) => {
  let dateObject: Date = date as Date;
  if (!(date instanceof Date)) {
    dateObject = new Date(date);
  }

  const yearString = dateObject.getFullYear().toString();
  let monthString = (dateObject.getMonth() + 1).toString();
  let dateString = dateObject.getDate().toString();

  if (+monthString < 10) {
    monthString = `0${monthString}`;
  }
  if (+dateString < 10) {
    dateString = `0${dateString}`;
  }

  return `${yearString}-${monthString}-${dateString}`;
};
