import type { FC } from 'react';

import { BodyRow, Column4Wrapper } from '../../style';

const MonthBody: FC = () => (
  <Column4Wrapper>
    <BodyRow>
      <button type="button">Jan</button>
      <button type="button">Feb</button>
      <button type="button">Mar</button>
      <button type="button">Apr</button>
    </BodyRow>
    <BodyRow>
      <button type="button">May</button>
      <button type="button">Jun</button>
      <button type="button">Jul</button>
      <button type="button">Aug</button>
    </BodyRow>
    <BodyRow>
      <button type="button">Sep</button>
      <button type="button">Oct</button>
      <button type="button">Nov</button>
      <button type="button">Dec</button>
    </BodyRow>
  </Column4Wrapper>
);

export default MonthBody;
