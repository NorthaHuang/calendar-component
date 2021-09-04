type IsThisYearThisMonthType = (dateA: Date, dateB: Date) => boolean;

export const isThisYearThisMonth: IsThisYearThisMonthType = (dateA, dateB) =>
  dateA.getFullYear() === dateB.getFullYear() &&
  dateA.getMonth() === dateB.getMonth();
