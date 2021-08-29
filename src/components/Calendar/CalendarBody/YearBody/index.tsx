import type { FC } from 'react';

import { BodyRow, Column4Wrapper } from '../../style';

const YearBody: FC = () => (
  <Column4Wrapper>
    <BodyRow>
      <button type="button">2019</button>
      <button type="button">2020</button>
      <button type="button">2021</button>
      <button type="button">2022</button>
    </BodyRow>
    <BodyRow>
      <button type="button">2023</button>
      <button type="button">2024</button>
      <button type="button">2025</button>
      <button type="button">2026</button>
    </BodyRow>
    <BodyRow>
      <button type="button">2027</button>
      <button type="button">2028</button>
      <button type="button">2029</button>
      <button type="button">2030</button>
    </BodyRow>
  </Column4Wrapper>
);

export default YearBody;
