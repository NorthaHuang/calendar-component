import type { FC } from 'react';

import { CalendarIcon } from './CalendarIcon';
import { InputStyled, InputWrapper } from './style';
import type { InputProps } from './type';

const Input: FC<InputProps> = ({ value, onChange, onFocus }) => (
  <InputWrapper>
    <InputStyled
      type="text"
      value={value}
      onChange={(event) => onChange(event)}
      onFocus={(event) => onFocus(event)}
    />
    <CalendarIcon />
  </InputWrapper>
);
Input.displayName = 'Input';

export { Input };
