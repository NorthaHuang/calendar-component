import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { CalendarMode } from './enum';
import type { CalendarProps } from './type';

type CalendarContextValueType = {
  outputDate: Date;
  setOutputDate: Dispatch<SetStateAction<Date>>;
  draftDate: Date;
  setDraftDate: Dispatch<SetStateAction<Date>>;
  calendarMode: CalendarMode;
} & Pick<CalendarProps, 'onSelect'>;

export const CalendarContext = createContext<CalendarContextValueType>(
  {} as CalendarContextValueType,
);
