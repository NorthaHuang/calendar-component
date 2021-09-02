import { useContext } from 'react';
import type { FC } from 'react';

import { NavBarWrapper, ArrowButton, StatusButton } from './style';
import { getStatusButtonText } from './helpers';
import { CalendarContext } from '../context';

const NavBar: FC = () => {
  const { draftDate, calendarMode } = useContext(CalendarContext);

  return (
    <NavBarWrapper>
      <ArrowButton direction="left" />
      <StatusButton>
        <b>{getStatusButtonText({ draftDate, calendarMode })}</b>
      </StatusButton>
      <ArrowButton direction="right" />
    </NavBarWrapper>
  );
};

export default NavBar;
