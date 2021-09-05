import { useState } from 'react';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@src/theme';
import Calendar from '@components/Calendar';

import { Input } from './Input';
import { DatePickerWrapper, CalendarWrapper } from './style';

const DatePicker: FC = () => {
  const [dateString, setDateString] = useState('');
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
              setDateString(
                `${date.getFullYear()}-${
                  date.getMonth() + 1
                }-${date.getDate()}`,
              );
              setIsFocus(false);
            }}
          />
        </CalendarWrapper>
      </DatePickerWrapper>
    </ThemeProvider>
  );
};

export default DatePicker;
