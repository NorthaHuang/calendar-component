import { useContext } from 'react';
import type { FC } from 'react';

import { BodyRow, Column4Wrapper } from '../style';
import { CalendarContext } from '../../context';
import { MONTH_MAP } from '../../constant';
import { CalendarMode } from '../../enum';

const MonthBody: FC = () => {
  const { draftDate, setDraftDate, setCalendarMode } =
    useContext(CalendarContext);

  // For Render
  const groupedMonthIndex = [];
  for (let i = 0; i < 3; i += 1) {
    const tempArr = [];
    for (let j = 0; j < 4; j += 1) {
      tempArr.push(i * 4 + j);
    }
    groupedMonthIndex.push(tempArr);
  }

  const monthClickHandler = (monthIndex: number) => {
    setDraftDate(
      new Date(draftDate.getFullYear(), monthIndex, draftDate.getDate()),
    );
    setCalendarMode(CalendarMode.DATE);
  };

  return (
    <Column4Wrapper>
      {groupedMonthIndex.map((row) => (
        <BodyRow key={row[0]}>
          {row.map((monthIndex) => {
            const monthName = MONTH_MAP[monthIndex];
            return (
              <button
                type="button"
                key={monthName}
                onClick={() => monthClickHandler(monthIndex)}
              >
                {monthName}
              </button>
            );
          })}
        </BodyRow>
      ))}
    </Column4Wrapper>
  );
};

export default MonthBody;
