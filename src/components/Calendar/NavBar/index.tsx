import { useContext } from 'react';
import type { FC } from 'react';

import { NavBarWrapper, ArrowButton, StatusButton } from './style';
import { getStatusButtonText } from './helpers';
import { CalendarContext } from '../context';
import { CalendarMode } from '../enum';

const NavBar: FC = () => {
  const { draftDate, calendarMode, setCalendarMode } =
    useContext(CalendarContext);

  const statusButtonClickHandler = () => {
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

  return (
    <NavBarWrapper>
      <ArrowButton direction="left" />
      <StatusButton
        calendarMode={calendarMode} // for styled component
        onClick={statusButtonClickHandler}
      >
        <b>{getStatusButtonText({ draftDate, calendarMode })}</b>
      </StatusButton>
      <ArrowButton direction="right" />
    </NavBarWrapper>
  );
};

export default NavBar;
