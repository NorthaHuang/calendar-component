import { useContext } from 'react';
import type { FC } from 'react';

import { DateBodyWrapper } from './style';
import {
  getDayOfFirstDate,
  getMonthLength,
  getLastDateOfLastMonth,
  isLastMonthDate,
  isThisMonthDate,
  isNextMonthDate,
} from './helpers';
import { BodyRow, Button } from '../style';
import { isThisYearThisMonth } from '../helpers/isThisYearThisMonth';
import { CalendarContext } from '../../context';
import { WEEK_MAP } from '../../constant';
import { isSameDay } from '../../helpers/isSameDay';

const todayDate = new Date();

const DateBody: FC = () => {
  const { outputDate, setOutputDate, draftDate } = useContext(CalendarContext);

  const IsThisYearThisMonth = isThisYearThisMonth(draftDate, todayDate);

  const isOutputYearOutputMonty =
    draftDate.getFullYear() === outputDate.getFullYear() &&
    draftDate.getMonth() === outputDate.getMonth();

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

  const dateClickHandler = (rowIndex: number, dateNumber: number) => {
    // Check the selected date is in last, this or next month
    let selectedMonth = draftDate.getMonth();
    if (isNextMonthDate(rowIndex, dateNumber)) {
      selectedMonth += 1;
    } else if (isLastMonthDate(rowIndex, dateNumber)) {
      selectedMonth -= 1;
    }

    // Get the selected date object
    const selectedDate = new Date(
      draftDate.getFullYear(),
      selectedMonth,
      dateNumber,
    );

    // If selectedDate is same as draftDate then do nothing for prevent re-render.
    if (isSameDay(selectedDate, draftDate)) {
      return;
    }

    /* Output */
    setOutputDate(selectedDate);
  };

  return (
    <DateBodyWrapper>
      {/* Week Row */}
      <BodyRow>
        {WEEK_MAP.map((weekName) => (
          <b key={weekName}>{weekName}</b>
        ))}
      </BodyRow>

      {/* Date Row */}
      {dateArray.map((row, rowIndex) => (
        <BodyRow key={`row-${rowIndex.toString()}`}>
          {row.map((dateNumber) => (
            <Button
              key={`${rowIndex.toString()}-${dateNumber}`}
              isOutOfBounds={
                isLastMonthDate(rowIndex, dateNumber) ||
                isNextMonthDate(rowIndex, dateNumber)
              }
              isToday={
                IsThisYearThisMonth &&
                dateNumber === todayDate.getDate() &&
                isThisMonthDate(rowIndex, dateNumber)
              } // For render red color text
              isSelected={
                isOutputYearOutputMonty &&
                dateNumber === outputDate.getDate() &&
                // prevent select the same date number twice
                isThisMonthDate(rowIndex, dateNumber)
              } // For render red circle background
              onClick={() => dateClickHandler(rowIndex, dateNumber)}
            >
              {dateNumber}
            </Button>
          ))}
        </BodyRow>
      ))}
    </DateBodyWrapper>
  );
};

export default DateBody;
