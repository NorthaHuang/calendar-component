import type { ChangeEventHandler, FocusEventHandler } from 'react';

export type InputProps = {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
};
