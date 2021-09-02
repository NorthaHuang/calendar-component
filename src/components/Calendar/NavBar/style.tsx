import styled from 'styled-components';

import type { ArrowButtonProps } from './type';
import { getArrowDegree } from './helpers/getArrowDegree';

export const NavBarWrapper = styled.nav`
  margin: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusButton = styled.button.attrs({ type: 'button' })`
  flex: 1;
  && {
    margin: auto 0.6em;
  }

  > b {
    font-size: 1.1em;
    line-height: 2;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: #eee;
    }
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
    border-color: #000;
    transform: rotate(${getArrowDegree}deg) translate(-20%, 20%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
