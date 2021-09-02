import { useContext } from 'react';
import type { FC } from 'react';

import { BodyRow, Column4Wrapper } from '../../style';
import { getYearDecade } from '../../helpers/getYearDecade';
import { CalendarContext } from '../../context';
import { CalendarMode } from '../../enum';

const YearBody: FC = () => {
  const { draftDate, setDraftDate, setCalendarMode } =
    useContext(CalendarContext);

  /* For Render */
  // Get years array
  const yearsDecade = getYearDecade(draftDate);
  const firstYear = +`${yearsDecade}0` - 1;
  const years = [];
  for (let i = 0; i < 12; i += 1) {
    years.push(firstYear + i);
  }

  // Get grouped years array
  const groupedYears = [];
  for (let i = 0; i < 3; i += 1) {
    const tempArr = [];
    for (let j = 0; j < 4; j += 1) {
      tempArr.push(years[i * 4 + j]);
    }
    groupedYears.push(tempArr);
  }

  const yearClickHandler = (yearNumber: number) => {
    setDraftDate(
      new Date(yearNumber, draftDate.getMonth(), draftDate.getDate()),
    );
    setCalendarMode(CalendarMode.MONTH);
  };

  return (
    <Column4Wrapper>
      {groupedYears.map((row) => (
        <BodyRow key={row[0]}>
          {row.map((yearNumber) => (
            <button
              type="button"
              key={yearNumber}
              onClick={() => yearClickHandler(yearNumber)}
            >
              {yearNumber}
            </button>
          ))}
        </BodyRow>
      ))}
    </Column4Wrapper>
  );
};

export default YearBody;
