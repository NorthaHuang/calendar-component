import styled, { css } from 'styled-components';

export const BodyRow = styled.div`
  margin: 0.14em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const COLUMN_4_BOX_SIZE = '3.5em';
export const Column4Wrapper = styled.div`
  button {
    width: ${COLUMN_4_BOX_SIZE};
    height: ${COLUMN_4_BOX_SIZE};
    line-height: ${COLUMN_4_BOX_SIZE};
  }
`;

type ButtonProps = {
  isToday?: boolean;
  isSelectedDate: boolean;
};
export const Button = styled.button.attrs({ type: 'button' })<ButtonProps>`
  z-index: 1;
  position: relative;

  // Red circle background. For RWD, guaranteed to maintain the 1:1 ratio.
  &:before {
    content: '';
    height: 0;
    margin: auto;
    padding-bottom: 100%;
    opacity: 0;
    border-radius: 100%;
    background-color: ${({ theme: { palette } }) => palette.select};
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  // for over the CSS specificity that on "<CalendarWrapper /> > button"
  && {
    ${({ isToday = false }) =>
      isToday &&
      css`
        color: ${({ theme: { palette } }) => palette.select};
      `}

    ${({ isSelectedDate }) =>
      isSelectedDate &&
      css`
        color: ${({ theme: { palette } }) => palette.background};
        &:before {
          opacity: 1;
        }
      `}
  }
`;
