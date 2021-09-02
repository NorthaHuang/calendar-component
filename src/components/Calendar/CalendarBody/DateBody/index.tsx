import { useContext } from 'react';
import type { FC } from 'react';

import { DateBodyWrapper } from './style';
import {
  getDayOfFirstDate,
  getMonthLength,
  getLastDateOfLastMonth,
  isSameDay,
} from './helpers';
import { BodyRow } from '../../style';
import { CalendarContext } from '../../context';

const DateBody: FC = () => {
  const { onSelect, setOutputDate, draftDate } = useContext(CalendarContext);

  // TODO: Refactoring
  let rawDateArray = [];
  const dateArray = [];
  {
    const monthLength = getMonthLength(draftDate);
    for (let i = 1; i <= monthLength; i += 1) {
      rawDateArray.push(i);
    }

    const firstDay = getDayOfFirstDate(draftDate);
    const lastMonthLastDate = getLastDateOfLastMonth(draftDate);
    if (firstDay !== 0) {
      for (let i = 0; i < firstDay; i += 1) {
        rawDateArray.unshift(lastMonthLastDate - i);
      }
    }

    const remainLength = 42 - rawDateArray.length;
    for (let i = 1; i <= remainLength; i += 1) {
      rawDateArray.push(i);
    }

    for (let i = 0; i < 6; i += 1) {
      const tempArray = [];
      for (let j = 0; j < 7; j += 1) {
        tempArray.push(rawDateArray[0]);
        rawDateArray = rawDateArray.slice(1, rawDateArray.length);
      }
      dateArray.push(tempArray);
    }
  }

  return (
    <DateBodyWrapper>
      <BodyRow>
        <b>Su</b>
        <b>Mo</b>
        <b>Tu</b>
        <b>We</b>
        <b>Th</b>
        <b>Fr</b>
        <b>Sa</b>
      </BodyRow>
      {dateArray.map((row, index) => (
        <BodyRow key={`row-${index.toString()}`}>
          {row.map((dateNumber) => (
            <button
              type="button"
              key={`${index.toString()}-${dateNumber}`}
              onClick={() => {
                let selectedMonth = draftDate.getMonth();
                if ((index === 4 || index === 5) && dateNumber < 15) {
                  selectedMonth += 1;
                } else if ((index === 0 || index === 1) && dateNumber > 15) {
                  selectedMonth -= 1;
                }

                const selectedDate = new Date(
                  draftDate.getFullYear(),
                  selectedMonth,
                  dateNumber,
                );
                if (isSameDay(selectedDate, draftDate)) {
                  return;
                }

                /* Output */
                setOutputDate(selectedDate);
                // User Callback
                if (onSelect) {
                  onSelect(selectedDate);
                }
              }}
            >
              {dateNumber}
            </button>
          ))}
        </BodyRow>
      ))}
    </DateBodyWrapper>
  );
};

export default DateBody;
