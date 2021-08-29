import { useState } from 'react';
import type { FC } from 'react';

import { CalendarWrapper } from './style';
import { CalendarMode } from './enum';
import NavBar from './NavBar';
import CalendarBody from './CalendarBody';

const Calendar: FC = () => {
  const [calendarMode] = useState(CalendarMode.DATE);

  return (
    <CalendarWrapper>
      <NavBar />
      <CalendarBody calendarMode={calendarMode} />
    </CalendarWrapper>
  );
};

export default Calendar;
