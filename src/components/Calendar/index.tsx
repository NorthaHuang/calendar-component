import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import type { CalendarProps } from './type';
import { CalendarWrapper } from './style';
import theme from './theme';
import { CalendarContext } from './context';
import { CalendarMode } from './enum';
import NavBar from './NavBar';
import CalendarBody from './CalendarBody';

const Calendar: FC<CalendarProps> = ({ date = new Date(), onSelect }) => {
  // The date that user selected.
  const [outputDate, setOutputDate] = useState(date);
  // A local variable for record user browse journal; a data for display.
  const [draftDate, setDraftDate] = useState(date);
  // Store the state that which calendar body should display.
  const [calendarMode, setCalendarMode] = useState(CalendarMode.DATE);

  // When user select a date, draft should be the same date for display.
  useEffect(() => setDraftDate(outputDate), [outputDate]);

  const contextDefaultValue = {
    onSelect,
    outputDate,
    setOutputDate,
    draftDate,
    setDraftDate,
    calendarMode,
    setCalendarMode,
  };

  return (
    <ThemeProvider theme={theme}>
      <CalendarWrapper>
        <CalendarContext.Provider value={contextDefaultValue}>
          <NavBar />
          <CalendarBody calendarMode={calendarMode} />
        </CalendarContext.Provider>
      </CalendarWrapper>
    </ThemeProvider>
  );
};

export default Calendar;
