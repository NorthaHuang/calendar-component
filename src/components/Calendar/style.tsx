import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 12em;
  padding: 0.57em 0.35em;
  border: 1px solid ${({ theme: { palette } }) => palette.text};
  color: ${({ theme: { palette } }) => palette.text};
  font-family: sans-serif;
  /*
   * Change the whole calendar size proportionally.
   */
  font-size: 16px;
  display: inline-block;
  background-color: ${({ theme: { palette } }) => palette.background};

  &,
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  b,
  button {
    color: inherit;
    /*
     * Change the CalendarBody "font-size"
     */
    font-size: 0.6875em;
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
