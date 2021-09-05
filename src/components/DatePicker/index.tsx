import React, { useState } from 'react';
import type { FC } from 'react';

import Calendar from '@components/Calendar';

const DatePicker: FC = () => {
  const [dateString, setDateString] = useState('');

  return (
    <div>
      <input
        type="text"
        value={dateString}
        onChange={(event) => setDateString(event.target.value)}
      />
      <Calendar
        display
        date={dateString}
        onSelect={(date) =>
          setDateString(
            `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
          )
        }
      />
    </div>
  );
};

export default DatePicker;
