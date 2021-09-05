export type PassingDateType = string | number | Date;

export type CalendarProps = {
  display?: boolean;
  date?: PassingDateType;
  onSelect?: (date: Date) => void;
};
