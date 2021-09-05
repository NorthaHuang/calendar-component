import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@src/theme';

import type { CalendarProps } from './type';
import { CalendarWrapper } from './style';
import { isSameDay, isValidDateObject, getDateObject } from './helpers';
import { CalendarContext } from './context';
import { CalendarMode } from './enum';
import NavBar from './NavBar';
import CalendarBody from './CalendarBody';

const Calendar: FC<CalendarProps> = ({
  display = false,
  date = new Date(),
  onSelect,
}) => {
  // The date that user selected.
  const [outputDate, setOutputDate] = useState(getDateObject(date));
  // A local variable for record user browse journal; a data for display.
  const [draftDate, setDraftDate] = useState(getDateObject(date));
  // Store the state that which calendar body should display.
  const [calendarMode, setCalendarMode] = useState(CalendarMode.DATE);

  useEffect(() => {
    if (!isValidDateObject(date)) {
      if (isValidDateObject(outputDate)) {
        return;
      }
      setOutputDate(new Date());
      return;
    }
    if (isSameDay(getDateObject(date), outputDate)) {
      return;
    }

    setOutputDate(getDateObject(date));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  // onSelect
  useEffect(() => {
    if (onSelect) {
      onSelect(outputDate);
    }
    if (isSameDay(outputDate, draftDate)) {
      return;
    }
    setDraftDate(outputDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outputDate]);

  const contextDefaultValue = {
    outputDate,
    setOutputDate,
    draftDate,
    setDraftDate,
    calendarMode,
    setCalendarMode,
  };

  return (
    <ThemeProvider theme={theme}>
      <CalendarContext.Provider value={contextDefaultValue}>
        <CalendarWrapper display={display}>
          <NavBar />
          <CalendarBody calendarMode={calendarMode} />
        </CalendarWrapper>
      </CalendarContext.Provider>
    </ThemeProvider>
  );
};

export default Calendar;
