import { useContext } from 'react';
import type { FC } from 'react';

import { NavBarWrapper, ArrowButton, StatusButton } from './style';
import { getStatusButtonText, directionCalculator } from './helpers';
import { CalendarContext } from '../context';
import { CalendarMode } from '../enum';
import type { ClickDirectionType } from './type';

const NavBar: FC = () => {
  const { draftDate, setDraftDate, calendarMode, setCalendarMode } =
    useContext(CalendarContext);

  const statusButtonClickHandler = (): void => {
    // eslint-disable-next-line default-case
    switch (calendarMode) {
      case CalendarMode.MONTH:
        setCalendarMode(CalendarMode.YEAR);
        break;
      case CalendarMode.DATE:
        setCalendarMode(CalendarMode.MONTH);
        break;
    }
  };

  const arrowButtonClickHandler = (direction: ClickDirectionType): void => {
    const thisYear = draftDate.getFullYear();

    switch (calendarMode) {
      case CalendarMode.YEAR:
        setDraftDate(
          new Date(
            thisYear + directionCalculator(direction, 10),
            draftDate.getMonth(),
            draftDate.getDate(),
          ),
        );
        break;
      case CalendarMode.MONTH:
        setDraftDate(
          new Date(
            thisYear + directionCalculator(direction, 1),
            draftDate.getMonth(),
            draftDate.getDate(),
          ),
        );
        break;
      // CalendarMode.DATE
      default:
        setDraftDate(
          new Date(
            draftDate.getFullYear(),
            draftDate.getMonth() + directionCalculator(direction, 1),
          ),
        );
    }
  };

  return (
    <NavBarWrapper>
      <ArrowButton
        direction="left" // for styled-components
        onClick={() => arrowButtonClickHandler('decrease')}
      />
      <StatusButton
        calendarMode={calendarMode}
        onClick={statusButtonClickHandler}
      >
        <b>{getStatusButtonText({ draftDate, calendarMode })}</b>
      </StatusButton>
      <ArrowButton
        direction="right" // for styled-components
        onClick={() => arrowButtonClickHandler('increase')}
      />
    </NavBarWrapper>
  );
};

export default NavBar;
