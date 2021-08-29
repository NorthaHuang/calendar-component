import type { FC } from 'react';

import { CalendarMode } from '../enum';
import type { CalendarBodyProps } from './type';
import DateBody from './DateBody';
import MonthBody from './MonthBody';
import YearBody from './YearBody';

const CalendarBody: FC<CalendarBodyProps> = ({ calendarMode }) => {
  switch (calendarMode) {
    case CalendarMode.YEAR:
      return <YearBody />;
    case CalendarMode.MONTH:
      return <MonthBody />;
    // CalendarMode.DATE is default
    default:
      return <DateBody />;
  }
};

export default CalendarBody;
