import type { FC } from 'react';

import { NavBarWrapper, ArrowButton, StatusButton } from './style';

const NavBar: FC = () => (
  <NavBarWrapper>
    <ArrowButton direction="left" />
    <StatusButton>
      <b>May 2018</b>
    </StatusButton>
    <ArrowButton direction="right" />
  </NavBarWrapper>
);

export default NavBar;
