/* eslint-disable react/require-default-props */
import { useState } from 'react';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@src/theme';
import Calendar from '@components/Calendar';
import { getIsoStringWithoutTimes } from '@helpers/getIsoStringWithoutTimes';
import { isValidDateObject } from '@helpers/isValidDateObject';

import { Input } from './Input';
import { DatePickerWrapper, CalendarWrapper } from './style';

type DatePickerProps = {
  defaultDate?: string;
  onSelect?: (date: Date) => void;
};

const today = new Date();

const DatePicker: FC<DatePickerProps> = ({
  defaultDate = getIsoStringWithoutTimes(today),
  onSelect,
}) => {
  const [dateString, setDateString] = useState(defaultDate);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <DatePickerWrapper>
        <Input
          value={dateString}
          onChange={(event) => setDateString(event.target.value)}
          onFocus={() => setIsFocus(true)}
        />
        <CalendarWrapper>
          <Calendar
            display={isFocus}
            date={dateString}
            onSelect={(date) => {
              if (!isValidDateObject(date)) {
                return;
              }
              if (onSelect) {
                onSelect(date);
              }
              setDateString(getIsoStringWithoutTimes(date));
              setIsFocus(false);
            }}
          />
        </CalendarWrapper>
      </DatePickerWrapper>
    </ThemeProvider>
  );
};

export default DatePicker;
