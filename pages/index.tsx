import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

import Calendar from '@components/Calendar';
import DatePicker from '@components/DatePicker';

/* Styled Component */

const Box = styled.div`
  padding: 0.5rem 2rem;
  border-top: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    text-decoration: underline;
  }
`;

const Header = styled(Box)`
  border: 0;
  background-color: #eee;
`;

/* End */

const HomePage: NextPage = () => {
  const [calendarDate, setCalendarDate] = useState('');
  return (
    <>
      <Header>
        <h1>Demo</h1>
      </Header>
      <div>
        <Box>
          <h2>Calendar Component</h2>
          <Calendar
            display
            date={calendarDate}
            onSelect={(date) =>
              setCalendarDate(
                `${date.getFullYear()}-${
                  date.getMonth() + 1
                }-${date.getDate()}`,
              )
            }
          />
          <p>Selected Date: {calendarDate}</p>
        </Box>
        <Box>
          <h2>DatePicker Component</h2>
          <DatePicker />
        </Box>
      </div>
    </>
  );
};

export default HomePage;
