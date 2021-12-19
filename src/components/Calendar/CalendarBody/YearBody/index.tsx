import { useContext } from 'react';
import type { FC } from 'react';

import { BodyRow, Column4Wrapper, Button } from '../style';
import { getYearDecade } from '../../helpers/getYearDecade';
import { CalendarContext } from '../../context';
import { CalendarMode } from '../../enum';

const YearBody: FC = () => {
  const { draftDate, setDraftDate, outputDate, setCalendarMode } =
    useContext(CalendarContext);
  const yearsDecade = getYearDecade(draftDate);

  /* For Render */
  // Get years array
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

  const yearClickHandler = (yearNumber: number): void => {
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
            <Button
              key={yearNumber}
              isOutOfBounds={yearNumber.toString().indexOf(yearsDecade) !== 0}
              isSelected={yearNumber === outputDate.getFullYear()}
              onClick={() => yearClickHandler(yearNumber)}
            >
              {yearNumber}
            </Button>
          ))}
        </BodyRow>
      ))}
    </Column4Wrapper>
  );
};

export default YearBody;
