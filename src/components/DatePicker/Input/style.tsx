import styled from 'styled-components';

import { BORDER_WIDTH, GAP } from '../constant';

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputStyled = styled.input`
  // Initialize
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;

  width: 6em;
  padding: ${GAP};
  // icon size + icon left gap + icon right gap
  padding-left: calc(1em + ${GAP} + ${GAP});
  overflow: hidden;
  border: ${BORDER_WIDTH} solid ${({ theme: { palette } }) => palette.gray};
  border-radius: 3px;
  font-family: sans-serif;
  font-size: 0.9em;
  display: block;

  &:focus {
    border-color: ${({ theme: { palette } }) => palette.focus};

    + svg {
      fill: ${({ theme: { palette } }) => palette.focus};
    }
  }
`;
