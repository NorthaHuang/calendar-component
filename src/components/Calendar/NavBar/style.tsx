import styled, { css } from 'styled-components';

import type { ArrowButtonProps } from './type';
import { getArrowDegree } from './helpers/getArrowDegree';
import { CalendarMode } from '../enum';

export const NavBarWrapper = styled.nav`
  margin: 0.28em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type StatusButtonProps = {
  calendarMode: CalendarMode;
};
export const StatusButton = styled.button.attrs({
  type: 'button',
})<StatusButtonProps>`
  flex: 1;
  // for over the CSS specificity that on "<CalendarWrapper /> > button"
  && {
    margin: auto 0.6em;
    // No interactivity when "calendarMode" is "YEAR"
    ${({ calendarMode }) =>
      calendarMode === CalendarMode.YEAR &&
      css`
        cursor: default;
      `}
  }

  > b {
    font-size: 1em;
    line-height: 2;
  }

  @media (min-width: 1024px) {
    // No interactivity when "calendarMode" is "YEAR"
    ${({ calendarMode }) =>
      calendarMode !== CalendarMode.YEAR &&
      css`
        &:hover {
          background-color: ${({ theme: { palette } }) => palette.gray};
        }
      `}
  }
`;

export const ArrowButton = styled.button.attrs({
  type: 'button',
})<ArrowButtonProps>`
  width: 2em;
  height: 2em;
  position: relative;

  /* Arrow icon */
  &:after {
    content: '';
    width: 20%;
    height: 20%;
    margin: auto;
    border-width: 1px 1px 0 0;
    border-style: solid;
    border-color: ${({ theme: { palette } }) => palette.text};
    transform: rotate(${getArrowDegree}deg) translate(-20%, 20%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
