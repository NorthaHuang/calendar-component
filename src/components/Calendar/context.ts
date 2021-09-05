import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { CalendarMode } from './enum';
import type { CalendarProps } from './type';

export type CalendarContextValueType = {
  outputDate: Date;
  setOutputDate: Dispatch<SetStateAction<Date>>;
  draftDate: Date;
  setDraftDate: Dispatch<SetStateAction<Date>>;
  calendarMode: CalendarMode;
  setCalendarMode: Dispatch<SetStateAction<CalendarMode>>;
};

export const CalendarContext = createContext<CalendarContextValueType>(
  {} as CalendarContextValueType,
);
