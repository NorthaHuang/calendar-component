import type { PassingDateType } from '@type/PassingDateType';

export type CalendarProps = {
  display?: boolean;
  date?: PassingDateType;
  onSelect?: (date: Date) => void;
};
