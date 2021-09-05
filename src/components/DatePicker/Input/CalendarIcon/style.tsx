import styled from 'styled-components';
import { GAP } from '../../constant';

export const SvgIcon = styled.svg`
  width: 1em;
  height: 1em;
  margin: auto;
  pointer-events: none;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${GAP};
`;
