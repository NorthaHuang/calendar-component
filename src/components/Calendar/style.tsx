import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 12em;
  padding: 0.4em;
  border: 1px solid #000;
  font-family: sans-serif;
  /*
   * Change the whole calendar size proportionally.
   */
  font-size: 16px;
  display: inline-block;

  &,
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  b,
  button {
    /*
     * Change the CalendarBody "font-size"
     */
    font-size: 0.625em;
    text-align: center;
  }

  button {
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }
`;

export const BodyRow = styled.div`
  margin: 0.52em 0;
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
